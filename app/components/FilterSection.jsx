import React from "react";
import Category from "./Category";
import Locality from "./Locality";
import PriceRange from "./PriceRange";
import Capacity from "./Capacity";

const FilterSection = () => {
  return (
    <div className="mb-10 flex justify-center items-center space-x-20 container mx-auto">
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
      <div className="w-10/12 flex flex-col space-y-5 ring">
        <h1>cards to be rendered here</h1>
      </div>
    </div>
  );
};

export default FilterSection;
