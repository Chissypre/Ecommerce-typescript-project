import React, { useState } from "react";

const Pagination: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const pages = [1, 2, 3];

    const handleClick = (page: number) => {
        setCurrentPage(page);
    };

    const handleNext = () => {
        if (currentPage < pages.length) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <div className="flex space-x-2 justify-center p-3 m-3">
            {pages.map((page) => (
                <button
                    key={page}
                    onClick={() => handleClick(page)}
                    className={`w-10 h-10 rounded-lg ${currentPage === page
                        ? "bg-yellow-100 text-black"
                        : "bg-yellow-50 text-gray-500"
                        } hover:bg-yellow-100`}
                >
                    {page}
                </button>
            ))}
            <button
                onClick={handleNext}
                className="w-16 h-10 bg-yellow-50 rounded-lg text-black hover:bg-yellow-100"
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;
