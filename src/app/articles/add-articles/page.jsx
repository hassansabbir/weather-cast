"use client";

import { AuthContext } from "@/Providers/AuthProvider";
import axios from "axios";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const addAArticles = () => {
  const { user } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onsubmit = async (data) => {
    try {
      // Check if a file has been selected
      if (!data.image || data.image.length === 0) {
        Swal.fire({
          icon: "error",
          title: "No file selected for upload",
        });
        return; // Prevent form submission
      }

      const imageFile = data.image[0];
      const formData = new FormData();
      formData.append("image", imageFile);

      const imgApiKey = process.env.NEXT_PUBLIC_imgApiKey;
      const imgUploadUrl = `https://api.imgbb.com/1/upload?key=${imgApiKey}`;
      const imgResponse = await axios.post(imgUploadUrl, formData);

      if (imgResponse.data.success) {
        const addNewArticles = {
          event: data.event,
          image_url: imgResponse.data.data.display_url,
          authorName: data.authorName,
          authorEmail: data.authorEmail,
          authorImage: user?.photoURL,
          location: data.location,
          date: data.date,
          description: data.description,
          detailedDescription: data.detailedDescription,
          status: "pending",
        };

        const articleResponse = await fetch("https://weather-cast-server.vercel.app/articles", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(addNewArticles),
        });

        if (articleResponse.status === 404) {
          console.error("Resource not found (404)");
          Swal.fire({
            icon: "error",
            title: "Resource not found (404)",
          });
          return;
        }

        const articleData = await articleResponse.json();

        if (articleResponse.status === 200) {
          if (articleData.insertedId) {
            console.log("New Article Added");
            reset();
            Swal.fire({
              title: "New Article Added",
              showClass: {
                popup: "animate__animated animate__fadeInDown",
              },
              hideClass: {
                popup: "animate__animated animate__fadeOutUp",
              },
            });
          } else {
            console.error("Error creating article:", articleData.message);
            Swal.fire({
              icon: "error",
              title: "Error creating article",
              text: articleData.message,
            });
          }
        } else {
          console.error("Unexpected response:", articleResponse.status);
          Swal.fire({
            icon: "error",
            title: "Unexpected response",
            text: `Received status code: ${articleResponse.status}`,
          });
        }
      } else {
        console.error("Error uploading image:", imgResponse.data.message);
        Swal.fire({
          icon: "error",
          title: "An error occurred while uploading the image",
        });
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="max-w-[1460px] mx-auto">
      <h2 className="text-5xl my-10 text-center">Create Your own Articles</h2>
      <p className="text-center text-2xl">
        Welcome to our 'Add Articles' page! Here, you can contribute to our
        growing collection of weather-related articles. Share your knowledge,
        insights, and experiences with weather forecasting, climate trends, and
        more. Let your words become a part of our weather-loving community as we
        explore the fascinating world of meteorology together.
      </p>
      <div>
        <form
          onSubmit={handleSubmit(onsubmit)}
          className="my-20 py-10 px-32 bg-slate-100"
        >
       

          <div className=" lg:flex gap-5">
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text text-2xl font-bold">
                  Author Name
                </span>
              </label>
              <input
                {...register("authorName", { required: true })}
                type="text"
                placeholder="title"
                className="input input-bordered"
                defaultValue={user?.displayName}
              />
              {errors.authorName && (
                <span className="text-red-600">Name is required</span>
              )}
            </div>
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text text-2xl font-bold">
                  Author Email
                </span>
              </label>
              <input
                {...register("authorEmail", { required: true })}
                type="text"
                placeholder="title"
                className="input input-bordered"
                defaultValue={user?.email}
              />
              {errors.authorEmail && (
                <span className="text-red-600">Email is required</span>
              )}
            </div>
          </div>
          <div className="lg:flex gap-5">
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text text-2xl font-bold">Location</span>
              </label>
              <input
                {...register("location", { required: true })}
                type="text"
                placeholder="location"
                className="input input-bordered"
              />
              {errors.location && (
                <span className="text-red-600">Location is required</span>
              )}
            </div>
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text text-2xl font-bold">Date</span>
              </label>
              <input
                {...register("date", { required: true })}
                type="date"
                placeholder=""
                className="input input-bordered"
              />
              {errors.date && (
                <span className="text-red-600">Date is required</span>
              )}
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-2xl font-bold">Title</span>
            </label>
            <input
              {...register("event", { required: true })}
              type="text"
              placeholder="title"
              className="input input-bordered"
            />
            {errors.event && (
              <span className="text-red-600">Title is required</span>
            )}
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-2xl font-bold">Image</span>
            </label>
            <input
              type="file"
              {...register("image", { required: true })}
              className="file-input file-input-bordered w-full mb-3 button-64"
            />
            {errors.image && (
              <span className="text-red-600">Image is required</span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-2xl font-bold">Summary</span>
            </label>
            <input
              {...register("description", { required: true })}
              type="text"
              placeholder="short summary"
              className="input input-bordered"
            />
            {errors.description && (
              <span className="text-red-600">Summary is required</span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-2xl font-bold">Description</span>
            </label>
            <textarea
              {...register("detailedDescription", { required: true })}
              className="p-10 rounded-xl border"
              placeholder="detailed description"
              cols=""
              rows="7"
            />
            {errors.detailedDescription && (
              <span className="text-red-600">Description is required</span>
            )}
          </div>
          <div className="text-end mt-10">
            <button className="btn bg-blue-800 hover:bg-blue-600 text-white">
              Publish Article
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default addAArticles;
