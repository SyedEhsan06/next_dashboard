import { updateUser } from "@/lib/actions";
import { getUserById } from "@/lib/data";
import React from "react";
import { SubmitButton } from "../SubmitButton";

const ViewUser = async ({ id }) => {
  const user = await getUserById(id);
  console.log(user);
  if (!user) {
    return <div>Loading...</div>;
  }

  const address = user.address[0] || {};

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center flex-col">
        <div className="topBar w-full flex justify-between items-center">
          <div className="container flex gap-3 items-center w-full">
            <h1>View User</h1>
          </div>
        </div>
        <div className="form w-full mt-4">
          <form action={updateUser} method="post" className="w-full">
            <input type="hidden" name="id" value={user._id.toString()} />
            <div className="flex flex-col gap-4">
              <div className="flex flex-row bg-[#182237] gap-1 w-full justify-around">
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="First Name"
                  className="input w-1/4 bg-[#182237] p-2 border border-gray-500 rounded-lg"
                  defaultValue={user.firstName}
                />
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Last Name"
                  className="input w-1/4 bg-[#182237] p-2 border border-gray-500 rounded-lg"
                  defaultValue={user.lastName}
                />
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  className="input w-1/2 bg-[#182237] p-2 border border-gray-500 rounded-lg"
                  defaultValue={user.email}
                />
              </div>
              <div className="flex flex-row bg-[#182237] gap-1 w-full justify-around">
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  className="input w-1/2 bg-[#182237] p-2 border border-gray-500 rounded-lg"
                  defaultValue={user.password}
                />
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder="Phone"
                  className="input w-1/2 bg-[#182237] p-2 border border-gray-500 rounded-lg"
                  defaultValue={user.phone}
                />
              </div>
              <div className="flex flex-row bg-[#182237] gap-1 w-full justify-around">
                <input
                  type="text"
                  id="address"
                  name="address"
                  placeholder="Address"
                  className="input w-1/2 bg-[#182237] p-2 border border-gray-500 rounded-lg"
                  defaultValue={address.address}
                />
                <input
                  type="text"
                  id="city"
                  name="city"
                  placeholder="City"
                  className="input w-1/2 bg-[#182237] p-2 border border-gray-500 rounded-lg"
                  defaultValue={address.city}
                />
              </div>
              <div className="flex flex-row bg-[#182237] gap-1 w-full justify-around">
                <input
                  type="text"
                  id="state"
                  name="state"
                  placeholder="State"
                  className="input w-1/2 bg-[#182237] p-2 border border-gray-500 rounded-lg"
                  defaultValue={address.state}
                />
                <input
                  type="text"
                  id="zip"
                  name="zip"
                  placeholder="Zip"
                  className="input w-1/2 bg-[#182237] p-2 border border-gray-500 rounded-lg"
                  defaultValue={address.zip}
                />
              </div>
              <div className="flex flex-row bg-[#182237] gap-1 w-full justify-around">
                <input
                  type="text"
                  id="country"
                  name="country"
                  placeholder="Country"
                  className="input w-1/2 bg-[#182237] p-2 border border-gray-500 rounded-lg"
                  defaultValue={address.country}
                />
                <input
                  type="text"
                  id="type"
                  name="type"
                  placeholder="Type"
                  className="input w-1/2 bg-[#182237] p-2 border border-gray-500 rounded-lg"
                  defaultValue={address.type}
                />
              </div>
              <div className="flex flex-row bg-[#182237] gap-1 w-full justify-around">
                <select
                  id="role"
                  name="role"
                  placeholder="Role"
                  className="input w-1/2 bg-[#182237] p-2 border border-gray-500 rounded-lg"
                  defaultValue={user.role}
                >
                  <option value="admin">Admin</option>
                  <option value="user">User</option>
                </select>
                <select
                  id="status"
                  name="status"
                  placeholder="Status"
                  className="input w-1/2 bg-[#182237] p-2 border border-gray-500 rounded-lg"
                  defaultValue={user.status}
                >
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>
              <div className="flex flex-row bg-[#182237] gap-1 w-full justify-around">
                <input
                  type="file"
                  id="image"
                  name="image"
                  placeholder="Image"
                  className="input w-20 bg-[#182237] w-1/3 p-2 border border-gray-500 rounded-lg"
                />
                <img src={user.image} alt="user" className="w-1/3" />
              <SubmitButton />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ViewUser;
