import React from "react";
import img from "../assests/kumsomi.png";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

export const Home = () => {
  return (
    <section className="profile">
      <div className="profile-img-container">
        <img className="profile-img" src={img} alt="kumsomi" />
      </div>
      <div className="section-text">
        <p className="section-text-p1 secondary">Hello I'm</p>
        <p className="section-title">Kum Somi</p>
        <p className="section-text-p2 secondary">Frontend Developer</p>
        <div className="social-container">
          <a href="/" className="social-btn">
            <FaLinkedinIn />
          </a>
          <a href="/" className="social-btn">
            <FiGithub />
          </a>
        </div>
      </div>
    </section>
  );
};
