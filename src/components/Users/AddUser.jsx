import { addUser } from "@/lib/actions";
import Link from "next/link";
import React from "react";
import { FaArrowCircleLeft, FaBackward } from "react-icons/fa";

const AddUser = () => {
  return (
    <>
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center flex-col">
          <div className="topBar w-full flex justify-between items-center">
            <div className="container flex gap-3 items-center w-full">
              <Link href="/users ">
                <FaArrowCircleLeft className="mr-2 text-white text-2xl" />
              </Link>
              <h1>Want to add a new user?</h1>
            </div>
          </div>
          <div className="form w-full mt-4">
            <form action={addUser} className="w-full">
              <div className="flex flex-col gap-4">
                <div className="flex flex-row bg-[#182237] gap-1 w-full justify-around">
                  {/* <label htmlFor="name">Username</label> */}
                  <input
                    type="text"
                    id="first_name"
                    name="first_name"
                    placeholder="First Name"
                    className="input w-1/4 bg-[#182237] p-2 border border-gray-500 rounded-lg"
                  />
                  <input
                    type="text"
                    id="last_name"
                    name="last_name"
                    placeholder="Last Name"
                    className="input w-1/4 bg-[#182237] p-2 border border-gray-500 rounded-lg"
                  />
                  {/* <label htmlFor="email">Email</label> */}
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    className="input w-1/2 bg-[#182237] p-2 border border-gray-500 rounded-lg"
                  />
                </div>
                <div className="flex flex-row bg-[#182237] gap-1 w-full justify-around">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                    className="input w-1/2 bg-[#182237] p-2 border border-gray-500 rounded-lg"
                  />
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    placeholder="Phone"
                    className="input w-1/2 bg-[#182237] p-2 border border-gray-500 rounded-lg"
                  />
                </div>
                <div className="flex flex-row bg-[#182237] gap-1 w-full justify-around">
                  {/* <label htmlFor="role">Role</label> */}
                  <select
                    name="role"
                    id="role"
                    className="input bg-[#182237] w-1/2 p-2 border border-gray-500 rounded-lg"
                  >
                    <option value="role" disabled selected>
                      {" "}
                      Role
                    </option>
                    <option value="user">User</option>

                    <option value="admin">Admin</option>
                  </select>
                  {/* <label htmlFor="status">Status</label> */}
                  <select
                    name="status"
                    id="status"
                    className="input bg-[#182237] w-1/2 p-2 border border-gray-500 rounded-lg"
                    // defaultValue={"status"}
                  >
                    <option value="status" disabled selected>
                      {" "}
                      Status
                    </option>
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                  </select>
                </div>

                <div className="flex flex-row bg-[#182237] gap-1 w-full justify-around">
                  {/* <label htmlFor="address">Address</label> */}
                  <textarea
                    id="address"
                    placeholder="Address"
                    name="address"
                    className="input w-full bg-[#182237] p-2 border border-gray-500 rounded-lg"
                  ></textarea>
                </div>
                <div className="flex flex-row bg-[#182237] gap-1 w-full justify-around">
                  <input
                    type="text"
                    id="city"
                    name="city"
                    placeholder="City"
                    className="input w-1/2 bg-[#182237] p-2 border border-gray-500 rounded-lg"
                  />

                  <input
                    type="text"
                    id="state"
                    name="state"
                    placeholder="Enter state"
                    className="input w-1/2 bg-[#182237] p-2 border border-gray-500 rounded-lg"
                  />
                </div>
                <div className="flex flex-row bg-[#182237] gap-1 w-full justify-around">
                  <input
                    type="text"
                    id="zip"
                    name="zip"
                    placeholder="Enter zip"
                    className="input w-1/2 bg-[#182237] p-2 border border-gray-500 rounded-lg"
                  />
                  <select
                    name="type"
                    id="type"
                    className="input bg-[#182237] w-1/2 p-2 border border-gray-500 rounded-lg"
                  >
                    <option value="type" disabled selected>
                      Type
                    </option>
                    <option value="home">Home</option>
                    <option value="work">Work</option>
                  </select>
                </div>

                <div className="flex flex-row bg-[#182237] gap-1 w-full justify-around">
                  <input
                    type="file"
                    id="file"
                    name="file"
                    placeholder="Upload Image"
                    className="input w-full bg-[#182237] p-2 border border-gray-500 rounded-lg text-white"
                  />
                  <button
                    type="submit"
                    className="btn
              active:bg-[#2c4065]
              active:shadow-none
              active:scale-95
              focus:outline-none
            bg-[#405d93] text-white rounded-lg w-32 h-10 p-2"
                  >
                    Add User
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

export default AddUser;
