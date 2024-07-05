
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
import ServiceReportingModal from "../Modals/ServiceReportingModal.jsx";
import ViewModal from "../Modals/ViewModal";
import ImportModal from "../Modals/importModal.jsx";

const initialData = [
  {
    checkbox: false,
    sno: 1,
    ProblemId: "PRB-001",
    InstrumentId: "INST-001",
    ModuleId: "MOD-001",
    ProblemInBrief: "Brief description 1",
    ProblemInDetails: "Detailed description 1",
    ExpectedClosureDate: "2024-07-01",
    JobDetails: "Job details 1",
    status: "Active",
  },
  {
    checkbox: false,
    sno: 2,
    ProblemId: "PRB-002",
    InstrumentId: "INST-002",
    ModuleId: "MOD-002",
    ProblemInBrief: "Brief description 2",
    ProblemInDetails: "Detailed description 2",
    ExpectedClosureDate: "2024-07-02",
    JobDetails: "Job details 2",
    status: "Inactive",
  },
  {
    checkbox: false,
    sno: 3,
    ProblemId: "PRB-003",
    InstrumentId: "INST-003",
    ModuleId: "MOD-003",
    ProblemInBrief: "Brief description 3",
    ProblemInDetails: "Detailed description 3",
    ExpectedClosureDate: "2024-07-03",
    JobDetails: "Job details 3",
    status: "Active",
  },
  {
    checkbox: false,
    sno: 4,
    ProblemId: "PRB-004",
    InstrumentId: "INST-004",
    ModuleId: "MOD-004",
    ProblemInBrief: "Brief description 4",
    ProblemInDetails: "Detailed description 4",
    ExpectedClosureDate: "2024-07-04",
    JobDetails: "Job details 4",
    status: "Inactive",
  },
  {
    checkbox: false,
    sno: 5,
    ProblemId: "PRB-005",
    InstrumentId: "INST-005",
    ModuleId: "MOD-005",
    ProblemInBrief: "Brief description 5",
    ProblemInDetails: "Detailed description 5",
    ExpectedClosureDate: "2024-07-05",
    JobDetails: "Job details 5",
    status: "Active",
  },
  {
    checkbox: false,
    sno: 6,
    ProblemId: "PRB-006",
    InstrumentId: "INST-006",
    ModuleId: "MOD-006",
    ProblemInBrief: "Brief description 6",
    ProblemInDetails: "Detailed description 6",
    ExpectedClosureDate: "2024-07-06",
    JobDetails: "Job details 6",
    status: "Inactive",
  },
  {
    checkbox: false,
    sno: 7,
    ProblemId: "PRB-007",
    InstrumentId: "INST-007",
    ModuleId: "MOD-007",
    ProblemInBrief: "Brief description 7",
    ProblemInDetails: "Detailed description 7",
    ExpectedClosureDate: "2024-07-07",
    JobDetails: "Job details 7",
    status: "Active",
  },
];

const ServiceReporting = () => {
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
      row.ProblemId.toLowerCase().includes(searchQuery.toLowerCase()) &&
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
    { header: "Problem ID", accessor: "ProblemId" },
    { header: "Instrument ID", accessor: "InstrumentId" },
    { header: "Module ID", accessor: "ModuleId" },
    { header: "Problem In Brief", accessor: "ProblemInBrief" },
    { header: "Problem In Details", accessor: "ProblemInDetails" },
    { header: "Expected Closure Date On", accessor: "ExpectedClosureDate" },
    { header: "Job Details", accessor: "JobDetails" },
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
      sno:  index + 1,
      ProblemId: item["Problem ID"] || "",
      InstrumentId: item["Instrument ID"] || "",
      ModuleId: item["Module ID"] || "",
      ProblemInBrief: item["Problem In Brief"] || "",
      ProblemInDetails: item["Problem In Details"] || "",
      ExpectedClosureDate: item["Expected Closure Date On"] || "",
      JobDetails: item["Job Details"] || "",
      status: item["Status"] || "",
    }));
  
    const concatenateData = [...updatedData];
setData(concatenateData ); // Update data state with parsed Excel data
    setIsModalsOpen(false); // Close the import modal after data upload
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
      <h1 className="text-2xl font-bold mb-4">Service Reporting</h1>

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
          <ATMButton text="Add Service" color="blue" onClick={openModal} />
        </div>
      </div>
      <Table
        columns={columns}
        data={filteredData}
        onCheckboxChange={handleCheckboxChange}
        onViewDetails={onViewDetails}
        onDelete={handleDelete}
      />
      <ServiceReportingModal
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
export default ServiceReporting;
