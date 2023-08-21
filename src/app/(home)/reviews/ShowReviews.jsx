import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import axios from "axios";
import Rating from "react-rating";
import { FaQuoteLeft, FaRegStar, FaStar } from "react-icons/fa";

const ShowReviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    axios
      .get(`https://weather-cast-server.vercel.app/reviews`)
      .then((data) => setReviews(data.data));
  }, []);

  return (
    <div className="my-16">
      <h2 className="text-3xl md:text-5xl font-bold my-10 text-center">
        Our Top Reviews
      </h2>
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
        className="mySwiper"
      >
        <div>
          {reviews.map((review) => (
            <SwiperSlide key={review._id} className="gap-5 my-10 flex-col">
              <div className="flex bg-slate-100 mx-40 py-10 lg:w-7/12 rounded-3xl shadow-xl flex-col items-center">
                <div className="rounded-full md:w-20">
                  <img
                    className="rounded-full"
                    src={review.photoUrl}
                    alt="profileImg"
                  />
                </div>
                <div>
                  <h2 className="text-xl md:text-2xl font-bold">
                    {review.name}
                  </h2>
                  <p>{review.email}</p>
                </div>
                <div className=" w-11/12 rounded-3xl">
                  <Rating
                    placeholderRating={review.rating}
                    emptySymbol={<FaRegStar />}
                    placeholderSymbol={<FaStar className="text-orange-600" />}
                    fullSymbol={<FaStar />}
                    readonly
                  />
                  <div className="flex flex-col items-center mt-10">
                    <FaQuoteLeft className="w-6 h-6" />
                    <p className="text-lg md:text-xl h-28 my-10">
                      {review.feedback}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default ShowReviews;
