import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import { httpRegister } from "../api/register";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { RegisterFormData } from "../utilities/Types";

const Register = () => {
    const navigate = useNavigate();
    const {
        register,
        watch,
        handleSubmit,
        formState: { errors },
    } = useForm<RegisterFormData>();
    const queryClient = useQueryClient();
    const mutation = useMutation(httpRegister, {
        onSuccess: async () => {
            await queryClient.invalidateQueries("validateToken");
            toast.success("Registration successful!");
            navigate("/");
        },
        onError: (error: Error) => {
            toast.error(error.message);
        },
    });

    const onSubmit = handleSubmit((data) => {
        mutation.mutate(data);
    });

    return (
        <form
            className="max-w-md mx-auto p-4 md:max-w-lg lg:max-w-xl space-y-6"
            onSubmit={onSubmit}
        >
            <h1 className="text-xl font-semibold md:text-3xl lg:text-4xl text-center">
                Register
            </h1>

            <div className="space-y-4">
                <div className="flex flex-col md:flex-row gap-4">
                    <label className="flex-1 text-xs font-medium">
                        First Name
                        <input
                            className="w-full h-10 bg-white border border-gray-400 rounded-md px-4 py-2 text-gray-800 focus:ring focus:ring-blue-300"
                            {...register("firstName", { required: "This field is required" })}
                        />
                        {errors.firstName && (
                            <span className="text-red-500">{errors.firstName.message}</span>
                        )}
                    </label>
                    <label className="flex-1 text-xs font-medium">
                        Last Name
                        <input
                            className="w-full h-10 bg-white border border-gray-400 rounded-md px-4 py-2 text-gray-800 focus:ring focus:ring-blue-300"
                            {...register("lastName", { required: "This field is required" })}
                        />
                        {errors.lastName && (
                            <span className="text-red-500">{errors.lastName.message}</span>
                        )}
                    </label>
                </div>

                <label className="text-xs font-medium block">
                    Email
                    <input
                        type="email"
                        className="w-full h-10 bg-white border border-gray-400 rounded-md px-4 py-2 text-gray-800 focus:ring focus:ring-blue-300"
                        {...register("email", { required: "This field is required" })}
                    />
                    {errors.email && (
                        <span className="text-red-500">{errors.email.message}</span>
                    )}
                </label>

                <label className="text-xs font-medium block">
                    Password
                    <input
                        type="password"
                        className="w-full h-10 bg-white border border-gray-400 rounded-md px-4 py-2 text-gray-800 focus:ring focus:ring-blue-300"
                        {...register("password", {
                            required: "This field is required",
                            minLength: {
                                value: 6,
                                message: "Password must be at least 6 characters",
                            },
                        })}
                    />
                    {errors.password && (
                        <span className="text-red-500">{errors.password.message}</span>
                    )}
                </label>

                <label className="text-xs font-medium block">
                    Confirm Password
                    <input
                        type="password"
                        className="w-full h-10 bg-white border border-gray-400 rounded-md px-4 py-2 text-gray-800 focus:ring focus:ring-blue-300"
                        {...register("confirmPassword", {
                            validate: (val) => {
                                if (!val) return "This field is required";
                                if (watch("password") !== val) return "Passwords do not match";
                            },
                        })}
                    />
                    {errors.confirmPassword && (
                        <span className="text-red-500">{errors.confirmPassword.message}</span>
                    )}
                </label>
            </div>

            <div className="text-xs text-gray-600 space-y-2">
                <p>
                    A link to set a new password will be sent to your email address.
                </p>
                <p>
                    Your personal data will be used to support your experience throughout
                    this website, to manage access to your account, and for other purposes
                    described in our <b>privacy policy</b>.
                </p>
            </div>

            <button
                className="w-full md:w-1/3 lg:w-1/4  text-black border border-gray-400 rounded-xl text-sm py-2 font-normal hover:bg-gray-800 transition-all duration-200"
            >
                Register
            </button>
        </form>
    );
};

export default Register;
