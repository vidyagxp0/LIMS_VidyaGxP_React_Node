import {
  CButton, CCol, CFormCheck, CFormInput, CFormSelect, CModal, CModalBody,
  CModalFooter, CModalHeader, CModalTitle, CRow, CTable, CTableBody,
  CTableDataCell, CTableHead, CTableHeaderCell, CTableRow
} from "@coreui/react";
import { faEye, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { FaArrowRight, FaDownload } from "react-icons/fa";
import { Link } from "react-router-dom";

function SampleLoginTemplate() {
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
    { id: 1, title: "Testing", addedOn: "10-may-2024 10:36", status: "INITIATED" },
    { id: 2, title: "ARZ Temp", addedOn: "18-may-2024 20:19", status: "APPROVED" },
    { id: 3, title: "Template 3", addedOn: "22-may-2024 14:30", status: "REJECTED" },
    { id: 4, title: "Template 4", addedOn: "25-may-2024 09:15", status: "INITIATED" },
    { id: 5, title: "Template 5", addedOn: "28-may-2024 16:45", status: "REINITIATED" },
    { id: 6, title: "Template 6", addedOn: "01-jun-2024 11:00", status: "APPROVED" },
    { id: 7, title: "Template 7", addedOn: "03-jun-2024 13:20", status: "INITIATED" },
    { id: 8, title: "Template 8", addedOn: "05-jun-2024 08:50", status: "REJECTED" },
    { id: 9, title: "Template 9", addedOn: "07-jun-2024 18:00", status: "APPROVED" },
    { id: 10, title: "Template 10", addedOn: "10-jun-2024 17:25", status: "INITIATED" }
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
      item.title.toLowerCase().includes(search.toLowerCase())
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
            <div className="title fw-bold fs-5 py-4">Sample Login Template</div>
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
                    <CButton className="bg-danger bg-opacity-75 rounded">
                      <FaDownload />
                    </CButton>
                  </div>
                  <CButton
                    color="primary"
                    onClick={() => setAddModal(true)}
                  >
                    Add Template
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
                  <CTableHeaderCell scope="col">Template Title</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Added On</CTableHeaderCell>
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
                      <CTableDataCell key={item.id}>{item.title}</CTableDataCell>
                      <CTableDataCell>{item.addedOn}</CTableDataCell>
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
                          <Link to="/stability/sampleLoginTemplateDetails">
                            <FontAwesomeIcon icon={faEye} />
                          </Link>
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
      {addModal && <StatusModal visible={addModal} closeModal={() => setAddModal(false)} />}
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
    <CModal alignment="center" visible={_props.visible} onClose={_props.closeModal}>
      <CModalHeader>
        <CModalTitle>Add Sample Login Template</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CFormInput type="text" label="Template Title" placeholder="template title " />
        <CFormCheck type="checkbox" id="checkbox1" label="Reference Protocol No." />
        <CFormCheck type="checkbox" id="checkbox2" label="Customer" />
        <CFormCheck type="checkbox" id="checkbox3" label="Study Location" />
        <CFormCheck type="checkbox" id="checkbox4" label="Proposed Market" />
        <CFormCheck type="checkbox" id="checkbox5" label="Batch Type" />
        <CFormCheck type="checkbox" id="checkbox6" label="Batch No." />
        <CFormCheck type="checkbox" id="checkbox7" label="Manufacturing Date" />
        <CFormCheck type="checkbox" id="checkbox8" label="Manufactured At" />
        <CFormCheck type="checkbox" id="checkbox9" label="Expiry / Retest Date" />
        <CFormCheck type="checkbox" id="checkbox10" label="Packed At" />
        <CFormCheck type="checkbox" id="checkbox11" label="No. Of API's" />
        <CFormCheck type="checkbox" id="checkbox12" label="Source of API" />
        <label>Auto Detection Required</label>
        <CFormCheck type="radio" id="AutoDetectionYes" name="AutoDetection" label="Yes" />
        <CFormCheck type="radio" id="AutoDetectionNo" name="AutoDetection" label="No" />
      </CModalBody>
      <CModalFooter>
        <CButton color="light" onClick={_props.closeModal}>
          Back
        </CButton>
        <CButton color="primary">Submit</CButton>
      </CModalFooter>
    </CModal>
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
          Delete Sample Type
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
        <p>Do you want to delete this sample type</p>
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

export default SampleLoginTemplate;
