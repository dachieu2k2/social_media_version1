import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { GoHome, GoSearch, GoPerson, GoPencil, GoGear } from "react-icons/go";
import WriteBlog from "../Modals/WriteBlog";
import CustomLink from "./CustomLink";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const handleClickShow = () => {
    setShow(!show);
  };

  return (
    <div className="navbar">
      <ul className="main__navbar">
        <CustomLink to="/home">
          <span className="navbar__item-icon">
            <GoHome className="nav__item-color" />
          </span>
        </CustomLink>
        <li className="navbar__item">
          <Link to="/home">
            <span className="navbar__item-icon">
              <span className="nav__item-button" onClick={handleClickShow}>
                <GoPencil className="nav__item-color" />
              </span>
            </span>
          </Link>
        </li>

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
      <WriteBlog show={show} handleClickShow={handleClickShow} />
    </div>
  );
};

export default Navbar;
