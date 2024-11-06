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
// import { toast } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import Barcode from "react-barcode";
import ProgressBar from "../../components/Workflow/ProgressBar";
import { BASE_URL } from "../../config.json";
import BarcodeExportButton from "./BarcodeExportButton";
import TestParametersTable from "./TestParametersTable";
import ToastContainer from "../../components/HotToaster/ToastContainer";

const SampleWorkflowModal = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState("Sample Registration");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { id } = useParams();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [testParameters, setTestParameters] = useState([]);
  const [user, setUserRoles] = useState();

  const handleAddRow = () => {
    setTestParameters([
      ...testParameters,
      { sno: "", testParameter: "", usl: "", lsl: "", result: "", remarks: "" },
    ]);
  };

  const handleRowChange = (index, e) => {
    const { name, value } = e.target;

    if (Array.isArray(testParameters)) {
      const updatedRows = testParameters.map((row, idx) =>
        idx === index ? { ...row, [name]: value } : row
      );
      setTestParameters(updatedRows);
      console.log(updatedRows, "UPUPUPUP");
    } else {
      console.error("testParameters is not an array:", testParameters);
    }
  };

  const [formData, setFormData] = useState({
    types: "sample",
    stage: "1",
    samplePlanId: 1000,
    sampleId: "",
    sampleName: "",
    sampleType: "",
    srSupportiveAttachment: null,
    qaSupportiveAttachment: null,
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
    requiredInstrument: [],
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
    siSupportiveAttachment: null,
    saSupportiveAttachment: null,
    srSupportiveAttachment: null,
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
    suSupportiveAttachment: "",

    qaReviewDate: "",
    qaReview: "",
    supervisionDate: "",
    supervisor: "",
    labTechnicianDate: "",
    labTechnician: "",
    initiationDate: "",
    initiator: "",
    testParameters: [],
  });
  console.log(testParameters, "TTTTRRREE");

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
    } else if (e.target.type === "file") {
      // Handle file input
      setFormData((prevData) => ({
        ...prevData,
        [name]: files[0], // Store the first file selected
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

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const getCurrentDate = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0"); // Months are 0-based
    const dd = String(today.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  };

  // useEffect(() => {
  //   const storedTestParameters = JSON.parse(
  //     localStorage.getItem("testParameters")
  //   );
  //   if (storedTestParameters) {
  //     setTestParameters(storedTestParameters);
  //     console.log(storedTestParameters, "testParameters from localStorage");
  //   }
  // }, []);

  const fetchData = async () => {
    if (!id) return;
    try {
      const response = await axios.get(
        `https://limsapi.vidyagxp.com/get-Sample/${id}/sample`
      );
      // console.log(response.data);

      const responseData = Array.isArray(response.data)
        ? response.data
        : response.data.data;

      const testParamterResponse = responseData.testParameters[1];
      const fetchedData = JSON.parse(testParamterResponse);

      setTestParameters(fetchedData.length > 0 ? fetchedData : []);
      setFormData((prevData) => ({
        ...prevData,
        ...responseData,
        testParameters: responseData.testParameters || [], // Ensure testParameters are set
      }));
    } catch (error) {
      console.error("Error fetching ", error);
      toast.error("Failed to fetch ");
    }
  };
  useEffect(() => {
    fetchData();
  }, [id]);

  const handleEdit = async (formDataToSend) => {
    try {
      const response = await toast.promise(
        axios.put(
          `https://limsapi.vidyagxp.com/edit-sample/${id}/sample`,
          formDataToSend,
          { headers: { "Content-Type": "multipart/form-data" } }
        ),
        {
          loading: "Updating Sample Workflow...",
          success: <b>Data updated successfully.</b>,
          error: <b>Failed to update Data.</b>,
        }
      );

      if (response.status === 200) {
        setIsModalOpen(false);
        navigate("/sampleWorkflow");
      }
    } catch (error) {
      toast.error(
        "Error updating Sample Workflow: " +
          (error.response?.data || error.message)
      );
    }
  };

  const handleSave = async () => {
    const formDataToSend = new FormData();

    // Append all form data to FormData object
    for (const key in formData) {
      if (Array.isArray(formData[key])) {
        formDataToSend.append(key, JSON.stringify(formData[key])); // Convert arrays to JSON strings
      } else {
        formDataToSend.append(key, formData[key]);
      }
    }

    // Manually append the test parameters as an array of objects, if applicable
    if (testParameters && testParameters.length > 0) {
      formDataToSend.append("testParameters", JSON.stringify(testParameters));
    }

    try {
      let updatedData;

      if (id) {
        // Update existing data without toast notification
        updatedData = await handleEdit(formDataToSend);
      } else {
        // Add new data with a toast notification
        const response = await toast.promise(
          axios.post(
            `https://limsapi.vidyagxp.com/create-sample`,
            formDataToSend,
            {
              headers: { "Content-Type": "multipart/form-data" },
            }
          ),
          {
            loading: "Saving Sample Workflow...",
            success: <b>Data added successfully.</b>,
            error: <b>Failed to add Data.</b>,
          }
        );
        updatedData = response.data; // Store response data for newly created item
      }

      // Update formData with the latest data from the server response
      setFormData(updatedData);
      setIsModalOpen(false);
      navigate("/sampleWorkflow");
    } catch (error) {
      console.error("Error uploading file:", error);
      toast.error(
        "Failed to upload file: " + (error.response?.data || error.message)
      );
    }
  };

  const FetchUserRoles = async () => {
    if (id) {
      const userId = localStorage.getItem("user_id");

      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          `https://limsapi.vidyagxp.com/admin/get-user/${userId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        // console.log(response, "dsaadesz");

        // Set user roles
        const roles = response.data.response.UserRoles;
        setUserRoles(roles);

        // Extract the username
        const username = response.data.response.name;

        // Check if the user has the Fullpermission role
        const hasFullPermission = roles.some(
          (role) => role.role === "Fullpermission"
        );

        // Set form data based on roles
        roles.forEach((role) => {
          switch (role.role) {
            case "Initiator":
              setFormData((prevData) => ({
                ...prevData,
                initiator: username,
              }));
              break;
            case "Lab Technician":
              setFormData((prevData) => ({
                ...prevData,
                labTechnician: username,
              }));
              break;
            case "Supervisor":
              setFormData((prevData) => ({
                ...prevData,
                supervisor: username,
              }));
              break;
            case "Reviewer":
              setFormData((prevData) => ({
                ...prevData,
                qaReview: username,
              }));
              break;
            case "Approver":
              setFormData((prevData) => ({
                ...prevData,
                approver: username,
              }));
              break;
            case "Viewonly":
              break;
            case "Fullpermission":
              setFormData((prevData) => ({
                ...prevData,
                initiator: username,
                labTechnician: username,
                supervisor: username,
                qaReview: username,
                approver: username,
              }));
              break;
            default:
              break;
          }
        });
      } catch (error) {
        console.error(error);
      }
    }
  };

  useEffect(() => {
    FetchUserRoles();
  }, []);

  const renderFields = (tab) => {
    switch (tab) {
      case "Sample Registration":
        return (
          <CForm>
            <CRow className="mb-3">
              <CCol md={6}>
                <CFormInput
                  type="number"
                  name="samplePlanId"
                  label="Sample Plan ID"
                  value={formData?.samplePlanId || 1000}
                  onChange={handleInputChange}
                  min={1000}
                />
              </CCol>
              <CCol md={6}>
                <CFormInput
                  type="number"
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
              <CCol md={6}>
                <CFormSelect
                  type="text"
                  name="UOM"
                  label="UOM"
                  value={formData.UOM || ""}
                  onChange={handleInputChange}
                  options={[
                    "Select Unit",
                    { label: "gm", value: "Gm" },
                    { label: "ml", value: "Ml" },
                  ]}
                />
              </CCol>
            </CRow>
            <CRow className="mb-3"></CRow>
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
                <CFormLabel>Sample Barcode</CFormLabel>

                <CFormInput
                  type="text"
                  name="sampleBarCode"
                  label=""
                  value={""}
                  disabled
                />
                <div>
                  <BarcodeExportButton />
                </div>
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
                <CFormSelect
                  type="text"
                  name="testParameter"
                  label="Test Parameters"
                  value={formData.testParameter || ""}
                  onChange={handleInputChange}
                  options={[
                    "Select Tests",
                    { label: "Description", value: "Description" },
                    {
                      label: "Weight Of 20 tablets",
                      value: "Weight Of 20 tablets",
                    },
                    {
                      label: "Average Weight ( mg )",
                      value: "Average Weight ( mg )",
                    },
                    { label: "Thickness", value: "Thickness" },
                    {
                      label: "Disintigration Time",
                      value: "Disintigration Time",
                    },
                    { label: "Hardness", value: "Hardness" },
                    { label: "Diameter", value: "Diameter" },
                    { label: "Friability", value: "Friability" },
                  ]}
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

              <CCol md={12} className="mt-3 relative">
                <label
                  htmlFor="requiredInstrument"
                  className="block text-gray-700 text-sm font-medium mb-2"
                >
                  Select Required Instruments
                </label>

                <div
                  className="form-control flex items-center flex-wrap gap-2 p-3 border border-gray-300 rounded-md cursor-pointer shadow-sm hover:shadow-md transition-shadow duration-300 ease-in-out"
                  onClick={toggleDropdown} // Toggle dropdown on input click
                >
                  {Array.isArray(formData.requiredInstrument) &&
                  formData.requiredInstrument.length > 0 ? (
                    formData?.requiredInstrument?.map((instrument, index) => (
                      <span
                        key={index}
                        className="bg-blue-100 text-blue-800 px-2 py-1 rounded flex items-center space-x-2"
                      >
                        {instrument}
                        <button
                          type="button"
                          className="text-red-500 hover:text-red-700"
                          onClick={(e) => {
                            e.stopPropagation(); // Prevent closing dropdown when removing item
                            setFormData((prevData) => ({
                              ...prevData,
                              requiredInstrument:
                                prevData.requiredInstrument.filter(
                                  (item) => item !== instrument
                                ),
                            }));
                          }}
                        >
                          &times;
                        </button>
                      </span>
                    ))
                  ) : (
                    <p className="text-gray-500">Select Instruments...</p> // Placeholder when nothing is selected
                  )}
                </div>

                {dropdownOpen && (
                  <div className="absolute left-0 right-0 mt-2 bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-y-auto z-10 transition-all duration-200 ease-in-out">
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
                      <div
                        key={index}
                        className="px-4 py-2 hover:bg-blue-100 cursor-pointer transition-colors duration-150"
                        onClick={() => {
                          if (
                            !formData.requiredInstrument.includes(instrument)
                          ) {
                            setFormData((prevData) => ({
                              ...prevData,
                              requiredInstrument: [
                                ...prevData.requiredInstrument,
                                instrument,
                              ],
                            }));
                          }
                          setDropdownOpen(false);
                        }}
                      >
                        {instrument}
                      </div>
                    ))}
                  </div>
                )}
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
                  onFocus={(e) => e.target.showPicker()}
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
                  onFocus={(e) => e.target.showPicker()}
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
              <CRow className="mt-3 mb-3">
                <CCol md={6}>
                  <CFormInput
                    type="text"
                    name="testGrouping"
                    label="Test Grouping"
                    value={formData.testGrouping || ""}
                    onChange={handleInputChange}
                  />
                </CCol>
                <CCol md={6}>
                  <CFormInput
                    type="date"
                    onFocus={(e) => e.target.showPicker()}
                    name="sampleCollectionDate"
                    label="Sample Collection Date"
                    value={formData.sampleCollectionDate || ""}
                    onChange={handleInputChange}
                  />
                </CCol>
              </CRow>
            </CRow>
            <CCol md={12}>
              <CFormInput
                type="file"
                name="suSupportiveAttachment"
                label="Supportive Attachment"
                // value={formData?.srSupportiveAttachment || ""}
                onChange={handleInputChange}
              />
            </CCol>
          </CForm>
        );
      case "Sample Analysis":
        return (
          <CForm>
            <CButton color="primary" onClick={handleAddRow}>
              Add Test Parameters Row
            </CButton>
            {/* {console.log(testParameters, "TESTPARAMETER")} */}
            {/* Use the TestParametersTable component */}
            <TestParametersTable
              testParameters={testParameters}
              handleRowChange={handleRowChange}
              value={formData?.testParameters || ""}
              onChange={handleInputChange}
            />
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
                  onFocus={(e) => e.target.showPicker()}
                  name="analysisDate"
                  label="Analysis Date"
                  value={formData.analysisDate || ""}
                  onChange={handleInputChange}
                />
              </CCol>
              <CCol md={6}>
                <CFormInput
                  type="date"
                  onFocus={(e) => e.target.showPicker()}
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
                  onFocus={(e) => e.target.showPicker()}
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
                    { label: "Pass", value: "Pass" },
                    { label: "Fail", value: "Fail" },
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
                  onFocus={(e) => e.target.showPicker()}
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
                  onFocus={(e) => e.target.showPicker()}
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
                  onFocus={(e) => e.target.showPicker()}
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
              <CCol md={12}>
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
                  // value={formData?.saSupportiveAttachment || ""}
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
                  // value={formData?.stabilityStudyProtocol || ""}
                  onChange={handleInputChange}
                />
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CCol md={6} className="mb-3">
                <CFormInput
                  type="date"
                  onFocus={(e) => e.target.showPicker()}
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
                  // value={formData?.siSupportiveAttachment || ""}
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
                <CFormTextarea
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
                  onFocus={(e) => e.target.showPicker()}
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
                  // value={formData?.srSupportiveAttachment || ""}
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
                <CFormTextarea
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
                  onFocus={(e) => e.target.showPicker()}
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
                  // value={formData?.qaSupportiveAttachment || ""}
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
                  disabled
                />
              </CCol>
              <CCol md={6} className="mb-3">
                <CFormInput
                  type="date"
                  onFocus={(e) => e.target.showPicker()}
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
                  disabled
                />
              </CCol>
              <CCol md={6} className="mb-3">
                <CFormInput
                  type="date"
                  onFocus={(e) => e.target.showPicker()}
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
                  disabled
                />
              </CCol>{" "}
              <CCol md={6} className="mb-3">
                <CFormInput
                  type="date"
                  onFocus={(e) => e.target.showPicker()}
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
                  disabled
                />
              </CCol>
              <CCol md={6} className="mb-3">
                <CFormInput
                  type="date"
                  onFocus={(e) => e.target.showPicker()}
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
    FetchUserRoles();
  };
  const [loading, setLoading] = useState(false);
  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1300);
  };

  return (
    <>
      <ToastContainer />
      {id ? (
        <ProgressBar
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
              color={
                activeTab === "Supervisor Review" ? "primary" : "secondary"
              }
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
              className="bg-green-600 text-white px-6 py-2 w-[100px] rounded-md shadow-lg hover:bg-green-500 transition-all duration-300 flex items-center"
              onClick={handleClick}
            >
              {id ? "Update" : "Save"}
              {loading && (
                <div className="h-4 w-4 border-t-2 border-b-2 border-gray-800 animate-spin rounded-full ml-3"></div>
              )}
            </CButton>
            <CButton
              onClick={() => {
                navigate(-1);
              }}
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

export default SampleWorkflowModal;
