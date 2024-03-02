import React, { useState } from "react";
import Header from "./Header";
const Login = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const toggleSignIn = () => {
    setIsSignUp(!isSignUp);
  };
  return (
    <div
      className="w-full
      h-dvh
      relative
      overflow-hidden
      block
      z-10
      
      bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg')]
      bg-cover
      bg-no-repeat
      bg-center

      before:content-['']
      before:absolute
      before:inset-0
      before:block
      before:bg-gradient-to-b
      before:from-black
      before:opacity-75
      before:z-[-5]"
    >
      <Header />
      <form className="w-full md:w-3/12  px-6 py-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80 ">
        <p className="text-3xl mb-6 font-bold">
          {isSignUp ? "Sign In" : "Sign Up"}
        </p>
        {isSignUp && (
          <input
            className="w-full bg-gray-700 rounded-sm p-3 mb-4"
            type="text"
            placeholder="Full name"
          />
        )}
        <input
          className="w-full bg-gray-700 rounded-sm p-3"
          type="text"
          placeholder="Email Address"
        />
        <input
          className="w-full bg-gray-700 rounded-sm p-3 my-4"
          type="password"
          placeholder="Password"
        />
        <button className="w-full bg-red-700 rounded-md p-3">Sign In</button>

        <p className="mt-6 text-gray-500">
          New to Netflix?
          <span
            className="cursor-pointer hover:underline m-0 text-white"
            onClick={toggleSignIn}
          >
            Sign Up Now
          </span>
        </p>
        <p className="text-xs mt-4 text-gray-500">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
        </p>
      </form>
    </div>
  );
};

export default Login;
