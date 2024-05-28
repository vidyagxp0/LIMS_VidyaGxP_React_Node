import React,{useState} from 'react'
import { HiDotsHorizontal } from "react-icons/hi";
import { CgAddR, CgCalendarDates } from 'react-icons/cg';
import { FaArrowRight } from 'react-icons/fa';
import { IoEyeSharp } from "react-icons/io5";
import {Link} from 'react-router-dom'

import { faEye, faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



export default function TestCategories() {
    const [statusFilter, setStatusFilter] = useState('');

    const badgeStyle = { background: "gray", color: "white", width: "110px" };
    const badgeStyle2 = { background: "#2A5298", color: "white", width: "110px" };
    const badgeStyle3 = { background: "green", color: "white", width: "110px" };
    const badgeStyle4 = { background: "red", color: "white", width: "110px" };
    const badgeStyle5 = { background: "orange", color: "white", width: "110px" };
    const badgeStyle6 = { background: "purple", color: "white", width: "110px" };
    

  const pageSize = 8; 
  const [currentPage, setCurrentPage] = useState(1);
  const [employees, setEmployees] = useState([
      { user: 'Initiated Product',  Date: 'May 17th 24 14:34', DayComplete: '10',AddedON:'May 17th 24 14:34', Status: 'APPROVED' },
      { user: 'Initiated Product',  Date: 'May 17th 24 14:34', DayComplete: '10', Status: 'INITIATED'  },
      {  user: 'Initiated Product', Date: 'May 17th 24 14:34', DayComplete: '10', Status: 'INITIATED'  },
      {user: 'Initiated Product',  Date: 'May 17th 24 14:34', DayComplete: '10', Status: 'APPROVED' },
      {user: 'Initiated Product',  Date: 'May 17th 24 14:34', DayComplete: '10', Status: 'DROPPED' },
      {user: 'Initiated Product',  Date: 'May 17th 24 14:34', DayComplete: '10', Status: 'REJECTED' },
      {user: 'Initiated Product',  Date: 'May 17th 24 14:34', DayComplete: '10', Status: 'REINITIATED' },
      {user: 'Initiated Product',  Date: 'May 17th 24 14:34', DayComplete: '10', Status: 'DROPPED' },
      {user: 'Initiated Product',  Date: 'May 17th 24 14:34', DayComplete: '10', Status: 'DROPPED' },
      { user: 'Initiated Product',  Date: 'May 17th 24 14:34', DayComplete: '10', Status: 'APPROVED' },
  ]);

  const filteredEmployees = employees.filter(employee =>
    statusFilter === '' || employee.Status.toLowerCase() === statusFilter.toLowerCase()
  );
  const deleteEmployee = (index) => {
    const updatedEmployees = employees.filter((_, i) => i !== index);
    setEmployees(updatedEmployees);
  };


  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, employees.length);

  const renderRows = () => {
      return filteredEmployees.slice(startIndex, endIndex).map((employee, index) => (
          <tr key={startIndex + index}>
              <td>{startIndex + index + 1}</td>
              <td>{employee.user}</td>
              <td>{employee.DayComplete}</td>
              <td>{employee.DayComplete}</td>
              <td>{employee.Date}</td>
              <td > <div
            className="d-flex justify-content-center py-2 px-3 small rounded fw-bold"
            style={
              employee.Status === "INITIATED" ? badgeStyle2 :
              employee.Status === "APPROVED" ? badgeStyle3 :
              employee.Status === "REJECTED" ? badgeStyle4 :
              employee.Status === "REINITIATED" ? badgeStyle5 :
              employee.Status === "DROPPED" ? badgeStyle6 :
              badgeStyle
            }
          >
            {employee.Status}
          </div></td>
              <td>
              <div className="d-flex gap-3">
			 <Link to="/approval/1321"><FontAwesomeIcon icon={faEye} /></Link>
                        <div className="cursor-pointer" >
                            <FontAwesomeIcon  data-bs-toggle="offcanvas"
                data-bs-target="#AddTestCategory"
                icon={faPenToSquare} />
                        </div>
                        <Link to="#" onClick={() => deleteEmployee(startIndex + index)}>
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
    setCurrentPage(Math.ceil(employees.length / pageSize));
};
  return (
    <>
     <div id="div1">
        <h5>Test Category</h5>
      </div>

      <div id="div2" className='p-5 ' style={{display:'flex',justifyContent:'space-between'}}>

         <div className="dropdown">
                    <div>
                        <button className="btn border" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Show
                            <select id='selectOption' onChange={(e) => setStatusFilter(e.target.value)} style={{outline:'none'}}>
                            <option value="">All</option>
                                <option value="initiated">Initiated</option>
                                <option value="approved">Approved</option>
                                <option value="rejected">Rejected</option>
                                <option value="reinitiated">Reinitiated</option>
                                <option value="dropped">Droped</option>
                            </select>

                        </button>

                    </div>
                </div>

         <button
          id=""
          className="btn btn-primary"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#AddTestCategory"
          aria-controls="offcanvasRight"
          >
          <CgAddR />  <span style={{fontSize:'14px',fontWeight:'bold',marginLeft:'5px'}}>Add Test Category</span>
        </button>

    </div>
    
        <div
        className="offcanvas offcanvas-end overflow-y-scroll"
        tabIndex="-1"
        id="AddTestCategory"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header ">
          <div id="line1"><h5 className="offcanvas-title" id="offcanvasRightLabel">
          Add Test Category
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
        <p style={{marginLeft:'20px'}}>Add information of Test Category</p>
            
        <label className="line3" htmlFor="">Name</label>
        <input className="line4" required type="text" placeholder="Category Name"/>

        <label className="line3" htmlFor="">Unique Code</label>
        <input className="line4" required type="text" placeholder="Unique Code"/>

        <label className="line3" htmlFor="">Description</label>
        <input className="line4" required type="text" placeholder="Description"/> 
       

         <div id="line5">
          <button type="button"
            data-bs-dismiss="offcanvas"
            aria-label="Close">&lt; Back</button>
           <button>Submit</button>
          </div>
           </div>

           {/* Employee table */}
           <div className='table-responsive p-4 container1'>
                <table className='table shadow' style={{fontSize:'0.8rem',margin:'0px auto',width:'98%'}}>
                    <thead>
                        <tr>
                            <th>Sr.no.</th>
                            <th>Category Name</th>
                            <th>Unique Code</th>
                            <th>Description</th>
                            <th>Added On</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderRows()}
                    </tbody>
                </table>
            </div>

            <div className="pagination"  style={{margin:'0 35px'}}>

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

<button className="btn btn-next"  onClick={nextToLastPage}> Next <FaArrowRight /></button>
</div>


    </>
  )
}
