"use client";

import Banner from "./Banner";
import Intelligence from "./Intelligence";
import Marq from "./Marq";
import NewsLetter from "./NewsLetter";
import ProductSection from "./ProductSection";

import WeatherDetails from "./WeatherDetails/WeatherDetails";
import WeatherNews from "./WeatherNews/WeatherNews";

import WeatherUpdates from "./WeatherUodates/WeatherUpdates";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const HomePage = () => {
  return (
    <div>
      <Banner />
      <WeatherUpdates />
      <WeatherDetails/>
      <ToastContainer />
      
      <Intelligence />
      <WeatherNews />
      <ProductSection />
      <Marq />
      <NewsLetter />
    </div>
  );
};
export default HomePage;
