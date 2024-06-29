// import {
//      CCol, CFormInput, CFormSelect, CRow,
//      CTableHeaderCell, CTableRow,
//   } from "@coreui/react";
//   import React, { useState } from 'react';
//   import './Samplelogin.css';
//   import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//   import { faEye } from "@fortawesome/free-regular-svg-icons";
//   import { Link } from 'react-router-dom';
//   import { FaArrowRight } from 'react-icons/fa';

//   export default function Samplelogin() {
//     const pageSize = 5;
//     const [currentPage, setCurrentPage] = useState(1);
//     const [searchTerm, setSearchTerm] = useState("");
//     const [statusFilter, setStatusFilter] = useState("");

//     const employees = [
//       { srNo: '1', testName: 'Total Fungal Count', testCode: 'WBL/FPS/FG/2893-T-25', testType: 'QUANTITATIVE', status: 'PENDING', addedOn: '13-07-2023' },
//       { srNo: '2', testName: 'Bacterial Count', testCode: 'WBL/FPS/FG/2893-T-26', testType: 'QUANTITATIVE', status: 'APPROVED', addedOn: '14-07-2023' },
//       { srNo: '3', testName: 'Yeast Count', testCode: 'WBL/FPS/FG/2893-T-27', testType: 'QUANTITATIVE', status: 'APPROVED', addedOn: '15-07-2023' },
//       { srNo: '4', testName: 'Mold Count', testCode: 'WBL/FPS/FG/2893-T-28', testType: 'QUANTITATIVE', status: 'APPROVED', addedOn: '16-07-2023' },
//       { srNo: '5', testName: 'E. coli Detection', testCode: 'WBL/FPS/FG/2893-T-29', testType: 'QUALITATIVE', status: 'PENDING', addedOn: '17-07-2023' },
//       { srNo: '6', testName: 'Salmonella Detection', testCode: 'WBL/FPS/FG/2893-T-30', testType: 'QUALITATIVE', status: 'APPROVED', addedOn: '18-07-2023' }
//     ];

//     const filteredEmployees = employees.filter(employee =>
//       (employee.testName.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         employee.testCode.toLowerCase().includes(searchTerm.toLowerCase())) &&
//       (statusFilter === "" || employee.status === statusFilter)
//     );

//     const startIndex = (currentPage - 1) * pageSize;
//     const endIndex = Math.min(startIndex + pageSize, filteredEmployees.length);

//     const renderRows = () => {
//       return filteredEmployees.slice(startIndex, endIndex).map((test, index) => (
//         <tr key={index}>
//           <td><input type="checkbox" /></td>
//           <td>{test.srNo}</td>
//           <td>{test.testName}</td>
//           <td>{test.testCode}</td>
//           <td>{test.testType}</td>
//           <td hidden>{test.status}</td>
//           <td>{test.addedOn}</td>
//           <td>
//             <div className="d-flex gap-3">
//               <Link to="/testResultsDetails" className="mx-3"><FontAwesomeIcon icon={faEye} /></Link>
//             </div>
//           </td>
//         </tr>
//       ));
//     };

//     const nextPage = () => {
//       setCurrentPage(currentPage + 1);
//     };

//     const prevPage = () => {
//       setCurrentPage(currentPage - 1);
//     };

//     const nextToLastPage = () => {
//       setCurrentPage(Math.ceil(filteredEmployees.length / pageSize));
//     };

//     return (
//       <>
//         <div className="m-5 mt-3">
//           <div className="main-head">
//             <h4 className="fw-bold">Test Results QA</h4>
//           </div>
//           <div>
//             <CRow className="mt-5 mb-3">
//               <CCol sm={4}>
//                 <CFormInput
//                   type="text"
//                   style={{fontSize:'0.9rem'}}
//                   placeholder="Search..."
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                 />
//               </CCol>
//               <CCol sm={3}>
//                 <CFormSelect
//                   value={statusFilter}
//                   style={{fontSize:'0.9rem'}}
//                   onChange={(e) => setStatusFilter(e.target.value)}
//                   options={[
//                     { label: 'All', value: '' },
//                     { label: 'Pending', value: 'PENDING' },
//                     { label: 'Approved', value: 'APPROVED' },
//                   ]}
//                 />
//               </CCol>
//               <CCol sm={2}></CCol>
//               <CCol sm={3}></CCol>
//             </CRow>
//           </div>

//                 <div
//           className=" rounded bg-white"
//           style={{fontFamily:'sans-serif', fontSize:'0.9rem' ,boxShadow:'5px 5px 20px #5D76A9'}}
//         >
//                 <table className='table    '>
//               <thead>
//                 <tr>
//                   <th style={{ background: "#5D76A9", color: "white"}} scope="col"><input type="checkbox" /></th>
//                   <th style={{ background: "#5D76A9", color: "white"}} scope="col">Sr.No</th>
//                   <th style={{ background: "#5D76A9", color: "white"}} scope="col">Test Name</th>
//                   <th style={{ background: "#5D76A9", color: "white"}} scope="col">Test Code</th>
//                   <th style={{ background: "#5D76A9", color: "white"}} scope="col">Test Type</th>
//                   <th style={{ background: "#5D76A9", color: "white"}} scope="col">Added On</th>
//                   <th style={{ background: "#5D76A9", color: "white"}} scope="col">Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {renderRows()}
//               </tbody>
//             </table>
//           </div>

//           <div className="d-flex justify-content-end align-items-center mt-4">
//                         <div className="pagination">
//                             <button  style={{ background: "#21516a", color: "white" }} className="btn mr-2" onClick={prevPage} disabled={currentPage === 1}>
//                                 &lt;&lt;
//                             </button>
//                             <button className="btn mr-2 bg-dark-subtle rounded-circle">{currentPage}</button>
//                             <button  style={{ background: "#21516a", color: "white" }} className="btn mr-2" onClick={nextPage} disabled={endIndex >= employees.length}>
//                                 &gt;&gt;
//                             </button>
//                         </div>

//                     </div>
//         </div>
//       </>
//     );
//   }


import React, { useState } from 'react'
import {
  faEye,
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearchBar from '../../components/ATM components/SearchBar/SearchBar';
import Dropdown from '../../components/ATM components/Dropdown/Dropdown';
import ATMButton from '../../components/ATM components/Button/ATMButton';
import Table from '../../components/ATM components/Table/Table';

const initialData = [
  {
    checkbox: false,
    sno: 1,
    testName: "Test Name 1",
    testCode: "T001",
    testType: "Type A",
    addedOn: "2024-01-01",
    action: [
      <FontAwesomeIcon icon={faEye} key="view1" className="mr-2 cursor-pointer" />,
      <FontAwesomeIcon icon={faPenToSquare} key="edit1" className="mr-2 cursor-pointer" />,
      <FontAwesomeIcon icon={faTrashCan} key="delete1" className="cursor-pointer" />,
    ],
  },
  {
    checkbox: false,
    sno: 2,
    testName: "Test Name 2",
    testCode: "T002",
    testType: "Type B",
    addedOn: "2024-01-02",
    action: [
      <FontAwesomeIcon icon={faEye} key="view2" className="mr-2 cursor-pointer" />,
      <FontAwesomeIcon icon={faPenToSquare} key="edit2" className="mr-2 cursor-pointer" />,
      <FontAwesomeIcon icon={faTrashCan} key="delete2" className="cursor-pointer" />,
    ],
  },
  {
    checkbox: false,
    sno: 3,
    testName: "Test Name 3",
    testCode: "T003",
    testType: "Type A",
    addedOn: "2024-01-03",
    action: [
      <FontAwesomeIcon icon={faEye} key="view3" className="mr-2 cursor-pointer" />,
      <FontAwesomeIcon icon={faPenToSquare} key="edit3" className="mr-2 cursor-pointer" />,
      <FontAwesomeIcon icon={faTrashCan} key="delete3" className="cursor-pointer" />,
    ],
  },
  {
    checkbox: false,
    sno: 4,
    testName: "Test Name 4",
    testCode: "T004",
    testType: "Type C",
    addedOn: "2024-01-04",
    action: [
      <FontAwesomeIcon icon={faEye} key="view4" className="mr-2 cursor-pointer" />,
      <FontAwesomeIcon icon={faPenToSquare} key="edit4" className="mr-2 cursor-pointer" />,
      <FontAwesomeIcon icon={faTrashCan} key="delete4" className="cursor-pointer" />,
    ],
  },
  {
    checkbox: false,
    sno: 5,
    testName: "Test Name 5",
    testCode: "T005",
    testType: "Type A",
    addedOn: "2024-01-05",
    action: [
      <FontAwesomeIcon icon={faEye} key="view5" className="mr-2 cursor-pointer" />,
      <FontAwesomeIcon icon={faPenToSquare} key="edit5" className="mr-2 cursor-pointer" />,
      <FontAwesomeIcon icon={faTrashCan} key="delete5" className="cursor-pointer" />,
    ],
  },
  {
    checkbox: false,
    sno: 6,
    testName: "Test Name 6",
    testCode: "T006",
    testType: "Type B",
    addedOn: "2024-01-06",
    action: [
      <FontAwesomeIcon icon={faEye} key="view6" className="mr-2 cursor-pointer" />,
      <FontAwesomeIcon icon={faPenToSquare} key="edit6" className="mr-2 cursor-pointer" />,
      <FontAwesomeIcon icon={faTrashCan} key="delete6" className="cursor-pointer" />,
    ],
  },
  {
    checkbox: false,
    sno: 7,
    testName: "Test Name 7",
    testCode: "T007",
    testType: "Type C",
    addedOn: "2024-01-07",
    action: [
      <FontAwesomeIcon icon={faEye} key="view7" className="mr-2 cursor-pointer" />,
      <FontAwesomeIcon icon={faPenToSquare} key="edit7" className="mr-2 cursor-pointer" />,
      <FontAwesomeIcon icon={faTrashCan} key="delete7" className="cursor-pointer" />,
    ],
  },
  {
    checkbox: false,
    sno: 8,
    testName: "Test Name 8",
    testCode: "T008",
    testType: "Type A",
    addedOn: "2024-01-08",
    action: [
      <FontAwesomeIcon icon={faEye} key="view8" className="mr-2 cursor-pointer" />,
      <FontAwesomeIcon icon={faPenToSquare} key="edit8" className="mr-2 cursor-pointer" />,
      <FontAwesomeIcon icon={faTrashCan} key="delete8" className="cursor-pointer" />,
    ],
  },
  {
    checkbox: false,
    sno: 9,
    testName: "Test Name 9",
    testCode: "T009",
    testType: "Type B",
    addedOn: "2024-01-09",
    action: [
      <FontAwesomeIcon icon={faEye} key="view9" className="mr-2 cursor-pointer" />,
      <FontAwesomeIcon icon={faPenToSquare} key="edit9" className="mr-2 cursor-pointer" />,
      <FontAwesomeIcon icon={faTrashCan} key="delete9" className="cursor-pointer" />,
    ],
  },
  {
    checkbox: false,
    sno: 10,
    testName: "Test Name 10",
    testCode: "T010",
    testType: "Type C",
    addedOn: "2024-01-10",
    action: [
      <FontAwesomeIcon icon={faEye} key="view10" className="mr-2 cursor-pointer" />,
      <FontAwesomeIcon icon={faPenToSquare} key="edit10" className="mr-2 cursor-pointer" />,
      <FontAwesomeIcon icon={faTrashCan} key="delete10" className="cursor-pointer" />,
    ],
  },
];

const InvestigationL1 = () => {
  const [data, setData] = useState(initialData);
  const [deleteId, setDeleteId] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [statusFilter, setStatusFilter] = useState("All");
  const [deleteModal, setDeleteModal] = useState(false);
  const [viewModalData, setViewModalData] = useState(null);


  const handleSelectAll = (e) => {
    const checked = e.target.checked;
    const newData = data.map((row) => ({ ...row, checkbox: checked }));
    setData(newData);
  };

  const filteredData = data.filter((row) => {
    return (
      row.testName.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (statusFilter === "All" || row.status === statusFilter)
    );
  });

  const onViewDetails = (rowData) => {
    setViewModalData(rowData);

  };

  const handleCheckboxChange = (index) => {
    const newData = [...data];
    newData[index].checkbox = !newData[index].checkbox;
    setData(newData);
  };

  const columns = [
    {
      header: <input type="checkbox" onChange={handleSelectAll} />,
      accessor: "checkbox",
    },
    { header: "SrNo.", accessor: "sno" },
    { header: "test Name", accessor: "testName" },
    { header: "Test Code", accessor: "testCode" },
    { header: "Test Type", accessor: "testType" },
    { header: "Added On", accessor: "addedOn" },
    { header: "Actions", accessor: "action" },
  ];

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
       <div className="m-5 mt-3">
        <div className="main-head">
          <h4 className="fw-bold">Test Result QA</h4>
        </div>
     

      <div className="flex items-center justify-between mb-4">
          <div className="flex space-x-4">
            <SearchBar value={searchQuery} onChange={setSearchQuery} />
            <Dropdown
              options={[
                { value: "All", label: "All" },
                { value: "Active", label: "Active" },
                { value: "Inactive", label: "Inactive" },
              ]}
              value={statusFilter}
              onChange={setStatusFilter}
            />
          </div>
          <div className="float-right">
            <ATMButton text="Add Sample Log In" color="blue" onClick={openModal} />
          </div>
        </div>
        <Table columns={columns} data={filteredData} onCheckboxChange={handleCheckboxChange} onViewDetails={onViewDetails} />
        </div>
    </>
  )
}
export default InvestigationL1