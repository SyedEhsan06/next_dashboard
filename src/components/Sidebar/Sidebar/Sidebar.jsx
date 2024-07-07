"use client";
import React from "react";
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
} from "react-icons/md";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { IoMdSettings } from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();
  
  const menu = [
    {
      title: "Dashboard",
      icon: <MdDashboard />,
      link: "/dashboard",
    },
    {
      title: "Users",
      icon: <MdSupervisedUserCircle />,
      link: "/users",
    },
    {
      title: "Products",
      icon: <MdShoppingBag />,
      link: "/products",
    },
    {
      title: "Orders",
      icon: <MdAttachMoney />,
      link: "/orders",
    },
    {
      title: "Revenue",
      icon: <MdWork />,
      link: "/revenue",
    },
    {
      title: "Analytics",
      icon: <MdAnalytics />,
      link: "/analytics",
    },
    {
      title: "Settings",
      icon: <IoMdSettings />,
      link: "/settings",
      special: true,
      bgColor: "bg-[#151c2c]",
    },
    {
      title: "Logout",
      icon: <RiLogoutCircleRLine />,
      link: "/logout",
      special: true,
      bgColor: "bg-red-500",
      hoverBgColor: "hover:bg-red-600",
    },
  ];

  return (
    <div className="sidebar bg-[#182237] text-white h-full flex flex-col p-4">
      <div className="sidebar__header flex flex-col items-center mb-4">
        <div className="flex items-center mb-2">
          <FaUserAlt className="mr-2" />
            <div className="text-lg font-bold">Syed Ehsan</div>
        </div>
        <hr className="w-full border-gray-500" />
      </div>
      <div className="flex flex-col justify-between h-full">
        {menu.map((item, index) => (
          <Link href={item.link} key={index} passHref>
            <p
              className={`flex items-center p-2 rounded-lg transition ${
                pathname === item.link || pathname.includes(item.link)
                  ? "bg-[#151c2c] text-white border-l-4 border-blue-900"
                  : "text-gray-300 hover:bg-[#151c2c] hover:text-white"
              } ${
                item.special
                  ? `${item.bgColor} ${
                      item.hoverBgColor || "hover:bg-[#1e2a40]"
                    }`
                  : "bg-[#182237]"
              }`}
            >
              <span className="mr-3">{item.icon}</span>
              <span>{item.title}</span>
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
