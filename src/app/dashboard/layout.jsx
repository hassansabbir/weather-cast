import { Montserrat } from "next/font/google";
import Providers from "@/Providers";
import Sidebar from "./Sidebar";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata = {
  title: "Dashboard ~ Weather Cast",
  description: "Dashboard ~ Weather Cast",
};

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <Providers>
        <div className="lg:flex">
          <Sidebar />
          <div className="">{children}</div>
        </div>
      </Providers>
    </div>
  );
};
export default DashboardLayout;
