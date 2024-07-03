import React from "react";

const DashCard = ({ title, value, icon, color, sign }) => {
  return (
    <>
      <div className={`w-full md:w-1/2 xl:w-1/3 p-6 ${color}`}>
        <div className="flex items-center">
          <div className="p-3 rounded-full bg-slate-500 bg-opacity-50">
            {icon}
          </div>
          <div className="ml-4">
            <p className="text-lg text-white">{title}</p>
            <p className="text-white">
              {sign ? <span className="text-xl">{sign}</span> : null}
              {value}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashCard;
