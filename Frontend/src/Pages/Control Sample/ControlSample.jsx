import React, { useState } from 'react'
import AtmTab from '../../components/ATM components/AtmTab/AtmTab';

const ControlSample = () => {
    const [activeTab, setActiveTab] = useState(1);
    const tabs = [
        { id: 1, label: 'Tab 1' },
        { id: 2, label: 'Tab 2' },
        { id: 3, label: 'Tab 3' },
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