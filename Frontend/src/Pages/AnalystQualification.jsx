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
import { BASE_URL } from "../config.json";
import SearchBar from "../components/ATM components/SearchBar/SearchBar.jsx";
// import AnalystPersonalModal from "./Modals/AnalystPersonalModal.jsx";
import AnalystQualificationModal from "../Pages/AnalystQualificationModal.jsx";
import { useNavigate } from "react-router-dom";
import LaunchQMS from "../components/ReusableButtons/LaunchQMS.jsx";
import ToastContainer from "../components/HotToaster/ToastContainer.jsx";
import toast from "react-hot-toast";

const AnalystQualification = () => {
  const [data, setData] = useState([]);

  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [viewModalData, setViewModalData] = useState(null);
  const [isImportModalOpen, setIsImportModalOpen] = useState(false);
  const [editModalData, setEditModalData] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedAnalyst, setSelectedAnalyst] = useState(null);
  const [loading, setLoading] = useState({});

  const navigate = useNavigate();

  const openWorkflowModal = () => {
    setShowModal(true);
    navigate("/analystQualificationModal");
  };
  const handleEdit = (analyst) => {
    setSelectedAnalyst(analyst); // Set the selected analyst data
    // console.log(analyst,"ANNNNNNN");

    setIsModalOpen(true); // Open the modal
  };

  const closeWorkflowModal = () => {
    setShowModal(false);
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://limsapi.vidyagxp.com/analyst/get-analyst`
      );
      // console.log("API Response:", response.data);

      const formattedData = response?.data.data || [];
      // console.log(formattedData);

      const updatedData = formattedData.map((item, index) => ({
        sno: index + 1,
        ...item,
      }));
      // console.log(updatedData, "AAAAAAAaaa");

      setData(updatedData);
      // console.log(updatedData);
    } catch (error) {
      console.error("Error fetching analysts:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filteredData = data.filter((row) => {
    const fullNameLower = row.FullName?.toLowerCase() || "";
    return (
      fullNameLower.includes(searchQuery.toLowerCase()) &&
      (statusFilter === "All" || row.QualificationStatus === statusFilter)
    );
  });
  // console.log(filteredData,"FILTERED DATA");

  const handleSelectAll = (e) => {
    const checked = e.target.checked;
    setData(data.map((row) => ({ ...row, checkbox: checked })));
  };

  const handleCheckboxChange = (e, item) => {
    setData(
      data.map((d) => (d === item ? { ...d, checkbox: e.target.checked } : d))
    );
  };

  const handlePdfGenerate = async (analystId) => {
    console.log("Generating PDF for analyst ID:", analystId);
    setLoading((prevLoading) => ({ ...prevLoading, [analystId]: true }));

    try {
      const response = await fetch(
        `https://limsapi.vidyagxp.com/analyst/generate-report/${analystId}`
      );
      console.log("Response:", response);

      // Check if the response is actually a PDF
      if (
        !response.ok ||
        response.headers.get("content-type") !== "application/pdf"
      ) {
        const errorText = await response.text();
        console.error("Error Response Text:", errorText);
        throw new Error("Network response was not ok or not a PDF");
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(new Blob([blob]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `Analyst_Report_${analystId}.pdf`);
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
    } catch (error) {
      console.error("Error downloading PDF:", error);
    }

    setLoading((prevLoading) => ({ ...prevLoading, [analystId]: false }));
  };
  const handleAuditTrailGenerate = async (analystId) => {
    console.log("Generating PDF for analyst ID:", analystId);
    setLoading((prevLoading) => ({ ...prevLoading, [analystId]: true }));

    try {
      const response = await fetch(
        `https://limsapi.vidyagxp.com/analyst/generate-report/${analystId}`
      );
      console.log("Response:", response);

      // Check if the response is actually a PDF
      if (
        !response.ok ||
        response.headers.get("content-type") !== "application/pdf"
      ) {
        const errorText = await response.text();
        console.error("Error Response Text:", errorText);
        throw new Error("Network response was not ok or not a PDF");
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(new Blob([blob]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `Analyst_Report_${analystId}.pdf`);
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
    } catch (error) {
      console.error("Error downloading PDF:", error);
    }

    setLoading((prevLoading) => ({ ...prevLoading, [analystId]: false }));
  };

  const columns = [
    {
      header: <input type="checkbox" onChange={handleSelectAll} />,
      accessor: "checkbox",
    },
    { header: "Sr No", accessor: "sno" },
    {
      header: "Analyst ID",
      accessor: "analystId",
    },
    { header: "Full Name", accessor: "fullName" },
    { header: "Date of Birth", accessor: "dateOfBirth" },
    { header: "Email Address", accessor: "emailAddress" },
    { header: "Phone Number", accessor: "phoneNumber" },
    { header: "Department", accessor: "department" },
    { header: "Job Title", accessor: "jobTitle" },
    { header: "Supervisor/Manager Name", accessor: "supervisorManagerName" },
    { header: "Qualification ID", accessor: "qualificationId" },
    { header: "Date of Qualification", accessor: "dateOfQualification" },
    { header: "Qualified By", accessor: "qualifiedBy" },
    { header: "Qualification Type", accessor: "qualificationType" },
    { header: "Expiration Date", accessor: "expirationDate" },
    { header: "Qualification Status", accessor: "qualificationStatus" },
    { header: "Training Program Name", accessor: "trainingProgramName" },
    { header: "Training Start Date", accessor: "trainingStartDate" },
    { header: "Training Completion Date", accessor: "trainingCompletionDate" },
    {
      header: "Training Completion Status",
      accessor: "trainingCompletionStatus",
    },
    {
      header: "Certification Name/Number",
      accessor: "certificationNameNumber",
    },
    { header: "Certification Body", accessor: "certificationBody" },
    { header: "Certification Date", accessor: "certificationDate" },
    {
      header: "Next Recertification Date",
      accessor: "nextReCertificationDate",
    },
    { header: "Competency Test Name", accessor: "competencyTestName" },
    { header: "Test Date", accessor: "testDate" },
    { header: "Test Results", accessor: "testResults" },
    { header: "Test Score", accessor: "testScore" },
    { header: "Evaluator Name", accessor: "evaluatorName" },
    { header: "Evaluator Comments", accessor: "evaluatorComments" },
    { header: "Technique/Skill Name", accessor: "techniqueSkillName" },
    { header: "Qualification Date", accessor: "qualificationDate" },
    { header: "Skill Level", accessor: "skillLevel" },
    { header: "Requalification Required", accessor: "reQualificationRequired" },
    { header: "Requalification Due Date", accessor: "reQualificationDueDate" },
    { header: "Instrument Name/ID", accessor: "instrumentNameId" },
    { header: "Method Name/ID", accessor: "methodNameId" },
    { header: "Qualification Level", accessor: "qualificationLevel" },
    // {header: "Qualification Date", accessor: "QualificationDate"},
    // {header: "Calibration Due Date", accessor: "CalibrationDueDate"},
    // { header: "Method Validation Date", accessor: "MethodValidationDate" },
    { header: "SOP Name/ID", accessor: "sopNameId" },
    { header: "SOP Version", accessor: "sopVersion" },
    // { header: "Date Acknowledged/Reviewed", accessor: "DateAcknowledgedReviewed" },
    // { header: "Revision Due Date", accessor: "RevisionDueDate" },
    { header: "Years of Experience", accessor: "yearsOfExperience" },
    { header: "Previous Job Roles", accessor: "previousJobRoles" },
    { header: "Previous Labs Worked In", accessor: "previousLabsWorkedIn" },
    { header: "Specializations", accessor: "specializations" },
    { header: "Approval Date", accessor: "approvalDate" },
    { header: "Approver's Name", accessor: "approverName" },
    { header: "Approver's Signature", accessor: "approverSignature" },
    { header: "Comments/Notes", accessor: "commentsNotes" },
    { header: "Modification Date", accessor: "modificationDate" },
    { header: "Modified By", accessor: "modifiedBy" },
    { header: "Change Description", accessor: "changeDescription" },
    { header: "Status", accessor: "status" },
    {
      header: "Genrate Audit Trail",
      accessor: "report2",
    },
    {
      header: "Genrate PDf",
      accessor: "report",
    },

    {
      header: "Actions",
      accessor: "actionAnalyst",
      Cell: ({ row }) => (
        <>
          <FontAwesomeIcon
            icon={faEye}
            className="mr-2 cursor-pointer"
            onClick={() => onViewDetails(row)}
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
    "AnalystID",
    "FullName",
    "auditTrail",
    "DateOfBirth",
    "EmailAddress",
    "PhoneNumber",
    "Department",
    "JobTitle",
    "SupervisorManagerName",
    "QualificationID",
    "DateOfQualification",
    "QualifiedBy",
    "QualificationType",
    "ExpirationDate",
    "QualificationStatus",
    "TrainingProgramName",
    "TrainingStartDate",
    "TrainingCompletionDate",
    "TrainingCompletionStatus",
    "CertificationNameNumber",
    "CertificationBody",
    "CertificationDate",
    "NextRecertificationDate",
    "CompetencyTestName",
    "TestDate",
    "TestResults",
    "TestScore",
    "EvaluatorName",
    "EvaluatorComments",
    "TechniqueSkillName",
    "QualificationDate",
    "SkillLevel",
    "RequalificationRequired",
    "RequalificationDueDate",
    "InstrumentNameID",
    "MethodNameID",
    "QualificationLevel",
    "MethodValidationDate",
    "SOPNameID",
    "SOPVersion",
    "DateAcknowledgedReviewed",
    "YearsOfExperience",
    "PreviousJobRoles",
    "PreviousLabsWorkedIn",
    "Specializations",
    "ApprovalDate",
    "ApproversName",
    "ApproversSignature",
    "CommentsNotes",
    "ModificationDate",
    "ModifiedBy",
    "ChangeDescription",
    "status",
  ];

  const openModal = () => {
    // setEditModalData(null);
    // setIsModalOpen(true);
    setShowModal(true);

    navigate("/analyst-qualification-modal");
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setEditModalData(null);
  };

  const handleDelete = async (item) => {
    try {
      await axios.delete(
        `https://limsapi.vidyagxp.com/analyst/delete-analyst/${item.id}`
      );
      setData((prevData) =>
        prevData.filter((dataItem) => dataItem.id !== item.id)
      );
      closeModal();
      fetchData();
      toast.success("Data deleted successfully");
    } catch (error) {
      // console.error("Error deleting Data:", error);
      toast.error("Error deleting Data");
    }
  };

  const onViewDetails = (row) => {
    // setViewModalData(row);
    setIsViewModalOpen(true);
    navigate(`/analyst-qualification-edit/${row.id}`);
  };

  const closeViewModal = () => {
    setIsViewModalOpen(false);
    setViewModalData(null);
  };

  const openEditModal = (rowData) => {
    setEditModalData(rowData);
    setIsModalOpen(true);
  };

  const handleModalSubmit = (analystData) => {
    if (editModalData) {
      // Update existing analyst
      setData((prevData) =>
        prevData.map((item) =>
          item.sno === analystData.sno ? analystData : item
        )
      );
      toast.success("Analyst updated successfully!");
    } else {
      // Add new analyst
      setData((prevData) => [...prevData, analystData]);
      toast.success("Analyst added successfully!");
    }
    closeModal();
    setEditModalData(null);
  };

  return (
    <>
      <div>
        <ToastContainer />
      </div>
      <LaunchQMS />
      <div className="m-5 mt-3">
        <div className="main-head">
          <h4 className="fw-bold">Analyst Qualification</h4>
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
            <PDFDownload
              columns={columns}
              data={filteredData}
              fileName="Analyst_Personal.pdf"
              title="Analyst Personal Data"
            />
            <ATMButton
              text="Import"
              color="pink"
              onClick={() => setIsImportModalOpen(true)}
            />
            <ATMButton
              text="Add Analyst"
              color="blue"
              onClick={openWorkflowModal}
            />
          </div>
        </div>
        {/* {console.log(filteredData, "Table Ko Sendd")} */}

        <Table
          columns={columns}
          data={filteredData}
          onDelete={handleDelete}
          onCheckboxChange={handleCheckboxChange}
          onViewDetails={onViewDetails}
          // openEditModal={openEditModal}
          onPdfGenerate={handlePdfGenerate}
          onAuditTrailGenerate={handleAuditTrailGenerate}
          onEdit={handleEdit}
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
      {isModalOpen && (
        <AnalystQualificationModal
          visible={isModalOpen}
          onClose={closeModal}
          data={selectedAnalyst} // Pass the selected analyst data to the modal
        />
      )}

      {/* <AnalystPersonalModal
        visible={isModalOpen}
        closeModal={closeModal}
        handleSubmit={handleModalSubmit}
        data={editModalData}
        fetchData={fetchData}
      /> */}

      {/* View Details Modal */}
      {viewModalData && (
        <AnalystQualificationModal
          visible={viewModalData !== null}
          closeModal={closeViewModal}
          data={viewModalData}
          fields={fields}
          title=" Analyst Qualification Modal"
          updateStatus={""}
        />
      )}

      {showModal && <AnalystQualificationModal onClose={closeWorkflowModal} />}
    </>
  );
};

export default AnalystQualification;
