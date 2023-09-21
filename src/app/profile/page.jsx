"use client";

import { AuthContext } from "@/Providers/AuthProvider";

import { useRouter } from "next/navigation";
import React, { useContext } from "react";

const profilePage = () => {
  const { user, loading } = useContext(AuthContext);
  const router = useRouter();

  if (loading) {
    return <div className="loader">Loading...</div>;
  }
  if (!user) {
    router.push("/");
  }

  return (
    <div className="p-20 flex flex-col items-center">
      <img
        className="w-[150px] h-[150px] rounded-full"
        src={user?.photoURL}
        alt="profilePic"
      />
      <h2 className="text-2xl font-bold">{user?.displayName}</h2>
      <p className="font-bold cursor-pointer underline">{user?.email}</p>
    </div>
  );
};

export default profilePage;
