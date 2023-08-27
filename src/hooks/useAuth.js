// useAuth.js
import { AuthContext } from "@/Providers/AuthProvider";
import { useContext } from "react";

const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;
