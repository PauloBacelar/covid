import React from "react";
import "./styles.css";

const Section = ({ title }) => {
  return (
    <section className="section">
      <h2 className="section__title">{title}</h2>
    </section>
  );
};

export default Section;
