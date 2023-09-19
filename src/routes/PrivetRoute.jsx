import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Swal from "sweetalert2";
import "./loaderStyle.css";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const router = useRouter();

  const privetRoutAction = () => {
    if (loading) {
      return <div className="loader">Loading...</div>;
    }
    if (!user) {
      Swal.fire({
        title: "Please Login",
        text: "You won't be able to access this without logged in.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login Now!",
      }).then((result) => {
        if (result.isConfirmed) {
          router.replace("/logIn", { shallow: true });
        } else if (result.isDismissed) {
          router.replace("/", { shallow: true });
        }
      });
    }
  };

  useEffect(() => {
    privetRoutAction();
  }, []);

  return user ? children : null;
};

export default PrivateRoute;
