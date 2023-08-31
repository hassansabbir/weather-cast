import React from "react";

const WeatherAlert = ({ weather }) => {
  const isHeavyRain =
    weather.weather[0].main === "Rain" &&
    weather.rain &&
    weather.rain["3h"] >= 30;
  const isFlood =
    weather.weather[0].main === "Rain" && weather.main.humidity >= 80;
  const isStorm = weather.weather[0].main === "Thunderstorm";

  return (
    <div className="px-7">
      {isHeavyRain || isFlood || isStorm ? (
        <div className="card bg-red-600 text-white p-4">
          <h3>Severe Weather Alert</h3>
          {isHeavyRain && <p>Heavy Rain Warning</p>}
          {isFlood && <p>Flood Warning</p>}
          {isStorm && <p>Storm Warning</p>}
        </div>
      ) : (
        <div className="card  bg-green-400 text-white p-4">
          <p>No alert today. Enjoy your time!</p>
        </div>
      )}
    </div>
  );
};

export default WeatherAlert;
