import React from "react";
import { FaUserAlt } from "react-icons/fa";

const LastTransactions = () => {
  const data = [
    {
      name: "John Doe",
      status: "Approved",
      date: "01/01/2021",
      amount: "$100.00",
      icon:null
    },
    {
      name: "Bran Stark",
      status: "Declined",
      date: "01/02/2021",
      amount: "$200.00",
      icon:"https://i.pinimg.com/236x/31/58/31/31583193f57c8b2448d7d4ddb1f5122a.jpg"
    },
    {
      name: "Jasprit Bumrah",
      status: "Approved",
      date: "01/03/2021",
      amount: "$300.00",
        icon:null
    },
    {
      name: "Jamie Lannister",
      status: "Declined",
      date: "01/04/2021",
      amount: "$400.00",
        icon:"https://letsenhance.io/static/66c1b6abf8f7cf44c19185254d7adb0c/28ebd/AiArtBefore.jpg"
    },
    {
      name: "Scarlett",
      status: "pending",
      date: "01/05/2021",
      amount: "$500.00",
    icon:"https://imgv3.fotor.com/images/slider-image/A-blurry-close-up-photo-of-a-woman.jpg"
    },
  ];

  return (
    <div className="container mx-auto p-1  rounded-lg shadow-2xl">
      <h1 className="text-xl font-bold text-white mb-4">Last Transactions</h1>
      <table className="w-full text-left">
        <thead>
          <tr className="bg-[#182237] text-white w-full">
            <th className="p-3">Name</th>
            <th className="p-3">Status</th>
            <th className="p-3">Date</th>
            <th className="p-3">Amount</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}  className="bg-[#182237] m-3 hover:bg-[#1b2638] transition">
              <td className="p-3 mt-2  flex items-center">
                {item.icon ? (
                    <img
                        src={item.icon}
                        alt="avatar"
                        className="w-10 h-10 object-cover rounded-full"
                    />
                    ) : (
                    <div className="w-10 h-10 bg-gray-500 rounded-full flex items-center justify-center">
                        <FaUserAlt />
                    </div>
                    )}

                <span className="text-white">{item.name}</span>
              </td>
              <td className={`p-2 mt-2 text-white rounded-md ${
                item.status === "Approved"
                  ? "bg-green-500"
                  : item.status === "Declined"
                  ? "bg-red-500"
                  : "bg-yellow-500"
              
              }`}>
                {item.status}
              </td>
              <td className="p-3 text-gray-300">{item.date}</td>
              <td className="p-3 text-gray-300">{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LastTransactions;
