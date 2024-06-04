import {
  CButton,
  CCol,
  CFormInput,
  CFormSelect,
  CFormTextarea,
  CModal,
  CModalFooter,
  CModalBody,
  CModalTitle,
  CRow,
  CFormCheck,
  CTable,
  CFormLabel,
  CForm,
  CModalHeader,
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

function InternalRegistration() {
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
      ProductName: "stmp1",
      SequenceNo: "describe",
      AdditionalInformation: "isubus111",
      ContainerStartingNo: "54255455",
      SampleRefrenceNo: "loc1",
      status: "APPROVED",
    },
    {
      id: 2,
      ProductName: "stmp1",
      SequenceNo: "describe",
      AdditionalInformation: "isubus111",
      ContainerStartingNo: "54255455",
      SampleRefrenceNo: "loc1",
      status: "REJECTED",
    },
    {
      id: 3,
      ProductName: "Alpha",
      SequenceNo: "describe",
      AdditionalInformation: "isubus111",
      ContainerStartingNo: "54255455",
      SampleRefrenceNo: "loc1",
      status: "REINITIATED",
    },
    {
      id: 4,
      ProductName: "Infra",
      SequenceNo: "describe",
      AdditionalInformation: "isubus111",
      ContainerStartingNo: "54255455",
      SampleRefrenceNo: "loc1",
      status: "INITIATED",
    },
    {
      id: 5,
      ProductName: "Infra",
      SequenceNo: "describe",
      AdditionalInformation: "isubus111",
      ContainerStartingNo: "54255455",
      SampleRefrenceNo: "loc1",
      status: "DROPPED",
    },
    {
      id: 6,
      ProductName: "Alpha",
      SequenceNo: "describe",
      AdditionalInformation: "isubus111",
      ContainerStartingNo: "54255455",
      SampleRefrenceNo: "loc1",
      status: "INITIATED",
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
      item.ContainerStartingNo.toLowerCase().includes(search.toLowerCase())
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
            <div className="title fw-bold fs-5">Working Standard Internal</div>
          </div>
          <div className="d-flex gap-4">
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
                  <butto className="text-light font-bold fs-5">APPROVED</butto>
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
                  style={{fontSize:'0.9rem'}}
                  type="email"
                  placeholder="Search..."
                  onChange={(e) => setSearch(e.target.value)}
                />
              </CCol>

              <CCol sm={3}>
                <CFormSelect
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  value={selectedStatus}
                  style={{fontSize:'0.9rem'}}
                >
                  <option value="All">All</option>
                  <option value="Initiated">Initiated</option>
                  <option value="Approved">Approved</option>
                  <option value="Rejected">Rejected</option>
                  <option value="Reinitiated">Reinitiated</option>
                  <option value="Dropped">Dropped</option>
                </CFormSelect>
              </CCol>
              {/* <CCol sm={2}></CCol> */}
              <CCol sm={5}>
                <div className="d-flex justify-content-end">
                  <CButton color="primary" onClick={() => setAddModal(true)}>
                    Add Internal
                  </CButton>
                </div>
              </CCol>
            </CRow>
          </div>
            <div
          className=" rounded bg-white"
          style={{fontFamily:'sans-serif', fontSize:'0.9rem' ,boxShadow:'5px 5px 20px #5D76A9'}}
        >
            <CTable
              align="middle"
              responsive
              className="mb-0    table-responsive"
            >
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell
                    style={{ background: "#5D76A9", color: "white"}}
                    scope="col"
                    className="text-center"
                  >
                    <input type="checkbox" />
                  </CTableHeaderCell>
                  <CTableHeaderCell
                    style={{ background: "#5D76A9", color: "white"}}
                    scope="col"
                  >
                    S NO.
                  </CTableHeaderCell>
                  <CTableHeaderCell
                    style={{ background: "#5D76A9", color: "white"}}
                    scope="col"
                  >
                    Product Name{" "}
                  </CTableHeaderCell>
                  <CTableHeaderCell
                    style={{ background: "#5D76A9", color: "white"}}
                    scope="col"
                  >
                    Sequence No.
                  </CTableHeaderCell>
                  <CTableHeaderCell
                    style={{ background: "#5D76A9", color: "white"}}
                    scope="col"
                  >
                    Additional Information
                  </CTableHeaderCell>
                  <CTableHeaderCell
                    style={{ background: "#5D76A9", color: "white"}}
                    scope="col"
                  >
                    Container Starting No.
                  </CTableHeaderCell>
                  <CTableHeaderCell
                    style={{ background: "#5D76A9", color: "white"}}
                    scope="col"
                  >
                    Sample Refrence no.
                  </CTableHeaderCell>
                  <CTableHeaderCell
                    style={{ background: "#5D76A9", color: "white"}}
                    scope="col"
                  >
                    Status
                  </CTableHeaderCell>
                  <CTableHeaderCell
                    style={{ background: "#5D76A9", color: "white"}}
                    scope="col"
                  >
                    Actions
                  </CTableHeaderCell>
                </CTableRow>
              </CTableHead>

              <CTableBody>
                {filterData()
                  .slice(startIndex, endIndex)
                  .filter((item) => {
                    return search.toLowerCase() === ""
                      ? item
                      : item.ProductName.toLowerCase().includes(search);
                  })
                  .map((item, index) => (
                    <CTableRow key={index}>
                      <CTableHeaderCell scope="row" className="text-center">
                        <input type="checkbox" />
                      </CTableHeaderCell>
                      <CTableDataCell>{startIndex + index + 1}</CTableDataCell>
                      {/* <CTableDataCell></CTableDataCell> */}
                      <CTableDataCell key={item.id}>
                        {item.ProductName}
                      </CTableDataCell>

                      <CTableDataCell>{item.SequenceNo}</CTableDataCell>
                      <CTableDataCell>
                        {item.AdditionalInformation}
                      </CTableDataCell>
                      <CTableDataCell>
                        {item.ContainerStartingNo}
                      </CTableDataCell>
                      <CTableDataCell>{item.SampleRefrenceNo}</CTableDataCell>
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
        size="lg"
      >
        <CModalHeader>
          <CModalTitle>New Internal</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CFormSelect
            type="text"
            label="Lot Type"
            placeholder="Select "
            className="mb-3"
          />
          <CFormInput
            type="text"
            label="Sample Refrence No."
            placeholder="Sample Refrence No. "
            className="custom-placeholder mb-3"
          />

          <CForm className="mb-3">
            <CFormLabel>Container Type</CFormLabel>
            <div>
              <CFormCheck
                type="radio"
                name="sampleRadio"
                id="acceptRadio"
                label="Bottle"
                value="accept"
              />
              <CFormCheck
                type="radio"
                name="sampleRadio"
                id="rejectRadio"
                label="Vial"
                value="reject"
              />
            </div>
          </CForm>
          <CFormInput
            type="text"
            label="Storage Condition"
            placeholder="Storage Condition "
            className="custom-placeholder mb-3"
          />
          <CFormInput
            type="number"
            label="W.s Batch Quantity"
            placeholder="W.s Batch Quantity "
            className="custom-placeholder mb-3"
          />
          <CFormTextarea
            type="text"
            label="Available Quantity for Distribution"
            placeholder="Available Quantity for Distribution"
            className="custom-placeholder mb-3"
          />
          <CFormInput
            type="text"
            label="Lot Quantity for Distribution"
            placeholder="Lot Quantity "
            className="custom-placeholder mb-3"
          />
          <CFormInput
            type="date"
            label="W.s Validate On"
            placeholder=" "
            className="custom-placeholder mb-3"
          />
          <CFormInput
            type="date"
            label="Lot Valid Upto"
            placeholder=""
            className="custom-placeholder mb-3"
          />
          <CFormInput
            type="text"
            label="Usage Type"
            placeholder="Single / Multiple"
            className="custom-placeholder mb-3"
          />
          <CFormInput
            type="text"
            label="Direction of Usage"
            placeholder="Direction of Usage"
            className="custom-placeholder mb-3"
          />
          <CFormInput
            type="number"
            label="No. Of Purities"
            placeholder="1"
            className="custom-placeholder mb-3"
          />

          <CFormSelect
            type="number"
            label="UOM"
            placeholder="Select..."
            className="custom-placeholder mb-3"
          />

          <div className="container mt-5 mb-3">
            <table className="table table-bordered">
              <thead className="thead-light">
                <tr>
                  <th style={{ background: "#0F93C3 ", color: "white" }}>
                    Sno.
                  </th>
                  <th style={{ background: "#0F93C3 ", color: "white" }}>
                    Purity
                  </th>
                  <th style={{ background: "#0F93C3 ", color: "white" }}>
                    Value-UOM
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>
                    <select className="form-control">
                      <option>Acids</option>
                      <option>Bases</option>
                      <option>Salts</option>
                      <option>Solvents</option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      placeholder=""
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
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
            className="custom-placeholder mb-3"
          />
          <CFormInput
            type="number"
            label="Source"
            placeholder="Source"
            className="mb-3"
          />

          <CFormInput
            type="number"
            label="Comments"
            placeholder="Comments"
            className="mb-3"
          />

          <CFormInput
            type="number"
            label="Container Validaty Period"
            placeholder="Container Validaty Period"
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

export default InternalRegistration;
