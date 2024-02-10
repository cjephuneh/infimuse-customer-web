import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaStar } from "react-icons/fa";
import { IoBookOutline } from "react-icons/io5";
import { PiStudentDuotone } from "react-icons/pi";
import styles from "@/app/CourseCard.module.css";

const CourseCard = () => {
  return (
    <Link
      href="/packages/package-slug"
      className={`hover:cursor-pointer ${styles.card} col-span-4 md:col-span-3 xl:col-span-2 flex flex-col items-center bg-white rounded-lg shadow-md space-y-1 md:space-y-3`}
    >
      <Image
        src={"/packages/image_10.jpg"}
        alt="course"
        width={250}
        height={200}
        className="h-28 md:h-40 w-full rounded-t-lg"
      />
      <div className="flex justify-between items-center w-full px-1">
        <div className="flex md:justify-between items-center gap-1 md:gap-2 md:px-2 md:py-1 rounded-lg bg-green-100 text-sm md:font-bold text-gray-600">
          <div className="w-2 h-2 rounded-full bg-green-500"></div>
          <p className="text-[10px] md:text-xs">web design</p>
        </div>
        <div className="flex justify-between items-center gap-2 text-xs bg-green-500 px-1 md:px-2 md:py-1 rounded-lg text-white">
          <FaStar className="text-yellow-300 text-xs" />
          <small>4.9</small>
        </div>
      </div>
      <h2 className="px-1 text-[12px] md:text-sm font-bold">
        Python for data science and machine learning
      </h2>
      <div className="flex justify-between items-center gap-3 mt-4 w-full px-1">
        <div className="w-1/2 hidden md:flex justify-between md:justify-start items-center gap-2 text-xs">
          <IoBookOutline className="text-green-500" />
          <p>20 classes</p>
        </div>
        <div className="w-full md:w-1/2 flex justify-between md:justify-start items-center gap-2 text-xs">
          <PiStudentDuotone className="text-green-500" />
          <p>100 students</p>
        </div>
      </div>
      <hr className="border w-full" />
      <div className="flex justify-between items-center w-full px-2">
        <p className="text-xs md:text-sm">Ksh.18999</p>
        <div className="flex justify-between items-center gap-2 text-sm">
          <div className="relative hidden md:block">
            <Image
              src="/avatars/avatar_1.jpg"
              alt="avatar"
              width={25}
              height={25}
              className="rounded-full"
            />
            <div className="h-2 w-2 rounded-full bg-green-500 absolute top-0 right-0"></div>
          </div>
          <p className="text-xs md:text-sm text-green-500">John Doe</p>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
