import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const getRandomColor = () =>
  `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(
    Math.random() * 255
  )}, 0.6)`;

export const PieChart = ({ data, labels, title }) => {
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
    <div style={{maxWidth: 350}}>
      <Pie data={chartData} />
    </div>
  );
};
