import React, { useState, useEffect, useRef } from "react";

function WeatherNews() {
  const [weatherNews, setWeatherNews] = useState([]);
  const apiKey = "3d448ccac0344a0f88551354c27ab7b8";
  const weatherKeywords = [
    "weather",
    "forecast",
    "climate",
    "meteorology",
    "storm",
    "temperature",
    "precipitation",
    "hurricane",
  ];

  const newsContainerRef = useRef(null);

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (newsContainerRef.current) {
        const newsContainer = newsContainerRef.current;
        newsContainer.scrollTop += 1;
        if (newsContainer.scrollTop >= newsContainer.scrollHeight - newsContainer.clientHeight) {
          newsContainer.scrollTop = 0;
        }
      }
    }, 50);

    return () => {
      clearInterval(scrollInterval);
    };
  }, []);

  useEffect(() => {
    const apiUrl = `https://newsapi.org/v2/everything?q=${weatherKeywords.join(
      "%20"
    )}&apiKey=${apiKey}`;

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch news data");
        }
        return response.json();
      })
      .then((data) => {
        if (data.articles) {
          setWeatherNews(data.articles);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-5xl font-bold my-10 text-center">Weather News</h2>
      <div
        ref={newsContainerRef}
        className="news-container overflow-y-hidden max-h-52 w-full p-4 border rounded-md shadow-md bg-white"
      >
        {weatherNews.map((article, index) => (
          <div key={index} className="news-card mb-4 p-4 border rounded-md">
            <h3 className="text-xl font-semibold animate-pulse bg-gradient-to-r from-red-800 via-blue-650 to-red-500 bg-clip-text text-transparent ">{article.title}</h3>
            <p className="mt-2 text-gray-600">{article.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WeatherNews;
