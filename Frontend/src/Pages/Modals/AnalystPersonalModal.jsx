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
  CFormSelect,
} from "@coreui/react";
import axios from "axios";
import { toast } from "react-toastify";
import { BASE_URL } from "../../config.json";

const AnalystPersonalModal = ({ visible, closeModal, handleSubmit, data,fetchData }) => {
  const [analystData, setAnalystData] = useState({
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
    status: "",
  });

  useEffect(() => {
    if (data) {
      setAnalystData(data);
    } else {
      setAnalystData({
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
        status: "Active",
      });
    }
  }, [data]);

  const handleInputChange = (key, value) => {
    setAnalystData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  const handleSubmitAnalyst = async (e) => {
    e.preventDefault();

    try {
      if (data) {
        // Edit existing analyst
        const { sno, ...updatedData } = analystData;
        const response = await axios.put(
          `${BASE_URL}/manage-lims/update/analystPersonal/${sno}`,
          updatedData
        );

        if (response.status === 200) {
          toast.success("Analyst updated successfully!");
          handleSubmit(analystData);
          closeModal();
        } else {
          toast.error("Failed to update analyst.");
        }
      } else {
        // Add new analyst
        const response = await axios.post(
          `${BASE_URL}/manage-lims/add/analystPersonal`,
          analystData
        );

        if (response.status === 200) {
          toast.success("Analyst added successfully!");
          handleSubmit(response.data);
          fetchData();
          closeModal();
        } else {
          toast.error("Failed to add analyst.");
        }
      }
    } catch (error) {
      console.error(error);
      if (error.response) {
        toast.error(
          error.response.data.message || "Error updating/adding analyst"
        );
      } else {
        toast.error("Error updating/adding analyst");
      }
    }
  };

  return (
    <CModal visible={visible} onClose={closeModal}>
      <CModalHeader>
        <CModalTitle>{data ? "Edit Analyst" : "Add Analyst"}</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CForm onSubmit={handleSubmitAnalyst}>
          <CFormInput
            className="mb-3"
            type="text"
            label="Analyst ID"
            value={analystData.AnalystID}
            onChange={(e) => handleInputChange("AnalystID", e.target.value)}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Full Name"
            value={analystData.FullName}
            onChange={(e) => handleInputChange("FullName", e.target.value)}
          />
          <CFormInput
            className="mb-3"
            type="date"
            label="Date of Birth"
            value={analystData.DateOfBirth}
            onChange={(e) => handleInputChange("DateOfBirth", e.target.value)}
            max={
              new Date(new Date().setFullYear(new Date().getFullYear() - 22))
                .toISOString()
                .split("T")[0]
            }
          />

          <CFormInput
            className="mb-3"
            type="email"
            label="Email Address"
            value={analystData.EmailAddress}
            onChange={(e) => handleInputChange("EmailAddress", e.target.value)}
          />
          <CFormInput
            className="mb-3"
            type="tel"
            label="Phone Number"
            value={analystData.PhoneNumber}
            onChange={(e) => handleInputChange("PhoneNumber", e.target.value)}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Department"
            value={analystData.Department}
            onChange={(e) => handleInputChange("Department", e.target.value)}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Job Title"
            value={analystData.JobTitle}
            onChange={(e) => handleInputChange("JobTitle", e.target.value)}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Supervisor/Manager Name"
            value={analystData.SupervisorManagerName}
            onChange={(e) =>
              handleInputChange("SupervisorManagerName", e.target.value)
            }
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Qualification ID"
            value={analystData.QualificationID}
            onChange={(e) =>
              handleInputChange("QualificationID", e.target.value)
            }
          />
          <CFormInput
            className="mb-3"
            type="date"
            label="Date of Qualification"
            value={analystData.DateOfQualification}
            onChange={(e) =>
              handleInputChange("DateOfQualification", e.target.value)
            }
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Qualified By"
            value={analystData.QualifiedBy}
            onChange={(e) => handleInputChange("QualifiedBy", e.target.value)}
          />
          <CFormSelect
            className="mb-3"
            label="Qualification Type"
            value={analystData.QualificationType}
            onChange={(e) =>
              handleInputChange("QualificationType", e.target.value)
            }
            options={[
              "Select...",
              { label: "Initial", value: "Initial" },
              { label: "Recertification", value: "Recertification" },
              // Add more options as needed
            ]}
          />
          <CFormInput
            className="mb-3"
            type="date"
            label="Expiration Date"
            value={analystData.ExpirationDate}
            onChange={(e) =>
              handleInputChange("ExpirationDate", e.target.value)
            }
          />
          <CFormSelect
            className="mb-3"
            label="Qualification Status"
            value={analystData.QualificationStatus}
            onChange={(e) =>
              handleInputChange("QualificationStatus", e.target.value)
            }
            options={[
              "Select...",
              { label: "Qualified", value: "Qualified" },
              { label: "Pending", value: "Pending" },
              {label: "Revoked", value: "Revoked"},
              {label: "Expired", value: "Expired"}
            ]}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Training Program Name"
            value={analystData.TrainingProgramName}
            onChange={(e) =>
              handleInputChange("TrainingProgramName", e.target.value)
            }
          />
          <CFormInput
            className="mb-3"
            type="date"
            label="Training Start Date"
            value={analystData.TrainingStartDate}
            onChange={(e) =>
              handleInputChange("TrainingStartDate", e.target.value)
            }
          />
          <CFormInput
            className="mb-3"
            type="date"
            label="Training Completion Date"
            value={analystData.TrainingCompletionDate}
            onChange={(e) =>
              handleInputChange("TrainingCompletionDate", e.target.value)
            }
          />
          <CFormSelect
            className="mb-3"
            label="Training Completion Status"
            value={analystData.TrainingCompletionStatus}
            onChange={(e) =>
              handleInputChange("TrainingCompletionStatus", e.target.value)
            }
            options={[
              "Select...",
              { label: "Pass", value: "Pass" },
              { label: "Fail", value: "Fail" },
              { label: "In Progress", value: "In Progress" },
            ]}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Certification Name/Number"
            value={analystData.CertificationNameNumber}
            onChange={(e) =>
              handleInputChange("CertificationNameNumber", e.target.value)
            }
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Certification Body"
            placeholder="e.g., ISO, FDA"
            value={analystData.CertificationBody}
            onChange={(e) =>
              handleInputChange("CertificationBody", e.target.value)
            }
          />
          <CFormInput
            className="mb-3"
            type="date"
            label="Certification Date"
            value={analystData.CertificationDate}
            onChange={(e) =>
              handleInputChange("CertificationDate", e.target.value)
            }
          />
          <CFormInput
            className="mb-3"
            type="date"
            label="Next Recertification Date"
            value={analystData.NextRecertificationDate}
            onChange={(e) =>
              handleInputChange("NextRecertificationDate", e.target.value)
            }
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Competency Test Name"
            value={analystData.CompetencyTestName}
            onChange={(e) =>
              handleInputChange("CompetencyTestName", e.target.value)
            }
          />
          <CFormInput
            className="mb-3"
            type="date"
            label="Test Date"
            value={analystData.TestDate}
            onChange={(e) => handleInputChange("TestDate", e.target.value)}
          />
          <CFormSelect
            className="mb-3"
            type="text"
            label="Test Results"
            value={analystData.TestResults}
            onChange={(e) => handleInputChange("TestResults", e.target.value)}
            options={[
              "Select...",
              { label: "Passed", value: "Passed" },
              { label: "Failed", value: "Failed" },
              { label: "Incomplete", value: "Incomplete" },
            ]}
          />
          <CFormInput
            className="mb-3"
            type="number"
            label="Test Score"
            value={analystData.TestScore}
            onChange={(e) => handleInputChange("TestScore", e.target.value)}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Evaluator Name"
            value={analystData.EvaluatorName}
            onChange={(e) => handleInputChange("EvaluatorName", e.target.value)}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Evaluator Comments"
            value={analystData.EvaluatorComments}
            onChange={(e) =>
              handleInputChange("EvaluatorComments", e.target.value)
            }
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Technique Skill Name"
            value={analystData.TechniqueSkillName}
            onChange={(e) =>
              handleInputChange("TechniqueSkillName", e.target.value)
            }
          />
          <CFormInput
            className="mb-3"
            type="date"
            label="Qualification Date"
            value={analystData.QualificationDate}
            onChange={(e) =>
              handleInputChange("QualificationDate", e.target.value)
            }
          />
          <CFormSelect
            className="mb-3"
            label="Skill Level"
            value={analystData.SkillLevel}
            onChange={(e) => handleInputChange("SkillLevel", e.target.value)}
            options={[
              "Select...",
              { label: "Beginner", value: "Beginner" },
              { label: "Intermediate", value: "Intermediate" },
              { label: "Expert", value: "Expert" },
            ]}
          />
          <CFormSelect
            className="mb-3"
            label="Requalification"
            value={analystData.RequalificationRequired}
            onChange={(e) =>
              handleInputChange("RequalificationRequired", e.target.value)
            }
            options={[
              "Select...",
              { label: "Yes", value: "Yes" },
              { label: "No", value: "No" },
            ]}
          />
          <CFormInput
            className="mb-3"
            type="date"
            label="Requalification Due Date"
            value={analystData.RequalificationDueDate}
            onChange={(e) =>
              handleInputChange("RequalificationDueDate", e.target.value)
            }
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Instrument Name ID"
            value={analystData.InstrumentNameID}
            onChange={(e) =>
              handleInputChange("InstrumentNameID", e.target.value)
            }
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Method Name ID"
            value={analystData.MethodNameID}
            onChange={(e) => handleInputChange("MethodNameID", e.target.value)}
          />
          <CFormSelect
            className="mb-3"
            label="Qualification Level"
            value={analystData.QualificationLevel}
            onChange={(e) =>
              handleInputChange("QualificationLevel", e.target.value)
            }
            options={[
              "Select...",
              { label: "Operator", value: "Operator" },
              { label: "Level 2", value: "Level 2" },
              // Add more options as needed
            ]}
          />
          <CFormInput
            className="mb-3"
            type="date"
            label="Calibration Due Date"
            value={analystData.CalibrationDueDate}
            onChange={(e) =>
              handleInputChange("CalibrationDueDate", e.target.value)
            }
          />
          <CFormInput
            className="mb-3"
            type="date"
            label="Method Validation Date"
            value={analystData.MethodValidationDate}
            onChange={(e) =>
              handleInputChange("MethodValidationDate", e.target.value)
            }
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="SOP Name ID"
            value={analystData.SOPNameID}
            onChange={(e) => handleInputChange("SOPNameID", e.target.value)}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="SOP Version"
            value={analystData.SOPVersion}
            onChange={(e) => handleInputChange("SOPVersion", e.target.value)}
          />
          <CFormInput
            className="mb-3"
            type="date"
            label="Date Acknowledged/Reviewed"
            value={analystData.DateAcknowledgedReviewed}
            onChange={(e) =>
              handleInputChange("DateAcknowledgedReviewed", e.target.value)
            }
          />
          <CFormInput
            className="mb-3"
            type="date"
            label="Revision Due Date"
            value={analystData.RevisionDueDate}
            onChange={(e) =>
              handleInputChange("RevisionDueDate", e.target.value)
            }
          />
          <CFormInput
            className="mb-3"
            type="number"
            label="Years of Experience"
            value={analystData.YearsOfExperience}
            onChange={(e) =>
              handleInputChange("YearsOfExperience", e.target.value)
            }
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Previous Job Roles"
            value={analystData.PreviousJobRoles}
            onChange={(e) =>
              handleInputChange("PreviousJobRoles", e.target.value)
            }
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Previous Labs Worked In"
            value={analystData.PreviousLabsWorkedIn}
            onChange={(e) =>
              handleInputChange("PreviousLabsWorkedIn", e.target.value)
            }
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Specializations"
            placeholder="e.g., Microbiology, Analytical Chem"
            value={analystData.Specializations}
            onChange={(e) =>
              handleInputChange("Specializations", e.target.value)
            }
          />
          <CFormInput
            className="mb-3"
            type="date"
            label="Approval Date"
            value={analystData.ApprovalDate}
            onChange={(e) => handleInputChange("ApprovalDate", e.target.value)}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Approvers Name"
            value={analystData.ApproversName}
            onChange={(e) => handleInputChange("ApproversName", e.target.value)}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Approvers Signature"
            value={analystData.ApproversSignature}
            onChange={(e) =>
              handleInputChange("ApproversSignature", e.target.value)
            }
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Comments Notes"
            value={analystData.CommentsNotes}
            onChange={(e) => handleInputChange("CommentsNotes", e.target.value)}
          />
          <CFormInput
            className="mb-3"
            type="date"
            label="Modification Date"
            value={analystData.ModificationDate}
            onChange={(e) =>
              handleInputChange("ModificationDate", e.target.value)
            }
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Modified By"
            value={analystData.ModifiedBy}
            onChange={(e) => handleInputChange("ModifiedBy", e.target.value)}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Change Description"
            value={analystData.ChangeDescription}
            onChange={(e) =>
              handleInputChange("ChangeDescription", e.target.value)
            }
          />
          <CFormSelect
            className="mb-3"
            label="Status"
            value={analystData.status}
            onChange={(e) => handleInputChange("status", e.target.value)}
            options={[
              "Select...",
              { label: "Active", value: "Active" },
              { label: "Inactive", value: "Inactive" },
            ]}
          />
          <CButton color="primary" type="submit">
            {data ? "Save Changes" : "Add Analyst"}
          </CButton>
        </CForm>
      </CModalBody>
      <CModalFooter>
        <CButton color="secondary" onClick={closeModal}>
          Close
        </CButton>
      </CModalFooter>
    </CModal>
  );
};

export default AnalystPersonalModal;
