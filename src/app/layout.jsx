import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./Components/Navbar";
import Providers from "@/Providers";
import Footer from "./Components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Weather Cast",
  description: "Weather Cast",
  icons: {
    icon: "https://cdn-icons-png.flaticon.com/512/252/252035.png",
  },
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en" data-theme="light">
      <body className={inter.className}>
        <Providers>
          <Navbar />
          <div className="pt-20"> {children}</div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
};
export default RootLayout;
