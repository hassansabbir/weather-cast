import React from "react";
import Image from "next/image";
import moment from "moment";

const FiveDayForecast = ({ forecastData }) => {
  //  unique dates
  const uniqueDates = [];

  return (
    <div className="card md:w-5/6 bg-base-100 shadow-xl">
      <div className="card-body">
        <p className="text-xl font-semibold">5 Days Forecast</p>

        {/* Displaying 5 day forecast */}
        <div>
          {forecastData?.list.map((forecastItem, index) => {
            const date = moment(forecastItem.dt_txt).format("ddd MMM D YYYY");

            // Check if date is already displayed
            if (!uniqueDates.includes(date) && uniqueDates.length < 5) {
              uniqueDates.push(date); // Add date to uniqueDates array

              return (
                <div key={index} className="flex justify-center items-center">
                  <Image
                    height={50}
                    width={50}
                    alt={forecastItem.weather[0].description}
                    src={`https://openweathermap.org/img/w/${forecastItem.weather[0].icon}.png`}
                  />
                  <p>{(forecastItem.main.temp - 273.15).toFixed(0)}°C</p>
                  <h2>{date}</h2>
                </div>
              );
            }

            return null; // Don't display duplicate date or more than 5 dates
          })}
        </div>
      </div>
    </div>
  );
};

export default FiveDayForecast;
