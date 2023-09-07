import moment from 'moment';
import React from 'react';
import { BsSpeedometer } from 'react-icons/bs';
import { FaTemperatureHigh } from 'react-icons/fa';
import { FaTemperatureEmpty } from 'react-icons/fa6';
import { MdOutlineVisibility } from 'react-icons/md';
import { WiCloudyGusts, WiHumidity } from 'react-icons/wi';

const HourlyForcast = ({weather}) => {
   const weatherList=weather.list;
    console.log(weatherList)
    return (
        <div>
            <p className='text-3xl font-bold text-center m-3'>Weather Forecasting</p>
           {
            weatherList.map((w,i)=>
            <div key={i} className=' shadow-slate-800'>
                {/* <p>{w.main.feels_like}</p> */}

            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    {/* <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </thead> */}
    <tbody>
      {/* row 1 */}
      <tr>
        <th>
          <h4 className='text-xl'>{moment(w.dt_txt).format("h a")}</h4>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold text-xl">{w.weather[0].main}</div>
            </div>
          </div>
        </td>
        <td>
            <div>
                <div className=' my-2 flex gap-2'>
                    <p className=' h-10 w-5 text-2xl'><FaTemperatureEmpty></FaTemperatureEmpty> </p>
                <h3 className='text-2xl'>{w.main.temp} °C</h3>
                </div>
                <div className='my-2'>
                    <div className='flex align-middle gap-2'>
                    <p className='  text-2xl mt-2'><FaTemperatureHigh></FaTemperatureHigh></p>
                    <div>

                    <h2 className='text-xl'>Feels like</h2>
                    <h3 className='text-2xl' >{w.main.feels_like}°C</h3>
                    </div>
                    </div>
                
                </div>
               
               
            </div>
          
        </td>
        <td>
           <div>
            <div className='flex flex-row gap-2'>
            <p className='text-4xl'><BsSpeedometer></BsSpeedometer> </p>
            <div className='my-3'>
            <p className='text-xl'>Wind speed </p>
             <h3 className='text-2xl'>{w.wind.speed} m/s</h3>
            </div>
            </div>
            <div className='my-3 flex flex-row gap-2'>
                <p className='text-4xl'><WiCloudyGusts></WiCloudyGusts> </p>
                <div>

                <p className='text-xl'>Wind Gust</p>
                <h3 className='text-2xl'>{w.wind.gust}</h3>
                </div>
            </div>
           </div>

        </td>
        <th>
         <div>
         <div className='flex flex-row'>
                <div>
                    <p className='text-5xl'><WiHumidity></WiHumidity> </p>
                </div>
                <div>
                    <h2 className='text-xl'>Humidity</h2>
                <h3 className='my-2 text-2xl'>{w.main.humidity} %</h3>
                </div>
                </div>
                <div className='flex flex-row'>
                    <p className='text-4xl'><MdOutlineVisibility></MdOutlineVisibility> </p>
                    <div>
                        <h3 className='text-xl'>Visibility</h3>
                        <h3 className='text-2xl'>{w.visibility} m</h3>
                    </div>
                </div>
         </div>
        </th>
      </tr>
    
   
    </tbody>
   
    
  </table>
</div>            
                </div>
            )
           }
        </div>
    );
};

export default HourlyForcast;