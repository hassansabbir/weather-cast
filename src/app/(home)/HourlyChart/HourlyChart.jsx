import React from "react";
import {
  LineChart,
  Line,
  Brush,
  ReferenceLine,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import CustomizeIcon from "../CustomizeIcon/CustomizeIcon";
const HourlyChart = ({ data }) => {
  return (
    <div>
      {" "}
      <LineChart
        width={900}
        height={400}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />

        <YAxis />
        <Tooltip />
        <Legend verticalAlign="top" wrapperStyle={{ lineHeight: "80px" }} />
        <ReferenceLine y={0} stroke="#000" />
        <Brush dataKey="name" height={30} stroke="#8884d8" />
        <Line type="monotone" dataKey="temp" stroke="#82ca9d" />
        <Line
          type="monotone"
          dataKey="description"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="temp" dot={<CustomizeIcon />} />
      </LineChart>
    </div>
  );
};

export default HourlyChart;
