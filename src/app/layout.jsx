import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Providers from "@/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Weather Cast",
  description: "Weather Cast",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en" data-theme="light">
      <body className={inter.className}>
        <Providers>
          <Navbar />
          <div className="pt-16"> {children}</div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
};
export default RootLayout;
