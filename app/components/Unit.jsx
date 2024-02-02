import React from "react";
import { FaPlay } from "react-icons/fa";

const Unit = () => {
  return (
    <div className="flex justify-between py-2 px-3">
      <div className="flex items-center gap-3">
        <FaPlay className="text-xs text-green-400" />
        <p>introduction</p>
      </div>
      <p>03:00</p>
    </div>
  );
};

export default Unit;
