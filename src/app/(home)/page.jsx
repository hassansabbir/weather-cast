"use client";


import Banner from "./Banner";
import Intelligence from "./Intelligence";
import Marq from "./Marq";
import NewsLetter from "./NewsLetter";
import ProductSection from "./ProductSection";
import WeatherUpdates from "./WeatherUodates/WeatherUpdates";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ShowReviews from "./reviews/ShowReviews";

import TawkComponent from './TawkComponent';

export const metadata = {
  title: "Home ~ Weather Cast",
  description: "Home ~ Weather Cast",

};

const HomePage = () => {

  return (
    <div>
      <Banner />
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
