"use client"
import { AuthContext } from "@/Providers/AuthProvider";
import React, { useContext, useEffect, useState } from "react";
import WeatherCard from "./weatherCard/WeatherCard";

export const metadata = {
  title: "Dashboard | Favorite Location ~ Weather Cast",
  description: "Dashboard | Favorite Location ~ Weather Cast",
};

const favoriteLocationPage = () => {
  const { user } = useContext(AuthContext)
  const [favLocations, setFavLocations] = useState(null);
  // const apiKey = '41a5c84ae7ccfff1bc9491b25aa4dbde'; 

  useEffect(() => {
    fetch(`https://weather-cast-server.vercel.app/favLoc?email=${user?.email}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setFavLocations(data);
      })
    // console.log(favLocation); 
  }, [user?.email])

  return (
    <div>
      {/* <h2>This is favorite locations page</h2> */}
      {
        favLocations && <WeatherCard locationData={favLocations} />
      }
    </div>
  );
};

export default favoriteLocationPage;
