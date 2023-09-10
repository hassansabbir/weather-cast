import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube, FaEnvelope } from "react-icons/fa";
import QRCode from "qrcode.react"; 

const SocialMediaShare = () => {
  const siteUrl = "https://weather-cast-six.vercel.app/";

  return (
    <div>
      <div className="flex space-x-4 mt-6 items-center justify-center">
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${siteUrl}`}
          target="_blank"
          className="cursor-pointer text-xl hover:text-blue-500"
        >
          <FaFacebook />
        </a>
        <a
          href={`https://www.linkedin.com/shareArticle?mini=true&url=${siteUrl}`}
          target="_blank"
          className="cursor-pointer text-xl hover:text-pink-500"
        >
          <FaLinkedin />
        </a>
        <a
          href={`https://twitter.com/intent/tweet?url=${siteUrl}`}
          target="_blank"
          className="cursor-pointer text-xl hover:text-blue-400"
        >
          <FaTwitter />
        </a>
      </div>
      
      
      <div className="mt-4 ">
        <QRCode value={siteUrl} size={128} />
      </div>
    </div>
  );
};

export default SocialMediaShare;
