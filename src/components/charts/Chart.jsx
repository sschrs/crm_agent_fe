import React, { useState, useEffect } from "react";
import { BarChart } from "./BarChart";
import { LineChart } from "./LineChart";
import { PieChart } from "./PieChart";

export const Chart = ({ labels, data, defaultChartType = "bar", title }) => {
  const [selectedChart, setSelectedChart] = useState(defaultChartType);

  useEffect(() => {
    setSelectedChart(defaultChartType);
  }, [defaultChartType]);

  const renderChart = () => {
    let chartComponent = null;

    switch (selectedChart) {
      case "bar":
        chartComponent = <BarChart labels={labels} data={data} title={title} />;
        break;
      case "line":
        chartComponent = <LineChart labels={labels} data={data} title={title} />;
        break;
      case "pie":
        chartComponent = <PieChart labels={labels} data={data}  title={title} />;
        break;
      default:
        return null;
    }

    return (
      <div style={{ width: "50%" }}>
        {chartComponent}
      </div>
    );
  };

  return (
    <div className="container">
      <div className="mb-3">
        <select
          className="form-select w-auto"
          value={selectedChart}
          onChange={(e) => setSelectedChart(e.target.value)}
        >
          <option value="bar">Bar Chart</option>
          <option value="line">Line Chart</option>
          <option value="pie">Pie Chart</option>
        </select>
      </div>
      {renderChart()}
    </div>
  );
};
