import {
  CButton,
  CCol,
  CFormInput,
  CFormSelect,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from "@coreui/react";
import React, { useState } from "react";
// import "./StorageCondition.css";
import { FaArrowRight } from "react-icons/fa";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormControlLabel from "@mui/material/FormControlLabel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";

export default function TestTechniques() {
  const [addModal, setAddModal] = useState(false);
  const [updateModal, setUpdateModal] = useState(false)
	const [deleteId, setDeleteId] = useState(null)
  const [removeModal, setRemoveModal] = useState(false);
  const [filterStatus, setFilterStatus] = useState("All");

  const pageSize = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const [tableData, setTableData] = useState([
    {
      id: 1,
      user: "HYO",
      ProdName: "Sacubitril",
      SpecificID: "ARIP0000095",
      SpecificName: "test",
      EffectFrom: "May 18th 24",
      ReviewDate: "Aug 18th 24",
      status: "ACTIVE",
    },
    {
      id: 2,
      user: "HYO",
      ProdName: "Sacubitril",
      SpecificID: "ARIP0000095",
      SpecificName: "test",
      EffectFrom: "May 18th 24",
      ReviewDate: "Aug 18th 24",
      status: "INACTIVE",
    },
    {
      id: 3,
      user: "CHPOIL",
      ProdName: "Sacubitril",
      SpecificID: "ARIP0000095",
      SpecificName: "test",
      EffectFrom: "May 18th 24",
      ReviewDate: "Aug 18th 24",
      status: "ACTIVE",
    },
    {
      id: 4,
      user: "HYO",
      ProdName: "Sacubitril",
      SpecificID: "ARIP0000095",
      SpecificName: "test",
      EffectFrom: "May 18th 24",
      ReviewDate: "Aug 18th 24",
      status: "ACTIVE",
    },
    {
      id: 5,
      user: "HYO",
      ProdName: "Sacubitril",
      SpecificID: "ARIP0000095",
      SpecificName: "test",
      EffectFrom: "May 18th 24",
      ReviewDate: "Aug 18th 24",
      status: "INACTIVE",
    },
    {
      id: 6,
      user: "HYO",
      ProdName: "Sacubitril",
      SpecificID: "ARIP0000095",
      SpecificName: "test",
      EffectFrom: "May 18th 24",
      ReviewDate: "Aug 18th 24",
      status: "INACTIVE",
    },
    {
      id: 7,
      user: "HYO",
      ProdName: "Sacubitril",
      SpecificID: "ARIP0000095",
      SpecificName: "test",
      EffectFrom: "May 18th 24",
      ReviewDate: "Aug 18th 24",
      status: "INACTIVE",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleDelete = () => {
		setTableData((prevData) => prevData.filter((item) => item.id !== deleteId));
		setRemoveModal(false);
		setDeleteId(null)
	  }
	
	  const handleDeleteClick = (id) => {
		setDeleteId(id);
		setRemoveModal(true);
	  }


  const filteredtableData = tableData
    .filter((data) =>
      data.user.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(
      (data) =>
        filterStatus === "All" || data.status === filterStatus
    );

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, filteredtableData.length);

  const renderRows = () => {
    return filteredtableData.slice(startIndex, endIndex).map((data, index) => (
      <tr key={startIndex + index}>
        <td>
          <input type="checkbox" />
        </td>
        <td>{startIndex + index + 1}</td>
        <td>{data.user}</td>
        <td>{data.ProdName}</td>
        <td>{data.SpecificID}</td>
        <td>{data.SpecificID}</td>
        <td>
          <div className=" w-75">
            <div className={`p-2 small rounded fw-bold text-light d-flex justify-content-center align-items-center bg-${data.status === 'ACTIVE' ? 'green-700'
              : 'red-700'}`} >{data.status}</div>
          </div>
        </td>
        <td><div className="d-flex gap-3">
          <div className="cursor-pointer" onClick={() => setUpdateModal(true)}><FontAwesomeIcon icon={faPenToSquare} /></div>
          <div
            className="cursor-pointer"
            onClick={() => handleDeleteClick(data.id)}
          >
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
    setCurrentPage(Math.ceil(filteredtableData.length / pageSize));
  };


  const StatusModal = (_props) => {

    return (
      <CModal
        alignment="center"
        visible={_props.visible}
        onClose={_props.closeModal}
        size="lg"
      >
        <CModalHeader>
          <CModalTitle>Add Test Technique</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p className="my-3 fs-5"> Add information and add new Test Technique.</p>
          <CFormInput
            type="text"
            className="mb-3"
            label="Technique Name"
            placeholder="Technique Name"
          />

          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label" className="fw-medium">
              Type of technique
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                value="Complex"
                control={<Radio />}
                label="Complex"
              />
              <FormControlLabel
                value="Non-complex"
                control={<Radio />}
                label="Non-complex"
              />
            </RadioGroup>
          </FormControl>
          <br />
          <br />
          <CFormInput
            type="text"
            className="mb-3"
            label="Technique Description"
            placeholder="Technique Description"
          />
        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={_props.closeModal}>
            Back
          </CButton>
          <CButton className="bg-info text-white">Submit</CButton>
        </CModalFooter>
      </CModal>
    );
  };

  const UpdateModal = (_props) => {

    return (
      <CModal
        alignment="center"
        visible={_props.visible}
        onClose={_props.closeModal}
        size="lg"
      >
        <CModalHeader>
          <CModalTitle>Update Test Technique</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p className="my-3 fs-5"> Add information and add new Test Technique.</p>
          <CFormInput
            type="text"
            className="mb-3"
            label="Technique Name"
            placeholder="Technique Name"
          />

          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label" className="fw-medium">
              Type of technique
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                value="Complex"
                control={<Radio />}
                label="Complex"
              />
              <FormControlLabel
                value="Non-complex"
                control={<Radio />}
                label="Non-complex"
              />
            </RadioGroup>
          </FormControl>
          <br />
          <br />
          <CFormInput
            type="text"
            className="mb-3"
            label="Technique Description"
            placeholder="Technique Description"
          />
        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={_props.closeModal}>
            Back
          </CButton>
          <CButton className="bg-info text-white">Submit</CButton>
        </CModalFooter>
      </CModal>
    );
  };

  const DeleteModel = (_props) => {
    return (
      <CModal
        alignment="center"
        visible={_props.visible}
        onClose={_props.closeModal}
      >
        <CModalHeader>
          <CModalTitle>Delete Test Technique</CModalTitle>
        </CModalHeader>
        <CModalBody>
          Do you want to delete this Test Technique <code>Description</code>?
        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={_props.closeModal}>
            Back
          </CButton>
          <CButton className="bg-danger text-white" onClick={_props.handleDelete}>Delete</CButton>
        </CModalFooter>
      </CModal>
    );
  };

  return (
    <>
      <div className="m-5">
        <div className="">
          <h5>Test Techniques</h5>
        </div>

        <div className="my-4">
          <CRow className="mb-3">
            <CCol sm={3}><CFormInput
              className="mb-3 border-dark-subtle border-2"
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearchChange}
            /></CCol>
            <CCol sm={3}>
              <CFormSelect
                className="border-dark-subtle border-2"
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                options={[
                  { value: "All", label: "All" },
                  { value: "ACTIVE", label: "Active" },
                  { value: "INACTIVE", label: "Inactive" },
                ]}
              />
            </CCol>
            <CCol sm={3}></CCol>
            <CCol sm={3}>
              <div className="d-flex justify-content-end">
                <CButton
                  className="bg-info text-white"
                  onClick={() => setAddModal(true)}
                >
                  Add Technique
                </CButton>
              </div>
            </CCol>
          </CRow>
        </div>

        <div className="bg-light shadow rounded border-dark-subtle border-2 my-4">
          <table className="table table-responsive table-striped">
            <thead>
              <tr>
                <th style={{background:"#3C496A", color:"white"}}>
                  <input type="checkbox" />
                </th>
                <th style={{background:"#3C496A", color:"white"}}>Sr.no.</th>
                <th style={{background:"#3C496A", color:"white"}}>Technique Name</th>
                <th style={{background:"#3C496A", color:"white"}}>Type</th>
                <th style={{background:"#3C496A", color:"white"}}>Description</th>
                <th style={{background:"#3C496A", color:"white"}}>Added On</th>
                <th style={{background:"#3C496A", color:"white"}}>Status</th>
                <th style={{background:"#3C496A", color:"white"}}>Action</th>
              </tr>
            </thead>
            <tbody>{renderRows()}</tbody>
          </table>
        </div>

        <div className="pagination">
          <div className="pagination gap-3">
            <div className="">
              <button
                className="btn"
                onClick={prevPage}
                disabled={currentPage === 1}
              >
                &lt;&lt;
              </button>
            </div>
            <div className="current-page-number bg-dark-subtle page-item rounded">
              <button className="btn"> {currentPage} </button>
            </div>
            <div>
              <button
                className="btn mr-2"
                onClick={nextPage}
                disabled={endIndex >= tableData.length}
              >
                &gt;&gt;
              </button>
            </div>
          </div>

          <button
            className="btn btn-next d-flex gap-2"
            onClick={nextToLastPage}
          >
            Next <FaArrowRight className="mt-1"/>
          </button>
        </div>
      </div>

      {addModal && (
        <StatusModal visible={addModal} closeModal={() => setAddModal(false)} />
      )}
      {updateModal && (
        <UpdateModal visible={updateModal} closeModal={() => setUpdateModal(false)} />
      )}
      {removeModal && (
        <DeleteModel
          visible={removeModal}
          closeModal={() => setRemoveModal(false)} handleDelete={handleDelete}
        />
      )}
    </>
  );
}
