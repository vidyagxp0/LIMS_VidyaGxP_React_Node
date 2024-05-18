import { CButton, CCol, CFormInput, CFormSelect, CFormTextarea, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react"
import { faEye, faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { FaArrowRight } from "react-icons/fa"
import { Link } from "react-router-dom"

function ProblemReporting() {
    const [addModal, setAddModal] = useState(false)
    const badgeStyle = { background: "#cdffca" }
    return (
        <>

            <div id="approval-page" className="h-100 mx-5">
                <div className="container-fluid my-5">

                    <div className="main-head">
                        <div className="title fw-bold fs-5">Problem Reporting</div>


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
                                    <CButton color="dark" onClick={() => setAddModal(true)}>Add Problem</CButton>
                                </div>
                            </CCol>
                        </CRow>
                    </div>
                    <div className="bg-white mt-5">
                        <CTable align="middle" responsive className=" shadow">
                            <CTableHead>
                                <CTableRow>
                                    <CTableHeaderCell scope="col">S NO.</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Instrument</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Instrument Category</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Supplied By</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Problem ID</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Problem In Brief</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Problem In Details</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Occured On</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Actions</CTableHeaderCell>
                                </CTableRow>
                            </CTableHead>
                            <CTableBody>
                                <CTableRow>
                                    <CTableDataCell>1</CTableDataCell>
                                    <CTableDataCell>chroma</CTableDataCell>
                                    <CTableDataCell>chromatography</CTableDataCell>
                                    <CTableDataCell>SHMDZ</CTableDataCell>
                                    <CTableDataCell>SHMDZ</CTableDataCell>
                                    <CTableDataCell>AL001</CTableDataCell>
                                    <CTableDataCell>Test</CTableDataCell>
                                    <CTableDataCell>Nov 17th 23</CTableDataCell>
                                    

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
                                    <CTableDataCell>Test</CTableDataCell>
                                    <CTableDataCell>chromatography</CTableDataCell>
                                    <CTableDataCell>hplc</CTableDataCell>
                                    <CTableDataCell>SHMDZ</CTableDataCell>
                                    <CTableDataCell>AL002</CTableDataCell>
                                    <CTableDataCell>Test</CTableDataCell>
                                    <CTableDataCell>oct 15th 23</CTableDataCell>
                                    

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

            <CModal alignment="center" visible={_props.visible} onClose={_props.closeModal}>
                <CModalHeader>
                    <CModalTitle>Add Storage Chamber</CModalTitle>
                </CModalHeader>
                <CModalBody>

                    <CFormInput
                        type="text"
                        label="Chamber ID"
                        placeholder="Chamber Id "
                    />
                    <CFormInput
                        type="text"
                        label="Description"
                        placeholder="Enter Description "
                    />

                    <CFormInput
                        type="text"
                        label="Make / Model"
                        placeholder="Make / Model "
                    />
                    <CFormInput
                        type="text"
                        label="Serial No."
                        placeholder="Serial Number "
                    />
                    <CFormInput
                        type="text"
                        label="Location"
                        placeholder="Location "
                    />
                    <CFormTextarea
                        type="text"
                        label="Comments"
                        placeholder=""
                    />
                    <CFormInput
                        type="text"
                        label="Stability Storage Condition"
                        placeholder="Select... "
                    />
                    <CFormInput
                        type="text"
                        label="Number Of Racks"
                        placeholder="Number Of Racks "
                    />
                    <CFormInput
                        type="text"
                        label="Number Of Shelfs"
                        placeholder="Number Of Shelfs "
                    />
                    <CFormInput
                        type="text"
                        label="Maximum No. Of Positions For Shelf"
                        placeholder="0"
                    />
                </CModalBody>
                <CModalFooter>
                    <CButton color="light" onClick={_props.closeModal}>Cancel</CButton>
                    <CButton color="dark">Add</CButton>
                </CModalFooter>
            </CModal>

        </>
    )
}

export default ProblemReporting
