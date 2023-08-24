import React, { useState, useRef, useEffect } from "react";

function WeatherNews() {
  const [weatherNews, setWeatherNews] = useState([
    {
      title: "Major Earthquake Strikes Indonesia",
      description:
        "A powerful earthquake with a magnitude of 7.5 struck off the coast of Indonesia, triggering a tsunami warning and causing widespread panic.",
    },
    {
      title: "Severe Flooding in Bangladesh",
      description:
        "Heavy monsoon rains have caused severe flooding in multiple regions of Bangladesh, displacing thousands of people and damaging homes and infrastructure.",
    },
    {
      title: "Wildfires Rage in California",
      description:
        "Wildfires continue to spread across California, prompting evacuations and threatening homes. Firefighters are battling the blazes amid challenging weather conditions.",
    },
    {
      title: "Typhoon Hits Philippines",
      description:
        "A powerful typhoon made landfall in the Philippines, causing widespread destruction and flooding. Thousands have been evacuated as authorities work to provide assistance.",
    },
    {
      title: "Heatwave Grips Europe",
      description:
        "A heatwave has swept across Europe, with record-breaking temperatures in several countries. Authorities are advising people to stay hydrated and take precautions against heat-related illnesses.",
    },
  ]);

  const newsContainerRef = useRef(null);

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (newsContainerRef.current) {
        const newsContainer = newsContainerRef.current;
        newsContainer.scrollTop += 1;
        if (
          newsContainer.scrollTop >=
          newsContainer.scrollHeight - newsContainer.clientHeight
        ) {
          newsContainer.scrollTop = 0;
        }
      }
    }, 50);

    return () => {
      clearInterval(scrollInterval);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-5xl font-bold my-10 text-center">Weather News</h2>
      <div
        ref={newsContainerRef}
        className="news-container overflow-y-hidden max-h-80 w-full p-4 border rounded-md shadow-md bg-white"
      >
        {weatherNews.map((article, index) => (
          <div key={index} className="news-card mb-4 p-4 border rounded-md">
            <h3 className="text-xl font-semibold animate-pulse bg-gradient-to-r from-red-800 via-blue-650 to-red-500 bg-clip-text text-transparent text-center">
              {article.title}
            </h3>
            <p className="mt-2 text-gray-600 text-center">
              {article.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WeatherNews;
