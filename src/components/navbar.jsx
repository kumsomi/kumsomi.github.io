import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";
const Navbar = () => {
  return (
    <div className="nav-bar">
      <div className="nav-brand">
        <NavLink
          className={(isActive, isPending) =>
            isActive ? ("link" ? isPending : "link") : "link"
          }
          to="/"
        >
          Kum Somi
        </NavLink>
      </div>
      <div className="nav-links">
        <NavLink
          className={(isActive, isPending) =>
            isActive ? ("link" ? isPending : "link") : "link"
          }
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          className={(isActive, isPending) =>
            isActive ? ("link" ? isPending : "link") : "link"
          }
          to="/projects"
        >
          Projects
        </NavLink>
        <NavLink
          className={(isActive, isPending) =>
            isActive ? ("link" ? isPending : "link") : "link"
          }
          to="/blogs"
        >
          Blogs
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
