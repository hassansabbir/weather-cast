import Link from "next/link";
import React from "react";

const BlogCard = ({ blog }) => {
  return (
    <div className="mx-auto w-full max-w-sm rounded-2xl bg-blue-100">
      <div className="flex justify-center overflow-hidden ">
        <div className="w-full transform transition-transform duration-500 ease-in-out hover:scale-110">
          <img
            className="h-[250px] w-full rounded-t-2xl"
            // width={384}
            // height={200}
            src={blog?.photo}
            alt=""
          />
        </div>
      </div>

      <div className=" p-5">
        <h2 className="text-base font-medium text-gray-800 md:text-lg">
          {blog?.name}
        </h2>

        <div className="rounded mb-2 ">
          <h3 className="text-lg font-semibold mb-1">{blog?.title}</h3>

          <p className="text-gray-800">
            {blog.description?.slice(0, 100)}...
            <Link href={`/blog/${blog._id}`} className="text-blue-600">
              Read More
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
