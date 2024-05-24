import {  CButton, CFooter,  CHeader,  CTable, CTableBody, CTableDataCell, CTableRow } from "@coreui/react"
import { useState } from "react"



function Coa_TemplateDetails() {
    const [statusModal, setStatusModal] = useState(false)
     return (
          <>

               <div id="coaTemplate-page" className="py-3 bg-light h-100">
                    <div className="container-fluid">
                         <div className="block mb-3">
                              <div className="main-head d-flex justify-content-between align-items-center">
                                   <h4 className="fw-bold mb-4 mt-3">COA Tempalte Details</h4>
                                   <CButton color="dark" onClick={() => setStatusModal(true)}>Update Status</CButton>

                              </div>
                              <div className="bg-white px-5 py-3">
                                   <CTable align="middle" className="mb-0" small bordered>
                                        <CTableBody>
                                             <CTableRow>
                                                  <CTableDataCell className="text-light bg-info">Template Id</CTableDataCell>
                                                  <CTableDataCell>SCOA-022024-0000001</CTableDataCell>
                                             </CTableRow>
                                             <CTableRow>
                                                  <CTableDataCell className="text-light bg-info">Sample Type</CTableDataCell>
                                                  <CTableDataCell></CTableDataCell>
                                             </CTableRow>
                                             <CTableRow>
                                                  <CTableDataCell className="text-light bg-info">Coa Type</CTableDataCell>
                                                  <CTableDataCell></CTableDataCell>
                                             </CTableRow>
                                             <CTableRow>
                                                  <CTableDataCell className="text-light bg-info">Report Title</CTableDataCell>
                                                  <CTableDataCell></CTableDataCell>
                                             </CTableRow>
                                             <CTableRow>
                                                  <CTableDataCell className="text-light bg-info">Product Material</CTableDataCell>
                                                  <CTableDataCell></CTableDataCell>
                                             </CTableRow>
                                             <CTableRow>
                                                  <CTableDataCell className="text-light bg-info">Format No.</CTableDataCell>
                                                  <CTableDataCell></CTableDataCell>
                                             </CTableRow>
                                             <CTableRow>
                                                  <CTableDataCell className="text-light bg-info">Added By</CTableDataCell>
                                                  <CTableDataCell></CTableDataCell>
                                             </CTableRow>
                                             <CTableRow>
                                                  <CTableDataCell className="text-light bg-info">Added On</CTableDataCell>
                                                  <CTableDataCell>05/05/2024</CTableDataCell>
                                             </CTableRow>
                                             <CTableRow>
                                                  <CTableDataCell className="text-light bg-info">Status</CTableDataCell>
                                                  <CTableDataCell></CTableDataCell>
                                             </CTableRow>
                                             
                                        </CTableBody>
                                   </CTable>
                              </div>
                         </div>
                         <div className="block mb-3">
                         <div className="main-head ">
                                   <h4 className="fw-bold mb-4 mt-3">History</h4>
                                   
                              </div>
                              
                              <div className="bg-white px-5 py-3">
                                   <CTable align="middle" className="mb-0" small bordered>
                                        <CTableBody>
                                            
                                             <CTableRow >
                                                  <CTableDataCell className=" bg-light">Revision</CTableDataCell>
                                                  <CTableDataCell className="bg-light">0</CTableDataCell>                                                  
                                             </CTableRow>

                                             <CTableRow>
                                                  <CTableDataCell className="text-light bg-info">Template Id</CTableDataCell>
                                                  <CTableDataCell>SCOA-022024-0000001</CTableDataCell>
                                             </CTableRow>
                                             <CTableRow>
                                                  <CTableDataCell className="text-light bg-info">Sample Type</CTableDataCell>
                                                  <CTableDataCell></CTableDataCell>
                                             </CTableRow>
                                             <CTableRow>
                                                  <CTableDataCell className="text-light bg-info">Coa Type</CTableDataCell>
                                                  <CTableDataCell>WITH-SPECIFICATION</CTableDataCell>
                                             </CTableRow>
                                             <CTableRow>
                                                  <CTableDataCell className="text-light bg-info">Report Title</CTableDataCell>
                                                  <CTableDataCell>testing</CTableDataCell>
                                             </CTableRow>
                                             <CTableRow>
                                                  <CTableDataCell className="text-light bg-info">Product Material</CTableDataCell>
                                                  <CTableDataCell>testing</CTableDataCell>
                                             </CTableRow>
                                             <CTableRow>
                                                  <CTableDataCell className="text-light bg-info">Format No.</CTableDataCell>
                                                  <CTableDataCell>001</CTableDataCell>
                                             </CTableRow>
                                             <CTableRow>
                                                  <CTableDataCell className="text-light bg-info">Added By</CTableDataCell>
                                                  <CTableDataCell>afiya</CTableDataCell>
                                             </CTableRow>
                                             <CTableRow>
                                                  <CTableDataCell className="text-light bg-info">Added On</CTableDataCell>
                                                  <CTableDataCell>05/05/2024</CTableDataCell>
                                             </CTableRow>
                                             <CTableRow>
                                                  <CTableDataCell className="text-light bg-info">Status</CTableDataCell>
                                                  <CTableDataCell>DROPPED</CTableDataCell>
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

export default Coa_TemplateDetails
