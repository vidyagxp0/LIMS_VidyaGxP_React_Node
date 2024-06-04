import React, { useState } from 'react';
import { HiDotsHorizontal } from "react-icons/hi";
import { CgAddR, CgCalendarDates } from 'react-icons/cg';
import { FaArrowRight } from 'react-icons/fa';
import { IoEyeSharp } from "react-icons/io5";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { faEye, faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CButton, CCol, CFormInput, CFormSelect, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react";

export default function SampleType() {
  const [addModal, setAddModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState('All');

  const pageSize = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [statusFilter, setStatusFilter] = useState('');

  const badgeStyle = { background: "gray", color: "white", width: "110px" };
  const badgeStyle2 = { background: "#2A5298", color: "white", width: "110px" };
  const badgeStyle3 = { background: "green", color: "white", width: "110px" };
  const badgeStyle4 = { background: "red", color: "white", width: "110px" };
  const badgeStyle5 = { background: "orange", color: "white", width: "110px" };
  const badgeStyle6 = { background: "purple", color: "white", width: "110px" };

  const [employees, setEmployees] = useState([
    { id: 1, user: 'Initiated Product', Date: 'May 17th 24 14:34', DayComplete: '10', status: 'APPROVED' },
    { id: 2, user: 'Initiated Product', Date: 'May 17th 24 14:34', DayComplete: '10', status: 'INITIATED' },
    { id: 3, user: 'Initiated Product', Date: 'May 17th 24 14:34', DayComplete: '10', status: 'DROPPED' },
    { id: 4, user: 'Initiated Product', Date: 'May 17th 24 14:34', DayComplete: '10', status: 'INITIATED' },
    { id: 5, user: 'Initiated Product', Date: 'May 17th 24 14:34', DayComplete: '10', status: 'REJECTED' },
    { id: 6, user: 'Initiated Product', Date: 'May 17th 24 14:34', DayComplete: '10', status: 'APPROVED' },
    { id: 7, user: 'Initiated Product', Date: 'May 17th 24 14:34', DayComplete: '10', status: 'APPROVED' },
    { id: 8, user: 'Initiated Product', Date: 'May 17th 24 14:34', DayComplete: '10', status: 'DROPPED' },
    { id: 9, user: 'Initiated Product', Date: 'May 17th 24 14:34', DayComplete: '10', status: 'DROPPED' },
    { id: 10, user: 'Initiated Product', Date: 'May 17th 24 14:34', DayComplete: '10', status: 'REINITIATED' },
  ]);

  const filteredEmployees = employees.filter(employee =>
    selectedStatus === 'All' ? true : employee.status.toUpperCase() === selectedStatus.toUpperCase()
  );

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, employees.length);

  const renderRows = () => {
    return filteredEmployees.slice(startIndex, endIndex).map((employee, index) => (
      <tr key={startIndex + index}>
        <td>{startIndex + index + 1}</td>
        <td>{employee.user}</td>
        <td>{employee.Date}</td>
        <td>{employee.DayComplete}</td>
        <td>
          <div
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
          </div>
        </td>
        <td>
          <div className="d-flex gap-3">
            <div>
              <Link to="/masters/product-details"><FontAwesomeIcon icon={faEye} /></Link>
            </div>
            <div
              className="cursor-pointer"
              onClick={() => setAddModal(true)}
            >
              <FontAwesomeIcon icon={faPenToSquare} />
            </div>
            <div className="cursor-pointer" onClick={() => handleDeleteClick(employee.id)}>
              <FontAwesomeIcon icon={faTrashCan} />
            </div>
          </div>
        </td>
      </tr>
    ));
  };

  const nextPage = () => {
    if (currentPage < Math.ceil(filteredEmployees.length / pageSize)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextToLastPage = () => {
    setCurrentPage(Math.ceil(filteredEmployees.length / pageSize));
  };
  const handleDeleteClick = (id) => {
    setDeleteId(id);
    setDeleteModal(true);
  };

  const handleDeleteConfirm = () => {
    setEmployees((prevEmployees) => prevEmployees.filter((employee) => employee.id !== deleteId));
    setDeleteModal(false);

  };

  return (
    <div className="mx-5">
      <div className="row my-5">
        <div className="main-head">
          <div className="title fw-bold fs-5 py-4">Specifications/Sample Type</div>
        </div>
        <div className="d-flex justify-content-between my-4">
          <div className="dropdown">
            <CFormSelect
              onChange={(e) => {
                setSelectedStatus(e.target.value);
                setCurrentPage(1);
              }}
              value={selectedStatus}
              style={{fontSize:'0.9rem'}}
            >

              <option value="All">All</option>
              <option value="Initiated">Initiated</option>
              <option value="Approved">Approved</option>
              <option value="Rejected">Rejected</option>
              <option value="Reinitiated">Reinitiated</option>
              <option value="Dropped">Dropped</option>
            </CFormSelect>
          </div>
          <div className="">
            <CButton color="primary" onClick={() => setAddModal(true)}>Add Sample Type</CButton>
          </div>
        </div>

      </div>

            <div
          className=" rounded bg-white"
          style={{fontFamily:'sans-serif', fontSize:'0.9rem' ,boxShadow:'5px 5px 20px #5D76A9'}}
        >
        <CTable align="middle" responsive className="mb-0    table-responsive">
          <thead>
            <tr>
              <th style={{ background: "#5D76A9", color: "white"}}>Sr.no.</th>
              <th style={{ background: "#5D76A9", color: "white"}}>Sample Type Name</th>
              <th style={{ background: "#5D76A9", color: "white"}}>Add Date</th>
              <th style={{ background: "#5D76A9", color: "white"}}>Days to Complete</th>
              <th style={{ background: "#5D76A9", color: "white"}}>Status</th>
              <th style={{ background: "#5D76A9", color: "white"}}><HiDotsHorizontal /></th>
            </tr>
          </thead>
          <tbody>
            {renderRows()}
          </tbody>
        </CTable>
      </div>

      <div className="d-flex justify-content-between align-items-center my-4">
        <div className="pagination">
          <button className="btn mr-2" onClick={prevPage} disabled={currentPage === 1}>
            &lt;&lt;
          </button>
          <button className="btn mr-2 bg-dark-subtle rounded-circle">{currentPage}</button>
          <button className="btn mr-2" onClick={nextPage} disabled={endIndex >= employees.length}>
            &gt;&gt;
          </button>
        </div>
        <button className="btn d-flex align-items-center border" onClick={nextToLastPage}>
          Next <FaArrowRight className='ms-2' />
        </button>
      </div>

      {addModal && <StatusModal visible={addModal} closeModal={() => setAddModal(false)} />}
      {deleteModal && <DeleteModal visible={deleteModal} closeModal={() => setDeleteModal(false)} confirmDelete={handleDeleteConfirm} />}

    </div>
  );
};

const StatusModal = (_props) => {
  return (
    <CModal alignment="center" visible={_props.visible} onClose={_props.closeModal}>
      <CModalHeader>
        <CModalTitle>Add Product/Material</CModalTitle>
      </CModalHeader>
      <CModalBody>

        <CFormInput
          className='mb-3'
          type='text'
          label='Sample Name'
          placeholder='ID'
        />

        <CFormInput
          className='mb-3'
          type='text'
          label='Prefix'
          placeholder='Model Number'
        />

        <CFormInput
          className='mb-3'
          type='text'
          label='Days To Complete'
          placeholder='Number' />

        <label className="line3" htmlFor="">Selected Standard Fields Displays At Sample Registration</label>
        <FormGroup style={{ marginLeft: '20px' }}>
          <FormControlLabel control={<Checkbox />} label="Manufacturing Date" />
          <FormControlLabel control={<Checkbox />} label="Expiry Date" />
          <FormControlLabel control={<Checkbox />} label="Batch No." />
          <FormControlLabel control={<Checkbox />} label="Batch Size" />
          <FormControlLabel control={<Checkbox />} label="Packing Type" />
          <FormControlLabel control={<Checkbox />} label="Project" />
          <FormControlLabel control={<Checkbox />} label="Supplier" />
          <FormControlLabel control={<Checkbox />} label="Customer" />
          <FormControlLabel control={<Checkbox />} label="Manufacturer" />
          <FormControlLabel control={<Checkbox />} label="Priority" />
          <FormControlLabel control={<Checkbox />} label="Sampling Quantity" />
          <FormControlLabel control={<Checkbox />} label="Sample Reference No" />
          <FormControlLabel control={<Checkbox />} label="Recommended Reference Lot" />
          <FormControlLabel control={<Checkbox />} label="W.S. Validity Period" />
          <FormControlLabel control={<Checkbox />} label="Storage Condition" />
          <FormControlLabel control={<Checkbox />} label="Storage Location" />
          <FormControlLabel control={<Checkbox />} label="Comments" />
        </FormGroup>

        <FormControl style={{ margin: '20px' }}>
          <FormLabel id="demo-row-radio-buttons-group-label">Reserve Sample Required</FormLabel>
          <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
          </RadioGroup>

          <FormLabel id="demo-row-radio-buttons-group-label">Sampling Required</FormLabel>
          <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
          </RadioGroup>

          <FormLabel id="demo-row-radio-buttons-group-label">Analyst Level Investigation Required</FormLabel>
          <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
          </RadioGroup>

          <FormLabel id="demo-row-radio-buttons-group-label">Sample Destruction Required</FormLabel>
          <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
          </RadioGroup>

          <FormLabel id="demo-row-radio-buttons-group-label">Sample Acceptance Required</FormLabel>
          <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
          </RadioGroup>

          <FormLabel id="demo-row-radio-buttons-group-label">TCI Approval Required</FormLabel>
          <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
          </RadioGroup>

          <FormLabel id="demo-row-radio-buttons-group-label">SI Approval Required</FormLabel>
          <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
          </RadioGroup>

          <FormLabel id="demo-row-radio-buttons-group-label">MGR Approval Required</FormLabel>
          <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
          </RadioGroup>

          <FormLabel id="demo-row-radio-buttons-group-label">QA Approval Required</FormLabel>
          <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
          </RadioGroup>

          <FormLabel id="demo-row-radio-buttons-group-label">Reduced/Retesting Required</FormLabel>
          <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
          </RadioGroup>
        </FormControl>

      </CModalBody>
      <CModalFooter>
        <CButton color="light" onClick={_props.closeModal}>Back</CButton>
        <CButton color="primary">Submit</CButton>
      </CModalFooter>
    </CModal>
  );
};

const DeleteModal = (_props) => {
  return (
    <CModal alignment="center" visible={_props.visible} onClose={_props.closeModal} size="lg">
      <CModalHeader>
        <CModalTitle>Delete Sample type</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <p>Are you sure you want to delete this Sample Type{ }?</p>
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
