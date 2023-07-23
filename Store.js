import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "../Public/Layout";
import StoreStyles from "./StoreStyles.css";
import SEVENCD from "../../images/seven-jungkook-singlecover.jpg";
const Store=()=>{
  
  return (
    
    <Layout>
    <div className="store-container">
      <h1 className="store-title">STORE</h1>
      <img className="sevencd" src={SEVENCD} alt="SEVENCD" />
      <a href="https://shop.bts-official.us/collections/jung-kook/products/seven-single-cd?utm_campaign=products&amp;utm_medium=referral&amp;utm_source=bts-official.us" className="CD">Seven Single CD</a>
      <p className="store-details">$1.09</p>
      
      </div>
      </Layout>
      
  );
};
export default Store;