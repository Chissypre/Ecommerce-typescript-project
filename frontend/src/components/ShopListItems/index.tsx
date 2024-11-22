import { httpGetMyProduct } from "../../api/AddProduct";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const ShopListItems = () => {
    const { data: productData } = useQuery("fetchMyProducts", httpGetMyProduct, {
        onError: (error: Error) => {
            toast.error(error.message);
        },
    });

    if (!productData || productData.length === 0) {
        return <span>No Product found</span>;
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            {productData.map((product) => (
                <Link
                    to={`/shop/${product._id}`} // Dynamic link to the product detail page
                    key={product._id}
                    className="block p-2 shadow-sm hover:shadow-md transition-shadow"
                >
                    <img
                        src={product.imageUrls[0]}
                        alt={product.name}
                        className="w-full h-48 object-cover mb-2 rounded-md"
                    />
                    <h3 className="text-lg font-semibold">{product.name}</h3>
                    <p className="text-sm text-gray-600">₦{product.price}</p>
                </Link>
            ))}
        </div>
    );
};

export default ShopListItems;
