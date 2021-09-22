import "./styles.css";
import { useEffect } from "react";
import React from "react";

const CountryCard = ({ name, data }) => {
  useEffect(() => {}, [data]);

  return (
    <div className="section__grid-item">
      <h3>{name}</h3>
    </div>
  );
};

export default CountryCard;
