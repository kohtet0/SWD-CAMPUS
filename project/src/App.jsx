import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage, SignInPage, SignUpPage } from "./pages";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
};

export default App;
