"use client";

import articlesPage from "@/app/articles/page";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaCheck, FaTrashAlt } from "react-icons/fa";
import { MdOutlineFeedback } from "react-icons/md";
import Swal from "sweetalert2";

const manageArticlesPage = () => {
  const [allArticles, setAllArticles] = useState([]);
  // const [newFeedback, setNewFeedback] = useState("");
  // console.log(newFeedback);

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const form = event.target;
  //   const feedback = form.feedback.value;
  //   setNewFeedback({ feedback: feedback });
  //   console.log({ feedback: feedback });
  // };

  // const handleFeedback = (article) => {
  //   fetch(`https://weather-cast-server.vercel.app/articlesFeedback/${article._id}`, {
  //     method: "PUT",
  //     headers: { "content-type": "application/json" },
  //     body: JSON.stringify(newFeedback),
  //   })
  //     .then((res) => {
  //       if (!res.ok) {
  //         throw new Error(`Request failed with status: ${res.status}`);
  //       }
  //       return res.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       if (data.message) {
  //         Swal.fire({
  //           title: "Success",
  //           text: `Successfully feedback sent to ${article.authorName}`,
  //           icon: "success",
  //           confirmButtonText: "Done",
  //         });
  //         document.getElementById("my_modal_2").close();
  //       }
  //     })
  //     .catch((error) => {
  //       console.error("Error:", error);
  //       // Handle the error here, e.g., display an error message to the user.
  //     });
  // };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get(`https://weather-cast-server.vercel.app/articles`)
      .then((data) => {
        setAllArticles(data.data);
      });
  };

  const pendingArticles = allArticles.filter(
    (pendingArticle) => pendingArticle.status === "pending"
  );
  const approvedArticles = allArticles.filter(
    (approvedArticle) => approvedArticle.status === "approved"
  );

  const handleApprove = (article) => {
    fetch(
      `https://weather-cast-server.vercel.app/articles/approve/${article._id}`,
      {
        method: "PATCH",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(article.status);
        if (data.modifiedCount > 0) {
          fetchData();
          Swal.fire({
            title: `Selected Article has been Approved.`,
            showClass: {
              popup: "animate__animated animate__fadeInDown",
            },
            hideClass: {
              popup: "animate__animated animate__fadeOutUp",
            },
          });
        }
      });
  };

  const handleDelete = (article) => {
    fetch(
      `https://weather-cast-server.vercel.app/articles/denied/${article._id}`,
      {
        method: "PATCH",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          fetchData();
          Swal.fire({
            title: `Selected Article has been Deleted.`,
            showClass: {
              popup: "animate__animated animate__fadeInDown",
            },
            hideClass: {
              popup: "animate__animated animate__fadeOutUp",
            },
          });
        }
      });
  };

  return (
    <div className="p-5">
      <h2 className="text-5xl font-bold">All Pending Articles</h2>
      <div className="my-10 grid grid-cols-1 gap-10">
        {pendingArticles.map((article) => (
          <div
            key={article._id}
            className="bg-blue-50 lg:flex  gap-2 rounded-3xl items-center lg:me-10 sm:m-5 p-5 "
          >
            <div className="lg:w-2/3">
              <img
                className="w-[550px] rounded-3xl h-[300px]"
                src={article?.image_url}
                alt="eventImage"
              />
              <h2 className="text-3xl  my-5 font-bold text-center">
                {article?.event}
              </h2>
              <div className="flex gap-3 my-5">
                <img
                  className="w-16 h-16 rounded-full"
                  src={article?.authorImage}
                  alt=""
                />
                <div>
                  <h2 className="text-2xl  font-bold">{article?.authorName}</h2>
                  <h2 className="lg:text-xl sm:text-lg ">
                    {article?.authorEmail}
                  </h2>
                </div>
              </div>
              <p className="text-xl">{article?.description}</p>
            </div>
            <div className="hidden lg:block">
              {" "}
              <p className="divider  divider-horizontal my-auto h-96"></p>
            </div>
            <div className="lg:w-1/3">
              <div className="my-5 w-full">
                <Link href={`/articles/${article?._id}`}>
                  <button className="btn bg-blue-800 w-full hover:bg-blue-600 text-white">
                    View Full Details
                  </button>
                </Link>
              </div>
              <div className="divider">OR</div>
              <div>
                <p className="text-lg text-center">
                  You can approve or delete this article. If you approve, it
                  will show on the Articles section{" "}
                </p>
                <div className="my-6 space-y-3">
                  <button
                    onClick={() => handleApprove(article)}
                    className="btn w-full lg:text-2xl sm:text-xl text-green-600 hover:bg-green-600 hover:text-white hover:border-green-600 btn-outline"
                  >
                    <FaCheck /> Approve
                  </button>
                  <button
                    onClick={() => handleDelete(article)}
                    className="btn w-full lg:text-2xl sm:text-xl text-red-600 hover:bg-red-600 hover:text-white hover:border-red-600 btn-outline"
                  >
                    <FaTrashAlt /> Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <h2 className="text-5xl font-bold my-20">All Articles</h2>
      <div className="my-10 grid grid-cols-1 gap-10 ">
        {approvedArticles.map((approvedArticle) => (
          <div
            key={approvedArticle._id}
            className="bg-blue-50 lg:flex  rounded-3xl items-center p-5 sm:m-5 lg:me-10 "
          >
            <div className="lg:w-2/3">
              <img
                className="w-[550px] rounded-3xl h-[300px]"
                src={approvedArticle?.image_url}
                alt="eventImage"
              />
              <h2 className="text-3xl my-5 font-bold text-center">
                {approvedArticle?.event}
              </h2>
              <div className="flex gap-3 my-5">
                <img
                  className="w-16 h-16 rounded-full"
                  src={approvedArticle?.authorImage}
                  alt=""
                />
                <div>
                  <h2 className="text-2xl font-bold">
                    {approvedArticle?.authorName}
                  </h2>
                  <h2 className="lg:text-xl sm:text-lg ">
                    {approvedArticle?.authorEmail}
                  </h2>
                </div>
              </div>
              <p className="lg:text-xl sm:text-lg">
                {approvedArticle?.description}
              </p>
            </div>
            <div className="hidden lg:block">
              {" "}
              <p className="divider  divider-horizontal my-auto h-96"></p>
            </div>
            <div className="lg:w-1/3">
              <div className="my-5 w-full">
                <Link href={`/articles/${approvedArticle?._id}`}>
                  <button className="btn bg-blue-800 w-full hover:bg-blue-600 text-white">
                    View Full Details
                  </button>
                </Link>
              </div>
              <div className="divider">OR</div>
              <div>
                <p className="text-lg text-center">
                  You can approve or delete this article. If you approve, it
                  will show on the Articles section{" "}
                </p>
                <div className="my-6 space-y-3">
                  <button
                    onClick={() => handleDelete(approvedArticle)}
                    className="btn w-full lg:text-2xl sm:text-xl text-red-600 hover:bg-red-600 hover:text-white hover:border-red-600 btn-outline"
                  >
                    <FaTrashAlt /> Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default manageArticlesPage;
