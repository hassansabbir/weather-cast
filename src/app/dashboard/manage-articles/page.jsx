"use client";

import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaCheck, FaTrashAlt } from "react-icons/fa";
import { MdOutlineFeedback } from "react-icons/md";
import Swal from "sweetalert2";

const manageArticlesPage = () => {
  const [allArticles, setAllArticles] = useState([]);
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
    <div>
      <h2 className="text-5xl font-bold">All Pending Articles</h2>
      <div className="my-10 grid grid-cols-1 gap-10">
        {pendingArticles.map((article) => (
          <div
            key={article._id}
            className="bg-blue-50 flex gap-2 rounded-3xl items-center p-5 w-[900px]"
          >
            <div className="w-2/3">
              <img
                className="w-[600px] rounded-3xl h-[300px]"
                src={article?.image_url}
                alt="eventImage"
              />
              <h2 className="text-3xl my-5 font-bold text-center">
                {article?.event}
              </h2>
              <div className="flex gap-3 my-5">
                <img
                  className="w-16 h-16 rounded-full"
                  src={article?.authorImage}
                  alt=""
                />
                <div>
                  <h2 className="text-2xl font-bold">{article?.authorName}</h2>
                  <h2 className="text-xl ">{article?.authorEmail}</h2>
                </div>
              </div>
              <p className="text-xl">{article?.description}</p>
            </div>
            <div className="divider divider-horizontal my-auto h-96"></div>
            <div className="w-1/3">
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
                    className="btn w-full text-2xl text-green-600 hover:bg-green-600 hover:text-white hover:border-green-600 btn-outline"
                  >
                    <FaCheck /> Approve
                  </button>
                  <button
                    onClick={() => handleDelete(article)}
                    className="btn w-full text-2xl text-red-600 hover:bg-red-600 hover:text-white hover:border-red-600 btn-outline"
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
      <div className="my-10 grid grid-cols-1 gap-10">
        {approvedArticles.map((approvedArticle) => (
          <div
            key={approvedArticle._id}
            className="bg-blue-50 flex gap-2 rounded-3xl items-center p-5 w-[900px]"
          >
            <div className="w-2/3">
              <img
                className="w-[600px] rounded-3xl h-[300px]"
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
                  <h2 className="text-xl ">{approvedArticle?.authorEmail}</h2>
                </div>
              </div>
              <p className="text-xl">{approvedArticle?.description}</p>
            </div>
            <div className="divider divider-horizontal my-auto h-96"></div>
            <div className="w-1/3">
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
                  <div>
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <button
                      onClick={() =>
                        document.getElementById("my_modal_2").showModal()
                      }
                      className="btn w-full text-2xl text-blue-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 btn-outline"
                    >
                      <MdOutlineFeedback /> Feedback
                    </button>
                    <dialog id="my_modal_2" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg">
                          Give Any Feedback About This Article!
                        </h3>
                        <textarea
                          className="border my-10"
                          placeholder="Feedback message"
                          cols="30"
                          rows="5"
                        ></textarea>
                        <div className="text-end">
                          <button className="btn btn-outline">Submit</button>
                        </div>
                      </div>
                      <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                      </form>
                    </dialog>
                  </div>
                  <button
                    onClick={() => handleDelete(approvedArticle)}
                    className="btn w-full text-2xl text-red-600 hover:bg-red-600 hover:text-white hover:border-red-600 btn-outline"
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
