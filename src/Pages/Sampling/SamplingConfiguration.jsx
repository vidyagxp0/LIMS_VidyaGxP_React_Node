import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faPenToSquare, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
import { CButton, CCol, CFormInput, CFormSelect, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow, } from "@coreui/react";

const SamplingConfiguration = () => {
    const pageSize = 5;
    const [currentPage, setCurrentPage] = useState(1);
    const [addModal, setAddModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);
    const [deleteId, setDeleteId] = useState(null);
    const [selectedStatus, setSelectedStatus] = useState('All');

    const [employee, setEmployee] = useState([

        { id: "USER-022024-000001", specificationId: 'spsc', sample: 'Micro Media', product: 'tamc', testPlan: 'TP-tamc_1/Tamc/01/00', sampleTemplate: 'Raw Sampling Template', sampleRule: 'C2', status: 'Active' },
        { id: "USER-022024-000002", specificationId: 'wbl/fps', sample: 'Raw Sampling', product: 'sodium propyl', testPlan: 'TP-sppip/SPSC-000012', sampleTemplate: 'test temp_1', sampleRule: 'Raw Sample', status: 'Active' },
        { id: "USER-022024-000003", specificationId: 'spsc011', sample: 'Micro Media', product: 'LUPIN MIRA S 25 TABLET', testPlan: 'TP-tamc_1/Tamc/01/00', sampleTemplate: 'Raw Sampling Template', sampleRule: 'C1', status: 'Inactive' },
        { id: "USER-022024-000004", specificationId: 'wbl/fps/001', sample: 'Finished Product', product: 'LUPIN MIRA S 25 TABLET', testPlan: 'TP-sppip/SPSC-000012', sampleTemplate: 'test temp_1', sampleRule: 'Raw Sample', status: 'Active' },
        { id: "USER-022024-000005", specificationId: 'spsc/001', sample: 'Micro Media', product: 'LUPIN MIRA S 25 TABLET', testPlan: 'TP-tamc_1/Tamc/01/00', sampleTemplate: 'Raw Sampling Template', sampleRule: 'C3', status: 'Inactive' },
        { id: "USER-022024-000006", specificationId: 'wbl/fps/002', sample: 'finished Product', product: 'LUPIN MIRA S 25 TABLET', testPlan: 'TP-sppip/SPSC-000012', sampleTemplate: 'test temp_1', sampleRule: 'Raw Sample', status: 'Active' },
        { id: "USER-022024-000007", specificationId: 'spsc/00/001', sample: 'Micro Media', product: 'LUPIN MIRA S 25 TABLET', testPlan: 'TP-tamc_1/Tamc/01/00', sampleTemplate: 'Raw Sampling Template', sampleRule: 'C5', status: 'Active' },
        { id: "USER-022024-000008", specificationId: 'wbl/fps/0003', sample: 'Finished Product', product: 'LUPIN MIRA S 25 TABLET', testPlan: 'TP-sppip/SPSC-000012', sampleTemplate: 'test temp_1', sampleRule: 'Raw Sample', status: 'Inactive' },
        { id: "USER-022024-000009", specificationId: 'spsc/01/001', sample: 'Micro Media', product: 'LUPIN MIRA S 25 TABLET', testPlan: 'TP-tamc_1/Tamc/01/00', sampleTemplate: 'Raw Sampling Template', sampleRule: 'C4', status: 'Active' },
        { id: "USER-022024-0000010", specificationId: 'wbl/fps/004', sample: 'Finished Product', product: 'LUPIN MIRA S 25 TABLET', testPlan: 'TP-sppip/SPSC-000012', sampleTemplate: 'test temp_1', sampleRule: 'Raw Sample', status: 'Inactive' },


    ]);
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, employee.length);

    const nextPage = () => setCurrentPage(currentPage + 1);
    const prevPage = () => setCurrentPage(currentPage - 1);
    const filteredEmployee = employee.filter(employee =>
        selectedStatus === 'All' ? true : employee.status.toUpperCase() === selectedStatus.toUpperCase()
    );

    const renderRows = () => {
        return filteredEmployee.slice(startIndex, endIndex).map((employee, index) => (
            <tr key={startIndex + index}>
                <td>{startIndex + index + 1}</td>
                <td>{employee.id}</td>
                <td>{employee.specificationId}</td>
                <td>{employee.sample}</td>
                <td>{employee.product}</td>
                <td>{employee.testPlan}</td>
                <td>{employee.sampleTemplate}</td>
                <td>{employee.sampleRule}</td>
                <td hidden>
                    <button
                        className={`p-1 small w-75 rounded text-light d-flex justify-content-center align-items-center bg-${employee.status === "Inactive"
                            ? "red-700"
                            : employee.status === "Active"
                                ? "green-700"
                                : "white"
                            }`} style={{ fontSize: '0.6rem' }}
                    >
                        {employee.status}
                    </button>
                </td>
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

    const handleDeleteClick = (id) => {
        setDeleteId(id);
        setDeleteModal(true);
    };

    const handleDeleteConfirm = () => {
        setEmployee((prevEmployee) => prevEmployee.filter((employee) => employee.id !== deleteId));
        setDeleteModal(false);
    };

    return (
        <>
            <div className="m-5 mt-3 ">
                <div className="main-head">
                    <h4 className="fw-bold">Sampling Configuration</h4>
                </div>
                <div>
                    <CRow className="mt-5 mb-3">
                        <CCol sm={3}>
                            <CFormSelect
                                onChange={(e) => setSelectedStatus(e.target.value)}
                                value={selectedStatus}
                                style={{ fontSize: '0.9rem' }}
                                options={[
                                    { label: "All", value: "All" },
                                    { label: "Active", value: "Active" },
                                    { label: "Inactive", value: "Inactive" },
                                ]}
                            />
                        </CCol>
                        <CCol sm={3}></CCol>
                        <CCol sm={3}></CCol>
                        <CCol sm={3}>
                            <div className="d-flex justify-content-end">
                                <CButton
                                    className=" text-white"
                                    style={{ background: "#4B49B6", fontSize: '0.9rem' }}
                                    onClick={() => setAddModal(true)}
                                >
                                    Add E-Sampling</CButton>
                            </div>
                        </CCol>
                    </CRow>
                </div>

                <div
                    className=" rounded bg-white"
                    style={{ fontFamily: 'sans-serif', fontSize: '0.9rem', boxShadow: '5px 5px 20px #5D76A9' }}
                >
                    <table className="mb-0 table table-responsive">
                        <thead>
                            <tr>
                                <th style={{ background: "#5D76A9", color: "white" }}>S.No.</th>
                                <th style={{ background: "#5D76A9", color: "white" }}>Sampling ID</th>
                                <th style={{ background: "#5D76A9", color: "white" }}>Specification ID</th>
                                <th style={{ background: "#5D76A9", color: "white" }}>Sample Type</th>
                                <th style={{ background: "#5D76A9", color: "white" }}>Product Name</th>
                                <th style={{ background: "#5D76A9", color: "white" }}>Test Plan</th>
                                <th style={{ background: "#5D76A9", color: "white" }}>Sample Template</th>
                                <th style={{ background: "#5D76A9", color: "white" }}>Sample Rule</th>
                                <th style={{ background: "#5D76A9", color: "white" }} hidden>Status</th>
                                <th style={{ background: "#5D76A9", color: "white" }}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {renderRows()}
                        </tbody>
                    </table>
                </div>

                <div className="d-flex justify-content-end align-items-center mt-4">
                    <div className="pagination">
                        <button style={{ background: "#21516a", color: "white" }} className="btn mr-2" onClick={prevPage} disabled={currentPage === 1}>
                            &lt;&lt;
                        </button>
                        <button className="btn mr-2 bg-dark-subtle rounded-circle">{currentPage}</button>
                        <button style={{ background: "#21516a", color: "white" }} className="btn mr-2" onClick={nextPage} disabled={endIndex >= employee.length}>
                            &gt;&gt;
                        </button>
                    </div>
                </div>

                {addModal && <StatusModal visible={addModal} closeModal={() => setAddModal(false)} />}
                {deleteModal && <DeleteModal visible={deleteModal} closeModal={() => setDeleteModal(false)} confirmDelete={handleDeleteConfirm} />}
            </div>
        </>
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
                    className='mb-3'
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
                    className='mb-3'
                    type="text"
                    label="Specification ID"
                    placeholder="Specification ID"
                    disabled
                />

                <CFormInput
                    className='mb-3'
                    type="text"
                    label="Product/Material Name"
                    placeholder="Product/Material Name"
                    disabled
                />
                <CFormInput
                    className='mb-3'
                    type="text"
                    label="Product/Material Code"
                    placeholder="Product/Material Code"
                    disabled
                />
                <CFormInput
                    className='mb-3'
                    type="text"
                    label="Sample Type"
                    placeholder="Sample Type"
                    disabled
                />
                <CFormSelect
                    className='mb-3'
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
                    className='mb-3'
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
                    className='mb-3'
                    type="select"
                    label="Sampling Test"
                    options={[
                        "Select...",
                        { label: "No Options", value: "No Options" },

                    ]}
                />
                <CFormInput
                    className='mb-3'
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
