import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import "./MainPanel.css";
import Header from "../Header/Header";

function MainPanel() {
  const [sidebarClass, setSidebarClass] = useState("");
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebarClass = () => {
    setSidebarClass(sidebarClass === "" ? "m-0" : "");
    setSidebarVisible(!isSidebarVisible);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 990) {
        setSidebarVisible(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); 

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="app-container ">
      <div id="main-panel" >
        <div className="sidebar-block ">
          <Sidebar
            sidebarClass={sidebarClass}
            isSidebarVisible={isSidebarVisible}
            toggleSidebarClass={toggleSidebarClass}
          />
        </div>
        <div id="content-wrapper" className={isSidebarVisible ? 'blur' : ''}>
          <div className="header-block">
            <Header toggleSidebarClass={toggleSidebarClass} />
          </div>
          <div className="content-block">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default MainPanel;
