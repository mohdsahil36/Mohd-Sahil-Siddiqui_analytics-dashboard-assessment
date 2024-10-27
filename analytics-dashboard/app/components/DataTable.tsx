"use client";

import { useState, useEffect } from "react";
import { Data } from "@/lib/types";
import Pagination from "./Pagination";

type DataTableProps = {
    data: Data[] | null;
};

const keyFields = [
    "Make",
    "Model Year",
    "Model",
    "Electric Vehicle Type",
    "County",
    "City",
    "Electric Range",
    "Clean Alternative Fuel Vehicle (CAFV) Eligibility",
];

export default function DataTable({ data }: DataTableProps) {
    const [plotData, setPlotData] = useState<Data[] | null>(data);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const rowOptions = [10, 15, 20];

    useEffect(() => {
        setPlotData(data);
        setCurrentPage(currentPage);
    }, [data]);

    const totalPages = Math.ceil((plotData?.length || 0) / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = plotData?.slice(startIndex, startIndex + itemsPerPage) || [];

    const handleItemsPerPageChange = (newItemsPerPage: number) => {
        setItemsPerPage(newItemsPerPage);
        setCurrentPage(1);
    };

    return (
        <div className="mt-5 p-4">
            {plotData && plotData.length > 0 ? (
                <>
                    <table className="w-full rounded-md overflow-hidden table-fixed text-center">
                        <thead>
                            <tr className="bg-[#0056b3] text-[#ffffff] p-5">
                                {keyFields.map((field, index) => (
                                    <th
                                        key={index}
                                        className="p-2 text-left border-b border-[#0056b3] font-semibold uppercase text-center"
                                        // style={{ width: index === 0 ? '20%' : '15%' }}
                                    >
                                        {field}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {currentItems.map((row, index) => (
                                <tr key={index} className={`${index % 2 === 0 ? "bg-[#e8f0fe]" : "bg-[#f0f8ff]"} hover:bg-[#e0e7ff] uppercase font-semibold`}>
                                    {keyFields.map((field) => (
                                        <td
                                            key={field}
                                            className="p-2 border-b border-[#e0e7ff] text-[#343a40]"
                                            // style={{ width: field === keyFields[0] ? '20%' : '15%' }}
                                        >
                                            {row[field] ?? "N/A"}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onNextPage={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                        onPrevPage={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                        itemsPerPage={itemsPerPage}
                        onItemsPerPageChange={handleItemsPerPageChange}
                        rowOptions={rowOptions}
                    />
                </>
            ) : (
                <p>No data available.</p>
            )}
        </div>
    );
}
