import express, { Request, Response } from "express";
import multer from "multer";
import cloudinary from "cloudinary";
import ShopList, { shopListType } from "../models/shopList";
import verifyToken from "../middleware/auth";
import { body } from "express-validator";
import verifyAdmin from "../middleware/verifyAdmin";

const router = express.Router();

// Configure Cloudinary
cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Configure Multer for file uploads
const storage = multer.memoryStorage();
const upload = multer({
    storage: storage,
    limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
});

// POST Route to Add a Shop Item
router.post(
    "/",
    verifyToken,
    verifyAdmin,
    [
        body("name").notEmpty().withMessage("Name is required"),
        body("description").notEmpty().withMessage("Description is required"),
        body("price")
            .notEmpty()
            .withMessage("Price is required")
            .bail()
            .isNumeric()
            .withMessage("Price must be a valid number"),
        body("SKU").notEmpty().withMessage("SKU is required"),
        body("tags")
            .isArray({ min: 1 })
            .withMessage("Tags must be an array with at least one item"),
        body("category").notEmpty().withMessage("Category is required"),
        body("availableSizes")
            .isArray({ min: 1 })
            .withMessage("Sizes must be an array with at least one item"),
        body("availableColors")
            .isArray({ min: 1 })
            .withMessage("Colors must be an array with at least one item"),
    ],

    upload.array("imageFiles", 5),
    async (req: Request, res: Response) => {
        try {
            const imageFiles = req.files as Express.Multer.File[];
            const newShopList: shopListType = req.body;

            //1. upload the images to cloundinary

            const imageUrls = await uploadImages(imageFiles);
            newShopList.imageUrls = imageUrls;
            newShopList.lastUpdated = new Date();
            newShopList.userId = req.userId;

            //3. save the new product in our database
            const shopList = new ShopList(newShopList);
            await shopList.save();
            //4. return a 201 status
            res.status(201).send(shopList);
        } catch (e) {
            console.log("Error creating product: ", e);
            res.status(500).send({ message: "Something went wrong" });
        }
    }
);



// Function to Upload Images to Cloudinary
async function uploadImages(imageFiles: Express.Multer.File[]) {
    const uploadPromises = imageFiles.map(async (image) => {
        const b64 = image.buffer.toString("base64");
        const dataURI = `data:${image.mimetype};base64,${b64}`;
        const uploadResponse = await cloudinary.v2.uploader.upload(dataURI);
        return uploadResponse.url;
    });

    //2. if upload was successful, add the URLs to the new hotel
    const imageUrls = await Promise.all(uploadPromises);
    return imageUrls;
}

export default router;
