import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { CgAddR } from 'react-icons/cg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { CButton, CCol, CFormInput, CFormSelect, CRow } from '@coreui/react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Link } from 'react-router-dom';

const CalibrationSampleLogin = () => {
  const pageSize = 9;
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('1');

  const badgeStyle = { background: "gray", color: "white", width: "110px" };
  const badgeStyle2 = {
    background: " #2A5298",
    color: "white",
    width: "110px",
  };
  const badgeStyle3 = { background: "green", color: "white", width: "110px" };
  const badgeStyle4 = { background: "red", color: "white", width: "110px" };
  const badgeStyle5 = { background: "orange", color: "white", width: "110px" };
  const badgeStyle6 = { background: "purple", color: "white", width: "110px" };


  const  [employees, setEmployees] = useState([
    { fieldName: "Room is clean", fieldType: 'RadioButton', registeredBy: 'Manager', registeredOn: '2024-05-15', status: 'INITIATED' },
    { fieldName: "sampling check list", fieldType: 'Label', registeredBy: 'Admin', registeredOn: '2024-05-16', status: 'INITIATED' },
    { fieldName: "Manufacturing Date", fieldType: 'DataField', registeredBy: 'Manager', registeredOn: '2024-05-15', status: 'APPROVED' },
    { fieldName: "Cracks Observerd", fieldType: 'Label', registeredBy: 'Admin', registeredOn: '2024-05-16', status: 'INITIATED' },
    { fieldName: "Batch No", fieldType: 'RadioButton', registeredBy: 'Manager', registeredOn: '2024-05-15', status: 'APPROVED' },
    { fieldName: "Container Name", fieldType: 'DataField', registeredBy: 'Admin', registeredOn: '2024-05-16', status: 'INITIATED' },
    { fieldName: "Cracks Observerd", fieldType: 'DataField', registeredBy: 'Manager', registeredOn: '2024-05-15', status: 'APPROVED' },
    { fieldName: "Sampling Check List", fieldType: 'Label', registeredBy: 'Admin', registeredOn: '2024-05-16', status: 'REJECTED' },
    { fieldName: "Manufacturing Date", fieldType: 'RadioButton', registeredBy: 'Manager', registeredOn: '2024-05-15', status: 'APPROVED' },
    { fieldName: "Manufacturing Date", fieldType: 'Label', registeredBy: 'Admin', registeredOn: '2024-05-16', status: 'INITIATED' },
  ]);

  const deleteEmployee = (index) => {
    const updatedEmployees = [...employees];
    updatedEmployees.splice(startIndex + index, 1);
    setEmployees(updatedEmployees);
  };




  const filteredEmployees = employees.filter(employee => {
    return (employee.fieldName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.fieldType.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.registeredBy.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.registeredOn.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (statusFilter === '1' || employee.status === statusFilter);
  });

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, filteredEmployees.length);

  const renderRows = () => {
    return filteredEmployees.slice(startIndex, endIndex).map((employee, index) => (
      <tr key={startIndex + index}>
        <td><input type="checkbox" /></td>
        <td>{startIndex + index + 1}</td>
        <td>{employee.fieldName}</td>
        <td>{employee.fieldType}</td>
        <td>{employee.registeredBy}</td>
        <td>{employee.registeredOn}</td>
        <td > <div
                          className="d-flex justify-content-center py-2 px-3 small rounded fw-bold"
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
                              : employee.status === "ALL"
                              ? badgeStyle
                              : badgeStyle
                          }
                        >
                          {employee.status}
                        </div></td>
        <td>
          <div className="d-flex gap-3">
            <Link to="/viewDetails"><FontAwesomeIcon icon={faEye} /></Link>
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
    setCurrentPage(Math.ceil(filteredEmployees.length / pageSize));
  };

  return (
    <div className="mx-5">
      <div className="row my-5">
        <div className="main-head">
          <div className="title fw-bold fs-5">Calibration Sample Login</div>
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
              <CFormInput
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </CCol>
            <CCol sm={3}>
              <CFormSelect
                options={[
                  'Select Status',
                  { label: 'All', value: '1' },
                  { label: 'Initiated', value: 'INITIATED' },
                  { label: 'Approved', value: 'APPROVED' },
                  { label: 'Rejected', value: 'REJECTED' },
                  { label: 'Reinitiated', value: 'REINITIATED' },
                  { label: 'Dropped', value: 'DROPPED' }
                ]}
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
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
                  aria-controls="offcanvasRight"><CgAddR />  <span>Add Sample Login</span></CButton>
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
          <div className="offcanvas-header">
            <div id="line1">
              <h5 className="offcanvas-title" id="offcanvasRightLabel">Add Sample Login</h5>
              <button
                id="closebtn"
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
          </div>
          <div className="offcanvas-body">
            <label className="line3" htmlFor="">Sample Login Template/ Revision No.</label>
            <input className="line4" required type="text" placeholder=" " />

            <label className="line3" htmlFor="">Test Plan / Revision No.</label>
            <input className="line4" required type="text" placeholder="prefix" />

            <label className="line3" htmlFor="">Product / Material</label>
            <input className="line4" required type="text" placeholder="prefix" />

            <label className="line3" htmlFor="">Product / Material Code</label>
            <input className="line4" required type="text" placeholder="" />

            <label className="line3" htmlFor="">Generic Name</label>
            <input className="line4" required type="text" placeholder="" />

            <label className="line3" htmlFor="">Specification ID</label>
            <input className="line4" required type="text" placeholder="" />

            <label className="line3" htmlFor="">Sample Type</label>
            <input className="line4" required type="text" placeholder="" />

            <FormLabel style={{ margin: '15px 20px' }} id="demo-row-radio-buttons-group-label">Auto Sample Allotted</FormLabel>
            <RadioGroup style={{ margin: '15px 20px' }}
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="No" control={<Radio />} label="No" />
            </RadioGroup>

            <div id="line5">
              <button type="button" data-bs-dismiss="offcanvas" aria-label="Close">&lt; Back</button>
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>

      <div className='table-responsive shadow p-4 container1'>
        <table className='table' style={{ fontSize: '0.8rem', margin: '0px auto', width: '98%' }}>
          <thead>
            <tr>
              <th><input type="checkbox" /></th>
              <th>S.No.</th>
              <th>Sample Type</th>
              <th>Product / Material</th>
              <th>Generic Name</th>
              <th>Specification Code</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {renderRows()}
          </tbody>
        </table>
      </div>

      <div className="pagination" style={{ margin: '20px 0' }}>
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
  );
};

export default CalibrationSampleLogin;
