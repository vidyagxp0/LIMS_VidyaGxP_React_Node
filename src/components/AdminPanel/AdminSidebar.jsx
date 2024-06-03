import React from 'react'
import { CNavGroup, CNavItem, CSidebar, CSidebarBrand, CSidebarHeader, CSidebarNav } from '@coreui/react'
import { Link, useLocation } from 'react-router-dom'
import { TfiUser } from 'react-icons/tfi'
import '../Sidebar/Sidebar.css'
import { FaUsers } from 'react-icons/fa6'

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
        <CSidebarHeader className="border-bottom ">
          <CSidebarBrand>
            <Link
              to="/admin-panel/userManagement"
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
        </CSidebarHeader>
        <CSidebarNav>


          <CNavGroup
            className={isActive("/admin-panel/userManagement")}
            toggler={
              <>
                <FaUsers />
                <span className="ml-5">User Management</span>
              </>
            }
          >
            <Link to="/admin-panel/userManagement">
              <CNavItem
                href="#"
                className={isActive("/admin-panel/userManagement")}
                style={{ ...isActive("/admin-panel/userManagement") }}
              >
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                User Management
              </CNavItem>
            </Link>


          </CNavGroup>

          <CNavGroup
            className={isActive("/admin-panel/site-management")}
            toggler={
              <>
                <FaUsers />
                <span className="ml-5">Site Management</span>
              </>
            }
          >
            <Link to="/admin-panel/site-management">
              <CNavItem
                href="#"
                className={isActive("/admin-panel/site-management")}
                style={{ ...isActive("/admin-panel/site-management") }}
              >
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                Sites

              </CNavItem>
            </Link>
            
          </CNavGroup>

          <CNavGroup
            className={isActive("/admin-panel/process-management")}
            toggler={
              <>
                <FaUsers />
                <span className="ml-5">Process Management</span>
              </>
            }
          >
            <Link to="/admin-panel/process-management">
              <CNavItem
                href="#"
                className={isActive("/admin-panel/process-management")}
                style={{ ...isActive("/admin-panel/process-management") }}
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
