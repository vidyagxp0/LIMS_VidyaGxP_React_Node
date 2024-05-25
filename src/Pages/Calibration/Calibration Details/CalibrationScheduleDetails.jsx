import { CButton, CFormSelect, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CTable, CTableBody, CTableDataCell, CTableRow } from "@coreui/react"
import { useState } from "react"


function CalibrationScheduleDetails() {
     const [statusModal, setStatusModal] = useState(false)
     return (
          <>

               <div id="approval-page" className="py-3 bg-light h-100">
                    <div className="container-fluid">
                         <div className="bock mb-3">
                              <div className="main-head d-flex justify-content-between align-items-center">
                                   <h4 className="fw-bold mb-4 mt-3">Calibration Schedule Details</h4>
                              </div>
                              <div className="bg-white px-5 py-3">
                                   <CTable align="middle" className="mb-0" small bordered>
                                        <CTableBody>
                                             <CTableRow>
                                                  <CTableDataCell className="text-light bg-info">Instrument Category</CTableDataCell>
                                                  <CTableDataCell>-</CTableDataCell>
                                             </CTableRow>
                                             <CTableRow>
                                                  <CTableDataCell className="text-light bg-info">Instrument Name</CTableDataCell>
                                                  <CTableDataCell>Weighing Balance 2</CTableDataCell>
                                             </CTableRow>
                                             <CTableRow>
                                                  <CTableDataCell className="text-light bg-info">Module</CTableDataCell>
                                                  <CTableDataCell></CTableDataCell>
                                             </CTableRow>
                                             <CTableRow>
                                                  <CTableDataCell className="text-light bg-info">Calibration Type</CTableDataCell>
                                                  <CTableDataCell>
monthly</CTableDataCell>
                                             </CTableRow>
                                             <CTableRow>
                                                  <CTableDataCell className="text-light bg-info">Work Flow</CTableDataCell>
                                                  <CTableDataCell>CALIBRATION_DATA_SHEET</CTableDataCell>
                                             </CTableRow>
                                             <CTableRow>
                                                  <CTableDataCell className="text-light bg-info">Data Sheet</CTableDataCell>
                                                  <CTableDataCell>65276af33357c4362595e464</CTableDataCell>
                                             </CTableRow>
                                             <CTableRow>
                                                  <CTableDataCell className="text-light bg-info">Schedule Description</CTableDataCell>
                                                  <CTableDataCell>Monthly Calibration</CTableDataCell>
                                             </CTableRow>
                                             <CTableRow>
                                                  <CTableDataCell className="text-light bg-info">Unique Code</CTableDataCell>
                                                  <CTableDataCell>Mnth/en33/23/monthly</CTableDataCell>
                                             </CTableRow>
                                             <CTableRow>
                                                  <CTableDataCell className="text-light bg-info">Sequence Number</CTableDataCell>
                                                  <CTableDataCell>calibrationSchedule-052024-0000014</CTableDataCell>
                                             </CTableRow>
                                             <CTableRow>
                                                  <CTableDataCell className="text-light bg-info">Start Date</CTableDataCell>
                                                  <CTableDataCell>Jun 1st 2024 05:30</CTableDataCell>
                                             </CTableRow>
                                             <CTableRow>
                                                  <CTableDataCell className="text-light bg-info">Frequency</CTableDataCell>
                                                  <CTableDataCell>monthly</CTableDataCell>
                                             </CTableRow>
                                             <CTableRow>
                                                  <CTableDataCell className="text-light bg-info">Next Calibration Due Date</CTableDataCell>
                                                  <CTableDataCell>Jul 1st 2024 05:30</CTableDataCell>
                                             </CTableRow>
                                             <CTableRow>
                                                  <CTableDataCell className="text-light bg-info">Tolerance Period</CTableDataCell>
                                                  <CTableDataCell>7</CTableDataCell>
                                             </CTableRow>
                                             <CTableRow>
                                                  <CTableDataCell className="text-light bg-info">Status</CTableDataCell>
                                                  <CTableDataCell>ACTIVE</CTableDataCell>
                                             </CTableRow>
                                           
                                        </CTableBody>
                                   </CTable>
                              </div>
                         </div>
                         <dib className="block">
                              <div className="main-head">
                                   <h4 className="fw-bold mb-4 mt-3">History</h4>
                              </div>
                             <div className="bg-white px-5 py-3">
                                   <CTable align="middle" className="mb-0" small bordered>
                                        <CTableBody>
                                             <CTableRow color="warning">
                                                   <CTableDataCell>Revision</CTableDataCell>
                                                  <CTableDataCell>-</CTableDataCell>
                                             </CTableRow>
                                             <CTableRow>
                                                  <CTableDataCell className="text-light bg-info">Instrument Category</CTableDataCell>
                                                  <CTableDataCell>-</CTableDataCell>
                                             </CTableRow>
                                             <CTableRow>
                                                  <CTableDataCell className="text-light bg-info">Instrument Name</CTableDataCell>
                                                  <CTableDataCell>weighing Balance 2</CTableDataCell>
                                             </CTableRow>
                                             <CTableRow>
                                                  <CTableDataCell className="text-light bg-info">Module</CTableDataCell>
                                                  <CTableDataCell></CTableDataCell>
                                             </CTableRow>
                                             <CTableRow>
                                                  <CTableDataCell className="text-light bg-info">Calibration Type</CTableDataCell>
                                                  <CTableDataCell>monthly</CTableDataCell>
                                             </CTableRow>
                                             <CTableRow>
                                                  <CTableDataCell className="text-light bg-info">Work Flow</CTableDataCell>
                                                  <CTableDataCell>CALIBRATION_DATA_SHEET</CTableDataCell>
                                             </CTableRow>
                                             <CTableRow>
                                                  <CTableDataCell className="text-light bg-info">Data Sheet</CTableDataCell>
                                                  <CTableDataCell>65276af3333f2f2f2f5</CTableDataCell>
                                             </CTableRow>
                                            
                                             <CTableRow>
                                                  <CTableDataCell className="text-light bg-info">Schedule Description </CTableDataCell>
                                                  <CTableDataCell>Monthly Calibration</CTableDataCell>
                                             </CTableRow><CTableRow>
                                                  <CTableDataCell className="text-light bg-info">Unique Code </CTableDataCell>
                                                  <CTableDataCell>Mnth/en33/23/monthly</CTableDataCell>
                                             </CTableRow><CTableRow>
                                                  <CTableDataCell className="text-light bg-info">Sequence Number </CTableDataCell>
                                                  <CTableDataCell>calibrationSchedule-052024-0000014</CTableDataCell>
                                             </CTableRow>
                                             <CTableRow>
                                                  <CTableDataCell className="text-light bg-info">Start Date </CTableDataCell>
                                                  <CTableDataCell>Jun 1st 2024 05:30</CTableDataCell>
                                             </CTableRow>
                                             <CTableRow>
                                                  <CTableDataCell className="text-light bg-info">Frequency </CTableDataCell>
                                                  <CTableDataCell>monthly</CTableDataCell>
                                             </CTableRow>
                                             <CTableRow>
                                                  <CTableDataCell className="text-light bg-info">Next Calibration Due Date </CTableDataCell>
                                                  <CTableDataCell>Jul 1st 2024 05:30</CTableDataCell>
                                             </CTableRow>
                                             <CTableRow>
                                                  <CTableDataCell className="text-light bg-info">Tolerance Period </CTableDataCell>
                                                  <CTableDataCell>7</CTableDataCell>
                                             </CTableRow>
                                             <CTableRow>
                                                  <CTableDataCell className="text-light bg-info">Status </CTableDataCell>
                                                  <CTableDataCell>ACTIVE</CTableDataCell>
                                             </CTableRow>
                                        </CTableBody>
                                   </CTable>
                              </div>

                              <div className="bg-white px-5 py-3">
                                   <CTable align="middle" className="mb-0" small bordered>
                                        <CTableBody>
                                             <CTableRow color="warning">
                                                   <CTableDataCell>Revision</CTableDataCell>
                                                  <CTableDataCell>-</CTableDataCell>
                                             </CTableRow>
                                             <CTableRow>
                                                  <CTableDataCell className="text-light bg-info">Instrument Category</CTableDataCell>
                                                  <CTableDataCell>-</CTableDataCell>
                                             </CTableRow>
                                             <CTableRow>
                                                  <CTableDataCell className="text-light bg-info">Instrument Name</CTableDataCell>
                                                  <CTableDataCell>weighing Balance 2</CTableDataCell>
                                             </CTableRow>
                                             <CTableRow>
                                                  <CTableDataCell className="text-light bg-info">Module</CTableDataCell>
                                                  <CTableDataCell></CTableDataCell>
                                             </CTableRow>
                                             <CTableRow>
                                                  <CTableDataCell className="text-light bg-info">Calibration Type</CTableDataCell>
                                                  <CTableDataCell>monthly</CTableDataCell>
                                             </CTableRow>
                                             <CTableRow>
                                                  <CTableDataCell className="text-light bg-info">Work Flow</CTableDataCell>
                                                  <CTableDataCell>CALIBRATION_DATA_SHEET</CTableDataCell>
                                             </CTableRow>
                                             <CTableRow>
                                                  <CTableDataCell className="text-light bg-info">Data Sheet</CTableDataCell>
                                                  <CTableDataCell>65276af3333f2f2f2f5</CTableDataCell>
                                             </CTableRow>
                                            
                                             <CTableRow>
                                                  <CTableDataCell className="text-light bg-info">Schedule Description </CTableDataCell>
                                                  <CTableDataCell>Monthly Calibration</CTableDataCell>
                                             </CTableRow><CTableRow>
                                                  <CTableDataCell className="text-light bg-info">Unique Code </CTableDataCell>
                                                  <CTableDataCell>Mnth/en33/23/monthly</CTableDataCell>
                                             </CTableRow><CTableRow>
                                                  <CTableDataCell className="text-light bg-info">Sequence Number </CTableDataCell>
                                                  <CTableDataCell>calibrationSchedule-052024-0000014</CTableDataCell>
                                             </CTableRow>
                                             <CTableRow>
                                                  <CTableDataCell className="text-light bg-info">Start Date </CTableDataCell>
                                                  <CTableDataCell>Jun 1st 2024 05:30</CTableDataCell>
                                             </CTableRow>
                                             <CTableRow>
                                                  <CTableDataCell className="text-light bg-info">Frequency </CTableDataCell>
                                                  <CTableDataCell>monthly</CTableDataCell>
                                             </CTableRow>
                                             <CTableRow>
                                                  <CTableDataCell className="text-light bg-info">Next Calibration Due Date </CTableDataCell>
                                                  <CTableDataCell>Jul 1st 2024 05:30</CTableDataCell>
                                             </CTableRow>
                                             <CTableRow>
                                                  <CTableDataCell className="text-light bg-info">Tolerance Period </CTableDataCell>
                                                  <CTableDataCell>7</CTableDataCell>
                                             </CTableRow>
                                             <CTableRow>
                                                  <CTableDataCell className="text-light bg-info">Status </CTableDataCell>
                                                  <CTableDataCell>ACTIVE</CTableDataCell>
                                             </CTableRow>
                                        </CTableBody>
                                   </CTable>
                              </div>
                         </dib>
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

export default CalibrationScheduleDetails
