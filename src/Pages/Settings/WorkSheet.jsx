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
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedStatus, setSelectedStatus] = useState('All');
  const recordsPerPage = 5;

  const badgeStyle = { background: "#cdffca" };

  const tableData = [
    {
        SNo: 1,
        sequenceNumber: "WORKSHEET-062023-0000018",
        worksheetName: "Assay(SolifenacinSuccinate)",
        productName: "LUPIN MIRA S 25 TABLET",
        gtpNumber: "NA",
        methodValidationNo: "NA",
        standardPreparation: "NA",
        status: "APPROVED",
    },
    {
        SNo: 2,
        sequenceNumber: "WORKSHEET-062023-0000017",
        worksheetName: "Assay(Mirabegron)",
        productName: "LUPIN MIRA S 25 TABLET",
        gtpNumber: "NA",
        methodValidationNo: "NA",
        standardPreparation: "NA",
        status: "INITIATED",  
    },
    {
        SNo: 3,
        sequenceNumber: "WORKSHEET-062023-0000016",
        worksheetName: "Residual Solvent (Isopropyl alcohol)",
        productName: "LUPIN MIRA S 25 TABLET",
        gtpNumber: "NA",
        methodValidationNo: "NSA",
        standardPreparation: "NA",
        status: "APPROVED",
    },
    {
        SNo: 4,
        sequenceNumber: "WORKSHEET-062023-0000015",
        worksheetName: "Related substances (Solifenacin Succinate)",
        productName: "LUPIN MIRA S 25 TABLET",
        gtpNumber: "NA",
        methodValidationNo: "NA",
        standardPreparation: "NA",
        status: "INITIATED",
    },
    {
        SNo: 5,
        sequenceNumber: "WORKSHEET-062023-0000014",
        worksheetName: "Mirabegron",
        productName: "LUPIN MIRA S 25 TABLET",
        gtpNumber: "NA",
        methodValidationNo: "NA",
        standardPreparation: "NA",
        status: "APPROVED",
    },
    {
        SNo: 6,
        sequenceNumber: "WORKSHEET-062023-0000013",
        worksheetName: "Solifenacin Succinate IP",
        productName: "LUPIN MIRA S 25 TABLET",
        gtpNumber: "",
        methodValidationNo: "",
        standardPreparation: "",
        status: "INITIATED",  
    },
    {
        SNo: 7,
        sequenceNumber: "WORKSHEET-062023-0000012",
        worksheetName: "Dissolution Solifenacin Succinate IP",
        productName: "LUPIN MIRA S 25 TABLET",
        gtpNumber: "NA",
        methodValidationNo: "NA",
        standardPreparation: "NA",
        status: "APPROVED",
    },
    {
        SNo: 8,
        sequenceNumber: "WORKSHEET-062023-0000011",
        worksheetName: "10th hour Mirabegron",
        productName: "LUPIN MIRA S 25 TABLET",
        gtpNumber: "NA",
        methodValidationNo: "NA",
        standardPreparation: "NA",
        status: "INITIATED", 
    },
    {
        SNo: 9,
        sequenceNumber: "WORKSHEET-062023-0000010",
        worksheetName: "3rd hour Mirabegron",
        productName: "LUPIN MIRA S 25 TABLET",
        gtpNumber: "NA",
        methodValidationNo: "NA",
        standardPreparation: "NA",
        status: "APPROVED",
    },
    {
        SNo: 10,
        sequenceNumber: "WORKSHEET-062023-0000009",
        worksheetName: "Uniformity of weight",
        productName: "LUPIN MIRA S 25 TABLET",
        gtpNumber: "NA",
        methodValidationNo: "NA",
        standardPreparation: "NA",
        status: "INITIATED", 
    }
];


  const handleStatusChange = (e) => {
    setSelectedStatus(e.target.value);
    setCurrentPage(1);
  };

  const handleChartClick = (status) => {
    setSelectedStatus(status);
    setCurrentPage(1);
  };

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
            <div className="title fw-bold fs-5">Worksheets</div>
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
              <CCol sm={3}>
                <CFormSelect
                  value={selectedStatus}
                  onChange={handleStatusChange}
                  options={[
                    'Select Status',
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
                  <CButton className="bg-info text-white" onClick={() => setAddModal(true)}>Add Worksheet</CButton>
                </div>
              </CCol>
            </CRow>
          </div>
          <div className="bg-white mt-5 shadow rounded p-2">
            <CTable align="middle" responsive className="table-responsive">
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col">SNo.</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Sequence Number</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Worksheets Name</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Product Name</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Gtp Number</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Method Validation No.</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Standard Prepration</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Actions</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {currentRecords.map((data, index) => (
                  <CTableRow key={data.id}>
                    <CTableDataCell>{data.SNo}</CTableDataCell>
                    <CTableDataCell>{data.sequenceNumber}</CTableDataCell>
                    <CTableDataCell>{data.worksheetName}</CTableDataCell>
                    <CTableDataCell>{data.productName}</CTableDataCell>
                    <CTableDataCell>{data.gtpNumber}</CTableDataCell>
                    <CTableDataCell>{data.methodValidationNo}</CTableDataCell>
                    <CTableDataCell>{data.standardPreparation}</CTableDataCell>
                    <CTableDataCell>
                      <div className="py-2 px-3 small rounded fw-bold" style={badgeStyle}>{data.status}</div>
                    </CTableDataCell>
                    <CTableDataCell>
                      <div className="d-flex gap-3">
                        <Link to="/settings/bussinessAssociateDetails"><FontAwesomeIcon icon={faEye} /></Link>
                        <div className="cursor-pointer" onClick={() => setAddModal(true)}><FontAwesomeIcon icon={faPenToSquare} /></div>
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
              <button className="btn mr-2" onClick={() => paginate(1)} disabled={currentPage === 1}>&lt;&lt;</button>
              <button className="btn mr-2" onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>&lt;</button>
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index + 1}
                  className={`btn mr-2 ${currentPage === index + 1 ? 'bg-dark-subtle' : ''}`}
                  onClick={() => paginate(index + 1)}
                >
                  {index + 1}
                </button>
              ))}
              <button className="btn mr-2" onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages}>&gt;</button>
              <button className="btn" onClick={() => paginate(totalPages)} disabled={currentPage === totalPages}>&gt;&gt;</button>
            </div>
            <div className="">
              <button className="btn btn-next ml-2" onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages}> Next <FaArrowRight /></button>
            </div>
          </div>
        </div>
      </div>

      {addModal && <StatusModal visible={addModal} closeModal={() => setAddModal(false)} />}
      {removeModal && <DeleteModel visible={removeModal} closeModal={() => setRemoveModal(false)} />}

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
        <CButton className="bg-info text-white">Submit</CButton>
      </CModalFooter>
    </CModal>
  );
}

export default WorkSheet;




// import { CButton, CCol,  CFormInput, CFormSelect, CHeader, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow, CForm, CFormLabel } from "@coreui/react"
// import { faEye, faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { useState } from "react"
// import { FaArrowRight } from "react-icons/fa"
// import { Link } from "react-router-dom"

// function WorkSheet() {
//   const [addModal, setAddModal] = useState(false)
//   const badgeStyle = { background: "#cdffca" }
//   return (
//     <>

//       <div id="approval-page" className="h-100 mx-5">
//         <div className="container-fluid my-5">

//           <div className="main-head">
//             <div className="title fw-bold fs-5"> WorkSheets</div>


//           </div>
//           <div className="d-flex gap-4">
//             <div className="chart-widgets w-100">
//               <div className="">
//                 <div className="row">
//                   <div className="col shadow p-3 m-3 rounded" style={{ background: 'linear-gradient(#0d6efd, #9ec5fe)' }}>
//                     <div className="text-light fs-5">INITIATED</div>
//                     <div className="count fs-1 text-light fw-bolder">0</div>
//                   </div>
//                   <div className="col shadow p-3 m-3 rounded" style={{ background: 'linear-gradient(#d63384, #9ec5fe)' }}>
//                     <div className="text-light fs-5">REINITIATED</div>
//                     <div className="count fs-1 text-light fw-bolder">0</div>
//                   </div>
//                   <div className="col shadow p-3 m-3 rounded" style={{ background: 'linear-gradient(#ffc107, #9ec5fe)' }}>
//                     <div className="text-light fs-5">APPROVED</div>
//                     <div className="count fs-1 text-light fw-bolder">2</div>
//                   </div>

//                   <div className="col shadow p-3 m-3 rounded" style={{ background: 'linear-gradient(#dc3545, #9ec5fe)' }}>
//                     <div className="text-light fs-5">REJECTED</div>
//                     <div className="count fs-1 text-light fw-bolder">0</div>
//                   </div>
//                 </div>
//               </div>


//             </div>

//           </div>
//           <div>
//             <CRow className="mb-3">

//               <CCol sm={3}>
//                 <CFormSelect
//                   options={[
//                     'Select Status',
//                     { label: 'All' },
//                     { label: 'Initiated' },
//                     { label: 'Approved' },
//                     { label: 'Rejected' },
//                     { label: 'Reinitiated' },
//                     { label: 'Dropped' }
//                   ]}
//                 />
//               </CCol>
//               <CCol sm={6}>

//               </CCol>
//               <CCol sm={3}>
//                 <div className="d-flex justify-content-end">
//                   <CButton className="bg-info text-white" onClick={() => setAddModal(true)}>Add Worksheet</CButton>
//                 </div>
//               </CCol>
//             </CRow>
//           </div>
//           <div className="bg-white mt-5">
//             <CTable align="middle" responsive className=" shadow">
//               <CTableHead>
//                 <CTableRow>
//                   <CTableHeaderCell scope="col">S NO.</CTableHeaderCell>
//                   <CTableHeaderCell scope="col">Sequence Number</CTableHeaderCell>
//                   <CTableHeaderCell scope="col">Worksheet Name</CTableHeaderCell>
//                   <CTableHeaderCell scope="col">Product Name</CTableHeaderCell>
//                   <CTableHeaderCell scope="col">Gtp Number</CTableHeaderCell>
//                   <CTableHeaderCell scope="col">Method Validation No.</CTableHeaderCell>
//                   <CTableHeaderCell scope="col">Standard Prepration</CTableHeaderCell>
//                   <CTableHeaderCell scope="col">Status</CTableHeaderCell>
//                   <CTableHeaderCell scope="col">Actions</CTableHeaderCell>
//                 </CTableRow>
//               </CTableHead>
//               <CTableBody>

//                 <CTableRow>
//                   <CTableDataCell>1</CTableDataCell>
//                   <CTableDataCell>Worksheet001</CTableDataCell>
//                   <CTableDataCell>hcl</CTableDataCell>
//                   <CTableDataCell>testing</CTableDataCell>
//                   <CTableDataCell>testing</CTableDataCell>
//                   <CTableDataCell>12</CTableDataCell>
//                   <CTableDataCell></CTableDataCell>
//                   <CTableDataCell className="d-flex">
//                     <div className="py-2 px-3 small rounded fw-bold" style={badgeStyle}>Initiated</div>
//                   </CTableDataCell>
//                   <CTableDataCell>
//                     <div className="d-flex gap-3">
//                       <Link to="/approval/1321"><FontAwesomeIcon icon={faEye} /></Link>
//                       <Link to="#"><FontAwesomeIcon icon={faTrashCan} /></Link>
//                     </div>
//                   </CTableDataCell>
//                 </CTableRow>

//                 <CTableRow>
//                   <CTableDataCell>1</CTableDataCell>
//                   <CTableDataCell>Worksheet001</CTableDataCell>
//                   <CTableDataCell>hcl</CTableDataCell>
//                   <CTableDataCell>testing</CTableDataCell>
//                   <CTableDataCell>testing</CTableDataCell>
//                   <CTableDataCell>001</CTableDataCell>
//                   <CTableDataCell></CTableDataCell>
//                   <CTableDataCell className="d-flex">
//                     <div className="py-2 px-3 small rounded fw-bold" style={badgeStyle}>Initiated</div>
//                   </CTableDataCell>
//                   <CTableDataCell>
//                     <div className="d-flex gap-3">
//                       <Link to="/approval/1321"><FontAwesomeIcon icon={faEye} /></Link>
//                       <div className="cursor-pointer" onClick={() => setAddModal(true)}><FontAwesomeIcon icon={faPenToSquare} /></div>
//                       <Link to="#"><FontAwesomeIcon icon={faTrashCan} /></Link>
//                     </div>
//                   </CTableDataCell>
//                 </CTableRow>

//               </CTableBody>
//             </CTable>
//           </div>

//           <div className="pagination">

//             <div className="pagination">
//               <div className='mr-5'>
//                 <button className="btn  mr-2" >&lt;&lt;</button>
//               </div>
//               <div className="current-page-number mr-2 bg-dark-subtle page-item">
//                 <button className='btn rounded-circle'> 1 </button>
//               </div>
//               <div>
//                 <button className="btn mr-2" >&gt;&gt;</button>

//               </div>

//             </div>
//             <button className="btn btn-next" > Next <FaArrowRight /></button>
//           </div>


//         </div>
//       </div>

//       {addModal && <StatusModal visible={addModal} closeModal={() => setAddModal(false)} />}

//     </>
//   )
// }

// const StatusModal = (_props) => {
//   return (
//     <>

//       <CModal alignment="center" visible={_props.visible} onClose={_props.closeModal}>
//         <CModalHeader>
//           <CModalTitle>Add Worksheet</CModalTitle>
//         </CModalHeader>
//         <CModalBody>

//           <CFormInput
//             type="text"
//             label="Type"
//             placeholder="WorkSheet"
//             disabled
//           />
//           <CFormInput
//             type="text"
//             label="Name"
//             placeholder="Name"
//           />

//           <CFormSelect
//             type="text"
//             label="Product"
//             placeholder="Select..."
//             options={[
//               "Select...",
//               { label: "TadalafilL" },
//               { label: "Diclofenac Resinate" },
//               { label: "Diclofenac Potassium" },
//               { label: "Diclofenac Salts" }
//             ]}
//           />
//           <CHeader>Uniformity of Dosage Units:</CHeader>
//           <CFormInput
//             type="text"
//             label="GTP No:"
//             placeholder="GTP No:"
//           />
//           <CFormInput
//             type="text"
//             label="Method Validation No:"
//             placeholder="Method Validation No:"
//           />

//           <CForm >
//             <CFormLabel htmlFor="text_editor">Description:</CFormLabel>
//             <div className="worksheet-editor-main">
//               <CRow className="option-buttons mb-3">
//                 <CCol xs="auto">
//                   <CFormSelect className="option-select">
//                     <option value="12">12px</option>
//                     <option value="14">14px</option>
//                     <option value="16">16px</option>
//                     <option value="18">18px</option>
//                     <option value="20">20px</option>
//                     <option value="22">22px</option>
//                   </CFormSelect>
//                 </CCol>
//                 <CCol xs="auto">
//                   <CFormSelect className="option-select">
//                     <option value="Arial">Arial</option>
//                     <option value="Times New Roman">Times New Roman</option>
//                     <option value="Courier New">Courier New</option>
//                   </CFormSelect>
//                 </CCol>
//                 <CCol xs="auto">
//                   <CButton className="each-option-btn">
//                     <i className="fa-solid fa-bold"></i>
//                   </CButton>
//                   <CButton className="each-option-btn">
//                     <i className="fa-solid fa-italic"></i>
//                   </CButton>
//                   <CButton className="each-option-btn">
//                     <i className="fa-solid fa-underline"></i>
//                   </CButton>
//                   <CButton className="each-option-btn">
//                     <i className="fa-solid fa-strikethrough"></i>
//                   </CButton>
//                   <CButton className="each-option-btn">
//                     <i className="fa-solid fa-subscript"></i>
//                   </CButton>
//                   <CButton className="each-option-btn">
//                     <i className="fa-solid fa-superscript"></i>
//                   </CButton>
//                   <CButton className="each-option-btn">
//                     <i className="fa-solid fa-image"></i>
//                   </CButton>
//                   <CButton className="each-option-btn">
//                     <i className="fa-solid fa-link"></i>
//                   </CButton>
//                   <CButton className="each-option-btn">
//                     <i className="fa-solid fa-align-left"></i>
//                   </CButton>
//                   <CButton className="each-option-btn">
//                     <i className="fa-solid fa-align-center"></i>
//                   </CButton>
//                   <CButton className="each-option-btn">
//                     <i className="fa-solid fa-align-right"></i>
//                   </CButton>
//                   <CButton className="each-option-btn">
//                     <i className="fa-solid fa-align-justify"></i>
//                   </CButton>
//                   <CButton className="each-option-btn">
//                     <i className="fa-solid fa-list-ol"></i>
//                   </CButton>
//                   <CButton className="each-option-btn">
//                     <i className="fa-solid fa-list"></i>
//                   </CButton>
//                 </CCol>
//               </CRow>

//               <CRow className="custom-btns mb-3">
//                 <CCol xs="auto">
//                   <CButton className="each-option-btn">EDAP</CButton>
//                   <CButton className="each-option-btn">WSQTY</CButton>
//                   <CButton className="each-option-btn">CHQTY</CButton>
//                   <CButton className="each-option-btn">EWS</CButton>
//                   <CButton className="each-option-btn">RSQTY</CButton>
//                   <CButton className="each-option-btn">SDQTY</CButton>
//                 </CCol>
//               </CRow>
//               <hr style={{ height: '1.5px', background: 'rgb(15, 147, 195)' }} />
//               <div
//                 contentEditable="true"
//                 className="editor"
//                 style={{ minHeight: '200px', fontSize: '16px', fontFamily: 'Arial' }}
//               ></div>
//             </div>
//           </CForm>

//         </CModalBody>
//         <CModalFooter>
//           <CButton color="light" onClick={_props.closeModal}>Back</CButton>
//           <CButton className="bg-info text-white">Add </CButton>
//         </CModalFooter>
//       </CModal>

//     </>
//   )
// }


// export default WorkSheet
