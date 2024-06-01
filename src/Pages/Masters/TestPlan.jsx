import React, { useState } from 'react'
import { HiDotsHorizontal } from "react-icons/hi";
import { CgAddR, CgCalendarDates } from 'react-icons/cg';
import { FaArrowRight } from 'react-icons/fa';
import { IoEyeSharp } from "react-icons/io5";
import { TiArrowRightThick } from "react-icons/ti";
import { TiArrowLeftThick } from "react-icons/ti";
import './TestPlan.css'
import { Link } from 'react-router-dom';

import { faEye, faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CTable } from '@coreui/react';


export default function TestPlan() {
  const [statusFilter, setStatusFilter] = useState('');

  const badgeStyle = { background: "gray", color: "white", width: "110px" };
  const badgeStyle2 = { background: "#2A5298", color: "white", width: "110px" };
  const badgeStyle3 = { background: "green", color: "white", width: "110px" };
  const badgeStyle4 = { background: "red", color: "white", width: "110px" };
  const badgeStyle5 = { background: "orange", color: "white", width: "110px" };
  const badgeStyle6 = { background: "purple", color: "white", width: "110px" };

  const [leftArray, setLeftArray] = useState([
    "Viscosity @40C",
    "TAN Total acid number",
    "Water Content PPM",
    "Average Weight",
    "Description",
    "Assay test for SPP",
    "Specific Gravity  PA",
    "Color Test",
    "Specific Gravity",
    "Melting Range",
    "Color",
    "Ph test",
    "test",
    "Hydroxyl Value",
    "Acid Value",
    "Viscosity (mPa.s)",
    "Infrared spectrum",
    "Appearance (Form)",
    "ph test new",
    "Micro Media",
    "FG Assay Test",
    "VDC-PH TEST",
    "Water Ph test",
    "Assay",
    "Description",
    "Water content KF1",
    "Resolution",
    "% RSD of Standard with racketing std.",
    "Theoretical Plates.",
    "Tailing Factor of standard",
    "Assay (on anhydrous basis)",
    "Water content",
    "SP_T_001",
    "New Product Test"
  ]);

  const [rightArray, setRightArray] = useState([
    "Inspections",
    "Audit",
    "Refference",
    "CCTT",
  ]);

  const moveRight = () => {
    let leftElement = document.getElementsByClassName('check-left');
    for (let index = 0; index < leftElement.length; index++) {
      if (leftElement[index].checked) {
        let data = leftElement[index].value;
        let left = leftArray.filter((value) => value !== data);
        setLeftArray(left);
        rightArray.push(data);
        setRightArray(rightArray);
        break  // Important
      }
    }
  }

  const moveLeft = () => {
    let rightElement = document.getElementsByClassName('check-right');
    for (let index = 0; index < rightElement.length; index++) {
      if (rightElement[index].checked) {
        let data = rightElement[index].value;
        let right = rightArray.filter((value) => value !== data);
        setRightArray(right);
        leftArray.push(data);
        setLeftArray(leftArray);
        break         // Important
      }
    }
  }

  const clicked = () => {
    let checkboxes = document.querySelectorAll('.check-left, .check-right');
    checkboxes.forEach((checkbox) => {
      checkbox.checked = false;
    });
    let allLabels = document.querySelectorAll('.labels');
    allLabels.forEach((label) => {
      label.classList.remove('clicked');
    });

    let label = event.target;
    label.classList.add('clicked');
    label.checked = true;
  };


  const pageSize = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [employees, setEmployees] = useState([
    { user: 'Initiated Product', Date: 'May 17th 24 14:34', DayComplete: '10', Status: 'APPROVED' },
    { user: 'Initiated Product', Date: 'May 17th 24 14:34', DayComplete: '10', Status: 'INITIATED' },
    { user: 'Initiated Product', Date: 'May 17th 24 14:34', DayComplete: '10', Status: 'DROPPED' },
    { user: 'Initiated Product', Date: 'May 17th 24 14:34', DayComplete: '10', Status: 'INITIATED' },
    { user: 'Initiated Product', Date: 'May 17th 24 14:34', DayComplete: '10', Status: 'DROPPED' },
    { user: 'Initiated Product', Date: 'May 17th 24 14:34', DayComplete: '10', Status: 'REJECTED' },
    { user: 'Initiated Product', Date: 'May 17th 24 14:34', DayComplete: '10', Status: 'REINITIATED' },
    { user: 'Initiated Product', Date: 'May 17th 24 14:34', DayComplete: '10', Status: 'DROPPED' },
    { user: 'Initiated Product', Date: 'May 17th 24 14:34', DayComplete: '10', Status: 'DROPPED' },
    { user: 'Initiated Product', Date: 'May 17th 24 14:34', DayComplete: '10', Status: 'APPROVED' },
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
        <td>{employee.user}</td>
        <td>{employee.DayComplete}</td>
        <td>{employee.Date}</td>
        {/* <td>{employee.Status}</td> */}
        <td ><div
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
              <FontAwesomeIcon data-bs-toggle="offcanvas"
                data-bs-target="#AddTestPlan" icon={faPenToSquare} />
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
    setCurrentPage(Math.ceil(employees.length / pageSize));
  };
  return (
    <>
      <div id="div1">
        <h5 style={{ fontWeight: "bolder" }}>Test plans</h5>
      </div>

      <div id="div2" className='p-5 ' style={{ display: 'flex', justifyContent: 'space-between' }}>

        <div className="dropdown">
          <div>
            <button className="btn border" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">

              <select id='selectOption' onChange={(e) => setStatusFilter(e.target.value)} style={{ border: "2px solid gray", width: "150px", borderRadius: "5px", padding: "4px" }}>
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
          className="btn btn-primary"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#AddTestPlan"
          aria-controls="offcanvasRight"
        >
          <span style={{ fontSize: '14px', fontWeight: 'bold', marginLeft: '5px' }}>Add Test Plan</span>
        </button>

      </div>

      <div
        className="offcanvas offcanvas-end overflow-y-scroll w-75"
        tabIndex="-1"
        id="AddTestPlan"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header ">
          <div id="line1"><h5 className="offcanvas-title" id="offcanvasRightLabel">
            Add Test Plan
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
        <p style={{ marginLeft: '20px' }}>Add information and Add Test Plan</p>

        <label className="line3" htmlFor="">Specification ID</label>
        <input className="line4" required type="text" placeholder="Select..." />

        <label className="line3" htmlFor="">Product/Material Name</label>
        <input className="line4" required type="text" placeholder="Product/Material Name" />

        <label className="line3" htmlFor="">Test Plan Comments</label>
        <input className="line4" required type="text" placeholder="Test Plan Comments" />

        <label className="line3" htmlFor="">Sampling Quantity UOM</label>
        <select name="Specification Type" className="line4">
          <option value="">Select UOM</option>
          <option value="gm">gm</option>
          <option value="ml">ml</option>
        </select>

        <div className="drag-drop">
          <div className="sub-container">
            <h5>Available Tests</h5>
            <div className="list-container">
              <ul>
                {leftArray.map((data) =>
                  <li key={data}><input type="checkbox" value={data} id={data} className="check-left" /><label className="labels" htmlFor={data} onClick={clicked}>{data}</label></li>
                )}
              </ul>
            </div>
          </div>
          <div className="mid-container">
            <button className="arrow-button" onClick={moveRight}><TiArrowRightThick /></button>
            <button className="arrow-button" onClick={moveLeft}><TiArrowLeftThick /></button>
          </div>
          <div className="sub-container">
            <h5>Selected</h5>
            <div className="list-container">
              <ul>
                {rightArray.map((data) =>
                  <li key={data}><input type="checkbox" value={data} id={data} className="check-right" /><label className="labels" htmlFor={data} onClick={clicked}>{data}</label></li>
                )}
              </ul>
            </div>
            <input type="checkbox" /> <span>Test Grouping Required</span><button style={{ borderRadius: '5px', margin: '17px 20px', padding: '2px 6px', backgroundColor: '#0f93c3', border: '1px solid #0f93c3', color: 'white' }}>Refresh</button>
          </div>
        </div>


        <label className="line3" htmlFor="">Coa Template</label>
        <select name="Specification Type" className="line4">
          <option value="">Select Coa Template</option>
          <option value="gm">Test Coa</option>
          <option value="ml">Windlas Template</option>
        </select>

        <label className="line3" htmlFor="">Remarks</label>
        <textarea className="line4" style={{ padding: '40px' }} rows="4" cols="50" ></textarea>

        <div id="line5">
          <button type="button"
            data-bs-dismiss="offcanvas"
            aria-label="Close">&lt; Back</button>
          <button>Submit</button>
        </div>
      </div>

      <div className=' bg-white rounded mx-5' style={{ border: "2px solid gray" }} >
        <CTable align="middle" responsive className="mb-0 table-striped table-responsive">
          <thead>
            <tr>
              <th style={{ background: "#3C496A", color: "white" }}>Sr.no.</th>
              <th style={{ background: "#3C496A", color: "white" }}>Specification Id</th>
              <th style={{ background: "#3C496A", color: "white" }}>Product Name</th>
              <th style={{ background: "#3C496A", color: "white" }}>Tests</th>
              <th style={{ background: "#3C496A", color: "white" }}>Initiated At</th>
              <th style={{ background: "#3C496A", color: "white" }}>Status</th>
              <th style={{ background: "#3C496A", color: "white" }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {renderRows()}
          </tbody>
        </CTable>
      </div>

      <div className="d-flex justify-content-between align-items-center  mx-5 my-4">
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


    </>
  )
}
