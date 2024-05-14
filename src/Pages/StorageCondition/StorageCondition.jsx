import React, { useState } from 'react';
import './StorageCondition.css';

export default function StorageCondition() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div>
      <div id="div1">
        <h5>Storage Condition</h5>
      </div>

      <div id="div2">
        <div>
          <input type="search" placeholder="search" />
        </div>

        <div>
          <select name="Select Status" id="">
            <option label="Select Status" value=""></option>
            <option value="">Active</option>
            <option value="">In Active</option>
          </select>
        </div>

        <div id="addstorage">
          <button onClick={toggleSidebar}>Add Storage Condition</button>
        </div>
      </div>

      <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Toggle right offcanvas</button>

    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
    <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasRightLabel">Offcanvas right</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    ...
  </div>
</div>

      

    </div>
  );
}
