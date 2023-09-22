"use client";

import "./signUp.css";
import Link from "next/link";
import Swal from "sweetalert2";
import React, { useContext } from "react";
import SocialLogin from "../Components/SocialLogin";
import { AuthContext } from "@/Providers/AuthProvider";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

const SignUpPage = () => {
  const { createUser, updateUserProfile, logOut } = useContext(AuthContext);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);

      updateUserProfile(data.name, data.photoUrl)
        .then(() => {
          const savedUserInfo = {
            name: data.name,
            image: data.photoUrl,
            email: data.email,
            role: "visitor",
          };
          fetch(`https://weather-cast-server.vercel.app/users`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(savedUserInfo),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                console.log("user profile updated");
                reset();
                Swal.fire({
                  title: "User created successfully. Please login now.",
                  showClass: {
                    popup: "animate__animated animate__fadeInDown",
                  },
                  hideClass: {
                    popup: "animate__animated animate__fadeOutUp",
                  },
                });
                logOut()
                  .then(() => {
                    router.push("/logIn");
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }
            });
        })
        .catch((err) => {
          console.log(err);
        });
    });
  };

  return (
    <div className="sign-up-page">
      <div className="lg:flex justify-center p-5 lg:p-32 items-center">
        <div className="signUpCard p-10 pt-20 text-white rounded-l-3xl shadow-2xl h-[750px] lg:w-[500px]">
          <div className="">
            <h1 className="text-5xl font-bold text-center">
              Welcome to weatherCast
            </h1>
            <p className="text-xl mt-5 text-justify ">
              Join our weather forecast community! Sign up to enjoy personalized
              weather insights, and instant alerts. Be part of a platform where
              learning and exploring web development meet the excitement of
              staying informed about weather conditions. Sign up and start your
              journey with us today!
            </p>
          </div>
        </div>
        <div className="bg-blue-50 p-10 h-[750px] lg:w-[500px] shadow-2xl rounded-r-3xl">
          <h1 className="text-4xl font-bold text-center mb-5">Sign up Now!</h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="card-body rounded-3xl"
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg font-bold">Name</span>
              </label>
              <input
                {...register("name", { required: true })}
                type="text"
                placeholder="name"
                className="input input-bordered h-8"
                name="name"
              />
              {errors.name && (
                <span className="text-red-600">Name is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg font-bold">Photo Url</span>
              </label>
              <input
                {...register("photoUrl", { required: true })}
                type="text"
                placeholder="photo url"
                className="input input-bordered  h-8"
              />
              {errors.photoUrl && (
                <span className="text-red-600">PhotoUrl is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg font-bold">Email</span>
              </label>
              <input
                {...register("email", { required: true })}
                type="text"
                placeholder="email"
                className="input input-bordered h-8"
                name="email"
              />
              {errors.email && (
                <span className="text-red-600">Email is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg font-bold">Password</span>
              </label>
              <input
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                })}
                type="password"
                placeholder="password"
                className="input input-bordered h-8"
                name="password"
              />
              {errors.password?.type === "required" && (
                <p className="text-red-600">Password is required</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-600">
                  Password must be at least 6 characters
                </p>
              )}
              {errors.password?.type === "maxLength" && (
                <p className="text-red-600">
                  Password must be under 20 characters
                </p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-red-600">
                  Password must have one uppercase one lowercase one number and
                  one special character
                </p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg font-bold">
                  Confirm Password
                </span>
              </label>
              <input
                {...register("confirmPassword", {
                  required: true,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                })}
                type="password"
                placeholder="confirm password"
                className="input input-bordered h-8"
              />
              {errors.confirmPassword?.type === "pattern" && (
                <p className="text-red-600">
                  password must be one of the following
                </p>
              )}
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-sm btn-outline h-8 text-lg bg-transparent border-black">
                Sign Up
              </button>
            </div>
            <div className="divider"></div>
            <p className="text-center text-lg">
              Already Have An Account?{" "}
              <Link href="/logIn" className="underline font-bold">
                Login Now
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
