import { CButton, CCol, CFormInput, CFormSelect, CFormTextarea, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react"
import { faEye, faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { FaArrowRight, FaDownload } from "react-icons/fa"
import { Link } from "react-router-dom"

function AuditTrail() {
    const [addModal, setAddModal] = useState(false)
    const badgeStyle = { background: "#cdffca" }
    
    return (
        <>

            <div id="approval-page" className="h-100 mx-5">
                <div className="container-fluid my-5">

                    <div className="main-head">
                        
                    </div>
                    <div className="d-flex gap-4">


                    </div>
                    <div>
                        <CRow className="mb-3">
                            <CCol sm={3}>
                            <CFormSelect
                                    options={[
                                        'Select Product',
                                        { label: 'Apixaban' },
                                        { label: 'Glass' },
                                        { label: 'Hydraulic Oil' },
                                        { label: 'chpoil' },
                                        { label: 'Feliconar' },
                                        { label: 'Sulphuric Acid' }
                                    ]}
                                />
                            </CCol>

                            <CCol sm={3}>
                            <CFormSelect
                                    options={[
                                        'Select Operations',
                                        { label: 'Login' },
                                        { label: 'LogOut' },
                                        { label: 'Product' },
                                        { label: 'Specifications' },
                                        { label: 'Registration' },
                                        { label: 'Test Allot' }
                                    ]}
                                />
                                
                            </CCol>
                            <CCol sm={3}>
                            <CFormSelect
                                    options={[
                                        'Select Users',
                                        { label: 'Rajesh' },
                                        { label: 'QA' },
                                        { label: 'Manager' },
                                        { label: 'Aliya' },
                                        { label: 'Admin' },
                                        { label: 'Super Admin' }

                                    ]}
                                />
                                
                            </CCol>

                            <CCol sm={1}>
                                <div className="d-flex justify-content-end">
                                    <CButton className="bg-danger bg-opacity-75 rounded" ><FaDownload/></CButton>
                                </div>
                            </CCol>
                        </CRow>
                    </div>
                    <div className="bg-white mt-5">
                        <CTable align="middle" responsive className=" shadow">
                            <CTableHead>
                                <CTableRow>
                                    <CTableHeaderCell scope="col">S NO.</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Date Time</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Form Name</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Action Row Name</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Old Action</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">New Action</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Employee Name</CTableHeaderCell>
                                </CTableRow>
                            </CTableHead>
                            <CTableBody>
                                <CTableRow>
                                    <CTableDataCell>1</CTableDataCell>
                                    <CTableDataCell>feb 11th 2023 10:12</CTableDataCell>
                                    <CTableDataCell>Category</CTableDataCell>
                                    <CTableDataCell></CTableDataCell>
                                    <CTableDataCell>-</CTableDataCell>                                    
                                    <CTableDataCell>Category Added</CTableDataCell>                                 
                                    <CTableDataCell>Admin</CTableDataCell>
                                </CTableRow>

                                <CTableRow>
                                    <CTableDataCell>2</CTableDataCell>
                                    <CTableDataCell>feb 15th 2024 18:22</CTableDataCell>
                                    <CTableDataCell>Handling</CTableDataCell>
                                    <CTableDataCell></CTableDataCell>
                                    <CTableDataCell>-</CTableDataCell>                                    
                                    <CTableDataCell>Handling Added</CTableDataCell>                                 
                                    <CTableDataCell>Admin</CTableDataCell>
                                </CTableRow>
                                <CTableRow>
                                    <CTableDataCell>3</CTableDataCell>
                                    <CTableDataCell>mar 23rd 2024 10:50</CTableDataCell>
                                    <CTableDataCell>Category</CTableDataCell>
                                    <CTableDataCell></CTableDataCell>
                                    <CTableDataCell>-</CTableDataCell>                                    
                                    <CTableDataCell>Category Added</CTableDataCell>                                 
                                    <CTableDataCell>Admin</CTableDataCell>
                                </CTableRow>
                                <CTableRow>
                                    <CTableDataCell>4</CTableDataCell>
                                    <CTableDataCell>Apr 15th 2024 19:45</CTableDataCell>
                                    <CTableDataCell>Category</CTableDataCell>
                                    <CTableDataCell></CTableDataCell>
                                    <CTableDataCell>-</CTableDataCell>                                    
                                    <CTableDataCell>Category Added</CTableDataCell>                                 
                                    <CTableDataCell>Admin</CTableDataCell>
                                </CTableRow>
                                <CTableRow>
                                    <CTableDataCell>5</CTableDataCell>
                                    <CTableDataCell>may 20th 2024 21:33</CTableDataCell>
                                    <CTableDataCell>Sampling Field</CTableDataCell>
                                    <CTableDataCell>Room Is Cleen</CTableDataCell>
                                    <CTableDataCell>Active</CTableDataCell>                                    
                                    <CTableDataCell>updated from ACTIVE to INACTIVE</CTableDataCell>                                 
                                    <CTableDataCell>Admin</CTableDataCell>
                                </CTableRow>
                                <CTableRow>
                                    <CTableDataCell>6</CTableDataCell>
                                    <CTableDataCell>may 17th 2024 09:51</CTableDataCell>
                                    <CTableDataCell>Login</CTableDataCell>
                                    <CTableDataCell></CTableDataCell>
                                    <CTableDataCell>-</CTableDataCell>                                    
                                    <CTableDataCell>logged INN</CTableDataCell>                                 
                                    <CTableDataCell>Admin</CTableDataCell>
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

export default AuditTrail
