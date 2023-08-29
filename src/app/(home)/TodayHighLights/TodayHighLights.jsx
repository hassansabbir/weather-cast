import React from "react";
import { MdAir, MdSunny } from "react-icons/md";
import { FaEye, FaMoon } from "react-icons/fa";
import { WiHumidity, WiSandstorm } from "react-icons/wi";
import { FaTemperatureHalf } from "react-icons/fa6";
import moment from "moment";

const TodayHighlights = ({ currentWeather, windDirection }) => {
  const sunriseTime = moment.unix(currentWeather.sys.sunrise);
  const sunsetTime = moment.unix(currentWeather.sys.sunset);
  return (
    <div>
      <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="card  bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="font-semibold">Wind Quality Index</h2>
            <div className="flex gap-2">
              <p>
                <MdAir className="text-3xl my-auto" />
              </p>
              <p className="text-xl">
                <small>Direction</small> <br /> {windDirection}
              </p>
              <p className="text-xl">
                <small>Speed</small> <br /> {currentWeather.wind.speed}
                <small>m/s</small>
              </p>
              <p className="text-xl">
                <small>Gust</small> <br /> {currentWeather.wind.gust}
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
                  <MdSunny className="text-3xl mt-5" />
                </p>
                <p className="text-xl">
                  <small>Sunrise</small> <br />
                  {sunriseTime.format("hh:mm A")}
                </p>
              </div>
              <div className="flex gap-2 ">
                <p className="ms-10">
                  <FaMoon className="text-3xl mt-5" />
                </p>
                <p className="text-xl">
                  <small>Sunset</small> <br />
                  {sunsetTime.format("hh:mm A")}
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
                {Math.floor(currentWeather.main.feels_like - 273.15).toFixed(0)}
                °C
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodayHighlights;
