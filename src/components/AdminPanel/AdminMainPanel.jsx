import React from 'react'
import { Outlet } from "react-router-dom"
import '../MainPanel/MainPanel.css'

import AdminSidebar from './AdminSidebar'
import AdminHeader from './AdminHeader/AdminHeader'


const AdminMainPanel = () => {
     return (
          <>

               <div id="main-panel" className="d-flex">
                    <div className="sidebar-block ">
                         <AdminSidebar />
                    </div>
                    <div className="content-wrapper position-relative flex-fill">
                         <div className="header-block">
                              <AdminHeader />
                         </div>
                         <div className="content-block">
                              <Outlet />
                         </div>
                    </div>
               </div>

          </>
     )
}

export default AdminMainPanel

