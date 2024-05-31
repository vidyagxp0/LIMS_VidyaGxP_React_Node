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
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function WOSTest() {
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

  const handleSelect = (data) => {
    setSelectedStatus(data);
    setCurrentPage(1);
  }

  const [data, setData] = useState([
    {
      id: 1,
      SpecificationId: "stmp1",
      ProductName: "describe",
      TestName: "isubus111",
      TestCode: "54255455",
      MethodNo: "54255455",
      TestCategory: "54255455",
      TestTechnique: "54255455",
      TestType: "54255455",

      status: "APPROVED",
    },
    {
      id: 2,
      SpecificationId: "stmp1",
      ProductName: "describe",
      TestName: "isubus111",
      TestCode: "54255455",
      MethodNo: "54255455",
      TestCategory: "54255455",
      TestTechnique: "54255455",
      TestType: "54255455",

      status: "REJECTED",
    },
    {
      id: 3,
      SpecificationId: "stmp1",
      ProductName: "describe",
      TestName: "isubus111",
      TestCode: "54255455",
      MethodNo: "54255455",
      TestCategory: "54255455",
      TestTechnique: "54255455",
      TestType: "54255455",

      status: "DROPPED",
    },
    {
      id: 4,
      SpecificationId: "stmp1",
      ProductName: "describe",
      TestName: "isubus111",
      TestCode: "54255455",
      MethodNo: "54255455",
      TestCategory: "54255455",
      TestTechnique: "54255455",
      TestType: "54255455",
      status: "INITIATED",
    },
    {
      id: 5,
      SpecificationId: "stmp1",
      ProductName: "describe",
      TestName: "isubus111",
      TestCode: "54255455",
      MethodNo: "54255455",
      TestCategory: "54255455",
      TestTechnique: "54255455",
      TestType: "54255455",

      status: "APPROVED",
    },
    {
      id: 6,
      SpecificationId: "stmp1",
      ProductName: "describe",
      TestName: "isubus111",
      TestCode: "54255455",
      MethodNo: "54255455",
      TestCategory: "54255455",
      TestTechnique: "54255455",
      TestType: "54255455",

      status: "REINITIATED",
    },
  ]);
  const pageSize = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, data.length);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const nextToLastPage = () => {
    setCurrentPage(Math.ceil(filterData().length / pageSize));
  };
  const [search, setSearch] = useState("");

  const filterData = () => {
    const filteredData =
      selectedStatus === "All"
        ? data
        : data.filter(
            (item) => item.status.toUpperCase() === selectedStatus.toUpperCase()
          );
    return filteredData.filter((item) =>
      item.ProductName.toLowerCase().includes(search.toLowerCase())
    );
  };
  
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
          <div className="d-flex gap-4 my-3">
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
                  type="text"
                  placeholder="Search..."
                  onChange={(e) => setSearch(e.target.value)}
                />
              </CCol>

              <CCol sm={3}>
                <CFormSelect
                  onChange={(e) => handleSelect(e.target.value)}
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
                    Add WOS Test
                  </CButton>
                </div>
              </CCol>
            </CRow>
          </div>
          <div
            className="bg-light border-2 border-dark-subtle mt-5 rounded"
          >
            <CTable className="table table-responsive table-striped">
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell style={{background:"#3C496A", color:"white"}} scope="col" className="text-center">
                    <input type="checkbox" />
                  </CTableHeaderCell>
                  <CTableHeaderCell style={{background:"#3C496A", color:"white"}} scope="col" >
                    SNo.
                  </CTableHeaderCell>
                  <CTableHeaderCell style={{background:"#3C496A", color:"white"}} scope="col" >
                    Specification Id
                  </CTableHeaderCell>
                  <CTableHeaderCell style={{background:"#3C496A", color:"white"}} scope="col" >
                    Product Name
                  </CTableHeaderCell>
                  <CTableHeaderCell style={{background:"#3C496A", color:"white"}} scope="col" >
                    Test Name
                  </CTableHeaderCell>
                  <CTableHeaderCell style={{background:"#3C496A", color:"white"}} scope="col" >
                    Test Code
                  </CTableHeaderCell>
                  <CTableHeaderCell style={{background:"#3C496A", color:"white"}} scope="col" >
                    Method No.
                  </CTableHeaderCell>
                  <CTableHeaderCell style={{background:"#3C496A", color:"white"}} scope="col" >
                    Test Category
                  </CTableHeaderCell>
                  <CTableHeaderCell style={{background:"#3C496A", color:"white"}} scope="col" >
                    Test Technique
                  </CTableHeaderCell>
                  <CTableHeaderCell style={{background:"#3C496A", color:"white"}} scope="col" >
                    Test Type
                  </CTableHeaderCell>

                  <CTableHeaderCell style={{background:"#3C496A", color:"white"}} scope="col" >
                    Status
                  </CTableHeaderCell>
                  <CTableHeaderCell style={{background:"#3C496A", color:"white"}} scope="col" >
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
                        {item.SpecificationId}
                      </CTableDataCell>

                      <CTableDataCell>{item.ProductName}</CTableDataCell>
                      <CTableDataCell>{item.TestName}</CTableDataCell>
                      <CTableDataCell>{item.TestCode}</CTableDataCell>
                      <CTableDataCell>{item.MethodNo}</CTableDataCell>
                      <CTableDataCell>{item.TestCategory}</CTableDataCell>
                      <CTableDataCell>{item.TestTechnique}</CTableDataCell>
                      <CTableDataCell>{item.TestType}</CTableDataCell>

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
          <div className="pagination my-4">
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
                <button className="btn"> {currentPage} </button>
              </div>
              <div>
                <button
                  className="btn mr-2"
                  onClick={nextPage}
                  disabled={endIndex >= filterData().length}
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
          <CModalTitle>Add WOS Tests</CModalTitle>
        </CModalHeader>
        <p style={{marginLeft:"20px", marginTop:"5px"}}>Add information about WOS test</p>
        <CModalBody>
          <CFormSelect type="text" label="Specification ID
" placeholder="Select " />
          <CFormInput
            type="text"
            label="Product/Material Name
            "
            placeholder="Select.. "
            className="custom-placeholder"
          />
          <CFormInput
            type="text"
            label="Test Name
            "
            placeholder="Product/Material"
            className="custom-placeholder"
          />
          <CFormInput
            type="text"
            label="Test Code
            "
            placeholder="Lot Created Date "
            className="custom-placeholder"
          />
          <CFormInput
            type="text"
            label="Method No.
            "
            placeholder=" "
            className="custom-placeholder"
          />
          <CFormSelect
            type="text"
            label="Copy Test From
            "
            placeholder=""
            className="custom-placeholder"
          />
          <CFormSelect
            type="text"
            label="Test Category
            "
            placeholder=""
            className="custom-placeholder"
          />
          <CFormInput
            type="text"
            label="Test Technique
            "
            placeholder=" "
            className="custom-placeholder"
          />
          <CFormInput
            type="text  "
            label="Test Type
            "
            placeholder=""
            className="custom-placeholder"
          />
         
        </CModalBody>

        <CModalFooter>
          <CButton color="light" onClick={_props.closeModal}>
            Cancel
          </CButton>
          <CButton style={{ background: "#0F93C3", color: "white" }}>
            Submit
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
export default WOSTest;
