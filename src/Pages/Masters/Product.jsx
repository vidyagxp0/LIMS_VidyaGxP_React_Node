import React, { useState } from 'react';
import { HiDotsHorizontal } from "react-icons/hi";
import { CgAddR, CgCalendarDates } from 'react-icons/cg';
import { FaArrowRight } from 'react-icons/fa';
import { IoEyeSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { faEye, faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CTable } from '@coreui/react';

export default function Product() {
  const pageSize = 5; 
  const [currentPage, setCurrentPage] = useState(1);
  const [statusFilter, setStatusFilter] = useState('');

  const badgeStyle = { background: "gray", color: "white", width: "110px" };
  const badgeStyle2 = { background: " #2A5298", color: "white", width: "110px" };
  const badgeStyle3 = { background: "green", color: "white", width: "110px" };
  const badgeStyle4 = { background: "red", color: "white", width: "110px" };
  const badgeStyle5 = { background: "orange", color: "white", width: "110px" };
  const badgeStyle6 = { background: "purple", color: "white", width: "110px" };

  const [employees, setEmployees] = useState([
      { user: 'Initiated Product', role: 'Sacubitril', departments: 'ARIP0000095', joiningDate: 'N/A', addedBy: 'RPS-TSLV-00', status: 'APPROVED' },
      { user: 'Initiated Product', role: 'Sacubitril', departments: 'ARIP0000095', joiningDate: 'N/A', addedBy: 'RPS-TSLV-00', status: 'APPROVED' },
      { user: 'Initiated Product', role: 'Sacubitril', departments: 'ARIP0000095', joiningDate: 'N/A', addedBy: 'RPS-TSLV-00', status: 'INITIATED' },
      { user: 'Initiated Product', role: 'Sacubitril', departments: 'ARIP0000095', joiningDate: 'N/A', addedBy: 'RPS-TSLV-00', status: 'INITIATED' },
      { user: 'Initiated Product', role: 'Sacubitril', departments: 'ARIP0000095', joiningDate: 'N/A', addedBy: 'RPS-TSLV-00', status: 'APPROVED' },
      { user: 'Initiated Product', role: 'Sacubitril', departments: 'ARIP0000095', joiningDate: 'N/A', addedBy: 'RPS-TSLV-00', status: 'REINITIATED' },
      { user: 'Initiated Product', role: 'Sacubitril', departments: 'ARIP0000095', joiningDate: 'N/A', addedBy: 'RPS-TSLV-00', status: 'APPROVED' },
      { user: 'Initiated Product', role: 'Sacubitril', departments: 'ARIP0000095', joiningDate: 'N/A', addedBy: 'RPS-TSLV-00', status: 'REJECTED' },
      { user: 'Initiated Product', role: 'Sacubitril', departments: 'ARIP0000095', joiningDate: 'N/A', addedBy: 'RPS-TSLV-00', status: 'APPROVED' },
      { user: 'Initiated Product', role: 'Sacubitril', departments: 'ARIP0000095', joiningDate: 'N/A', addedBy: 'RPS-TSLV-00', status: 'DROPPED' },
      { user: 'Initiated Product', role: 'Sacubitril', departments: 'ARIP0000095', joiningDate: 'N/A', addedBy: 'RPS-TSLV-00', status: 'DROPPED' },
  ]);

  const filteredEmployees = employees.filter(employee => 
    statusFilter === '' || employee.status.toLowerCase() === statusFilter.toLowerCase()
  );

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, filteredEmployees.length);

  const renderRows = () => {
    return filteredEmployees.slice(startIndex, endIndex).map((employee, index) => (
      <tr key={startIndex + index}>
        <td>{startIndex + index + 1}</td>
        <td>{employee.user}</td>
        <td>{employee.role}</td>
        <td>{employee.departments}</td>
        <td>{employee.joiningDate}</td>
        <td>{employee.addedBy}</td>
        <td >
          <div
            className="d-flex justify-content-center py-2 px-3 small rounded fw-bold"
            style={
              employee.status === "INITIATED" ? badgeStyle2 :
              employee.status === "APPROVED" ? badgeStyle3 :
              employee.status === "REJECTED" ? badgeStyle4 :
              employee.status === "REINITIATED" ? badgeStyle5 :
              employee.status === "DROPPED" ? badgeStyle6 :
              employee.status === "ALL" ? badgeStyle : badgeStyle
            }
          >
            {employee.status}
          </div>
        </td>
        <td>
          <div className="d-flex gap-3">
            <Link to="/masters/product-details"><FontAwesomeIcon icon={faEye} /></Link>
            <div className="cursor-pointer">
              <FontAwesomeIcon
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight"
                aria-controls="offcanvasRight"
                icon={faPenToSquare}
              />
            </div>
            <Link to="#" onClick={() => deleteEmployee(startIndex + index)}>
              <FontAwesomeIcon icon={faTrashCan} />
            </Link>
          </div>
        </td>
      </tr>
    ));
  };

  const deleteEmployee = (index) => {
    const updatedEmployees = employees.filter((_, i) => i !== index);
    setEmployees(updatedEmployees);
  };

  const nextPage = () => {
    if (currentPage < Math.ceil(filteredEmployees.length / pageSize)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextToLastPage = () => {
    setCurrentPage(Math.ceil(filteredEmployees.length / pageSize));
  };

  return (
    <>
      <div id="div1">
        <h5 style={{fontWeight:"bolder"}}>Products/Materials</h5>
      </div>

      <div id="div2" className='p-5' style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div className="dropdown" >
          <div >
            <button className="btn border" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
              
              <select id='selectOption' style={{border:"2px solid gray", width:"250px", borderRadius:"5px", padding:"4px" }} onChange={(e) => setStatusFilter(e.target.value)}>
                <option value="">All</option>
                <option value="initiated">Initiated</option>
                <option value="approved">Approved</option>
                <option value="rejected">Rejected</option>
                <option value="reinitiated">Reinitiated</option>
                <option value="dropped">Dropped</option>
              </select>
            </button>
          </div>
        </div>

        <button
          className="btn btn-primary"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
        >
          <span style={{ fontSize: '14px', fontWeight: 'bold', marginLeft: '5px' }}>Add Product/Material</span>
        </button>
      </div>

      <div
        className="offcanvas offcanvas-end overflow-y-scroll"
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header">
          <div id="line1">
            <h5 className="offcanvas-title" id="offcanvasRightLabel">Add Product/Material</h5>
            <button
              id="closebtn"
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
        </div>

        <label className="line3" htmlFor="">Name</label>
        <input className="line4" required type="text" placeholder="Product Name" />

        <label className="line3" htmlFor="">Unique Code</label>
        <input className="line4" required type="text" placeholder="Product Code" />

        <label className="line3" htmlFor="">Generic Name</label>
        <input className="line4" required type="text" placeholder="Generic Name" />

        <label className="line3" htmlFor="">Re-testing Period</label>
        <input className="line4" required type="text" placeholder="Retesting Period" />

        <p style={{ margin: '4px 23px' }}>Days</p>

        <div id="line5">
          <button type="button" data-bs-dismiss="offcanvas" aria-label="Close">&lt; Back</button>
          <button>Add Product</button>
        </div>
      </div>

      {/* Employee table */}
      <div className=" rounded m-4  bg-white" style={{border:"2px solid gray"}}>
          <CTable align="middle" responsive className="mb-0 table-striped table-responsive">
          <thead>
            <tr>
              <th style={{background:"#3C496A", color:"white"}}>Sr.no.</th>
              <th style={{background:"#3C496A", color:"white"}}>Unique Code</th>
              <th style={{background:"#3C496A", color:"white"}}>Product Name</th>
              <th style={{background:"#3C496A", color:"white"}}>Generic Name</th>
              <th style={{background:"#3C496A", color:"white"}}>Re-Testing Period</th>
              <th style={{background:"#3C496A", color:"white"}}>Add Date</th>
              <th style={{background:"#3C496A", color:"white"}}>Status</th>
              <th style={{background:"#3C496A", color:"white"}}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {renderRows()}
          </tbody>
        </CTable>
      </div>

      <div className="pagination">
        <div className="pagination" style={{ margin: '0 35px' }}>
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
        <button className="btn btn-next" style={{ margin: '0 35px' }} onClick={nextToLastPage}>Next <FaArrowRight /></button>
      </div>
    </>
  );
}
