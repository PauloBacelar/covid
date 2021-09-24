import React from "react";
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";

const DataChart = ({ xLabels, yLabels, name }) => {
  const [chartData, setChartData] = useState({});

  const createChart = () => {
    setChartData({
      labels: xLabels,
      datasets: [
        {
          label: `Daily new cases in ${name}`,
          data: yLabels,
          backgroundColor: "#fff",
          fill: true,
          pointRadius: 0,
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
    <div id="chart" width="5" height="1">
      <Line data={chartData} />
    </div>
  );
};

export default DataChart;
