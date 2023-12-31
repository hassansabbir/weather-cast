"use client";

import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { ImLocation } from "react-icons/im";

const singleArticle = ({ params }) => {
  console.log(params.id);

  const [selectedArticle, setSelectedArticle] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  console.log(selectedArticle);

  const fetchData = () => {
    axios
      .get(`https://weather-cast-server.vercel.app/allArticles/${params.id}`)
      .then((data) => {
        setSelectedArticle(data.data);
      });
  };

  return (
    <div className="max-w-[1460px] px-5 mx-auto">
      <img
        src={selectedArticle?.image_url}
        className="w-full lg:h-[700px] rounded-3xl my-10 shadow-2xl"
        alt=""
      />
      <div className="text-center px-3">
        <h2 className="text-center text-3xl lg:text-5xl font-bold">
          {selectedArticle?.event}
        </h2>
        <p className="flex text-xl lg:text-2xl my-2 font-bold gap-2 justify-center items-center">
          {" "}
          <ImLocation /> {selectedArticle?.location}
        </p>
        <p className="flex justify-center text-xl lg:text-2xl font-bold gap-2 items-center">
          {" "}
          <FaRegCalendarAlt />
          {moment(selectedArticle?.date).format("LL")}
        </p>
      </div>
      <div className="flex items-center justify-center mt-20 gap-5">
        <img
          className="w-16 h-16 rounded-full"
          src={selectedArticle?.authorImage}
          alt={selectedArticle?.authorName}
        />
        <div>
          <h1 className="text-xl lg:text-3xl font-bold">
            {selectedArticle?.authorName}
          </h1>
          <p className="text-md lg:text-xl font-bold underline">
            {selectedArticle?.authorEmail}
          </p>
        </div>
      </div>
      <div className="text-center p-5 my-10">
        <h3 className="text-xl">{selectedArticle?.description}</h3>
        <p className="text-xl my-5">{selectedArticle?.detailedDescription}</p>
      </div>
    </div>
  );
};

export default singleArticle;
