import React from "react";
import "./styles.css";

const CountriesGrid = ({ data, flags }) => {
  console.log(data);
  return (
    <div className="section__grid">
      {data.map((country) => {
        return (
          <div className="section__grid-item">
            <h3>{country.country}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default CountriesGrid;
