"use client";

import React from "react";
import Lottie from "lottie-react";
import earth from "../../../assets/animation_ll4ssoaf.json";
import AOSInitializer from "@/AOS/AOSInitializer";
import "./intelligence.css";

const Intelligence = () => {
  return (
    <div className="bg-intelligence py-10">
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
              Step into a new era of real-time weather intelligence with our
              innovative website. We bring you the latest breakthroughs in
              weather forecasting, ensuring you receive precise and
              up-to-the-minute updates that enable you to make informed
              decisions. Stay one step ahead of ever-changing weather conditions
              by harnessing cutting-edge technology, personalized insights, and
              a wealth of comprehensive data at your fingertips. Embark on a
              journey that will redefine your weather awareness and planning
              experience like never before. Don't let the weather catch you off
              guard be in control with our state-of-the-art platform.
            </p>
            <p className="mt-5 text-justify">
              This is the future of weather forecasting, and it's available to
              you right now. Join us on this incredible journey and witness
              firsthand the transformation in how you interact with the weather.
              Say goodbye to uncertainty and hello to unparalleled weather
              intelligence welcome to the future!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intelligence;
