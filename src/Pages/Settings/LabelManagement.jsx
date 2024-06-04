import { CButton, CCol, CFormCheck, CFormInput, CFormSelect, CFormTextarea, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react";
import { faEye, faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function LabelManagement() {
  const [addModal, setAddModal] = useState(false);
  const [removeModal, setRemoveModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null)
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedStatus, setSelectedStatus] = useState('All');
  const recordsPerPage = 5;

  const badgeStyle = { background: "#cdffca" };

  const [tableData, setTableData] = useState([
    { id: 1, name: "stmp1", code: "stm", city: "ahmedabad", state: "gujarat", country: "India", zip: "54255455", status: "APPROVED" },
    { id: 2, name: "ARZ ENT", code: "ARE", city: "Hyderabad", state: "Telangana", country: "India", zip: "5253654", status: "APPROVED" },
    { id: 3, name: "test", code: "NA", city: "testing525", state: "Lab1", country: "test", zip: "25255488", status: "APPROVED" },
    { id: 4, name: "Alpha", code: "ALP", city: "Mumbai", state: "Maharashtra", country: "India", zip: "400001", status: "INITIATED" },
    { id: 5, name: "Beta", code: "BET", city: "Delhi", state: "Delhi", country: "India", zip: "110001", status: "REINITIATED" },
    { id: 6, name: "Gamma", code: "GAM", city: "Chennai", state: "Tamil Nadu", country: "India", zip: "600001", status: "REJECTED" },
    { id: 7, name: "Delta", code: "DEL", city: "Kolkata", state: "West Bengal", country: "India", zip: "700001", status: "APPROVED" },
    { id: 8, name: "Epsilon", code: "EPS", city: "Bangalore", state: "Karnataka", country: "India", zip: "560001", status: "APPROVED" },
    { id: 9, name: "Zeta", code: "ZET", city: "Pune", state: "Maharashtra", country: "India", zip: "411001", status: "INITIATED" },
    { id: 10, name: "Eta", code: "ETA", city: "Jaipur", state: "Rajasthan", country: "India", zip: "302001", status: "APPROVED" },
    { id: 11, name: "Theta", code: "THE", city: "Lucknow", state: "Uttar Pradesh", country: "India", zip: "226001", status: "REJECTED" },
    { id: 12, name: "Iota", code: "IOT", city: "Chandigarh", state: "Punjab", country: "India", zip: "160001", status: "APPROVED" },
    { id: 13, name: "Kappa", code: "KAP", city: "Bhopal", state: "Madhya Pradesh", country: "India", zip: "462001", status: "REINITIATED" },
  ]);

  const handleStatusChange = (e) => {
    setSelectedStatus(e.target.value);
    setCurrentPage(1);
  };

  const handleChartClick = (status) => {
    setSelectedStatus(status);
    setCurrentPage(1);
  };

  const handleDelete = () => {
    setTableData((prevData) => prevData.filter((item) => item.id !== deleteId));
    setRemoveModal(false);
    setDeleteId(null)
  }

  const handleDeleteClick = (id) => {
    setDeleteId(id);
    setRemoveModal(true);
  }


  const filteredData = selectedStatus === 'All' ? tableData : tableData.filter(data => data.status === selectedStatus);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = filteredData.slice(indexOfFirstRecord, indexOfLastRecord);
  const totalPages = Math.ceil(filteredData.length / recordsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div id="approval-page" className="h-100 mx-5">
        <div className="container-fluid my-5">
          <div className="main-head">
            <div className="title fw-bold fs-5">Label Management</div>
          </div>
          <div className="d-flex gap-4">
            <div className="chart-widgets w-100">
              <div className="row">
                <div className="col shadow p-3 m-3 rounded cursor-pointer" style={{ background: "linear-gradient(25deg, #0250c5 0%, #d43f8d 100%)" }} onClick={() => handleChartClick('DROPPED')}>
                  <div className="text-light fs-5">DROPPED</div>
                  <div className="count fs-1 text-light fw-bolder">{tableData.filter(data => data.status === 'DROPPED').length}</div>
                </div>
                <div className="col shadow p-3 m-3 rounded cursor-pointer" style={{ background: "linear-gradient(25deg, #13517a 6% , #2A5298 50%)" }} onClick={() => handleChartClick('INITIATED')}>
                  <div className="text-light fs-5">INITIATED</div>
                  <div className="count fs-1 text-light fw-bolder">{tableData.filter(data => data.status === 'INITIATED').length}</div>
                </div>
                <div className="col shadow p-3 m-3 rounded cursor-pointer" style={{ background: "linear-gradient(25deg, orange , #f7e05f )" }} onClick={() => handleChartClick('REINITIATED')}>
                  <div className="text-light fs-5">REINITIATED</div>
                  <div className="count fs-1 text-light fw-bolder">{tableData.filter(data => data.status === 'REINITIATED').length}</div>
                </div>
                <div className="col shadow p-3 m-3 rounded cursor-pointer" style={{ background: "linear-gradient(27deg, green , #0fd850  )" }} onClick={() => handleChartClick('APPROVED')}>
                  <div className="text-light fs-5">APPROVED</div>
                  <div className="count fs-1 text-light fw-bolder">{tableData.filter(data => data.status === 'APPROVED').length}</div>
                </div>
                <div className="col shadow p-3 m-3 rounded cursor-pointer" style={{ background: "linear-gradient(27deg ,red, #FF719A)" }} onClick={() => handleChartClick('REJECTED')}>
                  <div className="text-light fs-5">REJECTED</div>
                  <div className="count fs-1 text-light fw-bolder">{tableData.filter(data => data.status === 'REJECTED').length}</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <CRow className="mb-3">
              <CCol sm={3}>
                <CFormSelect
                  value={selectedStatus}
                  style={{fontSize:'0.9rem'}}
                  onChange={handleStatusChange}
                  options={[
                    { value: 'All', label: 'All' },
                    { value: 'INITIATED', label: 'Initiated' },
                    { value: 'APPROVED', label: 'Approved' },
                    { value: 'REJECTED', label: 'Rejected' },
                    { value: 'REINITIATED', label: 'Reinitiated' },
                    { value: 'DROPPED', label: 'Dropped' }
                  ]}
                />
              </CCol>
              <CCol sm={6}></CCol>
              <CCol sm={3}>
                <div className="d-flex justify-content-end">
                  <CButton className="bg-info text-white" onClick={() => setAddModal(true)}> Add Label</CButton>
                </div>
              </CCol>
            </CRow>
          </div>
          <div className="bg-white mt-5 shadow rounded border-dark-subtle border-2">
            <CTable align="middle" responsive className="table-responsive   ">
              <CTableHead className="table-dark" >
                <CTableRow >
                  <CTableHeaderCell style={{ background: "#5D76A9", color: "white"}} scope="col" className="text-center"><input type="checkbox" /></CTableHeaderCell>
                  <CTableHeaderCell style={{ background: "#5D76A9", color: "white"}} scope="col ">S NO.</CTableHeaderCell>
                  <CTableHeaderCell
                  style={{ background: "#5D76A9", color: "white"}}
                  scope="col"
                >Label Name</CTableHeaderCell>
                  <CTableHeaderCell
                  style={{ background: "#5D76A9", color: "white"}}
                  scope="col"
                >Unique Code</CTableHeaderCell>
                  <CTableHeaderCell
                  style={{ background: "#5D76A9", color: "white"}}
                  scope="col"
                >City</CTableHeaderCell>
                  <CTableHeaderCell
                  style={{ background: "#5D76A9", color: "white"}}
                  scope="col"
                >State</CTableHeaderCell>
                  <CTableHeaderCell
                  style={{ background: "#5D76A9", color: "white"}}
                  scope="col"
                >Country</CTableHeaderCell>
                  <CTableHeaderCell
                  style={{ background: "#5D76A9", color: "white"}}
                  scope="col"
                >ZIP code</CTableHeaderCell>
                  <CTableHeaderCell
                  style={{ background: "#5D76A9", color: "white"}}
                  scope="col"
                >Status</CTableHeaderCell>
                  <CTableHeaderCell
                  style={{ background: "#5D76A9", color: "white"}}
                  scope="col"
                >Actions</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {currentRecords.map((data, index) => (
                  <CTableRow key={data.id}>
                    <CTableHeaderCell scope="row" className="text-center">
                      <input type="checkbox" />
                    </CTableHeaderCell>
                    <CTableDataCell>{indexOfFirstRecord + index + 1}</CTableDataCell>
                    <CTableDataCell>{data.name}</CTableDataCell>
                    <CTableDataCell>{data.code}</CTableDataCell>
                    <CTableDataCell>{data.city}</CTableDataCell>
                    <CTableDataCell>{data.state}</CTableDataCell>
                    <CTableDataCell>{data.country}</CTableDataCell>
                    <CTableDataCell>{data.zip}</CTableDataCell>
                    <CTableDataCell>
                      <div className=" w-75">
                        <div className={`p-2 small rounded fw-bold text-light d-flex justify-content-center align-items-center bg-${data.status === 'INITIATED' ? 'blue-700'
                          : data.status === "APPROVED"
                            ? 'green-700'
                            : data.status === "REJECTED"
                              ? 'red-700'
                              : data.status === "REINITIATED"
                                ? 'yellow-500'
                                : data.status === "DROPPED"
                                  ? 'purple-700'
                                  : 'white'}`} >{data.status}</div>
                      </div>
                    </CTableDataCell>
                    <CTableDataCell>
                      <div className="d-flex gap-3">
                        <Link to="/settings/bussinessAssociateDetails"><FontAwesomeIcon icon={faEye} /></Link>
                        <div className="cursor-pointer" onClick={() => handleDeleteClick(data.id)}><FontAwesomeIcon icon={faTrashCan} /></div>
                      </div>
                    </CTableDataCell>
                  </CTableRow>
                ))}
              </CTableBody>
            </CTable>
          </div>
          <div className="pagination my-3 d-flex justify-content-between">
            <div className="d-flex gap-2">
              <button className="btn mr-2" onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>&lt; &lt;</button>
              <button className="btn mr-2 bg-dark-subtle">{currentPage}</button>
              <button className="btn mr-2" onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages}>&gt; &gt;</button>
            </div>
            <div className="">
              <button className="d-flex btn btn-next ml-2 gap-2" onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages}> Next <FaArrowRight className="mt-1" /></button>
            </div>
          </div>
        </div>
      </div>

      {addModal && <StatusModal visible={addModal} closeModal={() => setAddModal(false)} />}
      {removeModal && <DeleteModel visible={removeModal} closeModal={() => setRemoveModal(false)} handleDelete={handleDelete} />}

    </>
  );
}

const StatusModal = (_props) => {
  return (
    <CModal alignment="center" visible={_props.visible} onClose={_props.closeModal}>
      <CModalHeader>
        <CModalTitle>Add Label</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <p>Add information and add new Label</p>
        <CFormInput
          className="mb-3"
          type="text"
          label={
            <>
              Label <span style={{ color: 'red' }}>*</span>
            </>
          }
          placeholder="Enter Label"
        />
        <CFormTextarea
          className="mb-3"
          type="text"
          label={
            <>
              Address <span style={{ color: 'red' }}>*</span>
            </>
          }
          placeholder="  "
        />
        <CFormInput
          className="mb-3"
          type="text"
          label={
            <>
              logo <span style={{ color: 'red' }}>*</span>
            </>
          }
          placeholder="logo"
        />
        <label className="mb-2">UM <span style={{ color: 'red' }}>*</span></label>
        <CFormCheck
          className="mb-3"
          type="radio"
          id="UMCM"
          name="UM"
          label="CM"
        />
        <CFormCheck
          className="mb-3"
          type="radio"
          id="UMMM"
          name="UM"
          label="MM"
        />
      </CModalBody>
      <CModalFooter>
        <CButton color="light" onClick={_props.closeModal}>Back</CButton>
        <CButton className="bg-info text-white">Submit</CButton>
      </CModalFooter>
    </CModal>

  );
}

const DeleteModel = (_props) => {
  return (
    <CModal alignment="center" visible={_props.visible} onClose={_props.closeModal}>
      <CModalHeader>
        <CModalTitle>Delete Label</CModalTitle>
      </CModalHeader>
      <CModalBody>
        Do you want to delete this Label <code>ARZ ENT</code>?
      </CModalBody>
      <CModalFooter>
        <CButton color="light" onClick={_props.closeModal}>Back</CButton>
        <CButton className="bg-danger text-white" onClick={_props.handleDelete}>Delete</CButton>
      </CModalFooter>
    </CModal>
  );
}

export default LabelManagement;