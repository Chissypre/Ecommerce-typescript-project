import { NextFunction, Request, Response } from "express";


declare global {
    namespace Express {
        interface Request {
            userId: string;
            userRole: string;
        }
    }
}

const verifyAdmin = (req: Request, res: Response, next: NextFunction) => {
    if (req.userRole !== "admin") {
        return res.status(403).json({ message: "Access forbidden: Admins only" });
    }
    next();
};

export default verifyAdmin;