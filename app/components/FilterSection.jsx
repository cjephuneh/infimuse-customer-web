import React from "react";
import Category from "./Category";
import Locality from "./Locality";
import PriceRange from "./PriceRange";
import Capacity from "./Capacity";
import CourseCard from "./CourseCard";
import { FaSearch } from "react-icons/fa";

import FilterTag from "./FilterTags";

const FilterSection = () => {
  return (
    <div className="mb-10 flex md:space-x-10 container mx-auto">
      <div className="hidden md:flex flex-col space-y-5 w-2/12">
        <Category />
        <hr className="border border-black" />
        <Locality />
        <hr className="border border-black" />
        <PriceRange />
        <hr className="border border-black" />
        <Capacity />
      </div>
      <div className="w-full md:w-10/12 flex flex-col space-y-5">
        {/* search bar */}
        <div>
          <form className="flex items-center w-full md:w-3/4 border-4 border-blue-500 rounded-md">
            <input
              className="w-full p-3 focus:outline-none"
              type="search"
              name="search"
              placeholder="Search"
              id=""
            />
            <button
              className="hidden md:flex bg-blue-500 h-12 text-white p-2 rounded-l-none rounded-sm px-8 hover:bg-blue-600"
              // type="submit"
              value="Search"
            >
              Search
            </button>
            <button
              className="flex md:hidden bg-blue-500 w-1/6 h-12 items-center justify-center text-white rounded-l-none rounded-sm  hover:bg-blue-600"
              // type="submit"
              value="Search"
            >
              <FaSearch className="md:hidden text-white" />
            </button>
            {/* <div className="ring ring-black h-full text-xl md:hidden"></div> */}
          </form>
        </div>
        {/* filter tags here */}
        <div className="hidden md:flex md:flex-wrap space-x-4">
          <FilterTag />
          <FilterTag />
          <FilterTag />
          <FilterTag />
          <FilterTag />
          <button className="text-blue-500">Clear all Filters</button>
        </div>

        {/* cards to be rendered here */}
        <div className="grid grid-cols-12 gap-2 md:gap-5">
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
