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
import {
  CButton,
  CFormInput,
  CFormSelect,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";

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
  const [lastStatus, setLastStatus] = useState("INACTIVE");
  const [editModalData, setEditModalData] = useState(null);
  const [editModalOpen, setEditModalOpen] = useState(false);

  const openEditModal = (rowData) => {
    setEditModalData(rowData);
    setEditModalOpen(true);
  };

  const closeEditModal = () => {
    setEditModalOpen(false);
    setEditModalData(null);
  };

  const handleEditSave = (updatedData) => {
    const updatedList = data.map((item) =>
      item.sno === updatedData.sno ? updatedData : item
    );
    setData(updatedList);
    closeEditModal();
  };
  const EditModal = ({ visible, closeModal, data, onSave }) => {
    const [formData, setFormData] = useState(data);

    useEffect(() => {
      setFormData(data);
    }, [data]);

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };

    const handleSave = () => {
      onSave(formData);
    };

    return (
      <div>
        <CModal
          alignment="center"
          visible={visible}
          onClose={closeModal}
          size="lg"
        >
          <CModalHeader>
            <CModalTitle>Add Service Reporting</CModalTitle>
          </CModalHeader>
          <CModalBody>
            <p>Add information and Add Service Reporting</p>
            <CFormSelect
              type="text"
              label="Problem ID"
              className="mb-3"
              options={["Select...", { label: "SHMDZ" }]}
              placeholder="Select..."
              value={formData?.ProblemId || ""}
              onChange={handleChange}
              name="ProblemId"
            />
            <CFormInput
              type="text"
              label="Instrument (Instrument ID)"
              placeholder="hplc"
              disabled
            />
            <CFormSelect
              type="text"
              label="Module ID"
              className="mb-3"
              options={["Select...", { label: "wl/wb/m/001" }]}
              placeholder="Select..."
              value={formData?.ModuleId || ""}
              onChange={handleChange}
              name="ModuleId"
            />
            <CFormInput
              type="text"
              className="mb-3"
              label="Problem In Brief"
              placeholder="Problem In Brief "
              value={formData?.ProblemInBrief || ""}
              onChange={handleChange}
              name="ProblemInBrief"
            />
            <CFormInput
              type="text"
              className="mb-3"
              label="Problem In Details"
              placeholder="Problem In Details"
              value={formData?.ProblemInDetails || ""}
              onChange={handleChange}
              name="ProblemInDetails"
            />
            <CFormInput
              type="file"
              className="mb-3"
              label="Reference Document"
              placeholder=" choose file"
            />
            <CFormInput
              type="date"
              className="mb-3"
              label="Occurred On"
              placeholder=" "
            />
            <CFormInput
              type="date"
              className="mb-3"
              label="Reported On"
              placeholder=" "
            />
            <CFormInput
              type="date"
              className="mb-3"
              label="Attended On"
              placeholder=" "
            />
            <CFormInput
              type="date"
              className="mb-3"
              label="Expected Closure Date"
              placeholder=" "
            />
            <CFormInput
              type="text"
              className="mb-3"
              label="Job Details"
              placeholder=" Job Details"
              value={formData?.JobDetails || ""}
              onChange={handleChange}
              name="JobDetails"
            />
          </CModalBody>
          <CModalFooter>
            <CButton color="light" onClick={closeModal}>
              Back
            </CButton>
            <CButton color="primary" onClick={handleSave}>
              Submit
            </CButton>
          </CModalFooter>
        </CModal>
      </div>
    );
  };

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
      sno: index + 1,
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
    setData(concatenateData); // Update data state with parsed Excel data
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

  const handleModalSubmit = (serviceReporting) => {
    const currentDate = new Date().toISOString().split("T")[0];
    if (editModalData) {
      const updatedList = data.map((item) =>
        item.sno === serviceReporting.sno ? serviceReporting : item
      );
      setData(updatedList);
    } else {
      setData((prevData) => [
        ...prevData,
        {
          checkbox: false,
          sno: prevData.length + 1,
          ProblemId: serviceReporting.problemId,
          InstrumentId: serviceReporting.instrumentId,
          ModuleId: serviceReporting.moduleId,
          ProblemInBrief: serviceReporting.problemInBrief,
          ProblemInDetails: serviceReporting.problemInDetails,
          AddedOn: currentDate,
          status: "Active",
        },
      ]);
    }
    closeModal();
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
          <ATMButton text="Import" color="pink" onClick={handleOpenModals} />
          <ATMButton text="Add Service" color="blue" onClick={openModal} />
        </div>
      </div>
      <Table
        columns={columns}
        data={filteredData}
        onCheckboxChange={handleCheckboxChange}
        onViewDetails={onViewDetails}
        onDelete={handleDelete}
        openEditModal={openEditModal}
      />
      <ServiceReportingModal
        visible={isModalOpen}
        closeModal={closeModal}
        handleSubmit={handleModalSubmit}
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
          initialData={filteredData}
          isOpen={isModalsOpen}
          onClose={handleCloseModals}
          columns={columns}
          onDataUpload={handleExcelDataUpload}
        />
      )}

      {editModalOpen && (
        <EditModal
          visible={editModalOpen}
          closeModal={closeEditModal}
          data={editModalData}
          onSave={handleEditSave}
        />
      )}
    </div>
  );
};
export default ServiceReporting;
