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
import React from 'react';

import {
  faEye,
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function StorageLocation() {
  const pageSize = 5;
  const [addModal, setAddModal] = useState(false);
  const [delModal, setDelModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [storageLocations, setStorageLocations] = useState([
    { code: "na-001", name: "Product Material 1", status: "ACTIVE", id: 1 },
    { code: "na-002", name: "Product Material 2", status: "ACTIVE", id: 2 },
    { code: "na-003", name: "test Material 3", status: "INACTIVE", id: 3 },
    { code: "na-004", name: "test Material 4", status: "ACTIVE", id: 4 },
    { code: "na-005", name: "Product Material 5", status: "INACTIVE", id: 5 },
    { code: "na-006", name: "Product Material 6", status: "ACTIVE", id: 6 },
    { code: "na-007", name: "Product Material 7", status: "INACTIVE", id: 7 },
    { code: "na-008", name: "test Material 8", status: "ACTIVE", id: 8 },
    { code: "na-009", name: "Product Material 9", status: "INACTIVE", id: 9 },
    { code: "na-010", name: "Product Material 10", status: "ACTIVE", id: 10 },
  ]);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1);
  };

  const handleFilter = (event) => {
    setFilterStatus(event.target.value);
    setCurrentPage(1);
  };

  const handleDeleteClick = (id) => {
    setDeleteId(id);
    setDelModal(true);
  };

  const handleDeleteConfirm = () => {
    setStorageLocations(storageLocations.filter((item) => item.id !== deleteId));
    setDelModal(false);
  };

  const filteredLocations = storageLocations.filter((item) => {
    return (
      (item.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase())) &&
      (filterStatus === "" ||
        (filterStatus === "1" && item.status === "ACTIVE") ||
        (filterStatus === "0" && item.status === "INACTIVE"))
    );
  });

  const totalPages = Math.ceil(filteredLocations.length / pageSize);
  const paginatedLocations = filteredLocations.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <>
      <div className="m-5 mt-3">
          <div className="main-head">
            <h4 className="fw-bold ">Storage Location</h4>
          </div>
          <div>
            <CRow className="mt-5 mb-3">
              <CCol sm={4}>
                <CFormInput
                  type="text"
                  placeholder="Search..."
                  style={{fontSize:'0.9rem'}}
                  value={searchQuery}
                  onChange={handleSearch}
                />
              </CCol>
              <CCol sm={3}>
                <CFormSelect
                  value={filterStatus}
                  style={{ fontSize:'0.9rem'}}
                  onChange={handleFilter}
                  options={[
                    { label: "All", value: "" },
                    { label: "Active", value: "1" },
                    { label: "Inactive", value: "0" },
                  ]}
                />
              </CCol>
              <CCol sm={2}></CCol>
              <CCol sm={3}>
                <div className="d-flex justify-content-end">
                  <CButton style={{fontSize:'0.9rem'}} color="primary" onClick={() => setAddModal(true)}>
                    Add Storage Location
                  </CButton>
                </div>
              </CCol>
            </CRow>
          </div>
          <div className="rounded bg-white" style={{fontFamily:'sans-serif', fontSize:'0.9rem' ,boxShadow:'5px 5px 20px #5D76A9'}}>
            <CTable align="middle" responsive className="mb-0 table-responsive">
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell style={{ background: "#5D76A9", color: "white" }} scope="col" className="text-center">
                    <input type="checkbox" />
                  </CTableHeaderCell>
                  <CTableHeaderCell style={{ background: "#5D76A9", color: "white" }} scope="col">Storage Code</CTableHeaderCell>
                  <CTableHeaderCell style={{ background: "#5D76A9", color: "white" }} scope="col">Storage Name</CTableHeaderCell>
                  <CTableHeaderCell style={{ background: "#5D76A9", color: "white" }} scope="col">Status</CTableHeaderCell>
                  <CTableHeaderCell style={{ background: "#5D76A9", color: "white" }} scope="col">Actions</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {paginatedLocations.map((item, index) => (
                  <CTableRow key={index}>
                    <CTableHeaderCell scope="row" className="text-center">
                      <input type="checkbox" />
                    </CTableHeaderCell>
                    <CTableDataCell>{item.code}</CTableDataCell>
                    <CTableDataCell>{item.name}</CTableDataCell>
                    <CTableDataCell className="d-flex ">
                    <button
          className={`p-1 small rounded w-50 text-light d-flex justify-content-center align-items-center ${
            item.status === 'ACTIVE' ? 'bg-green-700' : 'bg-red-700'
          }`}
          style={{ fontSize: '10px' }}
        >
          {item.status}
        </button>
                    </CTableDataCell>
                    <CTableDataCell>
                      <div className="d-flex gap-3">
                        <Link to={`/approval/1321`}>
                          <FontAwesomeIcon icon={faEye} />
                        </Link>
                        <div
                          className="cursor-pointer"
                          onClick={() => setAddModal(true)}
                        >
                          <FontAwesomeIcon icon={faPenToSquare} />
                        </div>
                        <div
                          className="cursor-pointer"
                          onClick={() => handleDeleteClick(item.id)}
                        >
                          <FontAwesomeIcon icon={faTrashCan} />
                        </div>
                      </div>
                    </CTableDataCell>
                  </CTableRow>
                ))}
              </CTableBody>
            </CTable>
          </div>

          <div className="d-flex justify-content-end align-items-center mt-4">
                        <div className="pagination">
                            <button  style={{ background: "#21516a", color: "white" }} className="btn mr-2" onClick={handlePreviousPage} disabled={currentPage === 1}>
                                &lt;&lt;
                            </button>
                            <button className="btn mr-2 bg-dark-subtle rounded-circle">{currentPage}</button>
                            <button  style={{ background: "#21516a", color: "white" }} className="btn mr-2" onClick={handleNextPage} >
                                &gt;&gt;
                            </button>
                        </div>
                    </div>
       
      </div>

      {addModal && (
        <StatusModal visible={addModal} closeModal={() => setAddModal(false)} />
      )}
      {delModal && (
        <RemoveModal
          visible={delModal}
          closeModal={() => setDelModal(false)}
          confirmDelete={handleDeleteConfirm}
        />
      )}
    </>
  );
}

const StatusModal = (_props) => {
  return (
    <CModal
      alignment="center"
      visible={_props.visible}
      onClose={_props.closeModal}
    >
      <CModalHeader>
        <CModalTitle>New Storage Location</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CFormInput type="text" label="Name" placeholder="Location Name" />
      </CModalBody>
      <CModalFooter>
        <CButton color="light" onClick={_props.closeModal}>
          Cancel
        </CButton>
        <CButton color="primary">Add</CButton>
      </CModalFooter>
    </CModal>
  );
};

const RemoveModal = (_props) => {
  return (
    <CModal alignment="center" visible={_props.visible} onClose={_props.closeModal} size="lg">
            <CModalHeader>
                <CModalTitle>Delete User</CModalTitle>
            </CModalHeader>
            <CModalBody>
                <p>Are you sure you want to delete this storage location?</p>
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

export default StorageLocation;
