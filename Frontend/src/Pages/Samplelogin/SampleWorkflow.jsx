import {
  CButton,
  CFormInput,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
} from "@coreui/react";
import React, { useEffect, useState } from "react";
import SearchBar from "../../components/ATM components/SearchBar/SearchBar";
import Dropdown from "../../components/ATM components/Dropdown/Dropdown";
import PDFDownload from "../PDFComponent/PDFDownload ";
import ATMButton from "../../components/ATM components/Button/ATMButton";
import ImportModal from "../Modals/importModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-regular-svg-icons";
import Table from "../../components/ATM components/Table/Table";
import { useNavigate } from "react-router-dom";
import { randomSampleData } from "./SamplePlanningFunction";
import LaunchQMS from "../../components/ReusableButtons/LaunchQMS";
import SamplePlanningAndAnalytics from "../Modals/SamplePlanningAndAnalytics";
import axios from "axios";
import SamplePlanningAEdit from "../Modals/SamplePlanningAEdit";
import { toast } from "react-toastify";
import SampleWorkflowModal from "./SampleWorkflowModal";
import { BASE_URL } from "../../config.json";
const SampleWorkFlow = () => {
  const [data, setData] = useState([]);
  console.log(data, "????????????????????????????");
  const [searchQuery, setSearchQuery] = useState("");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [statusFilter, setStatusFilter] = useState("All");
  const [isModalsOpen, setIsModalsOpen] = useState(false);
  const [editModalData, setEditModalData] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [viewModalData, setViewModalData] = useState(null);
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState({});
  const [selectedSampleId, setSelectedSamppleId] = useState(null);

  const openWorkflowModal = () => {
    setShowModal(true);
    navigate("/sampleWorkflowModal");
  };

  const closeWorkflowModal = () => {
    setShowModal(false);
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/get-sample`);
      console.log(response, "99999999999999999999999999"); // Check the structure of the response

      // Assuming the actual array is nested inside a 'data' property
      const responseData = Array.isArray(response.data)
        ? response.data
        : response.data.data;

      const updatedData = responseData.map((item, index) => ({
        ...item,
        sno: index + 1,
      }));
      setSelectedSamppleId(updatedData.id);
      setData(updatedData);
    } catch (error) {
      console.error("Error fetching ", error);
      toast.error("Failed to fetch ");
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const filteredData = data.filter((row) => {
    return (
      row?.sampleName?.toLowerCase()?.includes(searchQuery.toLowerCase()) &&
      (statusFilter === "All" || row.status === statusFilter)
    );
  });

  const openEditModal = (data, index) => {
    // console.log(data)
    setSelectedRow(data, index);
    setEditModalData(true);
  };

  const addRow = (newRow) => {
    setData([...data, newRow]);
  };
  const handleUpdate = (updatedRow) => {
    // Logic to update the table with the new data
    // console.log("Updated row data:", updatedRow);
    // Update the rows here (if using state or Redux for state management)
  };

  const generatePDF = async (sampleId) => {
    console.log("Generating PDF for Sample ID:", sampleId);
    setLoading((prevLoading) => ({ ...prevLoading, [sampleId]: true }));
    try {
      const response = await fetch(
        `http://localhost:9000/generate-report/${sampleId}`
      );
      console.log("Response Status:", response.status);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const blob = await response.blob();
      const url = window.URL.createObjectURL(new Blob([blob]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `Sample_Report_${sampleId}.pdf`);
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
    } catch (error) {
      console.error("Error downloading PDF:", error);
    }
    setLoading((prevLoading) => ({ ...prevLoading, [sampleId]: false }));
  };

  const columns = [
    {
      header: <input type="checkbox" />,
      accessor: "checkbox",
    },
    { header: "SNo.", accessor: "sno" },
    { header: "Sample Plan ID", accessor: "samplePlanId" },
    { header: "Sample ID", accessor: "sampleId" },
    { header: "Sample Name", accessor: "sampleName" },
    { header: "Sample Type", accessor: "sampleType" },
    { header: "Product/Material Name", accessor: "productMaterialName" },
    { header: "Batch/Lot Number", accessor: "batchNumber" },
    { header: "Sample Priority", accessor: "samplePriority" },
    { header: "Sample Quantity", accessor: "sampleQuantity" },
    { header: "UOM", accessor: "uom" },
    { header: "Market", accessor: "market" },
    { header: "Sample Barcode", accessor: "sampleBarCode" },
    { header: "Specification ID", accessor: "specificationId" },
    { header: "Specification Attachment", accessor: "specificationAttachment" },
    { header: "STP ID", accessor: "sTPId" },
    { header: "STP Attachment", accessor: "sTPAttachment" },
    { header: "Test Plan ID", accessor: "testPlanID" },
    { header: "Test Name", accessor: "testName" },
    { header: "Test Method", accessor: "testMethod" },
    { header: "Test Parameters", accessor: "testParameters" },
    { header: "Testing Frequency", accessor: "testingFrequency" },
    { header: "Testing Location", accessor: "testingLocation" },
    { header: "Required Instruments", accessor: "requiredInstruments" },
    { header: "Test Grouping", accessor: "testGrouping" },
    { header: "LSL", accessor: "lsl" },
    { header: "USL", accessor: "usl" },
    { header: "Testing Deadline", accessor: "testingDeadline" },
    { header: "Planner Name", accessor: "plannerName" },
    { header: "Sample Source", accessor: "sampleSource" },
    { header: "Planned Date", accessor: "plannedDate" },
    { header: "Lab Technician", accessor: "labTechnician" },
    { header: "Reviewer/Approver", accessor: "reviewerApprover" },
    { header: "Assigned Department", accessor: "assignedDepartment" },
    { header: "Sample Collection Date", accessor: "sampleCollectionDate" },
    { header: "Testing Start Date", accessor: "testingStartDate" },
    { header: "Testing End Date", accessor: "testingEndDate" },
    { header: "Turnaround Time (TAT)", accessor: "turnaroundTime" },
    { header: "Sample Retesting Date", accessor: "sampleRetestingDate" },
    { header: "Review Date", accessor: "reviewDate" },
    { header: "Sample Storage Location", accessor: "sampleStorageLocation" },
    { header: "Transportation Method", accessor: "transportationMethod" },
    {
      header: "Sample Preparation Method",
      accessor: "samplePreparationMethod",
    },
    { header: "Sample Packaging Details", accessor: "samplePackagingDetails" },
    { header: "Sample Label", accessor: "sampleLabel" },
    { header: "Regulatory Requirements", accessor: "regulatoryRequirements" },
    { header: "Quality Control Checks", accessor: "qualityControlChecks" },
    { header: "Delay Justification", accessor: "delayJustification" },
    { header: "Testing Outcome", accessor: "testingOutcome" },
    { header: "Pass / Fail ?", accessor: "passFail" },
    { header: "Shelf Life reccommendation", accessor: "passFail" },
    { header: "Control Sample Reference", accessor: "controlSampleReference" },
    { header: "Sample Integrity Status", accessor: "sampleIntegrityStatus" },
    { header: "Risk Assessment", accessor: "riskAssessment" },
    { header: "Supervisor", accessor: "supervisor" },
    { header: "Sample Movement History", accessor: "sampleMovementHistory" },
    { header: "Testing Progress", accessor: "testingProgress" },
    { header: "Alerts/Notifications", accessor: "alertsNotifications" },
    { header: "Deviation Logs", accessor: "deviationLogs" },
    { header: "Comments/Notes", accessor: "commentsNotes" },
    { header: "Attachments", accessor: "attachments" },
    { header: "Sampling Frequency", accessor: "samplingFrequency" },
    { header: "Sample Disposition", accessor: "sampleDisposition" },
    { header: "Stability Study Type", accessor: "stabilityStudyType" },
    { header: "Stability Study Protocol", accessor: "stabilityStudyProtocol" },
    {
      header: "Stability Protocol Approval Date",
      accessor: "stabilityProtocolApprovalDate",
    },
    {
      header: "Country of Regulatory Submissions",
      accessor: "countryOfRegulatorySubmissions",
    },
    { header: "ICH Zone", accessor: "ichZone" },
    {
      header: "Photostability Testing Results",
      accessor: "photostabilityTestingResults",
    },
    { header: "Reconstitution Stability", accessor: "reconstitutionStability" },
    { header: "Testing Interval (months)", accessor: "testingIntervalMonths" },
    {
      header: "Shelf Life Recommendation",
      accessor: "shelfLifeRecommendation",
    },
    { header: "Reviewer Comment", accessor: "reviewerComment" },
    { header: "QA Reviewer/Approver", accessor: "QaReviewerApprover" },
    { header: "QA Reviewer Comment", accessor: " QaReviewerComment" },
    { header: "QA Review Date", accessor: "qaReviQwDate" },
    {
      header: "Actions",
      accessor: "action",
      Cell: ({ row }) => (
        <>
          <FontAwesomeIcon
            icon={faEye}
            className="mr-2 cursor-pointer"
            onClick={() => {
              onViewDetails(row);
            }}
          />
          <FontAwesomeIcon
            icon={faPenToSquare}
            className="mr-2 cursor-pointer"
          />
          <FontAwesomeIcon icon={faTrashCan} className="cursor-pointer" />
        </>
      ),
    },
  ];

  const handleOpenModals = () => {
    setIsModalsOpen(true);
  };

  const handleCloseModals = () => {
    setIsModalsOpen(false);
  };

  const openModal = () => {
    setIsAddModalOpen(true);
  };

  const handleDelete = (item) => {
    // console.log(item);
    axios
      .delete(`http://localhost:9000/delete-lims/sLSamplePA/${item.uniqueId}`)
      .then((response) => {
        // console.log(response.data.message);
        toast.success("Record deleted successfully");
        fetchData();
      })
      .catch((error) => {
        console.error("There was an error deleting the record:", error);
      });
  };

  const handleCheckboxChange = (index) => {
    const newData = [...data];
    newData[index].checkbox = !newData[index].checkbox;
    setData(newData);
  };

  const closeEditModal = () => {
    setEditModalData(false);
  };
  const onViewDetails = (data) => {
    setViewModalData(data);
  };

  const closeViewModal = () => {
    setViewModalData(null);
  };

  const handleExcelDataUpload = (excelData) => {
    const updatedData = excelData.map((item, index) => ({
      checkbox: false,
      samplePlanId: index + 1,
      sampleId: item["Sample ID"] || "",
      sampleName: item["Sample Name"] || "",
      sampleType: item["Sample Type"] || "",
      productMaterialName: item["Product/Material Name"] || "",
      batchNumber: item["Batch/Lot Number"] || "",
      sampleSource: item["Sample Source"] || "",
      plannedDate: item["Planned Date"] || "",
      samplePriority: item["Sample Priority"] || "",
      sampleQuantity: item["Sample Quantity"] || "",
      uom: item["UOM"] || "",
      market: item["Market"] || "",
      sampleBarCode: item["Sample Barcode"] || "",
      specificationId: item["Specification ID"] || "",
      specificationAttachment: item["Specification Attachment"] || "",
      sTPId: item["STP ID"] || "",
      sTPAttachment: item["STP Attachment"] || "",
      testPlanID: item["Test Plan ID"] || "",
      testName: item["Test Name"] || "",
      testMethod: item["Test Method"] || "",
      testParameters: item["Test Parameters"] || "",
      testingFrequency: item["Testing Frequency"] || "",
      testingLocation: item["Testing Location"] || "",
      requiredInstruments: item["Required Instruments"] || "",
      testGrouping: item["Test Grouping"] || "",
      lsl: item["LSL"] || "",
      usl: item["USL"] || "",
      testingDeadline: item["Testing Deadline"] || "",
      plannerName: item["Planner Name"] || "",
      labTechnician: item["Lab Technician"] || "",
      reviewerApprover: item["Reviewer/Approver"] || "",
      assignedDepartment: item["Assigned Department"] || "",
      supervisor: item["Supervisor"] || "",
      sampleCollectionDate: item["Sample Collection Date"] || "",
      testingStartDate: item["Testing Start Date"] || "",
      testingEndDate: item["Testing End Date"] || "",
      delayJustification: item["Delay Justification"] || "",
      testingOutcome: item["Testing Outcome"] || "",
      passFail: item["Pass/Fail?"] || "",
      turnaroundTime: item["Turnaround Time (TAT)"] || "",
      sampleRetestingDate: item["Sample Retesting Date"] || "",
      reviewDate: item["Review Date"] || "",
      sampleStorageLocation: item["Sample Storage Location"] || "",
      transportationMethod: item["Transportation Method"] || "",
      samplePreparationMethod: item["Sample Preparation Method"] || "",
      samplePackagingDetails: item["Sample Packaging Details"] || "",
      sampleLabel: item["Sample Label"] || "",
      regulatoryRequirements: item["Regulatory Requirements"] || "",
      qualityControlChecks: item["Quality Control Checks"] || "",
      controlSampleReference: item["Control Sample Reference"] || "",
      sampleIntegrityStatus: item["Sample Integrity Status"] || "",
      riskAssessment: item["Risk Assessment"] || "",
      instrumentsReserved: item["Instruments Reserved"] || "",
      labAvailability: item["Lab Availability"] || "",
      sampleCostEstimation: item["Sample Cost Estimation"] || "",
      resourceUtilization: item["Resource Utilization"] || "",
      sampleMovementHistory: item["Sample Movement History"] || "",
      testingProgress: item["Testing Progress"] || "",
      alertsNotifications: item["Alerts/Notifications"] || "",
      deviationLogs: item["Deviation Logs"] || "",
      commentsNotes: item["Comments/Notes"] || "",
      attachments: item["Attachments"] || "",
      samplingFrequency: item["Sampling Frequency"] || "",
      sampleDisposition: item["Sample Disposition"] || "",
      stabilityStudyType: item["Stability Study Type"] || "",
      stabilityStudyProtocol: item["Stability Study Protocol"] || "",
      stabilityProtocolApprovalDate:
        item["Stability Protocol Approval date"] || "",
      countryOfRegulatorySubmissions:
        item["Country of Regulatory Submissions"] || "",
      ichZone: item["ICH Zone"] || "",
      photostabilityTestingResults:
        item["Photostability Testing results"] || "",
      reconstitutionStability: item["Reconstitution Stability"] || "",
      testingIntervalMonths: item["Testing Interval (months)"] || "",
      shelfLifeRecommendation: item["Shelf Life Recommendation"] || "",
      reviewerComment: item["Reviewer Comment"] || "",
      QaReviewerApprover: item["QA Reviewer/Approver"] || "",
      QaReviewerComment: item["QA Reviewer Comment"] || "",
      QaReviewDate: item["QA Review Date"] || "",
      actions: item["Actions"] || "",
    }));

    const concatenatedData = [...updatedData];
    setData(concatenatedData);
    setIsModalsOpen(false);
  };

  const fields = [
    "samplePlanId",
    "sampleId",
    "sampleName",
    "sampleType",
    "productMaterialName",
    "batchNumber",
    "sampleSource",
    "plannedDate",
    "samplePriority",
    "sampleQuantity",
    "uom",
    "market",
    "sampleBarCode",
    "specificationId",
    "specificationAttachment",
    "stpId",
    "stpAttachment",
    "testPlanId",
    "testName",
    "testMethod",
    "testParameters",
    "testingFrequency",
    "testingLocation",
    "requiredInstruments",
    "testGrouping",
    "lsl",
    "usl",
    "expectedResults",
    "testingDeadline",
    "plannerName",
    "labTechnician",
    "reviewer",
    "assignedDepartment",
    "supervisor",
    "sampleCollectionDate",
    "testingStartDate",
    "testingEndDate",
    "turnaroundTime",
    "sampleRetestingDate",
    "reviewDate",
    "sampleStorageLocation",
    "transportationMethod",
    "samplePreparationMethod",
    "samplePackagingDetails",
    "sampleLabel",
    "regulatoryRequirements",
    "qualityControlChecks",
    "controlSampleReference",
    "sampleIntegrityStatus",
    "riskAssessment",
    "instrumentsReserved",
    "labAvailability",
    "sampleCostEstimation",
    "resourceUtilization",
    "sampleMovementHistory",
    "testingProgress",
    "alertsNotifications",
    "deviationLogs",
    "comments",
    "attachments",
    "samplingFrequency",
    "sampleDisposition",
    "stabilityStudyType",
    "stabilityStudyProtocol",
    "stabilityProtocolApprovalDate",
    "countryOfRegulatorySubmissions",
    "ichZone",
    "photostabilityTestingResults",
    "reconstitutionStability",
    "testingIntervalMonths",
    "shelfLifeRecommendation",
    "reviewerComment",
    "qaReviewerApprover",
    "qaReviewerComment",
    "qaReviewDate",
  ];

  // const [loading, setLoading] = useState(false);

  const handleRowClick = async (sampleId) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:9000/get-Sample/${sampleId}`
      );
      const sampleData = response.data;

      navigate(`/sampleWorkflowPanel`, { state: { sampleData } });
    } catch (error) {
      console.error("Error fetching sample data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="m-5 mt-3">
      <LaunchQMS />

      <div className="main-head">
        <h2 className="fw-bold">Sample WorkFlow</h2>
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
          <button
            className="px-3 py-2 rounded flex gap-2 items-center bg-green-600 text-white font-medium cursor-pointer"
            onClick={() => generatePDF(selectedSampleId)}
          >
            Generate Report
            {loading[selectedSampleId] ? (
              <div className="h-5 w-5 border-t-2 border-b-2 border-black animate-spin rounded-full"></div>
            ) : (
              <FontAwesomeIcon icon="fa-regular fa-file-pdf" />
            )}
          </button>
          <PDFDownload
            columns={columns}
            data={filteredData}
            fileName="InvestigationL2.pdf"
            title="Investigation L2 Data"
          />
          <ATMButton text="Import" color="pink" onClick={handleOpenModals} />
          <ATMButton
            text="Add Sample Workflow"
            color="blue"
            onClick={openWorkflowModal}
          />
        </div>
      </div>
      <table className="min-w-full bg-white border border-gray-200 shadow-lg">
        <thead>
          <tr className="bg-yellow-600 text-white text-left">
            <th colSpan="25" className="px-4 py-2 bg-yellow-600">
              Sample Planning Information
            </th>
            <th colSpan="20" className="px-4 py-2 bg-green-600">
              Testing Requirements
            </th>
            <th colSpan="9" className="px-4 py-2 bg-brown-600">
              Personnel and Roles
            </th>
            <th colSpan="6" className="px-4 py-2 bg-violet-600">
              Schedule and Timeline
            </th>
            <th colSpan="5" className="px-4 py-2 bg-red-600">
              Logistics and Sample Handling
            </th>
            <th colSpan="5" className="px-4 py-2 bg-blue-600">
              Quality and Compliance
            </th>
            <th colSpan="4" className="px-4 py-2 bg-orange-600">
              Resource Allocation
            </th>
            <th colSpan="4" className="px-4 py-2 bg-green-300">
              Tracking and Monitoring
            </th>
            <th colSpan="16" className="px-4 py-2 bg-violet-500">
              Miscellaneous
            </th>
          </tr>
          <tr className="bg-slate-600 text-white">
            <td className="border px-4 py-2">S.No</td>
            <td className="border px-4 py-2">Sample Plan ID</td>
            <td className="border px-4 py-2">Sample ID</td>
            <td className="border px-4 py-2">Sample Name</td>
            <td className="border px-4 py-2">Sample Type</td>
            <td className="border px-4 py-2">Product/Material Name</td>
            <td className="border px-4 py-2">Batch/Lot Number</td>
            <td className="border px-4 py-2">Sample Source</td>
            <td className="border px-4 py-2">Planned Date</td>
            <td className="border px-4 py-2">Sample Priority</td>
            <td className="border px-4 py-2">Sample Quantity</td>
            <td className="border px-4 py-2">UOM</td>
            <td className="border px-4 py-2">Market</td>
            <td className="border px-4 py-2">Sample Barcode</td>
            <td className="border px-4 py-2">Specification ID</td>
            <td className="border px-4 py-2">Specification Attachment</td>
            <td className="border px-4 py-2">STP ID</td>
            <td className="border px-4 py-2">STP Attachment</td>
            <td className="border px-4 py-2">Test Plan ID</td>
            <td className="border px-4 py-2">Test Name</td>
            <td className="border px-4 py-2">Test Method</td>
            <td className="border px-4 py-2">Test Parameters</td>
            <td className="border px-4 py-2">Testing Frequency</td>
            <td className="border px-4 py-2">Testing Location</td>
            <td className="border px-4 py-2">Required Instruments</td>
            <td className="border px-4 py-2">Test Grouping</td>
            <td className="border px-4 py-2">LSL</td>
            <td className="border px-4 py-2">USL</td>
            <td className="border px-4 py-2">Testing Deadline</td>
            <td className="border px-4 py-2">Planner Name</td>
            <td className="border px-4 py-2">Lab Technician</td>
            <td className="border px-4 py-2">Reviewer/Approver</td>
            <td className="border px-4 py-2">Assigned Department</td>
            <td className="border px-4 py-2">Supervisor</td>
            <td className="border px-4 py-2">Sample Collection Date</td>

            <td className="border px-4 py-2">Testing Start Date</td>
            <td className="border px-4 py-2">Testing End Date</td>
            <td className="border px-4 py-2">Delay Justification</td>
            <td className="border px-4 py-2">Testing Outcome</td>
            <td className="border px-4 py-2">Pass/Fail?</td>
            <td className="border px-4 py-2">Turnaround Time (TAT)</td>
            <td className="border px-4 py-2">Sample Retesting Date</td>
            <td className="border px-4 py-2">Review Date</td>
            <td className="border px-4 py-2">Sample Storage Location</td>
            <td className="border px-4 py-2">Transportation Method</td>
            <td className="border px-4 py-2">Sample Preparation Method</td>
            <td className="border px-4 py-2">Sample Packaging Details</td>
            <td className="border px-4 py-2">Sample Label</td>
            <td className="border px-4 py-2">Regulatory Requirements</td>
            <td className="border px-4 py-2">Quality Control Checks</td>
            <td className="border px-4 py-2">Control Sample Reference</td>
            <td className="border px-4 py-2">Sample Integrity Status</td>
            <td className="border px-4 py-2">Assigned Department</td>
            <td className="border px-4 py-2">Risk Assessment</td>
            <td className="border px-4 py-2">Supervisor</td>
            <td className="border px-4 py-2">Instruments Reserved</td>
            <td className="border px-4 py-2">Lab Availability</td>
            <td className="border px-4 py-2">Sample Cost Estimation</td>
            <td className="border px-4 py-2">Resource Utilization</td>
            <td className="border px-4 py-2">Sample Movement History</td>
            <td className="border px-4 py-2">Testing Progress</td>
            <td className="border px-4 py-2">Alerts/Notifications</td>
            <td className="border px-4 py-2">Deviation Logs</td>
            <td className="border px-4 py-2 text-wrap">Comments/Notes</td>
            <td className="border px-4 py-2">Attachments</td>
            <td className="border px-4 py-2">Sampling Frequency</td>
            <td className="border px-4 py-2">Sample Disposition</td>

            <td className="border px-4 py-2">Stability Study Type</td>
            <td className="border px-4 py-2">Stability Study Protocol</td>
            <td className="border px-4 py-2">
              Stability Protocol Approval date
            </td>
            <td className="border px-4 py-2">
              Country of Regulatory Submissions
            </td>
            <td className="border px-4 py-2">ICH Zone</td>
            <td className="border px-4 py-2">Photostability Testing results</td>
            <td className="border px-4 py-2">Reconstitution Stability</td>
            <td className="border px-4 py-2">Testing Interval (months)</td>
            <td className="border px-4 py-2">Shelf life reccommendation</td>
            <td className="border px-4 py-2">Reviewer/Approver </td>
            <td className="border px-4 py-2">Reviewer Comment</td>
            <td className="border px-4 py-2">QA Reviewer/Approver </td>
            <td className="border px-4 py-2">QA Reviewer Comment </td>
            <td className="border px-4 py-2">QA Review Date </td>

            <td className="border px-4 py-2">Actions</td>
          </tr>
        </thead>
        <tbody>
          {data?.map((data, index) => (
            <tr
              key={index}
              className="hover:bg-gray-100 cursor-pointer"
              onClick={() => handleRowClick(item?.sampleId)}
            >
              <td className="border px-4 py-2">{index + 1}</td>
              <td className="border px-4 py-2">{data.samplePlanId}</td>
              <td className="border px-4 py-2">{data.sampleId}</td>
              <td className="border px-4 py-2">{data.sampleName}</td>
              <td className="border px-4 py-2">{data.sampleType}</td>
              <td className="border px-4 py-2">{data.productMaterialName}</td>
              <td className="border px-4 py-2">{data.batchNumber}</td>
              <td className="border px-4 py-2">{data.samplePriority}</td>
              <td className="border px-4 py-2">{data.sampleQuantity}</td>
              <td className="border px-4 py-2">{data.uom}</td>
              <td className="border px-4 py-2">{data.market}</td>
              <td className="border px-4 py-2">{data?.sampleBarCode}</td>
              <td className="border px-4 py-2">{data.specificationId}</td>
              <td className="border px-4 py-2">
                {data.specificationAttachment}
              </td>
              <td className="border px-4 py-2">{data.sTPId}</td>
              <td className="border px-4 py-2">{data.sTPAttachment}</td>
              <td className="border px-4 py-2">{data.testPlanID}</td>
              <td className="border px-4 py-2">{data.testName}</td>
              <td className="border px-4 py-2">{data.testMethod}</td>
              <td className="border px-4 py-2">{data.testParameters}</td>
              <td className="border px-4 py-2">{data.testingFrequency}</td>
              <td className="border px-4 py-2">{data.testingLocation}</td>
              <td className="border px-4 py-2">{data.requiredInstruments}</td>
              <td className="border px-4 py-2">{data.testGrouping}</td>
              <td className="border px-4 py-2">{data.lsl}</td>{" "}
              <td className="border px-4 py-2">{data.usl}</td>{" "}
              <td className="border px-4 py-2">{data.testingDeadline}</td>
              <td className="border px-4 py-2">{data.plannerName}</td>
              <td className="border px-4 py-2">{data.sampleSource}</td>
              <td className="border px-4 py-2">{data.plannedDate}</td>
              <td className="border px-4 py-2">{data.labTechnician}</td>
              <td className="border px-4 py-2">{data.reviewerApprover}</td>
              <td className="border px-4 py-2">{data.assignedDepartment}</td>
              <td className="border px-4 py-2">{data.sampleCollectionDate}</td>
              <td className="border px-4 py-2">{data.testingStartDate}</td>
              <td className="border px-4 py-2">{data.testingEndDate}</td>
              <td className="border px-4 py-2">{data.turnaroundTime}</td>
              <td className="border px-4 py-2">{data.sampleRetestingDate}</td>
              <td className="border px-4 py-2">{data.reviewDate}</td>
              <td className="border px-4 py-2">{data.sampleStorageLocation}</td>
              <td className="border px-4 py-2">{data.transportationMethod}</td>
              <td className="border px-4 py-2">
                {data.samplePreparationMethod}
              </td>
              <td className="border px-4 py-2">
                {data.samplePackagingDetails}
              </td>
              <td className="border px-4 py-2">{data.sampleLabel}</td>
              <td className="border px-4 py-2">
                {data.regulatoryRequirements}
              </td>
              <td className="border px-4 py-2">{data.qualityControlChecks}</td>
              <td className="border px-4 py-2">
                {data.controlSampleReference}
              </td>
              <td className="border px-4 py-2">{data.sampleIntegrityStatus}</td>
              <td className="border px-4 py-2">{data.riskAssessment}</td>
              <td className="border px-4 py-2">{data.supervisor}</td>{" "}
              <td className="border px-4 py-2">{data.sampleMovementHistory}</td>
              <td className="border px-4 py-2">{data.testingProgress}</td>
              <td className="border px-4 py-2">{data.alertsNotifications}</td>
              <td className="border px-4 py-2">{data.deviationLogs}</td>
              <td className="border px-4 py-2 text-wrap">
                {data.commentsNotes}
              </td>{" "}
              <td className="border px-4 py-2">{data.attachments}</td>
              <td className="border px-4 py-2">{data.samplingFrequency}</td>
              <td className="border px-4 py-2">{data.sampleDisposition}</td>
              <td className="border px-4 py-2">
                {data.stabilityStudyType}
              </td>{" "}
              <td className="border px-4 py-2">
                {data.stabilityStudyProtocol}
              </td>{" "}
              <td className="border px-4 py-2">
                {data.stabilityProtocolApprovalDate}
              </td>{" "}
              <td className="border px-4 py-2">
                {data.countryOfRegulatorySubmissions}
              </td>{" "}
              <td className="border px-4 py-2">{data.ichZone}</td>{" "}
              <td className="border px-4 py-2">
                {data.photostabilityTestingResults}
              </td>{" "}
              <td className="border px-4 py-2">
                {data.reconstitutionStability}
              </td>{" "}
              <td className="border px-4 py-2">{data.testingIntervalMonths}</td>{" "}
              <td className="border px-4 py-2">
                {data.shelfLifeRecommendation}
              </td>{" "}
              <td className="border px-4 py-2">{data.reviewerComment}</td>{" "}
              <td className="border px-4 py-2">{data.qaReviewerApprover}</td>{" "}
              <td className="border px-4 py-2">{data.qaReviewerComment}</td>{" "}
              <td className="border px-4 py-2">{data.qaReviewDate}</td>{" "}
              <td className="border px-4 py-2">{data.qaReviewDate}</td>{" "}
              <td className="border px-4 py-2">{data.qaReviewDate}</td>{" "}
              <td className="border px-4 py-2">{data.qaReviewDate}</td>{" "}
              <td className="border px-4 py-2">{data.qaReviewDate}</td>{" "}
              <td className="border px-4 py-2">{data.qaReviewDate}</td>{" "}
              <td className="border px-4 py-2">{data.qaReviewDate}</td>{" "}
              <td className="border px-4 py-2">{data.qaReviewDate}</td>{" "}
              <td className="border px-4 py-2">{data.qaReviewDate}</td>{" "}
              <td className="border px-4 py-2">{data.qaReviewDate}</td>{" "}
              <td className="border px-4 py-2">{data.qaReviewDate}</td>{" "}
              <td className="border px-4 py-2 font-medium">
                {" "}
                <div className="flex gap-2 font-medium">
                  <FontAwesomeIcon
                    icon={faEye}
                    className="mr-2 cursor-pointer"
                    onClick={() => onViewDetails(data)}
                  />
                  <FontAwesomeIcon
                    icon={faPenToSquare}
                    className="mr-2 cursor-pointer"
                    onClick={() => openEditModal(data, index)}
                  />
                  <FontAwesomeIcon
                    icon={faTrashCan}
                    className="cursor-pointer"
                    onClick={() => handleDelete(data)}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isModalsOpen && (
        <ImportModal
          initialData={filteredData}
          isOpen={isModalsOpen}
          onClose={handleCloseModals}
          columns={columns}
          onDataUpload={handleExcelDataUpload}
        />
      )}
      {viewModalData && (
        <SampleWorkflowModal
          visible={viewModalData !== null}
          closeModal={closeViewModal}
          data={viewModalData}
          fields={fields}
          title="Sample Planning & Analystic Details"
          updateStatus={""}
        />
      )}

      {showModal && <SampleWorkflowModal onClose={closeWorkflowModal} />}

      {editModalData && (
        <SamplePlanningAEdit
          open={editModalData}
          handleClose={closeEditModal}
          // rowData={selectedRow}
          onUpdate={handleUpdate}
          data={selectedRow}
          fetchData={fetchData}
        />
      )}

      {isAddModalOpen && (
        <SamplePlanningAndAnalytics
          open={isAddModalOpen}
          handleClose={() => setIsAddModalOpen(false)}
          addRow={addRow}
        />
      )}
    </div>
  );
};

export default SampleWorkFlow;
