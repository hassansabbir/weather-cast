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


const fetchWeather = async (latitude, longitude ,setWeather) => {
  const apiKey = "41a5c84ae7ccfff1bc9491b25aa4dbde";

  // fetch current weather api
  const CurrentWeatherResponse = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`
  );
  const currentWeatherData = await CurrentWeatherResponse.json();
 setWeather(currentWeatherData);
};


const WeatherUpdates = () => {
 

 const [weather, setWeather] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          fetchWeather(latitude, longitude , setWeather);
        },
        (error) => {
          console.error("Error getting user location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
   
  }, []);

  if (!weather) {
    return <div>Loading...</div>;
  }

 

  //  temperature , location , current date , feels like
  const weatherMain = weather.weather[0].main;
const weatherIcon = getWeatherIcon(weatherMain);
const currentTemperatureKelvin = weather.main.temp;
const feelsLikeTemperatureKelvin = weather.main.feels_like;
const currentTemperatureCelsius = Math.round(currentTemperatureKelvin - 273.15);
const feelsLikeTemperatureCelsius = Math.round(feelsLikeTemperatureKelvin - 273.15);
const location = weather.name;
const weatherDescription = weather.weather[0].description;
const windSpeed = weather.wind.speed;
  return (
    <>
      <h2 className="text-5xl font-bold my-10 text-center">
        Live Weather Updates
      </h2>
      <div className="max-w-[1460px] lg:flex space-y-5 lg:space-y-0 gap-5 mx-auto my-10">
        <div className="weather-card space-x-5 w-full lg:w-8/12 rounded-3xl p-10 h-[600px] border">
        
          <div className="lg:flex gap-20 mt-5 lg:mt-14">
            <div className="">
              <h2 className="text-4xl lg:text-7xl mb-5 text-white font-bold font-white">
                {currentTemperatureCelsius} &#8451;
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
                {weatherDescription}
              </h2>
            </div>
          </div>
          <div>
            <p className="text-xl lg:text-2xl mt-10 text-white">
              Feels like {feelsLikeTemperatureCelsius} &#8451;
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
                {windSpeed} <small>m/s</small>
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
                {weather.main.humidity} <small>%</small>
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
                {weather.visibility / 1000} <small>Km</small>
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
                {weather.main.pressure} <small>hPa</small>
              </p>
            </h2>
          </div>
        </div>
      </div>
    
    </>
  );
};

export default WeatherUpdates;
