// const StatusModal = (_props) => {
//   return (
//     <>
//       <CModal
//         alignment="center"
//         visible={_props.visible}
//         onClose={_props.closeModal}
//       >
//         <CModalHeader className="p-3">
//           <CModalTitle>Add COA Template</CModalTitle>
//         </CModalHeader>

//         <p>Add information and Add Coa Template</p>
//         <div className="modal-body p-4">
//           <CForm>
//             <div className="mb-3">
//               <CFormInput
//                 type="text"
//                 label="Configuration type

//                 "
//                 placeholder=""
//                 className="custom-placeholder"
//               />
//             </div>
//             <div className="mb-3">
//               <CFormInput
//                 type="text"
//                 label="Unique Code

//                 "
//                 placeholder=""
//                 className="custom-placeholder"
//               />
//             </div>

//             <div className="mb-3">
//               <CFormSelect
//                 type="text"
//                 label="Report Title

//                 "
//                 placeholder=""
//                 className="custom-placeholder"
//               />
//             </div>
//             <div className="mb-3">
//               <CFormInput
//                 type="text"
//                 label="Format No.

//                 "
//                 placeholder=""
//                 className="custom-placeholder"
//               />
//             </div>
//             <div style={{ background: "lightgray", padding: "5px auto " }}>
//               <p>Header</p>
//             </div>

//             <div className="mb-3">
//               <CFormSelect
//                 type="text"
//                 label="Rows
//                 "
//                 placeholder=""
//                 className="custom-placeholder"
//               />
//             </div>

//             <div className="mb-3">
//               <CFormSelect
//                 type="text"
//                 label="Columns

//                 "
//                 placeholder=""
//                 className="custom-placeholder"
//               />
//             </div>

//             <div style={{ background: "lightgray", padding: "5px auto " }}>
//               <p>Footer</p>
//             </div>

//             <div className="mb-3">
//               <CFormSelect
//                 type="text"
//                 label="Rows
//                 "
//                 placeholder=""
//                 className="custom-placeholder"
//               />
//             </div>

//             <div className="mb-3">
//               <CFormSelect
//                 type="text"
//                 label="Columns

//                 "
//                 placeholder=""
//                 className="custom-placeholder"
//               />
//             </div>

//             <CContainer>
//               <CRow className="my-3">
//                 <CCol xs="auto">
//                   <CFormLabel
//                     htmlFor="approved_by"
//                     className="d-flex align-items-center"
//                     style={{
//                       border: "1px solid lightgray",
//                       borderRadius: "5px",
//                       padding: "8px",
//                       background: "#F5F6FA",
//                     }}
//                   >
//                     Approved By
//                   </CFormLabel>
//                 </CCol>
//                 <CCol>
//                   <CFormSelect id="approved_by">
//                     <option value="approved_by">approved_by</option>
//                   </CFormSelect>
//                 </CCol>
//               </CRow>
//               <CRow className="my-3">
//                 <CCol xs="auto">
//                   <CFormLabel
//                     htmlFor="reviewed_by"
//                     className="d-flex align-items-center"
//                     style={{
//                       border: "1px solid lightgray",
//                       borderRadius: "5px",
//                       padding: "8px",
//                       background: "#F5F6FA",
//                     }}
//                   >
//                     Reviewed By
//                   </CFormLabel>
//                 </CCol>
//                 <CCol>
//                   <CFormSelect id="reviewed_by">
//                     <option value="reviewed_by">reviewed_by</option>
//                   </CFormSelect>
//                 </CCol>
//               </CRow>
//               <CRow className="my-3">
//                 <CCol xs="auto">
//                   <CFormLabel
//                     htmlFor="checked_by"
//                     className="d-flex align-items-center"
//                     style={{
//                       border: "1px solid lightgray",
//                       borderRadius: "5px",
//                       padding: "8px",
//                       background: "#F5F6FA",
//                     }}
//                   >
//                     Checked By
//                   </CFormLabel>
//                 </CCol>
//                 <CCol>
//                   <CFormSelect id="checked_by">
//                     <option value="checked_by">checked_by</option>
//                   </CFormSelect>
//                 </CCol>
//               </CRow>
//             </CContainer>
//           </CForm>
//         </div>

//         <CModalFooter className="p-3">
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


import React, { useState, useEffect } from "react";
import Card from "../../components/ATM components/Card/Card";
import SearchBar from "../../components/ATM components/SearchBar/SearchBar";
import Dropdown from "../../components/ATM components/Dropdown/Dropdown";
import Table from "../../components/ATM components/Table/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import ATMButton from "../../components/ATM components/Button/ATMButton";
import InternalRegistrationModal from "../Modals/InternalRegistrationModal";
import ViewModal from "../Modals/ViewModal";

const initialData = [
  {
    checkbox: false,
    sno: 1,
    ConfigurationType: "Plant Configuration",
    UniqueCode: "PLA-001",
    ReportTitle: "Production Line A Configuration",
    UpdatedAt: "2024-07-01",
    status: "Active",
  },
  {
    checkbox: false,
    sno: 2,
    ConfigurationType: "Warehouse Configuration",
    UniqueCode: "WHB-001",
    ReportTitle: "Warehouse B Configuration",
    UpdatedAt: "2024-07-01",
    status: "Active",
  },
  {
    checkbox: false,
    sno: 3,
    ConfigurationType: "Lab Configuration",
    UniqueCode: "RLC-001",
    ReportTitle: "Research Lab C Configuration",
    UpdatedAt: "2024-07-01",
    status: "Inactive",
  },
  {
    checkbox: false,
    sno: 4,
    ConfigurationType: "Assembly Line Configuration",
    UniqueCode: "ALD-001",
    ReportTitle: "Assembly Line D Configuration",
    UpdatedAt: "2024-07-01",
    status: "Active",
  },
  {
    checkbox: false,
    sno: 5,
    ConfigurationType: "Processing Unit Configuration",
    UniqueCode: "PUE-001",
    ReportTitle: "Processing Unit E Configuration",
    UpdatedAt: "2024-07-01",
    status: "Active",
  },
  {
    checkbox: false,
    sno: 6,
    ConfigurationType: "Distribution Center Configuration",
    UniqueCode: "DCF-001",
    ReportTitle: "Distribution Center F Configuration",
    UpdatedAt: "2024-07-01",
    status: "Active",
  },
  {
    checkbox: false,
    sno: 7,
    ConfigurationType: "Testing Facility Configuration",
    UniqueCode: "TFG-001",
    ReportTitle: "Testing Facility G Configuration",
    UpdatedAt: "2024-07-01",
    status: "Active",
  },
];

const EMCOATemplate = () => {
  const [data, setData] = useState(initialData);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [viewModalData, setViewModalData] = useState(null);
  const [cardCounts, setCardCounts] = useState({
    Active: 0,
    Inactive: 0,
  });

  useEffect(() => {
    const counts = {
      Active: 0,
      Inactive: 0,
    };

    data.forEach((item) => {
      if (item.status === "Active") counts.Active++;
      else if (item.status === "Inactive") counts.Inactive++;
    });

    setCardCounts(counts);
  }, [data]);

  const handleCheckboxChange = (index) => {
    const newData = [...data];
    newData[index].checkbox = !newData[index].checkbox;
    setData(newData);
  };

  const handleSelectAll = (e) => {
    const checked = e.target.checked;
    const newData = data.map((row) => ({ ...row, checkbox: checked }));
    setData(newData);
  };

  const filteredData = data.filter((row) => {
    return (
      row.ConfigurationType.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (statusFilter === "All" || row.status === statusFilter)
    );
  });

  const onViewDetails = (rowData) => {
    setViewModalData(rowData);
    setIsViewModalOpen(true);
  };

  const columns = [
    {
      header: <input type="checkbox" onChange={handleSelectAll} />,
      accessor: "checkbox",
    },
    { header: "SrNo.", accessor: "sno" },
    { header: "Configuration Type", accessor: "ConfigurationType" },
    { header: "Unique Code", accessor: "UniqueCode" },
    { header: "Report Title", accessor: "ReportTitle" },
    { header: "Updated At ", accessor: "UpdatedAt" },
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
    setIsViewModalOpen(false);
  };

  const handleCardClick = (status) => {
    setStatusFilter(status);
  };

  const handleDelete = (item) => {
    const newData = data.filter((d) => d !== item);
    setData(newData);
    console.log("Deleted item:", item);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">EM COA Template</h1>

      <div className="flex items-center justify-between mb-4">
        <div className="flex space-x-4">
          {/* <SearchBar value={searchQuery} onChange={setSearchQuery} /> */}
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
          <ATMButton text="Add COA Template" color="blue" onClick={openModal} />
        </div>
      </div>
      <Table
        columns={columns}
        data={filteredData}
        onCheckboxChange={handleCheckboxChange}
        onViewDetails={onViewDetails}
        onDelete={handleDelete}
      />
      <InternalRegistrationModal
        visible={isModalOpen}
        closeModal={closeModal}
      />
      {isViewModalOpen && (
        <ViewModal
          visible={isViewModalOpen}
          closeModal={closeViewModal}
          data={viewModalData}
        />
      )}
    </div>
  );
};
export default EMCOATemplate;
