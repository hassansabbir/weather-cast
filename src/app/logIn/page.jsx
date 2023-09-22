"use client";

import React, { useContext, useState } from "react";
import "./login.css";
import Link from "next/link";
import SocialLogin from "../Components/SocialLogin";
import { AuthContext } from "@/Providers/AuthProvider";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import loginCard from "../../assets/loginCard.jpg";
import Image from "next/image";

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
      <div className="lg:flex justify-center p-5 lg:p-32 items-center">
        <div className="bg-blue-50 p-10 h-[730px] lg:w-[500px] shadow-2xl rounded-l-3xl">
          <h2 className="text-4xl text-center font-bold">
            Login to your Account
          </h2>
          <SocialLogin />
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
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
            <div className="divider"></div>
            <p className="text-center text-xl">
              New To weatherCast?
              <br />
              <Link href="/signUp" className="underline rounded-3xl font-bold">
                Register Now
              </Link>
            </p>
          </form>
        </div>
        <div className="welcomeCard h-[730px] lg:w-[500px] shadow-2xl rounded-r-3xl p-10">
          <h1 className="text-5xl font-bold text-center">
            Welcome to weatherCast
          </h1>
          <p className="text-xl mt-5 text-justify ">
            Welcome to our weather forecast web application! Log in to access
            personalized weather updates, and real-time alerts. Stay informed
            about weather conditions in your area and explore historical data.
            Join us in this journey of learning and exploring the world of web
            development while staying ahead of the weather.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogInPage;
