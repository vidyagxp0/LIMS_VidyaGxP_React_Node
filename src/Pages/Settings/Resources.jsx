import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { CgAddR } from "react-icons/cg";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { HiDotsHorizontal } from "react-icons/hi";
import { FaArrowRight } from 'react-icons/fa';
import { IoEyeSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';


export default function Resources() {
  const [storageName, setStorageName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [filterStatus, setFilterStatus] = useState("Select Status");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const employees = [
    { user: 'Initiated Product',  role: 'Sacubitril', departments: 'ARIP0000095', joiningDate: 'N/A' , addedBy: 'RPS-TSLV-00',  status: 'ACTIVE'  },
    { user: 'Completed Product',  role: 'Valsartan', departments: 'ARIP0000096', joiningDate: 'N/A' , addedBy: 'RPS-TSLV-01',  status: 'INACTIVE'  },
  
  ];

  const handleAddStorage = () => {
    if (storageName.trim() === "") {
      setErrorMessage("Storage condition is Required");
    } else {
      toast.warning("Apologies, an unexpected error occurred while adding the Storage Condition.")
    }
  };
  const notify = () => toast("Wow so easy!");

  const pageSize = 4;
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, employees.length);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredEmployees = employees
    .filter(employee =>
      employee.user.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(employee => 
      filterStatus === "Select Status" || employee.status === filterStatus
    );

  const renderRows = () => {
    return filteredEmployees.slice(startIndex, endIndex).map((employee, index) => (
        <tr key={startIndex + index}>
            <td><input type="checkbox" /></td>
            <td>{startIndex + index + 1}</td>
            <td>{employee.user}</td>
            <td>{employee.addedBy}</td>
            <td style={{width:"110px"}}
          className={`rounded-3 ${
            employee.status === "ACTIVE" ? "bg-success text-white" : "bg-danger text-white"
          } d-flex justify-content-center p-1 m-2 `}
        >
          {employee.status}
        </td>
        <td>
                &nbsp; &nbsp; &nbsp;
                <HiDotsHorizontal />
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
        <h5> Worksheet Resources</h5>
      </div>

      <div id="div2">
        <div id="searchmain">
          <div id="searchicon">
            <CiSearch />
          </div>
          <div className="">
            <input
              type="text"
              className=""
              id=""
              placeholder="search"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
        </div>
        <div className="dropdown m-5">
        </div>
        <div className="dropdown">
          <div>
            <button className="btn border" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <select id='selectOption' value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
                <option>Select Status </option>
                <option>ACTIVE</option>
                <option>INACTIVE</option>
              </select>
            </button>
          </div>
        </div>

        <button
          id="Addbtn"
          className="btn btn-primary m-5"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
        >
          <CgAddR /> <span>Add Worksheet Resources</span>
        </button>

        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasRight"
          aria-labelledby="offcanvasRightLabel"
        >
          <div className="offcanvas-header">
            <div id="line1">
              <h5 className="offcanvas-title" id="offcanvasRightLabel">
                Add Worksheet Resources
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
          <p style={{marginLeft:'20px'}}>Add information and add new worksheet resource</p>
        
          <label className="line3" htmlFor="">Resource Name</label>
          <input className="line4" required type="text" placeholder="Resource Name"/>
         
          <div id="line5">
            <button
              type="button"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            >
              &lt; Back
            </button>
            <button>Submit</button>
          </div>
          <div>
            <ToastContainer/>
          </div>
        </div>
      </div>

      <br />
      <div className='table-responsive p-4 container1'>
        <table className='table'>
          <thead>
            <tr>
              <th><input type="checkbox" /></th>
              <th>Sr.no.</th>
              <th>Resource Name</th>
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

      <div className="pagination">
        <div className="pagination " style={{margin:'0 30px'}}>
          <div className='mr-5'>
            <button className="btn  mr-2" onClick={prevPage} disabled={currentPage === 1}>&lt;&lt;</button>
          </div>
          <div className="current-page-number mr-2 bg-dark-subtle page-item">
            <button className='btn rounded-circle'> {currentPage} </button>
          </div>
          <div>
            <button className="btn mr-2" onClick={nextPage} disabled={endIndex >= filteredEmployees.length}>&gt;&gt;</button>
          </div>
        </div>
        <button className="btn btn-next" style={{margin:'0 30px'}} onClick={nextToLastPage}> Next <FaArrowRight /></button>
      </div>
    </>
  );
}
