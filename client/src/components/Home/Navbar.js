import React, { useRef, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import {
  GoHome,
  GoSignOut,
  GoSearch,
  GoPerson,
  GoPencil,
  GoGear,
} from "react-icons/go";
import WriteBlog from "../Modals/WriteBlog";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [show, setShow] = useState(false);
  const handleClickShow = () => {
    setShow(!show);
  };

  return (
    <div className="navbar">
      <ul className="main__navbar">
        <li className={`navbar__item active `}>
          <Link to="/home">
            <span className="navbar__item-icon">
              <GoHome className="nav__item-color" />
            </span>
          </Link>
        </li>
        <li className="navbar__item">
          <Link to="/home">
            <span className="navbar__item-icon">
              <span className="nav__item-button" onClick={handleClickShow}>
                <GoPencil className="nav__item-color" />
              </span>
            </span>
          </Link>
        </li>
        <li className="navbar__item">
          <Link to="/my_blog">
            <span className="navbar__item-icon">
              <GoPerson className="nav__item-color" />
            </span>
          </Link>
        </li>
        {/* <li className="navbar__item">
          <span className="navbar__item-icon">
            <GoSignOut className="nav__item-color" />
          </span>
        </li> */}
        <li className="navbar__item">
          <span className="navbar__item-icon">
            <GoSearch className="nav__item-color" />
          </span>
        </li>
        <li className="navbar__item">
          <Link to="/setting">
            <span className="navbar__item-icon">
              <GoGear className="nav__item-color" />
            </span>
          </Link>
        </li>
      </ul>
      <WriteBlog show={show} handleClickShow={handleClickShow} />
    </div>
  );
};

export default Navbar;
