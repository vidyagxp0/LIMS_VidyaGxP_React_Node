import { pdf } from "@react-pdf/renderer";
import ReactPDF from "@react-pdf/renderer";
import {
  CButton,
  CCol,
  // CFormInput,
  CFormSelect,
  CModal,
  CCardBody,
  CFormInput,
  CCard,
  CModalBody,
  CModalFooter,
  CContainer,
  CModalHeader,
  CModalTitle,
  CRow,
} from "@coreui/react";
import { useState } from "react";
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
        style={{ width: 50, height: 50 }}
      />
      <ReactPDF.Text>Vijay Nagar, Indore, Madhya Pradesh 452010</ReactPDF.Text>
    </ReactPDF.View>
    <ReactPDF.Text style={{ color: "blue", fontWeight: "bold", marginTop: 10 }}>
      Chemical/Reagent Index
    </ReactPDF.Text>
  </ReactPDF.View>
);

function ChemicalReagent() {
  const [addModal, setAddModal] = useState(false);

  const PDFDocument = () => (
    <ReactPDF.Document>
      <ReactPDF.Page size="A4" style={{ padding: 20 }}>
        <Header />
        <ReactPDF.View style={{ marginTop: 20 }}>
          <ReactPDF.Text>No Chemicals Found</ReactPDF.Text>
          <ReactPDF.Text style={{ marginTop: 20 }}>
            Printed By: Admin
          </ReactPDF.Text>
          <ReactPDF.Text>Printed On: 20/05/2024 10:26</ReactPDF.Text>
        </ReactPDF.View>
      </ReactPDF.Page>
    </ReactPDF.Document>
  );

  const downloadPDF = async () => {
    const blob = await pdf(<PDFDocument />).toBlob();
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "chemical-reagent-list.pdf";
    link.click();
  };

  return (
    <>
      <div id="approval-page" className="h-100 mx-5">
        <div className="container-fluid my-5">
          <div className="main-head">
            <div className="title fw-bold fs-5">Chemical / Reagent List</div>
          </div>
          <div className="d-flex gap-4">
            <div className="chart-widgets w-100">
              <div className="">
                <div className="row">
                  <div
                    className="col shadow p-3 m-3 rounded"
                    style={{ background: "linear-gradient(#0d6efd, #9ec5fe)" }}
                  >
                    <div className="text-light fs-5">INITIATED</div>
                    <div className="count fs-1 text-light fw-bolder">2</div>
                  </div>
                  <div
                    className="col shadow p-3 m-3 rounded"
                    style={{ background: "linear-gradient(#d63384, #9ec5fe)" }}
                  >
                    <div className="text-light fs-5">REINITIATED</div>
                    <div className="count fs-1 text-light fw-bolder">0</div>
                  </div>
                  <div
                    className="col shadow p-3 m-3 rounded"
                    style={{ background: "linear-gradient(#ffc107, #9ec5fe)" }}
                  >
                    <div className="text-light fs-5">APPROVED</div>
                    <div className="count fs-1 text-light fw-bolder">1</div>
                  </div>
                  <div
                    className="col shadow p-3 m-3 rounded"
                    style={{ background: "linear-gradient(#dc3545, #9ec5fe)" }}
                  >
                    <div className="text-light fs-5">REJECTED</div>
                    <div className="count fs-1 text-light fw-bolder">0</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <CRow className="mb-3">
              <CCol sm={4}>
                <CFormInput type="email" placeholder="Search..." />
              </CCol>
              <CCol sm={3}>
                <CFormSelect
                  options={[
                    { label: "All" },
                    { label: "Initiated" },
                    { label: "Approved" },
                    { label: "Rejected" },
                    { label: "Reinitiated" },
                    { label: "Dropped" },
                  ]}
                />
              </CCol>
              <CCol sm={2}></CCol>
              <CCol sm={3}>
                <div className="d-flex justify-content-end">
                  <CButton color="info" onClick={downloadPDF}>
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
                                style={{
                                  width: "150px",
                                  height: "150px",
                                  border: "1px solid lightgray",
                                  position: "relative",
                                }}
                              />
                            </CCol>

                            <CCol
                              md={10}
                              style={{
                                display: "flex",
                                alignItems: "center",
                                paddingLeft: "10px",
                                position: "absolute",
                                left: "500px",
                                top: "110px",
                              }}
                            >
                              <center>
                                <p>
                                  Vijay Nagar, Indore,
                                  <br /> Madhya Pradesh 452010
                                </p>
                              </center>
                            </CCol>
                          </CRow>

                          <CRow className="mt-4">
                            <CCol
                              md={12}
                              style={{
                                textAlign: "center",
                                color: "Blue",
                                fontWeight: "bolder",
                              }}
                            >
                              <h5>Chemical/Reagent Index</h5>
                              <p>No Chemicals Found</p>
                            </CCol>
                          </CRow>
                          <CRow className="mt-4">
                            <CCol md={6}>
                              <p>Printed By:Admin</p>
                            </CCol>
                            <CCol md={6} className="text-end">
                              <p>Printed On:20/05/2024 10:26</p>
                            </CCol>
                          </CRow>
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

      {addModal && (
        <StatusModal visible={addModal} closeModal={() => setAddModal(false)} />
      )}
    </>
  );
}

const StatusModal = (props) => {
  return (
    <>
      <CModal
        alignment="center"
        visible={props.visible}
        onClose={props.closeModal}
      >
        <CModalHeader>
          <CModalTitle>Add Chemicals</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p style={{ fontWeight: "bolder" }}>Registration Initiation</p>
          <CFormInput
            type="text"
            label="Preparation No."
            placeholder="Preparation No."
          />
          <CFormInput type="text" label="Name" placeholder="Name" />
          <CFormInput
            type="text"
            label="Unique Code"
            placeholder="Unique Code"
          />
          <CFormInput
            type="text"
            label="CAS / CAT no."
            placeholder="Enter CAS"
          />
          <CFormInput type="text" label="Category" placeholder="Select" />
          <CFormInput type="number" label="Grade" placeholder="Grade" />
          <CFormInput
            type="number"
            label="Handling Symbol"
            placeholder="Select..."
          />
          <CFormInput
            type="number"
            label="Storage Conditions"
            placeholder="Select"
          />
          <CFormInput type="number" label="Lot UOM" placeholder="Select" />
          <CFormInput type="number" label="Usage UOM" placeholder="Select" />
          <CFormInput
            type="number"
            label="Issues Display Order For Usage"
            placeholder="Select"
          />
          <p style={{ fontWeight: "bolder" }}>Inventory Control</p>
          <CFormInput type="number" label="Minimum Qty." placeholder="Select" />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
            }}
          >
            <label>Comments</label>
            <textarea name="" id=""></textarea>
          </div>
        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={props.closeModal}>
            Cancel
          </CButton>
          <CButton style={{ background: "#0F93C3", color: "white" }}>
            Add Chemical
          </CButton>
        </CModalFooter>
      </CModal>
    </>
  );
};

export default ChemicalReagent;
