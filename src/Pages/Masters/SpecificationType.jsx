import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CButton, CCol, CFormInput, CFormSelect, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react";


export default function SpecificationType() {
  const [addModal, setAddModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState('All');

  const pageSize = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [statusFilter, setStatusFilter] = useState('');

  const badgeStyle = { background: "gray", color: "white", width: "110px" };
  const badgeStyle2 = {
    background: " #2A5298",
    color: "white",
    width: "110px",
  };
  const badgeStyle3 = { background: "green", color: "white", width: "110px" };
  const badgeStyle4 = { background: "red", color: "white", width: "110px" };
  const badgeStyle5 = { background: "orange", color: "white", width: "110px" };
  const badgeStyle6 = { background: "purple", color: "white", width: "110px" };

  const [employees, setEmployees] = useState([
    { id: 1, user: 'environment', Date: 'May 17th 24 14:34', Status: 'ACTIVE' },
    { id: 2, user: 'culture', Date: 'May 17th 24 14:34', Status: 'ACTIVE' },
    { id: 3, user: 'working standard', Date: 'May 17th 24 14:34', Status: 'INACTIVE' },
    { id: 4, user: 'culture 1', Date: 'May 17th 24 14:34', Status: 'ACTIVE' },
    { id: 5, user: 'culture', Date: 'May 17th 24 14:34', Status: 'ACTIVE' },
    { id: 6, user: 'environment', Date: 'May 17th 24 14:34', Status: 'INACTIVE' },
    { id: 7, user: 'Initiated Product', Date: 'May 17th 24 14:34', Status: 'INACTIVE' },
    { id: 8, user: 'environment', Date: 'May 17th 24 14:34', Status: 'ACTIVE' },
    { id: 9, user: 'working standard', Date: 'May 17th 24 14:34', Status: 'ACTIVE' },
    { id: 10, user: 'Initiated Product', Date: 'May 17th 24 14:34', Status: 'ACTIVE' },
  ]);

  const filteredEmployees = employees.filter(employee =>
    selectedStatus === 'All' ? true : employee.Status.toUpperCase() === selectedStatus.toUpperCase()
  );

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, employees.length);
  
  const renderRows = () => {
    return filteredEmployees.slice(startIndex, endIndex).map((employee, index) => (
      <tr key={startIndex + index}>
        <td>{startIndex + index + 1}</td>
        <td>{employee.user}</td>
        <td>{employee.Date}</td>
        <td className="d-flex">
          <div
            className="d-flex justify-content-center py-2 px-3 small rounded fw-bold"
            style={
              employee.Status === "ACTIVE" ? badgeStyle3 : badgeStyle4
            }
          >
            {employee.Status}
          </div>
        </td>
        <td>
          <div className="d-flex gap-3">
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
    if (currentPage < Math.ceil(filteredEmployees.length / pageSize)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
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
    <div className="mx-5">
            <div className="row my-5">
        <div className="main-head">
          <div className="title fw-bold fs-5 py-4">Specifications Type</div>
        </div>
        <div className="d-flex justify-content-between my-4">
          <div className="dropdown">
            <CFormSelect
              onChange={(e) => {
                setSelectedStatus(e.target.value);
                setCurrentPage(1);
              }}
              value={selectedStatus}
              style={{ border: "2px solid gray", width: "220px" }}
            >

              <option value="All">All</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </CFormSelect>
          </div>
          
        </div>

      </div>

      <div className=' bg-white rounded' style={{ border: "2px solid gray" }} >
        <CTable align="middle" responsive className="mb-0 table-striped table-responsive">
          <thead>
            <tr>
              <th style={{ background: "#3C496A", color: "white" }}>Sr.no.</th>
              <th style={{ background: "#3C496A", color: "white" }}>Specification Type</th>
              <th style={{ background: "#3C496A", color: "white" }}>Added On</th>
              <th style={{ background: "#3C496A", color: "white" }}>Status</th>
              <th style={{ background: "#3C496A", color: "white" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {renderRows()}
          </tbody>
        </CTable>
      </div>

      <div className="d-flex justify-content-between align-items-center my-4">
        <div className="pagination">
          <button className="btn mr-2" onClick={prevPage} disabled={currentPage === 1}>
            &lt;&lt;
          </button>
          <button className="btn mr-2 bg-dark-subtle rounded-circle">{currentPage}</button>
          <button className="btn mr-2" onClick={nextPage} disabled={endIndex >= employees.length}>
            &gt;&gt;
          </button>
        </div>
        <button className="btn d-flex align-items-center border" onClick={nextToLastPage}>
          Next <FaArrowRight className='ms-2' />
        </button>
      </div>

      {addModal && <StatusModal visible={addModal} closeModal={() => setAddModal(false)} />}
      {deleteModal && <DeleteModal visible={deleteModal} closeModal={() => setDeleteModal(false)} confirmDelete={handleDeleteConfirm} />}
      
    </div>
  );
}
const StatusModal = (_props) => {
  return (
    <CModal alignment="center" visible={_props.visible} onClose={_props.closeModal}>
      <CModalHeader>
        <CModalTitle>Update specification type</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <p>Update information and add new specification type</p>

        <CFormInput
          className='mb-3'
          type="text"
          label="Specification Type Name"
          placeholder="Specification Type Name"
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
        <CModalTitle>Delete Sample Type</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <p>Are you sure you want to delete this Sample Type { }?</p>
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
