"use client";

import "./signUp.css";
import Link from "next/link";
import Swal from "sweetalert2";
import React, { useContext } from "react";
import SocialLogin from "../Components/SocialLogin";
import { AuthContext } from "@/Providers/AuthProvider";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

export const metadata = {
  title: "Sign Up ~ Weather Cast",
  description: "Sign Up ~ Weather Cast",
};

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
      <div className="hero">
        <div className="hero-content flex-col my-20 mr-auto">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold font-description">
              Welcome to weatherCast
            </h1>
            <h1 className="text-5xl font-bold font-description">
              Sign up Now!
            </h1>
            <p className="py-6 text-2xl lg:w-9/12 mx-auto font-description">
              Join our weather forecast community! Sign up to enjoy personalized
              weather insights, and instant alerts. Be part of a platform where
              learning and exploring web development meet the excitement of
              staying informed about weather conditions. Start your journey with
              us today!
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-xl shadow-2xl ">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="card-body bg-white bg-opacity-70 rounded-3xl"
            >
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-2xl font-bold">Name</span>
                </label>
                <input
                  {...register("name", { required: true })}
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                  name="name"
                />
                {errors.name && (
                  <span className="text-red-600">Name is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-2xl font-bold">
                    Photo Url
                  </span>
                </label>
                <input
                  {...register("photoUrl", { required: true })}
                  type="text"
                  placeholder="photo url"
                  className="input input-bordered"
                />
                {errors.photoUrl && (
                  <span className="text-red-600">PhotoUrl is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-2xl font-bold">Email</span>
                </label>
                <input
                  {...register("email", { required: true })}
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                />
                {errors.email && (
                  <span className="text-red-600">Email is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-2xl font-bold">
                    Password
                  </span>
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
                  className="input input-bordered"
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
                    Password must have one uppercase one lowercase one number
                    and one special character
                  </p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-2xl font-bold">
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
                  className="input input-bordered"
                />
                {errors.confirmPassword?.type === "pattern" && (
                  <p className="text-red-600">
                    password must be one of the following
                  </p>
                )}
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-outline text-xl bg-transparent border-black">
                  Sign Up
                </button>
              </div>
              <SocialLogin />
              <p className="text-center text-2xl">
                Already Have An Account?{" "}
                <Link href="/logIn" className="underline font-bold">
                  Login Now
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
