"use client";
import { usePathname } from "next/navigation";
import React from "react";
import Search from "../Search";
import Pagination from "../Pagination"; // Ensure this is used where necessary

const Navbar = () => {
  const pathname = usePathname();

  if (pathname === "/login" || pathname === "/register" || pathname === "/") {
    return null;
  }

  return (
    <header className="p-1 bg-[#182237] rounded-lg">
      <div className="navbar flex justify-between items-center p-2 ">
        <div className="flex items-center">
          <img
            src="https://cdn-icons-png.freepik.com/512/5198/5198081.png"
            alt="Logo"
            className="h-6 w-6 mr-3"
          />
          <h1 className="text-white text-xl font-bold">Next Dashboard</h1>
        </div>
        <Search
          placeholder={
            pathname === "/products"
              ? "Search Products"
              : pathname === "/users"
              ? "Search Users"
              : "Search"
          }
        />
        <div className="flex items-center space-x-4">
          <button className="bg-blue-500 text-white px-3 py-2 rounded-md hover:bg-blue-600 transition duration-300">
            Profile
          </button>
          <button className="bg-red-500 text-white px-3 py-2 rounded-md hover:bg-red-600 transition duration-300">
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
