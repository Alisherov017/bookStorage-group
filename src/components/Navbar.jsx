import React from "react";
import iconProfile from "../img/icon-profile.png";
import logo from "../img/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <div className="container">
        <img src={logo} alt="" className="logo" />
        <input type="text" className="search" placeholder="Search..." />
      </div>
      <div>
        <Link to={"/addProduct"}>Add product</Link>
      </div>
    </header>
  );
};

export default Navbar;
