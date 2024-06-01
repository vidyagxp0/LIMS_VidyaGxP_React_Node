import {
  CButton,
  CCol,
  CFormInput,
  CFormSelect,
  CFormTextarea,
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
import {
  faEye,
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaArrowRight } from "react-icons/fa";

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
          <div className=" w-50">
            <div className={`p-2 small rounded fw-bold text-light d-flex justify-content-center align-items-center bg-${data.status === 'ACTIVE' ? 'green-700'
              : 'red-700'}`} >{data.status}</div>
          </div>
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
      <div className="m-5">

        <div className="my-4">
          <h5>Worksheet Resources</h5>
        </div>

        <div>
          <CRow className="my-5">
            <CCol sm={4}>
              <CFormInput
                style={{ border: "2px solid gray" }}
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
                style={{ border: "2px solid gray" }}
              >
                <option value="All">All</option>
                <option value="ACTIVE">Active</option>
                <option value="INACTIVE">Inactive</option>
              </CFormSelect>
            </CCol>
            <CCol sm={2}></CCol>
            <CCol sm={3}>
              <div className="d-flex justify-content-end">
                <CButton color="primary" onClick={() => setAddModal(true)}>
                  Add Worksheet Resource
                </CButton>
              </div>
            </CCol>
          </CRow>
        </div>

        <div className="bg-light shadow rounded border-dark-subtle border-2 my-4">
          <table className="table table-responsive table-striped">
            <thead>
              <tr>
                <th style={{ background: "#3C496A", color: "white" }}>
                  <input type="checkbox" />
                </th>
                <th style={{ background: "#3C496A", color: "white" }}>Sr.no.</th>
                <th style={{ background: "#3C496A", color: "white" }}>Resource Name</th>
                <th style={{ background: "#3C496A", color: "white" }}>Added On</th>
                <th style={{ background: "#3C496A", color: "white" }}>Status</th>
                <th style={{ background: "#3C496A", color: "white" }}>Actions </th>
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
              <button className="btn rounded-circle"> {currentPage} </button>
            </div>
            <div>
              <button
                className="btn"
                onClick={nextPage}
                disabled={endIndex >= filteredtableData.length}
              >
                &gt;&gt;
              </button>
            </div>
          </div>

          <button
            className="btn btn-next d-flex gap-2"
            onClick={nextToLastPage}
          >
            Next <FaArrowRight className="mt-1" />
          </button>
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
