import { CButton, CCol, CFormInput, CFormSelect, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react"
import { faEye, faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { FaArrowRight } from "react-icons/fa"
import { Link } from "react-router-dom"

function Storage_Condition() {
    const pageSize = 3; // Number of items per page
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedStatus, setSelectedStatus] = useState('All');
    const [addModal, setAddModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);
    const badgeStyle = { background: "green", color: "white", width: "110px" };
    const badgeStyle2 = { background: "red", color: "white", width: "110px" };
    

    // Sample data for the table
    const data = [
        { id: 1, conditionCode: 'na-001', stabilityCondition: '60°F', description: '', status: 'Active' },
        { id: 2, conditionCode: 'na-002', stabilityCondition: '30°C', description: '', status: 'Inactive' },
        { id: 3, conditionCode: 'na-003', stabilityCondition: '50°F', description: '', status: 'Active' },
        { id: 4, conditionCode: 'na-004', stabilityCondition: '35°C', description: '', status: 'Inactive' },
        { id: 5, conditionCode: 'na-005', stabilityCondition: '60°F', description: '', status: 'Active' },
        { id: 6, conditionCode: 'na-006', stabilityCondition: '39°C', description: '', status: 'Active' },
    ];

    // Filtered data based on selected status
    const filteredData = selectedStatus === 'All' ? data : data.filter(item => item.status === selectedStatus);

    // Function to calculate start and end indices for current page
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, filteredData.length);
  
    // Functions for pagination
    const nextPage = () => setCurrentPage(currentPage + 1);
    const prevPage = () => setCurrentPage(currentPage - 1);
    const nextToLastPage = () => setCurrentPage(Math.ceil(filteredData.length / pageSize));

    return (
        <>
            <div id="approval-page" className="h-100 mx-5">
                <div className="container-fluid my-5">
                    <div className="main-head">
                        <h4 className="fw-bold mb-4 mt-3">Storage Conditions</h4>
                    </div>
                    <div>
                        <CRow className="mb-3">
                            <CCol sm={4}>
                                <CFormInput
                                style={{ border: "2px solid gray" }}
                                    type="email"
                                    placeholder="Search..."
                                />
                            </CCol>
                            <CCol sm={3}>
                                <CFormSelect
                                    value={selectedStatus} style={{ border: "2px solid gray" }}
                                    onChange={(e) => setSelectedStatus(e.target.value)}
                                    options={[
                                        { label: 'All', value: 'All' },
                                        { label: 'Active', value: 'Active' },
                                        { label: 'Inactive', value: 'Inactive' }
                                    ]}
                                />
                            </CCol>
                            <CCol sm={2}></CCol>
                            <CCol sm={3}>
                                <div className="d-flex justify-content-end">
                                    <CButton className=" text-white" style={{ background: "#4B49B6" }} onClick={() => setAddModal(true)}>Add Storage Location</CButton>
                                </div>
                            </CCol>
                        </CRow>
                    </div>
                    <div className=' table-responsive bg-white rounded py-3 px-4 mt-5 'style={{ boxShadow: "0px 0px 3px black" }}>
                        <CTable align="middle" responsive className=" ">
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
                                {filteredData.slice(startIndex, endIndex).map((item) => (
                                    <CTableRow key={item.id}>
                                        <CTableHeaderCell scope="row" className="text-center">
                                            <input type="checkbox" />
                                        </CTableHeaderCell>
                                        <CTableDataCell>{item.conditionCode}</CTableDataCell>
                                        <CTableDataCell>{item.stabilityCondition}</CTableDataCell>
                                        <CTableDataCell>{item.description}</CTableDataCell>
                                        <CTableDataCell className="d-flex">
                                            <div
                                                className="py-2 px-3 small rounded fw-bold"
                                                style={
                                                    item.status === "Active"
                                                        ? badgeStyle
                                                             : badgeStyle2
                                                }
                                            >
                                                {item.status}
                                            </div>
                                        </CTableDataCell>
                                        <CTableDataCell>
                                            <div className="d-flex gap-3">
                                                <Link to="/approval/1321"><FontAwesomeIcon icon={faEye} /></Link>
                                                <div className="cursor-pointer" onClick={() => setAddModal(true)}><FontAwesomeIcon icon={faPenToSquare} /></div>
                                                <div className='cursor-pointer' onClick={() => setDeleteModal(true)} ><FontAwesomeIcon icon={faTrashCan} /></div>
                                            </div>
                                        </CTableDataCell>
                                    </CTableRow>
                                ))}
                            </CTableBody>
                        </CTable>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mt-4">
                        <div className="pagination">
                            <button className="btn mr-2" onClick={prevPage} disabled={currentPage === 1}>
                                &lt;&lt;
                            </button>
                            <button className="btn mr-2 bg-dark-subtle rounded-circle">{currentPage}</button>
                            <button className="btn mr-2" onClick={nextPage} disabled={endIndex >= data.length}>
                                &gt;&gt;
                            </button>
                        </div>
                        <button className="btn btn-next" onClick={nextToLastPage}>
                            Next <FaArrowRight />
                        </button>
                    </div>

                </div>
            </div>

            {addModal && <StatusModal visible={addModal} closeModal={() => setAddModal(false)} />}
            {deleteModal && <DeleteModal visible={deleteModal} closeModal={() => setDeleteModal(false)} />}
            </>
    );
}

const StatusModal = (_props) => {
    return (
        <>
            <CModal alignment="center" visible={_props.visible} onClose={_props.closeModal}>
                <CModalHeader>
                    <CModalTitle>New Condition</CModalTitle>
                </CModalHeader>
                <CModalBody>
                    <CFormInput
                        type="text"
                        label="Stability Storage Condition"
                        placeholder="°C °F "
                    />
                    <CFormInput
                        type="text"
                        label="Description"
                        placeholder=" "
                    />
                </CModalBody>
                <CModalFooter>
                    <CButton color="light" onClick={_props.closeModal}>Back</CButton>
                    <CButton className="bg-info text-white">Add</CButton>
                </CModalFooter>
            </CModal>
        </>
    );
}

const DeleteModal = (_props) => {
    return (
        <>
            <CModal alignment="center" visible={_props.visible} onClose={_props.closeModal} size="lg">
                <CModalHeader>
                    <CModalTitle>Delete Product</CModalTitle>
                </CModalHeader>
                <CModalBody>
                    <p>Do you want to delete this Condition <code>na-001</code>?</p>
                </CModalBody>
                <CModalFooter>
                    <CButton color="light" onClick={_props.closeModal}>Back</CButton>
                    <CButton className="bg-info text-white">Submit</CButton>
                </CModalFooter>
            </CModal>
        </>
    );
}

export default Storage_Condition;
