"use client";

import React from "react";
import Lottie from "lottie-react";
import earth from "../../assets/animation_ll4ssoaf.json";

const Intelligence = () => {
  return (
    <div>
      <div className="grid grid-cols-2 justify-center items-center -space-x-16">
        <div>
          <Lottie animationData={earth}></Lottie>
        </div>
        <div className="p-10">
          <h1 className="text-5xl font-semibold ">
            A New Era of Real-time <br />
            <span className="text-blue-800"> Weather Intelligence</span>
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
