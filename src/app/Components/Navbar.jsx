"use client";

import { AuthContext } from "@/Providers/AuthProvider";
import Link from "next/link";
import React, { useContext } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Image from "next/image";
import logo from "../../assets/weathercastlogo.png";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const currentRoute = usePathname();

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
    {
      path: "/community",
      title: "Community",
    },
  ];

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  // navbar fixed z-30 text-white bg-black bg-opacity-20

  return (
    <div className="fixed bg-transparent w-full top-0 z-20 bg-white backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-200">
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
            {/*for mobile */}
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-20 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navbar.map(({ path, title }) => (
                <li
                  key={path}
                  className={`text-lg ${
                    currentRoute === path ? "active" : "default"
                  }`}
                >
                  <Link href={path}>{title}</Link>
                </li>
              ))}
              {user && (
                <li>
                  <Link
                    href="/dashboard/user-home"
                    className={`text-lg ${
                      currentRoute === "/dashboard/user-home"
                        ? "active"
                        : "default"
                    }`}
                  >
                    Dashboard
                  </Link>
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
          <ul className="flex space-x-8">
            {navbar.map(({ path, title }) => (
              <li
                key={path}
                className={`text-lg ${
                  currentRoute === path ? "active" : "default"
                }`}
              >
                <Link href={path}>{title}</Link>
              </li>
            ))}
            {user && (
              <li>
                <Link
                  href="/dashboard/user-home"
                  className={`text-lg ${
                    currentRoute === "/dashboard/user-home"
                      ? "active"
                      : "default"
                  }`}
                >
                  Dashboard
                </Link>
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
              className="dropdown-content z-20 menu p-2 shadow bg-base-100 rounded-box w-52"
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
