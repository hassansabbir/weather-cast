"use client";

import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube, FaEnvelope } from "react-icons/fa";

const SocialMediaShare = () => {
    const siteUrl = "https://weather-cast-six.vercel.app/";
 

  return (
    <div className="flex space-x-4 mt-6">
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${siteUrl}`}
        target="_blank"
        className="cursor-pointer  text-xl hover:text-blue-500"
      >
        <FaFacebook />
      </a>
      <a
        href={`https://www.linkedin.com/shareArticle?mini=true&url=${siteUrl}`}
        target="_blank"
        className="cursor-pointer  text-xl hover:text-pink-500"
      >
        <FaLinkedin />
      </a>
      <a
        href={`https://twitter.com/intent/tweet?url=${siteUrl}`}
        target="_blank"
        className="cursor-pointer  text-xl hover:text-blue-400"
      >
        <FaTwitter />
      </a>
    </div>
  );
};

export default SocialMediaShare;
