// const StatusModal = (_props) => {
//   return (
//     <CModal alignment="center" visible={_props.visible} onClose={_props.closeModal}>
//       <CModalHeader>
//         <CModalTitle>Add Inventory</CModalTitle>
//       </CModalHeader>
//       <CModalBody>
//         <label className="mb-2" htmlFor="">Material Name</label>
//         <Autocomplete
//           disablePortal
//           id="combo-box-demo"
//           className="mb-3"
//           options={top100Films}
//           renderInput={(params) => <TextField {...params} label="" />}
//         />
//         <CFormInput
//           label='Received Date'
//           className="mb-3"
//           type="date"
//           placeholder="Received Date"
//         />
//         <label className="mb-2" htmlFor="">Supplier Name</label>
//         <Autocomplete
//           disablePortal
//           id="combo-box-demo"
//           className="mb-3"
//           options={top100Films}
//           renderInput={(params) => <TextField {...params} label="" />}
//         />
//         <CFormInput
//           label='Truck No.'
//           className="mb-3"
//           type="number"
//           placeholder="Truck No."
//         />
//         <CFormInput
//           label='Ch No.'
//           className="mb-3"
//           type="number"
//           placeholder="Ch No."
//         />
//         <CFormInput
//           label='Invoice Number'
//           className="mb-3"
//           type="number"
//           placeholder="Invoice Number"
//         />
//         <CFormInput
//           label='Quantity In MT'
//           className="mb-3"
//           type="text"
//           placeholder="Quantity In MT"
//         />
//         <CFormInput
//           label='Remarks'
//           className="mb-3"
//           type="number"
//           placeholder="Remarks"
//         />
//         <div className="d-flex gap-3 mt-">
//           <CButton color="light w-50" onClick={_props.closeModal}>&lt; Back</CButton>
//           <CButton color="primary w-50">Submit</CButton>
//         </div>
//       </CModalBody>
//     </CModal>
//   );
// };

// const DeleteModal = (_props) => {
//   return (
//     <CModal alignment="center" visible={_props.visible} onClose={_props.closeModal} size="lg">
//       <CModalHeader>
//         <CModalTitle>Delete User</CModalTitle>
//       </CModalHeader>
//       <CModalBody>
//         <p>Are you sure you want to delete this Inventory?</p>
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
    MaterialName: "PLA-001",
    SupplierName: "PC-001",
    TruckNo: "TRK-001",
    ChNo: "CH-001",
    InvoiceNo: "1005ch-55",
    QuantityInMt: "25 MT",
    status: "Active",
  },
  {
    checkbox: false,
    sno: 2,
    MaterialName: "CHEM-002",
    SupplierName: "PC-002",
    TruckNo: "TRK-002",
    ChNo: "CH-002",
    InvoiceNo: "1006ch-56",
    QuantityInMt: "30 MT",
    status: "Inactive",
  },
  {
    checkbox: false,
    sno: 3,
    MaterialName: "PKG-003",
    SupplierName: "PC-003",
    TruckNo: "TRK-003",
    ChNo: "CH-003",
    InvoiceNo: "1007ch-57",
    QuantityInMt: "15 MT",
    status: "Active",
  },
  {
    checkbox: false,
    sno: 4,
    MaterialName: "MNT-004",
    SupplierName: "PC-004",
    TruckNo: "TRK-004",
    ChNo: "CH-004",
    InvoiceNo: "1008ch-58",
    QuantityInMt: "40 MT",
    status: "Inactive",
  },
  {
    checkbox: false,
    sno: 5,
    MaterialName: "EQT-005",
    SupplierName: "PC-005",
    TruckNo: "TRK-005",
    ChNo: "CH-005",
    InvoiceNo: "1009ch-59",
    QuantityInMt: "50 MT",
    status: "Active",
  },
  {
    checkbox: false,
    sno: 6,
    MaterialName: "CON-006",
    SupplierName: "PC-006",
    TruckNo: "TRK-006",
    ChNo: "CH-006",
    InvoiceNo: "1010ch-60",
    QuantityInMt: "35 MT",
    status: "Inactive",
  },
  {
    checkbox: false,
    sno: 7,
    MaterialName: "PLA-007",
    SupplierName: "PC-007",
    TruckNo: "TRK-007",
    ChNo: "CH-007",
    InvoiceNo: "1011ch-61",
    QuantityInMt: "20 MT",
    status: "Active",
  },
];

const StockInventory = () => {
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
    { header: "Material Name", accessor: "MaterialName" },
    { header: "Supplier Name", accessor: "SupplierName" },
    { header: "Truck No.", accessor: "TruckNo" },
    { header: "CH No.", accessor: "ChNo" },
    { header: "Invoice No.", accessor: "InvoiceNo" },
    { header: "Quantity in Mt", accessor: "QuantityInMt" },
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
      MaterialName: item["Material Name"] || "",
      SupplierName: item["Supplier Name"] || "",
      TruckNo: item["Truck No."] || "",
      ChNo: item["CH No."] || "",
      InvoiceNo: item["Invoice No."] || "",
      QuantityInMt: item["Quantity in Mt"] || "",
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
      <h1 className="text-2xl font-bold mb-4">Inventory/Inventory Registration</h1>

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
          <ATMButton text="Add Inventory Registration" color="blue" onClick={openModal} />
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
export default StockInventory;
