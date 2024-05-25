import React, { useState } from "react";
// import "./StorageCondition.css";
import { CiSearch } from "react-icons/ci";
import { CgAddR } from "react-icons/cg";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { faEye, faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";




export default function StocksOnboarding() {
  const [storageName, setStorageName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleAddStorage = () => {
    if (storageName.trim() === "") {
      setErrorMessage("Storage condition is Required");
    } else {
      toast.warning("Apologies, an unexpected error occurred while adding the Storage Condition.")
    }
  };
  const notify = () => toast("Wow so easy!");


  const pageSize = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const employees = [
    { user: 'HYO', ProdName: 'Sacubitril', SpecificID: 'ARIP0000095', SpecificName: 'test', EffectFrom: 'May 18th 24', ReviewDate: 'Aug 18th 24', status: 'APPROVED' },
    { user: 'HYO', ProdName: 'Sacubitril', SpecificID: 'ARIP0000095', SpecificName: 'test', EffectFrom: 'May 18th 24', ReviewDate: 'Aug 18th 24', status: 'APPROVED' },
    { user: 'CHPOIL', ProdName: 'Sacubitril', SpecificID: 'ARIP0000095', SpecificName: 'test', EffectFrom: 'May 18th 24', ReviewDate: 'Aug 18th 24', status: 'APPROVED' },
    { user: 'HYO', ProdName: 'Sacubitril', SpecificID: 'ARIP0000095', SpecificName: 'test', EffectFrom: 'May 18th 24', ReviewDate: 'Aug 18th 24', status: 'APPROVED' },
    { user: 'HYO', ProdName: 'Sacubitril', SpecificID: 'ARIP0000095', SpecificName: 'test', EffectFrom: 'May 18th 24', ReviewDate: 'Aug 18th 24', status: 'APPROVED' },
    { user: 'PM-001', ProdName: 'Sacubitril', SpecificID: 'ARIP0000095', SpecificName: 'test', EffectFrom: 'May 18th 24', ReviewDate: 'Aug 18th 24', status: 'APPROVED' },
    { user: 'HYO', ProdName: 'Sacubitril', SpecificID: 'ARIP0000095', SpecificName: 'test', EffectFrom: 'May 18th 24', ReviewDate: 'Aug 18th 24', status: 'APPROVED' },
    { user: 'TSTvl', ProdName: 'Sacubitril', SpecificID: 'ARIP0000095', SpecificName: 'test', EffectFrom: 'May 18th 24', ReviewDate: 'Aug 18th 24', status: 'APPROVED' },
    { user: 'HYO', ProdName: 'Sacubitril', SpecificID: 'ARIP0000095', SpecificName: 'test', EffectFrom: 'May 18th 24', ReviewDate: 'Aug 18th 24', status: 'APPROVED' },
    { user: 'HYO', ProdName: 'Sacubitril', SpecificID: 'ARIP0000095', SpecificName: 'test', EffectFrom: 'May 18th 24', ReviewDate: 'Aug 18th 24', status: 'APPROVED' },
  ];
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, employees.length);

  const renderRows = () => {
    return employees.slice(startIndex, endIndex).map((employee, index) => (
      <tr key={startIndex + index}>
        <td><input type="checkbox" /></td>
        <td>{startIndex + index + 1}</td>
        <td>{employee.user}</td>
        <td>{employee.ProdName}</td>
        <td>{employee.SpecificID}</td>
        <td>{employee.SpecificName}</td>
        <td>{employee.EffectFrom}</td>
        <td>{employee.ReviewDate}</td>
        <td id='edatabtn' className={`rounded-5 ${employee.status === 'Active' ? 'bg-danger' : 'bg-warning'} bg-opacity-25 text-${employee.status === 'Active' ? 'danger' : 'warning'} d-flex justify-content-center p-1 m-2`} >{employee.status}</td>
        <td>{employee.EffectFrom}</td>
        <td>
          <div className="d-flex gap-3">
            <Link to="/stock-management/stock-onboarding-details"><FontAwesomeIcon icon={faEye} /></Link>
            <div className="cursor-pointer" data-bs-toggle="offcanvas" data-bs-target="#editVerify" aria-controls="offcanvasRight"><FontAwesomeIcon icon={faPenToSquare} /></div>
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
        <h5>Stock Registration</h5>
      </div>


      <div id="div2" style={{ display: 'flex', justifyContent: 'space-between' }}>

        <div id="searchmain">
          <div id="searchicon">
            <CiSearch />
          </div>

          <div className="">
            <input type="text" className="" id="" placeholder="search" />
          </div>
        </div>
        <div className="dropdown m-5">
        </div>

        <div className="dropdown">
          <div>
            <button className="btn border" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">

              <select id='selectOption'>
                <option>All</option>
                <option>Initiated</option>
                <option>Approved</option>
                <option>Rejected</option>
                <option>Reinitiated</option>
                <option>Droped</option>
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
          <CgAddR /> <span style={{ fontSize: '14px', fontWeight: 'bold', marginLeft: '5px' }}>Add Stock</span>
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
                type="radio"
                name="options"
                value=" rm-stock"

              />
              RM Stock
            </label>
            <br />
            <label style={{ padding: '7px 0' }}>
              <input
                type="radio"
                name="options"
                value="pm-stock"
              />
              PM Stock
            </label>
            <br />
            <label>
              <input
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
          <div>
            <ToastContainer />
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
        <div className="offcanvas offcanvas-end" tabIndex="-1" id="editVerify" aria-labelledby="offcanvasRightLabel">
          <div className="offcanvas-header border-bottom pb-2 border-2 border-dark mx-3 px-0">
            <h5 className="offcanvas-title" id="offcanvasRightLabel">View Stock Verification</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">

          </div>
        </div>

        <div className="pagination" style={{ margin: '0 35px' }}>

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
