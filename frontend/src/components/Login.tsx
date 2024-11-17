import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import { httpLogin } from "../api/signin";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import { SignInFormData } from "../utilities/Types";

const Login = () => {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const location = useLocation();

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm<SignInFormData>();

    const mutation = useMutation(httpLogin, {
        onSuccess: async () => {
            await queryClient.invalidateQueries("validateToken");
            toast.success("Login successful!");
            navigate(location.state?.from?.pathname || "/");
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
            className="py-3 my-3 mx-auto max-w-md md:max-w-lg lg:max-w-xl px-4"
            onSubmit={onSubmit}
        >
            <h1 className="text-xl md:text-3xl lg:text-4xl font-semibold py-3 text-center">
                Log In
            </h1>

            <label className="font-medium text-xs my-2 mx-1 block">
                Email address
                <input
                    type="email"
                    className="w-full h-10 bg-white border border-gray-400 rounded-md px-4 py-2 text-gray-800 focus:ring focus:ring-blue-300 transition-all duration-200"
                    {...register("email", { required: "This field is required" })}
                />
                {errors.email && (
                    <span className="text-red-500">{errors.email.message}</span>
                )}
            </label>

            <label className="font-medium text-xs my-2 mx-1 block">
                Password
                <input
                    type="password"
                    className="w-full h-10 bg-white border border-gray-400 rounded-md px-4 py-2 text-gray-800 focus:ring focus:ring-blue-300 transition-all duration-200"
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

            <div className="flex items-center space-x-2 mx-2 my-3">
                <input
                    type="checkbox"
                    className="w-4 h-4 bg-white border border-gray-400 rounded-xl"
                />
                <p className="text-xs md:text-sm my-2">Remember me</p>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
                <button
                    className="w-full md:w-1/3 lg:w-1/4  text-black border border-gray-400 rounded-xl text-sm py-2 font-normal hover:bg-gray-800 transition-all duration-200"
                >
                    Log In
                </button>
                <p className="font-light text-xs md:text-sm mx-2">
                    Lost Your Password?
                </p>
            </div>
        </form>
    );
};

export default Login;
