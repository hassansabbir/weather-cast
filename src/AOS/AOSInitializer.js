"use client";

import { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";

const AOSInitializer = () => {
  useEffect(() => {
    Aos.init({
      duration: 800,
      once: false,
    });
  }, []);

  return null;
};

export default AOSInitializer;
