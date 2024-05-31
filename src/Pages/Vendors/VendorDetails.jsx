import { CButton, CFormSelect, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CTable, CTableBody, CTableDataCell, CTableRow } from "@coreui/react"
import { useState } from "react"


function VendorDetails() {
     const [statusModal, setStatusModal] = useState(false)
     return (
          <>
               <div className="m-5">
                    <div className="py-3 bg-light rounded">
                         <div className="container-fluid">
                              <div className="bock mb-3">
                                   <div className="main-head d-flex justify-content-between align-items-center">
                                        <h4 className="fw-bold mb-4 mt-3">Approved Vendor Details</h4>
                                   </div>
                                   <div className="bg-white">
                                        <CTable align="middle" className="" small bordered>
                                             <CTableBody>
                                                  <CTableRow>
                                                       <CTableDataCell className="text-light bg-info w-25">Product Name</CTableDataCell>
                                                       <CTableDataCell>Polycaprolactone New</CTableDataCell>
                                                  </CTableRow>
                                                  <CTableRow>
                                                       <CTableDataCell className="text-light bg-info">Vendor Name</CTableDataCell>
                                                       <CTableDataCell>Ariz tech</CTableDataCell>
                                                  </CTableRow>
                                                  <CTableRow>
                                                       <CTableDataCell className="text-light bg-info">Unique Code</CTableDataCell>
                                                       <CTableDataCell>uc</CTableDataCell>
                                                  </CTableRow>
                                                  <CTableRow>
                                                       <CTableDataCell className="text-light bg-info">Qualification Data</CTableDataCell>
                                                       <CTableDataCell>
                                                            na</CTableDataCell>
                                                  </CTableRow>
                                                  <CTableRow>
                                                       <CTableDataCell className="text-light bg-info">Comments</CTableDataCell>
                                                       <CTableDataCell>na</CTableDataCell>
                                                  </CTableRow>
                                                  <CTableRow>
                                                       <CTableDataCell className="text-light bg-info">Status</CTableDataCell>
                                                       <CTableDataCell>APPROVED</CTableDataCell>
                                                  </CTableRow>

                                             </CTableBody>
                                        </CTable>
                                   </div>
                              </div>
                              <div className="block mt-5">
                                   <div className="main-head">
                                        <h4 className="fw-bold mb-4 mt-3">History</h4>
                                   </div>
                                   <div className="bg-white">
                                        <CTable align="middle" className="" small bordered>
                                             <CTableBody>
                                                  <CTableRow color="warning">
                                                       <CTableDataCell className="w-25">Revision</CTableDataCell>
                                                       <CTableDataCell>-</CTableDataCell>
                                                  </CTableRow>
                                                  <CTableRow>
                                                       <CTableDataCell className="text-light bg-info">Product Name</CTableDataCell>
                                                       <CTableDataCell>Polycaprolactone New</CTableDataCell>
                                                  </CTableRow>
                                                  <CTableRow>
                                                       <CTableDataCell className="text-light bg-info">Vendor Name</CTableDataCell>
                                                       <CTableDataCell>Ariz tech</CTableDataCell>
                                                  </CTableRow>
                                                  <CTableRow>
                                                       <CTableDataCell className="text-light bg-info">Unique Code</CTableDataCell>
                                                       <CTableDataCell>uc</CTableDataCell>
                                                  </CTableRow>
                                                  <CTableRow>
                                                       <CTableDataCell className="text-light bg-info">Qualification Data</CTableDataCell>
                                                       <CTableDataCell>
                                                            na</CTableDataCell>
                                                  </CTableRow>
                                                  <CTableRow>
                                                       <CTableDataCell className="text-light bg-info">Comments</CTableDataCell>
                                                       <CTableDataCell>na</CTableDataCell>
                                                  </CTableRow>
                                                  <CTableRow>
                                                       <CTableDataCell className="text-light bg-info">Status</CTableDataCell>
                                                       <CTableDataCell>APPROVED</CTableDataCell>
                                                  </CTableRow>
                                             </CTableBody>
                                        </CTable>
                                   </div>
                              </div>
                         </div>
                    </div>

                    {statusModal && <StatusModal visible={statusModal} closeModal={() => setStatusModal(false)} />}
               </div>
          </>
     )
}

const StatusModal = (_props) => {
     return (
          <>

               <CModal alignment="center" visible={_props.visible} onClose={_props.closeModal}>
                    <CModalHeader>
                         <CModalTitle>Update Status</CModalTitle>
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

export default VendorDetails
