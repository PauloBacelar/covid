import React from "react";
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";

const DataChart = ({ xLabels, yLabels }) => {
  const [chartData, setChartData] = useState({});

  console.log(yLabels);
  console.log(xLabels);
  const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
  const data = [10, 5, 2, 30, 20, 15, 0, 200];

  const createChart = () => {
    setChartData({
      labels: xLabels,
      datasets: [
        {
          label: "Covid-19",
          data: yLabels,
          backgroundColor: "#fff",
          borderWidth: 0.25,
          fill: true,
          pointRadius: 0,
        },
      ],
    });
  };

  useEffect(() => {
    createChart();
  }, [xLabels, yLabels]);

  return (
    <div id="chart">
      <Line data={chartData} />
    </div>
  );
};

export default DataChart;
