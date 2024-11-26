import { useFormContext } from "react-hook-form";
import { productFormData } from "../../utilities/Types";
import { colorOptions } from "../../config/productConfig";

const AvailableColors = () => {
    const {
        register,
        watch,
        formState: { errors },
    } = useFormContext<productFormData>();

    const colorWatch = watch("availableColors") || []; // Default to an empty array if undefined

    return (
        <div>
            <h2 className="text-xl font-semibold mb-4">Available Colors</h2>
            <div className="flex flex-wrap gap-4">
                {colorOptions.map((color) => (
                    <label
                        key={color}
                        className="cursor-pointer flex items-center gap-2"
                    >
                        <input
                            type="checkbox"
                            value={color}
                            className="hidden peer"
                            {...register("availableColors", {
                                validate: (availableColors) => {
                                    if (availableColors && availableColors.length > 0) {
                                        return true;
                                    } else {
                                        return "At least one color is required";
                                    }
                                },
                            })}
                        />
                        <span
                            className={`w-10 h-10 rounded-full border-2 transition ${colorWatch.includes(color)
                                ? "border-green-500"
                                : "border-gray-300"
                                }`}
                            style={{ backgroundColor: color }} // Dynamically set background color
                        ></span>
                    </label>
                ))}
            </div>
            {errors.availableColors && (
                <p className="text-red-500 text-sm mt-1">
                    {errors.availableColors.message}
                </p>
            )}
        </div>
    );
};

export default AvailableColors;
