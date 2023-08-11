import React from "react";

const WeatherNews = () => {
  return (
    <div className="max-w-[1460px] mx-auto my-10">
      <h2 className="text-5xl font-bold text-center">
        Weather <span className="text-blue-800">News</span> Update
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 my-10 gap-10">
        <div className="bg-base-200 p-10 rounded-3xl shadow-2xl">
          <h2 className="text-3xl font-bold mb-5">
            Record-Breaking Heatwave Sweeps Across the Nation
          </h2>
          <p className="text-xl">
            Meteorologists are reporting an unprecedented heatwave that is
            scorching its way through cities and towns across the country.
            Temperature records have been shattered, with many places
            experiencing highs that have never been seen before. Residents are
            being advised to stay hydrated, seek shade, and take necessary
            precautions to stay safe in the blistering conditions.
          </p>
        </div>
        <div className="bg-base-200 p-10 rounded-3xl shadow-2xl">
          <h2 className="text-3xl font-bold mb-5">
            Coastal Areas Brace for Intense Storm Surge and Flooding
          </h2>
          <p className="text-xl">
            Coastal communities are on high alert as a powerful storm system
            approaches, bringing with it the threat of a significant storm surge
            and coastal flooding. Local authorities are urging residents to
            evacuate low-lying areas and secure their properties. Emergency
            response teams are on standby, ready to assist those in need as the
            storm makes its way towards the coastline.
          </p>
        </div>
        <div className="bg-base-200 p-10 rounded-3xl shadow-2xl">
          <h2 className="text-3xl font-bold mb-5">
            Unseasonable Cold Front Brings Early Snowfall to Mountain Regions
          </h2>
          <p className="text-xl">
            A surprise cold front has swept through the mountainous regions,
            leaving behind a blanket of early snowfall. Ski resorts and winter
            sports enthusiasts are rejoicing at the unexpected opportunity for
            an extended season. However, motorists are advised to use caution on
            roads as icy conditions may pose challenges for travelers.
          </p>
        </div>
        <div className="bg-base-200 p-10 rounded-3xl shadow-2xl">
          <h2 className="text-3xl font-bold mb-5">
            Drought Persists as Water Reserves Reach Critical Levels
          </h2>
          <p className="text-xl">
            The ongoing drought continues to plague several regions, with water
            reserves reaching critically low levels. Farmers are facing
            challenges as crops suffer from the lack of rainfall, and water
            usage restrictions are in place in many communities. Authorities are
            urging residents to conserve water and explore alternative methods
            of irrigation to mitigate the effects of the prolonged dry spell.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeatherNews;
