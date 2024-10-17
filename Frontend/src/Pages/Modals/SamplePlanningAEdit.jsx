



import React, { useState, useEffect } from "react";
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
} from "@coreui/react";
import axios from 'axios';
import BASE_URL from "../../config.json";
import { toast } from "react-toastify";

const SamplePlanningAEdit = ({ open, handleClose, data, fetchData }) => {
  const [formData, setFormData] = useState(data);
  // console.log(formData);
  

  useEffect(() => {
      setFormData(data );
  }, [data]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    axios
      .put(`http://localhost:9000/manage-lims/update/sLSamplePA/${formData.uniqueId}`, formData)
      .then((response) => {
        // console.log("Data updated successfully:", response.data);
        // updateRow(formData); 
        handleClose(); // Close the modal
        toast.success("Data updated successfully");
        fetchData();
      })
      .catch((error) => {
        console.error("There was an error updating the data:", error);
      });
  };

  return (
    <CModal alignment="center" visible={open} onClose={handleClose} size="lg">
      <CModalHeader>
        <CModalTitle>Edit Sample Planning and Analytics</CModalTitle>
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
            placeholder="Enter Sample Type"
          />
          <CFormInput
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
            placeholder="Enter Sample Priority"
          />
          <CFormInput
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
            placeholder="Enter Sampling Method"
          />
          <CFormInput
            name="specificationId"
            label="Specification Id"
            value={formData.specificationId}
            onChange={handleChange}
            placeholder="Enter Storage Condition"
          />
          <CFormTextarea
            name="specificationAttachment"
            label="Specification Attachment"
            value={formData.specificationAttachment}
            onChange={handleChange}
            placeholder="Enter specificationAttachment"
          />
          <CFormInput
            name="stpId"
            label="STP Id"
            value={formData.stpId}
            onChange={handleChange}
            placeholder="Enter Sample Temperature"
          />
          <CFormInput
            name="stpAttachment"
            label="STP Attachment"
            value={formData.stpAttachment}
            onChange={handleChange}
            placeholder="Enter Sample Packaging"
          />
          <CFormInput
            name="testPlanId"
            label="Test Plan Id"
            value={formData.testPlanId}
            onChange={handleChange}
            placeholder="Enter Hazard Classification"
          />
          <CFormInput
            name="testName"
            label="Test Name"
            value={formData.testName}
            onChange={handleChange}
            placeholder="Enter Sample Collector"
          />
          <CFormInput
            name="testMethod"
            label="Test Method"
            value={formData.testMethod}
            onChange={handleChange}
            placeholder="Enter Collection Method"
          />
          <CFormInput
            name="testParameters"
            label="Test Parameters"
            value={formData.testParameters}
            onChange={handleChange}
            placeholder="Enter Sample Test Method"
          />
          <CFormInput
            name="testingFrequency"
            label="Testing Frequency"
            value={formData.testingFrequency}
            onChange={handleChange}
            placeholder="Enter Sample Test Location"
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
            placeholder="Enter Lab Technician Name"
          />
          <CFormInput
            name="testGrouping"
            label="Test Grouping"
            value={formData.testGrouping}
            onChange={handleChange}
            placeholder="Enter Lab Technician Signature"
          />
          <CFormInput
            name="expectedResults"
            label="Expected Results"
            value={formData.expectedResults}
            onChange={handleChange}
            placeholder="Enter Test Result"
          />
          <CFormInput
            name="testingDeadline"
            label="Testing Deadline"
            value={formData.testingDeadline}
            onChange={handleChange}
            placeholder="Enter Approval Status"
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
            placeholder="Enter Testing Device"
          />
          <CFormInput
            name="reviewer"
            label="Reviewer"
            value={formData.reviewer}
            onChange={handleChange}
            placeholder="Enter Testing Lab"
          />
          <CFormInput
            name="assignedDepartment"
            label="Assigned Department"
            value={formData.assignedDepartment}
            onChange={handleChange}
            placeholder="Enter Test Certification"
          />
          <CFormInput
            name="supervisor"
            label="Supervisor"
            value={formData.supervisor}
            onChange={handleChange}
            placeholder="Enter Sample Retention Time"
          />

          <CFormInput
            name="sampleCollectionDate"
            label="Sample Collection Date"
            value={formData.sampleCollectionDate}
            type="date"
            onChange={handleChange}
            placeholder="Enter Sample Retention Time"
          />
          <CFormInput
            name="testingStartDate"
            label="Testing Start Date"
            value={formData.testingStartDate}
            onChange={handleChange}
            placeholder="Enter Sample Retention Time"
          />
          <CFormInput
            name="testingEndDate"
            label="Testing End Date"
            value={formData.testingEndDate}
            onChange={handleChange}
            placeholder="Enter Sample Retention Time"
          />
          <CFormInput
            name="turnaroundTime"
            label="Turn Around Time"
            value={formData.turnaroundTime}
            onChange={handleChange}
            placeholder="Enter Sample Retention Time"
          />
          <CFormInput
            name="sampleRetestingDate"
            label="Sample Retesting Date"
            type="date"
            value={formData.sampleRetestingDate}
            onChange={handleChange}
            placeholder="Enter Sample Retention Time"
          />
          <CFormInput
            name="reviewDate"
            label="Review Date"
            type="date"
            value={formData.reviewDate}
            onChange={handleChange}
            placeholder="Enter Sample Retention Time"
          />
          <CFormInput
            name="sampleStorageLocation"
            label="Sample Storage Location"
            value={formData.sampleStorageLocation}
            onChange={handleChange}
            placeholder="Enter Sample Retention Time"
          />
          <CFormInput
            name="transportationMethod"
            label="Transportation Method"
            value={formData.transportationMethod}
            onChange={handleChange}
            placeholder="Enter Sample Retention Time"
          />
          <CFormInput
            name="samplePreparationMethod"
            label="Sample Preparation Method"
            value={formData.samplePreparationMethod}
            onChange={handleChange}
            placeholder="Enter Sample Retention Time"
          />
          <CFormInput
            name="samplePackagingDetails"
            label="Sample Packaging Details"
            value={formData.samplePackagingDetails}
            onChange={handleChange}
            placeholder="Enter Sample Retention Time"
          />

          <CFormInput
            name="sampleLabel"
            label="Sample Label"
            value={formData.sampleLabel}
            onChange={handleChange}
            placeholder="Enter Sample Retention Time"
          />

          <CFormInput
            name="regulatoryRequirements"
            label="Regulatory Requirements"
            value={formData.regulatoryRequirements}
            onChange={handleChange}
            placeholder="Enter Sample Retention Time"
          />
          <CFormInput
            name="qualityControlChecks"
            label="Quality Control Checks"
            value={formData.qualityControlChecks}
            onChange={handleChange}
            placeholder="Enter Sample Retention Time"
          />
          <CFormInput
            name="controlSampleReference"
            label="Control Sample Reference"
            value={formData.controlSampleReference}
            onChange={handleChange}
            placeholder="Enter Sample Retention Time"
          />
          <CFormInput
            name="sampleIntegrityStatus"
            label="Sample Integrity Status"
            value={formData.sampleIntegrityStatus}
            onChange={handleChange}
            placeholder="Enter Sample Retention Time"
          />
          <CFormInput
            name="riskAssessment"
            label="Risk Assessment"
            value={formData.riskAssessment}
            onChange={handleChange}
            placeholder="Enter Sample Retention Time"
          />

          <CFormInput
            name="instrumentsReserved"
            label="Instruments Reserved"
            value={formData.instrumentsReserved}
            onChange={handleChange}
            placeholder="Enter Sample Retention Time"
          />
          <CFormInput
            name="labAvailability"
            label="Lab Availability"
            value={formData.labAvailability}
            onChange={handleChange}
            placeholder="Enter Sample Retention Time"
          />
          <CFormInput
            name="sampleCostEstimation"
            label="Sample Cost Estimation"
            value={formData.sampleCostEstimation}
            onChange={handleChange}
            placeholder="Enter Sample Retention Time"
          />

          <CFormInput
            name="resourceUtilization"
            label="Resource Utilization"
            value={formData.resourceUtilization}
            onChange={handleChange}
            placeholder="Enter Sample Retention Time"
          />
          <CFormInput
            name="sampleMovementHistory"
            label="Sample Movement History"
            value={formData.sampleMovementHistory}
            onChange={handleChange}
            placeholder="Enter Sample Retention Time"
          />
          <CFormInput
            name="testingProgress"
            label="Testing Progress"
            value={formData.testingProgress}
            onChange={handleChange}
            placeholder="Enter Sample Retention Time"
          />
          <CFormInput
            name="alertsNotifications"
            label="Alerts Notifications"
            value={formData.alertsNotifications}
            onChange={handleChange}
            placeholder="Enter Sample Retention Time"
          />
          <CFormInput
            name="deviationLogs"
            label="Deviation Logs"
            value={formData.deviationLogs}
            onChange={handleChange}
            placeholder="Enter Sample Retention Time"
          />

          <CFormInput
            name="comments"
            label="Comments"
            value={formData.comments}
            onChange={handleChange}
            placeholder="Enter Sample Retention Time"
          />

          <CFormInput
            name="attachments"
            label="Attachments"
            value={formData.attachments}
            onChange={handleChange}
            placeholder="Enter Sample Retention Time"
          />
          <CFormInput
            name="samplingFrequency"
            label="Sampling Frequency"
            value={formData.samplingFrequency}
            onChange={handleChange}
            placeholder="Enter Sample Retention Time"
          />
          <CFormInput
            name="sampleDisposition"
            label="Sample Disposition"
            value={formData.sampleDisposition}
            onChange={handleChange}
            placeholder="Enter Sample Retention Time"
          />

          <CButton type="submit" color="primary" style={{ marginTop: "1rem" }}>
          Update
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

export default SamplePlanningAEdit;
