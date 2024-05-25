import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { CgAddR } from "react-icons/cg";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CalibrationFrequency() {
  const [storageName, setStorageName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [currentEmployee, setCurrentEmployee] = useState(null);
  const [employees, setEmployees] = useState([
    { user: 'Initiated Product', role: 'Sacubitril', departments: 'ARIP0000095', joiningDate: 'N/A', addedBy: 'RPS-TSLV-00', status: 'INACTIVE' },
    { user: 'Initiated Product', role: 'Sacubitril', departments: 'ARIP0000095', joiningDate: 'N/A', addedBy: 'RPS-TSLV-00', status: 'ACTIVE' },
    { user: 'Initiated Product', role: 'Sacubitril', departments: 'ARIP0000095', joiningDate: 'N/A', addedBy: 'RPS-TSLV-00', status: 'ACTIVE' },
    { user: 'Initiated Product', role: 'Sacubitril', departments: 'ARIP0000095', joiningDate: 'N/A', addedBy: 'RPS-TSLV-00', status: 'ACTIVE' },
    { user: 'Test Product', role: 'Sacubitril', departments: 'ARIP0000095', joiningDate: 'N/A', addedBy: 'RPS-TSLV-00', status: 'ACTIVE' },
    { user: 'Test Product', role: 'Sacubitril', departments: 'ARIP0000095', joiningDate: 'N/A', addedBy: 'RPS-TSLV-00', status: 'ACTIVE' },
    { user: 'Test Product', role: 'Sacubitril', departments: 'ARIP0000095', joiningDate: 'N/A', addedBy: 'RPS-TSLV-00', status: 'ACTIVE' },{ user: 'Test Product', role: 'Sacubitril', departments: 'ARIP0000095', joiningDate: 'N/A', addedBy: 'RPS-TSLV-00', status: 'ACTIVE' },
    { user: 'Test Product', role: 'Sacubitril', departments: 'ARIP0000095', joiningDate: 'N/A', addedBy: 'RPS-TSLV-00', status: 'ACTIVE' },
  ]);

  const pageSize = 8;
  const [currentPage, setCurrentPage] = useState(1);

  const handleAddStorage = () => {
    if (storageName.trim() === "") {
      setErrorMessage("Storage condition is Required");
    } else {
      toast.warning("Apologies, an unexpected error occurred while adding the Storage Condition.");
    }
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilterStatus(e.target.value);
  };

  const filteredEmployees = employees.filter(employee => {
    const matchesSearch = employee.role.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === "" || employee.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, filteredEmployees.length);

  const renderRows = () => {
    return filteredEmployees.slice(startIndex, endIndex).map((employee, index) => (
      <tr key={startIndex + index}>
        <td><input type="checkbox" /></td>
        <td>{startIndex + index + 1}</td>
        <td>{employee.user}</td>
        <td>{employee.role}</td>
        <td>{employee.addedBy}</td>
        <td className={`rounded-5 ${employee.status === 'ACTIVE' ? 'bg-success' : 'bg-warning'} bg-opacity-25 text-${employee.status === 'ACTIVE' ? 'success' : 'warning'} d-flex justify-content-center p-1 m-2`}>{employee.status}</td>
        <td>
          <div className="d-flex gap-3">
            <div className="cursor-pointer" onClick={() => handleEdit(employee)}>
              <FontAwesomeIcon icon={faPenToSquare} />
            </div>
            <Link to="#" onClick={() => deleteEmployee(index)}>
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

  const deleteEmployee = (index) => {
    const updatedEmployees = [...employees];
    updatedEmployees.splice(startIndex + index, 1);
    setEmployees(updatedEmployees);
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
              <select id='selectOption' value={filterStatus} onChange={handleFilterChange}>
                <option value="">Select Status</option>
                <option value="ACTIVE">Active</option>
                <option value="INACTIVE">Inactive</option>
              </select>
            </button>
          </div>
        </div>

        <button
          id="Addbtn"
          className="btn btn-primary m-5"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
        >
          <CgAddR /> <span style={{ fontSize: '14px', fontWeight: 'bold', marginLeft: '5px' }}>Calibration Type</span>
        </button>

        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasRight"
          aria-labelledby="offcanvasRightLabel"
        >
          <div className="offcanvas-header">
            <div id="line1">
              <h5 className="offcanvas-title" id="offcanvasRightLabel">
                Add Calibration Frequency
              </h5>
              <button
                id="closebtn"
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
          </div>
          <p style={{ marginLeft: '20px' }}>Add information and add new calibration frequency</p>

          <label id="line3" htmlFor="">Calibration Frequency</label>
          <input id="line4" required type="text" placeholder="Calibration type" />

          <label id="line3" htmlFor="">Calibration Frequency Prefix</label>
          <input id="line4" required type="text" placeholder="type prefix" />

          <div id="line5">
            <button
              type="button"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            >
              &lt; Back
            </button>
            <button>Submit</button>
          </div>
          <div>
            <ToastContainer />
          </div>
        </div>
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
        <button className="btn btn-next" onClick={nextToLastPage}> Next <FaArrowRight /></button>
      </div>

      {isEditing && (
        <div className="modal" style={{ display: 'block' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Employee</h5>
                <button type="button" className="close" onClick={handleEditClose}>
                  <span>&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label>Calibration Type</label>
                    <input type="text" className="form-control" value={currentEmployee.role} onChange={(e) => setCurrentEmployee({ ...currentEmployee, role: e.target.value })} />
                  </div>
                  <div className="form-group">
                    <label>Calibration Prefix</label>
                    <input type="text" className="form-control" value={currentEmployee.departments} onChange={(e) => setCurrentEmployee({ ...currentEmployee, departments: e.target.value })} />
                  </div>
                  <div className="form-group">
                    <label>Status</label>
                    <select className="form-control" value={currentEmployee.status} onChange={(e) => setCurrentEmployee({ ...currentEmployee, status: e.target.value })}>
                      <option value="ACTIVE">Active</option>
                      <option value="INACTIVE">Inactive</option>
                    </select>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleEditClose}>Close</button>
                <button type="button" className="btn btn-primary" onClick={handleEditSubmit}>Save changes</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
