import { cilSpeedometer, cilPuzzle } from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import { CNavGroup, CNavItem, CSidebar, CSidebarBrand, CSidebarHeader, CSidebarNav } from "@coreui/react"
import { Link } from 'react-router-dom';

function Sidebar() {
     return (
          <>

               <CSidebar className="border-end app-sidebar h-100" colorScheme="dark">
                    <CSidebarHeader className="border-bottom">
                         <CSidebarBrand>
                              <Link to="/dashboard" className="logo d-flex align-items-center" style={{}}>
                                   <img src="/images/vidhyaGxp.png" alt="..." style={{ width: "290px", marginRight: "90px", paddingRight: "70px", filter: "drop-shadow(0 0 0 white)" }} />
                              </Link>
                         </CSidebarBrand>
                    </CSidebarHeader>
                    <CSidebarNav>
                         <Link to="/dashboard"><CNavItem href="#"><CIcon customClassName="nav-icon" icon={cilSpeedometer} />Dashboard</CNavItem></Link>
                         <Link to="/approval"><CNavItem href="#"><CIcon customClassName="nav-icon" icon={cilSpeedometer} />Approval</CNavItem></Link>
                         <Link to="/stCondition"><CNavItem href="#"><CIcon customClassName="nav-icon" icon={cilSpeedometer} />Storage Condition</CNavItem></Link>
                         <Link to="/storage-location"><CNavItem href="#"><CIcon customClassName="nav-icon" icon={cilSpeedometer} />Storage Location</CNavItem></Link>
                         <CNavGroup
                              toggler={
                                   <>
                                        <CIcon customClassName="nav-icon" icon={cilPuzzle} /> User Management

                                   </>
                              }
                         >
                              <Link to="/department"><CNavItem href="#"><span className="nav-icon"><span className="nav-icon-bullet"></span></span>Department</CNavItem></Link>
                              <Link to="/users"><CNavItem href="#"><span className="nav-icon"><span className="nav-icon-bullet"></span></span>Users</CNavItem></Link>
                              <Link to="/roles"><CNavItem href="#"><span className="nav-icon"><span className="nav-icon-bullet"></span></span>Roles</CNavItem></Link>
                         </CNavGroup>
                         <CNavGroup
                              toggler={
                                   <>
                                        <CIcon customClassName="nav-icon" icon={cilPuzzle} /> Sample Logins
                                   </>
                              }
                         >
                              <Link to="/samplelogin"><CNavItem href="#"><span className="nav-icon"><span className="nav-icon-bullet"></span></span>Sample Login</CNavItem></Link>
                              <Link to="/investigationl1"><CNavItem href="#"><span className="nav-icon"><span className="nav-icon-bullet"></span></span>Investigation L1</CNavItem></Link>
                              <Link to="/investigationl2"><CNavItem href="#"><span className="nav-icon"><span className="nav-icon-bullet"></span></span>Investigation L2</CNavItem></Link>
                         </CNavGroup>
                         <CNavGroup
                              toggler={
                                   <>
                                        <CIcon customClassName="nav-icon" icon={cilPuzzle} /> Stability
                                   </>
                              }
                         >
                              <Link to="/storageCondition1321"><CNavItem href="#"><span className="nav-icon"><span className="nav-icon-bullet"></span></span>Storage Condition</CNavItem></Link>
                              <Link to="/standardProtocol"><CNavItem href="#"><span className="nav-icon"><span className="nav-icon-bullet"></span></span>Standard Protocol</CNavItem></Link>
                              <Link to="/storageChamber"><CNavItem href="#"><span className="nav-icon"><span className="nav-icon-bullet"></span></span>Storage Chamber</CNavItem></Link>
                              <Link to="/chamberConditionMapping"><CNavItem href="#"><span className="nav-icon"><span className="nav-icon-bullet"></span></span>Chamber Condition Mapping</CNavItem></Link>
                              <Link to="/chamberTransfer"><CNavItem href="#"><span className="nav-icon"><span className="nav-icon-bullet"></span></span>Chamber Transfer</CNavItem></Link>
                              <Link to="/stabilityProtocol"><CNavItem href="#"><span className="nav-icon"><span className="nav-icon-bullet"></span></span>Stability protocol</CNavItem></Link>
                              <Link to="/sampleStorage"><CNavItem href="#"><span className="nav-icon"><span className="nav-icon-bullet"></span></span>Sample Storage</CNavItem></Link>
                              <Link to="/coaTemplate"><CNavItem href="#"><span className="nav-icon"><span className="nav-icon-bullet"></span></span>COA Template</CNavItem></Link>
                              <Link to="/sampleLoginTemplate"><CNavItem href="#"><span className="nav-icon"><span className="nav-icon-bullet"></span></span>Sample Login Template</CNavItem></Link>
                              <Link to="/worksheetHeader"><CNavItem href="#"><span className="nav-icon"><span className="nav-icon-bullet"></span></span>Worksheet Header</CNavItem></Link>
                              <Link to="/summaryReportHeader"><CNavItem href="#"><span className="nav-icon"><span className="nav-icon-bullet"></span></span>Summary Report Header</CNavItem></Link>
                              <Link to="/sampleAcceptanceTemplate"><CNavItem href="#"><span className="nav-icon"><span className="nav-icon-bullet"></span></span>Sample Acceptance Template</CNavItem></Link>
                              <Link to="/sampleLogin1321"><CNavItem href="#"><span className="nav-icon"><span className="nav-icon-bullet"></span></span>Sample Login</CNavItem></Link>
                              <Link to="/sampleAcceptance"><CNavItem href="#"><span className="nav-icon"><span className="nav-icon-bullet"></span></span>Sample Acceptance</CNavItem></Link>
                         </CNavGroup>
                         <CNavGroup
                              toggler={
                                   <>
                                        <CIcon customClassName="nav-icon" icon={cilPuzzle} /> Masters
                                   </>
                              }
                         >
                              <Link to="/Masters/Product"><CNavItem href="#"><span className="nav-icon"><span className="nav-icon-bullet"></span></span>Product/Material Master</CNavItem></Link>
                              <Link to="/Masters/SampleType"><CNavItem href="#"><span className="nav-icon"><span className="nav-icon-bullet"></span></span>Sample Type</CNavItem></Link>
                              <Link to="/Masters/SpecificationType"><CNavItem href="#"><span className="nav-icon"><span className="nav-icon-bullet"></span></span>Specification Type</CNavItem></Link>
                              <Link to="/Masters/Specifications"><CNavItem href="#"><span className="nav-icon"><span className="nav-icon-bullet"></span></span>Specifications</CNavItem></Link>
                              <Link to="/Masters/TestCategories"><CNavItem href="#"><span className="nav-icon"><span className="nav-icon-bullet"></span></span>Test Categories</CNavItem></Link>
                              <Link to="/Masters/TestRegistrations"><CNavItem href="#"><span className="nav-icon"><span className="nav-icon-bullet"></span></span>Test Registrations</CNavItem></Link>
                              <Link to="/Masters/TestPlan"><CNavItem href="#"><span className="nav-icon"><span className="nav-icon-bullet"></span></span>Test Plan</CNavItem></Link>
                              <Link to="/Masters/MyTests"><CNavItem href="#"><span className="nav-icon"><span className="nav-icon-bullet"></span></span>My Tests</CNavItem></Link>



                         </CNavGroup>
                         <CNavGroup
                              toggler={
                                   <>
                                        <CIcon customClassName="nav-icon" icon={cilPuzzle} /> Sampling
                                   </>
                              }
                         >
                              <Link to="/sampling/samplingConfiguration"><CNavItem href="#"><span className="nav-icon"><span className="nav-icon-bullet"></span></span>Sampling Sampling Configuration</CNavItem></Link>
                              <Link to="/sampling/samplingRule"><CNavItem href="#"><span className="nav-icon"><span className="nav-icon-bullet"></span></span>Sampling Rule</CNavItem></Link>
                              <Link to="/sampling/eSamping"><CNavItem href="#"><span className="nav-icon"><span className="nav-icon-bullet"></span></span>E-Sampling</CNavItem></Link>
                              <Link to="/sampling/samplingField"><CNavItem href="#"><span className="nav-icon"><span className="nav-icon-bullet"></span></span>Sampling Field</CNavItem></Link>
                              <Link to="/sampling/samplingTemplate"><CNavItem href="#"><span className="nav-icon"><span className="nav-icon-bullet"></span></span>Sampling Template</CNavItem></Link>

                         </CNavGroup>
                         <CNavGroup
                              toggler={
                                   <>
                                        <Link to="/Inventory/Inventory" style={{ color: "white" }}>
                                             <span
                                                  className="nav-icon"
                                                  style={{ position: "relative", color: "white" }}
                                             >
                                                  <span className="nav-icon-bullet"></span>
                                                  <CIcon customClassName="nav-icon" icon={cilPuzzle} />{" "}
                                                  <h5>Inventory</h5>
                                             </span>
                                        </Link>
                                   </>
                              }
                         >
                              <CNavGroup
                                   toggler={
                                        <>
                                             <Link to="/Inventory/InternalRegistration">
                                                  <CNavItem href="#">
                                                       <span className="nav-icon">
                                                            <span className="nav-icon-bullet"></span>
                                                       </span>
                                                       <h6 style={{ position: "relative", left: "-50px" }}>
                                                            Working Status
                                                       </h6>
                                                  </CNavItem>
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
                                             <Link
                                                  to="/Inventory/VolumeSolutions"
                                                  style={{ color: "white" }}
                                             >
                                                  <span
                                                       className="nav-icon"
                                                       style={{
                                                            position: "relative",
                                                            left: "35px",
                                                            color: "white",
                                                       }}
                                                  >
                                                       <span className="nav-icon-bullet"></span>
                                                       {/* <CIcon customClassName="nav-icon" icon={cilPuzzle} />{" "} */}
                                                       <h6>Volume Solutions</h6>
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
                              </Link>
                         </CNavGroup>

                         <CNavGroup
                              toggler={
                                   <>
                                        <CIcon customClassName="nav-icon" icon={cilPuzzle} /> Instrument Master
                                   </>
                              }
                         >
                              <Link to="/instrumentMaster/registration"><CNavItem href="#"><span className="nav-icon"><span className="nav-icon-bullet"></span></span>Registration</CNavItem></Link>
                              <Link to="/instrumentMaster/instrumentCategory"><CNavItem href="#"><span className="nav-icon"><span className="nav-icon-bullet"></span></span>Instrument Category</CNavItem></Link>
                              <Link to="/instrumentMaster/instrumentModule"><CNavItem href="#"><span className="nav-icon"><span className="nav-icon-bullet"></span></span>Instrument Module</CNavItem></Link>
                              <Link to="/instrumentMaster/instrumentUsage"><CNavItem href="#"><span className="nav-icon"><span className="nav-icon-bullet"></span></span>Instrument Usage</CNavItem></Link>
                         </CNavGroup>
                         <CNavGroup
                              toggler={
                                   <>
                                        <CIcon customClassName="nav-icon" icon={cilPuzzle} /> Stock Management
                                   </>
                              }
                         >
                              <Link to="/stock-management/stocks-verification"> <CNavItem href="#"><span className="nav-icon"><span className="nav-icon-bullet"></span></span>Stocks Verification</CNavItem></Link>
                              <Link to="/stock-management/stocks-onboarding"><CNavItem href="#"><span className="nav-icon"><span className="nav-icon-bullet"></span></span>Stocks Onboarding</CNavItem></Link>
                              <Link to="/stock-management/material"><CNavItem href="#"><span className="nav-icon"><span className="nav-icon-bullet"></span></span>Material</CNavItem></Link>
                              <Link to="/stock-management/inventory"><CNavItem href="#"><span className="nav-icon"><span className="nav-icon-bullet"></span></span>Inventory</CNavItem></Link>
                         </CNavGroup>
                         <CNavGroup
                              toggler={
                                   <>
                                        <CIcon customClassName="nav-icon" icon={cilPuzzle} /> Calibration
                                   </>
                              }
                         >
                              <CNavItem href="#"><span className="nav-icon"><span className="nav-icon-bullet"></span></span>Calibration Type</CNavItem>
                              <CNavItem href="#"><span className="nav-icon"><span className="nav-icon-bullet"></span></span>Calibration Frequency</CNavItem>
                              <CNavItem href="#"><span className="nav-icon"><span className="nav-icon-bullet"></span></span>Calibration Data Sheet</CNavItem>
                              <CNavItem href="#"><span className="nav-icon"><span className="nav-icon-bullet"></span></span>Sample Login Template</CNavItem>
                              <CNavItem href="#"><span className="nav-icon"><span className="nav-icon-bullet"></span></span>Calibration Schedule</CNavItem>
                              <CNavItem href="#"><span className="nav-icon"><span className="nav-icon-bullet"></span></span>Calibration Record</CNavItem>
                              <CNavItem href="#"><span className="nav-icon"><span className="nav-icon-bullet"></span></span>Sample Login</CNavItem>
                              <CNavItem href="#"><span className="nav-icon"><span className="nav-icon-bullet"></span></span>Calibration Calendar</CNavItem>
                         </CNavGroup>
                         <CNavGroup
                              toggler={
                                   <>
                                        <CIcon customClassName="nav-icon" icon={cilPuzzle} /> Reports / Certificate
                                   </>
                              }
                         >
                              <Link to="/reportsCertification/problemReporting"><CNavItem href="#"><span className="nav-icon"><span className="nav-icon-bullet"></span></span>Problem Reporting</CNavItem></Link>
                              <Link to="/reportsCertification/serviceReporting"><CNavItem href="#"><span className="nav-icon"><span className="nav-icon-bullet"></span></span>Service Reporting</CNavItem></Link>
                              <Link to="/reportsCertification/coaTemplate1321"><CNavItem href="#"><span className="nav-icon"><span className="nav-icon-bullet"></span></span>Coa Template</CNavItem></Link>
                              <Link to="/reportsCertification/releasedCoa"><CNavItem href="#"><span className="nav-icon"><span className="nav-icon-bullet"></span></span>Relaesed Coa</CNavItem></Link>
                              <Link to="/reportsCertification/investigationCoa"><CNavItem href="#"><span className="nav-icon"><span className="nav-icon-bullet"></span></span>Investigation Coa</CNavItem></Link>
                         </CNavGroup>
                         <CNavItem href="#"><CIcon customClassName="nav-icon" icon={cilSpeedometer} />Vendor</CNavItem>
                         <CNavItem href="#"><CIcon customClassName="nav-icon" icon={cilSpeedometer} />Clients</CNavItem>
                         <CNavItem href="#"><CIcon customClassName="nav-icon" icon={cilSpeedometer} />Plants</CNavItem>
                         <CNavItem href="#"><CIcon customClassName="nav-icon" icon={cilSpeedometer} />Workflow</CNavItem>
                         <CNavItem href="#"><CIcon customClassName="nav-icon" icon={cilSpeedometer} />Audit Trail</CNavItem>
                         <CNavGroup
                              toggler={
                                   <>
                                        <CIcon customClassName="nav-icon" icon={cilPuzzle} /> Settings
                                   </>
                              }
                         >
                              <CNavItem href="#"><CIcon customClassName="nav-icon" icon={cilSpeedometer} />Business Associate</CNavItem>
                              <CNavItem href="#"><CIcon customClassName="nav-icon" icon={cilSpeedometer} />Label Management</CNavItem>
                              <CNavItem href="#"><CIcon customClassName="nav-icon" icon={cilSpeedometer} />Functional Grouping</CNavItem>
                              <CNavItem href="#"><CIcon customClassName="nav-icon" icon={cilSpeedometer} />Worksheets</CNavItem>
                              <CNavItem href="#"><CIcon customClassName="nav-icon" icon={cilSpeedometer} />Group Name</CNavItem>
                              <CNavItem href="#"><CIcon customClassName="nav-icon" icon={cilSpeedometer} />Investigation Template</CNavItem>
                              <CNavItem href="#"><CIcon customClassName="nav-icon" icon={cilSpeedometer} />Chemical Category</CNavItem>
                              <CNavItem href="#"><CIcon customClassName="nav-icon" icon={cilSpeedometer} />Grade</CNavItem>
                              <CNavItem href="#"><CIcon customClassName="nav-icon" icon={cilSpeedometer} />Handling Symbol</CNavItem>
                              <CNavItem href="#"><CIcon customClassName="nav-icon" icon={cilSpeedometer} />Access Right</CNavItem>
                              <CNavItem href="#"><CIcon customClassName="nav-icon" icon={cilSpeedometer} />Projects</CNavItem>
                              <CNavItem href="#"><CIcon customClassName="nav-icon" icon={cilSpeedometer} />Template</CNavItem>
                              <CNavItem href="#"><CIcon customClassName="nav-icon" icon={cilSpeedometer} />Training Confirmations</CNavItem>
                              <CNavItem href="#"><CIcon customClassName="nav-icon" icon={cilSpeedometer} />Proposal</CNavItem>
                              <CNavItem href="#"><CIcon customClassName="nav-icon" icon={cilSpeedometer} />Nominations</CNavItem>
                              <CNavItem href="#"><CIcon customClassName="nav-icon" icon={cilSpeedometer} />Re-Qualification Request</CNavItem>
                              <CNavItem href="#"><CIcon customClassName="nav-icon" icon={cilSpeedometer} />Resources</CNavItem>
                              <CNavItem href="#"><CIcon customClassName="nav-icon" icon={cilSpeedometer} />Type of Section</CNavItem>
                              <CNavItem href="#"><CIcon customClassName="nav-icon" icon={cilSpeedometer} />WOS Test</CNavItem>
                              <CNavItem href="#"><CIcon customClassName="nav-icon" icon={cilSpeedometer} />Service Provider</CNavItem>
                              <CNavItem href="#"><CIcon customClassName="nav-icon" icon={cilSpeedometer} />External Registration</CNavItem>
                              <CNavItem href="#"><CIcon customClassName="nav-icon" icon={cilSpeedometer} />Test Techniques</CNavItem>
                              <CNavItem href="#"><CIcon customClassName="nav-icon" icon={cilSpeedometer} />Instrument Regitration</CNavItem>
                              <CNavItem href="#"><CIcon customClassName="nav-icon" icon={cilSpeedometer} />Stability</CNavItem>
                              <CNavItem href="#"><CIcon customClassName="nav-icon" icon={cilSpeedometer} />Test History</CNavItem>
                              <CNavItem href="#"><CIcon customClassName="nav-icon" icon={cilSpeedometer} />Vendor</CNavItem>
                              <CNavItem href="#"><CIcon customClassName="nav-icon" icon={cilSpeedometer} />App Configuration</CNavItem>
                         </CNavGroup>
                    </CSidebarNav>
               </CSidebar>

          </>
     )
}

export default Sidebar