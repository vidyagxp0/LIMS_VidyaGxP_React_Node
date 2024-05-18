import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import "@coreui/coreui/dist/css/coreui.min.css";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MainPanel from "./components/MainPanel/MainPanel";
import Approval from "./Pages/Approval/Approval";
import Details from "./Pages/Approval/Details";
import StorageLocation from "./Pages/StorageLocation/StorageLocation";
import StorageCondition from "./Pages/StorageCondition/StorageCondition";
import { useState } from "react";
import Department from "./Pages/UserManagement/Department";
import Admin from "./Pages/UserManagement/Department/Admin";
import Users from "./Pages/UserManagement/Users";
import QualityAssurance from "./Pages/UserManagement/Department/QualityAssurance";
import QualityCheck from "./Pages/UserManagement/Department/QualityCheck";
import Store from "./Pages/UserManagement/Department/Store";
import Roles from "./Pages/UserManagement/Roles";
import Samplelogin from "./Pages/Samplelogin/Samplelogin";
import InvestigationL1 from "./Pages/Samplelogin/InvestigationL1";
import InvestigationL2 from "./Pages/Samplelogin/InvestigationL2";
import Storage_Condition from "./Pages/Stability/Storage_Condition";
import ChamberConditionMapping from "./Pages/Stability/ChamberConditionMapping";
import ChamberTransfer from "./Pages/Stability/ChamberTransfer";
import CoaTemplate from "./Pages/Stability/CoaTemplate";
import StorageChamber from "./Pages/Stability/StorageChamber";
import StandardProtocol from "./Pages/Stability/StandardProtocol";
import StabilityProtocol from "./Pages/Stability/StabilityProtocol";
import SampleStorage from "./Pages/Stability/SampleStorage";
import Sample_Login from "./Pages/Stability/Sample_Login";
import SampleAcceptance from "./Pages/Stability/SampleAcceptance";
import SampleAcceptanceTemplate from "./Pages/Stability/SampleAcceptanceTemplate";
import SampleLoginTemplate from "./Pages/Stability/SampleLoginTemplate";
import SummaryReportHeader from "./Pages/Stability/SummaryReportHeader";
import WorkSheetHeader from "./Pages/Stability/WorkSheetHeader";
import SamplingConfiguration from "./Pages/Sampling/SamplingConfiguration";
import SamplingRule from "./Pages/Sampling/SamplingRule";
import ESampling from "./Pages/Sampling/ESampling";
import SamplingField from "./Pages/Sampling/SamplingField";
import SamplingTemplate from "./Pages/Sampling/SamplingTemplate";

import Product from "./Pages/Masters/Product"
import SampleType from "./Pages/Masters/SampleType"
import SpecificationType from "./Pages/Masters/SpecificationType"
import Specifications from "./Pages/Masters/Specifications"
import TestCategories from "./Pages/Masters/TestCategories"
import TestRegistrations from "./Pages/Masters/TestRegistrations"
import TestPlan from "./Pages/Masters/TestPlan"
import MyTests from "./Pages/Masters/MyTests"

import StocksVerification from "./Pages/Stock Management/StocksVerification"
import StocksOnboarding from "./Pages/Stock Management/StocksOnboarding"
import Material from "./Pages/Stock Management/Material"
import Inventory from "./Pages/Stock Management/Inventory"
import Inventory from "./Pages/Inventory/Inventory";
import Chemicals from "./Pages/Inventory/Chemicals";
import Columns from "./Pages/Inventory/Columns";
import CultureManagement from "./Pages/Inventory/CultureManagement";
import Environment from "./Pages/Inventory/Environment";
import Media from "./Pages/Inventory/Media";
import ReferenceStandards from "./Pages/Inventory/RefrenceStandards";
import VolumeSolutions from "./Pages/Inventory/VolumeSolutions";
import WaterManagement from "./Pages/Inventory/WaterManagement";
import WorkingStandardIssue from "./Pages/Inventory/WorkingStandardIssue";
// import WorkingStandard from "./Pages/Inventory/WorkingStandard";
import WorkingStandardUsage from "./Pages/Inventory/WorkingStandardUsage";
import InternalRegistration from "./Pages/Inventory/InternalRegistration";

import SolutionTemplate from "./Pages/Inventory/SolutionTemplate";
import SolutionStandardization from "./Pages/Inventory/SolutionStandardization.jsx";
import SolutionUsage from "./Pages/Inventory/SolutionUsage.jsx";

import Product from "./Pages/Masters/Product";
import SampleType from "./Pages/Masters/SampleType";
import SolutionPrepration from "./Pages/Inventory/SolutionPrepration";
import SpecificationType from "./Pages/Masters/SpecificationType";
import Specifications from "./Pages/Masters/Specifications";
import TestCategories from "./Pages/Masters/TestCategories";
import TestRegistrations from "./Pages/Masters/TestRegistrations";
import TestPlan from "./Pages/Masters/TestPlan";
import MyTests from "./Pages/Masters/MyTests";

function App() {
  const [isLoggedIn, setIsLoggedin] = useState(false);
  const checkLoggedIn = (data) => {
    setIsLoggedin(data);
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login show={checkLoggedIn} />} />
          <Route path="" element={<MainPanel />}>
            <Route
              path="/dashboard"
              element={<Dashboard setToast={checkLoggedIn} show={isLoggedIn} />}
            />
            <Route path="/approval" element={<Approval />} />
            <Route path="/approval/1321" element={<Details />} />
            <Route path="/storage-location" element={<StorageLocation />} />
            <Route path="/stCondition" element={<StorageCondition />} />

            <Route path="/department" element={<Department />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/qualityAssurance" element={<QualityAssurance />} />
            <Route path="/qualityCheck" element={<QualityCheck />} />
            <Route path="/store" element={<Store />} />
            <Route path="/users" element={<Users />} />
            <Route path="/roles" element={<Roles />} />

            <Route path="/samplelogin" element={<Samplelogin />} />
            <Route path="/investigationl1" element={<InvestigationL1 />} />
            <Route path="/investigationl2" element={<InvestigationL2 />} />

            <Route
              path="/storageCondition1321"
              element={<Storage_Condition />}
            />
            <Route path="/standardProtocol" element={<StandardProtocol />} />
            <Route path="/storageChamber" element={<StorageChamber />} />
            <Route
              path="/chamberConditionMapping"
              element={<ChamberConditionMapping />}
            />
            <Route path="/chamberTransfer" element={<ChamberTransfer />} />
            <Route path="/stabilityProtocol" element={<StabilityProtocol />} />
            <Route path="/sampleStorage" element={<SampleStorage />} />
            <Route path="/coaTemplate" element={<CoaTemplate />} />
            <Route
              path="/sampleLogintemplate"
              element={<SampleLoginTemplate />}
            />
            <Route path="/worksheetHeader" element={<WorkSheetHeader />} />
            <Route
              path="/summaryReportHeader"
              element={<SummaryReportHeader />}
            />
            <Route
              path="/sampleAcceptanceTemplate"
              element={<SampleAcceptanceTemplate />}
            />
            <Route path="/sampleLogin1321" element={<Sample_Login />} />
            <Route path="/sampleAcceptance" element={<SampleAcceptance />} />

            <Route path="/Masters/Product" element={<Product />} />
            <Route path="/Masters/SampleType" element={<SampleType />} />
            <Route
              path="/Masters/SpecificationType"
              element={<SpecificationType />}
            />
            <Route
              path="/Masters/Specifications"
              element={<Specifications />}
            />
            <Route
              path="/Masters/TestCategories"
              element={<TestCategories />}
            />
            <Route
              path="/Masters/TestRegistrations"
              element={<TestRegistrations />}
            />
            <Route path="/Masters/TestPlan" element={<TestPlan />} />
            <Route path="/Masters/MyTests" element={<MyTests />} />

            <Route path="/sampling/samplingConfiguration" element={<SamplingConfiguration />} />
            <Route path="/sampling/samplingRule" element={< SamplingRule />} />
            <Route path="/sampling/eSamping" element={< ESampling />} />
            <Route path="/sampling/samplingField" element={< SamplingField />} />
            <Route path="/sampling/samplingTemplate" element={<SamplingTemplate />} />

            <Route path="/stock-management/stocks-verification" element={< StocksVerification/>} />
            <Route path="/stock-management/stocks-onboarding" element={<StocksOnboarding/>} />
            <Route path="/stock-management/material" element={<Material/>} />
            <Route path="/stock-management/inventory" element={<Inventory/>} />
           

            <Route
              path="/sampling/samplingConfiguration"
              element={<SamplingConfiguration />}
            />
            <Route path="/sampling/samplingRule" element={<SamplingRule />} />
            <Route path="/sampling/eSamping" element={<ESampling />} />
            <Route path="/sampling/samplingField" element={<SamplingField />} />
            <Route
              path="/sampling/samplingTemplate"
              element={<SamplingTemplate />}
            />

            <Route path="/Inventory/Inventory" element={<Inventory />} />
            <Route
              path="/Inventory/WorkingStandard"
              element={<InternalRegistration />}
            />
            <Route
              path="/Inventory/InternalRegistration"
              element={<InternalRegistration />}
            />
            <Route
              path="/Inventory/WorkingStandardUsage"
              element={<WorkingStandardUsage />}
            />
            <Route
              path="/Inventory/WorkingStandardIssue"
              element={<WorkingStandardIssue />}
            />
            <Route
              path="/Inventory/VolumeSolutions"
              element={<VolumeSolutions />}
            />

            <Route path="Inventory/SolutionTemplate"
            element={<SolutionTemplate/>}/>
            
            <Route path="Inventory/SolutionPrepration"
            element={<SolutionPrepration/>}/>

            <Route path="Inventory/SolutionStandardization"
            element={<SolutionStandardization/>}/>
            <Route path="Inventory/SolutionUsage"
            element={<SolutionUsage/>}/>





            <Route path="/Inventory/Chemicals" element={<Chemicals />} />
            <Route path="/Inventory/Columns" element={<Columns />} />
            <Route
              path="/Inventory/ReferenceStandards" // Corrected route path
              element={<ReferenceStandards />}
            />
            <Route
              path="/Inventory/CultureManagement"
              element={<CultureManagement />}
            />
            <Route path="/Inventory/Media" element={<Media />} />
            <Route
              path="/Inventory/WaterManagement"
              element={<WaterManagement />}
            />
            <Route path="/Inventory/Environment" element={<Environment />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
