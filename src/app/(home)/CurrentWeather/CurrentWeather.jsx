import Image from "next/image";
import React from "react";
import { FaCalendar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const CurrentWeather = ({ currentWeather }) => {
  return (
    <div className="card-body">
      <p className="text-xl font-semibold">Now</p>

      <div className="flex gap-3">
        <h2 className="card-title text-5xl">
          <small>
            {Math.floor(currentWeather.main.temp - 273.15).toFixed(0)}
            °C
          </small>
        </h2>
        <Image
          src={`https://openweathermap.org/img/w/${currentWeather.weather[0].icon}.png`}
          alt={currentWeather.weather[0].description}
          width={100}
          height={100}
        />
      </div>
      <p className="border-b-2 pb-2 text-2xl font-semibold">
        {currentWeather.weather[0].description}
      </p>
      <h2 className=" flex gap-1">
        <FaCalendar /> {new Date().toDateString()}
      </h2>
      <p className="flex gap-1">
        <FaLocationDot /> {currentWeather.name},{currentWeather.sys.country}
      </p>
      <p></p>
    </div>
  );
};

export default CurrentWeather;
