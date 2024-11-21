import { API_BASE_URL } from "../utilities/constants";



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