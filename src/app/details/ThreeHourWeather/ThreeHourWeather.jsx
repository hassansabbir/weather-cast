import { getWeatherIcon } from '@/utils/getWeatherIcon';
import moment from 'moment';
import Image from 'next/image';
import React from 'react';

const ThreeHourWeather = ({weather , unit}) => {
  
    return (
        <>
                {weather.list.slice(0, 8).map((currentWeather, index) => (
        <div className="card bg-base-100 shadow-xl" key={index}>
          <div className="card-body text-center">
            <p className="text-center font-semibold text-xl">
              {moment(currentWeather.dt_txt).format("h A")}
            </p>
            <div className="mx-auto">
              <Image
                src={getWeatherIcon(currentWeather.weather[0].main)}
                height={50}
                width={70}
                alt={currentWeather.weather[0].main}
              />
            </div>
            <h2 className="text-xl">
              {Math.round(currentWeather.main.temp)}{" "}
              <small>{unit === "metric" ? "°C" : "°F"}</small>{" "}
            </h2>
            {/* <p>{currentWeather.weather[0].description}</p> */}
          </div>
        </div>
      ))}
        </>
    );
};

export default ThreeHourWeather;