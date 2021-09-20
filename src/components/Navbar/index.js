import "./styles.css";
import React from "react";
import logo from "../../img/logo.svg";
import { useState } from "react";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <nav className="nav">
      <div className="nav__main">
        <h1 className="nav__title">Covid-19 Dashboard</h1>&emsp;
        <img src={logo} alt="Coronavirus" className="nav__logo" />
      </div>

      <ul className={`nav__list ${showNav ? "nav__list-active" : ""}`}>
        <li className="nav__list-item">Cases</li>
        <li className="nav__list-item">Deaths</li>
        <li className="nav__list-item">Vaccination</li>
      </ul>

      <div
        className={`nav__burger ${showNav ? "nav__burger-active" : ""}`}
        onClick={() => setShowNav(!showNav)}
      >
        <div
          className={`nav__burger-1 ${showNav ? "nav__burger-1-active" : ""}`}
        ></div>
        <div
          className={`nav__burger-2 ${showNav ? "nav__burger-2-active" : ""}`}
        ></div>
        <div
          className={`nav__burger-3 ${showNav ? "nav__burger-3-active" : ""}`}
        ></div>
      </div>
    </nav>
  );
};

export default Navbar;
