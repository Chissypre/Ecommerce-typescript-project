import express, { Request, Response } from "express";
import { check, validationResult } from "express-validator";
import User from "../models/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import verifyToken from "../middleware/auth";

const router = express.Router();

router.post(
    "/login",
    [
        check("email", "Email is required").isEmail(),
        check(
            "password",
            "Password with 6 or more characters is required"
        ).isLength({
            min: 6,
        }),
    ],
    async (req: Request, res: Response) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ message: errors.array() });
        }
        const { email, password } = req.body;
        try {
            const user = await User.findOne({ email });
            if (!user) {
                res.status(400).json({ message: "Invalid Credentials" });
            }

            const isMatch = await bcrypt.compare(password, user!.password);
            if (!isMatch) {
                res.status(400).json({ message: "Invalid Password" });
            }
            const token = jwt.sign(
                { userId: user!.id, role: user!.role },
                process.env.JWT_SECRET_KEY as string,
                {
                    expiresIn: "1d",
                }
            );
            res.cookie("auth_token", token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                maxAge: 86400000,
            });
            res.status(200).json({ userId: user!._id, userName: user?.firstName });
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "Something went wrong" });
        }
    }
);


router.get("/validate-token", verifyToken, async (req: Request, res: Response) => {
    const userId = req.userId;
    const userRole = req.userRole;
    const user = await User.findById(userId);
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({
        userId: user._id,
        name: user.firstName,
        role: userRole
    });
});



router.post("/logout", (req: Request, res: Response) => {
    res.cookie("auth_token", "", {
        expires: new Date(0),
    });
    res.send();
});

export default router;
