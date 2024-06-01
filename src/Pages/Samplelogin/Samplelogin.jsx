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
} from "@coreui/react";
import React, { useState } from "react";
import "./Samplelogin.css";

import { FaArrowRight } from "react-icons/fa";

import { Link } from "react-router-dom";
import {
  faEye,
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Samplelogin() {
  const pageSize = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [addModal, setAddModal] = useState(false);

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
    {
      user: "Initiated Product",
      role: "Sacubitril",
      departments: "ARIP0000095",
      joiningDate: "N/A",
      addedBy: "RPS-TSLV-00",
      status: "INITIATED",
    },
    {
      user: "Initiated Product",
      role: "Sacubitril",
      departments: "ARIP0000095",
      joiningDate: "N/A",
      addedBy: "RPS-TSLV-00",
      status: "INITIATED",
    },
    {
      user: "Initiated Product",
      role: "Sacubitril",
      departments: "ARIP0000095",
      joiningDate: "N/A",
      addedBy: "RPS-TSLV-00",
      status: "APPROVED",
    },
    {
      user: "Initiated Product",
      role: "Sacubitril",
      departments: "ARIP0000095",
      joiningDate: "N/A",
      addedBy: "RPS-TSLV-00",
      status: "APPROVED",
    },
    {
      user: "Initiated Product",
      role: "Sacubitril",
      departments: "ARIP0000095",
      joiningDate: "N/A",
      addedBy: "RPS-TSLV-00",
      status: "REJECTED",
    },
    {
      user: "test Product",
      role: "Sacubitril",
      departments: "ARIP0000095",
      joiningDate: "N/A",
      addedBy: "RPS-TSLV-00",
      status: "APPROVED",
    },
    {
      user: "test Product",
      role: "Sacubitril",
      departments: "ARIP0000095",
      joiningDate: "N/A",
      addedBy: "RPS-TSLV-00",
      status: "DROPPED",
    },
    {
      user: "Initiated Product",
      role: "Sacubitril",
      departments: "ARIP0000095",
      joiningDate: "N/A",
      addedBy: "RPS-TSLV-00",
      status: "APPROVED",
    },
    {
      user: "test Product",
      role: "Sacubitril",
      departments: "ARIP0000095",
      joiningDate: "N/A",
      addedBy: "RPS-TSLV-00",
      status: "DROPPED",
    },
    {
      user: "Initiated Product",
      role: "Sacubitril",
      departments: "ARIP0000095",
      joiningDate: "N/A",
      addedBy: "RPS-TSLV-00",
      status: "APPROVED",
    },
  ]);

  const testData = [
    { sno: "1", testName: "Ph test", groupName: "", selection: false },
    { sno: "2", testName: "FG Assay Test", groupName: "", selection: true },
    { sno: "3", testName: "Water Ph test", groupName: "", selection: false },
  ];

  const filteredEmployees = employees.filter(
    (employee) =>
      (employee.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.role.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (statusFilter === "" || employee.status === statusFilter)
  );

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, filteredEmployees.length);

  const renderRows = () => {
    return filteredEmployees
      .slice(startIndex, endIndex)
      .map((employee, index) => (
        <tr key={startIndex + index}>
          <td>{startIndex + index + 1}</td>
          <td>{employee.user}</td>
          <td>{employee.role}</td>
          <td>{employee.departments}</td>
          <td>{employee.joiningDate}</td>
          <td>{employee.addedBy}</td>
          <td
            className="d-flex justify-content-center py-2 px-3 small rounded fw-bold"
            style={
              employee.status === "INITIATED"
                ? badgeStyle2
                : employee.status === "APPROVED"
                ? badgeStyle3
                : employee.status === "REJECTED"
                ? badgeStyle4
                : employee.status === "REINITIATED"
                ? badgeStyle5
                : employee.status === "DROPPED"
                ? badgeStyle6
                : employee.status === "ALL"
                ? badgeStyle
                : badgeStyle
            }
          >
            {employee.status}
          </td>
          <td>
            <div className="d-flex gap-3">
              <Link to="/viewDetails">
                <FontAwesomeIcon icon={faEye} />
              </Link>
              <div
                className="cursor-pointer"
                data-bs-toggle="offcanvas"
                data-bs-target="#updateSampleLogin"
                aria-controls="offcanvasRight"
              >
                <FontAwesomeIcon icon={faPenToSquare} />
              </div>
              <div
                className="cursor-pointer"
                onClick={() => deleteEmployee(startIndex + index)}
              >
                <FontAwesomeIcon icon={faTrashCan} />
              </div>
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
    const newEmployees = [...employees];
    newEmployees.splice(index, 1);
    setEmployees(newEmployees);
  };

  return (
    <>
      <div className="mx-5">
        <div className="main-head">
          <h4 className="fw-bold mb-4">Sample Login</h4>
        </div>
        <div>
          <CRow className="my-5">
            <CCol sm={4}>
              <CFormInput
                type="text"
                style={{ border: "2px solid gray" }}
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </CCol>
            <CCol sm={3}>
              <CFormSelect
                value={statusFilter}
                style={{ border: "2px solid gray" }}
                onChange={(e) => setStatusFilter(e.target.value)}
                options={[
                  "Select Status",
                  { label: "All", value: "" },
                  { label: "Initiated", value: "INITIATED" },
                  { label: "Approved", value: "APPROVED" },
                  { label: "Rejected", value: "REJECTED" },
                  { label: "Reinitiated", value: "REINITIATED" },
                  { label: "Dropped", value: "DROPPED" },
                ]}
              />
            </CCol>
            <CCol sm={2}></CCol>
            <CCol sm={3}>
              <div className="d-flex justify-content-end">
                <CButton color="primary" onClick={() => setAddModal(true)}>
                  {" "}
                  Add Sample Login
                </CButton>
              </div>
            </CCol>
          </CRow>
        </div>
        <div
          className="offcanvas offcanvas-end overflow-y-scroll"
          tabIndex="-1"
          id="addLoginSample"
          aria-labelledby="offcanvasRightLabel"
        >
          <div className="offcanvas-header ">
            <div id="line1">
              <h5 className="offcanvas-title" id="offcanvasRightLabel">
                Add Sample login
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
          <p className="m-3">Add information and add new sample login</p>

          <label className="line3" htmlFor="">
            Client
          </label>
          <input
            className="line4"
            required
            type="text"
            placeholder="Select..."
          />

          <label className="line3" htmlFor="">
            Test Plan / Revision No.
          </label>
          <input
            className="line4"
            required
            type="text"
            placeholder="Select..."
          />

          <label className="line3" htmlFor="">
            Product / Material
          </label>
          <input className="line4" required type="text" placeholder="Prefix" />

          <label className="line3" htmlFor="">
            Product / Material Code
          </label>
          <input className="line4" required type="text" placeholder="" />

          <label className="line3" htmlFor="">
            Generic Name
          </label>
          <input className="line4" required type="text" placeholder="" />

          <label className="line3" htmlFor="">
            Specification ID
          </label>
          <input className="line4" required type="text" placeholder="" />

          <label className="line3" htmlFor="">
            Copy Sample from
          </label>
          <input
            className="line4"
            required
            type="text"
            placeholder="Select..."
          />

          <label className="line3" htmlFor="">
            Sample Type
          </label>
          <input className="line4" required type="text" placeholder="" />

          <label className="line3" htmlFor="">
            Certificates (If any)
          </label>
          <input
            className="line4"
            required
            type="text"
            placeholder="Select..."
          />

          <div id="line5">
            <button
              type="button"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            >
              &lt; Back
            </button>
            <button>Add Sample</button>
          </div>
        </div>

        <div
          className="offcanvas offcanvas-end overflow-y-scroll w-50"
          tabIndex="-1"
          id="updateSampleLogin"
          aria-labelledby="offcanvasRightLabel"
        >
          <div className="offcanvas-header ">
            <div id="line1">
              <h5 className="offcanvas-title" id="offcanvasRightLabel">
                Update Sample login
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
          <p className="m-3">Update information and add new sample login</p>

          <label className="line3" htmlFor="">
            Client
          </label>
          <input
            className="line4"
            required
            type="text"
            placeholder="Select..."
          />

          <label className="line3" htmlFor="">
            Test Plan / Revision No.
          </label>
          <input
            className="line4"
            required
            type="text"
            placeholder="Select..."
          />

          <label className="line3" htmlFor="">
            Product / Material
          </label>
          <input className="line4" required type="text" placeholder="Prefix" />

          <label className="line3" htmlFor="">
            Product / Material Code
          </label>
          <input className="line4" required type="text" placeholder="" />

          <label className="line3" htmlFor="">
            Generic Name
          </label>
          <input className="line4" required type="text" placeholder="" />

          <label className="line3" htmlFor="">
            Specification ID
          </label>
          <input className="line4" required type="text" placeholder="" />

          <label className="line3" htmlFor="">
            Copy Sample from
          </label>
          <input
            className="line4"
            required
            type="text"
            placeholder="Select..."
          />

          <label className="line3" htmlFor="">
            Sample Type
          </label>
          <input className="line4" required type="text" placeholder="" />

          <label className="line3" htmlFor="">
            Certificates (If any)
          </label>
          <input
            className="line4"
            required
            type="text"
            placeholder="Select..."
          />

          <div className="bg-white rounded border-dark-subtle border-2 " >
            <CTable align="middle" responsive className="table-striped ">
              <thead>
                <tr>
                  <th className="bg-info text-light">Sno.</th>
                  <th className="bg-info text-light">Test Name</th>
                  <th className="bg-info text-light">Group Name</th>
                  <th className="bg-info text-light">Selection</th>
                </tr>
              </thead>
              <tbody>
                {testData.map((row, index) => (
                  <tr key={index} >
                    <td>{row.sno}</td>
                    <td>{row.testName}</td>
                    <td>{row.groupName}</td>
                    <td>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        checked={row.selection}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </CTable>
          </div>

          <div id="line5">
            <button
              type="button"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            >
              &lt; Back
            </button>
            <button>Add Sample</button>
          </div>
        </div>

        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="removeSampleLogin"
          aria-labelledby="offcanvasRightLabel"
        >
          <div className="offcanvas-header border-bottom pb-2 border-2 border-dark mx-3 px-0">
            <h5 className="offcanvas-title" id="offcanvasRightLabel">
              Delete Sample Type
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <p className="m-3">
              Do you want to delete this Sample Type <code>Hydraulic Oil</code>?
            </p>
            <div className="d-flex gap-4 my-5">
              <button
                className="btn btn-secondary w-100"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              >
                Back
              </button>
              <button className="btn btn-primary w-100">Submit</button>
            </div>
          </div>
        </div>

        <div
          className=" rounded    bg-white"
          style={{ border: "2px solid gray" }}
        >
          <table className="table table-striped ">
            <thead>
              <tr>
                <th style={{ background: "#3C496A", color: "white" }}>S.No.</th>
                <th style={{ background: "#3C496A", color: "white" }}>
                  Sample Type
                </th>
                <th style={{ background: "#3C496A", color: "white" }}>
                  Product / Material
                </th>
                <th style={{ background: "#3C496A", color: "white" }}>
                  A.R. No.
                </th>
                <th style={{ background: "#3C496A", color: "white" }}>
                  Generic Name
                </th>
                <th style={{ background: "#3C496A", color: "white" }}>
                  Specification code
                </th>
                <th style={{ background: "#3C496A", color: "white" }}>
                  Status
                </th>
                <th style={{ background: "#3C496A", color: "white" }}>
                  Actions{" "}
                </th>
              </tr>
            </thead>
            <tbody>{renderRows()}</tbody>
          </table>
        </div>

        <div className="pagination my-4">
          <div className="pagination">
            <div>
              <button
                className="btn  mr-2"
                onClick={prevPage}
                disabled={currentPage === 1}
              >
                &lt;&lt;
              </button>
            </div>
            <div className="current-page-number mr-2 bg-dark-subtle page-item">
              <button className="btn rounded-circle"> {currentPage} </button>
            </div>
            <div>
              <button
                className="btn mr-2"
                onClick={nextPage}
                disabled={endIndex >= filteredEmployees.length}
              >
                &gt;&gt;
              </button>
            </div>
          </div>
          <button
            className="btn btn-next d-flex align-items-center "
            onClick={nextToLastPage}
          >
            {" "}
            Next <FaArrowRight className="ms-2" />
          </button>
        </div>
      </div>
      {addModal && (
        <StatusModal visible={addModal} closeModal={() => setAddModal(false)} />
      )}
    </>
  );
}

const StatusModal = (_props) => {
  return (
    <CModal
      className="w-5"
      alignment="center"
      visible={_props.visible}
      onClose={_props.closeModal}
    >
      <CModalHeader>
        <CModalTitle>New Storage Condition</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CFormInput
          type="text"
          className="mb-3"
          label="Client"
          placeholder="Select..."
        />
        <CFormInput
          type="text"
          className="mb-3"
          label="Test Plan / Revision No."
          placeholder="Select..."
        />
        <CFormInput
          type="text"
          className="mb-3"
          label="Product / Material"
          placeholder=""
        />
        <CFormInput
          type="text"
          className="mb-3"
          label="Product / Material Code"
          placeholder=""
        />
        <CFormInput
          type="text"
          className="mb-3"
          label="Generic Name"
          placeholder=""
        />
        <CFormInput
          type="text"
          className="mb-3"
          label="Specification ID"
          placeholder=""
        />
        <CFormInput
          type="text"
          className="mb-3"
          label="Copy Sample from"
          placeholder=""
        />
        <CFormInput
          type="text"
          className="mb-3"
          label="Sample Type"
          placeholder=""
        />
        <CFormInput
          type="text"
          className="mb-3"
          label="Certificates (If any)"
          placeholder=""
        />
      </CModalBody>
      <CModalFooter>
        <CButton color="light" onClick={_props.closeModal}>
          Back
        </CButton>
        <CButton color="primary">Add Sample</CButton>
      </CModalFooter>
    </CModal>
  );
};
