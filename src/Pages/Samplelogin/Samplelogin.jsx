import { CButton, CCol, CFormInput, CFormSelect, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react"
import React, { useState } from "react";
import "./Samplelogin.css";
import { GrLinkNext } from "react-icons/gr";

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
  const [addModal2, setAddModal2] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

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
  
  const DeleteModal = (_props) => {
    return (
      <CModal alignment="center" visible={_props.visible} onClose={_props.closeModal} size="lg">
        <CModalHeader>
          <CModalTitle>Delete User</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p>Are you sure you want to delete this storage?</p>
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
  
  const StatusModal2 = (_props) => {
    return (
      <CModal alignment="center" visible={_props.visible} onClose={_props.closeModal2}>
        <CModalHeader>
          <CModalTitle>Update Sample login</CModalTitle>
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
  
  <div className="bg-white rounded border-dark-subtle border-2 " >
              <CTable align="middle" responsive className="   ">
                <thead>
                  <tr>
                    <th className="bg-info text-light">Sno.</th>
                    <th className="bg-info text-light">Test Name</th>
                    <th className="bg-info text-light">Group Name</th>
                    <th className="bg-info text-light">Selection</th>
                  </tr>
                </thead>
                <tbody>
                
                    <tr >
                      <td>1.</td>
                      <td>Viscosity @40C</td>
                      <td></td>
                      <td>
                        <input
                          className="form-check-input"
                          type="checkbox"
                        />
                      </td>
                    </tr>
                 <tr >
                      <td>2.</td>
                      <td>Total Acid Number (TAN)</td>
                      <td></td>
                      <td>
                        <input
                          className="form-check-input"
                          type="checkbox"
                        />
                      </td>
                    </tr>
                <tr >
                      <td>3.</td>
                      <td>
Water Content PPM</td>
                      <td></td>
                      <td>
                        <input
                          className="form-check-input"
                          type="checkbox"
                        />
                      </td>
                    </tr>
                
                </tbody>
              </CTable>
            </div>
  
  
          <div className="d-flex gap-3 mt-4">
            <CButton color="light w-50" onClick={_props.closeModal2}>&lt; Back</CButton>
            <CButton color="primary w-50">Update Sample</CButton>
          </div>
        
        </CModalBody>
      </CModal>
    )
  }
  
    const [employee, setEmployees] = useState([
      {
        id:1,  user: "Initiated Product",
        role: "Sacubitril",
        departments: "ARIP0000095",
        joiningDate: "N/A",
        addedBy: "RPS-TSLV-00",
        status: "INITIATED",
      },
      {
       id:2, user: "Initiated Product",
        role: "Sacubitril",
        departments: "ARIP0000095",
        joiningDate: "N/A",
        addedBy: "RPS-TSLV-00",
        status: "INITIATED",
      },
      {
        id:3, user: "Initiated Product",
        role: "Sacubitril",
        departments: "ARIP0000095",
        joiningDate: "N/A",
        addedBy: "RPS-TSLV-00",
        status: "APPROVED",
      },
      {
        id:4,user: "Initiated Product",
        role: "Sacubitril",
        departments: "ARIP0000095",
        joiningDate: "N/A",
        addedBy: "RPS-TSLV-00",
        status: "APPROVED",
      },
      {
        id:5, user: "Initiated Product",
        role: "Sacubitril",
        departments: "ARIP0000095",
        joiningDate: "N/A",
        addedBy: "RPS-TSLV-00",
        status: "REJECTED",
      },
      {
        id:6, user: "test Product",
        role: "Sacubitril",
        departments: "ARIP0000095",
        joiningDate: "N/A",
        addedBy: "RPS-TSLV-00",
        status: "APPROVED",
      },
      {
        id:7, user: "test Product",
        role: "Sacubitril",
        departments: "ARIP0000095",
        joiningDate: "N/A",
        addedBy: "RPS-TSLV-00",
        status: "DROPPED",
      },
      {
        id:8,user: "Initiated Product",
        role: "Sacubitril",
        departments: "ARIP0000095",
        joiningDate: "N/A",
        addedBy: "RPS-TSLV-00",
        status: "APPROVED",
      },
      {
        id:8, user: "test Product",
        role: "Sacubitril",
        departments: "ARIP0000095",
        joiningDate: "N/A",
        addedBy: "RPS-TSLV-00",
        status: "DROPPED",
      },
      {
        id:9, user: "Initiated Product",
        role: "Sacubitril",
        departments: "ARIP0000095",
        joiningDate: "N/A",
        addedBy: "RPS-TSLV-00",
        status: "APPROVED",
      },
    ]);

 
  
  const handleDeleteClick = (id) => {
    setDeleteId(id);
    setDeleteModal(true);
  };

  const handleDeleteConfirm = () => {
    setEmployees((prevEmployees) => prevEmployees.filter((employee) => employee.id !== deleteId));
    setDeleteModal(false);
  };
  const filteredEmployees = employee.filter(
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
          <td>
            <button
            className={`px-3 py-1 w-75 rounded text-light d-flex justify-content-center align-items-center bg-${
              employee.status === "INITIATED"
                ? "blue-700"
                : employee.status === "APPROVED"
                ? "green-700"
                : employee.status === "REJECTED"
                ? "red-700"
                : employee.status === "REINITIATED"
                ? "yellow-500"
                : employee.status === "DROPPED"
                ? "purple-700"
                : employee.status === "ALL"
                ? badgeStyle
                : badgeStyle
              }`} style={{fontSize:'10px'}}
          >
            {employee.status}
            </button>

          </td>
          <td>
            <div className="d-flex gap-3">
              <Link to="/viewDetails">
                <FontAwesomeIcon icon={faEye} />
              </Link>
              <div
                className="cursor-pointer"
                onClick={() => setAddModal2(true)}
              >
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

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

 
  const deleteEmployee = (index) => {
    const newEmployees = [...employee];
    newEmployees.splice(index, 1);
    setemployees(newEmployees);
  };

  return (
    <>
      <div className="m-5 mt-3">
        <div className="main-head">
          <h4 className="fw-bold">Sample Login</h4>
        </div>
        <div>
          <CRow className="mt-5 mb-3">
            <CCol sm={4}>
              <CFormInput
                type="text"
                style={{fontSize:'0.9rem'}}
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </CCol>
            <CCol sm={3}>
              <CFormSelect
                value={statusFilter}
                style={{fontSize:'0.9rem'}}
                onChange={(e) => setStatusFilter(e.target.value)}
                options={[
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
                <CButton color="primary" style={{fontSize:'0.9rem'}} onClick={() => setAddModal(true)}>
                  Add Sample Login
                </CButton>
              </div>
            </CCol>
          </CRow>
        </div>

        <div
          className=" rounded    bg-white"
          style={{fontSize:'0.9rem'}}
        >
          <table className="table    ">
            <thead>
              <tr>
                <th style={{ background: "#5D76A9", color: "white"}}>S.No.</th>
                <th style={{ background: "#5D76A9", color: "white"}}>
                  Sample Type
                </th>
                <th style={{ background: "#5D76A9", color: "white"}}>
                  Product / Material
                </th>
                <th style={{ background: "#5D76A9", color: "white"}}>
                  A.R. No.
                </th>
                <th style={{ background: "#5D76A9", color: "white"}}>
                  Generic Name
                </th>
                <th style={{ background: "#5D76A9", color: "white"}}>
                  Specification code
                </th>
                <th style={{ background: "#5D76A9", color: "white"}}>
                  Status
                </th>
                <th style={{ background: "#5D76A9", color: "white"}}>
                  Actions{" "}
                </th>
              </tr>
            </thead>
            <tbody>{renderRows()}</tbody>
          </table>
        </div>

        {/* <div className="pagination d-flex justify-content-end  my-4">
          <div className="pagination d-flex justify-content-end ">
            
              <button
                style={{border:'2px solid',fontSize:'13px',borderRadius:'4px', width:'78px',height:'30px',color:'white',backgroundColor:'#5D76A9'}}
                onClick={prevPage}
              >
                &#8592; &nbsp;Previous
              </button>
              <button  style={{fontSize:'13px',borderRadius:'', width:'24px',height:'30px',color:'white',backgroundColor:'#5D76A9'}}> {currentPage} </button>
             <button
             style={{border:'2px solid',fontSize:'13px',borderRadius:'4px', width:'60px',height:'30px',backgroundColor:'#5D76A9',color:'white'}}
             onClick={nextToLastPage}
             >
              Next &nbsp;&rarr;
             </button>
           </div>
        </div> */}

<div className="d-flex justify-content-end align-items-center mt-4">
                        <div className="pagination">
                            <button  style={{ background: "#21516a", color: "white" }} className="btn mr-2" onClick={prevPage} disabled={currentPage === 1}>
                                &lt;&lt;
                            </button>
                            <button className="btn mr-2 bg-dark-subtle rounded-circle">{currentPage}</button>
                            <button  style={{ background: "#21516a", color: "white" }} className="btn mr-2" onClick={nextPage} disabled={endIndex >= employee.length}>
                                &gt;&gt;
                            </button>
                        </div>
                       
                    </div>




      </div>

      {addModal && (
        <StatusModal visible={addModal} closeModal={() => setAddModal(false)} />
      )}
       {addModal2 && (
        <StatusModal2 visible={addModal2} closeModal2={() => setAddModal2(false)} />
      )}

<DeleteModal
        visible={deleteModal}
        closeModal={() => setDeleteModal(false)}
        confirmDelete={handleDeleteConfirm}/>
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
        <CModalTitle>New Sample login</CModalTitle>
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

