import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const nav = useNavigate();

  const handleToService = () => {
    nav("/service");
  };
  return (
    <div>
      <p>HomePage</p>
      <button onClick={handleToService}>to service</button>
    </div>
  );
};

export default HomePage;
