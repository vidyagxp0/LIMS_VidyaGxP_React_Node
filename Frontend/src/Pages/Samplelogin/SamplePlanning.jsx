import { CButton, CFormInput, CModal, CModalBody, CModalFooter, CModalHeader } from '@coreui/react';
import React, { useState } from 'react'
import SearchBar from '../../components/ATM components/SearchBar/SearchBar';
import Dropdown from '../../components/ATM components/Dropdown/Dropdown';
import PDFDownload from '../PDFComponent/PDFDownload ';
import ATMButton from '../../components/ATM components/Button/ATMButton';
import ImportModal from '../Modals/importModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faPenToSquare, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import Table from '../../components/ATM components/Table/Table';
import { useNavigate } from 'react-router-dom';
import { randomSampleData } from './SamplePlanningFunction';


const initialData = [
  {
    checkbox: true,
    samplePlan: 1,
    sampleId: "SP12345",
    sampleName: "T001",
    sampleType: "Type A",
    batchNumber: "BN20240101",
    sampleSource: "Manufacturing Unit A",
    plannedDate: "2024-01-10",
    samplePriority: "High",
    sampleQuantity: "500 g",
    tests: ["Purity Test", "Moisture Content"],
    specificationId: "SPEC-001",
    specificationAttachment: "specification_001.pdf",
    sTPId: "STP-202401",
    sTPAttachment: "stp_202401.pdf",
    testName: "Purity Test",
    testMethod: "ISO 12345:2010",
    testParameters: "Purity > 98%",
    testingFrequency: "Weekly",
    testingLocation: "Lab A",
    requiredInstruments: "Mass Spectrometer",
    testGrouping: "Chemical",
    expectedResults: "Purity: 99.5%",
    testingDeadline: "2024-01-15",
    plannerName: "John Doe",
    labTechnician: "Jane Smith",
    reviewerApprover: "Dr. Robert Brown",
    assignedDepartment: "Quality Assurance",
    sampleCollectionDate: "2024-01-05",
    testingStartDate: "2024-01-06",
    testingEndDate: "2024-01-14",
    testPlanID: "TP202401A",
    turnaroundTime: "7 days",
    sampleRetestingDate: "",
    reviewDate: "2024-01-16",
    sampleStorageLocation: "Cold Storage Room",
    transportationMethod: "Refrigerated Truck",
    samplePreparationMethod: "Grinding",
    samplePackagingDetails: "500 g sealed container",
    sampleLabel: "T001 - High Priority",
    regulatoryRequirements: "ISO Standards",
    qualityControlChecks: "Sterility, Calibration",
    controlSampleReference: "CS001",
    sampleIntegrityStatus: "Intact",
    riskAssessment: "Low",
    supervisor: "Mark Williams",
    sampleMovementHistory: "Received -> Tested -> Stored",
    testingProgress: "In Progress",
    alertsNotifications: "None",
    deviationLogs: "No deviations",
    commentsNotes: "Sample tested within specification",
    attachments: "test_report.pdf",
    samplingFrequency: "Monthly",
    sampleDisposition: "Dispose after analysis"
  },{
    checkbox: false,
    samplePlan: 2,
    sampleId: "SP98765",
    sampleName: "T002",
    sampleType: "Type B",
    batchNumber: "BN20240201",
    sampleSource: "Warehouse 3",
    plannedDate: "2024-02-01",
    samplePriority: "Low",
    sampleQuantity: "1 liter",
    tests: ["pH Test", "Viscosity Check"],
    specificationId: "SPEC-202402",
    specificationAttachment: "specification_viscosity.pdf",
    sTPId: "STP-202402B",
    sTPAttachment: "stp_viscosity_202402.pdf",
    testName: "Viscosity Check",
    testMethod: "ASTM D445",
    testParameters: "Viscosity 60-100 cP",
    testingFrequency: "Monthly",
    testingLocation: "Lab B",
    requiredInstruments: "Viscometer",
    testGrouping: "Physical",
    expectedResults: "Viscosity: 80 cP",
    testingDeadline: "2024-02-10",
    plannerName: "Emily Taylor",
    labTechnician: "Paul Johnson",
    reviewerApprover: "Dr. Laura White",
    assignedDepartment: "R&D",
    sampleCollectionDate: "2024-01-30",
    testingStartDate: "2024-02-03",
    testingEndDate: "2024-02-08",
    testPlanID: "TP-VISC-2024",
    turnaroundTime: "5 days",
    sampleRetestingDate: "2024-03-15",
    reviewDate: "2024-02-12",
    sampleStorageLocation: "Shelf B3",
    transportationMethod: "Courier",
    samplePreparationMethod: "Stirring",
    samplePackagingDetails: "1 liter bottle",
    sampleLabel: "T002 - Viscosity Check",
    regulatoryRequirements: "FDA Compliance",
    qualityControlChecks: "Seal Integrity",
    controlSampleReference: "VISC-SAMPLE-002",
    sampleIntegrityStatus: "Good",
    riskAssessment: "Medium",
    supervisor: "Dr. Sarah Green",
    sampleMovementHistory: "Collected -> Testing -> Completed",
    testingProgress: "Completed",
    alertsNotifications: "None",
    deviationLogs: "None",
    commentsNotes: "Sample viscosity within limits",
    attachments: "viscosity_report.pdf",
    samplingFrequency: "Quarterly",
    sampleDisposition: "Archived"
  },
  {
    checkbox: true,
    samplePlan: 3,
    sampleId: "SP12301",
    sampleName: "T003",
    sampleType: "Type C",
    batchNumber: "BN20240215",
    sampleSource: "Lab C",
    plannedDate: "2024-02-12",
    samplePriority: "Medium",
    sampleQuantity: "2 kg",
    tests: ["Heavy Metals Test", "Solubility Test"],
    specificationId: "SPEC-20240215",
    specificationAttachment: "spec_heavy_metals.pdf",
    sTPId: "STP-202403C",
    sTPAttachment: "stp_heavy_metals_202403.pdf",
    testName: "Heavy Metals Test",
    testMethod: "USP 232",
    testParameters: "Lead < 0.5 ppm",
    testingFrequency: "Bi-Weekly",
    testingLocation: "Lab C",
    requiredInstruments: "ICP-MS",
    testGrouping: "Chemical",
    expectedResults: "Lead: 0.4 ppm",
    testingDeadline: "2024-02-20",
    plannerName: "Olivia Brown",
    labTechnician: "Andrew Davis",
    reviewerApprover: "Dr. Thomas Black",
    assignedDepartment: "Quality Control",
    sampleCollectionDate: "2024-02-10",
    testingStartDate: "2024-02-12",
    testingEndDate: "2024-02-19",
    testPlanID: "TP202402C",
    turnaroundTime: "7 days",
    sampleRetestingDate: "2024-03-10",
    reviewDate: "2024-02-21",
    sampleStorageLocation: "Room B12",
    transportationMethod: "Courier",
    samplePreparationMethod: "Filtration",
    samplePackagingDetails: "2 kg plastic container",
    sampleLabel: "T003 - Heavy Metals Test",
    regulatoryRequirements: "USP Compliance",
    qualityControlChecks: "Sample Homogeneity",
    controlSampleReference: "HM-SAMPLE-003",
    sampleIntegrityStatus: "Good",
    riskAssessment: "High",
    supervisor: "Dr. Michael Green",
    sampleMovementHistory: "Collected -> In Testing",
    testingProgress: "In Progress",
    alertsNotifications: "Testing delayed due to equipment issues",
    deviationLogs: "None",
    commentsNotes: "Sample meets purity standards",
    attachments: "heavy_metals_report.pdf",
    samplingFrequency: "Bi-Monthly",
    sampleDisposition: "Return to storage"
  }
,
{
  checkbox: false,
  samplePlan: 4,
  sampleId: "SP40201",
  sampleName: "T004",
  sampleType: "Type D",
  batchNumber: "BN20240501",
  sampleSource: "Manufacturing Plant D",
  plannedDate: "2024-04-10",
  samplePriority: "Critical",
  sampleQuantity: "1.5 liters",
  tests: ["Sterility Test", "Microbial Load"],
  specificationId: "SPEC-202405",
  specificationAttachment: "spec_microbial_load.pdf",
  sTPId: "STP-202405D",
  sTPAttachment: "stp_microbial_load_202405.pdf",
  testName: "Microbial Load",
  testMethod: "USP 61",
  testParameters: "TAMC < 100 CFU/g",
  testingFrequency: "Daily",
  testingLocation: "Lab D",
  requiredInstruments: "Autoclave, Incubator",
  testGrouping: "Microbiological",
  expectedResults: "TAMC: 50 CFU/g",
  testingDeadline: "2024-04-15",
  plannerName: "Sophia Taylor",
  labTechnician: "David Lee",
  reviewerApprover: "Dr. Emma Davis",
  assignedDepartment: "Microbiology",
  sampleCollectionDate: "2024-04-01",
  testingStartDate: "2024-04-05",
  testingEndDate: "2024-04-13",
  testPlanID: "TP-MICRO-2024",
  turnaroundTime: "10 days",
  sampleRetestingDate: "2024-06-01",
  reviewDate: "2024-04-16",
  sampleStorageLocation: "Room D14",
  transportationMethod: "Cold Chain",
  samplePreparationMethod: "Sterile Filtration",
  samplePackagingDetails: "1.5 liter sterile bottle",
  sampleLabel: "T004 - Sterility",
  regulatoryRequirements: "FDA Standards",
  qualityControlChecks: "Contamination, Seal Check",
  controlSampleReference: "STER-SAMPLE-004",
  sampleIntegrityStatus: "Sterile",
  riskAssessment: "Critical",
  supervisor: "Dr. John White",
  sampleMovementHistory: "Received -> In Testing",
  testingProgress: "Completed",
  alertsNotifications: "No Alerts",
  deviationLogs: "Minor contamination during handling",
  commentsNotes: "Re-test required due to contamination",
  attachments: "sterility_report.pdf",
  samplingFrequency: "Daily",
  sampleDisposition: "Quarantine"
}

  
  
  

];

  const SamplePlanning = () => {
    const [data, setData] = useState(initialData);
    const [searchQuery, setSearchQuery] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [statusFilter, setStatusFilter] = useState("All");
    const [viewModalData, setViewModalData] = useState(null);
    const [isModalsOpen, setIsModalsOpen] = useState(false);
    const [editModalData, setEditModalData] = useState(null);
const navigate = useNavigate()

const filteredData = data.filter((row) => {
  return (
    row.sampleName.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (statusFilter === 'All' || row.status === statusFilter)
  );
});

    const columns = [
      {
        header: <input type="checkbox"  />,
        accessor: "checkbox",
      },
      { header: "Sample Plan ID.", accessor: "samplePlan" },
      { header: "Sample ID", accessor: "sampleId" },
      { header: "Sample Name", accessor: "sampleName" },
      { header: "Sample  Type", accessor: "sampleType" },
      { header: "Batch/Lot Number", accessor: "batchNumber" },
      { header: "Sample Priority", accessor: "samplePriority" },
      { header: "Sample Quantity", accessor: "sampleQuantity" },
      { header: "Tests", accessor: "tests" },
      { header: "Specification Id ", accessor: "specificationId" },
      { header: "Specification Attachment", accessor: "specificationAttachment" },
      { header: "STP Id", accessor: "sTPId" },
      { header: "STP Attachment", accessor: "sTPAttachment" },
      { header: "Test Name", accessor: "testName" },
      { header: "Test Method", accessor: "testMethod" },
      { header: "Test Parameters ", accessor: "testParameters" },
      { header: "Testing Frequency", accessor: "testingFrequency" },
      { header: "Testing Location ", accessor: "testingLocation" },
      { header: "Required Instruments", accessor: "requiredInstruments" },
      { header: "Test Grouping", accessor: "testGrouping" },
      { header: "Expected Results", accessor: "expectedResults" },
      { header: "Testing Deadline", accessor: "testingDeadline" },
      { header: "Planner Name", accessor: "plannerName" },
      { header: "Sample Source", accessor: "sampleSource" },
      { header: "Planned Date", accessor: "plannedDate" },
      { header: "Lab Technician", accessor: "labTechnician" },
      { header: "Reviewer/Approver ", accessor: "reviewerApprover" },
      { header: "Assigned Department", accessor: "assignedDepartment" },
      { header: " Sample Collection Date", accessor: "sampleCollectionDate" },
      { header: "Testing Start Date", accessor: "testingStartDate" },
      { header: "Testing End Date", accessor: "testingEndDate" },
      { header: "Test Plan ID", accessor: "testPlanID" },
      { header: "Turnaround Time (TAT)", accessor: "turnaroundTime" },  
      { header: "Sample Retesting Date", accessor: "sampleRetestingDate" },
      { header: "Review Date ", accessor: "reviewDate" },
      { header: "Sample Storage Location", accessor: "sampleStorageLocation" },
      { header: "Transportation Method ", accessor: "transportationMethod" },
      { header: "Sample Preparation Method", accessor: "samplePreparationMethod" },
      { header: "Sample Packaging Details", accessor: "samplePackagingDetails" },
      { header: "Sample Label", accessor: "sampleLabel" },
      { header: "Regulatory Requirements", accessor: "regulatoryRequirements" },
      { header: "Quality Control Checks", accessor: "qualityControlChecks" },
      { header: "Control Sample Reference", accessor: "controlSampleReference" },
      { header: "Sample Integrity Status ", accessor: "sampleIntegrityStatus" },
      { header: "Assigned Department", accessor: "assignedDepartment" },
      { header: "Risk Assessment", accessor: "riskAssessment" },
      { header: " Supervisor", accessor: "supervisor" },
      { header: "Sample Movement History", accessor: "sampleMovementHistory" },
      { header: "Testing Progress", accessor: "testingProgress" },
      { header: "Alerts/Notifications", accessor: "alertsNotifications" },
      { header: "Deviation Logs", accessor: "deviationLogs" },
      { header: "Comments/Notes", accessor: "commentsNotes" },  
      { header: "Attachments", accessor: "attachments" },
      { header: "Sampling Frequency  ", accessor: "samplingFrequency" },
      { header: "Sample Disposition", accessor: "sampleDisposition" },
      {
        header: "Actions",
        accessor: "action",
        Cell: ({ row }) => (
          <>
            <FontAwesomeIcon
              icon={faEye}
              className="mr-2 cursor-pointer"
              onClick={() => {
                onViewDetails(row), navigate("/testResultsDetails");
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
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
  
    const closeViewModal = () => {
      setIsViewModalOpen(false);
    };
  
    const handleDelete = (item) => {
      const newData = data.filter((d) => d !== item);
      setData(newData);
      console.log('Deleted item:', item);
    };

    const handleCheckboxChange = (index) => {
      const newData = [...data];
      newData[index].checkbox = !newData[index].checkbox;
      setData(newData);
    };

    const onViewDetails = (rowData) => {
      setViewModalData(rowData);
      setIsViewModalOpen(true);
    };
  
    const openEditModal = (rowData) => {
      setEditModalData(rowData);
    };
    
    const closeEditModal = () => {
      setEditModalData(null);
    };

    const handleExcelDataUpload = (excelData) => {
      const updatedData = excelData.map((item, index) => ({
        checkbox: false, // Assuming no data for this, so defaulting to false
        samplePlan: index + 1, // Assign sample plan based on index
        sampleId: item["Sample ID"] || "", // Map from Excel data (replace with correct field)
        sampleName: item["Sample Name"] || "", // Map from Excel data (replace with correct field)
        sampleType: item["Sample Type"] || "", // Map from Excel data (replace with correct field)
        batchNumber: item["Batch Number"] || "", // Map from Excel data (replace with correct field)
        sampleSource: item["Sample Source"] || "", // Map from Excel data (replace with correct field)
        plannedDate: item["Planned Date"] || "", // Map from Excel data (replace with correct field)
        samplePriority: item["Sample Priority"] || "", // Map from Excel data (replace with correct field)
        sampleQuantity: item["Sample Quantity"] || "", // Map from Excel data (replace with correct field)
        tests: item["Tests"] ? item["Tests"].split(",") : [], // Map tests and split if comma-separated
        specificationId: item["Specification ID"] || "", // Map from Excel data (replace with correct field)
        specificationAttachment: item["Specification Attachment"] || "", // Map from Excel data (replace with correct field)
        sTPId: item["STP ID"] || "", // Map from Excel data (replace with correct field)
        sTPAttachment: item["STP Attachment"] || "", // Map from Excel data (replace with correct field)
        testName: item["Test Name"] || "", // Map from Excel data (replace with correct field)
        testMethod: item["Test Method"] || "", // Map from Excel data (replace with correct field)
        testParameters: item["Test Parameters"] || "", // Map from Excel data (replace with correct field)
        testingFrequency: item["Testing Frequency"] || "", // Map from Excel data (replace with correct field)
        testingLocation: item["Testing Location"] || "", // Map from Excel data (replace with correct field)
        requiredInstruments: item["Required Instruments"] || "", // Map from Excel data (replace with correct field)
        testGrouping: item["Test Grouping"] || "", // Map from Excel data (replace with correct field)
        expectedResults: item["Expected Results"] || "", // Map from Excel data (replace with correct field)
        testingDeadline: item["Testing Deadline"] || "", // Map from Excel data (replace with correct field)
        plannerName: item["Planner Name"] || "", // Map from Excel data (replace with correct field)
        labTechnician: item["Lab Technician"] || "", // Map from Excel data (replace with correct field)
        reviewerApprover: item["Reviewer Approver"] || "", // Map from Excel data (replace with correct field)
        assignedDepartment: item["Assigned Department"] || "", // Map from Excel data (replace with correct field)
        sampleCollectionDate: item["Sample Collection Date"] || "", // Map from Excel data (replace with correct field)
        testingStartDate: item["Testing Start Date"] || "", // Map from Excel data (replace with correct field)
        testingEndDate: item["Testing End Date"] || "", // Map from Excel data (replace with correct field)
        testPlanID: item["Test Plan ID"] || "", // Map from Excel data (replace with correct field)
        turnaroundTime: item["Turnaround Time"] || "", // Map from Excel data (replace with correct field)
        sampleRetestingDate: item["Sample Retesting Date"] || "", // Map from Excel data (replace with correct field)
        reviewDate: item["Review Date"] || "", // Map from Excel data (replace with correct field)
        sampleStorageLocation: item["Sample Storage Location"] || "", // Map from Excel data (replace with correct field)
        transportationMethod: item["Transportation Method"] || "", // Map from Excel data (replace with correct field)
        samplePreparationMethod: item["Sample Preparation Method"] || "", // Map from Excel data (replace with correct field)
        samplePackagingDetails: item["Sample Packaging Details"] || "", // Map from Excel data (replace with correct field)
        sampleLabel: item["Sample Label"] || "", // Map from Excel data (replace with correct field)
        regulatoryRequirements: item["Regulatory Requirements"] || "", // Map from Excel data (replace with correct field)
        qualityControlChecks: item["Quality Control Checks"] || "", // Map from Excel data (replace with correct field)
        controlSampleReference: item["Control Sample Reference"] || "", // Map from Excel data (replace with correct field)
        sampleIntegrityStatus: item["Sample Integrity Status"] || "", // Map from Excel data (replace with correct field)
        riskAssessment: item["Risk Assessment"] || "", // Map from Excel data (replace with correct field)
        supervisor: item["Supervisor"] || "", // Map from Excel data (replace with correct field)
        sampleMovementHistory: item["Sample Movement History"] || "", // Map from Excel data (replace with correct field)
        testingProgress: item["Testing Progress"] || "", // Map from Excel data (replace with correct field)
        alertsNotifications: item["Alerts Notifications"] || "", // Map from Excel data (replace with correct field)
        deviationLogs: item["Deviation Logs"] || "", // Map from Excel data (replace with correct field)
        commentsNotes: item["Comments Notes"] || "", // Map from Excel data (replace with correct field)
        attachments: item["Attachments"] || "", // Map from Excel data (replace with correct field)
        samplingFrequency: item["Sampling Frequency"] || "", // Map from Excel data (replace with correct field)
        sampleDisposition: item["Sample Disposition"] || "", // Map from Excel data (replace with correct field)
      }));
      
  
      // Concatenate the updated data with existing data
      const concatenatedData = [...updatedData];
      setData(concatenatedData);
      setIsModalsOpen(false);; // Update data state with parsed Excel data
  
    };

  return (
    <div className="m-5 mt-3">
    <div className="main-head">
      <h4 className="fw-bold">Sample Planning & Analytics</h4>
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
      <PDFDownload columns={columns} data={filteredData} fileName="InvestigationL2.pdf" title="Investigation L2 Data" />
        <ATMButton text="Import" color="pink" onClick={handleOpenModals} />
        <ATMButton text="Add Sample Planning & Analytics" color="blue" onClick={openModal} />
      </div>
    </div>
    <table className="min-w-full bg-white border border-gray-200 shadow-lg">
            <thead>
                <tr className="bg-yellow-600 text-white text-left">
                    <th colSpan="9" className="px-4 py-2 bg-yellow-600">Sample Planning Information</th>
                    <th colSpan="10" className="px-4 py-2 bg-green-600">Testing Requirements</th>
                    <th colSpan="5" className="px-4 py-2 bg-brown-600">Personnel and Roles</th>
                    <th colSpan="11" className="px-4 py-2 bg-violet-600">Schedule and Timeline</th>
                    <th colSpan="5" className="px-4 py-2 bg-red-600">Logistics and Sample Handling</th>
                    <th colSpan="5" className="px-4 py-2 bg-blue-600" >Quality and Compliance</th>
                    <th colSpan="4" className="px-4 py-2 bg-orange-600">Resource Allocation</th>
                    <th colSpan="4" className="px-4 py-2 bg-green-300">Tracking and Monitoring</th>
                    <th colSpan="4" className="px-4 py-2 bg-violet-500">Miscellaneous</th>
                </tr>
                <tr className="bg-slate-600 text-white">
                    <td className="border px-4 py-2">Sample Plan ID</td>
                    <td className="border px-4 py-2">Sample ID</td>
                    <td className="border px-4 py-2">Sample Name</td>
                    <td className="border px-4 py-2">Sample Type</td>
                    <td className="border px-4 py-2">Batch/Lot Number</td>
                    <td className="border px-4 py-2">Sample Source</td>
                    <td className="border px-4 py-2">Planned Date</td>
                    <td className="border px-4 py-2">Sample Priority</td>
                    <td className="border px-4 py-2">Sample Quantity</td>

                    <td className="border px-4 py-2">Tests</td>
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
                    <td className="border px-4 py-2">Expected Results</td>
                    <td className="border px-4 py-2">Testing Deadline</td>

                    <td className="border px-4 py-2">Planner Name</td>
                    <td className="border px-4 py-2">Lab Technician</td>
                    <td className="border px-4 py-2">Reviewer/Approver</td>
                    <td className="border px-4 py-2">Assigned Department</td>
                    <td className="border px-4 py-2">Supervisor</td>

                    <td className="border px-4 py-2">Sample Collection Date</td>
                    <td className="border px-4 py-2">Testing Start Date</td>
                    <td className="border px-4 py-2">Testing End Date</td>
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
                    <td className="border px-4 py-2">Risk Assessment</td>

                    <td className="border px-4 py-2">Instruments Reserved</td>
                    <td className="border px-4 py-2">Lab Availability</td>
                    <td className="border px-4 py-2">Sample Cost Estimation</td>
                    <td className="border px-4 py-2">Resource Utilization</td>

                    <td className="border px-4 py-2">Sample Movement History</td>
                    <td className="border px-4 py-2">Testing Progress</td>
                    <td className="border px-4 py-2">Alerts/Notifications</td>
                    <td className="border px-4 py-2">Deviation Logs</td>

                    <td className="border px-4 py-2">Comments/Notes</td>
                    <td className="border px-4 py-2">Attachments</td>
                    <td className="border px-4 py-2">Sampling Frequency</td>
                    <td className="border px-4 py-2">Sample Disposition</td>
                </tr>
            </thead>
            <tbody>
                {randomSampleData.map((data, index) => (
                    <tr key={index} className="hover:bg-gray-100">
                        <td className="border px-4 py-2">{data.samplePlanId}</td>
                        <td className="border px-4 py-2">{data.sampleId}</td>
                        <td className="border px-4 py-2">{data.sampleName}</td>
                        <td className="border px-4 py-2">{data.sampleType}</td>
                        <td className="border px-4 py-2">{data.batchLotNumber}</td>
                        <td className="border px-4 py-2">{data.sampleSource}</td>
                        <td className="border px-4 py-2">{data.plannedDate}</td>
                        <td className="border px-4 py-2">{data.samplePriority}</td>
                        <td className="border px-4 py-2">{data.sampleQuantity}</td>

                        <td className="border px-4 py-2">{data.tests}</td>
                        <td className="border px-4 py-2">{data.specificationId}</td>
                        <td className="border px-4 py-2">{data.specificationAttachment}</td>
                        <td className="border px-4 py-2">{data.stpId}</td>
                        <td className="border px-4 py-2">{data.stpAttachment}</td>
                        <td className="border px-4 py-2">{data.testPlanId}</td>
                        <td className="border px-4 py-2">{data.testName}</td>
                        <td className="border px-4 py-2">{data.testMethod}</td>
                        <td className="border px-4 py-2">{data.testParameters}</td>
                        <td className="border px-4 py-2">{data.testingFrequency}</td>
                        <td className="border px-4 py-2">{data.testingLocation}</td>
                        <td className="border px-4 py-2">{data.requiredInstruments}</td>
                        <td className="border px-4 py-2">{data.testGrouping}</td>
                        <td className="border px-4 py-2">{data.expectedResults}</td>
                        <td className="border px-4 py-2">{data.testingDeadline}</td>

                        <td className="border px-4 py-2">{data.plannerName}</td>
                        <td className="border px-4 py-2">{data.labTechnician}</td>
                        <td className="border px-4 py-2">{data.reviewer}</td>
                        <td className="border px-4 py-2">{data.assignedDepartment}</td>
                        <td className="border px-4 py-2">{data.supervisor}</td>

                        <td className="border px-4 py-2">{data.sampleCollectionDate}</td>
                        <td className="border px-4 py-2">{data.testingStartDate}</td>
                        <td className="border px-4 py-2">{data.testingEndDate}</td>
                        <td className="border px-4 py-2">{data.turnaroundTime}</td>
                        <td className="border px-4 py-2">{data.sampleRetestingDate}</td>
                        <td className="border px-4 py-2">{data.reviewDate}</td>

                        <td className="border px-4 py-2">{data.sampleStorageLocation}</td>
                        <td className="border px-4 py-2">{data.transportationMethod}</td>
                        <td className="border px-4 py-2">{data.samplePreparationMethod}</td>
                        <td className="border px-4 py-2">{data.samplePackagingDetails}</td>
                        <td className="border px-4 py-2">{data.sampleLabel}</td>

                        <td className="border px-4 py-2">{data.regulatoryRequirements}</td>
                        <td className="border px-4 py-2">{data.qualityControlChecks}</td>
                        <td className="border px-4 py-2">{data.controlSampleReference}</td>
                        <td className="border px-4 py-2">{data.sampleIntegrityStatus}</td>
                        <td className="border px-4 py-2">{data.riskAssessment}</td>

                        <td className="border px-4 py-2">{data.instrumentsReserved}</td>
                        <td className="border px-4 py-2">{data.labAvailability}</td>
                        <td className="border px-4 py-2">{data.sampleCostEstimation}</td>
                        <td className="border px-4 py-2">{data.resourceUtilization}</td>

                        <td className="border px-4 py-2">{data.sampleMovementHistory}</td>
                        <td className="border px-4 py-2">{data.testingProgress}</td>
                        <td className="border px-4 py-2">{data.alertsNotifications}</td>
                        <td className="border px-4 py-2">{data.deviationLogs}</td>

                        <td className="border px-4 py-2">{data.comments}</td>
                        <td className="border px-4 py-2">{data.attachments}</td>
                        <td className="border px-4 py-2">{data.samplingFrequency}</td>
                        <td className="border px-4 py-2">{data.sampleDisposition}</td>
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
     {editModalData && (
      <EditModal
        visible={Boolean(editModalData)}
        closeModal={closeEditModal}
        data={editModalData}
        onSave={handleEditSave}
      />
    )}
  </div>
  )
  }

export default SamplePlanning