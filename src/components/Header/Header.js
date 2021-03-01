import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="border-bottom">
      <div className="row py-2">
        <div className="col-8">
            <h1>Cricket's Tigers</h1>
        </div>
        <div className="col-4 d-flex align-items-center justify-content-between nav-container">
            <a href="/Home">Home</a>
            <a href="/About">About</a>
            <a href="/Services">Services</a>
            <a href="/Contact">Contact</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
