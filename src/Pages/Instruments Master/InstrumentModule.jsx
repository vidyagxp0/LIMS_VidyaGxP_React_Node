import { CButton, CCol, CFormInput, CFormSelect, CFormTextarea, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react"
import { faEye, faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { FaArrowRight } from "react-icons/fa"
import { Link } from "react-router-dom"

function InstrumentModule() {
    const [addModal, setAddModal] = useState(false)
    const badgeStyle = { background: "#cdffca" }
    return (
        <>

            <div id="approval-page" className="h-100 mx-5">
                <div className="container-fluid my-5">

                    <div className="main-head">
                        <div className="title fw-bold fs-5">Instrument Module</div>


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
                                    <CButton className="bg-info text-white" onClick={() => setAddModal(true)}>Add Module</CButton>
                                </div>
                            </CCol>
                        </CRow>
                    </div>
                    <div className="bg-white mt-5">
                        <CTable align="middle" responsive className=" shadow">
                            <CTableHead>
                                <CTableRow>
                                    <CTableHeaderCell scope="col">S NO.</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Category</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Module</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Module Id</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Make</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Model</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Manufacturer No.</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Supplied By</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Install On</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Expires On</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Actions</CTableHeaderCell>
                                </CTableRow>
                            </CTableHead>
                            <CTableBody>
                                <CTableRow>
                                    <CTableDataCell>1</CTableDataCell>
                                    <CTableDataCell>weighing balance</CTableDataCell>
                                    <CTableDataCell>Weighing</CTableDataCell>
                                    <CTableDataCell>wl/wb/m/001</CTableDataCell>
                                    <CTableDataCell>Chemi Line</CTableDataCell>
                                    <CTableDataCell>N/A</CTableDataCell>
                                    <CTableDataCell>N/A</CTableDataCell>
                                    <CTableDataCell>RK</CTableDataCell>
                                    <CTableDataCell>May 31st 23</CTableDataCell>
                                    <CTableDataCell>Nov 17th 24</CTableDataCell>
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
                                    <CTableDataCell>chromatography</CTableDataCell>
                                    <CTableDataCell>Weighing</CTableDataCell>
                                    <CTableDataCell>wl/wb/m/002</CTableDataCell>
                                    <CTableDataCell>Chemi Line</CTableDataCell>
                                    <CTableDataCell>N/A</CTableDataCell>
                                    <CTableDataCell>N/A</CTableDataCell>
                                    <CTableDataCell>RK</CTableDataCell>
                                    <CTableDataCell>Oct 1st 23</CTableDataCell>
                                    <CTableDataCell>June 12th 24</CTableDataCell>
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

            <CModal alignment="center" visible={_props.visible} onClose={_props.closeModal}>
                <CModalHeader>
                    <CModalTitle>Add Instrument Module</CModalTitle>
                </CModalHeader>
                <CModalBody>

                    <CFormSelect
                        type="text"
                        label="Instrument (Instrument ID)"
                        placeholder="Select... "
                        options={[
                            "Select...",
                            { label: "Weighing Balance 2" },
                            { label: "Pressure Gauge" },
                            { label: "ARZ ph Meter" },
                            { label: "Ariz Balance" },
                            { label: "Weighing Balance-1" },
                            { label: "Weighing Balance" },
                          ]}
                    />

                    <CFormInput
                        type="text"
                        label="Instruction Category"
                        placeholder="Weighing Balance "
                        disabled
                    />

                    <CFormInput
                            type="text"
                            label=" Module"
                            placeholder="Module "
                            disabled
                    />

                    <CFormInput
                        type="text"
                        label="Module ID "
                        placeholder="Module ID"
                        disabled
                    />

                    <CFormInput
                        type="text"
                        label="Make "
                        placeholder="Shimadu "
                        disabled
                    />

                    <CFormInput
                        type="text"
                        label="Model"
                        placeholder="Ser33"
                        disabled
                    />
                    <CFormInput
                        type="text"
                        label="Manufacturer's Serial No."
                        placeholder="adf3434"
                        disabled
                    />
                    <CFormInput
                        type="text"
                        label="Installed On"
                        placeholder="05/10/2024"
                        disabled
                    />

                    <CFormInput
                        type="text"
                        label="Warranty Expires On"
                        placeholder="05/05/2023"
                        disabled
                    />

                    
                    <CFormInput
                        type="text"
                        label="Supplied By"
                        placeholder="Arizona "
                        disabled
                    />
                    <CFormInput
                        type="text"
                        label="SOP No."
                        placeholder="ASTM6453 "
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
export default InstrumentModule
