import React, { useState } from "react";
import "./Navbar.css";
import { GoHome, GoSearch, GoPerson, GoGear } from "react-icons/go";
import { BiBell } from "react-icons/bi";
import CustomLink from "./CustomLink";

const Navbar = () => {
  const checkTop = () => {
    if (window.scrollY !== 0) {
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="navbar">
      <ul className="main__navbar" onClick={checkTop}>
        <CustomLink to="/home">
          <span className="navbar__item-icon">
            <GoHome className="nav__item-color" />
          </span>
        </CustomLink>

        <CustomLink to="/notifications">
          <span className="navbar__item-icon">
            <BiBell className="nav__item-color" />
          </span>
        </CustomLink>

        <CustomLink to="/my_blog">
          <span className="navbar__item-icon">
            <GoPerson className="nav__item-color" />
          </span>
        </CustomLink>

        <CustomLink to="/search">
          <span className="navbar__item-icon">
            <GoSearch className="nav__item-color" />
          </span>
        </CustomLink>

        <CustomLink to="/setting">
          <span className="navbar__item-icon">
            <GoGear className="nav__item-color" />
          </span>
        </CustomLink>
      </ul>
    </div>
  );
};

export default Navbar;
