import { CButton, CCol, CFormInput, CFormSelect, CFormTextarea, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react"
import { faEye, faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { Link } from "react-router-dom"

function ChamberTransfer() {
    const [addModal, setAddModal] = useState(false)
    const badgeStyle = { background: "#cdffca" }
    return (
        <>

            <div id="approval-page" className="h-100 mx-5">
                <div className="container-fluid my-5">

                    <div className="main-head">
                        <h4 className="fw-bold mb-4 mt-3">Chamber Transfer</h4>
                    </div>
                    <div>
                        <CRow className="mb-3">
                            <CCol sm={4}>
                                <CFormInput
                                    type="email"
                                    placeholder="Search..."
                                />
                            </CCol>
                            <CCol sm={3}>
                                <CFormSelect
                                    options={[
                                        'Select Status',
                                        { label: 'Active', value: '1' },
                                        { label: 'Inactive', value: '0' }
                                    ]}
                                />
                            </CCol>
                            <CCol sm={2}></CCol>
                            <CCol sm={3}>
                                <div className="d-flex justify-content-end">
                                    <CButton color="dark" onClick={() => setAddModal(true)}>Chamber Transfer</CButton>
                                </div>
                            </CCol>
                        </CRow>
                    </div>
                    <div className="bg-white mt-5">
                        <CTable align="middle" responsive className=" shadow">
                            <CTableHead>
                                <CTableRow>
                                    <CTableHeaderCell scope="col" className="text-center"><input type="checkbox" /></CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Condition Code</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Stability Condition</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Description</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Actions</CTableHeaderCell>
                                </CTableRow>
                            </CTableHead>
                            <CTableBody>
                                <CTableRow>
                                    <CTableHeaderCell scope="row" className="text-center">
                                        <input type="checkbox" />
                                    </CTableHeaderCell>
                                    <CTableDataCell>na-001</CTableDataCell>
                                    <CTableDataCell>60°F</CTableDataCell>
                                    <CTableDataCell></CTableDataCell>

                                    <CTableDataCell className="d-flex">
                                        <div className="py-2 px-3 small rounded fw-bold" style={badgeStyle}>ACTIVE</div>
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
                                    <CTableHeaderCell scope="row" className="text-center">
                                        <input type="checkbox" />
                                    </CTableHeaderCell>
                                    <CTableDataCell>na-002</CTableDataCell>
                                    <CTableDataCell>30°C</CTableDataCell>
                                    <CTableDataCell></CTableDataCell>

                                    <CTableDataCell className="d-flex">
                                        <div className="py-2 px-3 small rounded fw-bold" style={badgeStyle}>ACTIVE</div>
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
                    <CModalTitle>Stability Chamber Transfer</CModalTitle>
                </CModalHeader>

                <CModalBody>

                    <CModalTitle>From</CModalTitle>

                    <CFormInput
                        type="text"
                        label="Chamber ID"
                        placeholder="Chamber Id "
                    />
                    <CFormInput
                        type="text"
                        label="Storage Condition"
                        placeholder=" "
                    />

                    <CModalTitle>To</CModalTitle>

                    <CFormInput
                        type="text"
                        label="Chamber ID"
                        placeholder="Chamber Id "
                    />
                    <CFormInput
                        type="text"
                        label="Storage Condition"
                        placeholder=" "
                    />

                    <CFormInput
                        type="text"
                        label="Product"
                        placeholder=" "
                    />
                    <CFormInput
                        type="text"
                        label="Protocol"
                        placeholder=" "
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

export default ChamberTransfer
