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

    const [employees, setEmployees] = useState([
        { user: 'Initiated Product', role: 'Sacubitril', departments: 'ARIP0000095', joiningDate: 'N/A', addedBy: 'RPS-TSLV-00', status: 'ACTIVE' },
        { user: 'Initiated Product', role: 'Sacubitril', departments: 'ARIP0000095', joiningDate: 'N/A', addedBy: 'RPS-TSLV-00', status: 'INACTIVE' },
        { user: 'test Product', role: 'Sacubitril', departments: 'ARIP0000095', joiningDate: 'N/A', addedBy: 'RPS-TSLV-00', status: 'ACTIVE' },
        { user: 'hcpl Product', role: 'Sacubitril', departments: 'ARIP0000095', joiningDate: 'N/A', addedBy: 'RPS-TSLV-00', status: 'ACTIVE' },
        { user: 'test Product', role: 'Sacubitril', departments: 'ARIP0000095', joiningDate: 'N/A', addedBy: 'RPS-TSLV-00', status: 'ACTIVE' },
        { user: 'hcpl Product', role: 'Sacubitril', departments: 'ARIP0000095', joiningDate: 'N/A', addedBy: 'RPS-TSLV-00', status: 'ACTIVE' },
    ]);

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
                        <Link to="#" onClick={() => handleDelete(index)}>
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

            <div id="div2" style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div id="searchmain">
                    <div id="searchicon">
                        <CiSearch />
                    </div>
                    <div className="">
                        <input type="text" className="" id="" placeholder="search" onChange={handleSearchChange} />
                    </div>
                </div>
                <div className="dropdown m-5"></div>
                <div className="dropdown">
                    <div>
                        <button className="btn border" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <select id='selectOption' onChange={handleStatusChange} style={{outline:'none'}}>
                                <option value="">Select Status </option>
                                <option value="ACTIVE">Active</option>
                                <option value="INACTIVE">Inactive</option>
                            </select>
                        </button>
                    </div>
                </div>
                <div style={{ border: '1px solid #f98d6b', marginLeft: '150px', padding: '8px', width: '40px', display: 'flex', justifyContent: 'center', backgroundColor: '#f98d6b', borderRadius: '5px' }}><PiDownloadBold /></div>
                <button
                    className="btn btn-primary m-5"
                    type="button"
                    onClick={() => setAddModal(true)}
                >
                    <span>Calibration Schedule</span>
                </button>

                <div
                    className="offcanvas offcanvas-end overflow-y-scroll"
                    tabIndex="-1"
                    id="offcanvasRight"
                    aria-labelledby="offcanvasRightLabel"
                >
                    <div className="offcanvas-header ">
                        <div id="line1">
                            <h5 className="offcanvas-title" id="offcanvasRightLabel">
                                Add Calibration Schedule
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

                    <label className="line3" htmlFor="">Instrument Category</label>
                    <select name="Instrument_Category" className="line4">
                        <option value="">Select Intrument Category</option>
                        <option value="chromathograpy">chromathograpy</option>
                        <option value="weighing balance">weighing balance</option>
                    </select>

                    <label className="line3" htmlFor="">Calibration Type</label>
                    <select name="Calibration Type" className="line4">
                        <option value="">Select Calibration Type</option>
                        <option value="yearly">yearly</option>
                        <option value="monthly">monthly</option>
                        <option value="daily">daily</option>
                    </select>

                    <label className="line3" htmlFor="">Instrument (Instrument ID)</label>
                    <select name="Instrument_(Instrument ID)" className="line4">
                        <option value="">Select Instrument ID</option>
                    </select>

                    <label className="line3" htmlFor="">Module (Module ID)</label>
                    <select name="Module_(Module ID)" className="line4">
                        <option value="">Select Module ID</option>
                    </select>

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

                    <label className="line3" htmlFor="">Calibration Datasheet</label>
                    <select name="Calibration Datasheet" className="line4">
                        <option value="">Select </option>
                        <option value="CAl data sheet">CAl data sheet </option>
                        <option value="Data sheet1">Data sheet1</option>
                    </select>

                    <label className="line3" htmlFor="">Schedule Description</label>
                    <input className="line4" required type="text" placeholder="Schedule Description" />

                    <label className="line3" htmlFor="">Start Date</label>
                    <input className="line4" style={{ padding: '14px' }} required type="date" placeholder="" />

                    <label className="line3" htmlFor="">Frequency
                        <select name="Frequency" className="line4">
                            <option value="">Period </option>
                            <option value="Daily">Daily</option>
                            <option value="Weekly">Weekly</option>
                            <option value="Monthly">Monthly</option>
                            <option value="Yearly">Yearly</option>
                        </select>

                        <select name="Frequency" className="line4">
                            <option value="">Period </option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">...</option>
                        </select></label>

                    <label className="line3" htmlFor="">Tolerance Period</label>
                    <input className="line4" required type="text" placeholder="Tolerance Period" />

                    <div id="line5">
                        <button
                            type="button"
                            data-bs-dismiss="offcanvas"
                            aria-label="Close"
                        >
                            &lt; Back
                        </button>
                        <button onClick={handleAddStorage}>Submit</button>
                    </div>
                    <div>
                        <ToastContainer />
                    </div>
                </div>
            </div>

            <br />
            <div className='table-responsive p-4 container1 '>
                <table className='table shadow' style={{ fontSize: '0.8rem', margin: '0px auto', width: '98%' }}>
                    <thead>
                        <tr>
                            <th><input type="checkbox" /></th>
                            <th>SNo.</th>
                            <th>Unique Code</th>
                            <th>Calibration Workflow</th>
                            <th>Schedule Description</th>
                            <th>Start Date</th>
                            <th>Frequency</th>
                            <th>Next Calibration Due</th>
                            <th>Status</th>
                            <th>Actions </th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderRows()}
                    </tbody>
                </table>
            </div>

            <div className="pagination">
                <div className="pagination" style={{ margin: '0 30px' }}>
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
                <button className="btn btn-next d-flex align-items-center" style={{ margin: '0 30px' }} onClick={nextPage}> Next <FaArrowRight className="ms-2" /></button>
            </div>
                      
      {addModal && <StatusModal visible={addModal} closeModal={() => setAddModal(false)} />}
        </>
    );
}
