import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faPenToSquare, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { CButton, CCol, CFormInput, CFormSelect, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react";


const SamplingRule = () => {
    const [addModal, setAddModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);
    const [deleteId, setDeleteId] = useState(null);
    const pageSize = 5; // Number of items per page
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [selectedStatus, setSelectedStatus] = useState('All');
    const badgeStyle = { background: "green", color: "white", width: "110px" };
    const badgeStyle2 = { background: "red", color: "white", width: "110px" };

    const [employees, setEmployees] = useState([

        { id: "1", uniqueCode: "USER-022024-000001", description: 'Raw Sample', numberOfRanges: '3', updatedAt: '2024-05-15', status: 'ACTIVE' },
        { id: "2", uniqueCode: "USER-022024-000002", description: 'c1', numberOfRanges: '5', updatedAt: '2024-05-16', status: 'INACTIVE' },
        { id: "3", uniqueCode: "USER-022024-000003", description: 'Raw Sample', numberOfRanges: '3', updatedAt: '2024-05-15', status: 'ACTIVE' },
        { id: "4", uniqueCode: "USER-022024-000004", description: 'c1', numberOfRanges: '5', updatedAt: '2024-05-16', status: 'INACTIVE' },
        { id: "5", uniqueCode: "USER-022024-000005", description: 'Raw Sample', numberOfRanges: '3', updatedAt: '2024-05-15', status: 'ACTIVE' },
        { id: "6", uniqueCode: "USER-022024-000006", description: 'c1', numberOfRanges: '5', updatedAt: '2024-05-16', status: 'INACTIVE' },
        { id: "7", uniqueCode: "USER-022024-000007", description: 'Raw Sample', numberOfRanges: '3', updatedAt: '2024-05-15', status: 'ACTIVE' },
        { id: "8", uniqueCode: "USER-022024-000008", description: 'c1', numberOfRanges: '5', updatedAt: '2024-05-16', status: 'INACTIVE' },
        { id: "9", uniqueCode: "USER-022024-000009", description: 'Raw Sample', numberOfRanges: '3', updatedAt: '2024-05-15', status: 'ACTIVE' },
        { id: "10", uniqueCode: "USER-022024-0000010", description: 'c1', numberOfRanges: '5', updatedAt: '2024-05-16', status: 'INACTIVE' },


    ]);
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, employees.length);
    const filteredEmployees = employees.filter(employee =>
        selectedStatus === 'All' ? true : employee.status.toUpperCase() === selectedStatus.toUpperCase()
    );

    const renderRows = () => {
        return filteredEmployees.slice(startIndex, endIndex).map((employee, index) => (
            <tr key={startIndex + index}>
                <td>{startIndex + index + 1}</td>
                <td>{employee.uniqueCode}</td>
                <td>{employee.description}</td>
                <td>{employee.numberOfRanges}</td>
                <td>{employee.updatedAt}</td>
                <td>
                    <button
                        className="py-2 px-3 small rounded fw-bold"
                        style={
                            employee.status === "ACTIVE"
                                ? badgeStyle
                                : badgeStyle2
                        }
                    >
                        {employee.status}
                    </button>
                </td>
                <td>
                    <div className='d-flex gap-3'>
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
                    <div className="title fw-bold fs-5 py-4">Sampling Rule</div>
                </div>
                <div className="d-flex justify-content-between my-3">
                    <div className="dropdown">
                        <CFormSelect
                            onChange={(e) => setSelectedStatus(e.target.value)}
                            value={selectedStatus}
                            style={{fontSize:'0.9rem'}}
                        >
                            <option value="All">All</option>
                            <option value="ACTIVE">Active</option>
                            <option value="INACTIVE">Inactive</option>
                        </CFormSelect>
                    </div>
                    <div className="">
                        <CButton color="primary" onClick={() => setAddModal(true)}>Add Sampling Rule</CButton>
                    </div>
                </div>


            </div>

                  <div
          className=" rounded bg-white"
          style={{fontFamily:'sans-serif', fontSize:'0.9rem' ,boxShadow:'5px 5px 20px #5D76A9'}}
        >
                <table className="mb-0    table table-responsive">
                    <thead>
                        <tr>
                            <th style={{ background: "#5D76A9", color: "white"}}>S.No.</th>
                            <th style={{ background: "#5D76A9", color: "white"}}>Unique Code</th>
                            <th style={{ background: "#5D76A9", color: "white"}}>Description</th>
                            <th style={{ background: "#5D76A9", color: "white"}}>Number Of Ranges</th>
                            <th style={{ background: "#5D76A9", color: "white"}}>Updated At</th>
                            <th style={{ background: "#5D76A9", color: "white"}}>Status</th>
                            <th style={{ background: "#5D76A9", color: "white"}}>Action</th>
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
                <CModalTitle>Add Rule</CModalTitle>
            </CModalHeader>
            <CModalBody>

                <CFormInput
                className="mb-3"
                    type="text"
                    label="Sampling Rule Name"
                    placeholder="Sampling Rule Name"
                />

                <CFormInput
                className="mb-3"
                    type="text"
                    label="Unique Code"
                    placeholder="Unique Code"
                />

                <CFormInput
                className="mb-3"
                    type="number"
                    label="Number of Ranges"
                    placeholder="Number of Ranges"
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
                <CModalTitle>Delete Sampling Rule</CModalTitle>
            </CModalHeader>
            <CModalBody>
                <p>Are you sure you want to delete this Sampling Rule { }?</p>
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

export default SamplingRule
