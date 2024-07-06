// "use client";
import { deleteProduct } from "@/lib/actions";
import { getProducts } from "@/lib/data";
import Link from "next/link";
import React from "react";
import { FaSearch } from "react-icons/fa";
import Search from "../Search";
import Pagination from "../Pagination";

const Products = async ({ searchParams }) => {
  let params = searchParams?.searchParams;
  let page = params?.page || 1;
  let q = params?.q || "";
  console.log(page, q);
  const { products, count } = await getProducts(q, page);

  console.log(products);
  // const products = [
  //   {
  //     id: 1,
  //     image: "https://via.placeholder.com/50",
  //     title: "Jam",
  //     category: "Food",
  //     subcategory: "Packaged",
  //     price: "$2.00",
  //     stock: 100,
  //     sold: 50,
  //     createdAt: "2023-01-01",
  //   },
  //   {
  //     id: 2,
  //     image: "https://via.placeholder.com/50",
  //     title: "Bread",
  //     category: "Food",
  //     subcategory: "Bakery",
  //     price: "$3.00",
  //     stock: 200,
  //     sold: 100,
  //     createdAt: "2023-01-02",
  //   },
  //   {
  //     id: 3,
  //     image: "https://via.placeholder.com/50",
  //     title: "Milk",
  //     category: "Food",
  //     subcategory: "Dairy",
  //     price: "$4.00",
  //     stock: 300,
  //     sold: 150,
  //     createdAt: "2023-01-03",
  //   },
  //   {
  //     id: 4,
  //     image: "https://via.placeholder.com/50",
  //     title: "Butter",
  //     category: "Food",
  //     subcategory: "Dairy",
  //     price: "$5.00",
  //     stock: 400,
  //     sold: 200,
  //     createdAt: "2023-01-04",
  //   },
  //   {
  //     id: 5,
  //     image: "https://via.placeholder.com/50",
  //     title: "Cheese",
  //     category: "Food",
  //     subcategory: "Dairy",
  //     price: "$6.00",
  //     stock: 500,
  //     sold: 250,
  //     createdAt: "2023-01-05",
  //   },
  // ];

  const handleView = (id) => {
    console.log(`View product with id ${id}`);
    // Add your view logic here
  };

  const handleDelete = (id) => {
    console.log(`Delete product with id ${id}`);
    // Add your delete logic here
  };

  return (
    <>
      <div className="container flex flex-col p-4 bg-[#182237] justify-around w-full h-[80vh] text-white">
        <div className="top nav flex justify-between align-center">
          {/* <div
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
                className="bg-[#253148] ml-2 rounded-lg text-white border-none"
                placeholder="Search Products"
              />
            </div>
          </div> */}
          <Search placeholder="Search Products" />
          <div className="actions flex align-center">
            <Link href="/products/add">
              <button
                className="btn
                active:bg-[#2c4065]
                active:shadow-none
                active:scale-95
                focus:outline-none
              bg-[#405d93] text-white rounded-lg w-32 h-10 p-2"
              >
                Add Product
              </button>
            </Link>
          </div>
        </div>
        {products.length > 0 ? (
          <>
            <div className="content products mt-4">
              <table className="w-full text-left  text-white">
                <thead>
                  <tr>
                    {/* <th className="px-4 py-2">Image</th> */}
                    <th className="px-4 py-2">Title</th>
                    <th className="px-4 py-2">Category</th>
                    <th className="px-4 py-2">Subcategory</th>
                    <th className="px-4 py-2">Price</th>
                    <th className="px-4 py-2">Stock(units)</th>
                    <th className="px-4 py-2">Sold(units)</th>
                    <th className="px-4 py-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr
                      key={product.id}
                      className="bg-[#182237] hover:bg-[#253148]"
                      flex
                      items-center
                    >
                      <td className="px-4 py-2 items-center flex gap-1">
                        {product.image ? (
                          <img
                            src={product.image}
                            alt="product"
                            className="w-10 h-10 object-cover rounded-full"
                          />
                        ) : (
                          <div className="w-10 h-10 bg-gray-500 rounded-full flex items-center justify-center">
                            <FaUserAlt />
                          </div>
                        )}
                        {product.name}
                      </td>
                      <td className="px-4 py-2">{product.category}</td>
                      <td className="px-4 py-2">{product.subcategory}</td>
                      <td className="px-4 py-2">${product.price}</td>
                      <td className="px-4 py-2">{product.quantity}</td>
                      <td className="px-4 py-2">{product.sold}</td>
                      <td className="px-4 py-2">
                        <Link href={`/products/${product._id}`}>
                          <button
                            className="bg-green-500
                          active:scale-95
                        hover:bg-green-700 text-white font-bold py-1 px-2 rounded mr-2"
                          >
                            View
                          </button>
                        </Link>
                        <form action={deleteProduct}>
                          <input type="hidden" name="id" value={product._id} />
                          <button
                            className="bg-red-500
                        active:scale-95
                        hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                          >
                            Delete
                          </button>
                        </form>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <Pagination count={count} />
          </>
        ) : (
          <div className="flex justify-center items-center h-[60vh]">
            <h1>No products found</h1>
          </div>
        )}
      </div>
    </>
  );
};

export default Products;
