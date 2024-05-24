import {  CTable, CTableBody, CTableDataCell, CTableRow } from "@coreui/react"


function StabilityProtocolDetails() {
    return (
        <>

            <div id="approval-page" className="py-3 bg-light h-100">
                <div className="container-fluid">
                    <div className="block mb-3">
                        <div className="main-head d-flex justify-content-between align-items-center">
                            <h4 className="fw-bold mb-4 mt-3">Stability Protocol Details</h4>
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
                                        <CTableDataCell className="text-light bg-info">Protocol Type</CTableDataCell>
                                        <CTableDataCell>NEW</CTableDataCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableDataCell className="text-light bg-info">Sampled By</CTableDataCell>
                                        <CTableDataCell>na</CTableDataCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableDataCell className="text-light bg-info">Date format</CTableDataCell>
                                        <CTableDataCell>SHORTDATE</CTableDataCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableDataCell className="text-light bg-info">Starting Date</CTableDataCell>
                                        <CTableDataCell>12-May-2024 17:02</CTableDataCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableDataCell className="text-light bg-info">Manufacturing Date</CTableDataCell>
                                        <CTableDataCell>06-May-2024 05:30</CTableDataCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableDataCell className="text-light bg-info">Initial Testing required</CTableDataCell>
                                        <CTableDataCell>YES</CTableDataCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableDataCell className="text-light bg-info">Charging Start Date</CTableDataCell>
                                        <CTableDataCell>NOW</CTableDataCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableDataCell className="text-light bg-info">Storage Condition Uom</CTableDataCell>
                                        <CTableDataCell>gm</CTableDataCell>
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
                        <div className="main-head">
                            <h4 className="fw-bold mb-4 mt-3">Stability Storage Condition-1</h4>
                        </div>
                        <div className="bg-white">

                            <h5>Storage Condition</h5>
                            <h6>No Of Pulls</h6>
                            <h6>5</h6>
                        </div>

                        <div className="bg-white px-5 py-3">
                            <CTable align="middle" className="mb-0" >
                                <CTableBody>
                                    <CTableRow className="">
                                        <CTableDataCell>Station</CTableDataCell>
                                        <CTableDataCell></CTableDataCell>
                                        <CTableDataCell></CTableDataCell>
                                        <CTableDataCell>1 months</CTableDataCell>
                                        <CTableDataCell>2 months</CTableDataCell>
                                        <CTableDataCell>5 months</CTableDataCell>
                                        <CTableDataCell>6 months</CTableDataCell>
                                        <CTableDataCell>11 months</CTableDataCell>
                                    </CTableRow>

                                    <CTableRow className="">
                                        <CTableDataCell>Withdrawal Dates</CTableDataCell>
                                        <CTableDataCell></CTableDataCell>
                                        <CTableDataCell></CTableDataCell>
                                        <CTableDataCell>05-Jun-2024</CTableDataCell>
                                        <CTableDataCell>05-Jul-2024</CTableDataCell>
                                        <CTableDataCell>05-Oct-2024</CTableDataCell>
                                        <CTableDataCell>05-Nov-2024</CTableDataCell>
                                        <CTableDataCell>05-Apr-2025</CTableDataCell>
                                    </CTableRow>

                                    <CTableRow className="">
                                        <CTableDataCell>Sno.</CTableDataCell>
                                        <CTableDataCell>Test Name</CTableDataCell>
                                        <CTableDataCell>Group Name</CTableDataCell>
                                        <CTableDataCell>Selection</CTableDataCell>
                                        <CTableDataCell>Selection</CTableDataCell>
                                        <CTableDataCell>Selection</CTableDataCell>
                                        <CTableDataCell>Selection</CTableDataCell>
                                        <CTableDataCell>Selection</CTableDataCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableDataCell>1.</CTableDataCell>
                                        <CTableDataCell></CTableDataCell>
                                        <CTableDataCell></CTableDataCell>
                                        <CTableDataCell></CTableDataCell>
                                        <CTableDataCell></CTableDataCell>
                                        <CTableDataCell></CTableDataCell>
                                        <CTableDataCell></CTableDataCell>
                                        <CTableDataCell></CTableDataCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableDataCell>2.</CTableDataCell>
                                        <CTableDataCell></CTableDataCell>
                                        <CTableDataCell></CTableDataCell>
                                        <CTableDataCell></CTableDataCell>
                                        <CTableDataCell></CTableDataCell>
                                        <CTableDataCell></CTableDataCell>
                                        <CTableDataCell></CTableDataCell>
                                        <CTableDataCell></CTableDataCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableDataCell>3.</CTableDataCell>
                                        <CTableDataCell></CTableDataCell>
                                        <CTableDataCell></CTableDataCell>
                                        <CTableDataCell></CTableDataCell>
                                        <CTableDataCell></CTableDataCell>
                                        <CTableDataCell></CTableDataCell>
                                        <CTableDataCell></CTableDataCell>
                                        <CTableDataCell></CTableDataCell>
                                    </CTableRow>
                                </CTableBody>
                            </CTable>

                            <CTable align="middle" className="mb-0">
                                <CTableBody>
                                    <CTableRow className="">
                                        <CTableDataCell>Withdrawal Tolerance(days)</CTableDataCell>
                                        <CTableDataCell></CTableDataCell>
                                        <CTableDataCell></CTableDataCell>
                                        <CTableDataCell>2</CTableDataCell>
                                        <CTableDataCell>2</CTableDataCell>
                                        <CTableDataCell>4</CTableDataCell>
                                        <CTableDataCell>5</CTableDataCell>
                                        <CTableDataCell>1</CTableDataCell>
                                    </CTableRow>
                                    <CTableRow className="">
                                        <CTableDataCell>Generation Type</CTableDataCell>
                                        <CTableDataCell></CTableDataCell>
                                        <CTableDataCell></CTableDataCell>
                                        <CTableDataCell>A</CTableDataCell>
                                        <CTableDataCell>A</CTableDataCell>
                                        <CTableDataCell>A</CTableDataCell>
                                        <CTableDataCell>A</CTableDataCell>
                                        <CTableDataCell>A</CTableDataCell>

                                    </CTableRow>
                                    <CTableRow className="">
                                        <CTableDataCell>Withdrawal Quantity</CTableDataCell>
                                        <CTableDataCell></CTableDataCell>
                                        <CTableDataCell></CTableDataCell>
                                        <CTableDataCell>7</CTableDataCell>
                                        <CTableDataCell>10</CTableDataCell>
                                        <CTableDataCell>10</CTableDataCell>
                                        <CTableDataCell>10</CTableDataCell>
                                        <CTableDataCell>10</CTableDataCell>
                                    </CTableRow>
                                    <CTableRow className="">
                                        <CTableDataCell>Additional Quantity</CTableDataCell>
                                    </CTableRow>
                                    <CTableRow className="">
                                        <CTableDataCell>50</CTableDataCell>
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




export default StabilityProtocolDetails
