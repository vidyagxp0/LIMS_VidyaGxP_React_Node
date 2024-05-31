import { pdf } from "@react-pdf/renderer";
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
import { useState } from "react";
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
      style={{ color: "blue", fontWeight: "bold", marginBottom: "10" }}
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

function ChemicalReagentReports() {
  const [selectedStatus, setSelectedStatus] = useState("All");
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
  const [addModal, setAddModal] = useState(false);
  const [search, setSearch] = useState("");

  const filterData = () => [
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

  const filterData1 = () => {
    const data = filterData();
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
      <div id="approval-page" className="h-100 mx-2">
        <div className="container-fluid my-5">
          <div className="main-head">
            <div className="title fw-bold fs-5">Chemical / Reagent List</div>
          </div>
          <div className="d-flex gap-4 py-4"></div>
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

              <CCol sm={5}>
                <div className="d-flex justify-content-end">
                  <CButton
                    style={{ color: "white", background: "#5856D5" }}
                    onClick={downloadPDF}
                  >
                    Print
                  </CButton>
                </div>
              </CCol>
            </CRow>
          </div>
          <div className="bg-white mt-5">
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
                                style={{ height: "170px", width: "170px" }}
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
                                  bottom: "280px",
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
                                  bottom: "245px",
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
                                    <CTableDataCell>
                                      <CBadge
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
                                            : badgeStyle
                                        }
                                      >
                                        {item.status}
                                      </CBadge>
                                    </CTableDataCell>
                                    <CTableDataCell>
                                      <div className="d-flex flex-row justify-content-center gap-2">
                                        <Link to={`/Viewchemical`}>
                                          <CButton
                                            style={{
                                              backgroundColor: "black",
                                              color: "white",
                                            }}
                                          >
                                            <FontAwesomeIcon icon={faEye} />
                                          </CButton>
                                        </Link>
                                        <Link to={`/Editchemical`}>
                                          <CButton
                                            style={{
                                              backgroundColor: "blue",
                                              color: "white",
                                            }}
                                          >
                                            <FontAwesomeIcon
                                              icon={faPenToSquare}
                                            />
                                          </CButton>
                                        </Link>
                                        <CButton
                                          style={{
                                            backgroundColor: "red",
                                            color: "white",
                                          }}
                                          onClick={() =>
                                            window.confirm(
                                              "Are you sure you want to delete this item?"
                                            )
                                          }
                                        >
                                          <FontAwesomeIcon icon={faTrashCan} />
                                        </CButton>
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
      </div>
    </>
  );
}

export default ChemicalReagentReports;
