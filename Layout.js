import React from "react";
import Header from "../comp/Header";
import Footer from "../comp/Footer";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      {children}
      <Footer/>
    </React.Fragment>
  );
};

export default Layout;
