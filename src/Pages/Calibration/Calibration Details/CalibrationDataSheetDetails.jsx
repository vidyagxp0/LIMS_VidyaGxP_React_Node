import { CButton, CFormSelect, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CTable, CTableBody, CTableDataCell, CTableRow } from "@coreui/react"
import { useState } from "react"


function CalibrationDataSheetDetails() {
     const [statusModal, setStatusModal] = useState(false)
     return (
          <>

               <div id="approval-page" className="py-3 bg-light h-100">
                    <div className="container-fluid">
                         <div className="bock mb-3">
                              <div className="main-head d-flex justify-content-between align-items-center">
                                   <h4 className="fw-bold mb-4 mt-3">Datasheet Details</h4>
                                   <CButton color="dark" onClick={() => setStatusModal(true)}>Update Status</CButton>
                              </div>
                              







                              <div className="bg-white px-5 py-3">
                                   <CTable align="middle" className="mb-0" small bordered>
                                        <CTableBody>
                                             <CTableRow>
                                                  <CTableDataCell color="info">Sequence No</CTableDataCell>
                                                  <CTableDataCell>CDSR0000007</CTableDataCell>
                                             </CTableRow>
                                             <CTableRow>
                                                  <CTableDataCell color="info">Datasheet Name</CTableDataCell>
                                                  <CTableDataCell>-</CTableDataCell>
                                             </CTableRow>
                                             <CTableRow>
                                                  <CTableDataCell color="info">Unique Code</CTableDataCell>
                                                  <CTableDataCell></CTableDataCell>
                                             </CTableRow>
                                             <CTableRow>
                                                  <CTableDataCell color="info">Quantitative Parameters</CTableDataCell>
                                                  <CTableDataCell>False</CTableDataCell>
                                             </CTableRow>
                                             <CTableRow>
                                                  <CTableDataCell color="info">Status</CTableDataCell>
                                                  <CTableDataCell>INITIATED</CTableDataCell>
                                             </CTableRow>
                                           
                                        </CTableBody>
                                   </CTable>
                              </div>
                         </div>
                        
                    </div>
               </div>

               {statusModal && <StatusModal visible={statusModal} closeModal={() => setStatusModal(false)} />}

          </>
     )
}

const StatusModal = (_props) => {
     return (
          <>

               <CModal alignment="center" visible={_props.visible} onClose={_props.closeModal}>
                    <CModalHeader>
                         <CModalTitle style={{backgroundColor:'#854fff'}}>Update Status</CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                         <CFormSelect
                              label="Status"
                              text="Status is required."
                              options={[
                                   'Update Status',
                                   { label: 'Approve', value: 'approve' },
                                   { label: 'Drop', value: 'drop' },
                                   { label: 'Reject', value: 'reject' }
                              ]}
                         />
                    </CModalBody>
                    <CModalFooter>
                         <CButton color="light" onClick={_props.closeModal}>Cancel</CButton>
                         <CButton color="dark">Update</CButton>
                    </CModalFooter>
               </CModal>

          </>
     )
}

export default CalibrationDataSheetDetails
