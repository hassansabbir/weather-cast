
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Weather Cast",
  description: "Weather Cast",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en" data-theme="light">
      <body className={inter.className}>
        <Navbar />
        <div className="min-h-[calc(100vh-100px)]"> {children}</div>
        <Footer />
      </body>
    </html>
  );
};
export default RootLayout;
