import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faPenToSquare, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
import { CButton, CCol, CFormCheck, CFormInput, CFormSelect, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react";


const ESampling = () => {
    const pageSize = 5;
    const [currentPage, setCurrentPage] = useState(1);
    const [addModal, setAddModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);
    const [deleteId, setDeleteId] = useState(null);
    const [selectedStatus, setSelectedStatus] = useState("All");

    const [employee, setEmployee] = useState([

        { id: "1", product: "LUPIN MIRA S 21", containersSampled: '37', numberOfContainers: '3', addedOn: '2024-05-15', samplingConclusion: 'PASS', status: 'APPROVED' },
        { id: "2", product: "LUPIN MIRA S 22", containersSampled: '130', numberOfContainers: '5', addedOn: '2024-05-16', samplingConclusion: 'PASS', status: 'INITIATED' },
        { id: "3", product: "LUPIN MIRA S 23", containersSampled: '37', numberOfContainers: '3', addedOn: '2024-05-15', samplingConclusion: 'PASS', status: 'DROPPED' },
        { id: "4", product: "LUPIN MIRA S 24", containersSampled: '56', numberOfContainers: '5', addedOn: '2024-05-16', samplingConclusion: 'PASS', status: 'INITIATED' },
        { id: "5", product: "LUPIN MIRA S 25", containersSampled: '38', numberOfContainers: '3', addedOn: '2024-05-15', samplingConclusion: 'PASS', status: 'APPROVED' },
        { id: "6", product: "LUPIN MIRA S 26", containersSampled: '31', numberOfContainers: '5', addedOn: '2024-05-16', samplingConclusion: 'PASS', status: 'REINITIATED' },
        { id: "7", product: "LUPIN MIRA S 27", containersSampled: '49', numberOfContainers: '3', addedOn: '2024-05-15', samplingConclusion: 'PASS', status: 'REJECTED' },
        { id: "8", product: "LUPIN MIRA S 28", containersSampled: '37', numberOfContainers: '5', addedOn: '2024-05-16', samplingConclusion: 'PASS', status: 'INITIATED' },
        { id: "9", product: "LUPIN MIRA S 29", containersSampled: '21', numberOfContainers: '3', addedOn: '2024-05-15', samplingConclusion: 'PASS', status: 'APPROVED' },
        { id: "10", product: "LUPIN MIRA S 30", containersSampled: '37', numberOfContainers: '5', addedOn: '2024-05-16', samplingConclusion: 'PASS', status: 'INITIATED' },


    ]);
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, employee.length);
    const filteredEmployee = employee.filter(employee =>
        selectedStatus === 'All' ? true : employee.status.toUpperCase() === selectedStatus.toUpperCase()
    );

    const renderRows = () => {
        return filteredEmployee.slice(startIndex, endIndex).map((employee, index) => (
            <tr key={startIndex + index}>
                <td>{startIndex + index + 1}</td>
                <td>{employee.product}</td>
                <td>{employee.containersSampled}</td>
                <td>{employee.addedOn}</td>
                <td>{employee.numberOfContainers}</td>
                <td>{employee.samplingConclusion}</td>
                <td >
                    <button
                        className={`py-1 px-3 small w-75 rounded text-light d-flex justify-content-center align-items-center bg-${employee.status === "INITIATED"
                            ? "blue-700"
                            : employee.status === "APPROVED"
                                ? "green-700"
                                : employee.status === "REJECTED"
                                    ? "red-700"
                                    : employee.status === "REINITIATED"
                                        ? "yellow-500"
                                        : employee.status === "DROPPED"
                                            ? "purple-700"
                                            : "white"
                            }`} style={{ fontSize: '0.6rem' }}
                    >
                        {employee.status}
                    </button>
                </td>
                <td>
                    <div className='d-flex gap-3'>
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

    const nextPage = () => setCurrentPage(currentPage + 1);
    const prevPage = () => setCurrentPage(currentPage - 1);

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
                    <h4 className="fw-bold">E-Sampling</h4>
                </div>
                <div>
                    <CRow className="mt-5 mb-3">
                        <CCol sm={3}>
                            <CFormSelect
                                onChange={(e) => setSelectedStatus(e.target.value)}
                                value={selectedStatus}
                                style={{ fontSize: '0.9rem' }}
                                options={[
                                    { value: "All", label: "All" },
                                    { value: "INITIATED", label: "Initiated" },
                                    { value: "APPROVED", label: "Approved" },
                                    { value: "REJECTED", label: "Rejected" },
                                    { value: "REINITIATED", label: "Reinitiated" },
                                    { value: "DROPPED", label: "Dropped" },
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
                    className="rounded bg-white"
                    style={{ fontFamily: 'sans-serif', fontSize: '0.9rem', boxShadow: '5px 5px 20px #5D76A9' }}
                >
                    <table className="mb-0 table table-responsive">
                        <thead>
                            <tr>
                                <th style={{ background: "#5D76A9", color: "white" }}>S.No.</th>
                                <th style={{ background: "#5D76A9", color: "white" }}>Product/Material Name</th>
                                <th style={{ background: "#5D76A9", color: "white" }}>Containers Sampled</th>
                                <th style={{ background: "#5D76A9", color: "white" }}>Added On</th>
                                <th style={{ background: "#5D76A9", color: "white" }}>Number Of Containers</th>
                                <th style={{ background: "#5D76A9", color: "white" }}>Sampling Conclusion</th>
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
                <CModalTitle>Add E-Sample</CModalTitle>
            </CModalHeader>
            <CModalBody>
                <CFormSelect className="mb-3"
                    type="select"
                    label="Sampling Configuration"

                    options={[
                        "Select",
                        { label: "SC-072023-0000001", value: "SC-072023-0000001" },
                        { label: "SC-072023-0000002", value: "SC-072023-0000002" },
                        { label: "SC-072023-0000003", value: "SC-072023-0000003" },
                        { label: "SC-072023-0000004", value: "SC-072023-0000004" }
                    ]}
                />

                <CFormInput
                    className="mb-3"
                    type="text"
                    label="Product/Material Name"
                    placeholder="Product/Material Name"
                    disabled
                />
                <CFormInput
                    className="mb-3"
                    type="text"
                    label="Test Plan"
                    placeholder="Test Plan"
                />
                <CFormSelect
                    className="mb-3"
                    type="select"
                    label="A.R. No"
                    options={[
                        "Select",
                        { label: "ARPC010110", value: "ARPC010110" },
                        { label: "ARPC010111", value: "ARPC010111" },
                        { label: "ARPC010112", value: "ARPC010112" },
                        { label: "ARPC010113", value: "ARPC010113" }
                    ]}
                />

                <CFormInput
                    className="mb-3"
                    type="number"
                    label="Total No. of containers"
                    placeholder="Total No. of containers"
                />
                <CFormInput
                    className="mb-3"
                    type="number"
                    label="No. of containers to be sampled"
                    placeholder="No. of containers to be sampled"
                />
                <CFormSelect
                    className="mb-3"
                    type="select"
                    label="Containers sampled"

                    options={[
                        "Select",
                        { label: "No. Of Sampled Containers", value: "No. Of Sampled Containers" },

                    ]}
                />

                <label className="mb-3">Sampling Conclusion</label>
                <CFormCheck
                    type="radio"
                    id="SamplingConclusionPass"
                    name="SamplingConclusion"
                    label="Pass"
                />
                <CFormCheck
                    className="mb-3"
                    type="radio"
                    id="SamplingConclusionFail"
                    name="SamplingConclusion"
                    label="Fail"
                />

                <label className="mb-3">Check point passed</label>
                <CFormCheck
                    type="radio"
                    id="CheckPointPassedYes"
                    name="CheckPointPassed"
                    label="Yes"
                />
                <CFormCheck
                    className="mb-3"
                    type="radio"
                    id="CheckPointPassedNo"
                    name="CheckPointPassed"
                    label="No"
                />

                <CFormInput
                    className="mb-3"
                    type="file"
                    label="Document If Any"
                    placeholder="Choose File"
                />

                <CFormInput
                    className="mb-3"
                    type="text"
                    label="Comments"
                    placeholder="Comment here..."
                />
                <CFormInput
                    className="mb-3"
                    type="text"
                    label="Initiated By"
                    placeholder="Admin"
                    disabled
                />
                <CFormInput
                    className="mb-3"
                    type="date"
                    label="Initiated On"
                    placeholder="05/24/2024"
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
                <CModalTitle>Delete E-Sample</CModalTitle>
            </CModalHeader>
            <CModalBody>
                <p>Are you sure you want to delete this E-Sample { }?</p>
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


export default ESampling
