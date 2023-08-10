"use client" ;

import { Swiper, SwiperSlide } from 'swiper/react';
import {  Navigation } from "swiper/modules" ;
// Import Swiper styles

// import { Autoplay, EffectFade, Navigation } from "swiper"; 
import "swiper/css/bundle";
import SingleSlider from './SingleSlider';
import banner from '@/data/banner';

const Banner = () => {
    return (
        <section className="main-slider">
        <Swiper
          slidesPerView={1}
          loop
          navigation
          effect="fade"
          autoplay
          // modules={[Navigation]} 
          modules={[Navigation]}
        >
          {banner.map((slider) => (
            <SwiperSlide key={slider.id}>
              <SingleSlider slider={slider} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    );
};

export default Banner;