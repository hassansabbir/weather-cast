import Link from "next/link";
import "./CommunityInfo.css";
import React from 'react';

// import React, { useRef, useState } from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// // Import required modules
// import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// import Img1 from "./../../../../assets/donationbg.png"



const CommunityInfo = () => {
  const communityInfoStyle = {
    width: "300px",
    position: "sticky",
    top: "0",
  };

  // const progressCircle = useRef(null);
  // const progressContent = useRef(null);

  // const onAutoplayTimeLeft = (s, time, progress) => {
  //   progressCircle.current.style.setProperty('--progress', 1 - progress);
  //   progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  // };

  return (
    <div
      className="bg-blue-100 p-4 rounded-lg shadow-lg mt-4 rCardBg"
      style={communityInfoStyle}
    >
      <h2 className="text-2xl font-semibold mb-2">Welcome to Our Community!</h2>
      
      <p className="text-gray-600">Benefits of Joining Our Community:</p>
      <ul className="list-disc pl-6 text-gray-600">
        <li>Gain knowledge and insights from others.</li>
        <li>Get answers to your questions.</li>
        <li>Share your own knowledge and expertise.</li>
      </ul>
      <h2 className="animate-pulse bg-gradient-to-r from-red-800 p-5 shadow-xl rounded-2xl via-blue-650 text-2xl font-bold text-center to-red-500 bg-clip-text text-transparent">
        <Link href="/community/Donation">
          <button>Donation Now!</button>
        </Link>
      </h2>

      {/* Donation Purpose Section */}
      <div className="mt-4 DonationBg text-black  p-4 rounded-lg shadow-lg font-semibold text-xl " >
  
  <p>
    Your donation plays a crucial role in supporting our community. Here's how your contribution helps:
  </p>
  <ul className="list-disc pl-6">
    <li>Supporting community events and activities.</li>
    <li>Improving the platform and user experience.</li>
    <li>Providing resources for community members in need.</li>
  </ul>
</div>

      {/* <div className="swiper-container">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper"
        >
          <SwiperSlide >
           <img src={Img1} alt="" />
          </SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          
          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        </Swiper>
      </div> */}
    </div>
  );
};

export default CommunityInfo;
