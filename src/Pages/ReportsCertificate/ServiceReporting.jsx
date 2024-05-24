import { CButton, CCol, CFormInput, CFormSelect, CFormTextarea, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react"
import { faEye, faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { FaArrowRight } from "react-icons/fa"
import { Link } from "react-router-dom"

function ServiceReporting() {
    const [addModal, setAddModal] = useState(false)
    const badgeStyle = { background: "#cdffca" }
    
    return (
        <>

            <div id="approval-page" className="h-100 mx-5">
                <div className="container-fluid my-5">

                    <div className="main-head">
                        <div className="title fw-bold fs-5">Service Reporting</div>


                    </div>
                    <div className="d-flex gap-4">


                    </div>
                    <div>
                        <CRow className="mb-3">
                            <CCol sm={3}>
                                <CFormSelect
                                    options={[
                                        'Select Status',
                                        { label: 'Active' },
                                        { label: 'Inactive' }
                                    ]}
                                />
                            </CCol>

                            <CCol sm={6}></CCol>

                            <CCol sm={3}>
                                <div className="d-flex justify-content-end">
                                    <CButton className="bg-info text-light" onClick={() => setAddModal(true)}>Add Service</CButton>
                                </div>
                            </CCol>
                        </CRow>
                    </div>
                    <div className="bg-white mt-5">
                        <CTable align="middle" responsive className=" shadow">
                            <CTableHead>
                                <CTableRow>
                                    <CTableHeaderCell scope="col">S NO.</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Problem ID</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Instrument ID</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Module ID</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Problem In Brief</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Problem In Details</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Expected Closure Date</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Job Details</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Status</CTableHeaderCell>

                                    <CTableHeaderCell scope="col">Actions</CTableHeaderCell>
                                </CTableRow>
                            </CTableHead>
                            <CTableBody>
                                <CTableRow>
                                    <CTableDataCell>1</CTableDataCell>
                                    <CTableDataCell>SHMDZ</CTableDataCell>
                                    <CTableDataCell>hplc</CTableDataCell>
                                    <CTableDataCell>SHMDZ/102145</CTableDataCell>
                                    <CTableDataCell>test</CTableDataCell>
                                    <CTableDataCell>test</CTableDataCell>
                                    <CTableDataCell>Nov 17th 23</CTableDataCell>
                                    <CTableDataCell>Test</CTableDataCell>

                                    <CTableDataCell className="">
                                        <div className="py-2 px-3 small rounded fw-bold" style={badgeStyle}>Active</div>
                                    </CTableDataCell>                                   

                                    <CTableDataCell>
                                        <div className="d-flex gap-3">
                                            <Link to="/approval/1321"><FontAwesomeIcon icon={faEye} /></Link>
                                            <div className="cursor-pointer" onClick={() => setAddModal(true)}><FontAwesomeIcon icon={faPenToSquare} /></div>
                                            <Link to="#"><FontAwesomeIcon icon={faTrashCan} /></Link>
                                        </div>
                                    </CTableDataCell>
                                </CTableRow>

                                <CTableRow>
                                    <CTableDataCell>2</CTableDataCell>
                                    <CTableDataCell>Test0122</CTableDataCell>
                                    <CTableDataCell>hplc01</CTableDataCell>
                                    <CTableDataCell>hplc/0112</CTableDataCell>
                                    <CTableDataCell>test</CTableDataCell>
                                    <CTableDataCell>Test</CTableDataCell>
                                    <CTableDataCell>oct 15th 23</CTableDataCell>
                                    <CTableDataCell>AL002</CTableDataCell>

                                    <CTableDataCell className="">
                                        <div className="py-2 px-3 small rounded fw-bold" style={badgeStyle}>Active</div>
                                    </CTableDataCell>
                                    

                                    <CTableDataCell>
                                        <div className="d-flex gap-3">
                                            <Link to="/approval/1321"><FontAwesomeIcon icon={faEye} /></Link>
                                            <div className="cursor-pointer" onClick={() => setAddModal(true)}><FontAwesomeIcon icon={faPenToSquare} /></div>
                                            <Link to="#"><FontAwesomeIcon icon={faTrashCan} /></Link>
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

            {addModal && <StatusModal visible={addModal} closeModal={() => setAddModal(false)} />}

        </>
    )
}

const StatusModal = (_props) => {
    return (
        <>
            <CModal
                alignment="center"
                visible={_props.visible}
                onClose={_props.closeModal}
            >
                <CModalHeader>
                    <CModalTitle>Add Service Reporting</CModalTitle>
                </CModalHeader>

                <CModalBody>

                    <CFormSelect
                        type="text"
                        label="Problem ID"
                        options={[
                            "Select...",
                            { label: "SHMDZ" }
                           
                        ]}
                        placeholder="Select... "
                    />
                    <CFormInput
                        type="text"
                        label="Instrument (Instrument ID)"
                        placeholder="hplc "
                        disabled
                    />
                    <CFormSelect
                        type="text"
                        label="Module ID"
                        options={[
                            "Select...",
                            { label: "wl/wb/m/001" }
                           
                        ]}
                        placeholder="Select... "
                    />
                    <CFormInput
                        type="text"
                        label="Problem In Brief"
                        placeholder="Problem In Brief "
                    />
                    <CFormInput
                        type="text"
                        label="Problem In Details"
                        placeholder="Problem In Details"
                    />

                    <CFormInput
                        type="text"
                        label="Problem In Brief"
                        placeholder=" Problem In Brief"
                    />

                    <CFormInput
                        type="file"
                        label="Reference Document"
                        placeholder=" choose file"
                    />

                    <CFormInput
                        type="date"
                        label="Occured On"
                        placeholder=" "
                    />

                    <CFormInput
                        type="date"
                        label="Reported On"
                        placeholder=" "
                    />

<CFormInput
                        type="date"
                        label="Attended On"
                        placeholder=" "
                    />

                    <CFormInput
                        type="date"
                        label="Expected Closure Date"
                        placeholder=" "
                    />

                    <CFormInput
                        type="text"
                        label="Job Details"
                        placeholder=" Job Details"
                    />

                </CModalBody>
                <CModalFooter>
                    <CButton color="light" onClick={_props.closeModal}>
                        Back
                    </CButton>
                    <CButton className="bg-info text-light">Submit</CButton>
                </CModalFooter>
            </CModal>
        </>
    );
};
export default ServiceReporting
