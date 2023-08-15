import SocialLogin from "@/components/SocialLogin";
import React from "react";
import "./login.css";
import Link from "next/link";

const logInPage = () => {
  return (
    <div className="login-page">
      <div className="hero ">
        <div className="hero-content flex-col  rounded-3xl">
          <div className="text-center">
            <h1 className="text-5xl font-bold  font-description">
              Welcome to WeatherCast
            </h1>
            <h1 className="text-5xl font-bold font-description">Login Now!</h1>
            <p className="py-6 text-2xl w-9/12 mx-auto  font-description">
              Welcome to our weather forecast web application! Log in to access
              personalized weather updates, and real-time alerts. Stay informed
              about weather conditions in your area and explore historical data.
              Join us in this journey of learning and exploring the world of web
              development while staying ahead of the weather.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full mb-20 max-w-xl shadow-2xl ">
            <form className="card-body bg-white bg-opacity-70 rounded-3xl">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl font-bold">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl font-bold">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                />

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

export default logInPage;
