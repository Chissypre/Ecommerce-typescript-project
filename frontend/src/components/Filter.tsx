import FilterIcon from "../assets/FilterIcon.svg";
import GridIcon from "../assets/gridIcon.svg";
import biView from "../assets/biView.svg";
import LineIcon from "../assets/Line.svg";

const Filter = () => {
    return (
        <div className="bg-red-50 p-4 flex flex-wrap items-center justify-between gap-6">
            {/* Left Group: Filter Section, Layout Switcher, Results Info */}
            <div className="flex flex-wrap items-center gap-4 md:gap-6">
                {/* Filter Section */}
                <div className="flex items-center space-x-2">
                    <img src={FilterIcon} alt="FilterIcon" className="w-5 h-5" />
                    <p className="text-sm font-medium text-gray-700">Filter</p>
                </div>

                {/* Layout Switcher */}
                <div className="flex items-center space-x-2">
                    <img src={GridIcon} alt="GridIcon" className="w-5 h-5" />
                    <img src={biView} alt="biView" className="w-5 h-5" />
                </div>

                {/* Results Info */}
                <div className="flex items-center space-x-2">
                    <img src={LineIcon} alt="LineIcon" className="w-5 h-5" />
                    <p className="text-sm font-medium text-gray-700 text-center">
                        Showing 1–16 of 32 results
                    </p>
                </div>
            </div>

            {/* Right Group: Show Dropdown, Sort By Dropdown */}
            <div className="flex flex-wrap items-center gap-4 md:gap-6">
                {/* Show Dropdown */}
                <div className="flex items-center space-x-2">
                    <p className="text-sm font-medium text-gray-400">Show</p>
                    <button className="bg-white border text-gray-400 w-12 h-8 flex items-center justify-center ">
                        16
                    </button>
                </div>

                {/* Sort By Dropdown */}
                <div className="flex items-center space-x-2">
                    <p className="text-sm font-medium text-gray-400">Sort by</p>
                    <button className="bg-white border text-gray-400 w-20 h-8 flex items-center justify-center">
                        Default
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Filter;
