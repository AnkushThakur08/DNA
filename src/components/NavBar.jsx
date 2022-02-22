import React from "react";
import logo from "../assets/ds-b-2500/ds-b-logo.png";

const NavBar = () => {
  return (
    <nav className="navbar navbar-light" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="container-fluid align-items-center">
        <a
          className="navbar-brand w-600 fs-5 mx-3 d-flex align-items-center"
          href="#!"
        >
          <img
            src={logo}
            alt=""
            width="40"
            height="40"
            className="d-inline-block mx-1 me-2 "
          />
          <span
            className="mx-2
            "
          >
            DIMENSIONLESS
          </span>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
