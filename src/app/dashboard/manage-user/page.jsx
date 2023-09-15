"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { BiSolidCheckShield } from "react-icons/bi";
import { TbTrashXFilled } from "react-icons/tb";
import { GiShieldDisabled } from "react-icons/gi";
import Swal from "sweetalert2";
import PrivateRoute from "@/routes/PrivetRoute";



const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    axios
      .get(`https://weather-cast-server.vercel.app/users`)
      .then((data) => setUsers(data.data));
  };

  const handleMakeAdmin = (user) => {
    fetch(`https://weather-cast-server.vercel.app/users/admin/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire({
          title: `Are you sure you want ${user.name} as an Admin?`,

          icon: "Question",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, Make Admin",
        }).then(() => {
          if (data.modifiedCount) {
            fetchUsers();
            Swal.fire({
              title: `${user.name} is now Admin`,
              showClass: {
                popup: "animate__animated animate__fadeInDown",
              },
              hideClass: {
                popup: "animate__animated animate__fadeOutUp",
              },
            });
          }
        });
      });
  };

  const handleRemoveFromAdmin = (user) => {
    fetch(`https://weather-cast-server.vercel.app/users/visitor/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire({
          title: `Are you sure you want to remove admin role from ${user.name}?`,

          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, Remove from Admin",
        }).then(() => {
          if (data.modifiedCount) {
            fetchUsers();
            Swal.fire({
              title: `${user.name} have been removed from Admin Role`,
              showClass: {
                popup: "animate__animated animate__fadeInDown",
              },
              hideClass: {
                popup: "animate__animated animate__fadeOutUp",
              },
            });
          }
        });
      });
  };
  const handleBanFromAdmin = (user) => {
    fetch(`https://weather-cast-server.vercel.app/users/banned/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire({
          title: `Are you sure you want to ban ${user.name}?`,
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, Ban User!",
        }).then(() => {
          if (data.modifiedCount) {
            fetchUsers();
            Swal.fire({
              title: `${user.name} is banned from the website`,
              showClass: {
                popup: "animate__animated animate__fadeInDown",
              },
              hideClass: {
                popup: "animate__animated animate__fadeOutUp",
              },
            });
          }
        });
      });
  };

  return (
    <PrivateRoute>
      <div className="w-full mt-10">
        <h2 className="text-5xl text-center font-description">
          Manage All The Users
        </h2>
        <h3 className="text-2xl text-center my-10">
          Total Users: {users.length}
        </h3>
        <div className="overflow-x-auto w-full">
          <table className="table z-0">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Photo & Name</th>
                <th>Email</th>
                <th>User Role</th>
                <th>Authorize</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user._id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={user?.image} alt={user?.name} />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{user?.name}</div>
                      </div>
                    </div>
                  </td>
                  <td>{user?.email}</td>
                  {user?.role === "admin" ? (
                    <td className="text-green-700 flex gap-1 items-center font-bold">
                      ADMIN <BsFillPatchCheckFill />
                    </td>
                  ) : user?.role === "visitor" ? (
                    <td className="font-bold">VISITOR</td>
                  ) : (
                    <td className="text-red-600 font-bold">BANNED</td>
                  )}

                  <td>
                    {user?.role === "visitor" ? (
                      <>
                        <div
                          className="tooltip tooltip-bottom"
                          data-tip="Make Admin"
                        >
                          <button
                            onClick={() => handleMakeAdmin(user)}
                            className="btn btn-sm"
                          >
                            <BiSolidCheckShield className="w-7 text-green-600 h-7" />
                          </button>
                        </div>
                        <div
                          className="tooltip tooltip-bottom"
                          data-tip="Ban User"
                        >
                          <button
                            onClick={() => handleBanFromAdmin(user)}
                            className="btn btn-sm"
                          >
                            <TbTrashXFilled className="w-7 text-red-600 h-7" />
                          </button>
                        </div>
                      </>
                    ) : user?.role === "admin" ? (
                      <>
                        <div
                          className="tooltip tooltip-bottom"
                          data-tip="Remove Admin Role"
                        >
                          <button
                            onClick={() => handleRemoveFromAdmin(user)}
                            className="btn btn-sm"
                          >
                            <GiShieldDisabled className="w-7 text-red-600 h-7" />
                          </button>
                        </div>
                        <div
                          className="tooltip tooltip-bottom"
                          data-tip="Ban User"
                        >
                          <button
                            onClick={() => handleBanFromAdmin(user)}
                            className="btn btn-sm"
                          >
                            <TbTrashXFilled className="w-7 text-red-600 h-7" />
                          </button>
                        </div>
                      </>
                    ) : (
                      user?.role === "banned" && (
                        <button
                          onClick={() => handleBanFromAdmin(user)}
                          className="btn hidden btn-sm:"
                        >
                          <TbTrashXFilled className="w-7 text-red-600 hidden h-7" />
                        </button>
                      )
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </PrivateRoute>
  );
};

export default ManageUsers;
