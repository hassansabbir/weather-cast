import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
} from "firebase/auth";
import app from "@/Firebase/Firebase.config";
import { useRouter } from "next/navigation";

const SocialLogin = () => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
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
  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
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
      <h2 className="text-xl my-2 text-center">Login With Social Media</h2>
      <div className="flex gap-3 justify-center mt-5">
        <button
          onClick={handleGoogleSignIn}
          type="button"
          className="btn btn-outline text-xl rounded-full hover:border-none hover:bg-sky-400 w-5/12"
        >
          <FcGoogle className="h-7 w-7" />
        </button>
        <button
          className="btn btn-outline w-5/12 rounded-full text-xl"
          onClick={handleGithubSignIn}
        >
          <FaGithub className="h-7 w-7" />
        </button>
      </div>
      <div className="divider">OR</div>
    </>
  );
};

export default SocialLogin;
