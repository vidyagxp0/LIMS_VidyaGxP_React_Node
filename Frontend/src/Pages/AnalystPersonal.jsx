import React, { useState, useEffect } from "react";
import axios from "axios";
import Dropdown from "../components/ATM components/Dropdown/Dropdown.jsx";
import Table from "../components/ATM components/Table/Table.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import ATMButton from "../components/ATM components/Button/ATMButton.jsx";
import ReusableModal from "./Modals/ResusableModal.jsx";
import ImportModal from "./Modals/importModal.jsx";
import PDFDownload from "./PDFComponent/PDFDownload .jsx";
import { BASE_URL } from "../config.json";
import SearchBar from "../components/ATM components/SearchBar/SearchBar.jsx";
import AnalystPersonalModal from "./Modals/AnalystPersonalModal.jsx";

const AnalystPersonal = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [viewModalData, setViewModalData] = useState(null);
  const [isImportModalOpen, setIsImportModalOpen] = useState(false);
  const [editModalData, setEditModalData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/get-all-lims/analystPersonal`);
        console.log("API Response:", response.data);

        const formattedData = response?.data[0]?.analystPersonal || [];
        const updatedData = formattedData.map((item, index) => ({
          ...item,
          sno: index + 1,
        }));
        setData(updatedData);
      } catch (error) {
        console.error("Error fetching analysts:", error);
        alert("Failed to fetch data. Please try again later."); // User feedback on error
      }
    };
    fetchData();
  }, []); // No additional dependencies needed for initial data fetch

  const filteredData = data.filter((row) => {
    const fullNameLower = row.FullName?.toLowerCase() || "";
    return (
      fullNameLower.includes(searchQuery.toLowerCase()) &&
      (statusFilter === "All" || row.QualificationStatus === statusFilter)
    );
  });

  const handleSelectAll = (e) => {
    const checked = e.target.checked;
    setData(data.map((row) => ({ ...row, checkbox: checked })));
  };

  const handleCheckboxChange = (e, item) => {
    setData(data.map((d) => (d === item ? { ...d, checkbox: e.target.checked } : d)));
  };


  const columns = [
    {
      header: <input type="checkbox" onChange={handleSelectAll} />,
      accessor: "checkbox",
    },
    { header: "Sr No", accessor: "sno" },
    { header: "Analyst ID", accessor: "AnalystID" },
    { header: "Full Name", accessor: "FullName" },
    { header: "Date of Birth", accessor: "DateOfBirth" },
    { header: "Email Address", accessor: "EmailAddress" },
    { header: "Phone Number", accessor: "PhoneNumber" },
    { header: "Department", accessor: "Department" },
    { header: "Job Title", accessor: "JobTitle" },
    { header: "Supervisor/Manager Name", accessor: "SupervisorManagerName" },
    { header: "Qualification ID", accessor: "QualificationID" },
    { header: "Date of Qualification", accessor: "DateOfQualification" },
    { header: "Qualified By", accessor: "QualifiedBy" },
    { header: "Qualification Type", accessor: "QualificationType" },
    { header: "Expiration Date", accessor: "ExpirationDate" },
    { header: "Qualification Status", accessor: "QualificationStatus" },
    { header: "Method Validation Date", accessor: "MethodValidationDate" },
    { header: "SOP Name/ID", accessor: "SOPNameID" },
    { header: "SOP Version", accessor: "SOPVersion" },
    { header: "Date Acknowledged/Reviewed", accessor: "DateAcknowledgedReviewed" },
    { header: "Revision Due Date", accessor: "RevisionDueDate" },
    { header: "Years of Experience", accessor: "YearsOfExperience" },
    { header: "Previous Job Roles", accessor: "PreviousJobRoles" },
    { header: "Previous Labs Worked In", accessor: "PreviousLabsWorkedIn" },
    { header: "Specializations", accessor: "Specializations" },
    { header: "Approval Date", accessor: "ApprovalDate" },
    { header: "Approver's Name", accessor: "ApproversName" },
    { header: "Approver's Signature", accessor: "ApproversSignature" },
    { header: "Comments/Notes", accessor: "CommentsNotes" },
    { header: "Modification Date", accessor: "ModificationDate" },
    { header: "Modified By", accessor: "ModifiedBy" },
    { header: "Change Description", accessor: "ChangeDescription" },
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
            onClick={() => openEditModal(row)}
          />
          <FontAwesomeIcon
            icon={faTrashCan}
            className="cursor-pointer"
            onClick={() => handleDelete(row)}
          />
        </>
      ),
    },
  ];

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleDelete = async (item) => {
    try {
      await axios.delete(`${BASE_URL}/manage-lims/delete/analystPersonal/${item.sno}`);
      setData((prevData) => prevData.filter(dataItem => dataItem.sno !== item.sno));
      closeModal();
    } catch (error) {
      console.error("Error deleting analyst:", error);
      alert("Failed to delete analyst. Please try again."); // User feedback on error
    }
  };

  const onViewDetails = (row) => {
    setViewModalData(row);
    setIsViewModalOpen(true);
  };

  const closeViewModal = () => {
    setIsViewModalOpen(false);
    setViewModalData(null);
  };

  const openEditModal = (rowData) => {
    setEditModalData(rowData);
    openModal();
  };

  const handleModalSubmit = (newAnalyst) => {
    if (editModalData) {
      // Update existing analyst
      setData(data.map((item) =>
        item.AnalystID === newAnalyst.AnalystID ? newAnalyst : item
      ));
    } else {
      // Add new analyst
      setData((prevData) => [
        ...prevData,
        { sno: prevData.length + 1, ...newAnalyst }, // Ensure unique sno
      ]);
    }

    closeModal();
  };

  return (
    <>
      <div className="m-5 mt-3">
        <div className="main-head">
          <h4 className="fw-bold">Analyst Personal</h4>
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
            <PDFDownload columns={columns} data={filteredData} fileName="Analyst_Personal.pdf" title="Analyst Personal Data" />
            <ATMButton text="Import" color="pink" onClick={() => setIsImportModalOpen(true)} />
            <ATMButton text="Add Analyst" color="blue" onClick={openModal} />
          </div>
        </div>
        <Table
          columns={columns}
          data={filteredData}
          onDelete={handleDelete}
          onCheckboxChange={handleCheckboxChange}
          onViewDetails={onViewDetails}
          openEditModal={openEditModal}
        />
      </div>

      {isImportModalOpen && (
        <ImportModal
          isOpen={isImportModalOpen}
          onClose={() => setIsImportModalOpen(false)}
          columns={columns}
          onDataUpload={handleExcelDataUpload}
        />
      )}

      {/* Modal for adding/editing analysts */}
      <AnalystPersonalModal
        visible={isModalOpen}
        closeModal={closeModal}
        handleSubmit={handleModalSubmit}
        data={editModalData}
      />

      {/* View Details Modal */}
      {viewModalData && (
        <ReusableModal
          visible={isViewModalOpen}
          closeModal={closeViewModal}
          data={viewModalData}
          fields={columns.map(col => ({ key: col.accessor, label: col.header })).filter(field => field.key !== 'action' && field.key !== 'checkbox')}
          title="Analyst Personal Details"
        />
      )}
    </>
  );
};

export default AnalystPersonal;