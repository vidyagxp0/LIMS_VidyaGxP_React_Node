import { CButton, CCol, CFormInput, CFormSelect, CFormTextarea, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react"
import { faEye, faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { FaArrowRight } from "react-icons/fa"
import { Link } from "react-router-dom"

function Coa_Template() {
    const [addModal, setAddModal] = useState(false)
    const badgeStyle = { background: "#cdffca" }

    return (
        <>

            <div id="approval-page" className="h-100 mx-5">
                <div className="container-fluid my-5">

                    <div className="main-head">
                        <div className="title fw-bold fs-5">Certificate Of Analysis Report </div>


                    </div>
                    <div className="d-flex gap-4">


                    </div>
                    <div>
                        <CRow className="mb-3">
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

                            <CCol sm={6}></CCol>

                            <CCol sm={3}>
                                <div className="d-flex justify-content-end">
                                    <CButton className="bg-info text-white" onClick={() => setAddModal(true)}>Add Coa Template</CButton>
                                </div>
                            </CCol>
                        </CRow>
                    </div>
                    <div className="bg-white mt-5">
                        <CTable align="middle" responsive className=" shadow">
                            <CTableHead>
                                <CTableRow>
                                    <CTableHeaderCell scope="col">S NO.</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Sample Type</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Coa ID</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Coa Type</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Updated At</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Actions</CTableHeaderCell>
                                </CTableRow>
                            </CTableHead>
                            <CTableBody>
                                <CTableRow>
                                    <CTableDataCell>1</CTableDataCell>
                                    <CTableDataCell>Micro Media</CTableDataCell>
                                    <CTableDataCell>SHMDZ/102145</CTableDataCell>
                                    <CTableDataCell>WITH-SPECIFICATION</CTableDataCell>
                                    <CTableDataCell>feb 11th 24</CTableDataCell>

                                    <CTableDataCell className="">
                                        <div className="py-2 px-3 small rounded fw-bold" style={badgeStyle}>INITIATED</div>
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
                                    <CTableDataCell>Finished Product</CTableDataCell>
                                    <CTableDataCell>hplc/0112</CTableDataCell>
                                    <CTableDataCell>WITH-SPECIFICATION</CTableDataCell>
                                    <CTableDataCell>oct 15th 23</CTableDataCell>
                                    <CTableDataCell className="">
                                        <div className="py-2 px-3 small rounded fw-bold bg-info" >Approved</div>
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
                    <CModalTitle>Add Coa Template</CModalTitle>
                </CModalHeader>
                <CModalBody>

                    <CFormInput
                        type="text"
                        label="Sample Type"
                        placeholder="Select... "
                        options={[
                            "Select...",
                            { label: "Hydroulic Oil" },
                            { label: "hcl" },
                            { label: "petrochemical" },
                            { label: "Initiated product" }
                        ]}
                    />

                    <CFormInput
                        type="text"
                        label="Coa Type"
                        placeholder="Select Coa Type "
                        options={[
                            "Select Coa Type",
                            { label: "With Specification" },
                            { label: "WithOut Specification" },
                            { label: "ERP" }

                        ]}
                    />
                    <CFormInput
                        type="text"
                        label="Report Title"
                        placeholder=" Report Title"
                    />

                    <CFormInput
                        type="text"
                        label="Product/Material Caption"
                        placeholder="Report Title "
                    />
                    <CFormInput
                        type="text"
                        label="Serial No."
                        placeholder="Serial Number "
                    />
                    <CFormInput
                        type="text"
                        label="Format No."
                        placeholder="Format No. "
                    />
                    
                    <CModalTitle className="bg-secondary ">Header</CModalTitle>

                    <div className="d-flex pb-2 ">
                        <div className="pe-3">
                            <CFormInput
                                type="text"
                                label="Rows"
                                placeholder="Rows "
                            />
                        </div>

                        <div className="ps-3 w-50">
                            <CFormSelect
                                type="text"
                                label="Columns"
                                placeholder="Columns "
                                options={[
                                    {label: "2"},
                                    {label: "4"},
                                    {label: "6"}
                                ]}
                            />
                        </div>

                    </div>

                    <CModalTitle className="bg-secondary">Footer</CModalTitle>

                    <div className="d-flex pb-2 ">
                        <div className="pe-3">
                            <CFormInput
                                type="text"
                                label="Rows"
                                placeholder="Rows "
                            />
                        </div>

                        <div className="ps-3 w-50">
                            <CFormSelect
                                type="text"
                                label="Columns"
                                placeholder="Columns "
                                options={[
                                    {label: "2"},
                                    {label: "4"},
                                    {label: "6"}
                                ]}
                            />
                        </div>

                    </div>

                    <div className="d-flex">
                        <div className="pe-3">
                            <CFormInput
                                type="text"
                                label=""
                                placeholder="Approved By "
                            />
                        </div>

                        <div className="ps-3 w-50">
                            <CFormSelect
                                type="text"
                                label=""
                                placeholder="approved_by "
                                options={[
                                    "approved_by",
                                    
                                ]}
                            />
                        </div>

                    </div>

                    <div className="d-flex">
                        <div className="pe-3">
                            <CFormInput
                                type="text"
                                label=""
                                placeholder="Reviewed By"
                            />
                        </div>

                        <div className="ps-3 w-50">
                            <CFormSelect
                                type="text"
                                label=""
                                placeholder="reviewed_by "
                                options={[
                                    "reviewed_by",
                                    {}
                                    
                                ]}
                            />
                        </div>

                    </div>
                    
                    <div className="d-flex">
                        <div className="pe-3">
                            <CFormInput
                                type="text"
                                label=""
                                placeholder="Checked By "
                            />
                        </div>

                        <div className="ps-3 w-50">
                            <CFormSelect
                                type="text"
                                label=""
                                placeholder="checked_by "
                                options={[
                                    "checked_by",
                                    {}
                                    
                                ]}
                            />
                        </div>

                    </div>

                    
                    
                </CModalBody>
                <CModalFooter>
                    <CButton color="light" onClick={_props.closeModal}>Cancel</CButton>
                    <CButton className="bg-info text-white">Submit</CButton>
                </CModalFooter>
            </CModal>

        </>
    )
}
export default Coa_Template
