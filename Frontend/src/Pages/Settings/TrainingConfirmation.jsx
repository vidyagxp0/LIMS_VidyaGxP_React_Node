// const StatusModal = (_props) => {

// 	return (
		
// 	);
// };

// const DeleteModel = (_props) => {
// 	return (
// 		<CModal
// 			alignment="center"
// 			visible={_props.visible}
// 			onClose={_props.closeModal}
// 		>
// 			<CModalHeader>
// 				<CModalTitle>Delete Training Confirmations</CModalTitle>
// 			</CModalHeader>
// 			<CModalBody>
// 				Do you want to delete this Training Confirmations <code>ARZ ENT</code>?
// 			</CModalBody>
// 			<CModalFooter>
// 				<CButton color="light" onClick={_props.closeModal}>
// 					Back
// 				</CButton>
// 				<CButton className="bg-danger text-white" onClick={_props.handleDelete}>Delete</CButton>
// 			</CModalFooter>
// 		</CModal>
// 	);
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
import TrainingConfirmationModal from "../Modals/TrainingConfirmationModal.jsx";
import ViewModal from "../Modals/ViewModal";
import ImportModal from "../Modals/importModal.jsx";


const initialData = [
  {
    checkbox: false,
    sno: 1,
    Analyst: "Associate 1",
    TestTechnique: "BA-001",
    TrainingDetails: "BA-001",
    Remarks: "BA-001",
    AddedOn: "BA-001",
    status: "Active",
  },
  {
    checkbox: false,
    sno: 2,
    Analyst: "Associate 2",
    TestTechnique: "BA-002",
    TrainingDetails: "BA-002",
    Remarks: "BA-002",
    AddedOn: "BA-002",
    status: "Active",
  },
  {
    checkbox: false,
    sno: 3,
    Analyst: "Associate 3",
    TestTechnique: "BA-003",
    TrainingDetails: "BA-003",
    Remarks: "BA-003",
    AddedOn: "BA-003",
    status: "Active",
  },
  {
    checkbox: false,
    sno: 4,
    Analyst: "Associate 4",
    TestTechnique: "BA-004",
    TrainingDetails: "BA-004",
    Remarks: "BA-004",
    AddedOn: "BA-004",
    status: "Inactive",
  },
  {
    checkbox: false,
    sno: 5,
    Analyst: "Associate 5",
    TestTechnique: "BA-005",
    TrainingDetails: "BA-005",
    Remarks: "BA-005",
    AddedOn: "BA-005",
    status: "Inactive",
  },
  {
    checkbox: false,
    sno: 6,
    Analyst: "Associate 6",
    TestTechnique: "BA-006",
    TrainingDetails: "BA-006",
    Remarks: "BA-006",
    AddedOn: "BA-006",
    status: "Active",
  },
  {
    checkbox: false,
    sno: 7,
    Analyst: "Associate 7",
    TestTechnique: "BA-007",
    TrainingDetails: "BA-007",
    Remarks: "BA-007",
    AddedOn: "BA-007",
    status: "Inactive",
  },
  {
    checkbox: false,
    sno: 8,
    Analyst: "Associate 8",
    TestTechnique: "BA-008",
    TrainingDetails: "BA-008",
    Remarks: "BA-008",
    AddedOn: "BA-008",
    status: "Active",
  },
];

const TrainingConfirmation = () => {
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
      row.TestTechnique.toLowerCase().includes(searchQuery.toLowerCase()) &&
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
      Analyst: item["Analyst"] || "",
      TestTechnique: item["Test Technique"] || "",
      TrainingDetails: item["Training Details"] || "",
      Remarks: item["Remarks"] || "",
      AddedOn: item["Added On"] || "",
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
    { header: "Analyst", accessor: "Analyst" },
    { header: "Test Technique", accessor: "TestTechnique" },
    { header: "Training Details", accessor: "TrainingDetails" },
    { header: "Remarks", accessor: "Remarks" },
    { header: "Added On", accessor: "AddedOn" },
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
      <h1 className="text-2xl font-bold mb-4">Training Confirmations</h1>
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

          <ATMButton text="Add Confirmation" color="blue" onClick={openModal} />
        </div>
      </div>
      <Table
        columns={columns}
        data={filteredData}
        onCheckboxChange={handleCheckboxChange}
        onViewDetails={onViewDetails}
        onDelete={handleDelete}
      />
      <TrainingConfirmationModal
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

export default TrainingConfirmation;
