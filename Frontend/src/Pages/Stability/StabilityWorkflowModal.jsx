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

const StabilityWorkFlow = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState("Sample Registration");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { id } = useParams();
  //   console.log(id);

  const [formData, setFormData] = useState({
    samplePlanId: "",
    sampleId: "",
    sampleName: "",
    sampleType: "",
    srSupportiveAttachment: "",
    qaSupportiveAttachment: "",
    productMaterialName: "",
    batchLotNumber: "",
    samplePriority: "",
    sampleQuantity: "",
    UOM: "",
    market: "",
    sampleBarCode: "",
    specificationId: "",
    specificationAttachment: null,
    stpId: "",
    stpAttachment: null,
    testName: "",
    testMethod: "",
    testParameter: "",
    testingFrequency: "",
    testingLocation: "",
    requiredInstrument: "",
    testGrouping: "",
    lsl: "",
    usl: "",
    testingDeadline: "",
    plannerName: "",
    sampleSource: "",
    plannedDate: "",
    labTechnician: "",
    sampleCostEstimation: "",
    resourceUtilization: "",
    sampleMovementHistory: "",
    assignedDepartment: "",
    sampleCollectionDate: "",
    srSupportiveAttachment: "",
    saSupportiveAttachment: "",
    siSupportiveAttachment: "",
    analysisType: "",
    analysisResult: "",
    analysisDate: "",
    testingStartDate: "",
    testingEndDate: "",
    delayJustification: "",
    testingOutCome: "",
    passFail: "",
    testPlanId: "",
    turnAroundTime: "",
    sampleRetestingDate: "",
    reviewDate: "",
    sampleStorageLocation: "",
    transportationMethod: "",
    samplePreparationMethod: "",
    samplePackagingDetail: "",
    sampleLabel: "",
    regulatoryRequirement: "",
    qualityControlCheck: "",
    controlSample: "",
    referenceSample: "",
    sampleIntegrityStatus: "",
    assignedDepartmentt: "",
    riskAssessment: "",
    supervisor: "",
    instrumentsReserved: "",
    labAvailability: "",
    sampleDate: "",
    // sampleMovementHistory: "",
    testingProgress: "",
    alertNotification: "",
    deviationLog: "",
    commentNotes: "",
    attachment: null,
    samplingFrequency: "",
    sampleDisposition: "",

    stabilityStudyType: "",
    stabilityStudyProtocol: "",
    stabilityProtocolApprovalDate: "",
    countryOfRegulatorySubmissions: "",
    ichZone: "",
    photoStabilityTestingResult: "",
    reConstitutionStability: "",
    testingInterval: "",
    shelfLifeRecommendation: "",

    reviewerApprover: "",
    reviewerComment: "",
    reviewDate: "",
    QaReviewerApprover: "",
    QaReviewerComment: "",
    QaReviewDate: "",

    qaReviewDate: "",
    qaReview: "",
    supervisionDate: "",
    supervisor: "",
    labTechnicianDate: "",
    labTechnician: "",
    initiationDate: "",
    initiator: "",
  });

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value, options } = e.target;

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

    if (name === "delayJustification" && value) {
      setError("");
    }
  };

  const [error, setError] = useState("");

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "High":
        return "red";
      case "Medium":
        return "orange";
      case "Low":
        return "green";
      default:
        return "black";
    }
  };

  const renderOptions = () => {
    let options = [];
    for (let i = 0; i <= 60; i++) {
      options.push(
        <option key={i} value={i}>
          {i} {i === 1 ? "month" : "months"}
        </option>
      );
    }
    return options;
  };

  const getCurrentDate = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0"); // Months are 0-based
    const dd = String(today.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  };

  useEffect(() => {
    const fetchData = async () => {
      if (!id) return;
      try {
        const response = await axios.get(
          `http://localhost:9000/get-Sample/${id}`
        );
        console.log(response.data);

        const responseData = Array.isArray(response.data)
          ? response.data
          : response.data.data;
        console.log(responseData);
        setFormData(responseData);
      } catch (error) {
        console.error("Error fetching ", error);
        toast.error("Failed to fetch ");
      }
    };

    fetchData();
  }, [id]);

  const handleEdit = async () => {
    try {
      const response = await axios.put(
        `http://localhost:9000/edit-sample/${id}`,
        formData
      );
      if (response.status === 200) {
        toast.success("Stability Workflow updated successfully.");
        setIsModalOpen(false);
        navigate("/sampleWorkflow");
      } else {
        toast.error("Failed to update Stability Workflow.");
      }
    } catch (error) {
      toast.error(
        "Error updating Stability Workflow: " +
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
          `http://localhost:9000/create-sample`,
          formData
        );
        if (response.status === 200) {
          toast.success("Stability Workflow added successfully.");
          setIsModalOpen(false);
          navigate("/sampleWorkflow");
        } else {
          toast.error("Failed to add Stability Workflow.");
        }
      } catch (error) {
        toast.error(
          "Error adding Stability Workflow: " +
            (error.response?.data || error.message)
        );
      }
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
              <CCol
                md={12}
                style={{
                  marginBottom: "3px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ width: "100%" }}>
                  <CFormLabel htmlFor="samplePriority">
                    Sample Priority
                  </CFormLabel>
                  <CFormSelect
                    name="samplePriority"
                    value={formData.samplePriority || ""}
                    onChange={handleInputChange}
                  >
                    <option value="">Select Priority</option>

                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                  </CFormSelect>
                </div>

                {formData.samplePriority && (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginLeft: "45px",
                      marginTop: "25px",
                      padding: "5px 10px",
                      backgroundColor: "#f0f0f0",
                      borderRadius: "20px",
                      boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: getPriorityColor(
                          formData.samplePriority
                        ),
                        width: "40px",
                        height: "10px",
                        borderRadius: "5px",
                        marginRight: "10px",
                        transition: "background-color 0.3s ease",
                      }}
                    />
                    <span
                      style={{
                        fontWeight: "bold",
                        fontSize: "14px",
                        color: getPriorityColor(formData.samplePriority),
                      }}
                    >
                      {formData.samplePriority} Priority
                    </span>
                  </div>
                )}
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
                  name="UOM"
                  label="UOM"
                  value={formData.UOM || ""}
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
                  name="testParameter"
                  label="Test Parameters"
                  value={formData.testParameter || ""}
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
              {/* <CCol md={12}>
                <CFormSelect
                  name="requiredInstrument"
                  label="Required Instruments"
                  value={formData.requiredInstrument || []}
                  onChange={handleInputChange}
                  multiple
                >
                  <option value="">Select an Instrument</option>
                  {[
                    "High-Performance Liquid Chromatography (HPLC) – For analyzing the composition of compounds.",
                    "Gas Chromatography (GC) – For separating and analyzing volatile substances.",
                    "Ultraviolet-Visible Spectrophotometer (UV-Vis) – For measuring the absorbance of light in the UV and visible spectra.",
                    "Fourier Transform Infrared Spectroscopy (FTIR) – For identifying organic, polymeric, and in some cases, inorganic materials.",
                    "Atomic Absorption Spectrometer (AAS) – For detecting metals in samples.",
                    "Dissolution Testers – For assessing the rate of dissolution of tablets and capsules.",
                    "Potentiometer – For measuring pH, ionic concentration, and redox potential.",
                    "Moisture Analyzers – For determining the moisture content in products.",
                    "Conductivity Meter – For measuring the electrical conductivity in solutions.",
                    "Microbial Incubators – For cultivating and maintaining microbial cultures.",
                    "Autoclaves – For sterilizing lab equipment and samples.",
                    "Balances (Analytical and Microbalances) – For precise weighing of samples.",
                    "Karl Fischer Titrator – For measuring water content in samples.",
                    "Refractometer – For determining the refractive index of liquids.",
                    "Polarimeter – For measuring the optical rotation of a substance.",
                    "Melting Point Apparatus – For determining the melting point of substances.",
                    "Viscometer – For measuring the viscosity of liquid samples.",
                    "Thermal Analyzers (DSC/TGA) – For studying the thermal properties of materials.",
                    "X-Ray Diffraction (XRD) – For identifying crystalline structures of materials.",
                    "TOC Analyzer (Total Organic Carbon) – For detecting organic impurities in water and solutions.",
                    "Particle Size Analyzer – For measuring the distribution of particle sizes in a sample.",
                  ].map((instrument, index) => (
                    <option key={index} value={instrument}>
                      {instrument}
                    </option>
                  ))}
                </CFormSelect>
              </CCol> */}
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
                  min={getCurrentDate()}
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
                  name="sampleCostEstimation"
                  label="Sample Cost Estimation"
                  value={formData.sampleCostEstimation || ""}
                  onChange={handleInputChange}
                />
              </CCol>
            </CRow>
            <CRow>
              <CCol md={6}>
                <CFormInput
                  type="text"
                  name="resourceUtilization"
                  label="Resource Utilization"
                  value={formData.resourceUtilization || ""}
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
            <CCol md={12}>
              <CFormInput
                type="file"
                name="srSupportiveAttachment"
                label="Supportive Attachment"
                value={formData?.srSupportiveAttachment || ""}
                onChange={handleInputChange}
              />
            </CCol>
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
                <CFormLabel htmlFor="delayJustification">
                  Delay Justification <span style={{ color: "red" }}>*</span>
                </CFormLabel>
                <CFormTextarea
                  name="delayJustification"
                  value={formData.delayJustification || ""}
                  onChange={handleInputChange}
                  invalid={!!error}
                />
                {error && (
                  <div
                    style={{ color: "red", fontSize: "12px", marginTop: "5px" }}
                  >
                    {error}
                  </div>
                )}
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CCol md={6}>
                <CFormInput
                  type="text"
                  name="testingOutCome"
                  label="Testing Outcome"
                  value={formData.testingOutCome || ""}
                  onChange={handleInputChange}
                />
              </CCol>
              <CCol md={6}>
                <CFormSelect
                  name="passFail"
                  label="Pass/Fail"
                  value={formData.passFail || ""}
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
                  name="turnAroundTime"
                  label="Turnaround Time (TAT)"
                  value={formData.turnAroundTime || ""}
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
                  name="samplePackagingDetail"
                  label="Sample Packaging Details"
                  value={formData.samplePackagingDetail || ""}
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
                  name="regulatoryRequirement"
                  label="Regulatory Requirements"
                  value={formData.regulatoryRequirement || ""}
                  onChange={handleInputChange}
                />
              </CCol>
              <CCol md={6}>
                <CFormInput
                  name="qualityControlCheck"
                  label="Quality Control Checks"
                  value={formData.qualityControlCheck || ""}
                  onChange={handleInputChange}
                />
              </CCol>
              <CCol md={6}>
                <CFormInput
                  type="text"
                  name="controlSampleReference"
                  label="Control Sample Reference"
                  value={formData.controlSampleReference || ""}
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
                  name="assignedDepartmentt"
                  label="Assigned Department"
                  value={formData.assignedDepartmentt || ""}
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
              <CCol md={6}>
                <CFormInput
                  type="text"
                  name="instrumentsReserved"
                  label="Instruments Reserved"
                  value={formData.instrumentsReserved || ""}
                  onChange={handleInputChange}
                />
              </CCol>
              <CCol md={6}>
                <CFormInput
                  type="text"
                  name="labAvailability"
                  label="Lab Availability"
                  value={formData.labAvailability || ""}
                  onChange={handleInputChange}
                />
              </CCol>
              <CCol md={6}>
                <CFormInput
                  type="date"
                  name="sampleDate"
                  label="Sample Date"
                  value={formData.sampleDate || ""}
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
                  name="alertNotification"
                  label="Alerts/Notifications"
                  value={formData.alertNotification || ""}
                  onChange={handleInputChange}
                />
              </CCol>
              <CCol md={6}>
                <CFormTextarea
                  name="deviationLog"
                  label="Deviation Logs"
                  value={formData.deviationLog || ""}
                  onChange={handleInputChange}
                />
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CCol md={6}>
                <CFormTextarea
                  name="commentNotes"
                  label="Comments/Notes"
                  value={formData.commentNotes || ""}
                  onChange={handleInputChange}
                />
              </CCol>
              <CCol md={6}>
                <CFormInput
                  type="file"
                  name="attachment"
                  label="Attachment"
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
              <CCol md={12}>
                <CFormInput
                  type="file"
                  name="saSupportiveAttachment"
                  label="Supportive Attachment"
                  value={formData?.saSupportiveAttachment || ""}
                  onChange={handleInputChange}
                />
              </CCol>
            </CRow>
          </CForm>
        );
      case "Stability Information":
        return (
          <CForm>
            <CRow className="mb-3">
              <CCol md={6} className="mb-3">
                <CFormSelect
                  type="text"
                  name="stabilityStudyType"
                  label="Stability Study Type"
                  value={formData?.stabilityStudyType || ""}
                  onChange={handleInputChange}
                  options={[
                    "Select disposition",
                    { label: "Long Term", value: "longTerm" },
                    { label: "Accelerated", value: "accelerated" },
                    { label: "Intermediate", value: "intermediate" },
                  ]}
                />
              </CCol>
              <CCol md={6} className="mb-3">
                <CFormInput
                  type="file"
                  name="stabilityStudyProtocol"
                  label="Stability Study Protocol"
                  value={formData?.stabilityStudyProtocol || ""}
                  onChange={handleInputChange}
                />
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CCol md={6} className="mb-3">
                <CFormInput
                  type="date"
                  name="stabilityProtocolApprovalDate"
                  label="Stability Protocol Approval Date"
                  value={formData?.stabilityProtocolApprovalDate || ""}
                  onChange={handleInputChange}
                />
              </CCol>
              <CCol md={6} className="mb-3">
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
              <CCol md={6} className="mb-3">
                <CFormLabel htmlFor="ichZone">ICH Zone</CFormLabel>
                <CFormInput
                  type="number"
                  name="ichZone"
                  label="ICH Zone"
                  value={formData?.ichZone || ""}
                  onChange={handleInputChange}
                />
              </CCol>
              <CCol md={6} className="mb-3">
                <CFormInput
                  type="text"
                  name="photoStabilityTestingResult"
                  label="Photostability Testing Results"
                  value={formData?.photoStabilityTestingResult || ""}
                  onChange={handleInputChange}
                />
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CCol md={6} className="mb-3">
                <CFormInput
                  type="text"
                  name="reConstitutionStability"
                  label="Reconstitution Stability"
                  value={formData?.reConstitutionStability || ""}
                  onChange={handleInputChange}
                />
              </CCol>
              <CCol md={6} className="mb-3">
                <CFormLabel htmlFor="testingInterval">
                  Testing Interval (months)
                </CFormLabel>
                <CFormSelect
                  name="testingInterval"
                  value={formData?.testingInterval || ""}
                  onChange={handleInputChange}
                >
                  <option value="">Select Interval</option>
                  {renderOptions()}
                </CFormSelect>
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CCol md={6} className="mb-3">
                <CFormInput
                  type="text"
                  name="shelfLifeRecommendation"
                  label="Shelf Life Recommendation"
                  value={formData?.shelfLifeRecommendation || ""}
                  onChange={handleInputChange}
                />
              </CCol>
              <CCol md={12} className="mb-3">
                <CFormInput
                  type="file"
                  name="siSupportiveAttachment"
                  label="Supportive Attachment"
                  value={formData?.siSupportiveAttachment || ""}
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
              <CCol md={6} className="mb-3">
                <CFormInput
                  type="text"
                  name="reviewerApprover"
                  label="Reviewer/Approver"
                  value={formData?.reviewerApprover || ""}
                  onChange={handleInputChange}
                />
              </CCol>
              <CCol md={6} className="mb-3">
                <CFormInput
                  type="text"
                  name="reviewerComment"
                  label="Reviewer Comment"
                  value={formData?.reviewerComment || ""}
                  onChange={handleInputChange}
                />
              </CCol>
              <CCol md={6} className="mb-3">
                <CFormInput
                  type="date"
                  name="reviewDate"
                  label="Review Date"
                  value={formData?.reviewDate || ""}
                  onChange={handleInputChange}
                />
              </CCol>
              <CCol md={12} className="mb-3">
                <CFormInput
                  type="file"
                  name="revSupportiveAttachment"
                  label="Supportive Attachment"
                  value={formData?.srSupportiveAttachment || ""}
                  onChange={handleInputChange}
                />
              </CCol>
            </CRow>
          </CForm>
        );
      case "QA Review":
        return (
          <CForm>
            {/* QA Reviewer/Approver Section */}
            <CRow className="mb-3">
              <CCol md={6} className="mb-3">
                <CFormInput
                  type="text"
                  name="QaReviewerApprover"
                  label="QA Reviewer/Approver"
                  value={formData?.QaReviewerApprover || ""}
                  onChange={handleInputChange}
                />
              </CCol>
              <CCol md={6} className="mb-3">
                <CFormInput
                  type="text"
                  name="QaReviewerComment"
                  label="QA Reviewer Comment"
                  value={formData?.QaReviewerComment || ""}
                  onChange={handleInputChange}
                />
              </CCol>
              <CCol md={6} className="mb-3">
                <CFormInput
                  type="date"
                  name="QaReviewDate"
                  label="QA Review Date"
                  value={formData?.QaReviewDate || ""}
                  onChange={handleInputChange}
                />
              </CCol>
              <CCol md={12} className="mb-3">
                <CFormInput
                  type="file"
                  name="qaSupportiveAttachment"
                  label="Supportive Attachment"
                  value={formData?.qaSupportiveAttachment || ""}
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

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!formData.delayJustification) {
            setError("Delay Justification is required.");
            return;
          }
          handleSave();
        }}
      >
        <div className="flex space-x-4 mb-8">
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
            color={activeTab === "QA Review" ? "primary" : "secondary"}
            onClick={() => handleTabClick("QA Review")}
            className={`transition-all duration-300 ${
              activeTab === "QA Review"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700"
            } hover:bg-blue-500 hover:text-white shadow-lg py-2 px-4 rounded-full`}
          >
            QA Review
          </CButton>

          <CButton
            color={activeTab === "AActivity Log" ? "primary" : "secondary"}
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
  );
};

export default StabilityWorkFlow;