"use client";

import Banner from "./Banner";
import Intelligence from "./Intelligence";
import Marq from "./Marq";
import NewsLetter from "./NewsLetter";
import ProductSection from "./ProductSection";

// import WeatherDetails from "./WeatherDetails/WeatherDetails"; 
import WeatherNews from "./WeatherNews/WeatherNews";

import WeatherUpdates from "./WeatherUodates/WeatherUpdates";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Reviews from "./reviews/Reviews";
import ShowReviews from "./reviews/ShowReviews";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <WeatherUpdates />
      {/* <WeatherDetails />  */}
      <ToastContainer />
      <Intelligence />
      <WeatherNews />
      <ProductSection />
      <ShowReviews />
      <Marq />
      <NewsLetter />
    </div>
  );
};
export default HomePage;
