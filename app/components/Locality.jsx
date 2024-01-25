import Link from "next/link";
import React from "react";
import { RiArrowDropUpLine } from "react-icons/ri";

const Locality = () => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center mb-3">
        <h1 className="font-bold">Locailty</h1>
        {/* <RiArrowDropDownLine className="text-3xl" /> */}
        <RiArrowDropUpLine className="text-3xl" />
      </div>
      <form action="" className="flex flex-col gap-2">
        <div className="flex">
          <input
            className="mr-2 hover:cursor-pointer"
            type="checkbox"
            name="karen"
            id="karen"
          />
          <label className="hover:cursor-pointer" htmlFor="karen" id="karen">
            Karen
          </label>
        </div>

        <div className="flex">
          <input
            className="mr-2 hover:cursor-pointer"
            type="checkbox"
            name="parklands"
            id="parklands"
          />
          <label
            className="hover:cursor-pointer"
            htmlFor="parklands"
            id="parklands"
          >
            Parklands
          </label>
        </div>

        <div className="flex">
          <input
            className="mr-2 hover:cursor-pointer"
            type="checkbox"
            name="kilimani"
            id="kilimani"
          />
          <label
            className="hover:cursor-pointer"
            htmlFor="kilimani"
            id="kilimani"
          >
            Kilimani
          </label>
        </div>

        <div className="flex">
          <input
            className="mr-2 hover:cursor-pointer"
            type="checkbox"
            name="lavington"
            id="lavington"
          />
          <label
            className="hover:cursor-pointer"
            htmlFor="lavington"
            id="lavington"
          >
            Lavington
          </label>
        </div>

        <div className="flex">
          <input
            className="mr-2 hover:cursor-pointer"
            type="checkbox"
            name="muthaiga"
            id="muthaiga"
          />
          <label
            className="hover:cursor-pointer"
            htmlFor="muthaiga"
            id="muthaiga"
          >
            Muthaiga
          </label>
        </div>

        <div className="flex">
          <input
            className="mr-2 hover:cursor-pointer"
            type="checkbox"
            name="riverside"
            id="riverside"
          />
          <label
            className="hover:cursor-pointer"
            htmlFor="riverside"
            id="riverside"
          >
            Riverside
          </label>
        </div>

        <div className="flex">
          <input
            className="mr-2 hover:cursor-pointer"
            type="checkbox"
            name="runda"
            id="runda"
          />
          <label htmlFor="runda" id="runda">
            Runda
          </label>
        </div>

        <div className="flex">
          <input
            className="mr-2 hover:cursor-pointer"
            type="checkbox"
            name="westlands"
            id="westlands"
          />
          <label
            className="hover:cursor-pointer"
            htmlFor="westlands"
            id="westlands"
          >
            Westlands
          </label>
        </div>

        <Link href="/">See all</Link>
      </form>
    </div>
  );
};

export default Locality;
