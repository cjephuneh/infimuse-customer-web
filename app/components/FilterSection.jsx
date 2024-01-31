import React from "react";
import Category from "./Category";
import Locality from "./Locality";
import PriceRange from "./PriceRange";
import Capacity from "./Capacity";
import CourseCard from "./CourseCard";

import FilterTag from "./FilterTags";

const FilterSection = () => {
  return (
    <div className="mb-10 flex justify-center space-x-20 container mx-auto">
      <div className="flex flex-col space-y-5 w-2/12">
        <Category />
        <hr className="border border-black" />
        <Locality />
        <hr className="border border-black" />
        <PriceRange />
        <hr className="border border-black" />
        <Capacity />
      </div>
      <div className="w-10/12 flex flex-col space-y-5">
        {/* search bar */}
        <div>
          <form className="flex w-3/4 border-4 border-blue-500 rounded-md">
            <input
              className="w-full p-3 focus:outline-none"
              type="search"
              name="search"
              placeholder="Search"
              id=""
            />
            <button
              className="bg-blue-500 text-white p-2 rounded-l-none rounded-sm px-8 hover:bg-blue-600"
              // type="submit"
              value="Search"
            >
              Search
            </button>
          </form>
        </div>
        {/* filter tags here */}
        <div className="flex flex-wrap space-x-4">
          <FilterTag />
          <FilterTag />
          <FilterTag />
          <FilterTag />
          <FilterTag />
          <button className="text-blue-500">Clear all Filters</button>
        </div>

        {/* cards to be rendered here */}
        <div className="grid grid-cols-3 gap-5">
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
