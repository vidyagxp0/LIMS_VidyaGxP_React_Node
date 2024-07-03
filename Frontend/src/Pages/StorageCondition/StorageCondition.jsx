// const StatusModal = (_props) => {
//   return (
//     <>
//       <CModal
//         alignment="center"
//         visible={_props.visible}
//         onClose={_props.closeModal}
//         size="xl"
//       >
//         <CModalHeader className="p-3">
//           <CModalTitle>New Storage Condition</CModalTitle>
//         </CModalHeader>

//         <p className="ml-4">
//           Add a new storage.
//         </p>
//         <div className="modal-body p-4">
//           <CForm>
//             <div className="mb-3">
//               <CFormInput
//                 type="text"
//                 label="Name"
//                 placeholder="Storage Name"
//                 className="custom-placeholder"
//               />
//             </div>
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
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "./StorageCondition.css";
import Dropdown from "../../components/ATM components/Dropdown/Dropdown";
import SearchBar from "../../components/ATM components/SearchBar/SearchBar";
import ATMButton from "../../components/ATM components/Button/ATMButton";
import Table from "../../components/ATM components/Table/Table";
import ViewModal from "../Modals/ViewModal";
import ImportModal from "../Modals/importModal";

const initialData = [
  {
    checkbox: false,
    sno: 1,
    conditionCode: "CC1",
    storageCondition: "SC1",
    createdAt: "2023-01-01",
    attachment: "attachment",
    status: "Active",
  },
  {
    checkbox: false,
    sno: 2,
    conditionCode: "CC2",
    storageCondition: "SC2",
    createdAt: "2023-02-01",
    attachment: "attachment",
    status: "Active",
  },
  {
    checkbox: false,
    sno: 3,
    conditionCode: "CC3",
    storageCondition: "SC3",
    createdAt: "2023-03-01",
    attachment: "attachment",
    status: "Inactive",
  },
  {
    checkbox: false,
    sno: 4,
    conditionCode: "CC4",
    storageCondition: "SC4",
    createdAt: "2023-04-01",
    attachment: "attachment",
    status: "Active",
  },
  {
    checkbox: false,
    sno: 5,
    conditionCode: "CC5",
    storageCondition: "SC5",
    createdAt: "2023-05-01",
    attachment: "attachment",
    status: "Inactive",
  },
  {
    checkbox: false,
    sno: 6,
    conditionCode: "CC6",
    storageCondition: "SC6",
    createdAt: "2023-06-01",
    attachment: "attachment",
    status: "Active",
  },
  {
    checkbox: false,
    sno: 7,
    conditionCode: "CC7",
    storageCondition: "SC7",
    createdAt: "2023-07-01",
    attachment: "attachment",
    status: "Inactive",
  },
  {
    checkbox: false,
    sno: 8,
    conditionCode: "CC8",
    storageCondition: "SC8",
    createdAt: "2023-08-01",
    attachment: "attachment",
    status: "Active",
  },
  {
    checkbox: false,
    sno: 9,
    conditionCode: "CC9",
    storageCondition: "SC9",
    createdAt: "2023-09-01",
    attachment: "attachment",
    status: "Inactive",
  },
  {
    checkbox: false,
    sno: 10,
    conditionCode: "CC10",
    storageCondition: "SC10",
    createdAt: "2023-10-01",
    attachment: "attachment",
    status: "Active",
  },
];

function StorageLocation() {
  const [data, setData] = useState(initialData);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [viewModalData, setViewModalData] = useState(null);
  const [isModalsOpen, setIsModalsOpen] = useState(false);


  const handleOpenModals = () => {
    setIsModalsOpen(true);
  };

  const handleCloseModals = () => {
    setIsModalsOpen(false);
  };

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

  const handleExcelDataUpload = (excelData) => {
    const updatedData = excelData.map((item, index) => ({
      checkbox: false,
      sno: initialData.length + index + 1,
      conditionCode: item["Condition Code"] || "",
      storageCondition: item["Stability Storage Condition"] || "",
      createdAt: item["Created At"] || "",
      attachment: item["Attachment"] || "", // Ensure field name matches your Excel data
      status: item["Status"] || "Active",
    }));
  
    // Concatenate the updated data with existing data
    const concatenatedData = [...data, ...updatedData];
    setData(concatenatedData); // Update data state with parsed Excel data
  
    setIsModalsOpen(false); // Close the import modal after data upload
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
    { header: "attachment", accessor: "attachment" },
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
          <FontAwesomeIcon icon={faTrashCan} className="cursor-pointer" />
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

  const handleDelete = (item) => {
    const newData = data.filter((d) => d !== item);
    setData(newData);
    console.log("Deleted item:", item);
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
          <div className="float-right flex gap-4">
          <ATMButton
              text="Import"
              color="pink"
              onClick={handleOpenModals}
            />
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
          onDelete={handleDelete}
        />
      </div>

      {isModalOpen && (
        <StatusModal visible={isModalOpen} closeModal={closeModal} />
      )}
      {viewModalData && (
        <ViewModal visible={viewModalData} closeModal={closeViewModal} />
      )}
      {isModalsOpen && (
        <ImportModal isOpen={isModalsOpen} onClose={handleCloseModals} columns={columns} onDataUpload={handleExcelDataUpload} />
      )}
    </>
  );
}

export default StorageLocation;
