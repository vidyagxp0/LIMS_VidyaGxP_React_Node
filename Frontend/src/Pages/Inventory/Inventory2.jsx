import { useState } from "react";
import {
  CButton,
  CFormInput,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";
import React from "react";

import {
  faEye,
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Dropdown from "../../components/ATM components/Dropdown/Dropdown";
import SearchBar from "../../components/ATM components/SearchBar/SearchBar";
import ATMButton from "../../components/ATM components/Button/ATMButton";
import Table from "../../components/ATM components/Table/Table";
import ViewModal from "../Modals/ViewModal";

const initialData = [
  {
    checkbox: false,
    sno: 1,
    conditionCode: "CC1",
    storageCondition: "SC1",
    createdAt: "2023-01-01",
    status: "Active",
    action: [
      <FontAwesomeIcon
        icon={faEye}
        key="view"
        className="mr-2 cursor-pointer"
      />,
      <FontAwesomeIcon
        icon={faPenToSquare}
        key="edit"
        className="mr-2 cursor-pointer"
      />,
      <FontAwesomeIcon
        icon={faTrashCan}
        key="delete"
        className="cursor-pointer"
      />,
    ],
  },
  {
    checkbox: false,
    sno: 2,
    conditionCode: "CC2",
    storageCondition: "SC2",
    createdAt: "2023-02-01",
    status: "Active",
    action: [
      <FontAwesomeIcon
        icon={faEye}
        key="view"
        className="mr-2 cursor-pointer"
      />,
      <FontAwesomeIcon
        icon={faPenToSquare}
        key="edit"
        className="mr-2 cursor-pointer"
      />,
      <FontAwesomeIcon
        icon={faTrashCan}
        key="delete"
        className="cursor-pointer"
      />,
    ],
  },
  {
    checkbox: false,
    sno: 3,
    conditionCode: "CC3",
    storageCondition: "SC3",
    createdAt: "2023-03-01",
    status: "Inactive",
    action: [
      <FontAwesomeIcon
        icon={faEye}
        key="view"
        className="mr-2 cursor-pointer"
      />,
      <FontAwesomeIcon
        icon={faPenToSquare}
        key="edit"
        className="mr-2 cursor-pointer"
      />,
      <FontAwesomeIcon
        icon={faTrashCan}
        key="delete"
        className="cursor-pointer"
      />,
    ],
  },
  {
    checkbox: false,
    sno: 4,
    conditionCode: "CC4",
    storageCondition: "SC4",
    createdAt: "2023-04-01",
    status: "Active",
    action: [
      <FontAwesomeIcon
        icon={faEye}
        key="view"
        className="mr-2 cursor-pointer"
      />,
      <FontAwesomeIcon
        icon={faPenToSquare}
        key="edit"
        className="mr-2 cursor-pointer"
      />,
      <FontAwesomeIcon
        icon={faTrashCan}
        key="delete"
        className="cursor-pointer"
      />,
    ],
  },
  {
    checkbox: false,
    sno: 5,
    conditionCode: "CC5",
    storageCondition: "SC5",
    createdAt: "2023-05-01",
    status: "Inactive",
    action: [
      <FontAwesomeIcon
        icon={faEye}
        key="view"
        className="mr-2 cursor-pointer"
      />,
      <FontAwesomeIcon
        icon={faPenToSquare}
        key="edit"
        className="mr-2 cursor-pointer"
      />,
      <FontAwesomeIcon
        icon={faTrashCan}
        key="delete"
        className="cursor-pointer"
      />,
    ],
  },
  {
    checkbox: false,
    sno: 6,
    conditionCode: "CC6",
    storageCondition: "SC6",
    createdAt: "2023-06-01",
    status: "Active",
    action: [
      <FontAwesomeIcon
        icon={faEye}
        key="view"
        className="mr-2 cursor-pointer"
      />,
      <FontAwesomeIcon
        icon={faPenToSquare}
        key="edit"
        className="mr-2 cursor-pointer"
      />,
      <FontAwesomeIcon
        icon={faTrashCan}
        key="delete"
        className="cursor-pointer"
      />,
    ],
  },
  {
    checkbox: false,
    sno: 7,
    conditionCode: "CC7",
    storageCondition: "SC7",
    createdAt: "2023-07-01",
    status: "Inactive",
    action: [
      <FontAwesomeIcon
        icon={faEye}
        key="view"
        className="mr-2 cursor-pointer"
      />,
      <FontAwesomeIcon
        icon={faPenToSquare}
        key="edit"
        className="mr-2 cursor-pointer"
      />,
      <FontAwesomeIcon
        icon={faTrashCan}
        key="delete"
        className="cursor-pointer"
      />,
    ],
  },
  {
    checkbox: false,
    sno: 8,
    conditionCode: "CC8",
    storageCondition: "SC8",
    createdAt: "2023-08-01",
    status: "Active",
    action: [
      <FontAwesomeIcon
        icon={faEye}
        key="view"
        className="mr-2 cursor-pointer"
      />,
      <FontAwesomeIcon
        icon={faPenToSquare}
        key="edit"
        className="mr-2 cursor-pointer"
      />,
      <FontAwesomeIcon
        icon={faTrashCan}
        key="delete"
        className="cursor-pointer"
      />,
    ],
  },
  {
    checkbox: false,
    sno: 9,
    conditionCode: "CC9",
    storageCondition: "SC9",
    createdAt: "2023-09-01",
    status: "Inactive",
    action: [
      <FontAwesomeIcon
        icon={faEye}
        key="view"
        className="mr-2 cursor-pointer"
      />,
      <FontAwesomeIcon
        icon={faPenToSquare}
        key="edit"
        className="mr-2 cursor-pointer"
      />,
      <FontAwesomeIcon
        icon={faTrashCan}
        key="delete"
        className="cursor-pointer"
      />,
    ],
  },
  {
    checkbox: false,
    sno: 10,
    conditionCode: "CC10",
    storageCondition: "SC10",
    createdAt: "2023-10-01",
    status: "Active",
    action: [
      <FontAwesomeIcon
        icon={faEye}
        key="view"
        className="mr-2 cursor-pointer"
      />,
      <FontAwesomeIcon
        icon={faPenToSquare}
        key="edit"
        className="mr-2 cursor-pointer"
      />,
      <FontAwesomeIcon
        icon={faTrashCan}
        key="delete"
        className="cursor-pointer"
      />,
    ],
  },
];

function StorageLocation() {
  const [data, setData] = useState(initialData);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [delModal, setDelModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [viewModalData, setViewModalData] = useState(null);

  const handleSelectAll = (e) => {
    const checked = e.target.checked;
    const newData = data.map((row) => ({ ...row, checkbox: checked }));
    setData(newData);
  };

  const filteredData = data.filter((row) => {
    return (
      row.conditionCode.toLowerCase().includes(searchQuery.toLowerCase()) &&
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

  const StatusModal = (_props) => {
    return (
      <CModal
        alignment="center"
        visible={_props.visible}
        onClose={_props.closeModal}
      >
        <CModalHeader>
          <CModalTitle>New Storage Condition</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CFormInput type="text" label="Name" placeholder="Storage Name" />
        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={_props.closeModal}>
            Cancel
          </CButton>
          <CButton color="primary">Add</CButton>
        </CModalFooter>
      </CModal>
    );
  };

  const columns = [
    {
      header: <input type="checkbox" onChange={handleSelectAll} />,
      accessor: "checkbox",
    },
    { header: "SrNo.", accessor: "sno" },
    { header: "Condition Code", accessor: "conditionCode" },
    { header: "Stability Storage Condition", accessor: "storageCondition" },
    { header: "Created At", accessor: "createdAt" },
    { header: "Status", accessor: "status" },
    {
      header: "Actions",
      accessor: "action",
      Cell: ({ row }) => (
        <>
          <FontAwesomeIcon
            icon={faEye}
            className="mr-2 cursor-pointer"
            onClick={() => onViewDetails(row)}
          />
          <FontAwesomeIcon
            icon={faPenToSquare}
            className="mr-2 cursor-pointer"
          />
          <FontAwesomeIcon
            icon={faTrashCan}
            key="delete"
            className="cursor-pointer"
          />
        </>
      ),
    },
  ];

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const closeViewModal = () => {
    setViewModalData(false);
  };

  const DeleteModal = (_props) => {
    return (
      <CModal
        alignment="center"
        visible={_props.visible}
        onClose={_props.closeModal}
        size="lg"
      >
        <CModalHeader>
          <CModalTitle>Delete User</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p>Are you sure you want to delete this storage?</p>
        </CModalBody>
        <CModalFooter>
          <CButton
            color="secondary"
            onClick={_props.closeModal}
            style={{
              marginRight: "0.5rem",
              fontWeight: "500",
            }}
          >
            Cancel
          </CButton>
          <CButton
            color="danger"
            onClick={_props.confirmDelete}
            style={{
              fontWeight: "500",
              color: "white",
            }}
          >
            Delete
          </CButton>
        </CModalFooter>
      </CModal>
    );
  };

  const handleDeleteConfirm = () => {
    setStorageConditions((prevConditions) =>
      prevConditions.filter((condition) => condition.id !== deleteId)
    );
    setDeleteModal(false);
  };

  return (
    <>
      <div className="m-5 mt-3">
        <div className="main-head">
          <h4 className="fw-bold">Storage Conditions</h4>
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
            <ATMButton
              text="Add Storage Condition"
              color="blue"
              onClick={openModal}
            />
          </div>
        </div>
        <Table
          columns={columns}
          data={filteredData}
          onCheckboxChange={handleCheckboxChange}
          onViewDetails={onViewDetails}
        />
      </div>

      {isModalOpen && (
        <StatusModal visible={isModalOpen} closeModal={closeModal} />
      )}
      {viewModalData && (
        <ViewModal visible={viewModalData} closeModal={closeViewModal} />
      )}
      {delModal && (
        <RemoveModal visible={delModal} closeModal={() => setDelModal(false)} />
      )}
      {deleteModal && (
        <DeleteModal
          visible={deleteModal}
          closeModal={() => setDeleteModal(false)}
          confirmDelete={handleDeleteConfirm}
        />
      )}
    </>
  );
}

export default StorageLocation;

import React from "react";
// import {
//   CButton,
//   CCol,
//   CFormInput,
//   CFormSelect,
//   CFormTextarea,
//   CModal,
//   CModalFooter,
//   CModalBody,
//   CModalTitle,
//   CRow,
//   CTable,
//   CModalHeader,
//   CTableBody,
//   CTableDataCell,
//   CTableHead,
//   CTableHeaderCell,
//   CTableRow,
// } from "@coreui/react";
// import {
//   faEye,
//   faPenToSquare,
//   faTrashCan,
// } from "@fortawesome/free-regular-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { useState } from "react";
// import { Link } from "react-router-dom";

// function Inventory() {
//   const [addModal, setAddModal] = useState(false);
//   const [deleteModal, setDeleteModal] = useState(false);

//   const [selectedStatus, setSelectedStatus] = useState("All");
//   const [data, setData] = useState([
//     {
//       id: 1,
//       ProductName: "stmp1",
//       SequenceNo: "describe",
//       AdditionalInformation: "isubus111",
//       ContainerStartingNo: "54255455",
//       SampleRefrenceNo: "loc1",
//       status: "APPROVED",
//     },
//     {
//       id: 2,
//       ProductName: "stmp1",
//       SequenceNo: "describe",
//       AdditionalInformation: "isubus111",
//       ContainerStartingNo: "54255455",
//       SampleRefrenceNo: "loc1",
//       status: "REJECTED",
//     },
//     {
//       id: 3,
//       ProductName: "Alpha",
//       SequenceNo: "describe",
//       AdditionalInformation: "isubus111",
//       ContainerStartingNo: "54255455",
//       SampleRefrenceNo: "loc1",
//       status: "REINITIATED",
//     },
//     {
//       id: 4,
//       ProductName: "Infra",
//       SequenceNo: "describe",
//       AdditionalInformation: "isubus111",
//       ContainerStartingNo: "54255455",
//       SampleRefrenceNo: "loc1",
//       status: "INITIATED",
//     },
//     {
//       id: 5,
//       ProductName: "Infra",
//       SequenceNo: "describe",
//       AdditionalInformation: "isubus111",
//       ContainerStartingNo: "54255455",
//       SampleRefrenceNo: "loc1",
//       status: "DROPPED",
//     },
//     {
//       id: 6,
//       ProductName: "Alpha",
//       SequenceNo: "describe",
//       AdditionalInformation: "isubus111",
//       ContainerStartingNo: "54255455",
//       SampleRefrenceNo: "loc1",
//       status: "INITIATED",
//     },
//   ]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const pageSize = 5;
//   const startIndex = (currentPage - 1) * pageSize;
//   const endIndex = Math.min(startIndex + pageSize, data.length);
//   const [search, setSearch] = useState("");

//   const filterData = () => {
//     const filteredData =
//       selectedStatus === "All"
//         ? data
//         : data.filter(
//             (item) => item.status.toUpperCase() === selectedStatus.toUpperCase()
//           );
//     return filteredData.filter((item) =>
//       item.ContainerStartingNo.toLowerCase().includes(search.toLowerCase())
//     );
//   };
//   const filteredData = filterData();
//   const nextPage = () =>
//     setCurrentPage((prev) =>
//       Math.min(prev + 1, Math.ceil(filteredData.length / pageSize))
//     );
//   const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

//   const handleDelete = (id) => {
//     setData((prevData) => prevData.filter((item) => item.id !== id));
//     setDeleteModal(false);
//   };

//   const [selectAll, setSelectAll] = useState(false);
//   const [checkedItems, setCheckedItems] = useState([]);
//   const handleSelectAll = (event) => {
//     const isChecked = event.target.checked;
//     setSelectAll(isChecked);
//     if (isChecked) {
//       setCheckedItems(filterData().map((item) => item.id));
//     } else {
//       setCheckedItems([]);
//     }
//   };

//   const handleCheckboxChange = (event, id) => {
//     const isChecked = event.target.checked;
//     if (isChecked) {
//       setCheckedItems([...checkedItems, id]);
//     } else {
//       setCheckedItems(checkedItems.filter((itemId) => itemId !== id));
//     }
//   };

//   return (
//     <>
//       <div id="approval-page" className="m-5 mt-3">
//         <div className="container-fluid my-5">
//           <div className="main-head">
//             <div className="title fw-bold fs-5">Material</div>
//           </div>
//           <div className="d-flex gap-4">
//             <div className="chart-widgets w-100">
//               <div className="">
//                 <div className="row" style={{ cursor: "pointer" }}>
//                   <button
//                     className="col shadow p-3 m-3 rounded"
//                     style={{
//                       background:
//                         "linear-gradient(25deg, #0250c5 0%, #d43f8d 100%)",

//                       textAlign: "left",
//                     }}
//                     onClick={() => setSelectedStatus("DROPPED")}
//                   >
//                     <div className="text-light font-bold fs-5">DROPPED</div>
//                     <div
//                       className="count fs-1 text-light fw-bolder"
//                       style={{ color: "white" }}
//                     >
//                       {
//                         filterData().filter((item) => item.status === "DROPPED")
//                           .length
//                       }
//                     </div>
//                   </button>
//                   <button
//                     className="col shadow p-3 m-3 rounded"
//                     style={{
//                       background: "linear-gradient(25deg, #13517a , #2A5280)",
//                       textAlign: "left",
//                     }}
//                     onClick={() => setSelectedStatus("INITIATED")}
//                   >
//                     <div className="text-light font-bold fs-5">INITIATED</div>
//                     <div
//                       className="count fs-1 text-light fw-bolder"
//                       style={{ color: "white" }}
//                     >
//                       {
//                         filterData().filter(
//                           (item) => item.status === "INITIATED"
//                         ).length
//                       }
//                     </div>
//                   </button>
//                   <button
//                     className="col shadow p-3 m-3 rounded"
//                     style={{
//                       background: "linear-gradient(25deg, orange , #f7e05f )",

//                       textAlign: "left",
//                       boxShadow: "0px 10px 20px  black !important",
//                     }}
//                     onClick={() => setSelectedStatus("REINITIATED")}
//                   >
//                     <div className="text-light font-bold fs-5">REINITIATED</div>

//                     <div
//                       className="count fs-1 text-light fw-bolder"
//                       style={{ color: "white" }}
//                     >
//                       {
//                         filterData().filter(
//                           (item) => item.status === "REINITIATED"
//                         ).length
//                       }
//                     </div>
//                   </button>
//                   <button
//                     className="col shadow p-3 m-3 rounded"
//                     style={{
//                       background: "linear-gradient(27deg, green , #0fd850  )",
//                       textAlign: "left",
//                     }}
//                     onClick={() => setSelectedStatus("APPROVED")}
//                   >
//                     <butto className="text-light font-bold fs-5">
//                       APPROVED
//                     </butto>
//                     <div
//                       className="count fs-1 text-light fw-bolder"
//                       style={{ color: "white", textAlign: "left" }}
//                     >
//                       {
//                         filterData().filter(
//                           (item) => item.status === "APPROVED"
//                         ).length
//                       }
//                     </div>
//                   </button>

//                   <button
//                     className="col shadow p-3 m-3 rounded"
//                     style={{
//                       background: "linear-gradient(27deg ,red, #FF719A)",
//                       textAlign: "left",
//                     }}
//                     onClick={() => setSelectedStatus("REJECTED")}
//                   >
//                     <div className="text-light font-bold fs-5">REJECTED</div>
//                     <div className="count fs-1 text-light fw-bolder">
//                       {
//                         filterData().filter(
//                           (item) => item.status === "REJECTED"
//                         ).length
//                       }
//                     </div>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div>
//             <CRow className="mb-3">
//               <CCol sm={4}>
//                 <CFormInput
//                   style={{ fontSize: "0.9rem" }}
//                   type="email"
//                   placeholder="Search..."
//                   onChange={(e) => setSearch(e.target.value)}
//                 />
//               </CCol>

//               <CCol sm={3}>
//                 <CFormSelect
//                   onChange={(e) => setSelectedStatus(e.target.value)}
//                   value={selectedStatus}
//                   style={{ fontSize: "0.9rem" }}
//                 >
//                   <option value="All">All</option>
//                   <option value="Initiated">Initiated</option>
//                   <option value="Approved">Approved</option>
//                   <option value="Rejected">Rejected</option>
//                   <option value="Reinitiated">Reinitiated</option>
//                   <option value="Dropped">Dropped</option>
//                 </CFormSelect>
//               </CCol>
//               <CCol sm={2}></CCol>
//               <CCol sm={3}>
//                 <div className="d-flex justify-content-end"></div>
//               </CCol>
//             </CRow>
//           </div>
//           <div
//             className=" rounded bg-white"
//             style={{
//               fontFamily: "sans-serif",
//               fontSize: "0.9rem",
//               boxShadow: "5px 5px 20px #5D76A9",
//             }}
//           >
//             <CTable
//               align="middle"
//               responsive
//               className="mb-0    table-responsive"
//             >
//               <CTableHead>
//                 <CTableRow>
//                   <CTableHeaderCell
//                     style={{ background: "#5D76A9", color: "white" }}
//                     scope="col"
//                     className="text-center"
//                   >
//                     <input
//                       type="checkbox"
//                       checked={selectAll}
//                       onChange={handleSelectAll}
//                     />
//                   </CTableHeaderCell>
//                   <CTableHeaderCell
//                     scope="col"
//                     style={{ background: "#5D76A9", color: "white" }}
//                   >
//                     SNo.
//                   </CTableHeaderCell>
//                   <CTableHeaderCell
//                     scope="col"
//                     style={{ background: "#5D76A9", color: "white" }}
//                   >
//                     Product Name
//                   </CTableHeaderCell>
//                   <CTableHeaderCell
//                     scope="col"
//                     style={{ background: "#5D76A9", color: "white" }}
//                   >
//                     Sequence No.
//                   </CTableHeaderCell>
//                   <CTableHeaderCell
//                     scope="col"
//                     style={{ background: "#5D76A9", color: "white" }}
//                   >
//                     Additional Information
//                   </CTableHeaderCell>
//                   <CTableHeaderCell
//                     scope="col"
//                     style={{ background: "#5D76A9", color: "white" }}
//                   >
//                     Container Starting No.
//                   </CTableHeaderCell>
//                   <CTableHeaderCell
//                     scope="col"
//                     style={{ background: "#5D76A9", color: "white" }}
//                   >
//                     Sample Refrence No.
//                   </CTableHeaderCell>

//                   <CTableHeaderCell
//                     scope="col"
//                     style={{ background: "#5D76A9", color: "white" }}
//                   >
//                     Status
//                   </CTableHeaderCell>
//                   <CTableHeaderCell
//                     scope="col"
//                     style={{ background: "#5D76A9", color: "white" }}
//                   >
//                     Actions{" "}
//                   </CTableHeaderCell>
//                 </CTableRow>
//               </CTableHead>

//               <CTableBody>
//                 {filterData()
//                   .slice(startIndex, endIndex)
//                   .filter((item) => {
//                     return search.toLowerCase() === ""
//                       ? item
//                       : item.ProductName.toLowerCase().includes(search);
//                   })
//                   .map((item, index) => (
//                     <CTableRow key={index}>
//                       <CTableHeaderCell scope="row" className="text-center">
//                         <input
//                           type="checkbox"
//                           checked={checkedItems.includes(item.id)}
//                           onChange={(event) =>
//                             handleCheckboxChange(event, item.id)
//                           }
//                         />
//                       </CTableHeaderCell>
//                       <CTableDataCell>{startIndex + index + 1}</CTableDataCell>
//                       <CTableDataCell key={item.id}>
//                         {item.ProductName}
//                       </CTableDataCell>

//                       <CTableDataCell>{item.SequenceNo}</CTableDataCell>
//                       <CTableDataCell>
//                         {item.AdditionalInformation}
//                       </CTableDataCell>
//                       <CTableDataCell>
//                         {item.ContainerStartingNo}
//                       </CTableDataCell>
//                       <CTableDataCell>{item.SampleRefrenceNo}</CTableDataCell>
//                       <CTableDataCell>
//                         <button
//                           className={`py-1 px-3 small w-75 rounded text-light d-flex justify-content-center align-items-center bg-${
//                             item.status === "INITIATED"
//                               ? "blue-700"
//                               : item.status === "APPROVED"
//                               ? "green-700"
//                               : item.status === "REJECTED"
//                               ? "red-700"
//                               : item.status === "REINITIATED"
//                               ? "yellow-500"
//                               : item.status === "DROPPED"
//                               ? "purple-700"
//                               : "white"
//                           }`}
//                           style={{ fontSize: "0.6rem" }}
//                         >
//                           {item.status}
//                         </button>
//                       </CTableDataCell>
//                       <CTableDataCell>
//                         <div className="d-flex gap-3">
//                           <Link to="/approval/1321">
//                             <FontAwesomeIcon icon={faEye} />
//                           </Link>
//                           <div
//                             className="cursor-pointer"
//                             onClick={() => setAddModal(true)}
//                           >
//                             <FontAwesomeIcon icon={faPenToSquare} />
//                           </div>
//                           <div
//                             className="cursor-pointer"
//                             onClick={() => setDeleteModal(item.id)}
//                           >
//                             <FontAwesomeIcon icon={faTrashCan} />
//                           </div>
//                         </div>
//                       </CTableDataCell>
//                     </CTableRow>
//                   ))}
//               </CTableBody>
//             </CTable>
//           </div>
//           <div className="d-flex justify-content-end align-items-center mt-4">
//             <div className="pagination">
//               <button
//                 style={{ background: "#21516a", color: "white" }}
//                 className="btn mr-2"
//                 onClick={prevPage}
//                 disabled={currentPage === 1}
//               >
//                 &lt;&lt;
//               </button>
//               <button className="btn mr-2 bg-dark-subtle rounded-circle">
//                 {currentPage}
//               </button>
//               <button
//                 style={{ background: "#21516a", color: "white" }}
//                 className="btn mr-2"
//                 onClick={nextPage}
//                 disabled={endIndex >= data.length}
//               >
//                 &gt;&gt;
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {addModal && (
//         <StatusModal visible={addModal} closeModal={() => setAddModal(false)} />
//       )}
//       {deleteModal && (
//         <DeleteModal
//           visible={deleteModal !== false}
//           closeModal={() => setDeleteModal(false)}
//           handleDelete={() => handleDelete(deleteModal)}
//         />
//       )}
//     </>
//   );
// }

// const StatusModal = (_props) => {
//   return (
//     <>
//       <CModal
//         alignment="center"
//         visible={_props.visible}
//         onClose={_props.closeModal}
//       >
//         <CModalBody>
//           <CFormInput type="text" label="Lot Type" placeholder="Select " />
//           <CFormInput
//             type="text"
//             label="Lot Type"
//             placeholder="Select.... "
//             className="custom-placeholder"
//           />

//           <CFormInput
//             type="text"
//             label="Sample Refrence No."
//             placeholder="Sample Refrence No. "
//             className="custom-placeholder"
//           />
//           <CFormInput
//             type="text"
//             label="Container Type"
//             placeholder="Container Type "
//             className="custom-placeholder"
//           />
//           <CFormInput
//             type="number"
//             label="Storage Condition"
//             placeholder="Storage Condition"
//             className="custom-placeholder"
//           />
//           <CFormTextarea
//             type="text"
//             label="Available Quantity for Distribution"
//             placeholder="Available Quantity for Distribution"
//             className="custom-placeholder"
//           />
//           <CFormInput
//             type="text"
//             label="Lot Quantity for Distribution"
//             placeholder="Lot Quantity "
//             className="custom-placeholder"
//           />
//           <CFormInput
//             type="date"
            onFocus={(e) => e.target.showPicker()}

//             label="W.s Validate On"
//             placeholder=" "
//             className="custom-placeholder"
//           />
//           <CFormInput
//             type="date"
            onFocus={(e) => e.target.showPicker()}

//             label="Lot Valid Upto"
//             placeholder=""
//             className="custom-placeholder"
//           />
//           <CFormInput
//             type="text"
//             label="Usage Type"
//             placeholder="Single / Multiple"
//             className="custom-placeholder"
//           />
//           <CFormInput
//             type="text"
//             label="Direction of Usage"
//             placeholder="Direction of Usage"
//             className="custom-placeholder"
//           />
//           <CFormInput
//             type="number"
//             label="No. Of Purities"
//             placeholder="1"
//             className="custom-placeholder"
//           />

//           <CFormInput
//             type="number"
//             label="UOM"
//             placeholder="Select..."
//             className="custom-placeholder"
//           />

//           <div className="container mt-5 ">
//             <table className="table table-bordered">
//               <thead className="thead-light">
//                 <tr>
//                   <th style={{ background: "#0F93C3 ", color: "white" }}>
//                     Sno.
//                   </th>
//                   <th style={{ background: "#0F93C3 ", color: "white" }}>
//                     Purity
//                   </th>
//                   <th style={{ background: "#0F93C3 ", color: "white" }}>
//                     Value-UOM
//                   </th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td>1</td>
//                   <td>
//                     <select className="form-control">
//                       <option>Acids</option>
//                       <option>Bases</option>
//                       <option>Salts</option>
//                       <option>Solvents</option>
//                     </select>
//                   </td>
//                   <td>
//                     <input
//                       type="text"
//                       className="form-control"
//                       placeholder=""
//                     />
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//           <CFormInput
//             type="number"
//             label="Additional Purities Information"
//             placeholder="Additional Information"
//             className="custom-placeholder"
//           />
//           <CFormInput
//             type="number"
//             label="Standard Type"
//             placeholder="Standard Type"
//           />
//           <CFormInput type="number" label="Source" placeholder="Source" />

//           <CFormInput type="number" label="Comments" placeholder="Comments" />

//           <CFormInput
//             type="number"
//             label="Container Validaty Period"
//             placeholder="Container Validaty Period"
//           />
//           <CFormInput
//             type="number"
//             label="Container Starting No."
//             placeholder="Container No."
//           />
//           <CFormInput
//             type="number"
//             label="Minimum No. of Containers for Alert"
//             placeholder="1"
//           />
//           <CFormInput
//             type="number"
//             label="No. of Containers Prepared"
//             placeholder=""
//           />
//           <CFormInput
//             type="number"
//             label="Total Quantity in containers"
//             placeholder="Total Quantity in containers"
//           />
//         </CModalBody>
//         <CModalFooter>
//           <CButton color="light" onClick={_props.closeModal}>
//             Cancel
//           </CButton>
//           <CButton style={{ background: "#0F93C3", color: "white" }}>
//             Add
//           </CButton>
//         </CModalFooter>
//       </CModal>
//     </>
//   );
// };
// const DeleteModal = (_props) => {
//   return (
//     <CModal
//       alignment="center"
//       visible={_props.visible}
//       onClose={_props.closeModal}
//       size="lg"
//     >
//       <CModalHeader>
//         <CModalTitle style={{ fontSize: "1.2rem", fontWeight: "600" }}>
//           Delete Batch Sample Allotment
//         </CModalTitle>
//       </CModalHeader>
//       <div
//         className="modal-body"
//         style={{
//           fontSize: "1.2rem",
//           fontWeight: "500",
//           lineHeight: "1.5",
//           marginBottom: "1rem",
//           columnGap: "0px",
//           border: "0px !important",
//         }}
//       >
//         <p>Are you sure you want to delete this Batch Sample Allotment?</p>
//       </div>
//       <CModalFooter>
//         <CButton
//           color="secondary"
//           onClick={_props.closeModal}
//           style={{
//             marginRight: "0.5rem",
//             fontWeight: "500",
//           }}
//         >
//           Cancel
//         </CButton>
//         <CButton
//           color="danger"
//           onClick={_props.handleDelete}
//           style={{
//             fontWeight: "500",
//             color: "white",
//           }}
//         >
//           Delete
//         </CButton>
//       </CModalFooter>
//     </CModal>
//   );
// };

// export default Inventory;
