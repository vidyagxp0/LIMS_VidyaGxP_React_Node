import {  CButton, CFormSelect, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CTable, CTableBody, CTableDataCell, CTableRow } from "@coreui/react"
import { useState } from "react"


function SampleStorageDetails() {
    const [statusModal, setStatusModal] = useState(false)

    return (
        <>

            <div id="approval-page" className="py-3 bg-light h-100">
                <div className="container-fluid">
                    <div className="block mb-3">
                        <div className="main-head d-flex justify-content-between align-items-center">
                            <h4 className="fw-bold mb-4 mt-3">Sample Storage Details</h4>
                            <CButton className="text-light bg-info"  onClick={() => setStatusModal(true)}>Update Status</CButton>

                        </div>
                        <div className="bg-white px-5 py-3">
                            <CTable align="middle" className="mb-0" small bordered>
                                <CTableBody>
                                    <CTableRow>
                                        <CTableDataCell className="text-light bg-info">Product / Material</CTableDataCell>
                                        <CTableDataCell>Sodium Propyl Paraben IP</CTableDataCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableDataCell className="text-light bg-info">Specification ID</CTableDataCell>
                                        <CTableDataCell>EUR/SOP-AD-01</CTableDataCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableDataCell className="text-light bg-info">Protocol ID</CTableDataCell>
                                        <CTableDataCell>asdf3453</CTableDataCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableDataCell className="text-light bg-info">Storage Condition</CTableDataCell>
                                        <CTableDataCell>32℃</CTableDataCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableDataCell className="text-light bg-info">Chamber ID</CTableDataCell>
                                        <CTableDataCell>stmp23</CTableDataCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableDataCell className="text-light bg-info">Actual Storage Quantity</CTableDataCell>
                                        <CTableDataCell>100</CTableDataCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableDataCell className="text-light bg-info">Available Storage Quantity</CTableDataCell>
                                        <CTableDataCell>80</CTableDataCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableDataCell className="text-light bg-info">No. Of Storage Positions</CTableDataCell>
                                        <CTableDataCell>8</CTableDataCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableDataCell className="text-light bg-info">Chamber Description</CTableDataCell>
                                        <CTableDataCell>Desc</CTableDataCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableDataCell className="text-light bg-info">Chamber Location</CTableDataCell>
                                        <CTableDataCell>loc1</CTableDataCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableDataCell className="text-light bg-info">Created At</CTableDataCell>
                                        <CTableDataCell>05/05/2024</CTableDataCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableDataCell className="text-light bg-info">Status</CTableDataCell>
                                        <CTableDataCell>APPROVED</CTableDataCell>
                                    </CTableRow>

                                </CTableBody>
                            </CTable>
                        </div>
                    </div>
                    <div className="block mb-3">

                        <div className="bg-white px-5 py-3">
                            <CTable align="middle" className="mb-0" small bordered>
                                <CTableBody>
                                    <CTableRow className="text-light bg-info">
                                        <CTableDataCell className="text-light bg-info">S No.</CTableDataCell>
                                        <CTableDataCell className="text-light bg-info">Rack No.</CTableDataCell>
                                        <CTableDataCell className="text-light bg-info">Shelf No.</CTableDataCell>
                                        <CTableDataCell className="text-light bg-info">Position</CTableDataCell>
                                        <CTableDataCell className="text-light bg-info">Quantity (kg)</CTableDataCell>
                                        <CTableDataCell className="text-light bg-info">Remarks</CTableDataCell>

                                    </CTableRow>
                                    <CTableRow className="">
                                        <CTableDataCell>1</CTableDataCell>
                                        <CTableDataCell>1</CTableDataCell>
                                        <CTableDataCell>1</CTableDataCell>
                                        <CTableDataCell>1</CTableDataCell>
                                        <CTableDataCell>10</CTableDataCell>
                                        <CTableDataCell>na</CTableDataCell>
                                    </CTableRow>
                                    <CTableRow className="">
                                        <CTableDataCell>2</CTableDataCell>
                                        <CTableDataCell>1</CTableDataCell>
                                        <CTableDataCell>1</CTableDataCell>
                                        <CTableDataCell>1</CTableDataCell>
                                        <CTableDataCell>10</CTableDataCell>
                                        <CTableDataCell>na</CTableDataCell>
                                    </CTableRow>
                                    <CTableRow className="">
                                        <CTableDataCell>3</CTableDataCell>
                                        <CTableDataCell>1</CTableDataCell>
                                        <CTableDataCell>1</CTableDataCell>
                                        <CTableDataCell>1</CTableDataCell>
                                        <CTableDataCell>10</CTableDataCell>
                                        <CTableDataCell>na</CTableDataCell>
                                    </CTableRow>
                                    <CTableRow className="">
                                        <CTableDataCell>4</CTableDataCell>
                                        <CTableDataCell>1</CTableDataCell>
                                        <CTableDataCell>1</CTableDataCell>
                                        <CTableDataCell>1</CTableDataCell>
                                        <CTableDataCell>10</CTableDataCell>
                                        <CTableDataCell>na</CTableDataCell>
                                    </CTableRow>
                                    <CTableRow className="">
                                        <CTableDataCell>5</CTableDataCell>
                                        <CTableDataCell>1</CTableDataCell>
                                        <CTableDataCell>1</CTableDataCell>
                                        <CTableDataCell>1</CTableDataCell>
                                        <CTableDataCell>10</CTableDataCell>
                                        <CTableDataCell>na</CTableDataCell>
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



export default SampleStorageDetails
