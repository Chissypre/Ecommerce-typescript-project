import { useFormContext } from "react-hook-form";
import { productFormData } from "../../utilities/Types";
import { sizeTypes } from "../../config/productConfig";


export const AvailableSizes = () => {
    const { register, formState: { errors } } = useFormContext<productFormData>()

    return (
        <div>
            <h2 className="text-xl font-semibold mb-4">Available Sizes</h2>
            <div className="flex flex-wrap gap-2">
                {sizeTypes.map((size) => (
                    <label className="text-sm flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" value={size}
                            className="form-checkbox h-5 w-5 text-green-500"
                            {...register("availableSizes", {
                                validate: (availableSizes) => {
                                    if (availableSizes && availableSizes.length > 0) {
                                        return true
                                    } else {
                                        return "At least one size is required"
                                    }
                                },
                            })}
                        />
                        {size}
                    </label>
                ))}
            </div>
            {errors.availableSizes && (
                <span className="text-red-500 text-sm mt-1">{errors.availableSizes.message}</span>
            )}

        </div>
    );
};
