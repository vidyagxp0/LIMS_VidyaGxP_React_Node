import React from 'react'
import { CNavGroup, CNavItem, CSidebar, CSidebarBrand, CSidebarHeader, CSidebarNav } from '@coreui/react'
import { Link, useLocation } from 'react-router-dom'
import { TfiUser } from 'react-icons/tfi'
import '../Sidebar/Sidebar.css'
import { FaUsers } from 'react-icons/fa6'
import { GrUserAdmin } from "react-icons/gr";
import { SiSitecore } from "react-icons/si";
import { SiProcesswire } from "react-icons/si";
import Dashboard from '../../Pages/Dashboard/Dashboard'



const AdminSidebar = () => {

  const location = useLocation();
  const currentPath = location.pathname;
  const isActive = (path) => {
    return currentPath === path
      ? {
        backgroundColor: "rgb(12, 30, 108)",
        borderRadius: "10px",
        color: "white",
      }
      : {};
  };
  return (
    <>
      <CSidebar
        className="border-end app-sidebar h-100"
        colorScheme="dark"
        id="sideBar"
      >
        <CSidebarHeader className="border-bottom pb-1">
          <CSidebarBrand>
            <Link
              to="/Dashboard"
              className="logo d-flex align-items-center"
              style={{}}
            >
              <img
                src="/images/vidhyaGxp.png"
                alt="..."
                style={{
                  filter: "drop-shadow(0 0 0 white)",
                }}
              />
            </Link>
          </CSidebarBrand>
        </CSidebarHeader>
        <CSidebarNav>


          <CNavGroup
            className={isActive("/admin-login/userManagement")}
            toggler={
              <>
                <GrUserAdmin />

                <span className="ml-5">User Management</span>
              </>
            }
          >
            <Link to="/admin-login/userManagement">
              <CNavItem
                href="#"
                className={isActive("/admin-login/userManagement")}
                style={{ ...isActive("/admin-login/userManagement") }}
              >
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                User Management
              </CNavItem>
            </Link>


          </CNavGroup>

          <CNavGroup
            className={isActive("/admin-login/site-management")}
            toggler={
              <>
               <SiSitecore />

                <span className="ml-5">Site Management</span>
              </>
            }
          >
            <Link to="/admin-login/site-management">
              <CNavItem
                href="#"
                className={isActive("/admin-login/site-management")}
                style={{ ...isActive("/admin-login/site-management") }}
              >
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                Sites

              </CNavItem>
            </Link>
            
          </CNavGroup>

          <CNavGroup
            className={isActive("/admin-login/process-management")}
            toggler={
              <>
                <SiProcesswire />

                <span className="ml-5">Process Management</span>
              </>
            }
          >
            <Link to="/admin-login/process-management">
              <CNavItem
                href="#"
                className={isActive("/admin-login/process-management")}
                style={{ ...isActive("/admin-login/process-management") }}
              >
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                Process
              </CNavItem>
            </Link>
            
          </CNavGroup>

        </CSidebarNav>

      </CSidebar>


    </>
  )
}

export default AdminSidebar
