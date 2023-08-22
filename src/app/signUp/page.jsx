"use client";

import Link from "next/link";
import React, { useContext } from "react";
import "./signUp.css";
import SocialLogin from "../Components/SocialLogin";
import { AuthContext } from "@/Providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

const SignUpPage = () => {
  const { createUser, logOut } = useContext(AuthContext);
  const router = useRouter();

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    console.log(name, email, photo, password);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        updateUserDetails(user, name, photo);
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
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const updateUserDetails = (user, name, photo) => {
    updateProfile(user, {
      displayName: name,
      photoURL: photo,
    })
      .then(() => {})
      .catch((err) => {
        console.log(err);
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
              onSubmit={handleSignUp}
              className="card-body bg-white bg-opacity-70 rounded-3xl"
            >
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-2xl font-bold">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                  name="name"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-2xl font-bold">
                    Photo Url
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="photo url"
                  className="input input-bordered"
                  name="photo"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-2xl font-bold">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-2xl font-bold">
                    Password
                  </span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-2xl font-bold">
                    Confirm Password
                  </span>
                </label>
                <input
                  type="password"
                  placeholder="confirm password"
                  className="input input-bordered"
                />
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
