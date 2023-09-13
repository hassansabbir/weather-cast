"use client";

import Image from "next/image";
import Link from "next/link";
import portfolioLogo from "../../../assets/portfolio.png";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { useEffect, useState } from "react";
import axios from "axios";


const MeeTheTeam = () => {
  const [theTeam, setTheTeam] = useState([]);
  useEffect(() => {
    axios
      .get(`https://weather-cast-server.vercel.app/teamDetails`)
      .then((data) => setTheTeam(data.data));
  }, []);

  return (
    <div className="bg-blue-50 p-10 lg:py-20">
      <div className="max-w-[1460px] mx-auto">
        <h2 className="text-5xl font-bold text-center my-10">
          Meet Team Web Wizards
        </h2>
        <p className="text-xl">
          <span className="text-2xl font-bold">About Us</span> <br /> We are a
          passionate team of junior web developers, united by our love for
          coding and curiosity about the weather. Our weather forecast web
          application is the result of our collective efforts, aimed at
          delivering accurate and user-friendly weather information. With a
          focus on learning, collaboration, and innovation, we're committed to
          providing you with a reliable tool to navigate the ever-changing
          skies. Join us on this exciting journey as we combine technology and
          meteorology to create a seamless and informative user experience.
        </p>
        <h2 className="text-2xl font-bold mt-20">Our Team Members</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 my-10 gap-10">
          {theTeam.map((member) => (
            <div
              key={member._id}
              className="flex flex-col bg-red-50 py-10 rounded-3xl shadow-lg hover:shadow-2xl items-center"
            >
              <Image
                className="rounded-full"
                src={member.image}
                alt="profileImage"
                width={100}
                height={100}
              />
              <h2 className="text-2xl font-bold">{member.name}</h2>
              <div className="flex gap-5">
                <a href={member?.portfolio} target="blank">
                  <div className="tooltip  tooltip-bottom" data-tip="Portfolio">
                    <Image
                      className=""
                      src={portfolioLogo}
                      alt=""
                      width={40}
                      height={100}
                    />
                  </div>
                </a>
                <a href={member?.linkedIn} target="_blank">
                  <div className="tooltip  tooltip-bottom" data-tip="LinkedIn">
                    <FaLinkedin className="w-9 h-9" />
                  </div>
                </a>
                <a href={member?.github} target="_blank">
                  <div className="tooltip  tooltip-bottom" data-tip="GitHub">
                    <FaGithub className="w-9 h-9" />
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MeeTheTeam;
