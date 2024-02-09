import React from "react";
import Lesson from "./Lesson";

const CourseContent = () => {
  return (
    <div className="w-full md:w-7/12 lg:w-8/12 mr-10">
      <div className=" flex justify-between items-center px-2 mb-5">
        <h1 className=" text-2xl font-bold">Course Content</h1>
        <div className=" space-x-7">
          <button className=" text-green-500 text-sm hover:text-green-600">
            Expand All
          </button>
          <small className="">03:45:59</small>
        </div>
      </div>
      {/* courses */}
      <div className="px-3 space-y-3">
        <Lesson />
        <Lesson />
        <Lesson />
      </div>
    </div>
  );
};

export default CourseContent;
