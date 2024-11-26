import { Link, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { httpGetProductById } from "../../api/AddProduct";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, Key } from "react";
import { useAppContext } from "../../contexts/AppContext";


const ShopListDetail = () => {
    const { isAdmin } = useAppContext();
    const { productId } = useParams();
    const { data: product } = useQuery("fetchProductById", () => httpGetProductById(productId as string), {
        enabled: !!productId
    }
    )
    if (!product) {
        return <>
        </>
    }

    return (
        <div className="container mx-auto p-4 flex flex-col lg:flex-row gap-8 overflow-x-hidden">
            {/* Left Section: Image Gallery */}
            <div className="flex flex-col space-y-4 lg:w-1/4">
                <div className="grid grid-cols-1 gap-4">
                    {product.imageUrls?.slice(0, 4).map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Thumbnail ${index + 1}`}
                            className="rounded-lg object-cover border border-gray-300 hover:scale-105 duration-200"
                        />
                    ))}
                </div>
            </div>

            {/* Main Image */}
            <div className="w-full lg:w-1/2 my-auto">
                <img
                    src={product.imageUrls?.[4] || product.imageUrls?.[0]} // Fallback to the first image if the 5th one is missing
                    alt="Main Product"
                    className="w-full h-auto rounded-lg object-cover"
                />
            </div>

            {/* Right Section: Product Details */}
            <div className="w-full lg:w-1/2 space-y-6 overflow-y-auto max-h-screen">
                <h1 className="text-3xl font-semibold">{product.name}</h1>
                <p className="text-gray-600 text-lg mt-2">Rs. {product.price}</p>

                <div className="flex items-center space-x-2">
                    <div className="flex">
                        {Array.from({ length: product.rating || 4 }).map((_, idx) => (
                            <svg
                                key={idx}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                className="w-5 h-5 text-yellow-500"
                            >
                                <path d="M12 .587l3.668 7.57L24 9.75l-6 5.851L19.336 24 12 20.475 4.664 24 6 15.601 0 9.75l8.332-1.593z" />
                            </svg>
                        ))}
                    </div>
                    <span className="text-gray-500">
                        ({product.reviewCount || 0} Customer Reviews)
                    </span>
                </div>

                <p className="text-gray-700">{product.description}</p>

                {/* Size Selector */}
                {product?.availableSizes && (
                    <div>
                        <h3 className="text-lg font-medium text-gray-400">Size</h3>
                        <div className="flex space-x-2 mt-2">
                            {(
                                typeof product.availableSizes === "string"
                                    ? JSON.parse(product.availableSizes) // Parse if it's a string
                                    : Array.isArray(product.availableSizes) && typeof product.availableSizes[0] === "string" && product.availableSizes[0].startsWith("[")
                                        ? JSON.parse(product.availableSizes[0]) // Parse if the first element is a stringified JSON
                                        : product.availableSizes
                            ).map((size: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined, index: Key | null | undefined) => (
                                <button
                                    key={index}
                                    className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-200 bg-amber-50 focus:bg-amber-100"
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>
                )}


                {/* Color Selector */}
                {product?.availableColors && (
                    <div>
                        <h3 className="text-lg font-medium text-gray-400">Color</h3>
                        <div className="flex space-x-4 mt-2">
                            {(
                                typeof product.availableColors === "string"
                                    ? JSON.parse(product.availableColors) // Parse if it's a string
                                    : Array.isArray(product.availableColors) && typeof product.availableColors[0] === "string" && product.availableColors[0].startsWith("[")
                                        ? JSON.parse(product.availableColors[0]) // Parse if the first element is a stringified JSON
                                        : product.availableColors
                            ).map((color: any, idx: Key | null | undefined) => (
                                <button
                                    key={idx}
                                    className={`w-8 h-8 rounded-full border border-gray-300 hover:scale-110`}
                                    style={{ backgroundColor: color }} // Set background color dynamically
                                >
                                </button>
                            ))}
                        </div>
                    </div>
                )}


                {/* Add to Cart Section */}
                <div className="flex items-center space-x-4">
                    <div className="flex items-center border border-gray-300 rounded-lg">
                        <button className="px-4 py-2 hover:bg-gray-100">-</button>
                        <span className="px-4">1</span>
                        <button className="px-4 py-2 hover:bg-gray-100">+</button>
                    </div>
                    <button className="px-6 py-2 text-black rounded-lg hover:bg-gray-800 border border-black">
                        Add to Cart
                    </button>
                </div>

                {/* Product Meta Info */}
                <div className="text-gray-500">
                    <p>
                        <span className="font-medium">SKU:</span> {product.SKU || "N/A"}
                    </p>
                    <p>
                        <span className="font-medium">Category:</span> {product.category || "Uncategorized"}
                    </p>
                    <p>
                        <span className="font-medium">Tags:</span>{" "}
                        {product.tags?.join(", ") || "No tags available"}
                    </p>
                </div>

                {/* Share Options */}
                <div className="flex space-x-4">
                    <button>
                        <i className="fab fa-facebook-f text-xl text-gray-600"></i>
                    </button>
                    <button>
                        <i className="fab fa-linkedin-in text-xl text-gray-600"></i>
                    </button>
                    <button>
                        <i className="fab fa-twitter text-xl text-gray-600"></i>
                    </button>
                    {isAdmin && (
                        <Link to={`/edit-product/${product._id}`} className="flex bg-amber-300 text-black hover:text-gray-400 text-xl font-bold px-3 py-2 hover:bg-amber-200 rounded-md border border-gray-300">Edit Product</Link>
                    )}
                </div>
            </div>

        </div>
    );
};

export default ShopListDetail;
