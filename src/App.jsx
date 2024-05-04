import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./Pages/Login/Login"
import 'bootstrap/dist/css/bootstrap.min.css'
import '@coreui/coreui/dist/css/coreui.min.css'
import Dashboard from "./Pages/Dashboard/Dashboard"
import MainPanel from "./components/MainPanel/MainPanel"

function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="" element={<MainPanel />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
