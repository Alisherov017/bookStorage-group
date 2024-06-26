import React from "react";
import iconProfile from "../../img/icon-profile.png";
import logo from "../../img/logo.png";

const NavbarAdmin = () => {
  return (
    <header>
      <div className="container">
        <img src={logo} alt="" className="logo" />
        <a href="/profile">
          <img src={iconProfile} alt="" />
        </a>
      </div>
    </header>
  );
};

export default NavbarAdmin;
