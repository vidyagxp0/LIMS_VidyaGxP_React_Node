import React from 'react'
import Header from '../Header/Header'

import { CNavItem, CSidebar, CSidebarNav } from '@coreui/react'
import { Link } from 'react-router-dom'
import { TfiUser } from 'react-icons/tfi'

const AdminSidebar = () => {
  return (
    <div>
        <Header/>
        <CSidebar
        className="border-end app-sidebar h-100"
        colorScheme="dark"
        id="sideBar"
      >
        <CSidebarHeader className="border-bottom ">
          <CSidebarBrand>
            <Link
              to="/userMgnt"
              className="logo d-flex align-items-center"
              style={{}}
            >
              <img
                src="/images/vidhyaGxp.png"
                alt="..."
                style={{
                  width: "300px",
                  marginRight: "90px",
                  paddingRight: "70px",
                  filter: "drop-shadow(0 0 0 white)",
                }}
              />
            </Link>
          </CSidebarBrand>
          <CSidebarNav>
          <Link to="/userMgnt">
            <CNavItem
              href="#"
              style={{ ...isActive("/userMgnt"), gap: "18px" }}
              className={isActive("/userMgnt")}
            >
              <TfiUser />
              User Management
            </CNavItem>
          </Link>

          </CSidebarNav>

          <CSidebarNav>
          <Link to="/siteManagement">
            <CNavItem
              href="#"
              style={{ ...isActive("/siteManagement"), gap: "18px" }}
              className={isActive("/siteManagement")}
            >
              <TfiUser />
              Site Management
            </CNavItem>
          </Link>

          </CSidebarNav>

          <CSidebarNav>
          <Link to="/processManagement">
            <CNavItem
              href="#"
              style={{ ...isActive("/processManagement"), gap: "18px" }}
              className={isActive("/processManagement")}
            >
              <TfiUser />
              User Management
            </CNavItem>
          </Link>

          </CSidebarNav>
          
        </CSidebarHeader>


      </CSidebar>
        
      
    </div>
  )
}

export default AdminSidebar
