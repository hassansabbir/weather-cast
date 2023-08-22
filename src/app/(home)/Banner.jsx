"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// Import Swiper styles

import "swiper/css/bundle";
import SingleSlider from "./SingleSlider";
import { useEffect, useState } from "react";
import axios from "axios";

const Banner = () => {
  const [banner, setBanner] = useState([]);
  useEffect(() => {
    axios
      .get(`https://weather-cast-server.vercel.app/banners`)
      .then((data) => setBanner(data.data));
  }, []);
  console.log(banner);

  return (
    <section className="main-slider">
      <Swiper
        slidesPerView={1}
        loop
        navigation
        effect="fade"
        autoplay
        modules={[Navigation]}
      >
        {banner.map((slider) => (
          <SwiperSlide key={slider._id}>
            <SingleSlider slider={slider} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Banner;
