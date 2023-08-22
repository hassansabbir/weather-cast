"use client";

import { AuthContext } from "@/Providers/AuthProvider";
import Link from "next/link";
import React, { useContext } from "react";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const navbar = [
    {
      path: "/",
      title: "Home",
    },
    {
      path: "/about",
      title: "About",
    },
    {
      path: "/contact",
      title: "Contact",
    },
    {
      path: "/blog",
      title: "Blog",
    },
  ];

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  return (
    <div className="fixed w-full top-0 z-10 bg-white backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-200">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navbar.map(({ path, title }) => (
                <li className="font-semibold text-blue-800 text-lg " key={path}>
                  <Link href={path}>{title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <a className=" normal-case text-xl md:text-3xl text-blue-800 font-bold ">
            weatherCast
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navbar.map(({ path, title }) => (
              <li className="font-semibold text-blue-800 text-lg " key={path}>
                <Link href={path}>{title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end space-x-3">
          {user && (
            <div className="flex gap-3 items-center border-4 rounded-full ps-5 p-1">
              <h2>{user?.displayName}</h2>
              <div className="avatar">
                <div className="w-10 rounded-full ">
                  <img src={user?.photoURL} />
                </div>
              </div>
            </div>
          )}
          <div className="hidden md:block">
            {user?.email ? (
              <>
                <button
                  onClick={handleLogOut}
                  className="btn btn-active btn-ghost"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <li>
                  <Link href="/logIn">
                    <button className="btn bg-blue-800 text-white">
                      Login
                    </button>
                  </Link>
                </li>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
