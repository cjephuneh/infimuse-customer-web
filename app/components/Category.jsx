import Link from "next/link";
import React from "react";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";

const Category = () => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center mb-3">
        <h1 className="font-bold">Category</h1>
        {/* <RiArrowDropDownLine className="text-3xl" /> */}
        <RiArrowDropUpLine className="text-3xl" />
      </div>
      <ul className="flex flex-col gap-2">
        <li>Food</li>
        <li>Hotels</li>
        <li>Night life</li>
        <li>Familiy activities</li>
        <li>Tours</li>
        <li>Hiking</li>
        <li className="text-blue-500">
          <Link href="/">See all</Link>
        </li>
      </ul>
    </div>
  );
};

export default Category;
