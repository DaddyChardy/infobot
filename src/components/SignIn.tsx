import { signIn } from "@/auth";
import Image from "next/image";
import React from "react";
import { googleImage } from "../app/assets";

const SignIn = () => {
  return (
    <div className="bg-[#2F2F2F] w-96 h-96 flex flex-col gap-5 items-center justify-center rounded-lg">
      <div className="px-10 text-center">
        <p className="text-3xl font-bold tracking-wide">Welcome to DepEd Infobot</p>
        <p className="text-base tracking-wide mt-2 font-medium">
          Log in to access division resources, announcements, and assistance for
          DepEd Tandag City.
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <form
          action={async () => {
            "use server";
            await signIn("google");
          }}
        >
          <button
            type="submit"
            className="border border-white/50 py-2 px-6 rounded-md text-base font-semibold flex items-center gap-1 hover:border-white text-white/80 hover:text-white duration-300 ease-in-out"
          >
            <Image src={googleImage} alt="googleImage" className="w-8" /> Sign
            in with Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
