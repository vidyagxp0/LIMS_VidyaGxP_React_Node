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
        <td>
        <button
            style={{
              background: employee.Status === "ACTIVE" ? "#15803d" : "#b91c1c",
              color: "white",
              width: "4rem",
              fontSize: "0.6rem",
              padding: "2px 7px",
              borderRadius: "7px",
            }}
          >
            {employee.Status}
          </button>
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
    <div className="m-5 mt-3"  >
        <div className="main-head">
           <h4 className="fw-bold ">Specifications Type</h4>
        </div>
        <div className="d-flex justify-content-between mt-5 mb-3">
          <div className="w-25">
            <CFormSelect
              onChange={(e) => {
                setSelectedStatus(e.target.value);
                setCurrentPage(1);
              }}
              value={selectedStatus}
              style={{fontSize:'0.9rem'}}
            >
              <option value="All">All</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </CFormSelect>
          </div>
        </div>

            <div
          className=" rounded bg-white"
          style={{fontFamily:'sans-serif', fontSize:'0.9rem' ,boxShadow:'5px 5px 20px #5D76A9'}}
        >
        <CTable align="middle" responsive className="mb-0    table-responsive">
          <thead>
            <tr>
              <th style={{ background: "#5D76A9", color: "white"}}>Sr.no.</th>
              <th style={{ background: "#5D76A9", color: "white"}}>Specification Type</th>
              <th style={{ background: "#5D76A9", color: "white"}}>Added On</th>
              <th style={{ background: "#5D76A9", color: "white"}}>Status</th>
              <th style={{ background: "#5D76A9", color: "white"}}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {renderRows()}
          </tbody>
        </CTable>
      </div>

     <div className="d-flex justify-content-end align-items-center mt-4">
                        <div className="pagination">
                            <button  style={{ background: "#21516a", color: "white" }} className="btn mr-2" onClick={prevPage} disabled={currentPage === 1}>
                                &lt;&lt;
                            </button>
                            <button className="btn mr-2 bg-dark-subtle rounded-circle">{currentPage}</button>
                            <button  style={{ background: "#21516a", color: "white" }} className="btn mr-2" onClick={nextPage} disabled={endIndex >= employees.length}>
                                &gt;&gt;
                            </button>
                        </div>
                       
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
