import React, { useState } from 'react';
import {
  CButton, CCol, CFormInput, CFormSelect, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow
} from "@coreui/react";
import {
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-regular-svg-icons";
import { FaArrowRight } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SettingVendors = () => {
  const [addModal, setAddModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [removeModal, setRemoveModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null)
  const [selectedStatus, setSelectedStatus] = useState("All");
  const recordsPerPage = 5;

  const [tableData, setTableData] = useState([
    { id: 1, analyst: "John Doe", testTechnique: "Technique A", trainingDetails: "Completed on Jan 1, 2024", remarks: "Excellent", addedOn: "May 22, 2024", status: "INITIATED" },
    { id: 2, analyst: "Jane Smith", testTechnique: "Technique B", trainingDetails: "Completed on Feb 5, 2024", remarks: "Good", addedOn: "May 23, 2024", status: "APPROVED" },
    { id: 3, analyst: "Alice Johnson", testTechnique: "Technique C", trainingDetails: "Completed on Mar 10, 2024", remarks: "Satisfactory", addedOn: "May 24, 2024", status: "REJECTED" },
    { id: 4, analyst: "Bob Brown", testTechnique: "Technique D", trainingDetails: "Completed on Apr 15, 2024", remarks: "Needs Improvement", addedOn: "May 25, 2024", status: "REINITIATED" },
    { id: 5, analyst: "Carol White", testTechnique: "Technique E", trainingDetails: "Completed on May 20, 2024", remarks: "Excellent", addedOn: "May 26, 2024", status: "INITIATED" },
    { id: 6, analyst: "David Green", testTechnique: "Technique F", trainingDetails: "Completed on Jun 25, 2024", remarks: "Good", addedOn: "May 27, 2024", status: "APPROVED" },
    { id: 7, analyst: "Eve Black", testTechnique: "Technique G", trainingDetails: "Completed on Jul 30, 2024", remarks: "Satisfactory", addedOn: "May 28, 2024", status: "REJECTED" },
    { id: 8, analyst: "Frank Blue", testTechnique: "Technique H", trainingDetails: "Completed on Aug 5, 2024", remarks: "Needs Improvement", addedOn: "May 29, 2024", status: "REINITIATED" }
  ]);

  const handleStatusChange = (e) => {
    setSelectedStatus(e.target.value);
    setCurrentPage(1);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const handleDelete = () => {
    setTableData((prevData) => prevData.filter((item) => item.id !== deleteId));
    setRemoveModal(false);
    setDeleteId(null)
  }

  const handleDeleteClick = (id) => {
    setDeleteId(id);
    setRemoveModal(true);
  }


  const filteredData = tableData.filter((data) => {
    const matchesStatus = selectedStatus === "All" || data.status === selectedStatus;
    const matchesSearchQuery = data.analyst.toLowerCase().includes(searchQuery.toLowerCase()) ||
      data.testTechnique.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearchQuery;
  });

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = filteredData.slice(indexOfFirstRecord, indexOfLastRecord);
  const totalPages = Math.ceil(filteredData.length / recordsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleWidgetClick = (status) => {
    setSelectedStatus(status);
    setCurrentPage(1);
  };

  const statusCounts = {
    INITIATED: tableData.filter(data => data.status === 'INITIATED').length,
    REINITIATED: tableData.filter(data => data.status === 'REINITIATED').length,
    APPROVED: tableData.filter(data => data.status === 'APPROVED').length,
    REJECTED: tableData.filter(data => data.status === 'REJECTED').length,
    DROPPED: tableData.filter(data => data.status === 'DROPPED').length,
  };

  return (
    <div className="mx-5">
      <div className="row my-5">
        <div className="main-head">
          <div className="title fw-bold fs-5">Vendors</div>
        </div>

        <div className="chart-widgets w-100">
          <div className="row">
            <div className="col shadow p-3 m-3 rounded cursor-pointer" style={{ background:  "linear-gradient(25deg, #0250c5 0%, #d43f8d 100%)" }} onClick={() => handleWidgetClick('DROPPED')}>
              <div className="text-light fs-5">DROPPED</div>
              <div className="count fs-1 text-light fw-bolder">{statusCounts.DROPPED}</div>
            </div>
            <div className="col shadow p-3 m-3 rounded cursor-pointer" style={{ background: "linear-gradient(25deg, #13517a 6% , #2A5298 50%)" }} onClick={() => handleWidgetClick('INITIATED')}>
              <div className="text-light fs-5">INITIATED</div>
              <div className="count fs-1 text-light fw-bolder">{statusCounts.INITIATED}</div>
            </div>
            <div className="col shadow p-3 m-3 rounded cursor-pointer" style={{ background: "linear-gradient(25deg, orange , #f7e05f )" }} onClick={() => handleWidgetClick('REINITIATED')}>
              <div className="text-light fs-5">REINITIATED</div>
              <div className="count fs-1 text-light fw-bolder">{statusCounts.REINITIATED}</div>
            </div>
            <div className="col shadow p-3 m-3 rounded cursor-pointer" style={{ background: "linear-gradient(27deg, green , #0fd850  )"}} onClick={() => handleWidgetClick('APPROVED')}>
              <div className="text-light fs-5">APPROVED</div>
              <div className="count fs-1 text-light fw-bolder">{statusCounts.APPROVED}</div>
            </div>
            <div className="col shadow p-3 m-3 rounded cursor-pointer" style={{ background: "linear-gradient(27deg ,red, #FF719A)"}} onClick={() => handleWidgetClick('REJECTED')}>
              <div className="text-light fs-5">REJECTED</div>
              <div className="count fs-1 text-light fw-bolder">{statusCounts.REJECTED}</div>
            </div>
          </div>
        </div>

        <div className='my-3'>
          <CRow className="mb-3">
            <CCol sm={4}>
              <CFormInput
                type="text"
                className='border-dark-subtle border-2'
                placeholder="Search..."
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </CCol>
            <CCol sm={3}>
              <CFormSelect
                value={selectedStatus}
                className='border-dark-subtle border-2'
                onChange={handleStatusChange}
                options={[
                  { value: 'All', label: 'All' },
                  { value: 'INITIATED', label: 'Initiated' },
                  { value: 'APPROVED', label: 'Approved' },
                  { value: 'REJECTED', label: 'Rejected' },
                  { value: 'REINITIATED', label: 'Reinitiated' },
                  { value: 'DROPPED', label: 'Dropped' }
                ]}
              />
            </CCol>
            <CCol sm={2}></CCol>
            <CCol sm={3}>
              <div className="d-flex justify-content-end">
                <button
                  className="d-flex rounded btn-primary btn-right p-2"
                  type="button"
                  onClick={() => setAddModal(true)}><span>Add Vendor</span></button>
              </div>
            </CCol>
          </CRow>
        </div>

        {filteredData.length === 0 ? <center className='my-5'><h5>No Vendors Found</h5></center> : <div className="notFound">
          <div className="bg-light mt-4 border-dark-subtle border-2 rounded shadow">
            <CTable align="middle" responsive className="table-responsive table-striped">
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell style={{ background: "#3C496A", color: "white" }} scope="col" className="text-center"><input type="checkbox" /></CTableHeaderCell>
                  <CTableHeaderCell style={{ background: "#3C496A", color: "white" }} scope="col">Id</CTableHeaderCell>
                  <CTableHeaderCell style={{ background: "#3C496A", color: "white" }} scope="col">Vendor</CTableHeaderCell>
                  <CTableHeaderCell style={{ background: "#3C496A", color: "white" }} scope="col">Test Technique</CTableHeaderCell>
                  <CTableHeaderCell style={{ background: "#3C496A", color: "white" }} scope="col">Training Details</CTableHeaderCell>
                  <CTableHeaderCell style={{ background: "#3C496A", color: "white" }} scope="col">Remarks</CTableHeaderCell>
                  <CTableHeaderCell style={{ background: "#3C496A", color: "white" }} scope="col">Added On</CTableHeaderCell>
                  <CTableHeaderCell style={{ background: "#3C496A", color: "white" }} scope="col">Status</CTableHeaderCell>
                  <CTableHeaderCell style={{ background: "#3C496A", color: "white" }} scope="col">Actions</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {currentRecords.map((data, index) => (
                  <CTableRow key={index}>
                    <CTableHeaderCell scope="row" className="text-center">
                      <input type="checkbox" />
                    </CTableHeaderCell>
                    <CTableDataCell>{index + 1}</CTableDataCell>
                    <CTableDataCell>{data.analyst}</CTableDataCell>
                    <CTableDataCell>{data.testTechnique}</CTableDataCell>
                    <CTableDataCell>{data.trainingDetails}</CTableDataCell>
                    <CTableDataCell>{data.remarks}</CTableDataCell>
                    <CTableDataCell>{data.addedOn}</CTableDataCell>
                    <CTableDataCell>
                      <div className=" w-75">
                        <div className={`p-2 small rounded fw-bold text-light d-flex justify-content-center align-items-center bg-${data.status === 'INITIATED' ? 'blue-700'
                          : data.status === "APPROVED"
                            ? 'green-700'
                            : data.status === "REJECTED"
                              ? 'red-700'
                              : data.status === "REINITIATED"
                                ? 'yellow-500'
                                : data.status === "DROPPED"
                                  ? 'purple-700'
                                  : 'white'}`} >{data.status}</div>
                      </div>
                    </CTableDataCell>
                    <CTableDataCell>
                      <div className="d-flex gap-3">
                        <div className="cursor-pointer" onClick={() => setAddModal(true)}><FontAwesomeIcon icon={faPenToSquare} /></div>
                        <div className="cursor-pointer" onClick={() => handleDeleteClick(data.id)}><FontAwesomeIcon icon={faTrashCan} /></div>
                      </div>
                    </CTableDataCell>
                  </CTableRow>
                ))}
              </CTableBody>
            </CTable>
          </div>
          <div className="pagination my-4 d-flex justify-content-between">
            <div className="d-flex gap-2">
              <button className="btn" onClick={handlePreviousPage} disabled={currentPage === 1}>&lt;&lt;</button>
              <button className="btn bg-dark-subtle">{currentPage}</button>
              <button className="btn" onClick={handleNextPage} disabled={currentPage === totalPages}>&gt;&gt;</button>
            </div>
            <div>
              <button className="d-flex btn btn-next gap-2" onClick={handleNextPage} disabled={currentPage === totalPages}>
                Next <FaArrowRight className="mt-1" />
              </button>
            </div>
          </div>
        </div>}
      </div>

      {addModal && <StatusModal visible={addModal} closeModal={() => setAddModal(false)} />}
      {removeModal && (
        <DeleteModel
          visible={removeModal}
          closeModal={() => setRemoveModal(false)} handleDelete={handleDelete}
        />
      )}
    </div>
  );
};

const StatusModal = (_props) => {
  return (
    <CModal alignment="center" visible={_props.visible} onClose={_props.closeModal} size='lg'>
      <CModalHeader>
        <CModalTitle>Add Vendor</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <h5 className='mb-4'>Add information and add new Vendor</h5>
        <CFormInput type="text" className='mb-3' label="Material Name" placeholder="Material Name" />
        <CFormInput type="text" className='mb-3' label="Supplier Name" placeholder="Supplier Name" />
        <CFormInput type="text" className='mb-3' label="Email" placeholder="email@xyz.com" />
        <CFormInput type="number" className='mb-3' label="Phone" placeholder="Phone" />
        <CFormInput type="text" className='mb-3' label="Address" placeholder="Address" />
        <CFormInput type="text" className='mb-3' label="Comments" placeholder="Comments" />
        <CFormInput type="number" className='mb-3' label="Contact person number" placeholder="Contact person" />
        <CFormInput type="text" className='mb-3' label="Website" placeholder="https://yourweb.com" />
      </CModalBody>
      <CModalFooter>
        <CButton color="light" onClick={_props.closeModal}>Cancel</CButton>
        <CButton color="primary">Add</CButton>
      </CModalFooter>
    </CModal>
  );
};

const DeleteModel = (_props) => {
  return (
    <CModal
      alignment="center"
      visible={_props.visible}
      onClose={_props.closeModal}
    >
      <CModalHeader>
        <CModalTitle>Delete Analyst Template</CModalTitle>
      </CModalHeader>
      <CModalBody>
        Do you want to delete this Analyst Template <code>ARZ ENT</code>?
      </CModalBody>
      <CModalFooter>
        <CButton color="light" onClick={_props.closeModal}>
          Back
        </CButton>
        <CButton className="bg-danger text-white" onClick={_props.handleDelete}>Delete</CButton>
      </CModalFooter>
    </CModal>
  );
};

export default SettingVendors;
