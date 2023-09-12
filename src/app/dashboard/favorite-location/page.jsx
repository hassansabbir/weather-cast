"use client"
import { AuthContext } from "@/Providers/AuthProvider";
import React, { useContext, useEffect, useState } from "react";
import WeatherCard from "./weatherCard/WeatherCard";

const favoriteLocationPage = () => {
  const {user} = useContext(AuthContext)
  const [favLocations, setFavLocations] = useState(null);
  // const apiKey = '41a5c84ae7ccfff1bc9491b25aa4dbde'; 
  
  useEffect(()=>{
    if (user?.email) {
      fetch(`https://weather-cast-server.vercel.app/favLoc/${user.email}`)
      .then(res =>res.json())
      .then(data=>{
        console.log(data);
        setFavLocations(data);
      }) 
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
    }
    // console.log(favLocation); 
  } ,[user?.email])

  return (
    <div>
      {/* <h2>This is favorite locations page</h2> */}
      {/* vallageeeee nhhhhhhh  */}
      {
        favLocations&&<WeatherCard locationData={favLocations} />
      }
    </div>
  );
};

export default favoriteLocationPage;
