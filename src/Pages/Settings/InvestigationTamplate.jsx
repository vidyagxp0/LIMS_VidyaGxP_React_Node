import { CButton, CCol, CFormCheck, CFormInput, CFormSelect, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react";
import { faEye, faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function InvestigationTamplate() {
  const [addModal, setAddModal] = useState(false);
  const [removeModal, setRemoveModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedStatus, setSelectedStatus] = useState('All');
  const recordsPerPage = 5;

  const badgeStyle = { background: "#cdffca" };

  const tableData = [
    { id: 1, name: "Template1", code: "temp1", noOfAnalystSection: 1, noOfSupervisorSection: 1, updatedAt: "Sep 29th 23 16:19", status: "APPROVED" },
    { id: 2, name: "Template2", code: "temp2", noOfAnalystSection: 2, noOfSupervisorSection: 1, updatedAt: "Oct 1st 23 10:15", status: "INITIATED" },
    { id: 3, name: "Template3", code: "temp3", noOfAnalystSection: 3, noOfSupervisorSection: 2, updatedAt: "Oct 5th 23 09:45", status: "REJECTED" },
    { id: 4, name: "Template4", code: "temp4", noOfAnalystSection: 1, noOfSupervisorSection: 2, updatedAt: "Nov 11th 23 14:30", status: "REINITIATED" },
    { id: 5, name: "Template5", code: "temp5", noOfAnalystSection: 2, noOfSupervisorSection: 1, updatedAt: "Nov 15th 23 12:00", status: "APPROVED" },
    { id: 6, name: "Template6", code: "temp6", noOfAnalystSection: 1, noOfSupervisorSection: 1, updatedAt: "Nov 20th 23 13:50", status: "APPROVED" },
    { id: 7, name: "Template7", code: "temp7", noOfAnalystSection: 3, noOfSupervisorSection: 2, updatedAt: "Nov 25th 23 16:30", status: "INITIATED" },
    { id: 8, name: "Template8", code: "temp8", noOfAnalystSection: 2, noOfSupervisorSection: 1, updatedAt: "Dec 1st 23 10:10", status: "APPROVED" },
    { id: 9, name: "Template9", code: "temp9", noOfAnalystSection: 1, noOfSupervisorSection: 2, updatedAt: "Dec 3rd 23 14:00", status: "REJECTED" },
    { id: 10, name: "Template10", code: "temp10", noOfAnalystSection: 3, noOfSupervisorSection: 1, updatedAt: "Dec 5th 23 09:20", status: "REINITIATED" },
  ];


  const handleStatusChange = (e) => {
    setSelectedStatus(e.target.value);
    setCurrentPage(1);
  };

  const handleChartClick = (status) => {
    setSelectedStatus(status);
    setCurrentPage(1);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const filteredData = tableData.filter((data) => {
    const matchesStatus = selectedStatus === "All" || data.status === selectedStatus;
    const matchesSearchQuery = data.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      data.code.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearchQuery;
  });

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
            <div className="title fw-bold fs-5">Investigation Template</div>
          </div>
          <div className="d-flex gap-4">
            <div className="chart-widgets w-100">
              <div className="">
                <div className="row">
                  <div className="col shadow p-3 m-3 rounded cursor-pointer" style={{ background: 'linear-gradient(#0d6efd, #9ec5fe)' }} onClick={() => handleChartClick('INITIATED')}>
                    <div className="text-light fs-5">INITIATED</div>
                    <div className="count fs-1 text-light fw-bolder">{tableData.filter(data => data.status === 'INITIATED').length}</div>
                  </div>
                  <div className="col shadow p-3 m-3 rounded cursor-pointer" style={{ background: 'linear-gradient(#d63384, #9ec5fe)' }} onClick={() => handleChartClick('REINITIATED')}>
                    <div className="text-light fs-5">REINITIATED</div>
                    <div className="count fs-1 text-light fw-bolder">{tableData.filter(data => data.status === 'REINITIATED').length}</div>
                  </div>
                  <div className="col shadow p-3 m-3 rounded cursor-pointer" style={{ background: 'linear-gradient(#ffc107, #9ec5fe)' }} onClick={() => handleChartClick('APPROVED')}>
                    <div className="text-light fs-5">APPROVED</div>
                    <div className="count fs-1 text-light fw-bolder">{tableData.filter(data => data.status === 'APPROVED').length}</div>
                  </div>
                  <div className="col shadow p-3 m-3 rounded cursor-pointer" style={{ background: 'linear-gradient(#dc3545, #9ec5fe)' }} onClick={() => handleChartClick('REJECTED')}>
                    <div className="text-light fs-5">REJECTED</div>
                    <div className="count fs-1 text-light fw-bolder">{tableData.filter(data => data.status === 'REJECTED').length}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <CRow className="mb-3">
              <CCol sm={3}><CFormInput
                className="mb-3 border-2"
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleSearchChange}
              /></CCol>
              <CCol sm={3}>
                <CFormSelect
                  value={selectedStatus}
                  onChange={handleStatusChange}
                  className="border-2"
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
              <CCol sm={3}></CCol>
              <CCol sm={3}></CCol>
            </CRow>
          </div>
          <div className="bg-white mt-5 border-2 rounded shadow p-3">
            <CTable align="middle" responsive className="table-responsive">
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col" className="text-center"><input type="checkbox" /></CTableHeaderCell>
                  <CTableHeaderCell scope="col">S NO.</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Template Name</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Unique Code</CTableHeaderCell>
                  <CTableHeaderCell scope="col">No. of Analyst Section</CTableHeaderCell>
                  <CTableHeaderCell scope="col">No. of Supervisor Section</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Updated At</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Actions</CTableHeaderCell>
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
                    <CTableDataCell>{data.noOfAnalystSection}</CTableDataCell>
                    <CTableDataCell>{data.noOfSupervisorSection}</CTableDataCell>
                    <CTableDataCell>{data.updatedAt}</CTableDataCell>
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
                        <div className="cursor-pointer" onClick={() => setRemoveModal(true)}><FontAwesomeIcon icon={faTrashCan} /></div>
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

      {removeModal && <DeleteModel visible={removeModal} closeModal={() => setRemoveModal(false)} />}

    </>
  );
}

const DeleteModel = (_props) => {
  return (
    <CModal alignment="center" visible={_props.visible} onClose={_props.closeModal}>
      <CModalHeader>
        <CModalTitle>Delete Investigation Template</CModalTitle>
      </CModalHeader>
      <CModalBody>
        Do you want to delete this Investigation Template <code>Template1</code> ?
      </CModalBody>
      <CModalFooter>
        <CButton color="light" onClick={_props.closeModal}>Back</CButton>
        <CButton className="bg-info text-white">Submit</CButton>
      </CModalFooter>
    </CModal>
  );
}

export default InvestigationTamplate;
