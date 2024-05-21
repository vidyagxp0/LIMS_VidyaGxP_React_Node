import { CButton, CCol, CFormInput, CFormSelect, CFormTextarea, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react"
import { faEye, faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { FaArrowRight } from "react-icons/fa"
import { Link } from "react-router-dom"

function Plants() {
    const [addModal, setAddModal] = useState(false)
    const badgeStyle = { background: "#cdffca" }
    
    return (
        <>

            <div id="approval-page" className="h-100 mx-5">
                <div className="container-fluid my-5">

                    <div className="main-head">
                        <div className="title fw-bold fs-5">Plant's </div>


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
                                    <CButton className="bg-info text-white" onClick={() => setAddModal(true)}>Add Plant</CButton>
                                </div>
                            </CCol>
                        </CRow>
                    </div>
                    <div className="bg-white mt-5">
                        <CTable align="middle" responsive className=" shadow">
                            <CTableHead>
                                <CTableRow>
                                    <CTableHeaderCell scope="col">S NO.</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Plant Code</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Plant Name</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Address</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Register On</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Actions</CTableHeaderCell>
                                </CTableRow>
                            </CTableHead>
                            <CTableBody>
                                <CTableRow>
                                    <CTableDataCell>1</CTableDataCell>
                                    <CTableDataCell>SHMDZ/102145</CTableDataCell>
                                    <CTableDataCell>Master</CTableDataCell>
                                    <CTableDataCell>Indore</CTableDataCell>
                                    <CTableDataCell>feb 11th 23</CTableDataCell>
                                    
                                    <CTableDataCell className="">
                                        <div className="py-2 px-3 small rounded fw-bold" style={badgeStyle}>Active</div>
                                    </CTableDataCell>                                   

                                    <CTableDataCell>
                                        <div className="d-flex gap-3">
                                            <div className="cursor-pointer" onClick={() => setAddModal(true)}><FontAwesomeIcon icon={faPenToSquare} /></div>
                                            <Link to="#"><FontAwesomeIcon icon={faTrashCan} /></Link>
                                        </div>
                                    </CTableDataCell>
                                </CTableRow>

                                <CTableRow>
                                    <CTableDataCell>2</CTableDataCell>
                                    <CTableDataCell>hplc/0112</CTableDataCell>
                                    <CTableDataCell>win_master</CTableDataCell>
                                    <CTableDataCell>Maharashtra</CTableDataCell>
                                    <CTableDataCell>oct 15th 23</CTableDataCell>
                                    <CTableDataCell className="">
                                        <div className="py-2 px-3 small rounded fw-bold" style={badgeStyle} >Active</div>
                                    </CTableDataCell>
                                    

                                    <CTableDataCell>
                                        <div className="d-flex gap-3">
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
                    <CModalTitle>Add Plant</CModalTitle>
                </CModalHeader>
                <CModalBody>

                    <CFormInput
                        type="text"
                        label="Name"
                        placeholder=" "
                    />
                    <CFormInput
                        type="text"
                        label="Plant Code"
                        placeholder=""
                    />

                    <CFormInput
                        type="text"
                        label="Address"
                        placeholder=" "
                    />
                    
                    
                </CModalBody>
                <CModalFooter>
                    <CButton color="light" onClick={_props.closeModal}>Back</CButton>
                    <CButton className="bg-info text-white">Add</CButton>
                </CModalFooter>
            </CModal>

        </>
    )
}
export default Plants
