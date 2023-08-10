import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Weather Cast",
  description: "Weather Cast",
};

const RootLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main className="min-h-[calc(100vh-100px)]">{children}</main>
      <Footer />
    </div>
  );
};
export default RootLayout;