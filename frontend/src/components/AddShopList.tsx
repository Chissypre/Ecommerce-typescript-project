import { useForm, FormProvider } from "react-hook-form";
import { AvailableSizes } from "./AddShopComponents/AvailableSizes";
import AvailableColors from "./AddShopComponents/AvailableColors";
import ImageUpload from "./AddShopComponents/ImageUpload";
import { productFormData, shopListType } from "../utilities/Types";
import { useEffect } from "react";

type Props = {
    product?: shopListType;
    onSave: (productFormData: FormData) => void;
    isLoading: boolean;
};

const AddProductForm = ({ onSave, isLoading, product }: Props) => {
    const formMethods = useForm<productFormData>();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = formMethods;

    useEffect(() => {
        if (product) {
            reset(product);
        }
    }, [product, reset]);
    const onSubmit = handleSubmit((data: productFormData) => {
        const formData = new FormData();

        if (product) {
            formData.append("productId", product._id);
        }

        formData.append("name", data.name);
        formData.append("description", data.description);
        formData.append("price", data.price.toString());
        formData.append("SKU", data.SKU);

        // Serialize JSON fields
        formData.append("tags", JSON.stringify(data.tags));
        formData.append("category", data.category);

        data.availableSizes.forEach((size, index) => {
            formData.append(`availableSizes[${index}]`, size);
        });
        data.availableColors.forEach((color, index) => {
            formData.append(`availableColors[${index}]`, color);
        });

        // Append files
        if (data.imageUrls) {
            data.imageUrls.forEach((url, index) => {
                formData.append(`imageUrls[${index}]`, url)
            })
        }

        Array.from(data.imageFiles).forEach((imageFile) => {
            formData.append(`imageFiles`, imageFile)

        })

        onSave(formData);
    });

    return (
        <FormProvider {...formMethods}>
            <form
                onSubmit={onSubmit}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 px-4 py-6 sm:px-8 lg:px-16"
            >
                <div className="space-y-6">
                    {/* General Information */}
                    <div>
                        <h2 className="text-xl font-semibold mb-4">General Information</h2>
                        <div>
                            <label className="block font-medium mb-2">Product Name</label>
                            <input
                                {...register("name", { required: "Product name is required" })}
                                className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-green-300"
                                placeholder="Enter product name"
                            />
                            {errors.name && (
                                <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                            )}
                        </div>

                        <div>
                            <label className="block font-medium mb-2">Description</label>
                            <textarea
                                {...register("description", { required: "Description is required" })}
                                className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-green-300"
                                placeholder="Enter product description"
                            />
                            {errors.description && (
                                <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>
                            )}
                        </div>
                    </div>

                    {/* Pricing and SKU */}
                    <div>
                        <h2 className="text-xl font-semibold mb-4">Pricing and SKU</h2>
                        <div>
                            <label className="block font-medium mb-2">Price</label>
                            <input
                                type="number"
                                {...register("price", { required: "Price is required", min: 0 })}
                                className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-green-300"
                                placeholder="Enter price"
                            />
                            {errors.price && (
                                <p className="text-red-500 text-sm mt-1">{errors.price.message}</p>
                            )}
                        </div>

                        <div>
                            <label className="block font-medium mb-2">SKU</label>
                            <input
                                {...register("SKU", { required: "SKU is required" })}
                                className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-green-300"
                                placeholder="Enter SKU"
                            />
                            {errors.SKU && (
                                <p className="text-red-500 text-sm mt-1">{errors.SKU.message}</p>
                            )}
                        </div>
                    </div>

                    {/* Tags */}
                    <div>
                        <h2 className="text-xl font-semibold mb-4">Tags</h2>
                        <input
                            {...register("tags", { required: "At least one tag is required" })}
                            className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-green-300"
                            placeholder="Enter tags, comma separated"
                        />
                        {errors.tags && (
                            <p className="text-red-500 text-sm mt-1">{errors.tags.message}</p>
                        )}
                    </div>
                    {/* Category */}
                    <div>
                        <h2 className="text-xl font-semibold mb-4">Category</h2>
                        <select
                            {...register("category", { required: "Category is required" })}
                            className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-green-300"
                        >
                            <option value="living-room">Living Room</option>
                            <option value="bedroom">Bedroom</option>
                            <option value="dining-room">Dining Room</option>
                            <option value="office">Office</option>
                            <option value="outdoor">Outdoor</option>
                            <option value="kids-room">Kids' Room</option>
                            <option value="decor">Decor</option>
                        </select>
                        {errors.category && (
                            <p className="text-red-500 text-sm mt-1">{errors.category.message}</p>
                        )}
                    </div>
                </div>

                {/* RIGHT COLUMN */}
                <div className="space-y-6">
                    {/* Available Sizes */}
                    <AvailableSizes />

                    {/* Available Colors */}
                    <AvailableColors />

                    {/* Image Upload */}
                    <div className="flex flex-col">
                        <h2 className="text-xl font-semibold mb-4">Upload Images</h2>
                        <div className="w-full max-w-md mx-auto">
                            <ImageUpload />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="col-span-2 mt-6 text-right">
                        <button
                            disabled={isLoading}
                            type="submit"
                            className="bg-yellow-200 text-black p-2 font-bold hover:bg-yellow-100 text-xl disabled:bg-gray-500"
                        >
                            {isLoading ? "Saving..." : "Save"}
                        </button>
                    </div>
                </div>
            </form>
        </FormProvider>
    );
};

export default AddProductForm;
