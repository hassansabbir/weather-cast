import Image from "next/image";
import React from "react";
import errorImage from "../assets/errorPage.jpg";
import Link from "next/link";

const ErrorPage = () => {
  return (
    <div style={{ background: "navy blue" }}>
      <Image
        className="mx-auto"
        src={errorImage}
        alt=""
        width={500}
        height={100}
      />
      <div className="mb-20 text-center">
        <h2 className="text-5xl font-bold text-blue-700 text-center">
          Page Not Found
        </h2>
        <p className="text-3xl font-bold text-blue-700 text-center mt-5">
          The page you are trying to find is not available. <br /> Please check
          your internet connection and try again.
        </p>
        <Link href="/">
          <button className="btn bg-blue-800 hover:bg-blue-600 mt-5 text-white">
            Return To Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
