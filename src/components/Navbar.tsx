import React from "react";
import { Link } from "react-router";
import { useStore } from "../store";

const Navbar = () => {
  const { loading } = useStore();

  return (
    <nav className="w-full inline-flex items-center justify-between bg-blue-400 p-4 ">
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
        <Link to="/fetch">
          <li className="cursor-pointer p-2 rounded-2xl hover:bg-white hover:text-blue-500 transition duration-500 hover:p-2 hover:rounded-2xl">
            Fetch API
          </li>
        </Link>
      </ul>

      {loading && <p className="mr-12 text-3xl text-white">Uploading ....</p>}
    </nav>
  );
};

export default Navbar;
