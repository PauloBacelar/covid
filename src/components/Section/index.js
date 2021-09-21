import React from "react";
import CountriesGrid from "../CountriesGrid";
import "./styles.css";

const Section = ({ title, data, flags }) => {
  return (
    <section className="section">
      <h2 className="section__title">{title}</h2>

      <CountriesGrid data={data} flags={flags} />
    </section>
  );
};

export default Section;
