"use client";

import { AuthContext } from "@/Providers/AuthProvider";

import PrivateRoute from "@/routes/PrivetRoute";
import axios from "axios";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { BsFileEarmarkPost, BsFillPatchCheckFill } from "react-icons/bs";
import { FaHome, FaStar, FaUsers } from "react-icons/fa";

const Sidebar = () => {
  const { user } = useContext(AuthContext);
  const [getUser, setGetUser] = useState([]);

  useEffect(() => {
    fetchData();
  }, [user?.email]);

  const fetchData = () => {
    axios
      .get(`https://weather-cast-server.vercel.app/users/${user?.email}`)
      .then((data) => {
        console.log(data.data);
        setGetUser(data.data);
      });
  };

  if (!getUser) {
    return fetchData();
  }

  return (
    <div className="drawer max-w-[500px] lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <div className="flex flex-col py-24  bg-base-200 text-base-content items-center">
          <img
            src={user?.photoURL}
            alt="adminImg"
            className="w-[150px] h-[150px] rounded-full"
          />
          <h2 className="text-2xl mt-5 font-bold">{user?.displayName}</h2>
          <p className="text-md font-bold underline cursor-pointer">
            {user?.email}
          </p>
          {getUser?.role === "admin" && (
            <p className="font-bold text-2xl flex items-center gap-1 my-3">
              ADMIN
              <BsFillPatchCheckFill className="text-blue-600" />
            </p>
          )}
        </div>

        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          {getUser?.role === "admin" ? (
            <>
              <li className="text-2xl border-b-2 ">
                <Link href="/dashboard/manage-user">
                  {" "}
                  <FaUsers /> Manage User
                </Link>
              </li>
              <li className="text-2xl">
                <Link href="/dashboard/manage-articles">
                  {" "}
                  <BsFileEarmarkPost /> Manage Articles
                </Link>
              </li>
              <div className="divider"></div>{" "}
            </>
          ) : (
            <li className="text-2xl">
              <Link href="/dashboard/favorite-location">
                <FaStar /> Favorite Location
              </Link>
            </li>
          )}
          <li className="text-2xl">
            <Link href="/">
              {" "}
              <FaHome /> Go to Home
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
