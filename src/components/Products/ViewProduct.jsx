import { getProductById } from "@/lib/data";
import { updateProduct } from "@/lib/actions";
import Link from "next/link";
import React from "react";
import { FaArrowCircleLeft } from "react-icons/fa";

const ViewProduct = async ({ id }) => {
  const product = await getProductById(id);
  if (!product) {   
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center flex-col">
          <div className="topBar w-full flex justify-between items-center">
            <div className="container flex gap-3 items-center w-full">
              <Link href="/products">
                <FaArrowCircleLeft className="mr-2 text-white text-2xl" />
              </Link>
              <h1>View Product</h1>
            </div>
          </div>
          <div className="form w-full mt-4">
            <form action={updateProduct} method="post" className="w-full">
              <input type="hidden" name="id" value={product._id.toString()} />
              <div className="flex flex-col gap-4">
                <div className="flex flex-row bg-[#182237] gap-1 w-full justify-around">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Product Name"
                    className="input w-1/2 bg-[#182237] p-2 border border-gray-500 rounded-lg"
                    defaultValue={product.name}
                  />
                  <input
                    type="text"
                    id="product_id"
                    name="product_id"
                    placeholder="Product ID"
                    className="input w-1/2 bg-[#182237] p-2 border border-gray-500 rounded-lg"
                    defaultValue={product.product_id}
                  />
                </div>
                <div className="flex flex-row bg-[#182237] gap-1 w-full justify-around">
                  <input
                    type="number"
                    id="price"
                    name="price"
                    placeholder="Price in USD"
                    className="input w-1/4 bg-[#182237] p-2 border border-gray-500 rounded-lg"
                    defaultValue={product.price}
                  />
                  <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    placeholder="Quantity"
                    className="input w-1/2 bg-[#182237] p-2 border border-gray-500 rounded-lg"
                    defaultValue={product.quantity}
                  />
                  <select
                    name="stockStatus"
                    id="stockStatus"
                    className="input bg-[#182237] w-1/2 p-2 border border-gray-500 rounded-lg"
                    defaultValue={product.stockStatus}
                  >
                    <option value="stockStatus" disabled>
                      Stock Status
                    </option>
                    <option value="In Stock">In Stock</option>
                    <option value="Out of Stock">Out of Stock</option>
                  </select>
                </div>
                <div className="flex flex-row bg-[#182237] gap-1 w-full justify-around">
                  <input
                    type="text"
                    id="category"
                    name="category"
                    placeholder="Category"
                    className="input w-1/2 bg-[#182237] p-2 border border-gray-500 rounded-lg"
                    defaultValue={product.category}
                  />
                  <input
                    type="text"
                    id="subcategory"
                    name="subcategory"
                    placeholder="Subcategory"
                    className="input w-1/2 bg-[#182237] p-2 border border-gray-500 rounded-lg"
                    defaultValue={product.subcategory}
                  />
                </div>
                <div className="flex flex-row bg-[#182237] gap-1 w-full justify-around">
                  <textarea
                    id="description"
                    name="description"
                    placeholder="Description"
                    className="input w-full bg-[#182237] p-2 border border-gray-500 rounded-lg"
                    defaultValue={product.description}
                  ></textarea>
                </div>
                <div className="flex flex-row bg-[#182237] gap-1 w-full justify-around">
                  <input
                    type="file"
                    id="image"
                    name="image"
                    placeholder="Upload Image"
                    className="input w-full bg-[#182237] p-2 border border-gray-500 rounded-lg text-white"
                  />
                  <button
                    type="submit"
                    className="btn bg-[#405d93] text-white rounded-lg w-32 h-10 p-2 active:bg-[#2c4065] active:shadow-none active:scale-95 focus:outline-none"
                  >
                    Update Product
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewProduct;
