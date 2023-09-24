import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
import axios from "axios";
import Rating from "react-rating";
import { FaQuoteLeft, FaRegStar, FaStar } from "react-icons/fa";
import Reviews from "./Reviews";
import "./reviews.css";

const ShowReviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    axios
      .get(`https://weather-cast-server.vercel.app/reviews`)
      .then((data) => setReviews(data.data));
  }, []);

  return (
    <div className="py-16 reviewSection mb-16">
      <h2 className="text-3xl md:text-5xl font-bold my-10 text-center">
        Our <span className="text-blue-800">Top</span> Reviews
      </h2>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper mb-10"
      >
        <div>
          {reviews.map((review) => (
            <SwiperSlide
              key={review._id}
              className="gap-5 reviewCard rounded-3xl flex-col"
            >
              <div className="p-10">
                <div className="flex flex-col items-center justify-center">
                  <div className="rounded-full md:w-20">
                    <img
                      className="rounded-full"
                      src={review.photoUrl}
                      alt="profileImg"
                    />
                  </div>
                  <div className="text-center">
                    <h2 className="text-xl md:text-2xl font-bold">
                      {review.name}
                    </h2>
                    <p>{review.email}</p>
                  </div>
                  <Rating
                    placeholderRating={review.rating}
                    emptySymbol={<FaRegStar />}
                    placeholderSymbol={<FaStar className="text-orange-600" />}
                    fullSymbol={<FaStar />}
                    readonly
                  />
                </div>
                <div className="flex flex-col items-center mt-10">
                  <FaQuoteLeft className="w-6 h-6" />
                  <p className="text-lg w-full break-words overflow-hidden md:text-xl h-36 my-10">
                    {review.feedback}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
      <Reviews setReviews={setReviews} />
    </div>
  );
};

export default ShowReviews;
