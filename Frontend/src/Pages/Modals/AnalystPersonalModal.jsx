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
} from "@coreui/react";
import axios from "axios";
import { BASE_URL } from "../../config.json";

const AnalystPersonalModal = ({ visible, closeModal, handleSubmit }) => {
  const [formData, setFormData] = useState({
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
    ChangeDescription: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${BASE_URL}/manage-lims/add/analystPersonal`,
        {
          analystPersonal: [formData],
        }
      );
      console.log("API Response:", response.data);
      const addedAnalyst = response.data.updatedLIMS?.analystPersonal[0];
      if (addedAnalyst) {
        handleSubmit(addedAnalyst);
      }
      closeModal();
    } catch (error) {
      console.error("Error adding analyst:", error);
    }
  };

  return (
    <CModal alignment="center" visible={visible} onClose={closeModal} size="lg">
      <CModalHeader>
        <CModalTitle>Add Analyst Personal</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CForm onSubmit={handleFormSubmit}>
          <CFormInput
            name="AnalystID"
            label="Analyst ID"
            value={formData.AnalystID}
            onChange={handleChange}
            placeholder="Enter Analyst ID"
          />
          <CFormInput
            name="FullName"
            label="Full Name"
            value={formData.FullName}
            onChange={handleChange}
            placeholder="Enter Full Name"
          />
          <CFormInput
            name="DateOfBirth"
            label="Date of Birth"
            type="date"
            value={formData.DateOfBirth}
            onChange={handleChange}
          />
          <CFormInput
            name="EmailAddress"
            label="Email Address"
            type="email"
            value={formData.EmailAddress}
            onChange={handleChange}
            placeholder="Enter Email Address"
          />
          <CFormInput
            name="PhoneNumber"
            label="Phone Number"
            value={formData.PhoneNumber}
            onChange={handleChange}
            placeholder="Enter Phone Number"
          />
          <CFormInput
            name="Department"
            label="Department"
            value={formData.Department}
            onChange={handleChange}
            placeholder="Enter Department"
          />
          <CFormInput
            name="JobTitle"
            label="Job Title"
            value={formData.JobTitle}
            onChange={handleChange}
            placeholder="Enter Job Title"
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Supervisor/Manager Name"
            placeholder=""
            value={formData.SupervisorManagerName}
            onChange={handleChange}
          />
          <CFormInput
            className="mb-3"
            type="number"
            label="Qualification ID"
            placeholder=""
            value={formData.QualificationID}
            onChange={handleChange}
          />
          <CFormInput
            className="mb-3"
            type="Date"
            label="Date of Qualification"
            placeholder=""
            value={formData.DateOfQualification}
            onChange={handleChange}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Qualified By"
            placeholder=""
            value={formData.QualifiedBy}
            onChange={handleChange}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Qualification Type"
            placeholder=""
            value={formData.QualificationType}
            onChange={handleChange}
          />
          <CFormInput
            className="mb-3"
            type="Date"
            label="Expiration Date"
            placeholder=""
            value={formData.ExpirationDate}
            onChange={handleChange}
          />

          <CFormInput
            className="mb-3"
            type="text"
            label="Qualification Status"
            placeholder=""
            value={formData.QualificationStatus}
            onChange={handleChange}
          />

          <CFormInput
            className="mb-3"
            type="text"
            label="Training Program Name"
            placeholder=""
            value={formData.TrainingProgramName}
            onChange={handleChange}
          />

          <CFormInput
            className="mb-3"
            type="date"
            label="Training Start Date"
            placeholder=""
            value={formData.TrainingStartDate}
            onChange={handleChange}
          />

          <CFormInput
            className="mb-3"
            type="date"
            label="Training Completion Date"
            placeholder=""
            value={formData.TrainingCompletionDate}
            onChange={handleChange}
          />

          <CFormInput
            className="mb-3"
            type="text"
            label="Training Completion Status"
            placeholder=""
            value={formData.TrainingCompletionStatus}
            onChange={handleChange}
          />

          <CFormInput
            className="mb-3"
            type="text"
            label="Certification Name/Number"
            placeholder=""
            value={formData.CertificationNameNumber}
            onChange={handleChange}
          />

          <CFormInput
            className="mb-3"
            type="text"
            label="Certification Body"
            placeholder=""
            value={formData.CertificationBody}
            onChange={handleChange}
          />

          <CFormInput
            className="mb-3"
            type="date"
            label="Certification Date"
            placeholder=""
            value={formData.CertificationDate}
            onChange={handleChange}
          />

          <CFormInput
            className="mb-3"
            type="date"
            label="Next Recertification Date"
            placeholder=""
            value={formData.NextRecertificationDate}
            onChange={handleChange}
          />

          <CFormInput
            className="mb-3"
            type="text"
            label="Competency Test Name"
            placeholder=""
            value={formData.CompetencyTestName}
            onChange={handleChange}
          />

          <CFormInput
            className="mb-3"
            type="date"
            label="Test Date"
            placeholder=""
            value={formData.TestDate}
            onChange={handleChange}
          />

          <CFormInput
            className="mb-3"
            type="text"
            label="Test Results"
            placeholder=""
            value={formData.TestResults}
            onChange={(e) => {
              handleInputChange("TestResults", e.target.value);
            }}
          />

          <CFormInput
            className="mb-3"
            type="number"
            label="Test Score"
            placeholder=""
            value={formData.TestScore}
            onChange={handleChange}
          />

          <CFormInput
            className="mb-3"
            type="text"
            label="Evaluator Name"
            placeholder=""
            value={formData.EvaluatorName}
            onChange={handleChange}
          />

          <CFormInput
            className="mb-3"
            type="text"
            label="Evaluator Comments"
            placeholder=""
            value={formData.EvaluatorComments}
            onChange={handleChange}
          />

          <CFormInput
            className="mb-3"
            type="text"
            label="Technique/Skill Name"
            placeholder=""
            value={formData.TechniqueSkillName}
            onChange={handleChange}
          />

          <CFormInput
            className="mb-3"
            type="date"
            label="Qualification Date"
            placeholder=""
            value={formData.QualificationDate}
            onChange={handleChange}
          />

          <CFormInput
            className="mb-3"
            type="text"
            label="Skill Level"
            placeholder=""
            value={formData.SkillLevel}
            onChange={handleChange}
          />

          <CFormInput
            className="mb-3"
            type="text"
            label="Requalification Required"
            placeholder=""
            value={formData.RequalificationRequired}
            onChange={handleChange}
          />

          <CFormInput
            className="mb-3"
            type="date"
            label="Requalification Due Date"
            placeholder=""
            value={formData.RequalificationDueDate}
            onChange={handleChange}
          />

          <CFormInput
            className="mb-3"
            type="text"
            label="Instrument Name/ID"
            placeholder=""
            value={formData.InstrumentNameID}
            onChange={handleChange}
          />

          <CFormInput
            className="mb-3"
            type="text"
            label="Method Name/ID"
            placeholder=""
            value={formData.MethodNameID}
            onChange={handleChange}
          />

          <CFormInput
            className="mb-3"
            type="text"
            label="Qualification Level"
            placeholder=""
            value={formData.QualificationLevel}
            onChange={handleChange}
          />

          <CFormInput
            className="mb-3"
            type="date"
            label="Calibration Due Date"
            placeholder=""
            value={formData.CalibrationDueDate}
            onChange={handleChange}
          />

          <CFormInput
            className="mb-3"
            type="date"
            label="Method Validation Date"
            placeholder=""
            value={formData.MethodValidationDate}
            onChange={handleChange}
          />

          <CFormInput
            className="mb-3"
            type="text"
            label="SOP Name/ID"
            placeholder=""
            value={formData.SOPNameID}
            onChange={handleChange}
          />

          <CFormInput
            className="mb-3"
            type="text"
            label="SOP Version"
            placeholder=""
            value={formData.SOPVersion}
            onChange={handleChange}
          />

          <CFormInput
            className="mb-3"
            type="date"
            label="Date Acknowledged/Reviewed"
            placeholder=""
            value={formData.DateAcknowledgedReviewed}
            onChange={handleChange}
          />

          <CFormInput
            className="mb-3"
            type="date"
            label="Revision Due Date"
            placeholder=""
            value={formData.RevisionDueDate}
            onChange={handleChange}
          />

          <CFormInput
            className="mb-3"
            type="number"
            label="Years of Experience"
            placeholder=""
            value={formData.YearsOfExperience}
            onChange={handleChange}
          />

          <CFormInput
            className="mb-3"
            type="text"
            label="Previous Job Roles"
            placeholder=""
            value={formData.PreviousJobRoles}
            onChange={handleChange}
          />

          <CFormInput
            className="mb-3"
            type="text"
            label="Previous Labs Worked In"
            placeholder=""
            value={formData.PreviousLabsWorkedIn}
            onChange={handleChange}
          />

          <CFormInput
            className="mb-3"
            type="text"
            label="Specializations"
            placeholder=""
            value={formData.Specializations}
            onChange={handleChange}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Approval Date"
            placeholder=""
            value={formData.ApprovalDate}
            onChange={handleChange}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Approval's Name"
            placeholder=""
            value={formData.ApprovalsName}
            onChange={handleChange}
          />
          <CButton type="submit" color="primary" style={{ marginTop: "1rem" }}>
            Add Analyst
          </CButton>
        </CForm>
      </CModalBody>
      <CModalFooter>
        <CButton color="secondary" onClick={closeModal}>
          Cancel
        </CButton>
      </CModalFooter>
    </CModal>
  );
};

export default AnalystPersonalModal;
