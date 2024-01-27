import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <ul className="flex gap-5 text-3xl font-bold">
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/about"}>About</Link>
      </li>
      <li>
        <Link to={"/service"} replace>Service</Link>
      </li>
      <li>
        <Link to={"/book"}>Book</Link>
      </li>
      <li>
        <Link to={`/book/${Math.random(1 * 10)}`}>Dynamic Book</Link>
      </li>
    </ul>
  );
};

export default Nav;
