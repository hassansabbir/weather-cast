"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Navbar from "./Components/Navbar";
import Providers from "@/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Weather Cast",
  description: "Weather Cast",
};

const RootLayout = ({ children }) => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);
  return (
    <html lang="en" data-theme="light">
      <body className={inter.className}>
        <Providers>
          <Navbar />
          <div className="pt-24"> {children}</div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
};
export default RootLayout;
