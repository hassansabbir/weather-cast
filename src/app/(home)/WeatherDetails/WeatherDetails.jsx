"use client";

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { FaCalendar, FaEye, FaLocationDot, FaMoon, FaTemperatureHalf } from 'react-icons/fa6';
import { MdAir, MdSunny } from "react-icons/md";
import {  WiDayCloudy, WiDayHail, WiDayRainMix, WiDaySleetStorm, WiDaySunny, WiDaySunnyOvercast, WiHumidity, WiSandstorm } from "react-icons/wi";

const weatherFetch = async(City , setWeather)=>{

  try {
    const apiKey = '41a5c84ae7ccfff1bc9491b25aa4dbde'
    const URL = `http://api.openweathermap.org/data/2.5/forecast?q=${City}&appid=${apiKey}`
    const response = await fetch(URL);
    const data = await response.json();
    setWeather(data);
  

  }
  catch (error) {
    console.error('Error fetching weather data:', error);
  }
}

const WeatherDetails = () => {
    const [City , setCity] = useState("")
    const [weather , setWeather] = useState(null)
    
     

      useEffect(()=>{
       

        weatherFetch("Dhaka" , setWeather) ; 
      } ,[])
      
      const handleSearch = () => {
        weatherFetch(City, setWeather);
      };     
   
    if (!weather) {
      return <div>Loading...</div>;
    }

   

    const currentWeather = weather.list[0];
    const currentTemperatureKelvin = currentWeather.main.temp;
    const currentTemperatureCelsius = (currentTemperatureKelvin - 273.15);
  const currentDate = new Date(currentWeather.dt_txt);
  const location = weather.city.name;

  // wind direction  
  const getWindDirection = (degrees) => {
    const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
    const index = Math.round(degrees / 45) % 8;
    return directions[index];
  };

  const windDirection = getWindDirection(currentWeather.wind.deg);

  // sunrise and sunset time 
  const sunriseTime = new Date(weather.city.sunrise * 1000);
  const sunsetTime = new Date(weather.city.sunset * 1000);

  const options = { hour: 'numeric', minute: 'numeric', hour12: true };

    // for 7 days 
    // const currentWeather1 = weather.list[1];
    // const currentDate1 = new Date(currentWeather1.dt_txt);
    // const currentTemperatureKelvin1 = currentWeather1.main.temp;
    // const currentTemperatureCelsius1 = (currentTemperatureKelvin1 - 273.15);

    // const currentWeather2 = weather.list[2];
    // const currentDate2 = new Date(currentWeather2.dt_txt);
    // const currentTemperatureKelvin2 = currentWeather2.main.temp;
    // const currentTemperatureCelsius2 = (currentTemperatureKelvin2 - 273.15);

    // const currentWeather3 = weather.list[3];
    // const currentDate3 = new Date(currentWeather3.dt_txt);
    // const currentTemperatureKelvin3 = currentWeather3.main.temp;
    // const currentTemperatureCelsius3 = (currentTemperatureKelvin3 - 273.15);

    const currentWeather4 = weather.list[4];
    const currentDate4 = new Date(currentWeather4.dt_txt);
    const currentTemperatureKelvin4 = currentWeather4.main.temp;
    const currentTemperatureCelsius4 = (currentTemperatureKelvin4 - 273.15);

    const currentWeather12 = weather.list[12];
    const currentDate12 = new Date(currentWeather12.dt_txt);
    const currentTemperatureKelvin12 = currentWeather12.main.temp;
    const currentTemperatureCelsius12 = (currentTemperatureKelvin12 - 273.15);

    const currentWeather20 = weather.list[20];
    const currentDate20 = new Date(currentWeather20.dt_txt);
    const currentTemperatureKelvin20 = currentWeather20.main.temp;
    const currentTemperatureCelsius20 = (currentTemperatureKelvin20 - 273.15);

     const currentWeather28 = weather.list[28];
    const currentDate28 = new Date(currentWeather28.dt_txt);
    const currentTemperatureKelvin28 = currentWeather28.main.temp;
    const currentTemperatureCelsius28 = (currentTemperatureKelvin28 - 273.15);

     

    return (
        <div >
           {/* searchbar  */}
           <div className='w-3/4 mx-auto text-center'>
           <input
            value={City} 
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city name"
            className="border py-4 pl-5 rounded-2xl w-1/4 "
            type="search"
            
            name=""
            id=""
          />
          <button
           onClick={handleSearch}
            className="btn btn-neutral text-white bg-blue-800 ms-4"
          >
            Search
          </button>
           </div>
           <div className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 m-10'>
 <div className='col-span-1 me-7'> 

 <div className="card w-80 bg-base-100 shadow-xl">
  <div className="card-body">
    <p>Now</p> 
    
    <div className='flex gap-3'>
      <h2 className='card-title text-5xl'> {currentTemperatureCelsius.toFixed(2)} <small>°C</small> </h2>
      <Image src="https://img.freepik.com/free-icon/cloudy-day_318-100797.jpg?t=st=1692237303~exp=1692237903~hmac=49fbe5f7d37297a6c640bfda22f2fd8eaab2f24e42fd5eba2f2e0cd49be105c3" width={45} height={35} alt="" />
    </div>
    <p className="border-b-2 pb-2">{currentWeather?.weather[0]?.description}</p>
    <h2 className=" flex gap-1"> <FaCalendar/> {currentDate.toDateString()}</h2>
    <p className=" flex gap-1"> <FaLocationDot/> {location}</p>
    <p>
        </p>
   
  </div>
</div>

<p className='m-10 text-xl font-semibold'>5 Days Forecast</p>

           
<div className="card w-80 bg-base-100 shadow-xl">
  <div className="card-body">

   <div className='flex gap-4 justify-around'>
<p><WiDayCloudy className='text-3xl'/></p>
<h2 className='  text-xl'> {currentTemperatureCelsius.toFixed(2)}  </h2>
<h2 className=" ">  {currentDate.toDateString()}</h2>
   </div>

   <div className='flex gap-5 justify-around'>
<p><WiDaySleetStorm className='text-3xl'/></p>
<h2 className=' text-xl'> {currentTemperatureCelsius4.toFixed(2)}  </h2>
<h2 className=" ">  {currentDate4.toDateString()}</h2>
   </div>

   <div className='flex gap-4'>
<p><WiDayRainMix className='text-3xl'/></p>
<h2 className=' text-xl'> {currentTemperatureCelsius12.toFixed(2)}  </h2>
<h2 className=" ">  {currentDate12.toDateString()}</h2>
   </div>

   <div className='flex gap-4'>
<p><WiDaySunny className='text-3xl'/></p>
<h2 className=' text-xl'> {currentTemperatureCelsius20.toFixed(2)}  </h2>
<h2 className=" ">  {currentDate20.toDateString()}</h2>
   </div>

   <div className='flex gap-4'>
<p><WiDaySunnyOvercast className='text-3xl'/></p>
<h2 className=' text-xl'> {currentTemperatureCelsius28.toFixed(2)}  </h2>
<h2 className="">  {currentDate28.toDateString()}</h2>
   </div>

  
  </div>
</div>
            

 </div>
 {/* highlights  */}
 <div className='col-span-2 '>

<h3>Today Highlights</h3>
<div className='grid sm:grid-cols-1 lg:grid-cols-2 gap-4'>
<div className="card  bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="font-semibold">Wind Quality Index</h2>
  <div className='flex gap-2'>
    <p><MdAir className='text-3xl my-auto'/> </p>
    <p className='text-xl'> <small>Direction</small> <br /> {windDirection}</p>
    <p className='text-xl'> <small>Speed</small> <br /> {currentWeather.wind.speed} <small>m/s</small></p>
    <p className='text-xl'> <small>Gust</small> <br /> {currentWeather.wind.gust} <small>m/s</small></p>
    
    </div>
    
   
    

  </div>
</div>
<div className="card  bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="font-semibold">Sunrise & Sunset</h2>
  <div className='flex gap-2' >
   
    <div className='flex gap-2'>
    <p><MdSunny className='text-3xl mt-5'/> </p>
    <p className='text-xl'> <small>Sunrise</small> <br /> {sunriseTime.toLocaleTimeString('en-US', options)} </p>
    </div>
    <div className='flex gap-2 '>
    <p className='ms-10'><FaMoon className='text-3xl mt-5'/> </p>
    <p className='text-xl'> <small>Sunset</small> <br /> {sunsetTime.toLocaleTimeString('en-US', options)} </p>
    </div>
   
    
    </div>
    
   
    

  </div>
</div>
</div>

<div className='grid sm:grid-cols-2 lg:grid-cols-4 lg:mt-7 gap-5'>

<div className="card  bg-base-100 shadow-xl">
  <div className="card-body">
   <p>Humidity</p> 
   <div className='flex gap-6'>
    <p><WiHumidity className='text-4xl'/></p>
    <p className='text-2xl'>{currentWeather.main.humidity} <small>%</small></p>
   </div>
    
  </div>
</div>

<div className="card  bg-base-100 shadow-xl">
  <div className="card-body">
  <p>Pressure</p> 
   <div className='flex gap-6'>
    <p><WiSandstorm className='text-4xl'/></p>
    <p className='text-2xl'>{currentWeather.main.pressure} <small>hPa</small></p>
   </div>
    
  </div>
</div>

<div className="card  bg-base-100 shadow-xl">
  <div className="card-body">
  <p>Visibility</p> 
   <div className='flex gap-6'>
    <p><FaEye className='text-3xl'/></p>
    <p className='text-2xl'>{currentWeather.visibility / 1000} <small>km</small></p>
   </div>
    
  </div>
</div>

<div className="card  bg-base-100 shadow-xl">
  <div className="card-body">
  <p>Feels Like</p> 
   <div className='flex gap-6'>
    <p><FaTemperatureHalf className='text-3xl'/></p>
    <p className='text-2xl'>{currentWeather.main.feels_like} <small>°C</small></p>
   </div>
    
  </div>
</div>

</div>

 </div>
           </div>


        </div>
    );
};

export default WeatherDetails;