import "./styles.css";
import React from "react";
import CountryCard from "../CountryCard";

const CountriesGrid = ({ data, flags }) => {
  return (
    <div className="section__grid">
      {data.map((country) => {
        return (
          <CountryCard
            name={country.country}
            cases={country.timeline.cases}
            deaths={country.timeline.deaths}
            key={country.country}
          />
        );
      })}
    </div>
  );
};

export default CountriesGrid;
