import React, { useState } from 'react';
import { HiDotsHorizontal } from "react-icons/hi";
import { CgAddR, CgCalendarDates } from 'react-icons/cg';
import { FaArrowRight } from 'react-icons/fa';
import { IoEyeSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { faEye, faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CalibrationType() {
    const [addModal, setAddModal] = useState(false);
    const [selectedStatus, setSelectedStatus] = useState('All');
    const [employees, setEmployees] = useState([
        { user: 'Initiated Product', role: 'Sacubitril', departments: 'ARIP0000095', joiningDate: 'N/A', addedBy: 'RPS-TSLV-00', status: 'ACTIVE' },
        { user: 'Initiated Product', role: 'Sacubitril', departments: 'ARIP0000095', joiningDate: 'N/A', addedBy: 'RPS-TSLV-00', status: 'ACTIVE' },
        { user: 'Initiated Product', role: 'Sacubitril', departments: 'ARIP0000095', joiningDate: 'N/A', addedBy: 'RPS-TSLV-00', status: 'INACTIVE' },
        { user: 'Initiated Product', role: 'Sacubitril', departments: 'ARIP0000095', joiningDate: 'N/A', addedBy: 'RPS-TSLV-00', status: 'ACTIVE' },
    ]);

    const pageSize = 5;
    const [currentPage, setCurrentPage] = useState(1);

    const filteredEmployees = employees.filter(employee => 
        selectedStatus === 'All' ? true : employee.status === selectedStatus.toUpperCase()
    );

    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, filteredEmployees.length);

    const deleteEmployee = (indexToDelete) => {
        const newEmployees = employees.filter((_, index) => index !== indexToDelete);
        setEmployees(newEmployees);
    };

    const renderRows = () => {
        return filteredEmployees.slice(startIndex, endIndex).map((employee, index) => (
            <tr key={startIndex + index}>
                <td>{startIndex + index + 1}</td>
                <td>{employee.user}</td>
                <td>{employee.role}</td>
                <td>{employee.addedBy}</td>
                <td className={`rounded-5 ${employee.status === 'ACTIVE' ? 'bg-success' : 'bg-warning'} bg-opacity-25 text-${employee.status === 'ACTIVE' ? 'success' : 'warning'} d-flex justify-content-center p-1 m-2`} >
                    {employee.status}
                </td>
                <td>
                    <div className="d-flex gap-3">
                        <div className="cursor-pointer" >
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

    return (
        <>
            <div id="div1">
                <h5>Calibration Type</h5>
            </div>

            <div id="div2" className='p-5' style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div className="dropdown">
                    <div>
                        <button className="btn border" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Show
                            <select id='selectOption' onChange={(e) => setSelectedStatus(e.target.value)}>
                                <option value="All">All</option>
                                <option value="Active">Active</option>
                                <option value="Inactive">Inactive</option>
                            </select>
                        </button>
                    </div>
                </div>

                <button
                    id="sampleloginbtn"
                    className="btn btn-primary"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight"
                    aria-controls="offcanvasRight"
                >
                    <CgAddR /> <span style={{ fontSize: '14px', fontWeight: 'bold', marginLeft: '5px' }}>Calibration Type</span>
                </button>
            </div>

            <div
                className="offcanvas offcanvas-end overflow-y-scroll"
                tabIndex="-1"
                id="offcanvasRight"
                aria-labelledby="offcanvasRightLabel"
            >
                <div className="offcanvas-header ">
                    <div id="line1">
                        <h5 className="offcanvas-title" id="offcanvasRightLabel">
                            Add Calibration Type
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
                <p style={{ marginLeft: '20px' }}>Add information and add new calibration type</p>

                <label id="line3" htmlFor="">Calibration Type</label>
                <input id="line4" required type="text" placeholder="Calibration Type" />

                <label id="line3" htmlFor="">Calibration Type Prefix</label>
                <input id="line4" required type="text" placeholder="Calibration Type Prefix" />

                <div id="line5">
                    <button type="button" data-bs-dismiss="offcanvas" aria-label="Close">&lt; Back</button>
                    <button>Submit</button>
                </div>
            </div>

            {/* Employee table */}
            <div className='table-responsive p-4 container1'>
                <table className='table shadow' style={{ fontSize: '0.8rem', margin: '0px auto', width: '98%' }}>
                    <thead>
                        <tr>
                            <th>Sr.no.</th>
                            <th>Calibration Type</th>
                            <th>Calibration Prefix</th>
                            <th>Added On</th>
                            <th>Status</th>
                            <th>Actions </th>
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
        </>
    );
}
