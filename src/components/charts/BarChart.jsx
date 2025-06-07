import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const getRandomColor = () =>
  `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(
    Math.random() * 255
  )}, 0.6)`;

export const BarChart = ({ data, labels, title }) => {
  const colors = data.map(() => getRandomColor());

  const chartData = {
    labels,
    datasets: [
      {
        label: title,
        data,
        backgroundColor: colors,
        borderColor: colors.map((c) => c.replace("0.6", "1")),
        borderWidth: 1,
      },
    ],
  };

  return (
    <div style={{maxWidth: 700}}>
      <div className="card shadow-sm">
        <div className="card-body">
          <Bar data={chartData} options={{ responsive: true }} />
        </div>
      </div>
    </div>
  );
};
