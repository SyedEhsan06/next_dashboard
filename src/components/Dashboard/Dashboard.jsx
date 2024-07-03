import React from "react";
import DashCard from "./DashCard";
import { FaBox, FaMoneyBill, FaProductHunt, FaUserAlt } from "react-icons/fa";
import LastTransactions from "./LastTransactions";
import DashCharts from "./DashCharts";
import { getProducts, getUsers } from "@/lib/data";

const Dashboard = async () => {
  try {
    const x = await getProducts();
    const y = await getUsers();

    const productsCount = x.count || 0;
    const products = x.products || [];
    const usersCount = y.count || 0;
    const users = y.users || [];

    console.log(products, productsCount, users, usersCount);

    const stock = products.reduce((acc, product) => acc + product.quantity, 0);
    const revenue = products
      .map((product) => product.price * product.sold)
      .reduce((acc, price) => acc + price, 0);
      const sold = products.reduce((acc, product) => acc + product.sold, 0);
    return (
      <>
        <div className="container dashboard flex flex-wrap">
          <div className="top cards flex flex-row justify-around w-full gap-3">
            <DashCard
              title="Users"
              value={usersCount}
              icon={<FaUserAlt color="" />}
              color="bg-blue-500"
            />
            <DashCard
              title="Stock"
              value={stock}
              icon={<FaProductHunt />}
              color="bg-green-500"
            />
            <DashCard
              title="Sold"
              value={sold}
              icon={<FaBox />}
              color="bg-yellow-500"
              
            />
            <DashCard
              title="Revenue"
              value={revenue.toLocaleString()}
              icon={<FaMoneyBill />}
              color="bg-red-500"
              sign="$"
            />
          </div>
        </div>
        <div className="mid transaction bg-[#182237] p-4">
          <LastTransactions products={products} />
        </div>
        <div className="bottom charts">
          <DashCharts
            products={products}
            count={productsCount}
            users={users}
            usersCount={usersCount}
          />
        </div>
      </>
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div>Error loading dashboard data</div>;
  }
};

export default Dashboard;
