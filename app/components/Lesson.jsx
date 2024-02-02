import React from "react";
import Unit from "@/app/components/Unit";
import { RiArrowDropUpLine } from "react-icons/ri";

const Lesson = () => {
  return (
    <div className="flex flex-col rounded-md border border-green-400">
      <div className="flex justify-between bg-green-100/25 pr-3 pl-0 py-1">
        <div className="flex items-center">
          <RiArrowDropUpLine className="text-green-400 text-4xl" />
          <p>Lesson 1: Marketing introduction</p>
        </div>
        <p className="flex items-center">20:13</p>
      </div>
      <hr className="border border-green-400" />
      <Unit />
      <hr className="border border-green-400" />
      <Unit />
      <hr className="border border-green-400" />
      <Unit />
    </div>
  );
};

export default Lesson;
