"use client";

import { AuthContext } from "@/Providers/AuthProvider";
import Link from "next/link";
import React, { useContext } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Image from "next/image";
import logo from '../../assets/weathercastlogo.png';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const navbar = [
    {
      path: "/",
      title: "Home",
    },
    {
      path: "/articles",
      title: "Articles",
    },
    {
      path: "/news",
      title: "News",
    },
    {
      path: "/contact",
      title: "Contact",
    },
    {
      path: "/about",
      title: "About",
    },
    {
      path: "/blog",
      title: "Blog",
    },
  ];

  const handleLogOut = () => {
    logOut()
      .then(() => { })
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
              {user && (
                <li className="font-semibold text-blue-800 text-lg ">
                  <Link href="/dashboard/user-home">Dashboard</Link>
                </li>
              )}
            </ul>
          </div>
          {/* <a className=" normal-case text-xl md:text-3xl text-blue-800 font-bold ">
            weatherCast
          </a> */}
          <Image src={logo} />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navbar.map(({ path, title }) => (
              <li className="font-semibold text-blue-800 text-lg " key={path}>
                <Link href={path}>{title}</Link>
              </li>
            ))}
            {user && (
              <li className="font-semibold text-blue-800 text-lg ">
                <Link href="/dashboard/user-home">Dashboard</Link>
              </li>
            )}
          </ul>
        </div>
        <div className="navbar-end space-x-3">
          {user && (
            <div className="flex gap-3 items-center border-4 rounded-full ps-5 p-1">
              <h2 className="hidden md:block ">{user?.displayName}</h2>
              <div className="avatar">
                <div className="w-10 rounded-full ">
                  <img src={user?.photoURL} />
                </div>
              </div>
            </div>
          )}
          <div className="dropdown dropdown-bottom dropdown-end">
            <label tabIndex={0} className="btn m-1">
              <GiHamburgerMenu className="w-7 h-7" />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <>
                {user?.email ? (
                  <li>
                    <h2 onClick={handleLogOut}>Logout</h2>
                  </li>
                ) : (
                  <>
                    <li>
                      <Link className="w-full" href="/logIn">
                        <h2 className="w-full">Login</h2>
                      </Link>
                    </li>
                  </>
                )}
              </>

              <li>
                <Link href="/profile">Profile</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
