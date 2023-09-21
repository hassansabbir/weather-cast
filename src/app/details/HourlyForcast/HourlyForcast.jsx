// import Image from "next/image";
import { BsSpeedometer } from "react-icons/bs";
import { FaTemperatureHigh } from "react-icons/fa";
import { FaTemperatureEmpty } from "react-icons/fa6";
import { MdOutlineVisibility } from "react-icons/md";
import { WiCloudyGusts, WiHumidity } from "react-icons/wi";
import React from "react";
import moment from "moment";
import { getWeatherIcon } from "@/utils/getWeatherIcon";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./HourlyForcast.css";
const HourlyForcast = ({ weather }) => {
  const weatherList = weather.list;
  console.log(weatherList);
  const days = {};

  // Group weather data by date
  weatherList.forEach((w) => {
    const date = moment(w.dt_txt).format("YYYY-MM-DD");
    if (!days[date]) {
      days[date] = [];
    }
    days[date].push(w);
  });

  const tabHeaders = Object.keys(days).map((date, i) => (
    <Tab key={i}>{moment(date).format("MMMM D, YYYY")}</Tab>
  ));

  const shouldDisplayAdditionalData = (date) => {
    //  first date to show 8 data points
    return date === Object.keys(days)[0];
  };

  if (shouldDisplayAdditionalData(Object.keys(days)[0])) {
    const firstDate = Object.keys(days)[0];
    for (let i = 0; i < 3; i++) {
      days[firstDate].push(weatherList[i]);
    }
  }

  const tabContents = Object.keys(days).map((date, i) => (
    <TabPanel key={i}>
      {days[date].map((w, j) => (
        <div key={j} className="my-3">
          <div className=" space-x-20 flex">
            <div className="avatar">
              <div className="mask mask-squircle w-20 h-20">
                <img
                  className="w-96 h-96"
                  src={getWeatherIcon(w?.weather?.[0]?.main || "N/A")}
                  alt={w}
                />
              </div>
            </div>
            <div className="flex items-center">
              <h1 className="font-bold  text-xl mr-4">
                {moment(w.dt_txt).format("h a")}
              </h1>
              <h1 className="text-xl">{w.weather[0].main}</h1>
            </div>
            <div className="flex items-center gap-2">
              <p className="h-6 text-2xl">
                <FaTemperatureEmpty />
              </p>
              <h3 className="text-2xl">{w.main.temp} °C</h3>
            </div>

            <div className="flex items-center gap-2">
              <p className="text-2xl">
                <FaTemperatureHigh></FaTemperatureHigh>
              </p>
              <div>
                <h2 className="text-xl">Feels like</h2>
                <h3 className="text-2xl">{w.main.feels_like}°C</h3>
              </div>
            </div>

            <div className="flex flex-row items-center gap-2">
              <p className="text-4xl">
                <BsSpeedometer></BsSpeedometer>{" "}
              </p>
              <div className="my-3">
                <p className="text-xl">Wind speed </p>
                <h3 className="text-2xl">{w.wind.speed} m/s</h3>
              </div>
            </div>
            <div className="flex flex-row items-center gap-2">
              <div>
                <p className="text-5xl">
                  <WiHumidity></WiHumidity>{" "}
                </p>
              </div>
              <div>
                <h2 className="text-xl">Humidity</h2>
                <h3 className="text-2xl">{w.main.humidity} %</h3>
              </div>
            </div>
            <div className="flex flex-row items-center gap-2">
              <p className="text-4xl">
                <MdOutlineVisibility></MdOutlineVisibility>{" "}
              </p>
              <div>
                <h3 className="text-xl">Visibility</h3>
                <h3 className="text-2xl">{w.visibility} m</h3>
              </div>
            </div>
          </div>
        </div>
      ))}
    </TabPanel>
  ));

  return (
    <div>
      <p className="text-3xl font-bold text-center m-3">
        5-Day Weather Forecast
      </p>
      <Tabs>
        <TabList>{tabHeaders}</TabList>
        {tabContents}
      </Tabs>
    </div>
  );
};

export default HourlyForcast;
