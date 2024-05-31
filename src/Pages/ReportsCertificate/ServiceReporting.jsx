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
import { faEye, faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function ServiceReporting() {
  const [addModal, setAddModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const badgeStyle = { background: "green", color: "white", width: "110px" };
  const badgeStyle2 = { background: "red", color: "white", width: "110px" };
  const [selectedStatus, setSelectedStatus] = useState("All");

  const pageSize = 5; // Number of items per page
  const [currentPage, setCurrentPage] = useState(1);

  const [data, setData] = useState([
    {
      id: 1,
      problemID: "SHMDZ",
      instrumentID: "hplc",
      moduleID: "SHMDZ/102145",
      problemBrief: "test",
      problemDetails: "test",
      closureDate: "Nov 17th 23",
      jobDetails: "Test",
      status: "Active",
    },
    {
      id: 2,
      problemID: "SHMDZ115454",
      instrumentID: "hplc",
      moduleID: "102145",
      problemBrief: "test012155",
      problemDetails: "test5454848",
      closureDate: "Nov 16th 23",
      jobDetails: "Test84848",
      status: "Inactive",
    },
    {
      id: 3,
      problemID: "SHMDZ1554545",
      instrumentID: "hplc",
      moduleID: "SHMDZ875699/102145",
      problemBrief: "test978794",
      problemDetails: "test7849",
      closureDate: "Nov 15th 23",
      jobDetails: "Test021515",
      status: "Inactive",
    },
    {
      id: 4,
      problemID: "SHMDZ154",
      instrumentID: "hplc",
      moduleID: "SHMDZ9536/102145",
      problemBrief: "testnnkk65545",
      problemDetails: "test1449663",
      closureDate: "Nov 18th 23",
      jobDetails: "Test2155",
      status: "Active",
    },
    {
      id: 5,
      problemID: "SHMDZ",
      instrumentID: "hplc",
      moduleID: "SHMDZ/102145",
      problemBrief: "test021512",
      problemDetails: "test215465",
      closureDate: "Nov 21th 23",
      jobDetails: "Test",
      status: "Active",
    },
    {
      id: 6,
      problemID: "SHMDZ023",
      instrumentID: "hplc",
      moduleID: "SHMDZ/102145",
      problemBrief: "test45",
      problemDetails: "test325",
      closureDate: "Nov 17th 23",
      jobDetails: "Test",
      status: "Inactive",
    },
  ]);

  const startIndex = (currentPage - 1) * pageSize;
  const filteredData = selectedStatus === 'All' ? data : data.filter(item => item.status === selectedStatus);
  const endIndex = Math.min(startIndex + pageSize, filteredData.length);
  const nextPage = () => setCurrentPage(currentPage + 1);
  const prevPage = () => setCurrentPage(currentPage - 1);
  const nextToLastPage = () => setCurrentPage(Math.ceil(filteredData.length / pageSize));
  const handleDeleteClick = (id) => {
    setDeleteId(id);
    setDeleteModal(true);
  };

  const handleDeleteConfirm = () => {
    setData(data.filter((item) => item.id !== deleteId));
    setDeleteModal(false);
  };

  return (
    <>
      <div className="h-100 mx-5">
        <div className="container-fluid my-5">
          <div className="main-head">
            <div className="title fw-bold fs-5 py-4">Service Reporting</div>
          </div>
          <div>
            <CRow className="mb-3">
              <CCol sm={3}>
                <CFormSelect
                  options={["Select Status", { label: "All", value: "All" }, { label: "Active", value: "Active" }, { label: "Inactive", value: "Inactive" }]}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  value={selectedStatus} style={{ border: "2px solid gray" }}
                />
              </CCol>
              <CCol sm={6}></CCol>
              <CCol sm={3}>
                <div className="d-flex justify-content-end">
                  <CButton color="primary" onClick={() => setAddModal(true)}>
                    Add Service
                  </CButton>
                </div>
              </CCol>
            </CRow>
          </div>
          <div className="bg-white rounded py-3 px-4 mt-5" style={{ boxShadow: "0px 0px 3px black" }}>
            <CTable align="middle" responsive >
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col">S NO.</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Problem ID</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Instrument ID</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Module ID</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Problem In Brief</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Problem In Details</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Expected Closure Date</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Job Details</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Actions</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {filteredData.slice(startIndex, endIndex).map((item) => (
                  <CTableRow key={item.id}>
                    <CTableDataCell>{startIndex + index + 1}</CTableDataCell>
                    <CTableDataCell>{item.problemID}</CTableDataCell>
                    <CTableDataCell>{item.instrumentID}</CTableDataCell>
                    <CTableDataCell>{item.moduleID}</CTableDataCell>
                    <CTableDataCell>{item.problemBrief}</CTableDataCell>
                    <CTableDataCell>{item.problemDetails}</CTableDataCell>
                    <CTableDataCell>{item.closureDate}</CTableDataCell>
                    <CTableDataCell>{item.jobDetails}</CTableDataCell>
                    <CTableDataCell >
                      <div
                        className="py-2 px-3 small rounded fw-bold"
                        style={item.status === "Active" ? badgeStyle : badgeStyle2}
                      >
                        {item.status}
                      </div>
                    </CTableDataCell>
                    <CTableDataCell>
                      <div className="d-flex gap-3">
                        <Link to="/reportsCertificate/serviceReportingDetails">
                          <FontAwesomeIcon icon={faEye} />
                        </Link>
                        <div className="cursor-pointer" onClick={() => setAddModal(true)}>
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
      {deleteModal && <DeleteModal visible={deleteModal} closeModal={() => setDeleteModal(false)} confirmDelete={handleDeleteConfirm} />}
    </>
  );
}

const StatusModal = (_props) => {
  return (
    <>
      <CModal alignment="center" visible={_props.visible} onClose={_props.closeModal}>
        <CModalHeader>
          <CModalTitle>Add Service Reporting</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p>Add information and Add Service Reporting</p>
          <CFormSelect
            type="text"
            label="Problem ID"
            options={["Select...", { label: "SHMDZ" }]}
            placeholder="Select... "
          />
          <CFormInput type="text" label="Instrument (Instrument ID)" placeholder="hplc " disabled />
          <CFormSelect
            type="text"
            label="Module ID"
            options={["Select...", { label: "wl/wb/m/001" }]}
            placeholder="Select... "
          />
          <CFormInput type="text" label="Problem In Brief" placeholder="Problem In Brief " />
          <CFormInput type="text" label="Problem In Details" placeholder="Problem In Details" />
          <CFormInput type="file" label="Reference Document" placeholder=" choose file" />
          <CFormInput type="date" label="Occurred On" placeholder=" " />
          <CFormInput type="date" label="Reported On" placeholder=" " />
          <CFormInput type="date" label="Attended On" placeholder=" " />
          <CFormInput type="date" label="Expected Closure Date" placeholder=" " />
          <CFormInput type="text" label="Job Details" placeholder=" Job Details" />
        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={_props.closeModal}>
            Back
          </CButton>
          <CButton color="primary">Submit</CButton>
        </CModalFooter>
      </CModal>
    </>
  );
};

const DeleteModal = (_props) => {
  return (
    <CModal alignment="center" visible={_props.visible} onClose={_props.closeModal} size="lg">
      <CModalHeader>
        <CModalTitle style={{ fontSize: "1.2rem", fontWeight: "600" }}>
          Delete Service Reporting
        </CModalTitle>
      </CModalHeader>
      <div className="modal-body" style={{
        fontSize: "1.2rem",
        fontWeight: "500",
        lineHeight: "1.5",
        marginBottom: "1rem",
        columnGap: "0px",
        border: "0px !important",
      }}
      >
        <p>Do you want to delete this Service reporting <code>test</code>?</p>
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

export default ServiceReporting;
