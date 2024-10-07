import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import "@coreui/coreui/dist/css/coreui.min.css";
import Dashboard from "./Pages/Dashboard/Dashboard.jsx";
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
import SampleLoginDetails from "./Pages/Samplelogin/SampleloginView/SampleLoginDetails.jsx";
import TestResultsDetails from "./Pages/Samplelogin/SampleloginView/TestResultsDetails.jsx";
import InvestigationL1 from "./Pages/Samplelogin/InvestigationL1";
import InvestigationL2 from "./Pages/Samplelogin/InvestigationL2";
import SamplePlanning from "./Pages/Samplelogin/SamplePlanning.jsx";

import Storage_Condition from "./Pages/Stability/Storage_Condition";
import ChamberConditionMapping from "./Pages/Stability/ChamberConditionMapping";
// import ChamberTransfer from "./Pages/Stability/ChamberTransfer";
import CoaTemplate from "./Pages/Stability/CoaTemplate";
import StorageChamber from "./Pages/Stability/StorageChamber";
import StandardProtocol from "./Pages/Stability/StandardProtocol";
import StabilityProtocol from "./Pages/Stability/StabilityProtocol";
import SampleStorage from "./Pages/Stability/SampleStorage";
import StabilitySampleLogin from "./Pages/Stability/StabilitySampleLogin.jsx";
import SampleAcceptance from "./Pages/Stability/SampleAcceptance";
import SampleAcceptanceTemplate from "./Pages/Stability/SampleAcceptanceTemplate";
import SampleLoginTemplate from "./Pages/Stability/SampleLoginTemplate";
import SummaryReportHeader from "./Pages/Stability/SummaryReportHeader";
import WorkSheetHeader from "./Pages/Stability/WorkSheetHeader";

import SampleLoginTemplateDetails from "./Pages/Stability/StabilityDetails/SampleLoginTemplateDetails.jsx";
import WorksheetHeaderDetails from "./Pages/Stability/StabilityDetails/WorksheetHeaderDetails.jsx";
import SummaryReportHeaderDetails from "./Pages/Stability/StabilityDetails/SummaryReportHeaderDetails.jsx";
import Sample_LoginDetails from "./Pages/Stability/StabilityDetails/Sample_LoginDetails.jsx";
import StorageChamberDetails from "./Pages/Stability/StabilityDetails/StorageChamberDetails.jsx";
import StabilityProtocolDetails from "./Pages/Stability/StabilityDetails/StabilityProtocolDetails.jsx";
import SampleStorageDetails from "./Pages/Stability/StabilityDetails/SampleStorageDetails.jsx";
import CoaTemplateDetails from "./Pages/Stability/StabilityDetails/CoaTemplateDetails.jsx";

import SamplingConfiguration from "./Pages/Sampling/SamplingConfiguration";
import SamplingRule from "./Pages/Sampling/SamplingRule";
import ESampling from "./Pages/Sampling/ESampling";
import SamplingField from "./Pages/Sampling/SamplingField";
import SamplingTemplate from "./Pages/Sampling/SamplingTemplate";

import Product from "./Pages/Masters/Product";
import SampleType from "./Pages/Masters/SampleType";
import SpecificationType from "./Pages/Masters/SpecificationType";
import SpecificationsTestProcedure from "./Pages/Masters/SpecificationsTestProcedure.jsx";
import Specifications from "./Pages/Masters/Specifications";
import TestCategories from "./Pages/Masters/TestCategories";
import TestRegistrations from "./Pages/Masters/TestRegistrations";
import TestPlan from "./Pages/Masters/TestPlan";
import MyTests from "./Pages/Masters/MyTests";

import Registration from "./Pages/Instruments Master/Registration";
import InstrumentCategory from "./Pages/Instruments Master/InstrumentCategory";
import InstrumentModule from "./Pages/Instruments Master/InstrumentModule";
import InstrumentUsage from "./Pages/Instruments Master/InstrumentUsage";
import MasterProductDetail from "./Pages/Masters/MasterProductDetail.jsx";

import RegistrationDetails from "./Pages/Instruments Master/InstrumentMasterDetails/RegistrationDetails.jsx";
import InstrumentModuleDetails from "./Pages/Instruments Master/InstrumentMasterDetails/InstrumentModuleDetails.jsx";

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
import ChemicalRegistration from "./Pages/Inventory/ChemicalRegistration.jsx";
import ChemicalReagent from "./Pages/Inventory/ChemicalReagent.jsx";
import LotRegistration from "./Pages/Inventory/LotRegistration.jsx";
import ChemicalReagentReports from "./Pages/Inventory/ChemicalReagentReports.jsx";
import ChemicalUsage from "./Pages/Inventory/ChemicalUsage.jsx";
import ChemicalIssues from "./Pages/Inventory/ChemicalIssues.jsx";
import ColumnApplication from "./Pages/Inventory/ColumnApplication.jsx";
import ColumnRegistration from "./Pages/Inventory/ColumnRegistration.jsx";
import PerformanceTest from "./Pages/Inventory/PerformanceTest.jsx";
import Assignment from "./Pages/Inventory/Assignment.jsx";
import Qualification from "./Pages/Inventory/Qualification.jsx";
import ColumnUsage from "./Pages/Inventory/ColumnUsage.jsx";
import BatchAssignment from "./Pages/Inventory/BatchAssignment.jsx";
import StandardRegistration from "./Pages/Inventory/StandardRegistration.jsx";
import InvLotRegistration from "./Pages/Inventory/InvLotRegistration.jsx";
import UsageRegistration from "./Pages/Inventory/UsageRegistration.jsx";
import CultureRegistration from "./Pages/Inventory/CultureRegistration.jsx";
import RefrenceCulture from "./Pages/Inventory/RefrenceCulture.jsx";
import CultureTemplateConfiguration from "./Pages/Inventory/CultureTemplateConfiguration.jsx";
import RefrenceCultureLot from "./Pages/Inventory/RefrenceCultureLot.jsx";
import CultureLotAcceptance from "./Pages/Inventory/CultureLotAcceptance.jsx";
import MediaOnboarding from "./Pages/Inventory/MediaOnboarding.jsx";
import MediaContainerType from "./Pages/Inventory/MediaContainerType.jsx";
import MediaTemplateConfiguration from "./Pages/Inventory/MediaTemplateConfiguration.jsx";
import MediaLot from "./Pages/Inventory/MediaLot.jsx";
import MediaLotContainerIssue from "./Pages/Inventory/MediaLotContainerIssue.jsx";
import MediaLotAcceptance from "./Pages/Inventory/MediaLotAcceptance.jsx";
import MediaLotUsage from "./Pages/Inventory/MediaLotUsage.jsx";
import SampleArea from "./Pages/Inventory/SampleArea.jsx";
import ProcessingSystem from "./Pages/Inventory/ProcessingSystem.jsx";
import Schedule from "./Pages/Inventory/Schedule.jsx";
import Unschedule from "./Pages/Inventory/Unschedule.jsx";
import Acknowledgement from "./Pages/Inventory/Acknowledgement.jsx";
import ScheduleTermination from "./Pages/Inventory/ScheduleTermination.jsx";
import Facility from "./Pages/Inventory/Facility.jsx";
import Location from "./Pages/Inventory/Location.jsx";
import EMMoniteringDetails from "./Pages/Inventory/EMMoniteringDetails.jsx";
import EMCOATemplate from "./Pages/Inventory/EMCOATemplate.jsx";
import OOATemplate from "./Pages/Inventory/OOATemplate.jsx";
import LocationSamples from "./Pages/Inventory/LocationSamples.jsx";
import SamplingSchedule from "./Pages/Inventory/SamplingSchedule.jsx";
import BatchSample from "./Pages/Inventory/BatchSample.jsx";
import SampleLogin from "./Pages/Inventory/SampleLogin.jsx";
import AcknowledgeSample from "./Pages/Inventory/AcknowledgeSample.jsx";
import BatchSampleAllotment from "./Pages/Inventory/BatchSampleAllotment.jsx";
import BatchTestslist from "./Pages/Inventory/BatchTestslist.jsx";

import StocksVerification from "./Pages/Stock Management/StocksVerification";
import StocksOnboarding from "./Pages/Stock Management/StocksOnboarding";
import Material from "./Pages/Stock Management/Material";
// import Inventory from "./Pages/Stock Management/Inventory"
import StockInventory from "./Pages/Stock Management/StockInventory.jsx";
import StockInventoryDetail from "./Pages/Stock Management/StockInventoryDetail.jsx";
import StockMaterialDetail from "./Pages/Stock Management/StockMaterialDetail.jsx";
import StockOnboardingDetails from "./Pages/Stock Management/StockOnboardingDetails.jsx";

import Part from "./Pages/Calibration/Part.jsx";
import CalibrationType from "./Pages/Calibration/CalibrationType.jsx";
import CalibrationFrequency from "./Pages/Calibration/CalibrationFrequency.jsx";
import CalibrationDataSheet from "./Pages/Calibration/CalibrationDataSheet.jsx";
import CalibrationSampleLoginTemplate from "./Pages/Calibration/CalibrationSampleLoginTemplate.jsx";
import CalibrationSchedule from "./Pages/Calibration/CalibrationSchedule.jsx";
import CalibrationRecord from "./Pages/Calibration/CalibrationRecord.jsx";
import CalibrationSampleLogin from "./Pages/Calibration/CalibrationSampleLogin.jsx";
import CalibrationCalender from "./Pages/Calibration/CalibrationCalender.jsx";

import CalibrationDataSheetDetails from "./Pages/Calibration/Calibration Details/CalibrationDataSheetDetails.jsx";
import CalibrationSampleLoginTemplateDetails from "./Pages/Calibration/Calibration Details/CalibrationSampleLoginTemplateDetails.jsx";
import CalibrationScheduleDetails from "./Pages/Calibration/Calibration Details/CalibrationScheduleDetails.jsx";
import CalibrationSampleLoginDetails from "./Pages/Calibration/Calibration Details/CalibrationSampleLoginDetails.jsx";

import ProblemReporting from "./Pages/ReportsCertificate/ProblemReporting.jsx";
import InvestigationCoa from "./Pages/ReportsCertificate/InvestigationCoa";
import ReleasedCoa from "./Pages/ReportsCertificate/ReleasedCoa";
import Coa_Template from "./Pages/ReportsCertificate/Coa_Template";
import ServiceReporting from "./Pages/ReportsCertificate/ServiceReporting";

import ProblemReportingDetails from "./Pages/ReportsCertificate/ReportsCertificateDetails/ProblemReportingDetails.jsx";
import ServiceReportingdetails from "./Pages/ReportsCertificate/ReportsCertificateDetails/ServiceReportingdetails.jsx";
import Coa_TemplateDetails from "./Pages/ReportsCertificate/ReportsCertificateDetails/Coa_TemplateDetails.jsx";

import Vendors from "./Pages/Vendors/Vendors.jsx";
import Clients from "./Pages/Clientss/Clients.jsx";
import Plants from "./Pages/Plants/Plants.jsx";
import WorkFlow from "./Pages/WorkFlow/WorkFlow.jsx";
import AuditTrail from "./Pages/AuditTrail/AuditTrail.jsx";

import VendorDetails from "./Pages/Vendors/VendorDetails.jsx";
import ClientsDetails from "./Pages/Clientss/ClientsDetail.jsx";

import BussinessAssociate from "./Pages/Settings/BussinessAssociate.jsx";
import BussinessAssociateDetails from "./Pages/Settings/BussinessAssociateDetails.jsx";
import LabelManagement from "./Pages/Settings/LabelManagement.jsx";
import FuctionalGrouping from "./Pages/Settings/FuctionalGrouping.jsx";
import WorkSheelField from "./Pages/Settings/WorkSheelField.jsx";
import WorkSheet from "./Pages/Settings/WorkSheet.jsx";
import GroupName from "./Pages/Settings/GroupName.jsx";
import InvestigationTamplate from "./Pages/Settings/InvestigationTamplate.jsx";
import ChemicalCategory from "./Pages/Settings/ChemicalCategory.jsx";
import Grade from "./Pages/Settings/Grade.jsx";
import HandlingSymbol from "./Pages/Settings/HandlingSymbol.jsx";
import AccessRight from "./Pages/Settings/AccessRight.jsx";
import Projects from "./Pages/Settings/Projects.jsx";
import Template from "./Pages/Settings/Template.jsx";
import TrainingConfirmation from "./Pages/Settings/TrainingConfirmation.jsx";
import Proposal from "./Pages/Settings/Proposal.jsx";
import Nominations from "./Pages/Settings/Nominations.jsx";
import ReQualificationRequest from "./Pages/Settings/ReQualificationRequest.jsx";
import Resources from "./Pages/Settings/Resources.jsx";
import TypeOfSection from "./Pages/Settings/TypeOfSection.jsx";
import WOSTest from "./Pages/Settings/WOSTest.jsx";
import ServiceProvider from "./Pages/Settings/ServiceProvider.jsx";
import ExternalRegistration from "./Pages/Settings/ExternalRegistration.jsx";
import TestTechniques from "./Pages/Settings/TestTechniques.jsx";
import InstrumentRegistration from "./Pages/Settings/InstrumentRegistration.jsx";
import SettingStability from "./Pages/Settings/SettingStability.jsx";
import TestHistory from "./Pages/Settings/TestHistory.jsx";
import SettingVendors from "./Pages/Settings/SettingVendors.jsx";
import AppConfiguration from "./Pages/Settings/AppConfiguration.jsx";
import ControlSample from "./Pages/Control Sample/ControlSample.jsx";
import SpecificationSpec from "./Pages/SpecificationSpec.jsx";

import AdminPanel from "./components/AdminPanel/AdminPanel.jsx";
import AdminMainPanel from "./components/AdminPanel/AdminMainPanel.jsx";
import UserMgnt from "./components/AdminPanel/User Management/UserMgnt.jsx";
import SiteManagement from "./components/AdminPanel/Site-Management/SiteManagement.jsx";
import ProcessManagement from "./components/AdminPanel/Process-Management/ProcessManagement.jsx";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AnalystPersonal from "./Pages/AnalystPersonal.jsx";
// import StabilityProtocolDetails from './Pages/Stability/StabilityProtocol.jsx'
// import SampleStorageDetails from './Pages/Stability/SampleStorage.jsx'
// import CoaTemplateDetails from './Pages/Stability/CoaTemplate.jsx'

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
            <Route path="/analyst-personal" element={<AnalystPersonal />} />
            <Route path="/stCondition" element={<StorageCondition />} />
            <Route path="/control-sample" element={<ControlSample />} />
            <Route path="/specificationSpec" element={<SpecificationSpec />} />

            <Route path="/department" element={<Department />} />
            <Route path="/department/admin" element={<Admin />} />
            <Route
              path="/department/qualityAssurance"
              element={<QualityAssurance />}
            />
            <Route path="/department/qualityCheck" element={<QualityCheck />} />
            <Route path="/department/store" element={<Store />} />
            <Route path="/users" element={<Users />} />
            <Route path="/roles" element={<Roles />} />

            <Route path="/samplelogin" element={<Samplelogin />} />
            <Route path="/viewDetails" element={<SampleLoginDetails />} />
            <Route
              path="/testResultsDetails"
              element={<TestResultsDetails />}
            />
            <Route path="/investigationl1" element={<InvestigationL1 />} />
            <Route path="/investigationl2" element={<InvestigationL2 />} />
            <Route path="/sample-planning" element={<SamplePlanning />} />

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
            {/* <Route path="/chamberTransfer" element={<ChamberTransfer />} /> */}
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
            <Route path="/sampleLogin1321" element={<StabilitySampleLogin />} />
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
              path="/Masters/SpecificationsTestProcedure"
              element={<SpecificationsTestProcedure />}
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
            <Route
              path="/masters/product-details"
              element={<MasterProductDetail />}
            />

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
            <Route
              path="Inventory/SolutionTemplate"
              element={<SolutionTemplate />}
            />
            <Route
              path="Inventory/SolutionPrepration"
              element={<SolutionPrepration />}
            />
            <Route
              path="Inventory/SolutionStandardization"
              element={<SolutionStandardization />}
            />
            <Route path="Inventory/SolutionUsage" element={<SolutionUsage />} />

            {/* *******************BLANK******************************** */}
            <Route path="/Inventory/Columns" element={<Columns />} />
            <Route
              path="/Inventory/ReferenceStandards"
              element={<ReferenceStandards />}
            />
            {/* <Route path="/Inventory/CultureManagement" element={<CultureManagement />}/> */}
            <Route
              path="/Inventory/ReferenceStandards"
              element={<ReferenceStandards />}
            />
            <Route path="/Inventory/Media" element={<Media />} />

            <Route
              path="/Inventory/WaterManagement"
              element={<WaterManagement />}
            />

            <Route path="/Inventory/Environment" element={<Environment />} />
            {/* *******************BLANK******************************** */}

            <Route
              path="Inventory/ChemicalRegistration"
              element={<ChemicalRegistration />}
            />
            <Route
              path="Inventory/ChemicalReagent"
              element={<ChemicalReagent />}
            />
            <Route
              path="Inventory/LotRegistration"
              element={<LotRegistration />}
            />
            <Route
              path="Inventory/ChemicalReagentReports"
              element={<ChemicalReagentReports />}
            />
            <Route path="Inventory/ChemicalUsage" element={<ChemicalUsage />} />
            <Route
              path="Inventory/ChemicalIssues"
              element={<ChemicalIssues />}
            />
            <Route
              path="Inventory/ColumnApplication"
              element={<ColumnApplication />}
            />
            <Route
              path="Inventory/ColumnRegistration"
              element={<ColumnRegistration />}
            />
            <Route
              path="Inventory/PerformanceTest"
              element={<PerformanceTest />}
            />
            <Route path="Inventory/Assignment" element={<Assignment />} />
            <Route path="Inventory/Qualification" element={<Qualification />} />
            <Route path="Inventory/ColumnUsage" element={<ColumnUsage />} />
            <Route
              path="Inventory/BatchAssignment"
              element={<BatchAssignment />}
            />
            <Route
              path="Inventory/StandardRegistration"
              element={<StandardRegistration />}
            />
            <Route
              path="Inventory/InvLotRegistration"
              element={<InvLotRegistration />}
            />
            <Route
              path="Inventory/UsageRegistration"
              element={<UsageRegistration />}
            />
            <Route
              path="Inventory/CultureRegistration"
              element={<CultureRegistration />}
            />
            <Route
              path="Inventory/RefrenceCulture"
              element={<RefrenceCulture />}
            />
            <Route
              path="Inventory/CultureTemplateConfiguration"
              element={<CultureTemplateConfiguration />}
            />
            <Route
              path="Inventory/RefrenceCultureLot"
              element={<RefrenceCultureLot />}
            />
            <Route
              path="Inventory/CultureLotAcceptance"
              element={<CultureLotAcceptance />}
            />
            <Route
              path="Inventory/MediaOnboarding"
              element={<MediaOnboarding />}
            />
            <Route
              path="Inventory/MediaContainerType"
              element={<MediaContainerType />}
            />
            <Route
              path="Inventory/MediaTemplateConfiguration"
              element={<MediaTemplateConfiguration />}
            />
            <Route path="Inventory/MediaLot" element={<MediaLot />} />
            <Route
              path="Inventory/MediaLotContainerIssue"
              element={<MediaLotContainerIssue />}
            />
            <Route
              path="Inventory/MediaLotAcceptance"
              element={<MediaLotAcceptance />}
            />
            <Route path="Inventory/MediaLotUsage" element={<MediaLotUsage />} />
            <Route path="Inventory/SampleArea" element={<SampleArea />} />
            <Route
              path="Inventory/ProcessingSystem"
              element={<ProcessingSystem />}
            />
            <Route path="Inventory/Schedule" element={<Schedule />} />
            <Route path="Inventory/Unschedule" element={<Unschedule />} />
            <Route
              path="Inventory/Acknowledgement"
              element={<Acknowledgement />}
            />
            <Route
              path="Inventory/ScheduleTermination"
              element={<ScheduleTermination />}
            />
            <Route path="Inventory/Facility" element={<Facility />} />
            <Route path="Inventory/Location" element={<Location />} />
            <Route
              path="Inventory/EMMoniteringDetails"
              element={<EMMoniteringDetails />}
            />
            <Route path="Inventory/EMCOATemplate" element={<EMCOATemplate />} />
            <Route path="Inventory/OOATemplate" element={<OOATemplate />} />
            <Route
              path="Inventory/LocationSamples"
              element={<LocationSamples />}
            />
            <Route
              path="Inventory/SamplingSchedule"
              element={<SamplingSchedule />}
            />
            <Route path="Inventory/BatchSample" element={<BatchSample />} />
            <Route path="Inventory/SampleLogin" element={<SampleLogin />} />
            <Route
              path="Inventory/AcknowledgeSample"
              element={<AcknowledgeSample />}
            />
            <Route
              path="Inventory/BatchSampleAllotment"
              element={<BatchSampleAllotment />}
            />
            <Route
              path="Inventory/BatchTestslist"
              element={<BatchTestslist />}
            />

            <Route
              path="/instrumentMaster/registration"
              element={<Registration />}
            />
            <Route
              path="/instrumentMaster/instrumentCategory"
              element={<InstrumentCategory />}
            />
            <Route
              path="/instrumentMaster/instrumentModule"
              element={<InstrumentModule />}
            />
            <Route
              path="/instrumentMaster/instrumentUsage"
              element={<InstrumentUsage />}
            />

            <Route
              path="/instrumentMaster/registrationDetails"
              element={<RegistrationDetails />}
            />
            <Route
              path="/instrumentMaster/instrumentModuleDetails"
              element={<InstrumentModuleDetails />}
            />

            <Route
              path="/stock-management/stocks-verification"
              element={<StocksVerification />}
            />
            <Route
              path="/stock-management/stocks-onboarding"
              element={<StocksOnboarding />}
            />
            <Route path="/stock-management/material" element={<Material />} />
            <Route
              path="/stock-management/inventory"
              element={<StockInventory />}
            />
            <Route
              path="/stock-management/stock-inventory-details"
              element={<StockInventoryDetail />}
            />
            <Route
              path="/stock-management/stock-material-details"
              element={<StockMaterialDetail />}
            />
            <Route
              path="/stock-management/stock-onboarding-details"
              element={<StockOnboardingDetails />}
            />

            <Route path="/calibration/Part" element={<Part />} />
            <Route
              path="/calibration/calibration-type"
              element={<CalibrationType />}
            />
            <Route
              path="/calibration/calibration-frequency"
              element={<CalibrationFrequency />}
            />
            <Route
              path="/calibration/calibration-data-sheet"
              element={<CalibrationDataSheet />}
            />
            <Route
              path="/calibration/sample-login-template"
              element={<CalibrationSampleLoginTemplate />}
            />
            <Route
              path="/calibration/calibration-schedule"
              element={<CalibrationSchedule />}
            />
            <Route
              path="/calibration/calibration-record"
              element={<CalibrationRecord />}
            />
            <Route
              path="/calibration/sample-login"
              element={<CalibrationSampleLogin />}
            />
            <Route
              path="/calibration/calibration-calender"
              element={<CalibrationCalender />}
            />

            <Route
              path="/calibration/calibration-datasheet-details"
              element={<CalibrationDataSheetDetails />}
            />
            <Route
              path="/calibration/sample-login-template-details"
              element={<CalibrationSampleLoginTemplateDetails />}
            />
            <Route
              path="/calibration/calibration-schedule-details"
              element={<CalibrationScheduleDetails />}
            />
            <Route
              path="/calibration/calibration-sample-login-details"
              element={<CalibrationSampleLoginDetails />}
            />

            <Route
              path="/reportsCertification/problemReporting"
              element={<ProblemReporting />}
            />
            <Route
              path="/reportsCertification/serviceReporting"
              element={<ServiceReporting />}
            />
            <Route
              path="/reportsCertification/coaTemplate1321"
              element={<Coa_Template />}
            />
            <Route
              path="/reportsCertification/releasedCoa"
              element={<ReleasedCoa />}
            />
            <Route
              path="/reportsCertification/investigationCoa"
              element={<InvestigationCoa />}
            />

            <Route
              path="/reportsCertificate/problemReportingDetails"
              element={<ProblemReportingDetails />}
            />
            <Route
              path="/reportsCertificate/ServiceReportingDetails"
              element={<ServiceReportingdetails />}
            />
            <Route
              path="/reportsCertificate/coa_TemplateDetails"
              element={<Coa_TemplateDetails />}
            />

            <Route path="/clients" element={<Clients />} />
            <Route path="/plants" element={<Plants />} />
            <Route path="/workFlow" element={<WorkFlow />} />
            <Route path="/auditTrail" element={<AuditTrail />} />
            <Route path="/vender" element={<Vendors />} />

            <Route path="/vendors/vendor-details" element={<VendorDetails />} />
            <Route
              path="/clientss/clients-details"
              element={<ClientsDetails />}
            />

            <Route
              path="/settings/businessAssociate"
              element={<BussinessAssociate />}
            />
            <Route
              path="/settings/bussinessAssociateDetails"
              element={<BussinessAssociateDetails />}
            />
            <Route
              path="/settings/labelManagement"
              element={<LabelManagement />}
            />
            <Route
              path="/settings/functionalGrouping"
              element={<FuctionalGrouping />}
            />
            <Route
              path="/settings/worksheetFields"
              element={<WorkSheelField />}
            />
            <Route path="/settings/worksheets" element={<WorkSheet />} />
            <Route path="/settings/groupName" element={<GroupName />} />
            <Route
              path="/settings/investigationTemplate"
              element={<InvestigationTamplate />}
            />
            <Route
              path="/settings/chemicalCategory"
              element={<ChemicalCategory />}
            />
            <Route path="/settings/grade" element={<Grade />} />
            <Route
              path="/settings/handlingSymbol"
              element={<HandlingSymbol />}
            />
            <Route path="/settings/accessRight" element={<AccessRight />} />
            <Route path="/settings/projects" element={<Projects />} />
            <Route path="/settings/template" element={<Template />} />
            <Route
              path="/settings/trainingConfirmation"
              element={<TrainingConfirmation />}
            />
            <Route path="/settings/proposal" element={<Proposal />} />
            <Route path="/settings/nominations" element={<Nominations />} />
            <Route
              path="/settings/reQualificationRequest"
              element={<ReQualificationRequest />}
            />
            <Route path="/settings/resources" element={<Resources />} />
            <Route path="/settings/typeOfSection" element={<TypeOfSection />} />
            <Route path="/settings/wosTest" element={<WOSTest />} />
            <Route
              path="/settings/serviceProvider"
              element={<ServiceProvider />}
            />
            <Route
              path="/settings/externalregistration"
              element={<ExternalRegistration />}
            />
            <Route
              path="/settings/testTechniques"
              element={<TestTechniques />}
            />
            <Route
              path="/settings/instrumentRegistration"
              element={<InstrumentRegistration />}
            />
            <Route path="/settings/stability" element={<SettingStability />} />
            <Route path="/settings/testHistory" element={<TestHistory />} />
            <Route
              path="/settings/settingVendors"
              element={<SettingVendors />}
            />
            <Route
              path="/settings/appConfiguration"
              element={<AppConfiguration />}
            />

            <Route
              path="/stability/storageChamberDetails"
              element={<StorageChamberDetails />}
            />
            <Route
              path="/stability/stabilityProtocolDetails"
              element={<StabilityProtocolDetails />}
            />
            <Route
              path="/stability/sampleStorageDetails"
              element={<SampleStorageDetails />}
            />
            <Route
              path="/stability/CoaTemplateDetails"
              element={<CoaTemplateDetails />}
            />

            <Route
              path="/stability/sampleLoginTemplateDetails"
              element={<SampleLoginTemplateDetails />}
            />
            <Route
              path="/stability/worksheetHeaderDetails"
              element={<WorksheetHeaderDetails />}
            />
            <Route
              path="/stability/SummaryReportHeaderDetails"
              element={<SummaryReportHeaderDetails />}
            />
            <Route
              path="/stability/sample_LoginDetails"
              element={<Sample_LoginDetails />}
            />
          </Route>

          <Route
            path="/admin-login"
            element={<AdminPanel show={checkLoggedIn} />}
          />
          <Route path="" element={<AdminMainPanel />}>
            <Route
              path="/admin-login/userManagement"
              element={<UserMgnt setToast={checkLoggedIn} show={isLoggedIn} />}
            />
            <Route
              path="/admin-login/site-management"
              element={<SiteManagement />}
            />
            <Route
              path="/admin-login/process-management"
              element={<ProcessManagement />}
            />
          </Route>
        
        </Routes>
        <ToastContainer />
      </BrowserRouter>
      
    </>
  );
}

export default App;
