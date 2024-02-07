import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { LuMusic } from "react-icons/lu";
import { IoIosFitness } from "react-icons/io";
import { HiOutlinePaintBrush } from "react-icons/hi2";
import { HiOutlineAcademicCap } from "react-icons/hi";
import FilterSection from "./components/FilterSection";

export default function Home() {
  return (
    <main className="">
      <div className="bg-gradient-to-bl from-green-100 rounded-b-2xl">
        <div className="min-h-[90vh] container mx-auto flex flex-col-reverse md:flex-row md:flex justify-center items-center md:space-x-10">
          <div className="w-full md:w-1/2 flex flex-col justify-center items-start space-y-10 pt-4">
            <div className="w-full text-center md:text-left">
              <h1 className="text-6xl font-bold w-full">Explore.</h1>
              <h1 className="text-6xl text-red-500 font-bold w-full md:text-center md:pl-24">
                Create.
              </h1>
              <h1 className="text-6xl font-bold w-full">Inspire.</h1>
            </div>
            <p className="text-lg font-light w-full text-center md:text-left md:w-8/12 tracking-widest">
              Explore, Grow and Connect by <br /> attending various learning{" "}
              <br /> experience around you.
            </p>
            <div className="w-full flex justify-center md:justify-start">
              <Link
                href={"/"}
                className="flex justify-center items-center w-fit space-x-3 px-5 py-3 bg-green-500 hover:bg-green-600 text-white rounded-md"
              >
                <span>Explore coures</span>
                <span className="">
                  <FaArrowRight />
                </span>
              </Link>
            </div>
          </div>
          {/* visual section */}
          <div className="w-full md:w-1/2 flex flex-col justify-center items-center space-y-4">
            <div className="flex gap-4">
              <div className="w-32 h-32 sm:w-52 sm:h-52 bg-red-500 rounded-full flex items-center justify-center">
                <div className="text-white text-center leading-6">
                  <span className="text-sm font-light">Over</span>
                  <br />
                  <span className="text-4xl font-extrabold">500K+</span>
                  <br />
                  <span className="text-sm font-light">courses</span>
                </div>
              </div>
              <Image
                src={"/image_1.jpg"}
                alt="first image"
                width={200}
                height={200}
                className="rounded-lg"
              />
            </div>
            <div className="flex gap-4">
              <Image
                src={"/image_2.jpg"}
                alt="first image"
                width={200}
                height={200}
                className="rounded-lg"
              />
              <div className="w-32 h-32 sm:w-52 sm:h-52 bg-green-500 rounded-full flex items-center justify-center">
                <p className="text-white text-center leading-6">
                  <span className="text-sm font-light">Over</span>
                  <br />
                  <span className="text-4xl font-extrabold">10K+</span>
                  <br />
                  <span className="text-xs sm:text-sm font-light">
                    students learning
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2nd section  (classes)*/}
      <div className="mb-10 flex justify-center items-center space-x-10 container mx-auto">
        <div className="flex space-x-5 w-1/2">
          <div className="flex flex-col space-y-10">
            <div className="image-3 rounded-full w-40 h-40"></div>
            <div className="image-6 rounded-full w-52 h-52"></div>
          </div>
          <div className="flex flex-col space-y-5">
            <div className="image-7 rounded-full w-20 h-20"></div>
            <div className="image-8 rounded-full w-56 h-56"></div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center space-y-5 w-1/2">
          <h1 className="text-5xl font-bold">Classes.</h1>
          <p className="text-xl font-light tracking-widest">
            A single day interactive, <br />
            group classes making learning <br />
            and exploring something new, <br />
            a fun and entertaing <br />
            experience.
          </p>
        </div>
      </div>

      {/* 3rd section (workshop & packages) */}
      <div className="mb-10 flex flex-row-reverse justify-center items-center space-x-10 container mx-auto">
        <div className="relative w-1/2 flex flex-col justify-center items-center space-y-3">
          <Image
            src={"/packages/image_9.jpg"}
            width={175}
            height={200}
            alt="image_9"
            className="rounded-xl"
          />
          <Image
            src={"/packages/image_10.jpg"}
            width={175}
            height={200}
            alt="image_9"
            className="rounded-xl z-10 ring-8 ring-white"
          />
          <Image
            src={"/packages/image_11.jpg"}
            width={175}
            height={200}
            alt="image_9"
            className="absolute left-72 rounded-xl ring-8 ring-white"
          />
        </div>
        <div className="flex flex-col justify-center items-start space-y-5 w-1/2">
          <h1 className="text-5xl font-bold">
            Workshops <br /> & Packages.
          </h1>
          <p className="text-xl font-light tracking-widest">
            Grow and develope your skillset with multiple interactive classes
            spanned over a few weeks while interacting with cool people to
            learn, grow and connect with.
          </p>
        </div>
      </div>
      {/* 4th section (top categories) */}
      <div className="mb-10 flex flex-col justify-center items-center space-x-10 container mx-auto space-y-5">
        <h1 className="capitalize font-normal text-5xl text-center">
          our top categories
        </h1>
        <div className="flex justify-center items-center space-x-10">
          <div className="flex flex-col justify-center items-start space-y-5">
            <div className="p-5 bg-gray-100 rounded-xl">
              <LuMusic className="text-9xl font-semibold" />
            </div>
            <p className="font-bold text-2xl">Music</p>
          </div>
          <div className="flex flex-col justify-center items-start space-y-5">
            <div className="p-5 bg-gray-100 rounded-xl">
              <IoIosFitness className="text-9xl" />
            </div>
            <p className="font-bold text-2xl">Fitness</p>
          </div>
          <div className="flex flex-col justify-center items-start space-y-5">
            <div className="p-5 bg-gray-100 rounded-xl">
              <HiOutlinePaintBrush className="text-9xl" />
            </div>
            <p className="font-bold text-2xl">Art</p>
          </div>
          <div className="flex flex-col justify-center items-start space-y-5">
            <div className="p-5 bg-gray-100 rounded-xl">
              <HiOutlineAcademicCap className="text-9xl" />
            </div>
            <p className="font-bold text-2xl">Academics</p>
          </div>
        </div>
      </div>
      {/* 5th section (search section) */}
      <FilterSection />
    </main>
  );
}
