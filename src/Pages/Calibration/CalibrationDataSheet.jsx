import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { CgAddR } from 'react-icons/cg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faPenToSquare, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { CButton, CCol, CFormInput, CFormSelect, CRow } from '@coreui/react';
import { Link } from 'react-router-dom';

const CalibrationDataSheet = () => {
  const pageSize =8;
  const [currentPage, setCurrentPage] = useState(1);
  const [showAdditionalFields, setShowAdditionalFields] = useState(false);
  const [showAdditionalFields2, setShowAdditionalFields2] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("");

  const [isEditing, setIsEditing] = useState(false);
  const [currentEmployee, setCurrentEmployee] = useState(null);

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

   const [selectedStatus, setSelectedStatus] = useState("All");
 
  const filterData = () => {
    if (selectedStatus === "All") {
      return employees;
    }

    return employees.filter((employees) => employees.status === selectedStatus.toUpperCase());
  };
  
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleStatusChange = (e) => {
    setFilterStatus(e.target.value);
  };


  const handleDelete = (index) => {
    console.log("Deleting row at index:", index);
  };
  
  const [employees, setEmployees] = useState([
    { fieldName: "Room is clean", fieldType: 'RadioButton', registeredBy: 'Manager', registeredOn: '2024-05-15', status: 'INITIATED' },
    { fieldName: "sampling check list", fieldType: 'Label', registeredBy: 'Admin', registeredOn: '2024-05-16', status: 'REINITIATED' },
    { fieldName: "Manufacturing Date", fieldType: 'DataField', registeredBy: 'Manager', registeredOn: '2024-05-15', status: 'REINITIATED' },
    { fieldName: "Cracks Observerd", fieldType: 'Label', registeredBy: 'Admin', registeredOn: '2024-05-16', status: 'INITIATED' },
    { fieldName: "Batch No", fieldType: 'RadioButton', registeredBy: 'Manager', registeredOn: '2024-05-15', status: 'APPROVED' },
    { fieldName: "Container Name", fieldType: 'DataField', registeredBy: 'Admin', registeredOn: '2024-05-16', status: 'REJECTED' },
    { fieldName: "Cracks Observerd", fieldType: 'DataField', registeredBy: 'Manager', registeredOn: '2024-05-15', status: 'REJECTED' },
    { fieldName: "Sampling Check List", fieldType: 'Label', registeredBy: 'Admin', registeredOn: '2024-05-16', status: 'INITIATED' },
    { fieldName: "Manufacturing Date", fieldType: 'RadioButton', registeredBy: 'Manager', registeredOn: '2024-05-15', status: 'APPROVED' },
    { fieldName: "Manufacturing Date", fieldType: 'Label', registeredBy: 'Admin', registeredOn: '2024-05-16', status: 'DROPPED' },
  ]);
  
  const deleteEmployee = (index) => {
    const updatedEmployees = [...employees];
    updatedEmployees.splice(startIndex + index, 1);
    setEmployees(updatedEmployees);
  };

  const filteredEmployees = employees.filter((employee) => {
    return (
      employee.fieldName.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filterStatus === "" || employee.status === filterStatus)
    );
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
        <td  > <div
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
          <Link to="/calibration/calibration-datasheet-details"><FontAwesomeIcon icon={faEye} className="mx-1" /></Link>
          <FontAwesomeIcon  
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasRight"
                  aria-controls="offcanvasRight" icon={faPenToSquare} className="mx-2" />
          <Link to="#" onClick={() => deleteEmployee(index)}>
              <FontAwesomeIcon icon={faTrashCan} />
            </Link>
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

        <div className="d-flex gap-4">
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
                          (employees) => employees.status === "INITIATED"
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
                          (employees) => employees.status === "REINITIATED"
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
                    <butto className="text-light fs-5">APPROVED</butto>
                    <div
                      className="count fs-1 text-light fw-bolder"
                      style={{ color: "white", textAlign: "left" }}
                    >
                      {
                        filterData().filter(
                          (employees) => employees.status === "APPROVED"
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
                          (employees) => employees.status === "REJECTED"
                        ).length
                      }
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>

        <div>
          <CRow className="mb-3">
            <CCol sm={4}>
              <CFormInput type="text" placeholder="Search..." value={searchTerm} onChange={handleSearchChange} />
            </CCol>
            <CCol sm={3}>
              <CFormSelect value={filterStatus} onChange={handleStatusChange}>
                                <option value="">All</option>
                                <option value="INITIATED">Initiated</option>
                                <option value="APPROVED">Approved</option>
                                <option value="REJECTED">Rejected</option>
                                <option value="REINITIATED">Reinitiated</option>
                                <option value="DROPPED">Dropped</option>
              </CFormSelect>
            </CCol>
            <CCol sm={2}></CCol>
            <CCol sm={3} >
              <div className="d-flex justify-content-end">
                <CButton id=""
                  className="btn btn-primary"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasRight"
                  aria-controls="offcanvasRight"><CgAddR /> <span  >Add Datasheet</span></CButton>
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

          <label className="line3" htmlFor="">Name</label>
          <input className="line4" required type="text" placeholder="Name " />

          <label className="line3" htmlFor="">Unique code</label>
          <input className="line4" required type="text" placeholder="" />

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
                <input style={{width:'240px'}} className="line4" type="text" placeholder="No. of Quantitative Parameters" /><button style={{backgroundColor:'#0f93c3',borderRadius:'4px',border:'1px solid #0f93c3',color:'white',padding:'2px 8px'}}>Add</button>
           
                <label>Parameters and No. of Set Points</label>
                <input style={{width:'240px'}} className="line4" type="text" placeholder="Parameters and No. of Set Points" /><button style={{backgroundColor:'#0f93c3',borderRadius:'4px',border:'1px solid #0f93c3',color:'white',padding:'2px 8px'}}>Set</button>
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
                <input style={{width:'240px'}} className="line4" type="text" placeholder="No. of Qualitative Parameters" /><button style={{backgroundColor:'#0f93c3',borderRadius:'4px',border:'1px solid #0f93c3',color:'white',padding:'2px 8px'}}>Add</button>
            
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


{isEditing && (
  <div className="modal" style={{ display: 'block' }}>
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Edit Employee</h5>
          <button type="button" className="close" onClick={handleEditClose}>
            <span>&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <form>
            <div className="form-group">
              <label>Unique code</label>
              <input type="text" className="form-control" value={currentEmployee.role} onChange={(e) => setCurrentEmployee({ ...currentEmployee, role: e.target.value })} />
            </div>
            <div className="form-group">
              <label>Data Sheet Name</label>
              <input type="text" className="form-control" value={currentEmployee.departments} onChange={(e) => setCurrentEmployee({ ...currentEmployee, departments: e.target.value })} />
            </div>
            <div className="form-group">
              <label>Status</label>
              <select className="form-control" value={currentEmployee.status} onChange={(e) => setCurrentEmployee({ ...currentEmployee, status: e.target.value })}>
                <option value="ACTIVE">Active</option>
                <option value="INACTIVE">Inactive</option>
              </select>
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" onClick={handleEditClose}>Close</button>
          <button type="button" className="btn btn-primary" onClick={handleEditSubmit}>Save changes</button>
        </div>
      </div>
    </div>
  </div>
)}
</div>
  );
};

export default CalibrationDataSheet;
