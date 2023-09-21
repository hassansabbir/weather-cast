import React, { useContext, useState } from "react";
import { AuthContext } from "@/Providers/AuthProvider"; 

const CommunityInfo = () => {
  const communityInfoStyle = {
    width: "300px",
    position: "sticky",
    top: "0",
  };

  const { user } = useContext(AuthContext); 

  const [donationAmount, setDonationAmount] = useState(0);

  const handleDonationChange = (event) => {
    setDonationAmount(parseFloat(event.target.value));
  };

  const handleDonationSubmit = (event) => {
    event.preventDefault();
  
    
    const dataToSend = {
      donationAmount,
      displayName: user?.displayName || "Anonymous",
      email: user?.email || "Unknown",
    };
  
    fetch("https://weather-cast-server.vercel.app/donation", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataToSend),
    })
      .then((response) => response.json())
      .then((result) => {
        window.location.replace(result.url)
        console.log("Server response:", result);
      })
      .catch((error) => {
        console.error("Error sending donation:", error);
      });
  
    console.log(`Donation amount: $${donationAmount}`);
    console.log(`Donated by: ${user?.displayName || "Anonymous"} (${user?.email || "Unknown"})`);
  };
  
  

  return (
    <div
      className="bg-blue-100 p-4 rounded-lg shadow-lg mt-4"
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
        Donation Feature Is Coming soon...
      </h2>

      <h3 className="text-xl font-semibold mt-4">Make a Donation</h3>
      <form onSubmit={handleDonationSubmit}>
        <div className="mb-4">
          <label className="block text-gray-600">Donation Amount ($)</label>
          <input
            type="number"
            step="0.01"
            min="0"
            value={donationAmount}
            onChange={handleDonationChange}
            className="border rounded-lg p-2 w-full"
          />
        </div>
        <p className="text-gray-600">
          Donated by: {user?.displayName || "Anonymous"} ({user?.email || "Unknown"})
        </p>
        <button
          type="submit"
          className="bg-blue-500 text-white rounded-lg p-2 w-full hover:bg-blue-600"
        >
          Donate
        </button>
      </form>
    </div>
  );
};

export default CommunityInfo;
