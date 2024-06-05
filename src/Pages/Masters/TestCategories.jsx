import React, { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom'

import { faEye, faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CButton, CCol, CFormInput, CFormSelect, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react";



export default function TestCategories() {
  const [addModal, setAddModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState('All');

  const badgeStyle = { background: "gray", color: "white", width: "110px" };
  const badgeStyle2 = { background: "#2A5298", color: "white", width: "110px" };
  const badgeStyle3 = { background: "green", color: "white", width: "110px" };
  const badgeStyle4 = { background: "red", color: "white", width: "110px" };
  const badgeStyle5 = { background: "orange", color: "white", width: "110px" };
  const badgeStyle6 = { background: "purple", color: "white", width: "110px" };


  const pageSize = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [employees, setEmployees] = useState([
    { id: 1, user: 'Initiated Product', Date: 'May 17th 24 14:34', DayComplete: '10', AddedON: 'May 17th 24 14:34', Status: 'APPROVED' },
    { id: 2, user: 'Initiated Product', Date: 'May 17th 24 14:34', DayComplete: '10', Status: 'INITIATED' },
    { id: 3, user: 'Initiated Product', Date: 'May 17th 24 14:34', DayComplete: '10', Status: 'INITIATED' },
    { id: 4, user: 'Initiated Product', Date: 'May 17th 24 14:34', DayComplete: '10', Status: 'APPROVED' },
    { id: 5, user: 'Initiated Product', Date: 'May 17th 24 14:34', DayComplete: '10', Status: 'DROPPED' },
    { id: 6, user: 'Initiated Product', Date: 'May 17th 24 14:34', DayComplete: '10', Status: 'REJECTED' },
    { id: 7, user: 'Initiated Product', Date: 'May 17th 24 14:34', DayComplete: '10', Status: 'REINITIATED' },
    { id: 8, user: 'Initiated Product', Date: 'May 17th 24 14:34', DayComplete: '10', Status: 'DROPPED' },
    { id: 9, user: 'Initiated Product', Date: 'May 17th 24 14:34', DayComplete: '10', Status: 'DROPPED' },
    { id: 10, user: 'Initiated Product', Date: 'May 17th 24 14:34', DayComplete: '10', Status: 'APPROVED' },
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
        <td>{employee.DayComplete}</td>
        <td>{employee.DayComplete}</td>
        <td>{employee.Date}</td>
        <td >
        <button  
                        className={`p-1 small w-75 rounded text-light d-flex justify-content-center align-items-center bg-${
                          employee.Status === "INITIATED"
                            ? "blue-700"
                            : employee.Status === "APPROVED"
                            ? "green-700"
                            : employee.Status === "REJECTED"
                            ? "red-700"
                            : employee.Status === "REINITIATED"
                            ? "yellow-500"
                            : employee.Status === "DROPPED"
                            ? "purple-700"
                            : "white"
                        }`} style={{fontSize:'0.6rem'}}
                      >
                        {employee.Status}
                      </button>
        </td>
        <td>
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
    <div className="m-5 mt-3">
        <div className="main-head">
        <h4 className="fw-bold">Test Category</h4>
        </div>
        <div className="d-flex justify-content-between  mt-5 mb-3">
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
              <option value="Initiated">Initiated</option>
              <option value="Approved">Approved</option>
              <option value="Rejected">Rejected</option>
              <option value="Reinitiated">Reinitiated</option>
              <option value="Dropped">Dropped</option>
            </CFormSelect>
          </div>
          <div className="">
            <CButton  style={{fontSize:'0.9rem'}} color="primary" onClick={() => setAddModal(true)}>Add Test Category</CButton>
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
               <th style={{ background: "#5D76A9", color: "white"}}>Category Name</th>
               <th style={{ background: "#5D76A9", color: "white"}}>Unique Code</th>
               <th style={{ background: "#5D76A9", color: "white"}}>Description</th>
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
};
const StatusModal = (_props) => {
  return (
    <CModal alignment="center" visible={_props.visible} onClose={_props.closeModal}>
      <CModalHeader>
        <CModalTitle>Add Test Category</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <p>Add information of Test Category</p>

        <CFormInput
          className='mb-3'
          type="text"
          label="Name"
          placeholder="Category Name "
        />
        <CFormInput
          className='mb-3'
          type="text"
          label="Unique Code"
          placeholder="Unique Code "
        />
        <CFormInput
          className='mb-3'
          type="text"
          label="Description"
          placeholder="Description"
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
        <CModalTitle>Delete Test Category</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <p>Are you sure you want to delete this Test Category { }?</p>
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
