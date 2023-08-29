"use client";

import React, { useEffect, useState } from "react";
import "./WeatherUpdates.css";
import { FaEye, FaLocationDot, FaWind } from "react-icons/fa6";
import moment from "moment";
import { WiHumidity, WiRefreshAlt } from "react-icons/wi";
import Image from "next/image";
import Link from "next/link";
import WeatherMap from "../SimpleWeatherMap";
import WeatherAlert from "./WeatherAlert";
import { getWeatherIcon } from "@/utils/getWeatherIcon";

const fetchWeather = async (query, setWeather) => {
  const apiKey = "41a5c84ae7ccfff1bc9491b25aa4dbde";
  let weather = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${query}&appid=${apiKey}`
  );
  let response = await weather.json();
  console.log(response);
  setWeather(response);
};

const WeatherUpdates = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    fetchWeather("Dhaka", setWeather);
  }, []);

  if (!weather) {
    return <div>Loading...</div>;
  }

  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  const handleClick = () => {
    fetchWeather(query, setWeather);
  };

  //  temperature , location , current date , feels like
  const currentWeather = weather.list[0];
  const weatherMain = currentWeather.weather[0].main;
  const weatherIcon = getWeatherIcon(weatherMain);
  const currentTemperatureKelvin = currentWeather.main.temp;
  const feelsLikeTemperatureKelvin = currentWeather.main.feels_like;
  const currentTemperatureCelsius = currentTemperatureKelvin - 273.15;
  const feelsLikeTemperatureCelsius = feelsLikeTemperatureKelvin - 273.15;
  const location = weather.city.name;

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
                {currentTemperatureCelsius.toFixed(2)} &#8451;
              </h2>
              <h2 className="text-2xl lg:text-3xl text-white font-bold flex items-center gap-2 ">
                <FaLocationDot className="w-7 h-7" /> {location}
              </h2>
            </div>
            <div>
              <Image
                src={weatherIcon}
                height={100}
                width={120}
                alt={weatherMain}
              />

              <h2 className="text-xl lg:text-2xl  font-bold text-white">
                {currentWeather?.weather[0]?.description}
              </h2>
            </div>
          </div>
          <div>
            <p className="text-xl lg:text-2xl mt-10 text-white">
              Feels like {feelsLikeTemperatureCelsius.toFixed(2)} &#8451;
            </p>
            <p className="text-xl lg:text-2xl text-white p-3">
              {moment(weather?.location?.localtime).format("LT")}
            </p>
            <p className="text-xl lg:text-2xl text-white">
              {moment(weather?.location?.localtime).format("MMMM Do YYYY")}
            </p>
          </div>
          <p className=" text-white text-xl font-bold relative mt-32">
            <Link href="/details" className=" absolute bottom-0  right-0 ">
              {" "}
              More Details..
            </Link>
          </p>
        </div>
        <div className=" weather-related-card w-full lg:w-4/12 rounded-3xl p-10 h-[600px]">
          <div className="flex flex-col gap-10 mt-10 ">
            <h2 className="text-3xl text-white ">
              <p className="flex">
                {" "}
                <FaWind className="text-3xl " /> Wind Speed
              </p>
              <p className="ps-8 pt-1">
                {" "}
                {currentWeather.wind.speed} <small>m/s</small>
              </p>
            </h2>

            {/* Humidity */}
            <h2 className="text-3xl text-white ">
              <p className="flex">
                {" "}
                <WiHumidity className="text-3xl " /> Humidity
              </p>
              <p className="ps-8 pt-1">
                {" "}
                {currentWeather.main.humidity} <small>%</small>
              </p>
            </h2>

            {/* visibility */}
            <h2 className="text-3xl text-white ">
              <p className="flex">
                {" "}
                <FaEye className="text-3xl me-2" /> Visibility
              </p>
              <p className="ps-8 pt-1">
                {" "}
                {currentWeather.visibility / 1000} <small>Km</small>
              </p>
            </h2>

            {/* pressure */}
            <h2 className="text-3xl text-white  ">
              <p className="flex">
                {" "}
                <WiRefreshAlt className="text-5xl " /> Pressure In
              </p>
              <p className="ps-8 pt-1">
                {" "}
                {currentWeather.main.pressure} <small>hPa</small>
              </p>
            </h2>
          </div>
        </div>
      </div>
      <div>
        <div
          className="card h-80 bg-base-100 shadow-xl mt-2 "
          style={{ overflow: "hidden", zIndex: 5 }}
        >
          <WeatherMap city={query} />
        </div>
        <div className="card h-20 lg:w-7/12 bg-base-100 shadow-xl mt-2 text-center flex justify-center mx-auto">
          <WeatherAlert weather={currentWeather} />
        </div>
      </div>
    </>
  );
};

export default WeatherUpdates;
