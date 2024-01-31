import React from "react";
import { FaRegStar } from "react-icons/fa";

const PackageDetails = () => {
  return (
    <div className="mt-20 container mx-auto relative">
      <div className="background-image-detail-page w-full h-[200px] flex items-center pt-3 pb-10 rounded-t-xl">
        <div className="w-2/3 px-5 space-y-2 text-white">
          <h1 className="text-xl font-bold">Marketing course</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit sint
            porro cupiditate obcaecati? Minima, delectus.
          </p>
          <div className="flex items-center space-x-2">
            <FaRegStar />
            <FaRegStar />
            <FaRegStar />
            <FaRegStar />
            <FaRegStar />
            <p>69</p>
          </div>
        </div>
      </div>

      <div>floating card</div>
      <div>details about class</div>
    </div>
  );
};

export default PackageDetails;
