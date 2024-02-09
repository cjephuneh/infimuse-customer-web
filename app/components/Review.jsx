import Image from "next/image";
import React from "react";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";

const Review = () => {
  return (
    <div className="grid grid-cols-3 gap-2 mt-3">
      <div className="flex items-center col-span-3 lg:col-span-1 gap-3">
        <Image
          className="w-12 h-12 rounded-full"
          src={"/image_7.jpg"}
          alt="Reviewer Image"
          width={250}
          height={150}
        />
        <div className="">
          <h2 className="font-semibold">Jane Doe</h2>
          <div className="flex gap-4 lg:flex-col md:gap-0">
            <small className="text-gray-400">8 months ago</small>
            <div className="flex space-x-">
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaRegStar className="text-yellow-500" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex col-span-3 lg:col-span-2">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quae
          qui eligendi nobis quos, nam accusamus similique excepturi laboriosam
          totam?
        </p>
      </div>
    </div>
  );
};

export default Review;
