import React from "react";
import logo from "../img/intern.png";

const Footer = () => {
  return (
    <>
      <footer>
        <div id="flex__container">
          <h2>
            Zuri <label></label> Intenship
          </h2>
        </div>
        <div id="flex__container">
          <h6>HNG Internship 9 Frontend Task</h6>
        </div>
        <div id="flex__container">
          <img src={logo} alt="" />
        </div>
      </footer>
    </>
  );
};

export default Footer;
