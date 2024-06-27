import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { CButton, CCol, CFormInput, CFormSelect, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react";


const SamplingField = () => {
    const pageSize = 5;
    const [currentPage, setCurrentPage] = useState(1);
    const [addModal, setAddModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);
    const [deleteId, setDeleteId] = useState(null);
    const [selectedStatus, setSelectedStatus] = useState('All');

    const [employee, setEmployee] = useState([

        { id: "1", fieldName: "Room is clean", fieldType: 'RadioButton', registeredBy: 'Manager', registeredOn: '2024-05-15', status: 'ACTIVE' },
        { id: "2", fieldName: "sampling check list", fieldType: 'Label', registeredBy: 'Admin', registeredOn: '2024-05-16', status: 'INACTIVE' },
        { id: "3", fieldName: "Manufacturing Date", fieldType: 'DataField', registeredBy: 'Manager', registeredOn: '2024-05-15', status: 'ACTIVE' },
        { id: "4", fieldName: "Cracks Observerd", fieldType: 'Label', registeredBy: 'Admin', registeredOn: '2024-05-16', status: 'INACTIVE' },
        { id: "5", fieldName: "Batch No", fieldType: 'RadioButton', registeredBy: 'Manager', registeredOn: '2024-05-15', status: 'ACTIVE' },
        { id: "6", fieldName: "Container Name", fieldType: 'DataField', registeredBy: 'Admin', registeredOn: '2024-05-16', status: 'INACTIVE' },
        { id: "7", fieldName: "Cracks Observerd", fieldType: 'DataField', registeredBy: 'Manager', registeredOn: '2024-05-15', status: 'ACTIVE' },
        { id: "8", fieldName: "Sampling Check List", fieldType: 'Label', registeredBy: 'Admin', registeredOn: '2024-05-16', status: 'INACTIVE' },
        { id: "9", fieldName: "Manufacturing Date", fieldType: 'RadioButton', registeredBy: 'Manager', registeredOn: '2024-05-15', status: 'ACTIVE' },
        { id: "10", fieldName: "Manufacturing Date", fieldType: 'Label', registeredBy: 'Admin', registeredOn: '2024-05-16', status: 'INACTIVE' },

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
                <td>{employee.fieldName}</td>
                <td>{employee.fieldType}</td>
                <td>{employee.registeredBy}</td>
                <td>{employee.registeredOn}</td>
                <td>
                    <button
                        className={`p-1 small w-75 rounded text-light d-flex justify-content-center align-items-center bg-${employee.status === "INACTIVE"
                            ? "red-700"
                            : employee.status === "ACTIVE"
                                ? "green-700"
                                : "white"
                            }`} style={{ fontSize: '0.6rem' }}
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
            <div className="m-5 mt-3">
                <div className="main-head">
                    <h4 className="fw-bold">Sampling Field</h4>
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
                                    Add Sampling Field</CButton>
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
                                <th style={{ background: "#5D76A9", color: "white" }}>Field Name</th>
                                <th style={{ background: "#5D76A9", color: "white" }}>Field Type</th>
                                <th style={{ background: "#5D76A9", color: "white" }}>Registered By</th>
                                <th style={{ background: "#5D76A9", color: "white" }}>Registered On</th>
                                <th style={{ background: "#5D76A9", color: "white" }}>Status</th>
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
                <CModalTitle>Add Fields</CModalTitle>
            </CModalHeader>
            <CModalBody>

                <CFormInput
                    className="mb-3"
                    type="text"
                    label="Field Name"
                    placeholder="Sample Type Name"
                />
                <CFormSelect
                    className="mb-3"
                    type="select"
                    label="Field Type"
                    options={[
                        "Select",
                        { label: "Radio Button", value: "Radio Button" },
                        { label: "Label", value: "Label" },
                        { label: "Entry Field", value: "Entry Field" },
                        { label: "Date Field", value: "Date Field" }
                    ]}
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
                <CModalTitle>Delete Sampling Field</CModalTitle>
            </CModalHeader>
            <CModalBody>
                <p>Are you sure you want to delete this SAmpling Field { }?</p>
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
export default SamplingField
