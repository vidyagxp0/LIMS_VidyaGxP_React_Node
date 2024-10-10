import React, { useState, useEffect } from "react";
import axios from "axios";
import Dropdown from "../components/ATM components/Dropdown/Dropdown.jsx";
import Table from "../components/ATM components/Table/Table.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import ATMButton from "../components/ATM components/Button/ATMButton.jsx";
import ReusableModal from "./Modals/ResusableModal.jsx";
import ImportModal from "./Modals/importModal.jsx";
import PDFDownload from "./PDFComponent/PDFDownload .jsx";
import AnalystPersonalModal from "./Modals/AnalystPersonalModal.jsx";
import LaunchQMS from "../components/ReusableButtons/LaunchQMS.jsx";
import { BASE_URL } from "../config.json";

const AnalystPersonal = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [viewModalData, setViewModalData] = useState(null);
  const [isImportModalOpen, setIsImportModalOpen] = useState(false);
  const [editModalData, setEditModalData] = useState(null);
  const [dataChanged, setDataChanged] = useState(false);

  useEffect(() => {
    fetchAnalysts();
  }, [dataChanged]);

  const fetchAnalysts = async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}/get-all-lims/analystPersonal`
      );
      console.log("API Response:", response.data);

      const formattedData = response.data.map((item, index) => {
        return (
          item.analystPersonal?.map((analyst, i) => ({
            ...analyst,
            sno: analyst.sno || index + i + 1,
          })) || []
        );
      });

      setData(formattedData);
      setDataChanged(false);
    } catch (error) {
      console.error("Error fetching analysts:", error);
    }
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleOpenImportModal = () => setIsImportModalOpen(true);
  const handleCloseImportModal = () => setIsImportModalOpen(false);

  const handleAnalystSubmit = async (newAnalyst) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/manage-lims/add/analystPersonal`,
        data
      );
      console.log("Response received:", response.data);

      const addedAnalyst = response.data.updatedLIMS?.analystPersonal[0];
      if (addedAnalyst) {
        setData((prevData) => [
          ...prevData,
          { ...addedAnalyst, sno: prevData.length + 1 },
        ]);
        setDataChanged(true);
      }
      closeModal();
    } catch (error) {
      console.error("Error adding analyst:", error);
    }
  };

  const handleExcelDataUpload = async (excelData) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/manage-lims/add/analystPersonal`,
        {
          analystPersonal: excelData,
        }
      );
      console.log("Response received:", response.data);

      const addedAnalysts = response.data.updatedLIMS?.analystPersonal || [];
      if (addedAnalysts.length > 0) {
        setData((prevData) => [
          ...prevData,
          ...addedAnalysts.map((analyst, index) => ({
            ...analyst,
            sno: prevData.length + index + 1,
          })),
        ]);
        setDataChanged(true);
      }
      handleCloseImportModal();
    } catch (error) {
      console.error("Error uploading excel data:", error);
    }
  };

  const onViewDetails = (rowData) => {
    setViewModalData(rowData);
    setIsViewModalOpen(true);
  };

  const closeViewModal = () => setIsViewModalOpen(false);

  const handleDelete = async (item) => {
    try {
      await axios.delete(
        `${BASE_URL}/manage-lims/delete/analystPersonal/${item.AnalystID}`
      );
      setData((prevData) =>
        prevData.filter((dataItem) => dataItem.AnalystID !== item.AnalystID)
      );
      setDataChanged(true);
    } catch (error) {
      console.error("Error deleting analyst:", error);
    }
  };

  const openEditModal = (rowData) => {
    setEditModalData(rowData);
  };

  const closeEditModal = () => {
    setEditModalData(null);
  };

  const handleEditSave = async (updatedData) => {
    try {
      const response = await axios.put(
        `${BASE_URL}/manage-lims/update/analystPersonal/${updatedData.AnalystID}`,
        updatedData
      );
      const updatedAnalyst = response.data.updatedLIMS?.analystPersonal[0];
      if (updatedAnalyst) {
        setData((prevData) =>
          prevData.map((item) =>
            item.AnalystID === updatedAnalyst.AnalystID ? updatedAnalyst : item
          )
        );
        setDataChanged(true);
      }
      setEditModalData(null);
    } catch (error) {
      console.error("Error updating analyst:", error);
    }
  };

  const filteredData = data.filter(
    (row) =>
      row.FullName?.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (statusFilter === "All" || row.QualificationStatus === statusFilter)
  );

  const columns = [
    { header: "SrNo.", accessor: "sno" },
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
    { header: "Training Program Name", accessor: "TrainingProgramName" },
    { header: "Training Start Date", accessor: "TrainingStartDate" },
    { header: "Training Completion Date", accessor: "TrainingCompletionDate" },
    {
      header: "Training Completion Status",
      accessor: "TrainingCompletionStatus",
    },
    {
      header: "Certification Name/Number",
      accessor: "CertificationNameNumber",
    },
    { header: "Certification Body", accessor: "CertificationBody" },
    { header: "Certification Date", accessor: "CertificationDate" },
    {
      header: "Next Recertification Date",
      accessor: "NextRecertificationDate",
    },
    { header: "Competency Test Name", accessor: "CompetencyTestName" },
    { header: "Test Date", accessor: "TestDate" },
    { header: "Test Results", accessor: "TestResults" },
    { header: "Test Score", accessor: "TestScore" },
    { header: "Evaluator Name", accessor: "EvaluatorName" },
    { header: "Evaluator Comments", accessor: "EvaluatorComments" },
    { header: "Technique/Skill Name", accessor: "TechniqueSkillName" },
    { header: "Qualification Date", accessor: "QualificationDate" },
    { header: "Skill Level", accessor: "SkillLevel" },
    { header: "Requalification Required", accessor: "RequalificationRequired" },
    { header: "Requalification Due Date", accessor: "RequalificationDueDate" },
    { header: "Instrument Name/ID", accessor: "InstrumentNameID" },
    { header: "Method Name/ID", accessor: "MethodNameID" },
    { header: "Qualification Level", accessor: "QualificationLevel" },
    { header: "Calibration Due Date", accessor: "CalibrationDueDate" },
    { header: "Method Validation Date", accessor: "MethodValidationDate" },
    { header: "SOP Name/ID", accessor: "SOPNameID" },
    { header: "SOP Version", accessor: "SOPVersion" },
    {
      header: "Date Acknowledged/Reviewed",
      accessor: "DateAcknowledgedReviewed",
    },
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
            onClick={() => {
              /* Handle edit */
            }}
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

  const fields = [
    { label: "Analyst ID", key: "AnalystID" },
    { label: "Full Name", key: "FullName" },
    { label: "Date of Birth", key: "DateOfBirth" },
    { label: "Email Address", key: "EmailAddress" },
    { label: "Phone Number", key: "PhoneNumber" },
    { label: "Department", key: "Department" },
    { label: "Job Title", key: "JobTitle" },
    { label: "Supervisor/Manager Name", key: "SupervisorManagerName" },
    { label: "Qualification ID", key: "QualificationID" },
    { label: "Date of Qualification", key: "DateOfQualification" },
    { label: "Qualified By", key: "QualifiedBy" },
    { label: "Qualification Type", key: "QualificationType" },
    { label: "Expiration Date", key: "ExpirationDate" },
    { label: "Qualification Status", key: "QualificationStatus" },
    { label: "Training Program Name", key: "TrainingProgramName" },
    { label: "Training Start Date", key: "TrainingStartDate" },
    { label: "Training Completion Date", key: "TrainingCompletionDate" },
    { label: "Training Completion Status", key: "TrainingCompletionStatus" },
    { label: "Certification Name/Number", key: "CertificationNameNumber" },
    { label: "Certification Body", key: "CertificationBody" },
    { label: "Certification Date", key: "CertificationDate" },
    { label: "Next Recertification Date", key: "NextRecertificationDate" },
    { label: "Competency Test Name", key: "CompetencyTestName" },
    { label: "Test Date", key: "TestDate" },
    { label: "Test Results", key: "TestResults" },
    { label: "Test Score", key: "TestScore" },
    { label: "Evaluator Name", key: "EvaluatorName" },
    { label: "Evaluator Comments", key: "EvaluatorComments" },
    { label: "Technique/Skill Name", key: "TechniqueSkillName" },
    { label: "Qualification Date", key: "QualificationDate" },
    { label: "Skill Level", key: "SkillLevel" },
    { label: "Requalification Required", key: "RequalificationRequired" },
    { label: "Requalification Due Date", key: "RequalificationDueDate" },
    { label: "Instrument Name/ID", key: "InstrumentNameID" },
    { label: "Method Name/ID", key: "MethodNameID" },
    { label: "Qualification Level", key: "QualificationLevel" },
    { label: "Calibration Due Date", key: "CalibrationDueDate" },
    { label: "Method Validation Date", key: "MethodValidationDate" },
    { label: "SOP Name/ID", key: "SOPNameID" },
    { label: "SOP Version", key: "SOPVersion" },
    { label: "Date Acknowledged/Reviewed", key: "DateAcknowledgedReviewed" },
    { label: "Revision Due Date", key: "RevisionDueDate" },
    { label: "Years of Experience", key: "YearsOfExperience" },
    { label: "Previous Job Roles", key: "PreviousJobRoles" },
    { label: "Previous Labs Worked In", key: "PreviousLabsWorkedIn" },
    { label: "Specializations", key: "Specializations" },
    { label: "Approval Date", key: "ApprovalDate" },
    { label: "Approver's Name", key: "ApproversName" },
    { label: "Approver's Signature", key: "ApproversSignature" },
    { label: "Comments/Notes", key: "CommentsNotes" },
    { label: "Modification Date", key: "ModificationDate" },
    { label: "Modified By", key: "ModifiedBy" },
    { label: "Change Description", key: "ChangeDescription" },
  ];

  return (
    <div className="p-4">
      <LaunchQMS />

      <h1 className="text-2xl font-bold mb-4">Analyst Personal</h1>

      <div className="flex items-center justify-between mb-4">
        <div className="flex space-x-4">
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
          <PDFDownload
            columns={columns}
            data={filteredData}
            fileName="Analyst_Personal.pdf"
            title="Analyst Personal Data"
          />
          <ATMButton
            text="Import"
            color="pink"
            onClick={handleOpenImportModal}
          />
          <ATMButton text="Add Analyst" color="blue" onClick={openModal} />
        </div>
      </div>

      <Table
        columns={columns}
        data={filteredData}
        onViewDetails={onViewDetails}
        onDelete={handleDelete}
        openEditModal={openEditModal}
      />

      <AnalystPersonalModal
        visible={isModalOpen}
        closeModal={closeModal}
        handleSubmit={handleAnalystSubmit}
      />

      {viewModalData && (
        <ReusableModal
          visible={isViewModalOpen}
          closeModal={closeViewModal}
          data={viewModalData}
          fields={fields}
          title="Analyst Personal Details"
        />
      )}

      {isImportModalOpen && (
        <ImportModal
          isOpen={isImportModalOpen}
          onClose={handleCloseImportModal}
          columns={columns}
          onDataUpload={handleExcelDataUpload}
        />
      )}

      {editModalData && (
        <AnalystPersonalModal
          visible={Boolean(editModalData)}
          closeModal={closeEditModal}
          data={editModalData}
          handleSubmit={handleEditSave}
          isEditing={true}
        />
      )}
    </div>
  );
};

export default AnalystPersonal;
