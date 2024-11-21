import { useFormContext } from "react-hook-form";
import { ProductDataType } from "../../utilities/Types";

const AvailableColors = () => {
    const {
        register,
        setValue,
        watch,
        formState: { errors },
    } = useFormContext<ProductDataType>();

    const availableColors = watch("availableColors") || [];
    const colorOptions = ["#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FFA500", "#800080"]; // Example colors

    const toggleColorSelection = (color: string) => {
        const updatedColors = availableColors.includes(color)
            ? availableColors.filter((c) => c !== color)
            : [...availableColors, color];

        setValue("availableColors", updatedColors, { shouldValidate: true });
    };

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
                            checked={availableColors.includes(color)}
                            {...register("availableColors", {
                                validate: (colors) =>
                                    colors.length > 0 ||
                                    "Please select at least one color.",
                            })}
                            onChange={() => toggleColorSelection(color)}
                            className="hidden"
                        />
                        <span
                            className={`w-10 h-10 rounded-full border-2 transition ${availableColors.includes(color)
                                ? "border-green-500"
                                : "border-gray-300"
                                }`}
                            style={{ backgroundColor: color }}
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


