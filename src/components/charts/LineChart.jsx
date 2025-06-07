import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend);

const getRandomColor = () =>
  `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(
    Math.random() * 255
  )}, 0.6)`;

export const LineChart = ({ data, labels, title }) => {
  const color = getRandomColor();

  const chartData = {
    labels,
    datasets: [
      {
        label: title,
        data,
        borderColor: color.replace("0.6", "1"),
        backgroundColor: color,
        fill: true,
        tension: 0.4,
      },
    ],
  };

  return (
    <div style={{maxWidth: 700}}>
      <Line data={chartData} options={{ responsive: true }} />
    </div>
  );
};
