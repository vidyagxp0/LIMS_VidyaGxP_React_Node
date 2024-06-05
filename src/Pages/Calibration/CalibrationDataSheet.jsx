import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { CgAddR } from 'react-icons/cg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faPenToSquare, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
import { CButton, CCol, CFormInput, CFormSelect, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react"

const CalibrationDataSheet = () => {
  const [addModal, setAddModal] = useState(false);

  const pageSize =5;
  const [currentPage, setCurrentPage] = useState(1);
  const [showAdditionalFields, setShowAdditionalFields] = useState(false);
  const [showAdditionalFields2, setShowAdditionalFields2] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [deleteModal, setDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [statusFilter, setStatusFilter] = useState('1');


  const [currentEmployee, setCurrentEmployee] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState("All");

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

   const StatusModal = (_props) => {
    return (
        <CModal alignment="center" visible={_props.visible} onClose={_props.closeModal}>
        <CModalHeader>
          <CModalTitle>Add Calibration Data Sheet</CModalTitle>
        </CModalHeader>
        <CModalBody>
        <CFormInput
          label='Name'
          className="mb-3"
          type="text"
          placeholder="Name"
          />  
          <CFormInput
          label='Unique code'
          className="mb-3"
          type="text"
          placeholder=""
          /> 
           <div style={{ margin: '15px 0px', }}>
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
                <input style={{width:'80%'}} className="line4" type="text" placeholder="No. of Quantitative Parameters" /><button style={{backgroundColor:'#0f93c3',borderRadius:'4px',border:'1px solid #0f93c3',color:'white',padding:'2px 8px'}}>Add</button>
           
                <label>Parameters and No. of Set Points</label>
                <input style={{width:'80%'}} className="line4" type="text" placeholder="Parameters and No. of Set Points" /><button style={{backgroundColor:'#0f93c3',borderRadius:'4px',border:'1px solid #0f93c3',color:'white',padding:'2px 8px'}}>Set</button>
              </>
            )}
            <br />
            <label style={{ padding: '7px 0px',marginTop:'3px' }}>Qualitative Parameter &nbsp;
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

         
         <div className="d-flex gap-3 mt-4">
        <CButton color="light w-50" onClick={_props.closeModal}>&lt; Back</CButton>
        <CButton color="primary w-50">Submit</CButton>
      </div>

        </CModalBody>
      </CModal>
    )
  }

  
  const DeleteModal = (_props) => {
    return (
        <CModal alignment="center" visible={_props.visible} onClose={_props.closeModal} size="lg">
            <CModalHeader>
                <CModalTitle>Delete User</CModalTitle>
            </CModalHeader>
            <CModalBody>
                <p>Are you sure you want to delete this Data sheet name?</p>
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
    {id:1, fieldName: "Room is clean", fieldType: 'RadioButton', registeredBy: 'Manager', registeredOn: '2024-05-15', status: 'INITIATED' },
    {id:2, fieldName: "sampling check list", fieldType: 'Label', registeredBy: 'Admin', registeredOn: '2024-05-16', status: 'REINITIATED' },
    {id:3, fieldName: "Manufacturing Date", fieldType: 'DataField', registeredBy: 'Manager', registeredOn: '2024-05-15', status: 'REINITIATED' },
    {id:4, fieldName: "Cracks Observerd", fieldType: 'Label', registeredBy: 'Admin', registeredOn: '2024-05-16', status: 'INITIATED' },
    {id:5, fieldName: "Batch No", fieldType: 'RadioButton', registeredBy: 'Manager', registeredOn: '2024-05-15', status: 'APPROVED' },
    {id:6, fieldName: "Container Name", fieldType: 'DataField', registeredBy: 'Admin', registeredOn: '2024-05-16', status: 'REJECTED' },
    {id:7,fieldName: "Cracks Observerd", fieldType: 'DataField', registeredBy: 'Manager', registeredOn: '2024-05-15', status: 'REJECTED' },
    {id:8,fieldName: "Sampling Check List", fieldType: 'Label', registeredBy: 'Admin', registeredOn: '2024-05-16', status: 'INITIATED' },
    {id:9, fieldName: "Manufacturing Date", fieldType: 'RadioButton', registeredBy: 'Manager', registeredOn: '2024-05-15', status: 'APPROVED' },
    {id:10, fieldName: "Manufacturing Date", fieldType: 'Label', registeredBy: 'Admin', registeredOn: '2024-05-16', status: 'DROPPED' },
  ]);
  
  const deleteEmployee = (index) => {
    const updatedEmployees = [...employees];
    updatedEmployees.splice(startIndex + index, 1);
    setEmployees(updatedEmployees);
  };

  const handleDeleteClick = (id) => {
    setDeleteId(id);
    setDeleteModal(true);
  };
  
  const handleDeleteConfirm = () => {
    setEmployees((prevEmployees) => prevEmployees.filter((employee) => employee.id !== deleteId));
    setDeleteModal(false);
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
        <td  > <button  
                        className={`py-1 px-2 small w-75 rounded text-light d-flex justify-content-center align-items-center bg-${
                          employee.status === "INITIATED"
                            ? "blue-700"
                            : employee.status === "APPROVED"
                            ? "green-700"
                            : employee.status === "REJECTED"
                            ? "red-700"
                            : employee.status === "REINITIATED"
                            ? "yellow-500"
                            : employee.status === "DROPPED"
                            ? "purple-700"
                            : "white"
                        }`} style={{fontSize:'0.6rem'}}
                      >
                        {employee.status}
                      </button></td>
        <td>
          <Link to="/calibration/calibration-datasheet-details"><FontAwesomeIcon icon={faEye} className="mx-1" /></Link>
          <FontAwesomeIcon  
                  onClick={() => setAddModal(true)} icon={faPenToSquare} className="mx-2" />
          <Link to="#"  onClick={() => handleDeleteClick(employee.id)}>
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
    <div className="m-5 mt-3"  >
        <div className="main-head">
        <h4 className="fw-bold ">Calibration Data Sheets</h4>
        </div>

        <div className="row mt-3" style={{ cursor: "pointer" }}>
                <button
                  className="col shadow p-3 m-3 rounded"
                  style={{
                    background:
                      "linear-gradient(25deg, #0250c5 0%, #d43f8d 100%)",

                    textAlign: "left",
                  }}
                  onClick={() => setStatusFilter("DROPPED")}
                >
                  <div className="text-light font-bold fs-5">DROPPED</div>
                  <div
                    className="count fs-1 text-light fw-bolder"
                    style={{ color: "white" }}
                  >
                    {
                      filterData().filter((item) => item.status === "DROPPED")
                        .length
                    }
                  </div>
                </button>
                <button
                  className="col shadow p-3 m-3 rounded"
                  style={{
                    background:
                      "linear-gradient(25deg, #13517a 6% , #2A5298 50%)",
                    textAlign: "left",
                  }}
                  onClick={() => setStatusFilter("INITIATED")}
                >
                  <div className="text-light font-bold fs-5">INITIATED</div>
                  <div
                    className="count fs-1 text-light fw-bolder"
                    style={{ color: "white" }}
                  >
                    {
                      filterData().filter((item) => item.status === "INITIATED")
                        .length
                    }
                  </div>
                </button>
                <button
                  className="col shadow p-3 m-3 rounded"
                  style={{
                    background:
                      "linear-gradient(25deg, orange , #f7e05f )",

                    textAlign: "left",
                    boxShadow: "0px 10px 20px  black !important",
                  }}
                  onClick={() => setStatusFilter("REINITIATED")}
                >
                  <div className="text-light font-bold fs-5">REINITIATED</div>

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
                    background:
                      "linear-gradient(27deg, green , #0fd850  )",
                    textAlign: "left",
                  }}
                  onClick={() => setStatusFilter("APPROVED")}
                >
                  <butto className="text-light font-bold fs-5">APPROVED</butto>
                  <div
                    className="count fs-1 text-light fw-bolder"
                    style={{ color: "white", textAlign: "left" }}
                  >
                    {
                      filterData().filter((item) => item.status === "APPROVED")
                        .length
                    }
                  </div>
                </button>

                <button
                  className="col shadow p-3 m-3 rounded"
                  style={{
                    background:
                      "linear-gradient(27deg ,red, #FF719A)",
                    textAlign: "left",
                  }}
                  onClick={() => setStatusFilter("REJECTED")}
                  
                >
                  <div className="text-light font-bold fs-5">REJECTED</div>
                  <div className="count fs-1 text-light fw-bolder">
                    {
                      filterData().filter((item) => item.status === "REJECTED")
                        .length
                    }
                  </div>
                </button>
              </div>

        <div>
          <CRow className="mt-2">
            <CCol sm={4}>
              <CFormInput  style={{fontSize:'0.9rem'}} type="text" placeholder="Search..." value={searchTerm} onChange={handleSearchChange} />
            </CCol>
            <CCol sm={3}>
              <CFormSelect  style={{fontSize:'0.9rem'}}  value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}>
                                <option value="1">All</option>
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
                  style={{fontSize:'0.9rem'}}
                  onClick={() => setAddModal(true)}> <span  >Add Datasheet</span></CButton>
              </div>
            </CCol>
          </CRow>
        </div>

      

      {/* Employee table */}
        <div
          className=" rounded bg-white mt-3"
          style={{fontFamily:'sans-serif', fontSize:'0.9rem' ,boxShadow:'5px 5px 20px #5D76A9'}}
        >
        <table className='table table-responsive text-xs' >
          <thead>
            <tr>
              <th style={{ background: "#5D76A9", color: "white"}}><input type="checkbox" /></th>
              <th style={{ background: "#5D76A9", color: "white"}}>S.No.</th>
              <th style={{ background: "#5D76A9", color: "white"}}>Unique code</th>
              <th style={{ background: "#5D76A9", color: "white"}}>Data Sheet Name</th>
              <th style={{ background: "#5D76A9", color: "white"}}>Quantitative Parameters</th>
              <th style={{ background: "#5D76A9", color: "white"}}>Qualitative Parameters</th>
              <th style={{ background: "#5D76A9", color: "white"}}>Status</th>
              <th style={{ background: "#5D76A9", color: "white"}}>Action</th>
            </tr>
          </thead>
          <tbody>
            {renderRows()}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
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



{addModal && <StatusModal visible={addModal} closeModal={() => setAddModal(false)} />}

{deleteModal && (
        <DeleteModal
          visible={deleteModal}
          closeModal={() => setDeleteModal(false)}
          confirmDelete={handleDeleteConfirm}
        />
      )}

</div>
  );
};

export default CalibrationDataSheet;
