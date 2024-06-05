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
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

function ChamberConditionMapping() {
  const [addModal, setAddModal] = useState(false);
  const badgeStyle = { background: "gray", color: "white", width: "110px" };
  const badgeStyle2 = { background: " #2A5298", color: "white", width: "110px" };
  const badgeStyle3 = { background: "green", color: "white", width: "110px" };
  const badgeStyle4 = { background: "red", color: "white", width: "110px" };
  const badgeStyle5 = { background: "orange", color: "white", width: "110px" };
  const badgeStyle6 = { background: "purple", color: "white", width: "110px" };

  const [selectedStatus, setSelectedStatus] = useState("All");

  const pageSize = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("");


  const [data, setData] = useState([
    { id: 1, chamberId: "stmp1", description: "describe", condition: "65°F", status: "INITIATED", date: "05-may-2024 20:50" },
    { id: 2, chamberId: "testing", description: "Na", condition: "65°C", status: "REJECTED", date: "15-may-2024 12:50" },
    { id: 3, chamberId: "stmp5", description: "sample", condition: "65°c", status: "APPROVED", date: "20-may-2024 15:20" },
    { id: 4, chamberId: "chmb4", description: "new chamber", condition: "70°F", status: "DROPPED", date: "22-may-2024 10:00" },
    { id: 5, chamberId: "chmb5", description: "another chamber", condition: "68°F", status: "INITIATED", date: "25-may-2024 09:30" },
    { id: 6, chamberId: "chmb6", description: "test chamber", condition: "64°F", status: "APPROVED", date: "27-may-2024 14:45" },
    { id: 7, chamberId: "chmb7", description: "sample description", condition: "66°F", status: "REINITIATED", date: "28-may-2024 13:20" },
    { id: 8, chamberId: "chmb8", description: "experimental chamber", condition: "69°F", status: "APPROVED", date: "29-may-2024 11:10" },
    { id: 9, chamberId: "chmb9", description: "research chamber", condition: "72°F", status: "INITIATED", date: "30-may-2024 16:00" },
    { id: 10, chamberId: "chmb10", description: "control chamber", condition: "63°F", status: "REJECTED", date: "31-may-2024 18:30" },
  ]);

  const startIndex = (currentPage - 1) * pageSize;
  const filteredData = data.filter((item) => {
    const searchFilter =
      item.chamberId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.condition.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const statusFilterCheck =
      statusFilter === "" || item.status === statusFilter;
    return searchFilter && statusFilterCheck;
  });

  // const filteredData = selectedStatus === 'All' ? data : data.filter(item => item.status === selectedStatus);
  const endIndex = Math.min(startIndex + pageSize, filteredData.length);
  const nextPage = () => setCurrentPage(currentPage + 1);
  const prevPage = () => setCurrentPage(currentPage - 1);
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
      <div className="m-5 mt-3">
        <div className="main-head">
          <h4 className="fw-bold">Chamber Condition Mapping </h4>
        </div>
        <div>
          <CRow className="mt-5 mb-3">
          <CCol sm={4}>
              <CFormInput
                style={{fontSize:'0.9rem'}}
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1); // Reset to first page on search change
                }}
              />
            </CCol>
            <CCol sm={3}>
              <CFormSelect
                onChange={(e) => setStatusFilter(e.target.value)}
                value={statusFilter} style={{ fontSize: '0.9rem' }}
                options={[
                  
                  { label: "All", value: "" },
                  { label: "Initiated", value: "INITIATED" },
                  { label: "Approved", value: "APPROVED" },
                  { label: "Rejected", value: "REJECTED" },
                  { label: "Reinitiated", value: "REINITIATED" },
                  { label: "Dropped", value: "DROPPED" },
                ]}
              />
            </CCol>
          </CRow>
        </div>
        <div
          className="rounded bg-white"
          style={{ fontFamily: 'sans-serif', fontSize: '0.9rem', boxShadow: '5px 5px 20px #5D76A9' }}
        >          <CTable align="middle" responsive className="mb-0 rounded-lg table-responsive">
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell style={{ background: "#5D76A9", color: "white" }} scope="col" className="text-center">
                  <input type="checkbox" />
                </CTableHeaderCell>
                <CTableHeaderCell style={{ background: "#5D76A9", color: "white" }} scope="col">S NO.</CTableHeaderCell>
                <CTableHeaderCell style={{ background: "#5D76A9", color: "white" }} scope="col">Chamber ID</CTableHeaderCell>
                <CTableHeaderCell style={{ background: "#5D76A9", color: "white" }} scope="col">Description</CTableHeaderCell>
                <CTableHeaderCell style={{ background: "#5D76A9", color: "white" }} scope="col">Current Storage Conditions</CTableHeaderCell>
                <CTableHeaderCell style={{ background: "#5D76A9", color: "white" }} scope="col">Initiated On</CTableHeaderCell>
                <CTableHeaderCell style={{ background: "#5D76A9", color: "white" }} scope="col">Actions</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {filteredData.slice(startIndex, endIndex).map((item) => (
                <CTableRow key={item.id}>
                  <CTableDataCell scope="row" className="text-center">
                    <input type="checkbox" />
                  </CTableDataCell>
                  <CTableDataCell>{item.id}</CTableDataCell>
                  <CTableDataCell>{item.chamberId}</CTableDataCell>
                  <CTableDataCell>{item.description}</CTableDataCell>
                  <CTableDataCell>{item.condition}</CTableDataCell>
                  <CTableDataCell>{item.date}</CTableDataCell>
                  <CTableDataCell hidden>
                  <button  
                        className={`p-1 small w-75 rounded text-light d-flex justify-content-center align-items-center bg-${
                          item.status === "INITIATED"
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
                    <CButton className="text-white" style={{ background: "#4B49B6", fontSize: '0.6rem' }} onClick={() => setAddModal(true)}>
                      Update
                    </CButton>
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


      {addModal && (
        <StatusModal visible={addModal} closeModal={() => setAddModal(false)} />
      )}
    </>
  );
}

const StatusModal = (_props) => {
  return (
    <>
      <CModal alignment="center" visible={_props.visible} onClose={_props.closeModal}>
        <CModalHeader>
          <CModalTitle>Update Condition Mapping</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CFormInput type="text" label="Chamber ID" placeholder="Chamber Id " />
          <CFormInput type="text" label="Description" placeholder="Enter Description " />
          <CFormInput type="text" label="Current Storage Condition" placeholder=" 42°F" />
          <CFormInput type="datetime-local" label="Date" placeholder="Initiated On " />
          <CFormSelect
            type="text"
            label="Configurable Storage Condition"
            options={[
              { label: "", value: "" },
              { label: "°F", value: "°F" },
              { label: "30°C", value: "30°C" },
              { label: "42°F", value: "42°F" },
              { label: "25°C ± 2", value: "25°C ± 2" },
              { label: "32°C", value: "32°C" },
              { label: "24°F", value: "24°F" },
              { label: "25°C", value: "25°C" },
            ]}
            placeholder="Conditions "
          />
          <CFormInput type="file" label="Reference Documents (If Any)" placeholder="" />
        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={_props.closeModal}>
            Back
          </CButton>
          <CButton className="bg-info text-white">Submit</CButton>
        </CModalFooter>
      </CModal>
    </>
  );
};

export default ChamberConditionMapping;
