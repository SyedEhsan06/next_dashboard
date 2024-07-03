"use client";

import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
const DashCharts =  ({
  products
}) => {

  console.log(products);
  const data = products.map((product) => {
    return {
      name: product.name,
      sales: product.sold,
      qty: product.quantity,
    };
  });
  // const data = [
  //   { name: "Jam", sales: 4000, qty: 100 },
  //   { name: "Bread", sales: 3000, qty: 503 },
  //   { name: "Butter", sales: 2000, qty: 403 },
  //   { name: "Cheese", sales: 2780, qty: 60 },
  //   { name: "Milk", sales: 1890, qty: 303 },
  //   { name: "Eggs", sales: 2390, qty: 704 },
  //   { name: "Sugar", sales: 3490, qty: 804 },
  // ];
  return (
    <>
      <div className="chart">
        <h1 className="text-2xl font-bold ">Sales and Quantity</h1>
        <LineChart
          width={600}
          height={300}
          data={data}
          margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
        >
          <Line type="monotone" dataKey="sales" stroke="#8884d8" />
          <Line type="monotone" dataKey="qty" stroke="#82ca9d" />
          {/* <CartesianGrid stroke="#ccc" strokeDasharray="5 5" /> */}
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </div>
    </>
  );
};

export default DashCharts;
