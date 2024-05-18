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
                              <Link to="/dashboard" className="logo d-flex align-items-center" style={{ }}>
                                   <img src="/images/vidhyaGxp.png" alt="..." style={{ width: "290px" ,marginRight:"90px", paddingRight:"70px",filter:"drop-shadow(0 0 0 white)"}} /> 
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


                              {/* <CNavItem href="#"><span className="nav-icon"><span className="nav-icon-bullet"></span></span>Product/Material Master</CNavItem>
                              <CNavItem href="#"><span className="nav-icon"><span className="nav-icon-bullet"></span></span>Sample Type</CNavItem>
                              <CNavItem href="#"><span className="nav-icon"><span className="nav-icon-bullet"></span></span>Specification Type</CNavItem>
                              <CNavItem href="#"><span className="nav-icon"><span className="nav-icon-bullet"></span></span>Specifications</CNavItem>
                              <CNavItem href="#"><span className="nav-icon"><span className="nav-icon-bullet"></span></span>Test Categories</CNavItem>
                              <CNavItem href="#"><span className="nav-icon"><span className="nav-icon-bullet"></span></span>Test Registrations</CNavItem>
                              <CNavItem href="#"><span className="nav-icon"><span className="nav-icon-bullet"></span></span>Test Plan</CNavItem>
                              <CNavItem href="#"><span className="nav-icon"><span className="nav-icon-bullet"></span></span>My Tests</CNavItem> */}
                         </CNavGroup>
                         <CNavGroup
                              toggler={
                                   <>
                                        <CIcon customClassName="nav-icon" icon={cilPuzzle} /> Sampling
                                   </>
                              }
                         >
                              <Link to="/sampling/samplingConfiguration"><CNavItem href="#"><span className="nav-icon"><span className="nav-icon-bullet"></span></span>Sampling Sampling Configuration</CNavItem></Link>
                              <Link to="/sampling/samplingRule"></Link><CNavItem href="#"><span className="nav-icon"><span className="nav-icon-bullet"></span></span>Sampling Rule</CNavItem>
                              <Link to="/sampling/eSamping"></Link><CNavItem href="#"><span className="nav-icon"><span className="nav-icon-bullet"></span></span>E-Sampling</CNavItem>
                              <Link to="/sampling/samplingField"></Link><CNavItem href="#"><span className="nav-icon"><span className="nav-icon-bullet"></span></span>Sampling Field</CNavItem>
                              <Link to="/sampling/samplingTemplate"></Link><CNavItem href="#"><span className="nav-icon"><span className="nav-icon-bullet"></span></span>Sampling Template</CNavItem>

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
