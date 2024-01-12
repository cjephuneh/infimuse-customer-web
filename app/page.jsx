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
          <p className="text-2xl font-light w-8/12 tracking-widest">
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
        <div className="w-1/2 flex flex-col justify-center items-center space-y-4">
          <div className="flex gap-4">
            <div className="w-52 h-52 bg-red-500 rounded-full flex items-center justify-center">
              <p className="text-white text-center leading-6">
                <span className="text-sm font-light">Over</span>
                <br />
                <span className="text-4xl font-extrabold">1K+</span>
                <br />
                <span className="text-sm font-light">students</span>
              </p>
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
            <div className="w-52 h-52 bg-green-500 rounded-full flex items-center justify-center">
              <p className="text-white text-center leading-6">
                <span className="text-sm font-light">Over</span>
                <br />
                <span className="text-4xl font-extrabold">1K+</span>
                <br />
                <span className="text-sm font-light">students</span>
              </p>
            </div>
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
