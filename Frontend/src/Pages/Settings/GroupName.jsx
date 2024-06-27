import { CButton, CCol, CFormCheck, CFormInput, CFormSelect, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react";
import { faEye, faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function GroupName() {
  const [addModal, setAddModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null)

  const [removeModal, setRemoveModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedStatus, setSelectedStatus] = useState('All');
  const recordsPerPage = 5;

  const [tableData, setTableData] = useState([
    {
      id: 1,
      groupName: "Dissolution",
      description: "dissolution",
      addedOn: "Jun 17th 23 14:45",
      status: "APPROVED",
    },
    {
      id: 2,
      groupName: "Uniformity of dosage units (By Content uniformity)",
      description: "uniformity",
      addedOn: "Jun 17th 23 14:45",
      status: "APPROVED",
    },
    {
      id: 3,
      groupName: "Related substances",
      description: "rs",
      addedOn: "Jun 17th 23 14:46",
      status: "APPROVED",
    },
    {
      id: 4,
      groupName: "Each film coated bilayered tablet contains",
      description: "tablets",
      addedOn: "Jun 17th 23 14:50",
      status: "APPROVED",
    },
    {
      id: 5,
      groupName: "Microbial Limit Test",
      description: "mct",
      addedOn: "Jun 17th 23 14:50",
      status: "APPROVED",
    },
    {
      id: 6,
      groupName: "Assay",
      description: "Assay",
      addedOn: "Aug 16th 23 13:16",
      status: "APPROVED",
    },
    {
      id: 7,
      groupName: "Specific Gravity",
      description: "sg",
      addedOn: "Mar 16th 24 16:29",
      status: "APPROVED",
    }
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
      <div className="m-5 mt-3">
        <div className="main-head">
          <h4 className="fw-bold">Group Name</h4>
        </div>
        <div className="mt-3 d-flex gap-4">
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
                onChange={handleStatusChange}
                style={{ fontSize: '0.9rem' }}
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
              <CButton
                  className=" text-white"
                  style={{ background: "#4B49B6", fontSize: '0.9rem' }}
                  onClick={() => setAddModal(true)}
                >
                  Add Group Name
                  </CButton>
              </div>
            </CCol>
          </CRow>
        </div>
        <div
          className="rounded bg-white"
          style={{ fontFamily: 'sans-serif', fontSize: '0.9rem', boxShadow: '5px 5px 20px #5D76A9' }}
        >
          <CTable className="mb-0 table table-responsive" >
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell
                  style={{ background: "#5D76A9", color: "white" }}
                  scope="col"
                >S NO.</CTableHeaderCell>
                <CTableHeaderCell
                  style={{ background: "#5D76A9", color: "white" }}
                  scope="col"
                >Group Name</CTableHeaderCell>
                <CTableHeaderCell
                  style={{ background: "#5D76A9", color: "white" }}
                  scope="col"
                >Description</CTableHeaderCell>
                <CTableHeaderCell
                  style={{ background: "#5D76A9", color: "white" }}
                  scope="col"
                >Added On</CTableHeaderCell>
                <CTableHeaderCell
                  style={{ background: "#5D76A9", color: "white" }}
                  scope="col"
                >Status</CTableHeaderCell>
                <CTableHeaderCell
                  style={{ background: "#5D76A9", color: "white" }}
                  scope="col"
                >Actions</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {currentRecords.map((data, index) => (
                <CTableRow key={data.id}>
                  <CTableDataCell>{indexOfFirstRecord + index + 1}</CTableDataCell>
                  <CTableDataCell>{data.groupName}</CTableDataCell>
                  <CTableDataCell>{data.description}</CTableDataCell>
                  <CTableDataCell>{data.addedOn}</CTableDataCell>
                  <CTableDataCell>
                  <button
                      className={`py-1 px-3 small w-75 rounded text-light d-flex justify-content-center align-items-center bg-${data.status === "INITIATED"
                        ? "blue-700"
                        : data.status === "APPROVED"
                          ? "green-700"
                          : data.status === "REJECTED"
                            ? "red-700"
                            : data.status === "REINITIATED"
                              ? "yellow-500"
                              : data.status === "DROPPED"
                                ? "purple-700"
                                : "white"
                        }`} style={{ fontSize: '0.6rem' }}
                    >
                      {data.status}
                    </button>
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
        <div className="d-flex justify-content-end align-items-center mt-4">
          <div className="pagination">
            <button style={{ background: "#21516a", color: "white" }} className="btn mr-2" onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>&lt; &lt;</button>
            <button className="btn mr-2 bg-dark-subtle rounded-circle">{currentPage}</button>
            <button style={{ background: "#21516a", color: "white" }} className="btn mr-2" onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages}>&gt; &gt;</button>
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
    <CModal alignment="center" visible={_props.visible} onClose={_props.closeModal} size="lg">
      <CModalHeader>
        <CModalTitle>Add Group Name</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <p>Add information and add new Group Name</p>
        <CFormInput
          className="mb-3"
          type="text"
          label="Group Name"
          placeholder="Group Name"
          required
        />

        <CFormInput
          className="mb-3"
          type="text"
          label="Description"
          placeholder="Description"
          required
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
        <CModalTitle>Delete Group Name</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <p>Do you want to delete this Group Name <code>Uniformity of dosage units (By Content uniformity)</code>?</p>
        <CFormInput
          className="mb-3"
          type="text"
          label="User Id"
          placeholder="User Id"
          required
        />
        <CFormInput
          className="mb-3"
          type="password"
          label="Password"
          placeholder="password"
          required
        />
      </CModalBody>
      <CModalFooter>
        <CButton color="light" onClick={_props.closeModal}>Back</CButton>
        <CButton className="bg-danger text-white" onClick={_props.handleDelete}>Delete</CButton>
      </CModalFooter>
    </CModal>
  );
}

export default GroupName;
