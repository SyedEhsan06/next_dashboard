import { addProduct } from "@/lib/actions";
import Link from "next/link";
import React from "react";
import { FaArrowCircleLeft } from "react-icons/fa";
import { SubmitButton } from "../SubmitButton";
// import { CldImage } from "next-cloudinary";
const AddProduct = () => {
  // console.log(<SubmitButton />);
  return (
    <>
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center flex-col">
          <div className="topBar w-full flex justify-between items-center">
            <div className="container flex gap-3 items-center w-full">
              <Link href="/products">
                <FaArrowCircleLeft className="mr-2 text-white text-2xl" />
              </Link>
              <h1>Want to add a new product?</h1>
            </div>
          </div>
          <div className="form w-full mt-4">
            <form action={addProduct} className="w-full">
              <div className="flex flex-col gap-4">
                <div className="flex flex-row bg-[#182237] gap-1 w-full justify-around"></div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex flex-row bg-[#182237] gap-1 w-full justify-around">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Product Name"
                    className="input w-1/2 bg-[#182237] p-2 border border-gray-500 rounded-lg"
                  />

                  <input
                    type="text"
                    id="product_id"
                    name="product_id"
                    placeholder="Product ID"
                    className="input w-1/2 bg-[#182237] p-2 border border-gray-500 rounded-lg"
                  />
                </div>
                <div className="flex flex-row bg-[#182237] gap-1 w-full justify-around">
                  <input
                    type="number"
                    id="price"
                    name="price"
                    placeholder="Price in USD"
                    min="0"
                    className="input w-1/4 bg-[#182237] p-2 border border-gray-500 rounded-lg"
                  />

                  <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    placeholder="Quantity"
                    className="input w-1/2 bg-[#182237] p-2 border border-gray-500 rounded-lg"
                  />
                  <select
                    name="stockStatus"
                    id="stockStatus"
                    className="input bg-[#182237] w-1/2 p-2 border border-gray-500 rounded-lg"
                  >
                    <option value="stockStatus" disabled selected>
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
                  />
                  <input
                    type="text"
                    id="subcategory"
                    name="subcategory"
                    placeholder="Subcategory"
                    className="input w-1/2 bg-[#182237] p-2 border border-gray-500 rounded-lg"
                  />
                </div>
                <div className="flex flex-row bg-[#182237] gap-1 w-full justify-around">
                  <textarea
                    id="description"
                    name="description"
                    placeholder="Description"
                    className="input w-full bg-[#182237] p-2 border border-gray-500 rounded-lg"
                  ></textarea>
                </div>
                <div className="flex flex-row bg-[#182237] gap-1 w-full justify-around">
                  <input
                    type="file"
                    id="file"
                    name="file"
                    placeholder="Upload Image"
                    className="input w-full bg-[#182237] p-2 border border-gray-500 rounded-lg text-white"
                  />
                  <SubmitButton />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
