"use client"
import React, { useEffect, useState } from 'react';
import { getWeatherIcon } from "@/utils/getWeatherIcon";
import Image from 'next/image';
import { FaLocationDot } from 'react-icons/fa6';
import { FaEye, FaWind } from 'react-icons/fa';
import { WiHumidity, WiRefreshAlt } from 'react-icons/wi';
import moment from 'moment';
const WeatherCard = ({locationData}) => {
    const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    const apiKey = '41a5c84ae7ccfff1bc9491b25aa4dbde';

    // Map over the locationData and fetch weather data for each location
    const fetchWeatherData = async () => {
        const dataPromises = locationData.map((item) => {
            if (item && item.location) {
              const location = item.location;
              const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&&units=metric&appid=${apiKey}`;
              return fetch(apiUrl)
                .then((res) => res.json())
                .then((data) => data)
                .catch((error) => {
                  console.error(`Error fetching data for ${location}:`, error);
                  return null; // Return null for locations with errors
                });
            }
            return null; // Return null for items without valid data
          });
    
          const weatherDataArray = await Promise.all(dataPromises);
          setWeatherData(weatherDataArray.filter((data) => data !== null)); // Filter out null values
        };
    
        fetchWeatherData();
      }, [locationData]);
      const handleDltbtn=()=>{
        
      }
     
    return (
        <div>
            {weatherData.map((data, index) => (
                <div key={index} className='mx-auto lg:mt-16'> 
                <div className="indicator">
  <button onClick={handleDltbtn} className="indicator-item badge bg-red-600 text-white btn btn-circle"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg></button> 
  <div className="weather-card grid-cols-8 mx-auto mb-8 shadow-xl  rounded-3xl p-10 border h-[500px] w-[800px] glass">
          <div className="">
            <div className="grid grid-cols-2 justify-between">
              <div>
                <p className="font-semibold text-lg">Current Weather</p>
                <p className="text-lg ps-0  pb-3">
                  {moment(data.list?.[0]?.location?.localtime).format("LT")}
                </p>
              </div>

            </div>
            <div className="flex  items-center ">
              <div>
                <Image
                  src={getWeatherIcon(data.list?.[0]?.weather?.[0]?.main || 'N/A')}
                  height={100}
                  width={110}
                  alt={data.list?.[0]}
                />
              </div>
              <h2 className="text-4xl lg:text-6xl  ps-3 pe-5 font-bold ">
              {Math.round(data.list?.[0]?.main?.temp )|| 'N/A'} <small>℃</small>
              </h2>
              <div className="ms-20">
                <h2 className="text-xl   font-semibold uppercase ">
                  {data.list?.[0]?.weather?.[0]?.description || 'N/A'}
                </h2>
                <p className="text-lg  ">
                  Feels like {Math.round(data.list?.[0]?.main?.feels_like )|| 'N/A'} &#8451;
                </p>
              </div>
            </div>

            <h2 className="text-3xl mt-8  font-bold flex items-center gap-2 ">
              <FaLocationDot className="w-5 h-5" /> {locationData[index].location}
            </h2>
            <p className="text-xl lg:text-2xl ">
              {moment(data.list?.[0]?.location?.localtime).format("MMMM Do YYYY")}
            </p>
            <div className="grid grid-cols-4 justify-between mt-16">
              {/* wind speed  */}
              <div className="text-xl  ">
                <p className="flex">
                  {" "}
                  <FaWind className="text-2xl " /> Wind Speed
                </p>
                <p className="ps-8 pt-1">
                  {" "}
                  {data.list?.[0]?.wind.speed} <small>m/s</small>
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
                  {data.list?.[0]?.main.humidity} <small>%</small>
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
                  {data.list?.[0]?.visibility / 1000} <small>Km</small>
                </p>
              </div>

              {/* pressure */}
              <div className="text-xl   ">
                <p className="flex">
                  <WiRefreshAlt className="w-12 h-12" /> Pressure In
                </p>
                <p className="ps-8 pt-1">
                  {" "}
                  {data.list?.[0]?.main.pressure} <small>hPa</small>
                </p>
              </div>
            </div>
          </div>
        </div>
</div>      

       </div>
       
      ))} 
        </div>
    );
};

export default WeatherCard;