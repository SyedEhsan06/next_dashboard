import { deleteUser } from "@/lib/actions";
import { getUsers } from "@/lib/data";
import Link from "next/link";
import React from "react";
import { FaSearch } from "react-icons/fa";
import Search from "../Search";
import Pagination from "../Pagination";
import { redirect } from "next/navigation";

const Users = async (
  {
    searchParams
  }
) => {
  let params = searchParams?.searchParams;
  let page = params?.page || 1;
  let q = params?.q || "";
  const { users, count } = await getUsers(
    q,page
  );
  let data = users[0]?.createdAt;
 if(page > 1 && users.length === 0){
   page = page - 1;
    redirect(`/users?page=${page}`);
  }
  return (
    <>
      <div className="container flex flex-col p-4 bg-[#182237] justify-around w-full h-[80vh]  text-white">
        <div className="top nav flex justify-between align-center">
         <Search placeholder="Search Users" />
          <div className="actions flex align-center">
            <Link href="/users/add" passHref>
              <button
                className="btn
              active:bg-[#2c4065]
              active:shadow-none
              active:scale-95
              focus:outline-none
            bg-[#405d93] text-white rounded-lg w-32 h-10 p-2"
              >
                Add User
              </button>
            </Link>
          </div>
        </div>
      {
        users.length > 0 ? (
          <>
            <div className="content users mt-4">
          <table className="w-full text-left text-white">
            <thead>
              <tr>
                {/* <th className="px-4 py-2">Icon</th> */}
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Role</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Created At</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users?.map((user) => (
                <tr key={user.id} className="bg-[#182237] hover:bg-[#253148]"
                  
                >
                  {/* <td className=" px-4 py-2">
                   
                  </td> */}
                  <td className=" px-4 py-2 flex gap-2">
                    {" "}
                    {user.image ? (
                      <img
                        src={user.image}
                        alt={user.name}
                        className="w-8 h-8 rounded-full"
                      />
                    ) : (
                      <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center">
                        <span className="text-white">N/A</span>
                      </div>
                    )}
                    {user.name}
                  </td>
                  <td className=" px-4 py-2">{user.email}</td>
                  <td className=" px-4 py-2">{user.role}</td>
                  <td className=" px-4 py-2">{user.status}</td>
                  <td className=" px-4 py-2">
                    {user.createdAt.toLocaleString().split(",")[0]}
                  </td>
                  <td className=" px-4 py-2">
                    <Link href={`/users/${user._id}`} passHref>
                    <button
                        className="bg-green-500
                        active:scale-95
                      hover:bg-green-700 text-white font-bold py-1 px-2 rounded mr-2"
                      >
                        View
                      </button>
                      </Link>
                    <form action={deleteUser}>
                    <input type="hidden" name="id" value={(user._id)} />
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
        ) :  (
          <div className="flex justify-center items-center h-[60vh]">
            <h1>No User found</h1>
          </div>
        )
      }
      </div>
    </>
  );
};

export default Users;
