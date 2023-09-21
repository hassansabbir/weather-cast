"use client";

import React from "react";
import Lottie from "lottie-react";
import earth from "../../assets/animation_ll4ssoaf.json";
import AOSInitializer from "@/AOS/AOSInitializer";

const Intelligence = () => {
  return (
    <div className="max-w-[1460px] mx-auto my-28">
      <AOSInitializer></AOSInitializer>;
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center -space-x-16">
        <div
          data-aos="fade-up"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <Lottie animationData={earth}></Lottie>
        </div>
        <div
          data-aos="fade-down"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="p-10 pl-24"
        >
          <h1 className="text-5xl font-semibold ">
            A New Era of Real-time <br />
            <span className="animate-pulse bg-gradient-to-r from-blue-800 via-blue-650 to-blue-500 bg-clip-text text-transparent font-black">
              Weather Intelligence
            </span>
          </h1>
          <p className="mt-5 text-justify">
            Embark on a journey into a new era of real-time weather
            intelligence. Our website offers you the latest advancements in
            weather forecasting, providing accurate and up-to-the-minute updates
            that empower you to make informed decisions. Stay ahead of changing
            weather conditions with cutting-edge technology, personalized
            insights, and comprehensive data. Experience the next level of
            weather awareness and planning like never before.
          </p>
        </div>
      </div>
      
    </div>
  );
};

export default Intelligence;
