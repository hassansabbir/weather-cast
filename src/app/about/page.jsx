import Image from "next/image";
import React from "react";
import "./about.css";
import sourceLogo1 from "../../assets/accuWeather.png";
import sourceLogo2 from "../../assets/ventusky.png";
import trustedLogo1 from "../../assets/trusted1.png";
import trustedLogo2 from "../../assets/trusted2.png";
import trustedLogo3 from "../../assets/trusted3.png";
import trustedLogo4 from "../../assets/trusted4.png";
import Link from "next/link";

const AboutPage = () => {
  return (
    <div className="py-10 about-us-page bg-fixed">
      <div className="max-w-[1460px] mx-auto my-10">
        <div>
          <h2 className="text-5xl font-bold">About Us</h2>
          <p className="text-xl my-5">
            Introducing WeatherCast: Your Comprehensive Weather Forecast
            Solution. WeatherCast is a cutting-edge web application meticulously
            designed to provide you with a rich and insightful weather
            experience. Seamlessly integrating real-time data from trusted
            sources, WeatherCast offers you up-to-the-minute weather conditions,
            precise temperature forecasts, humidity levels, wind patterns, and
            more. Our interactive maps showcase radar imagery, satellite views,
            and weather advisories, ensuring you're always a step ahead of
            changing weather patterns.
          </p>
          <p> this is weather app </p>
          <p className="text-xl my-5">
            Plan your days confidently with multi-day forecasts that empower you
            to make informed decisions, whether it's scheduling outdoor
            adventures or preparing for daily commutes. Stay safe and informed
            with customizable weather alerts, keeping you vigilant about severe
            weather conditions in your region. Built with a focus on
            user-friendliness, WeatherCast's intuitive interface allows you to
            effortlessly explore historical weather trends, compare past and
            present data, and delve into meteorological patterns. With
            responsive design, you can access WeatherCast on any device,
            ensuring you're never disconnected from the latest weather insights.
          </p>
          <p className="text-xl my-5">
            WeatherCast isn't just a weather forecast tool; it's a dynamic
            platform that encourages learning and exploration. Dive into the
            world of meteorology, expand your understanding of weather
            phenomena, and gain insights into the science behind forecasts.
          </p>
          <p className="text-xl my-5">
            Experience the synergy of technology and nature with WeatherCast.
            Whether you're a weather enthusiast, an outdoor enthusiast, or
            simply looking to stay ahead of the elements, WeatherCast is your
            gateway to accurate, reliable, and captivating weather forecasting.
          </p>
        </div>
        <Link href="/about/ourTeam">
          <h2 className="underline font-bold text-2xl text-blue-500">
            Meet The Team
          </h2>
        </Link>
        <div>
          <h2 className="text-3xl mt-20 my-10 font-bold">Data Source</h2>
          <div className="flex gap-5">
            <Image
              src={sourceLogo1}
              alt="sourceLogo"
              width={200}
              height={100}
            />
            <Image
              src={sourceLogo2}
              alt="sourceLogo"
              width={200}
              height={100}
            />
          </div>
          <p className="text-xl my-5">
            The main provider of meteorological data for weatherCast is
            AccuWeather and Ventusky. However, the radar layers have several
            other country-specific sources. All used sources are summarized on
            the page Data sources.
          </p>
        </div>
        <div>
          <h2 className="text-3xl mt-20 my-10 font-bold">Trusted By</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <Image
              src={trustedLogo1}
              alt="sourceLogo"
              width={300}
              height={100}
            />
            <Image
              src={trustedLogo2}
              alt="sourceLogo"
              width={300}
              height={100}
            />
            <Image
              src={sourceLogo1}
              alt="sourceLogo"
              width={300}
              height={100}
            />
            <Image
              src={trustedLogo3}
              alt="sourceLogo"
              width={300}
              height={100}
            />
            <Image
              src={sourceLogo2}
              alt="sourceLogo"
              width={300}
              height={100}
            />
            <Image
              src={trustedLogo4}
              alt="sourceLogo"
              width={300}
              height={100}
            />
          </div>
        </div>
        <div>
          <h2 className="text-3xl mt-20 my-10 font-bold">Our Address</h2>
          <p className="text-xl">weatherCast</p>
          <p className="text-xl">123/3, Block-E</p>
          <p className="text-xl">Taltola, Dhanmondi</p>
          <p className="text-xl">Dhaka-1219, Bangladesh</p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
