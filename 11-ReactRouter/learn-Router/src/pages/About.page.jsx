import React from "react";
import { useLocation } from "react-router-dom";

const AboutPage = () => {
  const { state, pathname, search } = useLocation();

  console.log(state, pathname, search);
  return <div>AboutPage</div>;
};

export default AboutPage;
