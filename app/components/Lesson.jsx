import React from "react";
import Unit from "@/app/components/Unit";

const Lesson = () => {
  return (
    <div className="flex flex-col rounded-md border border-green-400">
      <div className="flex justify-between bg-green-100/35 p-3">
        <p>^ Lesson 1: Marketing introduction</p>
        <p>20:13</p>
      </div>
      <hr className="border border-green-400" />
      <Unit />
      <Unit />
      <Unit />
    </div>
  );
};

export default Lesson;
