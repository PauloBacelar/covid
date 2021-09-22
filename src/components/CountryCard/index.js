import "./styles.css";
import { useEffect, useState } from "react";
import React from "react";

const CountryCard = ({ name, data }) => {
  const [total, setTotal] = useState(0);
  const [newDaily, setNewDaily] = useState([]);
  const [days, setDays] = useState([]);

  useEffect(() => {
    const arrangeData = () => {
      setDays(Object.keys(data).slice(1));
      setTotal(
        data[Object.keys(data)[Object.keys(data).length - 1]].toLocaleString()
      );
    };

    arrangeData();
  }, [data]);

  return (
    <div className="section__grid-item">
      <h3>{name}</h3>
    </div>
  );
};

export default CountryCard;
