import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="h-[90vh] overflow-hidden flex items-center justify-center bg-[#182237] text-white">
      <div className="container text-center p-8 bg-[#182237] ">
        <h1 className="text-4xl font-bold text-white mb-4">Welcome to the Next Dashboard</h1>
        <p className="text-gray-400 mb-8">Your one-stop solution to manage all your needs efficiently.</p>
        <Link href="/dashboard">
          <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-md shadow-md transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400">
            Go to Dashboard
          </button>
        </Link>
      </div>
    </div>
  );
};

export default page;
