import React from "react";
import iconProfile from "../img/icon-profile.png";
import logo from "../img/logo.png";

const Navbar = () => {
  return (
    <header>
      <div className="container">
        <img src={logo} alt="" className="logo" />
        <Search />
      </div>
      <div>
        <Link to={"/addProduct"}>Add product</Link>
      </div>
    </header>
  );
};

export default Navbar;
