import React from "react";
import { useState, useEffect } from "react";
import CountriesGrid from "../CountriesGrid";
import "./styles.css";

const Section = ({ title, timeline, flags, population, type }) => {
  const [data, setData] = useState([]);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const getData = () => {
      const data = [];
      const countries = [];

      timeline.forEach((country) => {
        if (type.toLowerCase() === "cases") {
          data.push(country.timeline.cases);
        } else if (type.toLowerCase() === "deaths") {
          data.push(country.timeline.deaths);
        }

        countries.push(country.country);
      });

      setData(data);
      setCountries(countries);
    };

    getData();
  }, [timeline]);

  return (
    <section className="section">
      <h2 className="section__title">{title}</h2>

      <CountriesGrid
        data={data}
        flags={flags}
        countries={countries}
        population={population}
        type={type}
      />
    </section>
  );
};

export default Section;
