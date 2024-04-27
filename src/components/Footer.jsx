import React from "react";
import logo from "../img/logo.png";
import instIcon from "../img/instagram-con.jpg";
import faceIcon from "../img/footer-icon.png";
import threadsIcon from "../img/threads-icon.jpg";

const Footer = () => {
  return (
    <footer>
      <hr />
      <div className="container">
        <img src={logo} alt="" className="logo" />
        <div className="footer-block">
          <a href="https://www.instagram.com/" target="_blank">
            <img src={instIcon} alt="" />
          </a>
          <a href="https://www.facebook.com/" target="_blank">
            <img src={faceIcon} alt="" />
          </a>
          <a href="https://www.threads.net/" target="_blank">
            <img src={threadsIcon} alt="" />
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
