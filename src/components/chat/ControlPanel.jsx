import React from 'react';
import { NewChatButton } from './NewChatButton';
import { KnowledgeBaseDropdown } from './KnowledgeBaseDropdown';
import { DataSourceDropdown } from './DataSourceDropdown';

export const ControlPanel = () => {
  return (
    <div className="my-3">
      <div className="row g-2">
        <div className="col-4">
          <NewChatButton />
        </div>
        <div className="col-4">
          <DataSourceDropdown />
        </div>
        <div className="col-4">
          <KnowledgeBaseDropdown />
        </div>
      </div>
    </div>
  );
};
