import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faPenToSquare, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
import { CButton, CCol, CFormInput, CFormSelect, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react";


const SamplingConfiguration = () => {
    const [addModal, setAddModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);
    const [deleteId, setDeleteId] = useState(null);
    const pageSize = 5; // Number of items per page
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [selectedStatus, setSelectedStatus] = useState('All');
    
    const [employees, setEmployees] = useState([

        { id: "USER-022024-000001", specificationId: 'spsc', sample: 'Micro Media', product: 'tamc', testPlan: 'TP-tamc_1/Tamc/01/00', sampleTemplate: 'Raw Sampling Template', sampleRule: 'C2' },
        { id: "USER-022024-000002", specificationId: 'wbl/fps', sample: 'Raw Sampling', product: 'sodium propyl', testPlan: 'TP-sppip/SPSC-000012', sampleTemplate: 'test temp_1', sampleRule: 'Raw Sample' },
        { id: "USER-022024-000003", specificationId: 'spsc011', sample: 'Micro Media', product: 'LUPIN MIRA S 25 TABLET', testPlan: 'TP-tamc_1/Tamc/01/00', sampleTemplate: 'Raw Sampling Template', sampleRule: 'C1' },
        { id: "USER-022024-000004", specificationId: 'wbl/fps/001', sample: 'Finished Product', product: 'LUPIN MIRA S 25 TABLET', testPlan: 'TP-sppip/SPSC-000012', sampleTemplate: 'test temp_1', sampleRule: 'Raw Sample' },
        { id: "USER-022024-000005", specificationId: 'spsc/001', sample: 'Micro Media', product: 'LUPIN MIRA S 25 TABLET', testPlan: 'TP-tamc_1/Tamc/01/00', sampleTemplate: 'Raw Sampling Template', sampleRule: 'C3' },
        { id: "USER-022024-000006", specificationId: 'wbl/fps/002', sample: 'finished Product', product: 'LUPIN MIRA S 25 TABLET', testPlan: 'TP-sppip/SPSC-000012', sampleTemplate: 'test temp_1', sampleRule: 'Raw Sample' },
        { id: "USER-022024-000007", specificationId: 'spsc/00/001', sample: 'Micro Media', product: 'LUPIN MIRA S 25 TABLET', testPlan: 'TP-tamc_1/Tamc/01/00', sampleTemplate: 'Raw Sampling Template', sampleRule: 'C5' },
        { id: "USER-022024-000008", specificationId: 'wbl/fps/0003', sample: 'Finished Product', product: 'LUPIN MIRA S 25 TABLET', testPlan: 'TP-sppip/SPSC-000012', sampleTemplate: 'test temp_1', sampleRule: 'Raw Sample' },
        { id: "USER-022024-000009", specificationId: 'spsc/01/001', sample: 'Micro Media', product: 'LUPIN MIRA S 25 TABLET', testPlan: 'TP-tamc_1/Tamc/01/00', sampleTemplate: 'Raw Sampling Template', sampleRule: 'C4' },
        { id: "USER-022024-0000010", specificationId: 'wbl/fps/004', sample: 'Finished Product', product: 'LUPIN MIRA S 25 TABLET', testPlan: 'TP-sppip/SPSC-000012', sampleTemplate: 'test temp_1', sampleRule: 'Raw Sample' },


    ]);
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, employees.length);
    const filteredEmployees = employees.filter(employee =>
        selectedStatus === 'All' ? true : employee.status.toUpperCase() === selectedStatus.toUpperCase()
    );

    const renderRows = () => {
        return employees.slice(startIndex, endIndex).map((employee, index) => (
            <tr key={startIndex + index}>
                <td>{startIndex + index + 1}</td>
                <td>{employee.id}</td>
                <td>{employee.specificationId}</td>
                <td>{employee.sample}</td>
                <td>{employee.product}</td>
                <td>{employee.testPlan}</td>
                <td>{employee.sampleTemplate}</td>
                <td>{employee.sampleRule}</td>

                <td >
                    <div className="d-flex gap-3">
                        <div>
                            <Link to="/approval/1321"><FontAwesomeIcon icon={faEye} /></Link>

                        </div>
                        <div
                            className="cursor-pointer"
                            onClick={() => setAddModal(true)}
                        >
                            <FontAwesomeIcon icon={faPenToSquare} />
                        </div>
                        <div className="cursor-pointer" onClick={() => handleDeleteClick(employee.id)}>
                            <FontAwesomeIcon icon={faTrashCan} />
                        </div>
                    </div>

                </td>
            </tr>

        ));
    };

    // Function to handle pagination
    const nextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    const prevPage = () => {
        setCurrentPage(currentPage - 1);
    };

    const nextToLastPage = () => {
        setCurrentPage(Math.ceil(filteredEmployees.length / pageSize));
    };

    const handleDeleteClick = (id) => {
        setDeleteId(id);
        setDeleteModal(true);
    };

    const handleDeleteConfirm = () => {
        setEmployees((prevEmployees) => prevEmployees.filter((employee) => employee.id !== deleteId));
        setDeleteModal(false);
    };

    return (
        <div className=" mx-5 ">
            <div className="row my-5 ">
                <div className="main-head">
                    <div className="title fw-bold fs-5 py-4">Sampling Configuration</div>
                </div>
                <div className="d-flex justify-content-between my-3 ">
                    <div className="dropdown">
                        <button className="btn border btn-block" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Show
                            <select style={{ outline: "none" }} id='selectOption' onChange={(e) => {
                                setSelectedStatus(e.target.value);
                                setCurrentPage(1); // Reset to the first page on filter change
                            }}>
                                <option value="All">All</option>
                                <option value="Active">Active</option>
                                <option value="Inactive">Inactive</option>
                            </select>
                        </button>
                    </div>
                    <div className="">
                        <CButton color="primary" onClick={() => setAddModal(true)}>Add Configuration</CButton>
                    </div>
                </div>

            </div>

            {/* Employee table */}
            <div className='table-responsive bg-white rounded py-3 px-4 mt-5' style={{ boxShadow: "0px 0px 3px black" }}>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>S.No.</th>
                            <th>Sampling ID</th>
                            <th>Specification ID</th>
                            <th>Sample Type</th>
                            <th>Product Name</th>
                            <th>Test Plan</th>
                            <th>Sample Template</th>
                            <th>Sample Rule</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderRows()}
                    </tbody>
                </table>

            </div>


            <div className="d-flex justify-content-between align-items-center mt-4">
                <div className="pagination">
                    <button className="btn mr-2" onClick={prevPage} disabled={currentPage === 1}>
                        &lt;&lt;
                    </button>
                    <button className="btn mr-2 bg-dark-subtle rounded-circle">{currentPage}</button>
                    <button className="btn mr-2" onClick={nextPage} disabled={endIndex >= employees.length}>
                        &gt;&gt;
                    </button>
                </div>
                <button className="btn d-flex align-items-center" onClick={nextToLastPage}>
                    Next <FaArrowRight className='ms-2' />
                </button>
            </div>

            {addModal && <StatusModal visible={addModal} closeModal={() => setAddModal(false)} />}
            {deleteModal && <DeleteModal visible={deleteModal} closeModal={() => setDeleteModal(false)} confirmDelete={handleDeleteConfirm} />}
        </div>
    );
};

const StatusModal = (_props) => {
    return (
        <CModal alignment="center" visible={_props.visible} onClose={_props.closeModal}>
            <CModalHeader>
                <CModalTitle>Add Configuration</CModalTitle>
            </CModalHeader>
            <CModalBody>


                <CFormSelect
                    type="select"
                    label="Test Plan / Revision No."

                    options={[
                        "Select...",
                        { label: "TP-010110", value: "TP-010110" },
                        { label: "TP-010111", value: "TP-010111" },
                        { label: "TP-010112", value: "TP-010112" },
                        { label: "TP-010113", value: "TP-010113" }
                    ]}
                />
                <CFormInput
                    type="text"
                    label="Specification ID"
                    placeholder="Specification ID"
                    disabled
                />

                <CFormInput
                    type="text"
                    label="Product/Material Name"
                    placeholder="Product/Material Name"
                    disabled
                />
                <CFormInput
                    type="text"
                    label="Product/Material Code"
                    placeholder="Product/Material Code"
                    disabled
                />
                <CFormInput
                    type="text"
                    label="Sample Type"
                    placeholder="Sample Type"
                    disabled
                />
                <CFormSelect
                    type="select"
                    label="Sampling Template"
                    options={[
                        "Select Test Category",
                        { label: "Raw Sampling", value: "Raw Sampling" },
                        { label: "Test Temp1", value: "Test Temp1" },
                        { label: "Test Temp2", value: "Test Temp2" },
                        { label: "Test Temp3", value: "Test Temp3" }
                    ]}
                />
                <CFormSelect
                    type="select"
                    label="Sampling Rule"
                    options={[
                        "Select Sampling Rule",
                        { label: "C2", value: "C2" },
                        { label: "Raw sample", value: "Raw sample" },
                        { label: "Sample C1", value: "Sample C1" },
                        { label: "Sample C2", value: "Sample C2" }
                    ]}
                />
                <CFormSelect
                    type="select"
                    label="Sampling Test"
                    options={[
                        "Select...",
                        { label: "No Options", value: "No Options" },

                    ]}
                />
                <CFormInput
                    type="text"
                    label="Comment"
                    placeholder="Comment"
                />

            </CModalBody>
            <CModalFooter>
                <CButton color="light" onClick={_props.closeModal}>Back</CButton>
                <CButton color="primary">Submit</CButton>
            </CModalFooter>
        </CModal>
    );
};

const DeleteModal = (_props) => {
    return (
        <CModal alignment="center" visible={_props.visible} onClose={_props.closeModal} size="lg">
            <CModalHeader>
                <CModalTitle>Delete Sampling Configuration</CModalTitle>
            </CModalHeader>
            <CModalBody>
                <p>Are you sure you want to delete this Sampling { }?</p>
            </CModalBody>
            <CModalFooter>
                <CButton
                    color="secondary"
                    onClick={_props.closeModal}
                    style={{
                        marginRight: "0.5rem",
                        fontWeight: "500",
                    }}
                >
                    Cancel
                </CButton>
                <CButton
                    color="danger"
                    onClick={_props.confirmDelete}
                    style={{
                        fontWeight: "500",
                        color: "white",
                    }}
                >
                    Delete
                </CButton>
            </CModalFooter>
        </CModal>
    );
};


export default SamplingConfiguration
