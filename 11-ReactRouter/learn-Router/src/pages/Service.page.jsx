import React from "react";
import { useNavigate } from "react-router-dom";

const ServicePage = () => {
  const nav = useNavigate();
  const handleBack = () => {
    nav(-1, { replace: true });
  };
  return (
    <div>
      <p>ServicePage</p>
      <button onClick={handleBack}>Back</button>
    </div>
  );
};

export default ServicePage;
