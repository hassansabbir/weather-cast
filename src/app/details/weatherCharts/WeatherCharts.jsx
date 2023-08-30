import moment from 'moment';
import React from 'react';
import {
    ResponsiveContainer,
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    AreaChart,
  } from 'recharts';
const WeatherCharts = ({weather , currentWeather ,currentWeather1,currentWeather2,currentWeather3,currentWeather4, currentWeather5,currentWeather6 , currentWeather7 ,currentTemperature1}) => {

    // time 
    let time = moment(currentWeather.dt_txt).format("h A")
    let temp = Math.round(currentWeather.main.temp)
    let Humidity=currentWeather.main.humidity
    let Pressure=currentWeather.main.pressure

    let time1 = moment(currentWeather1.dt_txt).format("h A")
    let temp1 = Math.round(currentWeather1.main.temp)
    let Humidity1=currentWeather1.main.humidity
    let Pressure1=currentWeather1.main.pressure

    let time2 = moment(currentWeather2.dt_txt).format("h A")
    let temp2 = Math.round(currentWeather2.main.temp)
    let Humidity2=currentWeather2.main.humidity
    let Pressure2=currentWeather2.main.pressure

    let time3 = moment(currentWeather3.dt_txt).format("h A")
    let temp3 = Math.round(currentWeather3.main.temp)
    let Humidity3=currentWeather3.main.humidity
    let Pressure3=currentWeather3.main.pressure

    let time4 = moment(currentWeather4.dt_txt).format("h A")
    let temp4 = Math.round(currentWeather4.main.temp)
    let Humidity4=currentWeather4.main.humidity
    let Pressure4=currentWeather4.main.pressure

    let time5 = moment(currentWeather5.dt_txt).format("h A")
    let temp5 = Math.round(currentWeather5.main.temp)
    let Humidity5=currentWeather5.main.humidity
    let Pressure5=currentWeather5.main.pressure

    let time6 = moment(currentWeather6.dt_txt).format("h A")
    let temp6 = Math.round(currentWeather6.main.temp)
    let Humidity6=currentWeather6.main.humidity
    let Pressure6=currentWeather6.main.pressure

    let time7 = moment(currentWeather7.dt_txt).format("h A")
    let temp7 = Math.round(currentWeather7.main.temp)
    let Humidity7=currentWeather7.main.humidity
    let Pressure7=currentWeather7.main.pressure
    // console.log(temp);
    const weatherList = weather.list
    console.log(weatherList);
    const data = [
        {
          time:time,
          temperature: temp,
          Humidity: Humidity,
          Pressure: Pressure
        },
        {
            time:time1,
            temperature: temp1,
            Humidity: Humidity1,
            Pressure: Pressure1
        },
        {
            time:time2,
            temperature: temp2,
            Humidity: Humidity2,
            Pressure: Pressure2
        },
        {
            time:time3,
            temperature: temp3,
            Humidity: Humidity3,
            Pressure: Pressure3
        },
        {
            time:time4,
            temperature: temp4,
            Humidity: Humidity4,
            Pressure: Pressure4
        },
        {
            time:time5,
            temperature: temp5,
            Humidity: Humidity5,
            Pressure: Pressure5
        },
        {
            time:time6,
            temperature: temp6,
            Humidity: Humidity6,
            Pressure: Pressure6
        },
        {
            time:time7,
            temperature: temp7,
            Humidity: Humidity7,
            Pressure: Pressure7
        }
        
      ];
    return (
        <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0
          }}
        >
            <CartesianGrid stroke="#f5f5f5" strokeDasharray="3 3" />
            <XAxis dataKey="time" scale="band" />
            <YAxis  />
            <Tooltip />
            <Legend />
            <Area type="monotone" dataKey="temperature" tickFormatter={(value) => `${value}°C`}  fill="#8884d8" stroke="#8884d8" />
            <Area type="monotone" dataKey="Pressure" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
            <Area type="monotone" dataKey="Humidity" stackId="1" stroke="#ffc658" fill="#ffc658"  />
          </AreaChart>
        </ResponsiveContainer>
      </div>

    );
};

export default WeatherCharts;