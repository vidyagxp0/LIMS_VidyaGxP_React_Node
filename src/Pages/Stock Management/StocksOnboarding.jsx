import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { CgAddR } from "react-icons/cg";
import 'react-toastify/dist/ReactToastify.css';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { faEye, faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function StocksOnboarding() {
  const [storageName, setStorageName] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const badgeStyle = { background: "gray", color: "white", width: "110px" };
    const badgeStyle2 = { background: "#2A5298", color: "white", width: "110px" };
    const badgeStyle3 = { background: "green", color: "white", width: "110px" };
    const badgeStyle4 = { background: "red", color: "white", width: "110px" };
    const badgeStyle5 = { background: "orange", color: "white", width: "110px" };
    const badgeStyle6 = { background: "purple", color: "white", width: "110px" };


  const [employees, setEmployees] = useState([
    { id: 1, user: 'HYO', ProdName: 'Sacubitril', SpecificID: 'ARIP0000095', SpecificName: 'test', EffectFrom: 'May 18th 24', ReviewDate: 'Aug 18th 24', status: 'APPROVED' },
    { id: 2, user: 'HYO', ProdName: 'Sacubitril', SpecificID: 'ARIP0000095', SpecificName: 'test', EffectFrom: 'May 18th 24', ReviewDate: 'Aug 18th 24', status: 'APPROVED' },
    { id: 3, user: 'CHPOIL', ProdName: 'Sacubitril', SpecificID: 'ARIP0000095', SpecificName: 'test', EffectFrom: 'May 18th 24', ReviewDate: 'Aug 18th 24', status: 'INITIATED' },
    { id: 4, user: 'HYO', ProdName: 'Sacubitril', SpecificID: 'ARIP0000095', SpecificName: 'test', EffectFrom: 'May 18th 24', ReviewDate: 'Aug 18th 24', status: 'INITIATED' },
    { id: 5, user: 'HYO', ProdName: 'Sacubitril', SpecificID: 'ARIP0000095', SpecificName: 'test', EffectFrom: 'May 18th 24', ReviewDate: 'Aug 18th 24', status: 'REJECTED' },
    { id: 6, user: 'PM-001', ProdName: 'Sacubitril', SpecificID: 'ARIP0000095', SpecificName: 'test', EffectFrom: 'May 18th 24', ReviewDate: 'Aug 18th 24', status: 'REINITIATED' },
    { id: 7, user: 'HYO', ProdName: 'Sacubitril', SpecificID: 'ARIP0000095', SpecificName: 'test', EffectFrom: 'May 18th 24', ReviewDate: 'Aug 18th 24', status: 'REJECTED' },
    { id: 8, user: 'TSTvl', ProdName: 'Sacubitril', SpecificID: 'ARIP0000095', SpecificName: 'test', EffectFrom: 'May 18th 24', ReviewDate: 'Aug 18th 24', status: 'APPROVED' },
    { id: 9, user: 'HYO', ProdName: 'Sacubitril', SpecificID: 'ARIP0000095', SpecificName: 'test', EffectFrom: 'May 18th 24', ReviewDate: 'Aug 18th 24', status: 'APPROVED' },
    { id: 10, user: 'HYO', ProdName: 'Sacubitril', SpecificID: 'ARIP0000095', SpecificName: 'test', EffectFrom: 'May 18th 24', ReviewDate: 'Aug 18th 24', status: 'APPROVED' },
  ]);

  
  const deleteEmployee = (id) => {
    const updatedEmployees = employees.filter(employee => employee.id !== id);
    setEmployees(updatedEmployees);
  };

  const filteredEmployees = employees.filter(employee => {
    return (
      (filterStatus === "" || employee.status.toLowerCase() === filterStatus.toLowerCase()) &&
      (employee.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.ProdName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.SpecificID.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.SpecificName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.EffectFrom.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.ReviewDate.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });

  const pageSize = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, filteredEmployees.length);

  const renderRows = () => {
    return filteredEmployees.slice(startIndex, endIndex).map((employee, index) => (
      <tr key={employee.id}>
        <td><input type="checkbox" /></td>
        <td>{startIndex + index + 1}</td>
        <td>{employee.user}</td>
        <td>{employee.ProdName}</td>
        <td>{employee.SpecificID}</td>
        <td>{employee.SpecificName}</td>
        <td>{employee.EffectFrom}</td>
        <td>{employee.ReviewDate}</td>
        <td><div
            className="d-flex justify-content-center py-2 px-3 small rounded fw-bold"
            style={
              employee.status === "INITIATED" ? badgeStyle2 :
              employee.status === "APPROVED" ? badgeStyle3 :
              employee.status === "REJECTED" ? badgeStyle4 :
              employee.status === "REINITIATED" ? badgeStyle5 :
              employee.status === "DROPPED" ? badgeStyle6 :
              badgeStyle
            }
          >
            {employee.status}
          </div></td>
        <td>{employee.EffectFrom}</td>
        <td>
          <div className="d-flex gap-3">
            <Link to="/stock-management/stock-onboarding-details"><FontAwesomeIcon icon={faEye} /></Link>
            <div className="cursor-pointer" onClick={() => deleteEmployee(employee.id)}><FontAwesomeIcon icon={faTrashCan} /></div>
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
        <h5>Stock Registration</h5>
      </div>

      <div id="div2" className="d-flex justify-content-between">
        <div className="d-flex gap-4 w-75">
          <div id="searchmain">
            <div id="searchicon">
              <CiSearch />
            </div>
            <div className="">
              <input
                type="text"
                className="w-75"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <div className="dropdown w-25">
            <div>
              <button className="btn border" type="button">
                <select
                  id='selectOption'
                  onChange={(e) => setFilterStatus(e.target.value)}
                  style={{ outline: 'none' }}
                >
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
        </div>

        <div className="">
          <button
            className="btn btn-primary m-5"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight"
          >
            <CgAddR /> <span style={{ fontSize: '14px', fontWeight: 'bold', marginLeft: '5px' }}>Add Stock</span>
          </button>
        </div>

        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasRight"
          aria-labelledby="offcanvasRightLabel"
        >
          <div className="offcanvas-header">
            <div id="line1">
              <h5 className="offcanvas-title" id="offcanvasRightLabel">
                Stock Registration
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

          <div style={{ marginLeft: '18px', }}>
            <label>
              <input
                className="mx-2"
                type="radio"
                name="options"
                value="rm-stock"
              />
              RM Stock
            </label>
            <br />
            <label style={{ padding: '7px 0' }}>
              <input
                className="mx-2"
                type="radio"
                name="options"
                value="pm-stock"
              />
              PM Stock
            </label>
            <br />
            <label>
              <input
                className="mx-2"
                type="radio"
                name="options"
                value="chemical-stock"
              />
              Chemical Stock
            </label>
          </div>

          <div id="line5">
            <button
              type="button"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            >
              &lt; Back
            </button>
            <button>Next</button>
          </div>
          
        </div>
      </div>

      <br />
      <div className='table-responsive p-4 container1'>
        <table className='table shadow ' style={{ fontSize: '0.8rem', margin: '0px auto', width: '98%' }}>
          <thead>
            <tr>
              <th><input type="checkbox" /></th>
              <th>Sr.no.</th>
              <th>Material Type</th>
              <th>Material Name</th>
              <th>Invoice No.</th>
              <th>Supplier Name</th>
              <th>Vendor Code</th>
              <th>Approved By</th>
              <th>Status</th>
              <th>Location</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {renderRows()}
          </tbody>
        </table>
        <div className="pagination my-4 mx-3">
          <div className="pagination">
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
          <button className="btn btn-next" onClick={nextToLastPage}> Next <FaArrowRight /></button>
        </div>
      </div>
    </>
  )
}
