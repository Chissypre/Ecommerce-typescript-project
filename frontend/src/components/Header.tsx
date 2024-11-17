import { Link } from "react-router-dom";
import { useState } from "react";
import { useAppContext } from "../contexts/AppContext";
import SignOutButton from "./SignOutButton";

export const Header = () => {
    const { isLoggedIn, userName } = useAppContext();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="fixed top-0 left-0 w-full bg-white shadow-md z-50 h-16 px-4 flex justify-between items-center">
            {/* Links for desktop view */}
            <div className="hidden md:flex flex-col items-center md:flex-row md:space-x-8 justify-center flex-grow ">

                <Link to="/home" className="text-sm text-black px-2">Home</Link>
                <Link to="/shop" className="text-sm text-black px-2">Shop</Link>
                <Link to="/about" className="text-sm text-black px-2">About</Link>
                <Link to="/contact" className="text-sm text-black px-2">Contact</Link>


            </div>
            {/* Hamburger Menu Button for mobile - on the left */}
            <button
                className="md:hidden flex items-center md:px-2"
                onClick={toggleMenu}
            >
                <svg
                    className="w-6 h-6 text-black"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </button>

            <div className="flex items-center space-x-6 justify-end ">
                {isLoggedIn && (
                    <p className="flex flex-col items-center whitespace-nowrap">
                        <svg
                            width="23"
                            height="18"
                            viewBox="0 0 24 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M21.3335 9.99999V4.16666H23.6668V11.1667H21.3335M21.3335 15.8333H23.6668V13.5H21.3335M9.66683 11.1667C12.7818 11.1667 19.0002 12.73 19.0002 15.8333V19.3333H0.333496V15.8333C0.333496 12.73 6.55183 11.1667 9.66683 11.1667ZM9.66683 0.666656C10.9045 0.666656 12.0915 1.15832 12.9667 2.03349C13.8418 2.90866 14.3335 4.09565 14.3335 5.33332C14.3335 6.571 13.8418 7.75799 12.9667 8.63315C12.0915 9.50832 10.9045 9.99999 9.66683 9.99999C8.42915 9.99999 7.24217 9.50832 6.367 8.63315C5.49183 7.75799 5.00016 6.571 5.00016 5.33332C5.00016 4.09565 5.49183 2.90866 6.367 2.03349C7.24217 1.15832 8.42915 0.666656 9.66683 0.666656ZM9.66683 13.3833C6.20183 13.3833 2.55016 15.0867 2.55016 15.8333V17.1167H16.7835V15.8333C16.7835 15.0867 13.1318 13.3833 9.66683 13.3833ZM9.66683 2.88332C9.01705 2.88332 8.39388 3.14145 7.93442 3.60091C7.47495 4.06038 7.21683 4.68354 7.21683 5.33332C7.21683 5.9831 7.47495 6.60627 7.93442 7.06573C8.39388 7.5252 9.01705 7.78332 9.66683 7.78332C10.3166 7.78332 10.9398 7.5252 11.3992 7.06573C11.8587 6.60627 12.1168 5.9831 12.1168 5.33332C12.1168 4.68354 11.8587 4.06038 11.3992 3.60091C10.9398 3.14145 10.3166 2.88332 9.66683 2.88332Z"
                                fill="black"
                            />
                        </svg>
                        Hi {userName}!

                    </p>
                )}
                <svg width="23" height="18" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.5002 23.5L18.2665 18.257M21.1668 11.25C21.1668 13.8801 20.122 16.4024 18.2623 18.2622C16.4026 20.1219 13.8802 21.1667 11.2502 21.1667C8.6201 21.1667 6.09776 20.1219 4.23802 18.2622C2.37828 16.4024 1.3335 13.8801 1.3335 11.25C1.3335 8.61995 2.37828 6.0976 4.23802 4.23787C6.09776 2.37813 8.6201 1.33334 11.2502 1.33334C13.8802 1.33334 16.4026 2.37813 18.2623 4.23787C20.122 6.0976 21.1668 8.61995 21.1668 11.25V11.25Z" stroke="black" stroke-width="2" stroke-linecap="round" />
                </svg>
                {isLoggedIn ? (
                    <>

                        <SignOutButton />
                    </>
                ) : (
                    <Link
                        to="/sign-In"
                        className="flex items-center text-black px-3 font-bold hover:bg-gray-100 bg-white"
                    >
                        Sign In
                    </Link>
                )}
                <svg width="23" height="18" viewBox="0 0 26 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24.2354 16.1926H7.95225L8.76982 14.5273L22.3542 14.5027C22.8136 14.5027 23.2073 14.1746 23.2894 13.7207L25.1706 3.19062C25.2198 2.91445 25.146 2.63008 24.9655 2.41406C24.8763 2.30775 24.7651 2.22211 24.6395 2.16309C24.5139 2.10407 24.377 2.07308 24.2382 2.07227L6.95693 2.01484L6.80928 1.32031C6.71631 0.877344 6.31709 0.554688 5.86318 0.554688H1.63857C1.38258 0.554688 1.13707 0.656381 0.95605 0.837398C0.775034 1.01841 0.67334 1.26393 0.67334 1.51992C0.67334 1.77592 0.775034 2.02143 0.95605 2.20245C1.13707 2.38346 1.38258 2.48516 1.63857 2.48516H5.08115L5.72646 5.55312L7.31514 13.2449L5.26982 16.5836C5.16361 16.727 5.09963 16.8972 5.08514 17.075C5.07064 17.2528 5.1062 17.4312 5.18779 17.5898C5.35186 17.9152 5.68271 18.1203 6.04912 18.1203H7.76631C7.40023 18.6065 7.20249 19.1988 7.20303 19.8074C7.20303 21.3551 8.46084 22.6129 10.0085 22.6129C11.5562 22.6129 12.814 21.3551 12.814 19.8074C12.814 19.1977 12.6116 18.6043 12.2507 18.1203H16.6558C16.2897 18.6065 16.0919 19.1988 16.0925 19.8074C16.0925 21.3551 17.3503 22.6129 18.8979 22.6129C20.4456 22.6129 21.7034 21.3551 21.7034 19.8074C21.7034 19.1977 21.5011 18.6043 21.1401 18.1203H24.2382C24.7687 18.1203 25.2034 17.6883 25.2034 17.1551C25.2018 16.8994 25.0992 16.6546 24.9178 16.4743C24.7365 16.294 24.4912 16.1927 24.2354 16.1926ZM7.35889 3.91797L23.1034 3.96992L21.5612 12.6051L9.19365 12.627L7.35889 3.91797ZM10.0085 20.6715C9.53271 20.6715 9.14443 20.2832 9.14443 19.8074C9.14443 19.3316 9.53271 18.9434 10.0085 18.9434C10.4843 18.9434 10.8726 19.3316 10.8726 19.8074C10.8726 20.0366 10.7815 20.2564 10.6195 20.4184C10.4574 20.5805 10.2377 20.6715 10.0085 20.6715ZM18.8979 20.6715C18.4222 20.6715 18.0339 20.2832 18.0339 19.8074C18.0339 19.3316 18.4222 18.9434 18.8979 18.9434C19.3737 18.9434 19.762 19.3316 19.762 19.8074C19.762 20.0366 19.671 20.2564 19.5089 20.4184C19.3469 20.5805 19.1271 20.6715 18.8979 20.6715Z" fill="black" />
                </svg>
            </div>

            {isMenuOpen && (
                <div className="absolute top-16 left-0 w-full bg-white border-t border-gray-200 md:hidden z-50 shadow-lg">
                    <div className="flex flex-col items-center py-4 space-y-4">
                        <Link to="/home" className="text-sm text-black" onClick={toggleMenu}>Home</Link>
                        <Link to="/shop" className="text-sm text-black" onClick={toggleMenu}>Shop</Link>
                        <Link to="/about" className="text-sm text-black" onClick={toggleMenu}>About</Link>
                        <Link to="/contact" className="text-sm text-black" onClick={toggleMenu}>Contact</Link>
                    </div>
                </div>
            )}





        </div>
    );
};


