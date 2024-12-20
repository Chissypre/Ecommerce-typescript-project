import { useMutation, useQuery } from "react-query"
import { useNavigate, useParams } from "react-router-dom"
import { httpGetProductById, httpUpdateMyProductById } from "../api/AddProduct"
import { toast } from "react-toastify"
import AddProductForm from "../components/AddShopList"


const EditProduct = () => {
    const { productId } = useParams()
    const navigate = useNavigate();
    const { data: product } = useQuery("fetchProductById", () => httpGetProductById(productId || ''),
        {
            enabled: !!productId
        }
    )
    const { mutate, isLoading } = useMutation(httpUpdateMyProductById, {
        onSuccess: () => {
            toast.success("Product Updated");
            navigate("/shop");
        },
        onError: (error: Error) => {
            toast.error(error.message);
        },
    })
    const handleSave = (productFormData: FormData) => {

        mutate(productFormData)
    }
    return <AddProductForm product={product} onSave={handleSave} isLoading={isLoading} />
}
export default EditProduct
