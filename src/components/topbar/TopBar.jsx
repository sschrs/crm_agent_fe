import React from 'react';
import { ExportButton } from './ExportButton';
import { CustomerName } from './CustomerName';

export const TopBar = () => {
  return (
    <div className="container-fluid py-2 border-bottom">
      <div className="d-flex justify-content-between align-items-center">
        <CustomerName />
        {/* <ExportButton /> */}
      </div>
    </div>
  );
};