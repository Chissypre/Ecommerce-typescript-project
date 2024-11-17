import HeroImage from "../assets/Hero.svg";
import Logo from "../assets/Logo.svg";
import Greaterthan from "../assets/Greaterthan.svg";

const Hero: React.FC = () => {
    return (
        <div className="relative flex items-center justify-center h-[25vh] sm:h-[35vh] md:h-[45vh] lg:h-[55vh]">
            <img
                src={HeroImage}
                alt="Hero"
                className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="relative flex flex-col items-center text-center px-4 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl">
                {/* Adjust Logo size for responsiveness */}
                <img
                    src={Logo}
                    alt="Logo"
                    className="w-10 sm:w-12 md:w-16 lg:w-20 mb-2"
                />

                {/* Adjust heading size for responsiveness */}
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-black pb-1">
                    My Account
                </h1>

                {/* Breadcrumbs section */}
                <div className="flex items-center space-x-1 sm:space-x-2 text-black pt-1">
                    <p className="text-xs sm:text-sm md:text-base font-medium">Home</p>

                    <img
                        src={Greaterthan}
                        alt="Greater than icon"
                    />

                    <p className="text-xs sm:text-sm md:text-base lg:text-lg font-light">My Account</p>
                </div>
            </div>
        </div>
    );
};

export default Hero;
