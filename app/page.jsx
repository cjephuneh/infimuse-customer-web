import Image from "next/image";
import Api from "./components/Api";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function Home() {
  return (
    <main className="">
      <div className="h-screen container mx-auto flex">
        <div className="w-1/2 flex flex-col justify-center items-start space-y-10">
          <h1 className="text-6xl font-bold">
            Explore. <br />
            Create. <br />
            Inspire.
          </h1>
          <p className="text-2xl pr-1 font-light tracking-widest">
            Explore, Grow and Connect by attending various learning experience
            around you.
          </p>
          <Link
            href={"/"}
            className="flex justify-center items-center space-x-3 px-5 py-3 bg-green-500 text-white rounded-md"
          >
            <p>Explore coures</p>
            <p className="">
              <FaArrowRight />
            </p>
          </Link>
        </div>
        <div className="w-1/2 grid grid-rows-2 grid-cols-2 gap-4  justify-center items-center">
          <div className="text-center text-white space-y-3 p-16 rounded-full bg-red-500">
            <small className="text-lg">over</small>
            <p className="text-4xl font-bold">1K+</p>
            <small>Courses</small>
          </div>
          <div>
            <Image
              className="rounded-lg"
              src={"/image_1.jpg"}
              alt="exploring"
              width={300}
              height={100}
            />
          </div>
          {/* 2nd */}
          <div>
            <Image
              className="rounded-lg"
              src={"/image_2.jpg"}
              alt="Creating"
              width={300}
              height={100}
            />
          </div>
          <div className="text-center text-white space-y-3 p-16 rounded-full bg-green-500">
            <small className="text-lg">over</small>
            <p className="text-4xl font-bold">50k+</p>
            <small className="text-md">Students learning</small>
          </div>
        </div>
      </div>
      {/* next section */}
      <div className="flex">
        <div></div>
        <div></div>
      </div>
    </main>
  );
}
