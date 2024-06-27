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

        <div className="m-5 mt-3">
                <div className="main-head">
                    <h4 className="fw-bold">My Tests</h4>
                </div>

                  <div
          className=" rounded bg-white mt-5"
          style={{fontFamily:'sans-serif', fontSize:'0.9rem' ,boxShadow:'5px 5px 20px #5D76A9'}}
        >
        <CTable align="middle" responsive className="mb-0    table-responsive">
          <thead>
                        <tr>
                            <th style={{ background: "#5D76A9", color: "white"}}>Sr.no.</th>
                            <th style={{ background: "#5D76A9", color: "white"}}>A.R. No.</th>
                            <th style={{ background: "#5D76A9", color: "white"}}>Product Name</th>
                            <th style={{ background: "#5D76A9", color: "white"}}>Sample Incharge</th>
                            <th style={{ background: "#5D76A9", color: "white"}}>Assigned On</th>
                            <th style={{ background: "#5D76A9", color: "white"}}>Sample Type</th>
                            <th style={{ background: "#5D76A9", color: "white"}}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderRows()}
                    </tbody>
                </CTable>
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
    )
}
