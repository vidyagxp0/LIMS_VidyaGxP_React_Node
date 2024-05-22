
import React, { useState } from 'react';

import { FaArrowRight } from 'react-icons/fa';
import { CgAddR } from 'react-icons/cg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faPenToSquare, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { CButton, CCol, CFormInput, CFormSelect, CRow } from '@coreui/react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const WOSTest = () => {
  const top100Films = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
    { label: '12 Angry Men', year: 1957 },];

  const pageSize = 9; 
  const [currentPage, setCurrentPage] = useState(1);
  const employees = [

    { fieldName: "Room is clean", fieldType: 'RadioButton', registeredBy: 'Manager', registeredOn: '2024-05-15', status: 'INITIATED' },
    { fieldName: "sampling check list", fieldType: 'Label', registeredBy: 'Admin', registeredOn: '2024-05-16', status: 'INITIATED' },
    { fieldName: "Manufacturing Date", fieldType: 'DataField', registeredBy: 'Manager', registeredOn: '2024-05-15', status: 'APPROVED' },
    { fieldName: "Cracks Observerd", fieldType: 'Label', registeredBy: 'Admin', registeredOn: '2024-05-16', status: 'INITIATED' },
    { fieldName: "Batch No", fieldType: 'RadioButton', registeredBy: 'Manager', registeredOn: '2024-05-15', status: 'APPROVED' },
    { fieldName: "Container Name", fieldType: 'DataField', registeredBy: 'Admin', registeredOn: '2024-05-16', status: 'INITIATED' },
    { fieldName: "Cracks Observerd", fieldType: 'DataField', registeredBy: 'Manager', registeredOn: '2024-05-15', status: 'APPROVED' },
    { fieldName: "Sampling Check List", fieldType: 'Label', registeredBy: 'Admin', registeredOn: '2024-05-16', status: 'INITIATED' },
    { fieldName: "Manufacturing Date", fieldType: 'RadioButton', registeredBy: 'Manager', registeredOn: '2024-05-15', status: 'APPROVED' },
    { fieldName: "Manufacturing Date", fieldType: 'Label', registeredBy: 'Admin', registeredOn: '2024-05-16', status: 'INITIATED' },
    2

  ];
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, employees.length);

  const renderRows = () => {
    return employees.slice(startIndex, endIndex).map((employee, index) => (
      <tr key={startIndex + index}>
        <td><input type="checkbox" /></td>
        <td>{startIndex + index + 1}</td>
        <td>{employee.fieldName}</td>
        <td>{employee.fieldType}</td>
        <td>{employee.registeredBy}</td>
        <td>{employee.registeredOn}</td>
        <td className={`rounded-5 ${employee.status === 'APPROVED' ? 'bg-danger' : 'bg-warning'} bg-opacity-25 text-${employee.status === 'APPROVED' ? 'danger' : 'warning'} d-flex justify-content-center p-1 m-2`} >{employee.status}</td>
        <td>
          <FontAwesomeIcon icon={faEye} />
          <FontAwesomeIcon icon={faPenToSquare} />
          <FontAwesomeIcon icon={faTrashCan} />


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
    <div className=" mx-5 ">
      <div className="row my-5 ">
        <div className="main-head">
          <div className="title fw-bold fs-5">WOS Tests</div>
        </div>

        <div className="chart-widgets w-100">
          <div className="">
            <div className="row">
              <div className="col shadow p-3 m-3 rounded" style={{ background: 'linear-gradient(#0d6efd, #9ec5fe)' }}>
                <div className="text-light fs-5">INITIATED</div>
                <div className="count fs-1 text-light fw-bolder">4</div>
              </div>
              <div className="col shadow p-3 m-3 rounded" style={{ background: 'linear-gradient(#d63384, #9ec5fe)' }}>
                <div className="text-light fs-5">REINITIATED</div>
                <div className="count fs-1 text-light fw-bolder">0</div>
              </div>
              <div className="col shadow p-3 m-3 rounded" style={{ background: 'linear-gradient(#ffc107, #9ec5fe)' }}>
                <div className="text-light fs-5">APPROVED</div>
                <div className="count fs-1 text-light fw-bolder">6</div>
              </div>
            
              <div className="col shadow p-3 m-3 rounded" style={{ background: 'linear-gradient(#dc3545, #9ec5fe)' }}>
                <div className="text-light fs-5">REJECTED</div>
                <div className="count fs-1 text-light fw-bolder">0</div>
              </div>
            </div>
          </div>
          
        
        </div>
        
        <div>
          <CRow className="mb-3">
            <CCol sm={4}>
              <CFormInput
                type="email"
                placeholder="Search..."
              />
            </CCol>
            <CCol sm={3}> 
              <CFormSelect
                options={[
                  'Select Status',
                  { label: 'All', value: '1' },
                  { label: 'Initiated', value: '0' } ,
                  { label: 'Approved', value: '1' },
                  { label: 'Rejected', value: '0' },
                  { label: 'Reinitiated', value: '0'},
                  { label: 'Droped', value: '0' }
                ]}
              />
            </CCol>
            <CCol sm={2}></CCol>
            <CCol sm={3}>
              <div className="d-flex justify-content-end">
                <CButton id="Addbtn"
                  className="btn btn-primary btn-right"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasRight"
                  aria-controls="offcanvasRight"><CgAddR />  <span>Add WOS Test</span></CButton>
              </div>
            </CCol>
          </CRow>
        </div>
        <div
          className="offcanvas offcanvas-end overflow-y-scroll"
          tabIndex="-1"
          id="offcanvasRight"
          aria-labelledby="offcanvasRightLabel"
        >
          <div className="offcanvas-header ">
            <div id="line1"><h5 className="offcanvas-title" id="offcanvasRightLabel">
            Add WOS Tests
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
          <p style={{marginLeft:'20px'}}>Add information about WOS test</p>
      
          <label id="line3" htmlFor="">Specification ID</label>
        <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={top100Films}
      sx={{ width: 340,margin:2 }}
      renderInput={(params) => <TextField {...params} label="" />}
    />

          <label id="line3" htmlFor="">Product/Material Name</label>
          <input id="line4" required type="text" placeholder="Product/Material Name" />
          
          <label id="line3" htmlFor="">Test Name</label>
          <input id="line4" required type="text" placeholder="Test Name" />
          
          <label id="line3" htmlFor="">Test Code</label>
          <input id="line4" required type="text" placeholder="Test Code" />
          
          <label id="line3" htmlFor="">Method No.</label>
          <input id="line4" required type="text" placeholder="Method No." />
          
          <label id="line3" htmlFor="">Copy Test From</label>
        <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={top100Films}
      sx={{ width: 340,margin:2 }}
      renderInput={(params) => <TextField {...params} label="" />}
    />   

    
<label id="line3" htmlFor="">Test Category</label>
        <select name="Instrument_Category" id="line4">
            <option value="">Select Test Category</option>
            <option value="QA-1">QA-1</option>
        </select> 
        
<label id="line3" htmlFor="">Test Technique</label>
        <select name="Test Technique" id="line4">
            <option value="">Select Test Technique</option>
            <option value="QA-1">QA-1</option>
        </select> 
        
<label id="line3" htmlFor="">Test Type</label>
        <select name="Instrument_Category" id="line4">
            <option value="">Select Test Type</option>
            <option value="QA-1">QA-1</option>
        </select> 
    
    
   
    
    

          

          <div id="line5">
            <button type="button"
              data-bs-dismiss="offcanvas"
              aria-label="Close">&lt; Back</button>
            <button>Submit</button>


          </div>

        </div>
          </div>
          <div ><center><h5 >No wos tests found</h5></center>

      </div>

    </div>
  );
};

export default WOSTest
