import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="w-full bg-blue-400 p-4">
      <ul className="flex gap-6 ml-14">
        <Link to="/">
          <li className="cursor-pointer p-2 rounded-2xl hover:bg-white hover:text-blue-500 transition duration-500 hover:p-2 hover:rounded-2xl">
            Home
          </li>
        </Link>
        <Link to="/upload">
          <li className="cursor-pointer p-2 rounded-2xl hover:bg-white hover:text-blue-500 transition duration-500 hover:p-2 hover:rounded-2xl">
            Upload
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
