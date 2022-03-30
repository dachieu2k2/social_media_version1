import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { GoHome, GoSearch, GoPerson, GoPencil, GoGear } from "react-icons/go";
import { BiBell } from "react-icons/bi";
import WriteBlog from "../Modals/WriteBlog";
import CustomLink from "./CustomLink";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const handleClickShow = () => {
    setShow(!show);
  };

  return (
    <div className="navbar">
      <ul
        className="main__navbar"
        onDoubleClick={() => {
          window.scrollTo(0, 0);
        }}
      >
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
      <span className="write-btnbtn">
        <span className="write-btnbtn-button" onClick={handleClickShow}>
          <GoPencil className="nav__item-color" />
        </span>
      </span>
      <WriteBlog show={show} handleClickShow={handleClickShow} />
    </div>
  );
};

export default Navbar;
