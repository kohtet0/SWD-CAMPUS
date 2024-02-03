import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage, LoginPage, NotFoundPage, RegisterPage } from "./pages";

const App = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </main>
  );
};

export default App;
