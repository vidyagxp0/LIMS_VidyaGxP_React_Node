import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { CgAddR } from 'react-icons/cg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faPenToSquare, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { CButton, CCol, CFormInput, CFormSelect, CRow } from '@coreui/react';
import { Link } from 'react-router-dom';

const CalibrationDataSheet = () => {
  const pageSize = 9;
  const [currentPage, setCurrentPage] = useState(1);
  const [showAdditionalFields, setShowAdditionalFields] = useState(false);
  const [showAdditionalFields2, setShowAdditionalFields2] = useState(false);

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
          <Link to="/calibration/calibration-datasheet-details"><FontAwesomeIcon icon={faEye} className="mx-1" /></Link>
          <FontAwesomeIcon icon={faPenToSquare} className="mx-1" />
          <FontAwesomeIcon icon={faTrashCan} className="mx-1" />
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

  const handleCheckboxChange = (e) => {
    setShowAdditionalFields(e.target.checked);
  };
  const handleCheckboxChange2 = (e) => {
    setShowAdditionalFields2(e.target.checked);
  };

  return (
    <div className="mx-5">
      <div className="row my-5">
        <div className="main-head">
          <div className="title fw-bold fs-5">Calibration Data Sheets</div>
        </div>

        <div className="chart-widgets w-100">
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

        <div>
          <CRow className="mb-3">
            <CCol sm={4}>
              <CFormInput type="email" placeholder="Search..." />
            </CCol>
            <CCol sm={3}>
              <CFormSelect
                options={[
                  'Select Status',
                  { label: 'All', value: '1' },
                  { label: 'Initiated', value: '0' },
                  { label: 'Approved', value: '1' },
                  { label: 'Rejected', value: '0' },
                  { label: 'Reinitiated', value: '0' },
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
                  aria-controls="offcanvasRight"><CgAddR /> <span>Add Datasheet</span></CButton>
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
              Add Calibration Data Sheet
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

          <label id="line3" htmlFor="">Name</label>
          <input id="line4" required type="text" placeholder="Name " />

          <label id="line3" htmlFor="">Unique code</label>
          <input id="line4" required type="text" placeholder="" />

          <div style={{ margin: '15px 20px', }}>
            <label> Quantitative Parameters &nbsp;
              <input
                type="checkbox"
                onChange={handleCheckboxChange}
              />
            </label>
            {showAdditionalFields && (
              <>
                <br />
                <label>No. of Quantitative Parameters</label>
                <input style={{width:'240px'}} id="line4" type="text" placeholder="No. of Quantitative Parameters" /><button style={{backgroundColor:'#0f93c3',borderRadius:'4px',border:'1px solid #0f93c3',color:'white',padding:'2px 8px'}}>Add</button>
           
                <label>Parameters and No. of Set Points</label>
                <input style={{width:'240px'}} id="line4" type="text" placeholder="Parameters and No. of Set Points" /><button style={{backgroundColor:'#0f93c3',borderRadius:'4px',border:'1px solid #0f93c3',color:'white',padding:'2px 8px'}}>Set</button>
              </>
            )}
            <br />
            <label style={{ padding: '7px 0' }}>Qualitative Parameter &nbsp;
              <input type="checkbox"  onChange={handleCheckboxChange2} />
            </label>
            {showAdditionalFields2 && (
              <>
                <br />
                <label>No. of Qualitative Parameters</label>
                <input style={{width:'240px'}} id="line4" type="text" placeholder="No. of Qualitative Parameters" /><button style={{backgroundColor:'#0f93c3',borderRadius:'4px',border:'1px solid #0f93c3',color:'white',padding:'2px 8px'}}>Add</button>
            
              </>
            )}
            <br />
          </div>

          <div id="line5">
            <button type="button"
              data-bs-dismiss="offcanvas"
              aria-label="Close">&lt; Back</button>
            <button>Submit</button>
          </div>
        </div>
      </div>

      {/* Employee table */}
      <div className='table-responsive shadow p-4 container1'>
        <table className='table' style={{ fontSize: '0.8rem', margin: '0px auto', width: '98%' }}>
          <thead>
            <tr>
              <th><input type="checkbox" /></th>
              <th>S.No.</th>
              <th>Unique code</th>
              <th>Data Sheet Name</th>
              <th>Quantitative Parameters</th>
              <th>Qualitative Parameters</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {renderRows()}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="pagination"  style={{ margin: '20px 0' }}>
        <div className="pagination">
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
  );
};

export default CalibrationDataSheet;
