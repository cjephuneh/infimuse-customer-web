"use client";
import CourseContent from "@/app/components/CourseContent";
import Host from "@/app/components/Host";
import Overview from "@/app/components/Overview";
import Reviews from "@/app/components/Reviews";

import Video from "next-video";
import React, { useState } from "react";
import { FaRegStar, FaLongArrowAltRight } from "react-icons/fa";
import { TiTick } from "react-icons/ti";

const PackageDetails = () => {
  const [active, setActive] = useState("overview");
  return (
    <div className="mt-20 container mx-auto relative">
      <div className="background-image-detail-page w-full h-[200px] flex items-center pt-3 pb-10 rounded-t-xl">
        <div className="w-2/3 px-5 space-y-2 text-white">
          <h1 className="text-xl font-bold">Marketing course</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit sint
            porro cupiditate obcaecati? Minima, delectus.
          </p>
          <div className="flex items-center space-x-2">
            <FaRegStar />
            <FaRegStar />
            <FaRegStar />
            <FaRegStar />
            <FaRegStar />
            <p>69</p>
          </div>
        </div>
      </div>
      {/* floating card */}
      <div className="md:w-[320px] rounded-xl absolute top-10 right-14 bg-white p-5 shadow-lg">
        <Video
          src="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          className="rounded-xl"
        />
        <p className="text-gray-500">class price</p>
        <h1 className="text-green-500 text-2xl font-bold">Ksh 10,000</h1>
        <p className="mt-5 mb-3 font-semibold">Course format</p>
        <ul>
          <li className="flex items-center space-x-2">
            <TiTick />
            <span>5 video lessons</span>
          </li>
          <li className="flex items-center space-x-2">
            <TiTick />
            <span>4 quizes for testing your knowledge</span>
          </li>
          <li className="flex items-center space-x-2">
            <TiTick />
            <span>3 assignments for you to practice</span>
          </li>
          <li className="flex items-center space-x-2">
            <TiTick />
            <span> 1 project to showcase your skills</span>
          </li>
          <li className="flex items-center space-x-2">
            <TiTick />
            <span>course certificate</span>
          </li>
        </ul>
        <div className="flex items-center justify-center mt-5">
          <button className="flex items-center space-x-2  bg-green-500 hover:bg-green-400 text-white py-2 px-5 rounded-3xl">
            <p>Enroll now</p>
            <FaLongArrowAltRight />
          </button>
        </div>
      </div>
      {/* end of floating card */}

      {/* nav */}
      <nav className="flex items-center space-x-5 mt-10 mb-5">
        <button
          onClick={() => setActive("overview")}
          className={`px-5 pb-3 ${
            active === "overview" && "border-green-500 border-b-2"
          }`}
        >
          Overview
        </button>
        <button
          onClick={() => setActive("course content")}
          className={`px-5 pb-3 ${
            active === "course content" && "border-green-500 border-b-2"
          }`}
        >
          Course content
        </button>
        <button
          onClick={() => setActive("host")}
          className={`px-5 pb-3 ${
            active === "host" && "border-green-500 border-b-2"
          }`}
        >
          Host
        </button>
        <button
          onClick={() => setActive("reviews")}
          className={`px-5 pb-3 ${
            active === "reviews" && "border-green-500 border-b-2"
          }`}
        >
          Reviews
        </button>
      </nav>
      {/* overview */}
      {active === "overview" && <Overview />}
      {active === "course content" && <CourseContent />}
      {active === "host" && <Host />}
      {active === "reviews" && <Reviews />}
    </div>
  );
};

export default PackageDetails;
