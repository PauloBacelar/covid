import "./styles.css";
import { useEffect, useState } from "react";
import React from "react";

const CountryCard = ({ name, data }) => {
  const [total] = useState(
    data[Object.keys(data)[Object.keys(data).length - 1]]
  );
  const [newDaily, setNewDaily] = useState([]);
  const [days, setDays] = useState([]);

  useEffect(() => {
    const arrangeData = () => {
      const days = Object.keys(data).slice(1);
      setDays(days);

      const newDaily = [];
      Object.keys(data).forEach((day, i) => {
        newDaily.push(data[days[i]] - data[day]);
      });

      setNewDaily(newDaily);
    };

    arrangeData();
  }, []);

  return (
    <div className="section__grid-item">
      <h3>{name}</h3>

      <div id="chart"></div>
    </div>
  );
};

export default CountryCard;
