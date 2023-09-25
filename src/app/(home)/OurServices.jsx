import AOSInitializer from "@/AOS/AOSInitializer";
import Link from "next/link";
import React, { useState } from "react";
import "./OurServices.css";

const OurServices = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      label: "Real Time Weather Update",
      content: (
        <div className="rounded-3xl flex flex-col justify-between p-3 lg:p-10 border w-full lg:h-[800px]">
          <div>
            <h2 className="text-4xl font-bold text-center">
              Real-time Weather Updates Based <br /> on User Location:
            </h2>
            <p className="text-xl my-5 text-justify">
              Immerse yourself in a world of weather precision with our
              real-time weather updates, precisely tailored to your current
              location. We believe that being aware of the immediate weather
              conditions is paramount, and our cutting-edge technology ensures
              you're always in the loop. Whether it's a quick glance at the
              temperature or comprehensive data on precipitation, humidity, wind
              speed, and localized alerts, you'll have all the information you
              need at your fingertips, empowering you to plan your day with
              confidence.
            </p>
          </div>
          <div className="flex-grow"></div>
          <div className="grid grid-cols-1 lg:grid-cols-3 my-10 gap-5">
            <p
              data-aos="fade-up"
              data-aos-duration="3000"
              className="text-xl text-center lg:h-64 bg-slate-100 rounded-3xl shadow-lg hover:shadow-blue-200 flex items-center p-5"
            >
              Accurate and up-to-date weather information delivered in
              real-time.
            </p>
            <p
              data-aos="fade-up"
              data-aos-duration="3000"
              className="text-xl text-center lg:h-64 bg-slate-100 rounded-3xl shadow-lg hover:shadow-blue-200 flex items-center p-5"
            >
              A user-friendly interface for seamless location detection or
              manual input.
            </p>
            <p
              data-aos="fade-up"
              data-aos-duration="3000"
              className="text-xl text-center lg:h-64 bg-slate-100 rounded-3xl shadow-lg hover:shadow-blue-200 flex items-center p-5"
            >
              Comprehensive details on temperature, precipitation, humidity,
              wind speed, and location-specific alerts.
            </p>
          </div>
          <div className="text-center">
            <Link href="#currentLocationWeather">
              <button className="btn w-72 bg-blue-800 text-white hover:bg-blue-600">
                See Feature
              </button>
            </Link>
          </div>
        </div>
      ),
    },
    {
      label: "Daily & Weekly Forecast",
      content: (
        <div className="rounded-3xl flex flex-col justify-between p-10 border w-full lg:h-[800px]">
          <div>
            <h2 className="text-4xl text-center font-bold">
              Daily and weekly forecasts, including <br /> temperature,
              precipitation, humidity, <br /> and wind speed.
            </h2>
            <p className="text-xl my-5 text-justify">
              Embark on a journey of informed decision-making with our detailed
              daily and weekly forecasts. We understand that your plans and
              activities often hinge on the weather, which is why we provide
              meticulously crafted forecasts that go beyond mere predictions.
              Our user-friendly graphs, icons, and summaries make it easy to
              grasp temperature trends, precipitation probabilities, and wind
              speeds, enabling you to plan your week with precision. We believe
              that weather information should be accessible and actionable,
              which is precisely what our forecasts offer.
            </p>
          </div>
          <div className="flex-grow"></div>
          <div className="grid grid-cols-1 lg:grid-cols-3 my-10 gap-5">
            <p className="text-xl text-center lg:h-64 bg-slate-100 rounded-3xl shadow-lg hover:shadow-blue-200 flex items-center p-5">
              Flexible units customization for temperature and other weather
              parameters.
            </p>

            <p className="text-xl text-center lg:h-64 bg-slate-100 rounded-3xl shadow-lg hover:shadow-blue-200 flex items-center p-5">
              Clear, visually appealing graphs and icons representing
              temperature, precipitation, and wind speed.
            </p>

            <p className="text-xl text-center lg:h-64 bg-slate-100 rounded-3xl shadow-lg hover:shadow-blue-200 flex items-center p-5">
              Daily forecast summaries providing at-a-glance insights into
              anticipated weather conditions.
            </p>
          </div>
          <div className="text-center">
            <Link href="/details">
              <button className="btn  w-72 bg-blue-800 text-white hover:bg-blue-600">
                See Feature
              </button>
            </Link>
          </div>
        </div>
      ),
    },
    {
      label: "Interactive Weather Map",
      content: (
        <div className="rounded-3xl flex flex-col justify-between p-10 border w-full lg:h-[800px]">
          <div>
            <h2 className="text-4xl text-center font-bold">
              Interactive maps displaying weather <br /> patterns and radar
              data.
            </h2>
            <p className="text-xl my-5 text-justify">
              Delve into the intricacies of weather patterns and radar data with
              our immersive interactive maps. We believe that visualizing
              weather conditions should be an experience, and our maps offer
              just that. Zoom in, pan around, and explore the real-time radar
              data, satellite imagery, and overlays that provide insights into
              precipitation, cloud cover, temperature variations, and more. Our
              maps are designed to be user-friendly and intuitive, offering
              tooltips and pop-ups that provide additional information,
              empowering you to understand weather phenomena like never before.
            </p>
          </div>
          <div className="flex-grow"></div>
          <div className="grid grid-cols-1 lg:grid-cols-3 my-10 gap-5">
            <p className="text-xl text-center lg:h-64 bg-slate-100 rounded-3xl shadow-lg hover:shadow-blue-200 flex items-center p-5">
              Highly interactive maps for in-depth exploration and
              understanding.
            </p>

            <p className="text-xl text-center lg:h-64 bg-slate-100 rounded-3xl shadow-lg hover:shadow-blue-200 flex items-center p-5">
              Access to real-time radar data, satellite imagery, and overlays,
              enhancing your weather visualization experience.
            </p>

            <p className="text-xl text-center lg:h-64 bg-slate-100 rounded-3xl shadow-lg hover:shadow-blue-200 flex items-center p-5">
              Helpful tooltips and pop-ups offering detailed information for
              specific regions on the map.
            </p>
          </div>
          <div className="text-center">
            <Link href="/details">
              <button className="btn  w-72 bg-blue-800 text-white hover:bg-blue-600">
                See Feature
              </button>
            </Link>
          </div>
        </div>
      ),
    },
    {
      label: "Severe Weather Alerts",
      content: (
        <div className="rounded-3xl flex flex-col justify-between p-10 border w-full lg:h-[800px]">
          <div>
            <h2 className="text-4xl text-center font-bold">
              Severe weather alerts and <br /> notifications.
            </h2>
            <p className="text-xl my-5 text-justify">
              Safety is at the forefront of our priorities. Stay protected and
              well-informed with our timely severe weather alerts and
              notifications. Our belief in proactive safety led us to create a
              system where you can sign up for alerts based on your location and
              weather preferences. In addition to receiving location-specific
              alerts, our dedicated "Alerts" or "Safety Center" section ensures
              you have immediate access to real-time updates, safety tips, and
              essential emergency resources, giving you peace of mind during
              severe weather events.
            </p>
          </div>
          <div className="flex-grow"></div>
          <div className="grid grid-cols-1 lg:grid-cols-3 my-10 gap-5">
            <p className="text-xl text-center lg:h-64 bg-slate-100 rounded-3xl shadow-lg hover:shadow-blue-200 flex items-center p-5">
              Personalized alerts based on your location and weather
              preferences.
            </p>
            <p className="text-xl text-center lg:h-64 bg-slate-100 rounded-3xl shadow-lg hover:shadow-blue-200 flex items-center p-5">
              A dedicated hub for accessing real-time alerts, safety tips, and
              emergency resources.
            </p>
            <p className="text-xl text-center lg:h-64 bg-slate-100 rounded-3xl shadow-lg hover:shadow-blue-200 flex items-center p-5">
              Peace of mind through severe weather warnings and guidance.
            </p>
          </div>
          <div className="text-center">
            <Link href="/details">
              <button className="btn  w-72 bg-blue-800 text-white hover:bg-blue-600">
                See Feature
              </button>
            </Link>
          </div>
        </div>
      ),
    },
    {
      label: "Historical Weather Data",
      content: (
        <div className="rounded-3xl flex flex-col justify-between p-10 border w-full lg:h-[800px]">
          <div>
            <h2 className="text-4xl text-center font-bold">
              Historical weather data for <br /> analysis and insights.
            </h2>
            <p className="text-xl my-5 text-justify">
              Step back in time and unlock a treasure trove of historical
              weather data that's not only fascinating but also incredibly
              useful. Whether you're conducting research, planning for the
              future, or simply curious about past weather trends, our
              historical weather data service has you covered. Easily search and
              retrieve data for specific dates and locations, and utilize our
              user-friendly data visualization tools to gain deeper insights
              into weather patterns over time. With downloadable datasets for
              comprehensive analysis, you'll have the power of historical
              weather information at your fingertips, ready to inform your
              decisions.
            </p>
          </div>
          <div className="flex-grow"></div>
          <div className="grid grid-cols-1 lg:grid-cols-3 my-10 gap-5">
            <p className="text-xl text-center lg:h-64 bg-slate-100 rounded-3xl shadow-lg hover:shadow-blue-200 flex items-center p-5">
              Easy search and retrieval of historical weather information for
              specific dates and locations.
            </p>
            <p className="text-xl  text-center lg:h-64 bg-slate-100 rounded-3xl shadow-lg hover:shadow-blue-200 flex items-center p-5">
              User-friendly data visualization tools for in-depth analysis of
              past weather trends.
            </p>
            <p className="text-xl text-center lg:h-64 bg-slate-100 rounded-3xl shadow-lg hover:shadow-blue-200 flex items-center p-5">
              Downloadable datasets for comprehensive research and analytical
              exploration.
            </p>
          </div>
          <div className="text-center">
            <Link href="/articles">
              <button className="btn w-72 bg-blue-800 text-white hover:bg-blue-600">
                See Feature
              </button>
            </Link>
          </div>
        </div>
      ),
    },
  ];

  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  return (
    <div className="bg-blue-50 shadow-md py-5">
      <AOSInitializer />
      <div className="max-w-[1460px] mx-auto">
        <div className="lg:flex ps-5 items-center my-40">
          <div className="p-4">
            <h2 className="text-4xl font-bold">Know About Our Services</h2>
            <ul className="flex my-10 flex-col gap-5">
              {tabs.map((tab, index) => (
                <li
                  key={index}
                  onClick={() => handleTabClick(index)}
                  className={`cursor-pointer btn-outline shadow-lg shadow-blue-200 text-blue-800 hover:border-blue-600 btn w-[200px] rounded-3xl py-3 ${
                    activeTab === index
                      ? "bg-blue-800 w-[250px] text-white"
                      : "hover:bg-blue-600 hover:text-white"
                  }`}
                >
                  {tab.label}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:w-5/6 rounded-3xl p-4">
            <div className="bg-white bg-servicesCard shadow-xl shadow-blue-100 rounded-3xl">
              <div className="rounded-3xl bg-white bg-opacity-60">
                {tabs[activeTab].content}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
