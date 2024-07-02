// const StatusModal = (_props) => {
//   return (
//     <>
//       <CModal
//         alignment="center"
//         visible={_props.visible}
//         onClose={_props.closeModal}
//       >
//         <CModalHeader className="p-3">
//           <CModalTitle>Add Batch Sample Registration</CModalTitle>
//         </CModalHeader>

//         <p>Add information and register new Batch Sample</p>
//         <div className="modal-body p-4">
//           <CForm>
//             <div className="mb-3">
//               <CFormInput
//                 type="text"
//                 label="Schedule Code

//                 "
//                 placeholder=""
//                 className="custom-placeholder"
//               />
//             </div>
//             <div className="mb-3">
//               <CFormInput
//                 type="text"
//                 label="Due On

// +
//                 "
//                 placeholder=""
//                 className="custom-placeholder"
//               />
//             </div>

//             <div className="mb-3">
//               <CFormSelect
//                 type="text"
//                 label="Test Plan

//                "
//                 placeholder=""
//                 className="custom-placeholder"
//               />
//             </div>
//             <h5 style={{ fontWeight: "bolder" }}>
//               EM Monitoring Details(Sampling Schedule)
//             </h5>
//             <div className="mb-3">
//               <CFormInput
//                 type="date"
//                 label="Date of Monitoring

//                 "
//                 placeholder=""
//                 className="custom-placeholder"
//               />
//             </div>

//             <div className="mb-3">
//               <CFormInput
//                 type="text"
//                 label="Monitored / Sampled By
//                 "
//                 placeholder=""
//                 className="custom-placeholder"
//               />
//             </div>
//             <h5 style={{ fontWeight: "bolder" }}>EM Monitoring Details</h5>

//             <div className="mb-3">
//               <CFormInput
//                 type="text"
//                 label="Activity Type
//                 "
//                 placeholder=""
//                 className="custom-placeholder"
//               />
//             </div>

//             <div className="mb-3">
//               <CFormInput
//                 type="time"
//                 label="Exposure Start Time

//                 "
//                 placeholder=""
//                 className="custom-placeholder"
//               />
//             </div>
//             <div></div>

//             <div className="mb-3">
//               <CFormInput
//                 type="text"
//                 label="Product Name

//                 "
//                 placeholder=""
//                 className="custom-placeholder"
//               />
//             </div>

//             <div className="mb-3">
//               <CFormInput
//                 type="text"
//                 label="Report No.

//                 "
//                 placeholder=""
//                 className="custom-placeholder"
//               />
//             </div>

//             <div className="mb-3">
//               <CFormInput
//                 type="date"
//                 label="Membrance Holder Sterilized On

//                 "
//                 placeholder=""
//                 className="custom-placeholder"
//               />
//             </div>
//             <div className="mb-3">
//               <CFormInput
//                 type="text"
//                 label="Gelatine Membrane Lot No.

//                 "
//                 placeholder=""
//                 className="custom-placeholder"
//               />
//             </div>
//             <div className="mb-3">
//               <CFormInput
//                 type="date"
//                 label="Use Before

//                 "
//                 placeholder=""
//                 className="custom-placeholder"
//               />
//             </div>
//           </CForm>
//         </div>

//         <CModalFooter className="p-3">
//           <CButton color="light" onClick={_props.closeModal}>
//             Cancel
//           </CButton>
//           <CButton style={{ background: "#0F93C3", color: "white" }}>
//             Submit
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
    SampleType: "Plant Configuration",
    ProductMaterial: "PLA-001",
    ARNO: "PLA-001",
    GenericName: "PLA-001",
    SpecificationCode: "PLA-001",
    status: "REINITIATED",
  },
  {
    checkbox: false,
    sno: 2,
    SampleType: "Laboratory A",
    ProductMaterial: "LAB-002",
    ARNO: "LAB-002",
    GenericName: "LAB-002",
    SpecificationCode: "LAB-002",
    status: "REINITIATED",
  },
  {
    checkbox: false,
    sno: 3,
    SampleType: "Research Center",
    ProductMaterial: "RC-003",
    ARNO: "RC-003",
    GenericName: "RC-003",
    SpecificationCode: "RC-003",
    status: "REJECTED",
  },
  {
    checkbox: false,
    sno: 4,
    SampleType: "Production Site",
    ProductMaterial: "PS-004",
    ARNO: "PS-004",
    GenericName: "PS-004",
    SpecificationCode: "PS-004",
    status: "DROPPED",
  },
  {
    checkbox: false,
    sno: 5,
    SampleType: "Warehouse",
    ProductMaterial: "WH-005",
    ARNO: "WH-005",
    GenericName: "WH-005",
    SpecificationCode: "WH-005",
    status: "INITIATED",
  },
  {
    checkbox: false,
    sno: 6,
    SampleType: "Testing Facility",
    ProductMaterial: "TF-006",
    ARNO: "TF-006",
    GenericName: "TF-006",
    SpecificationCode: "TF-006",
    status: "Active",
  },
  {
    checkbox: false,
    sno: 7,
    SampleType: "Quality Control",
    ProductMaterial: "QC-007",
    ARNO: "QC-007",
    GenericName: "QC-007",
    SpecificationCode: "QC-007",
    status: "Active",
  },
];

const SampleLogin = () => {
  const [data, setData] = useState(initialData);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [viewModalData, setViewModalData] = useState(null);
  const [cardCounts, setCardCounts] = useState({
    INITIATED: 0,
    REINITIATED: 0,
    APPROVED: 0,
    REJECTED: 0,
    DROPPED: 0,
  });

  useEffect(() => {
    const counts = {
      INITIATED: 0,
      REINITIATED: 0,
      APPROVED: 0,
      REJECTED: 0,
      DROPPED: 0,
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
      row.SampleType.toLowerCase().includes(searchQuery.toLowerCase()) &&
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
    { header: "Sample Type", accessor: "SampleType" },
    { header: "Product/Material", accessor: "ProductMaterial" },
    { header: "A.R No.", accessor: "ARNO" },
    { header: "Generic Name", accessor: "GenericName" },
    { header: "Specification Code", accessor: "SpecificationCode" },
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
      <h1 className="text-2xl font-bold mb-4">Sample Login</h1>

      <div className="flex items-center justify-between mb-4">
        <div className="flex space-x-4">
          {/* <SearchBar value={searchQuery} onChange={setSearchQuery} /> */}
          <Dropdown
            options={[
              { value: "All", label: "All" },
              { value: "INITIATED", label: "INITIATED" },
              { value: "REINITIATED", label: "REINITIATED" },
              { value: "REJECTED", label: "REJECTED" },
              { value: "DROPPED", label: "DROPPED" },
            ]}
            value={statusFilter}
            onChange={setStatusFilter}
          />
        </div>
        <div className="float-right">
          {/* <ATMButton text="Add Batch Sample" color="blue" onClick={openModal} /> */}
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
export default SampleLogin;
