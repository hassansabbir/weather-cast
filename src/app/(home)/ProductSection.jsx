import Image from "next/image";
import React from "react";

const ProductSection = () => {
  return (
    <div className="my-20 max-w-[1460px] mx-auto">
      <h2 className="text-4xl lg:text-5xl font-bold text-center my-10">
        Our <span className="text-blue-800">New</span> features
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-28">
        <div className="flex flex-col rounded-3xl bg-base-200 px-8 py-14 relative ">
          <Image
            className="mx-auto border-8 border-white w-36 h-36 rounded-full absolute -top-16 left-1/2 transform -translate-x-1/2"
            src="https://img.freepik.com/free-vector/astronomy-isometric-composition-with-image-radar-with-satellite-dish-vector-illustration_1284-66738.jpg?w=826&t=st=1691645622~exp=1691646222~hmac=c33aee1cda2e7567fb8cf901e4ce3361f3c8c2f2c24182058e96c8336f4b7a08"
            alt="Ekl Logo"
            width={300}
            height={100}
          />
          <div className="flex-grow">
            <h2 className="text-2xl font-bold text-blue-800 mt-10 text-center">
              Weather Stations
            </h2>
            <p className="mt-6 text-xl text-center">
              A comprehensive weather monitoring system that combines a range of
              sensors to provide real-time data on temperature, humidity,
              atmospheric pressure, wind speed, and wind direction. This data is
              essential for accurate weather forecasting, agricultural planning,
              and outdoor activity preparation.{" "}
            </p>
          </div>
          <button className="btn btn-neutral bg-blue-800 text-white w-full mt-10">
            Learn More
          </button>
        </div>
        <div className="flex flex-col rounded-3xl bg-base-200 px-8 py-14 relative ">
          <Image
            className="mx-auto  border-8 border-white w-36 h-36 rounded-full absolute -top-16 left-1/2 transform -translate-x-1/2"
            src="https://img.freepik.com/free-photo/automatic-electronic-switch-control-water-pump-pressure-controller_627829-7491.jpg?w=740&t=st=1691645401~exp=1691646001~hmac=6dce9ff55f219d451db8cd2f4d36f5dd154f4020f63aae15ca1d2f70b0921fcb"
            alt="Ekl Logo"
            width={300}
            height={100}
          />
          <div className="flex-grow">
            <h2 className="text-2xl font-bold text-blue-800 mt-10 text-center">
              Lightning Detector
            </h2>
            <p className="mt-6 text-xl text-center">
              Lightning detectors identify and alert users to nearby lightning
              activity. They offer valuable safety information for outdoor
              enthusiasts, athletes, and professionals working in open areas.
              Lightning detectors can provide advanced warnings, allowing
              individuals to take cover or evacuate potentially hazardous
              locations.{" "}
            </p>
          </div>
          <button className="btn btn-neutral bg-blue-800 text-white w-full mt-10">
            Learn More
          </button>
        </div>
        <div className="flex flex-col rounded-3xl bg-base-200 px-8 py-14 relative ">
          <Image
            className="mx-auto  border-8 border-white w-36 h-36 rounded-full absolute -top-16 left-1/2 transform -translate-x-1/2"
            src="https://img.freepik.com/free-vector/seismograph-machine-with-graph-seismic-earthquake-activity-instrument-seismometer-technology-graph-vector-illustration_1284-46225.jpg?w=740&t=st=1691645445~exp=1691646045~hmac=308a709020f625d5f7590398d65275342234799ffa5ca50c35cf97833b15c5b2"
            alt="Ekl Logo"
            width={300}
            height={100}
          />
          <div className="flex-grow">
            <h2 className="text-2xl font-bold text-blue-800 mt-10 text-center">
              Weather Radio
            </h2>
            <p className="mt-6 text-xl text-center">
              Weather radios receive emergency alerts and weather forecasts from
              official sources. They are essential during severe weather events,
              natural disasters, and emergencies. Weather radios ensure that
              users stay informed about potential hazards, enabling them to make
              timely decisions to protect themselves and their loved ones.{" "}
            </p>
          </div>
          <button className="btn btn-neutral bg-blue-800 text-white w-full mt-10">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
