import React from "react";
import Layout from "../Public/Layout";
import VideoStyles from "./VideoStyles.css";
import ReactPlayer from 'react-player';
import {
  videoplay
} from "../utility/const.js";

const VideoPage = () => {
  return (
    <Layout>
      <div className="video-container">
        <div className="video">
          <h1 className="video-title">Videos</h1>
          <div className="video-play">
            <ReactPlayer url={videoplay} />
          </div>
          <h1>💜Take Two💜</h1>
        </div>
      </div>
    </Layout>
  );
};

export default VideoPage;


