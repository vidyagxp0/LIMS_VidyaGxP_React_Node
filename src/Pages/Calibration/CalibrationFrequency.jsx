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
  const [deleteModal, setDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

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

  const DeleteModal = (_props) => {
    return (
      <CModal
        alignment="center"
        visible={_props.visible}
        onClose={_props.closeModal}
        size="lg"
      >
        <CModalHeader>
          <CModalTitle>Delete User</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p>Are you sure you want to delete this material?</p>
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
  
  const [employees, setEmployees] = useState([
    { id: 1, fieldName: 'Initiated Product', role: 'Sacubitril', departments: 'ARIP0000095', joiningDate: 'N/A', addedBy: 'RPS-TSLV-00', status: 'INACTIVE' },
    { id: 2, fieldName: 'Initiated Product', role: 'Sacubitril', departments: 'ARIP0000095', joiningDate: 'N/A', addedBy: 'RPS-TSLV-00', status: 'ACTIVE' },
    { id: 3, fieldName: 'Initiated Product', role: 'Sacubitril', departments: 'ARIP0000095', joiningDate: 'N/A', addedBy: 'RPS-TSLV-00', status: 'INACTIVE' },
    { id: 4, fieldName: 'test Product', role: 'Sacubitril', departments: 'ARIP0000095', joiningDate: 'N/A', addedBy: 'RPS-TSLV-00', status: 'ACTIVE' },
    { id: 5, fieldName: 'test Product', role: 'Sacubitril', departments: 'ARIP0000095', joiningDate: 'N/A', addedBy: 'RPS-TSLV-00', status: 'INACTIVE' },
    { id: 6, fieldName: 'test2 Product', role: 'Sacubitril', departments: 'ARIP0000095', joiningDate: 'N/A', addedBy: 'RPS-TSLV-00', status: 'ACTIVE' },
    { id: 7, fieldName: 'test2 Product', role: 'Sacubitril', departments: 'ARIP0000095', joiningDate: 'N/A', addedBy: 'RPS-TSLV-00', status: 'INACTIVE' },
    { id: 8, fieldName: 'Initiated Product', role: 'Sacubitril', departments: 'ARIP0000095', joiningDate: 'N/A', addedBy: 'RPS-TSLV-00', status: 'ACTIVE' },
    // add more employees as necessary
  ]);

  const handleDeleteClick = (id) => {
    setDeleteId(id);
    setDeleteModal(true);
  };

  const handleDeleteConfirm = () => {
    setEmployees((prevEmployees) =>
      prevEmployees.filter((employee) => employee.id !== deleteId)
    );
    setDeleteModal(false);
  };
  
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
      <tr key={employee.id}>
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
            <Link to="#" onClick={() => handleDeleteClick(employee.id)}>
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

      <div className="d-flex m-4 mt-5 justify-content-around">
        <CCol sm={4}>
          <CFormInput
            type="text"
            placeholder="Search..."
            style={{ border: "2px solid gray" }}
            className="border-2"
            value={searchTerm} onChange={handleSearchChange}
          />
        </CCol>

        <CCol sm={3}>
          <CFormSelect
           value={filterStatus} onChange={handleFilterChange}
            className="border-2"
            style={{ border: "2px solid gray" }}
            options={[
              { label: "All", value: "" },
              { label: "Active", value: "ACTIVE" },
              { label: "Inactive", value: "INACTIVE" },
            ]}
          />
        </CCol>

        <CCol sm={3}>
          <div className="d-flex justify-content-end">
            <CButton color="primary" onClick={() => setAddModal(true)}>
            Calibration Type
            </CButton>
          </div>
        </CCol>
      </div>

      <div className='border-dark-subtle border-2 bg-light mx-5 mt-5 mb-4 rounded'>
        <table className='table table-responsive table-striped text-xs' >
          <thead>
            <tr>
              <th style={{ background: "#3C496A", color: "white" }}><input type="checkbox" /></th>
              <th style={{ background: "#3C496A", color: "white" }}>Sr.no.</th>
              <th style={{ background: "#3C496A", color: "white" }}>Calibration Type</th>
              <th style={{ background: "#3C496A", color: "white" }}>Calibration Prefix</th>
              <th style={{ background: "#3C496A", color: "white" }}>Added On</th>
              <th style={{ background: "#3C496A", color: "white" }}>Status</th>
              <th style={{ background: "#3C496A", color: "white" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {renderRows()}
          </tbody>
        </table>
      </div>

      <div className="pagination mx-5" >
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

      {addModal && <StatusModal visible={addModal} closeModal={() => setAddModal(false)} />}
      {deleteModal && (
        <DeleteModal
          visible={deleteModal}
          closeModal={() => setDeleteModal(false)}
          confirmDelete={handleDeleteConfirm}
        />
      )}
    </>
  );
}
