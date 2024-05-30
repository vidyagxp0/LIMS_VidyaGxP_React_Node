import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";
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

const Users = () => {
  const [addModal, setAddModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const pageSize = 5; // Number of items per page
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState("All");
  const badgeStyle = { background: "green", color: "white", width: "110px" };
  const badgeStyle2 = { background: " red", color: "white", width: "110px" };

  const employees = [
    {
      id: "USER-022024-000001",
      user: "John Doe",
      role: "admin",
      departments: "QC",
      joiningDate: "2024-05-15",
      addedBy: "admin",
      status: "Active",
    },
    {
      id: "USER-022024-000002",
      user: "Jane Smith",
      role: "admin",
      departments: "QC",
      joiningDate: "2024-05-16",
      addedBy: "admin",
      status: "Inactive",
    },
    {
      id: "USER-022024-000003",
      user: "John Doe",
      role: "admin",
      departments: "QC",
      joiningDate: "2024-05-15",
      addedBy: "admin",
      status: "Active",
    },
    {
      id: "USER-022024-000004",
      user: "Jane Smith",
      role: "qa",
      departments: "QC",
      joiningDate: "2024-05-16",
      addedBy: "admin",
      status: "Inactive",
    },
    {
      id: "USER-022024-000005",
      user: "John Doe",
      role: "qa",
      departments: "QC",
      joiningDate: "2024-05-15",
      addedBy: "admin",
      status: "Active",
    },
    {
      id: "USER-022024-000006",
      user: "Jane Smith",
      role: "qc",
      departments: "QC",
      joiningDate: "2024-05-16",
      addedBy: "admin",
      status: "Inactive",
    },
    {
      id: "USER-022024-000007",
      user: "John Doe",
      role: "analyst",
      departments: "QC",
      joiningDate: "2024-05-15",
      addedBy: "admin",
      status: "Active",
    },
    {
      id: "USER-022024-000008",
      user: "Jane Smith",
      role: "mgr",
      departments: "QC",
      joiningDate: "2024-05-16",
      addedBy: "admin",
      status: "Inactive",
    },
    {
      id: "USER-022024-000009",
      user: "John Doe",
      role: "si",
      departments: "QC",
      joiningDate: "2024-05-15",
      addedBy: "admin",
      status: "Active",
    },
    {
      id: "USER-022024-0000010",
      user: "Jane Smith",
      role: "qa",
      departments: "QC",
      joiningDate: "2024-05-16",
      addedBy: "admin",
      status: "Inactive",
    },
  ];

  const filteredEmployees = employees.filter((employee) =>
    selectedStatus === "All"
      ? true
      : employee.status.toUpperCase() === selectedStatus.toUpperCase()
  );

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, filteredEmployees.length);

  // Function to render table rows for current page
  const renderRows = () => {
    return filteredEmployees
      .slice(startIndex, endIndex)
      .map((employee, index) => (
        <tr key={startIndex + index}>
          <td>{startIndex + index + 1}</td>
          <td>{employee.id}</td>
          <td>{employee.user}</td>
          <td>{employee.role}</td>
          <td>{employee.departments}</td>
          <td>{employee.joiningDate}</td>
          <td>
            {" "}
            <button
              style={{
                background: employee.status === "Active" ? "green" : "red",
                color: "white",
                width: "110px",
              }}
              className=" btn d-flex py-2 px-3  small rounded fw-bold"
            >
              {" "}
              {employee.status}
            </button>
          </td>

          <td>{employee.addedBy}</td>
          <td>
            <div className="d-flex gap-3">
              <div className="cursor-pointer" onClick={() => setAddModal(true)}>
                <FontAwesomeIcon icon={faPenToSquare} />
              </div>
              <div
                className="cursor-pointer"
                onClick={() => handleDeleteClick(employee.id)}
              >
                <FontAwesomeIcon icon={faTrashCan} />
              </div>
            </div>
          </td>
        </tr>
      ));
  };

  // Function to handle pagination
  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const nextToLastPage = () => {
    setCurrentPage(Math.ceil(filteredEmployees.length / pageSize));
  };

  const handleDelete = () => {
    console.log(`Deleting employee: ${selectedEmployee.name}`);
    setSelectedEmployee(null);
  };
  const handleDeleteClick = (id) => {
    setDeleteId(id);
    setDeleteModal(true);
  };

  const handleDeleteConfirm = () => {
    setData(employees.filter((employee) => employee.id !== deleteId));
    setDeleteModal(false);
  };

  return (
    <div className=" mx-5 ">
      <div className="row my-5 ">
        <div className="main-head">
          <div className="title fw-bold fs-5 py-4">User Management/Users</div>
        </div>
        <div className="d-flex justify-content-between my-3">
          <div className="dropdown">
            <button
              className="btn border btn-block"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
             
              <select
                style={{border:"2px solid gray", width:"250px", borderRadius:"5px", padding:"4px" }}
                id="selectOption"
                onChange={(e) => {
                  setSelectedStatus(e.target.value);
                  setCurrentPage(1);
                }}
              >
                <option value="All">All</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </button>
          </div>
          <div className="">
            <CButton color="primary" onClick={() => setAddModal(true)}>
              Add User
            </CButton>
          </div>
        </div>
      </div>

      {/* Employee table */}
      <div className=" rounded    bg-white" style={{ border: "2px solid gray" }}>
        {" "}
        <table className="table table-striped">
          <thead>
            <tr>
              <th style={{ background: "#3C496A", color: "white" }}>S.No.</th>
              <th style={{ background: "#3C496A", color: "white" }}>User ID</th>
              <th style={{ background: "#3C496A", color: "white" }}>User</th>
              <th style={{ background: "#3C496A", color: "white" }}>Role</th>
              <th style={{ background: "#3C496A", color: "white" }}>
                Departments
              </th>
              <th style={{ background: "#3C496A", color: "white" }}>
                Joining Date
              </th>
              <th style={{ background: "#3C496A", color: "white" }}>Status</th>
              <th style={{ background: "#3C496A", color: "white" }}>
                Added By
              </th>
              <th style={{ background: "#3C496A", color: "white" }}>Action</th>
            </tr>
          </thead>
          <tbody>{renderRows()}</tbody>
        </table>
      </div>

      {/* Pagination */}

      <div className="d-flex justify-content-between align-items-center mt-5">
        <div className="pagination">
          <button
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
            className="btn mr-2"
            onClick={nextPage}
            disabled={endIndex >= employees.length}
          >
            &gt;&gt;
          </button>
        </div>
        <button
          className="btn d-flex align-items-center "
          onClick={nextToLastPage}
        >
          Next <FaArrowRight className="ms-2" />
        </button>
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
    </div>
  );
};

const StatusModal = (_props) => {
  return (
    <>
      <CModal
        alignment="center"
        visible={_props.visible}
        onClose={_props.closeModal}
      >
        <CModalHeader>
          <CModalTitle>Add User </CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CFormInput type="text" label="User Name" placeholder="UserName " />
          <CFormInput
            type="number"
            label="Contact Number"
            placeholder="+91 0000000000 "
          />
          <CFormInput
            type="email"
            label="Gmail Address"
            placeholder=" sample@gmail.com"
          />

          <CFormInput type="text" label="Address" placeholder="Address " />

          <CFormSelect
            type="select"
            label="Plant"
            placeholder="Select... "
            options={[
              "Select...",
              { label: "Master", value: "Master" },
              { label: "win_Master", value: "win_Master" },
              { label: "plant3", value: "plant3" },
              { label: "PlantDemo4", value: "PlantDemo4" },
            ]}
          />
          <CFormSelect
            type="select"
            label="Department"
            placeholder="Select Department"
            options={[
              "Select Department",
              { label: "Admin", value: "Admin" },
              { label: "Quality Assurance", value: "Quality Assurance" },
              { label: "Quality Check", value: "Quality Check" },
              { label: "Store", value: "Store" },
            ]}
          />
          <CFormSelect
            type="select"
            label="Role"
            placeholder="Select Role "
            options={[
              "Select Role",
              { label: "No Options", value: "No Options" },
            ]}
          />
        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={_props.closeModal}>
            Back
          </CButton>
          <CButton color="primary">Submit</CButton>
        </CModalFooter>
      </CModal>
    </>
  );
};

const DeleteModal = (_props) => {
  return (
    <>
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
          <p>Are you sure you want to delete this user {} ?</p>
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
            onClick={_props.handleDelete}
            style={{
              fontWeight: "500",
              color: "white",
            }}
          >
            Delete
          </CButton>
        </CModalFooter>
      </CModal>
    </>
  );
};

export default Users;
