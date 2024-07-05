//   const StatusModal = (_props) => {
//     return (
//       <CModal alignment="center" visible={_props.visible} onClose={_props.closeModal}>
//         <CModalHeader>
//           <CModalTitle>Add Material</CModalTitle>
//         </CModalHeader>
//         <CModalBody>
//         <CFormInput
//           label='Material Name'
//           className="mb-3"
//           type="text"
//           placeholder="Material Name"
//           />
//           <CFormInput
//           label='Description'
//           className="mb-3"
//           type="text"
//           placeholder="Description"
//           />

//           <div className="d-flex gap-3 mt-">
//             <CButton color="light w-50" onClick={_props.closeModal}>&lt; Back</CButton>
//             <CButton color="primary w-50">Add Material</CButton>
//           </div>

//         </CModalBody>
//       </CModal>
//     )
//   }

//   const DeleteModal = (_props) => {
//     return (
//         <CModal alignment="center" visible={_props.visible} onClose={_props.closeModal} size="lg">
//             <CModalHeader>
//                 <CModalTitle>Delete User</CModalTitle>
//             </CModalHeader>
//             <CModalBody>
//                 <p>Are you sure you want to delete this material?</p>
//             </CModalBody>
//             <CModalFooter>
//                 <CButton
//                     color="secondary"
//                     onClick={_props.closeModal}
//                     style={{
//                         marginRight: "0.5rem",
//                         fontWeight: "500",
//                     }}
//                 >
//                     Cancel
//                 </CButton>
//                 <CButton
//                     color="danger"
//                     onClick={_props.confirmDelete}
//                     style={{
//                         fontWeight: "500",
//                         color: "white",
//                     }}
//                 >
//                     Delete
//                 </CButton>
//             </CModalFooter>
//         </CModal>
//     );
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
import ImportModal from "../Modals/importModal";

const initialData = [
  {
    checkbox: false,
    sno: 1,
    UniqueCode: "PC-001",
    MaterialName: "PLA-001",
    InvoiceNo: "INV-001",
    Description: "Supplier 1",
    status: "Active",
  },
  {
    checkbox: false,
    sno: 2,
    UniqueCode: "CH-002",
    MaterialName: "CHEM-002",
    InvoiceNo: "INV-002",
    Description: "Supplier 2",
    status: "Inactive",
  },
  {
    checkbox: false,
    sno: 3,
    UniqueCode: "PK-003",
    MaterialName: "PKG-003",
    InvoiceNo: "INV-003",
    Description: "Supplier 3",
    status: "Active",
  },
  {
    checkbox: false,
    sno: 4,
    UniqueCode: "MT-004",
    MaterialName: "MNT-004",
    InvoiceNo: "INV-004",
    Description: "Supplier 4",
    status: "Inactive",
  },
  {
    checkbox: false,
    sno: 5,
    UniqueCode: "EQ-005",
    MaterialName: "EQT-005",
    InvoiceNo: "INV-005",
    Description: "Supplier 5",
    status: "Active",
  },
  {
    checkbox: false,
    sno: 6,
    UniqueCode: "CN-006",
    MaterialName: "CON-006",
    InvoiceNo: "INV-006",
    Description: "Supplier 6",
    status: "Inactive",
  },
  {
    checkbox: false,
    sno: 7,
    UniqueCode: "PC-007",
    MaterialName: "PLA-007",
    InvoiceNo: "INV-007",
    Description: "Supplier 7",
    status: "Active",
  },
];


const Material = () => {
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

  const [isModalsOpen, setIsModalsOpen] = useState(false);
  const handleOpenModals = () => {
    setIsModalsOpen(true);
  };
  const handleCloseModals = () => {
    setIsModalsOpen(false);
  };

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
      row.MaterialName.toLowerCase().includes(searchQuery.toLowerCase()) &&
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
    { header: "Unique Code", accessor: "UniqueCode" },
    { header: "Material Name", accessor: "MaterialName" },
    { header: "Description", accessor: "Description" },
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

  const handleExcelDataUpload = (excelData) => {
    const updatedData = excelData.map((item, index) => ({
      checkbox: false,
      sno: data.length + index + 1,
      UniqueCode: item["Unique Code"] || "",
      MaterialName: item["Material Name"] || "",
      Description: item["Description"] || "",
      status: item["Status"] || "",
    }));
  
    const concatenatedData = [ ...updatedData];
    setData(concatenatedData);
setIsModalsOpen(false);; // Update data state with parsed Excel data
  };
  

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
      <h1 className="text-2xl font-bold mb-4">Material</h1>

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
            color='pink'
            onClick={handleOpenModals}
             />
          <ATMButton text="Add Material" color="blue" onClick={openModal} />
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

{isModalsOpen && (
        <ImportModal initialData = {initialData} isOpen={isModalsOpen} onClose={handleCloseModals} columns={columns} onDataUpload={handleExcelDataUpload} />
      )}

    </div>
  );
};
export default Material;
