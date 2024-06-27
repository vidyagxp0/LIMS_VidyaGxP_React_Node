import { CButton, CCol, CFormCheck, CFormInput, CFormSelect, CFormTextarea, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react";
import { faEye, faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { TiArrowRightThick } from "react-icons/ti";
import { TiArrowLeftThick } from "react-icons/ti";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function WorkSheet() {
  const [addModal, setAddModal] = useState(false);
  const [removeModal, setRemoveModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null)
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedStatus, setSelectedStatus] = useState('All');
  const recordsPerPage = 5;

  const badgeStyle = { background: "#cdffca" };

  const [tableData, setTableData] = useState([
    {
      id: 1,
      sequenceNumber: "WORKSHEET-062023-0000018",
      worksheetName: "Assay(SolifenacinSuccinate)",
      productName: "LUPIN MIRA S 25 TABLET",
      gtpNumber: "NA",
      methodValidationNo: "NA",
      standardPreparation: "NA",
      status: "APPROVED",
    },
    {
      id: 2,
      sequenceNumber: "WORKSHEET-062023-0000017",
      worksheetName: "Assay(Mirabegron)",
      productName: "LUPIN MIRA S 25 TABLET",
      gtpNumber: "NA",
      methodValidationNo: "NA",
      standardPreparation: "NA",
      status: "INITIATED",
    },
    {
      id: 3,
      sequenceNumber: "WORKSHEET-062023-0000016",
      worksheetName: "Residual Solvent (Isopropyl alcohol)",
      productName: "LUPIN MIRA S 25 TABLET",
      gtpNumber: "NA",
      methodValidationNo: "NSA",
      standardPreparation: "NA",
      status: "APPROVED",
    },
    {
      id: 4,
      sequenceNumber: "WORKSHEET-062023-0000015",
      worksheetName: "Related substances (Solifenacin Succinate)",
      productName: "LUPIN MIRA S 25 TABLET",
      gtpNumber: "NA",
      methodValidationNo: "NA",
      standardPreparation: "NA",
      status: "INITIATED",
    },
    {
      id: 5,
      sequenceNumber: "WORKSHEET-062023-0000014",
      worksheetName: "Mirabegron",
      productName: "LUPIN MIRA S 25 TABLET",
      gtpNumber: "NA",
      methodValidationNo: "NA",
      standardPreparation: "NA",
      status: "APPROVED",
    },
    {
      id: 6,
      sequenceNumber: "WORKSHEET-062023-0000013",
      worksheetName: "Solifenacin Succinate IP",
      productName: "LUPIN MIRA S 25 TABLET",
      gtpNumber: "",
      methodValidationNo: "",
      standardPreparation: "",
      status: "INITIATED",
    },
    {
      id: 7,
      sequenceNumber: "WORKSHEET-062023-0000012",
      worksheetName: "Dissolution Solifenacin Succinate IP",
      productName: "LUPIN MIRA S 25 TABLET",
      gtpNumber: "NA",
      methodValidationNo: "NA",
      standardPreparation: "NA",
      status: "APPROVED",
    },
    {
      id: 8,
      sequenceNumber: "WORKSHEET-062023-0000011",
      worksheetName: "10th hour Mirabegron",
      productName: "LUPIN MIRA S 25 TABLET",
      gtpNumber: "NA",
      methodValidationNo: "NA",
      standardPreparation: "NA",
      status: "INITIATED",
    },
    {
      id: 9,
      sequenceNumber: "WORKSHEET-062023-0000010",
      worksheetName: "3rd hour Mirabegron",
      productName: "LUPIN MIRA S 25 TABLET",
      gtpNumber: "NA",
      methodValidationNo: "NA",
      standardPreparation: "NA",
      status: "APPROVED",
    },
    {
      id: 10,
      sequenceNumber: "WORKSHEET-062023-0000009",
      worksheetName: "Uniformity of weight",
      productName: "LUPIN MIRA S 25 TABLET",
      gtpNumber: "NA",
      methodValidationNo: "NA",
      standardPreparation: "NA",
      status: "INITIATED",
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
            <h4 className="fw-bold">Worksheets</h4>
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
                  style={{ fontSize: '0.9rem' }}
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
              <CCol sm={3}></CCol>
              <CCol sm={3}></CCol>
              <CCol sm={3}>
                <div className="d-flex justify-content-end">
                  <CButton
                    className=" text-white"
                    style={{ background: "#4B49B6", fontSize: '0.9rem' }}
                    onClick={() => setAddModal(true)}
                  >
                    Add Worksheet
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
                  >id.</CTableHeaderCell>
                  <CTableHeaderCell
                    style={{ background: "#5D76A9", color: "white" }}
                    scope="col"
                  >Sequence Number</CTableHeaderCell>
                  <CTableHeaderCell
                    style={{ background: "#5D76A9", color: "white" }}
                    scope="col"
                  >Worksheets Name</CTableHeaderCell>
                  <CTableHeaderCell
                    style={{ background: "#5D76A9", color: "white" }}
                    scope="col"
                  >Product Name</CTableHeaderCell>
                  <CTableHeaderCell
                    style={{ background: "#5D76A9", color: "white" }}
                    scope="col"
                  >Gtp Number</CTableHeaderCell>
                  <CTableHeaderCell
                    style={{ background: "#5D76A9", color: "white" }}
                    scope="col"
                  >Method Validation No.</CTableHeaderCell>
                  <CTableHeaderCell
                    style={{ background: "#5D76A9", color: "white" }}
                    scope="col"
                  >Standard Prepration</CTableHeaderCell>
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
                    <CTableDataCell>{data.sequenceNumber}</CTableDataCell>
                    <CTableDataCell>{data.worksheetName}</CTableDataCell>
                    <CTableDataCell>{data.productName}</CTableDataCell>
                    <CTableDataCell>{data.gtpNumber}</CTableDataCell>
                    <CTableDataCell>{data.methodValidationNo}</CTableDataCell>
                    <CTableDataCell>{data.standardPreparation}</CTableDataCell>
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
                      <div className="d-flex gap-2">
                        <Link to="/settings/bussinessAssociateDetails"><FontAwesomeIcon icon={faEye} /></Link>
                        <div className="cursor-pointer" onClick={() => setAddModal(true)}><FontAwesomeIcon icon={faPenToSquare} /></div>
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

  const [leftArray, setLeftArray] = useState([
    "Description",
  ]);

  const [rightArray, setRightArray] = useState([]);

  const moveRight = () => {
    let leftElement = document.getElementsByClassName("check-left");
    for (let index = 0; index < leftElement.length; index++) {
      if (leftElement[index].checked) {
        let data = leftElement[index].value;
        let left = leftArray.filter((value) => value !== data);
        setLeftArray(left);
        rightArray.push(data);
        setRightArray(rightArray);
        break; // Important
      }
    }
  };

  const moveLeft = () => {
    let rightElement = document.getElementsByClassName("check-right");
    for (let index = 0; index < rightElement.length; index++) {
      if (rightElement[index].checked) {
        let data = rightElement[index].value;
        let right = rightArray.filter((value) => value !== data);
        setRightArray(right);
        leftArray.push(data);
        setLeftArray(leftArray);
        break; // Important
      }
    }
  };

  const clicked = () => {
    let checkboxes = document.querySelectorAll(".check-left, .check-right");
    checkboxes.forEach((checkbox) => {
      checkbox.checked = false;
    });
    let allLabels = document.querySelectorAll(".labels");
    allLabels.forEach((label) => {
      label.classList.remove("clicked");
    });

    let label = event.target;
    label.classList.add("clicked");
    label.checked = true;
  };

  return (
    <CModal alignment="center" visible={_props.visible} onClose={_props.closeModal} size="lg">
      <CModalHeader>
        <CModalTitle>Add Worksheets</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <p>Add information about Worksheet</p>
        <CFormInput
          className="mb-3"
          type="text"
          label="Type"
          placeholder="Worksheet"
          readOnly
        />

        <CFormInput
          className="mb-3"
          type="text"
          label="Name"
          placeholder="Name"
        />
        <label htmlFor="drag-drop" className="">User Defined Woksheet fields</label>
        <div className="d-flex" id="drag-drop">
          <div className="w-100 m-3">
            <h5>Available</h5>
            <div
              className="shadow p-2 rounded border overflow-y-auto"
              style={{ height: "350px" }}
            >
              <ul className="list-group">
                {leftArray.map((data) => (
                  <li
                    key={data}
                    className="bg-light rounded my-1 px-3 py-1 text-dark"
                  >
                    <input
                      type="checkbox"
                      value={data}
                      id={data}
                      className="check-left d-none"
                    />
                    <label
                      className="labels cursor-pointer bg-light"
                      htmlFor={data}
                      onClick={clicked}
                    >
                      {data}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="m-auto justify-content-center">
            <button
              className="btn shadow py-1 px-3 mt-5 text-warning fs-4"
              onClick={() => moveRight()}
            >
              <TiArrowRightThick />
            </button>
            <button
              className="btn shadow py-1 px-3 mt-2 text-warning fs-4"
              onClick={() => moveLeft()}
            >
              <TiArrowLeftThick />
            </button>
          </div>
          <div className="w-100 m-3">
            <h5>Selected</h5>
            <div
              className="shadow p-2 rounded border overflow-y-auto"
              style={{ height: "350px" }}
            >
              <ul className="list-group">
                {rightArray.map((data) => (
                  <li
                    key={data}
                    className="bg-light rounded my-1 px-3 py-1 text-dark"
                  >
                    <input
                      type="checkbox"
                      value={data}
                      id={data}
                      className="check-right d-none"
                    />
                    <label
                      className="labels cursor-pointer bg-light"
                      htmlFor={data}
                      onClick={clicked}
                    >
                      {data}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <h5>Uniformity of Dosage Units:</h5>
        <CFormInput
          className="mb-3"
          type="text"
          label="GTP No:"
          placeholder="GTP No"
        />
        <CFormInput
          className="mb-3"
          type="text"
          label="Method Validation No:"
          placeholder="Method Validation No"
        />
        <CFormTextarea
          className="mb-3"
          type="text"
          label="Description:"
          placeholder="Description"
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
        <CModalTitle>Delete Worksheets</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <p>Do you want to delete this Worksheets <code>Assay 1</code>?</p>
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

export default WorkSheet;
