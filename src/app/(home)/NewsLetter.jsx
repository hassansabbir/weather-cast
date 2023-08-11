import Image from "next/image";
import React from "react";
import sky from "../../assets/sky.jpg";
const NewsLetter = () => {
  return (
    <div>
      <div className="2xl:mx-auto 2xl:container mx-4 py-16">
        <div className="w-full relative flex items-center justify-center">
          <Image
            width={7979}
            height={2632}
            src={sky}
            alt="dining"
            className="w-full h-full absolute z-0 hidden xl:block"
          />
          <Image
            width={7979}
            height={2632}
            src={sky}
            alt="dining"
            className="w-full h-full absolute z-0 hidden sm:block xl:hidden"
          />
          <Image
            width={7979}
            height={2632}
            src={sky}
            alt="dining"
            className="w-full h-full absolute z-0 sm:hidden"
          />
          <div className="bg-gray-800 bg-opacity-80 md:my-16 lg:py-16 py-10 w-full md:mx-24 md:px-12 px-4 flex flex-col items-center justify-center relative z-40">
            <h1 className="text-4xl font-semibold leading-9 text-white text-center">
              Stay Ahead with WeatherCast Newsletter!🌦️📩
            </h1>
            <p className="text-base leading-normal text-center text-white mt-6 lg:px-20">
              Get real-time weather updates in your inbox with our WeatherCast
              newsletter. Sign up and receive personalized insights, forecasts,
              and tips for your outdoor activities and travel decisions.Stay
              informed about the latest weather trends with our curated content.
              Elevate your weather intelligence by joining our community today.
              Stay informed, stay prepared with WeatherCast!
            </p>
            <div className="sm:border border-blue-800 flex-col sm:flex-row flex items-center lg:w-5/12 w-full mt-12 space-y-4 sm:space-y-0">
              <input
                className="border border-white sm:border-transparent text-base w-full font-medium leading-none text-white p-4 focus:outline-none bg-transparent placeholder-white"
                placeholder="Email Address"
              />
              <button className="focus:outline-none focus:ring-offset-2 focus:ring border border-white sm:border-transparent w-full sm:w-auto bg-blue-800 py-4 px-6 text-white font-semibold hover:bg-opacity-75">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
