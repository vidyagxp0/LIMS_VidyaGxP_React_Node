// const StatusModal = (_props) => {
//   return (
 
//   );
// };

// const DeleteModel = (_props) => {
//   return (
//     <CModal
//       alignment="center"
//       visible={_props.visible}
//       onClose={_props.closeModal}
//     >
//       <CModalHeader>
//         <CModalTitle>Delete Analyst Template</CModalTitle>
//       </CModalHeader>
//       <CModalBody>
//         Do you want to delete this Analyst Template <code>ARZ ENT</code>?
//       </CModalBody>
//       <CModalFooter>
//         <CButton color="light" onClick={_props.closeModal}>
//           Back
//         </CButton>
//         <CButton className="bg-danger text-white" onClick={_props.handleDelete}>
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
import TemplateModal from "../Modals/TemplateModal.jsx";
import ViewModal from "../Modals/ViewModal";
import ImportModal from "../Modals/importModal.jsx";


const initialData = [
  {
    checkbox: false,
    sno: 1,
    TemplateName: "Associate 1",
    UniqueCode: "BA-001",
    NoOfCheckItems: "BA-001",
    UpdatedAt: "BA-001",
    status: "Active",
  },
  {
    checkbox: false,
    sno: 2,
    TemplateName: "Associate 2",
    UniqueCode: "BA-002",
    NoOfCheckItems: "BA-002",
    UpdatedAt: "BA-002",
    status: "Active",
  },
  {
    checkbox: false,
    sno: 3,
    TemplateName: "Associate 3",
    UniqueCode: "BA-003",
    NoOfCheckItems: "BA-003",
    UpdatedAt: "BA-003",
    status: "Active",
  },
  {
    checkbox: false,
    sno: 4,
    TemplateName: "Associate 4",
    UniqueCode: "BA-004",
    NoOfCheckItems: "BA-004",
    UpdatedAt: "BA-004",
    status: "Active",
  },
  {
    checkbox: false,
    sno: 5,
    TemplateName: "Associate 5",
    UniqueCode: "BA-005",
    NoOfCheckItems: "BA-005",
    UpdatedAt: "BA-005",
    status: "Inactive",
  },
  {
    checkbox: false,
    sno: 6,
    TemplateName: "Associate 6",
    UniqueCode: "BA-006",
    NoOfCheckItems: "BA-006",
    UpdatedAt: "BA-006",
    status: "Inactive",
  },
  {
    checkbox: false,
    sno: 7,
    TemplateName: "Associate 7",
    UniqueCode: "BA-007",
    NoOfCheckItems: "BA-007",
    UpdatedAt: "BA-007",
    status: "Inactive",
  },
  {
    checkbox: false,
    sno: 8,
    TemplateName: "Associate 8",
    UniqueCode: "BA-008",
    NoOfCheckItems: "BA-008",
    UpdatedAt: "BA-008",
    status: "Active",
  },
];

const Template = () => {
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
      row.TemplateName.toLowerCase().includes(searchQuery.toLowerCase()) &&
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
      sno:  index + 1,
      TemplateName: item["Template Name"] || "",
      UniqueCode: item["Unique Code"] || "",
      NoOfCheckItems: item["No. Of Check Items"] || "",
      UpdatedAt: item["Updated At"] || "",
        status: item["Status"] || "",
      }));

      const concatenateData = [...updatedData];
      setData(concatenateData); // Update data state with parsed Excel data
      setIsModalsOpen(false); // Close the import modal after data upload
    };

  const columns = [
    {
      header: <input type="checkbox" onChange={handleSelectAll} />,
      accessor: "checkbox",
    },
    { header: "SrNo.", accessor: "sno" },
    { header: "Template Name", accessor: "TemplateName" },
    { header: "Unique Code", accessor: "UniqueCode" },
    { header: "No. Of Check Items", accessor: "NoOfCheckItems" },
    { header: "Updated At", accessor: "UpdatedAt" },
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
      <h1 className="text-2xl font-bold mb-4">Analyst Template</h1>
      {/* <div className="grid grid-cols-5 gap-4 mb-4">
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
      </div> */}
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
        <ATMButton text="Import" color="pink" onClick={handleOpenModals} />

          <ATMButton
            text="Add Analyst Template"
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
      <TemplateModal
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

export default Template;
