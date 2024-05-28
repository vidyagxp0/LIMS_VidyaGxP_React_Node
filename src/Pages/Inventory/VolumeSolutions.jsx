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
import { useState } from "react";
import { Link } from "react-router-dom";

function VolumeSolutions() {
  const [addModal, setAddModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const badgeStyle = { background: "gray", color: "white", width: "110px" };
  const badgeStyle2 = {
    background: " #2A5298",
    color: "white",
    width: "110px",
  };
  const badgeStyle3 = { background: "green", color: "white", width: "110px" };
  const badgeStyle4 = { background: "red", color: "white", width: "110px" };
  const badgeStyle5 = { background: "orange", color: "white", width: "110px" };
  const badgeStyle6 = { background: "purple", color: "white", width: "110px" };

  const [selectedStatus, setSelectedStatus] = useState("All");
  const [data, setData] = useState([
    {
      id: 1,
      Name: "stmp1",
      Prefix: "describe",
      SolutionExpiryPeriod: "isubus111",
      PreparationMethod: "54255455",
      Comments: "loc1",
      status: "APPROVED",
    },
    {
      id: 2,
      Name: "stmp1",
      Prefix: "describe",
      SolutionExpiryPeriod: "isubus111",
      PreparationMethod: "54255455",
      Comments: "loc1",
      status: "DROPPED",
    },

    {
      id: 3,
      Name: "stmp1",
      Prefix: "describe",
      SolutionExpiryPeriod: "isubus111",
      PreparationMethod: "54255455",
      Comments: "loc1",
      status: "REJECTED",
    },
    {
      id: 4,
      Name: "stmp1",
      Prefix: "describe",
      SolutionExpiryPeriod: "isubus111",
      PreparationMethod: "54255455",
      Comments: "loc1",
      status: "APPROVED",
    },
    {
      id: 5,
      Name: "stmp1",
      Prefix: "describe",
      SolutionExpiryPeriod: "isubus111",
      PreparationMethod: "54255455",
      Comments: "loc1",
      status: "APPROVED",
    },

    {
      id: 6,
      Name: "stmp1",
      Prefix: "describe",
      SolutionExpiryPeriod: "isubus111",
      PreparationMethod: "54255455",
      Comments: "loc1",
      status: "APPROVED",
    },
  ]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;
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
      item.Name.toLowerCase().includes(search.toLowerCase())
    );
  };
  const filteredData = filterData();
  const nextPage = () =>
    setCurrentPage((prev) =>
      Math.min(prev + 1, Math.ceil(filteredData.length / pageSize))
    );
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  const handleDelete = (id) => {
    setData((prevData) => prevData.filter((item) => item.id !== id));
    setDeleteModal(false);
  };

  return (
    <>
      <div id="approval-page" className="h-100 mx-5">
        <div className="container-fluid my-5">
          <div className="main-head">
            <div className="title fw-bold fs-5">Solutions</div>
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
                  <CButton color="primary" onClick={() => setAddModal(true)}>
                    Add Solutions
                  </CButton>
                </div>
              </CCol>
            </CRow>
          </div>
          <div
            className="bg-white mt-5"
            style={{ boxShadow: "0px 0px 3px black" }}
          >
            <CTable align="middle" responsive className=" shadow">
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col" className="text-center">
                    <input type="checkbox" />
                  </CTableHeaderCell>
                  <CTableHeaderCell scope="col">S NO.</CTableHeaderCell>
                  <CTableHeaderCell scope="col"> Name </CTableHeaderCell>
                  <CTableHeaderCell scope="col">Prefix</CTableHeaderCell>
                  <CTableHeaderCell scope="col">
                    Theoretical Strength
                  </CTableHeaderCell>
                  <CTableHeaderCell scope="col">
                    Solution Expiry Period
                  </CTableHeaderCell>
                  <CTableHeaderCell scope="col">
                    Preparation Method
                  </CTableHeaderCell>
                  <CTableHeaderCell scope="col">Comments</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Actions</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {filterData()
                  .slice(startIndex, endIndex)
                  .filter((item) => {
                    return search.toLowerCase() === ""
                      ? item
                      : item.Name.toLowerCase().includes(search);
                  })
                  .map((item, index) => (
                    <CTableRow key={index}>
                      <CTableHeaderCell scope="row" className="text-center">
                        <input type="checkbox" />
                      </CTableHeaderCell>
                      <CTableDataCell>{item.id}</CTableDataCell>
                      <CTableDataCell key={item.id}>{item.Name}</CTableDataCell>

                      <CTableDataCell>{item.Prefix}</CTableDataCell>
                      <CTableDataCell>
                        {item.SolutionExpiryPeriod}
                      </CTableDataCell>
                      <CTableDataCell>{item.PreparationMethod}</CTableDataCell>
                      <CTableDataCell>{item.PreparationMethod}</CTableDataCell>
                      <CTableDataCell>{item.Comments}</CTableDataCell>
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
                          <Link to="/approval/1321">
                            <FontAwesomeIcon icon={faEye} />
                          </Link>
                          <div
                            className="cursor-pointer"
                            onClick={() => setAddModal(true)}
                          >
                            <FontAwesomeIcon icon={faPenToSquare} />
                          </div>
                          <CTableDataCell>
                            <div
                              className="cursor-pointer"
                              onClick={() => setDeleteModal(item.id)}
                            >
                              <FontAwesomeIcon icon={faTrashCan} />
                            </div>
                          </CTableDataCell>
                        </div>
                      </CTableDataCell>
                    </CTableRow>
                  ))}
              </CTableBody>
            </CTable>
          </div>
          <div className="pagination mt-5">
            <button
              className="btn mr-2"
              onClick={prevPage}
              disabled={currentPage === 1}
            >
              &lt;&lt;
            </button>
            <div className="current-page-number mr-2 bg-dark-subtle page-item">
              <button className="btn rounded-circle">{currentPage}</button>
            </div>
            <button
              className="btn mr-2"
              onClick={nextPage}
              disabled={endIndex >= filteredData.length}
            >
              &gt;&gt;
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
          <CModalTitle>Add Solutions</CModalTitle>
        </CModalHeader>
        <p style={{marginLeft: "15px"}}>Add information and Add Solutions</p>
        <CModalBody>
          <CFormInput type="text" label="Lot Type" placeholder="Select " className="mb-3" />
          <CFormInput
            type="text"
            label="Name"
            placeholder=" "
            className="custom-placeholder mb-3"
          />
          <CFormInput
            type="text"
            label="Prefix"
            placeholder="Bottle / vial "
            className="custom-placeholder mb-3"
          />
          <CFormInput
            type="text"
            label="Theoretical Strength"
            placeholder="Theoretical Strength"
            className="custom-placeholder mb-3"
          />
          <CFormInput
            type="number"
            label="UOM"
            placeholder="UOM "
            className="custom-placeholder mb-3"
          />
          <CFormTextarea
            type="text"
            label="Solution Expiry Period"
            placeholder="Solution Expiry Period"
            className="custom-placeholder mb-3"
          />
          <CFormInput
            type="text"
            label="Standardization Schedule"
            placeholder="Lot Quantity"
            className="custom-placeholder mb-3"
          />
          <CFormInput
            type="date"
            label="Preparation Method"
            placeholder=" "
            className="custom-placeholder mb-3"
          />
          <CFormInput
            type="text"
            label="Preparation Method"
            placeholder=""
            className="custom-placeholder mb-3"
          />
          <CFormInput
            type="number"
            label="Additional Purities Information"
            placeholder="Additional Information"
            className="custom-placeholder mb-3"
          />
          <CFormInput
            type="number"
            label="Standard Type"
            placeholder="Standard Type"
            className="mb-3"
          />
          <CFormInput type="number" label="Source" placeholder="Source" className="mb-3" />
          <CFormInput type="number" label="Comments" placeholder="Comments" className="mb-3" />
          <CFormInput
            type="number"
            label="Container Validity Period"
            placeholder="Container Validity Period"
            className="mb-3"
          />
          <CFormInput
            type="number"
            label="Container Starting No."
            placeholder="Container No."
            className="mb-3"
          />
          <CFormInput
            type="number"
            label="Minimum No. of Containers for Alert"
            placeholder="1"
            className="mb-3"
          />
          <CFormInput
            type="number"
            label="No. of Containers Prepared"
            placeholder=""
            className="mb-3"
          />
          <CFormInput
            type="number"
            label="Total Quantity in containers"
            placeholder="Total Quantity in containers"
            className="mb-3"
          />
        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={_props.closeModal}>
            Cancel
          </CButton>
          <CButton style={{ background: "#0F93C3", color: "white" }}>
            Add
          </CButton>
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
          Delete Batch Sample Allotment
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
        <p>Are you sure you want to delete this Batch Sample Allotment?</p>
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

export default VolumeSolutions;
