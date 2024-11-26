import { useFormContext } from "react-hook-form";
import { productFormData } from "../../utilities/Types";
import { useState } from "react";

const ImageUpload = () => {
    const {
        register,
        watch,
        setValue,
        formState: { errors },
    } = useFormContext<productFormData>();
    const existingImageUrls = watch("imageUrls") || [];
    const existingImageFiles = watch("imageFiles") || [];

    const [previewImages, setPreviewImages] = useState<(string | null)[]>([null, null, null, null, null]);

    const handleImageUpload = (index: number, file: File | null) => {
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                const updatedPreviewImages = [...previewImages];
                updatedPreviewImages[index] = reader.result as string;
                setPreviewImages(updatedPreviewImages);

                // Update image files in the form state
                const updatedFiles = [...existingImageFiles];
                updatedFiles[index] = file;
                setValue(
                    "imageFiles",
                    updatedFiles.filter((img) => img !== null) as File[],
                    { shouldValidate: true }
                );
            };
            reader.readAsDataURL(file);
        }
    };


    const handleDelete = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, index: number) => {
        event.preventDefault();

        // Remove the deleted image from the previewImages state
        const updatedPreviewImages = [...previewImages];
        updatedPreviewImages[index] = null;  // Set the preview to null
        setPreviewImages(updatedPreviewImages);

        // Remove the deleted image from the existingImageUrls (form state)
        const updatedImageUrls = [...existingImageUrls];
        updatedImageUrls[index] = ""; // Clear the image URL
        setValue("imageUrls", updatedImageUrls, { shouldValidate: true });

        // Optionally, remove the corresponding file from the form state imageFiles if needed
        const updatedFiles = [...existingImageFiles];
        updatedFiles[index] = null as unknown as File;  // Clear the file
        setValue("imageFiles", updatedFiles.filter((img) => img !== null) as File[], { shouldValidate: true });
    };


    return (
        <div>
            <h1 className="text-3xl font-bold mb-3">Images</h1>
            <div className="border rounded p-4 flex flex-col gap-4">
                <div className="grid grid-cols-5 gap-4">
                    {[...Array(5)].map((_, index) => (
                        <div
                            key={index}
                            className={`relative flex items-center justify-center w-full h-32 border rounded-lg ${previewImages[index] || existingImageUrls[index] ? "" : "bg-gray-100"
                                }`}
                        >
                            {previewImages[index] || existingImageUrls[index] ? (
                                <div className="group relative w-full h-full">
                                    <img
                                        src={previewImages[index] || existingImageUrls[index]}
                                        alt={`Uploaded Image ${index + 1}`}
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                    <button
                                        onClick={(event) => handleDelete(event, index)}
                                        className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 text-white rounded-lg"
                                    >
                                        Delete
                                    </button>

                                </div>
                            ) : (
                                <label className="text-gray-400 text-sm cursor-pointer">
                                    Slot {index + 1}
                                    <input
                                        type="file"
                                        accept="image/*"
                                        className="hidden"
                                        onChange={(event) =>
                                            handleImageUpload(
                                                index,
                                                event.target.files ? event.target.files[0] : null
                                            )
                                        }
                                    />
                                </label>
                            )}
                        </div>
                    ))}
                </div>
                <input
                    type="file"
                    multiple
                    accept="image/*"
                    className="hidden"
                    {...register("imageFiles", {
                        validate: (imageFiles) => {
                            const totalLength = imageFiles.length + existingImageUrls.length;
                            if (totalLength === 0) {
                                return "At least one image should be added";
                            }
                            if (totalLength > 5) {
                                return "Total number of images cannot exceed 5";
                            }
                            return true;
                        },
                    })}
                />
            </div>
            {errors.imageFiles && (
                <span className="text-red-500 text-sm font-bold">
                    {errors.imageFiles.message}
                </span>
            )}
        </div>
    );
};

export default ImageUpload;
