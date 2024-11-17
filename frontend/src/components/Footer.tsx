import { Link } from "react-router-dom";
import Footerbackground from "../assets/footerbackground.svg";

const Footer = () => {
    return (
        <div className="bg-white">
            {/* Background Image Section */}
            <div className="relative w-full h-auto overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${Footerbackground})` }}
                />

                <div className="relative z-10 flex justify-center items-center py-12 sm:py-20 md:py-24 px-4 sm:px-8 max-w-screen-lg mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-12 text-left">
                        <div>
                            <h1 className="text-black font-medium text-2xl md:text-3xl lg:text-4xl">Free Delivery</h1>
                            <p className="text-gray-400 font-normal text-base md:text-lg">For all orders over $50, consectetur <br /> adipiscing elit.</p>
                        </div>
                        <div>
                            <h1 className="text-black font-medium text-2xl md:text-3xl lg:text-4xl">90 Days Return</h1>
                            <p className="text-gray-400 font-normal text-base md:text-lg">If goods have problems, consectetur <br /> adipiscing elit.</p>
                        </div>
                        <div>
                            <h1 className="text-black font-medium text-2xl md:text-3xl lg:text-4xl">Secure Payment</h1>
                            <p className="text-gray-400 font-normal text-base md:text-lg">100% secure payment, consectetur <br /> adipiscing elit.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Links Section */}
            <div className="max-w-screen-lg mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 sm:gap-8 px-4 sm:px-8 md:px-12 py-8 md:py-16 text-left">
                <div className="mt-8 md:mt-28">
                    <p className="text-gray-400 font-normal text-sm">400 University Drive Suite 200 Coral Gables, FL 33134 USA</p>
                </div>

                <div className="flex flex-col space-y-2 py-4 md:py-14 text-sm md:text-base">
                    <Link to="/links" className="text-gray-400 font-medium py-1">Links</Link>
                    <Link to="/home" className="text-black font-medium py-1">Home</Link>
                    <Link to="/shop" className="text-black font-medium py-1">Shop</Link>
                    <Link to="/about" className="text-black font-medium py-1">About</Link>
                    <Link to="/contact" className="text-black font-medium py-1">Contact</Link>
                </div>

                <div className="flex flex-col space-y-2 py-4 md:py-14 text-sm md:text-base">
                    <Link to="/help" className="text-gray-400 font-medium py-1">Help</Link>
                    <Link to="/payment-options" className="text-black font-medium py-1">Payment Options</Link>
                    <Link to="/returns" className="text-black font-medium py-1">Returns</Link>
                    <Link to="/privacy-policies" className="text-black font-medium py-1">Privacy Policies</Link>
                </div>

                <div className="py-4 md:py-14 text-sm lg:mx-2">
                    <Link to="/newsletter" className="text-gray-400 font-medium py-4">Newsletter</Link>
                    <div className="flex flex-col items-center py-4">
                        <Link to="/mail" className="text-gray-400">Enter Your Email Address</Link>
                        <hr className="w-32  bg-black h-px border-none my-2" />
                    </div>
                </div>

                <div className="flex flex-col items-center py-4 md:my-24 text-sm lg:mx-2 ">
                    <Link to="/subscribe" className="font-medium text-black">SUBSCRIBE</Link>
                    <hr className="w-32  bg-black h-px border-none my-2" />
                </div>
            </div>

            {/* Footer Text */}
            <hr className="bg-gray-200 h-px w-full mx-auto my-2" />
            <p className="text-center text-gray-400 py-4 text-sm md:text-base">2022 Meubel House. All rights reserved</p>
        </div>
    );
}

export default Footer;
