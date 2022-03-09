import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul className="main__navbar">
        <li className="navbar__item">Home</li>
        <li className="navbar__item">Write</li>
        <li className="navbar__item">My blog</li>
        <li className="navbar__item">Logout</li>
      </ul>
    </div>
  );
};

export default Navbar;
