import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube, FaEnvelope } from "react-icons/fa";
import QRCode from "qrcode.react"; 

const SocialMediaShare = () => {
  const siteUrl = "https://weather-cast-six.vercel.app/";

  return (
    // <div>
    //   <div className="flex space-x-4 mt-6 items-center justify-center">
    //     <a
    //       href={`https://www.facebook.com/sharer/sharer.php?u=${siteUrl}`}
    //       target="_blank"
    //       className="cursor-pointer text-xl hover:text-blue-500"
    //     >
    //       <FaFacebook />
    //     </a>
    //     <a
    //       href={`https://www.linkedin.com/shareArticle?mini=true&url=${siteUrl}`}
    //       target="_blank"
    //       className="cursor-pointer text-xl hover:text-pink-500"
    //     >
    //       <FaLinkedin />
    //     </a>
    //     <a
    //       href={`https://twitter.com/intent/tweet?url=${siteUrl}`}
    //       target="_blank"
    //       className="cursor-pointer text-xl hover:text-blue-400"
    //     >
    //       <FaTwitter />
    //     </a>
    //   </div>
      
      
    //   <div className="mt-4 ">
    //     <QRCode value={siteUrl} size={128} />
    //   </div>
    // </div>


    <div>

      
     
     <div className="flex">
       <div className=" mt-6 items-center justify-center w-2/3">
        <p className="text-4xl font-mono">Stay Ahead!🌦️</p>
      <p className="text-base  leading-normal text-center text-white mt-1">
              Share WeatherCast with your friends and followers on social media.
              Help them to stay informed about the latest weather trends with
              our curated content.
            </p>
        <div className="flex justify-center items-center gap-2">
  <a
    href={`https://www.facebook.com/sharer/sharer.php?u=${siteUrl}`}
    target="_blank"
    className="cursor-pointer text-xl flex items-center space-x-1 bg-animation text-white py-2 px-4 rounded"
  >
    <FaFacebook size={35}/>
  </a>
  <a
    href={`https://www.linkedin.com/shareArticle?mini=true&url=${siteUrl}`}
    target="_blank"
    className="cursor-pointer text-xl flex items-center space-x-1 bg-animation text-white py-2 px-4 rounded"
  >
    <FaLinkedin size={35}/>
  </a>
  <a
    href={`https://twitter.com/intent/tweet?url=${siteUrl}`}
    target="_blank"
    className="cursor-pointer text-xl flex items-center space-x-1 bg-animation text-white py-2 px-4 rounded"
  >
    <FaTwitter size={35}/>
  </a>
</div>

      </div>
      
      
      <div className="mt-4 mx-auto text-xl">
        <p>Scan QR</p>
        <QRCode value={siteUrl} size={128} />
      </div>
    </div>
     </div>
  );
};

export default SocialMediaShare;
