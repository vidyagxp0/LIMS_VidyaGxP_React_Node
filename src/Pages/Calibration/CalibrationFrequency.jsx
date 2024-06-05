import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { CgAddR } from "react-icons/cg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  CButton,
  CCol,
  CFormInput,
  CFormSelect,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from "@coreui/react";

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
      <CModal
        alignment="center"
        visible={_props.visible}
        onClose={_props.closeModal}
      >
        <CModalHeader>
          <CModalTitle> Add Calibration Frequency</CModalTitle>
        </CModalHeader>
        <p className="ms-3 m-2">
          Add information and add new calibration frequency
        </p>
        <CModalBody>
          <CFormInput
            label="Calibration Frequency"
            className="mb-3"
            type="text"
            placeholder="Calibration Frequency"
          />
          <CFormInput
            label="Calibration Frequency Prefix"
            className="mb-3"
            type="text"
            placeholder="Type Prefix"
          />

          <div className="d-flex gap-3 mt-4">
            <CButton color="light w-50" onClick={_props.closeModal}>
              &lt; Back
            </CButton>
            <CButton color="primary w-50">Submit</CButton>
          </div>
        </CModalBody>
      </CModal>
    );
  };

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
          <p>Are you sure you want to delete this Calibration Frequency ?</p>
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
    {
      id: 1,
      fieldName: "Initiated Product",
      role: "Sacubitril",
      departments: "ARIP0000095",
      joiningDate: "N/A",
      addedBy: "RPS-TSLV-00",
      status: "INACTIVE",
    },
    {
      id: 2,
      fieldName: "Initiated Product",
      role: "Sacubitril",
      departments: "ARIP0000095",
      joiningDate: "N/A",
      addedBy: "RPS-TSLV-00",
      status: "ACTIVE",
    },
    {
      id: 3,
      fieldName: "Initiated Product",
      role: "Sacubitril",
      departments: "ARIP0000095",
      joiningDate: "N/A",
      addedBy: "RPS-TSLV-00",
      status: "INACTIVE",
    },
    {
      id: 4,
      fieldName: "test Product",
      role: "Sacubitril",
      departments: "ARIP0000095",
      joiningDate: "N/A",
      addedBy: "RPS-TSLV-00",
      status: "ACTIVE",
    },
    {
      id: 5,
      fieldName: "test Product",
      role: "Sacubitril",
      departments: "ARIP0000095",
      joiningDate: "N/A",
      addedBy: "RPS-TSLV-00",
      status: "INACTIVE",
    },
    {
      id: 6,
      fieldName: "test2 Product",
      role: "Sacubitril",
      departments: "ARIP0000095",
      joiningDate: "N/A",
      addedBy: "RPS-TSLV-00",
      status: "ACTIVE",
    },
    {
      id: 7,
      fieldName: "test2 Product",
      role: "Sacubitril",
      departments: "ARIP0000095",
      joiningDate: "N/A",
      addedBy: "RPS-TSLV-00",
      status: "INACTIVE",
    },
    {
      id: 8,
      fieldName: "Initiated Product",
      role: "Sacubitril",
      departments: "ARIP0000095",
      joiningDate: "N/A",
      addedBy: "RPS-TSLV-00",
      status: "ACTIVE",
    },
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
    return filteredEmployees
      .slice(startIndex, endIndex)
      .map((employee, index) => (
        <tr key={employee.id}>
          <td>
            <input type="checkbox" />
          </td>
          <td>{startIndex + index + 1}</td>
          <td>{employee.fieldName}</td>
          <td>{employee.role}</td>
          <td>{employee.addedBy}</td>
          <td>
            <button
              style={{
                background:
                  employee.status === "ACTIVE" ? "#15803d" : "#b91c1c",
                color: "white",
                width: "4rem",
                fontSize: "0.6rem",
                padding: "2px 7px",
                borderRadius: "7px",
              }}
            >
              {employee.status}
            </button>
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
    const updatedEmployees = employees.map((emp) =>
      emp === currentEmployee ? currentEmployee : emp
    );
    setEmployees(updatedEmployees);
    toast.success("Employee updated successfully");
    handleEditClose();
  };

  return (
    <>
      <div className="m-5 mt-3">
        <h4 className="fw-bold ">Calibration Frequency</h4>

        <CRow className="mt-5 mb-3">
          <CCol sm={4}>
            <CFormInput
              type="text"
              placeholder="Search..."
              style={{ fontSize: "0.9rem" }}
              className="border-2"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </CCol>

          <CCol sm={3}>
            <CFormSelect
              value={filterStatus}
              onChange={handleFilterChange}
              className="border-2"
              style={{ fontSize: "0.9rem" }}
              options={[
                { label: "All", value: "" },
                { label: "Active", value: "ACTIVE" },
                { label: "Inactive", value: "INACTIVE" },
              ]}
            />
          </CCol>

          <CCol sm={2}></CCol>
          <CCol sm={3}>
            <div className="d-flex justify-content-end">
              <CButton color="primary" style={{fontSize:'0.9rem'}} onClick={() => setAddModal(true)}>
                Calibration Type
              </CButton>
            </div>
          </CCol>
        </CRow>

        <div
          className=" rounded bg-white"
          style={{
            fontFamily: "sans-serif",
            fontSize: "0.9rem",
            boxShadow: "5px 5px 20px #5D76A9",
          }}
        >
          <table className="table table-responsive    text-xs">
            <thead>
              <tr>
                <th style={{ background: "#5D76A9", color: "white" }}>
                  <input type="checkbox" />
                </th>
                <th style={{ background: "#5D76A9", color: "white" }}>
                  Sr.no.
                </th>
                <th style={{ background: "#5D76A9", color: "white" }}>
                  Calibration Type
                </th>
                <th style={{ background: "#5D76A9", color: "white" }}>
                  Calibration Prefix
                </th>
                <th style={{ background: "#5D76A9", color: "white" }}>
                  Added On
                </th>
                <th style={{ background: "#5D76A9", color: "white" }}>
                  Status
                </th>
                <th style={{ background: "#5D76A9", color: "white" }}>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>{renderRows()}</tbody>
          </table>
        </div>

        <div className="d-flex justify-content-end align-items-center mt-4">
          <div className="pagination">
            <button
              style={{ background: "#21516a", color: "white" }}
              className="btn mr-2"
              onClick={prevPage}
              disabled={currentPage === 1}
            >
              &lt;&lt;
            </button>
            <button className="btn mr-2 bg-dark-subtle rounded-circle">
              {currentPage}
            </button>
            <button
              style={{ background: "#21516a", color: "white" }}
              className="btn mr-2"
              onClick={nextPage}
              disabled={endIndex >= employees.length}
            >
              &gt;&gt;
            </button>
          </div>
        </div>
      </div>

      {addModal && (
        <StatusModal visible={addModal} closeModal={() => setAddModal(false)} />
      )}
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
