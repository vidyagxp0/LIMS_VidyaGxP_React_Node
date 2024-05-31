import {
  CButton,
  CCol,
  CForm,
  CFormCheck,
  CFormInput,
  CFormLabel,
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

function WorkingStandardUsage() {
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
      RefStdLotNo: "stmp1",
      Quantityused: "describe",
      UsedOn: "isubus111",
      UsedBy: "54255455",

      status: "APPROVED",
    },
    {
      id: 2,
      RefStdLotNo: "alpha",
      Quantityused: "describe",
      UsedOn: "isubus111",
      UsedBy: "54255455",

      status: "REJECTED",
    },
    {
      id: 3,
      RefStdLotNo: "alpha",
      Quantityused: "describe",
      UsedOn: "isubus111",
      UsedBy: "54255455",

      status: "DROPPED",
    },
    {
      id: 4,
      RefStdLotNo: "stmp1",
      Quantityused: "describe",
      UsedOn: "isubus111",
      UsedBy: "54255455",

      status: "INITIATED",
    },
    {
      id: 5,
      RefStdLotNo: "sigma",
      Quantityused: "describe",
      UsedOn: "isubus111",
      UsedBy: "54255455",

      status: "DROPPED",
    },
    {
      id: 6,
      RefStdLotNo: "stmp1",
      Quantityused: "describe",
      UsedOn: "isubus111",
      UsedBy: "54255455",

      status: "REINITIATED",
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
      item.RefStdLotNo.toLowerCase().includes(search.toLowerCase())
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
            <div className="title fw-bold fs-5">Working Standard Lot Usage</div>
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
                    Add Internal
                  </CButton>
                </div>
              </CCol>
            </CRow>
          </div>
          <div className=" rounded  m-1 bg-white" style={{border:"2px solid gray"}}>
          <CTable align="middle" responsive className="mb-0 table-striped table-responsive">
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col" style={{background:"#3C496A", color:"white"}} className="text-center">
                    <input type="checkbox" />
                  </CTableHeaderCell>
                  <CTableHeaderCell   scope="col" style={{background:"#3C496A", color:"white"}}>
                    SNo.
                  </CTableHeaderCell>
                  <CTableHeaderCell   scope="col"style={{background:"#3C496A", color:"white"}}>
                    Ref. Std. Lot. No
                  </CTableHeaderCell>
                  <CTableHeaderCell   scope="col" style={{background:"#3C496A", color:"white"}}>
                    Quantity used
                  </CTableHeaderCell>
                  <CTableHeaderCell   scope="col" style={{background:"#3C496A", color:"white"}}>
                    Used On
                  </CTableHeaderCell>
                  <CTableHeaderCell   scope="col" style={{background:"#3C496A", color:"white"}}>
                    Used By
                  </CTableHeaderCell>

                  <CTableHeaderCell   scope="col" style={{background:"#3C496A", color:"white"}}>
                    Status
                  </CTableHeaderCell>
                  <CTableHeaderCell   scope="col" style={{background:"#3C496A", color:"white"}}>
                    Actions{" "}
                  </CTableHeaderCell>
                </CTableRow>
              </CTableHead>

              <CTableBody>
                {filterData()
                  .slice(startIndex, endIndex)
                  .filter((item) => {
                    return search.toLowerCase() === ""
                      ? item
                      : item.RefStdLotNo.toLowerCase().includes(search);
                  })
                  .map((item, index) => (
                    <CTableRow key={index}>
                      <CTableHeaderCell scope="row" className="text-center">
                        <input type="checkbox" />
                      </CTableHeaderCell>
                      <CTableDataCell>{startIndex + index + 1}</CTableDataCell>
                      <CTableDataCell key={item.id}>
                        {item.RefStdLotNo}
                      </CTableDataCell>

                      <CTableDataCell>{item.Quantityused}</CTableDataCell>
                      <CTableDataCell>{item.UsedOn}</CTableDataCell>
                      <CTableDataCell>{item.UsedBy}</CTableDataCell>

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
      >
        <CModalHeader>
          <CModalTitle>Reference Standard Lot Usage</CModalTitle>
        </CModalHeader>
        <CModalBody>
          
          <CFormSelect
            type="text"
            label="W.S Lot No."
            placeholder="Select.. "
            className="custom-placeholder mb-3"
          />
          <CFormInput
            type="text"
            label="Product/Material"
            placeholder="Product/Material"
            className="custom-placeholder mb-3"
          />
          <CFormInput
            type="date"
            label="Lot Created Date"
            placeholder="Lot Created Date "
            className="custom-placeholder mb-3"
          />
          <CFormInput
            type="date"
            label="Lot Exp. Date"
            placeholder=" "
            className="custom-placeholder mb-3"
          />
          <CFormTextarea
            type="text"
            label="Usage Type"
            placeholder="Usage Type"
            className="custom-placeholder mb-3"
          />
          <CFormInput
            type="text"
            label="No. of Containers Prepared"
            placeholder="No. of Containers Prepared"
            className="custom-placeholder mb-3"
          />
          <CFormInput
            type="date"
            label="Container Issued On"
            placeholder=" "
            className="custom-placeholder mb-3"
          />
          <CFormInput
            type="date"
            label="Container Valid Upto"
            placeholder=""
            className="custom-placeholder mb-3"
          />
          <CFormInput
            type="number"
            label="Total Quantity in containers"
            placeholder=""
            className="custom-placeholder mb-3"
          />
          <CFormInput
            type="text"
            label="Available Quantity In Container"
            placeholder="Direction of Usage"
            className="custom-placeholder mb-3"
          />
          <CForm className="mb-3">
            <CFormLabel>Collection Type</CFormLabel>
            <div style={{display:"flex", justifyContent:"space-around"}}>
              <CFormCheck
                type="radio"
                name="sampleRadio"
                id="acceptRadio"
                label="Manual"
                value="accept"
              />
              <CFormCheck
                type="radio"
                name="sampleRadio"
                id="rejectRadio"
                label="Auto Binding"
                value="reject"
              />
              <CFormCheck
                type="radio"
                name="sampleRadio"
                id="rejectRadio"
                label="Set as default"
                value="reject"
              />
            </div>
          </CForm>
          <CFormInput
            type="number"
            label="Quantity Used Now"
            placeholder="Select..."
            className="custom-placeholder mb-3"
          />
          <CFormInput
            type="date"
            label="Used On"
            placeholder="Select..."
            className="custom-placeholder mb-3"
          />
          <CFormInput
            type="number"
            label="Used By"
            placeholder="Select..."
            className="custom-placeholder mb-3"
          />
          <CForm className="mb-3">
            <CFormLabel>Usage for</CFormLabel>
            <div style={{display:"flex", justifyContent:"space-around"}}>
              <CFormCheck
                type="radio"
                name="sampleRadio"
                id="acceptRadio"
                label="Sample Analysis"
                value="accept"
              />
              <CFormCheck
                type="radio"
                name="sampleRadio"
                id="rejectRadio"
                label="Instrument Calibration"
                value="reject"
              />
              <CFormCheck
                type="radio"
                name="sampleRadio"
                id="rejectRadio"
                label="Miscellaneous"
                value="reject"
              />
            </div>
          </CForm>
        </CModalBody>

        <CModalFooter>
          <CButton color="light" onClick={_props.closeModal}>
            Cancel
          </CButton>
          <CButton style={{ background: "#0F93C3", color: "white" }}>
            Add Standard Lot Usage
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
export default WorkingStandardUsage;
