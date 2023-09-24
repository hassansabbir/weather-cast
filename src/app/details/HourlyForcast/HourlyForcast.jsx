// import Image from "next/image";
import { BsSpeedometer } from "react-icons/bs";
import { FaTemperatureHigh } from "react-icons/fa";
import { FaTemperatureEmpty } from "react-icons/fa6";
import { MdOutlineVisibility } from "react-icons/md";
import { WiHumidity } from "react-icons/wi";
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

  const tabContents = Object.keys(days).map((date, i) => (
    <TabPanel key={i}>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th className="text-xl font-bold">Time</th>
              <th className="text-xl font-bold">Weather Condition</th>
              <th className="text-xl font-bold">Temperature</th>
              <th className="text-xl font-bold">Feels Like</th>
              <th className="text-xl font-bold">Wind Speed</th>
              <th className="text-xl font-bold">Humidity</th>
              <th className="text-xl font-bold">Visibility</th>
            </tr>
          </thead>
          <tbody>
            {days[date].map((w, j) => (
              <tr key={j}>
                <td className="text-xl font-bold">
                  {moment(w.dt_txt).format("h a")}
                </td>
                <td className="flex items-center gap-7">
                  <img
                    className="w-20 h-20"
                    src={getWeatherIcon(w?.weather?.[0]?.main || "N/A")}
                    alt={w.weather[0].main}
                  />
                  <h1 className="text-xl font-bold">{w.weather[0].main}</h1>
                </td>
                <td className="text-xl font-bold">
                  <div className="flex gap-2 items-center">
                    <FaTemperatureEmpty />
                    {w.main.temp} °C
                  </div>
                </td>
                <td className="text-xl font-bold">
                  <div className="flex gap-2 items-center">
                    <FaTemperatureHigh />
                    {w.main.feels_like}°C
                  </div>
                </td>
                <td className="text-xl font-bold">
                  <div className="flex gap-2 items-center">
                    <BsSpeedometer />
                    {w.wind.speed} m/s
                  </div>
                </td>
                <td className="text-xl font-bold">
                  <div className="flex gap-2 items-center">
                    <WiHumidity />
                    {w.main.humidity} %
                  </div>
                </td>
                <td className="text-xl font-bold">
                  <div className="flex gap-2 items-center">
                    <MdOutlineVisibility />
                    {w.visibility} m
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </TabPanel>
  ));

  return (
    <div className="my-14">
      <p className="text-3xl font-bold text-center m-3">
        5-Day Weather Forecast
      </p>
      <Tabs>
        <div className="overflow-x-auto">
          <TabList className="ms-20 my-10 flex-wrap font-bold custom-tab-list">
            {tabHeaders}
          </TabList>
        </div>
        {tabContents}
      </Tabs>
    </div>
  );
};

export default HourlyForcast;
