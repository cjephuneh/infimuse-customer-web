import React from "react";
import Review from "./Review";

const Reviews = () => {
  return (
    <div className="border border-green-300 rounded-sm py-7 px-4 md:w-7/12 lg:w-8/12 space-y-5">
      <h1 className="text-xl font-bold">Reviews (23)</h1>
      <hr className="h-0.5 bg-green-500" />
      <Review />
      <hr className="h-0.5 bg-green-500" />
      <Review />
      <hr className="h-0.5 bg-green-500" />
      <Review />
    </div>
  );
};

export default Reviews;
