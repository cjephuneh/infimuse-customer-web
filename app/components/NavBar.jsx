import Link from "next/link";
import React from "react";
import { BsCart3 } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosSearch } from "react-icons/io";

const NavBar = () => {
  return (
    <nav className="w-full flex justify-between items-center md:py-5 md:shadow-xl shadow-gray-300">
      <div className="container mx-auto md:flex hidden justify-between items-center">
        <div>
          <Link href="/">
            <h1>Infimus</h1>
          </Link>
        </div>
        <ul className="flex space-x-10">
          <li>
            <Link href="/">Become a host</Link>
          </li>
          <li>
            <Link href="/">Packages</Link>
          </li>
          <li>
            <BsCart3 className="text-xl" />
          </li>
          <div className="flex space-x-3 items-center justify-center">
            <li>
              <Link
                href="/login"
                className="border border-green-600 hover:bg-green-600 hover:text-white px-4 py-2 rounded-md"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                href="/signup"
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
              >
                Sign up
              </Link>
            </li>
          </div>
        </ul>
      </div>
      <div className="container mx-auto flex md:hidden justify-between items-center py-5">
        <GiHamburgerMenu />
        <div>
          <Link href="/">
            <h1 className="text-2xl font-bold">Infimus</h1>
          </Link>
        </div>
        <div className="flex space-x-5 items-center justify-center">
          <IoIosSearch className="text-xl" />
          <BsCart3 className="text-xl" />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
