import {  CButton, CFormSelect, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CTable, CTableBody, CTableDataCell, CTableRow } from "@coreui/react"
import { useState } from "react"


function ProblemReportingDetails() {
    const [statusModal, setStatusModal] = useState(false)
     return (
          <>

               <div id="worksheetHeaderPage" className="py-3 bg-light h-100">
                    <div className="container-fluid">
                         <div className="block mb-3">
                              <div className="main-head d-flex justify-content-between align-items-center">
                                   <h4 className="fw-bold mb-4 mt-3">Problem Reporting Details</h4>
                                   <CButton color="dark" onClick={() => setStatusModal(true)}>Update Status</CButton>

                              </div>
                              <div className="bg-white px-5 py-3">
                                   <CTable align="middle" className="mb-0" small bordered>
                                        <CTableBody>
                                             
                                             <CTableRow>
                                                  <CTableDataCell className="text-light bg-info">Instrument Name</CTableDataCell>
                                                  <CTableDataCell>High Performance Liquid Chromatography</CTableDataCell>
                                             </CTableRow>
                                             <CTableRow>
                                                  <CTableDataCell className="text-light bg-info">Supplied By</CTableDataCell>
                                                  <CTableDataCell>SHMDZ</CTableDataCell>
                                             </CTableRow>
                                             <CTableRow>
                                                  <CTableDataCell className="text-light bg-info">Problem Id</CTableDataCell>
                                                  <CTableDataCell>SHMDZ</CTableDataCell>
                                             </CTableRow>
                                             <CTableRow>
                                                  <CTableDataCell className="text-light bg-info">Problem In</CTableDataCell>
                                                  <CTableDataCell>INSTRUMENT</CTableDataCell>
                                             </CTableRow>
                                             <CTableRow>
                                                  <CTableDataCell className="text-light bg-info">Problem In Brief</CTableDataCell>
                                                  <CTableDataCell>AL001</CTableDataCell>
                                             </CTableRow>
                                             <CTableRow>
                                                  <CTableDataCell className="text-light bg-info">Training Documents</CTableDataCell>
                                                  <CTableDataCell>Document</CTableDataCell>
                                             </CTableRow>
                                             <CTableRow>
                                                  <CTableDataCell className="text-light bg-info">Occurred On</CTableDataCell>
                                                  <CTableDataCell>May 18th 2024 05:30</CTableDataCell>
                                             </CTableRow>
                                             <CTableRow>
                                                  <CTableDataCell className="text-light bg-info">Reported On</CTableDataCell>
                                                  <CTableDataCell>Nov 17th 2028 05:30</CTableDataCell>
                                             </CTableRow>
                                             <CTableRow>
                                                  <CTableDataCell className="text-light bg-info">Problem In Details</CTableDataCell>
                                                  <CTableDataCell>Test</CTableDataCell>
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


export default ProblemReportingDetails
