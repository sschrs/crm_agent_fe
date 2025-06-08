import React from "react";
import "../../style/chat.css";
import { useSelector } from "react-redux";
import { Chart } from "../charts/Chart";
import { DataTable } from "../analyse/DataTable";


export const ChatArea = () => {
    const session = useSelector((state) => state.session);

    return (
        <div className="chat-container d-flex flex-column">
            {session.chatHistory.map((pair, index) => (
                <React.Fragment key={index}>
                    <div className="message user">{pair.user}</div>
                    <div className="message assistant">{pair.assistant}</div>
                    {pair.chart.chart_type && pair.chart.chart_type !== "none" && pair.chart.labels && pair.chart.data && (
                        <div className="chart-wrapper mb-4">
                            <DataTable data={pair.table} />
                            <Chart
                                chartType={pair.chart.chart_type}
                                labels={pair.chart.labels}
                                data={pair.chart.data}
                                title={pair.chart.chart_title}
                            />                            
                        </div>
                    )}
                </React.Fragment>
            ))}
        </div>
    );
};