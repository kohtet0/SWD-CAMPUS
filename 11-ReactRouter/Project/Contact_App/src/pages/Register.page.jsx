import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import FormComponents from "@/components/Form.components";
import { api } from "@/lib/api";

const RegisterPage = () => {
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const handleRegisterForm = async (event) => {
    event.preventDefault();
    console.log(registerData);
    const res = await api.post("register", JSON.stringify(registerData));
    console.log(res);

    event.target.reset();
  };

  const handleInput = (e) => {
    setRegisterData((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };

  return (
    <div className=" bg-neutral-200">
      <div className="min-h-screen max-w-[500px] mx-auto flex justify-center items-center">
        <form
          onSubmit={handleRegisterForm}
          className="border shadow-sm shadow-black py-10 px-20 rounded-lg bg-neutral-300"
        >
          <div className="flex flex-col gap-3 w-80 mx-auto">
            <h3 className="text-center font-bold text-3xl mb-5">
              Register Page
            </h3>
            <div className="grid w-full max-w-sm items-center gap-3">
              <FormComponents
                htmlFor={"name"}
                label={"Name"}
                type={"text"}
                name={"name"}
                onChange={handleInput}
              />
              <FormComponents
                htmlFor={"email"}
                label={"Email"}
                type={"email"}
                name={"email"}
                onChange={handleInput}
              />
              <FormComponents
                htmlFor={"password"}
                label={"Password"}
                type={"password"}
                name={"password"}
                onChange={handleInput}
              />
              <FormComponents
                htmlFor={"password_confirmation"}
                label={"Confirm Password"}
                type={"password"}
                name={"password_confirmation"}
                onChange={handleInput}
              />
              <Button className="mt-3" variant="default">
                Register
              </Button>
              <p className="text-center">
                You have an account?
                <Link className="underline underline-offset-4 ms-2" to="/login">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
