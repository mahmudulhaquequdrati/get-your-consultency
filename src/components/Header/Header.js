import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <nav>
        <a href="/home">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </nav>
      <div className="header-info">
        <h2>We are gathering consultants</h2>
        <p>do you need consultency for your startup business?</p>
        <h3>Total Budget : $10M</h3>
      </div>
    </div>
  );
};

export default Header;
