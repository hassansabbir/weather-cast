
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
      <Navbar/>
      <main>{children}</main>
    </div>
    
  );
}
export default RootLayout;