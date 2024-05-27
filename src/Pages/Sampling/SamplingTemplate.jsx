
import './SamplingTemplate.css'
import React, { useState } from 'react';
import { TiArrowRightThick } from "react-icons/ti";
import { TiArrowLeftThick } from "react-icons/ti";
import { FaArrowRight } from 'react-icons/fa';
import { CgAddR } from 'react-icons/cg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faPenToSquare, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { CButton, CCol, CFormInput, CFormSelect, CRow } from '@coreui/react';
import { Link } from 'react-router-dom';


const SamplingTemplate = () => {
  const [leftArray, setLeftArray] = useState([
    "Change Control",
    "CAPA",
    "Internal Audit",
    "External Audit",
    "Initiator",
    "SQM",
    "CTMS", ,
    "Calendar",
    "EHS",
    "Environment",
    "Documents",
    "Deviation",

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
  const pageSize = 5; // Number of items per page
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState('All');
  const badgeStyle = { background: "gray", color: "white", width: "110px" };
  const badgeStyle2 = { background: " #2A5298", color: "white", width: "110px" };
  const badgeStyle3 = { background: "green", color: "white", width: "110px" };
  const badgeStyle4 = { background: "red", color: "white", width: "110px" };
  const badgeStyle5 = { background: "orange", color: "white", width: "110px" };
  const badgeStyle6 = { background: "purple", color: "white", width: "110px" };

  const employees = [
    { fieldName: "Room is clean", fieldType: 'RadioButton', registeredBy: 'Manager', registeredOn: '2024-05-15', status: 'INITIATED' },
    { fieldName: "sampling check list", fieldType: 'Label', registeredBy: 'Admin', registeredOn: '2024-05-16', status: 'REJECTED' },
    { fieldName: "Manufacturing Date", fieldType: 'DataField', registeredBy: 'Manager', registeredOn: '2024-05-15', status: 'DROPPED' },
    { fieldName: "Cracks Observerd", fieldType: 'Label', registeredBy: 'Admin', registeredOn: '2024-05-16', status: 'REINITIATED' },
    { fieldName: "Batch No", fieldType: 'RadioButton', registeredBy: 'Manager', registeredOn: '2024-05-15', status: 'APPROVED' },
    { fieldName: "Container Name", fieldType: 'DataField', registeredBy: 'Admin', registeredOn: '2024-05-16', status: 'INITIATED' },
    { fieldName: "Cracks Observerd", fieldType: 'DataField', registeredBy: 'Manager', registeredOn: '2024-05-15', status: 'APPROVED' },
    { fieldName: "Sampling Check List", fieldType: 'Label', registeredBy: 'Admin', registeredOn: '2024-05-16', status: 'REINITIATED' },
    { fieldName: "Manufacturing Date", fieldType: 'RadioButton', registeredBy: 'Manager', registeredOn: '2024-05-15', status: 'DROPPED' },
    { fieldName: "Manufacturing Date", fieldType: 'Label', registeredBy: 'Admin', registeredOn: '2024-05-16', status: 'INITIATED' },
  ];

  const filteredEmployees = employees.filter(employee =>
    selectedStatus === 'All' ? true : employee.status.toUpperCase() === selectedStatus.toUpperCase()
  );

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, filteredEmployees.length);

  const renderRows = () => {
    return filteredEmployees.slice(startIndex, endIndex).map((employee, index) => (
      <tr key={startIndex + index}>
        <td>{startIndex + index + 1}</td>
        <td>{employee.fieldName}</td>
        <td>{employee.fieldType}</td>
        <td>{employee.registeredBy}</td>
        <td>{employee.registeredOn}</td>
        <td >
          <button
            className="py-2 px-3 small rounded fw-bold"
            style={
              employee.status === "INITIATED"
                ? badgeStyle2
                : employee.status === "APPROVED"
                  ? badgeStyle3
                  : employee.status === "REJECTED"
                    ? badgeStyle4
                    : employee.status === "REINITIATED"
                      ? badgeStyle5
                      : employee.status === "DROPPED"
                        ? badgeStyle6
                        : badgeStyle
            }
          >
            {employee.status}
          </button>
        </td>
        <td>
          <div className='d-flex'>
            <Link to="/approval/1321" className='mx-2'><FontAwesomeIcon icon={faEye} /></Link>
            <Link to="#" onClick={() => setSelectedEmployee(employee)} data-bs-toggle="offcanvas" data-bs-target="#deleteOffcanvas" aria-controls="deleteOffcanvas">
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
  const filterData = () => {
    if (selectedStatus === "All") {
      return employees;
    }

    return employees.filter((item) => item.status === selectedStatus.toUpperCase());
  };

  const nextToLastPage = () => {
    setCurrentPage(Math.ceil(employees.length / pageSize));
  };
  const handleDelete = () => {
    console.log(`Deleting employee: ${selectedEmployee.name}`);
    // Perform delete operation here
    setSelectedEmployee(null);
  };

  return (
    <div className=" mx-5 ">
      <div className="row my-5 ">
        <div className="main-head">
          <div className="title fw-bold fs-5">Sample Template</div>
        </div>

        <div className="chart-widgets w-100">
          <div className="">
            <div className="row" style={{ cursor: "pointer" }}>
              <button
                className="col shadow p-3 m-3 rounded"
                style={{
                  background: "linear-gradient(45deg,#0d6efd, #9ec5fe )",
                  textAlign: "left",
                }}
                onClick={() => setSelectedStatus("INITIATED")}
              >
                <div className="text-light fs-5">INITIATED</div>
                <div
                  className="count fs-1 text-light fw-bolder"
                  style={{ color: "white" }}
                >
                  {
                    filterData().filter(
                      (item) => item.status === "INITIATED"
                    ).length
                  }
                </div>
              </button>
              <button
                className="col shadow p-3 m-3 rounded"
                style={{
                  background: "linear-gradient(45deg, #d63384, #9ec5fe)",
                  textAlign: "left",
                  boxShadow: "0px 10px 20px  black !important",
                }}
                onClick={() => setSelectedStatus("REINITIATED")}
              >
                <div className="text-light fs-5">REINITIATED</div>

                <div
                  className="count fs-1 text-light fw-bolder"
                  style={{ color: "white" }}
                >
                  {
                    filterData().filter(
                      (item) => item.status === "REINITIATED"
                    ).length
                  }
                </div>
              </button>
              <button
                className="col shadow p-3 m-3 rounded"
                style={{
                  background: "linear-gradient(45deg, #ffc107, #9ec5fe)",
                  textAlign: "left",
                }}
                onClick={() => setSelectedStatus("APPROVED")}
              >
                <div className="text-light fs-5">APPROVED</div>
                <div
                  className="count fs-1 text-light fw-bolder"
                  style={{ color: "white", textAlign: "left" }}
                >
                  {
                    filterData().filter(
                      (item) => item.status === "APPROVED"
                    ).length
                  }
                </div>
              </button>

              <button
                className="col shadow p-3 m-3 rounded"
                style={{
                  background: "linear-gradient(45deg, #dc3545, #9ec5fe)",
                  textAlign: "left",
                }}
                onClick={() => setSelectedStatus("REJECTED")}
              >
                <div className="text-light fs-5">REJECTED</div>
                <div
                  className="count fs-1 text-light fw-bolder"
                  style={{ color: "white" }}
                >
                  {
                    filterData().filter(
                      (item) => item.status === "REJECTED"
                    ).length
                  }
                </div>
              </button>
            </div>
          </div>
        </div>

        <div>
          <CRow className="mb-3">
            <CCol sm={4}>
              <CFormInput
                style={{ border: "2px solid gray" }}
                type="email"
                placeholder="Search..."
              />
            </CCol>
            <CCol sm={3}>
              <CFormSelect
                onChange={(e) => setSelectedStatus(e.target.value)}
                value={selectedStatus}
                style={{ border: "2px solid gray" }}
              >
                <option value="All">All</option>
                <option value="Initiated">Initiated</option>
                <option value="Approved">Approved</option>
                <option value="Rejected">Rejected</option>
                <option value="Reinitiated">Reinitiated</option>
                <option value="Dropped">Dropped</option>
              </CFormSelect>
            </CCol>
            <CCol sm={2}></CCol>
            <CCol sm={3}>
              <div className="d-flex justify-content-end">
                <CButton id="Addbtn"
                  className="btn btn-primary btn-right"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasRight"
                  aria-controls="offcanvasRight"
                  style={{ background: "#4B49B6" }}
                >
                  <CgAddR />  <span>Add Template</span></CButton>
              </div>
            </CCol>
          </CRow>
        </div>
        <div className="offcanvas offcanvas-end w-50" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
          <div className="offcanvas-header border-bottom pb-1 border-2 border-dark px-0 mx-3">
            <h5 className="offcanvas-title" id="offcanvasRightLabel">Add Sampling template</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <p className="text-muted">Add information of Sampling template</p>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">Template Name</label>
              <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Template Name" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">Unique Code</label>
              <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Unique Code" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">Sample Type</label>
              <select className="form-select" aria-label="Default select example">
                <option selected>Select...</option>
                <option value="1">Raw Material</option>
                <option value="3">Hydrochloric Acid</option>
                <option value="2">Hcl</option>
                <option value="2">Petrochemical</option>
              </select>
            </div>
            <div className="header bg-secondary-subtle text-light fw-bolder mb-3">Header</div>
            <div className="d-flex flex-row mb-3 gap-4">
              <div className="w-50">
                <label htmlFor="exampleFormControlInput1" className="form-label">Row</label>
                <input type="number" defaultValue={0} className="form-control" id="exampleFormControlInput1" placeholder="Unique Code" />
              </div>
              <div className="w-50">
                <label htmlFor="exampleFormControlInput1" className="form-label">Columns</label>
                <select className="form-select" aria-label="Default select example">
                  <option value="2" selected>2</option>
                  <option value="4">4</option>
                  <option value="6">6</option>
                </select>
              </div>
            </div>
            <div className="header bg-secondary-subtle text-light fw-bolder mb-3">Body</div>
            <div className="d-flex">
              <div className="w-100 m-3">
                <h5>Available</h5>
                <div className="shadow p-2 rounded border overflow-y-auto" style={{ height: '350px' }}>
                  <ul className='list-group'>
                    {leftArray.map((data) =>
                      <li key={data} className='bg-secondary-subtle my-1 px-3 py-1 text-dark'><input type="checkbox" value={data} id={data} className="check-left d-none" /><label className="labels cursor-pointer" htmlFor={data} onClick={clicked}>{data}</label></li>
                    )}
                  </ul>
                </div>
              </div>
              <div className="m-auto justify-content-center">
                <button className="btn shadow py-1 px-3 mt-5 text-warning fs-4" onClick={moveRight}><TiArrowRightThick /></button>
                <button className="btn shadow py-1 px-3 mt-2 text-warning fs-4" onClick={moveLeft}><TiArrowLeftThick /></button>
              </div>
              <div className="w-100 m-3">
                <h5>Selected</h5>
                <div className="shadow p-2 rounded border overflow-y-auto" style={{ height: '350px' }}>
                  <ul className='list-group'>
                    {rightArray.map((data) =>
                      <li key={data} className='bg-secondary-subtle my-1 px-3 py-1 text-dark'><input type="checkbox" value={data} id={data} className="check-right d-none" /><label className="labels cursor-pointer" htmlFor={data} onClick={clicked}>{data}</label></li>
                    )}
                  </ul>
                </div>
              </div>
            </div>

            <div className="header bg-secondary-subtle text-light fw-bolder mb-3">Footer</div>
            <div className="d-flex flex-row mb-3 gap-4">
              <div className="w-50">
                <label htmlFor="exampleFormControlInput1" className="form-label">Row</label>
                <input type="number" defaultValue={0} className="form-control" id="exampleFormControlInput1" placeholder="Unique Code" />
              </div>
              <div className="w-50">
                <label htmlFor="exampleFormControlInput1" className="form-label">Columns</label>
                <select className="form-select" aria-label="Default select example">
                  <option value="2" selected>2</option>
                  <option value="4">4</option>
                  <option value="6">6</option>
                </select>
              </div>
            </div>
            <div className="d-flex gap-5 mt-5">
              <button className="btn btn-secondary px-3" data-bs-dismiss="offcanvas" aria-label="Close"> Back</button>
              <button className="btn btn-primary px-3"> Submit</button>
            </div>
          </div>
        </div>
        {selectedEmployee && (
          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="deleteOffcanvas"
            aria-labelledby="deleteOffcanvasLabel"
          >
            <div className="offcanvas-header">
              <div id="line1"><h5 className="offcanvas-title" id="deleteOffcanvasLabel">Delete Sampling template</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                  onClick={() => setSelectedEmployee(null)}
                ></button>
              </div>
            </div>
            <div className="offcanvas-body">
              <p>Do you want to delete this Template { }?</p>
              <div className="d-flex justify-content-between">
                <button className="btn btn-light" data-bs-dismiss="offcanvas" onClick={() => setSelectedEmployee(null)}>Back</button>
                <button className="btn btn-info" onClick={handleDelete}>Submit</button>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className='table-responsive bg-white rounded py-3 px-4 mt-5' style={{ boxShadow: "0px 0px 3px black" }}>
        <table className='table'>
          <thead>
            <tr>
              <th>S.No.</th>
              <th>Field Name</th>
              <th>Field Type</th>
              <th>Registered By</th>
              <th>Registered On</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {renderRows()}
          </tbody>
        </table>
       
      </div>

      <div className="d-flex justify-content-between align-items-center mt-4">
        <div className="pagination">
          <button className="btn mr-2" onClick={prevPage} disabled={currentPage === 1}>
            &lt;&lt;
          </button>
          <button className="btn mr-2 bg-dark-subtle rounded-circle">{currentPage}</button>
          <button className="btn mr-2" onClick={nextPage} disabled={endIndex >= employees.length}>
            &gt;&gt;
          </button>
        </div>
        <button className="btn " onClick={nextToLastPage}>
          Next <FaArrowRight />
        </button>
      </div>

    </div>
  );
};

export default SamplingTemplate
