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
const HourlyForcast = ({ weather }) => {
  // const weatherList = weather.list;
  // console.log(weatherList);
  // return (
  //   <div>
  //     <p className="text-3xl font-bold text-center m-3">Weather Forecasting</p>
  //     {weatherList.map((w, i) => (
  //       <div key={i} className=" shadow-slate-800">
  //         {/* <p>{w.main.feels_like}</p> */}

  //         <div className="overflow-x-auto">
  //           <table className="table">
  //             <tbody>
  //               {/* row 1 */}
  //               <tr>
  //                 <th>
  //                   <h4 className="text-xl">
  //                     {moment(w.dt_txt).format("h a")}
  //                   </h4>
  //                 </th>
  //                 <td>
  //                   <div className="flex items-center space-x-3">
  //                     <div className="avatar">
  //                       <div className="mask mask-squircle w-20 h-20">
  //                         <img
  //                           className="w-96 h-96"
  //                           src={getWeatherIcon(w?.weather?.[0]?.main || "N/A")}
  //                           alt={w}
  //                         />
  //                       </div>
  //                     </div>
  //                     <div>
  //                       <div className="font-bold text-xl">
  //                         {w.weather[0].main}
  //                       </div>
  //                     </div>
  //                   </div>
  //                 </td>
  //                 <td>
  //                   <div>
  //                     <div className=" my-2 flex gap-2">
  //                       <p className=" h-10 w-5 text-2xl">
  //                         <FaTemperatureEmpty></FaTemperatureEmpty>
  //                       </p>
  //                       <h3 className="text-2xl">{w.main.temp} °C</h3>
  //                     </div>
  //                     <div className="my-2">
  //                       <div className="flex items-center gap-2">
  //                         <p className="  text-2xl mt-2">
  //                           <FaTemperatureHigh></FaTemperatureHigh>
  //                         </p>
  //                         <div>
  //                           <h2 className="text-xl">Feels like</h2>
  //                           <h3 className="text-2xl">{w.main.feels_like}°C</h3>
  //                         </div>
  //                       </div>
  //                     </div>
  //                   </div>
  //                 </td>
  //                 <td>
  //                   <div>
  //                     <div className="flex flex-row items-center gap-2">
  //                       <p className="text-4xl">
  //                         <BsSpeedometer></BsSpeedometer>{" "}
  //                       </p>
  //                       <div className="my-3">
  //                         <p className="text-xl">Wind speed </p>
  //                         <h3 className="text-2xl">{w.wind.speed} m/s</h3>
  //                       </div>
  //                     </div>
  //                     <div className="my-3 flex flex-row items-center gap-2">
  //                       <p className="text-4xl">
  //                         <WiCloudyGusts></WiCloudyGusts>{" "}
  //                       </p>
  //                       <div>
  //                         <p className="text-xl">Wind Gust</p>
  //                         <h3 className="text-2xl">{w.wind.gust} m/s</h3>
  //                       </div>
  //                     </div>
  //                   </div>
  //                 </td>
  //                 <th>
  //                   <div>
  //                     <div className="flex flex-row items-center gap-2">
  //                       <div>
  //                         <p className="text-5xl">
  //                           <WiHumidity></WiHumidity>{" "}
  //                         </p>
  //                       </div>
  //                       <div>
  //                         <h2 className="text-xl">Humidity</h2>
  //                         <h3 className="my-2 text-2xl">{w.main.humidity} %</h3>
  //                       </div>
  //                     </div>
  //                     <div className="flex flex-row items-center gap-2">
  //                       <p className="text-4xl">
  //                         <MdOutlineVisibility></MdOutlineVisibility>{" "}
  //                       </p>
  //                       <div>
  //                         <h3 className="text-xl">Visibility</h3>
  //                         <h3 className="text-2xl">{w.visibility} m</h3>
  //                       </div>
  //                     </div>
  //                   </div>
  //                 </th>
  //               </tr>
  //             </tbody>
  //           </table>
  //         </div>
  //       </div>
  //     ))}
  //   </div>
  // );
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
      {days[date].map((w, j) => (
        <div key={j} className="my-3">
          <div className=" space-x-14 flex">
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
              <p className="h-10 w-5 text-2xl">
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
