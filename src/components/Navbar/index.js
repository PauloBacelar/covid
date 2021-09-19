import "./styles.css";
import React from "react";
import logo from "../../img/logo.svg";

const index = () => {
  return (
    <nav className="nav">
      <div className="nav__main">
        <h1 className="nav__title">Covid-19 Dashboard</h1>&emsp;
        <img src={logo} alt="Coronavirus" className="nav__logo" />
      </div>

      <div className="nav__menu">
        <ul className="nav__list">
          <li className="nav__list-item">Cases</li>
          <li className="nav__list-item">Deaths</li>
          <li className="nav__list-item">Vaccination</li>
        </ul>
      </div>
    </nav>
  );
};

export default index;
