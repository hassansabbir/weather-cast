"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import axios from "axios";
import { Marker, Popup, TileLayer } from "react-leaflet";
import { CircleMarker, Polyline } from "react-leaflet";
import useClient from "@/hooks/useClient";

const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  {
    ssr: false,
  }
);

const clearIcon = new L.Icon({
  iconUrl: "/path-to-clear-icon.png",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const hazeIcon = new L.Icon({
  iconUrl: "/path-to-haze-icon.png",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const rainIcon = new L.Icon({
  iconUrl: "/path-to-rain-icon.png",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const cloudsIcon = new L.Icon({
  iconUrl: "/path-to-clouds-icon.png",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const weatherIcons = {
  Clear: clearIcon,
  Haze: hazeIcon,
  Rain: rainIcon,
  Clouds: cloudsIcon,
};

function WeatherMap() {
  const client = useClient();
  const [weatherData, setWeatherData] = useState(null);

  const handleMapClick = (event) => {
    event.originalEvent.preventDefault();
  };

  const handlePopupClick = (event) => {
    event.originalEvent.stopPropagation();
  };

  useEffect(() => {
    const apiKey = "e791ec3c3cbfbc171c44902e5b35f1fd";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Dhaka&appid=${apiKey}`;
    const windSpeedApiUrl =
      "https://openweathermap.org/weathermap?basemap=map&cities=false&layer=radar&lat=30&lon=-20&zoom=3";

    axios
      .get(apiUrl)
      .then((response) => {
        setWeatherData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
      });

    axios
      .get(windSpeedApiUrl)
      .then((response) => {
        setWindSpeedData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching wind speed data:", error);
      });
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      {client && (
        <MapContainer
          center={[23.8103, 90.4125]}
          zoom={10}
          style={{ width: "800px", height: "600px" }}
          onClick={handleMapClick}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {weatherData && (
            <Popup
              position={[weatherData.coord.lat, weatherData.coord.lon]}
              closeButton={false}
              onClick={handlePopupClick}
            >
              Weather: {weatherData.weather[0].main}
              <br />
              Temperature: {weatherData.main.temp} K
            </Popup>
          )}

          {weatherData && weatherData.weather[0].main === "Clear" && (
            <CircleMarker
              center={[weatherData.coord.lat, weatherData.coord.lon]}
              radius={500}
              color="blue"
            />
          )}
          {weatherData && weatherData.weather[0].main === "Clouds" && (
            <CircleMarker
              center={[weatherData.coord.lat, weatherData.coord.lon]}
              radius={800}
              color="gray"
            />
          )}
          {weatherData && weatherData.weather[0].main === "Rain" && (
            <Polyline
              positions={[
                [23.8103, 90.4125],
                [23.8103, 90.5125],
              ]}
              color="blue"
            />
          )}
          {weatherData && weatherData.weather[0].main === "Haze" && (
            <CircleMarker
              center={[weatherData.coord.lat, weatherData.coord.lon]}
              radius={600}
              color="purple"
            />
          )}
        </MapContainer>
      )}
    </div>
  );
}

export default WeatherMap;
