export type RegisterFormData = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
    role?: "user" | "admin";
};


export type SignInFormData = {
    email: string;
    password: string;
    role?: "user" | "admin";
}

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

export type productFormData = {
    name: string;
    description: string;
    price: number;
    category: string;
    SKU: string;
    tags: string[];
    availableSizes: string[];
    availableColors: string[];
    imageFiles: FileList;
    imageUrls: string[];
};
