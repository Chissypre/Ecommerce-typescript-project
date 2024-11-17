import { Header } from "../components/Header"
import Hero from "../components/Hero"
import Footer from "../components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Props {
    children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className="mt-16"> {/* Add top margin equal to header height */}
                <Hero />
                <div className="toast-container">
                    <ToastContainer
                        position="top-right"
                        autoClose={3000}
                        hideProgressBar
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        toastClassName="rounded-xl border-2"
                    />
                </div>
                {children}
            </div>
            <Footer />
        </div>
    );
};

export default Layout;
