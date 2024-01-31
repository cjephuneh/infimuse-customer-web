import React from "react";
import { IoClose } from "react-icons/io5";

const FilterTag = () => {
  return (
    <div className="flex items-center space-x-3 w-fit p-1 rounded-md border-2 border-blue-500">
      <p className="text-sm">Food</p>
      <IoClose className="cursor-pointer" />
    </div>
  );
};

export default FilterTag;
