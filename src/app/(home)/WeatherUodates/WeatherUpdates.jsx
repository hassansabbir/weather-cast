"use client";

import React, { useEffect, useState } from "react";
import "./WeatherUpdates.css";
import { FaEye, FaLocationDot, FaMessage, FaWind } from "react-icons/fa6";
import moment from "moment";
import { WiHumidity, WiRefreshAlt } from "react-icons/wi";
import Image from "next/image";
import Link from "next/link";
import { getWeatherIcon } from "@/utils/getWeatherIcon";
import { TileLayer } from "react-leaflet/TileLayer";
import dynamic from "next/dynamic";
// import { MapContainer } from 'react-leaflet/MapContainer'
import { Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
// import L from "leaflet";

const fetchWeather = async (latitude, longitude, setWeather) => {
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
  console.log(weather);
  const [positions, setPositions] = useState([0, 0]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          // Define 'positions' array here
          setPositions([latitude, longitude]);

          fetchWeather(latitude, longitude, setWeather);
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
    return (
      <div className="flex justify-center mt-20">
        <span className="loading loading-bars loading-lg"></span>
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }

  const MapContainer = dynamic(
    () => import("react-leaflet").then((mod) => mod.MapContainer),
    {
      ssr: false,
    }
  );

  const customIcon = new L.Icon({
    iconUrl:
      "https://toppng.com/uploads/preview/map-marker-icon-600x-map-marker-11562939743ayfahlvygl.png", // Replace with your custom icon URL
    iconSize: [32, 32],
    // iconAnchor: [16, 32], // The point of the icon that corresponds to the marker's location
    // popupAnchor: [0, -32], // The point from which the popup should open relative to the iconAnchor
  });

  //  temperature , location , current date , feels like
  const weatherMain = weather?.weather[0]?.main;
  const weatherIcon = getWeatherIcon(weatherMain);
  const currentTemperatureKelvin = weather?.main?.temp;
  const feelsLikeTemperatureKelvin = weather?.main?.feels_like;
  const currentTemperatureCelsius = Math.round(
    currentTemperatureKelvin - 273.15
  );
  const feelsLikeTemperatureCelsius = Math.round(
    feelsLikeTemperatureKelvin - 273.15
  );
  const location = weather?.name;
  const weatherDescription = weather?.weather[0]?.main;
  const windSpeed = weather?.wind?.speed;

  const getBackgroundClass = () => {
    if (weatherDescription.toLowerCase() === "clear") {
      return "bg-clear";
    } else if (weatherDescription.toLowerCase() === "clouds") {
      return "bg-cloud";
    } else if (weatherDescription.toLowerCase() === "rain") {
      return "bg-rain";
    } else if (weatherDescription.toLowerCase() === "thunderstorm") {
      return "bg-thunder";
    } else if (weatherDescription.toLowerCase() === "drizzle") {
      return "bg-drizzle";
    } else {
      return "bg-clear";
    }
  };

  return (
    <div className={`${getBackgroundClass()} py-36`}>
      <h2 className="text-3xl lg:text-5xl font-bold my-10 text-center">
        Live Weather Updates
      </h2>

      <div className=" max-w-[1460px] mx-auto px-5 lg:flex m-16">
        <div className="weather-card bg-white bg-opacity-40 grid-cols-8 mx-auto  rounded-3xl p-10 border lg:h-[500px] lg:w-[800px]">
          <div className="">
            <div className="grid grid-cols-2 justify-between">
              <div>
                <p className="font-semibold text-lg">Current Weather</p>
                <p className="text-lg ps-0 pb-3">
                  {moment(weather?.location?.localtime).format("LT")}
                </p>
              </div>

              <div>
                <button className="btn ">
                  {" "}
                  <Link href="/details" className=" flex cursor-pointer">
                    {" "}
                    <FaMessage className="text-2xl" />{" "}
                    <span className="ps-2">View Full Weather Details ?</span>
                  </Link>
                </button>
              </div>
            </div>
            <div className="flex items-center ">
              <div>
                <Image
                  src={weatherIcon}
                  height={100}
                  width={110}
                  alt={weatherMain}
                />
              </div>
              <h2 className="text-3xl lg:text-6xl flex ps-3 pe-5 font-bold ">
                {currentTemperatureCelsius} <small>℃</small>
              </h2>
              <div className="lg:ms-20">
                <h2 className="text-xl   font-semibold uppercase ">
                  {weatherDescription}
                </h2>
                <p className="text-lg  ">
                  Feels like {feelsLikeTemperatureCelsius} &#8451;
                </p>
              </div>
            </div>

            <h2 className="text-2xl mt-8  font-bold flex items-center gap-2 ">
              <FaLocationDot className="w-5 h-5" /> {location}
            </h2>
            <p className="text-xl lg:text-2xl ">
              {moment(weather?.location?.localtime).format("MMMM Do YYYY")}
            </p>
            <div className="grid grid-cols-2 gap-5 lg:grid-cols-4 justify-between mt-16">
              {/* wind speed  */}
              <div className="text-xl  ">
                <p className="flex">
                  {" "}
                  <FaWind className="text-2xl " /> Wind Speed
                </p>
                <p className="ps-8 pt-1">
                  {" "}
                  {windSpeed} <small>m/s</small>
                </p>
              </div>

              {/* Humidity */}
              <div className="text-xl  ">
                <p className="flex">
                  {" "}
                  <WiHumidity className="text-3xl " /> Humidity
                </p>
                <p className="ps-8 pt-1">
                  {" "}
                  {weather.main.humidity} <small>%</small>
                </p>
              </div>

              {/* visibility */}
              <div className="text-xl  ">
                <p className="flex">
                  {" "}
                  <FaEye className="text-3xl me-2" /> Visibility
                </p>
                <p className="ps-8 pt-1">
                  {" "}
                  {weather.visibility / 1000} <small>Km</small>
                </p>
              </div>

              {/* pressure */}
              <div className="text-xl   ">
                <p className="flex">
                  <WiRefreshAlt className="w-12 h-12" /> Pressure In
                </p>
                <p className="ps-8 pt-1">
                  {" "}
                  {weather.main.pressure} <small>hPa</small>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          className=" weather-related-card grid-cols-4 rounded-3xl   "
          style={{ overflow: "hidden", zIndex: 5 }}
        >
          <div>
            {typeof window !== "undefined" && (
              <MapContainer
                center={positions}
                zoom={13}
                scrollWheelZoom={false}
                style={{ height: "500px", width: "400px" }}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={positions} icon={customIcon}>
                  <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                  </Popup>
                </Marker>
              </MapContainer>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherUpdates;
