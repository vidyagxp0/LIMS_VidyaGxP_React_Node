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
              <CCol>
                <CFormInput
                  type="text"
                  name="sampleName"
                  label="Sample Name"
                  value={formData.sampleRegistration.sampleName || ""}
                  onChange={(e) => handleInputChange(e, "sampleRegistration")}
                />
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CCol>
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
              <CCol>
                <CFormInput
                  type="date"
                  name="collectionDate"
                  label="Collection Date"
                  value={formData.sampleRegistration.collectionDate || ""}
                  onChange={(e) => handleInputChange(e, "sampleRegistration")}
                />
              </CCol>
            </CRow>
            <CButton
              color="primary"
              onClick={() => handleSave("sampleRegistration")}
            >
              Save
            </CButton>
          </CForm>
        );
      case "Sample Analysis":
        return (
          <CForm>
            <CRow className="mb-3">
              <CCol>
                <CFormInput
                  type="text"
                  name="analysisType"
                  label="Analysis Type"
                  value={formData.sampleAnalysis.analysisType || ""}
                  onChange={(e) => handleInputChange(e, "sampleAnalysis")}
                />
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CCol>
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
              <CCol>
                <CFormInput
                  type="date"
                  name="analysisDate"
                  label="Analysis Date"
                  value={formData.sampleAnalysis.analysisDate || ""}
                  onChange={(e) => handleInputChange(e, "sampleAnalysis")}
                />
              </CCol>
            </CRow>
            <CButton
              color="primary"
              onClick={() => handleSave("sampleAnalysis")}
            >
              Save
            </CButton>
          </CForm>
        );
      case "Supervisor Review":
        return (
          <CForm>
            <CRow className="mb-3">
              <CCol>
                <CFormInput
                  type="text"
                  name="supervisorName"
                  label="Supervisor Name"
                  value={formData.supervisorReview.supervisorName || ""}
                  onChange={(e) => handleInputChange(e, "supervisorReview")}
                />
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CCol>
                <CFormTextarea
                  name="reviewComments"
                  label="Review Comments"
                  value={formData.supervisorReview.reviewComments || ""}
                  onChange={(e) => handleInputChange(e, "supervisorReview")}
                />
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CCol>
                <CFormInput
                  type="date"
                  name="reviewDate"
                  label="Review Date"
                  value={formData.supervisorReview.reviewDate || ""}
                  onChange={(e) => handleInputChange(e, "supervisorReview")}
                />
              </CCol>
            </CRow>
            <CButton
              color="primary"
              onClick={() => handleSave("supervisorReview")}
            >
              Save
            </CButton>
          </CForm>
        );
      case "Stability Information":
        return (
          <CForm>
            <CRow className="mb-3">
              <CCol>
                <CFormInput
                  type="text"
                  name="stabilityStudy"
                  label="Stability Study"
                  value={formData.stabilityInformation.stabilityStudy || ""}
                  onChange={(e) => handleInputChange(e, "stabilityInformation")}
                />
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CCol>
                <CFormInput
                  type="text"
                  name="studyDuration"
                  label="Study Duration"
                  value={formData.stabilityInformation.studyDuration || ""}
                  onChange={(e) => handleInputChange(e, "stabilityInformation")}
                />
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CCol>
                <CFormInput
                  type="date"
                  name="studyCompletionDate"
                  label="Study Completion Date"
                  value={
                    formData.stabilityInformation.studyCompletionDate || ""
                  }
                  onChange={(e) => handleInputChange(e, "stabilityInformation")}
                />
              </CCol>
            </CRow>
            <div>
              <CButton
                color="primary"
                onClick={() => handleSave("stabilityInformation")}
              >
                Save
              </CButton>
              <CButton color="danger" onClick={onClose}>
                Close
              </CButton>
            </div>
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
    </div>
  );
};

export default SampleWorkflowModal;
