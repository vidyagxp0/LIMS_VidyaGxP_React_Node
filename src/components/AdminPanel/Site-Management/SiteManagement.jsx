import React, { useState } from 'react';
import './SiteManagement.css';

export default function SiteManagement() {
  const [selectedSite, setSelectedSite] = useState(null);
  const [selectedLocations, setSelectedLocations] = useState([]);

  const sites = ["site1", "site2", "site3"];
  const locationsBySite = {
    site1: ["plant1", "plant2", "plant3"],
    site2: ["plant4", "plant5"],
    site3: ["plant6"]
  };

  const handleSiteClick = (site) => {
    setSelectedSite(site);
    setSelectedLocations([]); // Reset selected locations when a new site is selected
  };

  const handleLocationClick = (location) => {
    if (selectedLocations.includes(location)) {
      setSelectedLocations(selectedLocations.filter(loc => loc !== location));
    } else {
      setSelectedLocations([...selectedLocations, location]);
    }
  };

  return (
    <div className="mx-5">
      <div className="row my-5 d-flex align-items-center justify-content-center">
        <div className="main-head d-flex justify-content-between">
          <div className="title fw-bold fs-5 py-4">Sites</div>
        </div>
        <div className=''>
          <div className=" d-flex align-items-center justify-content-center p-4" >
            <div className="w-50 h-96 text-center">
              <h3 className="card-header">Sites</h3>
              {sites.map((site, index) => (
                <div
                  key={index}
                  className={`item ${selectedSite === site ? 'selected' : ''}`} 
                  onClick={() => handleSiteClick(site)}
                >
                  <input 
                  className='mx-5'
                    type="radio"
                    name="site"
                    value={site}
                    checked={selectedSite === site}
                    onChange={() => handleSiteClick(site)}
                  />
                  <label className='mx-4'>{site}</label>
                </div>
              ))}
            </div>
            <div className="w-50 h-96 text-center">
              <h3 className="card-header">Locations</h3>
              {selectedSite && locationsBySite[selectedSite].map((location, index) => (
                <div
                  key={index}
                  className={`item ${selectedLocations.includes(location) ? 'selected' : ''}`}
                  onClick={() => handleLocationClick(location)}
                >
                  <input
                  className='mx-5'
                    type="checkbox"
                    name="location"
                    value={location}
                    checked={selectedLocations.includes(location)}
                    onChange={() => handleLocationClick(location)}
                  />
                  <label className='mx-4'>{location}</label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}







    // <div className="site-management">
    //   <div className="header">
    //     <h1>Site Management</h1>
    //   </div>
    //   <div className="content ">
    //     <div className="card sites">
    //       <div className="card-header bg-dark">Sites</div>
    //       <div className="card-body ">
    //         {sites.map((site, index) => (
    //           <div
    //             key={index}
    //             className={`item ${selectedSite === site ? 'selected' : ''}`}
    //             onClick={() => handleSiteClick(site)}
    //           >
    //             {site}
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //     <div className="card locations">
    //       <div className="card-header bg-primary">Locations</div>
    //       <div className="card-body">
    //         {locations.map((location, index) => (
    //           <div
    //             key={index}
    //             className={`item ${selectedLocations.includes(location) ? 'selected' : ''}`}
    //             onClick={() => handleLocationClick(location)}
    //           >
    //             {location}
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   </div>
    // </div>

