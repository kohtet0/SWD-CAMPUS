import React from "react";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <ul className="flex gap-5 text-3xl font-bold">
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/about"} state={{ name: "kohtet" }}>
          About
        </NavLink>
      </li>
      <li>
        <NavLink to={"/service"}>Service</NavLink>
      </li>
      <li>
        <NavLink to={"/book"}>Book</NavLink>
      </li>
      <li>
        <NavLink to={`/detail/${Math.random(1) * 10}`}>Dynamic Book</NavLink>
      </li>
    </ul>
  );
};

export default Nav;
