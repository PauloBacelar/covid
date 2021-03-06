import "./styles.css";
import { useEffect, useState } from "react";
import React from "react";
import DataChart from "../DataChart";
import Loader from "../Loader";

const CountryCard = ({ name, data, flag, population, type }) => {
  const [total] = useState(
    data[Object.keys(data)[Object.keys(data).length - 1]]
  );
  const [days] = useState(Object.keys(data).slice(1));
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

  const calculatePerMillion = (population, data) => {
    return Math.round((population / data) * 1000000).toLocaleString();
  };

  const calculatePerPerson = (population, data) => {
    return (population / data).toLocaleString();
  };

  return (
    <div className="section__grid-item">
      {flag && (
        <>
          <h3>
            {name} <img src={flag} alt={`${name}'s flag`} />
          </h3>

          <div className="section__grid-data">
            <p>
              Total {type.toLowerCase()}: {total.toLocaleString()}
            </p>
            {type.toLowerCase() !== "doses" && (
              <p>
                {type} per 1M people: {calculatePerMillion(total, population)}
              </p>
            )}
            {type.toLowerCase() === "doses" && (
              <p>{calculatePerPerson(total, population)} doses per person</p>
            )}
          </div>

          <div id="section__grid-chart">
            <DataChart
              xLabels={days}
              yLabels={newDaily}
              name={name}
              type={type}
            />
          </div>
        </>
      )}

      {!flag && <Loader />}
    </div>
  );
};

export default CountryCard;
