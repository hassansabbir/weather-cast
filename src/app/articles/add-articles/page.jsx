"use client";

import { AuthContext } from "@/Providers/AuthProvider";
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

  const onsubmit = (data) => {
    console.log(data);

    const addNewArticles = {
      event: data.event,
      image_url: data.image_url,
      authorName: data.authorName,
      authorEmail: data.authorEmail,
      location: data.location,
      date: data.date,
      description: data.description,
      detailedDescription: data.detailedDescription,
      status: "pending",
    };
    fetch(`https://weather-cast-server.vercel.app/articles`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(addNewArticles),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
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
        }
        reset();
      });
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
                <span className="text-red-600">Name is required</span>
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
                <span className="text-red-600">Name is required</span>
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
                <span className="text-red-600">Name is required</span>
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
              <span className="text-red-600">Name is required</span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-2xl font-bold">Image</span>
            </label>
            <input
              {...register("image_url", { required: true })}
              type="text"
              placeholder="image url"
              className="input input-bordered"
            />
            {errors.image_url && (
              <span className="text-red-600">Name is required</span>
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
              <span className="text-red-600">Name is required</span>
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
              <span className="text-red-600">Name is required</span>
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
