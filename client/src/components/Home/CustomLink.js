import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const CustomLink = ({ children, to, ...props }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <>
      <li className={match ? "navbar__item active" : "navbar__item"}>
        <Link {...props} to={to}>
          {children}
        </Link>
      </li>
    </>
  );
};

export default CustomLink;
