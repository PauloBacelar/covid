import "./styles.css";
import { useEffect, useState } from "react";
import React from "react";
import DataChart from "../DataChart";

const CountryCard = ({ name, data }) => {
  const [total] = useState(
    data[Object.keys(data)[Object.keys(data).length - 1]]
  );
  const [days, setDays] = useState(Object.keys(data).slice(1));
  const [newDaily, setNewDaily] = useState([]);

  useEffect(() => {
    const getNewDaily = () => {
      const newDaily = [];
      Object.keys(data).forEach((day, i) => {
        if (data[days[i]] - data[day] >= 0) {
          newDaily.push(data[days[i]] - data[day]);
        } else {
          newDaily.push(0);
        }
      });

      setNewDaily(newDaily);
    };

    getNewDaily();
  }, []);

  return (
    <div className="section__grid-item">
      <h3>{name}</h3>

      <div id="section__grid-chart">
        <DataChart xLabels={days} yLabels={newDaily} name={name} />
      </div>
    </div>
  );
};

export default CountryCard;
