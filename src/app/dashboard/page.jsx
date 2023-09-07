"use client";

import PrivateRoute from "@/routes/PrivetRoute";
import React from "react";

const dashboardPage = () => {
  return (
    <PrivateRoute>
      <div className="">
        <h2 className="text-5xl mt-20">
          Welcome to WeatherCast user dashboard.
        </h2>
      </div>
    </PrivateRoute>
  );
};

export default dashboardPage;
