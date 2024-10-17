import React, { useEffect, useState } from "react";
import {
  CButton,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CForm,
  CFormInput,
  CFormSelect,
  CFormTextarea,
  CRow,
  CCol,
} from "@coreui/react";
import axios from "axios";
import BASE_URL from "../../config.json";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";

const SampleWorkflowPanel = ({ onClose }) => {
  const location = useLocation();
  const [sampleData, setSampleData] = useState(null);

  const [formData, setFormData] = useState({});
  const [activeTab, setActiveTab] = useState("Sample Registration");

  useEffect(() => {
    if (location.state?.sampleData) {
      setFormData(location.state.sampleData);
    }
  }, [location.state]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleSave = async () => {
    try {
      const response = await axios.post(
        `http://localhost:9000/save-sample`,
        formData
      );
      toast.success("Sample data saved successfully!");
      navigate("/samples");
    } catch (error) {
      console.error("Error saving data:", error);
      toast.error("Error saving sample data.");
    }
  };

  const renderFields = (tab) => {
    switch (tab) {
      case "Sample Registration":
        return (
          <CForm>
            <CRow className="mb-3">
              <CCol md={6}>
                <CFormInput
                  type="text"
                  name="samplePlanId"
                  label="Sample Plan ID"
                  value={formData?.samplePlanId || ""}
                  onChange={handleInputChange}
                />
              </CCol>
              <CCol md={6}>
                <CFormInput
                  type="text"
                  name="sampleId"
                  label="Sample ID"
                  value={formData.sampleId || ""}
                  onChange={handleInputChange}
                />
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CCol md={6}>
                <CFormInput
                  type="text"
                  name="sampleName"
                  label="Sample Name"
                  value={formData.sampleName || ""}
                  onChange={handleInputChange}
                />
              </CCol>
              <CCol md={6}>
                <CFormInput
                  type="text"
                  name="sampleType"
                  label="Sample Type"
                  value={formData.sampleType || ""}
                  onChange={handleInputChange}
                />
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CCol md={6}>
                <CFormInput
                  type="text"
                  name="productMaterialName"
                  label="Product / Material Name"
                  value={formData.productMaterialName || ""}
                  onChange={handleInputChange}
                />
              </CCol>
              <CCol md={6}>
                <CFormInput
                  type="text"
                  name="batchLotNumber"
                  label="Batch/Lot Number"
                  value={formData.batchLotNumber || ""}
                  onChange={handleInputChange}
                />
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CCol md={6}>
                <CFormInput
                  type="text"
                  name="samplePriority"
                  label="Sample Priority"
                  value={formData.samplePriority || ""}
                  onChange={handleInputChange}
                />
              </CCol>
              <CCol md={6}>
                <CFormInput
                  type="number"
                  name="sampleQuantity"
                  label="Sample Quantity"
                  value={formData.sampleQuantity || ""}
                  onChange={handleInputChange}
                />
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CCol md={6}>
                <CFormInput
                  type="text"
                  name="uom"
                  label="UOM"
                  value={formData.uom || ""}
                  onChange={handleInputChange}
                />
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CCol md={6}>
                <CFormInput
                  type="text"
                  name="market"
                  label="Market"
                  value={formData.market || ""}
                  onChange={handleInputChange}
                />
              </CCol>
              <CCol md={6}>
                <CFormInput
                  type="file"
                  name="sampleBarCode"
                  label="Sample Barcode"
                  value={formData?.sampleRegistration?.sampleBarCode || ""}
                  onChange={handleInputChange}
                />
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CCol md={6}>
                <CFormInput
                  type="text"
                  name="specificationId"
                  label="Specification Id"
                  value={formData.specificationId || ""}
                  onChange={handleInputChange}
                />
              </CCol>
              <CCol md={6}>
                <CFormInput
                  type="file"
                  name="specificationAttachment"
                  label="Specification Attachment"
                  onChange={handleInputChange}
                />
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CCol md={6}>
                <CFormInput
                  type="text"
                  name="stpId"
                  label="STP Id"
                  value={formData.stpId || ""}
                  onChange={handleInputChange}
                />
              </CCol>
              <CCol md={6}>
                <CFormInput
                  type="file"
                  name="stpAttachment"
                  label="STP Attachment"
                  onChange={handleInputChange}
                />
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CCol md={6}>
                <CFormInput
                  type="text"
                  name="testName"
                  label="Test Name"
                  value={formData.testName || ""}
                  onChange={handleInputChange}
                />
              </CCol>
              <CCol md={6}>
                <CFormInput
                  type="text"
                  name="testMethod"
                  label="Test Method"
                  value={formData.testMethod || ""}
                  onChange={handleInputChange}
                />
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CCol md={6}>
                <CFormInput
                  type="text"
                  name="testParameters"
                  label="Test Parameters"
                  value={formData.testParameters || ""}
                  onChange={handleInputChange}
                />
              </CCol>
              <CCol md={6}>
                <CFormInput
                  type="text"
                  name="testingFrequency"
                  label="Testing Frequency"
                  value={formData.testingFrequency || ""}
                  onChange={handleInputChange}
                />
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CCol md={6}>
                <CFormInput
                  type="text"
                  name="testingLocation"
                  label="Testing Location"
                  value={formData.testingLocation || ""}
                  onChange={handleInputChange}
                />
              </CCol>
              <CCol md={6}>
                <CFormInput
                  type="text"
                  name="requiredInstruments"
                  label="Required Instruments"
                  value={formData.requiredInstruments || ""}
                  onChange={handleInputChange}
                />
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CCol md={6}>
                <CFormInput
                  type="text"
                  name="testGrouping"
                  label="Test Grouping"
                  value={formData.testGrouping || ""}
                  onChange={handleInputChange}
                />
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CCol md={6}>
                <CFormInput
                  type="number"
                  name="lsl"
                  label="LSL"
                  value={formData.lsl || ""}
                  onChange={handleInputChange}
                />
              </CCol>
              <CCol md={6}>
                <CFormInput
                  type="number"
                  name="usl"
                  label="USL"
                  value={formData.usl || ""}
                  onChange={handleInputChange}
                />
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CCol md={6}>
                <CFormInput
                  type="date"
                  name="testingDeadline"
                  label="Testing Deadline"
                  value={formData.testingDeadline || ""}
                  onChange={handleInputChange}
                />
              </CCol>
              <CCol md={6}>
                <CFormInput
                  type="text"
                  name="plannerName"
                  label="Planner Name"
                  value={formData.plannerName || ""}
                  onChange={handleInputChange}
                />
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CCol md={6}>
                <CFormInput
                  type="text"
                  name="sampleSource"
                  label="Sample Source"
                  value={formData.sampleSource || ""}
                  onChange={handleInputChange}
                />
              </CCol>
              <CCol md={6}>
                <CFormInput
                  type="date"
                  name="plannedDate"
                  label="Planned Date"
                  value={formData.plannedDate || ""}
                  onChange={handleInputChange}
                />
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CCol md={6}>
                <CFormInput
                  type="text"
                  name="labTechnician"
                  label="Lab Technician"
                  value={formData.labTechnician || ""}
                  onChange={handleInputChange}
                />
              </CCol>
              <CCol md={6}>
                <CFormInput
                  type="text"
                  name="assignedDepartment"
                  label="Assigned Department"
                  value={formData.assignedDepartment || ""}
                  onChange={handleInputChange}
                />
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CCol md={6}>
                <CFormInput
                  type="date"
                  name="sampleCollectionDate"
                  label="Sample Collection Date"
                  value={formData.sampleCollectionDate || ""}
                  onChange={handleInputChange}
                />
              </CCol>
            </CRow>
          </CForm>
        );
      case "Sample Analysis":
        return (
          <CForm>
            <CRow className="mb-3">
              <CCol md={6}>
                <CFormInput
                  type="text"
                  name="analysisType"
                  label="Analysis Type"
                  value={formData.analysisType || ""}
                  onChange={handleInputChange}
                />
              </CCol>
              <CCol md={6}>
                <CFormInput
                  type="text"
                  name="analysisResult"
                  label="Analysis Result"
                  value={formData.analysisResult || ""}
                  onChange={handleInputChange}
                />
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CCol md={6}>
                <CFormInput
                  type="date"
                  name="analysisDate"
                  label="Analysis Date"
                  value={formData.analysisDate || ""}
                  onChange={handleInputChange}
                />
              </CCol>
              <CCol md={6}>
                <CFormInput
                  type="date"
                  name="testingStartDate"
                  label="Testing Start Date"
                  value={formData.testingStartDate || ""}
                  onChange={handleInputChange}
                />
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CCol md={6}>
                <CFormInput
                  type="date"
                  name="testingEndDate"
                  label="Testing End Date"
                  value={formData.testingEndDate || ""}
                  onChange={handleInputChange}
                />
              </CCol>
              <CCol md={6}>
                <CFormTextarea
                  name="delayJustification"
                  label="Delay Justification"
                  value={formData.delayJustification || ""}
                  onChange={handleInputChange}
                />
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CCol md={6}>
                <CFormSelect
                  name="testingOutcome"
                  label="Testing Outcome"
                  value={formData.testingOutcome || ""}
                  onChange={handleInputChange}
                  options={[
                    "Select outcome",
                    { label: "Pass", value: "pass" },
                    { label: "Fail", value: "fail" },
                  ]}
                />
              </CCol>
              <CCol md={6}>
                <CFormInput
                  type="text"
                  name="testPlanId"
                  label="Test Plan ID"
                  value={formData.testPlanId || ""}
                  onChange={handleInputChange}
                />
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CCol md={6}>
                <CFormInput
                  type="number"
                  name="turnaroundTime"
                  label="Turnaround Time (TAT)"
                  value={formData.turnaroundTime || ""}
                  onChange={handleInputChange}
                />
              </CCol>
              <CCol md={6}>
                <CFormInput
                  type="date"
                  name="sampleRetestingDate"
                  label="Sample Retesting Date"
                  value={formData.sampleRetestingDate || ""}
                  onChange={handleInputChange}
                />
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CCol md={6}>
                <CFormInput
                  type="date"
                  name="reviewDate"
                  label="Review Date"
                  value={formData.reviewDate || ""}
                  onChange={handleInputChange}
                />
              </CCol>
              <CCol md={6}>
                <CFormInput
                  type="text"
                  name="sampleStorageLocation"
                  label="Sample Storage Location"
                  value={formData.sampleStorageLocation || ""}
                  onChange={handleInputChange}
                />
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CCol md={6}>
                <CFormInput
                  type="text"
                  name="transportationMethod"
                  label="Transportation Method"
                  value={formData.transportationMethod || ""}
                  onChange={handleInputChange}
                />
              </CCol>
              <CCol md={6}>
                <CFormTextarea
                  name="samplePreparationMethod"
                  label="Sample Preparation Method"
                  value={formData.samplePreparationMethod || ""}
                  onChange={handleInputChange}
                />
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CCol md={6}>
                <CFormTextarea
                  name="samplePackagingDetails"
                  label="Sample Packaging Details"
                  value={formData.samplePackagingDetails || ""}
                  onChange={handleInputChange}
                />
              </CCol>
              <CCol md={6}>
                <CFormInput
                  type="text"
                  name="sampleLabel"
                  label="Sample Label"
                  value={formData.sampleLabel || ""}
                  onChange={handleInputChange}
                />
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CCol md={6}>
                <CFormTextarea
                  name="regulatoryRequirements"
                  label="Regulatory Requirements"
                  value={formData.regulatoryRequirements || ""}
                  onChange={handleInputChange}
                />
              </CCol>
              <CCol md={6}>
                <CFormTextarea
                  name="qualityControlChecks"
                  label="Quality Control Checks"
                  value={formData.qualityControlChecks || ""}
                  onChange={handleInputChange}
                />
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CCol md={6}>
                <CFormInput
                  type="text"
                  name="controlSample"
                  label="Control Sample"
                  value={formData.controlSample || ""}
                  onChange={handleInputChange}
                />
              </CCol>
              <CCol md={6}>
                <CFormInput
                  type="text"
                  name="referenceSample"
                  label="Reference Sample"
                  value={formData.referenceSample || ""}
                  onChange={handleInputChange}
                />
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CCol md={6}>
                <CFormSelect
                  name="sampleIntegrityStatus"
                  label="Sample Integrity Status"
                  value={formData.sampleIntegrityStatus || ""}
                  onChange={handleInputChange}
                  options={[
                    "Select status",
                    { label: "Intact", value: "intact" },
                    { label: "Compromised", value: "compromised" },
                  ]}
                />
              </CCol>
              <CCol md={6}>
                <CFormInput
                  type="text"
                  name="assignedDepartment"
                  label="Assigned Department"
                  value={formData.assignedDepartment || ""}
                  onChange={handleInputChange}
                />
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CCol md={6}>
                <CFormTextarea
                  name="riskAssessment"
                  label="Risk Assessment"
                  value={formData.riskAssessment || ""}
                  onChange={handleInputChange}
                />
              </CCol>
              <CCol md={6}>
                <CFormInput
                  type="text"
                  name="supervisor"
                  label="Supervisor"
                  value={formData.supervisor || ""}
                  onChange={handleInputChange}
                />
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CCol md={6}>
                <CFormTextarea
                  name="sampleMovementHistory"
                  label="Sample Movement History"
                  value={formData.sampleMovementHistory || ""}
                  onChange={handleInputChange}
                />
              </CCol>
              <CCol md={6}>
                <CFormTextarea
                  name="testingProgress"
                  label="Testing Progress"
                  value={formData.testingProgress || ""}
                  onChange={handleInputChange}
                />
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CCol md={6}>
                <CFormTextarea
                  name="alertsNotifications"
                  label="Alerts/Notifications"
                  value={formData.alertsNotifications || ""}
                  onChange={handleInputChange}
                />
              </CCol>
              <CCol md={6}>
                <CFormTextarea
                  name="deviationLogs"
                  label="Deviation Logs"
                  value={formData.deviationLogs || ""}
                  onChange={handleInputChange}
                />
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CCol md={6}>
                <CFormTextarea
                  name="commentsNotes"
                  label="Comments/Notes"
                  value={formData.commentsNotes || ""}
                  onChange={handleInputChange}
                />
              </CCol>
              <CCol md={6}>
                <CFormInput
                  type="file"
                  name="attachments"
                  label="Attachments"
                  onChange={handleInputChange}
                  multiple
                />
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CCol md={6}>
                <CFormInput
                  type="text"
                  name="samplingFrequency"
                  label="Sampling Frequency"
                  value={formData.samplingFrequency || ""}
                  onChange={handleInputChange}
                />
              </CCol>
              <CCol md={6}>
                <CFormSelect
                  name="sampleDisposition"
                  label="Sample Disposition"
                  value={formData.sampleDisposition || ""}
                  onChange={handleInputChange}
                  options={[
                    "Select disposition",
                    { label: "Retained", value: "retained" },
                    { label: "Disposed", value: "disposed" },
                    { label: "Returned", value: "returned" },
                  ]}
                />
              </CCol>
            </CRow>
          </CForm>
        );

      case "Stability Information":
        return (
          <CForm>
            <CRow className="mb-3">
              <CCol md={6}>
                <CFormInput
                  type="text"
                  name="stabilityStudyType"
                  label="Stability Study Type"
                  value={formData?.stabilityStudyType || ""}
                  onChange={handleInputChange}
                />
              </CCol>
              <CCol md={6}>
                <CFormInput
                  type="text"
                  name="stabilityStudyProtocol"
                  label="Stability Study Protocol"
                  value={formData?.stabilityStudyProtocol || ""}
                  onChange={handleInputChange}
                />
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CCol md={6}>
                <CFormInput
                  type="date"
                  name="stabilityProtocolApprovalDate"
                  label="Stability Protocol Approval Date"
                  value={formData?.stabilityProtocolApprovalDate || ""}
                  onChange={handleInputChange}
                />
              </CCol>
              <CCol md={6}>
                <CFormInput
                  type="text"
                  name="countryOfRegulatorySubmissions"
                  label="Country of Regulatory Submissions"
                  value={formData?.countryOfRegulatorySubmissions || ""}
                  onChange={handleInputChange}
                />
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CCol md={6}>
                <CFormInput
                  type="text"
                  name="ichZone"
                  label="ICH Zone"
                  value={formData?.ichZone || ""}
                  onChange={handleInputChange}
                />
              </CCol>
              <CCol md={6}>
                <CFormInput
                  type="text"
                  name="photostabilityTestingResults"
                  label="Photostability Testing Results"
                  value={formData?.photostabilityTestingResults || ""}
                  onChange={handleInputChange}
                />
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CCol md={6}>
                <CFormInput
                  type="text"
                  name="reconstitutionStability"
                  label="Reconstitution Stability"
                  value={formData?.reconstitutionStability || ""}
                  onChange={handleInputChange}
                />
              </CCol>
              <CCol md={6}>
                <CFormInput
                  type="number"
                  name="testingInterval"
                  label="Testing Interval (months)"
                  value={formData?.testingInterval || ""}
                  onChange={handleInputChange}
                />
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CCol>
                <CFormInput
                  type="text"
                  name="shelfLifeRecommendation"
                  label="Shelf Life Recommendation"
                  value={formData?.shelfLifeRecommendation || ""}
                  onChange={handleInputChange}
                />
              </CCol>
            </CRow>
          </CForm>
        );
      case "Supervisor Review":
        return (
          <CForm>
            {/* Reviewer/Approver Section */}
            <CRow className="mb-3">
              <CCol md={6}>
                <CFormInput
                  type="text"
                  name="reviewerApprover"
                  label="Reviewer/Approver"
                  value={formData?.reviewerApprover || ""}
                  onChange={handleInputChange}
                />
              </CCol>
              <CCol md={6}>
                <CFormInput
                  type="text"
                  name="reviewerComment"
                  label="Reviewer Comment"
                  value={formData?.reviewerComment || ""}
                  onChange={handleInputChange}
                />
              </CCol>
              <CCol md={6}>
                <CFormInput
                  type="date"
                  name="reviewDate"
                  label="Review Date"
                  value={formData?.reviewDate || ""}
                  onChange={handleInputChange}
                />
              </CCol>
            </CRow>

            {/* QA Reviewer/Approver Section */}
            <CRow className="mb-3">
              <CCol md={6}>
                <CFormInput
                  type="text"
                  name="qaReviewerApprover"
                  label="QA Reviewer/Approver"
                  value={formData?.qaReviewerApprover || ""}
                  onChange={handleInputChange}
                />
              </CCol>
              <CCol md={6}>
                <CFormInput
                  type="text"
                  name="qaReviewerComment"
                  label="QA Reviewer Comment"
                  value={formData?.qaReviewerComment || ""}
                  onChange={handleInputChange}
                />
              </CCol>
              <CCol md={6}>
                <CFormInput
                  type="date"
                  name="qaReviewDate"
                  label="QA Review Date"
                  value={formData?.qaReviewDate || ""}
                  onChange={handleInputChange}
                />
              </CCol>
            </CRow>

            <div></div>
          </CForm>
        );
      default:
        return null;
    }
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSave();
        }}
      >
        <div className="flex space-x-4 mb-8">
          <CButton
            color={
              activeTab === "Stability Information" ? "primary" : "secondary"
            }
            onClick={() => handleTabClick("Stability Information")}
            className={`transition-all duration-300 ${
              activeTab === "Stability Information"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700"
            } hover:bg-blue-500 hover:text-white shadow-lg py-2 px-4 rounded-full`}
          >
            Stability Information
          </CButton>
          <CButton
            color={
              activeTab === "Sample Registration" ? "primary" : "secondary"
            }
            onClick={() => handleTabClick("Sample Registration")}
            className={`transition-all duration-300 ${
              activeTab === "Sample Registration"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700"
            } hover:bg-blue-500 hover:text-white shadow-lg py-2 px-4 rounded-full`}
          >
            Sample Registration
          </CButton>
          <CButton
            color={activeTab === "Sample Analysis" ? "primary" : "secondary"}
            onClick={() => handleTabClick("Sample Analysis")}
            className={`transition-all duration-300 ${
              activeTab === "Sample Analysis"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700"
            } hover:bg-blue-500 hover:text-white shadow-lg py-2 px-4 rounded-full`}
          >
            Sample Analysis
          </CButton>

          <CButton
            color={activeTab === "Supervisor Review" ? "primary" : "secondary"}
            onClick={() => handleTabClick("Supervisor Review")}
            className={`transition-all duration-300 ${
              activeTab === "Supervisor Review"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700"
            } hover:bg-blue-500 hover:text-white shadow-lg py-2 px-4 rounded-full`}
          >
            Supervisor Review
          </CButton>
        </div>

        <div className="bg-white shadow-2xl p-8 rounded-md transition-all duration-300">
          {renderFields(activeTab)}
        </div>

        <div className="flex flex-col gap-3 justify-end mt-6 fixed bottom-24 left-[95%]">
          <CButton
            type="submit"
            className="bg-green-600 text-white px-6 py-2 w-[100px] rounded-md shadow-lg hover:bg-green-500 transition-all duration-300"
          >
            Save
          </CButton>
          <CButton
            onClick={onClose}
            className=" bg-red-500 text-white px-6 py-2 w-[100px] rounded-md shadow-lg hover:bg-red-400 transition-all duration-300"
          >
            Exit
          </CButton>
        </div>
      </form>
    </div>
  );
};

export default SampleWorkflowPanel;
