  import {
    cilSpeedometer,
    cibStatuspage,
    cilResizeBoth,
    cilWarning,
    cilColumns,
    
    
  } from "@coreui/icons";
  import CIcon from "@coreui/icons-react";
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
  import "./Sidebar.css"

  import {
    CNavGroup,
    CNavItem,
    CSidebar,
    CSidebarBrand,
    CSidebarHeader,
    CSidebarNav,
  } from "@coreui/react";
  import { Link } from "react-router-dom";
  import { useLocation } from "react-router-dom";
  import "../../components/Sidebar/Sidebar.css"




  function Sidebar() {
    const location = useLocation();
    const currentPath = location.pathname;

    return (
      <>
        <CSidebar className="border-end app-sidebar h-100" colorScheme="dark" id="sideBar">
          <CSidebarHeader className="border-bottom">
            <CSidebarBrand>
              <Link
                to="/dashboard"
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
            <Link to="/dashboard">
              <CNavItem
                href="#"
                style={{ gap: "18px" }}
                active={currentPath === "/dashboard"}
              >
                <TfiDashboard />
                Dashboard
              </CNavItem>
            </Link>
            <Link to="/approval">
              <CNavItem
                href="#"
                style={{ gap: "18px" }}
                active={currentPath === "/approval"}
              >
                <MdOutlineVerified />
                Approval
              </CNavItem>
            </Link>
            <Link to="/stCondition">
              <CNavItem
                href="#"
                style={{ gap: "18px" }}
                active={currentPath === "/stCondition"}
              >
                <AiOutlineContainer />
                Storage Condition
              </CNavItem>
            </Link>
            <Link to="/storage-location">
              <CNavItem
                href="#"
                style={{ gap: "18px" }}
                active={currentPath === "/storage-location"}
              >
                <TbCurrentLocation />
                Storage Location
              </CNavItem>
            </Link>
            <CNavGroup
              active={currentPath === "/department"}
              toggler={
                <>
                  <FaUsers />
                  <span style={{ marginLeft: "18px" }}>User Management</span>
                </>
              }
            >
              <Link to="/department">
                <CNavItem href="#" active={currentPath === "/department"}>
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Department
                </CNavItem>
              </Link>
              <Link to="/users">
                <CNavItem href="#" active={currentPath === "/users"}>
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Users
                </CNavItem>
              </Link>
              <Link to="/roles">
                <CNavItem href="#" active={currentPath === "/roles"}>
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
                <CNavItem href="#" active={currentPath === "/samplelogin"}>
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Sample Login
                </CNavItem>
              </Link>
              <Link to="/investigationl1">
                <CNavItem href="#" active={currentPath === "/investigationl1"}>
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Investigation L1
                </CNavItem>
              </Link>
              <Link to="/investigationl2">
                <CNavItem href="#" active={currentPath === "/investigationl2"}>
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
                  active={currentPath === "/storageCondition1321"}
                >
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Storage Condition
                </CNavItem>
              </Link>
              <Link to="/standardProtocol">
                <CNavItem href="#" active={currentPath === "/standardProtocol"}>
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Standard Protocol
                </CNavItem>
              </Link>
              <Link to="/storageChamber">
                <CNavItem href="#" active={currentPath === "/storageChamber"}>
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Storage Chamber
                </CNavItem>
              </Link>
              <Link to="/chamberConditionMapping">
                <CNavItem
                  href="#"
                  active={currentPath === "/chamberConditionMapping"}
                >
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Chamber Condition Mapping
                </CNavItem>
              </Link>
              <Link to="/chamberTransfer">
                <CNavItem href="#" active={currentPath === "/chamberTransfer"}>
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Chamber Transfer
                </CNavItem>
              </Link>
              <Link to="/stabilityProtocol">
                <CNavItem href="#" active={currentPath === "/stabilityProtocol"}>
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Stability protocol
                </CNavItem>
              </Link>
              <Link to="/sampleStorage">
                <CNavItem href="#" active={currentPath === "/sampleStorage"}>
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Sample Storage
                </CNavItem>
              </Link>
              <Link to="/coaTemplate">
                <CNavItem href="#" active={currentPath === "/coaTemplate"}>
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  COA Template
                </CNavItem>
              </Link>
              <Link to="/sampleLoginTemplate">
                <CNavItem
                  href="#"
                  active={currentPath === "/sampleLoginTemplate"}
                >
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Sample Login Template
                </CNavItem>
              </Link>
              <Link to="/worksheetHeader">
                <CNavItem href="#" active={currentPath === "/worksheetHeader"}>
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Worksheet Header
                </CNavItem>
              </Link>
              <Link to="/summaryReportHeader">
                <CNavItem
                  href="#"
                  active={currentPath === "/summaryReportHeader"}
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
                  active={currentPath === "/sampleAcceptanceTemplate"}
                >
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Sample Acceptance Template
                </CNavItem>
              </Link>
              <Link to="/sampleLogin1321">
                <CNavItem href="#" active={currentPath === "/sampleLogin1321"}>
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Sample Login
                </CNavItem>
              </Link>
              <Link to="/sampleAcceptance">
                <CNavItem href="#" active={currentPath === "/sampleAcceptance"}>
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
                <CNavItem href="#" active={currentPath === "/Masters/Product"}>
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Product/Material Master
                </CNavItem>
              </Link>
              <Link to="/Masters/SampleType">
                <CNavItem href="#" active={currentPath === "/Masters/SampleType"}>
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Sample Type
                </CNavItem>
              </Link>
              <Link to="/Masters/SpecificationType">
                <CNavItem
                  href="#"
                  active={currentPath === "/Masters/SpecificationType"}
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
                  active={currentPath === "/Masters/Specifications"}
                >
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Specifications
                </CNavItem>
              </Link>
              <Link to="/Masters/TestCategories">
                <CNavItem
                  href="#"
                  active={currentPath === "/Masters/TestCategories"}
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
                  active={currentPath === "/Masters/TestRegistrations"}
                >
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Test Registrations
                </CNavItem>
              </Link>
              <Link to="/Masters/TestPlan">
                <CNavItem href="#" active={currentPath === "/Masters/TestPlan"}>
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Test Plan
                </CNavItem>
              </Link>
              <Link to="/Masters/MyTests">
                <CNavItem href="#" active={currentPath === "/Masters/MyTests"}>
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
                  active={currentPath === "/sampling/samplingConfiguration"}
                >
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Sampling Sampling Configuration
                </CNavItem>
              </Link>
              <Link to="/sampling/samplingRule">
                <CNavItem
                  href="#"
                  active={currentPath === "/sampling/samplingRule"}
                >
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Sampling Rule
                </CNavItem>
              </Link>
              <Link to="/sampling/eSamping">
                <CNavItem href="#" active={currentPath === "/sampling/eSamping"}>
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  E-Sampling
                </CNavItem>
              </Link>
              <Link to="/sampling/samplingField">
                <CNavItem
                  href="#"
                  active={currentPath === "/sampling/samplingField"}
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
                  active={currentPath === "/sampling/samplingTemplate"}
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
                      fontSize: "14px",
                      position: "relative",
                      top: "7px",
                    }}
                    active={currentPath === "/Inventory/InternalRegistration"}
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
                      fontSize: "14px",
                      position: "relative",
                      top: "7px",
                    }}
                    active={currentPath === "/Inventory/WorkingStandardIssue"}
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
                      fontSize: "14px",
                      position: "relative",
                      top: "7px",
                    }}
                    active={currentPath === "/Inventory/WorkingStandardUsage"}
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
                          icon={cilResizeBoth}
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
                <CNavGroup
                  toggler={
                    <>
                      <Link to="/Inventory/VolumeSolutions">
                        <CNavItem
                          href="#"
                          style={{
                            position: "relative",
                            left: "-47px",
                            fontSize: "14px",
                          }}
                          active={currentPath === "/Inventory/VolumeSolutions"}
                        >
                          <span className="nav-icon">
                            <span className="nav-icon-bullet"></span>
                          </span>
                          Solutions Registration
                        </CNavItem>
                      </Link>
                    </>
                  }
                ></CNavGroup>
                <Link to="/Inventory/SolutionTemplate">
                  <CNavItem
                    href="#"
                    active={currentPath === "/Inventory/SolutionTemplate"}
                    style={{ fontSize: "14px" }}
                  >
                    <span className="nav-icon">
                      <span className="nav-icon-bullet"></span>
                    </span>
                    Solutions Template
                  </CNavItem>
                </Link>

                <Link to="/Inventory/SolutionPrepration">
                  <CNavItem
                    href="#"
                    active={currentPath === "/Inventory/SolutionPrepration"}
                    style={{ fontSize: "14px" }}
                  >
                    <span className="nav-icon">
                      <span className="nav-icon-bullet"></span>
                    </span>
                    Solutions Preparation
                  </CNavItem>
                </Link>

                <Link to="/Inventory/SolutionStandardization">
                  <CNavItem
                    href="#"
                    active={currentPath === "/Inventory/SolutionStandardization"}
                    style={{ fontSize: "14px" }}
                  >
                    <span className="nav-icon">
                      <span className="nav-icon-bullet"></span>
                    </span>
                    Solutions Standardization
                  </CNavItem>
                </Link>

                <Link to="/Inventory/SolutionUsage">
                  <CNavItem
                    href="#"
                    active={currentPath === "/Inventory/SolutionUsage"}
                    style={{ fontSize: "14px" }}
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
                    active={currentPath === "/Inventory/ChemicalRegistration"}
                    style={{ fontSize: "14px" }}
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
                    active={currentPath === "/Inventory/ChemicalReagent"}
                    style={{ fontSize: "14px" }}
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
                    active={currentPath === "/Inventory/LotRegistration"}
                    style={{ fontSize: "14px" }}
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
                    active={currentPath === "/Inventory/ChemicalReagentReports"}
                    style={{ fontSize: "14px" }}
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
                    active={currentPath === "/Inventory/ChemicalUsage"}
                    style={{ fontSize: "14px" }}
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
                    active={currentPath === "/Inventory/ChemicalIssues"}
                    style={{ fontSize: "14px" }}
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
                    active={currentPath === "/Inventory/ColumnApplication"}
                    style={{ fontSize: "14px" }}
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
                    active={currentPath === "/Inventory/ColumnRegistration"}
                    style={{ fontSize: "14px" }}
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
                    active={currentPath === "/Inventory/PerformanceTest"}
                    style={{ fontSize: "14px" }}
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
                    active={currentPath === "/Inventory/Assignment"}
                    style={{ fontSize: "14px" }}
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
                    active={currentPath === "/Inventory/Qualification"}
                    style={{ fontSize: "14px" }}
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
                    active={currentPath === "/Inventory/ColumnUsage"}
                    style={{ fontSize: "14px" }}
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
                    active={currentPath === "/Inventory/BatchAssignment"}
                    style={{ fontSize: "14px" }}
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
                        <FaPerson style={{position:"absolute", left:"-41px"}} />



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
                    active={currentPath === "/Inventory/StandardRegistration"}
                    style={{ fontSize: "14px" }}
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
                    active={currentPath === "/Inventory/InvLotRegistration"}
                    style={{ fontSize: "14px" }}
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
                    active={currentPath === "/Inventory/UsageRegistration"}
                    style={{ fontSize: "14px" }}
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
                        <FaPeopleRoof style={{position:"absolute", left:"-41px"}}/>

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
                    ctive={currentPath === "/Inventory/CultureRegistration"}
                    style={{ fontSize: "14px" }}
                    a
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
                    ctive={currentPath === "/Inventory/RefrenceCulture"}
                    style={{ fontSize: "14px" }}
                    a
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
                    active={
                      currentPath === "/Inventory/CultureTemplateConfiguration"
                    }
                    style={{ fontSize: "14px" }}
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
                    ctive={currentPath === "/Inventory/RefrenceCultureLot"}
                    style={{ fontSize: "14px" }}
                    a
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
                    ctive={currentPath === "/Inventory/CultureLotAcceptance"}
                    style={{ fontSize: "14px" }}
                    a
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
                      <TfiLayoutMediaOverlay style={{position:"absolute", left:"-41px"}}/>


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
                    active={currentPath === "/Inventory/MediaOnboarding"}
                    style={{ fontSize: "14px" }}
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
                    active={currentPath === "/Inventory/MediaContainerType"}
                    style={{ fontSize: "14px" }}
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
                    active={
                      currentPath === "/Inventory/MediaTemplateConfiguration"
                    }
                    style={{ fontSize: "14px" }}
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
                    active={currentPath === "/Inventory/MediaLot"}
                    style={{ fontSize: "14px" }}
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
                    active={currentPath === "/Inventory/MediaLotContainerIssue"}
                    style={{ fontSize: "14px" }}
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
                    active={currentPath === "/Inventory/MediaLotAcceptance"}
                    style={{ fontSize: "14px" }}
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
                    active={currentPath === "/Inventory/MediaLotUsage"}
                    style={{ fontSize: "14px" }}
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
                      <FaWater style={{position:"absolute", left:"-41px"}}/>

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
                    active={currentPath === "/Inventory/SampleArea"}
                    style={{ fontSize: "14px" }}
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
                    active={currentPath === "/Inventory/ProcessingSystem"}
                    style={{ fontSize: "14px" }}
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
                    active={currentPath === "/Inventory/Schedule"}
                    style={{ fontSize: "14px" }}
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
                    active={currentPath === "/Inventory/Unschedule"}
                    style={{ fontSize: "14px" }}
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
                    active={currentPath === "/Inventory/Acknowledgement"}
                    style={{ fontSize: "14px" }}
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
                    active={currentPath === "/Inventory/ScheduleTermination"}
                    style={{ fontSize: "14px" }}
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
                        <VscServerEnvironment style={{position:"absolute", left:"-41px"}}/>

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
                    active={currentPath === "/Inventory/Facility"}
                    style={{ fontSize: "14px" }}
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
                    active={currentPath === "/Inventory/Location"}
                    style={{ fontSize: "14px" }}
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
                    active={currentPath === "/Inventory/EMMoniteringDetails"}
                    style={{ fontSize: "14px" }}
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
                    style={{ fontSize: "14px" }}
                    active={currentPath === "/Inventory/EMCOATemplate"}
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
                    active={currentPath === "/Inventory/OOATemplate"}
                    style={{ fontSize: "14px" }}
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
                    active={currentPath === "/Inventory/LocationSamples"}
                    style={{ fontSize: "14px" }}
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
                    active={currentPath === "/Inventory/SamplingSchedule"}
                    style={{ fontSize: "14px" }}
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
                    active={currentPath === "/Inventory/BatchSample"}
                    style={{ fontSize: "14px" }}
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
                    active={currentPath === "/Inventory/SampleLogin"}
                    style={{ fontSize: "14px" }}
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
                    active={currentPath === "/Inventory/AcknowledgeSample"}
                    style={{ fontSize: "14px" }}
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
                    active={currentPath === "/Inventory/BatchSampleAllotment"}
                    style={{ fontSize: "14px" }}
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
                    active={currentPath === "/Inventory/BatchTestslist"}
                    style={{ fontSize: "14px" }}
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
                  active={currentPath === "/instrumentMaster/registration"}
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
                  active={currentPath === "/instrumentMaster/instrumentCategory"}
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
                  active={currentPath === "/instrumentMaster/instrumentModule"}
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
                  active={currentPath === "/instrumentMaster/instrumentUsage"}
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
                {" "}
                <CNavItem
                  href="#"
                  active={currentPath === "/stock-management/stocks-verification"}
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
                  active={currentPath === "/stock-management/stocks-onboarding"}
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
                  active={currentPath === "/stock-management/material"}
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
                  active={currentPath === "/stock-management/inventory"}
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
                  active={currentPath === "/calibration/calibration-type"}
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
                  active={currentPath === "/calibration/calibration-frequency"}
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
                  active={currentPath === "/calibration/calibration-data-sheet"}
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
                  active={currentPath === "/calibration/sample-login-template"}
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
                  active={currentPath === "/calibration/calibration-schedule"}
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
                  active={currentPath === "/calibration/calibration-record"}
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
                  active={currentPath === "/calibration/sample-login"}
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
                  active={currentPath === "/calibration/calibration-calender"}
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
                  active={
                    currentPath === "/reportsCertification/problemReporting"
                  }
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
                  active={
                    currentPath === "/reportsCertification/serviceReporting"
                  }
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
                  active={currentPath === "/reportsCertification/coaTemplate1321"}
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
                  active={currentPath === "/reportsCertification/releasedCoa"}
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
                  active={
                    currentPath === "/reportsCertification/investigationCoa"
                  }
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
                style={{ gap: "18px" }}
                active={currentPath === "/vender"}
              >
                <CiShop />
                Vendor
              </CNavItem>
            </Link>
            <Link to="/clients">
              <CNavItem
                href="#"
                style={{ gap: "18px" }}
                active={currentPath === "/clients"}
              >
                <FaPeopleLine />
                Clients
              </CNavItem>
            </Link>
            <Link to="/plants">
              <CNavItem
                href="#"
                style={{ gap: "18px" }}
                active={currentPath === "/plants"}
              >
                <PiNuclearPlant />
                Plants
              </CNavItem>
            </Link>

            <Link to="/workFlow">
              <CNavItem
                href="#"
                style={{ gap: "18px" }}
                active={currentPath === "/workFlow"}
              >
                <GoWorkflow />
                Workflow
              </CNavItem>
            </Link>

            <Link to="/auditTrail">
              <CNavItem
                href="#"
                style={{ gap: "18px" }}
                active={currentPath === "/auditTrail"}
              >
                <AiOutlineAudit />
                Audit Trail
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
                  active={currentPath === "/settings/businessAssociate"}
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
                  active={currentPath === "/settings/labelManagement"}
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
                  active={currentPath === "/settings/functionalGrouping"}
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
                  active={currentPath === "/settings/worksheets"}
                >
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Worksheets
                </CNavItem>
              </Link>
              <Link to="/settings/groupName">
                <CNavItem href="#" active={currentPath === "/settings/groupName"}>
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Group Name
                </CNavItem>
              </Link>
              <Link to="/settings/investigationTemplate">
                <CNavItem
                  href="#"
                  active={currentPath === "/settings/investigationTemplate"}
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
                  active={currentPath === "/settings/chemicalCategory"}
                >
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Chemical Category
                </CNavItem>
              </Link>
              <Link to="/settings/grade">
                <CNavItem href="#" active={currentPath === "/settings/grade"}>
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Grade
                </CNavItem>
              </Link>
              <Link to="/settings/handlingSymbol">
                <CNavItem
                  href="#"
                  active={currentPath === "/settings/handlingSymbol"}
                >
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Handling Symbol
                </CNavItem>
              </Link>
              <Link to="/settings/accessRight">
                <CNavItem
                  href="#"
                  active={currentPath === "/settings/accessRight"}
                >
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Access Right
                </CNavItem>
              </Link>
              <Link to="/settings/projects">
                <CNavItem href="#" active={currentPath === "/settings/projects"}>
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Projects
                </CNavItem>
              </Link>
              <Link to="/settings/template">
                <CNavItem href="#" active={currentPath === "/settings/template"}>
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Template
                </CNavItem>
              </Link>
              <Link to="/settings/trainingConfirmation">
                <CNavItem
                  href="#"
                  active={currentPath === "/settings/trainingConfirmation"}
                >
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Training Confirmations
                </CNavItem>
              </Link>
              <Link to="/settings/proposal">
                <CNavItem href="#" active={currentPath === "/settings/proposal"}>
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Proposal
                </CNavItem>
              </Link>
              <Link to="/settings/nominations">
                <CNavItem
                  href="#"
                  active={currentPath === "/settings/nominations"}
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
                  active={currentPath === "/settings/reQualificationRequest"}
                >
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Re-Qualification Request
                </CNavItem>
              </Link>
              <Link to="/settings/resources">
                <CNavItem href="#" active={currentPath === "/settings/resources"}>
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Resources
                </CNavItem>
              </Link>
              <Link to="/settings/typeOfSection">
                <CNavItem
                  href="#"
                  active={currentPath === "/settings/typeOfSection"}
                >
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Type of Section
                </CNavItem>
              </Link>
              <Link to="/settings/wosTest">
                <CNavItem href="#" active={currentPath === "/settings/wosTest"}>
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  WOS Test
                </CNavItem>
              </Link>
              <Link to="/settings/serviceprovider">
                <CNavItem
                  href="#"
                  active={currentPath === "/settings/serviceprovider"}
                >
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Service Provider
                </CNavItem>
              </Link>
              <Link to="/settings/externalRegistration">
                <CNavItem
                  href="#"
                  active={currentPath === "/settings/externalRegistration"}
                >
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  External Registration
                </CNavItem>
              </Link>
              <Link to="/settings/testTechniques">
                <CNavItem
                  href="#"
                  active={currentPath === "/settings/testTechniques"}
                >
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Test Techniques
                </CNavItem>
              </Link>
              <Link to="/settings/instrumentRegistration">
                <CNavItem
                  href="#"
                  active={currentPath === "/settings/instrumentRegistration"}
                >
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Instrument Regitration
                </CNavItem>
              </Link>
              <Link to="/settings/stability">
                <CNavItem href="#" active={currentPath === "/settings/stability"}>
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Stability
                </CNavItem>
              </Link>
              <Link to="/settings/testHistory">
                <CNavItem
                  href="#"
                  active={currentPath === "/settings/testHistory"}
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
                  active={currentPath === "/settings/settingVendors"}
                >
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Vendor
                </CNavItem>
              </Link>
              <Link to="/settings/appConfiguration">
                <CNavItem
                  href="#"
                  active={currentPath === "/settings/appConfiguration"}
                >
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  App Configuration
                </CNavItem>
              </Link>
            </CNavGroup>
          </CSidebarNav>
        </CSidebar>
      </>
    );
  }

  export default Sidebar;
