import React, { useEffect, useState } from "react";
import {
  CButton,
  CFormInput,
  CFormSelect,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";

const AnalystPersonalModal = ({ visible, closeModal, handleSubmit }) => {
  const [fields, setFields] = useState([]);

  const [usageData, setUsagedata] = useState({
    AnalystID: "",
    FullName: "",
    DateOfBirth: "",
    EmailAddress: "",
    PhoneNumber: "",
    Department: "",
    JobTitle: "",
    SupervisorManagerName: "",
    QualificationID: "",
    DateOfQualification: "",
    QualifiedBy: "",
    QualificationType: "",
    ExpirationDate: "",
    QualificationStatus: "",
    TrainingProgramName: "",
    TrainingStartDate: "",
    TrainingCompletionDate: "",
    TrainingCompletionStatus: "",
    CertificationNameNumber: "",
    CertificationBody: "",
    CertificationDate: "",
    NextRecertificationDate: "",
    CompetencyTestName: "",
    TestDate: "",
    TestResults: "",
    TestScore: "",
    EvaluatorName: "",
    EvaluatorComments: "",
    TechniqueSkillName: "",
    QualificationDate: "",
    SkillLevel: "",
    RequalificationRequired: "",
    RequalificationDueDate: "",
    InstrumentNameID: "",
    MethodNameID: "",
    QualificationLevel: "",
    CalibrationDueDate: "",
    MethodValidationDate: "",
    SOPNameID: "",
    SOPVersion: "",
    DateAcknowledgedReviewed: "",
    RevisionDueDate: "",
    YearsOfExperience: "",
    PreviousJobRoles: "",
    PreviousLabsWorkedIn: "",
    Specializations: "",
    ApprovalDate: "",
    ApproversName: "",
    ApproversSignature: "",
    CommentsNotes: "",
    ModificationDate: "",
    ModifiedBy: "",
    ChangeDescription: ""
  });

  const resetForm = () => {
    setUsagedata({
            AnalystID: "",
            FullName: "",
            DateOfBirth: "",
            EmailAddress: "",
            PhoneNumber: "",
            Department: "",
            JobTitle: "",
            SupervisorManagerName: "",
            QualificationID: "",
            DateOfQualification: "",
            QualifiedBy: "",
            QualificationType: "",
            ExpirationDate: "",
            QualificationStatus: "",
            TrainingProgramName: "",
            TrainingStartDate: "",
            TrainingCompletionDate: "",
            TrainingCompletionStatus: "",
            CertificationNameNumber: "",
            CertificationBody: "",
            CertificationDate: "",
            NextRecertificationDate: "",
            CompetencyTestName: "",
            TestDate: "",
            TestResults: "",
            TestScore: "",
            EvaluatorName: "",
            EvaluatorComments: "",
            TechniqueSkillName: "",
            QualificationDate: "",
            SkillLevel: "",
            RequalificationRequired: "",
            RequalificationDueDate: "",
            InstrumentNameID: "",
            MethodNameID: "",
            QualificationLevel: "",
            CalibrationDueDate: "",
            MethodValidationDate: "",
            SOPNameID: "",
            SOPVersion: "",
            DateAcknowledgedReviewed: "",
            RevisionDueDate: "",
            YearsOfExperience: "",
            PreviousJobRoles: "",
            PreviousLabsWorkedIn: "",
            Specializations: "",
            ApprovalDate: "",
            ApproversName: "",
            ApproversSignature: "",
            CommentsNotes: "",
            ModificationDate: "",
            ModifiedBy: "",
            ChangeDescription: ""
        
    });
  };

  useEffect(() => {
    if (visible) {
      resetForm();
    }
  }, [visible]);

  const handleInputChange = (field, value) => {
    const updatedData = { ...usageData, [field]: value };
    setUsagedata(updatedData);
    console.log(updatedData);
  };

   // !+++++++++++++++++++++++
   const handleFormSubmit = () => {
    const analystDetails = { ...usageData, fields };
    
    const existingAnalyst = JSON.parse(localStorage.getItem("AnalystPersonal")) || [];
    const updatedAnalyst = [...existingAnalyst, analystDetails];
    localStorage.setItem("AnalystPersonal", JSON.stringify(updatedAnalyst));
  
    handleSubmit(analystDetails);
    
    closeModal();
  };
  // !+++++++++++++++++++++++


  return (
    <div>
      <CModal
        alignment="center"
        visible={visible}
        onClose={closeModal}
        size="lg"
      >
        <CModalHeader>
          <CModalTitle>Add Analyst Personal Information</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p>Add information</p>

          <CFormSelect
            className="mb-3"
            type="select"
            label="Analyst (Analyst ID)"
            placeholder="Select... "
            options={[
              "Select...",
              { label: "en33/23" },
              { label: "eqi/eng/163" },
              { label: "ARZ001" },
              { label: "Arz003" },
              { label: "qc/bal/011" },
              { label: "hplc" },
            ]}
            value={usageData.AnalystID}
            onChange={(e) => {
              handleInputChange("AnalystID", e.target.value);
            }}
          />

          <CFormInput
            className="mb-3"
            type="text"
            label="Full Name"
            placeholder=""
            value={usageData.FullName}
            onChange={(e) => {
              handleInputChange("FullName", e.target.value);
            }}
          />

          <CFormInput
            className="mb-3"
            type="Date"
            label="Date of Birth"
            placeholder=""
            value={usageData.DateOfBirth}
            onChange={(e) => {
              handleInputChange("DateOfBirth", e.target.value);
            }}
          />
          <CFormInput
            className="mb-3"
            type="email"
            label="Email Address"
            placeholder=""
            value={usageData.EmailAddress}
            onChange={(e) => {
              handleInputChange("EmailAddress", e.target.value);
            }}
          />

          <CFormInput
            className="mb-3"
            type="number"
            label="Phone Number"
            placeholder=""
            value={usageData.PhoneNumber}
            onChange={(e) => {
              handleInputChange("PhoneNumber", e.target.value);
            }}
          />

          <CFormInput
            className="mb-3"
            type="text"
            label="Department"
            placeholder=""
            value={usageData.Department}
            onChange={(e) => {
              handleInputChange("Department", e.target.value);
            }}
          />

          <CFormInput
            className="mb-3"
            type="text"
            label="Job Title"
            placeholder=""
            value={usageData.JobTitle}
            onChange={(e) => {
              handleInputChange("JobTitle", e.target.value);
            }}
          />

          <CFormInput
            className="mb-3"
            type="text"
            label="Supervisor/Manager Name"
            placeholder=""
            value={usageData.SupervisorManagerName}
            onChange={(e) => {
              handleInputChange("SupervisorManagerName", e.target.value);
            }}
          />
          <CFormInput
            className="mb-3"
            type="number"
            label="Qualification ID"
            placeholder=""
            value={usageData.QualificationID}
            onChange={(e) => {
              handleInputChange("QualificationID", e.target.value);
            }}
          />
          <CFormInput
            className="mb-3"
            type="Date"
            label="Date of Qualification"
            placeholder=""
            value={usageData.DateOfQualification}
            onChange={(e) => {
              handleInputChange("DateOfQualification", e.target.value);
            }}
          />
           <CFormInput
            className="mb-3"
            type="text"
            label="Qualified By"
            placeholder=""
            value={usageData.QualifiedBy}
            onChange={(e) => {
              handleInputChange("QualifiedBy", e.target.value);
            }}
          />
           <CFormInput
            className="mb-3"
            type="text"
            label="Qualification Type"
            placeholder=""
            value={usageData.QualificationType}
            onChange={(e) => {
              handleInputChange("QualificationType", e.target.value);
            }}
          />
           <CFormInput
            className="mb-3"
            type="Date"
            label="Expiration Date"
            placeholder=""
            value={usageData.ExpirationDate}
            onChange={(e) => {
              handleInputChange("ExpirationDate", e.target.value);
            }}
          />

<CFormInput
  className="mb-3"
  type="text"
  label="Qualification Status"
  placeholder=""
  value={usageData.QualificationStatus}
  onChange={(e) => {
    handleInputChange("QualificationStatus", e.target.value);
  }}
/>

<CFormInput
  className="mb-3"
  type="text"
  label="Training Program Name"
  placeholder=""
  value={usageData.TrainingProgramName}
  onChange={(e) => {
    handleInputChange("TrainingProgramName", e.target.value);
  }}
/>

<CFormInput
  className="mb-3"
  type="date"
  label="Training Start Date"
  placeholder=""
  value={usageData.TrainingStartDate}
  onChange={(e) => {
    handleInputChange("TrainingStartDate", e.target.value);
  }}
/>

<CFormInput
  className="mb-3"
  type="date"
  label="Training Completion Date"
  placeholder=""
  value={usageData.TrainingCompletionDate}
  onChange={(e) => {
    handleInputChange("TrainingCompletionDate", e.target.value);
  }}
/>

<CFormInput
  className="mb-3"
  type="text"
  label="Training Completion Status"
  placeholder=""
  value={usageData.TrainingCompletionStatus}
  onChange={(e) => {
    handleInputChange("TrainingCompletionStatus", e.target.value);
  }}
/>

<CFormInput
  className="mb-3"
  type="text"
  label="Certification Name/Number"
  placeholder=""
  value={usageData.CertificationNameNumber}
  onChange={(e) => {
    handleInputChange("CertificationNameNumber", e.target.value);
  }}
/>

<CFormInput
  className="mb-3"
  type="text"
  label="Certification Body"
  placeholder=""
  value={usageData.CertificationBody}
  onChange={(e) => {
    handleInputChange("CertificationBody", e.target.value);
  }}
/>

<CFormInput
  className="mb-3"
  type="date"
  label="Certification Date"
  placeholder=""
  value={usageData.CertificationDate}
  onChange={(e) => {
    handleInputChange("CertificationDate", e.target.value);
  }}
/>

<CFormInput
  className="mb-3"
  type="date"
  label="Next Recertification Date"
  placeholder=""
  value={usageData.NextRecertificationDate}
  onChange={(e) => {
    handleInputChange("NextRecertificationDate", e.target.value);
  }}
/>

<CFormInput
  className="mb-3"
  type="text"
  label="Competency Test Name"
  placeholder=""
  value={usageData.CompetencyTestName}
  onChange={(e) => {
    handleInputChange("CompetencyTestName", e.target.value);
  }}
/>

<CFormInput
  className="mb-3"
  type="date"
  label="Test Date"
  placeholder=""
  value={usageData.TestDate}
  onChange={(e) => {
    handleInputChange("TestDate", e.target.value);
  }}
/>

<CFormInput
  className="mb-3"
  type="text"
  label="Test Results"
  placeholder=""
  value={usageData.TestResults}
  onChange={(e) => {
    handleInputChange("TestResults", e.target.value);
  }}
/>

<CFormInput
  className="mb-3"
  type="number"
  label="Test Score"
  placeholder=""
  value={usageData.TestScore}
  onChange={(e) => {
    handleInputChange("TestScore", e.target.value);
  }}
/>

<CFormInput
  className="mb-3"
  type="text"
  label="Evaluator Name"
  placeholder=""
  value={usageData.EvaluatorName}
  onChange={(e) => {
    handleInputChange("EvaluatorName", e.target.value);
  }}
/>

<CFormInput
  className="mb-3"
  type="text"
  label="Evaluator Comments"
  placeholder=""
  value={usageData.EvaluatorComments}
  onChange={(e) => {
    handleInputChange("EvaluatorComments", e.target.value);
  }}
/>

<CFormInput
  className="mb-3"
  type="text"
  label="Technique/Skill Name"
  placeholder=""
  value={usageData.TechniqueSkillName}
  onChange={(e) => {
    handleInputChange("TechniqueSkillName", e.target.value);
  }}
/>

<CFormInput
  className="mb-3"
  type="date"
  label="Qualification Date"
  placeholder=""
  value={usageData.QualificationDate}
  onChange={(e) => {
    handleInputChange("QualificationDate", e.target.value);
  }}
/>

<CFormInput
  className="mb-3"
  type="text"
  label="Skill Level"
  placeholder=""
  value={usageData.SkillLevel}
  onChange={(e) => {
    handleInputChange("SkillLevel", e.target.value);
  }}
/>

<CFormInput
  className="mb-3"
  type="text"
  label="Requalification Required"
  placeholder=""
  value={usageData.RequalificationRequired}
  onChange={(e) => {
    handleInputChange("RequalificationRequired", e.target.value);
  }}
/>

<CFormInput
  className="mb-3"
  type="date"
  label="Requalification Due Date"
  placeholder=""
  value={usageData.RequalificationDueDate}
  onChange={(e) => {
    handleInputChange("RequalificationDueDate", e.target.value);
  }}
/>

<CFormInput
  className="mb-3"
  type="text"
  label="Instrument Name/ID"
  placeholder=""
  value={usageData.InstrumentNameID}
  onChange={(e) => {
    handleInputChange("InstrumentNameID", e.target.value);
  }}
/>

<CFormInput
  className="mb-3"
  type="text"
  label="Method Name/ID"
  placeholder=""
  value={usageData.MethodNameID}
  onChange={(e) => {
    handleInputChange("MethodNameID", e.target.value);
  }}
/>

<CFormInput
  className="mb-3"
  type="text"
  label="Qualification Level"
  placeholder=""
  value={usageData.QualificationLevel}
  onChange={(e) => {
    handleInputChange("QualificationLevel", e.target.value);
  }}
/>

<CFormInput
  className="mb-3"
  type="date"
  label="Calibration Due Date"
  placeholder=""
  value={usageData.CalibrationDueDate}
  onChange={(e) => {
    handleInputChange("CalibrationDueDate", e.target.value);
  }}
/>

<CFormInput
  className="mb-3"
  type="date"
  label="Method Validation Date"
  placeholder=""
  value={usageData.MethodValidationDate}
  onChange={(e) => {
    handleInputChange("MethodValidationDate", e.target.value);
  }}
/>

<CFormInput
  className="mb-3"
  type="text"
  label="SOP Name/ID"
  placeholder=""
  value={usageData.SOPNameID}
  onChange={(e) => {
    handleInputChange("SOPNameID", e.target.value);
  }}
/>

<CFormInput
  className="mb-3"
  type="text"
  label="SOP Version"
  placeholder=""
  value={usageData.SOPVersion}
  onChange={(e) => {
    handleInputChange("SOPVersion", e.target.value);
  }}
/>

<CFormInput
  className="mb-3"
  type="date"
  label="Date Acknowledged/Reviewed"
  placeholder=""
  value={usageData.DateAcknowledgedReviewed}
  onChange={(e) => {
    handleInputChange("DateAcknowledgedReviewed", e.target.value);
  }}
/>

<CFormInput
  className="mb-3"
  type="date"
  label="Revision Due Date"
  placeholder=""
  value={usageData.RevisionDueDate}
  onChange={(e) => {
    handleInputChange("RevisionDueDate", e.target.value);
  }}
/>

<CFormInput
  className="mb-3"
  type="number"
  label="Years of Experience"
  placeholder=""
  value={usageData.YearsOfExperience}
  onChange={(e) => {
    handleInputChange("YearsOfExperience", e.target.value);
  }}
/>

<CFormInput
  className="mb-3"
  type="text"
  label="Previous Job Roles"
  placeholder=""
  value={usageData.PreviousJobRoles}
  onChange={(e) => {
    handleInputChange("PreviousJobRoles", e.target.value);
  }}
/>

<CFormInput
  className="mb-3"
  type="text"
  label="Previous Labs Worked In"
  placeholder=""
  value={usageData.PreviousLabsWorkedIn}
  onChange={(e) => {
    handleInputChange("PreviousLabsWorkedIn", e.target.value);
  }}
/>

<CFormInput
  className="mb-3"
  type="text"
  label="Specializations"
  placeholder=""
  value={usageData.Specializations}
  onChange={(e) => {
    handleInputChange("Specializations", e.target.value);
  }}
  />
        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={closeModal}>
            Back
          </CButton>
          <CButton color="primary" onClick={handleFormSubmit}>
            Submit
          </CButton>
        </CModalFooter>
      </CModal>
    </div>
  );
};

export default AnalystPersonalModal;