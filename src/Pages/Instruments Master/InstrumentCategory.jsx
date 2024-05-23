import { CButton, CCol, CFormInput, CFormSelect, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react"
import {  faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { FaArrowRight } from "react-icons/fa"


function InstrumentCategory() {
    const [addModal, setAddModal] = useState(false)
    const [deleteModal, setDeleteModal] = useState(false)
    const badgeStyle = { background: "#cdffca" }
    return (
        <>

            <div id="approval-page" className="h-100 mx-5">
                <div className="container-fluid my-5">

                    <div className="main-head">
                        <div className="title fw-bold fs-5">Instrument Category</div>


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
                                    <CButton className="bg-info text-white" onClick={() => setAddModal(true)}>Instrument Category</CButton>
                                </div>
                            </CCol>
                        </CRow>
                    </div>
                    <div className="bg-white mt-5">
                        <CTable align="middle" responsive className=" shadow">
                            <CTableHead>
                                <CTableRow>
                                    <CTableHeaderCell scope="col">S NO.</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Category Name</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Description</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Added On</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Actions</CTableHeaderCell>
                                </CTableRow>
                            </CTableHead>
                            <CTableBody>
                                <CTableRow>
                                    <CTableDataCell>1</CTableDataCell>
                                    <CTableDataCell>chromatography</CTableDataCell>
                                    <CTableDataCell>chroma</CTableDataCell>

                                    <CTableDataCell>Nov 17th 24</CTableDataCell>
                                    <CTableDataCell className="">
                                        <div className="py-2 px-3 small rounded fw-bold" style={badgeStyle}>Active</div>
                                    </CTableDataCell>

                                    <CTableDataCell>
                                        <div className="d-flex gap-3">
                                            {/* <Link to="/approval/1321"><FontAwesomeIcon icon={faEye} /></Link> */}
                                            <div className="cursor-pointer" onClick={() => setAddModal(true)}><FontAwesomeIcon icon={faPenToSquare} /></div>
                                            <div className='cursor-pointer' onClick={() => setDeleteModal(true)} ><FontAwesomeIcon icon={faTrashCan} /></div></div>
                                    </CTableDataCell>
                                </CTableRow>

                                <CTableRow>

                                    <CTableDataCell>2</CTableDataCell>
                                    <CTableDataCell>weighing balance</CTableDataCell>
                                    <CTableDataCell>EQI</CTableDataCell>

                                    <CTableDataCell>Jan 5th 24</CTableDataCell>
                                    <CTableDataCell className="">
                                        <div className="py-2 px-3 small rounded fw-bold" style={badgeStyle}>Active</div>
                                    </CTableDataCell>

                                    <CTableDataCell>
                                        <div className="d-flex gap-3">
                                            {/* <Link to="/approval/1321"><FontAwesomeIcon icon={faEye} /></Link> */}
                                            <div className="cursor-pointer" onClick={() => setAddModal(true)}><FontAwesomeIcon icon={faPenToSquare} /></div>
                                            <div className='cursor-pointer' onClick={() => setDeleteModal(true)} ><FontAwesomeIcon icon={faTrashCan} /></div></div>
                                    </CTableDataCell>
                                </CTableRow>

                                <CTableRow>

                                    <CTableDataCell>3</CTableDataCell>
                                    <CTableDataCell>weighing balance</CTableDataCell>
                                    <CTableDataCell>ARZPH001</CTableDataCell>

                                    <CTableDataCell>09-may-2024</CTableDataCell>
                                    <CTableDataCell className="">
                                        <div className="py-2 px-3 small rounded fw-bold" style={badgeStyle}>Active</div>
                                    </CTableDataCell>

                                    <CTableDataCell>
                                        <div className="d-flex gap-3">
                                            {/* <Link to="/approval/1321"><FontAwesomeIcon icon={faEye} /></Link> */}
                                            <div className="cursor-pointer" onClick={() => setAddModal(true)}><FontAwesomeIcon icon={faPenToSquare} /></div>
                                            <div className='cursor-pointer' onClick={() => setDeleteModal(true)} ><FontAwesomeIcon icon={faTrashCan} /></div></div>
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
            {deleteModal && <DeleteModal visible={deleteModal} closeModal={() => setDeleteModal(false)} />}
        </>
    )
}

const StatusModal = (_props) => {
    return (
        <>

            <CModal alignment="center" visible={_props.visible} onClose={_props.closeModal}>
                <CModalHeader>
                    <CModalTitle>Add Instrument Category</CModalTitle>
                </CModalHeader>
                <CModalBody>

                    <CFormInput
                        type="text"
                        label="Category Name"
                        placeholder=" Category Name"
                    />
                    <CFormInput
                        type="text"
                        label="Description"
                        placeholder="Description "
                    />
                                        
                </CModalBody>
                <CModalFooter>
                    <CButton color="light" onClick={_props.closeModal}>Back</CButton>
                    <CButton className="bg-info text-white">Submit</CButton>
                </CModalFooter>
            </CModal>

        </>
    )
}

const DeleteModal = (_props) => {
    return (
         <>

              <CModal alignment="center" visible={_props.visible} onClose={_props.closeModal} size="lg">
                   <CModalHeader>
                        <CModalTitle>Delete Instrument Category</CModalTitle>
                   </CModalHeader>
                   <CModalBody>
                        <p>Do you want to delete this Instrument Category <code>thermal analysis</code>?</p>

                   </CModalBody>
                   <CModalFooter>
                        <CButton color="light" onClick={_props.closeModal}>Back</CButton>
                        <CButton className="bg-info text-white">Submit</CButton>
                   </CModalFooter>
              </CModal>

         </>
    )
}

export default InstrumentCategory
