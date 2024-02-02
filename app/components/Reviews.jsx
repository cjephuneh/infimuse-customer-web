import React from "react";
import Review from "./Review";

const Reviews = () => {
  return (
    <div className="w-7/12 space-y-5">
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
