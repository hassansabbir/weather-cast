"use client";

import { AuthContext } from "@/Providers/AuthProvider";

import PrivateRoute from "@/routes/PrivetRoute";
import axios from "axios";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { BsFileEarmarkPost } from "react-icons/bs";
import { FaHome, FaStar, FaUsers } from "react-icons/fa";
import { GiReturnArrow } from "react-icons/gi";
import { RxAvatar } from "react-icons/rx";

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

        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          {getUser?.role === "admin" ? (
            <>
              <li className="text-2xl border-b-2 ">
                <Link href="/dashboard/user-home">
                  {" "}
                  <RxAvatar /> Profile
                </Link>
              </li>
              <li className="text-2xl border-b-2 ">
                <Link href="/dashboard/manage-user">
                  {" "}
                  <FaUsers /> Manage User
                </Link>
              </li>
              <li className="text-2xl border-b-2">
                <Link href="/dashboard/manage-articles">
                  {" "}
                  <BsFileEarmarkPost /> Manage Articles
                </Link>
              </li>
              <div className="divider"></div>{" "}
            </>
          ) : (
            <>
              <li className="text-2xl border-b-2 ">
                <Link href="/dashboard/user-home">
                  {" "}
                  <RxAvatar /> Profile
                </Link>
              </li>
              <li className="text-2xl border-b-2">
                <Link href="/dashboard/favorite-location">
                  <FaStar /> Favorite Location
                </Link>
              </li>
              <li className="text-2xl border-b-2">
                <Link href="/dashboard/my-articles">
                  <BsFileEarmarkPost /> My Articles
                </Link>
              </li>
              <div className="divider"></div>{" "}
            </>
          )}
          <li className="text-2xl">
            <Link href="/">
              {" "}
              <GiReturnArrow /> Go to Home
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
