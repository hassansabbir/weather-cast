"use client";

import Link from "next/link";
import React from "react";

const CommunityInfo = () => {
  const communityInfoStyle = {
    width: "300px",
    position: "sticky",
    top: "0",
  };

  return (
    <div
      className="bg-blue-100 p-4 rounded-lg shadow-lg   mt-4"
      style={communityInfoStyle}
    >
      <h2 className="text-2xl font-semibold mb-2">Welcome to Our Community!</h2>
      <p className="text-gray-600">
        Our community is a place where you can share your thoughts, ideas, and
        experiences with others. Whether you want to discuss a topic, ask for
        help, or simply connect with like-minded people, you've come to the
        right place.
      </p>
      <p className="text-gray-600">Benefits of Joining Our Community:</p>
      <ul className="list-disc pl-6 text-gray-600">
        <li>Gain knowledge and insights from others.</li>
        <li>Get answers to your questions.</li>
        <li>Share your own knowledge and expertise.</li>
      </ul>
      <h2 className="animate-pulse bg-gradient-to-r  from-red-800 p-5 shadow-xl rounded-2xl via-blue-650 text-2xl font-bold text-center to-red-500 bg-clip-text text-transparent ">
        <Link href="/community/Donation">
        <button>Donation Now</button>
        </Link>
      </h2>
    </div>
  );
};

export default CommunityInfo;
