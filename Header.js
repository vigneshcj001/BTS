import React from "react";
import ReactDOM from "react-dom/client";
import BTSLogo from "../../images/BTS-logo.png";
import { FaInstagram, FaTwitter, FaYoutube,FaLinkedin } from "react-icons/fa";
import {
  myInstagram,
  myLinkedIn,
  myYoutube
}
from "../utility/const.js";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import HeaderStyles from "./HeaderStyles.css";

const Header = () => {
  const handleRedirect = (url) => {
    window.location.href = url;
  };

  return (
    <div className="header">
      <div className="nav-bar-container">
        <ul className="nav-items">
          <li><Link to="/video">VIDEOS</Link></li>
          <li><Link to="/store">STORE</Link></li>
          <li><Link to="/about">ABOUT</Link></li>
        </ul>
      </div>
      <div className="logo-container">
        <Link to="/"><img className="logo" src={BTSLogo} alt="BTS Logo" /></Link>
      </div>
      <div className="social-media-container">
        <FaInstagram
          className="social-media header-social"
          onClick={() => handleRedirect(myInstagram)}
        />
      
        <FaLinkedin
          className="social-media header-social"
          onClick={() => handleRedirect(myLinkedIn)}
        />
        <FaYoutube
          className="social-media header-social"
          onClick={() => handleRedirect(myYoutube)}
        />
      </div>
    </div>
  );
};

export default Header;





