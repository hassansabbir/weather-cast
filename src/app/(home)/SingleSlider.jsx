"use client";
import React from "react";

const SingleSlider = ({ slider = {} }) => {
  const { img, title, description } = slider;
  console.log(img);
  return (
    <div
      className="hero min-h-screen image-layer"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-xl px-20 lg:px-0 lg:text-5xl font-bold">
            {title}
          </h1>
          <p className="mb-5 px-20 lg:px-0">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleSlider;
