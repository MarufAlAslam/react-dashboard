import React from "react";
import logo from "../../assets/img/logo.png";
import support from "../../assets/img/support.png";
import Menu from "../menu/Menu";
import { FiMenu } from "react-icons/fi";
const Sidebar = () => {
    const toggleMenu = () => {
        document.querySelector(".main-menu").classList.toggle("show");
    }
  return (
    <div className="sidebar flex flex-col justify-between items-center">
      <div className="topPart">
        <div className="flex">
          <a href="/">
            <img src={logo} alt="" />
          </a>
          <button className="menuBtn btn mr-4" onClick={toggleMenu}>
            <FiMenu/>
          </button>
        </div>
        <div className="main-menu">
        <Menu />
        </div>
      </div>
      <img src={support} className="mt-10 sprt" alt="" />
    </div>
  );
};

export default Sidebar;
