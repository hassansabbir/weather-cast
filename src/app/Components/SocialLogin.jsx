import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const SocialLogin = () => {
  return (
    <>
      <div className="divider">OR</div>
      <div className="space-y-5">
        <button
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
