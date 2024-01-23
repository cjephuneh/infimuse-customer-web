import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function Home() {
  return (
    <main className="">
      <div className="bg-gradient-to-bl from-green-100 ">
        <div className="min-h-screen container mx-auto flex justify-center items-center space-x-10">
          <div className="w-1/2 flex flex-col justify-center items-start space-y-10 pt-4">
            <h1 className="text-6xl font-bold">
              Explore. <br />
              Create. <br />
              Inspire.
            </h1>
            <p className="text-lg font-light w-8/12 tracking-widest">
              Explore, Grow and Connect by <br /> attending various learning{" "}
              <br /> experience around you.
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
                  <span className="text-4xl font-extrabold">500K+</span>
                  <br />
                  <span className="text-sm font-light">courses</span>
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
                  <span className="text-4xl font-extrabold">10K+</span>
                  <br />
                  <span className="text-sm font-light">students learning</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* next section */}
      <div className="flex container mx-auto">
        <div className="relative w-1/2">
          <Image
            src={"/image_3.jpg"}
            alt="Third image"
            width={200}
            height={200}
            className="rounded-full"
          />
          <Image
            src={"/image_6.jpg"}
            alt="Third image"
            width={200}
            height={200}
            className="absolute left-96 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
          />
          <Image
            src={"/image_7.jpg"}
            alt="Third image"
            width={200}
            height={200}
            className="rounded-full"
          />
          <Image
            src={"/image_8.jpg"}
            alt="Third image"
            width={200}
            height={200}
            className="rounded-full"
          />
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
    </main>
  );
}
