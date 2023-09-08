"use client";

import AOSInitializer from "@/AOS/AOSInitializer";
import axios from "axios";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaPlus, FaRegCalendarAlt } from "react-icons/fa";
import { ImLocation } from "react-icons/im";

const articlesPage = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    axios
      .get(`https://weather-cast-server.vercel.app/articles`)
      .then((data) => setArticles(data.data));
  }, []);
  // console.log(articles);

  return (
    <div className="max-w-[1460px] mx-auto mb-20">
      <AOSInitializer></AOSInitializer>;
      <h2 className="text-5xl font-bold text-center">Weather Articles</h2>
      <div className="text-center my-10">
        <h2 className="text-2xl font-bold">Wanna Publish Your Own Articles?</h2>
        <Link href="/articles/add-articles">
          <button className="h-14 text-xl mx-auto flex gap-2 items-center justify-center w-28 border border-gray-300">
            <FaPlus /> Publish
          </button>
        </Link>
      </div>
      <p className="text-xl text-center my-10">
        Welcome to WeatherCast's Articles Section! Explore our collection of
        informative and engaging articles that cover a wide range of topics
        related to weather forecasting, climate trends, natural phenomena, and
        more. Whether you're a weather enthusiast, a student, or simply curious
        about the forces shaping our world, these articles offer valuable
        insights and knowledge. Dive in to discover the fascinating world of
        weather and its impact on our lives.
      </p>
      <div
        className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        {articles.map((article) => (
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

export default articlesPage;
