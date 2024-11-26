import { useMutation } from "react-query";
import { toast } from "react-toastify";
import { httpAddMyProduct } from "../api/AddProduct";
import AddProductForm from "../components/AddShopList";
import { useNavigate } from "react-router-dom";

const AddMyProduct = () => {
    const navigate = useNavigate();

    const { mutate, isLoading } = useMutation(httpAddMyProduct, {
        onSuccess: () => {
            toast.success("Product Saved");
            navigate("/shop");
        },
        onError: (error: Error) => {
            toast.error(error.message);
        },
    });

    const handleSave = (productFormData: FormData) => {
        mutate(productFormData);
    };

    return (
        <AddProductForm onSave={handleSave} isLoading={isLoading} />
    );
};

export default AddMyProduct;
