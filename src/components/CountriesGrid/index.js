import "./styles.css";
import React from "react";
import CountryCard from "../CountryCard";

const CountriesGrid = ({ data, flags, countries, population, type }) => {
  return (
    <div className="section__grid">
      {data.map((country, index) => {
        return (
          <CountryCard
            name={countries[index]}
            data={data[index]}
            flag={flags[index]}
            population={population[index]}
            type={type}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default CountriesGrid;
