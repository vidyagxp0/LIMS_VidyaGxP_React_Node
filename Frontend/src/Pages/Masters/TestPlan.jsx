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
import { CButton, CCol, CFormInput, CFormSelect, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react"

export default function TestPlan() {
  const [statusFilter, setStatusFilter] = useState('');
  const [deleteModal, setDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  const [addModal, setAddModal] = useState(false)


  const badgeStyle = { background: "gray", color: "white", width: "110px" };
  const badgeStyle2 = { background: "#2A5298", color: "white", width: "110px" };
  const badgeStyle3 = { background: "green", color: "white", width: "110px" };
  const badgeStyle4 = { background: "red", color: "white", width: "110px" };
  const badgeStyle5 = { background: "orange", color: "white", width: "110px" };
  const badgeStyle6 = { background: "purple", color: "white", width: "110px" };

  const StatusModal = (_props) => {
    return (
      <CModal alignment="center" visible={_props.visible} onClose={_props.closeModal} size="lg">
        <CModalHeader>
          <CModalTitle>Add Material</CModalTitle>
        </CModalHeader>
        <CModalBody >
        <CFormInput
          label='Specification ID'
          className="mb-3"
          type="text"
          placeholder=""
          /> 
           <CFormInput
          label='Product/Material Name'
          className="mb-3"
          type="text"
          placeholder="Product/Material Name"
          /> 
           <CFormInput
          label='Test Plan Comments'
          className="mb-3"
          type="text"
          placeholder="Test Plan Comments"
          />  
           <CFormSelect 
           className="mb-3"
         label="Sampling Quantity UOM"
         options={[
        'Select UOM',
        { label: 'gm', value: 'gm' },
        { label: 'ml', value: 'ml' },
         ]}
            /> 

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
            <input  type="checkbox" /> <span>Test Grouping Required</span><button style={{ borderRadius: '5px', margin: '17px 20px', padding: '2px 6px', backgroundColor: '#0f93c3', border: '1px solid #0f93c3', color: 'white' }}>Refresh</button>
          </div>
        </div>

        <CFormSelect 
           className="mb-3"
         label="Coa Template"
         options={[
        'Select Coa Template',
        { label: 'Test Coa', value: 'test-coa' },
        { label: 'Windlas Template', value: 'windlas-template' },
         ]}
            /> 



        <label className='my-2'  htmlFor="">Remarks</label> <br />
        <textarea className="line4 w-100 mx-1"  rows="4" cols="50" ></textarea>

        <div className="d-flex gap-3 mt-4">
            <CButton color="light w-50" onClick={_props.closeModal}>&lt; Back</CButton>
            <CButton color="primary w-50">Submit</CButton>
          </div>
        
        </CModalBody>
      </CModal>
    )
  }

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
    {id:1, user: 'Initiated Product', Date: 'May 17th 24 14:34', DayComplete: '10', Status: 'APPROVED' },
    {id:2, user: 'Initiated Product', Date: 'May 17th 24 14:34', DayComplete: '10', Status: 'INITIATED' },
    {id:3, user: 'Initiated Product', Date: 'May 17th 24 14:34', DayComplete: '10', Status: 'DROPPED' },
    {id:4, user: 'Initiated Product', Date: 'May 17th 24 14:34', DayComplete: '10', Status: 'INITIATED' },
    {id:5, user: 'Initiated Product', Date: 'May 17th 24 14:34', DayComplete: '10', Status: 'DROPPED' },
    {id:6, user: 'Initiated Product', Date: 'May 17th 24 14:34', DayComplete: '10', Status: 'REJECTED' },
    {id:7, user: 'Initiated Product', Date: 'May 17th 24 14:34', DayComplete: '10', Status: 'REINITIATED' },
    {id:8, user: 'Initiated Product', Date: 'May 17th 24 14:34', DayComplete: '10', Status: 'DROPPED' },
    {id:9, user: 'Initiated Product', Date: 'May 17th 24 14:34', DayComplete: '10', Status: 'DROPPED' },
    {id:10, user: 'Initiated Product', Date: 'May 17th 24 14:34', DayComplete: '10', Status: 'APPROVED' },
  ]);

  const DeleteModal = (_props) => {
    return (
        <CModal alignment="center" visible={_props.visible} onClose={_props.closeModal} size="lg">
            <CModalHeader>
                <CModalTitle>Delete User</CModalTitle>
            </CModalHeader>
            <CModalBody>
                <p>Are you sure you want to delete this material?</p>
            </CModalBody>
            <CModalFooter>
                <CButton
                    color="secondary"
                    onClick={_props.closeModal}
                    style={{
                        marginRight: "0.5rem",
                        fontWeight: "500",
                    }}
                >
                    Cancel
                </CButton>
                <CButton
                    color="danger"
                    onClick={_props.confirmDelete}
                    style={{
                        fontWeight: "500",
                        color: "white",
                    }}
                >
                    Delete
                </CButton>
            </CModalFooter>
        </CModal>
    );
};

const handleDeleteClick = (id) => {
  setDeleteId(id);
  setDeleteModal(true);
};

const handleDeleteConfirm = () => {
  setEmployees((prevEmployees) => prevEmployees.filter((employee) => employee.id !== deleteId));
  setDeleteModal(false);
};


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
        <td ><button  
                        className={`p-1 small w-75 rounded text-light d-flex justify-content-center align-items-center bg-${
                          employee.Status === "INITIATED"
                            ? "blue-700"
                            : employee.Status === "APPROVED"
                            ? "green-700"
                            : employee.Status === "REJECTED"
                            ? "red-700"
                            : employee.Status === "REINITIATED"
                            ? "yellow-500"
                            : employee.Status === "DROPPED"
                            ? "purple-700"
                            : "white"
                        }`} style={{fontSize:'0.6rem'}}
                      >
                        {employee.Status}
                      </button></td>
        <td>
          <div className="d-flex gap-3">
            <Link to="/approval/1321"><FontAwesomeIcon icon={faEye} /></Link>
            <div className="cursor-pointer" >
              <FontAwesomeIcon onClick={() => setAddModal(true)} icon={faPenToSquare} />
            </div>
            <Link to="#"  onClick={() => handleDeleteClick(employee.id)}>
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
     <div className="m-5 mt-3">
         <div className="main-head">
             <h4 className="fw-bold">Test plans</h4>
          </div>

      <div className="d-flex justify-content-between mt-5 mb-3">
        <div className="w-25">
            <CFormSelect
               onChange={(e) => setStatusFilter(e.target.value)} 
               style={{fontSize:'0.9rem'}}
               value={statusFilter}
            >
              <option value="">All</option>
              <option value="initiated">Initiated</option>
              <option value="approved">Approved</option>
              <option value="rejected">Rejected</option>
              <option value="reinitiated">Reinitiated</option>
              <option value="dropped">Dropped</option>
            </CFormSelect>
        </div>

        <button
          className="btn btn-primary"
          type="button"
          style={{fontSize:'0.9rem'}}
          onClick={() => setAddModal(true)}
          >
          <span>Add Test Plan</span>
        </button>
      </div>

        <div
          className=" rounded bg-white"
          style={{fontFamily:'sans-serif', fontSize:'0.9rem' ,boxShadow:'5px 5px 20px #5D76A9'}}
        >
        <CTable align="middle" responsive className="mb-0    table-responsive">
          <thead>
            <tr>
              <th style={{ background: "#5D76A9", color: "white"}}>Sr.no.</th>
              <th style={{ background: "#5D76A9", color: "white"}}>Specification Id</th>
              <th style={{ background: "#5D76A9", color: "white"}}>Product Name</th>
              <th style={{ background: "#5D76A9", color: "white"}}>Tests</th>
              <th style={{ background: "#5D76A9", color: "white"}}>Initiated At</th>
              <th style={{ background: "#5D76A9", color: "white"}}>Status</th>
              <th style={{ background: "#5D76A9", color: "white"}}>Action</th>
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
                 
      {addModal && <StatusModal visible={addModal} closeModal={() => setAddModal(false)} />}
    
      {deleteModal && (
        <DeleteModal
        visible={deleteModal}
        closeModal={() => setDeleteModal(false)}
        confirmDelete={handleDeleteConfirm}
        />
      )}

    </>
  )
}
