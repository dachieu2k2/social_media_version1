import React from "react";
import "./Navbar.css";
import {
  GoHome,
  GoSignOut,
  GoSearch,
  GoPerson,
  GoPencil,
} from "react-icons/go";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul className="main__navbar">
        <li className="navbar__item active">
          <span className="navbar__item-icon">
            <GoHome className="nav__item-color" />
          </span>
        </li>
        <li className="navbar__item">
          <span className="navbar__item-icon">
            <GoPencil className="nav__item-color" />
          </span>
        </li>
        <li className="navbar__item">
          <span className="navbar__item-icon">
            <GoPerson className="nav__item-color" />
          </span>
        </li>
        <li className="navbar__item">
          <span className="navbar__item-icon">
            <GoSignOut className="nav__item-color" />
          </span>
        </li>
        <li className="navbar__item">
          <span className="navbar__item-icon">
            <GoSearch className="nav__item-color" />
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
