import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";
import { IoBookOutline } from "react-icons/io5";
import { PiStudentDuotone } from "react-icons/pi";

const CourseCard = () => {
  return (
    <div className="col-span-1 flex flex-col items-center bg-white rounded-lg shadow-lg pb-2">
      <div className="course-image"></div>
      <div className="flex justify-between items-center w-full mt-4 px-2">
        <div className="flex justify-between items-center gap-2 px-2 py-1 rounded-lg bg-green-100 text-sm font-bold text-gray-600">
          <div className="w-2 h-2 rounded-full bg-green-500"></div>
          <p className="text-xs">web design</p>
        </div>
        <div className="flex justify-between items-center gap-2 text-xs bg-green-500 px-2 py-1 rounded-lg text-white">
          <FaStar className="text-yellow-300 text-xs" />
          <small>4.9</small>
        </div>
      </div>
      <h2 className="px-2">Python for data science and machine learning</h2>
      <div className="flex justify-between items-center gap-3 mt-4 w-full px-2">
        <div className="flex justify-between items-center gap-2 text-sm">
          <IoBookOutline className="text-green-500" />
          <p>20 classes</p>
        </div>
        <div className="flex justify-between items-center gap-2 text-sm">
          <PiStudentDuotone className="text-green-500" />
          <p>100 students</p>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
