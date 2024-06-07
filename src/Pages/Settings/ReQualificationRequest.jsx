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

export default function ReQualificationRequest() {
  const [addModal, setAddModal] = useState(false);
  const [removeModal, setRemoveModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null)
  const [filterStatus, setFilterStatus] = useState("All");

  const pageSize = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const [tableData, setTableData] = useState([
    {
      id: 1,
      analyst: 'John Doe',
      qualificationId: 'Q123',
      qualificationType: 'Type A',
      employeeId: 'E001',
      testTechnique: 'Technique 1',
      initiatedOn: '2024-05-30',
      status: 'Active'
    },
    {
      id: 2,
      analyst: 'Jane Smith',
      qualificationId: 'Q124',
      qualificationType: 'Type B',
      employeeId: 'E002',
      testTechnique: 'Technique 2',
      initiatedOn: '2024-05-30',
      status: 'Active'
    },
    {
      id: 3,
      analyst: 'Alice Johnson',
      qualificationId: 'Q125',
      qualificationType: 'Type C',
      employeeId: 'E003',
      testTechnique: 'Technique 3',
      initiatedOn: '2024-05-30',
      status: 'Inactive'
    },
    {
      id: 4,
      analyst: 'Bob Brown',
      qualificationId: 'Q126',
      qualificationType: 'Type D',
      employeeId: 'E004',
      testTechnique: 'Technique 4',
      initiatedOn: '2024-05-30',
      status: 'Active'
    },
    {
      id: 5,
      analyst: 'Ella Davis',
      qualificationId: 'Q127',
      qualificationType: 'Type E',
      employeeId: 'E005',
      testTechnique: 'Technique 5',
      initiatedOn: '2024-05-30',
      status: 'Active'
    },
    {
      id: 6,
      analyst: 'Chris Wilson',
      qualificationId: 'Q128',
      qualificationType: 'Type F',
      employeeId: 'E006',
      testTechnique: 'Technique 6',
      initiatedOn: '2024-05-30',
      status: 'Active'
    },
    {
      id: 7,
      analyst: 'Emily Martinez',
      qualificationId: 'Q129',
      qualificationType: 'Type G',
      employeeId: 'E007',
      testTechnique: 'Technique 7',
      initiatedOn: '2024-05-30',
      status: 'Inactive'
    },
    {
      id: 8,
      analyst: 'David Rodriguez',
      qualificationId: 'Q130',
      qualificationType: 'Type H',
      employeeId: 'E008',
      testTechnique: 'Technique 8',
      initiatedOn: '2024-05-30',
      status: 'Inactive'
    },
    {
      id: 9,
      analyst: 'Grace Garcia',
      qualificationId: 'Q131',
      qualificationType: 'Type I',
      employeeId: 'E009',
      testTechnique: 'Technique 9',
      initiatedOn: '2024-05-30',
      status: 'Inactive'
    },
    {
      id: 10,
      analyst: 'Samuel Hernandez',
      qualificationId: 'Q132',
      qualificationType: 'Type J',
      employeeId: 'E010',
      testTechnique: 'Technique 10',
      initiatedOn: '2024-05-30',
      status: 'Inactive'
    },
    {
      id: 11,
      analyst: 'Olivia Lopez',
      qualificationId: 'Q133',
      qualificationType: 'Type K',
      employeeId: 'E011',
      testTechnique: 'Technique 11',
      initiatedOn: '2024-05-30',
      status: 'Inactive'
    },
    {
      id: 12,
      analyst: 'Andrew King',
      qualificationId: 'Q134',
      qualificationType: 'Type L',
      employeeId: 'E012',
      testTechnique: 'Technique 12',
      initiatedOn: '2024-05-30',
      status: 'Inactive'
    }
  ]);




  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSelect = (data) => {
    setFilterStatus(data);
    setCurrentPage(1);
  }

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
      data.analyst.toLowerCase().includes(searchTerm.toLowerCase())
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
        <td>{index + 1}</td>
        <td>{data.analyst}</td>
        <td>{data.qualificationId}</td>
        <td>{data.qualificationType}</td>
        <td>{data.employeeId}</td>
        <td>{data.testTechnique}</td>
        <td>{data.initiatedOn}</td>
        <td>
        <button
            className={`py-1 px-3 small w-75 rounded text-light d-flex justify-content-center align-items-center bg-${data.status === "Active"
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
          <CModalTitle> Add Re-Qualification Request</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p className="my-3 fs-6 fw-bold"> Add information about Re-Qualification Request.</p>
          <CFormSelect
            className="mb-3"
            label="Name"
            options={[
              { value: "Analyst", label: "Analyst" },
              { value: "Analyst Two", label: "Analyst Two" },
            ]}
          />
          <CFormInput
            type="text"
            className="mb-3"
            label="Employee ID"
            placeholder="Employee ID"
          />
          <CFormInput
            type="text"
            className="mb-3"
            label="Role/Title"
            placeholder="Role/Title"
          />
          <CFormSelect
            label="Test Technique"
            className="mb-3"
            options={[
              { value: "Description", label: "Description" },
            ]}
          />
          <CFormInput
            type="text"
            className="mb-3"
            label="Justification For Requalification"
            placeholder="Training Details"
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
          <CModalTitle>Delete Re-Qualification Request</CModalTitle>
        </CModalHeader>
        <CModalBody>
          Do you want to delete this Re-Qualification Request <code>Q126</code>?
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
          <h4>Re-Qualification Request</h4>
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
                onChange={(e) => handleSelect(e.target.value)}
                style={{ fontSize: '0.9rem' }}
              >
                <option value="All">All</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
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
                  Add Request
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
                <th style={{ background: "#5D76A9", color: "white" }}>Id</th>
                <th style={{ background: "#5D76A9", color: "white" }}>Analyst</th>
                <th style={{ background: "#5D76A9", color: "white" }}>Qualification ID</th>
                <th style={{ background: "#5D76A9", color: "white" }}>Qualification Type</th>
                <th style={{ background: "#5D76A9", color: "white" }}>Employee ID </th>
                <th style={{ background: "#5D76A9", color: "white" }}>Test Technique</th>
                <th style={{ background: "#5D76A9", color: "white" }}>Initiated On</th>
                <th style={{ background: "#5D76A9", color: "white" }}>Status</th>
                <th style={{ background: "#5D76A9", color: "white" }}>Action</th>
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
