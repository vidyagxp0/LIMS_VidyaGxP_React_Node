import { pdf } from "@react-pdf/renderer";
import { useState } from "react";
import ReactPDF from "@react-pdf/renderer";
import {
  CButton,
  CCol,
  CFormSelect,
  CModal,
  CBadge,
  CCardBody,
  CFormInput,
  CCard,
  CModalBody,
  CModalFooter,
  CContainer,
  CModalHeader,
  CModalTitle,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHeaderCell,
  CTableHead,
  CTableRow,
} from "@coreui/react";

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => (
  <ReactPDF.View
    style={{
      margin: 10,
      padding: 10,
      borderBottom: "1px solid #000",
      textAlign: "center",
    }}
  >
    <ReactPDF.View
      style={{ flexDirection: "row", justifyContent: "space-between" }}
    >
      <ReactPDF.Image
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZxZlrJ6FvJeaTZypzsU9l_VKJgt5GFUmHpbheI7L3MA&s"
        style={{ width: 100, height: 100 }}
      />
      <ReactPDF.Text>Vijay Nagar, Indore, Madhya Pradesh 452010</ReactPDF.Text>
    </ReactPDF.View>
    <ReactPDF.Text
      style={{ color: "blue", fontWeight: "bold", marginBottom: 10 }}
    >
      Chemical/Reagent Index
    </ReactPDF.Text>
  </ReactPDF.View>
);

const PDFTable = ({ data }) => (
  <ReactPDF.View>
    <ReactPDF.Text style={{ fontWeight: "bold", marginBottom: 10 }}>
      Chemicals/Reagents List
    </ReactPDF.Text>
    <ReactPDF.View
      style={{
        display: "flex",
        flexDirection: "row",
        borderBottom: "1px solid black",
        padding: 5,
      }}
    >
      <ReactPDF.Text style={{ width: "10%" }}>S No.</ReactPDF.Text>
      <ReactPDF.Text style={{ width: "30%" }}>
        Chemical / Reagent Name
      </ReactPDF.Text>
      <ReactPDF.Text style={{ width: "30%" }}>
        Chemical / Reagent Unique Code
      </ReactPDF.Text>
      <ReactPDF.Text style={{ width: "30%" }}>Status</ReactPDF.Text>
    </ReactPDF.View>
    {data.map((item, index) => (
      <ReactPDF.View
        key={index}
        style={{ display: "flex", flexDirection: "row", padding: 5 }}
      >
        <ReactPDF.Text style={{ width: "10%" }}>{item.id}</ReactPDF.Text>
        <ReactPDF.Text style={{ width: "30%" }}>
          {item.ChemicalReagentName}
        </ReactPDF.Text>
        <ReactPDF.Text style={{ width: "30%" }}>
          {item.ChemicalReagentCode}
        </ReactPDF.Text>
        <ReactPDF.Text style={{ width: "30%" }}>{item.status}</ReactPDF.Text>
      </ReactPDF.View>
    ))}
  </ReactPDF.View>
);

const PDFDocument = ({ data }) => (
  <ReactPDF.Document>
    <ReactPDF.Page size="A4" style={{ padding: 5 }}>
      <Header />
      <ReactPDF.View style={{ marginTop: 10 }}>
        <PDFTable data={data} style={{ fontSize: "10px" }} />
        <ReactPDF.Text style={{ marginTop: 20, fontSize: "10px" }}>
          Printed By: Admin
        </ReactPDF.Text>
        <ReactPDF.Text style={{ fontSize: "10px" }}>
          Printed On: 20/05/2024 10:26
        </ReactPDF.Text>
      </ReactPDF.View>
    </ReactPDF.Page>
  </ReactPDF.Document>
);

function ChemicalReagent() {
  const [deleteModal, setDeleteModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;
  const startIndex = (currentPage - 1) * pageSize;

  const filterData2 = () => [
    {
      id: 1,
      ChemicalReagentName: "Chemical A",
      ChemicalReagentCode: "123ABC",
      CAS_CAT_No: "154654",
      Category: "Organic Acid",
      Minimum_Quantity: "5",
      status: "INITIATED",
    },
    {
      id: 2,
      ChemicalReagentName: "Chemical B",
      ChemicalReagentCode: "456DEF",
      CAS_CAT_No: "154654",
      Category: "Organic Acid",
      Minimum_Quantity: "5",
      status: "APPROVED",
    },
    // Add more data as needed
  ];
  const endIndex = Math.min(startIndex + pageSize, filterData2().length);
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [search, setSearch] = useState("");

  const filterData = () => {
    const data = filterData2();
    const filteredData =
      selectedStatus === "All"
        ? data
        : data.filter(
            (item) => item.status.toUpperCase() === selectedStatus.toUpperCase()
          );
    return filteredData.filter((item) =>
      item.ChemicalReagentName.toLowerCase().includes(search.toLowerCase())
    );
  };

  const filteredData = filterData();
  

  const handleDelete = (id) => {
    setData((prevData) => prevData.filter((item) => item.id !== id));
    setDeleteModal(false);
  };

  const badgeStyle = {
    background: "gray",
    color: "white",
    width: "110px",
    height: "32px",
  };
  const badgeStyle2 = {
    background: " #2A5298",
    color: "white",
    width: "110px",
    height: "32px",
  };
  const badgeStyle3 = {
    background: "green",
    color: "white",
    width: "110px",
    height: "32px",
  };
  const badgeStyle4 = {
    background: "red",
    color: "white",
    width: "110px",
    height: "32px",
  };
  const badgeStyle5 = {
    background: "orange",
    color: "white",
    width: "110px",
    height: "32px",
  };
  const badgeStyle6 = {
    background: "purple",
    color: "white",
    width: "110px",
    height: "32px",
  };
  const [addModal, setAddModal] = useState(false);

  const filterData1 = () => {
    const data = filterData2();
    if (selectedStatus === "All") {
      return data;
    }

    return data.filter((item) => item.status === selectedStatus.toUpperCase());
  };

  const downloadPDF = async () => {
    const data = filterData1().filter(
      (item) =>
        search.toLowerCase() === "" ||
        item.ChemicalReagentName.toLowerCase().includes(search.toLowerCase())
    );
    const blob = await pdf(<PDFDocument data={data} />).toBlob();
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "chemical-reagent-list.pdf";
    link.click();
  };

  return (
    <>
      <div id="approval-page" className="m-5 mt-3" style={{zIndex:"2"}}>
        <div className="container-fluid my-4 ">
          <div className="main-head mx-5">
            <div className="title fw-bold fs-5 ">Chemical / Reagent List</div>
          </div>
          <div className="d-flex gap-4 py-4 "></div>
          <div>
            <CRow className="mb-3 mx-4">
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
              
              <CCol sm={3}>
                <div className="d-flex justify-content-end">
                  <CButton color="info" onClick={downloadPDF}>
                    Print
                  </CButton>
                </div>
              </CCol>
            </CRow>
          </div>
          <div className="bg-white ">
            <CContainer className="pt-4">
              <CRow>
                <CCol>
                  <CCard className="mb-4">
                    <CRow className="g-0">
                      <CCol md={12}>
                        <CCardBody>
                          <CRow
                            className="mt-4"
                            style={{
                              border: "1px solid black",
                              padding: "10px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                              flexDirection: "row",
                              position: "relative",
                            }}
                          >
                            <CCol
                              md={2}
                              style={{
                                width: "72vw",
                                height: "190px",
                                display: "flex",
                                justifyContent: "start",
                                alignItems: "center",
                                border: "1px solid lightgray",
                              }}
                            >
                              <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZxZlrJ6FvJeaTZypzsU9l_VKJgt5GFUmHpbheI7L3MA&s"
                                alt="Logo"
                                className="img-fluid"
                                style={{ height: "150px", width: "160px" }}
                              />
                            </CCol>
                            <CCol
                              md={3}
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                position: "absolute",
                                left: "24%",
                                bottom: "10%",
                              }}
                            >
                              <h3
                                style={{
                                  color: "black",
                                  fontWeight: "bolder",
                                  position: "absolute",
                                  bottom: "290px",
                                  left: "150px",
                                  width: "500px",
                                }}
                              >
                                Chemical / Reagent Index
                              </h3>
                              <p
                                style={{
                                  color: "black",
                                  fontWeight: "500",
                                  position: "absolute",
                                  bottom: "240px",
                                  left: "150px",
                                  width: "500px",
                                }}
                              >
                                Vijay Nagar, Indore, Madhya Pradesh 452010
                              </p>
                            </CCol>
                          </CRow>
                          <CTable className="mt-5 text-center">
                            <CTableHead
                              style={{
                                backgroundColor: "blue",
                                color: "white",
                              }}
                            >
                              <CTableRow>
                                <CTableHeaderCell scope="col">
                                  S.No
                                </CTableHeaderCell>
                                <CTableHeaderCell scope="col">
                                  Chemical / Reagent Name
                                </CTableHeaderCell>
                                <CTableHeaderCell scope="col">
                                  Chemical / Reagent Unique Code
                                </CTableHeaderCell>
                                <CTableHeaderCell scope="col">
                                  CAS CAT No.
                                </CTableHeaderCell>
                                <CTableHeaderCell scope="col">
                                  Category
                                </CTableHeaderCell>
                                <CTableHeaderCell scope="col">
                                  Minimum Quantity
                                </CTableHeaderCell>
                                <CTableHeaderCell scope="col">
                                  Status
                                </CTableHeaderCell>
                                <CTableHeaderCell scope="col">
                                  Action
                                </CTableHeaderCell>
                              </CTableRow>
                            </CTableHead>
                            <CTableBody>
                              {filterData1()
                                .filter((item) =>
                                  search.toLowerCase() === ""
                                    ? true
                                    : item.ChemicalReagentName.toLowerCase().includes(
                                        search.toLowerCase()
                                      )
                                )
                                .map((item, index) => (
                                  <CTableRow key={index}>
                                    <CTableDataCell>{item.id}</CTableDataCell>
                                    <CTableDataCell>
                                      {item.ChemicalReagentName}
                                    </CTableDataCell>
                                    <CTableDataCell>
                                      {item.ChemicalReagentCode}
                                    </CTableDataCell>
                                    <CTableDataCell>
                                      {item.CAS_CAT_No}
                                    </CTableDataCell>
                                    <CTableDataCell>
                                      {item.Category}
                                    </CTableDataCell>
                                    <CTableDataCell>
                                      {item.Minimum_Quantity}
                                    </CTableDataCell>
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
                                          <FontAwesomeIcon
                                            icon={faPenToSquare}
                                          />
                                        </div>
                                        <div
                                          className="cursor-pointer"
                                          onClick={() =>
                                            setDeleteModal(item.id)
                                          }
                                        >
                                          <FontAwesomeIcon icon={faTrashCan} />
                                        </div>
                                      </div>
                                    </CTableDataCell>
                                  </CTableRow>
                                ))}
                            </CTableBody>
                          </CTable>
                        </CCardBody>
                      </CCol>
                    </CRow>
                  </CCard>
                </CCol>
              </CRow>
            </CContainer>
          </div>
        </div>
        {deleteModal && (
          <DeleteModal
            visible={deleteModal !== false}
            closeModal={() => setDeleteModal(false)}
            handleDelete={() => handleDelete(deleteModal)}
          />
        )}
      </div>
    </>
  );
}
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

export default ChemicalReagent;
