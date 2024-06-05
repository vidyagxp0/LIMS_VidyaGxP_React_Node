import {
  CButton, CCol, CFooter, CFormInput, CFormSelect, CHeader, CModal,
  CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow, CTable,
  CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow
} from "@coreui/react";
import { faEye, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";

function WorkSheetHeader() {
  const pageSize = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [addModal, setAddModal] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState("All");

  const [data, setData] = useState([
    { id: 1, sampleType: "Micro Media", worksheetType: "With Specification", product: "testing", reportTitle: "testing001", status: "APPROVED" },
    { id: 2, sampleType: "water type", worksheetType: "without-specification", product: "pm01", reportTitle: "R123", status: "APPROVED" },
    { id: 3, sampleType: "HCL", worksheetType: "With Specification", product: "chemical1", reportTitle: "C101", status: "REINITIATED" },
    { id: 4, sampleType: "Petrochemical", worksheetType: "ERP", product: "petro1", reportTitle: "P101", status: "INITIATED" },
    { id: 5, sampleType: "Initial Product", worksheetType: "Without Specification", product: "init1", reportTitle: "I101", status: "REJECTED" },
    { id: 6, sampleType: "Micro Media", worksheetType: "With Specification", product: "testing2", reportTitle: "T202", status: "APPROVED" },
    { id: 7, sampleType: "water type", worksheetType: "ERP", product: "water1", reportTitle: "W101", status: "INITIATED" },
    { id: 8, sampleType: "HCL", worksheetType: "Without Specification", product: "chemical2", reportTitle: "C202", status: "REINITIATED" },
    { id: 9, sampleType: "Petrochemical", worksheetType: "With Specification", product: "petro2", reportTitle: "P202", status: "APPROVED" },
    { id: 10, sampleType: "Initial Product", worksheetType: "ERP", product: "init2", reportTitle: "I202", status: "APPROVED" }
  ]);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, data.length);
  const [search, setSearch] = useState("");

  const nextPage = () => setCurrentPage(currentPage + 1);
  const prevPage = () => setCurrentPage(currentPage - 1);

  const filterData = () => {
    const filteredData =
      selectedStatus === "All"
        ? data
        : data.filter(
          (item) => item.status.toUpperCase() === selectedStatus.toUpperCase()
        );
    return filteredData.filter((item) =>
      item.sampleType.toLowerCase().includes(search.toLowerCase()) ||
      item.worksheetType.toLowerCase().includes(search.toLowerCase()) ||
      item.product.toLowerCase().includes(search.toLowerCase()) ||
      item.reportTitle.toLowerCase().includes(search.toLowerCase())
    );
  };

  return (
    <>
      <div className="m-5 mt-3">
        <div className="main-head">
          <h4 className="fw-bold"> Stability WorkSheet Header</h4>
        </div>
        <div className="mt-5 d-flex gap-4">
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
                  <div className="text-light font-bold fs-5">APPROVED</div>
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
                style={{ fontSize: '0.9rem' }}
                type="text"
                placeholder="Search..."
                onChange={(e) => setSearch(e.target.value)}
              />
            </CCol>
            <CCol sm={3}>
              <CFormSelect
                onChange={(e) => setSelectedStatus(e.target.value)}
                value={selectedStatus}
                style={{ fontSize: '0.9rem' }}
                options={[
                  { value: "All", label: "All" },
                  { value: "INITIATED", label: "Initiated" },
                  { value: "APPROVED", label: "Approved" },
                  { value: "REJECTED", label: "Rejected" },
                  { value: "REINITIATED", label: "Reinitiated" },
                  { value: "DROPPED", label: "Dropped" },
                ]}
              />
            </CCol>
            <CCol sm={2}></CCol>
            <CCol sm={3}>
              <div className="d-flex justify-content-end">
                <CButton
                  className=" text-white"
                  style={{ background: "#4B49B6", fontSize: '0.9rem' }}
                  onClick={() => setAddModal(true)}
                >
                  Add Worksheet</CButton>
              </div>
            </CCol>
          </CRow>
        </div>
        <div
          className=" rounded bg-white"
          style={{ fontFamily: 'sans-serif', fontSize: '0.9rem', boxShadow: '5px 5px 20px #5D76A9' }}
        >          <CTable align="middle" responsive className="mb-0 rounded-lg table-responsive">
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell style={{ background: "#5D76A9", color: "white" }} scope="col" className="text-center"><input type="checkbox" /></CTableHeaderCell>
                <CTableHeaderCell style={{ background: "#5D76A9", color: "white" }} scope="col">S NO.</CTableHeaderCell>
                <CTableHeaderCell style={{ background: "#5D76A9", color: "white" }} scope="col">Sample Type</CTableHeaderCell>
                <CTableHeaderCell style={{ background: "#5D76A9", color: "white" }} scope="col">Worksheet Type</CTableHeaderCell>
                <CTableHeaderCell style={{ background: "#5D76A9", color: "white" }} scope="col">Product</CTableHeaderCell>
                <CTableHeaderCell style={{ background: "#5D76A9", color: "white" }} scope="col">Report Title</CTableHeaderCell>
                <CTableHeaderCell style={{ background: "#5D76A9", color: "white" }} scope="col">Status</CTableHeaderCell>
                <CTableHeaderCell style={{ background: "#5D76A9", color: "white" }} scope="col">Actions</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {filterData().slice(startIndex, endIndex)
                .filter((item) => {
                  return search.toLowerCase() === ""
                    ? item
                    : item.sampleType.toLowerCase().includes(search.toLowerCase()) ||
                    item.worksheetType.toLowerCase().includes(search.toLowerCase()) ||
                    item.product.toLowerCase().includes(search.toLowerCase()) ||
                    item.reportTitle.toLowerCase().includes(search.toLowerCase())
                })
                .map((item, index) => (
                  <CTableRow key={index}>
                    <CTableHeaderCell scope="row" className="text-center">
                      <input type="checkbox" />
                    </CTableHeaderCell>
                    <CTableDataCell>{startIndex + index + 1}</CTableDataCell>
                    <CTableDataCell key={item.id}>{item.sampleType}</CTableDataCell>
                    <CTableDataCell>{item.worksheetType}</CTableDataCell>
                    <CTableDataCell>{item.product}</CTableDataCell>
                    <CTableDataCell>{item.reportTitle}</CTableDataCell>
                    <CTableDataCell>
                      <button
                        className={`py-1 px-3 small w-75 rounded text-light d-flex justify-content-center align-items-center bg-${item.status === "INITIATED"
                          ? "blue-700"
                          : item.status === "APPROVED"
                            ? "green-700"
                            : item.status === "REJECTED"
                              ? "red-700"
                              : item.status === "REINITIATED"
                                ? "yellow-500"
                                : item.status === "DROPPED"
                                  ? "purple-700"
                                  : "white"
                          }`} style={{ fontSize: '0.6rem' }}
                      >
                        {item.status}
                      </button>
                    </CTableDataCell>
                    <CTableDataCell>
                      <div className="d-flex gap-3">
                        <Link to="/stability/worksheetHeaderDetails"><FontAwesomeIcon icon={faEye} /></Link>
                      </div>
                    </CTableDataCell>
                  </CTableRow>
                ))}
            </CTableBody>
          </CTable>
        </div>
        <div className="d-flex justify-content-end align-items-center mt-4">
          <div className="pagination">
            <button style={{ background: "#21516a", color: "white" }} className="btn mr-2" onClick={prevPage} disabled={currentPage === 1}>
              &lt;&lt;
            </button>
            <button className="btn mr-2 bg-dark-subtle rounded-circle">{currentPage}</button>
            <button style={{ background: "#21516a", color: "white" }} className="btn mr-2" onClick={nextPage} disabled={endIndex >= data.length}>
              &gt;&gt;
            </button>
          </div>
        </div>
      </div>

      {addModal && <StatusModal visible={addModal} closeModal={() => setAddModal(false)} />}
    </>
  );
}

const StatusModal = (_props) => {
  return (
    <CModal alignment="center" visible={_props.visible} onClose={_props.closeModal}>
      <CModalHeader>
        <CModalTitle>Add Worksheet Header</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CFormSelect
          className="mb-3"
          type="select"
          label="Sample Type"
          placeholder="Select..."
          options={[
            "Select...",
            { label: "HCL" },
            { label: "Hydrochrolic Acid" },
            { label: "Petrochemical" },
            { label: "Initial Product" }
          ]}
        />
        <CFormSelect
          className="mb-3"
          type="select"
          label="Worksheet Type"
          placeholder="Select Worksheet Type"
          options={[
            "Select Coa Type",
            { label: "With Specification" },
            { label: "Without Specification" },
            { label: "ERP" }
          ]}
        />
        <CFormInput
          className="mb-3"
          type="text"
          label="Unique Code"
          placeholder="Unique Code"
          disabled
        />
        <CFormInput
          className="mb-3"
          type="text"
          label="Report Title"
          placeholder="Report Title"
        />
        <CFormInput
          className="mb-3"
          type="text"
          label="Product/Material Caption"
          placeholder="Product"
        />
        <CFormInput
          className="mb-3"
          type="text"
          label="Format No."
          placeholder="Format No."
        />
        <CHeader className="bg-light text-dark">Header</CHeader>
        <CFormInput
          className="mb-3"
          type="text"
          label="Rows"
          placeholder="Rows"
        />
        <CFormSelect
          className="mb-3"
          type="select"
          label="Columns"
          placeholder="Columns"
          options={[
            "Columns",
            { label: "2" },
            { label: "4" },
            { label: "6" }
          ]}
        />
        <CFooter className="bg-light text-dark">Footer</CFooter>
        <CFormInput
          className="mb-3"
          type="text"
          label="Rows"
          placeholder="Rows"
        />
        <CFormSelect
          className="mb-3"
          type="select"
          label="Columns"
          placeholder="Columns"
          options={[
            "Columns",
            { label: "2" },
            { label: "4" },
            { label: "6" }
          ]}
        />
      </CModalBody>
      <CModalFooter>
        <CButton color="light" onClick={_props.closeModal}>Back</CButton>
        <CButton color="primary">Submit</CButton>
      </CModalFooter>
    </CModal>
  );
};



export default WorkSheetHeader;
