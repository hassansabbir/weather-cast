"use client";

import React, { useEffect, useState } from "react";
import WeatherNews from "../(home)/WeatherNews/WeatherNews";

export const metadata = {
  title: "News ~ Weather Cast",
  description: "News ~ Weather Cast",
};

const WeatherVideoComponent = () => {
  const [videoIds, setVideoIds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pageToken, setPageToken] = useState("");

  useEffect(() => {
    fetchWeatherVideos();
  }, []);

  const fetchWeatherVideos = async () => {
    const apiKey = "AIzaSyAzZmGUYooYhG1QAqfilT2F5uRAGUxEew8";
    const maxResults = 10;

    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&q=weather+news&type=video&maxResults=${maxResults}&order=date&pageToken=${pageToken}&videoCaption=closedCaption`
    );

    const data = await response.json();
    const newVideoIds = data.items.map((item) => item.id.videoId);

    setVideoIds((prevVideoIds) => [...prevVideoIds, ...newVideoIds]);
    setPageToken(data.nextPageToken);
    setLoading(false);
  };

  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 &&
      !loading
    ) {
      setLoading(true);
      fetchWeatherVideos();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const containerStyle = {
    fontFamily: "Arial, sans-serif",
    padding: "20px",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
    gridGap: "20px",
  };

  const frameStyle = {
    width: "100%",
    height: "200px",
    border: "none",
  };

  const loadingStyle = {
    textAlign: "center",
    marginTop: "20px",
    color: "#888",
  };

  return (
    <div>
      <WeatherNews></WeatherNews>
      <div style={containerStyle}>
        <h2 className="text-3xl lg:text-5xl font-bold my-10 text-center">
          Recent Updates
        </h2>
        <div style={gridStyle}>
          {videoIds.map((videoId) => (
            <iframe
              key={videoId}
              title={`YouTube Video ${videoId}`}
              src={`https://www.youtube.com/embed/${videoId}`}
              frameBorder="0"
              allowFullScreen
              style={frameStyle}
            />
          ))}
        </div>
        {loading && <p style={loadingStyle}>Loading more videos...</p>}
      </div>
    </div>
  );
};

export default WeatherVideoComponent;
