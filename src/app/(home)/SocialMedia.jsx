import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import QRCode from "qrcode.react";

const SocialMediaShare = () => {
  const siteUrl = "https://weather-cast-six.vercel.app/";

  return (
    <div>
      <div className="lg:flex justify-around">
        <div className=" mt-6 items-center justify-center lg:w-2/3">
          <p className="text-4xl font-mono">Stay Ahead!🌦️</p>
          <p className="text-base  leading-normal text-center text-white mt-1">
            Share WeatherCast with your friends and followers on social media.
            Help them to stay informed about the latest weather trends with our
            curated content.
          </p>
          <div className="flex justify-center items-center gap-2">
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${siteUrl}`}
              target="_blank"
              className="cursor-pointer text-xl flex items-center space-x-1 bg-animation text-white py-2 px-4 rounded"
            >
              <FaFacebook size={35} />
            </a>
            <a
              href={`https://www.linkedin.com/shareArticle?mini=true&url=${siteUrl}`}
              target="_blank"
              className="cursor-pointer text-xl flex items-center space-x-1 bg-animation text-white py-2 px-4 rounded"
            >
              <FaLinkedin size={35} />
            </a>
            <a
              href={`https://twitter.com/intent/tweet?url=${siteUrl}`}
              target="_blank"
              className="cursor-pointer text-xl flex items-center space-x-1 bg-animation text-white py-2 px-4 rounded"
            >
              <FaTwitter size={35} />
            </a>
          </div>
        </div>
        <div className="mt-4 text-xl">
          <p className="my-5">Scan QR</p>
          <QRCode className="mx-auto" value={siteUrl} size={128} />
        </div>
      </div>
    </div>
  );
};

export default SocialMediaShare;
