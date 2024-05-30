import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { CgAddR } from "react-icons/cg";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CButton, CCol, CFormInput, CFormSelect, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react"

export default function CalibrationFrequency() {
  const [addModal, setAddModal] = useState(false);

  const [storageName, setStorageName] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [currentEmployee, setCurrentEmployee] = useState(null);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [employeeToDelete, setEmployeeToDelete] = useState(null);

  const badgeStyle = { background: "gray", color: "white", width: "110px" };
  const badgeStyle3 = { background: "green", color: "white", width: "110px" };
  const badgeStyle4 = { background: "red", color: "white", width: "110px" };

  const StatusModal = (_props) => {
    return (
        <CModal alignment="center" visible={_props.visible} onClose={_props.closeModal}>
        <CModalHeader>
          <CModalTitle> Add Calibration Frequency</CModalTitle>
        </CModalHeader>
          <p className='ms-3 m-2'>Add information and add new calibration frequency</p>
        <CModalBody>
        <CFormInput
          label='Calibration Frequency'
          className="mb-3"
          type="text"
          placeholder="Calibration Frequency"
          />  
          <CFormInput
          label='Calibration Frequency Prefix'
          className="mb-3"
          type="text"
          placeholder="Type Prefix"
          /> 
         
         <div className="d-flex gap-3 mt-4">
        <CButton color="light w-50" onClick={_props.closeModal}>&lt; Back</CButton>
        <CButton color="primary w-50">Submit</CButton>
      </div>
        </CModalBody>
      </CModal>
    )
  }

  const [employees, setEmployees] = useState([
    { fieldName: 'Initiated Product', role: 'Sacubitril', departments: 'ARIP0000095', joiningDate: 'N/A', addedBy: 'RPS-TSLV-00', status: 'INACTIVE' },
    { fieldName: 'Initiated Product', role: 'Sacubitril', departments: 'ARIP0000095', joiningDate: 'N/A', addedBy: 'RPS-TSLV-00', status: 'ACTIVE' },
    { fieldName: 'Initiated Product', role: 'Sacubitril', departments: 'ARIP0000095', joiningDate: 'N/A', addedBy: 'RPS-TSLV-00', status: 'ACTIVE' },
    { fieldName: 'Initiated Product', role: 'Sacubitril', departments: 'ARIP0000095', joiningDate: 'N/A', addedBy: 'RPS-TSLV-00', status: 'ACTIVE' },
    { fieldName: 'Test Product', role: 'Sacubitril', departments: 'ARIP0000095', joiningDate: 'N/A', addedBy: 'RPS-TSLV-00', status: 'INACTIVE' },
    { fieldName: 'Test Product', role: 'Sacubitril', departments: 'ARIP0000095', joiningDate: 'N/A', addedBy: 'RPS-TSLV-00', status: 'INACTIVE' },
    { fieldName: 'Test Product', role: 'Sacubitril', departments: 'ARIP0000095', joiningDate: 'N/A', addedBy: 'RPS-TSLV-00', status: 'ACTIVE' },
    { fieldName: 'Test Product', role: 'Sacubitril', departments: 'ARIP0000095', joiningDate: 'N/A', addedBy: 'RPS-TSLV-00', status: 'ACTIVE' },
    { fieldName: 'Test Product', role: 'Sacubitril', departments: 'ARIP0000095', joiningDate: 'N/A', addedBy: 'RPS-TSLV-00', status: 'ACTIVE' },{ fieldName: 'Initiated Product', role: 'Sacubitril', departments: 'ARIP0000095', joiningDate: 'N/A', addedBy: 'RPS-TSLV-00', status: 'ACTIVE' },
    { fieldName: 'Initiated Product', role: 'Sacubitril', departments: 'ARIP0000095', joiningDate: 'N/A', addedBy: 'RPS-TSLV-00', status: 'ACTIVE' },
    { fieldName: 'Test Product', role: 'Sacubitril', departments: 'ARIP0000095', joiningDate: 'N/A', addedBy: 'RPS-TSLV-00', status: 'INACTIVE' },
    { fieldName: 'Test Product', role: 'Sacubitril', departments: 'ARIP0000095', joiningDate: 'N/A', addedBy: 'RPS-TSLV-00', status: 'INACTIVE' },
    { fieldName: 'Test Product', role: 'Sacubitril', departments: 'ARIP0000095', joiningDate: 'N/A', addedBy: 'RPS-TSLV-00', status: 'ACTIVE' },
    { fieldName: 'Test Product', role: 'Sacubitril', departments: 'ARIP0000095', joiningDate: 'N/A', addedBy: 'RPS-TSLV-00', status: 'ACTIVE' },
    { fieldName: 'Test Product', role: 'Sacubitril', departments: 'ARIP0000095', joiningDate: 'N/A', addedBy: 'RPS-TSLV-00', status: 'ACTIVE' },
  ]);

  const pageSize = 5;
  const [currentPage, setCurrentPage] = useState(1);

 
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilterStatus(e.target.value);
  };

  const filteredEmployees = employees.filter((employee) => {
    const fieldName = employee.fieldName || "";
    const status = employee.status || "";

    return (
      fieldName.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filterStatus === "" || status === filterStatus)
    );
  });

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, filteredEmployees.length);

  const renderRows = () => {
    return filteredEmployees.slice(startIndex, endIndex).map((employee, index) => (
      <tr key={startIndex + index}>
        <td><input type="checkbox" /></td>
        <td>{startIndex + index + 1}</td>
        <td>{employee.fieldName}</td>
        <td>{employee.role}</td>
        <td>{employee.addedBy}</td>
        <td>  
          <div
            className="d-flex justify-content-center py-2 px-3 small rounded fw-bold"
            style={
              employee.status === "ACTIVE"
                ? badgeStyle3
                : employee.status === "INACTIVE"
                ? badgeStyle4
                : badgeStyle
            }
          > 
            {employee.status}
          </div>
        </td>
        <td>
          <div className="d-flex gap-3">
            <div onClick={() => setAddModal(true)}>
              <FontAwesomeIcon icon={faPenToSquare} />
            </div>
            <Link to="#" onClick={() => confirmDeleteEmployee(index)}>
              <FontAwesomeIcon icon={faTrashCan} />
            </Link>
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

  const confirmDeleteEmployee = (index) => {
    setShowDeleteConfirmation(true);
    setEmployeeToDelete(startIndex + index);
  };

  const deleteEmployee = () => {
    const updatedEmployees = [...employees];
    updatedEmployees.splice(employeeToDelete, 1);
    setEmployees(updatedEmployees);
    setShowDeleteConfirmation(false);
    setEmployeeToDelete(null);
    toast.success("Employee deleted successfully");
  };

  const handleEdit = (employee) => {
    setCurrentEmployee(employee);
    setIsEditing(true);
  };

  const handleEditClose = () => {
    setIsEditing(false);
    setCurrentEmployee(null);
  };

  const handleEditSubmit = () => {
    const updatedEmployees = employees.map(emp =>
      emp === currentEmployee ? currentEmployee : emp
    );
    setEmployees(updatedEmployees);
    toast.success("Employee updated successfully");
    handleEditClose();
  };

  return (
    <>
      <div id="div1">
        <h5>Calibration Frequency</h5>
      </div>

      <div id="div2" style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div id="searchmain">
          <div id="searchicon">
            <CiSearch />
          </div>
          <div className="">
            <input type="text" className="" id="" placeholder="search" value={searchTerm} onChange={handleSearchChange} />
          </div>
        </div>

        <div className="dropdown">
          <div>
            <button className="btn border" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <select id='selectOption' value={filterStatus} onChange={handleFilterChange} style={{ outline: 'none' }}>
                <option value="">Select Status</option>
                <option value="ACTIVE">Active</option>
                <option value="INACTIVE">Inactive</option>
              </select>
            </button>
          </div>
        </div>

        <button
          id=""
          className="btn btn-primary m-5"
          type="button"
          onClick={() => setAddModal(true)}
        >
          <span style={{ fontSize: '14px', fontWeight: 'bold', marginLeft: '5px' }}>Calibration Type</span>
        </button>

      </div>

      <br />
      <div className='table-responsive p-4 container1'>
        <table className='table shadow' style={{ fontSize: '0.8rem', margin: '0px auto', width: '98%' }}>
          <thead>
            <tr>
              <th><input type="checkbox" /></th>
              <th>Sr.no.</th>
              <th>Calibration Type</th>
              <th>Calibration Prefix</th>
              <th>Added On</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {renderRows()}
          </tbody>
        </table>
      </div>

      <div className="pagination" style={{ margin: '0 35px' }}>
        <div className="pagination ">
          <div>
            <button className="btn mr-2" onClick={prevPage} disabled={currentPage === 1}>&lt;&lt;</button>
          </div>
          <div className="current-page-number mr-2 bg-dark-subtle page-item">
            <button className='btn rounded-circle'> {currentPage} </button>
          </div>
          <div>
            <button className="btn mr-2" onClick={nextPage} disabled={endIndex >= filteredEmployees.length}>&gt;&gt;</button>
          </div>
        </div>
        <button className="btn btn-next d-flex align-items-center" onClick={nextPage}> Next <FaArrowRight className="ms-2"/></button>
      </div>

      {showDeleteConfirmation && (
        <div className="modal show" style={{ display: 'block' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Confirm Delete</h5>
                <button type="button" className="close" onClick={() => setShowDeleteConfirmation(false)}>
                  <span>&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p>Are you sure you want to delete this employee?</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowDeleteConfirmation(false)}>Cancel</button>
                <button type="button" className="btn btn-primary" onClick={deleteEmployee}>Delete</button>
              </div>
            </div>
          </div>
        </div>
      )}

     
{addModal && <StatusModal visible={addModal} closeModal={() => setAddModal(false)} />}
    </>
  );
}
