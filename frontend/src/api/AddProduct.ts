import { API_BASE_URL } from "../utilities/constants";
import { shopListType } from "../utilities/Types";



export const httpAddMyProduct = async (productFormData: FormData) => {
    const response = await fetch(`${API_BASE_URL}/api/my-products`, {
        method: "POST",
        credentials: "include",
        body: productFormData,
    });
    if (!response.ok) {
        throw new Error("Failed to add product");
    }

    return response.json();
};

export const httpGetProduct = async (): Promise<shopListType[]> => {
    const response = await fetch(`${API_BASE_URL}/api/my-products`, {
        credentials: "include",
    });
    if (!response.ok) {
        throw new Error("Error fetching product");
    }

    return response.json();
};

export const httpGetProductById = async (
    productId: string
): Promise<shopListType> => {
    const response = await fetch(`${API_BASE_URL}/api/my-products/${productId}`, {
        credentials: "include",
    });
    if (!response.ok) {
        throw new Error("Error fetching product");
    }

    return response.json();
};

export const httpUpdateMyProductById = async (productFormData: FormData) => {
    const response = await fetch(
        `${API_BASE_URL}/api/my-products/${productFormData.get("productId")}`,
        {
            method: "PUT",
            body: productFormData,
            credentials: "include",
        }
    );
    if (!response.ok) {
        throw new Error("Failed to Update Product");
    }

    return response.json();
};
