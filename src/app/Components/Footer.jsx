import Link from "next/link";
import React from "react";
import Image from "next/image";
import logo from '../../assets/favicon.png';

const Footer = () => {
  return (
    <div>
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
          <Link  href="/about">
          <h3 className="link link-hover">About us</h3>
          </Link>
          <Link href="/contact">
          <h3 className="link link-hover">Contact</h3>
          </Link>
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
      <div>
      <div className="flex flex-col gap-3 justify-center items-center">
        <h3 className=" text-center text-2xl">Want to partner with us ? </h3>
        <p className="text-center"> if you're interested in our partnership and would like to find out some information <br /> One of our advisors exited to help </p>
        <button className="text-center btn btn-info"> Get Started</button>
      </div>
      <div className="flex w-full justify-center gap-20 items-center">
        <div className="h-44 w-44">
           <Image  src={logo} />
        </div>
        <div className="flex flex-col gap-2">
        <p className="text-lg font-bold">Services</p>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div className="flex flex-col gap-2"> 
        <p className="text-lg font-bold">Company</p>
          <Link  href="/about">
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
        </div>
      </div>
      </div>
     
      
    </div>
  );
};

export default Footer;
