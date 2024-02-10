import Link from "next/link";
import React from "react";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Login = () => {
  return (
    <div className="flex flex-col justify-center md:flex-row md:h-screen">
      {/* <div className="hidden md:w-1/2 ring">visual impression</div> */}
      <div className="w-full lg:w-1/2 md:px-20 py-5 md:py-10 flex flex-col justify-center">
        <h1 className="text-3xl font-bold text-center  text-green-500">
          Log in
        </h1>
        <div className="flex space-x-3 justify-center mb-5">
          <span>Don&apos;t have an account?</span>
          <Link
            href="/signup"
            className="text-green-500 cursor-pointer hover:underline"
          >
            Sign up
          </Link>
        </div>
        <form className="flex flex-col space-y-5">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-3 py-2 mb-3 border-b  border-green-400 focus:outline-none rounded"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-3 py-2 mb-3 border-b  border-green-400 focus:outline-none rounded"
          />
          <div className="flex justify-center">
            <button className="w-1/2 px-3 py-2 mb-3 bg-green-500 transition-all duration-300 hover:bg-green-600 text-white rounded">
              Login
            </button>
          </div>
        </form>
        <div className="flex justify-center items-center space-x-5 mt-10">
          <hr className="w-1/4 border border-gray-400/70" />
          <span>Or login with</span>
          <hr className="w-1/4 border border-gray-400/70" />
        </div>
        <div className="flex justify-center space-x-5 text-xl mt-10">
          <span className="cursor-pointer p-3 rounded-xl shadow-xl">
            <FaFacebookF className="text-blue-500" />
          </span>
          <span className="cursor-pointer p-3 rounded-xl shadow-xl">
            <FaXTwitter />
          </span>
          <span className="cursor-pointer p-3 rounded-xl shadow-xl">
            <FaGoogle className="text-red-500" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
