import { Outlet } from "react-router-dom"
import Sidebar from "../Sidebar/Sidebar"
import './MainPanel.css'
import Header from "../Header/Header"

function MainPanel() {
     return (
          <>

               <div id="main-panel" className="d-flex">
                    <div className="sidebar-block">
                         <Sidebar />
                    </div>
                    <div className="content-wrapper position-relative flex-fill">
                         <div className="header-block">
                              <Header />
                         </div>
                         <div className="content-block">
                              <Outlet />
                         </div>
                    </div>
               </div>

          </>
     )
}

export default MainPanel
