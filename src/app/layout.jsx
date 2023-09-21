import "./globals.css";
import { Montserrat } from "next/font/google";
import Navbar from "./Components/Navbar";
import Providers from "@/Providers";
import Footer from "./Components/footer/Footer";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["100", "300", "400", "500", "700", "900"] });

export const metadata = {
  title: "Weather Cast",
  description: "Weather Cast",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en" data-theme="light">
      <body className={montserrat.className}>
        <Providers>
          <Navbar />
          <div className="pt-[70px]"> {children}</div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
};
export default RootLayout;
