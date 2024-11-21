import { useFormContext } from "react-hook-form";
import { ProductDataType } from "../../utilities/Types";


export const AvailableSizes = () => {
    const {
        register,
        setValue,
        watch,
        formState: { errors },
    } = useFormContext<ProductDataType>();

    const availableSizes = watch("availableSizes") || [];

    const toggleSizeSelection = (size: string) => {
        const updatedSizes = availableSizes.includes(size)
            ? availableSizes.filter((s) => s !== size)
            : [...availableSizes, size];
        setValue("availableSizes", updatedSizes, { shouldValidate: true });
    };

    return (
        <div>
            <h2 className="text-xl font-semibold mb-4">Available Sizes</h2>
            <div className="flex flex-wrap gap-2">
                {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
                    <label
                        key={size}
                        className="text-sm flex items-center gap-2 cursor-pointer"
                    >
                        <input
                            type="checkbox"
                            value={size}
                            checked={availableSizes.includes(size)}
                            {...register("availableSizes", {
                                validate: (sizes) =>
                                    sizes.length > 0 ||
                                    "Please select at least one size.",
                            })}
                            onChange={() => toggleSizeSelection(size)}
                            className="form-checkbox h-5 w-5 text-green-500"
                        />
                        {size}
                    </label>
                ))}
            </div>
            {errors.availableSizes && (
                <p className="text-red-500 text-sm mt-1">
                    {errors.availableSizes.message}
                </p>
            )}
        </div>
    );
};
