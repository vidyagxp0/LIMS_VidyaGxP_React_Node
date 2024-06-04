import React, { useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { FaArrowRight } from 'react-icons/fa';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Link } from "react-router-dom";

import { faEye, faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CButton, CCol, CFormInput, CFormSelect, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react";


export default function TestRegistrations() {

  const [addModal, setAddModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState('All');

  const badgeStyle = { background: "gray", color: "white", width: "110px" };
  const badgeStyle2 = { background: "#2A5298", color: "white", width: "110px" };
  const badgeStyle3 = { background: "green", color: "white", width: "110px" };
  const badgeStyle4 = { background: "red", color: "white", width: "110px" };
  const badgeStyle5 = { background: "orange", color: "white", width: "110px" };
  const badgeStyle6 = { background: "purple", color: "white", width: "110px" };


  const top100Films = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
    { label: '12 Angry Men', year: 1957 },
  ];

  const pageSize = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const [employees, setEmployees] = useState([
    { id: 1, user: 'HYO', ProdName: 'Sacubitril', SpecificID: 'ARIP0000095', SpecificName: 'test', EffectFrom: 'May 18th 24', ReviewDate: 'Aug 18th 24', Status: 'APPROVED' },
    { id: 2, user: 'HYO', ProdName: 'Sacubitril', SpecificID: 'ARIP0000095', SpecificName: 'test', EffectFrom: 'May 18th 24', ReviewDate: 'Aug 18th 24', Status: 'INITIATED' },
    { id: 3, user: 'CHPOIL', ProdName: 'Sacubitril', SpecificID: 'ARIP0000095', SpecificName: 'test', EffectFrom: 'May 18th 24', ReviewDate: 'Aug 18th 24', Status: 'INITIATED' },
    { id: 4, user: 'HYO', ProdName: 'Sacubitril', SpecificID: 'ARIP0000095', SpecificName: 'test', EffectFrom: 'May 18th 24', ReviewDate: 'Aug 18th 24', Status: 'APPROVED' },
    { id: 5, user: 'HYO', ProdName: 'Sacubitril', SpecificID: 'ARIP0000095', SpecificName: 'test', EffectFrom: 'May 18th 24', ReviewDate: 'Aug 18th 24', Status: 'REINITIATED' },
    { id: 6, user: 'PM-001', ProdName: 'Sacubitril', SpecificID: 'ARIP0000095', SpecificName: 'test', EffectFrom: 'May 18th 24', ReviewDate: 'Aug 18th 24', Status: 'REJECTED' },
    { id: 7, user: 'HYO', ProdName: 'Sacubitril', SpecificID: 'ARIP0000095', SpecificName: 'test', EffectFrom: 'May 18th 24', ReviewDate: 'Aug 18th 24', Status: 'APPROVED' },
    { id: 8, user: 'TSTvl', ProdName: 'Sacubitril', SpecificID: 'ARIP0000095', SpecificName: 'test', EffectFrom: 'May 18th 24', ReviewDate: 'Aug 18th 24', Status: 'APPROVED' },
    { id: 9, user: 'HYO', ProdName: 'Sacubitril', SpecificID: 'ARIP0000095', SpecificName: 'test', EffectFrom: 'May 18th 24', ReviewDate: 'Aug 18th 24', Status: 'DROPPED' },
    { id: 10, user: 'HYO', ProdName: 'Sacubitril', SpecificID: 'ARIP0000095', SpecificName: 'test', EffectFrom: 'May 18th 24', ReviewDate: 'Aug 18th 24', Status: 'DROPPED' },
  ]);
  const filteredEmployees = employees.filter(employee =>
    selectedStatus === 'All' ? true : employee.Status.toUpperCase() === selectedStatus.toUpperCase()
  );

  
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, employees.length);

  const renderRows = () => {
    return filteredEmployees.slice(startIndex, endIndex).map((employee, index) => (
      <tr key={startIndex + index}>
        <td>{startIndex + index + 1}</td>
        <td>{employee.user}</td>
        <td>{employee.ProdName}</td>
        <td>{employee.SpecificID}</td>
        <td>{employee.SpecificName}</td>
        <td>{employee.SpecificName}</td>
        <td>{employee.ProdName}</td>
        <td>{employee.ProdName}</td>
        <td>
          <div
            className="d-flex justify-content-center py-2 px-3 small rounded fw-bold"
            style={
              employee.Status === "INITIATED" ? badgeStyle2 :
                employee.Status === "APPROVED" ? badgeStyle3 :
                  employee.Status === "REJECTED" ? badgeStyle4 :
                    employee.Status === "REINITIATED" ? badgeStyle5 :
                      employee.Status === "DROPPED" ? badgeStyle6 :
                        employee.Status === "ALL" ? badgeStyle : badgeStyle
            }
          >
            {employee.Status}
          </div>
          </td>
        <td>
          <div className="d-flex gap-3">
            <div>
              <Link to="/approval/1321">
                <FontAwesomeIcon icon={faEye} />
              </Link>
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
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const nextToLastPage = () => {
    setCurrentPage(Math.ceil(employees.length / pageSize));
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
          <div className="title fw-bold fs-5 py-4">Test Registration</div>
        </div>
        <div >

          <CRow className="mb-3">
            <CCol sm={2}>
              <CFormSelect
                style={{fontSize:'0.9rem'}}
              >
                <option value="">Select Type</option>
                <option value="raw-material">Raw Material</option><option value="hcl">hcl</option>
                <option value="hydrochloric-acid">Hydrochloric Acid</option><option value="petrochemical">Petrochemical</option><option value="initiated-product">Initiated Product</option><option value="semi-finished">Semi Finished</option><option value="abcd">ABCD</option><option value="h2so4">H2So4</option><option value="att108">ATT108</option><option value="micro-media">Micro Media </option><option value="fg-templage">FG Templage</option><option value="water-type">water type</option><option value="sodium">Sodium</option><option value="test-sample-type">test sample type</option><option value="new-product-sample-type">New Product Sample Type</option><option value="packing-material">Packing Material</option><option value="raw-material-1">Raw Material-1</option><option value="finished-product">Finished Product</option>

              </CFormSelect>
            </CCol>
            <CCol sm={2}>
              <CFormSelect
                style={{fontSize:'0.9rem'}}
              >
                <option value="">Select Client</option>
                <option value="mit-power">MIT Power</option>
                <option value="ravi-kandala">Ravi Kandala</option>


              </CFormSelect>
            </CCol>
            <CCol sm={4}>
              <CFormSelect
                style={{fontSize:'0.9rem'}}
              >
                <option value="">Select Specs</option>
                <option value="RMS-TDL-01 - Tadalfil Raw material testing specification">RMS-TDL-01 - Tadalfil Raw material testing specification</option>
                <option value="DR123 - Resinate02">DR123 - Resinate02</option>
                <option value="DCU-1 - DCU-01">DCU-1 - DCU-01</option>
                <option value="DS-02 - Salts2">DS-02 - Salts2</option>
                <option value="DS02 - Diclofenac Sodium-01">DS02 - Diclofenac Sodium-01</option>
                <option value="DFA-1 - DFA-01">DFA-1 - DFA-01</option>
                <option value="">DS2 - DHS-1</option><option value="">DFD-1 - DFD-01</option>
                <option value="">DVS-1 - DVS-01</option><option value="MIR1 - Mirabegron1">MIR1 - Mirabegron1</option>
                <option value="">CLO-1 - CLO-01</option>
                <option value="">ESZ123 - Eslica12</option>
                <option value="">CTH-1 - CTH-01</option>
                <option value="HYDRO89 - HydrochL">HYDRO89 - HydrochL</option>
                <option value="LEV2 - Levetiracetam">LEV2 - Levetiracetam</option>
                <option value="">CPZ-1 - CPZ-01</option>
                <option value="">MM24 - M/M</option>
                <option value="">CLB-1 - CBN-01</option>
                <option value="OM01 - Medoxomil">OM01 - Medoxomil</option>
                <option value="OX12 - Oxcarbazepine1">OX12 - Oxcarbazepine1</option>
                <option value="P101 - Pirfenidone1">P101 - Pirfenidone1</option>
                <option value="RAN124 - Ranolazine">RAN124 - Ranolazine</option>
                <option value="RR12 - Rivaroxaban">RR12 - Rivaroxaban</option>
                <option value="R12 - SOP for Rosuvastatin">R12 - SOP for Rosuvastatin</option>
                <option value="">CBN-1 - CBN-01</option>


              </CFormSelect>
            </CCol>
            <CCol sm={2}>
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
            </CCol>
            <CCol sm={2}>
              <div className="d-flex justify-content-end">
                <CButton color="primary" onClick={() => setAddModal(true)}>Add Registration</CButton>
              </div>
            </CCol>

          </CRow>
        </div>

      </div>

            <div
          className=" rounded bg-white"
          style={{fontFamily:'sans-serif', fontSize:'0.9rem' ,boxShadow:'5px 5px 20px #5D76A9'}}
        >
        <CTable align="middle" responsive className="mb-0    table-responsive">
          <thead>
            <tr>
              <th style={{ background: "#5D76A9", color: "white"}} >Sr.no.</th>
              <th style={{ background: "#5D76A9", color: "white"}} >Specification ID</th>
              <th style={{ background: "#5D76A9", color: "white"}} >Product Name</th>
              <th style={{ background: "#5D76A9", color: "white"}} >Test Name</th>
              <th style={{ background: "#5D76A9", color: "white"}} >Test Code</th>
              <th style={{ background: "#5D76A9", color: "white"}} >Method</th>
              <th style={{ background: "#5D76A9", color: "white"}} >Category</th>
              <th style={{ background: "#5D76A9", color: "white"}} >Test type</th>
              <th style={{ background: "#5D76A9", color: "white"}} >Status</th>
              <th style={{ background: "#5D76A9", color: "white"}} >Actions</th>

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
}

const StatusModal = (_props) => {
  const top100Films = [
    { label: "The Shawshank Redemption", year: 1994 },
    { label: "The Godfather", year: 1972 },
    { label: "The Godfather: Part II", year: 1974 },
    { label: "The Dark Knight", year: 2008 },
    { label: "12 Angry Men", year: 1957 },
  ];

  return (
    <CModal alignment="center" visible={_props.visible} onClose={_props.closeModal}>
      <CModalHeader>
        <CModalTitle>Add Test Registration</CModalTitle>
      </CModalHeader>
      <CModalBody>

        <p className="mb-3" >Add information Test Registration</p>

        <label className="mb-3" htmlFor="">
          Client
        </label>
        <Autocomplete
          className="mb-3"
          disablePortal
          id="combo-box-demo"
          options={top100Films}
          renderInput={(params) => <TextField {...params} label="" />}
        />

        <label className="mb-3" htmlFor="">
          Specification ID
        </label>
        <Autocomplete
          className="mb-3"
          disablePortal
          id="combo-box-demo"
          options={top100Films}
          renderInput={(params) => <TextField {...params} label="" />}
        />

        <CFormInput
          className='mb-3'
          type="text"
          label="Product/Material Name"
          placeholder="Product/Material Name"
        />

        <CFormInput
          className='mb-3'
          type="text"
          label="Test Name"
          placeholder="Test Name"
        />

        <CFormInput
          className='mb-3'
          type="text"
          label="Test Code"
          placeholder="Test Code"
        />


        <CFormInput
          className='mb-3'
          type="date"
          label="Method No."
          placeholder="Method No."
        />
        <CFormSelect
          type="select"
          label="Test Category"

          options={[
            "Select Test Category",
            { label: "Apperance", value: "Apperance" },

          ]}
        />
        <CFormSelect
          type="select"
          label="Test Technique"

          options={[
            "Select Test Technique",
            { label: "Default", value: "Default" },

          ]}
        />
        <CFormSelect
          type="select"
          label="Test Type"

          options={[
            "Select Test Type",
            { label: "Qualitative", value: "Qualitative" },

          ]}
        />

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
        <CModalTitle>Delete Test Registration</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <p>Are you sure you want to delete this Test Registration { }?</p>
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