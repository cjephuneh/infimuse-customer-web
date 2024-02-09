import React from "react";

const Overview = () => {
  return (
    <div className="w-8/12 space-y-8">
      <div className="border border-green-300 rounded-sm py-7 px-4 space-y-3">
        <h1 className="text-2xl font-semibold">Course Description</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita,
          tenetur quisquam officia labore molestias saepe rerum ab inventore
          repudiandae placeat? Nisi cum possimus suscipit laboriosam. Ad
          deleniti at sint quae cum suscipit praesentium debitis architecto
          assumenda accusantium! Labore, consequatur. Odio?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, magni.
          Optio aut cumque alias officiis reprehenderit animi ad distinctio
          ducimus.
        </p>
      </div>

      <div className="border border-green-300 rounded-sm py-7 px-4 space-y-3">
        <h1 className="font-semibold text-2xl">What you will learn</h1>
        <ul className="ml-3 grid grid-cols-2 gap-4 list-none">
          <li className="flex items-start">
            <span className="mr-3 text-green-500">&#8226;</span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque,
            eius enim natus molestiae voluptates voluptate?
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-green-500">&#8226;</span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque,
            eius enim natus molestiae voluptates voluptate?
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-green-500">&#8226;</span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque,
            eius enim natus molestiae voluptates voluptate?
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-green-500">&#8226;</span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque,
            eius enim natus molestiae voluptates voluptate?
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Overview;
