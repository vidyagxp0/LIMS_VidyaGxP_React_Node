import React,{useState} from 'react'
import { HiDotsHorizontal } from "react-icons/hi";
import { CgAddR, CgCalendarDates } from 'react-icons/cg';
import { FaArrowRight } from 'react-icons/fa';
import { IoEyeSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';

import { faEye, faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CTable } from '@coreui/react';

export default function MyTests() {
  const pageSize = 5; 
  const [currentPage, setCurrentPage] = useState(1);
  const employees = [
      { user: 'Initiated Product',  Date: 'May 17th 24 14:34', DayComplete: '10', Status: 'APPROVED' },
      { user: 'Initiated Product',  Date: 'May 17th 24 14:34', DayComplete: '10', Status: 'APPROVED'  },
      {  user: 'Initiated Product', Date: 'May 17th 24 14:34', DayComplete: '10', Status: 'DROPPED'  },
      {user: 'Initiated Product',  Date: 'May 17th 24 14:34', DayComplete: '10', Status: 'APPROVED' },
      {user: 'Initiated Product',  Date: 'May 17th 24 14:34', DayComplete: '10', Status: 'DROPPED' },
      {user: 'Initiated Product',  Date: 'May 17th 24 14:34', DayComplete: '10', Status: 'APPROVED' },
      {user: 'Initiated Product',  Date: 'May 17th 24 14:34', DayComplete: '10', Status: 'APPROVED' },
      {user: 'Initiated Product',  Date: 'May 17th 24 14:34', DayComplete: '10', Status: 'DROPPED' },
      {user: 'Initiated Product',  Date: 'May 17th 24 14:34', DayComplete: '10', Status: 'DROPPED' },
      { user: 'Initiated Product',  Date: 'May 17th 24 14:34', DayComplete: '10', Status: 'APPROVED' },
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
    <>
     <div id="div1">
        <h5  style={{fontWeight:"bolder"}}>My Tests</h5>
      </div>
     
           {/* Employee table */}
           <div className=" rounded  m-4 bg-white" style={{border:"2px solid gray"}}>
          <CTable align="middle" responsive className="mb-0 table-striped table-responsive">
                    <thead>
                        <tr>
                            <th style={{background:"#3C496A", color:"white"}}>Sr.no.</th>
                            <th style={{background:"#3C496A", color:"white"}}>A.R. No.</th>
                            <th style={{background:"#3C496A", color:"white"}}>Product Name</th>
                            <th style={{background:"#3C496A", color:"white"}}>Sample Incharge</th>
                            <th style={{background:"#3C496A", color:"white"}}>Assigned On</th>
                            <th style={{background:"#3C496A", color:"white"}}>Sample Type</th>
                            <th style={{background:"#3C496A", color:"white"}}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderRows()}
                    </tbody>
                </CTable>
            </div>
            <div className="pagination">

<div className="pagination " style={{margin:'0 35px'}}>
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
<button className="btn btn-next" style={{margin:'0 35px'}} onClick={nextToLastPage}> Next <FaArrowRight /></button>
</div>
    </>
  )
}
