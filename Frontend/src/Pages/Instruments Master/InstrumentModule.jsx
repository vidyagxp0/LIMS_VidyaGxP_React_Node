// const StatusModal = (_props) => {
//     return (
//         <>
//             <CModal alignment="center" visible={_props.visible} onClose={_props.closeModal}>
//                 <CModalHeader>
//                     <CModalTitle>Add Instrument Module</CModalTitle>
//                 </CModalHeader>
//                 <CModalBody>
//                     <p>Add information and Add Instrument Module</p>
//                     <CFormSelect
//                         className="mb-3"
//                         type="text"
//                         label="Instrument (Instrument ID)"
//                         placeholder="Select... "
//                         options={[
//                             "Select...",
//                             { label: "Weighing Balance 2" },
//                             { label: "Pressure Gauge" },
//                             { label: "ARZ ph Meter" },
//                             { label: "Ariz Balance" },
//                             { label: "Weighing Balance-1" },
//                             { label: "Weighing Balance" },
//                         ]}
//                     />
//                     <CFormInput
//                         className="mb-3"
//                         type="text"
//                         label="Instruction Category"
//                         placeholder="Weighing Balance"
//                         disabled
//                     />
//                     <CFormInput
//                         className="mb-3"
//                         type="text"
//                         label="Module"
//                         placeholder="Module"
//                     />
//                     <CFormInput
//                         className="mb-3"
//                         type="text"
//                         label="Module ID"
//                         placeholder="Module ID"
//                     />
//                     <CFormInput
//                         className="mb-3"
//                         type="text"
//                         label="Make"
//                         placeholder="Shimadu"
//                         disabled
//                     />
//                     <CFormInput
//                         className="mb-3"
//                         type="text"
//                         label="Model"
//                         placeholder="Ser33"
//                         disabled
//                     />
//                     <CFormInput
//                         className="mb-3"
//                         type="text"
//                         label="Manufacturer's Serial No."
//                         placeholder="adf3434"
//                         disabled
//                     />
//                     <CFormInput
//                         className="mb-3"
//                         type="date"
//                         label="Installed On"
//                         placeholder="05/10/2024"
//                         disabled
//                     />
//                     <CFormInput
//                         className="mb-3"
//                         type="date"
//                         label="Warranty Expires On"
//                         placeholder="05/05/2023"
//                         disabled
//                     />
//                     <CFormInput
//                         className="mb-3"
//                         type="text"
//                         label="Supplied By"
//                         placeholder="VidyaGxP"
//                         disabled
//                     />
//                     <CFormInput
//                         className="mb-3"
//                         type="text"
//                         label="SOP No."
//                         placeholder="ASTM6453"
//                         disabled
//                     />
//                 </CModalBody>
//                 <CModalFooter>
//                     <CButton color="light" onClick={_props.closeModal}>Back</CButton>
//                     <CButton color="primary">Submit</CButton>
//                 </CModalFooter>
//             </CModal>
//         </>
//     )
// }

// const DeleteModal = (_props) => {
//     return (
//         <CModal
//             alignment="center"
//             visible={_props.visible}
//             onClose={_props.closeModal}
//             size="lg"
//         >
//             <CModalHeader>
//                 <CModalTitle style={{ fontSize: "1.2rem", fontWeight: "600" }}>
//                     Delete Instrument Module
//                 </CModalTitle>
//             </CModalHeader>
//             <div
//                 className="modal-body"
//                 style={{
//                     fontSize: "1.2rem",
//                     fontWeight: "500",
//                     lineHeight: "1.5",
//                     marginBottom: "1rem",
//                     columnGap: "0px",
//                     border: "0px !important",
//                 }}
//             >
//                 <p>Are you sure you want to delete this instrument module { }?</p>
//             </div>
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
      Category: "Product 1",
      Module: "Description 1",
      ModuleId: "MOD001",
      Make: "Brand A",
      Model: "Model X",
      ManufacturerNo: "MFG12345",
      SuppliedBy: "Supplier 1",
      InstallOn: "2024-06-01",
      ExpiresOn: "2025-06-01",
      status: "Active",
    },
    {
      checkbox: false,
      sno: 2,
      Category: "Product 2",
      Module: "Description 2",
      ModuleId: "MOD002",
      Make: "Brand B",
      Model: "Model Y",
      ManufacturerNo: "MFG67890",
      SuppliedBy: "Supplier 2",
      InstallOn: "2024-06-02",
      ExpiresOn: "2025-06-02",
      status: "Inactive",
    },
    {
      checkbox: false,
      sno: 3,
      Category: "Product 3",
      Module: "Description 3",
      ModuleId: "MOD003",
      Make: "Brand C",
      Model: "Model Z",
      ManufacturerNo: "MFG11111",
      SuppliedBy: "Supplier 3",
      InstallOn: "2024-06-03",
      ExpiresOn: "2025-06-03",
      status: "Active",
    },
    {
      checkbox: false,
      sno: 4,
      Category: "Product 4",
      Module: "Description 4",
      ModuleId: "MOD004",
      Make: "Brand D",
      Model: "Model W",
      ManufacturerNo: "MFG22222",
      SuppliedBy: "Supplier 4",
      InstallOn: "2024-06-04",
      ExpiresOn: "2025-06-04",
      status: "Inactive",
    },
    {
      checkbox: false,
      sno: 5,
      Category: "Product 5",
      Module: "Description 5",
      ModuleId: "MOD005",
      Make: "Brand E",
      Model: "Model V",
      ManufacturerNo: "MFG33333",
      SuppliedBy: "Supplier 5",
      InstallOn: "2024-06-05",
      ExpiresOn: "2025-06-05",
      status: "Active",
    },
    {
      checkbox: false,
      sno: 6,
      Category: "Product 6",
      Module: "Description 6",
      ModuleId: "MOD006",
      Make: "Brand F",
      Model: "Model U",
      ManufacturerNo: "MFG44444",
      SuppliedBy: "Supplier 6",
      InstallOn: "2024-06-06",
      ExpiresOn: "2025-06-06",
      status: "Inactive",
    },
    {
      checkbox: false,
      sno: 7,
      Category: "Product 7",
      Module: "Description 7",
      ModuleId: "MOD007",
      Make: "Brand G",
      Model: "Model T",
      ManufacturerNo: "MFG55555",
      SuppliedBy: "Supplier 7",
      InstallOn: "2024-06-07",
      ExpiresOn: "2025-06-07",
      status: "Active",
    },
  ];
  

const InstrumentModule = () => {
  const [data, setData] = useState(initialData);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [viewModalData, setViewModalData] = useState(null);
  const [cardCounts, setCardCounts] = useState({
    DROPPED: 0,
    INITIATED: 0,
    REINITIATED: 0,
    APPROVED: 0,
    REJECTED: 0,
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
      row.Category.toLowerCase().includes(searchQuery.toLowerCase()) &&
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
    { header: "Category", accessor: "Category" },
    { header: "Module", accessor: "ModuleId" },
    { header: "Make", accessor: "Make" },
    { header: "Model", accessor: "Model" },
    { header: "Manufacturer No.", accessor: "ManufacturerNo" },
    { header: "Supplied By", accessor: "SuppliedBy" },
    { header: "Install On", accessor: "InstallOn" },
    { header: "Expires On", accessor: "ExpiresOn" },
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
      Category: item["Category"] || "",
      ModuleId: item["Module"] || "",
      Make: item["Make"] || "",
      Model: item["Model"] || "",
      ManufacturerNo: item["Manufacturer No."] || "",
      SuppliedBy: item["Supplied By"] || "",
      InstallOn: item["Install On"] || "",
      ExpiresOn: item["Expires On"] || "",
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
      <h1 className="text-2xl font-bold mb-4">Instrument Category</h1>

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
        <div className="float-right flex gap-4">
            <ATMButton 
            text="Import"
            color='pink'
            onClick={handleOpenModals}
             />
          <ATMButton
            text="Instrument Category"
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
export default InstrumentModule;
