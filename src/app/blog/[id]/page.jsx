"use client";

import React, { useEffect, useState } from "react";

const BlogDetail = ({ params }) => {
  const [blog, setBlog] = useState([]);
  useEffect(() => {
    fetch(`https://weather-cast-server.vercel.app/blogs/${params.id}`)
      .then((response) => response.json())
      .then((data) => {
        setBlog(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching blog post:", error);
      });
  }, []);

  return (
    <div className="mt-6 bg-gray-50">
      <div className=" px-10 py-6 mx-auto">
        <div className="max-w-6xl px-10 py-6 mx-auto bg-gray-50">
          <img
            className="object-cover w-full shadow-sm h-full block transition duration-200 transform hover:scale-110"
            src={blog.photo}
          />

          <div className="flex items-center justify-center mt-4 mb-4">
            <h1 className="px-2 py-4 font-bold bg-red-400 text-white rounded-lg sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl">
              {blog.name}
            </h1>
          </div>
          <div className="mt-2">
            <h1 className="sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl font-bold text-blue-600 ">
              {blog.title}
            </h1>
          </div>

          <div className="max-w-4xl px-10  mx-auto text-2xl text-gray-700 mt-4 rounded bg-gray-100">
            <div>
              <p className="mt-2 p-8 text-justify">{blog.description}</p>
            </div>
          </div>
          <div>
            {blog.steps?.map((b) => (
              <li>{b}</li>
            ))}
          </div>
        </div>
        <h2 className="text-2xl mt-4 text-gray-500 font-bold text-center">
          Related Blog
        </h2>
        <div className="max-w-7xl mx-auto px-5 mb-3">
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            <div className="grid grid-cols-12 col-span-12 gap-7">
              <div className="flex flex-col items-start col-span-12 overflow-hidden shadow-sm rounded-xl md:col-span-6 lg:col-span-4">
                <a
                  href="#_"
                  className="block transition duration-200 ease-out transform hover:scale-110"
                >
                  <img
                    className="object-cover w-full shadow-sm h-full"
                    src="https://i.ibb.co/ZxZ8Kyn/30ab920d-f036-3938-8074-e62740f7ef9a.jpg"
                  />
                </a>
                <div className="relative flex flex-col items-start px-6 bg-white border border-t-0 border-gray-200 py-7 rounded-b-2xl">
                  <div className="bg-indigo-400 absolute top-0 -mt-3 flex items-center px-3 py-1.5 leading-none w-auto  rounded-full text-xs font-medium  text-white">
                    <span>Soil Pollution</span>
                  </div>
                  <h2 className="text-base text-gray-500 font-bold sm:text-lg md:text-xl">
                    <a
                      className="text-blue-500 hover:underline"
                      href="https://warmheartworldwide.org/why-should-you-care/"
                    >
                      Why should you care about a small town in Thailand that
                      has repeatedly earned
                    </a>
                  </h2>
                </div>
              </div>

              <div className="flex flex-col items-start col-span-12 overflow-hidden shadow-sm rounded-xl md:col-span-6 lg:col-span-4 ">
                <a
                  href="#_"
                  className="block transition duration-200 ease-out transform hover:scale-110"
                >
                  <img
                    className="object-cover w-full shadow-sm h-full"
                    src="https://i.ibb.co/vwcmhRb/Getty-Images-1192659783-smaller.jpg"
                  />
                </a>
                <div className="relative flex flex-col items-start px-6 bg-white border border-t-0 border-gray-200 py-7 rounded-b-2xl">
                  <div className="bg-red-400 absolute top-0 -mt-3 flex items-center px-3 py-1.5 leading-none w-auto  rounded-full text-xs font-medium  text-white">
                    <span>Wildfire</span>
                  </div>
                  <h2 className="text-base text-gray-500 font-bold sm:text-lg md:text-xl">
                    <a
                      className="text-blue-500 hover:underline"
                      href="https://warmheartworldwide.org/air-pollution/"
                    >
                      Pollution in Asia, Are You in Jeopardy? If you live on
                      planet earth, the answer is a resounding
                    </a>
                  </h2>
                </div>
              </div>

              <div className="flex flex-col items-start col-span-12 overflow-hidden shadow-sm rounded-xl md:col-span-6 lg:col-span-4">
                <a
                  href="#_"
                  className="block transition duration-200 ease-out transform hover:scale-110"
                >
                  <img
                    className="object-cover w-full shadow-sm h-full"
                    src="https://i.ibb.co/cDFdc2H/Image-by-Peggychoucair-from-Pixabay.jpg"
                  />
                </a>
                <div className="relative flex flex-col items-start px-6 bg-white border border-t-0 border-gray-200 py-7 rounded-b-2xl">
                  <div className="bg-purple-500 absolute top-0 -mt-3 flex items-center px-3 py-1.5 leading-none w-auto  rounded-full text-xs font-medium text-white">
                    <span>Air Pollution</span>
                  </div>
                  <h2 className="text-base text-gray-500 font-bold sm:text-lg md:text-xl">
                    <a
                      className="text-blue-500 hover:underline"
                      href="https://warmheartworldwide.org/converting-smoke-to-biochar/"
                    >
                      How do you tackle the problem of convincing farmers to
                      stop burning their crop fields after harvest?
                    </a>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
