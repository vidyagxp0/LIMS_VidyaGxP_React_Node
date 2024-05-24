import { CButton, CCol, CFormInput, CFormSelect, CFormTextarea, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react"
import { faEye, faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { FaArrowRight } from "react-icons/fa"
import { Link } from "react-router-dom"

function InstrumentUsage() {
    const [addModal, setAddModal] = useState(false)
    const [deleteModal, setDeleteModal] = useState(false)
    const badgeStyle = { background: "#cdffca" }
    return (
        <>

            <div id="approval-page" className="h-100 mx-5">
                <div className="container-fluid my-5">

                    <div className="main-head">
                        <div className="title fw-bold fs-5">Instrument Usage</div>


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
                                    <CButton className="bg-info text-white" onClick={() => setAddModal(true)}>Add Usage</CButton>
                                </div>
                            </CCol>
                        </CRow>
                    </div>
                    <div className="bg-white mt-5">
                        <CTable align="middle" responsive className=" shadow">
                            <CTableHead>
                                <CTableRow>
                                    <CTableHeaderCell scope="col">S NO.</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Instrument ID</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Instrument Category</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Usage Code</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Product Name</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Ar.No</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Used For</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Used By</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Actions</CTableHeaderCell>
                                </CTableRow>
                            </CTableHead>
                            <CTableBody>
                                <CTableRow>
                                    <CTableDataCell>1</CTableDataCell>
                                    <CTableDataCell>arzph001</CTableDataCell>
                                    <CTableDataCell>Weighing Balance</CTableDataCell>
                                    <CTableDataCell>wl/wb/m/001</CTableDataCell>
                                    <CTableDataCell>CACO</CTableDataCell>
                                    <CTableDataCell>ARFP0000056</CTableDataCell>
                                    <CTableDataCell>May 31st 23</CTableDataCell>
                                    <CTableDataCell>Nov 17th 24</CTableDataCell>
                                    <CTableDataCell className="">
                                        <div className="py-2 px-3 small rounded fw-bold" style={badgeStyle}>Active</div>
                                    </CTableDataCell>

                                    <CTableDataCell>
                                        <div className="d-flex gap-3">
                                            <Link to="/approval/1321"><FontAwesomeIcon icon={faEye} /></Link>
                                            <div className="cursor-pointer" onClick={() => setAddModal(true)}><FontAwesomeIcon icon={faPenToSquare} /></div>
                                            <div className='cursor-pointer' onClick={() => setDeleteModal(true)} ><FontAwesomeIcon icon={faTrashCan} /></div></div>
                                    </CTableDataCell>
                                </CTableRow>

                                <CTableRow>
                                    <CTableDataCell>2</CTableDataCell>
                                    <CTableDataCell>hplc</CTableDataCell>
                                    <CTableDataCell>chromatography</CTableDataCell>
                                    <CTableDataCell>wl/wb/m/002</CTableDataCell>
                                    <CTableDataCell>chr12</CTableDataCell>
                                    <CTableDataCell>ARAUX000033</CTableDataCell>
                                    <CTableDataCell>Oct 1st 23</CTableDataCell>
                                    <CTableDataCell>June 12th 24</CTableDataCell>
                                    <CTableDataCell className="">
                                        <div className="py-2 px-3 small rounded fw-bold" style={badgeStyle}>Active</div>
                                    </CTableDataCell>

                                    <CTableDataCell>
                                        <div className="d-flex gap-3">
                                            <Link to="/approval/1321"><FontAwesomeIcon icon={faEye} /></Link>
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
                    <CModalTitle>Add Instrument usage</CModalTitle>
                </CModalHeader>
                <CModalBody>

                <CFormSelect
                        type="text"
                        label="Instrument (Instrument ID)"
                        placeholder="Select... "
                        options={[
                            "Select...",
                            { label: "en33/23" },
                            { label: "eqi/eng/163" },
                            { label: "ARZ001" },
                            { label: "Arz003" },
                            { label: "qc/bal/011" },
                            { label: "hplc" },
                          ]}
                    />

                    <CFormInput
                        type="text"
                        label="Instrument Category"
                        placeholder="chromatography "
                        disabled
                    />

                    <CFormInput
                            type="text"
                            label=" Usage Code"
                            placeholder=" Usage Code"
                            
                    />

                    <CFormSelect
                        type="text"
                        label="Instrument (Instrument ID)"
                        placeholder="Select Product "
                        options={[
                            "Select Product",
                            { label: "apb" },
                            { label: "chpoil" },
                            { label: "fet0012" },
                            { label: "fet0011" },
                            { label: "samps" },
                            { label: "epto" },
                          ]}
                    />

                    <CFormInput
                        type="text"
                        label="A.R.No. "
                        placeholder="A.R.No."
                        
                    />

                    <CFormInput
                        type="text"
                        label="Used For "
                        placeholder=" Used For"
                        
                    />

                    <CFormInput
                        type="text"
                        label="Used By "
                        placeholder=" Used By"
                        
                    />

                    <CFormInput
                        type="date"
                        label="Used From"
                        placeholder=""
                        
                    />
                    <CFormInput
                        type="date"
                        label="Used To"
                        placeholder=""
                        
                    />
                    <CFormInput
                        type="text"
                        label="Comment If Any"
                        placeholder="Comment"
                        
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
                        <CModalTitle>Delete Instrument Usage</CModalTitle>
                   </CModalHeader>
                   <CModalBody>
                        <p>Do you want to delete this instrument usage <code>gd534</code>?</p>

                   </CModalBody>
                   <CModalFooter>
                        <CButton color="light" onClick={_props.closeModal}>Back</CButton>
                        <CButton className="bg-info text-white">Submit</CButton>
                   </CModalFooter>
              </CModal>

         </>
    )
}

export default InstrumentUsage
