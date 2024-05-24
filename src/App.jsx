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
import Storage_Condition from "./Pages/Stability/Storage_Condition"
import ChamberConditionMapping from "./Pages/Stability/ChamberConditionMapping"
import ChamberTransfer from "./Pages/Stability/ChamberTransfer"
import CoaTemplate from "./Pages/Stability/CoaTemplate"
import StorageChamber from "./Pages/Stability/StorageChamber"
import StandardProtocol from "./Pages/Stability/StandardProtocol"
import StabilityProtocol from "./Pages/Stability/StabilityProtocol"
import SampleStorage from "./Pages/Stability/SampleStorage"
import Sample_Login from "./Pages/Stability/Sample_Login"
import SampleAcceptance from "./Pages/Stability/SampleAcceptance"
import SampleAcceptanceTemplate from "./Pages/Stability/SampleAcceptanceTemplate"
import SampleLoginTemplate from "./Pages/Stability/SampleLoginTemplate"
import SummaryReportHeader from "./Pages/Stability/SummaryReportHeader"
import WorkSheetHeader from "./Pages/Stability/WorkSheetHeader"
import SamplingConfiguration from "./Pages/Sampling/SamplingConfiguration"
import SamplingRule from "./Pages/Sampling/SamplingRule"
import ESampling from "./Pages/Sampling/ESampling"
import SamplingField from "./Pages/Sampling/SamplingField"
import SamplingTemplate from "./Pages/Sampling/SamplingTemplate"

import Product from "./Pages/Masters/Product"
import SampleType from "./Pages/Masters/SampleType"
import SpecificationType from "./Pages/Masters/SpecificationType"
import Specifications from "./Pages/Masters/Specifications"
import TestCategories from "./Pages/Masters/TestCategories"
import TestRegistrations from "./Pages/Masters/TestRegistrations"
import TestPlan from "./Pages/Masters/TestPlan"
import MyTests from "./Pages/Masters/MyTests"
import Registration from "./Pages/Instruments Master/Registration"
import InstrumentCategory from "./Pages/Instruments Master/InstrumentCategory"
import InstrumentModule from "./Pages/Instruments Master/InstrumentModule"
import InstrumentUsage from "./Pages/Instruments Master/InstrumentUsage"
import MasterProductDetail from "./Pages/Masters/MasterProductDetail.jsx"


// import Inventory from './Pages/Inventory/Inventory.jsx'
import Inventory from "./Pages/Inventory/Inventory";
// import Chemicals from "./Pages/Inventory/Chemicals";
import Columns from "./Pages/Inventory/Columns";
// import CultureManagement from "./Pages/Inventory/CultureManagement";
import Environment from "./Pages/Inventory/Environment";
import Media from "./Pages/Inventory/Media";
import ReferenceStandards from "./Pages/Inventory/RefrenceStandards";
import VolumeSolutions from "./Pages/Inventory/VolumeSolutions";
import WaterManagement from "./Pages/Inventory/WaterManagement";
import WorkingStandardIssue from "./Pages/Inventory/WorkingStandardIssue";
import WorkingStandardUsage from "./Pages/Inventory/WorkingStandardUsage";
import InternalRegistration from "./Pages/Inventory/InternalRegistration";
import SolutionPrepration from "./Pages/Inventory/SolutionPrepration";
import SolutionTemplate from "./Pages/Inventory/SolutionTemplate";
import SolutionStandardization from "./Pages/Inventory/SolutionStandardization.jsx";
import SolutionUsage from "./Pages/Inventory/SolutionUsage.jsx";
import ChemicalRegistration from "./Pages/Inventory/ChemicalRegistration.jsx"
import ChemicalReagent from "./Pages/Inventory/ChemicalReagent.jsx"
import LotRegistration from "./Pages/Inventory/LotRegistration.jsx"
import ChemicalReagentReports from "./Pages/Inventory/ChemicalReagentReports.jsx"
import ChemicalUsage from "./Pages/Inventory/ChemicalUsage.jsx"
import ChemicalIssues from "./Pages/Inventory/ChemicalIssues.jsx"
import ColumnApplication from "./Pages/Inventory/ColumnApplication.jsx"
import ColumnRegistration from "./Pages/Inventory/ColumnRegistration.jsx"
import PerformanceTest from "./Pages/Inventory/PerformanceTest.jsx"
import Assignment from "./Pages/Inventory/Assignment.jsx"
import Qualification from "./Pages/Inventory/Qualification.jsx"
import ColumnUsage from "./Pages/Inventory/ColumnUsage.jsx"
import BatchAssignment from "./Pages/Inventory/BatchAssignment.jsx"
import StandardRegistration from "./Pages/Inventory/StandardRegistration.jsx"
import InvLotRegistration from "./Pages/Inventory/InvLotRegistration.jsx"
import UsageRegistration from "./Pages/Inventory/UsageRegistration.jsx"
import CultureRegistration from "./Pages/Inventory/CultureRegistration.jsx"
import RefrenceCulture from "./Pages/Inventory/RefrenceCulture.jsx"
import CultureTemplateConfiguration from "./Pages/Inventory/CultureTemplateConfiguration.jsx"
import RefrenceCultureLot from "./Pages/Inventory/RefrenceCultureLot.jsx"
import CultureLotAcceptance from "./Pages/Inventory/CultureLotAcceptance.jsx"
import MediaOnboarding from "./Pages/Inventory/MediaOnboarding.jsx"
import MediaContainerType from "./Pages/Inventory/MediaContainerType.jsx"
import MediaTemplateConfiguration from "./Pages/Inventory/MediaTemplateConfiguration.jsx"
import MediaLot from "./Pages/Inventory/MediaLot.jsx"
import MediaLotContainerIssue from "./Pages/Inventory/MediaLotContainerIssue.jsx"
import MediaLotAcceptance from "./Pages/Inventory/MediaLotAcceptance.jsx"
import MediaLotUsage from "./Pages/Inventory/MediaLotUsage.jsx"
import SampleArea from "./Pages/Inventory/SampleArea.jsx"
import ProcessingSystem from "./Pages/Inventory/ProcessingSystem.jsx"
import Schedule from "./Pages/Inventory/Schedule.jsx"
import Unschedule from "./Pages/Inventory/Unschedule.jsx"
import Acknowledgement from "./Pages/Inventory/Acknowledgement.jsx"
import ScheduleTermination from "./Pages/Inventory/ScheduleTermination.jsx"
import Facility from "./Pages/Inventory/Facility.jsx"
import Location from "./Pages/Inventory/Location.jsx"
import EMMoniteringDetails from "./Pages/Inventory/EMMoniteringDetails.jsx"
import EMCOATemplate from "./Pages/Inventory/EMCOATemplate.jsx"
import OOATemplate from "./Pages/Inventory/OOATemplate.jsx"
import LocationSamples from "./Pages/Inventory/LocationSamples.jsx"
import SamplingSchedule from "./Pages/Inventory/SamplingSchedule.jsx"
import BatchSample from "./Pages/Inventory/BatchSample.jsx"
import SampleLogin from "./Pages/Inventory/SampleLogin.jsx"
import AcknowledgeSample from "./Pages/Inventory/AcknowledgeSample.jsx"
import BatchSampleAllotment from "./Pages/Inventory/BatchSampleAllotment.jsx"
import BatchTestslist from "./Pages/Inventory/BatchTestslist.jsx"




import StocksVerification from "./Pages/Stock Management/StocksVerification"
import StocksOnboarding from "./Pages/Stock Management/StocksOnboarding"
import Material from "./Pages/Stock Management/Material"
// import Inventory from "./Pages/Stock Management/Inventory"
import StockInventory from "./Pages/Stock Management/StockInventory.jsx"
import StockInventoryDetail from "./Pages/Stock Management/StockInventoryDetail.jsx"
import StockMaterialDetail from "./Pages/Stock Management/StockMaterialDetail.jsx"
import StockOnboardingDetails from "./Pages/Stock Management/StockOnboardingDetails.jsx"


import ProblemReporting from "./Pages/ReportsCertificate/ProblemReporting"
import InvestigationCoa from "./Pages/ReportsCertificate/InvestigationCoa"
import ReleasedCoa from "./Pages/ReportsCertificate/ReleasedCoa"
import Coa_Template from "./Pages/ReportsCertificate/Coa_Template"
import ServiceReporting from "./Pages/ReportsCertificate/ServiceReporting"

import Vender from "./Pages/Vender/Vender.jsx"
import Clients from "./Pages/Clientss/Clients.jsx"

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
            <Route path="/investigationl2" element={<InvestigationL2/>}/>
            
            <Route path="/storageCondition1321" element={<Storage_Condition />} />
            <Route path="/standardProtocol" element={< StandardProtocol/>} />
            <Route path="/storageChamber" element={< StorageChamber/>} />
            <Route path="/chamberConditionMapping" element={< ChamberConditionMapping/>} />
            <Route path="/chamberTransfer" element={< ChamberTransfer/>} />
            <Route path="/stabilityProtocol" element={< StabilityProtocol  />} />
            <Route path="/sampleStorage" element={< SampleStorage />} />
            <Route path="/coaTemplate" element={< CoaTemplate />} />
            <Route path="/sampleLogintemplate" element={<SampleLoginTemplate />} />
            <Route path="/worksheetHeader" element={< WorkSheetHeader/>} />
            <Route path="/summaryReportHeader" element={< SummaryReportHeader />} />
            <Route path="/sampleAcceptanceTemplate" element={< SampleAcceptanceTemplate/>} />
            <Route path="/sampleLogin1321" element={< Sample_Login />} />
            <Route path="/sampleAcceptance" element={< SampleAcceptance />} />

            <Route path="/Masters/Product" element={<Product/>} />
            <Route path="/Masters/SampleType" element={<SampleType/>} />
            <Route path="/Masters/SpecificationType" element={<SpecificationType/>} />
            <Route path="/Masters/Specifications" element={<Specifications/>} />
            <Route path="/Masters/TestCategories" element={<TestCategories/>} />
            <Route path="/Masters/TestRegistrations" element={<TestRegistrations/>} />
            <Route path="/Masters/TestPlan" element={<TestPlan/>} />
            <Route path="/Masters/MyTests" element={<MyTests/>}/> 
            <Route path="/masters/product-details" element={<MasterProductDetail/>}/> 

            
            <Route path="/sampling/samplingConfiguration" element={<SamplingConfiguration />} /> 
            <Route path="/sampling/samplingRule" element={< SamplingRule />} />
            <Route path="/sampling/eSamping" element={< ESampling />} />
            <Route path="/sampling/samplingField" element={< SamplingField />} />
            <Route path="/sampling/samplingTemplate" element={<SamplingTemplate />} />

            <Route path="/Inventory/Inventory" element={<Inventory />} />
            <Route path="/Inventory/WorkingStandard" element={<InternalRegistration />}/>
            <Route path="/Inventory/InternalRegistration" element={<InternalRegistration />}/>
            <Route path="/Inventory/WorkingStandardUsage" element={<WorkingStandardUsage />}/>
            <Route path="/Inventory/WorkingStandardIssue" element={<WorkingStandardIssue />}/>
            <Route path="/Inventory/VolumeSolutions" element={<VolumeSolutions />}/>
            <Route path="Inventory/SolutionTemplate" element={<SolutionTemplate/>}/>
            <Route path="Inventory/SolutionPrepration" element={<SolutionPrepration/>}/>
            <Route path="Inventory/SolutionStandardization" element={<SolutionStandardization/>}/>
            <Route path="Inventory/SolutionUsage"element={<SolutionUsage/>}/>
            <Route path="/Inventory/Columns" element={<Columns />} />
            <Route path="/Inventory/ReferenceStandards"  element={<ReferenceStandards />}/>
            {/* <Route path="/Inventory/CultureManagement" element={<CultureManagement />}/> */}
            <Route path="/Inventory/ReferenceStandards" element={<ReferenceStandards />} />
            <Route path="/Inventory/Media" element={<Media />} />
            <Route path="/Inventory/WaterManagement" element={<WaterManagement />}/>
            <Route path="/Inventory/Environment" element={<Environment />} />
            <Route path="Inventory/ChemicalRegistration" element={<ChemicalRegistration />} />
            <Route path="Inventory/ChemicalReagent" element={<ChemicalReagent />} />
            <Route path="Inventory/LotRegistration" element={<LotRegistration />} />
            <Route path="Inventory/ChemicalReagentReports" element={<ChemicalReagentReports />} />
            <Route path="Inventory/ChemicalUsage" element={<ChemicalUsage />} />
            <Route path="Inventory/ChemicalIssues" element={<ChemicalIssues />} />
            <Route path="Inventory/ColumnApplication" element={<ColumnApplication />} />
            <Route path="Inventory/ColumnRegistration" element={<ColumnRegistration />} />
            <Route path="Inventory/PerformanceTest" element={<PerformanceTest />} />
            <Route path="Inventory/Assignment" element={<Assignment />} />
            <Route path="Inventory/Qualification" element={<Qualification />} />
            <Route path="Inventory/ColumnUsage" element={<ColumnUsage />} />
            <Route path="Inventory/BatchAssignment" element={<BatchAssignment />} />
            <Route path="Inventory/StandardRegistration" element={<StandardRegistration />} />
            <Route path="Inventory/InvLotRegistration" element={<InvLotRegistration />} />
            <Route path="Inventory/UsageRegistration" element={<UsageRegistration />} />
            <Route path="Inventory/CultureRegistration" element={<CultureRegistration />} />
            <Route path="Inventory/RefrenceCulture" element={<RefrenceCulture />} />
            <Route path="Inventory/CultureTemplateConfiguration" element={<CultureTemplateConfiguration />} />
            <Route path="Inventory/RefrenceCultureLot" element={<RefrenceCultureLot />} />
            <Route path="Inventory/CultureLotAcceptance" element={<CultureLotAcceptance />} />
            <Route path="Inventory/MediaOnboarding" element={<MediaOnboarding />} />
            <Route path="Inventory/MediaContainerType" element={<MediaContainerType />} />
            <Route path="Inventory/MediaTemplateConfiguration" element={<MediaTemplateConfiguration />} />
            <Route path="Inventory/MediaLot" element={<MediaLot />} />
            <Route path="Inventory/MediaLotContainerIssue" element={<MediaLotContainerIssue />} />
            <Route path="Inventory/MediaLotAcceptance" element={<MediaLotAcceptance />} />
            <Route path="Inventory/MediaLotUsage" element={<MediaLotUsage />} />
            <Route path="Inventory/SampleArea" element={<SampleArea />} />
            <Route path="Inventory/ProcessingSystem" element={<ProcessingSystem />} />
            <Route path="Inventory/Schedule" element={<Schedule />} />
            <Route path="Inventory/Unschedule" element={<Unschedule />} />
            <Route path="Inventory/Acknowledgement" element={<Acknowledgement />} />
            <Route path="Inventory/ScheduleTermination" element={<ScheduleTermination />} />
            <Route path="Inventory/Facility" element={<Facility />} />
            <Route path="Inventory/Location" element={<Location />} />
            <Route path="Inventory/EMMoniteringDetails" element={<EMMoniteringDetails />} />
            <Route path="Inventory/EMCOATemplate" element={<EMCOATemplate />} />
            <Route path="Inventory/OOATemplate" element={<OOATemplate />} />
            <Route path="Inventory/LocationSamples" element={<LocationSamples />} />
            <Route path="Inventory/SamplingSchedule" element={<SamplingSchedule/>}/>
            <Route path="Inventory/BatchSample" element={<BatchSample/>}/>
            <Route path="Inventory/SampleLogin" element={<SampleLogin/>}/>
            <Route path="Inventory/AcknowledgeSample" element={<AcknowledgeSample/>}/>
            <Route path="Inventory/BatchSampleAllotment" element={<BatchSampleAllotment/>}/>
            <Route path="Inventory/BatchTestslist" element={<BatchTestslist/>}/>
            

            <Route path="/instrumentMaster/registration" element={<Registration />} />
            <Route path="/instrumentMaster/instrumentCategory" element={<InstrumentCategory />} />
            <Route path="/instrumentMaster/instrumentModule" element={<InstrumentModule />} />
            <Route path="/instrumentMaster/instrumentUsage" element={<InstrumentUsage />} /> 

            <Route path="/stock-management/stocks-verification" element={< StocksVerification/>} />
            <Route path="/stock-management/stocks-onboarding" element={<StocksOnboarding/>} />
            <Route path="/stock-management/material" element={<Material/>} />
            {/* <Route path="/stock-management/inventory" element={<Inventory/>}/>            */}
            <Route path="/stock-management/inventory" element={<StockInventory/>}/>
             <Route path="/stock-management/stock-inventory-details" element={<StockInventoryDetail/>}/> 
             <Route path="/stock-management/stock-material-details" element={<StockMaterialDetail/>}/> 
             <Route path="/stock-management/stock-onboarding-details" element={<StockOnboardingDetails/>}/> 
                       

            <Route path="/reportsCertification/problemReporting" element={< ProblemReporting/>} />
            <Route path="/reportsCertification/serviceReporting" element={<ServiceReporting />} />
            <Route path="/reportsCertification/coaTemplate1321" element={< Coa_Template/>} />
            <Route path="/reportsCertification/releasedCoa" element={<ReleasedCoa />} />
            <Route path="/reportsCertification/investigationCoa" element={<InvestigationCoa />} />
          
            <Route path="/vender" element={<Vender/>} />
            <Route path="/clients" element={<Clients/>} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App

