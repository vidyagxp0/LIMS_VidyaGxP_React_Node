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
                              <Link to="/dashboard" className="logo d-flex align-items-center" style={{ gap: "10px" }}>
                                   <img src="/images/logo.png" alt="..." style={{ width: "50px" }} />
                                   <div className="h5 mb-0 text-white">LIMS</div>
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
                              <CNavItem href="#"><span className="nav-icon"><span className="nav-icon-bullet"></span></span>Department</CNavItem>
                              <Link to="/UsersOfuserManagement"><CNavItem href="#"><span className="nav-icon"><span className="nav-icon-bullet"></span></span>Users</CNavItem></Link>
                              <CNavItem href="#"><span className="nav-icon"><span className="nav-icon-bullet"></span></span>Roles</CNavItem>
                              <CNavItem href="/department"><span className="nav-icon"><span className="nav-icon-bullet"></span></span>Department</CNavItem>
                              <CNavItem href="users"><span className="nav-icon"><span className="nav-icon-bullet"></span></span>Users</CNavItem>
                              <CNavItem href="roles"><span className="nav-icon"><span className="nav-icon-bullet"></span></span>Roles</CNavItem>
                         </CNavGroup>
                         <CNavGroup
                              toggler={
                                   <>
                                        <CIcon customClassName="nav-icon" icon={cilPuzzle} /> Sample Logins
                                   </>
                              }
                         >
                              <CNavItem href="#"><span className="nav-icon"><span className="nav-icon-bullet"></span></span>Sample Login</CNavItem>
                              <CNavItem href="#"><span className="nav-icon"><span className="nav-icon-bullet"></span></span>Investigation L1</CNavItem>
                              <CNavItem href="#"><span className="nav-icon"><span className="nav-icon-bullet"></span></span>Investigation L2</CNavItem>
                         </CNavGroup>
                         <CNavGroup
                              toggler={
                                   <>
                                        <CIcon customClassName="nav-icon" icon={cilPuzzle} /> Stability
                                   </>
                              }
                         >
                              <CNavItem href="#"><span className="nav-icon"><span className="nav-icon-bullet"></span></span>Storage Condition</CNavItem>
                              <CNavItem href="#"><span className="nav-icon"><span className="nav-icon-bullet"></span></span>Storage Chamber</CNavItem>
                              <CNavItem href="#"><span className="nav-icon"><span className="nav-icon-bullet"></span></span>Chamber Condition Mapping</CNavItem>
                              <CNavItem href="#"><span className="nav-icon"><span className="nav-icon-bullet"></span></span>Chamber Transfer</CNavItem>
                              <CNavItem href="#"><span className="nav-icon"><span className="nav-icon-bullet"></span></span>Stability protocol</CNavItem>
                              <CNavItem href="#"><span className="nav-icon"><span className="nav-icon-bullet"></span></span>Sample Storage</CNavItem>
                              <CNavItem href="#"><span className="nav-icon"><span className="nav-icon-bullet"></span></span>COA Template</CNavItem>
                              <CNavItem href="#"><span className="nav-icon"><span className="nav-icon-bullet"></span></span>Sample Login Template</CNavItem>
                              <CNavItem href="#"><span className="nav-icon"><span className="nav-icon-bullet"></span></span>Worksheet Header</CNavItem>
                              <CNavItem href="#"><span className="nav-icon"><span className="nav-icon-bullet"></span></span>Summary Report Header</CNavItem>
                              <CNavItem href="#"><span className="nav-icon"><span className="nav-icon-bullet"></span></span>Sample Acceptance Template</CNavItem>
                              <CNavItem href="#"><span className="nav-icon"><span className="nav-icon-bullet"></span></span>Sample Login</CNavItem>
                              <CNavItem href="#"><span className="nav-icon"><span className="nav-icon-bullet"></span></span>Sample Acceptance</CNavItem>
                         </CNavGroup>
                         <CNavGroup
                              toggler={
                                   <>
                                        <CIcon customClassName="nav-icon" icon={cilPuzzle} /> Masters
                                   </>
                              }
                         >
                              <CNavItem href="#"><span className="nav-icon"><span className="nav-icon-bullet"></span></span>Product/Material Master</CNavItem>
                              <CNavItem href="#"><span className="nav-icon"><span className="nav-icon-bullet"></span></span>Sample Type</CNavItem>
                              <CNavItem href="#"><span className="nav-icon"><span className="nav-icon-bullet"></span></span>Specification Type</CNavItem>
                              <CNavItem href="#"><span className="nav-icon"><span className="nav-icon-bullet"></span></span>Specifications</CNavItem>
                              <CNavItem href="#"><span className="nav-icon"><span className="nav-icon-bullet"></span></span>Test Categories</CNavItem>
                              <CNavItem href="#"><span className="nav-icon"><span className="nav-icon-bullet"></span></span>Test Registrations</CNavItem>
                              <CNavItem href="#"><span className="nav-icon"><span className="nav-icon-bullet"></span></span>Test Plan</CNavItem>
                              <CNavItem href="#"><span className="nav-icon"><span className="nav-icon-bullet"></span></span>My Tests</CNavItem>
                         </CNavGroup>
                         <CNavGroup
                              toggler={
                                   <>
                                        <CIcon customClassName="nav-icon" icon={cilPuzzle} /> Sampling
                                   </>
                              }
                         >
                              <CNavItem href="#"><span className="nav-icon"><span className="nav-icon-bullet"></span></span>Sampling	Sampling Configuration</CNavItem>
                              <CNavItem href="#"><span className="nav-icon"><span className="nav-icon-bullet"></span></span>Sampling Rule</CNavItem>
                              <CNavItem href="#"><span className="nav-icon"><span className="nav-icon-bullet"></span></span>E-Sampling</CNavItem>
                              <CNavItem href="#"><span className="nav-icon"><span className="nav-icon-bullet"></span></span>Sampling Field</CNavItem>
                              <CNavItem href="#"><span className="nav-icon"><span className="nav-icon-bullet"></span></span>Sampling Template</CNavItem>

                         </CNavGroup>
                         <CNavGroup
                              toggler={
                                   <>
                                        <CIcon customClassName="nav-icon" icon={cilPuzzle} /> Inventory
                                   </>
                              }
                         >
                              <CNavItem href="#"><span className="nav-icon"><span className="nav-icon-bullet"></span></span>Working Standard</CNavItem>
                              <CNavItem href="#"><span className="nav-icon"><span className="nav-icon-bullet"></span></span>Volume Solutions</CNavItem>
                              <CNavItem href="#"><span className="nav-icon"><span className="nav-icon-bullet"></span></span>Chemicals</CNavItem>
                              <CNavItem href="#"><span className="nav-icon"><span className="nav-icon-bullet"></span></span>Columns</CNavItem>
                              <CNavItem href="#"><span className="nav-icon"><span className="nav-icon-bullet"></span></span>Reference Standards</CNavItem>
                              <CNavItem href="#"><span className="nav-icon"><span className="nav-icon-bullet"></span></span>Culture Management</CNavItem>
                              <CNavItem href="#"><span className="nav-icon"><span className="nav-icon-bullet"></span></span>Media</CNavItem>
                              <CNavItem href="#"><span className="nav-icon"><span className="nav-icon-bullet"></span></span>Water Management</CNavItem>
                              <CNavItem href="#"><span className="nav-icon"><span className="nav-icon-bullet"></span></span>Environment</CNavItem>
                         </CNavGroup>
                         <CNavGroup
                              toggler={
                                   <>
                                        <CIcon customClassName="nav-icon" icon={cilPuzzle} /> Instrument Master
                                   </>
                              }
                         >
                              <CNavItem href="#"><span className="nav-icon"><span className="nav-icon-bullet"></span></span>Registration</CNavItem>
                              <CNavItem href="#"><span className="nav-icon"><span className="nav-icon-bullet"></span></span>Instrument Category</CNavItem>
                              <CNavItem href="#"><span className="nav-icon"><span className="nav-icon-bullet"></span></span>Instrument Module</CNavItem>
                              <CNavItem href="#"><span className="nav-icon"><span className="nav-icon-bullet"></span></span>Instrument Usage</CNavItem>
                         </CNavGroup>
                         <CNavGroup
                              toggler={
                                   <>
                                        <CIcon customClassName="nav-icon" icon={cilPuzzle} /> Stock Management
                                   </>
                              }
                         >
                              <CNavItem href="#"><span className="nav-icon"><span className="nav-icon-bullet"></span></span>Stocks Verification</CNavItem>
                              <CNavItem href="#"><span className="nav-icon"><span className="nav-icon-bullet"></span></span>Stocks Onboarding</CNavItem>
                              <CNavItem href="#"><span className="nav-icon"><span className="nav-icon-bullet"></span></span>Material</CNavItem>
                              <CNavItem href="#"><span className="nav-icon"><span className="nav-icon-bullet"></span></span>Inventory</CNavItem>
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
                              <CNavItem href="#"><span className="nav-icon"><span className="nav-icon-bullet"></span></span>Problem Reporting</CNavItem>
                              <CNavItem href="#"><span className="nav-icon"><span className="nav-icon-bullet"></span></span>Service Reporting</CNavItem>
                              <CNavItem href="#"><span className="nav-icon"><span className="nav-icon-bullet"></span></span>Coa Template</CNavItem>
                              <CNavItem href="#"><span className="nav-icon"><span className="nav-icon-bullet"></span></span>Relaesed Coa</CNavItem>
                              <CNavItem href="#"><span className="nav-icon"><span className="nav-icon-bullet"></span></span>Investigation Coa</CNavItem>
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
