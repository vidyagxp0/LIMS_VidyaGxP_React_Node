import { CButton, CCol, CFormInput, CFormSelect, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react"
import { faEye } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"


function Approval() {
     const badgeStyle = { background: "#f0caff" }
     return (
          <>
               <div className="m-4 p-4">
                    <div className="main-head">
                         <h4 className="fw-bold mb-4 mt-3">Approvals</h4>
                    </div>
                    <div className="shadow rounded p-4">
                         <CTable align="middle" responsive className="mb-0 table-responsive">
                              <CTableBody>
                                   <CTableRow>
                                        <CTableHeaderCell scope="row">1</CTableHeaderCell>
                                        <CTableDataCell>Product Material</CTableDataCell>
                                        <CTableDataCell>na-002</CTableDataCell>
                                        <CTableDataCell>NA</CTableDataCell>
                                        <CTableDataCell className="d-flex justify-content-center">
                                             <div className="py-2 px-3 small rounded fw-bold" style={badgeStyle}>INITIATED</div>
                                        </CTableDataCell>
                                        <CTableDataCell className="text-center">
                                             <Link to="/approval/1321"><FontAwesomeIcon icon={faEye} /></Link>
                                        </CTableDataCell>
                                   </CTableRow>
                                   <CTableRow>
                                        <CTableHeaderCell scope="row">2</CTableHeaderCell>
                                        <CTableDataCell>Jacob</CTableDataCell>
                                        <CTableDataCell>Thornton</CTableDataCell>
                                        <CTableDataCell>@fat</CTableDataCell>
                                        <CTableDataCell className="d-flex justify-content-center">
                                             <div className="py-2 px-3 small rounded fw-bold" style={badgeStyle}>INITIATED</div>
                                        </CTableDataCell>
                                        <CTableDataCell className="text-center">
                                             <Link to="/approval/1321"><FontAwesomeIcon icon={faEye} /></Link>
                                        </CTableDataCell>
                                   </CTableRow>
                                   <CTableRow>
                                        <CTableHeaderCell scope="row">3</CTableHeaderCell>
                                        <CTableDataCell>Larry</CTableDataCell>
                                        <CTableDataCell>Bird</CTableDataCell>
                                        <CTableDataCell>@twitter</CTableDataCell>
                                        <CTableDataCell className="d-flex justify-content-center">
                                             <div className="py-2 px-3 small rounded fw-bold" style={badgeStyle}>INITIATED</div>
                                        </CTableDataCell>
                                        <CTableDataCell className="text-center">
                                             <Link to="/approval/1321"><FontAwesomeIcon icon={faEye} /></Link>
                                        </CTableDataCell>
                                   </CTableRow>
                                   <CTableRow>
                                        <CTableHeaderCell scope="row">4</CTableHeaderCell>
                                        <CTableDataCell>Product Material</CTableDataCell>
                                        <CTableDataCell>na-002</CTableDataCell>
                                        <CTableDataCell>NA</CTableDataCell>
                                        <CTableDataCell className="d-flex justify-content-center">
                                             <div className="py-2 px-3 small rounded fw-bold" style={badgeStyle}>INITIATED</div>
                                        </CTableDataCell>
                                        <CTableDataCell className="text-center">
                                             <Link to="/approval/1321"><FontAwesomeIcon icon={faEye} /></Link>
                                        </CTableDataCell>
                                   </CTableRow>
                                   <CTableRow>
                                        <CTableHeaderCell scope="row">5</CTableHeaderCell>
                                        <CTableDataCell>Jacob</CTableDataCell>
                                        <CTableDataCell>Thornton</CTableDataCell>
                                        <CTableDataCell>@fat</CTableDataCell>
                                        <CTableDataCell className="d-flex justify-content-center">
                                             <div className="py-2 px-3 small rounded fw-bold" style={badgeStyle}>INITIATED</div>
                                        </CTableDataCell>
                                        <CTableDataCell className="text-center">
                                             <Link to="/approval/1321"><FontAwesomeIcon icon={faEye} /></Link>
                                        </CTableDataCell>
                                   </CTableRow>
                                   <CTableRow>
                                        <CTableHeaderCell scope="row">6</CTableHeaderCell>
                                        <CTableDataCell>Larry</CTableDataCell>
                                        <CTableDataCell>Bird</CTableDataCell>
                                        <CTableDataCell>@twitter</CTableDataCell>
                                        <CTableDataCell className="d-flex justify-content-center">
                                             <div className="py-2 px-3 small rounded fw-bold" style={badgeStyle}>INITIATED</div>
                                        </CTableDataCell>
                                        <CTableDataCell className="text-center">
                                             <Link to="/approval/1321"><FontAwesomeIcon icon={faEye} /></Link>
                                        </CTableDataCell>
                                   </CTableRow>
                              </CTableBody>
                         </CTable>
                    </div>
               </div>
          </>
     )
}

export default Approval
