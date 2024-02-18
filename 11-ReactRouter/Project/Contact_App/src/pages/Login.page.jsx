import React, { useState } from "react";
import FormComponents from "@/components/Form.components";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { api } from "@/service/api";
import { useNavigate } from "react-router-dom";
import { login } from "@/store/slice/auth.slice";

const LoginPage = () => {
  const nav = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleLoginForm = async (event) => {
    event.preventDefault();
    try {
      const res = await api.post("login", loginData);
      const token = await res.data.token
      if (res.data.success) {
        nav("/");
      }
    } catch (e) {
      throw new Error(e.message);
    }
    event.target.reset();
  };

  const handleInput = (e) => {
    setLoginData((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };
  return (
    <div className=" bg-neutral-200">
      <div className="min-h-screen max-w-[500px] mx-auto flex justify-center items-center">
        <form
          onSubmit={handleLoginForm}
          className="border shadow-sm shadow-black py-10 px-20 rounded-lg bg-neutral-300"
        >
          <div className="flex flex-col gap-3 w-80 mx-auto">
            <h3 className="text-center font-bold text-3xl mb-5">Login Page</h3>
            <div className="grid w-full max-w-sm items-center gap-3">
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
              <Button className="mt-3" variant="default">
                Login
              </Button>
              <p className="text-center">
                You don't have an account?
                <Link
                  className="underline underline-offset-4 ms-2"
                  to="/register"
                >
                  Register
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
