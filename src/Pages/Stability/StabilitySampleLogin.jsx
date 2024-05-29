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
import {
  faEye,
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { FaArrowRight, FaDownload } from "react-icons/fa";
import { Link } from "react-router-dom";

function StabilitySampleLogin() {
  const [addModal, setAddModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const badgeStyle = { background: "gray", color: "white", width: "110px" };
  const badgeStyle2 = { background: "#2A5298", color: "white", width: "110px", };
  const badgeStyle3 = { background: "green", color: "white", width: "110px" };
  const badgeStyle4 = { background: "red", color: "white", width: "110px" };
  const badgeStyle5 = { background: "orange", color: "white", width: "110px" };
  const badgeStyle6 = { background: "purple", color: "white", width: "110px" };
  const [selectedStatus, setSelectedStatus] = useState("All");

  const pageSize = 5; // Number of items per page
  const [currentPage, setCurrentPage] = useState(1);

  const data = [
    {
      id: 1,
      sampleType: "FG Templage",
      productMaterial: "Polycaprolactone",
      genericName: "plsspec",
      specificationCode: "With Specification",
      status: "APPROVED",
    },
    {
      id: 2,
      sampleType: "FG Templage",
      productMaterial: "Polycaprolactone",
      genericName: "plsspec",
      specificationCode: "With Specification",
      status: "APPROVED",
    },
    {
      id: 3,
      sampleType: "FG Templage",
      productMaterial: "Polycaprolactone",
      genericName: "plsspec",
      specificationCode: "With Specification",
      status: "APPROVED",
    },
    {
      id: 4,
      sampleType: "FG Templage",
      productMaterial: "Polycaprolactone",
      genericName: "plsspec",
      specificationCode: "With Specification",
      status: "APPROVED",
    },
    {
      id: 5,
      sampleType: "FG Templage",
      productMaterial: "Polycaprolactone",
      genericName: "plsspec",
      specificationCode: "With Specification",
      status: "APPROVED",
    },
    {
      id: 6,
      sampleType: "FG Templage",
      productMaterial: "Polycaprolactone",
      genericName: "plsspec",
      specificationCode: "With Specification",
      status: "APPROVED",
    },
    {
      id: 7,
      sampleType: "FG Templage",
      productMaterial: "Polycaprolactone",
      genericName: "plsspec",
      specificationCode: "With Specification",
      status: "APPROVED",
    },
    {
      id: 8,
      sampleType: "FG Templage",
      productMaterial: "Polycaprolactone",
      genericName: "plsspec",
      specificationCode: "With Specification",
      status: "APPROVED",
    },
    {
      id: 9,
      sampleType: "FG Templage",
      productMaterial: "Polycaprolactone",
      genericName: "plsspec",
      specificationCode: "With Specification",
      status: "APPROVED",
    },
    {
      id: 10,
      sampleType: "FG Templage",
      productMaterial: "Polycaprolactone",
      genericName: "plsspec",
      specificationCode: "With Specification",
      status: "APPROVED",
    },
  ];

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, data.length);
  const [search, setSearch] = useState("");

  const filterData = () => {
    const filteredData =
      selectedStatus === "All"
        ? data
        : data.filter(
          (item) => item.status.toUpperCase() === selectedStatus.toUpperCase()
        );
    return filteredData.filter((item) =>
      item.sampleType.toLowerCase().includes(search.toLowerCase())
    );
  };
  const filteredData = filterData();

  const nextPage = () => setCurrentPage(currentPage + 1);
  const prevPage = () => setCurrentPage(currentPage - 1);
  const nextToLastPage = () => setCurrentPage(Math.ceil(filteredData.length / pageSize));
  const handleDelete = (id) => {
    setData((prevData) => prevData.filter((item) => item.id !== id));
    setDeleteModal(false);
  };

  return (
    <>
      <div className="h-100 mx-5">
        <div className="container-fluid my-5">
          <div className="main-head">
            <div className="title fw-bold fs-5 py-4"> Stability Sample Login</div>
          </div>
          <div className="d-flex gap-4">
            <div className="chart-widgets w-100">
              <div className="">
              <div className="row" style={{ cursor: "pointer" }}>
                  <button
                    className="col shadow p-3 m-3 rounded"
                    style={{
                      background: "linear-gradient(45deg,#0d6efd, #9ec5fe )",
                      textAlign: "left",
                    }}
                    onClick={() => setSelectedStatus("INITIATED")}
                  >
                    <div className="text-light fs-5">INITIATED</div>
                    <div
                      className="count fs-1 text-light fw-bolder"
                      style={{ color: "white" }}
                    >
                      {
                        filterData().filter(
                          (item) => item.status === "INITIATED"
                        ).length
                      }
                    </div>
                  </button>
                  <button
                    className="col shadow p-3 m-3 rounded"
                    style={{
                      background: "linear-gradient(45deg, #d63384, #9ec5fe)",
                      textAlign: "left",
                      boxShadow: "0px 10px 20px  black !important",
                    }}
                    onClick={() => setSelectedStatus("REINITIATED")}
                  >
                    <div className="text-light fs-5">REINITIATED</div>

                    <div
                      className="count fs-1 text-light fw-bolder"
                      style={{ color: "white" }}
                    >
                      {
                        filterData().filter(
                          (item) => item.status === "REINITIATED"
                        ).length
                      }
                    </div>
                  </button>
                  <button
                    className="col shadow p-3 m-3 rounded"
                    style={{
                      background: "linear-gradient(45deg, #ffc107, #9ec5fe)",
                      textAlign: "left",
                    }}
                    onClick={() => setSelectedStatus("APPROVED")}
                  >
                    <butto className="text-light fs-5">APPROVED</butto>
                    <div
                      className="count fs-1 text-light fw-bolder"
                      style={{ color: "white", textAlign: "left" }}
                    >
                      {
                        filterData().filter(
                          (item) => item.status === "APPROVED"
                        ).length
                      }
                    </div>
                  </button>

                  <button
                    className="col shadow p-3 m-3 rounded"
                    style={{
                      background: "linear-gradient(45deg, #dc3545, #9ec5fe)",
                      textAlign: "left",
                    }}
                    onClick={() => setSelectedStatus("REJECTED")}
                  >
                    <div className="text-light fs-5">REJECTED</div>
                    <div
                      className="count fs-1 text-light fw-bolder"
                      style={{ color: "white" }}
                    >
                      {
                        filterData().filter(
                          (item) => item.status === "REJECTED"
                        ).length
                      }
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <CRow className="mb-3">
              <CCol sm={4}>
              <CFormInput
                  style={{ border: "2px solid gray" }}
                  type="email"
                  placeholder="Search..."
                  onChange={(e) => setSearch(e.target.value)}
                />
                </CCol>
              <CCol sm={3}>
              <CFormSelect
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  value={selectedStatus}
                  style={{ border: "2px solid gray" }}
                >
                  <option value="All">All</option>
                  <option value="Initiated">Initiated</option>
                  <option value="Approved">Approved</option>
                  <option value="Rejected">Rejected</option>
                  <option value="Reinitiated">Reinitiated</option>
                  <option value="Dropped">Dropped</option>
                </CFormSelect>
              </CCol>
              <CCol sm={2}></CCol>
              <CCol sm={3}>
                <div className="d-flex justify-content-end">
                  <div className="pe-4">
                    <CButton className="bg-danger bg-opacity-75 rounded ">
                      <FaDownload />
                    </CButton>
                  </div>
                  <CButton
                    color="primary"
                    onClick={() => setAddModal(true)}
                  >
                    Add Sample Login
                  </CButton>
                </div>
              </CCol>
            </CRow>
          </div>
          <div className="bg-white mt-5" style={{ boxShadow: "0px 0px 3px black" }}>
            <CTable align="middle" responsive >
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col" className="text-center">
                    <input type="checkbox" />
                  </CTableHeaderCell>
                  <CTableHeaderCell scope="col">S NO.</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Sample Type</CTableHeaderCell>
                  <CTableHeaderCell scope="col">
                    Product / Material
                  </CTableHeaderCell>
                  <CTableHeaderCell scope="col">Generic Name</CTableHeaderCell>
                  <CTableHeaderCell scope="col">
                    Specification Code
                  </CTableHeaderCell>
                  <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Actions</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
              {filterData().slice(startIndex, endIndex)
                  .filter((item) => {
                    return search.toLowerCase() === ""
                      ? item
                      : item.title.toLowerCase().includes(search);
                  })
                  .map((item, index) => (
                    <CTableRow key={index}>
                    <CTableHeaderCell scope="row" className="text-center">
                      <input type="checkbox" />
                    </CTableHeaderCell>
                    <CTableDataCell>{item.id}</CTableDataCell>
                    <CTableDataCell key={item.id}>{item.sampleType}</CTableDataCell>
                    <CTableDataCell>{item.productMaterial}</CTableDataCell>
                    <CTableDataCell>{item.genericName}</CTableDataCell>
                    <CTableDataCell>{item.specificationCode}</CTableDataCell>
                    <CTableDataCell className="d-flex">
                    <div
                          className="py-2 px-3 small rounded fw-bold"
                          style={
                            item.status === "INITIATED"
                              ? badgeStyle2
                              : item.status === "APPROVED"
                                ? badgeStyle3
                                : item.status === "REJECTED"
                                  ? badgeStyle4
                                  : item.status === "REINITIATED"
                                    ? badgeStyle5
                                    : item.status === "DROPPED"
                                      ? badgeStyle6
                                      : item.status === "ALL"
                                        ? badgeStyle
                                        : badgeStyle
                          }
                        >
                          {item.status}
                        </div>
                    </CTableDataCell>
                    <CTableDataCell>
                      <div className="d-flex gap-3">
                        <Link to="/stability/sample_LoginDetails">
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
                            onClick={() => setDeleteModal(item.id)}
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

          <div className="d-flex justify-content-between align-items-center mt-4">
            <div className="pagination">
              <button className="btn mr-2" onClick={prevPage} disabled={currentPage === 1}>
                &lt;&lt;
              </button>
              <button className="btn mr-2 bg-dark-subtle rounded-circle">{currentPage}</button>
              <button className="btn mr-2" onClick={nextPage} disabled={endIndex >= data.length}>
                &gt;&gt;
              </button>
            </div>
            <button className="btn " onClick={nextToLastPage}>
              Next <FaArrowRight />
            </button>
          </div>
        </div>
      </div>

      {addModal && (
        <StatusModal visible={addModal} closeModal={() => setAddModal(false)} />
      )}
      {deleteModal && (
        <DeleteModal
          visible={deleteModal !== false}
          closeModal={() => setDeleteModal(false)}
          handleDelete={() => handleDelete(deleteModal)}
        />
      )}      
    </>
  );
}

const StatusModal = (_props) => {
  return (
    <>
      <CModal
        alignment="center"
        visible={_props.visible}
        onClose={_props.closeModal}
      >
        <CModalHeader>
          <CModalTitle>Add Sample login</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CFormSelect
            type="text"
            label="Test Plan / Revision No."
            placeholder="Select... "
            options={[
              "Select...",
              { label: "Hydroulic Oil" },
              { label: "CHP Oil" },
              { label: "Sacubitril" },
              { label: "Bio burden Test For PM" },
            ]}
          />
          <CFormInput
            type="text"
            label="Product / Material"
            placeholder=" Product / Material"
            disabled
          />
          <CFormInput
            type="text"
            label="Product / Material Code"
            placeholder=" Product / Material Code"
            disabled
          />
          <CFormInput
            type="text"
            label="Generic Name"
            placeholder=" Generic Name"
            disabled
          />
          <CFormInput
            type="text"
            label="Specification ID"
            placeholder="Specification ID"
            disabled
          />
          <CFormSelect
            type="text"
            label="Copy Sample from"
            placeholder=" Select..."
            options={["Select...", { label: "No Options" }]}
          />
          <CFormInput
            type="text"
            label="Sample Type"
            placeholder="Sample Type"
            disabled
          />
          <CFormSelect
            type="text"
            label="Certificates (If any)"
            placeholder=" Select..."
            options={["Select...", { label: "No Options" }]}
          />
          <CFormSelect
            type="text"
            label="Protocol ID"
            placeholder=" Select..."
            options={[
              "Select...",
              { label: "HCL10132%" },
              { label: "HOS 234" },
              { label: "CHPOIL001" },
              { label: "MB-PM-001/01" },
              { label: "RPS-TSLV-00" },
              { label: "rest0001" },
            ]}
          />
          <CFormSelect
            type="text"
            label="Storage Conditions"
            placeholder=" Select..."
            options={[
              "Select...",
              { label: "°F" },
              { label: "30°C" },
              { label: "42°F" },
              { label: "25°C ± 2" },
              { label: "32°C" },
              { label: "24°F" },
              { label: "25°C" },
            ]}
          />
        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={_props.closeModal}>
            Cancel
          </CButton>
          <CButton color="primary">Add Sample</CButton>
        </CModalFooter>
      </CModal>
    </>
  );
};


const DeleteModal = (_props) => {
  return (
    <CModal
      alignment="center"
      visible={_props.visible}
      onClose={_props.closeModal}
      size="lg"
    >
      <CModalHeader>
        <CModalTitle style={{ fontSize: "1.2rem", fontWeight: "600" }}>
        Delete Stability Sample Login
        </CModalTitle>
      </CModalHeader>
      <div
        className="modal-body"
        style={{
          fontSize: "1.2rem",
          fontWeight: "500",
          lineHeight: "1.5",
          marginBottom: "1rem",
          columnGap: "0px",
          border: "0px !important",
        }}
      >
        <p>Do you want to delete this stability Sample login{ }</p>
      </div>
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
          onClick={_props.handleDelete}
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

export default StabilitySampleLogin;