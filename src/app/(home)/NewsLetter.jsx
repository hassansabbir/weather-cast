import Image from "next/image";
import React from "react";
import SocialMediaShare from "./SocialMedia";
import sky3 from "../../assets/sky3.jpg";

const NewsLetter = () => {
  return (
    <div className="2xl:mx-auto 2xl:container mx-4 py-16">
      <div className="w-full relative flex-wrap items-center justify-center ">
      <Image
          width={7979}
          height={2632}
          src={sky3}
          alt=""
          className="w-full h-full absolute z-0 hidden xl:block"
        />
     
       
        <div className="flex flex-col items-center justify-center relative z-4">
          <div className="bg-gray-600 bg-opacity-50 md:my-16 lg:py-16 py-10  md:mx-24 md:px-12 px-4 ">
            {/* <h1 className="text-4xl font-semibold leading-9 text-white text-center">
              Stay Ahead with WeatherCast!🌦️
            </h1>
            <p className="text-base w-8/12 mx-auto leading-normal text-center text-white mt-6 lg:px-20">
              Share WeatherCast with your friends and followers on social media.
              Help them to stay informed about the latest weather trends with
              our curated content.
            </p> */}
            <div className="flex items-center justify-center relative z-45 text-center text-white">
              <SocialMediaShare></SocialMediaShare>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
