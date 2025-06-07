import React from 'react';
import "../../style/result.css"
import { ReportSummary } from './ReportSummary';
import { Charts } from './Charts';

export const Result = () => {
    return (
        <div className="mt-4">
            <div className="row">
                <div className="col-12">
                    <ReportSummary />
                </div>
            </div>
        </div>
    );
};
