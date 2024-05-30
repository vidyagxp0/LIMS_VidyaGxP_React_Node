import {
  CButton,
  CCol,
  CFormInput,
  CFormSelect,
  CFormTextarea,
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
import {
  faEye,
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaArrowRight } from "react-icons/fa";
import React, { useState } from "react";

export default function Nominations() {
  const [addModal, setAddModal] = useState(false);
  const [removeModal, setRemoveModal] = useState(false);
  const [filterStatus, setFilterStatus] = useState("All");

  const pageSize = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const tableData = [
    {
      sNo: 1,
      analyst: "John Doe",
      testTechnique: "Technique A",
      totalExperience: 5,
      pastExperience: 3,
      justification: "Lorem ipsum doonsectetur adipiscing elit.",
      addedOn: "2024-05-30",
      status: "Active"
    },
    {
      sNo: 2,
      analyst: "Jane Smith",
      testTechnique: "Technique B",
      totalExperience: 7,
      pastExperience: 4,
      justification: "Sed doliqua.",
      addedOn: "2024-05-30",
      status: "Active"
    },
    {
      sNo: 3,
      analyst: "Alice Johnson",
      testTechnique: "Technique C",
      totalExperience: 6,
      pastExperience: 5,
      justification: "U ex ea commodo consequat.",
      addedOn: "2024-05-30",
      status: "Inactive"
    },
    {
      sNo: 4,
      analyst: "Bob Brown",
      testTechnique: "Technique D",
      totalExperience: 8,
      pastExperience: 6,
      justification: "Duis aute ila pariatur.",
      addedOn: "2024-05-30",
      status: "Active"
    },
    {
      sNo: 5,
      analyst: "Ella Davis",
      testTechnique: "Technique E",
      totalExperience: 4,
      pastExperience: 2,
      justification: "Excepteur laborum.",
      addedOn: "2024-05-30",
      status: "Inactive"
    },
    {
      sNo: 6,
      analyst: "Chris Wilson",
      testTechnique: "Technique F",
      totalExperience: 9,
      pastExperience: 7,
      justification: "Nollit anim id est laborum.",
      addedOn: "2024-05-30",
      status: "Active"
    },
    {
      sNo: 7,
      analyst: "Emily Martinez",
      testTechnique: "Technique G",
      totalExperience: 3,
      pastExperience: 1,
      justification: "Lorem ipsum ing elit.",
      addedOn: "2024-05-30",
      status: "Inactive"
    },
    {
      sNo: 8,
      analyst: "David Rodriguez",
      testTechnique: "Technique H",
      totalExperience: 10,
      pastExperience: 8,
      justification: "Sed do gna aliqua.",
      addedOn: "2024-05-30",
      status: "Active"
    },
    {
      sNo: 9,
      analyst: "Grace Garcia",
      testTechnique: "Technique I",
      totalExperience: 5,
      pastExperience: 3,
      justification: "Ut enim ad onsequat.",
      addedOn: "2024-05-30",
      status: "Inactive"
    },
    {
      sNo: 10,
      analyst: "Samuel Hernandez",
      testTechnique: "Technique J",
      totalExperience: 7,
      pastExperience: 4,
      justification: "Dnulla pariatur.",
      addedOn: "2024-05-30",
      status: "Active"
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSelect = (data) => {
    setFilterStatus(data);
    setCurrentPage(1);
  }

  const filteredtableData = tableData
    .filter((data) =>
      data.analyst.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(
      (data) =>
        filterStatus === "All" || data.status === filterStatus
    );

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, filteredtableData.length);

  const renderRows = () => {
    return filteredtableData.slice(startIndex, endIndex).map((data, index) => (
      <tr key={startIndex + index}>
        <td>
          <input type="checkbox" />
        </td>
        <td>{data.sNo}</td>
        <td>{data.analyst}</td>
        <td>{data.testTechnique}</td>
        <td>{data.totalExperience}</td>
        <td>{data.pastExperience}</td>
        <td>{data.justification}</td>
        <td>{data.addedOn}</td>
        <td>
          <div className=" w-100">
            <div className={`p-2 small rounded fw-bold text-light d-flex justify-content-center align-items-center bg-${data.status === 'Active' ? 'green-700'
              : 'red-700'}`} >{data.status}</div>
          </div>
        </td>
        <td>
          <div className="d-flex gap-3">
            <div className="cursor-pointer"
              onClick={() => setAddModal(true)}
            ><FontAwesomeIcon icon={faPenToSquare} /></div>
            <div
              className="cursor-pointer"
              onClick={() => setRemoveModal(true)}
            >
              <FontAwesomeIcon icon={faTrashCan} />
            </div>
          </div>
        </td>
      </tr>
    ));
  };
  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const nextToLastPage = () => {
    setCurrentPage(Math.ceil(filteredtableData.length / pageSize));
  };

  const StatusModal = (_props) => {

    return (
      <CModal
        alignment="center"
        visible={_props.visible}
        onClose={_props.closeModal}
        size="lg"
      >
        <CModalHeader>
          <CModalTitle> Add Nominations</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p className="my-3 fs-6 fw-bold"> Add information about Nominations.</p>
          <CFormSelect
            className="mb-3"
            label="Analyst"
            options={[
              { value: "Analyst", label: "Analyst" },
              { value: "Analyst Two", label: "Analyst Two" },
            ]}
          />
          <CFormInput
            type="text"
            className="mb-3"
            label="Employee ID"
            placeholder="Employee ID"
          />
          <CFormInput
            type="text"
            className="mb-3"
            label="Role/Title"
            placeholder="Role/Title"
          />
          <CFormSelect
            label="Test Technique"
            placeholder="Select"
            className="mb-3"
						options={[
							{ value: "Description", label: "Description" },
						]}
					/>
          <label className="line3" htmlFor="">
            Training Documents
          </label>
          <input
            className="line4"
            style={{ padding: "23px", fontSize: "10px" }}
            required
            type="file"
            placeholder="Training Details"
          />
          <label className="line3" htmlFor="">
            Total Experience / Work Area
          </label>
          <input
            className="line4"
            required
            type="text"
            placeholder="Total Experience"
          />
          <label className="line3" htmlFor="">
            Past Experience / Work Area
          </label>
          <input
            className="line4"
            required
            type="text"
            placeholder="Past Experience"
          />
          <label className="line3" htmlFor="">
            Justification for Direct Nomination
          </label>
          <input
            className="line4"
            required
            type="text"
            placeholder="Justification for Direct Nomination"
          />
        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={_props.closeModal}>
            Back
          </CButton>
          <CButton className="bg-info text-white">Add</CButton>
        </CModalFooter>
      </CModal>
    );
  };

  const DeleteModel = (_props) => {
    return (
      <CModal
        alignment="center"
        visible={_props.visible}
        onClose={_props.closeModal}
      >
        <CModalHeader>
          <CModalTitle>Delete Nominations</CModalTitle>
        </CModalHeader>
        <CModalBody>
          Do you want to delete this Nominations <code>Q126</code>?
        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={_props.closeModal}>
            Back
          </CButton>
          <CButton className="bg-danger text-white">Delete</CButton>
        </CModalFooter>
      </CModal>
    );
  };

  return (
    <>
      <div className="m-5">

        <div className="my-4">
          <h5>Nominations</h5>
        </div>

        <div>
          <CRow className="my-5">
            <CCol sm={4}>
              <CFormInput
                style={{ border: "2px solid gray" }}
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </CCol>

            <CCol sm={3}>
              <CFormSelect
                value={filterStatus}
                onChange={(e) => handleSelect(e.target.value)}
                style={{ border: "2px solid gray" }}
              >
                <option value="All">All</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </CFormSelect>
            </CCol>
            <CCol sm={2}></CCol>
            <CCol sm={3}>
              <div className="d-flex justify-content-end">
                <CButton color="primary" onClick={() => setAddModal(true)}>
                  Add Nomination
                </CButton>
              </div>
            </CCol>
          </CRow>
        </div>

        <div className="shadow p-3 rounded border-2 my-4">
          <table className="table table-responsive">
            <thead>
              <tr>
                <th>
                  <input type="checkbox" />
                </th>
                <th>S.No.</th>
                <th>Analyst</th>
                <th>Test Technique</th>
                <th>Total Experience	</th>
                <th>Past Experience</th>
                <th>Justification for Direct Nomination	</th>
                <th>Added On</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>{renderRows()}</tbody>
          </table>
        </div>

        <div className="pagination">
          <div className="pagination gap-3">
            <div className="">
              <button
                className="btn"
                onClick={prevPage}
                disabled={currentPage === 1}
              >
                &lt;&lt;
              </button>
            </div>
            <div className="current-page-number bg-dark-subtle page-item rounded">
              <button className="btn rounded-circle"> {currentPage} </button>
            </div>
            <div>
              <button
                className="btn"
                onClick={nextPage}
                disabled={endIndex >= filteredtableData.length}
              >
                &gt;&gt;
              </button>
            </div>
          </div>

          <button
            className="btn btn-next d-flex gap-2"
            onClick={nextToLastPage}
          >
            Next <FaArrowRight className="mt-1" />
          </button>
        </div>
      </div>

      {addModal && (
        <StatusModal visible={addModal} closeModal={() => setAddModal(false)} />
      )}

      {removeModal && (
        <DeleteModel
          visible={removeModal}
          closeModal={() => setRemoveModal(false)}
        />
      )}
    </>
  );
}




// import React, { useState } from "react";
// import { CiSearch } from "react-icons/ci";
// import { CgAddR } from "react-icons/cg";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { HiDotsHorizontal } from "react-icons/hi";
// import { FaArrowRight } from "react-icons/fa";
// import { IoEyeSharp } from "react-icons/io5";
// import { Link } from "react-router-dom";

// export default function Nominations() {
//   const [storageName, setStorageName] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");
//   const [filterStatus, setFilterStatus] = useState("Select Status");

//   const handleAddStorage = () => {
//     if (storageName.trim() === "") {
//       setErrorMessage("Storage condition is Required");
//     } else {
//       toast.warning(
//         "Apologies, an unexpected error occurred while adding the Storage Condition."
//       );
//     }
//   };
//   const notify = () => toast("Wow so easy!");

//   const pageSize = 4;
//   const [currentPage, setCurrentPage] = useState(1);
//   const employees = [
//     {
//       user: "Initiated Product",
//       role: "Sacubitril",
//       departments: "ARIP0000095",
//       joiningDate: "N/A",
//       addedBy: "RPS-TSLV-00",
//       status: "ACTIVE",
//     },
//     {
//       user: "admin",
//       role: "Sacubitril",
//       departments: "ARIP0000095",
//       joiningDate: "N/A",
//       addedBy: "RPS-TSLV-00",
//       status: "INACTIVE",
//     },
//     {
//       user: "Initiated Product",
//       role: "Sacubitril",
//       departments: "ARIP0000095",
//       joiningDate: "N/A",
//       addedBy: "RPS-TSLV-00",
//       status: "ACTIVE",
//     },
//     {
//       user: "admin",
//       role: "Sacubitril",
//       departments: "ARIP0000095",
//       joiningDate: "N/A",
//       addedBy: "RPS-TSLV-00",
//       status: "INACTIVE",
//     },
//   ];

//   const [searchTerm, setSearchTerm] = useState("");

//   const handleSearchChange = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const filteredEmployees = employees.filter(employee =>
//     employee.user.toLowerCase().includes(searchTerm.toLowerCase())
//   ).filter(employee =>
//     filterStatus === "Select Status" || employee.status === filterStatus
//   );

//   const startIndex = (currentPage - 1) * pageSize;
//   const endIndex = Math.min(startIndex + pageSize, filteredEmployees.length);

//   const renderRows = () => {
//     return filteredEmployees.slice(startIndex, endIndex).map((employee, index) => (
//       <tr key={startIndex + index}>
//         <td>
//           <input type="checkbox" />
//         </td>
//         <td>{startIndex + index + 1}</td>
//         <td>{employee.user}</td>
//         <td>{employee.role}</td>
//         <td>{employee.departments}</td>
//         <td>{employee.joiningDate}</td>
//         <td>{employee.user}</td>
//         <td>{employee.addedBy}</td>
//         <td style={{width:"110px"}}
//           className={`rounded-3 ${
//             employee.status === "ACTIVE" ? "bg-success text-white" : "bg-danger text-white"
//           } d-flex justify-content-center p-1 m-2 `}
//         >
//           {employee.status}
//         </td>
//         <td>
//           &nbsp; &nbsp; &nbsp;
//           <HiDotsHorizontal />
//         </td>
//       </tr>
//     ));
//   };

//   const nextPage = () => {
//     setCurrentPage(currentPage + 1);
//   };

//   const prevPage = () => {
//     setCurrentPage(currentPage - 1);
//   };

//   const nextToLastPage = () => {
//     setCurrentPage(Math.ceil(filteredEmployees.length / pageSize));
//   };

//   return (
//     <>
//       <div id="div1">
//         <h5>Nominations</h5>
//       </div>

//       <div id="div2">
//         <div id="searchmain">
//           <div id="searchicon">
//             <CiSearch />
//           </div>

//           <div className="">
//             <input
//               type="text"
//               className=""
//               id=""
//               placeholder="search"
//               value={searchTerm}
//               onChange={handleSearchChange}
//             />
//           </div>
//         </div>
//         <div className="dropdown m-5"></div>

//         <div className="dropdown">
//           <div>
//             <button
//               className="btn border"
//               type="button"
//               id="dropdownMenuButton"
//               data-toggle="dropdown"
//               aria-haspopup="true"
//               aria-expanded="false"
//             >
//               <select
//                 id="selectOption"
//                 value={filterStatus}
//                 onChange={(e) => setFilterStatus(e.target.value)}
//               >
//                 <option>Select Status </option>
//                 <option>ACTIVE</option>
//                 <option>INACTIVE</option>
//               </select>
//             </button>
//           </div>
//         </div>

//         <button
//           id="Addbtn"
//           className="btn btn-primary m-5"
//           type="button"
//           data-bs-toggle="offcanvas"
//           data-bs-target="#offcanvasRight"
//           aria-controls="offcanvasRight"
//           style={{position:"absolute", left:"950px"}}
//         >
//           <CgAddR /> <span>Add Nomination</span>
//         </button>

//         <div
//           className="offcanvas offcanvas-end overflow-y-scroll"
//           tabIndex="-1"
//           id="offcanvasRight"
//           aria-labelledby="offcanvasRightLabel"
//         >
//           <div className="offcanvas-header">
//             <div id="line1">
//               <h5 className="offcanvas-title" id="offcanvasRightLabel">
//                 Add Nomination
//               </h5>
//               <button
//                 id="closebtn"
//                 type="button"
//                 className="btn-close"
//                 data-bs-dismiss="offcanvas"
//                 aria-label="Close"
//               ></button>
//             </div>
//           </div>
//

//           <div id="line5">
//             <button
//               type="button"
//               data-bs-dismiss="offcanvas"
//               aria-label="Close"
//             >
//               &lt; Back
//             </button>
//             <button>Submit</button>
//           </div>
//           <div>
//             <ToastContainer />
//           </div>
//         </div>
//       </div>

//       <br />
//       <div className="table-responsive p-4 container1">
//         <table className="table">
//           <thead>
//             <tr>
//               <th>
//                 <input type="checkbox" />
//               </th>
//               <th>SNo.</th>
//               <th>Analyst</th>
//               <th>Test Technique</th>
//               <th>Total Experience</th>
//               <th>Past Experience</th>
//               <th>Justification for Direct Nomination</th>
//               <th>Added On</th>
//               <th>Status</th>
//               <th>Actions </th>
//             </tr>
//           </thead>
//           <tbody>{renderRows()}</tbody>
//         </table>
//       </div>

//       <div className="pagination">
//         <div className="pagination " style={{ margin: "0 30px" }}>
//           <div className="mr-5">
//             <button
//               className="btn  mr-2"
//               onClick={prevPage}
//               disabled={currentPage === 1}
//             >
//               &lt;&lt;
//             </button>
//           </div>
//           <div className="current-page-number mr-2 bg-dark-subtle page-item">
//             <button className="btn rounded-circle"> {currentPage} </button>
//           </div>
//           <div>
//             <button
//               className="btn mr-2"
//               onClick={nextPage}
//               disabled={endIndex >= filteredEmployees.length}
//             >
//               &gt;&gt;
//             </button>
//           </div>
//         </div>

//         <button
//           className="btn btn-next"
//           style={{ margin: "0 30px" }}
//           onClick={nextToLastPage}
//         >
//           {" "}
//           Next <FaArrowRight />
//         </button>
//       </div>
//     </>
//   );
// }
