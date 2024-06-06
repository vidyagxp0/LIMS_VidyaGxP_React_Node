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
  const pageSize = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [addModal, setAddModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState("All");

  const [data, setData] = useState([
    {
      id: 1,
      sampleType: "FG Templage1",
      productMaterial: "Polycaprolactone1",
      genericName: "plsspec1",
      specificationCode: "With Specification",
      status: "APPROVED",
    },
    {
      id: 2,
      sampleType: "FG Templage2",
      productMaterial: "Polycaprolactone2",
      genericName: "plsspec2",
      specificationCode: "With Specification",
      status: "REINITIATED",
    },
    {
      id: 3,
      sampleType: "FG Templage3",
      productMaterial: "Polycaprolactone3",
      genericName: "plsspec3",
      specificationCode: "With Specification",
      status: "REJECTED",
    },
    {
      id: 4,
      sampleType: "FG Templage4",
      productMaterial: "Polycaprolactone4",
      genericName: "plsspec4",
      specificationCode: "With Specification",
      status: "INITIATED",
    },
    {
      id: 5,
      sampleType: "FG Templage5",
      productMaterial: "Polycaprolactone5",
      genericName: "plsspec5",
      specificationCode: "With Specification",
      status: "DROPPED",
    },
    {
      id: 6,
      sampleType: "FG Templage6",
      productMaterial: "Polycaprolactone6",
      genericName: "plsspec6",
      specificationCode: "With Specification",
      status: "APPROVED",
    },
    {
      id: 7,
      sampleType: "FG Templage7",
      productMaterial: "Polycaprolactone7",
      genericName: "plsspec7",
      specificationCode: "With Specification",
      status: "DROPPED",
    },
    {
      id: 8,
      sampleType: "FG Templage8",
      productMaterial: "Polycaprolactone8",
      genericName: "plsspec8",
      specificationCode: "With Specification",
      status: "REINITIATED",
    },
    {
      id: 9,
      sampleType: "FG Templage9",
      productMaterial: "Polycaprolactone9",
      genericName: "plsspec9",
      specificationCode: "With Specification",
      status: "INITIATED",
    },
    {
      id: 10,
      sampleType: "FG Templage10",
      productMaterial: "Polycaprolactone10",
      genericName: "plsspec10",
      specificationCode: "With Specification",
      status: "REJECTED",
    },
  ]);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, data.length);
  const [search, setSearch] = useState("");

  const nextPage = () => setCurrentPage(currentPage + 1);
  const prevPage = () => setCurrentPage(currentPage - 1);

  const filterData = () => {
    const filteredData =
      selectedStatus === "All"
        ? data
        : data.filter(
          (item) => item.status.toUpperCase() === selectedStatus.toUpperCase()
        );
    return filteredData.filter((item) =>
      item.sampleType.toLowerCase().includes(search.toLowerCase()) ||
      item.productMaterial.toLowerCase().includes(search.toLowerCase()) ||
      item.genericName.toLowerCase().includes(search.toLowerCase()) ||
      item.specificationCode.toLowerCase().includes(search.toLowerCase())
    );
  };

  const handleDeleteClick = (id) => {
    setDeleteId(id);
    setDeleteModal(true);
  };

  const handleDeleteConfirm = () => {
    setData(data.filter((item) => item.id !== deleteId));
    setDeleteModal(false);
    setDeleteId(null);
  };

  return (
    <>
      <div className="m-5 mt-3">
        <div className="main-head">
          <h4 className="fw-bold"> Stability Sample Login</h4>
        </div>
        <div className="mt-3 d-flex gap-4">
          <div className="chart-widgets w-100">
            <div className="">
              <div className="row" style={{ cursor: "pointer" }}>
                <button
                  className="col shadow p-3 m-3 rounded"
                  style={{
                    background:
                      "linear-gradient(25deg, #0250c5 0%, #d43f8d 100%)",

                    textAlign: "left",
                  }}
                  onClick={() => setSelectedStatus("DROPPED")}
                >
                  <div className="text-light font-bold fs-5">DROPPED</div>
                  <div
                    className="count fs-1 text-light fw-bolder"
                    style={{ color: "white" }}
                  >
                    {
                      filterData().filter((item) => item.status === "DROPPED")
                        .length
                    }
                  </div>
                </button>
                <button
                  className="col shadow p-3 m-3 rounded"
                  style={{
                    background:
                      "linear-gradient(25deg, #13517a 6% , #2A5298 50%)",
                    textAlign: "left",
                  }}
                  onClick={() => setSelectedStatus("INITIATED")}
                >
                  <div className="text-light font-bold fs-5">INITIATED</div>
                  <div
                    className="count fs-1 text-light fw-bolder"
                    style={{ color: "white" }}
                  >
                    {
                      filterData().filter((item) => item.status === "INITIATED")
                        .length
                    }
                  </div>
                </button>
                <button
                  className="col shadow p-3 m-3 rounded"
                  style={{
                    background:
                      "linear-gradient(25deg, orange , #f7e05f )",

                    textAlign: "left",
                    boxShadow: "0px 10px 20px  black !important",
                  }}
                  onClick={() => setSelectedStatus("REINITIATED")}
                >
                  <div className="text-light font-bold fs-5">REINITIATED</div>

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
                    background:
                      "linear-gradient(27deg, green , #0fd850  )",
                    textAlign: "left",
                  }}
                  onClick={() => setSelectedStatus("APPROVED")}
                >
                  <div className="text-light font-bold fs-5">APPROVED</div>
                  <div
                    className="count fs-1 text-light fw-bolder"
                    style={{ color: "white", textAlign: "left" }}
                  >
                    {
                      filterData().filter((item) => item.status === "APPROVED")
                        .length
                    }
                  </div>
                </button>

                <button
                  className="col shadow p-3 m-3 rounded"
                  style={{
                    background:
                      "linear-gradient(27deg ,red, #FF719A)",
                    textAlign: "left",
                  }}
                  onClick={() => setSelectedStatus("REJECTED")}
                >
                  <div className="text-light font-bold fs-5">REJECTED</div>
                  <div className="count fs-1 text-light fw-bolder">
                    {
                      filterData().filter((item) => item.status === "REJECTED")
                        .length
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
                style={{ fontSize: '0.9rem' }}
                type="text"
                placeholder="Search..."
                onChange={(e) => setSearch(e.target.value)}
              />
            </CCol>
            <CCol sm={3}>
              <CFormSelect
                onChange={(e) => setSelectedStatus(e.target.value)}
                value={selectedStatus}
                style={{ fontSize: '0.9rem' }}
                options={[
                  { value: "All", label: "All" },
                  { value: "INITIATED", label: "Initiated" },
                  { value: "APPROVED", label: "Approved" },
                  { value: "REJECTED", label: "Rejected" },
                  { value: "REINITIATED", label: "Reinitiated" },
                  { value: "DROPPED", label: "Dropped" },
                ]}
              />
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
                  className=" text-white"
                  style={{ background: "#4B49B6", fontSize: '0.9rem' }}
                  onClick={() => setAddModal(true)}
                >
                  Add Sample Login
                </CButton>
              </div>
            </CCol>
          </CRow>
          <div
            className="rounded bg-white"
            style={{ fontFamily: 'sans-serif', fontSize: '0.9rem', boxShadow: '5px 5px 20px #5D76A9' }}
          >          <CTable align="middle" responsive className="mb-0 rounded-lg table-responsive">
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell style={{ background: "#5D76A9", color: "white" }} scope="col" className="text-center">
                    <input type="checkbox" />
                  </CTableHeaderCell>
                  <CTableHeaderCell style={{ background: "#5D76A9", color: "white" }} scope="col">S NO.</CTableHeaderCell>
                  <CTableHeaderCell style={{ background: "#5D76A9", color: "white" }} scope="col">Sample Type</CTableHeaderCell>
                  <CTableHeaderCell style={{ background: "#5D76A9", color: "white" }} scope="col">
                    Product / Material
                  </CTableHeaderCell>
                  <CTableHeaderCell style={{ background: "#5D76A9", color: "white" }} scope="col">Generic Name</CTableHeaderCell>
                  <CTableHeaderCell style={{ background: "#5D76A9", color: "white" }} scope="col">
                    Specification Code
                  </CTableHeaderCell>
                  <CTableHeaderCell style={{ background: "#5D76A9", color: "white" }} scope="col">Status</CTableHeaderCell>
                  <CTableHeaderCell style={{ background: "#5D76A9", color: "white" }} scope="col">Actions</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {filterData().slice(startIndex, endIndex)
                  .filter((item) => {
                    return search.toLowerCase() === ""
                      ? item
                      : item.sampleType.toLowerCase().includes(search) ||
                      item.productMaterial.toLowerCase().includes(search) ||
                      item.genericName.toLowerCase().includes(search) ||
                      item.specificationCode.toLowerCase().includes(search)
                  })
                  .map((item, index) => (
                    <CTableRow key={index}>
                      <CTableHeaderCell scope="row" className="text-center">
                        <input type="checkbox" />
                      </CTableHeaderCell>
                      <CTableDataCell>{startIndex + index + 1}</CTableDataCell>
                      <CTableDataCell key={item.id}>{item.sampleType}</CTableDataCell>
                      <CTableDataCell>{item.productMaterial}</CTableDataCell>
                      <CTableDataCell>{item.genericName}</CTableDataCell>
                      <CTableDataCell>{item.specificationCode}</CTableDataCell>
                      <CTableDataCell>
                        <button
                          className={`py-1 px-3 small w-75 rounded text-light d-flex justify-content-center align-items-center bg-${item.status === "INITIATED"
                            ? "blue-700"
                            : item.status === "APPROVED"
                              ? "green-700"
                              : item.status === "REJECTED"
                                ? "red-700"
                                : item.status === "REINITIATED"
                                  ? "yellow-500"
                                  : item.status === "DROPPED"
                                    ? "purple-700"
                                    : "white"
                            }`} style={{ fontSize: '0.6rem' }}
                        >
                          {item.status}
                        </button>
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
                          <div className="cursor-pointer" onClick={() => handleDeleteClick(item.id)}>
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
                              <button style={{ background: "#21516a", color: "white" }} className="btn mr-2" onClick={prevPage} disabled={currentPage === 1}>
                                   &lt;&lt;
                              </button>
                              <button className="btn mr-2 bg-dark-subtle rounded-circle">{currentPage}</button>
                              <button style={{ background: "#21516a", color: "white" }} className="btn mr-2" onClick={nextPage} disabled={endIndex >= data.length}>
                                   &gt;&gt;
                              </button>
                         </div>
                    </div>
        </div >
      </div>

      {addModal && (
        <StatusModal visible={addModal} closeModal={() => setAddModal(false)} />
      )}
      {deleteModal && (
                    <DeleteModal
                         visible={deleteModal}
                         closeModal={() => setDeleteModal(false)}
                         confirmDelete={handleDeleteConfirm}
                         handleDelete={handleDeleteClick}
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
          className="mb-3"
            type="select"
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
          className="mb-3"
            type="text"
            label="Product / Material"
            placeholder=" Product / Material"
            disabled
          />
          <CFormInput
          className="mb-3"
            type="text"
            label="Product / Material Code"
            placeholder=" Product / Material Code"
            disabled
          />
          <CFormInput
          className="mb-3"
            type="text"
            label="Generic Name"
            placeholder=" Generic Name"
            disabled
          />
          <CFormInput
          className="mb-3"
            type="text"
            label="Specification ID"
            placeholder="Specification ID"
            disabled
          />
          <CFormSelect
          className="mb-3"
            type="select"
            label="Copy Sample from"
            placeholder=" Select..."
            options={["Select...", { label: "No Options" }]}
          />
          <CFormInput
          className="mb-3"
            type="select"
            label="Sample Type"
            placeholder="Sample Type"
            disabled
          />
          <CFormSelect
          className="mb-3"
            type="select"
            label="Certificates (If any)"
            placeholder=" Select..."
            options={["Select...", { label: "No Options" }]}
          />
          <CFormSelect
          className="mb-3"
            type="select"
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
          className="mb-3"
            type="select"
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

export default StabilitySampleLogin;
