import React from "react";
import ReactDOM from "react-dom/client";
import {
  listennowVideo
} from "../utility/const";
import BodyStyles from "./BodyStyles.css";

const Body = () => {
  const handleButtonClick = () => {
    window.location.href = listennowVideo;
  };

  return (
    <div>
      <h1 className="body-title">Take Two</h1>
      <div className="btn">
        <a className="listen-now" href={listennowVideo}>
          Listen Now
        </a>
      </div>
    </div>
  );
};

export default Body;
