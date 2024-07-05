// const StatusModal = (_props) => {
//   return (
//     <CModal
//       alignment="center"
//       visible={_props.visible}
//       onClose={_props.closeModal}
//     >
//       <CModalHeader>
//         <CModalTitle>Stock Registration</CModalTitle>
//       </CModalHeader>
//       <CModalBody>
//         <CFormCheck
//           type="radio"
//           name="options"
//           value="rm-stock"
//           label="RM Stock"
//         />
//         <CFormCheck
//           type="radio"
//           name="options"
//           value="pm-stock"
//           label="PM Stock"
//         />
//         <CFormCheck
//           type="radio"
//           name="options"
//           value="chemical-stock"
//           label=" Chemical Stock"
//         />

//         <div className="d-flex gap-3 mt-5">
//           <CButton color="light w-50" onClick={_props.closeModal}>
//             &lt; Back
//           </CButton>
//           <CButton color="primary w-50">Next</CButton>
//         </div>
//       </CModalBody>
//     </CModal>
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
//         <CModalTitle>Delete User</CModalTitle>
//       </CModalHeader>
//       <CModalBody>
//         <p>Are you sure you want to delete this material?</p>
//       </CModalBody>
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
//           onClick={_props.confirmDelete}
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
import ImportModal from "../Modals/importModal";

const initialData = [
  {
    checkbox: false,
    sno: 1,
    MaterialType: "Plant Configuration",
    MaterialName: "PLA-001",
    InvoiceNo: "INV-001",
    SupplierName: "Supplier 1",
    VendorCode: "VC-001",
    ApprovedBy: "Manager A",
    status: "Active",
    Location: "India",
  },
  {
    checkbox: false,
    sno: 2,
    MaterialType: "Chemical",
    MaterialName: "CHEM-002",
    InvoiceNo: "INV-002",
    SupplierName: "Supplier 2",
    VendorCode: "VC-002",
    ApprovedBy: "Manager B",
    status: "Inactive",
    Location: "USA",
  },
  {
    checkbox: false,
    sno: 3,
    MaterialType: "Packaging",
    MaterialName: "PKG-003",
    InvoiceNo: "INV-003",
    SupplierName: "Supplier 3",
    VendorCode: "VC-003",
    ApprovedBy: "Manager C",
    status: "Active",
    Location: "Germany",
  },
  {
    checkbox: false,
    sno: 4,
    MaterialType: "Maintenance",
    MaterialName: "MNT-004",
    InvoiceNo: "INV-004",
    SupplierName: "Supplier 4",
    VendorCode: "VC-004",
    ApprovedBy: "Manager D",
    status: "Inactive",
    Location: "UK",
  },
  {
    checkbox: false,
    sno: 5,
    MaterialType: "Equipment",
    MaterialName: "EQT-005",
    InvoiceNo: "INV-005",
    SupplierName: "Supplier 5",
    VendorCode: "VC-005",
    ApprovedBy: "Manager E",
    status: "Active",
    Location: "China",
  },
  {
    checkbox: false,
    sno: 6,
    MaterialType: "Consumables",
    MaterialName: "CON-006",
    InvoiceNo: "INV-006",
    SupplierName: "Supplier 6",
    VendorCode: "VC-006",
    ApprovedBy: "Manager F",
    status: "Inactive",
    Location: "Japan",
  },
  {
    checkbox: false,
    sno: 7,
    MaterialType: "Plant Configuration",
    MaterialName: "PLA-007",
    InvoiceNo: "INV-007",
    SupplierName: "Supplier 7",
    VendorCode: "VC-007",
    ApprovedBy: "Manager G",
    status: "Active",
    Location: "Australia",
  },
];


const StocksOnboarding = () => {
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
    { header: "Material Type", accessor: "MaterialType" },
    { header: "Material Name", accessor: "MaterialName" },
    { header: "Invoice No.", accessor: "InvoiceNo" },
    { header: "Supplier Name", accessor: "SupplierName" },
    { header: "Vendor Code", accessor: "VendorCode" },
    { header: "Approved By", accessor: "ApprovedBy" },
    { header: "Status", accessor: "status" },
    { header: "Location", accessor: "Location" },

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
      MaterialType: item["Material Type"] || "",
      MaterialName: item["Material Name"] || "",
      InvoiceNo: item["Invoice No."] || "",
      SupplierName: item["Supplier Name"] || "",
      VendorCode: item["Vendor Code"] || "",
      ApprovedBy: item["Approved By"] || "",
      status: item["Status"] || "",
      Location: item["Location"] || "",
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
      <h1 className="text-2xl font-bold mb-4">Stock Registration</h1>

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
          <ATMButton text="Add Batch Sample" color="blue" onClick={openModal} />
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
        <ImportModal isOpen={isModalsOpen} onClose={handleCloseModals} columns={columns} onDataUpload={handleExcelDataUpload} />
      )}
    </div>
  );
};
export default StocksOnboarding;
