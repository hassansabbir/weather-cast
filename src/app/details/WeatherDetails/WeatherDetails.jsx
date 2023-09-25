"use client";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import moment from "moment";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import {
  FaCalendar,
  FaEye,
  FaLocationDot,
  FaMoon,
  FaTemperatureFull,
  FaTemperatureHalf,
} from "react-icons/fa6";
import { MdAir, MdSunny } from "react-icons/md";
import { WiHumidity, WiSandstorm } from "react-icons/wi";
import { getWeatherIcon } from "@/utils/getWeatherIcon";
import PrivateRoute from "@/routes/PrivetRoute";
import Swal from "sweetalert2";
import WeatherCharts from "../weatherCharts/WeatherCharts";

import ThreeHourWeather from "../ThreeHourWeather/ThreeHourWeather";
import WeatherMap from "@/app/(home)/SimpleWeatherMap";
import WeatherAlert from "@/app/(home)/WeatherUodates/WeatherAlert";
import HumidityChart from "../HumidityChart";
import PressureChart from "../PressureChart";
import "./WeatherDetails.css";
import WindChart from "../WindChart";
import HourlyForcast from "../HourlyForcast/HourlyForcast";
import "./loaderStyle.css";
import { FaRegClock, FaRegStar, FaStar } from "react-icons/fa";
import { AuthContext } from "@/Providers/AuthProvider";

import GifBanner from "../GifBanner/GifBanner";
// import WeatherLocation from "@/app/(home)/WeatherLocation/WeatherLocation";

const weatherFetch = async (City, unit, setWeather) => {
  try {
    const apiKey = "41a5c84ae7ccfff1bc9491b25aa4dbde";
    const URL = `https://api.openweathermap.org/data/2.5/forecast?q=${City}&&units=${unit}&appid=${apiKey}`;
    const response = await fetch(URL);
    if (!response.ok) {
      Swal.fire({
        title: "City not found. Please enter a valid city name.",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
      return;
    }
    const data = await response.json();
    setWeather(data);
  } catch (error) {
    console.error("Im sorry we couldn't get you weather data", error);
  }
};

const WeatherDetails = () => {
  const { user } = useContext(AuthContext);
  const [City, setCity] = useState("dhaka");
  const [weather, setWeather] = useState(null);
  const [unit, setUnit] = useState("metric");
  const [favbtn, setFavbtn] = useState(false);
  const [isCitySearched, setIsCitySearched] = useState(false);
  const [favoriteLocations, setFavoriteLocations] = useState([]);

  useEffect(() => {
    weatherFetch(City, unit, setWeather);
  }, [unit]);

  const handleSearch = () => {
    if (City.trim() === "") {
      Swal.fire({
        title: "Please enter a city name.",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
      return;
    }
    setFavbtn(false);
    setIsCitySearched(true);
    weatherFetch(City, unit, setWeather);
  };

  const handleUnitChange = (selectedUnit) => {
    setUnit(selectedUnit);
    if (City) {
      weatherFetch(City, selectedUnit, setWeather);
    }
  };

  if (!weather) {
    return (
      <div className="flex justify-center mt-96">
        <div className="loader">Loading...</div>
      </div>
    );
  }

  const handleFavBtn = async () => {
    try {
      if (!isCitySearched) {
        // If the user hasn't searched for a city, don't allow marking as favorite
        Swal.fire({
          title: "Please search for a city first.",
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
        return;
      }

      const isFavoriteLocation = favoriteLocations.some(
        (location) => location === City
      );
      if (isFavoriteLocation) {
        // City is already a favorite, show an alert
        Swal.fire({
          title: "City is already a favorite",
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
        return;
      }
      // Check if the city is already a favorite
      const favoriteLoc = { location: City, email: user?.email };
      // City is not a favorite, allow the user to mark it as a favorite
      const addFavoriteResponse = await fetch(
        "https://weather-cast-server.vercel.app/favLoc",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(favoriteLoc),
        }
      );

      if (addFavoriteResponse.ok) {
        Swal.fire({
          title: "Location marked as favorite",
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
        console.log("Location marked as favorite");
        setFavbtn(true); // Disable the button after marking as favorite
        setFavoriteLocations((prevLocations) => [...prevLocations, City]);
      } else {
        console.log("Failed to mark location as favorite");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const currentWeather = weather.list[0];
  const weatherMain = currentWeather.weather[0].main;
  const weatherIcon = getWeatherIcon(weatherMain);
  const currentTemperature = currentWeather.main.temp;
  const feelsLikeTemperature = currentWeather.main.feels_like;
  const currentDate = new Date(currentWeather.dt_txt);
  const location = weather.city.name;

  // wind direction
  const getWindDirection = (degrees) => {
    const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
    const index = Math.round(degrees / 45) % 8;
    return directions[index];
  };
  const windDirection = getWindDirection(currentWeather.wind.deg);

  // sunrise and sunset time
  const sunriseTime = new Date(weather.city.sunrise * 1000);
  const sunsetTime = new Date(weather.city.sunset * 1000);
  const options = { hour: "numeric", minute: "numeric", hour12: true };

  // for 5 days
  const currentWeather1 = weather.list[1];
  const weatherMain1 = currentWeather1.weather[0].main;
  const weatherIcon1 = getWeatherIcon(weatherMain1);
  const currentTemperature1 = currentWeather1.main.temp;

  const currentWeather2 = weather.list[2];
  const weatherMain2 = currentWeather2.weather[0].main;
  const weatherIcon2 = getWeatherIcon(weatherMain2);
  const currentTemperature2 = currentWeather2.main.temp;

  const currentWeather3 = weather.list[3];
  const weatherMain3 = currentWeather3.weather[0].main;
  const weatherIcon3 = getWeatherIcon(weatherMain3);
  const currentTemperature3 = currentWeather3.main.temp;

  const currentWeather4 = weather.list[4];
  const weatherMain4 = currentWeather4.weather[0].main;
  const weatherIcon4 = getWeatherIcon(weatherMain4);
  const currentTemperature4 = currentWeather4.main.temp;

  const currentWeather5 = weather.list[5];
  const weatherMain5 = currentWeather5.weather[0].main;
  const weatherIcon5 = getWeatherIcon(weatherMain5);
  const currentTemperature5 = currentWeather5.main.temp;

  const currentWeather6 = weather.list[6];
  const weatherMain6 = currentWeather6.weather[0].main;
  const weatherIcon6 = getWeatherIcon(weatherMain6);
  const currentTemperature6 = currentWeather6.main.temp;

  const currentWeather7 = weather.list[7];
  const weatherMain7 = currentWeather7.weather[0].main;
  const weatherIcon7 = getWeatherIcon(weatherMain7);
  const currentTemperature7 = currentWeather7.main.temp;

  const currentWeather8 = weather.list[8];
  const weatherMain8 = currentWeather8.weather[0].main;
  const weatherIcon8 = getWeatherIcon(weatherMain8);
  const currentDate8 = new Date(currentWeather8.dt_txt);
  const currentTemperature8 = currentWeather8.main.temp;

  const currentWeather16 = weather.list[16];
  const weatherMain16 = currentWeather16.weather[0].main;
  const weatherIcon16 = getWeatherIcon(weatherMain16);
  const currentDate16 = new Date(currentWeather16.dt_txt);
  const currentTemperature16 = currentWeather16.main.temp;

  const currentWeather24 = weather.list[24];
  const weatherMain24 = currentWeather24.weather[0].main;
  const weatherIcon24 = getWeatherIcon(weatherMain24);
  const currentDate24 = new Date(currentWeather24.dt_txt);
  const currentTemperature24 = currentWeather24.main.temp;

  const currentWeather32 = weather.list[32];
  const weatherMain32 = currentWeather32.weather[0].main;
  const weatherIcon32 = getWeatherIcon(weatherMain32);
  const currentDate32 = new Date(currentWeather32.dt_txt);
  const currentTemperature32 = currentWeather32.main.temp;

  return (
    <PrivateRoute>
      <GifBanner></GifBanner>
      <div className="bg-clear">
        <div className="bg-white bg-opacity-50">
          <div className="max-w-[1460px] pt-10 mx-auto">
            {/* searchbar  */}
            <div className="w-full mx-auto text-center">
              <input
                value={City}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter city name"
                className="border w-1/3 py-4 pl-5 rounded-2xl  "
                type="search"
                name=""
                id=""
              />

              <button
                onClick={handleSearch}
                className="btn btn-neutral text-white bg-blue-800 ms-4"
              >
                Search
              </button>
            </div>

            <div className="mx-auto text-center">
              <button
                className={`btn btn-circle btn-outline font-bold m-8 ${
                  unit === "metric" ? "active" : ""
                }`}
                onClick={() => handleUnitChange("metric")}
              >
                °C
              </button>
              <button
                className={`btn btn-circle btn-outline font-bold ${
                  unit === "imperial" ? "active" : ""
                }`}
                onClick={() => handleUnitChange("imperial")}
              >
                °F
              </button>
              {/* <WeatherLocation></WeatherLocation>  */}
            </div>

            <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 m-10">
              <div className="col-span-1 me-7">
                <div className="card md:w-5/6 shadow-xl glass">
                  <div className="card-body">
                    <p>Now</p>

                    <div className="flex gap-3">
                      <h2 className="card-title text-5xl">
                        {" "}
                        {Math.round(currentTemperature)}{" "}
                        <small>{unit === "metric" ? "°C" : "°F"}</small>{" "}
                      </h2>
                      <Image
                        src={weatherIcon}
                        height={100}
                        width={120}
                        alt={weatherMain}
                      />
                    </div>
                    <p className="border-b-2 pb-2 text-2xl font-semibold">
                      {currentWeather?.weather[0]?.description}
                    </p>
                    <h2 className=" flex gap-1">
                      {" "}
                      <FaCalendar /> {currentDate.toDateString()}
                    </h2>
                    <div className="flex justify-between">
                      <p className=" flex gap-1">
                        {" "}
                        <FaLocationDot /> {location}
                      </p>

                      <button
                        onClick={handleFavBtn}
                        className={`text-yellow-600 ${
                          favbtn ? "disabled" : ""
                        }`}
                        disabled={favbtn}
                      >
                        {favbtn ? (
                          <FaStar className="text-2xl" />
                        ) : (
                          <FaRegStar className="text-2xl" />
                        )}
                      </button>
                    </div>

                    <p></p>
                  </div>
                </div>

                <p className="m-10 ms-3 text-2xl font-semibold text-blue-700 ">
                  5 Days Forecast
                </p>

                <div className="card md:w-5/6 glass shadow-xl">
                  <div className="card-body">
                    {/* 1st day  */}
                    <div className="flex gap-4 ">
                      <p>
                        <Image
                          src={weatherIcon}
                          height={50}
                          width={50}
                          alt={weatherMain}
                        />
                      </p>
                      <h2 className="  text-xl">
                        {" "}
                        {Math.round(currentTemperature)}
                        <small>{unit === "metric" ? "°C" : "°F"}</small>{" "}
                      </h2>
                      <h2 className=" "> {currentDate.toDateString()}</h2>
                    </div>

                    {/* 2nd day */}
                    <div className="flex gap-4">
                      <p>
                        <Image
                          src={weatherIcon8}
                          height={50}
                          width={50}
                          alt={weatherMain8}
                        />
                      </p>
                      <h2 className=" text-xl">
                        {" "}
                        {Math.round(currentTemperature8)}{" "}
                        <small>{unit === "metric" ? "°C" : "°F"}</small>{" "}
                      </h2>
                      <h2 className=" "> {currentDate8.toDateString()}</h2>
                    </div>
                    {/* 3rd day  */}
                    <div className="flex gap-4">
                      <p>
                        <Image
                          src={weatherIcon16}
                          height={50}
                          width={50}
                          alt={weatherMain16}
                        />
                      </p>
                      <h2 className=" text-xl">
                        {" "}
                        {Math.round(currentTemperature16)}{" "}
                        <small>{unit === "metric" ? "°C" : "°F"}</small>{" "}
                      </h2>
                      <h2 className=" "> {currentDate16.toDateString()}</h2>
                    </div>
                    {/* 4th day  */}
                    <div className="flex gap-4">
                      <p>
                        <Image
                          src={weatherIcon24}
                          height={50}
                          width={50}
                          alt={weatherMain24}
                        />
                      </p>
                      <h2 className=" text-xl">
                        {" "}
                        {Math.round(currentTemperature24)}
                        <small>{unit === "metric" ? "°C" : "°F"}</small>{" "}
                      </h2>
                      <h2 className=" "> {currentDate24.toDateString()}</h2>
                    </div>
                    {/* 5th day  */}
                    <div className="flex gap-4">
                      <p>
                        <Image
                          src={weatherIcon32}
                          height={50}
                          width={50}
                          alt={weatherMain32}
                        />
                      </p>
                      <h2 className=" text-xl">
                        {" "}
                        {Math.round(currentTemperature32)}{" "}
                        <small>{unit === "metric" ? "°C" : "°F"}</small>{" "}
                      </h2>
                      <h2 className=""> {currentDate32.toDateString()}</h2>
                    </div>
                  </div>
                </div>
              </div>
              {/* highlights  */}
              <div className="col-span-2 ">
                <h3 className="font-bold text-2xl m-9 ms-3 text-blue-700">
                  Today Highlights
                </h3>
                <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-4">
                  <div className="card  bg-base-100 shadow-xl">
                    <div className="card-body">
                      <h2 className="font-semibold">Wind Quality Index</h2>
                      <div className="flex gap-2">
                        <p>
                          <MdAir className="text-3xl my-auto" />{" "}
                        </p>
                        <p className="text-xl">
                          {" "}
                          <small>Direction</small> <br /> {windDirection}
                        </p>
                        <p className="text-xl">
                          {" "}
                          <small>Speed</small> <br />{" "}
                          {currentWeather.wind.speed} <small>m/s</small>
                        </p>
                        <p className="text-xl">
                          {" "}
                          <small>Gust</small> <br /> {currentWeather.wind.gust}{" "}
                          <small>m/s</small>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card  bg-base-100 shadow-xl ">
                    <div className="card-body">
                      <h2 className="font-semibold">Sunrise & Sunset</h2>
                      <div className="flex gap-12">
                        <div className="flex gap-2">
                          <p>
                            <MdSunny className="text-3xl mt-5" />{" "}
                          </p>
                          <p className="text-xl">
                            {" "}
                            <small>Sunrise</small> <br />{" "}
                            {sunriseTime.toLocaleTimeString("en-US", options)}{" "}
                          </p>
                        </div>
                        <div className="flex gap-2 ">
                          <p className="ms-10">
                            <FaMoon className="text-3xl mt-5" />{" "}
                          </p>
                          <p className="text-xl">
                            {" "}
                            <small>Sunset</small> <br />{" "}
                            {sunsetTime.toLocaleTimeString("en-US", options)}{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 mt-7 gap-5">
                  <div className="card  bg-base-100 shadow-xl">
                    <div className="card-body">
                      <p>Humidity</p>
                      <div className="flex gap-6">
                        <p>
                          <WiHumidity className="text-4xl" />
                        </p>
                        <p className="text-2xl">
                          {currentWeather.main.humidity} <small>%</small>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="card  bg-base-100 shadow-xl">
                    <div className="card-body">
                      <p>Pressure</p>
                      <div className="flex gap-6">
                        <p>
                          <WiSandstorm className="text-4xl" />
                        </p>
                        <p className="text-2xl">
                          {currentWeather.main.pressure} <small>hPa</small>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="card  bg-base-100 shadow-xl">
                    <div className="card-body">
                      <p>Visibility</p>
                      <div className="flex gap-6">
                        <p>
                          <FaEye className="text-3xl" />
                        </p>
                        <p className="text-2xl">
                          {currentWeather.visibility / 1000} <small>km</small>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="card  bg-base-100 shadow-xl">
                    <div className="card-body">
                      <p>Feels Like</p>
                      <div className="flex gap-6">
                        <p>
                          <FaTemperatureHalf className="text-3xl" />
                        </p>
                        <p className="text-2xl">
                          {Math.round(feelsLikeTemperature)}{" "}
                          <small>{unit === "metric" ? "°C" : "°F"}</small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="font-bold text-2xl m-10 ms-3 text-blue-700">
                  Today at
                </h3>

                <Tabs>
                  <TabList>
                    <Tab>
                      {" "}
                      <li className="flex">
                        <FaTemperatureFull className="text-3xl p-1" />{" "}
                        Temperature
                      </li>{" "}
                    </Tab>
                    <Tab>
                      <li className="flex">
                        <WiHumidity className="text-3xl p-1" /> Humidity
                      </li>
                    </Tab>
                    <Tab>
                      <li className="flex">
                        <WiSandstorm className="text-3xl" />
                        Pressure
                      </li>
                    </Tab>
                    <Tab>
                      <li className="flex">
                        <MdAir className="text-3xl p-1" />
                        Wind
                      </li>
                    </Tab>
                    <Tab>
                      <li className="flex">
                        <FaRegClock className="text-3xl p-1" /> Hourly
                      </li>
                    </Tab>
                  </TabList>

                  <TabPanel>
                    <div>
                      <WeatherCharts
                        weather={weather}
                        currentWeather={currentWeather}
                        currentWeather1={currentWeather1}
                        currentWeather2={currentWeather2}
                        currentWeather3={currentWeather3}
                        currentWeather4={currentWeather4}
                        currentWeather5={currentWeather5}
                        currentWeather6={currentWeather6}
                        currentWeather7={currentWeather7}
                        currentTemperature1={currentTemperature1}
                        unit={unit}
                      />
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div>
                      <HumidityChart
                        weather={weather}
                        currentWeather={currentWeather}
                        currentWeather1={currentWeather1}
                        currentWeather2={currentWeather2}
                        currentWeather3={currentWeather3}
                        currentWeather4={currentWeather4}
                        currentWeather5={currentWeather5}
                        currentWeather6={currentWeather6}
                        currentWeather7={currentWeather7}
                        currentTemperature1={currentTemperature1}
                      />
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div>
                      <PressureChart
                        weather={weather}
                        currentWeather={currentWeather}
                        currentWeather1={currentWeather1}
                        currentWeather2={currentWeather2}
                        currentWeather3={currentWeather3}
                        currentWeather4={currentWeather4}
                        currentWeather5={currentWeather5}
                        currentWeather6={currentWeather6}
                        currentWeather7={currentWeather7}
                        currentTemperature1={currentTemperature1}
                      />
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div>
                      <WindChart
                        weather={weather}
                        currentWeather={currentWeather}
                        currentWeather1={currentWeather1}
                        currentWeather2={currentWeather2}
                        currentWeather3={currentWeather3}
                        currentWeather4={currentWeather4}
                        currentWeather5={currentWeather5}
                        currentWeather6={currentWeather6}
                        currentWeather7={currentWeather7}
                        currentTemperature1={currentTemperature1}
                      />
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 lg:mt-5 gap-2">
                      <ThreeHourWeather weather={weather} unit={unit} />
                    </div>
                  </TabPanel>
                </Tabs>
              </div>
            </div>
            <div>
              <div
                id="interactiveWeatherMap"
                className="card h-80 bg-base-100 shadow-xl mt-2 "
                style={{ overflow: "hidden", zIndex: 5 }}
              >
                <WeatherMap city={City} />
              </div>
              <div className="card h-20 lg:w-7/12 bg-base-100 shadow-xl mt-2 text-center flex justify-center mx-auto">
                <WeatherAlert weather={currentWeather} />
              </div>
            </div>
            <div>
              <HourlyForcast weather={weather}></HourlyForcast>
              {/* <HourlyForcast weather={weather}></HourlyForcast> */}
            </div>
          </div>
        </div>
      </div>
    </PrivateRoute>
  );
};

export default WeatherDetails;
