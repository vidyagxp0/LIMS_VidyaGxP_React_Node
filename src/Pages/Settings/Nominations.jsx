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

export default function Nominations() {
  const [addModal, setAddModal] = useState(false);
  const [removeModal, setRemoveModal] = useState(false);
	const [deleteId, setDeleteId] = useState(null)
  const [filterStatus, setFilterStatus] = useState("All");

  const pageSize = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const [tableData, setTableData] = useState([
    {
      id: 1,
      analyst: "John Doe",
      testTechnique: "Technique A",
      totalExperience: 5,
      pastExperience: 3,
      justification: "Lorem ipsum doonsectetur adipiscing elit.",
      addedOn: "2024-05-30",
      status: "Active"
    },
    {
      id: 2,
      analyst: "Jane Smith",
      testTechnique: "Technique B",
      totalExperience: 7,
      pastExperience: 4,
      justification: "Sed doliqua.",
      addedOn: "2024-05-30",
      status: "Active"
    },
    {
      id: 3,
      analyst: "Alice Johnson",
      testTechnique: "Technique C",
      totalExperience: 6,
      pastExperience: 5,
      justification: "U ex ea commodo consequat.",
      addedOn: "2024-05-30",
      status: "Inactive"
    },
    {
      id: 4,
      analyst: "Bob Brown",
      testTechnique: "Technique D",
      totalExperience: 8,
      pastExperience: 6,
      justification: "Duis aute ila pariatur.",
      addedOn: "2024-05-30",
      status: "Active"
    },
    {
      id: 5,
      analyst: "Ella Davis",
      testTechnique: "Technique E",
      totalExperience: 4,
      pastExperience: 2,
      justification: "Excepteur laborum.",
      addedOn: "2024-05-30",
      status: "Inactive"
    },
    {
      id: 6,
      analyst: "Chris Wilson",
      testTechnique: "Technique F",
      totalExperience: 9,
      pastExperience: 7,
      justification: "Nollit anim id est laborum.",
      addedOn: "2024-05-30",
      status: "Active"
    },
    {
      id: 7,
      analyst: "Emily Martinez",
      testTechnique: "Technique G",
      totalExperience: 3,
      pastExperience: 1,
      justification: "Lorem ipsum ing elit.",
      addedOn: "2024-05-30",
      status: "Inactive"
    },
    {
      id: 8,
      analyst: "David Rodriguez",
      testTechnique: "Technique H",
      totalExperience: 10,
      pastExperience: 8,
      justification: "Sed do gna aliqua.",
      addedOn: "2024-05-30",
      status: "Active"
    },
    {
      id: 9,
      analyst: "Grace Garcia",
      testTechnique: "Technique I",
      totalExperience: 5,
      pastExperience: 3,
      justification: "Ut enim ad onsequat.",
      addedOn: "2024-05-30",
      status: "Inactive"
    },
    {
      id: 10,
      analyst: "Samuel Hernandez",
      testTechnique: "Technique J",
      totalExperience: 7,
      pastExperience: 4,
      justification: "Dnulla pariatur.",
      addedOn: "2024-05-30",
      status: "Active"
    },
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
        <td>{data.testTechnique}</td>
        <td>{data.totalExperience}</td>
        <td>{data.pastExperience}</td>
        <td>{data.justification}</td>
        <td>{data.addedOn}</td>
        <td>
          <div className=" w-100">
            <div className={`p-2 small rounded fw-bold text-light d-flex justify-content-center align-items-center bg-${data.status === 'Active' ? 'green-700'
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
          <CModalTitle> Add Nominations</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p className="my-3 fs-6 fw-bold"> Add information about Nominations.</p>
          <CFormSelect
            className="mb-3"
            label="Analyst"
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
            placeholder="Select"
            className="mb-3"
            options={[
              { value: "Description", label: "Description" },
            ]}
          />
          <CFormInput type="file" id="formFile" label="Training Documents" />
          <CFormInput
            type="text"
            className="mb-3"
            label="Total Experience / Work Area"
            placeholder="Total Experience / Work Area"
          />
          <CFormInput
            type="text"
            className="mb-3"
            label="Past Experience / Work Area"
            placeholder="Past Experience / Work Area"
          />
          <CFormInput
            type="text"
            className="mb-3"
            label="Justification for Direct Nomination"
            placeholder="Justification for Direct Nomination"
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
          <CModalTitle>Delete Nominations</CModalTitle>
        </CModalHeader>
        <CModalBody>
          Do you want to delete this Nominations <code>Q126</code>?
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
          <h5>Nominations</h5>
        </div>

        <div>
          <CRow className="my-5">
            <CCol sm={4}>
              <CFormInput
                className="border-2 border-dark-subtle"
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </CCol>

            <CCol sm={3}>
              <CFormSelect
                className="border-2 border-dark-subtle"
                value={filterStatus}
                onChange={(e) => handleSelect(e.target.value)}
              >
                <option value="All">All</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </CFormSelect>
            </CCol>
            <CCol sm={2}></CCol>
            <CCol sm={3}>
              <div className="d-flex justify-content-end">
                <CButton color="primary" onClick={() => setAddModal(true)}>
                  Add Nomination
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
                <th style={{ background: "#3C496A", color: "white" }}>S.No.</th>
                <th style={{ background: "#3C496A", color: "white" }}>Analyst</th>
                <th style={{ background: "#3C496A", color: "white" }}>Test Technique</th>
                <th style={{ background: "#3C496A", color: "white" }}>Total Experience	</th>
                <th style={{ background: "#3C496A", color: "white" }}>Past Experience</th>
                <th style={{ background: "#3C496A", color: "white" }}>Justification for Direct Nomination	</th>
                <th style={{ background: "#3C496A", color: "white" }}>Added On</th>
                <th style={{ background: "#3C496A", color: "white" }}>Status</th>
                <th style={{ background: "#3C496A", color: "white" }}>Action</th>
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
          closeModal={() => setRemoveModal(false)}  handleDelete={handleDelete}
        />
      )}
    </>
  );
}