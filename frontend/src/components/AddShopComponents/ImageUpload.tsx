import { useFormContext } from "react-hook-form";
import { ProductDataType } from "../../utilities/Types";

const ImageUpload = () => {
    const {
        watch,
        setValue,
        formState: { errors },
    } = useFormContext<ProductDataType>();

    // Watch the current state of image files in the form
    const existingImages = watch("imageFiles") || [];

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(e.target.files || []);
        const totalImages = [...existingImages, ...files];

        if (totalImages.length > 5) {
            return; // Prevent exceeding the limit
        }

        setValue("imageFiles", totalImages, { shouldValidate: true });
    };

    const handleDelete = (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
        index: number
    ) => {
        event.preventDefault();

        const updatedImages = existingImages.filter(
            (_: File, idx: number) => idx !== index
        );

        setValue("imageFiles", updatedImages, { shouldValidate: true });
    };

    return (
        <div>
            <h1 className="text-3xl font-bold mb-3">Images</h1>
            <div className="border rounded p-4 flex flex-col gap-4">
                {/* Image Upload Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-4">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <div
                            key={index}
                            className="relative w-full h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 border-2 border-dashed border-gray-300 rounded-md flex items-center justify-center bg-gray-100"
                        >
                            {existingImages[index] ? (
                                <>
                                    {/* Display uploaded image */}
                                    <img
                                        src={URL.createObjectURL(existingImages[index])}
                                        alt={`Uploaded ${index + 1}`}
                                        className="w-full h-full object-cover rounded-md"
                                    />
                                    <button
                                        onClick={(event) => handleDelete(event, index)}
                                        className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 text-white"
                                    >
                                        Delete
                                    </button>
                                </>
                            ) : (
                                <>
                                    {/* Upload Button */}
                                    <label
                                        htmlFor={`upload-image-${index}`}
                                        className="flex flex-col items-center justify-center text-gray-500 cursor-pointer"
                                    >
                                        <span className="text-xs sm:text-sm">Add Image</span>
                                        <input
                                            type="file"
                                            id={`upload-image-${index}`}
                                            accept="image/*"
                                            className="hidden"
                                            onChange={handleFileChange}
                                        />
                                    </label>
                                </>
                            )}
                        </div>
                    ))}
                </div>

                {/* Validation Error Message */}
                {errors.imageFiles && (
                    <span className="text-red-500 text-sm font-bold">
                        {errors.imageFiles.message}
                    </span>
                )}
            </div>
        </div>
    );
};

export default ImageUpload;
