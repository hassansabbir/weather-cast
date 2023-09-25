import React from "react";
import Image from "next/image";
import rain from "../../../assets/rain2.gif";
import sun from "../../../assets/sun.gif";
import night from "../../../assets/night.gif";
import thunderstorm from "../../../assets/thunderstorm.gif";
import foggy from "../../../assets/foggy.gif";

const GifBanner = () => {
  return (
    <div className="w-full h-[300px] relative ">
      <div className="absolute top-0">
        <Image
          className="animate-slide-right-1"
          src={rain}
          height={100}
          width={100}
        />
      </div>
      <div className="absolute top-10">
        <Image
          className="animate-slide-right-2"
          src={thunderstorm}
          height={100}
          width={100}
        />
      </div>
      <div className="absolute top-20">
        <Image
          className="animate-slide-right-3"
          src={sun}
          height={100}
          width={100}
        />
      </div>
      <div className="absolute bottom-8">
        <Image
          className="animate-slide-right-4"
          src={night}
          height={100}
          width={100}
        />
      </div>
      <div className="absolute bottom-0">
        <Image
          className="animate-slide-right-5"
          src={foggy}
          height={100}
          width={100}
        />
      </div>
    </div>
  );
};

export default GifBanner;
