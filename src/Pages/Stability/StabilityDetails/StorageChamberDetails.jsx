import { CButton, CFormSelect, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CTable, CTableBody, CTableDataCell, CTableRow } from "@coreui/react"
import { useState } from "react"


function StorageChamberDetails() {
     return (
          <>

               <div id="approval-page" className="py-3 bg-light h-100">
                    <div className="container-fluid">
                         <div className="bock mb-3">
                              <div className="main-head d-flex justify-content-between align-items-center">
                                   <h4 className="fw-bold mb-4 mt-3">Storage Chamber Details</h4>
                              </div>
                              <div className="bg-white px-5 py-3">
                                   <CTable align="middle" className="mb-0" small bordered>
                                        <CTableBody>
                                             <CTableRow>
                                                  <CTableDataCell color="info">Chamber Id</CTableDataCell>
                                                  <CTableDataCell>stmp1</CTableDataCell>
                                             </CTableRow>
                                             <CTableRow>
                                                  <CTableDataCell color="info">Sequence Number</CTableDataCell>
                                                  <CTableDataCell>54255455</CTableDataCell>
                                             </CTableRow>
                                             <CTableRow>
                                                  <CTableDataCell color="info">Description</CTableDataCell>
                                                  <CTableDataCell>describe</CTableDataCell>
                                             </CTableRow>
                                             <CTableRow>
                                                  <CTableDataCell color="info">Location</CTableDataCell>
                                                  <CTableDataCell>loc1</CTableDataCell>
                                             </CTableRow>
                                             <CTableRow>
                                                  <CTableDataCell color="info">Make / Model</CTableDataCell>
                                                  <CTableDataCell>Isubus111</CTableDataCell>
                                             </CTableRow>
                                             <CTableRow>
                                                  <CTableDataCell color="info">Serial No.</CTableDataCell>
                                                  <CTableDataCell>532M32434</CTableDataCell>
                                             </CTableRow>
                                             <CTableRow>
                                                  <CTableDataCell color="info">Comments</CTableDataCell>
                                                  <CTableDataCell>NA</CTableDataCell>
                                             </CTableRow>
                                             <CTableRow>
                                                  <CTableDataCell color="info">Created At</CTableDataCell>
                                                  <CTableDataCell>05/05/2024</CTableDataCell>
                                             </CTableRow>
                                             <CTableRow>
                                                  <CTableDataCell color="info">Status</CTableDataCell>
                                                  <CTableDataCell>APPROVED</CTableDataCell>
                                             </CTableRow>
                                             
                                        </CTableBody>
                                   </CTable>
                              </div>
                         </div>
                         <div className="block">
                              <div className="main-head">
                                   <h4 className="fw-bold mb-4 mt-3">Racks</h4>
                              </div>
                              <div className="bg-white px-5 py-3">
                                   <CTable align="middle" className="mb-0" small bordered>
                                        <CTableBody>
                                             <CTableRow color="">
                                                  <CTableDataCell></CTableDataCell>
                                                  <CTableDataCell>Rack-1</CTableDataCell>
                                                  <CTableDataCell>Rack-2</CTableDataCell>
                                                  <CTableDataCell>Rack-3</CTableDataCell>
                                                  <CTableDataCell>Rack-4</CTableDataCell>
                                             </CTableRow>
                                             <CTableRow color="">
                                                  <CTableDataCell>Shelf-1</CTableDataCell>
                                                  <CTableDataCell></CTableDataCell>
                                                  <CTableDataCell></CTableDataCell>
                                                  <CTableDataCell></CTableDataCell>
                                                  <CTableDataCell></CTableDataCell>
                                             </CTableRow>
                                             <CTableRow color="">
                                                  <CTableDataCell>Shelf-2</CTableDataCell>
                                                  <CTableDataCell></CTableDataCell>
                                                  <CTableDataCell></CTableDataCell>
                                                  <CTableDataCell></CTableDataCell>
                                                  <CTableDataCell></CTableDataCell>
                                             </CTableRow>
                                             <CTableRow color="">
                                                  <CTableDataCell>Shelf-3</CTableDataCell>
                                                  <CTableDataCell></CTableDataCell>
                                                  <CTableDataCell></CTableDataCell>
                                                  <CTableDataCell></CTableDataCell>
                                                  <CTableDataCell></CTableDataCell>
                                             </CTableRow>
                                             
                                             
                                        </CTableBody>
                                   </CTable>
                              </div>
                         </div>
                    </div>
               </div>


          </>
     )
}




export default StorageChamberDetails
