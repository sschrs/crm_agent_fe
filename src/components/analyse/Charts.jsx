import React from "react";
import { PieChart } from "../charts/PieChart";
import { LineChart } from "../charts/LineChart";
import { BarChart } from "../charts/BarChart";

export const Charts = () => {
    const exampleData = [12, 19, 3, 5, 2];
    const exampleLabels = ["Red", "Blue", "Yellow", "Green", "Purple"];

    const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
    const values = [12, 19, 3, 5, 2, 7];

    return (
        <div className="charts-container">
            <PieChart data={exampleData} labels={exampleLabels} />
            <LineChart labels={labels} data={values} />
            <BarChart />
        </div>
    )
}