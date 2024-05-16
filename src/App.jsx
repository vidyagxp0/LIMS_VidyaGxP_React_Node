import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./Pages/Login/Login"
import 'bootstrap/dist/css/bootstrap.min.css'
import '@coreui/coreui/dist/css/coreui.min.css'
import Dashboard from "./Pages/Dashboard/Dashboard"
import MainPanel from "./components/MainPanel/MainPanel"
import Approval from "./Pages/Approval/Approval"
import Details from "./Pages/Approval/Details"
import StorageLocation from "./Pages/StorageLocation/StorageLocation"
import StorageCondition from "./Pages/StorageCondition/StorageCondition"
import { useState } from "react"
import Department from "./Pages/UserManagement/Department"
import Admin from "./Pages/UserManagement/Department/Admin"
import Users from "./Pages/UserManagement/Users"
import QualityAssurance from "./Pages/UserManagement/Department/QualityAssurance"
import QualityCheck from "./Pages/UserManagement/Department/QualityCheck"
import Store from "./Pages/UserManagement/Department/Store"
import Roles from "./Pages/UserManagement/Roles"
import Samplelogin from "./Pages/Samplelogin/Samplelogin"
import InvestigationL1 from "./Pages/Samplelogin/InvestigationL1"
import InvestigationL2 from "./Pages/Samplelogin/InvestigationL2"

function App() {
  const [isLoggedIn, setIsLoggedin] = useState(false)
  const checkLoggedIn = (data) => {
    setIsLoggedin(data);
  }

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login show={checkLoggedIn}/>} />
          <Route path="" element={<MainPanel />}>
            <Route path="/dashboard" element={<Dashboard setToast={checkLoggedIn} show={isLoggedIn}/>} />
            <Route path="/approval" element={<Approval />} />
            <Route path="/approval/1321" element={<Details />} />
            <Route path="/storage-location" element={<StorageLocation />} />
            <Route path="/stCondition" element={<StorageCondition />} />
            <Route path="/department" element={<Department />} />
            <Route path="/admin" element={<Admin/>}/>
            <Route path="/qualityAssurance" element={<QualityAssurance/>} />
            <Route path="/qualityCheck" element={< QualityCheck/>} />
            <Route path="/store" element={< Store/>} />
            <Route path="/users" element={<Users />} />
            <Route path="/roles" element={<Roles/>} />
            <Route path="/samplelogin" element={<Samplelogin/>} />
            <Route path="/investigationl1" element={<InvestigationL1/>} />
            <Route path="/investigationl2" element={<InvestigationL2/>} />

          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
