import moment from 'moment';
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const WindChart = ({weather , currentWeather ,currentWeather1,currentWeather2,currentWeather3,currentWeather4, currentWeather5,currentWeather6 ,currentWeather7 }) => {
    let time = moment(currentWeather.dt_txt).format("h A")    
    let wind=currentWeather.wind.speed
    let Pressure=currentWeather.main.pressure

    let time1 = moment(currentWeather1.dt_txt).format("h A")    
    let wind1=currentWeather1.wind.speed
    let Pressure1=currentWeather1.main.pressure

    let time2 = moment(currentWeather2.dt_txt).format("h A")    
    let wind2=currentWeather2.wind.speed
    let Pressure2=currentWeather2.main.pressure

    let time3 = moment(currentWeather3.dt_txt).format("h A")   
    let wind3=currentWeather3.wind.speed
    let Pressure3=currentWeather3.main.pressure

    let time4 = moment(currentWeather4.dt_txt).format("h A")   
    let wind4=currentWeather4.wind.speed
    let Pressure4=currentWeather4.main.pressure

    let time5 = moment(currentWeather5.dt_txt).format("h A")
    let wind5=currentWeather5.wind.speed
    let Pressure5=currentWeather5.main.pressure

    let time6 = moment(currentWeather6.dt_txt).format("h A")
    let wind6=currentWeather6.wind.speed
    let Pressure6=currentWeather6.main.pressure

    let time7 = moment(currentWeather7.dt_txt).format("h A")
    let wind7=currentWeather7.wind.speed
    let Pressure7=currentWeather7.main.pressure
    // console.log(temp);
    const weatherList = weather.list
    console.log(weatherList);
    const data = [
        {
          time:time,
         
          wind: wind,
          Pressure: Pressure
        },
        {
            time:time1,
          
            wind: wind1,
            Pressure: Pressure1
        },
        {
            time:time2,
           
            wind: wind2,
            Pressure: Pressure2
        },
        {
            time:time3,
            
            wind: wind3,
            Pressure: Pressure3
        },
        {
            time:time4,
            
            wind: wind4,
            Pressure: Pressure4
        },
        {
            time:time5,
            
            wind: wind5,
            Pressure: Pressure5
        },
        {
            time:time6,
            
            wind: wind6,
            Pressure: Pressure6
        },
        {
            time:time7,
           
            wind: wind7,
            Pressure: Pressure7
        }
        
      ];
    return (
        <div className='' style={{ width: '100%', height: 350 }}>
        <ResponsiveContainer>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
            <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Legend />
         
          <Line type="monotone" dataKey="wind" stackId="1" stroke="#ffc658"  activeDot={{ r: 8 }} /> 
        </LineChart>
        </ResponsiveContainer>
      </div>
    );
};

export default WindChart;