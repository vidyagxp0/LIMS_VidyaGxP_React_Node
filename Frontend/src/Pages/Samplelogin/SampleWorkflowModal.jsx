import React, { useState } from "react";
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

const SampleWorkflowModal = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState("Sample Registration");
  const [formData, setFormData] = useState({
    sampleRegistration: {},
    sampleAnalysis: {},
    supervisorReview: {},
    stabilityInformation: {},
  });

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const handleInputChange = (e, tab) => {
    setFormData({
      ...formData,
      [tab]: {
        ...formData[tab],
        [e.target.name]: e.target.value,
      },
    });
  };

  const handleSave = (tab) => {
    console.log(`Data saved for ${tab}:`, formData[tab]);
    alert(`Data saved for ${tab}`);
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
                  value={formData.sampleRegistration.samplePlanId || ""}
                  onChange={(e) => handleInputChange(e, "sampleRegistration")}
                />
              </CCol>
              <CCol md={6}>
                <CFormInput
                  type="text"
                  name="sampleId"
                  label="Sample ID"
                  value={formData.sampleRegistration.sampleId || ""}
                  onChange={(e) => handleInputChange(e, "sampleRegistration")}
                />
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CCol md={6}>
                <CFormInput
                  type="text"
                  name="sampleName"
                  label="Sample Name"
                  value={formData.sampleRegistration.sampleName || ""}
                  onChange={(e) => handleInputChange(e, "sampleRegistration")}
                />
              </CCol>
              <CCol md={6}>
                <CFormInput
                  type="text"
                  name="sampleType"
                  label="Sample Type"
                  value={formData.sampleRegistration.sampleType || ""}
                  onChange={(e) => handleInputChange(e, "sampleRegistration")}
                />
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CCol md={6}>
                <CFormInput
                  type="text"
                  name="productMaterialName"
                  label="Product / Material Name"
                  value={formData.sampleRegistration.productMaterialName || ""}
                  onChange={(e) => handleInputChange(e, "sampleRegistration")}
                />
              </CCol>
              <CCol md={6}>
                <CFormInput
                  type="text"
                  name="batchLotNumber"
                  label="Batch/Lot Number"
                  value={formData.sampleRegistration.batchLotNumber || ""}
                  onChange={(e) => handleInputChange(e, "sampleRegistration")}
                />
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CCol md={6}>
                <CFormInput
                  type="text"
                  name="samplePriority"
                  label="Sample Priority"
                  value={formData.sampleRegistration.samplePriority || ""}
                  onChange={(e) => handleInputChange(e, "sampleRegistration")}
                />
              </CCol>
              <CCol md={6}>
                <CFormInput
                  type="number"
                  name="sampleQuantity"
                  label="Sample Quantity"
                  value={formData.sampleRegistration.sampleQuantity || ""}
                  onChange={(e) => handleInputChange(e, "sampleRegistration")}
                />
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CCol md={6}>
                <CFormInput
                  type="text"
                  name="uom"
                  label="UOM"
                  value={formData.sampleRegistration.uom || ""}
                  onChange={(e) => handleInputChange(e, "sampleRegistration")}
                />
              </CCol>
              <CCol md={6}>
                <CFormInput
                  type="text"
                  name="tests"
                  label="Tests"
                  value={formData.sampleRegistration.tests || ""}
                  onChange={(e) => handleInputChange(e, "sampleRegistration")}
                />
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CCol md={6}>
                <CFormInput
                  type="text"
                  name="market"
                  label="Market"
                  value={formData.sampleRegistration.market || ""}
                  onChange={(e) => handleInputChange(e, "sampleRegistration")}
                />
              </CCol>
              <CCol md={6}>
                <CFormInput
                  type="text"
                  name="sampleBarcode"
                  label="Sample Barcode"
                  value={formData.sampleRegistration.sampleBarcode || ""}
                  onChange={(e) => handleInputChange(e, "sampleRegistration")}
                />
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CCol md={6}>
                <CFormInput
                  type="text"
                  name="specificationId"
                  label="Specification Id"
                  value={formData.sampleRegistration.specificationId || ""}
                  onChange={(e) => handleInputChange(e, "sampleRegistration")}
                />
              </CCol>
              <CCol md={6}>
                <CFormInput
                  type="file"
                  name="specificationAttachment"
                  label="Specification Attachment"
                  onChange={(e) =>
                    handleFileUpload(e, "specificationAttachment")
                  }
                />
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CCol md={6}>
                <CFormInput
                  type="text"
                  name="stpId"
                  label="STP Id"
                  value={formData.sampleRegistration.stpId || ""}
                  onChange={(e) => handleInputChange(e, "sampleRegistration")}
                />
              </CCol>
              <CCol md={6}>
                <CFormInput
                  type="file"
                  name="stpAttachment"
                  label="STP Attachment"
                  onChange={(e) => handleFileUpload(e, "stpAttachment")}
                />
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CCol md={6}>
                <CFormInput
                  type="text"
                  name="testName"
                  label="Test Name"
                  value={formData.sampleRegistration.testName || ""}
                  onChange={(e) => handleInputChange(e, "sampleRegistration")}
                />
              </CCol>
              <CCol md={6}>
                <CFormInput
                  type="text"
                  name="testMethod"
                  label="Test Method"
                  value={formData.sampleRegistration.testMethod || ""}
                  onChange={(e) => handleInputChange(e, "sampleRegistration")}
                />
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CCol md={6}>
                <CFormInput
                  type="text"
                  name="testParameters"
                  label="Test Parameters"
                  value={formData.sampleRegistration.testParameters || ""}
                  onChange={(e) => handleInputChange(e, "sampleRegistration")}
                />
              </CCol>
              <CCol md={6}>
                <CFormInput
                  type="text"
                  name="testingFrequency"
                  label="Testing Frequency"
                  value={formData.sampleRegistration.testingFrequency || ""}
                  onChange={(e) => handleInputChange(e, "sampleRegistration")}
                />
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CCol md={6}>
                <CFormInput
                  type="text"
                  name="testingLocation"
                  label="Testing Location"
                  value={formData.sampleRegistration.testingLocation || ""}
                  onChange={(e) => handleInputChange(e, "sampleRegistration")}
                />
              </CCol>
              <CCol md={6}>
                <CFormInput
                  type="text"
                  name="requiredInstruments"
                  label="Required Instruments"
                  value={formData.sampleRegistration.requiredInstruments || ""}
                  onChange={(e) => handleInputChange(e, "sampleRegistration")}
                />
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CCol md={6}>
                <CFormInput
                  type="text"
                  name="testGrouping"
                  label="Test Grouping"
                  value={formData.sampleRegistration.testGrouping || ""}
                  onChange={(e) => handleInputChange(e, "sampleRegistration")}
                />
              </CCol>
              <CCol md={6}>
                <CFormInput
                  type="text"
                  name="expectedResults"
                  label="Expected Results"
                  value={formData.sampleRegistration.expectedResults || ""}
                  onChange={(e) => handleInputChange(e, "sampleRegistration")}
                />
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CCol md={6}>
                <CFormInput
                  type="number"
                  name="lsl"
                  label="LSL"
                  value={formData.sampleRegistration.lsl || ""}
                  onChange={(e) => handleInputChange(e, "sampleRegistration")}
                />
              </CCol>
              <CCol md={6}>
                <CFormInput
                  type="number"
                  name="usl"
                  label="USL"
                  value={formData.sampleRegistration.usl || ""}
                  onChange={(e) => handleInputChange(e, "sampleRegistration")}
                />
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CCol md={6}>
                <CFormInput
                  type="date"
                  name="testingDeadline"
                  label="Testing Deadline"
                  value={formData.sampleRegistration.testingDeadline || ""}
                  onChange={(e) => handleInputChange(e, "sampleRegistration")}
                />
              </CCol>
              <CCol md={6}>
                <CFormInput
                  type="text"
                  name="plannerName"
                  label="Planner Name"
                  value={formData.sampleRegistration.plannerName || ""}
                  onChange={(e) => handleInputChange(e, "sampleRegistration")}
                />
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CCol md={6}>
                <CFormInput
                  type="text"
                  name="sampleSource"
                  label="Sample Source"
                  value={formData.sampleRegistration.sampleSource || ""}
                  onChange={(e) => handleInputChange(e, "sampleRegistration")}
                />
              </CCol>
              <CCol md={6}>
                <CFormInput
                  type="date"
                  name="plannedDate"
                  label="Planned Date"
                  value={formData.sampleRegistration.plannedDate || ""}
                  onChange={(e) => handleInputChange(e, "sampleRegistration")}
                />
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CCol md={6}>
                <CFormInput
                  type="text"
                  name="labTechnician"
                  label="Lab Technician"
                  value={formData.sampleRegistration.labTechnician || ""}
                  onChange={(e) => handleInputChange(e, "sampleRegistration")}
                />
              </CCol>
              <CCol md={6}>
                <CFormInput
                  type="text"
                  name="assignedDepartment"
                  label="Assigned Department"
                  value={formData.sampleRegistration.assignedDepartment || ""}
                  onChange={(e) => handleInputChange(e, "sampleRegistration")}
                />
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CCol md={6}>
                <CFormInput
                  type="date"
                  name="sampleCollectionDate"
                  label="Sample Collection Date"
                  value={formData.sampleRegistration.sampleCollectionDate || ""}
                  onChange={(e) => handleInputChange(e, "sampleRegistration")}
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
                  value={formData.sampleAnalysis.analysisType || ""}
                  onChange={(e) => handleInputChange(e, "sampleAnalysis")}
                />
              </CCol>
              <CCol md={6}>
                <CFormInput
                  type="text"
                  name="analysisResult"
                  label="Analysis Result"
                  value={formData.sampleAnalysis.analysisResult || ""}
                  onChange={(e) => handleInputChange(e, "sampleAnalysis")}
                />
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CCol md={6}>
                <CFormInput
                  type="date"
                  name="analysisDate"
                  label="Analysis Date"
                  value={formData.sampleAnalysis.analysisDate || ""}
                  onChange={(e) => handleInputChange(e, "sampleAnalysis")}
                />
              </CCol>
              <CCol md={6}>
                <CFormInput
                  type="date"
                  name="testingStartDate"
                  label="Testing Start Date"
                  value={formData.sampleAnalysis.testingStartDate || ""}
                  onChange={(e) => handleInputChange(e, "sampleAnalysis")}
                />
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CCol md={6}>
                <CFormInput
                  type="date"
                  name="testingEndDate"
                  label="Testing End Date"
                  value={formData.sampleAnalysis.testingEndDate || ""}
                  onChange={(e) => handleInputChange(e, "sampleAnalysis")}
                />
              </CCol>
              <CCol md={6}>
                <CFormTextarea
                  name="delayJustification"
                  label="Delay Justification"
                  value={formData.sampleAnalysis.delayJustification || ""}
                  onChange={(e) => handleInputChange(e, "sampleAnalysis")}
                />
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CCol md={6}>
                <CFormSelect
                  name="testingOutcome"
                  label="Testing Outcome"
                  value={formData.sampleAnalysis.testingOutcome || ""}
                  onChange={(e) => handleInputChange(e, "sampleAnalysis")}
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
                  value={formData.sampleAnalysis.testPlanId || ""}
                  onChange={(e) => handleInputChange(e, "sampleAnalysis")}
                />
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CCol md={6}>
                <CFormInput
                  type="number"
                  name="turnaroundTime"
                  label="Turnaround Time (TAT)"
                  value={formData.sampleAnalysis.turnaroundTime || ""}
                  onChange={(e) => handleInputChange(e, "sampleAnalysis")}
                />
              </CCol>
              <CCol md={6}>
                <CFormInput
                  type="date"
                  name="sampleRetestingDate"
                  label="Sample Retesting Date"
                  value={formData.sampleAnalysis.sampleRetestingDate || ""}
                  onChange={(e) => handleInputChange(e, "sampleAnalysis")}
                />
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CCol md={6}>
                <CFormInput
                  type="date"
                  name="reviewDate"
                  label="Review Date"
                  value={formData.sampleAnalysis.reviewDate || ""}
                  onChange={(e) => handleInputChange(e, "sampleAnalysis")}
                />
              </CCol>
              <CCol md={6}>
                <CFormInput
                  type="text"
                  name="sampleStorageLocation"
                  label="Sample Storage Location"
                  value={formData.sampleAnalysis.sampleStorageLocation || ""}
                  onChange={(e) => handleInputChange(e, "sampleAnalysis")}
                />
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CCol md={6}>
                <CFormInput
                  type="text"
                  name="transportationMethod"
                  label="Transportation Method"
                  value={formData.sampleAnalysis.transportationMethod || ""}
                  onChange={(e) => handleInputChange(e, "sampleAnalysis")}
                />
              </CCol>
              <CCol md={6}>
                <CFormTextarea
                  name="samplePreparationMethod"
                  label="Sample Preparation Method"
                  value={formData.sampleAnalysis.samplePreparationMethod || ""}
                  onChange={(e) => handleInputChange(e, "sampleAnalysis")}
                />
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CCol md={6}>
                <CFormTextarea
                  name="samplePackagingDetails"
                  label="Sample Packaging Details"
                  value={formData.sampleAnalysis.samplePackagingDetails || ""}
                  onChange={(e) => handleInputChange(e, "sampleAnalysis")}
                />
              </CCol>
              <CCol md={6}>
                <CFormInput
                  type="text"
                  name="sampleLabel"
                  label="Sample Label"
                  value={formData.sampleAnalysis.sampleLabel || ""}
                  onChange={(e) => handleInputChange(e, "sampleAnalysis")}
                />
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CCol md={6}>
                <CFormTextarea
                  name="regulatoryRequirements"
                  label="Regulatory Requirements"
                  value={formData.sampleAnalysis.regulatoryRequirements || ""}
                  onChange={(e) => handleInputChange(e, "sampleAnalysis")}
                />
              </CCol>
              <CCol md={6}>
                <CFormTextarea
                  name="qualityControlChecks"
                  label="Quality Control Checks"
                  value={formData.sampleAnalysis.qualityControlChecks || ""}
                  onChange={(e) => handleInputChange(e, "sampleAnalysis")}
                />
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CCol md={6}>
                <CFormInput
                  type="text"
                  name="controlSample"
                  label="Control Sample"
                  value={formData.sampleAnalysis.controlSample || ""}
                  onChange={(e) => handleInputChange(e, "sampleAnalysis")}
                />
              </CCol>
              <CCol md={6}>
                <CFormInput
                  type="text"
                  name="referenceSample"
                  label="Reference Sample"
                  value={formData.sampleAnalysis.referenceSample || ""}
                  onChange={(e) => handleInputChange(e, "sampleAnalysis")}
                />
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CCol md={6}>
                <CFormSelect
                  name="sampleIntegrityStatus"
                  label="Sample Integrity Status"
                  value={formData.sampleAnalysis.sampleIntegrityStatus || ""}
                  onChange={(e) => handleInputChange(e, "sampleAnalysis")}
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
                  value={formData.sampleAnalysis.assignedDepartment || ""}
                  onChange={(e) => handleInputChange(e, "sampleAnalysis")}
                />
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CCol md={6}>
                <CFormTextarea
                  name="riskAssessment"
                  label="Risk Assessment"
                  value={formData.sampleAnalysis.riskAssessment || ""}
                  onChange={(e) => handleInputChange(e, "sampleAnalysis")}
                />
              </CCol>
              <CCol md={6}>
                <CFormInput
                  type="text"
                  name="supervisor"
                  label="Supervisor"
                  value={formData.sampleAnalysis.supervisor || ""}
                  onChange={(e) => handleInputChange(e, "sampleAnalysis")}
                />
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CCol md={6}>
                <CFormTextarea
                  name="sampleMovementHistory"
                  label="Sample Movement History"
                  value={formData.sampleAnalysis.sampleMovementHistory || ""}
                  onChange={(e) => handleInputChange(e, "sampleAnalysis")}
                />
              </CCol>
              <CCol md={6}>
                <CFormTextarea
                  name="testingProgress"
                  label="Testing Progress"
                  value={formData.sampleAnalysis.testingProgress || ""}
                  onChange={(e) => handleInputChange(e, "sampleAnalysis")}
                />
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CCol md={6}>
                <CFormTextarea
                  name="alertsNotifications"
                  label="Alerts/Notifications"
                  value={formData.sampleAnalysis.alertsNotifications || ""}
                  onChange={(e) => handleInputChange(e, "sampleAnalysis")}
                />
              </CCol>
              <CCol md={6}>
                <CFormTextarea
                  name="deviationLogs"
                  label="Deviation Logs"
                  value={formData.sampleAnalysis.deviationLogs || ""}
                  onChange={(e) => handleInputChange(e, "sampleAnalysis")}
                />
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CCol md={6}>
                <CFormTextarea
                  name="commentsNotes"
                  label="Comments/Notes"
                  value={formData.sampleAnalysis.commentsNotes || ""}
                  onChange={(e) => handleInputChange(e, "sampleAnalysis")}
                />
              </CCol>
              <CCol md={6}>
                <CFormInput
                  type="file"
                  name="attachments"
                  label="Attachments"
                  onChange={(e) => handleInputChange(e, "sampleAnalysis")}
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
                  value={formData.sampleAnalysis.samplingFrequency || ""}
                  onChange={(e) => handleInputChange(e, "sampleAnalysis")}
                />
              </CCol>
              <CCol md={6}>
                <CFormSelect
                  name="sampleDisposition"
                  label="Sample Disposition"
                  value={formData.sampleAnalysis.sampleDisposition || ""}
                  onChange={(e) => handleInputChange(e, "sampleAnalysis")}
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
      case "Supervisor Review":
        return (
          <CForm>
            <CRow className="mb-3">
              <CCol md={6}>
                <CFormInput
                  type="text"
                  name="stabilityStudyType"
                  label="Stability Study Type"
                  value={formData?.stability?.stabilityStudyType || ""}
                  onChange={(e) => handleInputChange(e, "stability")}
                />
              </CCol>
              <CCol md={6}>
                <CFormInput
                  type="text"
                  name="stabilityStudyProtocol"
                  label="Stability Study Protocol"
                  value={formData?.stability?.stabilityStudyProtocol || ""}
                  onChange={(e) => handleInputChange(e, "stability")}
                />
              </CCol>
            </CRow>

            <CRow className="mb-3">
              <CCol md={6}>
                <CFormInput
                  type="date"
                  name="stabilityProtocolApprovalDate"
                  label="Stability Protocol Approval Date"
                  value={
                    formData?.stability?.stabilityProtocolApprovalDate || ""
                  }
                  onChange={(e) => handleInputChange(e, "stability")}
                />
              </CCol>
              <CCol md={6}>
                <CFormInput
                  type="text"
                  name="countryOfRegulatorySubmissions"
                  label="Country of Regulatory Submissions"
                  value={
                    formData?.stability?.countryOfRegulatorySubmissions || ""
                  }
                  onChange={(e) => handleInputChange(e, "stability")}
                />
              </CCol>
            </CRow>

            <CRow className="mb-3">
              <CCol md={6}>
                <CFormInput
                  type="text"
                  name="ichZone"
                  label="ICH Zone"
                  value={formData?.stability?.ichZone || ""}
                  onChange={(e) => handleInputChange(e, "stability")}
                />
              </CCol>
              <CCol md={6}>
                <CFormInput
                  type="text"
                  name="photostabilityTestingResults"
                  label="Photostability Testing Results"
                  value={
                    formData?.stability?.photostabilityTestingResults || ""
                  }
                  onChange={(e) => handleInputChange(e, "stability")}
                />
              </CCol>
            </CRow>

            <CRow className="mb-3">
              <CCol md={6}>
                <CFormInput
                  type="text"
                  name="reconstitutionStability"
                  label="Reconstitution Stability"
                  value={formData?.stability?.reconstitutionStability || ""}
                  onChange={(e) => handleInputChange(e, "stability")}
                />
              </CCol>
              <CCol md={6}>
                <CFormInput
                  type="number"
                  name="testingInterval"
                  label="Testing Interval (months)"
                  value={formData?.stability?.testingInterval || ""}
                  onChange={(e) => handleInputChange(e, "stability")}
                />
              </CCol>
            </CRow>

            <CRow className="mb-3">
              <CCol>
                <CFormInput
                  type="text"
                  name="shelfLifeRecommendation"
                  label="Shelf Life Recommendation"
                  value={formData?.stability?.shelfLifeRecommendation || ""}
                  onChange={(e) => handleInputChange(e, "stability")}
                />
              </CCol>
            </CRow>
          </CForm>
        );
      case "Stability Information":
        return (
          <CForm>
            {/* Reviewer/Approver Section */}
            <CRow className="mb-3">
              <CCol md={4}>
                <CFormInput
                  type="text"
                  name="reviewerApprover"
                  label="Reviewer/Approver"
                  value={formData?.reviewInfo?.reviewerApprover || ""}
                  onChange={(e) => handleInputChange(e, "reviewInfo")}
                />
              </CCol>
              <CCol md={4}>
                <CFormInput
                  type="text"
                  name="reviewerComment"
                  label="Reviewer Comment"
                  value={formData?.reviewInfo?.reviewerComment || ""}
                  onChange={(e) => handleInputChange(e, "reviewInfo")}
                />
              </CCol>
              <CCol md={4}>
                <CFormInput
                  type="date"
                  name="reviewDate"
                  label="Review Date"
                  value={formData?.reviewInfo?.reviewDate || ""}
                  onChange={(e) => handleInputChange(e, "reviewInfo")}
                />
              </CCol>
            </CRow>

            {/* QA Reviewer/Approver Section */}
            <CRow className="mb-3">
              <CCol md={4}>
                <CFormInput
                  type="text"
                  name="qaReviewerApprover"
                  label="QA Reviewer/Approver"
                  value={formData?.qaReviewInfo?.qaReviewerApprover || ""}
                  onChange={(e) => handleInputChange(e, "qaReviewInfo")}
                />
              </CCol>
              <CCol md={4}>
                <CFormInput
                  type="text"
                  name="qaReviewerComment"
                  label="QA Reviewer Comment"
                  value={formData?.qaReviewInfo?.qaReviewerComment || ""}
                  onChange={(e) => handleInputChange(e, "qaReviewInfo")}
                />
              </CCol>
              <CCol md={4}>
                <CFormInput
                  type="date"
                  name="qaReviewDate"
                  label="QA Review Date"
                  value={formData?.qaReviewInfo?.qaReviewDate || ""}
                  onChange={(e) => handleInputChange(e, "qaReviewInfo")}
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
    <div className="p-6">
      <div className="flex space-x-4 mb-6">
        <CButton
          color={activeTab === "Sample Registration" ? "primary" : "secondary"}
          onClick={() => handleTabClick("Sample Registration")}
        >
          Sample Registration
        </CButton>
        <CButton
          color={activeTab === "Sample Analysis" ? "primary" : "secondary"}
          onClick={() => handleTabClick("Sample Analysis")}
        >
          Sample Analysis
        </CButton>
        <CButton
          color={activeTab === "Supervisor Review" ? "primary" : "secondary"}
          onClick={() => handleTabClick("Supervisor Review")}
        >
          Supervisor Review
        </CButton>
        <CButton
          color={
            activeTab === "Stability Information" ? "primary" : "secondary"
          }
          onClick={() => handleTabClick("Stability Information")}
        >
          Stability Information
        </CButton>
      </div>

      <div className="bg-white shadow-lg p-6 rounded-md">
        {renderFields(activeTab)}
      </div>
      <CButton onClick={handleSave} className="bg-blue-600 text-white">
        Save
      </CButton>
      <CButton onClick={onClose} className="ml-2">
        Exit
      </CButton>
    </div>
  );
};

export default SampleWorkflowModal;
