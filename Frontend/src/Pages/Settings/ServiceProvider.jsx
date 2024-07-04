// const StatusModal = (_props) => {
//   return (
//     <>

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
import ServiceProviderModal from "../Modals/ServiceProviderModal.jsx";
import ViewModal from "../Modals/ViewModal";
import ImportModal from "../Modals/importModal.jsx";

const initialData = [
  {
    checkbox: false,
    sno: 1,
    ServiceProviderName: "SPH-001",
    UniqueCode: "Product A",
    City: "Purity Test",
    State: "PT-001",
    Country: "M-001",
    PinCode: "123456",
    ValidUpto: "2024-12-31",
    status: "REJECTED",
  },
  {
    checkbox: false,
    sno: 2,
    ServiceProviderName: "SPH-002",
    UniqueCode: "Product B",
    City: "Strength Test",
    State: "ST-002",
    Country: "M-002",
    PinCode: "654321",
    ValidUpto: "2025-06-30",
    status: "INITIATED",
  },
  {
    checkbox: false,
    sno: 3,
    ServiceProviderName: "SPH-003",
    UniqueCode: "Product C",
    City: "Microbial Test",
    State: "MT-003",
    Country: "M-003",
    PinCode: "789456",
    ValidUpto: "2024-09-15",
    status: "REINITIATED",
  },
  {
    checkbox: false,
    sno: 4,
    ServiceProviderName: "SPH-004",
    UniqueCode: "Product D",
    City: "Dissolution Test",
    State: "DT-004",
    Country: "M-004",
    PinCode: "321789",
    ValidUpto: "2025-01-20",
    status: "APPROVED",
  },
  {
    checkbox: false,
    sno: 5,
    ServiceProviderName: "SPH-005",
    UniqueCode: "Product E",
    City: "Moisture Content",
    State: "MC-005",
    Country: "M-005",
    PinCode: "456123",
    ValidUpto: "2024-11-05",
    status: "DROPPED",
  },
  {
    checkbox: false,
    sno: 6,
    ServiceProviderName: "SPH-006",
    UniqueCode: "Product F",
    City: "Hardness Test",
    State: "HT-006",
    Country: "M-006",
    PinCode: "147258",
    ValidUpto: "2025-03-12",
    status: "REJECTED",
  },
  {
    checkbox: false,
    sno: 7,
    ServiceProviderName: "SPH-007",
    UniqueCode: "Product G",
    City: "Viscosity Test",
    State: "VT-007",
    Country: "M-007",
    PinCode: "369852",
    ValidUpto: "2025-02-28",
    status: "REJECTED",
  },
  {
    checkbox: false,
    sno: 8,
    ServiceProviderName: "SPH-008",
    UniqueCode: "Product H",
    City: "PH Test",
    State: "PH-008",
    Country: "M-008",
    PinCode: "258963",
    ValidUpto: "2024-08-19",
    status: "INITIATED",
  },
];

const ServiceProvider = () => {
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
      DROPPED: 0,
      INITIATED: 0,
      REINITIATED: 0,
      APPROVED: 0,
      REJECTED: 0,
    };

    data.forEach((item) => {
      if (item.status === "DROPPED") counts.DROPPED++;
      else if (item.status === "INITIATED") counts.INITIATED++;
      else if (item.status === "REINITIATED") counts.REINITIATED++;
      else if (item.status === "APPROVED") counts.APPROVED++;
      else if (item.status === "REJECTED") counts.REJECTED++;
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
      row.ServiceProviderName.toLowerCase().includes(
        searchQuery.toLowerCase()
      ) &&
      (statusFilter === "All" || row.status === statusFilter)
    );
  });

  const onViewDetails = (rowData) => {
    setViewModalData(rowData);
    setIsViewModalOpen(true);
  };

  const handleExcelDataUpload = (excelData) => {
    const updatedData = excelData.map((item, index) => ({
      checkbox: false,
      sno: data.length + index + 1,
      ServiceProviderName: item["Service Provider Name"] || "",
      UniqueCode: item["Unique Code"] || "",
      City: item["City"] || "",
      State: item["State"] || "",
      Country: item["Country"] || "",
      PinCode: item["Pin Code"] || "",
      ValidUpto: item["Valid Upto"] || "",
      status: item["Status"] || "",
    }));

    const concatenateData = [...initialData, ...updatedData];
    setData(concatenateData); // Update data state with parsed Excel data
    setIsModalsOpen(false); // Close the import modal after data upload
  };

  const columns = [
    {
      header: <input type="checkbox" onChange={handleSelectAll} />,
      accessor: "checkbox",
    },
    { header: "SrNo.", accessor: "sno" },
    { header: "Service Provider Name", accessor: "ServiceProviderName" },
    { header: "Unique Code", accessor: "UniqueCode" },
    { header: "City", accessor: "City" },
    { header: "State", accessor: "State" },
    { header: "Country", accessor: "Country" },
    { header: "Pin Code", accessor: "PinCode" },
    { header: "Valid Upto", accessor: "ValidUpto" },
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
      <h1 className="text-2xl font-bold mb-4">Service Provider</h1>
      <div className="grid grid-cols-5 gap-4 mb-4">
        <Card
          title="DROPPED"
          count={cardCounts.DROPPED}
          color="pink"
          onClick={() => handleCardClick("DROPPED")}
        />
        <Card
          title="INITIATED"
          count={cardCounts.INITIATED}
          color="blue"
          onClick={() => handleCardClick("INITIATED")}
        />
        <Card
          title="REINITIATED"
          count={cardCounts.REINITIATED}
          color="yellow"
          onClick={() => handleCardClick("REINITIATED")}
        />
        <Card
          title="APPROVED"
          count={cardCounts.APPROVED}
          color="green"
          onClick={() => handleCardClick("APPROVED")}
        />
        <Card
          title="REJECTED"
          count={cardCounts.REJECTED}
          color="red"
          onClick={() => handleCardClick("REJECTED")}
        />
      </div>
      <div className="flex items-center justify-between mb-4">
        <div className="flex space-x-4">
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
          <Dropdown
            options={[
              { value: "All", label: "All" },
              { value: "DROPPED", label: "    DROPPED" },
              { value: "INITIATED", label: "  INITIATED" },
              { value: "REINITIATED", label: "REINITIATED" },
              { value: "APPROVED", label: "   APPROVED" },
              { value: "REJECTED", label: "   REJECTED" },
            ]}
            value={statusFilter}
            onChange={setStatusFilter}
          />
        </div>
        <div className="float-right flex gap-4">
          <ATMButton text="Import" color="pink" onClick={handleOpenModals} />

          <ATMButton
            text="Add Service Provider"
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
      <ServiceProviderModal visible={isModalOpen} closeModal={closeModal} />
      {isViewModalOpen && (
        <ViewModal
          visible={isViewModalOpen}
          closeModal={closeViewModal}
          data={viewModalData}
        />
      )}
      {isModalsOpen && (
        <ImportModal
          isOpen={isModalsOpen}
          onClose={handleCloseModals}
          columns={columns}
          onDataUpload={handleExcelDataUpload}
        />
      )}
    </div>
  );
};

export default ServiceProvider;
