import React from 'react';
import './AtmTab.css'
const AtmTab = ({ label, children, isActive, onClick, customStyle }) => {
  return (
    <div
      className={`atm-tab ${isActive ? 'active-tab' : ''}`} 
      onClick={onClick} 
      style={customStyle} 
    >
      <div className="tab-label">
        {label}
      </div>
      <div className="tab-content">
        {children}
      </div>
    </div>
  );
};

export default AtmTab;
