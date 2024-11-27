import HomeHeroImg from "../../assets/images/Rocket single seater 1.png";

const HomeHero = () => {
    return (
        <div className="relative flex items-center bg-amberLight h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh] px-6 md:px-12">
            {/* Left Content Section */}
            <div className="z-10 w-full md:w-1/2">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-medium text-black">
                    Rocket single seater
                </h1>
                <div className="mt-4">
                    <button className="text-lg font-medium ">
                        Shop Now
                    </button>
                    <hr className="my-1 w-20 border-t-2 border-black" />
                </div>
            </div>

            {/* Right Image Section */}
            <div className="relative w-full md:w-1/2 flex justify-center items-center">
                <img
                    src={HomeHeroImg}
                    alt="Rocket single seater"
                    className="w-auto h-[80%] object-contain"
                />
            </div>
        </div>
    );
};

export default HomeHero;

