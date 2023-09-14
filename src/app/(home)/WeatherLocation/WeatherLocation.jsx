import moment from "moment";
import React, { useState } from "react";
import HourlyChart from "../HourlyChart/HourlyChart";
import FiveDayForecast from "../FiveDayForecast/FiveDayForecast";
import TodayHighlights from "../TodayHighLights/TodayHighLights";
import CurrentWeather from "../CurrentWeather/CurrentWeather";
const WeatherLocation = () => {
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeatherData = async (latitude, longitude) => {
    const apiKey = "41a5c84ae7ccfff1bc9491b25aa4dbde";

    // fetch current weather api
    const CurrentWeatherResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`
    );
    const currentWeatherData = await CurrentWeatherResponse.json();
    setWeatherData({ current: currentWeatherData });

    // fetch 7 Day weather api
    const forecastResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}`
    );
    const forecastData = await forecastResponse.json();
    setWeatherData((prevData) => ({ ...prevData, forecast: forecastData }));
  };

  const getWindDirection = (degrees) => {
    const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
    const index = Math.round(degrees / 45) % 8;
    return directions[index];
  };
  const windDirection = getWindDirection(weatherData?.wind?.deg);

  const getWeatherByLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          fetchWeatherData(latitude, longitude);
        },
        (error) => {
          console.error("Error getting user location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  const displayWeatherInfo = () => {
    if (weatherData) {
      const currentWeather = weatherData.current;
      const forecastWeather = weatherData.forecast;
      const hourlyForecastChartData = forecastWeather?.list.map(
        (forecastItem, index) => {
          const time = moment(forecastItem.dt_txt).format("h A");
          return {
            name: time,
            temp: (forecastItem.main.temp - 273.15).toFixed(0),
            description: forecastItem.weather[0].description,
            icon: `https://openweathermap.org/img/w/${forecastItem.weather[0].icon}.png`,
          };
        }
      );
      return (
        <div className="max-w-[1460px] mx-auto">
          <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 m-10">
            <div className="col-span-1 me-7 space-y-5">
              <div className="card md:w-5/6 bg-base-100 shadow-xl">
                <CurrentWeather
                  currentWeather={weatherData.current}
                ></CurrentWeather>
              </div>

              <FiveDayForecast forecastData={weatherData.forecast} />
            </div>
            {/* highlights  */}
            <div className="col-span-2 ">
              <h3 className="font-semibold text-xl mt-6 ms-3">
                Today Highlights
              </h3>

              <TodayHighlights
                currentWeather={weatherData.current}
                windDirection={windDirection}
              ></TodayHighlights>

              <h3 className="font-semibold text-xl mt-4">
                Daily 3 Hour Forecast
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 lg:mt-5 gap-2">
                <HourlyChart data={hourlyForecastChartData}></HourlyChart>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div>
      {/* <BiTargetLock></BiTargetLock> */}
      <button
        onClick={getWeatherByLocation}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Current Location
      </button>
      {displayWeatherInfo()}
    </div>
  );
};

export default WeatherLocation;
