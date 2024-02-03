import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage, LoginPage, RegisterPage } from "./page";

const App = () => {
  const [login, setLogin] = useState(true);
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            login ? (
              <>
                <HomePage />
              </>
            ) : (
              <>
                <LoginPage />
              </>
            )
          }
        />
        <Route
          path="/login"
          element={
            login ? (
              <>
                <HomePage />
              </>
            ) : (
              <>
                <LoginPage />
              </>
            )
          }
        />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
};

export default App;
