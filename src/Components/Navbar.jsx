import React from "react";
import { Link, NavLink } from "react-router";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="navbar pl-12 pr-15 bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/applications">Apps</Link>
            </li>
            <li>
              <Link to="/installation">My Installation</Link>
            </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-2xl flex">
          <img className="h-10 w-10" src={logo} />
          <p className="bg-clip-text text-transparent bg-linear-to-r from-[#632EE3] to-[#9F62F2] font-bold">
            HERO.IO
          </p>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "underline text-lg text-blue-600 font-semibold"
                  : "text-lg text-gray-600 font-semibold"
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "underline text-lg text-blue-600 font-semibold"
                  : "text-lg text-gray-600 font-semibold"
              }
              to="/applications"
            >
              Apps
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/installation"
              className={({ isActive }) =>
                isActive
                  ? "underline text-lg text-blue-600 font-semibold"
                  : "text-lg text-gray-600 font-semibold"
              }
            >
              My Installation
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link
          target="_blank"
          to="https://github.com/Amjoy09/a8-hero"
          className="flex gap-2 text-[18px] font-medium items-center px-3 py-2.5 rounded-[6px] bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white"
        >
          <img src="github.png" alt="" /> Contribute
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
