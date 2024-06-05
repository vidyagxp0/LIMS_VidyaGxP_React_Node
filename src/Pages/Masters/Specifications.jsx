import React, { useState } from "react";
// import "./StorageCondition.css";
import "react-toastify/dist/ReactToastify.css";
import { FaArrowRight } from "react-icons/fa";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Link } from "react-router-dom";
import { CButton, CCol, CFormInput, CFormSelect, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react";
import {
  faEye,
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Specifications() {

  const [addModal, setAddModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState('All');

  const pageSize = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [statusFilter, setStatusFilter] = useState('');

  const [storageName, setStorageName] = useState("");
  const badgeStyle = { background: "gray", color: "white", width: "110px" };
  const badgeStyle2 = { background: "#2A5298", color: "white", width: "110px" };
  const badgeStyle3 = { background: "green", color: "white", width: "110px" };
  const badgeStyle4 = { background: "red", color: "white", width: "110px" };
  const badgeStyle5 = { background: "orange", color: "white", width: "110px" };
  const badgeStyle6 = { background: "purple", color: "white", width: "110px" };

  const [employees, setEmployees] = useState([
    {
      id: 1,
      user: "HYO",
      ProdName: "Sacubitril",
      SpecificID: "ARIP0000095",
      SpecificName: "test",
      EffectFrom: "May 18th 24",
      ReviewDate: "Aug 18th 24",
      status: "APPROVED",
    },
    {
      id: 2,
      user: "HYO",
      ProdName: "Sacubitril",
      SpecificID: "ARIP0000095",
      SpecificName: "test",
      EffectFrom: "May 18th 24",
      ReviewDate: "Aug 18th 24",
      status: "INITIATED",
    },
    {
      id: 3,
      user: "CHPOIL",
      ProdName: "Sacubitril",
      SpecificID: "ARIP0000095",
      SpecificName: "test",
      EffectFrom: "May 18th 24",
      ReviewDate: "Aug 18th 24",
      status: "INITIATED",
    },
    {
      id: 4,
      user: "HYO",
      ProdName: "Sacubitril",
      SpecificID: "ARIP0000095",
      SpecificName: "test",
      EffectFrom: "May 18th 24",
      ReviewDate: "Aug 18th 24",
      status: "APPROVED",
    },
    {
      id: 5,
      user: "HYO",
      ProdName: "Sacubitril",
      SpecificID: "ARIP0000095",
      SpecificName: "test",
      EffectFrom: "May 18th 24",
      ReviewDate: "Aug 18th 24",
      status: "APPROVED",
    },
    {
      id: 6,
      user: "PM-001",
      ProdName: "Sacubitril",
      SpecificID: "ARIP0000095",
      SpecificName: "test",
      EffectFrom: "May 18th 24",
      ReviewDate: "Aug 18th 24",
      status: "REJECTED",
    },
    {
      id: 7,
      user: "HYO",
      ProdName: "Sacubitril",
      SpecificID: "ARIP0000095",
      SpecificName: "test",
      EffectFrom: "May 18th 24",
      ReviewDate: "Aug 18th 24",
      status: "REINITIATED",
    },
    {
      id: 8,
      user: "TSTvl",
      ProdName: "Sacubitril",
      SpecificID: "ARIP0000095",
      SpecificName: "test",
      EffectFrom: "May 18th 24",
      ReviewDate: "Aug 18th 24",
      status: "APPROVED",
    },
    {
      id: 9,
      user: "HYO",
      ProdName: "Sacubitril",
      SpecificID: "ARIP0000095",
      SpecificName: "test",
      EffectFrom: "May 18th 24",
      ReviewDate: "Aug 18th 24",
      status: "APPROVED",
    },
    {
      id: 10,
      user: "HYO",
      ProdName: "Sacubitril",
      SpecificID: "ARIP0000095",
      SpecificName: "test",
      EffectFrom: "May 18th 24",
      ReviewDate: "Aug 18th 24",
      status: "DROPPED",
    },
  ]);

  const filteredEmployees = employees.filter(employee =>
    selectedStatus === 'All' ? true : employee.status.toUpperCase() === selectedStatus.toUpperCase()
  );


  const deleteEmployee = (index) => {
    const updatedEmployees = employees.filter((_, i) => i !== index);
    setEmployees(updatedEmployees);
  };

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, employees.length);

  const renderRows = () => {
    return filteredEmployees
      .slice(startIndex, endIndex)
      .map((employee, index) => (
        <tr key={startIndex + index}>
          <td>{startIndex + index + 1}</td>
          <td>{employee.user}</td>
          <td>{employee.ProdName}</td>
          <td>{employee.SpecificID}</td>
          <td>{employee.SpecificName}</td>
          <td>{employee.EffectFrom}</td>
          <td>{employee.ReviewDate}</td>
          <td>

          <button  
                        className={`py-1 px-3 small w-75 rounded text-light d-flex justify-content-center align-items-center bg-${
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
                      </button>
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
    <div className="m-5 mt-3">
        <div className="main-head">
        <h4 className="fw-bold">Specifications</h4>
        </div>
        <div >
        <div className="mt-5 mb-3">
          <CRow className="mb-3">
            <CCol sm={3}>
              <CFormSelect
                style={{fontSize:'0.9rem'}}
              >
                <option value="">Select Sample Type</option>
                <option value="raw-material">Raw Material</option>
                <option value="hcl">hcl</option>
                <option value="hydrochloric-acid">Hydrochloric Acid</option>
                <option value="petrochemical">Petrochemical</option>
                <option value="initiated-product">Initiated Product</option>
                <option value="semi-finished">Semi Finished</option>
                <option value="abcd">ABCD</option>
                <option value="h2so4">H2So4</option>
                <option value="att108">ATT108</option>
                <option value="micro-media">Micro Media </option>
                <option value="fg-templage">FG Templage</option>
                <option value="water-type">water type</option>
                <option value="sodium">Sodium</option>
                <option value="test-sample-type">test sample type</option>
                <option value="new-product-sample-type">
                  New Product Sample Type
                </option>
                <option value="packing-material">Packing Material</option>
                <option value="raw-material-1">Raw Material-1</option>
                <option value="finished-product">Finished Product</option>
              </CFormSelect>
            </CCol>
            <CCol sm={3}>
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
            <CCol sm={6}>
              <div  className="d-flex justify-content-end">
                <CButton style={{fontSize:'0.9rem'}} color="primary" onClick={() => setAddModal(true)}>Add Specifications</CButton>
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
              <th style={{ background: "#5D76A9", color: "white"}}>Sr.no.</th>
              <th style={{ background: "#5D76A9", color: "white"}}>Product Code</th>
              <th style={{ background: "#5D76A9", color: "white"}}>Product Name</th>
              <th style={{ background: "#5D76A9", color: "white"}}>Specification ID</th>
              <th style={{ background: "#5D76A9", color: "white"}}>Specification Name</th>
              <th style={{ background: "#5D76A9", color: "white"}}>Effect From</th>
              <th style={{ background: "#5D76A9", color: "white"}}>Review Date</th>
              <th style={{ background: "#5D76A9", color: "white"}}>Status</th>
              <th style={{ background: "#5D76A9", color: "white"}}>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {renderRows()}
          </tbody>
        </CTable>
      </div>

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
        <CModalTitle>Add Specification</CModalTitle>
      </CModalHeader>
      <CModalBody>

        <label className="mb-3" htmlFor="">
          Product/Material Code
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
          label="Product Name"
          placeholder="Product Name"
          disabled
        />

        <CFormInput
          className='mb-3'
          type="text"
          label="Specification Name"
          placeholder="Specification Name"
        />
        <CFormInput
          className='mb-3'
          type="text"
          label="Specification ID"
          placeholder="Specification ID"
        />

        <CFormSelect
          className='mb-3'
          type="select"
          label="Sample Type"

          options={[
            "Select Sample Type",
            { label: "Raw Material", value: "Raw Material" },
            { label: "hcl", value: "hcl" },
            { label: "Hydrochloric Acid", value: "Hydrochloric Acid" },
            { label: "Petrochemical", value: "Petrochemical" },
            { label: "Initiated Product", value: "Initiated Product" },
            { label: "Semi Finished", value: "Semi Finished" },
            { label: "ABCD", value: "ABCD" },
            { label: "H2So4", value: "H2So4" },
            { label: "Micro Media", value: "Micro Media" },
            { label: "FG Templage", value: "FG Templage" }
          ]}
        />
        <CFormSelect
          className='mb-3'
          type="select"
          label="Specification Type"

          options={[
            "Select Specification Type",
            { label: "environment", value: "environment" },
            { label: "culture", value: "culture" },
            { label: "culture1", value: "culture1" },
            { label: "working-standard", value: "working-standard" },
            { label: "tentative", value: "tentative" },
            { label: "release", value: "release" },
            { label: "regulatory", value: "regulatory" },
            { label: "Raw Material", value: "Raw Material" },
            { label: "instrument", value: "instrument" },
            { label: "shell life", value: "shell life" }
          ]}
        />
        <CFormInput
          className='mb-3'
          type="date"
          label="Effective From"
          placeholder=""
        />
        <CFormInput
          className='mb-3'
          type="date"
          label="Review Date"
          placeholder=""
        />
        <CFormInput
          className='mb-3'
          type="text"
          label="Supersedes"
          placeholder="Supersedes"
        />
        <CFormInput
          className='mb-3'
          type="text"
          label="Standard Test Procedure No."
          placeholder="Standard Test Procedure No."
        />
        <CFormInput
          className='mb-3'
          type="file"
          label="Document"
          placeholder=""
        />



      </CModalBody>
      <CModalFooter>
        <CButton color="light" onClick={_props.closeModal}>Back</CButton>
        <CButton color="primary">Add Specifications</CButton>
      </CModalFooter>
    </CModal>
  );
};

const DeleteModal = (_props) => {
  return (
    <CModal alignment="center" visible={_props.visible} onClose={_props.closeModal} size="lg">
      <CModalHeader>
        <CModalTitle>Delete Specification</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <p>Are you sure you want to delete this Specification { }?</p>
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
