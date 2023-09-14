"use client";

import Intelligence from "./Intelligence";
import Marq from "./Marq";
import NewsLetter from "./NewsLetter";
import WeatherUpdates from "./WeatherUodates/WeatherUpdates";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ShowReviews from "./reviews/ShowReviews";
import TawkComponent from "./TawkComponent";
import ProductSection from "./featureTechnology/ProductSection";

const HomePage = () => {
  return (
    <div>
      {/* <Banner /> */}
      <WeatherUpdates />
      <ToastContainer />
      <Intelligence />
      <ProductSection />
      {/* <Articles /> */}
      <ShowReviews />
      <Marq />
      <NewsLetter />
      <TawkComponent></TawkComponent>
    </div>
  );
};

export default HomePage;
