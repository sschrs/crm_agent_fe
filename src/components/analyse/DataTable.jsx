import React from "react";
import { useSelector } from "react-redux";

export const DataTable = ({ data }) => {
    const session = useSelector(state => state.session);
    
    if (!data || data.length === 0) {
        return <div className="container mt-4">No data available.</div>;
    }

    const headers = Object.keys(data[0]);

    return (
        <div className="">
            <div dangerouslySetInnerHTML={{ __html: session.tableExplantation }} />

            <table className="table table-striped table-bordered">
                <thead className="thead-dark">
                    <tr>
                        {headers.map((header) => (
                            <th key={header}>{header.replace(/_/g, ' ').toUpperCase()}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {headers.map((header) => (
                                <td key={header}>
                                    {typeof row[header] === "number"
                                        ? Number.isFinite(row[header])
                                            ? row[header].toFixed(4)
                                            : row[header]
                                        : row[header]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
