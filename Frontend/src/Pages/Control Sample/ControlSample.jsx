import React, { useState } from 'react'
import AtmTab from '../../components/ATM components/AtmTab/AtmTab';

const ControlSample = () => {
    const [activeTab, setActiveTab] = useState(1);
    const tabs = [
        { id: 7, label: 'Sample ID' },
        { id: 7, label: 'Product/ Material Name' },
        { id: 6, label: 'Product/ Material Code' },
        { id: 1, label: 'Sample Type' },
        { id: 2, label: 'Market' },
        { id: 3, label: 'AR No.' },
        { id: 3, label: 'Batch No.' },
        { id: 6, label: 'MFG Date' },
        { id: 6, label: 'Expiry Date' },
        { id: 4, label: 'Quantity' },
        { id: 4, label: 'Quantity Withdrawn' },
        { id: 4, label: 'Current Quantity' },
        { id: 5, label: 'UOM' },
        { id: 6, label: 'Storage Location' },
        { id: 6, label: 'Storage Condition' },
        { id: 4, label: 'Visual Inspection Scheduled On' },
        { id: 4, label: 'Visual Inspection Performed By' },
        { id: 6, label: 'Any Abnormal Observation' },
        { id: 6, label: 'Observation Date' },
        { id: 6, label: 'Destriction Due On' },
        { id: 4, label: 'Destroyed By' },
        { id: 4, label: 'Neutralizing Agent' },
        { id: 4, label: 'Destriction Date' },
        { id: 6, label: 'Remarks' },
    ];

    return (
        <>
        <div className="m-5 mt-3">
            <div className="main-head">
          <h4 className="fw-bold ">Control Sample</h4>
        </div>
        <div className='flex'>
            {tabs.map((tab) => (
                <AtmTab
                    key={tab.id}
                    label={tab.label}
                    isActive={activeTab === tab.id}
                    onClick={() => setActiveTab(tab.id)}
                />
            ))}
        </div>
        </div>
        </>
  )
}

export default ControlSample