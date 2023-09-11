import React from "react";
import Image from "next/image";
import logo from '../../assets/footerlogo.png';

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-base-200 text-base-content">
        <div>
          <div className=" ">
            {/* <a className=" normal-case text-3xl text-blue-800 font-bold italic mb-5">
              weatherCast
            </a> */}
            <Image src={logo} />
            <div><br />
              <p className="text-blue-600 text-md font-semibold">
                Amidst the gentle whispers of the wind, <br /> the sky unfolds
                its story,painting a canvas of ever-changing hues, <br /> as the
                weather forecast dances to the rhythm of natures melody.
              </p>
            </div>
          </div>
        </div>
        <div className="text-blue-500">
          <p className="text-lg font-bold">Services</p>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div className="text-blue-500">
          <p className="text-lg font-bold">Company</p>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div className="text-blue-500">
          <p className="text-lg font-bold">Legal</p>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
      <div className="footer footer-center p-4 bg-base-300 text-base-content">
        <p className="font-semibold text-lg text-blue-500">
          Copyright © 2023 - All right reserved by Team Web Wizard
        </p>
      </div>
    </div>
  );
};

export default Footer;
