import React from "react";
import ReactDOM from "react-dom/client";
import SignupStyles from "./SignupStyles.css";
import ContactUs from './ContactUs.js';

const Signup = () => {
  return (
    <div className="signup-container">
      <div className="signup-title">Contact</div>
      <ContactUs/>
    </div>
  );
};

export default Signup;

