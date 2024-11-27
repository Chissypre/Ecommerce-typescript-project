

import { httpGetProduct } from "../../api/AddProduct";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

export const HomeSectionTwo = () => {
    const { data: productData } = useQuery("fetchProducts", httpGetProduct, {
        onError: (error: Error) => {
            toast.error(error.message);
        },
    });

    // Limit to the first four items
    const topPicks = productData?.slice(0, 4) || [];

    return (
        <div>
            <p className="text-2xl sm:text-3xl font-medium text-center pt-4 mt-4">Top Picks For You</p>
            <p className="text-base font-medium text-center text-textColorGrey pt-2 mt-2">
                Find a bright ideal to suit your taste with our great selection of suspension, floor, and table lights.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4 mt-2">
                {topPicks.length > 0 ? (
                    topPicks.map((product) => (
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
                    ))
                ) : (
                    <span className="text-center">No Top Picks found</span>
                )}
            </div>
            <div className="flex flex-col items-center space-y-4 w-full sm:w-1/2 lg:w-1/3 pb-3 mb-3 text-center mx-auto">
                <Link className="font-medium text-lg sm:text-xl" to="/shop">View More</Link>
                <hr className="w-20 border-t-2 border-black mx-auto" />
            </div>

        </div>
    );
};
