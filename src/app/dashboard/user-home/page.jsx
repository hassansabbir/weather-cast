"use client";

import { AuthContext } from "@/Providers/AuthProvider";
import { getWeatherIcon } from "@/utils/getWeatherIcon";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Swal from "sweetalert2";

const DashboardHome = () => {
  const { user } = useContext(AuthContext);
  const [getUser, setGetUser] = useState([]);
  const [weather, setWeather] = useState(null);
  const [positions, setPositions] = useState([0, 0]);
  console.log(weather);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onsubmit = (data) => {
    fetch(`https://weather-cast-server.vercel.app/users/${user?.email}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success",
            text: `Successfully Profile Updated`,
            icon: "success",
            confirmButtonText: "Done",
          });
        }
        reset();
        fetchData();
        document.getElementById("my_modal_2").close();
      });
  };

  useEffect(() => {
    fetchData();
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          // Define 'positions' array here
          setPositions([latitude, longitude]);

          fetchWeather(latitude, longitude, setWeather);
        },
        (error) => {
          console.error("Error getting user location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, [user?.email]);

  const fetchWeather = async (latitude, longitude, setWeather) => {
    const apiKey = "41a5c84ae7ccfff1bc9491b25aa4dbde";

    // fetch current weather api
    const CurrentWeatherResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`
    );
    const currentWeatherData = await CurrentWeatherResponse.json();
    setWeather(currentWeatherData);
  };

  const fetchData = () => {
    axios
      .get(`https://weather-cast-server.vercel.app/users/${user?.email}`)
      .then((data) => {
        console.log(data.data);
        setGetUser(data.data);
      });
  };

  if (!getUser) {
    return fetchData();
  }
  if (!weather) {
    return (
      <div className="flex justify-center mt-20">
        <span className="loading loading-bars loading-lg"></span>
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }

  const weatherMain = weather.weather[0].main;
  const weatherIcon = getWeatherIcon(weatherMain);
  const currentTemperatureKelvin = weather.main.temp;
  const feelsLikeTemperatureKelvin = weather.main.feels_like;
  const currentTemperatureCelsius = Math.round(
    currentTemperatureKelvin - 273.15
  );
  const feelsLikeTemperatureCelsius = Math.round(
    feelsLikeTemperatureKelvin - 273.15
  );
  const location = weather.name;
  const weatherDescription = weather.weather[0].description;

  return (
    <div className="my-20 ">
      <div className="flex gap-5 items-center ">
        <img
          src={user?.photoURL}
          alt="adminImg"
          className="w-[200px] h-[200px] rounded-full"
        />
        <div className="text-center">
          <h2 className="text-4xl mt-5 font-bold">{user?.displayName}</h2>
          <p className="text-md font-bold underline cursor-pointer">
            {user?.email}
          </p>
          {getUser?.role === "admin" ? (
            <p className="font-bold text-2xl flex justify-center items-center gap-1 my-3">
              ADMIN
              <BsFillPatchCheckFill className="text-blue-600" />
            </p>
          ) : (
            <p className="font-bold text-2xl flex justify-center items-center gap-1 my-3">
              VISITOR
            </p>
          )}
        </div>
      </div>
      <div className="bg-blue-50 flex justify-between rounded-3xl mt-10 p-10">
        <div>
          <h2 className="text-xl">
            <span className="font-bold">Contact:</span> {getUser?.contact}
          </h2>
          <h2 className="text-xl">
            <span className="font-bold">City:</span> {getUser?.address}
          </h2>
          <h2 className="text-xl">
            <span className="font-bold">Country: </span>
            {getUser?.country}
          </h2>
        </div>
        <div className="">
          {/* Open the modal using ID.showModal() method */}
          <button
            className="btn bg-blue-100 shadow-lg"
            onClick={() => window.my_modal_2.showModal()}
          >
            <FaEdit /> Edit
          </button>
          <dialog id="my_modal_2" className="modal">
            <form
              onSubmit={handleSubmit(onsubmit)}
              method="dialog"
              className="modal-box"
            >
              <h3 className="font-bold text-lg">Update Your Information</h3>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-2xl font-bold">
                    Contact:
                  </span>
                </label>
                <input
                  {...register("contact", { required: true })}
                  type="text"
                  placeholder="phone number"
                  className="input input-bordered"
                />
                {errors.contact && (
                  <span className="text-red-600">Contact is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-2xl font-bold">
                    Address:
                  </span>
                </label>
                <input
                  {...register("address", { required: true })}
                  type="text"
                  placeholder="area, city"
                  className="input input-bordered"
                />
                {errors.address && (
                  <span className="text-red-600">Address is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-2xl font-bold">
                    Country:
                  </span>
                </label>
                <input
                  {...register("country", { required: true })}
                  type="text"
                  placeholder="country"
                  className="input input-bordered"
                />
                {errors.country && (
                  <span className="text-red-600">Country is required</span>
                )}
              </div>
              <div className="form-control mt-5">
                <button className="btn bg-blue-100 shadow-lg">Update</button>
              </div>
            </form>
            <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>
        </div>
      </div>
      <div className="mt-5 p-5 bg-blue-50 rounded-3xl">
        <h2>
          <span className="font-bold">Your Current Location </span>
          <div className="p-5 flex gap-7 items-center">
            <div>
              <Image
                src={weatherIcon}
                height={100}
                width={110}
                alt={weatherMain}
              />
            </div>
            <p className="text-4xl">
              <span className="text-2xl flex items-center gap-1">
                <FaLocationDot /> {location}
              </span>{" "}
              {currentTemperatureCelsius}℃
            </p>
            <div className="ms-20">
              <h2 className="text-xl   font-semibold uppercase ">
                {weatherDescription}
              </h2>
              <p className="text-lg  ">
                Feels like {feelsLikeTemperatureCelsius} &#8451;
              </p>
            </div>
          </div>
        </h2>
      </div>
    </div>
  );
};

export default DashboardHome;
