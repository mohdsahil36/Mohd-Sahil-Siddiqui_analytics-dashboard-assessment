"use client";

import { FC } from "react";
import { ChevronLeft, ChevronRight } from 'lucide-react';

type PaginationProps = {
    currentPage: number;
    totalPages: number;
    onNextPage: () => void;
    onPrevPage: () => void;
    itemsPerPage: number;
    onItemsPerPageChange: (newItemsPerPage: number) => void;
    rowOptions: number[];
};

const Pagination: FC<PaginationProps> = ({
    currentPage,
    totalPages,
    onNextPage,
    onPrevPage,
    itemsPerPage,
    onItemsPerPageChange,
    rowOptions
}) => {
    return (
        <div className="mt-3 flex items-center justify-center gap-x-5">
            <select
                name="pageRows"
                id="pageRows"
                onChange={(e) => onItemsPerPageChange(Number(e.target.value))}
                value={itemsPerPage}
                className="border-0 text-[#545454] bg-[#f9f9f9] p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                {rowOptions.map((item) => (
                    <option key={item} value={item}>{item}</option>
                ))}
            </select>

            <p className="text-[#545454]">Page {currentPage} of {totalPages}</p>

            <div className="flex items-center gap-x-3 mt-2">
                <div 
                    onClick={onPrevPage} 
                    className={`flex items-center cursor-pointer ${currentPage === 1 ? 'text-gray-300' : 'text-blue-500 hover:text-blue-600'}`}
                >
                    <ChevronLeft className="w-5 h-5" />
                </div>
                <div 
                    onClick={onNextPage} 
                    className={`flex items-center cursor-pointer ${currentPage === totalPages ? 'text-gray-300' : 'text-blue-500 hover:text-blue-600'}`}
                >
                    <ChevronRight className="w-5 h-5" />
                </div>
            </div>
        </div>
    );
};

export default Pagination;
