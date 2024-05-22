import { cilSpeedometer, cilPuzzle } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import {
  CNavGroup,
  CNavItem,
  CSidebar,
  CSidebarBrand,
  CSidebarHeader,
  CSidebarNav,
} from "@coreui/react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <CSidebar className="border-end app-sidebar h-100" colorScheme="dark">
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
                  width: "290px",
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
            <CNavItem href="#">
              <CIcon customClassName="nav-icon" icon={cilSpeedometer} />
              Dashboard
            </CNavItem>
          </Link>
          <Link to="/approval">
            <CNavItem href="#">
              <CIcon customClassName="nav-icon" icon={cilSpeedometer} />
              Approval
            </CNavItem>
          </Link>
          <Link to="/stCondition">
            <CNavItem href="#">
              <CIcon customClassName="nav-icon" icon={cilSpeedometer} />
              Storage Condition
            </CNavItem>
          </Link>
          <Link to="/storage-location">
            <CNavItem href="#">
              <CIcon customClassName="nav-icon" icon={cilSpeedometer} />
              Storage Location
            </CNavItem>
          </Link>
          <CNavGroup
            toggler={
              <>
                <CIcon customClassName="nav-icon" icon={cilPuzzle} /> User
                Management
              </>
            }
          >
            <Link to="/department">
              <CNavItem href="#">
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                Department
              </CNavItem>
            </Link>
            <Link to="/users">
              <CNavItem href="#">
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                Users
              </CNavItem>
            </Link>
            <Link to="/roles">
              <CNavItem href="#">
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
                <CIcon customClassName="nav-icon" icon={cilPuzzle} /> Sample
                Logins
              </>
            }
          >
            <Link to="/samplelogin">
              <CNavItem href="#">
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                Sample Login
              </CNavItem>
            </Link>
            <Link to="/investigationl1">
              <CNavItem href="#">
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                Investigation L1
              </CNavItem>
            </Link>
            <Link to="/investigationl2">
              <CNavItem href="#">
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
                <CIcon customClassName="nav-icon" icon={cilPuzzle} /> Stability
              </>
            }
          >
            <Link to="/storageCondition1321">
              <CNavItem href="#">
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                Storage Condition
              </CNavItem>
            </Link>
            <Link to="/standardProtocol">
              <CNavItem href="#">
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                Standard Protocol
              </CNavItem>
            </Link>
            <Link to="/storageChamber">
              <CNavItem href="#">
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                Storage Chamber
              </CNavItem>
            </Link>
            <Link to="/chamberConditionMapping">
              <CNavItem href="#">
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                Chamber Condition Mapping
              </CNavItem>
            </Link>
            <Link to="/chamberTransfer">
              <CNavItem href="#">
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                Chamber Transfer
              </CNavItem>
            </Link>
            <Link to="/stabilityProtocol">
              <CNavItem href="#">
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                Stability protocol
              </CNavItem>
            </Link>
            <Link to="/sampleStorage">
              <CNavItem href="#">
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                Sample Storage
              </CNavItem>
            </Link>
            <Link to="/coaTemplate">
              <CNavItem href="#">
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                COA Template
              </CNavItem>
            </Link>
            <Link to="/sampleLoginTemplate">
              <CNavItem href="#">
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                Sample Login Template
              </CNavItem>
            </Link>
            <Link to="/worksheetHeader">
              <CNavItem href="#">
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                Worksheet Header
              </CNavItem>
            </Link>
            <Link to="/summaryReportHeader">
              <CNavItem href="#">
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                Summary Report Header
              </CNavItem>
            </Link>
            <Link to="/sampleAcceptanceTemplate">
              <CNavItem href="#">
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                Sample Acceptance Template
              </CNavItem>
            </Link>
            <Link to="/sampleLogin1321">
              <CNavItem href="#">
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                Sample Login
              </CNavItem>
            </Link>
            <Link to="/sampleAcceptance">
              <CNavItem href="#">
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
                <CIcon customClassName="nav-icon" icon={cilPuzzle} /> Masters
              </>
            }
          >
            <Link to="/Masters/Product">
              <CNavItem href="#">
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                Product/Material Master
              </CNavItem>
            </Link>
            <Link to="/Masters/SampleType">
              <CNavItem href="#">
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                Sample Type
              </CNavItem>
            </Link>
            <Link to="/Masters/SpecificationType">
              <CNavItem href="#">
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                Specification Type
              </CNavItem>
            </Link>
            <Link to="/Masters/Specifications">
              <CNavItem href="#">
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                Specifications
              </CNavItem>
            </Link>
            <Link to="/Masters/TestCategories">
              <CNavItem href="#">
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                Test Categories
              </CNavItem>
            </Link>
            <Link to="/Masters/TestRegistrations">
              <CNavItem href="#">
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                Test Registrations
              </CNavItem>
            </Link>
            <Link to="/Masters/TestPlan">
              <CNavItem href="#">
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                Test Plan
              </CNavItem>
            </Link>
            <Link to="/Masters/MyTests">
              <CNavItem href="#">
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                My Tests
              </CNavItem>
            </Link>
          </CNavGroup>
          <CNavGroup
            toggler={
              <>
                <CIcon customClassName="nav-icon" icon={cilPuzzle} /> Sampling
              </>
            }
          >
            <Link to="/sampling/samplingConfiguration">
              <CNavItem href="#">
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                Sampling Sampling Configuration
              </CNavItem>
            </Link>
            <Link to="/sampling/samplingRule">
              <CNavItem href="#">
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                Sampling Rule
              </CNavItem>
            </Link>
            <Link to="/sampling/eSamping">
              <CNavItem href="#">
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                E-Sampling
              </CNavItem>
            </Link>
            <Link to="/sampling/samplingField">
              <CNavItem href="#">
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                Sampling Field
              </CNavItem>
            </Link>
            <Link to="/sampling/samplingTemplate">
              <CNavItem href="#">
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
                <Link to="/Inventory/Inventory" style={{ color: "white" }}>
                  <span
                    className="nav-icon"
                    style={{
                      color: "white",
                      position: "relative",
                      left: "3px",
                    }}
                  >
                    <CIcon customClassName="nav-icon" icon={cilPuzzle} />
                    <p
                      style={{
                        fontSize: "17px",
                        position: "relative",
                        top: "7px",
                      }}
                    >
                      {" "}
                      Inventory
                    </p>
                  </span>
                </Link>
              </>
            }
          >
            <CNavGroup
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
                      <CIcon customClassName="nav-icon" icon={cilPuzzle} />
                      <p
                        style={{
                          fontSize: "17px",
                          position: "relative",
                          top: "7px",
                        }}
                      >
                        {" "}
                        Working Status
                      </p>
                    </span>
                  </Link>
                </>
              }
            >
              <Link to="/Inventory/InternalRegistration">
                <CNavItem href="#">
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Internal Registration
                </CNavItem>
              </Link>

              <Link to="/Inventory/WorkingStandardIssue">
                <CNavItem href="#">
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Working Standard Issue
                </CNavItem>
              </Link>

              <Link to="/Inventory/WorkingStandardUsage">
                <CNavItem href="#">
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Working Standard Usage
                </CNavItem>
              </Link>
            </CNavGroup>

            <CNavGroup
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
                      <CIcon customClassName="nav-icon" icon={cilPuzzle} />
                      <p
                        style={{
                          fontSize: "17px",
                          position: "relative",
                          top: "7px",
                        }}
                      >
                        {" "}
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
                    <Link to="/Inventory/InternalRegistration">
                      <CNavItem
                        href="#"
                        style={{ position: "relative", left: "-47px" }}
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
                <CNavItem href="#">
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Solutions Template
                </CNavItem>
              </Link>

              <Link to="/Inventory/SolutionStandardization">
                <CNavItem href="#">
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Solutions Standardization
                </CNavItem>
              </Link>

              <Link to="/Inventory/SolutionUsage">
                <CNavItem href="#">
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Solution Usage
                </CNavItem>
              </Link>
            </CNavGroup>

            <CNavGroup
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
                      <CIcon customClassName="nav-icon" icon={cilPuzzle} />
                      <p
                        style={{
                          fontSize: "17px",
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
                <CNavItem href="#">
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Chemical Registration
                </CNavItem>
              </Link>

              <Link to="/Inventory/ChemicalReagent">
                <CNavItem href="#">
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Chemical / Reagent Index
                </CNavItem>
              </Link>

              <Link to="/Inventory/LotRegistration">
                <CNavItem href="#">
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Lot Registration
                </CNavItem>
              </Link>

              <Link to="/Inventory/ChemicalReagentReports">
                <CNavItem href="#">
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Chemical Reagent / Reports
                </CNavItem>
              </Link>
              <Link to="/Inventory/ChemicalUsage">
                <CNavItem href="#">
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Chemical Usage
                </CNavItem>
              </Link>
              <Link to="/Inventory/ChemicalIssues">
                <CNavItem href="#">
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Chemical Issues
                </CNavItem>
              </Link>
            </CNavGroup>

            <CNavGroup
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
                      <CIcon customClassName="nav-icon" icon={cilPuzzle} />
                      <p
                        style={{
                          fontSize: "17px",
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
                <CNavItem href="#">
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Application
                </CNavItem>
              </Link>

              <Link to="/Inventory/ColumnRegistration">
                <CNavItem href="#">
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Registration
                </CNavItem>
              </Link>

              <Link to="/Inventory/PerformanceTest">
                <CNavItem href="#">
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Performance test
                </CNavItem>
              </Link>

              <Link to="/Inventory/Assignment">
                <CNavItem href="#">
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Assignment
                </CNavItem>
              </Link>
              <Link to="/Inventory/Qualification">
                <CNavItem href="#">
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Qualification
                </CNavItem>
              </Link>
              <Link to="/Inventory/ColumnUsage">
                <CNavItem href="#">
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Usage
                </CNavItem>
              </Link>
              <Link to="/Inventory/BatchAssignment">
                <CNavItem href="#">
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Batch Assignment
                </CNavItem>
              </Link>
            </CNavGroup>

            <CNavGroup
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
                      <CIcon customClassName="nav-icon" icon={cilPuzzle} />
                      <p
                        style={{
                          fontSize: "17px",
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
                <CNavItem href="#">
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Standard Registration
                </CNavItem>
              </Link>

              <Link to="/Inventory/InvLotRegistration">
                <CNavItem href="#">
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Lot Registration
                </CNavItem>
              </Link>

              <Link to="/Inventory/UsageRegistration">
                <CNavItem href="#">
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Usage Registration
                </CNavItem>
              </Link>
            </CNavGroup>

            <CNavGroup
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
                      <CIcon customClassName="nav-icon" icon={cilPuzzle} />
                      <p
                        style={{
                          fontSize: "17px",
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
                <CNavItem href="#">
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Culture Registration
                </CNavItem>
              </Link>

              <Link to="/Inventory/RefrenceCulture">
                <CNavItem href="#">
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Refrence Culture
                </CNavItem>
              </Link>

              <Link to="/Inventory/CultureTemplateConfiguration">
                <CNavItem href="#">
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Culture Template Configuration
                </CNavItem>
              </Link>

              <Link to="/Inventory/RefrenceCultureLot">
                <CNavItem href="#">
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Refrence Culture Lot
                </CNavItem>
              </Link>

              <Link to="/Inventory/CultureLotAcceptance">
                <CNavItem href="#">
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Culture Lot Acceptance
                </CNavItem>
              </Link>
            </CNavGroup>

            <CNavGroup
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
                      <CIcon customClassName="nav-icon" icon={cilPuzzle} />
                      <p
                        style={{
                          fontSize: "17px",
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
                <CNavItem href="#">
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Media Onboarding
                </CNavItem>
              </Link>
              <Link to="/Inventory/MediaContainerType">
                <CNavItem href="#">
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Media Container Type
                </CNavItem>
              </Link>
              <Link to="/Inventory/MediaTemplateConfiguration">
                <CNavItem href="#">
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Media Template Configuration
                </CNavItem>
              </Link>
              <Link to="/Inventory/MediaLot">
                <CNavItem href="#">
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Media Lot
                </CNavItem>
              </Link>
              <Link to="/Inventory/MediaLotContainerIssue">
                <CNavItem href="#">
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Media Lot Container Issue
                </CNavItem>
              </Link>
              <Link to="/Inventory/MediaLotAcceptance">
                <CNavItem href="#">
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Media Lot Acceptance
                </CNavItem>
              </Link>{" "}
              <Link to="/Inventory/MediaLotUsage">
                <CNavItem href="#">
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Media Lot Usage
                </CNavItem>
              </Link>
            </CNavGroup>

            <CNavGroup
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
                      <CIcon customClassName="nav-icon" icon={cilPuzzle} />
                      <p
                        style={{
                          fontSize: "17px",
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
                <CNavItem href="#">
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Sample Area
                </CNavItem>
              </Link>

              <Link to="/Inventory/ProcessingSystem">
                <CNavItem href="#">
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Processing System
                </CNavItem>
              </Link>

              <Link to="/Inventory/Schedule">
                <CNavItem href="#">
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Schedule
                </CNavItem>
              </Link>

              <Link to="/Inventory/Unschedule">
                <CNavItem href="#">
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Unschedule
                </CNavItem>
              </Link>

              <Link to="/Inventory/Acknowledgement">
                <CNavItem href="#">
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Acknowledgement
                </CNavItem>
              </Link>
              <Link to="/Inventory/ScheduleTermination">
                <CNavItem href="#">
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Schedule Termination
                </CNavItem>
              </Link>
            </CNavGroup>

            <CNavGroup
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
                      <CIcon customClassName="nav-icon" icon={cilPuzzle} />
                      <p
                        style={{
                          fontSize: "17px",
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
                <CNavItem href="#">
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Facility
                </CNavItem>
              </Link>

              <Link to="/Inventory/Location">
                <CNavItem href="#">
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Location
                </CNavItem>
              </Link>

              <Link to="/Inventory/EMMoniteringDetails">
                <CNavItem href="#">
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  EM Monitering Details
                </CNavItem>
              </Link>

              <Link to="/Inventory/EMCOATemplate">
                <CNavItem href="#">
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  EM COA Template
                </CNavItem>
              </Link>

              <Link to="/Inventory/OOATemplate">
                <CNavItem href="#">
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  OOA Template
                </CNavItem>
              </Link>
              <Link to="/Inventory/LocationSamples">
                <CNavItem href="#">
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Location Samples
                </CNavItem>
              </Link>
              <Link to="/Inventory/ScheduleTermination">
                <CNavItem href="#">
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Sampling Schedule
                </CNavItem>
              </Link> <Link to="/Inventory/ScheduleTermination">
                <CNavItem href="#">
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Batch Sample
                </CNavItem>
              </Link> <Link to="/Inventory/ScheduleTermination">
                <CNavItem href="#">
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Sample Login
                </CNavItem>
              </Link> <Link to="/Inventory/ScheduleTermination">
                <CNavItem href="#">
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Acknowledge Sample
                </CNavItem>
              </Link> <Link to="/Inventory/ScheduleTermination">
                <CNavItem href="#">
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Batch Sample Allotment
                </CNavItem>
              </Link> <Link to="/Inventory/ScheduleTermination">
                <CNavItem href="#">
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Batch Tests list
                </CNavItem>
              </Link>



            </CNavGroup>
          </CNavGroup>



          <CNavGroup
            toggler={
              <>
                <CIcon customClassName="nav-icon" icon={cilPuzzle} /> Instrument
                Master
              </>
            }
          >
            <Link to="/instrumentMaster/registration">
              <CNavItem href="#">
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                Registration
              </CNavItem>
            </Link>
            <Link to="/instrumentMaster/instrumentCategory">
              <CNavItem href="#">
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                Instrument Category
              </CNavItem>
            </Link>
            <Link to="/instrumentMaster/instrumentModule">
              <CNavItem href="#">
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                Instrument Module
              </CNavItem>
            </Link>
            <Link to="/instrumentMaster/instrumentUsage">
              <CNavItem href="#">
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
                <CIcon customClassName="nav-icon" icon={cilPuzzle} /> Stock
                Management
              </>
            }
          >
            <Link to="/stock-management/stocks-verification">
              {" "}
              <CNavItem href="#">
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                Stocks Verification
              </CNavItem>
            </Link>
            <Link to="/stock-management/stocks-onboarding">
              <CNavItem href="#">
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                Stocks Onboarding
              </CNavItem>
            </Link>
            <Link to="/stock-management/material">
              <CNavItem href="#">
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                Material
              </CNavItem>
            </Link>
            <Link to="/stock-management/inventory">
              <CNavItem href="#">
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
                <CIcon customClassName="nav-icon" icon={cilPuzzle} />{" "}
                Calibration
              </>
            }
          >
            <CNavItem href="#">
              <span className="nav-icon">
                <span className="nav-icon-bullet"></span>
              </span>
              Calibration Type
            </CNavItem>
            <CNavItem href="#">
              <span className="nav-icon">
                <span className="nav-icon-bullet"></span>
              </span>
              Calibration Frequency
            </CNavItem>
            <CNavItem href="#">
              <span className="nav-icon">
                <span className="nav-icon-bullet"></span>
              </span>
              Calibration Data Sheet
            </CNavItem>
            <CNavItem href="#">
              <span className="nav-icon">
                <span className="nav-icon-bullet"></span>
              </span>
              Sample Login Template
            </CNavItem>
            <CNavItem href="#">
              <span className="nav-icon">
                <span className="nav-icon-bullet"></span>
              </span>
              Calibration Schedule
            </CNavItem>
            <CNavItem href="#">
              <span className="nav-icon">
                <span className="nav-icon-bullet"></span>
              </span>
              Calibration Record
            </CNavItem>
            <CNavItem href="#">
              <span className="nav-icon">
                <span className="nav-icon-bullet"></span>
              </span>
              Sample Login
            </CNavItem>
            <CNavItem href="#">
              <span className="nav-icon">
                <span className="nav-icon-bullet"></span>
              </span>
              Calibration Calendar
            </CNavItem>
          </CNavGroup>
          <CNavGroup
            toggler={
              <>
                <CIcon customClassName="nav-icon" icon={cilPuzzle} /> Reports /
                Certificate
              </>
            }
          >
            <Link to="/reportsCertification/problemReporting">
              <CNavItem href="#">
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                Problem Reporting
              </CNavItem>
            </Link>
            <Link to="/reportsCertification/serviceReporting">
              <CNavItem href="#">
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                Service Reporting
              </CNavItem>
            </Link>
            <Link to="/reportsCertification/coaTemplate1321">
              <CNavItem href="#">
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                Coa Template
              </CNavItem>
            </Link>
            <Link to="/reportsCertification/releasedCoa">
              <CNavItem href="#">
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                Relaesed Coa
              </CNavItem>
            </Link>
            <Link to="/reportsCertification/investigationCoa">
              <CNavItem href="#">
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                Investigation Coa
              </CNavItem>
            </Link>
          </CNavGroup>
          {/* <CNavItem href="#">
            <CIcon customClassName="nav-icon" icon={cilSpeedometer} />
            Vendor
          </CNavItem>
          <CNavItem href="#">
            <CIcon customClassName="nav-icon" icon={cilSpeedometer} />
            Clients
          </CNavItem>
          <CNavItem href="#">
            <CIcon customClassName="nav-icon" icon={cilSpeedometer} />
            Plants
          </CNavItem>
          <CNavItem href="#">
            <CIcon customClassName="nav-icon" icon={cilSpeedometer} />
            Workflow
          </CNavItem>
          <CNavItem href="#">
            <CIcon customClassName="nav-icon" icon={cilSpeedometer} />
            Audit Trail
          </CNavItem> */}
          {/* <CNavGroup
            toggler={
              <>
                <CIcon customClassName="nav-icon" icon={cilPuzzle} /> Settings
              </>
            }
          >
            <CNavItem href="#">
              <CIcon customClassName="nav-icon" icon={cilSpeedometer} />
              Business Associate
            </CNavItem>
            <CNavItem href="#">
              <CIcon customClassName="nav-icon" icon={cilSpeedometer} />
              Label Management
            </CNavItem>
            <CNavItem href="#">
              <CIcon customClassName="nav-icon" icon={cilSpeedometer} />
              Functional Grouping
            </CNavItem>
            <CNavItem href="#">
              <CIcon customClassName="nav-icon" icon={cilSpeedometer} />
              Worksheets
            </CNavItem>
            <CNavItem href="#">
              <CIcon customClassName="nav-icon" icon={cilSpeedometer} />
              Group Name
            </CNavItem>
            <CNavItem href="#">
              <CIcon customClassName="nav-icon" icon={cilSpeedometer} />
              Investigation Template
            </CNavItem>
            <CNavItem href="#">
              <CIcon customClassName="nav-icon" icon={cilSpeedometer} />
              Chemical Category
            </CNavItem>
            <CNavItem href="#">
              <CIcon customClassName="nav-icon" icon={cilSpeedometer} />
              Grade
            </CNavItem>
            <CNavItem href="#">
              <CIcon customClassName="nav-icon" icon={cilSpeedometer} />
              Handling Symbol
            </CNavItem>
            <CNavItem href="#">
              <CIcon customClassName="nav-icon" icon={cilSpeedometer} />
              Access Right
            </CNavItem>
            <CNavItem href="#">
              <CIcon customClassName="nav-icon" icon={cilSpeedometer} />
              Projects
            </CNavItem>
            <CNavItem href="#">
              <CIcon customClassName="nav-icon" icon={cilSpeedometer} />
              Template
            </CNavItem>
            <CNavItem href="#">
              <CIcon customClassName="nav-icon" icon={cilSpeedometer} />
              Training Confirmations
            </CNavItem>
            <CNavItem href="#">
              <CIcon customClassName="nav-icon" icon={cilSpeedometer} />
              Proposal
            </CNavItem>
            <CNavItem href="#">
              <CIcon customClassName="nav-icon" icon={cilSpeedometer} />
              Nominations
            </CNavItem>
            <CNavItem href="#">
              <CIcon customClassName="nav-icon" icon={cilSpeedometer} />
              Re-Qualification Request
            </CNavItem>
            <CNavItem href="#">
              <CIcon customClassName="nav-icon" icon={cilSpeedometer} />
              Resources
            </CNavItem>
            <CNavItem href="#">
              <CIcon customClassName="nav-icon" icon={cilSpeedometer} />
              Type of Section
            </CNavItem>
            <CNavItem href="#">
              <CIcon customClassName="nav-icon" icon={cilSpeedometer} />
              WOS Test
            </CNavItem>
            <CNavItem href="#">
              <CIcon customClassName="nav-icon" icon={cilSpeedometer} />
              Service Provider
            </CNavItem>
            <CNavItem href="#">
              <CIcon customClassName="nav-icon" icon={cilSpeedometer} />
              External Registration
            </CNavItem>
            <CNavItem href="#">
              <CIcon customClassName="nav-icon" icon={cilSpeedometer} />
              Test Techniques
            </CNavItem>
            <CNavItem href="#">
              <CIcon customClassName="nav-icon" icon={cilSpeedometer} />
              Instrument Regitration
            </CNavItem>
            <CNavItem href="#">
              <CIcon customClassName="nav-icon" icon={cilSpeedometer} />
              Stability
            </CNavItem>
            <CNavItem href="#">
              <CIcon customClassName="nav-icon" icon={cilSpeedometer} />
              Test History
            </CNavItem>
            <CNavItem href="#">
              <CIcon customClassName="nav-icon" icon={cilSpeedometer} />
              Vendor
            </CNavItem>
            <CNavItem href="#">
              <CIcon customClassName="nav-icon" icon={cilSpeedometer} />
              App Configuration
            </CNavItem>
          </CNavGroup> */}
{/* 
          <Link to="/Inventory/SolutionUsage">
            <CNavItem href="#">
              <span className="nav-icon">
                <span className="nav-icon-bullet"></span>
              </span>
              Solution Usage
            </CNavItem>
          </Link>

          <Link to="/Inventory/Chemicals">
            <CNavItem href="#">
              <span className="nav-icon">
                <span className="nav-icon-bullet"></span>
              </span>
              Chemicals
            </CNavItem>
          </Link>
          <Link to="/Inventory/Columns">
            <CNavItem href="#">
              <span className="nav-icon">
                <span className="nav-icon-bullet"></span>
              </span>
              Columns
            </CNavItem>
          </Link>
          <Link to="/Inventory/ReferenceStandards">
            <CNavItem href="#">
              <span className="nav-icon">
                <span className="nav-icon-bullet"></span>
              </span>
              Reference Standards
            </CNavItem>
          </Link>
          <Link to="/Inventory/CultureManagement">
            <CNavItem href="#">
              <span className="nav-icon">
                <span className="nav-icon-bullet"></span>
              </span>
              Culture Management
            </CNavItem>
          </Link>
          <Link to="/Inventory/Media">
            <CNavItem href="#">
              <span className="nav-icon">
                <span className="nav-icon-bullet"></span>
              </span>
              Media
            </CNavItem>
          </Link>
          <Link to="/Inventory/WaterManagement">
            <CNavItem href="#">
              <span className="nav-icon">
                <span className="nav-icon-bullet"></span>
              </span>
              Water Management
            </CNavItem>
          </Link>
          <Link to="/Inventory/Environment">
            <CNavItem href="#">
              <span className="nav-icon">
                <span className="nav-icon-bullet"></span>
              </span>
              Environment
            </CNavItem>
          </Link> */}

          <CNavGroup
            toggler={
              <>
                <CIcon customClassName="nav-icon" icon={cilPuzzle} /> Instrument
                Master
              </>
            }
          >
            <Link to="/instrumentMaster/registration">
              <CNavItem href="#">
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                Registration
              </CNavItem>
            </Link>
            <Link to="/instrumentMaster/instrumentCategory">
              <CNavItem href="#">
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                Instrument Category
              </CNavItem>
            </Link>
            <Link to="/instrumentMaster/instrumentModule">
              <CNavItem href="#">
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                Instrument Module
              </CNavItem>
            </Link>
            <Link to="/instrumentMaster/instrumentUsage">
              <CNavItem href="#">
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
                <CIcon customClassName="nav-icon" icon={cilPuzzle} /> Stock
                Management
              </>
            }
          >
            <Link to="/stock-management/stocks-verification">
              {" "}
              <CNavItem href="#">
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                Stocks Verification
              </CNavItem>
            </Link>
            <Link to="/stock-management/stocks-onboarding">
              <CNavItem href="#">
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                Stocks Onboarding
              </CNavItem>
            </Link>
            <Link to="/stock-management/material">
              <CNavItem href="#">
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                Material
              </CNavItem>
            </Link>
            <Link to="/stock-management/inventory">
              <CNavItem href="#">
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
                <CIcon customClassName="nav-icon" icon={cilPuzzle} /> Calibration
              </>
            }
          >
            <Link to="/calibration/calibration-type"><CNavItem href="#"><span className="nav-icon"><span className="nav-icon-bullet"></span></span>Calibration Type</CNavItem></Link>
            <Link to="/calibration/calibration-frequency"><CNavItem href="#"><span className="nav-icon"><span className="nav-icon-bullet"></span></span>Calibration Frequency</CNavItem></Link>
            <Link to="/calibration/calibration-data-sheet"><CNavItem href="#"><span className="nav-icon"><span className="nav-icon-bullet"></span></span>Calibration Data Sheet</CNavItem></Link>
            <Link to="/calibration/sample-login-template"><CNavItem href="#"><span className="nav-icon"><span className="nav-icon-bullet"></span></span>Sample Login Template</CNavItem></Link>
            <Link to="/calibration/calibration-schedule"><CNavItem href="#"><span className="nav-icon"><span className="nav-icon-bullet"></span></span>Calibration Schedule</CNavItem></Link>
            <Link to="/calibration/calibration-record"><CNavItem href="#"><span className="nav-icon"><span className="nav-icon-bullet"></span></span>Calibration Record</CNavItem></Link>
            <Link to="/calibration/sample-login"><CNavItem href="#"><span className="nav-icon"><span className="nav-icon-bullet"></span></span>Sample Login</CNavItem></Link>
            <Link to="/calibration/calibration-calender"><CNavItem href="#"><span className="nav-icon"><span className="nav-icon-bullet"></span></span>Calibration Calendar</CNavItem></Link>
          </CNavGroup>

          <CNavGroup
            toggler={
              <>
                <CIcon customClassName="nav-icon" icon={cilPuzzle} /> Reports /
                Certificate
              </>
            }
          >
            <Link to="/reportsCertification/problemReporting">
              <CNavItem href="#">
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                Problem Reporting
              </CNavItem>
            </Link>
            <Link to="/reportsCertification/serviceReporting">
              <CNavItem href="#">
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                Service Reporting
              </CNavItem>
            </Link>
            <Link to="/reportsCertification/coaTemplate1321">
              <CNavItem href="#">
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                Coa Template
              </CNavItem>
            </Link>
            <Link to="/reportsCertification/releasedCoa">
              <CNavItem href="#">
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                Relaesed Coa
              </CNavItem>
            </Link>
            <Link to="/reportsCertification/investigationCoa">
              <CNavItem href="#">
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
                Investigation Coa
              </CNavItem>
            </Link>
          </CNavGroup>
          <Link to="/vender">
            {" "}
            <CNavItem href="#">
              <CIcon customClassName="nav-icon" icon={cilSpeedometer} />
              Vendor
            </CNavItem>
          </Link>
          <Link to="/clients">
            <CNavItem href="#">
              <CIcon customClassName="nav-icon" icon={cilSpeedometer} />
              Clients
            </CNavItem>
          </Link><Link to="/plants"><CNavItem href="#">
            <CIcon customClassName="nav-icon" icon={cilSpeedometer} />
            Plants
          </CNavItem></Link>

          <Link to="/workFlow"><CNavItem href="#">
            <CIcon customClassName="nav-icon" icon={cilSpeedometer} />
            Workflow
          </CNavItem></Link>

          <Link to="/auditTrail"><CNavItem href="#">
            <CIcon customClassName="nav-icon" icon={cilSpeedometer} />
            Audit Trail
          </CNavItem></Link>
          <CNavGroup
            toggler={
              <>
                <CIcon customClassName="nav-icon" icon={cilPuzzle} /> Settings
              </>
            }
          >
            <Link to="/settings/businessAssociate"><CNavItem href="#">
              <CIcon customClassName="nav-icon" icon={cilSpeedometer} />
              Business Associate
            </CNavItem></Link>
            <Link to="/settings/labelManagement"><CNavItem href="#">
              <CIcon customClassName="nav-icon" icon={cilSpeedometer} />
              Label Management
            </CNavItem></Link>
            <Link to="/settings/functionalGrouping"><CNavItem href="#">
              <CIcon customClassName="nav-icon" icon={cilSpeedometer} />
              Functional Grouping
            </CNavItem></Link>
            <Link to="/settings/worksheets"><CNavItem href="#">
              <CIcon customClassName="nav-icon" icon={cilSpeedometer} />
              Worksheets
            </CNavItem></Link>
            <Link to="/settings/groupName"><CNavItem href="#">
              <CIcon customClassName="nav-icon" icon={cilSpeedometer} />
              Group Name
            </CNavItem></Link>
            <Link to="/settings/investigationTemplate"><CNavItem href="#">
              <CIcon customClassName="nav-icon" icon={cilSpeedometer} />
              Investigation Template
            </CNavItem></Link>
            <Link to="/settings/chemicalCategory"><CNavItem href="#">
              <CIcon customClassName="nav-icon" icon={cilSpeedometer} />
              Chemical Category
            </CNavItem></Link>
            <Link to="/settings/grade"><CNavItem href="#">
              <CIcon customClassName="nav-icon" icon={cilSpeedometer} />
              Grade
            </CNavItem></Link>
            <Link to="/settings/handlingSymbol"><CNavItem href="#">
              <CIcon customClassName="nav-icon" icon={cilSpeedometer} />
              Handling Symbol
            </CNavItem></Link>
            <Link to="/settings/accessRight"><CNavItem href="#">
              <CIcon customClassName="nav-icon" icon={cilSpeedometer} />
              Access Right
            </CNavItem></Link>
            <Link to="/settings/projects"><CNavItem href="#">
              <CIcon customClassName="nav-icon" icon={cilSpeedometer} />
              Projects
            </CNavItem></Link>
            <Link to="/settings/template"><CNavItem href="#">
              <CIcon customClassName="nav-icon" icon={cilSpeedometer} />
              Template
            </CNavItem></Link>
            <Link to="/settings/trainingConfirmation"><CNavItem href="#">
              <CIcon customClassName="nav-icon" icon={cilSpeedometer} />
              Training Confirmations
            </CNavItem></Link>
            <Link to="/settings/proposal"><CNavItem href="#">
              <CIcon customClassName="nav-icon" icon={cilSpeedometer} />
              Proposal
            </CNavItem></Link>
            <Link to="/settings/nominations"><CNavItem href="#">
              <CIcon customClassName="nav-icon" icon={cilSpeedometer} />
              Nominations
            </CNavItem></Link>
            <Link to="/settings/reQualificationRequest"><CNavItem href="#">
              <CIcon customClassName="nav-icon" icon={cilSpeedometer} />
              Re-Qualification Request
            </CNavItem></Link>
            <Link to="/settings/resources"><CNavItem href="#">
              <CIcon customClassName="nav-icon" icon={cilSpeedometer} />
              Resources
            </CNavItem></Link>
            <Link to="/settings/typeOfSection"><CNavItem href="#">
              <CIcon customClassName="nav-icon" icon={cilSpeedometer} />
              Type of Section
            </CNavItem></Link>
            <Link to="/settings/wosTest"><CNavItem href="#">
              <CIcon customClassName="nav-icon" icon={cilSpeedometer} />
              WOS Test
            </CNavItem></Link>
            <Link to="/settings/serviceprovider"><CNavItem href="#">
              <CIcon customClassName="nav-icon" icon={cilSpeedometer} />
              Service Provider
            </CNavItem></Link>
            <Link to="/settings/externalRegistration"><CNavItem href="#">
              <CIcon customClassName="nav-icon" icon={cilSpeedometer} />
              External Registration
            </CNavItem></Link>
            <Link to="/settings/testTechniques"><CNavItem href="#">
              <CIcon customClassName="nav-icon" icon={cilSpeedometer} />
              Test Techniques
            </CNavItem></Link>
            <Link to="/settings/instrumentRegistration"><CNavItem href="#">
              <CIcon customClassName="nav-icon" icon={cilSpeedometer} />
              Instrument Regitration
            </CNavItem></Link>
            <Link to="/settings/stability"><CNavItem href="#">
              <CIcon customClassName="nav-icon" icon={cilSpeedometer} />
              Stability
            </CNavItem></Link>
            <Link to="/settings/testHistory"><CNavItem href="#">
              <CIcon customClassName="nav-icon" icon={cilSpeedometer} />
              Test History
            </CNavItem></Link>
            <Link to="/settings/settingVendors"><CNavItem href="#">
              <CIcon customClassName="nav-icon" icon={cilSpeedometer} />
              Vendor
            </CNavItem></Link>
            <Link to="/settings/appConfiguration"><CNavItem href="#">
              <CIcon customClassName="nav-icon" icon={cilSpeedometer} />
              App Configuration
            </CNavItem></Link>


          </CNavGroup>
        </CSidebarNav>
      </CSidebar>
    </>
  );
}

export default Sidebar;
