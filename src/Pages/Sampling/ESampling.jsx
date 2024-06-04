import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faPenToSquare, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
import { CButton, CCol, CFormCheck, CFormInput, CFormSelect, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react";


const ESampling = () => {
    const [addModal, setAddModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);
    const [deleteId, setDeleteId] = useState(null);
    const pageSize = 5; // Number of items per page
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [selectedStatus, setSelectedStatus] = useState('All');
    const badgeStyle = { background: "gray", color: "white", width: "110px" };
    const badgeStyle2 = { background: " #2A5298", color: "white", width: "110px" };
    const badgeStyle3 = { background: "green", color: "white", width: "110px" };
    const badgeStyle4 = { background: "red", color: "white", width: "110px" };
    const badgeStyle5 = { background: "orange", color: "white", width: "110px" };
    const badgeStyle6 = { background: "purple", color: "white", width: "110px" };

    const [employees, setEmployees] = useState([

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
    const endIndex = Math.min(startIndex + pageSize, employees.length);
    const filteredEmployees = employees.filter(employee =>
        selectedStatus === 'All' ? true : employee.status.toUpperCase() === selectedStatus.toUpperCase()
    );

    // Function to render table rows for current page
    const renderRows = () => {
        return filteredEmployees.slice(startIndex, endIndex).map((employee, index) => (
            <tr key={startIndex + index}>
                <td>{startIndex + index + 1}</td>
                <td>{employee.product}</td>
                <td>{employee.containersSampled}</td>
                <td>{employee.addedOn}</td>
                <td>{employee.numberOfContainers}</td>
                <td>{employee.samplingConclusion}</td>
                <td >
                    <button
                        className="py-2 px-3 small rounded fw-bold"
                        style={
                            employee.status === "INITIATED"
                                ? badgeStyle2
                                : employee.status === "APPROVED"
                                    ? badgeStyle3
                                    : employee.status === "REJECTED"
                                        ? badgeStyle4
                                        : employee.status === "REINITIATED"
                                            ? badgeStyle5
                                            : employee.status === "DROPPED"
                                                ? badgeStyle6
                                                : badgeStyle
                        }
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
                    <div className="title fw-bold fs-5 py-4">E-Sampling</div>
                </div>
                <div className="d-flex justify-content-between my-3 ">
                    <div className="dropdown">

                        <CFormSelect
                            onChange={(e) => setSelectedStatus(e.target.value)}
                            value={selectedStatus}
                            style={{fontSize:'0.9rem'}}
                        >
                            <option value="All">All</option>
                            <option value="Initiated">Initiated</option>
                            <option value="Approved">Approved</option>
                            <option value="Rejected">Rejected</option>
                            <option value="Reinitiated">Reinitiated</option>
                            <option value="Dropped">Dropped</option>
                        </CFormSelect>
                    </div>

                    <div className="">
                        <CButton color="primary" onClick={() => setAddModal(true)}>Add E-Sampling</CButton>
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
                            <th style={{ background: "#5D76A9", color: "white"}}>Product/Material Name</th>
                            <th style={{ background: "#5D76A9", color: "white"}}>Containers Sampled</th>
                            <th style={{ background: "#5D76A9", color: "white"}}>Added On</th>
                            <th style={{ background: "#5D76A9", color: "white"}}>Number Of Containers</th>
                            <th style={{ background: "#5D76A9", color: "white"}}>Sampling Conclusion</th>
                            <th style={{ background: "#5D76A9", color: "white"}}>Status</th>
                            <th style={{ background: "#5D76A9", color: "white"}}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderRows()}
                    </tbody>
                </table>

            </div>

            {/* Pagination */}

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
