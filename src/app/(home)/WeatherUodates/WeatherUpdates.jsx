"use client";

import React, { useEffect, useState } from "react";
import "./WeatherUpdates.css";
import { FaLocationDot, FaWind } from "react-icons/fa6";
import { FaTachometerAlt } from "react-icons/fa";
import moment from "moment";
import Image from "next/image";
import { WiHumidity, WiRefreshAlt } from "react-icons/wi";

const WeatherUpdates = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState([]);

  const fetchWeather = async (query) => {
    let weather = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=0bb2bb33bc02418b82c72237231008&q=${query}`
    );
    let response = await weather.json();
    console.log(response);
    setWeather(response);
  };

  useEffect(() => {
    fetchWeather("Dhaka");
  }, []);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  const handleClick = async (e) => {
    console.log(query);
    let w = await fetchWeather(query);
    // setWeather(w);
    // console.log(weather);
  };

  return (
    <>
      <h2 className="text-5xl font-bold my-10 text-center">
        Live Weather Updates
      </h2>
      <div className="max-w-[1460px] lg:flex space-y-5 lg:space-y-0 gap-5 mx-auto my-10">
        <div className="weather-card space-x-5 w-full lg:w-8/12 rounded-3xl p-10 h-[600px] border">
          <input
            value={query}
            onChange={handleChange}
            className="border py-4 pl-5 rounded-2xl w-10/12"
            type="search"
            placeholder="search"
            name=""
            id=""
          />
          <button
            onClick={handleClick}
            className="btn btn-neutral text-white bg-blue-800"
          >
            Search
          </button>
          <div className="lg:flex gap-20 mt-5 lg:mt-14">
            <div className="">
              <h2 className="text-4xl lg:text-7xl mb-5 text-white font-bold font-white">
                {weather?.current?.temp_c} &#8451;
              </h2>
              <h2 className="text-2xl lg:text-3xl text-white font-bold flex items-center gap-2 ">
                <FaLocationDot className="w-7 h-7" /> {weather?.location?.name},{" "}
                <br />
                {weather?.location?.country}
              </h2>
            </div>
            <div>
              <Image
                src={`https:${weather?.current?.condition?.icon}`}
                alt="logo"
                width={100}
                height={100}
              />
              <h2 className="text-xl lg:text-2xl  font-bold text-white">
                {weather?.current?.condition?.text}
              </h2>
            </div>
          </div>
          <div>
            <p className="text-xl lg:text-2xl mt-10 text-white">
              Feels like {weather?.current?.feelslike_c} &#8451;
            </p>
            <p className="text-xl lg:text-2xl text-white">
              {moment(weather?.location?.localtime).format("LT")}
            </p>
            <p className="text-xl lg:text-2xl text-white">
              {moment(weather?.location?.localtime).format("MMMM Do YYYY")}
            </p>
          </div>
        </div>
        <div className=" weather-related-card w-full lg:w-4/12 rounded-3xl p-10 h-[600px]">
          <div className="flex flex-col gap-10 mt-10 ">
            <h2 className="text-3xl text-white flex gap-3">
              <FaWind /> Wind Speed <br /> {weather?.current?.wind_kph} kph
            </h2>
            <h2 className="text-3xl text-white flex gap-3">
              <WiHumidity /> Humidity <br /> {weather?.current?.humidity}
            </h2>
            <h2 className="text-3xl text-white flex gap-3">
              <FaTachometerAlt /> UV Index <br /> {weather?.current?.uv}
            </h2>
            <h2 className="text-3xl text-white flex gap-3">
              <WiRefreshAlt className="w-10 h-10" /> Pressure In <br />{" "}
              {weather?.current?.pressure_in}
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherUpdates;
