import mongoose from "mongoose";

export type shopListType = {
    _id: string;
    userId: string;
    name: string;
    price: number;
    imageUrls: string[];
    description: string; // Short product description
    rating: number; // Average rating (e.g., 4.5)
    reviewCount: number; // Number of customer reviews
    availableSizes: string[]; // Available sizes (e.g., ["L", "XL", "XS"])
    availableColors: string[]; // Available colors (e.g., ["black", "purple", "gold"])
    SKU: string; // Product SKU (Stock Keeping Unit)
    category: string; // Product category (e.g., "Sofas")
    tags: string[]; // Related tags (e.g., ["Sofa", "Chair", "Home", "Shop"])
    stock: number; // Optional: Track the available stock
    lastUpdated: Date;
};



const shopListSchema = new mongoose.Schema<shopListType>({
    userId: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    imageUrls: [{ type: String, required: true }],
    description: { type: String, required: true },
    rating: { type: Number, required: true, default: 0 }, // Default rating
    reviewCount: { type: Number, required: true, default: 0 }, // Default review count
    availableSizes: [{ type: String, required: true }], // Array of sizes
    availableColors: [{ type: String, required: true }], // Array of colors
    SKU: { type: String, required: true },
    category: { type: String, required: true },
    tags: [{ type: String, required: true }],
    stock: { type: Number, default: 0 }, // Optional stock tracking
    lastUpdated: { type: Date, required: true },
});

const ShopList = mongoose.model<shopListType>("shopList", shopListSchema);

export default ShopList;
