import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import { httpLogout } from "../api/signin";

interface SignOutButtonProps {
    bgColor: string;
}

const SignOutButton = ({ bgColor }: SignOutButtonProps) => {
    const queryClient = useQueryClient();
    const mutation = useMutation(httpLogout, {
        onSuccess: async () => {

            await queryClient.invalidateQueries("validateToken");
            toast.success("Signed Out");
        },
        onError: (error: Error) => {
            toast.error(error.message);
        },
    });

    const handleClick = () => {
        mutation.mutate();
    };

    return (
        <button
            onClick={handleClick}
            className={`text-black md:px-1 font-bold ${bgColor} hover:bg-gray-100 whitespace-nowrap`}
        >
            Sign Out
        </button>
    );
};

export default SignOutButton;
