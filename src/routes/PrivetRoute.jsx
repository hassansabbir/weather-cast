import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Swal from "sweetalert2";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (loading) {
      return (
        <div className="text-center mt-72">
          <span className="loading  loading-spinner loading-lg"></span>
        </div>
      );
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
  }, [user, loading, router]);

  return user ? children : null;
};

export default PrivateRoute;
