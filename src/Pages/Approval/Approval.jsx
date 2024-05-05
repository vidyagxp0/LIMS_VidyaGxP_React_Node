import { CTable, CTableBody, CTableDataCell, CTableHeaderCell, CTableRow } from "@coreui/react"
import { faEye } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"


function Approval() {
     const badgeStyle = { background: "#f0caff" }
     return (
          <>

               <div id="approval-page" className="py-3 bg-light h-100">
                    <div className="container-fluid">
                         <div className="main-head">
                              <h4 className="fw-bold mb-4 mt-3">Approvals</h4>
                         </div>
                         <div className="bg-white">
                              <CTable align="middle" responsive className="mb-0">
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
               </div>

          </>
     )
}

export default Approval
