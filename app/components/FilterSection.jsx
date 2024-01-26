import React from "react";
import Category from "./Category";
import Locality from "./Locality";
import PriceRange from "./PriceRange";
import Capacity from "./Capacity";
import CourseCard from "./CourseCard";

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
      {/* cards to be rendered here */}
      <div className="w-10/12 flex flex-col space-y-5">
        <div>Search bar</div>
        <div>badges of selected filters</div>
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
