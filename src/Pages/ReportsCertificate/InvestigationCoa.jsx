import { CButton, CCol, CFormInput, CFormSelect, CRow, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react"
import { faEye } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { FaArrowRight } from "react-icons/fa"
import { Link } from "react-router-dom"

function InvestigationCoa() {
    
    const badgeStyle = { background: "#cdffca" }
    
    return (
        <>

            <div id="approval-page" className="h-100 mx-5">
                <div className="container-fluid my-5">

                    <div className="main-head">
                        <div className="title fw-bold fs-5">investigation Coa </div>


                    </div>
                    <div className="d-flex gap-4">


                    </div>
                    <div>
                        <CRow className="mb-3">
                        <CCol sm={2}>
                                <CFormSelect
                                    options={[
                                        'Ar No.',
                                        { label: 'ARPC0000001' },
                                        { label: 'ARPC0000002' },
                                        { label: 'ARPC0000003' }
                                       
                                    ]}
                                />
                            </CCol>
                            <CCol sm={3}>
                                <CFormSelect
                                    options={[
                                        'Select Status',
                                        { label: 'All' },
                                        { label: 'Initiated' },
                                        { label: 'Approved' },
                                        { label: 'Rejected' },
                                        { label: 'Reinitiated' },
                                        { label: 'Droped' }
                                    ]}
                                />
                            </CCol>

                            
                        </CRow>
                    </div>
                    <div className="bg-white mt-5">
                        <CTable align="middle" responsive className=" shadow">
                            <CTableHead>
                                <CTableRow>
                                    <CTableHeaderCell scope="col">S NO.</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Sample Type</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Product / Material</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">A.R No.</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Generic Name</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Specification Code</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Actions</CTableHeaderCell>
                                </CTableRow>
                            </CTableHead>
                            <CTableBody>
                                <CTableRow>
                                    <CTableDataCell>1</CTableDataCell>
                                    <CTableDataCell>Petrochemical</CTableDataCell>
                                    <CTableDataCell>Hydraulic Oil</CTableDataCell>
                                    <CTableDataCell>ARPC0000001</CTableDataCell>
                                    <CTableDataCell>hyo</CTableDataCell>
                                    <CTableDataCell>HOS 234</CTableDataCell>                                   
                                    
                                    <CTableDataCell className="">
                                        <div className="py-2 px-3 small rounded fw-bold bg-info" >APPROVED</div>
                                    </CTableDataCell>                                   

                                    <CTableDataCell>
                                        <div className="d-flex gap-3">
                                            <Link to="/approval/1321"><FontAwesomeIcon icon={faEye} /></Link>
                                        </div>
                                    </CTableDataCell>
                                </CTableRow>

                                <CTableRow>
                                    <CTableDataCell>2</CTableDataCell>
                                    <CTableDataCell>Petrochemical</CTableDataCell>
                                    <CTableDataCell>Sacubitril</CTableDataCell>
                                    <CTableDataCell>ARPC0000002</CTableDataCell>
                                    <CTableDataCell>Polycaprolactone</CTableDataCell>
                                    <CTableDataCell>RPS-TSLV-00</CTableDataCell>
                                    <CTableDataCell className="">
                                        <div className="py-2 px-3 small rounded fw-bold bg-info" >Approved</div>
                                    </CTableDataCell>
                                    

                                    <CTableDataCell>
                                        <div className="d-flex gap-3">
                                            <Link to="/approval/1321"><FontAwesomeIcon icon={faEye} /></Link>
                                            
                                        </div>
                                    </CTableDataCell>
                                </CTableRow>

                            </CTableBody>
                        </CTable>
                    </div>

                    <div className="pagination">

                        <div className="pagination">
                            <div className='mr-5'>
                                <button className="btn  mr-2" >&lt;&lt;</button>
                            </div>
                            <div className="current-page-number mr-2 bg-dark-subtle page-item">
                                <button className='btn rounded-circle'> 1 </button>
                            </div>
                            <div>
                                <button className="btn mr-2" >&gt;&gt;</button>

                            </div>

                        </div>
                        <button className="btn btn-next" > Next <FaArrowRight /></button>
                    </div>


                </div>
            </div>

            
        </>
    )
}

export default InvestigationCoa
