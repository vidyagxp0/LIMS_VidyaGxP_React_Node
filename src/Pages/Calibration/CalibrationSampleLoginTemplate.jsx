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

export default function CalibrationSampleLoginTemplate() {
    const top100Films = [
        { label: 'The Shawshank Redemption', year: 1994 },
        { label: 'The Godfather', year: 1972 },
        { label: 'The Godfather: Part II', year: 1974 },
        { label: 'The Dark Knight', year: 2008 },
        { label: '12 Angry Men', year: 1957 },
    ];

    const [storageName, setStorageName] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
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



    const [employees, setEmployees] = useState([
        { user: 'Initiated Product', role: 'Sacubitril', departments: 'ARIP0000095', joiningDate: 'N/A', addedBy: 'RPS-TSLV-00', status: 'APPROVED' },
        { user: 'Initiated Product', role: 'Sacubitril', departments: 'ARIP0000095', joiningDate: 'N/A', addedBy: 'RPS-TSLV-00', status: 'DROPPED' },
        { user: 'Test Product', role: 'Sacubitril', departments: 'ARIP0000095', joiningDate: 'N/A', addedBy: 'RPS-TSLV-00', status: 'REJECTED' },
        { user: 'Test Product', role: 'Sacubitril', departments: 'ARIP0000095', joiningDate: 'N/A', addedBy: 'RPS-TSLV-00', status: 'APPROVED' }, { user: 'Initiated Product', role: 'Sacubitril', departments: 'ARIP0000095', joiningDate: 'N/A', addedBy: 'RPS-TSLV-00', status: 'REJECTED' },
        { user: 'hpcl', role: 'Sacubitril', departments: 'ARIP0000095', joiningDate: 'N/A', addedBy: 'RPS-TSLV-00', status: 'INITIATED' },
    ]);

    const pageSize = 8;
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
                        <div className="cursor-pointer"  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasRight"
                  aria-controls="offcanvasRight">
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

            <div id="div2" style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div id="searchmain">
                    <div id="searchicon">
                        <CiSearch />
                    </div>
                    <div className="">
                        <input type="text" className="" id="" placeholder="search" onChange={handleSearchChange} />
                    </div>
                </div>

                <div className="dropdown m-5">
                </div>

                <div className="dropdown">
                    <div>
                        <button className="btn border" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <select id='selectOption' onChange={handleStatusChange} style={{outline:'none'}}>
                                <option value="">All</option>
                                <option value="INITIATED">Initiated</option>
                                <option value="APPROVED">Approved</option>
                                <option value="REJECTED">Rejected</option>
                                <option value="REINITIATED">Reinitiated</option>
                                <option value="DROPPED">Dropped</option>
                            </select>
                        </button>
                    </div>
                </div>

                <button
                    id=""
                    className="btn btn-primary m-5"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight"
                    aria-controls="offcanvasRight"
                >
                    <CgAddR /> <span style={{ fontSize: '14px', fontWeight: 'bold', marginLeft: '5px' }}>Add Login Template</span>
                </button>

                <div
                    className="offcanvas offcanvas-end overflow-y-scroll"
                    tabIndex="-1"
                    id="offcanvasRight"
                    aria-labelledby="offcanvasRightLabel"
                >
                    <div className="offcanvas-header">
                        <div id="line1">
                            <h5 className="offcanvas-title" id="offcanvasRightLabel">Add Sample Login Template</h5>
                            <button
                                id="closebtn"
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="offcanvas"
                                aria-label="Close"
                            ></button>
                        </div>
                    </div>

                    <label className="line3" htmlFor="">Sample Login Template</label>
                    <input className="line4" required type="text" placeholder="" />

                    <label className="line3" htmlFor="">Test Plan / Revision No.</label>
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={top100Films}
                        sx={{ width: 370, margin: 2 }}
                        renderInput={(params) => <TextField {...params} label="" />}
                    />

                    <label className="line3" htmlFor="">Product / Material</label>
                    <input className="line4" required type="text" placeholder="prefix" />

                    <label className="line3" htmlFor="">Product / Material Code</label>
                    <input className="line4" required type="text" placeholder="" />

                    <label className="line3" htmlFor="">Generic Name</label>
                    <input className="line4" required type="text" placeholder="" />

                    <label className="line3" htmlFor="">Specification ID</label>
                    <input className="line4" required type="text" placeholder="" />

                    <div id="line5">
                        <button type="button" data-bs-dismiss="offcanvas" aria-label="Close">&lt; Back</button>
                        <button onClick={handleAddStorage}>Add</button>
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
                            <th>Sample Login Template</th>
                            <th>Test Plan</th>
                            <th>Auto Sample Allotment Required</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderRows()}
                    </tbody>
                </table>
            </div>

            <div className="pagination">
                <div className="pagination" style={{ margin: '0 30px' }}>
                    <div className='mr-5'>
                        <button className="btn mr-2" onClick={prevPage} disabled={currentPage === 1}>&lt;&lt;</button>
                    </div>
                    <div className="current-page-number mr-2 bg-dark-subtle page-item">
                        <button className='btn rounded-circle'>{currentPage}</button>
                    </div>
                    <div>
                        <button className="btn mr-2" onClick={nextPage} disabled={endIndex >= filteredEmployees.length}>&gt;&gt;</button>
                    </div>
                </div>
                <button className="btn btn-next" style={{ margin: '0 30px' }} onClick={nextToLastPage}> Next <FaArrowRight /></button>
            </div>
        </>
    );
}
