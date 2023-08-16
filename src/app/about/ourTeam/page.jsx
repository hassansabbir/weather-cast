"use client";

import Image from "next/image";
import Link from "next/link";
import portfolioLogo from "../../../assets/portfolio.png";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const MeeTheTeam = () => {
  return (
    <div className="bg-blue-50 py-20">
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
          <div className="flex flex-col bg-red-50 py-10 rounded-3xl shadow-lg hover:shadow-2xl items-center">
            <Image
              className="rounded-full"
              src="https://i.ibb.co/BnMRGYj/Whats-App-Image-2023-08-16-at-8-07-46-PM-removebg-preview.png"
              alt=""
              width={100}
              height={100}
            />
            <h2 className="text-2xl font-bold">Md Mahbub Alam</h2>
            <div className="flex gap-5">
              <a href="https://calm-melba-481ce7.netlify.app/" target="blank">
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
              <a
                href="https://www.linkedin.com/in/md-mahbub-alam-nishan-29b457267/"
                target="_blank"
              >
                <div className="tooltip  tooltip-bottom" data-tip="LinkedIn">
                  <FaLinkedin className="w-9 h-9" />
                </div>
              </a>
              <a href="https://github.com/MAHBUBNISHAN" target="_blank">
                <div className="tooltip  tooltip-bottom" data-tip="GitHub">
                  <FaGithub className="w-9 h-9" />
                </div>
              </a>
            </div>
          </div>
          <div className="flex flex-col bg-red-50 py-10 rounded-3xl shadow-lg hover:shadow-2xl items-center">
            <Image
              className="rounded-full"
              src="https://i.ibb.co/RvjsY2Q/Snapchat-1138486035-removebg-preview.png"
              alt=""
              width={100}
              height={100}
            />
            <h2 className="text-2xl font-bold">Mahmud Hasan Sabbir</h2>
            <div className="flex gap-5">
              <a
                href="https://mahmud-hasan-sabbirs-portfolio.netlify.app/"
                target="_blank"
              >
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
              <a
                href="https://www.linkedin.com/in/mahmud-hasan-sabbir/"
                target="_blank"
              >
                <div className="tooltip  tooltip-bottom" data-tip="LinkedIn">
                  <FaLinkedin className="w-9 h-9" />
                </div>
              </a>
              <a href="https://github.com/hassansabbir" target="_blank">
                <div className="tooltip  tooltip-bottom" data-tip="GitHub">
                  <FaGithub className="w-9 h-9" />
                </div>
              </a>
            </div>
          </div>
          <div className="flex flex-col bg-red-50 py-10 rounded-3xl shadow-lg hover:shadow-2xl items-center">
            <Image
              className="rounded-full"
              src="https://i.ibb.co/Lds1n3Z/Whats-App-Image-2023-08-16-at-8-07-30-PM-removebg-preview.png"
              alt=""
              width={100}
              height={100}
            />
            <h2 className="text-2xl font-bold">Md. Nizam Uddin</h2>
            <div className="flex gap-5">
              <a
                href="https://freelancernizamc.github.io/nizam-s-portfolio/"
                target="_blank"
              >
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
              <a
                href="https://www.linkedin.com/in/mdnizamuddinbd/"
                target="_blank"
              >
                <div className="tooltip  tooltip-bottom" data-tip="LinkedIn">
                  <FaLinkedin className="w-9 h-9" />
                </div>
              </a>
              <a href="https://github.com/freelancernizamc" target="_blank">
                <div className="tooltip  tooltip-bottom" data-tip="GitHub">
                  <FaGithub className="w-9 h-9" />
                </div>
              </a>
            </div>
          </div>
          <div className="flex flex-col bg-red-50 py-10 rounded-3xl shadow-lg hover:shadow-2xl items-center">
            <Image
              className="rounded-full"
              src="https://i.ibb.co/qdNtLn5/Whats-App-Image-2023-08-16-at-8-07-11-PM-removebg-preview.png"
              alt=""
              width={100}
              height={100}
            />
            <h2 className="text-2xl font-bold">Md. Monirul Islam</h2>
            <div className="flex gap-5">
              <a
                href="https://sunny-malasada-a6fc62.netlify.app/"
                target="_blank"
              >
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
              <a
                href="https://www.linkedin.com/in/monirulislam9549/"
                target="_blank"
              >
                <div className="tooltip  tooltip-bottom" data-tip="LinkedIn">
                  <FaLinkedin className="w-9 h-9" />
                </div>
              </a>
              <a href="https://github.com/monirulislam9549" target="_blank">
                <div className="tooltip  tooltip-bottom" data-tip="GitHub">
                  <FaGithub className="w-9 h-9" />
                </div>
              </a>
            </div>
          </div>
          <div className="flex flex-col bg-red-50 py-10 rounded-3xl shadow-lg hover:shadow-2xl items-center">
            <Image
              className="rounded-full"
              src="https://i.ibb.co/61ZzC4B/Whats-App-Image-2023-08-16-at-8-07-02-PM-removebg-preview.png"
              alt=""
              width={100}
              height={100}
            />
            <h2 className="text-2xl font-bold">Naziya Sultana Mithila</h2>
            <div className="flex gap-5">
              <a href="" target="_blank">
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
              <a
                href="https://www.linkedin.com/in/mithila-khan-990736278/"
                target="_blank"
              >
                <div className="tooltip  tooltip-bottom" data-tip="LinkedIn">
                  <FaLinkedin className="w-9 h-9" />
                </div>
              </a>
              <a href="https://github.com/MithilaKhan" target="_blank">
                <div className="tooltip  tooltip-bottom" data-tip="GitHub">
                  <FaGithub className="w-9 h-9" />
                </div>
              </a>
            </div>
          </div>
          <div className="flex flex-col bg-red-50 py-10 rounded-3xl shadow-lg hover:shadow-2xl items-center">
            <Image
              className="rounded-full"
              src="https://i.ibb.co/0KS6vy2/Whats-App-Image-2023-08-16-at-8-07-19-PM-removebg-preview.png"
              alt=""
              width={100}
              height={100}
            />
            <h2 className="text-2xl font-bold">Jubayer Ahmed Raju</h2>
            <div className="flex gap-5">
              <a
                href="https://jubayer0307.github.io/portfolio/"
                target="_blank"
              >
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
              <a
                href="https://www.linkedin.com/in/jubayer-ahmed-raju-355aa2203/"
                target="_blank"
              >
                <div className="tooltip  tooltip-bottom" data-tip="LinkedIn">
                  <FaLinkedin className="w-9 h-9" />
                </div>
              </a>
              <a href="https://github.com/JubaYer0307" target="_blank">
                <div className="tooltip  tooltip-bottom" data-tip="GitHub">
                  <FaGithub className="w-9 h-9" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeeTheTeam;
