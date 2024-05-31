import React, { useState } from 'react';
import { HiDotsHorizontal } from "react-icons/hi";
import { CgAddR, CgCalendarDates } from 'react-icons/cg';
import { FaArrowRight } from 'react-icons/fa';
import { IoEyeSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { faEye, faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CTable } from '@coreui/react';

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
    {id: 1, user: 'environment', Date: 'May 17th 24 14:34', Status: 'ACTIVE' },
    {id: 2, user: 'culture', Date: 'May 17th 24 14:34', Status: 'ACTIVE' },
    {id: 3, user: 'working standard', Date: 'May 17th 24 14:34', Status: 'INACTIVE' },
    {id: 4, user: 'culture 1', Date: 'May 17th 24 14:34', Status: 'ACTIVE' },
    {id: 5, user: 'culture', Date: 'May 17th 24 14:34', Status: 'ACTIVE' },
    {id: 6, user: 'environment', Date: 'May 17th 24 14:34', Status: 'INACTIVE' },
    {id: 7, user: 'Initiated Product', Date: 'May 17th 24 14:34', Status: 'INACTIVE' },
    {id: 8, user: 'environment', Date: 'May 17th 24 14:34', Status: 'ACTIVE' },
    {id: 9, user: 'working standard', Date: 'May 17th 24 14:34', Status: 'ACTIVE' },
    {id: 10, user: 'Initiated Product', Date: 'May 17th 24 14:34', Status: 'ACTIVE' },
  ]);

  const filteredEmployees = employees.filter(employee =>
    selectedStatus === 'All' ? true : employee.status.toUpperCase() === selectedStatus.toUpperCase()
  );

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, employees.length);


  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const [selectedEmployee, setSelectedEmployee] = useState(null);
  // const [updatedUser, setUpdatedUser] = useState('');
  // const [updatedStatus, setUpdatedStatus] = useState('');

  // const filteredEmployees = employees.filter(employee =>
  //   statusFilter === '' || employee.Status.toLowerCase() === statusFilter.toLowerCase()
  // );

  // const startIndex = (currentPage - 1) * pageSize;
  // const endIndex = Math.min(startIndex + pageSize, filteredEmployees.length);

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

  // const deleteEmployee = (index) => {
  //   const updatedEmployees = employees.filter((_, i) => i !== index);
  //   setEmployees(updatedEmployees);
  // };

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

  // const openModal = (employee, index) => {
  //   setSelectedEmployee({ ...employee, index });
  //   setUpdatedUser(employee.user);
  //   setUpdatedStatus(employee.Status);
  //   setIsModalOpen(true);
  // };

  // const closeModal = () => {
  //   setIsModalOpen(false);
  //   setSelectedEmployee(null);
  // };

  // const handleUpdate = () => {
  //   const updatedEmployees = [...employees];
  //   updatedEmployees[selectedEmployee.index] = {
  //     ...selectedEmployee,
  //     user: updatedUser,
  //     Status: updatedStatus
  //   };
  //   setEmployees(updatedEmployees);
  //   closeModal();
  // };

  return (
    <>
      <div id="div1">
        <h5 style={{fontWeight:"bolder"}}>Specifications Type</h5>
      </div>

      <div id="div2" className='p-5'>
        <div className="dropdown">
          <div>
            <button className="btn border" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              
              <select id='selectOption' style={{border:"2px solid gray", width:"250px", borderRadius:"5px", padding:"4px" }} onChange={(e) => setStatusFilter(e.target.value)}>
                <option value="">Select Status</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </button>
          </div>
        </div>
      </div>

      <div className="m-4 rounded   bg-white" style={{border:"2px solid gray"}}>
          <CTable align="middle" responsive className="mb-0 table-striped table-responsive">
          <thead>
            <tr>
              <th style={{background:"#3C496A", color:"white"}}>Sr.no.</th>
              <th style={{background:"#3C496A", color:"white"}}>Specification Type</th>
              <th style={{background:"#3C496A", color:"white"}}>Added On</th>
              <th style={{background:"#3C496A", color:"white"}}>Status</th>
              <th style={{background:"#3C496A", color:"white"}}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {renderRows()}
          </tbody>
        </CTable>
      </div>

      <div className="pagination">
        <div className="pagination" style={{ margin: '0 35px' }}>
          <div className='mr-5'>
            <button className="btn mr-2" onClick={prevPage} disabled={currentPage === 1}>&lt;&lt;</button>
          </div>
          <div className="current-page-number mr-2 bg-dark-subtle page-item">
            <button className='btn rounded-circle'> {currentPage} </button>
          </div>
          <div>
            <button className="btn mr-2" onClick={nextPage} disabled={endIndex >= filteredEmployees.length}>&gt;&gt;</button>
          </div>
        </div>
        <button className="btn btn-next" style={{ margin: '0 35px' }} onClick={nextToLastPage}> Next <FaArrowRight /></button>
      </div>

      {isModalOpen && (
        <div className="modal" style={{ display: 'block' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Update Employee</h5>
                <button type="button" className="close" onClick={closeModal}>
                  <span>&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <label>Specification Type</label>
                  <input
                    type="text"
                    className="form-control"
                    value={updatedUser}
                    onChange={(e) => setUpdatedUser(e.target.value)}
                  />
                </div>
               
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={closeModal}>Close</button>
                <button type="button" className="btn btn-primary" onClick={handleUpdate}>Save changes</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
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
