import React from "react";
import { useState, useEffect } from "react";
import CountriesGrid from "../CountriesGrid";
import "./styles.css";

const Section = ({ title, data, flags, population }) => {
  const [casesData, setCasesData] = useState([]);
  const [deathsData, setDeathsData] = useState([]);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const getData = () => {
      const cases = [];
      const deaths = [];
      const countries = [];

      data.forEach((country) => {
        cases.push(country.timeline.cases);
        deaths.push(country.timeline.deaths);
        countries.push(country.country);
      });

      setCasesData(cases);
      setDeathsData(deaths);
      setCountries(countries);
    };

    getData();
  }, [data]);

  return (
    <section className="section">
      <h2 className="section__title">{title}</h2>

      <CountriesGrid
        data={casesData}
        flags={flags}
        countries={countries}
        population={population}
      />
    </section>
  );
};

export default Section;
