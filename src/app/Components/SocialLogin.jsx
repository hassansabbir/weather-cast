import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "@/Firebase/Firebase.config";
import { useRouter } from "next/navigation";

const SocialLogin = () => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const router = useRouter();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        const saveUserInfo = {
          name: loggedInUser.displayName,
          email: loggedInUser.email,
          image: loggedInUser.photoURL,
          role: "visitor",
        };
        fetch(`https://weather-cast-server.vercel.app/users`, {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(saveUserInfo),
        })
          .then((res) => res.json())
          .then(() => {
            router.push("/", { replace: true });
          });
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <>
      <div className="divider">OR</div>
      <div className="space-y-5">
        <button
          onClick={handleGoogleSignIn}
          type="button"
          className="btn btn-outline text-xl hover:border-none hover:bg-sky-400 w-full"
        >
          <FcGoogle className="h-7 w-7" /> Login With Google
        </button>
        <button className="btn btn-outline w-full text-xl">
          <FaGithub className="h-7 w-7" /> Login With GitHub
        </button>
      </div>
    </>
  );
};

export default SocialLogin;
