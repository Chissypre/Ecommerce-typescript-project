import { RegisterFormData } from "../utilities/Types";
import { API_BASE_URL } from "../utilities/constants"

export const httpRegister = async (formData: RegisterFormData) => {
    const response = await fetch(`${API_BASE_URL}/api/users/register`, {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    });

    const responseBody = await response.json();
    if (!response.ok) {
        throw new Error(responseBody.message);
    }
};

export const validateToken = async () => {
    const response = await fetch(`${API_BASE_URL}/api/auth/validate-token`, {
        credentials: "include",
    });
    if (!response.ok) {
        throw new Error("Token invalid");
    }
    return response.json();
};
