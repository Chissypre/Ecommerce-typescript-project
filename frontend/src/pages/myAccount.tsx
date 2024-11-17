import Login from "../components/Login"
import Register from "../components/Register"

const MyAccount = () => {
    return (
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 py-10 mx-auto ">
            <Login />
            <Register />
        </div>
    )
}

export default MyAccount
