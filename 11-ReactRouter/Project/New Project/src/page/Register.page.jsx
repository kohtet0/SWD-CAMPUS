import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { register } from "../service/auth.service";

const RegisterPage = () => {
  const registerForm = useRef();

  const handleRegisterForm = (e) => {
    e.preventDefault();
    const formData = new FormData(registerForm.current);
    const name = formData.get("your_name");
    const email = formData.get("your_email");
    const password = formData.get("your_password");
    register({
      name,
      email,
      password,
    });

    registerForm.current.reset();
  };

  return (
    <div className="container mx-auto px-10 bg-neutral-200 min-h-screen">
      <div className=" mx-auto max-w-[900px] flex flex-col justify-center items-center py-10">
        <form onSubmit={handleRegisterForm} ref={registerForm}>
          <div className=" flex flex-col gap-3 w-[400px]">
            <div className="flex flex-col gap-1 ">
              <label htmlFor="name">Your Name</label>
              <input
                className=" border border-neutral-400 px-5 py-2"
                type="name"
                name="your_name"
                id="name"
              />
            </div>

            <div className="flex flex-col gap-1 ">
              <label htmlFor="email">Your email</label>
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
              Register
            </button>

            <p className=" text-center">
              You have an account?
              <Link to={"/login"} className=" underline">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
