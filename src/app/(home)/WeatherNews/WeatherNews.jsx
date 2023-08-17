"use client";

import React, { useEffect, useState } from 'react';
import './WeatherNews.css';

function WeatherNews() {
  const [newsData, setNewsData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiKey = '3d448ccac0344a0f88551354c27ab7b8';
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch news data');
        }
        return response.json();
      })
      .then(data => {
        if (data.articles) {
          setNewsData(data.articles);
        }
      })
      .catch(error => {
        console.error(error);
        setError(error);
      });
  }, []);

  useEffect(() => {
   
    const scrollInterval = setInterval(() => {
      const newsContainer = document.getElementById('news-container');
      if (newsContainer) {
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

  if (error) {
    return <div>Error fetching news data</div>;
  }

  return (
    <>
    <h2 className="text-5xl font-bold my-10 text-center">
        Live News
      </h2>
    <div className='news-container mx-auto' id='news-container'>
      <div className='news-card'>
        <h2>Weather News</h2>
        <ul>
          {newsData.map((article, index) => (
            <li key={index}>
              <h3 className='bg-red-300'>{article.title}</h3>
              <p>{article.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div></>
  );
}

export default WeatherNews;



