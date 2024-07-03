import { deleteUser } from "@/lib/actions";
import { getUsers } from "@/lib/data";
import Link from "next/link";
import React from "react";
import { FaSearch } from "react-icons/fa";

const Users = async () => {
  const { users, count } = await getUsers();
  console.log(users);
  let data = users[0]?.createdAt;
  // const users = [
  //   {
  //     id: 1,
  //     icon: "https://i.pinimg.com/236x/31/58/31/31583193f57c8b2448d7d4ddb1f5122a.jpg",
  //     name: "wolf",
  //     email: "wolf@jungle.com",
  //     role: "admin",
  //     status: "active",
  //     createdAt: "2021-09-01",
  //   },
  //   {
  //     id: 2,
  //     name: "lion",
  //     icon: "https://letsenhance.io/static/66c1b6abf8f7cf44c19185254d7adb0c/28ebd/AiArtBefore.jpg",
  //     email: "lion@jungle.com",
  //     role: "user",
  //     status: "inactive",
  //     createdAt: "2021-09-02",
  //   },
  //   {
  //     id: 3,
  //     name: "tiger",
  //     icon: null,
  //     email: "tiger@jungle.com",
  //     role: "admin",
  //     status: "active",
  //     createdAt: "2021-09-03",
  //   },
  //   {
  //     id: 4,
  //     name: "leopard",
  //     icon: null,
  //     email: "leopard@jungle.com",
  //     role: "user",
  //     status: "inactive",
  //     createdAt: "2021-09-04",
  //   },
  //   {
  //     id: 5,
  //     name: "penguin",
  //     icon: null,
  //     email: "penguin@penguin.com",
  //     role: "admin",
  //     status: "active",
  //     createdAt: "2021-09-05",
  //   },
  // ];

  const handleEdit = (id) => {
    console.log(`Edit user with id ${id}`);
    // Add your edit logic here
  };

  const handleDelete = (id) => {
    console.log(`Delete user with id ${id}`);
    // Add your delete logic here
  };

  return (
    <>
      <div className="container flex flex-col p-4 bg-[#182237] justify-around w-full h-[80vh]  text-white">
        <div className="top nav flex justify-between align-center">
          <div
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
                placeholder="Search Users"
              />
            </div>
          </div>
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
        <div className="bottom pagination mt-4 flex justify-between">
          <button className="bg-[#a9b9d6] text-gray-800 w-28 h-10 p-2 mr-2">
            Previous
          </button>
          <button className="bg-[#a9b9d6] text-gray-800 w-25 h-10 p-2">
            Next
          </button>
        </div></>
        ) : (
          <div className="text-center text-white">
            <h1>No users found</h1>
          </div>
        )
      }
      </div>
    </>
  );
};

export default Users;
