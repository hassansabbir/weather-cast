import Link from "next/link";
import React from "react";

const Navbar = () => {
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
  return (
    <div className="ms-5 me-6 sticky top-0 z-10 bg-white backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-200">
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
          <a className=" normal-case text-3xl text-blue-800 font-bold ">
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
        <div className="navbar-end">
          <button className="btn btn-active bg-blue-800 text-white">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
