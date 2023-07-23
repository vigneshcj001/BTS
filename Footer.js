import React from "react";
import ReactDOM from "react-dom/client";
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import {
  instagram,
  twitter,
  youtube
}
from "../utility/const.js";
import FooterStyles from "./FooterStyles.css";

const Footer = () => {
  const handleRedirect = (url) => {
    window.location.href = url;
  };

  return (
    <div className="footer">
      <div className="footer-social-media-container">
        <FaInstagram
          className="social-media footer-social"
          onClick={() =>
            handleRedirect(instagram)
          }
        />
        <FaTwitter
          className="social-media footer-social"
          onClick={() =>
            handleRedirect(twitter)
          }
        />
        <FaYoutube
          className="social-media footer-social"
          onClick={() =>
            handleRedirect(youtube)
          }
        />
      </div>
      
      <div className='legal-container'>
         <p className='legal' onClick={() =>
            handleRedirect('https://privacy.umusic.com/')
          }>privacy policy</p>
         <p className='legal' onClick = {
           () =>
           handleRedirect('https://privacy.umusic.com/terms/')
         } > terms and conditions </p>
      </div>
    </div>
  );
};

export default Footer;
