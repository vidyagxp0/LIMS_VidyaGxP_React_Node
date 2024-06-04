import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import FormControl from '@mui/material/FormControl';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { PiDownloadBold } from "react-icons/pi";
import { faEye, faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CButton, CCol, CFormInput, CFormSelect, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react"

export default function CalibrationSchedule() {
    const [addModal, setAddModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);


    const top100Films = [
        { label: 'The Shawshank Redemption', year: 1994 },
        { label: 'The Godfather', year: 1972 },
        { label: 'The Godfather: Part II', year: 1974 },
        { label: 'The Dark Knight', year: 2008 },
        { label: '12 Angry Men', year: 1957 },
    ];

    const [searchTerm, setSearchTerm] = useState("");
    const [filterStatus, setFilterStatus] = useState("");
    const [storageName, setStorageName] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    
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
          <CModalTitle>  Add Calibration Schedule</CModalTitle>
        </CModalHeader>
        
        <CModalBody>
        <CFormSelect 
          className="mb-3"
         label="Instrument Category"
         options={[
        'Select Intrument Category',
         { label: 'chromathograpy', value: 'chromathograpy' },
         { label: 'weighing balance', value: 'weighing-balance' },
        ]}    
        />
         <CFormSelect 
           className="mb-3"
         label="Calibration Type"
         options={[
        'Select Calibration Type',
        { label: 'yearly', value: 'yearly' },
         { label: 'monthly', value: 'monthly' },
         { label: 'daily', value: 'daily' },
         ]}
       /> 
       <CFormSelect 
           className="mb-3"
         label="Calibration Type"
         options={[
        'Select Calibration Type',
        { label: 'yearly', value: 'yearly' },
         { label: 'monthly', value: 'monthly' },
         { label: 'daily', value: 'daily' },
         ]}
       />
       <CFormSelect 
           className="mb-3"
         label="Instrument (Instrument ID)"
         options={[
        'Select Instrument ID',
         ]}
       /> 
        <CFormSelect 
           className="mb-3"
         label="Module (Module ID)"
         options={[
        'Select Module ID',
         ]}
       />

       <FormControl style={{ margin: '20px' }}>
                        <FormLabel id="demo-row-radio-buttons-group-label">Calibration Work Flow</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                        >
                            <FormControlLabel value="Calibration Data Sheet" control={<Radio />} label="Calibration Data Sheet" />
                            <FormControlLabel value="Sample Login Template" control={<Radio />} label="Sample Login Template" />
                        </RadioGroup>
         </FormControl>

         <CFormSelect 
           className="mb-3"
         label="Calibration Datasheet"
         options={[
        'Select',
        { label: 'CAl data sheet', value: 'cal-data-sheet' },
        { label: 'Data sheet1', value: 'data-sheet1' },
         ]}
       />

        <CFormInput
              label='Schedule Description'
              className="mb-3"
              type="text"
              placeholder="Schedule Description"
              />   
              
              <CFormInput
              label='Start Date'
              className="mb-3"
              type="date"
              placeholder=""
              />  

        <CFormSelect 
           className="mb-3"
         label="Frequency"
         options={[
        'Period',
        { label: 'Daily', value: 'daily' },
        { label: 'Weekly', value: 'weekly' },
        { label: 'Monthly', value: 'monthly' },
        { label: 'Yearly', value: 'yearly' },
         ]}
            />   
                 
                 <CFormInput
              label='Tolerance Period'
              className="mb-3"
              type="text"
              placeholder="Tolerance Period"
              />  

        <span>Day(s)</span>
                  

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
                <p>Are you sure you want to delete this Calibration schedule?</p>
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


    const [employees, setEmployees] = useState([
        {id:1, user: 'Initiated Product', role: 'Sacubitril', departments: 'ARIP0000095', joiningDate: 'N/A', addedBy: 'RPS-TSLV-00', status: 'ACTIVE' },
        {id:2, user: 'Initiated Product', role: 'Sacubitril', departments: 'ARIP0000095', joiningDate: 'N/A', addedBy: 'RPS-TSLV-00', status: 'INACTIVE' },
        {id:3, user: 'test Product', role: 'Sacubitril', departments: 'ARIP0000095', joiningDate: 'N/A', addedBy: 'RPS-TSLV-00', status: 'ACTIVE' },
        {id:4, user: 'hcpl Product', role: 'Sacubitril', departments: 'ARIP0000095', joiningDate: 'N/A', addedBy: 'RPS-TSLV-00', status: 'ACTIVE' },
        {id:5, user: 'test Product', role: 'Sacubitril', departments: 'ARIP0000095', joiningDate: 'N/A', addedBy: 'RPS-TSLV-00', status: 'ACTIVE' },
        {id:6, user: 'hcpl Product', role: 'Sacubitril', departments: 'ARIP0000095', joiningDate: 'N/A', addedBy: 'RPS-TSLV-00', status: 'ACTIVE' },
    ]);

    const handleDeleteClick = (id) => {
        setDeleteId(id);
        setDeleteModal(true);
      };
      
      const handleDeleteConfirm = () => {
        setEmployees((prevEmployees) => prevEmployees.filter((employee) => employee.id !== deleteId));
        setDeleteModal(false);
      };

    const pageSize = 5;
    const [currentPage, setCurrentPage] = useState(1);
    const [editRowIndex, setEditRowIndex] = useState(null);
    const [editFormData, setEditFormData] = useState({
        user: '',
        role: '',
        departments: '',
        joiningDate: '',
        addedBy: '',
        status: ''
    });

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleStatusChange = (e) => {
        setFilterStatus(e.target.value);
    };

    const handleAddStorage = () => {
        if (storageName.trim() === "") {
            setErrorMessage("Storage condition is Required");
        } else {
            toast.warning("Apologies, an unexpected error occurred while adding the Storage Condition.");
        }
    };

    const handleEdit = (index) => {
        setEditRowIndex(index);
        setEditFormData(employees[index]);
    };

    const handleDelete = (index) => {
        const newEmployees = [...employees];
        newEmployees.splice(index, 1);
        setEmployees(newEmployees);
    };

    const handleSave = () => {
        const updatedEmployees = [...employees];
        updatedEmployees[editRowIndex] = editFormData;
        setEmployees(updatedEmployees);
        setEditRowIndex(null);
    };

    const filteredEmployees = employees.filter((employee) => {
        return (
            employee.user.toLowerCase().includes(searchTerm.toLowerCase()) &&
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
                <td>{employee.user}</td>
                <td>{employee.role}</td>
                <td>{employee.role}</td>
                <td>{employee.role}</td>
                <td>{employee.role}</td>
                <td>{employee.addedBy}</td>
                <td > <div
                        className="d-flex justify-content-center py-2 px-3 small rounded fw-bold"
                        style={
                            employee.status === "ACTIVE"
                                ? badgeStyle3
                                : employee.status === "INACTIVE"
                                    ? badgeStyle4
                                    : badgeStyle
                        }
                    > {employee.status}</div></td>
                <td>
                    <div className="d-flex gap-3">
                        <Link to="/calibration/calibration-schedule-details"><FontAwesomeIcon icon={faEye} /></Link>
                        <div onClick={() => setAddModal(true)}>
                            <FontAwesomeIcon icon={faPenToSquare} />
                        </div>
                        <Link to="#" onClick={() => handleDeleteClick(employee.id)}>
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
        <>
            <div id="div1">
                <h5>Calibration Schedule</h5>
            </div>

            
      <div className="d-flex m-4 mt-5 justify-content-around">
      <div className="w-50 d-flex ms-3 gap-3">
        <CCol sm={6}>
          <CFormInput
            type="text"
            placeholder="Search..."
            style={{fontSize:'0.9rem'}}
            className="border-2"
            onChange={handleSearchChange}
          />
        </CCol>

        <CCol sm={5} >
          <CFormSelect
           onChange={handleStatusChange}
            className="border-2"
            style={{fontSize:'0.9rem'}}
            options={[
              { label: "All", value: "" },
              { label: "Active", value: "ACTIVE" },
              { label: "Inactive", value: "INACTIVE" },
            ]}
          />
        </CCol>
        </div>
        <div className="w-50 gap-2 d-flex ms-5 justify-content-end">
        <CCol sm={1}>
        <div style={{ border: '1px solid #f98d6b', padding: '9px', width: '41px',display:'flex',justifyContent:'center', backgroundColor: '#f98d6b', borderRadius: '5px' }}><PiDownloadBold /></div>
        </CCol>

        <CCol sm={5}>
          <div className="">
            <CButton color="primary" onClick={() => setAddModal(true)}>
            Calibration Schedule
            </CButton>
          </div>
        </CCol>
        </div>
      </div>

          
            <br />
            <div className='border-dark-subtle border-2 bg-light mx-5 mt-2 mb-4 rounded'>
                <table className='table table-responsive    text-xs' >
                    <thead>
                        <tr>
                            <th style={{ background: "#5D76A9", color: "white"}}><input type="checkbox" /></th>
                            <th style={{ background: "#5D76A9", color: "white"}}>SNo.</th>
                            <th style={{ background: "#5D76A9", color: "white"}}>Unique Code</th>
                            <th style={{ background: "#5D76A9", color: "white"}}>Calibration Workflow</th>
                            <th style={{ background: "#5D76A9", color: "white"}}>Schedule Description</th>
                            <th style={{ background: "#5D76A9", color: "white"}}>Start Date</th>
                            <th style={{ background: "#5D76A9", color: "white"}}>Frequency</th>
                            <th style={{ background: "#5D76A9", color: "white"}}>Next Calibration Due</th>
                            <th style={{ background: "#5D76A9", color: "white"}}>Status</th>
                            <th style={{ background: "#5D76A9", color: "white"}}>Actions </th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderRows()}
                    </tbody>
                </table>
            </div>

            <div className="pagination mx-5">
                <div className="pagination ">
                    <div >
                        <button className="btn mr-2" onClick={prevPage} disabled={currentPage === 1}>&lt;&lt;</button>
                    </div>
                    <div className="current-page-number mr-2 bg-dark-subtle page-item">
                        <button className='btn rounded-circle'>{currentPage}</button>
                    </div>
                    <div>
                        <button className="btn mr-2" onClick={nextPage} disabled={endIndex >= filteredEmployees.length}>&gt;&gt;</button>
                    </div>
                </div>
                <button className="btn btn-next d-flex align-items-center" onClick={nextPage}> Next <FaArrowRight className="ms-2" /></button>
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
    );
}
