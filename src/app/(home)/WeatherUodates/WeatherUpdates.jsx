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
import { FaExternalLinkAlt } from "react-icons/fa";
import WeatherMap from "../SimpleWeatherMap";
import { BiCurrentLocation } from "react-icons/bi";
import Swal from "sweetalert2";

import "./loaderStyle.css";

const fetchWeather = async (latitude, longitude, setWeather) => {
  const apiKey = "41a5c84ae7ccfff1bc9491b25aa4dbde";

  // fetch current weather api
  const CurrentWeatherResponse = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`
  );
  const currentWeatherData = await CurrentWeatherResponse.json();
  setWeather(currentWeatherData);
};

const fetchWeatherByCity = async (city, setWeather) => {
  const apiKey = "41a5c84ae7ccfff1bc9491b25aa4dbde"; // Replace with your API key
  const unit = "metric"; // You can change the unit to your desired format

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${apiKey}`
    );

    if (response.ok) {
      const weatherData = await response.json();
      setWeather(weatherData);
    } else {
      console.error("Error fetching weather data for the city");
      setWeather(null); // Clear the weather data in case of an error
    }
  } catch (error) {
    console.error("An error occurred while fetching weather data:", error);
    alert("An error occurred while fetching weather data. Please try again later.");
 
    setWeather(null);
  }
};

const WeatherUpdates = () => {
  const [weather, setWeather] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  console.log(weather);
  const [positions, setPositions] = useState([0, 0]);

  useEffect(() => {
    if (isSearching) {
      // Fetch weather data for the searched city using searchQuery
      fetchWeatherByCity(searchQuery, setWeather);
    } else {
      // Fetch weather data for the user's current location
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
    }
  }
   
  , [isSearching, searchQuery]);

  if (!weather) {
    return <div className="loader">Loading...</div>;
  }

  const handleSearch = (e) => {
    e.preventDefault();
    const query = searchQuery.trim();
  
    if (query === "") {
      // Show an error alert when the search query is empty
      Swal.fire({
        title: "Please enter a city name.",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
    } else {
      setIsSearching(true);
      // Fetch weather data for the searched city using searchQuery
      fetchWeatherByCity(query, setWeather);
    }
   
  };

  const handleCurrentLocation=()=>{
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          // Define 'positions' array here
          setPositions([latitude, longitude]);

          // Fetch weather data for the current location
          fetchWeather(latitude, longitude, setWeather);
        },
        (error) => {
          console.error("Error getting user location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }

  const handleClearSearch = () => {
    setSearchQuery("");
    setIsSearching(false);
    setWeather(null);
  };
  

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
  // const currentTemperatureKelvin = weather?.main?.temp;
  // const feelsLikeTemperatureKelvin = weather?.main?.feels_like;
  const currentTemperatureCelsius = Math.round(weather?.main?.temp);
  const feelsLikeTemperatureCelsius = Math.round( weather?.main?.feels_like);
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
    <div
      id="currentLocationWeather"
      className={`${getBackgroundClass()} py-20`}
    >
      <div className=" max-w-[1460px] mx-auto px-5 lg:flex m-16">
        <div className="weather-card bg-white bg-opacity-70 grid-cols-8 mx-auto  rounded-3xl p-5 lg:p-14 border">
                  {/* Search bar */}
                  <div  className="w-7/12 flex items-center gap-5 mx-auto text-center mb-7">

<div className="border mx-auto  flex justify-between p-2  border-blue-800 rounded-2xl">
        <input
          className="me-2 ps-5 w-full text-2xl bg-transparent border-white"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          type="text"
          name="search"
          placeholder="Enter city name"
        />
        <button onClick={handleClearSearch}>
                <div className=" text-blue-800 font-semibold p-3 cursor-pointer rounded-full">
                  X 
                </div>
              </button>
        <button onClick={handleCurrentLocation}>
          <div className=" bg-blue-800 text-white p-3 cursor-pointer rounded-full">
            <BiCurrentLocation className="w-5 h-5" />
          </div>
        </button>
      </div>

          <button onClick={handleSearch}
         className="btn btn-outline text-lg text-blue-800 border-blue-800 hover:border-blue-800 hover:bg-blue-800 "
          >
            Search
          </button>

        </div>
               
          <div className="lg:flex gap-5">
            <div className="">
       
              <div className="grid grid-cols-2 justify-between">
                <div>
                  <p className="font-semibold text-lg">Current Weather</p>
                  <p className="text-lg ps-0 pb-3">
                    {moment(weather?.location?.localtime).format("LT")}
                  </p>
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
                <div className="">
                  <h2 className="text-xl   font-semibold uppercase ">
                    {weatherDescription}
                  </h2>
                  <p className="text-lg  ">
                    Feels like {feelsLikeTemperatureCelsius} &#8451;
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl mt-8  font-bold flex items-center gap-2 ">
                  <FaLocationDot className="w-5 h-5" /> {location}
                </h2>
                <p className="text-xl lg:text-2xl ">
                  {moment(weather?.location?.localtime).format("MMMM Do YYYY")}
                </p>
                <div>
                  <button className="btn btn-outline mt-5 text-lg text-blue-800 border-blue-800 hover:border-blue-800 hover:bg-blue-800 ">
                    {" "}
                    <Link href="/details" className=" flex cursor-pointer">
                      {" "}
                      <FaExternalLinkAlt />{" "}
                      <span className="ps-2">Full Details ?</span>
                    </Link>
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-16 lg:grid-cols-2 justify-between mt-16">
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
              className=" weather-related-card grid-cols-4 rounded-3xl z-0  "
              style={{ overflow: "hidden", zIndex: 5 , "height" : "620px", "width" : "500px" }}
            >
              {isSearching ? (
                
     <WeatherMap  city={searchQuery} /> 
       ) : (
        typeof window !== "undefined" && (
          <WeatherMap latitude={positions[0]} longitude={positions[1]} />
        )
      )}
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherUpdates;
