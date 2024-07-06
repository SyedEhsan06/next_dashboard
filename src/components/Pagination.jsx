"use client"
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

const Pagination = ({ count }) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();
  const page = parseInt(searchParams.get("page")) || 1;
  const params = new URLSearchParams(searchParams);
  const itemsPerPage = 4;
  const hasPrevious = page > 1;
  const hasNext = page * itemsPerPage < count;
  
  const handleChangePage = (type) => {
    if (type === "prev") {
      params.set("page", page - 1);
    } else {
      params.set("page", page + 1);
    }
    replace(`${pathname}?${params.toString()}`);
  };
  
  return (
    <div className="bottom pagination mt-4 flex justify-between">
      <button
        onClick={() => handleChangePage("prev")}
        disabled={!hasPrevious}
        className={`w-28 h-10 p-2 mr-2 rounded-md shadow-md transition-all duration-300
          ${hasPrevious ? 'bg-blue-500 hover:bg-blue-600 text-white' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}
        `}
      >
        Previous
      </button>
      <button
        onClick={() => handleChangePage("next")}
        disabled={!hasNext}
        className={`w-28 h-10 p-2 rounded-md shadow-md transition-all duration-300
          ${hasNext ? 'bg-blue-500 hover:bg-blue-600 text-white' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}
        `}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
