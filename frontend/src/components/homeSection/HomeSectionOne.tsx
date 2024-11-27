import SideTable1 from "../../assets/images/Granite square side table 1.png";
import SideTable2 from "../../assets/images/Cloud sofa three seater + ottoman_3 1.png";

const HomeSectionOne = () => {
    return (
        <div className="relative flex flex-wrap justify-center gap-8 bg-perlColor px-4 sm:px-6 md:px-12 py-8">
            {/* First Item */}
            <div className="flex flex-col items-start text-left space-y-4 w-full sm:w-1/2 lg:w-1/3">
                <img
                    src={SideTable1}
                    alt="Granite square side table"
                    className="w-full max-w-[400px] object-contain"
                />
                <p className="text-2xl sm:text-3xl font-medium">Side table</p>
                <button className="font-medium text-lg sm:text-xl">View More</button>
                <hr className="w-20 border-t-2 border-black" />
            </div>
            {/* Second Item */}
            <div className="flex flex-col items-start text-left space-y-4 w-full sm:w-1/2 lg:w-1/3">
                <img
                    src={SideTable2}
                    alt="Cloud sofa three seater with ottoman"
                    className="w-full max-w-[400px] object-contain"
                />
                <p className="text-2xl sm:text-3xl font-medium">Cloud Sofa</p>
                <button className="font-medium text-lg sm:text-xl">View More</button>
                <hr className="w-20 border-t-2 border-black" />
            </div>
        </div>
    );
};

export default HomeSectionOne;
