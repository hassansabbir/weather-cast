"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// Import Swiper styles

import "swiper/css/bundle";
import SingleSlider from "./SingleSlider";
import { useEffect, useState } from "react";
import axios from "axios";

const fetchWeather = async (latitude, longitude, setWeather) => {
  const apiKey = "41a5c84ae7ccfff1bc9491b25aa4dbde";

  // fetch current weather api
  const CurrentWeatherResponse = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`
  );
  const currentWeatherData = await CurrentWeatherResponse.json();
  setWeather(currentWeatherData);
};






const Banner = () => {
  const [weather, setWeather] = useState(null);
  const [banner, setBanner] = useState([]);
  console.log(weather);
  const fetchData=()=>{
    axios
    .get(`https://weather-cast-server.vercel.app/banners`)
    .then((data) => setBanner(data.data));
 };

  
  useEffect(() => {
    fetchData()
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          // Define 'positions' array here
           fetchWeather(latitude, longitude, setWeather);
        },
        (error) => {
          console.error("Error getting user location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);
  if (!weather) {
    return (
      <div className="flex justify-center mt-20">
        <span className="loading loading-bars loading-lg"></span>
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }
  
   
    
  

  return (
    <section className="main-slider">
      <Swiper
        slidesPerView={1}
        loop
        navigation
        effect="fade"
        autoplay
        modules={[Navigation]}
      >
        {banner.map((slider) => (
          <SwiperSlide key={slider._id}>
            <SingleSlider slider={slider} />
          </SwiperSlide>
          
        ))}
      </Swiper>
      
    </section>
  );
};

export default Banner;
