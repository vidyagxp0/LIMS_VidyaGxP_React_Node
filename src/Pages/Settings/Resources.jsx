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
 
} from "@coreui/react";
import {
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React, { useState } from "react";
// import "./StorageCondition.css";

export default function Resources() {
  const [addModal, setAddModal] = useState(false);
  const [removeModal, setRemoveModal] = useState(false);
  const [filterStatus, setFilterStatus] = useState("All");
  const [deleteId, setDeleteId] = useState(null)
  const pageSize = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const [tableData, setTableData] = useState([
    { id: 1, resourceName: 'Resource 1', addedOn: '2024-05-30', status: 'ACTIVE' },
    { id: 2, resourceName: 'Resource 2', addedOn: '2024-05-30', status: 'INACTIVE' },
    { id: 3, resourceName: 'Resource 3', addedOn: '2024-05-30', status: 'INACTIVE' },
    { id: 4, resourceName: 'Resource 4', addedOn: '2024-05-30', status: 'ACTIVE' },
    { id: 5, resourceName: 'Resource 5', addedOn: '2024-05-30', status: 'ACTIVE' },
    { id: 6, resourceName: 'Resource 6', addedOn: '2024-05-30', status: 'INACTIVE' },
    { id: 7, resourceName: 'Resource 7', addedOn: '2024-05-30', status: 'ACTIVE' },
    { id: 8, resourceName: 'Resource 8', addedOn: '2024-05-30', status: 'INACTIVE' },
    { id: 9, resourceName: 'Resource 9', addedOn: '2024-05-30', status: 'ACTIVE' },
    { id: 10, resourceName: 'Resource 10', addedOn: '2024-05-30', status: 'INACTIVE' }
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
      data.resourceName.toLowerCase().includes(searchTerm.toLowerCase())
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
        <td>{data.resourceName}</td>
        <td>{data.addedOn}</td>
        <td>
        <button
            className={`p-1 small w-50 rounded text-light d-flex justify-content-center align-items-center bg-${
              data.status === "ACTIVE"
              ? 'green-700'
              : 'red-700'
              }`} >{data.status}
          </button>
        </td>
        <td>
          <div className="d-flex gap-3">
            <div className="cursor-pointer"
              onClick={() => setAddModal(true)}
            ><FontAwesomeIcon icon={faPenToSquare} /></div>
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
  
  const StatusModal = (_props) => {

    return (
      <CModal
        alignment="center"
        visible={_props.visible}
        onClose={_props.closeModal}
        size="lg"
      >
        <CModalHeader>
          <CModalTitle>Add Worksheet Resource</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p className="my-3 fs-6 fw-bold"> Add information and add new worksheet resource.</p>
          <CFormInput
            type="text"
            className="mb-3"
            label="Resource Name"
            placeholder="Resource Name"
          />
        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={_props.closeModal}>
            Back
          </CButton>
          <CButton className="bg-info text-white">Add</CButton>
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
          <CModalTitle>Delete Worksheet Resources</CModalTitle>
        </CModalHeader>
        <CModalBody>
          Do you want to delete this Worksheet Resources <code>Resource 5</code>?
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
      <div className="m-5 mt-3">

        <div className="main-head">
          <h4>Worksheet Resources</h4>
        </div>

        <div>
          <CRow className="mt-5 mb-3">
            <CCol sm={4}>
              <CFormInput
                style={{ fontSize: '0.9rem' }}
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </CCol>

            <CCol sm={3}>
              <CFormSelect
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                style={{ fontSize: '0.9rem' }}
              >
                <option value="All">All</option>
                <option value="ACTIVE">Active</option>
                <option value="INACTIVE">Inactive</option>
              </CFormSelect>
            </CCol>
            <CCol sm={2}></CCol>
            <CCol sm={3}>
              <div className="d-flex justify-content-end">
              <CButton
                  className=" text-white"
                  style={{ background: "#4B49B6", fontSize: '0.9rem' }}
                  onClick={() => setAddModal(true)}
                >
                  Add Worksheet Resource
                </CButton>
              </div>
            </CCol>
          </CRow>
        </div>

        <div
          className="rounded bg-white"
          style={{ fontFamily: 'sans-serif', fontSize: '0.9rem', boxShadow: '5px 5px 20px #5D76A9' }}
        >
          <table className="table table-responsive   ">
            <thead>
              <tr>
                <th style={{ background: "#5D76A9", color: "white" }}>
                  <input type="checkbox" />
                </th>
                <th style={{ background: "#5D76A9", color: "white" }}>Sr.no.</th>
                <th style={{ background: "#5D76A9", color: "white" }}>Resource Name</th>
                <th style={{ background: "#5D76A9", color: "white" }}>Added On</th>
                <th style={{ background: "#5D76A9", color: "white" }}>Status</th>
                <th style={{ background: "#5D76A9", color: "white" }}>Actions </th>
              </tr>
            </thead>
            <tbody>{renderRows()}</tbody>
          </table>
        </div>

        <div className="d-flex justify-content-end align-items-center mt-4">
          <div className="pagination">
            <button style={{ background: "#21516a", color: "white" }} className="btn mr-2" onClick={prevPage} disabled={currentPage === 1}>
              &lt;&lt;
            </button>
            <button className="btn mr-2 bg-dark-subtle rounded-circle">{currentPage}</button>
            <button style={{ background: "#21516a", color: "white" }} className="btn mr-2" onClick={nextPage} disabled={endIndex >= filteredtableData.length}>
              &gt;&gt;
            </button>
          </div>
        </div>
      </div>

      {addModal && (
        <StatusModal visible={addModal} closeModal={() => setAddModal(false)} />
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
