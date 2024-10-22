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
  CFormLabel,
} from "@coreui/react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import Barcode from "react-barcode";
import { ProgressBar2 } from "../components/Workflow/ProgressBar2";
// import ProgressBar from "../components/Workflow/ProgressBar";

const AnalystQualificationModal = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState("Analyst Qualification");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { id } = useParams();
  console.log(id, "ididididididididiidioidiidid");

  const [formData, setFormData] = useState({
    analystId: "",
    fullName: "",
    dateOfBirth: "",
    emailAddress: "",
    phoneNumber: "",
    department: "",
    jobTitle: "",
    supervisorManagerName: "",
    qualificationId: "",
    dateOfQualification: "",
    qualifiedBy: "",
    qualificationType: "",
    expirationDate: "",
    qualificationStatus: "",
    trainingProgramName: "",
    trainingStartDate: "",
    trainingCompletionDate: "",
    trainingCompletionStatus: "",
    certificationNameNumber: "",
    certificationBody: "",
    certificationDate: "",
    nextReCertificationDate: "",
    competencyTestName: "",
    testDate: "",
    testResults: "",
    testScore: "",
    evaluatorName: "",
    evaluatorComments: "",
    techniqueSkillName: "",
    qualificationDate: "",
    skillLevel: "",
    reQualificationRequired: "",
    reQualificationDueDate: "",
    instrumentNameId: "",
    methodNameId: "",
    qualificationLevel: "",
    methodValidationDate: "",
    sopNameId: "",
    sopVersion: "",
    dateAcknowledgedReviewed: "",
    yearsOfExperience: "",
    previousJobRoles: "",
    previousLabsWorkedIn: "",
    specializations: "",
    approvalDate: "",
    approverName: "",
    approverSignature: "",
    commentsNotes: "",
    modificationDate: "",
    modifiedBy: "",
    changeDescription: "",
    status: "",
  });

  const fetchAnalystData = async (id) => {
    try {
      const response = await axios.get(`${BASE_URL}/analyst/get-analyst/${id}`);
      if (response.status === 200) {
        setFormData(response.data); // Assuming response.data contains the analyst data
      } else {
        toast.error("Failed to fetch analyst data.");
      }
    } catch (error) {
      console.error("Error fetching analyst data:", error);
      toast.error("Error fetching analyst data.");
    }
  };
  useEffect(() => {
    if (id) {
      fetchAnalystData(id); // Fetch data for the specific analyst ID
    } else {
      // Reset to initial state if no ID is provided
      setFormData({
        analystId: "",
        fullName: "",
        dateOfBirth: "",
        emailAddress: "",
        phoneNumber: "",
        department: "",
        jobTitle: "",
        supervisorManagerName: "",
        qualificationId: "",
        dateOfQualification: "",
        qualifiedBy: "",
        qualificationType: "",
        expirationDate: "",
        qualificationStatus: "",
        trainingProgramName: "",
        trainingStartDate: "",
        trainingCompletionDate: "",
        trainingCompletionStatus: "",
        certificationNameNumber: "",
        certificationBody: "",
        certificationDate: "",
        nextReCertificationDate: "",
        competencyTestName: "",
        testDate: "",
        testResults: "",
        testScore: "",
        evaluatorName: "",
        evaluatorComments: "",
        techniqueSkillName: "",
        qualificationDate: "",
        skillLevel: "",
        reQualificationRequired: "",
        reQualificationDueDate: "",
        instrumentNameId: "",
        methodNameId: "",
        qualificationLevel: "",
        methodValidationDate: "",
        sopNameId: "",
        sopVersion: "",
        dateAcknowledgedReviewed: "",
        yearsOfExperience: "",
        previousJobRoles: "",
        previousLabsWorkedIn: "",
        specializations: "",
        approvalDate: "",
        approverName: "",
        approverSignature: "",
        commentsNotes: "",
        modificationDate: "",
        modifiedBy: "",
        changeDescription: "",
        status: "Active",
      });
    }
  }, [id]);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value, options, files } = e.target;

    if (name === "requiredInstrument") {
      const selectedInstruments = [];
      for (let i = 0; i < options.length; i++) {
        if (options[i].selected) {
          selectedInstruments.push(options[i].value);
        }
      }
      setFormData((prevData) => ({
        ...prevData,
        [name]: selectedInstruments,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };





  const getCurrentDate = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0"); // Months are 0-based
    const dd = String(today.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  };

  const fetchData = async () => {
    if (!id) return;
    try {
      const response = await axios.get(
        `http://localhost:9000/analyst/get-analyst/${id}`
      );
      console.log(response.data);

      const responseData = Array.isArray(response.data)
        ? response.data
        : response.data.data;
      console.log(responseData,"rrrrrrrrrrrrrrrr");
      setFormData(responseData);
      console.log(formData.stage);
    } catch (error) {
      console.error("Error fetching ", error);
      toast.error("Failed to fetch ");
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleEdit = async () => {
    try {
      const response = await axios.put(
        `http://localhost:9000/analyst/edit-analyst/${id}`,
        formData
      );
      if (response.status === 200) {
        toast.success("Sample Workflow updated successfully.");
        setIsModalOpen(false);
        navigate("/sampleWorkflow");
      } else {
        toast.error("Failed to update Sample Workflow.");
      }
    } catch (error) {
      toast.error(
        "Error updating Sample Workflow: " +
          (error.response?.data || error.message)
      );
    }
  };

  const handleSave = async () => {
    if (id) {
      await handleEdit();
    } else {
      try {
        const response = await axios.post(
          `http://localhost:9000/analyst/create-analyst`,
          formData
        );
        console.log(response, "iddddddddddddddddddddddd");
        if (response.status === 200) {
          toast.success("Data added successfully.");
          setIsModalOpen(false);
          navigate("/analyst-qualification");
        } else {
          toast.error("Failed to add Data.");
        }
      } catch (error) {
        toast.error(
          "Error adding Sample Workflow: " +
            (error.response?.data || error.message)
        );
      }
    }
  };

  const renderFields = (tab) => {
    switch (tab) {
      case "Analyst Qualification":
        return (
          <CForm>
            <CRow className="mb-3">
              <CCol md={6}>
                <CFormInput
                  type="text"
                  name="analystId"
                  label="Analyst ID"
                  value={formData?.analystId || ""}
                  onChange={handleInputChange}
                />
              </CCol>
              <CCol md={6}>
                <CFormInput
                  type="text"
                  name="fullName"
                  label="Full Name"
                  value={formData?.fullName || ""}
                  onChange={handleInputChange}
                />
              </CCol>
            </CRow>

            <CRow className="mb-3">
              <CCol md={6}>
                <CFormInput
                  type="date"
                  name="dateOfBirth"
                  label="Date of Birth"
                  value={formData?.dateOfBirth || ""}
                  onChange={handleInputChange}
                />
              </CCol>
              <CCol md={6}>
                <CFormInput
                  type="email"
                  name="emailAddress"
                  label="Email Address"
                  value={formData?.emailAddress || ""}
                  onChange={handleInputChange}
                />
              </CCol>
            </CRow>

            <CRow className="mb-3">
              <CCol md={6}>
                <CFormInput
                  type="text"
                  name="phoneNumber"
                  label="Phone Number"
                  value={formData?.phoneNumber || ""}
                  onChange={handleInputChange}
                />
              </CCol>
              <CCol md={6}>
                <CFormInput
                  type="text"
                  name="department"
                  label="department"
                  value={formData?.department || ""}
                  onChange={handleInputChange}
                />
              </CCol>
            </CRow>

            <CRow className="mb-3">
              <CCol md={6}>
                <CFormInput
                  type="text"
                  name="jobTitle"
                  label="Job Title"
                  value={formData?.jobTitle || ""}
                  onChange={handleInputChange}
                />
              </CCol>
              <CCol md={6}>
                <CFormInput
                  type="text"
                  name="supervisorManagerName"
                  label="Supervisor/Manager Name"
                  value={formData?.supervisorManagerName || ""}
                  onChange={handleInputChange}
                />
              </CCol>
            </CRow>

            <CRow className="mb-3">
              <CCol md={6}>
                <CFormInput
                  type="text"
                  name="qualificationId"
                  label="Qualification ID"
                  value={formData?.qualificationId || ""}
                  onChange={handleInputChange}
                />
              </CCol>
              <CCol md={6}>
                <CFormInput
                  type="date"
                  name="dateOfQualification"
                  label="Date of Qualification"
                  value={formData?.dateOfQualification || ""}
                  onChange={handleInputChange}
                />
              </CCol>
            </CRow>

            <CRow className="mb-3">
              <CCol md={6}>
                <CFormInput
                  type="text"
                  name="qualifiedBy"
                  label="Qualified By"
                  value={formData?.qualifiedBy || ""}
                  onChange={handleInputChange}
                />
              </CCol>
              <CCol md={6}>
                <CFormInput
                  type="text"
                  name="qualificationType"
                  label="Qualification Type"
                  value={formData?.qualificationType || ""}
                  onChange={handleInputChange}
                />
              </CCol>
            </CRow>

            <CRow className="mb-3">
              <CCol md={6}>
                <CFormInput
                  type="date"
                  name="expirationDate"
                  label="Expiration Date"
                  value={formData?.expirationDate || ""}
                  onChange={handleInputChange}
                />
              </CCol>
              <CCol md={6}>
                <CFormInput
                  type="text"
                  name="qualificationStatus"
                  label="Qualification Status"
                  value={formData?.qualificationStatus || ""}
                  onChange={handleInputChange}
                />
              </CCol>
            </CRow>

            <CRow className="mb-3">
              <CCol md={6}>
                <CFormInput
                  type="text"
                  name="trainingProgramName"
                  label="Training Program Name"
                  value={formData?.trainingProgramName || ""}
                  onChange={handleInputChange}
                />
              </CCol>
              <CCol md={6}>
                <CFormInput
                  type="date"
                  name="trainingStartDate"
                  label="Training Start Date"
                  value={formData?.trainingStartDate || ""}
                  onChange={handleInputChange}
                />
              </CCol>
            </CRow>

            <CRow className="mb-3">
              <CCol md={6}>
                <CFormInput
                  type="date"
                  name="trainingCompletionDate"
                  label="Training Completion Date"
                  value={formData?.trainingCompletionDate || ""}
                  onChange={handleInputChange}
                />
              </CCol>
              <CCol md={6}>
                <CFormInput
                  type="text"
                  name="trainingCompletionStatus"
                  label="Training Completion Status"
                  value={formData?.trainingCompletionStatus || ""}
                  onChange={handleInputChange}
                />
              </CCol>
            </CRow>

            <CRow className="mb-3">
              <CCol md={6}>
                <CFormInput
                  type="text"
                  name="certificationNameNumber"
                  label="Certification Name/Number"
                  value={formData?.certificationNameNumber || ""}
                  onChange={handleInputChange}
                />
              </CCol>
              <CCol md={6}>
                <CFormInput
                  type="text"
                  name="certificationBody"
                  label="Certification Body"
                  value={formData?.certificationBody || ""}
                  onChange={handleInputChange}
                />
              </CCol>
            </CRow>

            <CRow className="mb-3">
              <CCol md={6}>
                <CFormInput
                  type="date"
                  name="certificationDate"
                  label="Certification Date"
                  value={formData?.certificationDate || ""}
                  onChange={handleInputChange}
                />
              </CCol>
              <CCol md={6}>
                <CFormInput
                  type="date"
                  name="nextReCertificationDate"
                  label="Next Recertification Date"
                  value={formData?.nextReCertificationDate || ""}
                  onChange={handleInputChange}
                />
              </CCol>
            </CRow>

            <CRow className="mb-3">
              <CCol md={6}>
                <CFormInput
                  type="text"
                  name="competencyTestName"
                  label="Competency Test Name"
                  value={formData?.competencyTestName || ""}
                  onChange={handleInputChange}
                />
              </CCol>
              <CCol md={6}>
                <CFormInput
                  type="date"
                  name="testDate"
                  label="Test Date"
                  value={formData?.testDate || ""}
                  onChange={handleInputChange}
                />
              </CCol>
            </CRow>

            <CRow className="mb-3">
              <CCol md={6}>
                <CFormInput
                  type="text"
                  name="testResults"
                  label="Test Results"
                  value={formData?.testResults || ""}
                  onChange={handleInputChange}
                />
              </CCol>
              <CCol md={6}>
                <CFormInput
                  type="number"
                  name="testScore"
                  label="Test Score"
                  value={formData?.testScore || ""}
                  onChange={handleInputChange}
                />
              </CCol>
            </CRow>

            <CRow className="mb-3">
              <CCol md={6}>
                <CFormInput
                  type="text"
                  name="evaluatorName"
                  label="Evaluator Name"
                  value={formData?.evaluatorName || ""}
                  onChange={handleInputChange}
                />
              </CCol>
              <CCol md={6}>
                <CFormInput
                  type="textarea"
                  name="evaluatorComments"
                  label="Evaluator Comments"
                  value={formData?.evaluatorComments || ""}
                  onChange={handleInputChange}
                />
              </CCol>
            </CRow>

            <CRow className="mb-3">
              <CCol md={6}>
                <CFormInput
                  type="text"
                  name="techniqueSkillName"
                  label="Technique/Skill Name"
                  value={formData?.techniqueSkillName || ""}
                  onChange={handleInputChange}
                />
              </CCol>
              <CCol md={6}>
                <CFormInput
                  type="date"
                  name="qualificationDate"
                  label="Qualification Date"
                  value={formData?.qualificationDate || ""}
                  onChange={handleInputChange}
                />
              </CCol>
            </CRow>

            <CRow className="mb-3">
              <CCol md={6}>
                <CFormInput
                  type="text"
                  name="skillLevel"
                  label="Skill Level"
                  value={formData?.skillLevel || ""}
                  onChange={handleInputChange}
                />
              </CCol>
              <CCol md={6}>
                <CFormInput
                  type="text"
                  name="reQualificationRequired"
                  label="Requalification Required?"
                  value={formData?.reQualificationRequired || ""}
                  onChange={handleInputChange}
                />
              </CCol>
            </CRow>

            <CRow className="mb-3">
              <CCol md={6}>
                <CFormInput
                  type="date"
                  name="reQualificationDueDate"
                  label="Requalification Due Date"
                  value={formData?.reQualificationDueDate || ""}
                  onChange={handleInputChange}
                />
              </CCol>
              <CCol md={6}>
                <CFormInput
                  type="text"
                  name="instrumentNameId"
                  label="Instrument Name/ID"
                  value={formData?.instrumentNameId || ""}
                  onChange={handleInputChange}
                />
              </CCol>
            </CRow>

            <CRow className="mb-3">
              <CCol md={6}>
                <CFormInput
                  type="text"
                  name="methodNameId"
                  label="Method Name/ID"
                  value={formData?.methodNameId || ""}
                  onChange={handleInputChange}
                />
              </CCol>
              <CCol md={6}>
                <CFormInput
                  type="text"
                  name="qualificationLevel"
                  label="Qualification Level"
                  value={formData?.qualificationLevel || ""}
                  onChange={handleInputChange}
                />
              </CCol>
            </CRow>

            <CRow className="mb-3">
              <CCol md={6}>
                <CFormInput
                  type="date"
                  name="methodValidationDate"
                  label="Method Validation Date"
                  value={formData?.methodValidationDate || ""}
                  onChange={handleInputChange}
                />
              </CCol>
              <CCol md={6}>
                <CFormInput
                  type="text"
                  name="sopNameId"
                  label="SOP Name/ID"
                  value={formData?.sopNameId || ""}
                  onChange={handleInputChange}
                />
              </CCol>
            </CRow>

            <CRow className="mb-3">
              <CCol md={6}>
                <CFormInput
                  type="text"
                  name="sopVersion"
                  label="SOP Version"
                  value={formData?.sopVersion || ""}
                  onChange={handleInputChange}
                />
              </CCol>
              <CCol md={6}>
                <CFormInput
                  type="date"
                  name="dateAcknowledgedReviewed"
                  label="Date Acknowledged/Reviewed"
                  value={formData?.dateAcknowledgedReviewed || ""}
                  onChange={handleInputChange}
                />
              </CCol>
            </CRow>

            <CRow className="mb-3">
              <CCol md={6}>
                <CFormInput
                  type="number"
                  name="yearsOfExperience"
                  label="Years of Experience"
                  value={formData?.yearsOfExperience || ""}
                  onChange={handleInputChange}
                />
              </CCol>
              <CCol md={6}>
                <CFormInput
                  type="text"
                  name="previousJobRoles"
                  label="Previous Job Roles"
                  value={formData?.previousJobRoles || ""}
                  onChange={handleInputChange}
                />
              </CCol>
            </CRow>

            <CRow className="mb-3">
              <CCol md={6}>
                <CFormInput
                  type="text"
                  name="previousLabsWorkedIn"
                  label="Previous Labs Worked In"
                  value={formData?.previousLabsWorkedIn || ""}
                  onChange={handleInputChange}
                />
              </CCol>
              <CCol md={6}>
                <CFormInput
                  type="text"
                  name="specializations"
                  label="specializations"
                  value={formData?.specializations || ""}
                  onChange={handleInputChange}
                />
              </CCol>
            </CRow>

            <CRow className="mb-3">
              <CCol md={6}>
                <CFormInput
                  type="date"
                  name="approvalDate"
                  label="Approval Date"
                  value={formData?.approvalDate || ""}
                  onChange={handleInputChange}
                />
              </CCol>
              <CCol md={6}>
                <CFormInput
                  type="text"
                  name="approverName"
                  label="Approver's Name"
                  value={formData?.approverName || ""}
                  onChange={handleInputChange}
                />
              </CCol>
            </CRow>

            <CRow className="mb-3">
              <CCol md={6}>
                <CFormInput
                  type="text"
                  name="approverSignature"
                  label="Approver's Signature"
                  value={formData?.approverSignature || ""}
                  onChange={handleInputChange}
                />
              </CCol>
              <CCol md={6}>
                <CFormInput
                  type="textarea"
                  name="commentsNotes"
                  label="Comments/Notes"
                  value={formData?.commentsNotes || ""}
                  onChange={handleInputChange}
                />
              </CCol>
            </CRow>

            <CRow className="mb-3">
              <CCol md={6}>
                <CFormInput
                  type="date"
                  name="modificationDate"
                  label="Modification Date"
                  value={formData?.modificationDate || ""}
                  onChange={handleInputChange}
                />
              </CCol>
              <CCol md={6}>
                <CFormInput
                  type="text"
                  name="modifiedBy"
                  label="Modified By"
                  value={formData?.modifiedBy || ""}
                  onChange={handleInputChange}
                />
              </CCol>
            </CRow>

            <CRow className="mb-3">
              <CCol md={6}>
                <CFormInput
                  type="textarea"
                  name="changeDescription"
                  label="Change Description"
                  value={formData?.changeDescription || ""}
                  onChange={handleInputChange}
                />
              </CCol>
              <CCol md={6}>
                <CFormInput
                  type="text"
                  name="status"
                  label="Status"
                  value={formData?.status || ""}
                  onChange={handleInputChange}
                />
              </CCol>
            </CRow>
          </CForm>
        );
      case "Activity Log":
        return (
          <CForm>
            {/* Activity Log Section */}
            <CRow className="mb-3">
              <CCol md={6} className="mb-3">
                <CFormInput
                  type="text"
                  name="initiator"
                  label="Initiator Name"
                  value={formData?.initiator || ""}
                  onChange={handleInputChange}
                />
              </CCol>
              <CCol md={6} className="mb-3">
                <CFormInput
                  type="date"
                  name="initiationDate"
                  label=" Date of Initiation"
                  value={formData?.initiationDate || ""}
                  onChange={handleInputChange}
                />
              </CCol>
              <CCol md={6} className="mb-3">
                <CFormInput
                  type="text"
                  name="labTechnician"
                  label="Lab Technician Name"
                  value={formData?.labTechnician || ""}
                  onChange={handleInputChange}
                />
              </CCol>
              <CCol md={6} className="mb-3">
                <CFormInput
                  type="date"
                  name="labTechnicianDate"
                  label="Date of Lab Technician Review"
                  value={formData?.labTechnicianDate || ""}
                  onChange={handleInputChange}
                />
              </CCol>{" "}
              <CCol md={6} className="mb-3">
                <CFormInput
                  type="text"
                  name="supervisor"
                  label="Supervisor Name"
                  value={formData?.supervisor || ""}
                  onChange={handleInputChange}
                />
              </CCol>{" "}
              <CCol md={6} className="mb-3">
                <CFormInput
                  type="date"
                  name="supervisionDate"
                  label="Date of Supervision Review "
                  value={formData?.supervisionDate || ""}
                  onChange={handleInputChange}
                />
              </CCol>
              <CCol md={6} className="mb-3">
                <CFormInput
                  type="text"
                  name="qaReview"
                  label="QA Review"
                  value={formData?.qaReview || ""}
                  onChange={handleInputChange}
                />
              </CCol>
              <CCol md={6} className="mb-3">
                <CFormInput
                  type="date"
                  name="qaReviewDate"
                  label="Date of QA Review"
                  value={formData?.qaReviewDate || ""}
                  onChange={handleInputChange}
                />
              </CCol>
            </CRow>
          </CForm>
        );
      default:
        return null;
    }
  };

  const handleStageChange = () => {
    fetchData();
  };
  return (
    <>
      {id ? (
        <ProgressBar2
          stage={Number(formData.stage)}
          sampleId={id}
          onStageClick={handleStageChange}
        />
      ) : (
        ""
      )}
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
                activeTab === "Analyst Qualification" ? "primary" : "secondary"
              }
              onClick={() => handleTabClick("Analyst Qualification")}
              className={`transition-all duration-300 ${
                activeTab === "Analyst Qualification"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700"
              } hover:bg-blue-500 hover:text-white shadow-lg py-2 px-4 rounded-full`}
            >
              Analyst Qualification
            </CButton>

            <CButton
              color={activeTab === "Activity Log" ? "primary" : "secondary"}
              onClick={() => handleTabClick("Activity Log")}
              className={`transition-all duration-300 ${
                activeTab === "Activity Log"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700"
              } hover:bg-blue-500 hover:text-white shadow-lg py-2 px-4 rounded-full`}
            >
              Activity Log
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
              {id ? "Update" : "Save"}
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
    </>
  );
};

export default AnalystQualificationModal;
