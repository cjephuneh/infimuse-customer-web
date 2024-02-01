"use client";
import CourseContent from "@/app/components/CourseContent";
import Host from "@/app/components/Host";
import Overview from "@/app/components/Overview";
import Reviews from "@/app/components/Reviews";
import React, { useState } from "react";
import { FaRegStar, FaLongArrowAltRight } from "react-icons/fa";

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
      <div className="w-[300px] rounded-xl absolute top-10 right-14 bg-white p-5 shadow-lg">
        <p className="font-light">class price</p>
        <h1 className="text-2xl font-bold">Ksh 10,000</h1>
        <p>Course format</p>
        <ul>
          <li>5 video lessons</li>
          <li>4 quizes for testing your knowledge</li>
          <li>3 assignments for you to practice</li>
          <li> 1 project to showcase your skills</li>
          <li>course certificate</li>
        </ul>
        <button className="flex items-center space-x-2  bg-green-500 text-white py-2 px-5 rounded-3xl">
          <p>Enroll now</p>
          <FaLongArrowAltRight />
        </button>
      </div>
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
