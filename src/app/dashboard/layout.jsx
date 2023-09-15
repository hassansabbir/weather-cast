import { Inter } from "next/font/google";
import Providers from "@/Providers";
import Sidebar from "./Sidebar";

const inter = Inter({ subsets: ["latin"] });

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
          <div className="pt-[50px]">{children}</div>
        </div>
      </Providers>
    </div>
  );
};
export default DashboardLayout;
