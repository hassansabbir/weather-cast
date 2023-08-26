"use client";

import React, { useContext, useState } from "react";
import "./login.css";
import Link from "next/link";
import SocialLogin from "../Components/SocialLogin";
import { AuthContext } from "@/Providers/AuthProvider";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

const LogInPage = () => {
  const { signIn } = useContext(AuthContext);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    signIn(data.email, data.password).then((res) => {
      const user = res.user;
      console.log(user);
      reset();
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Login successful",
        showConfirmButton: false,
        timer: 1500,
      });
      router.push("/");
    });
  };

  return (
    <div className="login-page">
      <div className="hero ">
        <div className="hero-content flex-col  rounded-3xl">
          <div className="text-center">
            <h1 className="text-5xl font-bold  font-description">
              Welcome to WeatherCast
            </h1>
            <h1 className="text-5xl font-bold font-description">Login Now!</h1>
            <p className="py-6 text-2xl lg:w-9/12 mx-auto  font-description">
              Welcome to our weather forecast web application! Log in to access
              personalized weather updates, and real-time alerts. Stay informed
              about weather conditions in your area and explore historical data.
              Join us in this journey of learning and exploring the world of web
              development while staying ahead of the weather.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full mb-20 max-w-xl shadow-2xl ">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="card-body bg-white bg-opacity-70 rounded-3xl"
            >
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl font-bold">Email</span>
                </label>
                <input
                  {...register("email", { required: true })}
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                />
                {errors.email && (
                  <span className="text-red-600">email is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl font-bold">Password</span>
                </label>
                <input
                  {...register("password", { required: true })}
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                />
                {errors.password && (
                  <span className="text-red-600">Password is required</span>
                )}

                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-outline text-xl bg-transparent border-black">
                  Login
                </button>
              </div>
              <SocialLogin />
              <p className="text-center text-xl">
                New To weatherCast?{" "}
                <Link href="/signUp" className="underline font-bold">
                  Register Now
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogInPage;
