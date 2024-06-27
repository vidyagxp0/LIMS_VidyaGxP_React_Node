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
    const [deleteModal, setDeleteModal] = useState(false);
    const [deleteId, setDeleteId] = useState(null);
  

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
   
  const DeleteModal = (_props) => {
    return (
        <CModal alignment="center" visible={_props.visible} onClose={_props.closeModal} size="lg">
            <CModalHeader>
                <CModalTitle>Delete User</CModalTitle>
            </CModalHeader>
            <CModalBody>
                <p>Are you sure you want to delete this sample login template?</p>
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

const handleDeleteClick = (id) => {
    setDeleteId(id);
    setDeleteModal(true);
  };
  
  const handleDeleteConfirm = () => {
    setEmployees((prevEmployees) => prevEmployees.filter((employee) => employee.id !== deleteId));
    setDeleteModal(false);
  };


    const [employees, setEmployees] = useState([
        {id:1, user: 'Initiated Product', role: 'Sacubitril', departments: 'ARIP0000095', joiningDate: 'N/A', addedBy: 'RPS-TSLV-00', status: 'APPROVED' },
        {id:2, user: 'Initiated Product', role: 'Sacubitril', departments: 'ARIP0000095', joiningDate: 'N/A', addedBy: 'RPS-TSLV-00', status: 'DROPPED' },
        {id:3, user: 'Test Product', role: 'Sacubitril', departments: 'ARIP0000095', joiningDate: 'N/A', addedBy: 'RPS-TSLV-00', status: 'REJECTED' },
        {id:4, user: 'Test Product', role: 'Sacubitril', departments: 'ARIP0000095', joiningDate: 'N/A', addedBy: 'RPS-TSLV-00', status: 'APPROVED' }, { user: 'Initiated Product', role: 'Sacubitril', departments: 'ARIP0000095', joiningDate: 'N/A', addedBy: 'RPS-TSLV-00', status: 'REJECTED' },
        {id:5, user: 'hpcl', role: 'Sacubitril', departments: 'ARIP0000095', joiningDate: 'N/A', addedBy: 'RPS-TSLV-00', status: 'INITIATED' },
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
                <td  ><button  
                        className={`py-1 px-2 small w-75 rounded text-light d-flex justify-content-center align-items-center bg-${
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
                            : "white"
                        }`} style={{fontSize:'0.6rem'}}
                      >
                        {employee.status}
                      </button>
                        </td>
                <td>
                    <div className="d-flex gap-3">
                        <Link to="/calibration/sample-login-template-details"><FontAwesomeIcon icon={faEye} /></Link>
                        <div onClick={() => setAddModal(true)}>
                            <FontAwesomeIcon icon={faPenToSquare} />
                        </div>
                        <Link to="#"  onClick={() => handleDeleteClick(employee.id)}>
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
               <div className="m-5 mt-3"  >
               <h4 className="fw-bold ">Sample Login Template</h4>

               <CRow className="mt-5 mb-3">
        <CCol sm={4}>
          <CFormInput
            type="text"
            placeholder="Search..."
            style={{fontSize:'0.9rem'}}
            className="border-2"
            onChange={handleSearchChange}
          />
        </CCol>

        <CCol sm={3}>
          <CFormSelect
            onChange={handleStatusChange}
            className="border-2"
            style={{fontSize:'0.9rem'}}
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
            Add Login Template
            </CButton>
          </div>
        </CCol>
      </CRow>

          
              <div
          className=" rounded bg-white"
          style={{fontFamily:'sans-serif', fontSize:'0.9rem' ,boxShadow:'5px 5px 20px #5D76A9'}}
        >
                <table className='table table-responsive    text-xs' >
                    <thead>
                        <tr>
                            <th  style={{ background: "#5D76A9", color: "white"}}><input type="checkbox" /></th>
                            <th  style={{ background: "#5D76A9", color: "white"}}>Sample Login Template</th>
                            <th  style={{ background: "#5D76A9", color: "white"}}>Test Plan</th>
                            <th  style={{ background: "#5D76A9", color: "white"}}>Auto Sample Allotment Required</th>
                            <th  style={{ background: "#5D76A9", color: "white"}}>Status</th>
                            <th  style={{ background: "#5D76A9", color: "white"}}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderRows()}
                    </tbody>
                </table>
            </div>

            <div className="d-flex justify-content-end align-items-center mt-4">
                        <div className="pagination">
                            <button  style={{ background: "#21516a", color: "white" }} className="btn mr-2" onClick={prevPage} disabled={currentPage === 1}>
                                &lt;&lt;
                            </button>
                            <button className="btn mr-2 bg-dark-subtle rounded-circle">{currentPage}</button>
                            <button  style={{ background: "#21516a", color: "white" }} className="btn mr-2" onClick={nextPage} disabled={endIndex >= employees.length}>
                                &gt;&gt;
                            </button>
                        </div>
                       
                    </div>
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
