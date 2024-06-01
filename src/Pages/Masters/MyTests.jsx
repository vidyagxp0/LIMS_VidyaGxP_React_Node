import React, { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { faEye } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CTable } from '@coreui/react';

export default function MyTests() {
    const pageSize = 5;
    const [currentPage, setCurrentPage] = useState(1);
    const employees = [
        { id: 1, user: 'Initiated Product', Date: 'May 17th 24 14:34', DayComplete: '10', Status: 'APPROVED' },
        { id: 2, user: 'Initiated Product', Date: 'May 17th 24 14:34', DayComplete: '10', Status: 'APPROVED' },
        { id: 3, user: 'Initiated Product', Date: 'May 17th 24 14:34', DayComplete: '10', Status: 'DROPPED' },
        { id: 4, user: 'Initiated Product', Date: 'May 17th 24 14:34', DayComplete: '10', Status: 'APPROVED' },
        { id: 5, user: 'Initiated Product', Date: 'May 17th 24 14:34', DayComplete: '10', Status: 'DROPPED' },
        { id: 6, user: 'Initiated Product', Date: 'May 17th 24 14:34', DayComplete: '10', Status: 'APPROVED' },
        { id: 7, user: 'Initiated Product', Date: 'May 17th 24 14:34', DayComplete: '10', Status: 'APPROVED' },
        { id: 8, user: 'Initiated Product', Date: 'May 17th 24 14:34', DayComplete: '10', Status: 'DROPPED' },
        { id: 9, user: 'Initiated Product', Date: 'May 17th 24 14:34', DayComplete: '10', Status: 'DROPPED' },
        { id: 10, user: 'Initiated Product', Date: 'May 17th 24 14:34', DayComplete: '10', Status: 'APPROVED' },
    ];
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, employees.length);

    const renderRows = () => {
        return employees.slice(startIndex, endIndex).map((employee, index) => (
            <tr key={startIndex + index}>
                <td>{startIndex + index + 1}</td>
                <td>{employee.user}</td>
                <td>{employee.user}</td>
                <td>{employee.DayComplete}</td>
                <td>{employee.Date}</td>
                <td>{employee.DayComplete}</td>
                <td>
                    &nbsp; &nbsp;
                    <Link to="/approval/1321"><FontAwesomeIcon icon={faEye} /></Link>
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

        <div className="mx-5">
            <div className="row my-5">
                <div className="main-head">
                    <div className="title fw-bold fs-5 py-4">My Tests</div>
                </div>
            </div>

            <div className=' bg-white rounded' style={{ border: "2px solid gray" }} >
        <CTable align="middle" responsive className="mb-0 table-striped table-responsive">
          <thead>
                        <tr>
                            <th style={{ background: "#3C496A", color: "white" }}>Sr.no.</th>
                            <th style={{ background: "#3C496A", color: "white" }}>A.R. No.</th>
                            <th style={{ background: "#3C496A", color: "white" }}>Product Name</th>
                            <th style={{ background: "#3C496A", color: "white" }}>Sample Incharge</th>
                            <th style={{ background: "#3C496A", color: "white" }}>Assigned On</th>
                            <th style={{ background: "#3C496A", color: "white" }}>Sample Type</th>
                            <th style={{ background: "#3C496A", color: "white" }}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderRows()}
                    </tbody>
                </CTable>
            </div>
            <div className="d-flex justify-content-between align-items-center my-4">
                <div className="pagination">
                    <button className="btn mr-2" onClick={prevPage} disabled={currentPage === 1}>
                        &lt;&lt;
                    </button>
                    <button className="btn mr-2 bg-dark-subtle rounded-circle">{currentPage}</button>
                    <button className="btn mr-2" onClick={nextPage} disabled={endIndex >= employees.length}>
                        &gt;&gt;
                    </button>
                </div>
                <button className="btn d-flex align-items-center border" onClick={nextToLastPage}>
                    Next <FaArrowRight className='ms-2' />
                </button>
            </div>
        </div>
    )
}
