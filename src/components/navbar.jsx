import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";
const Navbar = () => {
  const navLinkClass = ({ isActive, isPending }) =>
    isPending ? "link" : isActive ? "selected link" : "link";
  const navLinks = [
    { to: "/", text: "Kum Somi" },
    { to: "/about", text: "About" },
    { to: "/projects", text: "Projects" },
    { to: "/blogs", text: "Blogs" },
  ];
  return (
    <div className="nav-bar">
      <div className="nav-brand">
        <NavLink className={navLinkClass} to={navLinks[0].to}>
          {navLinks[0].text}
        </NavLink>
      </div>
      <div className="nav-links">
        {navLinks.slice(1).map((link, index) => (
          <NavLink className={navLinkClass} to={link.to}>
            {link.text}
          </NavLink>
        ))}
        {/* <NavLink className={navLinkClass} to="/about">
          About
        </NavLink>
        <NavLink className={navLinkClass} to="/projects">
          Projects
        </NavLink>
        <NavLink className={navLinkClass} to="/blogs">
          Blogs
        </NavLink> */}
      </div>
    </div>
  );
};

export default Navbar;
