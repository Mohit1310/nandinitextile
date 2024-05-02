import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
// import GoToTop from "./GoToTop";
import "./styles/Layout.css";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      <div className="content">{children}</div>
      {/* <GoToTop /> */}
      <Footer />
    </div>
  );
};

export default Layout;
