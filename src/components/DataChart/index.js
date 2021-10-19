import React from "react";
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";

const DataChart = ({ xLabels, yLabels, name, type }) => {
  const [chartData, setChartData] = useState({});

  const createChart = () => {
    setChartData({
      labels: xLabels,
      datasets: [
        {
          label: `Daily new ${type.toLowerCase()} in ${name}`,
          data: yLabels,
          backgroundColor: "rgba(111, 235, 122)",
          fill: true,
          pointRadius: 0,
          borderColor: "#57EB63",
          borderWidth: 0.25,
        },
      ],
      options: {
        maintainAspectRatio: false,
        responsive: true,
      },
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
