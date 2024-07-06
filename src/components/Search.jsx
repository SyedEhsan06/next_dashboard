"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { Suspense } from "react";
import { FaSearch } from "react-icons/fa";
import { useDebouncedCallback } from "use-debounce";
import "./Search.css";
const Search = ({ placeholder }) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();
  const handleSearch = useDebouncedCallback((e) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", 1);
    if (e.target.value) {
      e.target.value.length > 2 && params.set("q", e.target.value);
    } else {
      params.delete("q");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);
  return (
    <>
      <Suspense><div
        className="search
    bg-[#253148]
    flex
    justify-between
    rounded-lg
    text-white
    border-none
    p-2"
      >
        <div className="search-bar flex align-center items-center">
          <FaSearch />
          <input
            type="text"
            className="bg-[#253148] ml-2 rounded-lg text-white border-none
            
            "
            placeholder={placeholder}
            onChange={handleSearch}
          />
        </div>
      </div>
      </Suspense>
    </>
  );
};

export default Search;
