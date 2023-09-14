import Link from "next/link";
import React from "react";
import logo from "../../../assets/marq2.jpg";
import "./Footer.css";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  return (
    <div>
      <div>
        <footer className="footer bg-footerBg p-10 text-white flex flex-col items-center">
          <div className="flex flex-col gap-3 justify-center items-center">
            <h3 className=" text-center text-2xl">
              Want to partner with us ?{" "}
            </h3>
            <p className="text-center">
              {" "}
              if you're interested in our partnership and would like to find out
              some information <br /> One of our advisors exited to help{" "}
            </p>
            <Link href="/contact">
              <button className="text-center btn btn-outline hover:bg-blue-600 text-white hover:border-blue-800">
                {" "}
                Get Started
              </button>
            </Link>
          </div>
          <div className="lg:flex w-full justify-center gap-20 items-center">
            <div className="h-44 w-44 flex flex-col items-center">
              <Image className="w-32 h-20" src={logo} alt="" />
              <p className="text-3xl">
                weather<span className="text-orange-400">Cast</span>
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-lg font-bold">Services</p>
              <a className="link link-hover">Branding</a>
              <a className="link link-hover">Design</a>
              <a className="link link-hover">Advertisement</a>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-lg font-bold">Company</p>
              <Link href="/about">
                <h3 className="link link-hover">About us</h3>
              </Link>
              <Link href="/contact">
                <h3 className="link link-hover">Contact</h3>
              </Link>
              <a className="link link-hover">Jobs</a>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-lg font-bold">Legal</p>
              <a className="link link-hover">Terms of use</a>
              <a className="link link-hover">Privacy policy</a>
              <a className="link link-hover">Cookie policy</a>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-lg font-bold">follow us</p>
              <div className="flex gap-2">
                <a className="link link-hover">
                  <FaLinkedin className="w-7 h-7" />
                </a>
                <a className="link link-hover">
                  <FaTwitter className="w-7 h-7" />
                </a>
                <a className="link link-hover">
                  <FaInstagram className="w-7 h-7" />
                </a>
              </div>
            </div>
          </div>
        </footer>
        <div className="footer footer-center p-4 bg-base-300 text-base-content">
          <p className="font-semibold text-lg text-blue-800">
            Copyright © 2023 - All right reserved by Team Web Wizard
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
