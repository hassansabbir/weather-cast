"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";

const singleTechnologyPage = ({ params }) => {
  const [selectedFeatureTechnology, setSelectedFeatureTechnology] = useState(
    []
  );
  useEffect(() => {
    fetchData();
  }, []);
  console.log(selectedFeatureTechnology);

  const fetchData = () => {
    axios
      .get(
        `https://weather-cast-server.vercel.app/allProductFeatures/${params.id}`
      )
      .then((data) => {
        setSelectedFeatureTechnology(data.data);
      });
  };
  return (
    <div>
      <h2 className="text-5xl my-10 text-center font-bold">
        Know About Our New
        <br /> Technology
      </h2>
      <div className="max-w-[1460px] mx-auto my-20">
        <div className="flex gap-10 items-center">
          <img
            className="w-96 h-96 rounded-3xl border-4 border-slate-300"
            src={selectedFeatureTechnology?.image}
            alt=""
          />
          <div>
            <h2 className="text-4xl font-bold">
              {selectedFeatureTechnology?.name}
            </h2>
            <p className="text-xl my-5">
              {selectedFeatureTechnology?.shortDescription}
            </p>
            <p className="text-xl my-5">
              {selectedFeatureTechnology?.description}
            </p>
          </div>
        </div>
        <div className="my-20">
          <h2 className="text-5xl font-bold my-10"> Features</h2>
          <div className="grid grid-cols-3 gap-5">
            {selectedFeatureTechnology?.features?.map((feature, i) => (
              <div
                key={i}
                className="p-10 bg-[#F8F6F9] hover:bg-white hover:shadow-2xl hover:shadow-blue-200 rounded-3xl border border-slate-200 "
              >
                <h2 className="text-2xl mb-5 font-bold text-center">
                  {feature?.facility}
                </h2>
                <p className="text-xl text-center">{feature?.facilityDetail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default singleTechnologyPage;
