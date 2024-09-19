import React from 'react';
import {ChevronLeftIcon, ChevronRightIcon} from "@heroicons/react/24/solid";

interface PaginationProps {
    currentPage: number;
    totalItems: number;
    itemsPerPage: number;
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
                                                   currentPage,
                                                   totalItems,
                                                   itemsPerPage,
                                                   onPageChange,
                                               }) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const handlePrevious = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    return (
        <div className="flex justify-end items-center space-x-2">
            <button
                onClick={handlePrevious}
                disabled={currentPage === 1}
                className="flex items-center p-2 rounded-lg hover:bg-gray-200 disabled:opacity-50"
            >
                <ChevronLeftIcon className="h-3 w-5" />
            </button>
            <span className="text-sm">
                Page {currentPage} of {totalPages}
            </span>
            <button
                onClick={handleNext}
                disabled={currentPage === totalPages}
                className="flex items-center p-2 rounded-lg hover:bg-gray-200 disabled:opacity-50"
            >
                <ChevronRightIcon className="h-3 w-5" />
            </button>
        </div>
    );
};

export default Pagination;
