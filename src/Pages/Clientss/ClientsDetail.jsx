import { CButton, CFormSelect, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CTable, CTableBody, CTableDataCell, CTableRow } from "@coreui/react"
import { useState } from "react"


function ClientsDetails() {
     const [statusModal, setStatusModal] = useState(false)
     return (
          <>

               <div id="approval-page" className="py-3 bg-light h-100">
                    <div className="container-fluid">
                         <div className="bock mb-3">
                              <div className="main-head d-flex justify-content-between align-items-center">
                                   <h4 className="fw-bold mb-4 mt-3">Client Details</h4>
                                   <CButton color="primary" onClick={() => setStatusModal(true)}>Specifications</CButton>
                              </div>

                              <div className="bg-white px-5 py-3">
                                   <CTable align="middle" className="mb-0" small bordered>
                                        <CTableBody>
                                             <CTableRow>
                                                  <CTableDataCell className="text-light bg-info">Name</CTableDataCell>
                                                  <CTableDataCell>MIT Power</CTableDataCell>
                                             </CTableRow>
                                             <CTableRow>
                                                  <CTableDataCell className="text-light bg-info">Email</CTableDataCell>
                                                  <CTableDataCell>mit@gmail.com</CTableDataCell>
                                             </CTableRow>
                                             <CTableRow>
                                                  <CTableDataCell className="text-light bg-info">Phone</CTableDataCell>
                                                  <CTableDataCell>9586842547</CTableDataCell>
                                             </CTableRow>
                                             <CTableRow>
                                                  <CTableDataCell className="text-light bg-info">Unique Code</CTableDataCell>
                                                  <CTableDataCell>client0003514</CTableDataCell>
                                             </CTableRow>
                                             <CTableRow>
                                                  <CTableDataCell className="text-light bg-info">Contact Person</CTableDataCell>
                                                  <CTableDataCell>dutta</CTableDataCell>
                                             </CTableRow> 
                                             <CTableRow>
                                                  <CTableDataCell className="text-light bg-info">Address</CTableDataCell>
                                                  <CTableDataCell>MIT tala power</CTableDataCell>
                                             </CTableRow>
                                             <CTableRow>
                                                  <CTableDataCell className="text-light bg-info">Tax Number</CTableDataCell>
                                                  <CTableDataCell>155552</CTableDataCell>
                                             </CTableRow>
                                             <CTableRow>
                                                  <CTableDataCell className="text-light bg-info">Fax</CTableDataCell>
                                                  <CTableDataCell>55566655565</CTableDataCell>
                                             </CTableRow> 
                                             <CTableRow>
                                                  <CTableDataCell className="text-light bg-info">Status</CTableDataCell>
                                                  <CTableDataCell>ACTIVE</CTableDataCell>
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

export default ClientsDetails
