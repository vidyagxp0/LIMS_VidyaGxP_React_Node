import { CButton, CCol, CFormInput, CFormSelect, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react"
import React, { useState } from 'react'
import './Samplelogin.css'
import { HiDotsHorizontal } from "react-icons/hi";
import { CgAddR, CgCalendarDates } from 'react-icons/cg';
import { FaArrowRight } from 'react-icons/fa';
import { IoEyeSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { faEye, faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Samplelogin() {
    const pageSize = 8;
    const [currentPage, setCurrentPage] = useState(1);

    const employees = [
        { user: 'Initiated Product', role: 'Sacubitril', departments: 'ARIP0000095', joiningDate: 'N/A', addedBy: 'RPS-TSLV-00', status: 'APPROVED' },
        { user: 'Initiated Product', role: 'Sacubitril', departments: 'ARIP0000095', joiningDate: 'N/A', addedBy: 'RPS-TSLV-00', status: 'APPROVED' },
        { user: 'Initiated Product', role: 'Sacubitril', departments: 'ARIP0000095', joiningDate: 'N/A', addedBy: 'RPS-TSLV-00', status: 'APPROVED' },
        { user: 'Initiated Product', role: 'Sacubitril', departments: 'ARIP0000095', joiningDate: 'N/A', addedBy: 'RPS-TSLV-00', status: 'APPROVED' },
        { user: 'Initiated Product', role: 'Sacubitril', departments: 'ARIP0000095', joiningDate: 'N/A', addedBy: 'RPS-TSLV-00', status: 'APPROVED' },
        { user: 'Initiated Product', role: 'Sacubitril', departments: 'ARIP0000095', joiningDate: 'N/A', addedBy: 'RPS-TSLV-00', status: 'APPROVED' },
        { user: 'Initiated Product', role: 'Sacubitril', departments: 'ARIP0000095', joiningDate: 'N/A', addedBy: 'RPS-TSLV-00', status: 'APPROVED' },
        { user: 'Initiated Product', role: 'Sacubitril', departments: 'ARIP0000095', joiningDate: 'N/A', addedBy: 'RPS-TSLV-00', status: 'APPROVED' },
        { user: 'Initiated Product', role: 'Sacubitril', departments: 'ARIP0000095', joiningDate: 'N/A', addedBy: 'RPS-TSLV-00', status: 'APPROVED' },
        { user: 'Initiated Product', role: 'Sacubitril', departments: 'ARIP0000095', joiningDate: 'N/A', addedBy: 'RPS-TSLV-00', status: 'APPROVED' },
    ];

    const testData = [
        { sno: '1', testName: 'Ph test', groupName: '', selection: false },
        { sno: '2', testName: 'FG Assay Test', groupName: '', selection: true },
        { sno: '3', testName: 'Water Ph test', groupName: '', selection: false }
    ];

    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, employees.length);

    const renderRows = () => {
        return employees.slice(startIndex, endIndex).map((employee, index) => (
            <tr key={startIndex + index}>
                <td>{startIndex + index + 1}</td>
                <td>{employee.user}</td>
                <td>{employee.role}</td>
                <td>{employee.departments}</td>
                <td>{employee.joiningDate}</td>
                <td>{employee.addedBy}</td>
                <td className={`rounded-5 ${employee.status === 'Active' ? 'bg-danger' : 'bg-warning'} bg-opacity-25 text-${employee.status === 'Active' ? 'danger' : 'warning'} d-flex justify-content-center p-1 m-2`} >{employee.status}</td>
                <td>
                    <div className="d-flex gap-3">
                        <Link to="/viewDetails"><FontAwesomeIcon icon={faEye} /></Link>
                        <div className="cursor-pointer" data-bs-toggle="offcanvas" data-bs-target="#updateSampleLogin" aria-controls="offcanvasRight"><FontAwesomeIcon icon={faPenToSquare} /></div>
                        <div className="cursor-pointer" data-bs-toggle="offcanvas" data-bs-target="#removeSampleLogin" aria-controls="offcanvasRight"><FontAwesomeIcon icon={faTrashCan} /></div>
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
        setCurrentPage(Math.ceil(employees.length / pageSize));
    };
    return (
        <>
            <div className="m-4 p-4">
                <div className="main-head">
                    <h4 className="fw-bold mb-4 mt-3">Sample Login</h4>
                </div>
                <div>
                    <CRow className="my-5">
                        <CCol sm={4}>
                            <CFormInput
                                type="email"
                                placeholder="Search..."
                            />
                        </CCol>
                        <CCol sm={3}>
                            <CFormSelect
                                options={[
                                    'Select Status',
                                    { label: 'All', value: '1' },
                                    { label: 'Initiated', value: 'Initiated' },
                                    { label: 'Approved', value: 'Approved' },
                                    { label: 'Rejected', value: 'Rejected' },
                                    { label: 'Approved', value: 'Approved' },
                                    { label: 'Reinitiated', value: 'Reinitiated' },
                                    { label: 'Dropped', value: 'Dropped' }
                                ]}
                            />
                        </CCol>
                        <CCol sm={2}></CCol>
                        <CCol sm={3}>
                            <div className="d-flex justify-content-end">
                                <CButton color="primary" data-bs-toggle="offcanvas" data-bs-target="#addLoginSample" aria-controls="offcanvasRight"><CgAddR className="mx-1 fs-4" /> Add Sample Login</CButton>
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
                        <div id="line1"><h5 className="offcanvas-title" id="offcanvasRightLabel">
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
                    <p className='m-3'>Add information and add new sample login</p>

                    <label className="line3" htmlFor="">Client</label>
                    <input className="line4" required type="text" placeholder="Select..." />

                    <label className="line3" htmlFor="">Test Plan / Revision No.</label>
                    <input className="line4" required type="text" placeholder="Select..." />

                    <label className="line3" htmlFor="">Product / Material</label>
                    <input className="line4" required type="text" placeholder="Prefix" />

                    <label className="line3" htmlFor="">Product / Material Code</label>
                    <input className="line4" required type="text" placeholder="" />

                    <label className="line3" htmlFor="">Generic Name</label>
                    <input className="line4" required type="text" placeholder="" />

                    <label className="line3" htmlFor="">Specification ID</label>
                    <input className="line4" required type="text" placeholder="" />

                    <label className="line3" htmlFor="">Copy Sample from</label>
                    <input className="line4" required type="text" placeholder="Select..." />

                    <label className="line3" htmlFor="">Sample Type</label>
                    <input className="line4" required type="text" placeholder="" />

                    <label className="line3" htmlFor="">Certificates (If any)</label>
                    <input className="line4" required type="text" placeholder="Select..." />

                    <div id="line5">
                        <button type="button"
                            data-bs-dismiss="offcanvas"
                            aria-label="Close">&lt; Back</button>
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
                        <div id="line1"><h5 className="offcanvas-title" id="offcanvasRightLabel">
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
                    <p className='m-3'>Update information and add new sample login</p>

                    <label className="line3" htmlFor="">Client</label>
                    <input className="line4" required type="text" placeholder="Select..." />

                    <label className="line3" htmlFor="">Test Plan / Revision No.</label>
                    <input className="line4" required type="text" placeholder="Select..." />

                    <label className="line3" htmlFor="">Product / Material</label>
                    <input className="line4" required type="text" placeholder="Prefix" />

                    <label className="line3" htmlFor="">Product / Material Code</label>
                    <input className="line4" required type="text" placeholder="" />

                    <label className="line3" htmlFor="">Generic Name</label>
                    <input className="line4" required type="text" placeholder="" />

                    <label className="line3" htmlFor="">Specification ID</label>
                    <input className="line4" required type="text" placeholder="" />

                    <label className="line3" htmlFor="">Copy Sample from</label>
                    <input className="line4" required type="text" placeholder="Select..." />

                    <label className="line3" htmlFor="">Sample Type</label>
                    <input className="line4" required type="text" placeholder="" />

                    <label className="line3" htmlFor="">Certificates (If any)</label>
                    <input className="line4" required type="text" placeholder="Select..." />
                    <div className="m-4">
                        <table className='table table-bordered table-responsive'>
                            <thead>
                                <tr>
                                    <th className='bg-info text-light'>Sno.</th>
                                    <th className='bg-info text-light'>Test Name</th>
                                    <th className='bg-info text-light'>Group Name</th>
                                    <th className='bg-info text-light'>Selection</th>
                                </tr>
                            </thead>
                            <tbody>
                                {testData.map((row, index) => (
                                    <tr key={index}>
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
                        </table>
                    </div>
                    <div id="line5">
                        <button type="button"
                            data-bs-dismiss="offcanvas"
                            aria-label="Close">&lt; Back</button>
                        <button>Add Sample</button>
                    </div>
                </div>

                <div className="offcanvas offcanvas-end" tabIndex="-1" id="removeSampleLogin" aria-labelledby="offcanvasRightLabel">
                    <div className="offcanvas-header border-bottom pb-2 border-2 border-dark mx-3 px-0">
                        <h5 className="offcanvas-title" id="offcanvasRightLabel">Delete Sample Type</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <p className="m-3">Do you want to delete this Sample Type <code>Hydraulic Oil</code>?</p>
                        <div className="d-flex gap-4 my-5">
                            <button className="btn btn-secondary w-100" data-bs-dismiss="offcanvas" aria-label="Close">Back</button>
                            <button className="btn btn-primary w-100">Submit</button>
                        </div>
                    </div>
                </div>

                <div className='table table-responsive p-4 shadow rounded'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>S.No.</th>
                                <th>Sample Type</th>
                                <th>Product / Material</th>
                                <th>A.R. No.</th>
                                <th>Generic Name</th>
                                <th>Specification code</th>
                                <th>Status</th>
                                <th>Actions </th>
                            </tr>
                        </thead>
                        <tbody>
                            {renderRows()}
                        </tbody>
                    </table>
                </div>

                <div className="pagination">

                    <div className="pagination ">
                        <div className='mr-5'>
                            <button className="btn  mr-2" onClick={prevPage} disabled={currentPage === 1}>&lt;&lt;</button>
                        </div>
                        <div className="current-page-number mr-2 bg-dark-subtle page-item">
                            <button className='btn rounded-circle'> {currentPage} </button>
                        </div>
                        <div>
                            <button className="btn mr-2" onClick={nextPage} disabled={endIndex >= employees.length}>&gt;&gt;</button>

                        </div>

                    </div>

                    <button className="btn btn-next" onClick={nextToLastPage}> Next <FaArrowRight /></button>
                </div>
            </div>
        </>
    )
}
