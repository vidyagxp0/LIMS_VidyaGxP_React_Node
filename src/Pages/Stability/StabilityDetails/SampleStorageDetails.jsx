import { CButton, CFormSelect, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CTable, CTableBody, CTableDataCell, CTableRow } from "@coreui/react"
import { useState } from "react"


function SampleStorageDetails() {
    return (
        <>

            <div id="approval-page" className="py-3 bg-light h-100">
                <div className="container-fluid">
                    <div className="bock mb-3">
                        <div className="main-head d-flex justify-content-between align-items-center">
                            <h4 className="fw-bold mb-4 mt-3">Sample Storage Details</h4>
                        </div>
                        <div className="bg-white px-5 py-3">
                            <CTable align="middle" className="mb-0" small bordered>
                                <CTableBody>
                                    <CTableRow>
                                        <CTableDataCell color="info">Product / Material</CTableDataCell>
                                        <CTableDataCell>Sodium Propyl Paraben IP</CTableDataCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableDataCell color="info">Specification ID</CTableDataCell>
                                        <CTableDataCell>EUR/SOP-AD-01</CTableDataCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableDataCell color="info">Protocol ID</CTableDataCell>
                                        <CTableDataCell>asdf3453</CTableDataCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableDataCell color="info">Storage Condition</CTableDataCell>
                                        <CTableDataCell>32℃</CTableDataCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableDataCell color="info">Chamber ID</CTableDataCell>
                                        <CTableDataCell>stmp23</CTableDataCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableDataCell color="info">Actual Storage Quantity</CTableDataCell>
                                        <CTableDataCell>100</CTableDataCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableDataCell color="info">Available Storage Quantity</CTableDataCell>
                                        <CTableDataCell>80</CTableDataCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableDataCell color="info">No. Of Storage Positions</CTableDataCell>
                                        <CTableDataCell>8</CTableDataCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableDataCell color="info">Chamber Description</CTableDataCell>
                                        <CTableDataCell>Desc</CTableDataCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableDataCell color="info">Chamber Location</CTableDataCell>
                                        <CTableDataCell>loc1</CTableDataCell>
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

                        <div className="bg-white px-5 py-3">
                            <CTable align="middle" className="mb-0" small bordered>
                                <CTableBody>
                                    <CTableRow color="info">
                                        <CTableDataCell>S No.</CTableDataCell>
                                        <CTableDataCell>Rack No.</CTableDataCell>
                                        <CTableDataCell>Shelf No.</CTableDataCell>
                                        <CTableDataCell>Position</CTableDataCell>
                                        <CTableDataCell>Quantity (kg)</CTableDataCell>
                                        <CTableDataCell>Remarks</CTableDataCell>

                                    </CTableRow>
                                    <CTableRow color="">
                                        <CTableDataCell>1</CTableDataCell>
                                        <CTableDataCell>1</CTableDataCell>
                                        <CTableDataCell>1</CTableDataCell>
                                        <CTableDataCell>1</CTableDataCell>
                                        <CTableDataCell>10</CTableDataCell>
                                        <CTableDataCell>na</CTableDataCell>
                                    </CTableRow>
                                    <CTableRow color="">
                                        <CTableDataCell>2</CTableDataCell>
                                        <CTableDataCell>1</CTableDataCell>
                                        <CTableDataCell>1</CTableDataCell>
                                        <CTableDataCell>1</CTableDataCell>
                                        <CTableDataCell>10</CTableDataCell>
                                        <CTableDataCell>na</CTableDataCell>
                                    </CTableRow>
                                    <CTableRow color="">
                                        <CTableDataCell>3</CTableDataCell>
                                        <CTableDataCell>1</CTableDataCell>
                                        <CTableDataCell>1</CTableDataCell>
                                        <CTableDataCell>1</CTableDataCell>
                                        <CTableDataCell>10</CTableDataCell>
                                        <CTableDataCell>na</CTableDataCell>
                                    </CTableRow>
                                    <CTableRow color="">
                                        <CTableDataCell>4</CTableDataCell>
                                        <CTableDataCell>1</CTableDataCell>
                                        <CTableDataCell>1</CTableDataCell>
                                        <CTableDataCell>1</CTableDataCell>
                                        <CTableDataCell>10</CTableDataCell>
                                        <CTableDataCell>na</CTableDataCell>
                                    </CTableRow>
                                    <CTableRow color="">
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


        </>
    )
}





export default SampleStorageDetails
