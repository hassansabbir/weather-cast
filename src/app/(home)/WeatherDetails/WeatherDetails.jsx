"use client";

import moment from "moment";
import { FaCloud } from "react-icons/fa6";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  FaCalendar,
  FaEye,
  FaLocationDot,
  FaMoon,
  FaTemperatureHalf,
} from "react-icons/fa6";
import { MdAir, MdSunny } from "react-icons/md";
import {
 
  WiHumidity,
  WiSandstorm,
} from "react-icons/wi";
import { getWeatherIcon } from "@/utils/getWeatherIcon";

const weatherFetch = async (City,unit, setWeather) => {
  try {
    const apiKey = "41a5c84ae7ccfff1bc9491b25aa4dbde";
    const URL = `https://api.openweathermap.org/data/2.5/forecast?q=${City}&&units=${unit}&appid=${apiKey}`;
    const response = await fetch(URL);
    const data = await response.json();
    setWeather(data);
  } catch (error) {
    console.error("Im sorry we couldn't get you weather data", error);
  }
};

const WeatherDetails = () => {
  const [City, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [unit, setUnit] = useState('metric');
 

  useEffect(() => {
    weatherFetch("Dhaka",unit, setWeather);
  }, [unit ]);

  const handleSearch = () => {
    weatherFetch(City,unit , setWeather);
  };

  const handleUnitChange = (selectedUnit) => {
    setUnit(selectedUnit);
    console.log(selectedUnit);
    if (City) {
      weatherFetch(City, selectedUnit, setWeather);
      console.log(City);
    }
  };

  if (!weather) {
    return <div>Loading...</div>;
  }


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

  // for 7 days
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
    <div className="max-w-[1460px] mx-auto">
    
      
      {/* searchbar  */}
      <div className=" w-full mx-auto text-center">
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
      <button className="btn btn-circle btn-outline font-bold m-8" onClick={()=>handleUnitChange("metric")}>°C</button>
      <button className="btn btn-circle btn-outline font-bold" onClick={()=>handleUnitChange("imperial")}>°F</button>

      </div>
    
      <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 m-10">
        <div className="col-span-1 me-7">
          <div className="card md:w-5/6 bg-base-100 shadow-xl">
            <div className="card-body">
              <p>Now</p>

              <div className="flex gap-3">
                <h2 className="card-title text-5xl">
                  {" "}
                  {Math.round(currentTemperature)} <small>{unit==="metric"?'°C':'°F'}</small>{" "}
                </h2>
                <Image  src={weatherIcon} height={100} width={120} alt={weatherMain} />
              </div>
              <p className="border-b-2 pb-2 text-2xl font-semibold">
                {currentWeather?.weather[0]?.description}
              </p>
              <h2 className=" flex gap-1">
                {" "}
                <FaCalendar /> {currentDate.toDateString()}
              </h2>
              <p className=" flex gap-1">
                {" "}
                <FaLocationDot /> {location}
              </p>
              <p></p>
            </div>
          </div>

          <p className="m-10 text-xl font-semibold">5 Days Forecast</p>

          <div className="card md:w-5/6 bg-base-100 shadow-xl">
            <div className="card-body">
              {/* 1st day  */}
              <div className="flex gap-4 ">
                <p>
                <Image  src={weatherIcon} height={50} width={50} alt={weatherMain} />
                
                </p>
                <h2 className="  text-xl">
                  {" "}
                  {Math.round(currentTemperature)}<small>{unit==="metric"?'°C':'°F'}</small>{" "}
                </h2>
                <h2 className=" "> {currentDate.toDateString()}</h2>
              </div>

          {/* 2nd day */}
              <div className="flex gap-4">
                <p>
                <Image  src={weatherIcon8} height={50} width={50} alt={weatherMain8} />
                </p>
                <h2 className=" text-xl">
                  {" "}
                  {Math.round(currentTemperature8)} <small>{unit==="metric"?'°C':'°F'}</small>{" "}
                </h2>
                <h2 className=" "> {currentDate8.toDateString()}</h2>
              </div>
              {/* 3rd day  */}
              <div className="flex gap-4">
                <p>
                <Image  src={weatherIcon16} height={50} width={50} alt={weatherMain16} />
                </p>
                <h2 className=" text-xl">
                  {" "}
                  {Math.round(currentTemperature16)} <small>{unit==="metric"?'°C':'°F'}</small>{" "}
                </h2>
                <h2 className=" "> {currentDate16.toDateString()}</h2>
              </div>
                {/* 4th day  */}
              <div className="flex gap-4">
                <p>
                <Image  src={weatherIcon24} height={50} width={50} alt={weatherMain24} />
                </p>
                <h2 className=" text-xl">
                  {" "}
                  {Math.round(currentTemperature24)}<small>{unit==="metric"?'°C':'°F'}</small>{" "}
                </h2>
                <h2 className=" "> {currentDate24.toDateString()}</h2>
              </div>
                {/* 5th day  */}
               <div className="flex gap-4">
                <p>
                <Image  src={weatherIcon32} height={50} width={50} alt={weatherMain32} />
                </p>
                <h2 className=" text-xl">
                  {" "}
                  {Math.round(currentTemperature32)} <small>{unit==="metric"?'°C':'°F'}</small>{" "}
                </h2>
                <h2 className=""> {currentDate32.toDateString()}</h2>
              </div>
            </div>
          </div>
        </div>
        {/* highlights  */}
        <div className="col-span-2 ">
          <h3 className="font-bold text-2xl mt-6 ms-3">Today Highlights</h3>
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
                    <small>Speed</small> <br /> {currentWeather.wind.speed}{" "}
                    <small>m/s</small>
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
                    {Math.round(feelsLikeTemperature)} <small>{unit==="metric"?'°C':'°F'}</small>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <h3 className="font-bold text-2xl mt-6 ms-3">Today at</h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 lg:mt-5 gap-2">
            <div className="card  bg-base-100 shadow-xl">
              <div className="card-body text-center">
                <p className="text-center font-semibold text-xl">
                  {moment(weather?.list[0]?.dt_txt).format("h A")}
                </p>
                <p className="mx-auto">
                 <Image  src={weatherIcon} height={50} width={70} alt={weatherMain} />
                </p>
                <h2 className=" text-xl">
                  {" "}
                  {Math.round(currentTemperature)} <small>{unit==="metric"?'°C':'°F'}</small>{" "}
                </h2>
                <p className=" ">{currentWeather?.weather[0]?.description}</p>
              </div>
            </div>

            <div className="card  bg-base-100 shadow-xl">
              <div className="card-body text-center">
                <p className="text-center font-semibold text-xl">
                  {moment(weather?.list[1]?.dt_txt).format("h A")}
                </p>
                <p className="mx-auto">
                 <Image  src={weatherIcon1} height={50} width={70} alt={weatherMain1} />
                </p>
                <h2 className=" text-xl">
                  {" "}
                  {Math.round(currentTemperature1)} <small>{unit==="metric"?'°C':'°F'}</small>{" "}
                </h2>
                <p className=" ">{weather.list[1]?.weather[0]?.description}</p>
              </div>
            </div>

            <div className="card  bg-base-100 shadow-xl">
              <div className="card-body text-center">
                <p className="text-center font-semibold text-xl">
                  {moment(weather?.list[2]?.dt_txt).format("h A")}
                </p>
                <p className="mx-auto">
                 <Image  src={weatherIcon2} height={50} width={70} alt={weatherMain2} />
                </p>
                <h2 className=" text-xl">
                  {" "}
                  {Math.round(currentTemperature2)} <small>{unit==="metric"?'°C':'°F'}</small>{" "}
                </h2>
                <p className=" ">{weather.list[2]?.weather[0]?.description}</p>
              </div>
            </div>

            <div className="card  bg-base-100 shadow-xl">
              <div className="card-body text-center">
                <p className="text-center font-semibold text-xl">
                  {moment(weather?.list[3]?.dt_txt).format("h A")}
                </p>
                <p className="mx-auto">
                 <Image  src={weatherIcon3} height={50} width={70} alt={weatherMain3} />
                </p>
                <h2 className=" text-xl">
                  {" "}
                  {Math.round(currentTemperature3)} <small>{unit==="metric"?'°C':'°F'}</small>{" "}
                </h2>
                <p className=" ">{weather.list[3]?.weather[0]?.description}</p>
              </div>
            </div>

            <div className="card  bg-base-100 shadow-xl">
              <div className="card-body text-center">
                <p className="text-center font-semibold text-xl">
                  {moment(weather?.list[4]?.dt_txt).format("h A")}
                </p>
                <p className="mx-auto">
                 <Image  src={weatherIcon4} height={50} width={70} alt={weatherMain4} />
                </p>
                <h2 className=" text-xl">
                  {" "}
                  {Math.round(currentTemperature4)} <small>{unit==="metric"?'°C':'°F'}</small>{" "}
                </h2>
                <p className=" ">{weather.list[4]?.weather[0]?.description}</p>
              </div>
            </div>

            <div className="card  bg-base-100 shadow-xl">
              <div className="card-body text-center">
                <p className="text-center font-semibold text-xl">
                  {moment(weather?.list[5]?.dt_txt).format(" h A")}
                </p>
                <p className="mx-auto">
                 <Image  src={weatherIcon5} height={50} width={70} alt={weatherMain5} />
                </p>
                <h2 className=" text-xl">
                  {" "}
                  {Math.round(currentTemperature5)} <small>{unit==="metric"?'°C':'°F'}</small>{" "}
                </h2>
                <p className=" ">{weather.list[5]?.weather[0]?.description}</p>
              </div>
            </div>

            <div className="card  bg-base-100 shadow-xl">
              <div className="card-body text-center">
                <p className="text-center font-semibold text-xl">
                  {moment(weather?.list[6]?.dt_txt).format("h A")}
                </p>
                <p className="mx-auto">
                 <Image  src={weatherIcon6} height={50} width={70} alt={weatherMain6} />
                </p>
                <h2 className=" text-xl">
                  {" "}
                  {Math.round(currentTemperature6)} <small>{unit==="metric"?'°C':'°F'}</small>{" "}
                </h2>
                <p className=" ">{weather.list[6]?.weather[0]?.description}</p>
              </div>
            </div>

            <div className="card  bg-base-100 shadow-xl">
              <div className="card-body text-center">
                <p className="text-center font-semibold text-xl">
                  {moment(weather?.list[7]?.dt_txt).format(" h A")}
                </p>
                <p className="mx-auto">
                 <Image  src={weatherIcon7} height={50} width={70} alt={weatherMain7} />
                </p>
                <h2 className=" text-xl">
                  {" "}
                  {Math.round(currentTemperature7)}<small>{unit==="metric"?'°C':'°F'}</small>{" "}
                </h2>
                <p className=" ">{weather.list[7]?.weather[0]?.description}</p>
              </div>
            </div>

          </div>
        </div>
      </div>
      
    </div>
  );
};

export default WeatherDetails;
