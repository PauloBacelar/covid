import "./CountryCard.css";
import React from "react";

const CountryCard = ({ name, cases, deaths }) => {
  return (
    <div className="section__grid-item">
      <h3>{name}</h3>
    </div>
  );
};

export default CountryCard;
