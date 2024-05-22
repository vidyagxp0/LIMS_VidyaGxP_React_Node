import { CButton, CFooter, CFormSelect, CHeader, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CTable, CTableBody, CTableDataCell, CTableRow } from "@coreui/react"
import { useState } from "react"


function CoaTemplateDetails() {
     return (
          <>

               <div id="approval-page" className="py-3 bg-light h-100">
                    <div className="container-fluid">
                         <div className="bock mb-3">
                              <div className="main-head d-flex justify-content-between align-items-center">
                                   <h4 className="fw-bold mb-4 mt-3">COA Tempalte Details</h4>
                              </div>
                              <div className="bg-white px-5 py-3">
                                   <CTable align="middle" className="mb-0" small bordered>
                                        <CTableBody>
                                             <CTableRow>
                                                  <CTableDataCell color="info">Template Id</CTableDataCell>
                                                  <CTableDataCell>SCOA-022024-0000001</CTableDataCell>
                                             </CTableRow>
                                             <CTableRow>
                                                  <CTableDataCell color="info">Sample Type</CTableDataCell>
                                                  <CTableDataCell></CTableDataCell>
                                             </CTableRow>
                                             <CTableRow>
                                                  <CTableDataCell color="info">Coa Type</CTableDataCell>
                                                  <CTableDataCell>WITH-SPECIFICATION</CTableDataCell>
                                             </CTableRow>
                                             <CTableRow>
                                                  <CTableDataCell color="info">Report Title</CTableDataCell>
                                                  <CTableDataCell>testing</CTableDataCell>
                                             </CTableRow>
                                             <CTableRow>
                                                  <CTableDataCell color="info">Product Material</CTableDataCell>
                                                  <CTableDataCell>testing</CTableDataCell>
                                             </CTableRow>
                                             <CTableRow>
                                                  <CTableDataCell color="info">Format No.</CTableDataCell>
                                                  <CTableDataCell>001</CTableDataCell>
                                             </CTableRow>
                                             <CTableRow>
                                                  <CTableDataCell color="info">Added By</CTableDataCell>
                                                  <CTableDataCell>afiya</CTableDataCell>
                                             </CTableRow>
                                             <CTableRow>
                                                  <CTableDataCell color="info">Added On</CTableDataCell>
                                                  <CTableDataCell>05/05/2024</CTableDataCell>
                                             </CTableRow>
                                             <CTableRow>
                                                  <CTableDataCell color="info">Status</CTableDataCell>
                                                  <CTableDataCell>DROPPED</CTableDataCell>
                                             </CTableRow>
                                             
                                        </CTableBody>
                                   </CTable>
                              </div>
                         </div>
                         <div className="block">
                              
                              <div className="bg-white px-5 py-3">
                                   <CTable align="middle" className="mb-0" small bordered>
                                        <CTableBody>
                                            <CHeader className="bg-secondary">Header</CHeader>
                                             <CTableRow color="info">
                                                  <CTableDataCell>Header Rows</CTableDataCell>
                                                  <CTableDataCell>1</CTableDataCell>                                                  
                                             </CTableRow>
                                             <CTableRow color="info">
                                                  <CTableDataCell>Header Columns</CTableDataCell>
                                                  <CTableDataCell>2</CTableDataCell>                                                  
                                             </CTableRow>
                                             <CTableRow color="info">
                                                  <CTableDataCell>Sample Field 1</CTableDataCell>
                                                  <CTableDataCell>batch_no</CTableDataCell>                                                  
                                             </CTableRow>
                                             <CFooter className="bg-secondary">Footer</CFooter>
                                             <CTableRow color="info">
                                                  <CTableDataCell>Header Rows</CTableDataCell>
                                                  <CTableDataCell>1</CTableDataCell>                                                  
                                             </CTableRow>
                                             <CTableRow color="info">
                                                  <CTableDataCell>Header Columns</CTableDataCell>
                                                  <CTableDataCell>2</CTableDataCell>                                                  
                                             </CTableRow>
                                             <CTableRow color="info">
                                                  <CTableDataCell>Sample Field 1</CTableDataCell>
                                                  <CTableDataCell></CTableDataCell>                                                  
                                             </CTableRow>
                                             <CTableRow color="info">
                                                  <CTableDataCell>Sample Field 2</CTableDataCell>
                                                  <CTableDataCell>approved_by</CTableDataCell>                                                  
                                             </CTableRow>
                                             <CTableRow color="info">
                                                  <CTableDataCell>Sample Field 3</CTableDataCell>
                                                  <CTableDataCell>reviewed_by</CTableDataCell>                                                  
                                             </CTableRow>
                                             <CTableRow color="info">
                                                  <CTableDataCell>Sample Field 4</CTableDataCell>
                                                  <CTableDataCell>checked_by</CTableDataCell>                                                  
                                             </CTableRow>                                           
                                             
                                        </CTableBody>
                                   </CTable>
                              </div>
                              <div className="main-head">
                                   <h4 className="fw-bold mb-4 mt-3 ">History</h4>
                                   <h5>No History Found</h5>
                              </div>
                         </div>
                    </div>
               </div>


          </>
     )
}






export default CoaTemplateDetails
