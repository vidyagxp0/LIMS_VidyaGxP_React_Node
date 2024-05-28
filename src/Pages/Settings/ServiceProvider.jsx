
import React, { useState } from 'react';

import { FaArrowRight } from 'react-icons/fa';
import { CgAddR } from 'react-icons/cg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faPenToSquare, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { CButton, CCol, CFormInput, CFormSelect, CRow } from '@coreui/react';


const ServiceProvider = () => {
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
          <div className="title fw-bold fs-5">Service Provider</div>
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
                  aria-controls="offcanvasRight"><CgAddR />  <span>Add Service Provider</span></CButton>
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
            Add Service Provider
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
          <p style={{marginLeft:'20px'}}>Add information and add new service provider</p>

          <label className="line3" htmlFor="">Name</label>
          <input className="line4" required type="text" placeholder="Service provider Name " />

          <label className="line3" htmlFor="">Unique code</label>
          <input className="line4" required type="text" placeholder="Unique code" />

          
          <label className="line3" htmlFor="">Reference Documents</label>
          <input className="line4" style={{padding:'25px',fontSize:'12px'}} required type="file" placeholder="" />
         
          <label className="line3" htmlFor="">Valid Upto</label>
          <input className="line4" style={{padding:'15px'}} required type="date" placeholder="Unique code" />

          
          <label className="line3" htmlFor="">Service Type</label>
          <input className="line4" required type="text" placeholder="Service Type" />
          
          <label className="line3" htmlFor="">Contact Person</label>
          <input className="line4" required type="text" placeholder="" />
          
          <label className="line3" htmlFor="">Address : Line 1</label>
          <input className="line4" required type="text" placeholder="Address : Line 1" />
          
          <label className="line3" htmlFor="">Address : Line 2</label>
          <input className="line4" required type="text" placeholder="Address : Line 1" />
          
          <label className="line3" htmlFor="">Address : Line 3</label>
          <input className="line4" required type="text" placeholder="Address : Line 3" />
          
          <label className="line3" htmlFor="">City</label>
          <input className="line4" required type="text" placeholder="City" /> <label className="line3" htmlFor="">State</label>
          <input className="line4" required type="text" placeholder="State" /> <label className="line3" htmlFor="">Country</label>
          <input className="line4" required type="text" placeholder="Country" /> <label className="line3" htmlFor="">ZIP/PIN</label>
          <input className="line4" required type="text" placeholder="ZIP/PIN" /> <label className="line3" htmlFor="">Phone</label>
          <input className="line4" required type="text" placeholder="Phone" /> <label className="line3" htmlFor="">Fax</label>
          <input className="line4" required type="text" placeholder="Fax" /> <label className="line3" htmlFor="">Email</label>
          <input className="line4" required type="email" placeholder="Email" />
          

          <div id="line5">
            <button type="button"
              data-bs-dismiss="offcanvas"
              aria-label="Close">&lt; Back</button>
            <button>Submit</button>


          </div>

        </div>
          </div>
          <div ><center><h5 >No Service Providers found</h5></center>

      </div>

    </div>
  );
};

export default ServiceProvider
