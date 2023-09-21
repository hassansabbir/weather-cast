"use client";

import { AuthContext } from "@/Providers/AuthProvider";
import axios from "axios";
import moment from "moment";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { ImLocation } from "react-icons/im";

const myArticlesPage = () => {
  const { user } = useContext(AuthContext);

  const [myArticles, setMyArticles] = useState([]);

  const fetchData = () => {
    axios
      .get(`https://weather-cast-server.vercel.app/articles/${user?.email}`)
      .then((data) => {
        console.log(data);
        setMyArticles(data.data);
      });
  };
  useEffect(() => {
    fetchData();
  }, [user?.email]);
  if (!myArticles) {
    return <p>....</p>;
    // fetchData();
  }

  return (
    <div>
      <h2 className="text-5xl my-10 font-bold">
        My Articles: {myArticles?.length}
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 p-10 ">
        {myArticles.map((article) => (
          <div
            key={article?._id}
            className="bg-blue-50 p-5 rounded-2xl shadow-lg"
          >
            <div className="flex items-center my-5 justify-center gap-5">
              <img
                className="w-12 h-12 rounded-full"
                src={article?.authorImage}
                alt={article?.authorName}
              />
              <div>
                <h1 className="text-2xl font-bold">{article?.authorName}</h1>
                {article?.status === "denied" && (
                  <button className="btn btn-sm bg-red-500 text-white">
                    {article?.status}
                  </button>
                )}
                {article?.status === "pending" && (
                  <button className="btn btn-sm bg-orange-500 text-white">
                    {article?.status}
                  </button>
                )}
                {article?.status === "approved" && (
                  <button className="btn btn-sm bg-green-500 text-white">
                    {article?.status}
                  </button>
                )}
              </div>
            </div>
            <img
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
            <div className="mt-5 flex justify-center">
              <Link href={`/articles/${article._id}`}>
                <button className="btn bg-blue-800 text-white">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default myArticlesPage;
