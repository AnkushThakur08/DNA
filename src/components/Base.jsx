import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";

const Base = ({ children }) => {
  return (
    <divs>
      <NavBar />

      {children}
      <Footer />
    </divs>
  );
};

export default Base;
