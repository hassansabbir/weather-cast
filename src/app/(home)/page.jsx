"use client";

import Banner from "./Banner";
import Intelligence from "./Intelligence";
import Marq from "./Marq";
import NewsLetter from "./NewsLetter";
import ProductSection from "./ProductSection";
import SimpleWeatherMap from "./SimpleWeatherMap";
import WeatherNews from "./WeatherNews/WeatherNews";
import WeatherUpdates from "./WeatherUodates/WeatherUpdates";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <WeatherUpdates />
      <SimpleWeatherMap></SimpleWeatherMap>
      <Intelligence />
      <WeatherNews />
      <ProductSection />
      <Marq />
      <NewsLetter />
    </div>
  );
};
export default HomePage;
