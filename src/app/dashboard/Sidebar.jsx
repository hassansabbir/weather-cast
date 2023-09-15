"use client";

import { AuthContext } from "@/Providers/AuthProvider";

import axios from "axios";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
import { BsFileEarmarkPost } from "react-icons/bs";
import { FaPhone, FaStar, FaUsers } from "react-icons/fa";
import { GiReturnArrow } from "react-icons/gi";
import { RxAvatar } from "react-icons/rx";
import { RiLogoutCircleLine } from "react-icons/ri";

const Sidebar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [getUser, setGetUser] = useState([]);
  const currentRoute = usePathname();
  const router = useRouter();

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

  const handleLogOut = () => {
    logOut()
      .then(() => {
        router.push("/logIn");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="drawer max-w-[500px]  lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content ">
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

        <ul className="menu p-4 w-80 min-h-full pt-10 bg-slate-100 text-base-content">
          {getUser?.role === "admin" ? (
            <>
              <li
                className={`text-2xl my-5 rounded-3xl shadow-blue-200 shadow-lg border-b-2 ${
                  currentRoute === "/dashboard/user-home" ? "active" : ""
                }`}
              >
                <Link href="/dashboard/user-home">
                  {" "}
                  <RxAvatar /> Profile
                </Link>
              </li>
              <li
                className={`text-2xl my-5 rounded-3xl shadow-blue-200 shadow-lg border-b-2 ${
                  currentRoute === "/dashboard/manage-user" ? "active" : ""
                }`}
              >
                <Link href="/dashboard/manage-user">
                  {" "}
                  <FaUsers /> Manage User
                </Link>
              </li>
              <li
                className={`text-2xl my-5 rounded-3xl shadow-blue-200 shadow-lg border-b-2 ${
                  currentRoute === "/dashboard/manage-articles" ? "active" : ""
                }`}
              >
                <Link href="/dashboard/manage-articles">
                  {" "}
                  <BsFileEarmarkPost /> Manage Articles
                </Link>
              </li>
              <div className="divider"></div>{" "}
            </>
          ) : (
            <>
              <li
                className={`text-2xl my-5 rounded-3xl shadow-blue-200 shadow-lg border-b-2 ${
                  currentRoute === "/dashboard/user-home" ? "active" : ""
                }`}
              >
                <Link href="/dashboard/user-home">
                  {" "}
                  <RxAvatar /> Profile
                </Link>
              </li>
              <li
                className={`text-2xl my-5 rounded-3xl shadow-blue-200 shadow-lg border-b-2 ${
                  currentRoute === "/dashboard/favorite-location"
                    ? "active"
                    : ""
                }`}
              >
                <Link href="/dashboard/favorite-location">
                  <FaStar /> Favorite Location
                </Link>
              </li>
              <li
                className={`text-2xl my-5 rounded-3xl shadow-blue-200 shadow-lg border-b-2 ${
                  currentRoute === "/dashboard/my-articles" ? "active" : ""
                }`}
              >
                <Link href="/dashboard/my-articles">
                  <BsFileEarmarkPost /> My Articles
                </Link>
              </li>
              <div className="divider"></div>{" "}
            </>
          )}
          <li className="text-2xl mt-auto my-5 rounded-3xl shadow-blue-200 shadow-lg border-b-2">
            <Link href="/contact">
              {" "}
              <FaPhone /> Contact Us
            </Link>
          </li>
          <li className="text-2xl my-5 rounded-3xl shadow-blue-200 shadow-lg border-b-2">
            <Link href="/community">
              {" "}
              <FaUsers /> Community
            </Link>
          </li>
          <li className="text-2xl my-5 rounded-3xl shadow-blue-200 shadow-lg border-b-2 ">
            <Link href="/">
              {" "}
              <GiReturnArrow /> Go to Home
            </Link>
          </li>
          <div className="divider"></div>{" "}
          <li className="text-2xl my-5  mb-32 rounded-3xl shadow-blue-200 shadow-lg border-b-2">
            <button onClick={handleLogOut}>
              <RiLogoutCircleLine /> Log Out
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
