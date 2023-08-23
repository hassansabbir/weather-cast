import axios from "axios";
import moment from "moment";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { ImLocation } from "react-icons/im";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    axios
      .get(`https://weather-cast-server.vercel.app/articles`)
      .then((data) => setArticles(data.data));
  }, []);
  // console.log(articles);

  return (
    <div className="max-w-[1460px] mx-auto">
      <h2 className="text-5xl my-16 font-bold text-center">
        Our Top Historical Weather Events
      </h2>
      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <div
            key={article?._id}
            className="bg-blue-50 p-5 rounded-2xl shadow-lg"
          >
            <Image
              className="h-[200px] rounded-xl"
              src={article?.image_url}
              alt="image"
              width={500}
              height={100}
            />
            <h2 className="text-2xl mt-3 font-bold">{article?.event}</h2>
            <div className="p-3">
              <p className="flex gap-1 font-bold text-lg">
                <ImLocation className="w-5 h-5" />
                {article?.location}
              </p>
              <p className="flex font-bold gap-1">
                <FaRegCalendarAlt className="w-5 h-5" />
                {moment(article?.date).format("LL")}
              </p>
            </div>
            <p className="text-md">{article?.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Articles;
