"use client";

import Banner from "./Banner";
import Intelligence from "./Intelligence";
import Marq from "./Marq";
import NewsLetter from "./NewsLetter";
import ProductSection from "./ProductSection";
<<<<<<< HEAD
import SimpleWeatherMap from "./SimpleWeatherMap";
import WeatherNews from "./WeatherNews/WeatherNews";
=======
import WeatherDetails from "./WeatherDetails/WeatherDetails";
import WeatherNews from "./WeatherNews";
>>>>>>> aab609ba918745c3236636e9f7f42f516abfe4ff
import WeatherUpdates from "./WeatherUodates/WeatherUpdates";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <WeatherUpdates />
<<<<<<< HEAD
      <SimpleWeatherMap></SimpleWeatherMap>
=======
      <WeatherDetails/>
>>>>>>> aab609ba918745c3236636e9f7f42f516abfe4ff
      <Intelligence />
      <WeatherNews />
      <ProductSection />
      <Marq />
      <NewsLetter />
    </div>
  );
};
export default HomePage;
