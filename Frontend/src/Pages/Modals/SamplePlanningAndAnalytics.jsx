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
  CFormTextarea,
  CFormSelect,
  CFormCheck,
} from "@coreui/react";
import axios from "axios";
import BASE_URL from "../../config.json";
import { toast } from "react-toastify";

const SamplePlanningAndAnalytics = ({ open, handleClose, addRow }) => {
  const [formData, setFormData] = useState({
    samplePlanId: "",
    sampleId: "",
    sampleName: "",
    sampleType: "",
    batchLotNumber: "",
    sampleSource: "",
    plannedDate: "",
    samplePriority: "",
    sampleQuantity: "",
    tests: "",
    specificationId: "",
    specificationAttachment: "",
    stpId: "",
    stpAttachment: "",
    testPlanId: "",
    testName: "",
    testMethod: "",
    testParameters: "",
    testingFrequency: "",
    testingLocation: "",
    requiredInstruments: "",
    testGrouping: "",
    expectedResults: "",
    testingDeadline: "",
    plannerName: "",
    labTechnician: "",
    reviewer: "",
    assignedDepartment: "",
    supervisor: "",
    sampleCollectionDate: "",
    testingStartDate: "",
    testingEndDate: "",
    turnaroundTime: "",
    sampleRetestingDate: "",
    reviewDate: "",
    sampleStorageLocation: "",
    transportationMethod: "",
    samplePreparationMethod: "",
    samplePackagingDetails: "",
    sampleLabel: "",
    regulatoryRequirements: "",
    qualityControlChecks: "",
    controlSampleReference: "",
    sampleIntegrityStatus: "",
    riskAssessment: "",
    instrumentsReserved: "",
    labAvailability: "",
    sampleCostEstimation: "",
    resourceUtilization: "",
    sampleMovementHistory: "",
    testingProgress: "",
    alertsNotifications: "",
    deviationLogs: "",
    comments: "",
    attachments: "",
    samplingFrequency: "",
    sampleDisposition: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`http://localhost:9000/manage-lims/add/sLSamplePA`, formData)
      .then((response) => {
        addRow(formData);
        handleClose();
        toast.success("Data added successfully");
      })
      .catch((error) => {
        console.error("There was an error submitting the data:", error);
      });

    setFormData({
      samplePlanId: "",
      sampleId: "",
      sampleName: "",
      sampleType: "",
      batchLotNumber: "",
      sampleSource: "",
      plannedDate: "",
      samplePriority: "",
      sampleQuantity: "",
      tests: "",
      specificationId: "",
      specificationAttachment: "",
      stpId: "",
      stpAttachment: "",
      testPlanId: "",
      testName: "",
      testMethod: "",
      testParameters: "",
      testingFrequency: "",
      testingLocation: "",
      requiredInstruments: "",
      testGrouping: "",
      expectedResults: "",
      testingDeadline: "",
      plannerName: "",
      labTechnician: "",
      reviewer: "",
      assignedDepartment: "",
      supervisor: "",
      sampleCollectionDate: "",
      testingStartDate: "",
      testingEndDate: "",
      turnaroundTime: "",
      sampleRetestingDate: "",
      reviewDate: "",
      sampleStorageLocation: "",
      transportationMethod: "",
      samplePreparationMethod: "",
      samplePackagingDetails: "",
      sampleLabel: "",
      regulatoryRequirements: "",
      qualityControlChecks: "",
      controlSampleReference: "",
      sampleIntegrityStatus: "",
      riskAssessment: "",
      instrumentsReserved: "",
      labAvailability: "",
      sampleCostEstimation: "",
      resourceUtilization: "",
      sampleMovementHistory: "",
      testingProgress: "",
      alertsNotifications: "",
      deviationLogs: "",
      comments: "",
      attachments: "",
      samplingFrequency: "",
      sampleDisposition: "",
    });
  };

  return (
    <CModal alignment="center" visible={open} onClose={handleClose} size="lg">
      <CModalHeader>
        <CModalTitle>Add Sample Planning and Analytics</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CForm onSubmit={handleSubmit}>
          <CFormInput
            name="samplePlanId"
            label="Sample Plan ID"
            value={formData.samplePlanId}
            onChange={handleChange}
            placeholder="Enter Sample Plan ID"
          />
          <CFormInput
            name="sampleId"
            label="Sample ID"
            value={formData.sampleId}
            onChange={handleChange}
            placeholder="Enter Sample ID"
          />
          <CFormInput
            name="sampleName"
            label="Sample Name"
            value={formData.sampleName}
            onChange={handleChange}
            placeholder="Enter Sample Name"
          />
          <CFormInput
            name="sampleType"
            label="Sample Type"
            value={formData.sampleType}
            onChange={handleChange}
          />
          <CFormInput
            type="number"
            name="batchLotNumber"
            label="Batch/Lot Number"
            value={formData.batchLotNumber}
            onChange={handleChange}
            placeholder="Enter Batch/Lot Number"
          />
          <CFormInput
            name="sampleSource"
            label="Sample Source"
            value={formData.sampleSource}
            onChange={handleChange}
            placeholder="Enter Sample Source"
          />
          <CFormInput
            name="plannedDate"
            label="Planned Date"
            type="date"
            value={formData.plannedDate}
            onChange={handleChange}
          />
          <CFormInput
            name="samplePriority"
            label="Sample Priority"
            value={formData.samplePriority}
            onChange={handleChange}
          />
          <CFormInput
            type="number"
            name="sampleQuantity"
            label="Sample Quantity"
            value={formData.sampleQuantity}
            onChange={handleChange}
            placeholder="Enter Sample Quantity"
          />
          <CFormInput
            name="tests"
            label="Tests"
            value={formData.tests}
            onChange={handleChange}
          />
          <CFormInput
            name="specificationId"
            label="Specification Id"
            value={formData.specificationId}
            onChange={handleChange}
            placeholder="Enter Storage Condition"
          />
          <CFormInput
            type="file"
            name="specificationAttachment"
            label="Specification Attachment"
            value={formData.specificationAttachment}
            onChange={handleChange}
          />
          <CFormInput
            name="stpId"
            label="STP Id"
            value={formData.stpId}
            onChange={handleChange}
            placeholder="Enter Sample Temperature"
          />
          <CFormInput
            type="file"
            name="stpAttachment"
            label="STP Attachment"
            value={formData.stpAttachment}
            onChange={handleChange}
          />
          <CFormInput
            name="testPlanId"
            label="Test Plan Id"
            value={formData.testPlanId}
            onChange={handleChange}
          />
          <CFormInput
            name="testName"
            label="Test Name"
            value={formData.testName}
            onChange={handleChange}
          />
          <CFormInput
            name="testMethod"
            label="Test Method"
            value={formData.testMethod}
            onChange={handleChange}
          />
          <CFormInput
            name="testParameters"
            label="Test Parameters"
            value={formData.testParameters}
            onChange={handleChange}
          />
          <CFormInput
            name="testingFrequency"
            label="Testing Frequency"
            value={formData.testingFrequency}
            onChange={handleChange}
          />
          <CFormInput
            name="testingLocation"
            label="Testing Location"
            type="date"
            value={formData.testingLocation}
            onChange={handleChange}
          />
          <CFormInput
            name="requiredInstruments"
            label="Require Instruments"
            type="date"
            value={formData.requiredInstruments}
            onChange={handleChange}
          />
          <CFormInput
            name="labTechnicianName"
            label="Lab Technician Name"
            value={formData.labTechnicianName}
            onChange={handleChange}
          />
          <CFormInput
            name="testGrouping"
            label="Test Grouping"
            value={formData.testGrouping}
            onChange={handleChange}
          />
          <CFormInput
            name="expectedResults"
            label="Expected Results"
            value={formData.expectedResults}
            onChange={handleChange}
          />
          <CFormInput
            name="testingDeadline"
            label="Testing Deadline"
            value={formData.testingDeadline}
            onChange={handleChange}
          />
          <CFormInput
            name="plannerName"
            label="Planner Name"
            value={formData.plannerName}
            onChange={handleChange}
          />
          <CFormInput
            name="labTechnician"
            label="Lab Technician"
            value={formData.labTechnician}
            onChange={handleChange}
          />
          <CFormInput
            name="reviewer"
            label="Reviewer"
            value={formData.reviewer}
            onChange={handleChange}
          />
          <CFormInput
            name="assignedDepartment"
            label="Assigned Department"
            value={formData.assignedDepartment}
            onChange={handleChange}
          />
          <CFormInput
            name="supervisor"
            label="Supervisor"
            value={formData.supervisor}
            onChange={handleChange}
          />

          <CFormInput
            name="sampleCollectionDate"
            label="Sample Collection Date"
            value={formData.sampleCollectionDate}
            type="date"
            onChange={handleChange}
          />
          <CFormInput
            type="date"
            name="testingStartDate"
            label="Testing Start Date"
            value={formData.testingStartDate}
            onChange={handleChange}
          />
          <CFormInput
            name="testingEndDate"
            type="date"
            label="Testing End Date"
            value={formData.testingEndDate}
            onChange={handleChange}
          />
          <CFormInput
            name="turnaroundTime"
            label="Turn Around Time"
            value={formData.turnaroundTime}
            onChange={handleChange}
          />
          <CFormInput
            name="sampleRetestingDate"
            label="Sample Retesting Date"
            type="date"
            value={formData.sampleRetestingDate}
            onChange={handleChange}
          />
          <CFormInput
            name="reviewDate"
            label="Review Date"
            type="date"
            value={formData.reviewDate}
            onChange={handleChange}
          />
          <CFormInput
            name="sampleStorageLocation"
            label="Sample Storage Location"
            value={formData.sampleStorageLocation}
            onChange={handleChange}
          />
          <CFormInput
            name="transportationMethod"
            label="Transportation Method"
            value={formData.transportationMethod}
            onChange={handleChange}
          />
          <CFormInput
            name="samplePreparationMethod"
            label="Sample Preparation Method"
            value={formData.samplePreparationMethod}
            onChange={handleChange}
          />
          <CFormInput
            name="samplePackagingDetails"
            label="Sample Packaging Details"
            value={formData.samplePackagingDetails}
            onChange={handleChange}
          />

          <CFormInput
            name="sampleLabel"
            label="Sample Label"
            value={formData.sampleLabel}
            onChange={handleChange}
          />

          <CFormInput
            name="regulatoryRequirements"
            label="Regulatory Requirements"
            value={formData.regulatoryRequirements}
            onChange={handleChange}
          />
          <CFormInput
            name="qualityControlChecks"
            label="Quality Control Checks"
            value={formData.qualityControlChecks}
            onChange={handleChange}
          />
          <CFormInput
            name="controlSampleReference"
            label="Control Sample Reference"
            value={formData.controlSampleReference}
            onChange={handleChange}
          />
          <CFormInput
            name="sampleIntegrityStatus"
            label="Sample Integrity Status"
            value={formData.sampleIntegrityStatus}
            onChange={handleChange}
          />
          <CFormInput
            name="riskAssessment"
            label="Risk Assessment"
            value={formData.riskAssessment}
            onChange={handleChange}
          />

          <CFormInput
            name="instrumentsReserved"
            label="Instruments Reserved"
            value={formData.instrumentsReserved}
            onChange={handleChange}
          />
          <CFormInput
            name="labAvailability"
            label="Lab Availability"
            value={formData.labAvailability}
            onChange={handleChange}
          />
          <CFormInput
            name="sampleCostEstimation"
            label="Sample Cost Estimation"
            value={formData.sampleCostEstimation}
            onChange={handleChange}
          />

          <CFormInput
            name="resourceUtilization"
            label="Resource Utilization"
            value={formData.resourceUtilization}
            onChange={handleChange}
          />
          <CFormInput
            name="sampleMovementHistory"
            label="Sample Movement History"
            value={formData.sampleMovementHistory}
            onChange={handleChange}
          />
          <CFormInput
            name="testingProgress"
            label="Testing Progress"
            value={formData.testingProgress}
            onChange={handleChange}
          />
          <CFormInput
            name="alertsNotifications"
            label="Alerts Notifications"
            value={formData.alertsNotifications}
            onChange={handleChange}
          />
          <CFormInput
            name="deviationLogs"
            label="Deviation Logs"
            value={formData.deviationLogs}
            onChange={handleChange}
          />

          <CFormTextarea
            name="comments"
            label="Comments"
            value={formData.comments}
            onChange={handleChange}
          />

          <CFormInput
            name="attachments"
            label="Attachments"
            type="file"
            value={formData.attachments}
            onChange={handleChange}
          />
          <CFormInput
            name="samplingFrequency"
            label="Sampling Frequency"
            value={formData.samplingFrequency}
            onChange={handleChange}
          />
          <CFormInput
            name="sampleDisposition"
            label="Sample Disposition"
            value={formData.sampleDisposition}
            onChange={handleChange}
          />

          <CButton type="submit" color="primary" style={{ marginTop: "1rem" }}>
            Add Sample
          </CButton>
        </CForm>
      </CModalBody>
      <CModalFooter>
        <CButton color="secondary" onClick={handleClose}>
          Cancel
        </CButton>
      </CModalFooter>
    </CModal>
  );
};

export default SamplePlanningAndAnalytics;
