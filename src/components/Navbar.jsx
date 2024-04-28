import React from "react";
import iconProfile from "../img/icon-profile.png";
import logo from "../img/logo.png";
import Search from "./Search";

const Navbar = () => {
  return (
    <header>
      <div className="container">
        <img src={logo} alt="" className="logo" />
        <Search />
      </div>
    </header>
  );
};

export default Navbar;
