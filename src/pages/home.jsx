import React from "react";
import img from "../assests/kumsomi.png";
export const Home = () => {
  return (
    <section className="profile">
      <div className="profile-img-container">
        <img className="profile-img" src={img} alt="kumsomi" />
      </div>
      <div className="profile-text">
        <p className="profile-text-p1">Hello I'm</p>
        <p>Kum Somi</p>
        <p className="profile-text-p2">Frontend Developer</p>
        <div className="social-container">linkedin github</div>
      </div>
    </section>
  );
};
