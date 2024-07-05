import {
  // cilSpeedometer,
  cibStatuspage,
  // cilResizeBoth,
  cilWarning,
  cilColumns,
} from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import React from "react";
import { TfiDashboard } from "react-icons/tfi";
import { MdOutlineVerified } from "react-icons/md";
import { AiOutlineContainer } from "react-icons/ai";
import { TbCurrentLocation } from "react-icons/tb";
import { FaUsers } from "react-icons/fa6";
import { RiLoginCircleLine } from "react-icons/ri";
import { MdManageHistory } from "react-icons/md";
import { HiArrowsUpDown } from "react-icons/hi2";
import { LuListTodo } from "react-icons/lu";
import { MdOutlineInventory2 } from "react-icons/md";
import { CiPillsBottle1 } from "react-icons/ci";
import { LuWarehouse } from "react-icons/lu";
import { MdOutlineCompassCalibration } from "react-icons/md";
import { GrCertificate } from "react-icons/gr";
import { CiShop } from "react-icons/ci";
import { FaPeopleLine } from "react-icons/fa6";
import { PiNuclearPlant } from "react-icons/pi";
import { GoWorkflow } from "react-icons/go";
import { AiOutlineAudit } from "react-icons/ai";
import { MdSettingsApplications } from "react-icons/md";
import { FaPerson } from "react-icons/fa6";
import { FaPeopleRoof } from "react-icons/fa6";
import { TfiLayoutMediaOverlay } from "react-icons/tfi";
import { FaWater } from "react-icons/fa6";
import { VscServerEnvironment } from "react-icons/vsc";
import { FaNetworkWired } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

import "./Sidebar.css";

import {CNavGroup,CNavItem,CSidebar,CSidebarBrand,CSidebarHeader,CSidebarNav,
} from "@coreui/react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "../../components/Sidebar/Sidebar.css";

function Sidebar({ sidebarClass, isSidebarVisible, toggleSidebarClass }) {
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
        className={`border-end app-sidebar w-[250px] h-100 ${sidebarClass}`}
        colorScheme="dark"
        id="sideBar"
        responsive={false}
        unfoldable={false}
      >
        <CSidebarHeader className="border-bottom ">
          <CSidebarBrand>
            <Link
              to="/dashboard"
              className="logo w-[200px] d-flex align-items-center"
            >
              <img
                src="/images/vidhyaGxp.png"
                alt="..."
                style={{
                  filter: "drop-shadow(0 0 0 white)",
                }}
              />
            </Link>
            <button
              className={`close-button ${
                isSidebarVisible ? "block" : "hidden"
              }`}
              onClick={toggleSidebarClass}
            >
              <AiOutlineClose className="text-orange-400 text-2xl absolute left-[210px] top-[25px]" />
            </button>
          </CSidebarBrand>
        </CSidebarHeader>
        <CSidebarNav>
          <Link to="/dashboard">
            <CNavItem
              href="#"
              style={{ ...isActive("/dashboard"), gap: "18px" }}
              className={isActive("/dashboard")}
            >
              <TfiDashboard />
              Dashboard
            </CNavItem>
          </Link>
          <Link to="/approval">
            <CNavItem
              href="#"
              style={{ ...isActive("/approval"), gap: "18px" }}
              className={isActive("/approval")}
            >
              <MdOutlineVerified />
              Approval
            </CNavItem>
          </Link>
          <Link to="/stCondition">
            <CNavItem
              href="#"
              style={{ ...isActive("/stCondition"), gap: "18px" }}
              className={isActive("/stCondition")}
            >
              <AiOutlineContainer />
              Storage Condition
            </CNavItem>
          </Link>
          <Link to="/storage-location">
            <CNavItem
              href="#"
              style={{ ...isActive("/storage-location"), gap: "18px" }}
              className={isActive("/storage-location")}
            >
              <TbCurrentLocation />
              Storage Location
            </CNavItem>
          </Link>
          <CNavGroup
            className={isActive("/department")}
            toggler={
              <>
                <FaUsers />
                <span className="ml-5">User Management</span>
              </>
            }
          >
            <Link to="/department">
              <CNavItem
                href="#"
                className={isActive("/department")}
                style={{ ...isActive("/department") }}
              >
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                Department
              </CNavItem>
            </Link>
            <Link to="/users">
              <CNavItem
                href="#"
                className={isActive("/users")}
                style={{ ...isActive("/users") }}
              >
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                Users
              </CNavItem>
            </Link>
            <Link to="/roles">
              <CNavItem
                href="#"
                className={isActive("/roles")}
                style={{ ...isActive("/roles") }}
              >
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                Roles
              </CNavItem>
            </Link>
          </CNavGroup>
          <CNavGroup
            toggler={
              <>
                <RiLoginCircleLine />
                <span style={{ marginLeft: "18px" }}>Sample Logins</span>
              </>
            }
          >
            <Link to="/samplelogin">
              <CNavItem
                href="#"
                className={isActive("/samplelogin")}
                style={{ ...isActive("/samplelogin") }}
              >
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                Sample Login
              </CNavItem>
            </Link>
            <Link to="/investigationl1">
              <CNavItem
                href="#"
                className={isActive("/investigationl1")}
                style={{ ...isActive("/investigationl1") }}
              >
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                Investigation L1
              </CNavItem>
            </Link>
            <Link to="/investigationl2">
              <CNavItem
                href="#"
                className={isActive("/investigationl2")}
                style={{ ...isActive("/investigationl2") }}
              >
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                Investigation L2
              </CNavItem>
            </Link>
          </CNavGroup>
          <CNavGroup
            toggler={
              <>
                <MdManageHistory />
                <span style={{ marginLeft: "18px" }}>Stability</span>
              </>
            }
          >
            <Link to="/storageCondition1321">
              <CNavItem
                href="#"
                className={isActive("/storageCondition1321")}
                style={{ ...isActive("/storageCondition1321") }}
              >
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                Storage Condition
              </CNavItem>
            </Link>
            <Link to="/standardProtocol">
              <CNavItem
                href="#"
                className={isActive("/standardProtocol")}
                style={{ ...isActive("/standardProtocol") }}
              >
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                Standard Protocol
              </CNavItem>
            </Link>
            <Link to="/storageChamber">
              <CNavItem
                href="#"
                className={isActive("/storageChamber")}
                style={{ ...isActive("/storageChamber") }}
              >
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                Storage Chamber
              </CNavItem>
            </Link>
            <Link to="/chamberConditionMapping">
              <CNavItem
                href="#"
                className={isActive("/chamberConditionMapping")}
                style={{ ...isActive("/chamberConditionMapping") }}
              >
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                Chamber Condition Mapping
              </CNavItem>
            </Link>
            {/* <Link to="/chamberTransfer">
              <CNavItem
                href="#"
                className={isActive("/chamberTransfer")}
                style={{ ...isActive("/chamberTransfer") }}
              >
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                Chamber Transfer
              </CNavItem>
            </Link> */}
            <Link to="/stabilityProtocol">
              <CNavItem
                href="#"
                className={isActive("/stabilityProtocol")}
                style={{ ...isActive("/stabilityProtocol") }}
              >
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                Stability protocol
              </CNavItem>
            </Link>
            <Link to="/sampleStorage">
              <CNavItem
                href="#"
                className={isActive("/sampleStorage")}
                style={{ ...isActive("/sampleStorage") }}
              >
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                Sample Storage
              </CNavItem>
            </Link>
            <Link to="/coaTemplate">
              <CNavItem
                href="#"
                className={isActive("/coaTemplate")}
                style={{ ...isActive("/coaTemplate") }}
              >
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                COA Template
              </CNavItem>
            </Link>
            <Link to="/sampleLoginTemplate">
              <CNavItem
                href="#"
                className={isActive("/sampleLoginTemplate")}
                style={{ ...isActive("/sampleLoginTemplate") }}
              >
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                Sample Login Template
              </CNavItem>
            </Link>
            <Link to="/worksheetHeader">
              <CNavItem
                href="#"
                className={isActive("/worksheetHeader")}
                style={{ ...isActive("/worksheetHeader") }}
              >
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                Worksheet Header
              </CNavItem>
            </Link>
            <Link to="/summaryReportHeader">
              <CNavItem
                href="#"
                className={isActive("/summaryReportHeader")}
                style={{ ...isActive("/summaryReportHeader") }}
              >
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                Summary Report Header
              </CNavItem>
            </Link>
            <Link to="/sampleAcceptanceTemplate">
              <CNavItem
                href="#"
                className={isActive("/sampleAcceptanceTemplate")}
                style={{ ...isActive("/sampleAcceptanceTemplate") }}
              >
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                Sample Acceptance Template
              </CNavItem>
            </Link>
            <Link to="/sampleLogin1321">
              <CNavItem
                href="#"
                className={isActive("/sampleLogin1321")}
                style={{ ...isActive("/sampleLogin1321") }}
              >
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                Sample Login
              </CNavItem>
            </Link>
            <Link to="/sampleAcceptance">
              <CNavItem
                href="#"
                className={isActive("/sampleAcceptance")}
                style={{ ...isActive("/sampleAcceptance") }}
              >
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                Sample Acceptance
              </CNavItem>
            </Link>
          </CNavGroup>
          <CNavGroup
            toggler={
              <>
                <HiArrowsUpDown />
                <span style={{ marginLeft: "18px" }}> Masters</span>
              </>
            }
          >
            <Link to="/Masters/Product">
              <CNavItem
                href="#"
                className={isActive("/Masters/Product")}
                style={{ ...isActive("/Masters/Product") }}
              >
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                Product/Material Master
              </CNavItem>
            </Link>
            <Link to="/Masters/SampleType">
              <CNavItem
                href="#"
                className={isActive("/Masters/SampleType")}
                style={{ ...isActive("/Masters/SampleType") }}
              >
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                Sample Type
              </CNavItem>
            </Link>
            <Link to="/Masters/SpecificationType">
              <CNavItem
                href="#"
                className={isActive("/Masters/SpecificationType")}
                style={{ ...isActive("/Masters/SpecificationType") }}
              >
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                Specification Type
              </CNavItem>
            </Link>
            <Link to="/Masters/Specifications">
              <CNavItem
                href="#"
                className={isActive("/Masters/Specifications")}
                style={{ ...isActive("/Masters/Specifications") }}
              >
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                Specifications
              </CNavItem>
            </Link>
            <Link to="/Masters/SpecificationsTestProcedure">
              <CNavItem
                href="#"
                className={isActive("/Masters/SpecificationsTestProcedure")}
                style={{ ...isActive("/Masters/SpecificationsTestProcedure") }}
              >
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                Specifications Test Procedure (STP)
              </CNavItem>
            </Link>
            <Link to="/Masters/TestCategories">
              <CNavItem
                href="#"
                className={isActive("/Masters/TestCategories")}
                style={{ ...isActive("/Masters/TestCategories") }}
              >
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                Test Categories
              </CNavItem>
            </Link>
            <Link to="/Masters/TestRegistrations">
              <CNavItem
                href="#"
                className={isActive("/Masters/TestRegistrations")}
                style={{ ...isActive("/Masters/TestRegistrations") }}
              >
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                Test Registrations
              </CNavItem>
            </Link>
            <Link to="/Masters/TestPlan">
              <CNavItem
                href="#"
                className={isActive("/Masters/TestPlan")}
                style={{ ...isActive("/Masters/TestPlan") }}
              >
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                Test Plan
              </CNavItem>
            </Link>
            <Link to="/Masters/MyTests">
              <CNavItem
                href="#"
                className={isActive("/Masters/MyTests")}
                style={{ ...isActive("/Masters/MyTests") }}
              >
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                My Tests
              </CNavItem>
            </Link>
          </CNavGroup>

          {/*  */}

          <CNavGroup
            toggler={
              <>
                <LuListTodo />

                <span style={{ marginLeft: "18px" }}>Sampling</span>
              </>
            }
          >
            <Link to="/sampling/samplingConfiguration">
              <CNavItem
                href="#"
                className={isActive("/sampling/samplingConfiguration")}
                style={{ ...isActive("/sampling/samplingConfiguration") }}
              >
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                Sampling Configuration
              </CNavItem>
            </Link>
            <Link to="/sampling/samplingRule">
              <CNavItem
                href="#"
                className={isActive("/sampling/samplingRule")}
                style={{ ...isActive("/sampling/samplingRule") }}
              >
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                Sampling Rule
              </CNavItem>
            </Link>
            <Link to="/sampling/eSamping">
              <CNavItem
                href="#"
                className={isActive("/sampling/eSamping")}
                style={{ ...isActive("/sampling/eSamping") }}
              >
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                E-Sampling
              </CNavItem>
            </Link>
            <Link to="/sampling/samplingField">
              <CNavItem
                href="#"
                className={isActive("/sampling/samplingField")}
                style={{ ...isActive("/sampling/samplingField") }}
              >
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                Sampling Field
              </CNavItem>
            </Link>
            <Link to="/sampling/samplingTemplate">
              <CNavItem
                href="#"
                className={isActive("/ sampling/samplingTemplate")}
                style={{ ...isActive("/sampling/samplingTemplate") }}
              >
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                Sampling Template
              </CNavItem>
            </Link>
          </CNavGroup>

          <CNavGroup
            toggler={
              <>
                <MdOutlineInventory2 style={{ width: "15px" }} />
                <span style={{ marginLeft: "18px" }}>Inventory</span>
              </>
            }
          >
            <CNavGroup
              style={{ marginLeft: "23px" }}
              toggler={
                <>
                  <Link to="/Inventory/Inventory" style={{ color: "white" }}>
                    <span
                      className="nav-icon"
                      style={{
                        color: "white",
                        position: "relative",
                        left: "33px",
                      }}
                    >
                      <FaNetworkWired
                        style={{ position: "absolute", left: "-41px" }}
                      />

                      <p
                        style={{
                          fontSize: "14px",
                          position: "relative",
                          top: "7px",
                        }}
                      >
                        Working Status
                      </p>
                    </span>
                  </Link>
                </>
              }
            >
              <Link to="/Inventory/InternalRegistration">
                <CNavItem
                  href="#"
                  style={{
                    ...isActive("/Inventory/InternalRegistration"),
                    fontSize: "14px",
                    position: "relative",
                    top: "7px",
                  }}
                  className={isActive("/Inventory/InternalRegistration")}
                >
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Internal Registration
                </CNavItem>
              </Link>

              <Link to="/Inventory/WorkingStandardIssue">
                <CNavItem
                  href="#"
                  style={{
                    ...isActive("/Inventory/WorkingStandardIssue"),
                    fontSize: "14px",
                    position: "relative",
                    top: "7px",
                  }}
                  className={isActive("/Inventory/WorkingStandardIssue")}
                >
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Working Standard Issue
                </CNavItem>
              </Link>

              <Link to="/Inventory/WorkingStandardUsage">
                <CNavItem
                  href="#"
                  style={{
                    ...isActive("/Inventory/WorkingStandardUsage"),
                    fontSize: "14px",
                    position: "relative",
                    top: "7px",
                  }}
                  className={isActive("/Inventory/WorkingStandardUsage")}
                >
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Working Standard Usage
                </CNavItem>
              </Link>
            </CNavGroup>

            <CNavGroup
              style={{ marginLeft: "23px" }}
              toggler={
                <>
                  <Link
                    to="/Inventory/VolumeSolutions"
                    style={{ color: "white" }}
                  >
                    <span
                      className="nav-icon"
                      style={{
                        color: "white",
                        position: "relative",
                        left: "33px",
                      }}
                    >
                      <CIcon
                        style={{ position: "absolute", left: "-41px" }}
                        icon={cibStatuspage}
                      />

                      <p
                        style={{
                          fontSize: "14px",
                          position: "relative",
                          top: "7px",
                        }}
                      >
                        Volume Solutions
                      </p>
                    </span>
                  </Link>
                </>
              }
            >
              <Link to="/Inventory/VolumeSolutions">
                <CNavItem
                  href="#"
                  style={{
                    ...isActive("/Inventory/VolumeSolutions"),
                    fontSize: "14px",
                    position: "relative",
                    top: "7px",
                  }}
                  className={isActive("/Inventory/VolumeSolutions")}
                >
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Solution Registration
                </CNavItem>
              </Link>

              <Link to="/Inventory/SolutionTemplate">
                <CNavItem
                  href="#"
                  style={{
                    ...isActive("/Inventory/SolutionTemplate"),
                    fontSize: "14px",
                    position: "relative",
                    top: "7px",
                  }}
                  className={isActive("/Inventory/SolutionTemplate")}
                >
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Solution Template
                </CNavItem>
              </Link>

              <Link to="/Inventory/SolutionPrepration">
                <CNavItem
                  href="#"
                  style={{
                    ...isActive("/Inventory/SolutionPrepration"),
                    fontSize: "14px",
                    position: "relative",
                    top: "7px",
                  }}
                  className={isActive("/Inventory/SolutionPrepration")}
                >
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Solution Prepration
                </CNavItem>
              </Link>
              <Link to="/Inventory/SolutionStandardization">
                <CNavItem
                  href="#"
                  style={{
                    ...isActive("/Inventory/SolutionStandardization"),
                    fontSize: "14px",
                    position: "relative",
                    top: "7px",
                  }}
                  className={isActive("/Inventory/SolutionStandardization")}
                >
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Solution Standardization
                </CNavItem>
              </Link>
              <Link to="/Inventory/SolutionUsage">
                <CNavItem
                  href="#"
                  style={{
                    ...isActive("/Inventory/SolutionUsage"),
                    fontSize: "14px",
                    position: "relative",
                    top: "7px",
                  }}
                  className={isActive("/Inventory/SolutionUsage")}
                >
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Solution Usage
                </CNavItem>
              </Link>
            </CNavGroup>

            <CNavGroup
              style={{ marginLeft: "23px" }}
              toggler={
                <>
                  <Link
                    to="/Inventory/ChemicalRegistration"
                    style={{ color: "white" }}
                  >
                    <span
                      className="nav-icon"
                      style={{
                        color: "white",
                        position: "relative",
                        left: "33px",
                      }}
                    >
                      <CIcon
                        style={{ position: "absolute", left: "-41px" }}
                        icon={cilWarning}
                      />

                      <p
                        style={{
                          fontSize: "14px",
                          position: "relative",
                          top: "7px",
                        }}
                      >
                        Chemicals
                      </p>
                    </span>
                  </Link>
                </>
              }
            >
              <Link to="/Inventory/ChemicalRegistration">
                <CNavItem
                  href="#"
                  className={isActive("/Inventory/ChemicalRegistration")}
                  style={{
                    ...isActive("/Inventory/ChemicalRegistration"),
                    fontSize: "14px",
                  }}
                >
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Chemical Registration
                </CNavItem>
              </Link>

              <Link to="/Inventory/ChemicalReagent">
                <CNavItem
                  href="#"
                  className={isActive("/Inventory/ChemicalReagent")}
                  style={{
                    ...isActive("/Inventory/ChemicalReagent"),
                    fontSize: "14px",
                  }}
                >
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Chemical / Reagent Index
                </CNavItem>
              </Link>

              <Link to="/Inventory/LotRegistration">
                <CNavItem
                  href="#"
                  className={isActive("/Inventory/LotRegistration")}
                  style={{
                    ...isActive("/Inventory/LotRegistration"),
                    fontSize: "14px",
                  }}
                >
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Lot Registration
                </CNavItem>
              </Link>

              <Link to="/Inventory/ChemicalReagentReports">
                <CNavItem
                  href="#"
                  className={isActive("/Inventory/ChemicalReagentReports")}
                  style={{
                    ...isActive("/Inventory/ChemicalReagentReports"),
                    fontSize: "14px",
                  }}
                >
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Chemical Reagent / Reports
                </CNavItem>
              </Link>
              <Link to="/Inventory/ChemicalUsage">
                <CNavItem
                  href="#"
                  className={isActive("/Inventory/ChemicalUsage")}
                  style={{
                    ...isActive("/Inventory/ChemicalUsage"),
                    fontSize: "14px",
                  }}
                >
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Chemical Usage
                </CNavItem>
              </Link>
              <Link to="/Inventory/ChemicalIssues">
                <CNavItem
                  href="#"
                  className={isActive("/Inventory/ChemicalIssues")}
                  style={{
                    ...isActive("/Inventory/ChemicalIssues"),
                    fontSize: "14px",
                  }}
                >
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Chemical Issues
                </CNavItem>
              </Link>
            </CNavGroup>

            <CNavGroup
              style={{ marginLeft: "23px" }}
              toggler={
                <>
                  <Link
                    to="/Inventory/ColumnApplication"
                    style={{ color: "white" }}
                  >
                    <span
                      className="nav-icon"
                      style={{
                        color: "white",
                        position: "relative",
                        left: "33px",
                      }}
                    >
                      <CIcon
                        style={{ position: "absolute", left: "-41px" }}
                        icon={cilColumns}
                      />

                      <p
                        style={{
                          fontSize: "14px",
                          position: "relative",
                          top: "7px",
                        }}
                      >
                        Columns
                      </p>
                    </span>
                  </Link>
                </>
              }
            >
              <Link to="/Inventory/ColumnApplication">
                <CNavItem
                  href="#"
                  className={isActive("/Inventory/ColumnApplication")}
                  style={{
                    ...isActive("/Inventory/ColumnApplication"),
                    fontSize: "14px",
                  }}
                >
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Application
                </CNavItem>
              </Link>

              <Link to="/Inventory/ColumnRegistration">
                <CNavItem
                  href="#"
                  className={isActive("/Inventory/ColumnRegistration")}
                  style={{
                    ...isActive("/Inventory/ColumnRegistration"),
                    fontSize: "14px",
                  }}
                >
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Registration
                </CNavItem>
              </Link>

              <Link to="/Inventory/PerformanceTest">
                <CNavItem
                  href="#"
                  className={isActive("/Inventory/PerformanceTest")}
                  style={{
                    ...isActive("/Inventory/PerformanceTest"),
                    fontSize: "14px",
                  }}
                >
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Performance test
                </CNavItem>
              </Link>

              <Link to="/Inventory/Assignment">
                <CNavItem
                  href="#"
                  className={isActive("/Inventory/Assignment")}
                  style={{
                    ...isActive("/Inventory/Assignment"),
                    fontSize: "14px",
                  }}
                >
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Assignment
                </CNavItem>
              </Link>
              <Link to="/Inventory/Qualification">
                <CNavItem
                  href="#"
                  className={isActive("/Inventory/Qualification")}
                  style={{
                    ...isActive("/Inventory/Qualification"),
                    fontSize: "14px",
                  }}
                >
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Qualification
                </CNavItem>
              </Link>
              <Link to="/Inventory/ColumnUsage">
                <CNavItem
                  href="#"
                  className={isActive("/Inventory/ColumnUsage")}
                  style={{
                    ...isActive("/Inventory/ColumnUsage"),
                    fontSize: "14px",
                  }}
                >
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Usage
                </CNavItem>
              </Link>
              <Link to="/Inventory/BatchAssignment">
                <CNavItem
                  href="#"
                  className={isActive("/Inventory/BatchAssignment")}
                  style={{
                    ...isActive("/Inventory/BatchAssignment"),
                    fontSize: "14px",
                  }}
                >
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Batch Assignment
                </CNavItem>
              </Link>
            </CNavGroup>

            <CNavGroup
              style={{ marginLeft: "23px" }}
              toggler={
                <>
                  <Link
                    to="/Inventory/StandardRegistration"
                    style={{ color: "white" }}
                  >
                    <span
                      className="nav-icon"
                      style={{
                        color: "white",
                        position: "relative",
                        left: "33px",
                      }}
                    >
                      <FaPerson
                        style={{ position: "absolute", left: "-41px" }}
                      />

                      <p
                        style={{
                          fontSize: "14px",
                          position: "relative",
                          top: "7px",
                        }}
                      >
                        Refrence Standards
                      </p>
                    </span>
                  </Link>
                </>
              }
            >
              <Link to="/Inventory/StandardRegistration">
                <CNavItem
                  href="#"
                  className={isActive("/Inventory/StandardRegistration")}
                  style={{
                    ...isActive("/Inventory/StandardRegistration"),
                    fontSize: "14px",
                  }}
                >
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Standard Registration
                </CNavItem>
              </Link>

              <Link to="/Inventory/InvLotRegistration">
                <CNavItem
                  href="#"
                  className={isActive("/Inventory/ InvLotRegistration")}
                  style={{
                    ...isActive("/Inventory/InvLotRegistration"),
                    fontSize: "14px",
                  }}
                >
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Lot Registration
                </CNavItem>
              </Link>

              <Link to="/Inventory/UsageRegistration">
                <CNavItem
                  href="#"
                  className={isActive("/Inventory/UsageRegistration")}
                  style={{
                    ...isActive("/Inventory/UsageRegistration"),
                    fontSize: "14px",
                  }}
                >
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Usage Registration
                </CNavItem>
              </Link>
            </CNavGroup>

            <CNavGroup
              style={{ marginLeft: "23px" }}
              toggler={
                <>
                  <Link
                    to="/Inventory/CultureRegistration"
                    style={{ color: "white" }}
                  >
                    <span
                      className="nav-icon"
                      style={{
                        color: "white",
                        position: "relative",
                        left: "33px",
                      }}
                    >
                      <FaPeopleRoof
                        style={{ position: "absolute", left: "-41px" }}
                      />

                      <p
                        style={{
                          fontSize: "14px",
                          position: "relative",
                          top: "7px",
                        }}
                      >
                        Culture Management
                      </p>
                    </span>
                  </Link>
                </>
              }
            >
              <Link to="/Inventory/CultureRegistration">
                <CNavItem
                  href="#"
                  className={isActive("/Inventory/CultureRegistration")}
                  style={{
                    ...isActive("/Inventory/CultureRegistration"),
                    fontSize: "14px",
                  }}
                >
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Culture Registration
                </CNavItem>
              </Link>

              <Link to="/Inventory/RefrenceCulture">
                <CNavItem
                  href="#"
                  className={isActive("/Inventory/RefrenceCulture")}
                  style={{
                    ...isActive("/Inventory/RefrenceCulture"),
                    fontSize: "14px",
                  }}
                >
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Refrence Culture
                </CNavItem>
              </Link>

              <Link to="/Inventory/CultureTemplateConfiguration">
                <CNavItem
                  href="#"
                  className={isActive(
                    "/Inventory/CultureTemplateConfiguration"
                  )}
                  style={{
                    ...isActive("/Inventory/CultureTemplateConfiguration"),
                    fontSize: "14px",
                  }}
                >
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Culture Template Configuration
                </CNavItem>
              </Link>

              <Link to="/Inventory/RefrenceCultureLot">
                <CNavItem
                  href="#"
                  className={isActive("/Inventory/RefrenceCultureLot")}
                  style={{
                    ...isActive("/Inventory/RefrenceCultureLot"),
                    fontSize: "14px",
                  }}
                >
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Refrence Culture Lot
                </CNavItem>
              </Link>

              <Link to="/Inventory/CultureLotAcceptance">
                <CNavItem
                  href="#"
                  className={isActive("/Inventory/CultureLotAcceptance")}
                  style={{
                    ...isActive("/Inventory/CultureLotAcceptance"),
                    fontSize: "14px",
                  }}
                >
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Culture Lot Acceptance
                </CNavItem>
              </Link>
            </CNavGroup>

            <CNavGroup
              style={{ marginLeft: "23px" }}
              toggler={
                <>
                  <Link
                    to="/Inventory/MediaOnboarding"
                    style={{ color: "white" }}
                  >
                    <span
                      className="nav-icon"
                      style={{
                        color: "white",
                        position: "relative",
                        left: "33px",
                      }}
                    >
                      <TfiLayoutMediaOverlay
                        style={{ position: "absolute", left: "-41px" }}
                      />

                      <p
                        style={{
                          fontSize: "14px",
                          position: "relative",
                          top: "7px",
                        }}
                      >
                        Media
                      </p>
                    </span>
                  </Link>
                </>
              }
            >
              <Link to="/Inventory/MediaOnboarding">
                <CNavItem
                  href="#"
                  className={isActive("/Inventory/MediaOnboarding")}
                  style={{
                    ...isActive("/Inventory/MediaOnboarding"),
                    fontSize: "14px",
                  }}
                >
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Media Onboarding
                </CNavItem>
              </Link>
              <Link to="/Inventory/MediaContainerType">
                <CNavItem
                  href="#"
                  className={isActive("/Inventory/MediaContainerType")}
                  style={{
                    ...isActive("/Inventory/MediaContainerType"),
                    fontSize: "14px",
                  }}
                >
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Media Container Type
                </CNavItem>
              </Link>
              <Link to="/Inventory/MediaTemplateConfiguration">
                <CNavItem
                  href="#"
                  className={isActive("/Inventory/MediaTemplateConfiguration")}
                  style={{
                    ...isActive("/Inventory/MediaTemplateConfiguration"),
                    fontSize: "14px",
                  }}
                >
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Media Template Configuration
                </CNavItem>
              </Link>
              <Link to="/Inventory/MediaLot">
                <CNavItem
                  href="#"
                  className={isActive("/Inventory/MediaLot")}
                  style={{
                    ...isActive("/Inventory/MediaLot"),
                    fontSize: "14px",
                  }}
                >
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Media Lot
                </CNavItem>
              </Link>
              <Link to="/Inventory/MediaLotContainerIssue">
                <CNavItem
                  href="#"
                  className={isActive("/Inventory/MediaLotContainerIssue")}
                  style={{
                    ...isActive("/Inventory/MediaLotContainerIssue"),
                    fontSize: "14px",
                  }}
                >
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Media Lot Container Issue
                </CNavItem>
              </Link>
              <Link to="/Inventory/MediaLotAcceptance">
                <CNavItem
                  href="#"
                  className={isActive("/Inventory/MediaLotAcceptance")}
                  style={{
                    ...isActive("/Inventory/MediaLotAcceptance"),
                    fontSize: "14px",
                  }}
                >
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Media Lot Acceptance
                </CNavItem>
              </Link>{" "}
              <Link to="/Inventory/MediaLotUsage">
                <CNavItem
                  href="#"
                  className={isActive("/Inventory/MediaLotUsage")}
                  style={{
                    ...isActive("/Inventory/MediaLotUsage"),
                    fontSize: "14px",
                  }}
                >
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Media Lot Usage
                </CNavItem>
              </Link>
            </CNavGroup>

            <CNavGroup
              style={{ marginLeft: "23px" }}
              toggler={
                <>
                  <Link to="/Inventory/SampleArea" style={{ color: "white" }}>
                    <span
                      className="nav-icon"
                      style={{
                        color: "white",
                        position: "relative",
                        left: "33px",
                      }}
                    >
                      <FaWater
                        style={{ position: "absolute", left: "-41px" }}
                      />

                      <p
                        style={{
                          fontSize: "14px",
                          position: "relative",
                          top: "7px",
                        }}
                      >
                        Water Management
                      </p>
                    </span>
                  </Link>
                </>
              }
            >
              <Link to="/Inventory/SampleArea">
                <CNavItem
                  href="#"
                  className={isActive("/Inventory/SampleArea")}
                  style={{
                    ...isActive("/Inventory/SampleArea"),
                    fontSize: "14px",
                  }}
                >
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Sample Area
                </CNavItem>
              </Link>

              <Link to="/Inventory/ProcessingSystem">
                <CNavItem
                  href="#"
                  className={isActive("/Inventory/ProcessingSystem")}
                  style={{
                    ...isActive("/Inventory/ProcessingSystem"),
                    fontSize: "14px",
                  }}
                >
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Processing System
                </CNavItem>
              </Link>

              <Link to="/Inventory/Schedule">
                <CNavItem
                  href="#"
                  className={isActive("/Inventory/Schedule")}
                  style={{
                    ...isActive("/Inventory/Schedule"),
                    fontSize: "14px",
                  }}
                >
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Schedule
                </CNavItem>
              </Link>

              <Link to="/Inventory/Unschedule">
                <CNavItem
                  href="#"
                  className={isActive("/Inventory/Unschedule")}
                  style={{
                    ...isActive("/Inventory/Unschedule"),
                    fontSize: "14px",
                  }}
                >
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Unschedule
                </CNavItem>
              </Link>

              <Link to="/Inventory/Acknowledgement">
                <CNavItem
                  href="#"
                  className={isActive("/Inventory/Acknowledgement")}
                  style={{
                    ...isActive("/Inventory/Acknowledgement"),
                    fontSize: "14px",
                  }}
                >
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Acknowledgement
                </CNavItem>
              </Link>
              <Link to="/Inventory/ScheduleTermination">
                <CNavItem
                  href="#"
                  className={isActive("/Inventory/ScheduleTermination")}
                  style={{
                    ...isActive("/Inventory/ScheduleTermination"),
                    fontSize: "14px",
                  }}
                >
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Schedule Termination
                </CNavItem>
              </Link>
            </CNavGroup>

            <CNavGroup
              style={{ marginLeft: "23px" }}
              toggler={
                <>
                  <Link to="/Inventory/Facility" style={{ color: "white" }}>
                    <span
                      className="nav-icon"
                      style={{
                        color: "white",
                        position: "relative",
                        left: "33px",
                      }}
                    >
                      <VscServerEnvironment
                        style={{ position: "absolute", left: "-41px" }}
                      />

                      <p
                        style={{
                          fontSize: "14px",
                          position: "relative",
                          top: "7px",
                        }}
                      >
                        Environment
                      </p>
                    </span>
                  </Link>
                </>
              }
            >
              <Link to="/Inventory/Facility">
                <CNavItem
                  href="#"
                  className={isActive("/Inventory/Facility")}
                  style={{
                    ...isActive("/Inventory/Facility"),
                    fontSize: "14px",
                  }}
                >
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Facility
                </CNavItem>
              </Link>
              <Link to="/Inventory/Location">
                <CNavItem
                  href="#"
                  className={isActive("/Inventory/Location")}
                  style={{
                    ...isActive("/Inventory/Location"),
                    fontSize: "14px",
                  }}
                >
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Location
                </CNavItem>
              </Link>
              <Link to="/Inventory/EMMoniteringDetails">
                <CNavItem
                  href="#"
                  className={isActive("/Inventory/EMMoniteringDetails")}
                  style={{
                    ...isActive("/Inventory/EMMoniteringDetails"),
                    fontSize: "14px",
                  }}
                >
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  EM Monitering Details
                </CNavItem>
              </Link>
              <Link to="/Inventory/EMCOATemplate">
                <CNavItem
                  href="#"
                  className={isActive("/Inventory/EMCOATemplate")}
                  style={{
                    ...isActive("/Inventory/EMCOATemplate"),
                    fontSize: "14px",
                  }}
                >
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  EM COA Template
                </CNavItem>
              </Link>
              <Link to="/Inventory/OOATemplate">
                <CNavItem
                  href="#"
                  className={isActive("/Inventory/OOATemplate")}
                  style={{
                    ...isActive("/Inventory/OOATemplate"),
                    fontSize: "14px",
                  }}
                >
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  OOA Template
                </CNavItem>
              </Link>
              <Link to="/Inventory/LocationSamples">
                <CNavItem
                  href="#"
                  className={isActive("/Inventory/LocationSamples")}
                  style={{
                    ...isActive("/Inventory/LocationSamples"),
                    fontSize: "14px",
                  }}
                >
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Location Samples
                </CNavItem>
              </Link>
              <Link to="/Inventory/SamplingSchedule">
                <CNavItem
                  href="#"
                  className={isActive("/Inventory/SamplingSchedule")}
                  style={{
                    ...isActive("/Inventory/SamplingSchedule"),
                    fontSize: "14px",
                  }}
                >
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Sampling Schedule
                </CNavItem>
              </Link>{" "}
              <Link to="/Inventory/BatchSample">
                <CNavItem
                  href="#"
                  className={isActive("/Inventory/BatchSample")}
                  style={{
                    ...isActive("/Inventory/BatchSample"),
                    fontSize: "14px",
                  }}
                >
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Batch Sample
                </CNavItem>
              </Link>{" "}
              <Link to="/Inventory/SampleLogin">
                <CNavItem
                  href="#"
                  className={isActive("/Inventory/SampleLogin")}
                  style={{
                    ...isActive("/Inventory/SampleLogin"),
                    fontSize: "14px",
                  }}
                >
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Sample Login
                </CNavItem>
              </Link>{" "}
              <Link to="/Inventory/AcknowledgeSample">
                <CNavItem
                  href="#"
                  className={isActive("/Inventory/AcknowledgeSample")}
                  style={{
                    ...isActive("/Inventory/AcknowledgeSample"),
                    fontSize: "14px",
                  }}
                >
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Acknowledge Sample
                </CNavItem>
              </Link>{" "}
              <Link to="/Inventory/BatchSampleAllotment">
                <CNavItem
                  href="#"
                  className={isActive("/Inventory/BatchSampleAllotment")}
                  style={{
                    ...isActive("/Inventory/BatchSampleAllotment"),
                    fontSize: "14px",
                  }}
                >
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Batch Sample Allotment
                </CNavItem>
              </Link>{" "}
              <Link to="/Inventory/BatchTestslist">
                <CNavItem
                  href="#"
                  className={isActive("/Inventory/BatchTestslist")}
                  style={{
                    ...isActive("/Inventory/BatchTestslist"),
                    fontSize: "14px",
                  }}
                >
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Batch Tests list
                </CNavItem>
              </Link>
            </CNavGroup>
          </CNavGroup>

          {/*  */}

          <CNavGroup
            toggler={
              <>
                <CiPillsBottle1 />
                <span style={{ marginLeft: "18px" }}>Instrument Master</span>
              </>
            }
          >
            <Link to="/instrumentMaster/registration">
              <CNavItem
                href="#"
                className={isActive("/ instrumentMaster/registration")}
                style={{
                  ...isActive("/instrumentMaster/registration"),
                  fontSize: "14px",
                }}
              >
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                Registration
              </CNavItem>
            </Link>
            <Link to="/instrumentMaster/instrumentCategory">
              <CNavItem
                href="#"
                className={isActive("/ instrumentMaster/instrumentCategory")}
                style={{
                  ...isActive("/instrumentMaster/instrumentCategory"),
                  fontSize: "14px",
                }}
              >
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                Instrument Category
              </CNavItem>
            </Link>
            <Link to="/instrumentMaster/instrumentModule">
              <CNavItem
                href="#"
                className={isActive("/ instrumentMaster/instrumentModule")}
                style={{
                  ...isActive("/instrumentMaster/instrumentModule"),
                  fontSize: "14px",
                }}
              >
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                Instrument Module
              </CNavItem>
            </Link>
            <Link to="/instrumentMaster/instrumentUsage">
              <CNavItem
                href="#"
                className={isActive("/ instrumentMaster/instrumentUsage")}
                style={{
                  ...isActive("/instrumentMaster/instrumentUsage"),
                  fontSize: "14px",
                }}
              >
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                Instrument Usage
              </CNavItem>
            </Link>
          </CNavGroup>
          <CNavGroup
            toggler={
              <>
                <LuWarehouse style={{ width: "15px" }} />
                <span style={{ marginLeft: "18px" }}>Stock Management</span>
              </>
            }
          >
            <Link to="/stock-management/stocks-verification">
              <CNavItem
                href="#"
                className={isActive("/ stock-management/stocks-verification")}
                style={{
                  ...isActive("/stock-management/stocks-verification"),
                  fontSize: "14px",
                }}
              >
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                Stocks Verification
              </CNavItem>
            </Link>
            <Link to="/stock-management/stocks-onboarding">
              <CNavItem
                href="#"
                className={isActive("/ stock-management/stocks-onboarding")}
                style={{
                  ...isActive("/stock-management/stocks-onboarding"),
                  fontSize: "14px",
                }}
              >
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                Stocks Onboarding
              </CNavItem>
            </Link>
            <Link to="/stock-management/material">
              <CNavItem
                href="#"
                className={isActive("/ stock-management/material")}
                style={{
                  ...isActive("/stock-management/material"),
                  fontSize: "14px",
                }}
              >
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                Material
              </CNavItem>
            </Link>
            <Link to="/stock-management/inventory">
              <CNavItem
                href="#"
                className={isActive("/ stock-management/inventory")}
                style={{
                  ...isActive("/stock-management/inventory"),
                  fontSize: "14px",
                }}
              >
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                Inventory
              </CNavItem>
            </Link>
          </CNavGroup>
          <CNavGroup
            toggler={
              <>
                <MdOutlineCompassCalibration />
                <span style={{ marginLeft: "18px" }}>Calibration</span>
              </>
            }
          >
            <Link to="/calibration/calibration-type">
              <CNavItem
                href="#"
                className={isActive("/ calibration/calibration-type")}
                style={{
                  ...isActive("/calibration/calibration-type"),
                  fontSize: "14px",
                }}
              >
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                Calibration Type
              </CNavItem>
            </Link>
            <Link to="/calibration/calibration-frequency">
              <CNavItem
                href="#"
                className={isActive("/ calibration/calibration-frequency")}
                style={{
                  ...isActive("/calibration/calibration-frequency"),
                  fontSize: "14px",
                }}
              >
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                Calibration Frequency
              </CNavItem>
            </Link>
            <Link to="/calibration/calibration-data-sheet">
              <CNavItem
                href="#"
                className={isActive("/ calibration/calibration-data-sheet")}
                style={{
                  ...isActive("/calibration/calibration-data-sheet"),
                  fontSize: "14px",
                }}
              >
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                Calibration Data Sheet
              </CNavItem>
            </Link>
            <Link to="/calibration/sample-login-template">
              <CNavItem
                href="#"
                className={isActive("/ calibration/sample-login-template")}
                style={{
                  ...isActive("/calibration/sample-login-template"),
                  fontSize: "14px",
                }}
              >
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                Sample Login Template
              </CNavItem>
            </Link>
            <Link to="/calibration/calibration-schedule">
              <CNavItem
                href="#"
                className={isActive("/ calibration/calibration-schedule")}
                style={{
                  ...isActive("/calibration/calibration-schedule"),
                  fontSize: "14px",
                }}
              >
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                Calibration Schedule
              </CNavItem>
            </Link>
            <Link to="/calibration/calibration-record">
              <CNavItem
                href="#"
                className={isActive("/ calibration/calibration-record")}
                style={{
                  ...isActive("/calibration/calibration-record"),
                  fontSize: "14px",
                }}
              >
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                Calibration Record
              </CNavItem>
            </Link>
            <Link to="/calibration/sample-login">
              <CNavItem
                href="#"
                className={isActive("/ calibration/sample-login")}
                style={{
                  ...isActive("/calibration/sample-login"),
                  fontSize: "14px",
                }}
              >
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                Sample Login
              </CNavItem>
            </Link>
            <Link to="/calibration/calibration-calender">
              <CNavItem
                href="#"
                className={isActive("/ calibration/calibration-calender")}
                style={{
                  ...isActive("/calibration/calibration-calender"),
                  fontSize: "14px",
                }}
              >
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                Calibration Calendar
              </CNavItem>
            </Link>
          </CNavGroup>

          <CNavGroup
            toggler={
              <>
                <GrCertificate />
                <span style={{ marginLeft: "18px" }}>
                  Reports / Certificate
                </span>
              </>
            }
          >
            <Link to="/reportsCertification/problemReporting">
              <CNavItem
                href="#"
                className={isActive("/ reportsCertification/problemReporting")}
                style={{
                  ...isActive("/reportsCertification/problemReporting"),
                  fontSize: "14px",
                }}
              >
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                Problem Reporting
              </CNavItem>
            </Link>
            <Link to="/reportsCertification/serviceReporting">
              <CNavItem
                href="#"
                className={isActive("/ reportsCertification/serviceReporting")}
                style={{
                  ...isActive("/reportsCertification/serviceReporting"),
                  fontSize: "14px",
                }}
              >
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                Service Reporting
              </CNavItem>
            </Link>
            <Link to="/reportsCertification/coaTemplate1321">
              <CNavItem
                href="#"
                className={isActive("/ reportsCertification/coaTemplate1321")}
                style={{
                  ...isActive("/reportsCertification/coaTemplate1321"),
                  fontSize: "14px",
                }}
              >
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                Coa Template
              </CNavItem>
            </Link>
            <Link to="/reportsCertification/releasedCoa">
              <CNavItem
                href="#"
                className={isActive("/ reportsCertification/releasedCoa")}
                style={{
                  ...isActive("/reportsCertification/releasedCoa"),
                  fontSize: "14px",
                }}
              >
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                Relaesed Coa
              </CNavItem>
            </Link>
            <Link to="/reportsCertification/investigationCoa">
              <CNavItem
                href="#"
                className={isActive("/ reportsCertification/investigationCoa")}
                style={{
                  ...isActive("/reportsCertification/investigationCoa"),
                  fontSize: "14px",
                }}
              >
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                Investigation Coa
              </CNavItem>
            </Link>
          </CNavGroup>
          <Link to="/vender">
            <CNavItem
              href="#"
              className={isActive("/vender")}
              style={{ ...isActive("/vender"), fontSize: "14px" }}
            >
              <CiShop />
              <span style={{ marginLeft: "21px" }}>Vendor</span>
            </CNavItem>
          </Link>
          <Link to="/clients">
            <CNavItem
              href="#"
              className={isActive("/clients")}
              style={{ ...isActive("/clients") }}
            >
              <FaPeopleLine />
              <span style={{ marginLeft: "21px" }}>Clients</span>
            </CNavItem>
          </Link>
          <Link to="/plants">
            <CNavItem
              href="#"
              className={isActive(" /plants")}
              style={{ ...isActive("/plants") }}
            >
              <PiNuclearPlant />
              <span style={{ marginLeft: "21px" }}>Plants</span>
            </CNavItem>
          </Link>

          <Link to="/workFlow">
            <CNavItem
              href="#"
              className={isActive("/workFlow")}
              style={{ ...isActive("/workFlow") }}
            >
              <GoWorkflow />
              <span style={{ marginLeft: "21px" }}>Workflow</span>
            </CNavItem>
          </Link>

          <Link to="/auditTrail">
            <CNavItem
              href="#"
              className={isActive(" /auditTrail")}
              style={{ ...isActive("/auditTrail") }}
            >
              <AiOutlineAudit />
              <span style={{ marginLeft: "21px" }}>Audit Trail</span>
            </CNavItem>
          </Link>
          <CNavGroup
            toggler={
              <>
                <MdSettingsApplications />
                <span style={{ marginLeft: "18px" }}>Settings</span>
              </>
            }
          >
            <Link to="/settings/businessAssociate">
              <CNavItem
                href="#"
                className={isActive(" /settings/businessAssociate")}
                style={{ ...isActive("/settings/businessAssociate") }}
              >
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                Business Associate
              </CNavItem>
            </Link>
            <Link to="/settings/labelManagement">
              <CNavItem
                href="#"
                className={isActive(" /settings/labelManagement")}
                style={{ ...isActive("/settings/labelManagement") }}
              >
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                Label Management
              </CNavItem>
            </Link>
            <Link to="/settings/functionalGrouping">
              <CNavItem
                href="#"
                className={isActive(" /settings/functionalGrouping")}
                style={{ ...isActive("/settings/functionalGrouping") }}
              >
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                Functional Grouping
              </CNavItem>
            </Link>
            <Link to="/settings/worksheets">
              <CNavItem
                href="#"
                className={isActive(" /settings/worksheets")}
                style={{ ...isActive("/settings/worksheets") }}
              >
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                Worksheets
              </CNavItem>
            </Link>
            <Link to="/settings/worksheetFields">
              <CNavItem
                href="#"
                className={isActive(" /settings/worksheetFields")}
                style={{ ...isActive("/settings/worksheetFields") }}
              >
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                Worksheet Field
              </CNavItem>
            </Link>
            <Link to="/settings/groupName">
              <CNavItem
                href="#"
                className={isActive(" /settings/groupName")}
                style={{ ...isActive("/settings/groupName") }}
              >
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                Group Name
              </CNavItem>
            </Link>
            <Link to="/settings/investigationTemplate">
              <CNavItem
                href="#"
                className={isActive(" /settings/investigationTemplate")}
                style={{ ...isActive("/settings/investigationTemplate") }}
              >
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                Investigation Template
              </CNavItem>
            </Link>
            <Link to="/settings/chemicalCategory">
              <CNavItem
                href="#"
                className={isActive(" /settings/chemicalCategory")}
                style={{ ...isActive("/settings/chemicalCategory") }}
              >
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                Chemical Category
              </CNavItem>
            </Link>
            <Link to="/settings/grade">
              <CNavItem
                href="#"
                className={isActive(" /settings/grade")}
                style={{ ...isActive("/settings/grade") }}
              >
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                Grade
              </CNavItem>
            </Link>
            <Link to="/settings/handlingSymbol">
              <CNavItem
                href="#"
                className={isActive(" /settings/handlingSymbol")}
                style={{ ...isActive("/settings/handlingSymbol") }}
              >
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                Handling Symbol
              </CNavItem>
            </Link>
            {/* <Link to="/settings/accessRight">
              <CNavItem
                href="#"
                className={isActive(" /settings/accessRight")}
                style={{ ...isActive("/settings/accessRight") }}
              >
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                Access Right
              </CNavItem>
            </Link> */}
            <Link to="/settings/projects">
              <CNavItem
                href="#"
                className={isActive(" /settings/projects")}
                style={{ ...isActive("/settings/projects") }}
              >
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                Projects
              </CNavItem>
            </Link>
            <Link to="/settings/template">
              <CNavItem
                href="#"
                className={isActive(" /settings/template")}
                style={{ ...isActive("/settings/template") }}
              >
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                Template
              </CNavItem>
            </Link>
            <Link to="/settings/trainingConfirmation">
              <CNavItem
                href="#"
                className={isActive(" /settings/trainingConfirmation")}
                style={{ ...isActive("/settings/trainingConfirmation") }}
              >
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                Training Confirmations
              </CNavItem>
            </Link>
            <Link to="/settings/proposal">
              <CNavItem
                href="#"
                className={isActive(" /settings/proposal")}
                style={{ ...isActive("/settings/proposal") }}
              >
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                Proposal
              </CNavItem>
            </Link>
            <Link to="/settings/nominations">
              <CNavItem
                href="#"
                className={isActive(" /settings/nominations")}
                style={{ ...isActive("/settings/nominations") }}
              >
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                Nominations
              </CNavItem>
            </Link>
            <Link to="/settings/reQualificationRequest">
              <CNavItem
                href="#"
                className={isActive(" /settings/reQualificationRequest")}
                style={{ ...isActive("/settings/reQualificationRequest") }}
              >
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                Re-Qualification Request
              </CNavItem>
            </Link>
            <Link to="/settings/resources">
              <CNavItem
                href="#"
                className={isActive(" /settings/resources")}
                style={{ ...isActive("/settings/resources") }}
              >
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                Resources
              </CNavItem>
            </Link>
            <Link to="/settings/typeOfSection">
              <CNavItem
                href="#"
                className={isActive(" /settings/typeOfSection")}
                style={{ ...isActive("/settings/typeOfSection") }}
              >
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                Type of Section
              </CNavItem>
            </Link>
            <Link to="/settings/wosTest">
              <CNavItem
                href="#"
                className={isActive(" /settings/wosTest")}
                style={{ ...isActive("/settings/wosTest") }}
              >
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                WOS Test
              </CNavItem>
            </Link>
            <Link to="/settings/serviceprovider">
              <CNavItem
                href="#"
                className={isActive(" /settings/serviceprovider")}
                style={{ ...isActive("/settings/serviceprovider") }}
              >
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                Service Provider
              </CNavItem>
            </Link>
            {/* <Link to="/settings/externalRegistration">
              <CNavItem
                href="#"
                className={isActive(" /settings/externalRegistration")}
                style={{ ...isActive("/settings/externalRegistration") }}
              >
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                External Registration
              </CNavItem>
            </Link> */}
            <Link to="/settings/testTechniques">
              <CNavItem
                href="#"
                className={isActive(" /settings/testTechniques")}
                style={{ ...isActive("/settings/testTechniques") }}
              >
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                Test Techniques
              </CNavItem>
            </Link>
            {/* <Link to="/settings/instrumentRegistration">
              <CNavItem
                href="#"
                className={isActive(" /settings/instrumentRegistration")}
                style={{ ...isActive("/settings/instrumentRegistration") }}
              >
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                Instrument Regitration
              </CNavItem>
            </Link> */}
            <Link to="/settings/stability">
              <CNavItem
                href="#"
                className={isActive(" /settings/stability")}
                style={{ ...isActive("/settings/stability") }}
              >
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                Stability
              </CNavItem>
            </Link>
            <Link to="/settings/testHistory">
              <CNavItem
                href="#"
                className={isActive(" /settings/testHistory")}
                style={{ ...isActive("/settings/testHistory") }}
              >
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                Test History
              </CNavItem>
            </Link>
            <Link to="/settings/settingVendors">
              <CNavItem
                href="#"
                className={isActive(" /settings/settingVendors")}
                style={{ ...isActive("/settings/settingVendors") }}
              >
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                Vendor
              </CNavItem>
            </Link>
            {/* <Link to="/settings/appConfiguration">
              <CNavItem
                href="#"
                className={isActive(" /settings/appConfiguration")}
                style={{ ...isActive("/settings/appConfiguration") }}
              >
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                App Configuration
              </CNavItem>
            </Link> */}
          </CNavGroup>
        </CSidebarNav>
      </CSidebar>
    </>
  );
}

export default Sidebar;
