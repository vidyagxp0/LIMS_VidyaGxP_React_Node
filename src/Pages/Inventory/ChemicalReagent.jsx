import { useState } from "react";
import { Page, Text, Image, View, Document, StyleSheet } from '@react-pdf/renderer';
import { PDFDownloadLink } from '@react-pdf/renderer';
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

  const styles = StyleSheet.create({
    page: {
      padding: 30,
    },
    head: {
      margin: '0 auto',
      alignItems: 'center',
      borderBottom: '2px solid black',
      paddingBottom: 5,
      width: '100%',
      fontSize: 20
    },
    container: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20,
      marginBottom: 10,
    },
    section: {
      margin: 10,
      padding: 10,
      fontSize: 12,
    },
    title: {
      display: 'flex',
      flexDirection: 'column',
    },
    subTitle: {
      fontSize: '12px',
      fontWeight: '200',
      color: 'gray'
    },
    image: {
      width: 150,
      height: 150,
    },
    table: {
      display: "table",
      width: "auto",
      borderStyle: "solid",
      borderWidth: 1,
      borderColor: '#bfbfbf',
      borderRightWidth: 0,
      borderBottomWidth: 0,
      marginBottom: 20,
    },
    tableRow: {
      margin: "auto",
      flexDirection: "row"
    },
    tableColHeader: {
      width: "25%",
      borderStyle: "solid",
      borderWidth: 1,
      borderColor: '#bfbfbf',
      borderLeftWidth: 0,
      borderTopWidth: 0,
      backgroundColor: "#5D76A9",
      color: "white"
    },
    tableCol: {
      width: "25%",
      borderStyle: "solid",
      borderWidth: 1,
      borderColor: '#bfbfbf',
      borderLeftWidth: 0,
      borderTopWidth: 0,
    },
    tableCellHeader: {
      margin: 5,
      fontSize: 10,
      fontWeight: 'bold',
    },
    tableCell: {
      margin: 5,
      fontSize: 10,
    },
    footer: {
      position: "absolute",
      bottom: '0px',
      display: 'flex',
      flexDirection: 'row',
      margin: 'auto 30px 30px',
      justifyContent: 'space-between',
      fontSize: '12px',
      color: 'gray',
      width: '100%'
    }
  });

  const PdfDocument = () => (
    <Document>
      <Page style={styles.page}>
        <View style={styles.head}>
          <Text>Chemical / Reagent List</Text>
        </View>
        <View style={styles.container}>
          <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZxZlrJ6FvJeaTZypzsU9l_VKJgt5GFUmHpbheI7L3MA&s" alt="logo" style={styles.image} />
          <View style={styles.title}>
            <Text>Chemical / Reagent Index</Text> <Text style={styles.subTitle}>Vijay Nagar, Indore, Madhya Pradesh 452010</Text>
          </View>
        </View>

        <View style={styles.table}>
          <View style={styles.tableRow}>
            <View style={styles.tableColHeader}>
              <Text style={styles.tableCellHeader}>S.No </Text>
            </View>
            <View style={styles.tableColHeader}>
              <Text style={styles.tableCellHeader}>Chemical / Reagent Name</Text>
            </View>
            <View style={styles.tableColHeader}>
              <Text style={styles.tableCellHeader}>Reagent Unique Code</Text>
            </View>
            <View style={styles.tableColHeader}>
              <Text style={styles.tableCellHeader}>Status</Text>
            </View>
          </View>
          {
            filteredData.map((data, index) => {
              return (
                <View style={styles.tableRow}>
                  <View style={styles.tableCol}>
                    <Text style={styles.tableCell}>{index + 1}</Text>
                  </View>
                  <View style={styles.tableCol}>
                    <Text style={styles.tableCell}>{data.ChemicalReagentName}</Text>
                  </View>
                  <View style={styles.tableCol}>
                    <Text style={styles.tableCell}>{data.ChemicalReagentCode}	</Text>
                  </View>
                  <View style={styles.tableCol}>
                    <Text style={styles.tableCell}>{data.status}</Text>
                  </View>
                </View>
              );
            })
          }
        </View>
        <View style={styles.footer}>
          <View>
            <Text>Printed By: Admin</Text>
          </View>
          <View>
            <Text>Printed On: 10/06/2024 02:12 PM</Text>
          </View>
        </View>
      </Page>
    </Document>
  );

  return (
    <>
      <div id="approval-page" className="m-5 mt-3" style={{ zIndex: "2" }}>
        <div className="container-fluid my-4 ">
          <div className="main-head">
            <div className="title fw-bold fs-5 ">Chemical / Reagent List</div>
          </div>
          <div className="d-flex gap-4 py-4 "></div>
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
                  <PDFDownloadLink document={<PdfDocument />} fileName="Chemical / Reagent Index.pdf" className="btn btn-info text-light mx-2">
                    Print
                  </PDFDownloadLink>
                </div>
              </CCol>
            </CRow>
          </div>
          <div className="bg-white">
            <div className="container p-4">
              <div className="">
                <div className="mt-4 border d-flex flex-row justify-content-between">
                  <div
                    style={{
                      borderRight: '1px solid gray',
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZxZlrJ6FvJeaTZypzsU9l_VKJgt5GFUmHpbheI7L3MA&s"
                      alt="Logo"
                      className="img-fluid"
                      style={{ height: "200px", width: "300px" }}
                    />
                  </div>
                  <div className="d-flex flex-column justify-content-center align-items-center" style={{ marginRight: '300px' }}>
                    <h3 className="fw-bolder">
                      Chemical / Reagent Index
                    </h3>
                    <p>
                      Vijay Nagar, Indore, Madhya Pradesh 452010
                    </p>
                  </div>
                </div>
                <CTable className="mt-5 text-center" style={{ fontFamily: 'sans-serif', fontSize: '0.9rem', boxShadow: '5px 5px 20px #5D76A9' }}>
                  <CTableHead
                    style={{
                      backgroundColor: "blue",
                      color: "white",
                    }}
                  >
                    <CTableRow>
                      <CTableHeaderCell style={{ background: "#5D76A9", color: "white" }} scope="col">
                        S.No
                      </CTableHeaderCell>
                      <CTableHeaderCell style={{ background: "#5D76A9", color: "white" }} scope="col">
                        Chemical / Reagent Name
                      </CTableHeaderCell>
                      <CTableHeaderCell style={{ background: "#5D76A9", color: "white" }} scope="col">
                        Chemical / Reagent Unique Code
                      </CTableHeaderCell>
                      <CTableHeaderCell style={{ background: "#5D76A9", color: "white" }} scope="col">
                        CAS CAT No.
                      </CTableHeaderCell>
                      <CTableHeaderCell style={{ background: "#5D76A9", color: "white" }} scope="col">
                        Category
                      </CTableHeaderCell>
                      <CTableHeaderCell style={{ background: "#5D76A9", color: "white" }} scope="col">
                        Minimum Quantity
                      </CTableHeaderCell>
                      <CTableHeaderCell style={{ background: "#5D76A9", color: "white" }} scope="col">
                        Status
                      </CTableHeaderCell>
                      <CTableHeaderCell style={{ background: "#5D76A9", color: "white" }} scope="col">
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
              </div>
            </div>
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
