import Link from "next/link";
import React from "react";
import { BsCart3 } from "react-icons/bs";

const NavBar = () => {
  return (
    <nav className="absolute top-0 z-50 w-full flex justify-between items-center py-5">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Link href="/">
            <h1>Infimus</h1>
          </Link>
        </div>
        <ul className="flex space-x-10">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">Courses</Link>
          </li>
          <li>
            <Link href="/">Features</Link>
          </li>
          <li>
            <BsCart3 className="text-xl" />
          </li>
          <li>
            <Link
              href="/"
              className="border border-green-600 px-4 py-2 rounded-md"
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Sign up
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
