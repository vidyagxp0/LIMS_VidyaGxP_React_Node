import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { CgAddR } from "react-icons/cg";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { faEye, faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CButton, CCol, CFormInput, CFormSelect, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react"

export default function CalibrationSampleLoginTemplate() {
    const [addModal, setAddModal] = useState(false);

    const top100Films = [
        { label: 'The Shawshank Redemption', year: 1994 },
        { label: 'The Godfather', year: 1972 },
        { label: 'The Godfather: Part II', year: 1974 },
        { label: 'The Dark Knight', year: 2008 },
        { label: '12 Angry Men', year: 1957 },
    ];

    const [storageName, setStorageName] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const [filterStatus, setFilterStatus] = useState("");


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

  const StatusModal = (_props) => {
    return (
        <CModal alignment="center" visible={_props.visible} onClose={_props.closeModal}>
        <CModalHeader>
          <CModalTitle>Add Sample Login Template</CModalTitle>
        </CModalHeader>
        <CModalBody>
        <CFormInput
          label='Sample Login Template'
          className="mb-3"
          type="text"
          placeholder=""
          />  
           <label className="" htmlFor="">Test Plan / Revision No.</label>
           <Autocomplete
                        disablePortal
                        className="mb-3"
                        id="combo-box-demo"
                        options={top100Films}
                        renderInput={(params) => <TextField {...params} label="" />}
                    />

          <CFormInput
          label='Product / Material'
          className="mb-3"
          type="text"
          placeholder=""
          /> 
           <CFormInput
          label='Product / Material Code'
          className="mb-3"
          type="text"
          placeholder=""
          /> 
           <CFormInput
          label='Generic Name'
          className="mb-3"
          type="text"
          placeholder=""
          />  
          <CFormInput
          label='Specification ID'
          className="mb-3"
          type="text"
          placeholder=""
          /> 
         <div className="d-flex gap-3 mt-4">
        <CButton color="light w-50" onClick={_props.closeModal}>&lt; Back</CButton>
        <CButton color="primary w-50">Add</CButton>
      </div>
        </CModalBody>
      </CModal>
    )
  }

    const [employees, setEmployees] = useState([
        { user: 'Initiated Product', role: 'Sacubitril', departments: 'ARIP0000095', joiningDate: 'N/A', addedBy: 'RPS-TSLV-00', status: 'APPROVED' },
        { user: 'Initiated Product', role: 'Sacubitril', departments: 'ARIP0000095', joiningDate: 'N/A', addedBy: 'RPS-TSLV-00', status: 'DROPPED' },
        { user: 'Test Product', role: 'Sacubitril', departments: 'ARIP0000095', joiningDate: 'N/A', addedBy: 'RPS-TSLV-00', status: 'REJECTED' },
        { user: 'Test Product', role: 'Sacubitril', departments: 'ARIP0000095', joiningDate: 'N/A', addedBy: 'RPS-TSLV-00', status: 'APPROVED' }, { user: 'Initiated Product', role: 'Sacubitril', departments: 'ARIP0000095', joiningDate: 'N/A', addedBy: 'RPS-TSLV-00', status: 'REJECTED' },
        { user: 'hpcl', role: 'Sacubitril', departments: 'ARIP0000095', joiningDate: 'N/A', addedBy: 'RPS-TSLV-00', status: 'INITIATED' },
    ]);

    const pageSize = 5;
    const [currentPage, setCurrentPage] = useState(1);
    const [editRowIndex, setEditRowIndex] = useState(null);
    const [editFormData, setEditFormData] = useState({
        user: '',
        role: '',
        departments: '',
        joiningDate: '',
        addedBy: '',
        status: ''
    });

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleStatusChange = (e) => {
        setFilterStatus(e.target.value);
    };

    const handleAddStorage = () => {
        if (storageName.trim() === "") {
            setErrorMessage("Storage condition is Required");
        } else {
            toast.warning("Apologies, an unexpected error occurred while adding the Storage Condition.");
        }
    };

    const handleEdit = (index) => {
        setEditRowIndex(index);
        setEditFormData(employees[index]);
    };

    const handleDelete = (index) => {
        const newEmployees = [...employees];
        newEmployees.splice(index, 1);
        setEmployees(newEmployees);
    };

    const handleSave = () => {
        const updatedEmployees = [...employees];
        updatedEmployees[editRowIndex] = editFormData;
        setEmployees(updatedEmployees);
        setEditRowIndex(null);
    };

    const filteredEmployees = employees.filter((employee) => {
        return (
            employee.user.toLowerCase().includes(searchTerm.toLowerCase()) &&
            (filterStatus === "" || employee.status === filterStatus)
        );
    });

    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, filteredEmployees.length);

    const renderRows = () => {
        return filteredEmployees.slice(startIndex, endIndex).map((employee, index) => (
            <tr key={startIndex + index}>
                <td><input type="checkbox" /></td>
                <td>{employee.user}</td>
                <td>{employee.role}</td>
                <td>{employee.addedBy}</td>
                <td  ><div
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
                        </div>
                        </td>
                <td>
                    <div className="d-flex gap-3">
                        <Link to="/calibration/sample-login-template-details"><FontAwesomeIcon icon={faEye} /></Link>
                        <div onClick={() => setAddModal(true)}>
                            <FontAwesomeIcon icon={faPenToSquare} />
                        </div>
                        <Link to="#" onClick={() => handleDelete(index)}>
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

    return (
        <>
            <div id="div1">
                <h5>Sample Login Template</h5>
            </div>

            <div className="d-flex m-4 mt-5 justify-content-around">
        <CCol sm={4}>
          <CFormInput
            type="text"
            placeholder="Search..."
            style={{ border: "2px solid gray" }}
            className="border-2"
            onChange={handleSearchChange}
          />
        </CCol>

        <CCol sm={3}>
          <CFormSelect
            onChange={handleStatusChange}
            className="border-2"
            style={{ border: "2px solid gray" }}
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

        <CCol sm={3}>
          <div className="d-flex justify-content-end">
            <CButton color="primary" onClick={() => setAddModal(true)}>
            Add Login Template
            </CButton>
          </div>
        </CCol>
      </div>

          
            <div className='border-dark-subtle border-2 bg-light mx-5 mt-5 mb-4 rounded'>
                <table className='table table-responsive table-striped text-xs' >
                    <thead>
                        <tr>
                            <th  style={{ background: "#3C496A", color: "white" }}><input type="checkbox" /></th>
                            <th  style={{ background: "#3C496A", color: "white" }}>Sample Login Template</th>
                            <th  style={{ background: "#3C496A", color: "white" }}>Test Plan</th>
                            <th  style={{ background: "#3C496A", color: "white" }}>Auto Sample Allotment Required</th>
                            <th  style={{ background: "#3C496A", color: "white" }}>Status</th>
                            <th  style={{ background: "#3C496A", color: "white" }}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderRows()}
                    </tbody>
                </table>
            </div>

            <div className="pagination mx-5">
                <div className="pagination" >
                    <div>
                        <button className="btn mr-2" onClick={prevPage} disabled={currentPage === 1}>&lt;&lt;</button>
                    </div>
                    <div className="current-page-number mr-2 bg-dark-subtle page-item">
                        <button className='btn rounded-circle'>{currentPage}</button>
                    </div>
                    <div>
                        <button className="btn mr-2" onClick={nextPage} disabled={endIndex >= filteredEmployees.length}>&gt;&gt;</button>
                    </div>
                </div>
                <button className="btn btn-next d-flex align-items-center"  onClick={nextPage}> Next <FaArrowRight className="ms-2"/></button>
            </div>

                       
      {addModal && <StatusModal visible={addModal} closeModal={() => setAddModal(false)} />}
        </>
    );
}
