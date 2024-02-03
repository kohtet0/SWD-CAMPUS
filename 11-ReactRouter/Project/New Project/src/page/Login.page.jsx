import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { login } from "../service/auth.service";

const LoginPage = () => {
  const loginForm = useRef();

  const handleLoginForm = (e) => {
    e.preventDefault();
    const formData = new FormData(loginForm.current);
    const email = formData.get("your_email");
    const password = formData.get("your_password");
    // setData({
    //   email,
    //   password,
    // });
    login(email, password);

    loginForm.current.reset();
  };

  return (
    <div className="container mx-auto px-10 bg-neutral-200 min-h-screen">
      <div className=" mx-auto max-w-[700px] flex flex-col justify-center items-center py-10">
        <form onSubmit={handleLoginForm} ref={loginForm}>
          <div className=" flex flex-col gap-3 w-[400px]">
            <div className="flex flex-col gap-1 ">
              <label htmlFor="email">Your Email</label>
              <input
                className=" border border-neutral-400 px-5 py-2"
                type="email"
                name="your_email"
                id="email"
              />
            </div>

            <div className="flex flex-col gap-1 mb-3">
              <label htmlFor="password">Your Password</label>
              <input
                className=" border border-neutral-400 px-5 py-2"
                type="password"
                name="your_password"
                id="password"
              />
            </div>

            <button className="border border-neutral-400 bg-neutral-600 px-5 py-2">
              Login
            </button>

            <p className=" text-center">
              You don't have account?
              <Link to={"/register"} className=" underline">
                Register
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
