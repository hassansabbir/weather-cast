"use client";

import { AuthContext } from "@/Providers/AuthProvider";
import Link from "next/link";
import React, { useContext } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Image from "next/image";
import logo from "../../assets/android-chrome-192x192.png";
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
      path: "/community",
      title: "Community",
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
      .then(() => {})
      .catch((error) => console.log(error));
  };

  // navbar fixed z-30 text-white bg-black bg-opacity-20

  const shadowWhiteStyle = {
    textShadow: ".5px .5px 0px white",
  };

  return (
    <div className="fixed bg-transparent w-full top-0 z-20 bg-blue backdrop-filter backdrop-blur-3xl  border-b border-gray-200">
      <div className="navbar ">
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
                    className={`text-base ${
                      currentRoute === "/dashboard/user-home"
                        ? "active"
                        : "default"
                    }`}
                  >
                    Dashboard
                  </Link>
                </li>
              )}

              {user && (
                <li>
                  <Link
                    href="/profile"
                    className={`text-base ${
                      currentRoute === "/profile" ? "active" : "default"
                    }`}
                  >
                    Profile
                  </Link>
                </li>
              )}

              {user?.email ? (
                <li>
                  <h2
                    className="text-base font-semibold"
                    onClick={handleLogOut}
                  >
                    Logout
                  </h2>
                </li>
              ) : (
                <li>
                  <Link className="w-full" href="/logIn">
                    <h2 className="w-full text-base font-semibold">Login</h2>
                  </Link>
                </li>
              )}
            </ul>
          </div>
          <div className="flex items-center gap-3 ms-7 text-blue-800">
            <Image className="w-14 h-14" src={logo} alt="" />
            <p className="text-3xl hidden md:block font-bold">
              weather<span className="text-orange-500">Cast</span>
            </p>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex items-center space-x-5">
            {navbar.map(({ path, title }) => (
              <li
                key={path}
                className={`text-lg ${
                  currentRoute === path ? "active" : "default"
                }`}
              >
                <Link href={path}><span style={shadowWhiteStyle}>{title}</span></Link>
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
                    <span style={shadowWhiteStyle}>Dashboard</span> 
                  </Link>
                </li>
              )}
          </ul>
        </div>
        <div className="navbar-end space-x-3">
          {user ? (
            <div className="flex  items-center border-4 rounded-full  p-1 ">
              <div className="flex  items-center border-r-2 pr-2 ">
              <h2 className="hidden md:block pr-2" style={shadowWhiteStyle}>{user?.displayName}</h2>
              <div className="avatar">
                <div className="w-10 rounded-full" >
                  <img src={user?.photoURL} alt={user?.displayName} />
                </div>
              </div>
              
            </div>
            <div className="flex  items-center  ps-2 p-1">
           
              <button onClick={handleLogOut} className="font-semibold" style={shadowWhiteStyle}>Logout</button>
            
          </div>
            </div>
          ): (
          <div className="flex  items-center border-4 rounded-full  p-1" style={shadowWhiteStyle}>
              <Link className="w-full" href="/logIn">
              <button className="font-semibold"  style={shadowWhiteStyle} >Login</button>
            </Link>
          </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
