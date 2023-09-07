"use client";

import { AuthContext } from "@/Providers/AuthProvider";
import axios from "axios";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";

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
    return <p> Mithila is loading..</p>;
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
            className="p-5 rounded-3xl shadow-xl bg-blue-100"
            key={article?._id}
          >
            <img
              className="w-96 rounded-2xl h-60"
              src={article?.image_url}
              alt=""
            />
            <h2 className="text-3xl my-5 font-bold">{article?.event}</h2>
            <p>
              <span className="font-bold">Location:</span> {article?.location}
            </p>
            <p>
              <span className="font-bold">Date:</span> {article?.date}
            </p>
            <p>
              <span className="font-bold">Status:</span>{" "}
              {article?.status === "pending" && (
                <button className="btn btn-sm bg-red-600 text-white">
                  {article?.status}
                </button>
              )}
              {article?.status === "approved" && (
                <button className="btn btn-sm bg-green-600 text-white">
                  {article?.status}
                </button>
              )}
            </p>
            <div className="text-end mt-5">
              <Link href={`/articles/${article._id}`}>
                <button className="btn bg-blue-800 hover:bg-blue-600 text-white">
                  Details
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
