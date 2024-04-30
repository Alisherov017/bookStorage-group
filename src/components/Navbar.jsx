import React from "react";
import logo from "../img/logo.png";
import { Link } from "react-router-dom";
import Search from "./Search";

const Navbar = () => {
  return (
    <header>
      <div className="container">
        <img src={logo} alt="" className="logo" />
        <Search />
      </div>
      <div>
      </div>
    </header>
  );
};

export default Navbar;
