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
  const pageSize = 8;
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
    { user: 'environment', Date: 'May 17th 24 14:34', Status: 'ACTIVE' },
    { user: 'culture', Date: 'May 17th 24 14:34', Status: 'ACTIVE' },
    { user: 'working standard', Date: 'May 17th 24 14:34', Status: 'INACTIVE' },
    { user: 'culture 1', Date: 'May 17th 24 14:34', Status: 'ACTIVE' },
    { user: 'culture', Date: 'May 17th 24 14:34', Status: 'ACTIVE' },
    { user: 'environment', Date: 'May 17th 24 14:34', Status: 'INACTIVE' },
    { user: 'Initiated Product', Date: 'May 17th 24 14:34', Status: 'INACTIVE' },
    { user: 'environment', Date: 'May 17th 24 14:34', Status: 'ACTIVE' },
    { user: 'working standard', Date: 'May 17th 24 14:34', Status: 'ACTIVE' },
    { user: 'Initiated Product', Date: 'May 17th 24 14:34', Status: 'ACTIVE' },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [updatedUser, setUpdatedUser] = useState('');
  const [updatedStatus, setUpdatedStatus] = useState('');

  const filteredEmployees = employees.filter(employee =>
    statusFilter === '' || employee.Status.toLowerCase() === statusFilter.toLowerCase()
  );

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, filteredEmployees.length);

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
            <div className="cursor-pointer" onClick={() => openModal(employee, startIndex + index)}>
              <FontAwesomeIcon icon={faPenToSquare} />
            </div>
            <Link to="#" onClick={() => deleteEmployee(startIndex + index)}>
              <FontAwesomeIcon icon={faTrashCan} />
            </Link>
          </div>
        </td>
      </tr>
    ));
  };

  const deleteEmployee = (index) => {
    const updatedEmployees = employees.filter((_, i) => i !== index);
    setEmployees(updatedEmployees);
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

  const openModal = (employee, index) => {
    setSelectedEmployee({ ...employee, index });
    setUpdatedUser(employee.user);
    setUpdatedStatus(employee.Status);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEmployee(null);
  };

  const handleUpdate = () => {
    const updatedEmployees = [...employees];
    updatedEmployees[selectedEmployee.index] = {
      ...selectedEmployee,
      user: updatedUser,
      Status: updatedStatus
    };
    setEmployees(updatedEmployees);
    closeModal();
  };

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
