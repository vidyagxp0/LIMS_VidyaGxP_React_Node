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
import { useNavigate, useParams } from "react-router-dom";
import Barcode from "react-barcode";
// import ProgressBar from "../../components/Workflow/ProgressBar";
import { ProgressBar3 } from "../../components/Workflow/ProgressBar2";
import ToastContainer from "../../components/HotToaster/ToastContainer";
import toast from "react-hot-toast";
// import toast from "react-hot-toast";

const ControlSampleModal = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState("Control Sample");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [user, setUserRoles] = useState();

  const { id } = useParams();
  // console.log(id, "ididididididididiidioidiidid");

  const [formData, setFormData] = useState({
    checkbox: false,
    sno: "",
    sampleId: "",
    productMaterialName: "",
    productMaterialCode: "",
    sampleType: "",
    market: "",
    arNo: "",
    batchNo: "",
    mfgDate: "",
    expiryDate: "",
    quantity: "",
    quantityWithdrawn: "",
    currentQuantity: "",
    uom: "",
    storageLocation: "",
    storageCondition: "",
    visualInspectionSheduledOn: "",
    visualInspectionPerformedBy: "",
    anyAbnoramalObservation: "",
    ObservationDate: "",
    destructionDueOn: "",
    destroyedBy: "",
    neutralizingAgent: "",
    destructionDate: "",
    remarks: "",
    status: "",
    suSupportiveAttachment: "",
    requiredInstrument: [],
  });

  // console.log(formData, "L<>?L<>?L<>?L<>?L<>?L<>?L<>?L");

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

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
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
        `https://limsapi.vidyagxp.com/controlSample/get-control-sample/${id}`
      );
      // console.log(response.data);

      const responseData = Array.isArray(response.data)
        ? response.data
        : response.data.data;
      // console.log(responseData);
      setFormData(responseData);
      // console.log(formData.stage);
    } catch (error) {
      console.error("Error fetching ", error);
      toast.error("Failed to fetch ");
    }
  };
  useEffect(() => {
    fetchData();
  }, [id]);

  const handleEdit = async () => {
    try {
      const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

      await toast.promise(
        Promise.all([
          axios.put(
            `https://limsapi.vidyagxp.com/controlSample/edit-control-sample/${id}`,
            formData
          ),
          delay(1300),
        ]).then(([response]) => response),
        {
          loading: "Updating data...",
          success: <b>Data updated successfully.</b>,
          error: <b>Failed to update data.</b>,
        }
      );

      setIsModalOpen(false);
      navigate("/control-sample");
    } catch (error) {
      toast.error(
        "Error updating Data: " + (error.response?.data || error.message)
      );
    }
  };

  const handleSave = async () => {
    if (id) {
      await handleEdit();
    } else {
      try {
        const updatedFormData = {
          ...formData,
          status: "Under Initiation",
        };
        const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

        await toast.promise(
          Promise.all([
            axios.post(
              `https://limsapi.vidyagxp.com/controlSample/create-control-sample`,
              updatedFormData
            ),
            delay(1300),
          ]).then(([response]) => response),
          {
            loading: "Saving data...",
            success: <b>Data added successfully.</b>,
            error: <b>Failed to add Data.</b>,
          }
        );

        setIsModalOpen(false);
        navigate("/control-Sample");
      } catch (error) {
        toast.error(
          "Error adding Data: " + (error.response?.data || error.message)
        );
      }
    }
  };

  const renderFields = (tab) => {
    switch (tab) {
      case "Control Sample":
        return (
          <CForm>
            <CRow className="mb-3">
              <CCol md={6}>
                <CFormInput
                  type="number"
                  name="sampleId"
                  label="Sample ID"
                  value={formData?.sampleId || ""}
                  onChange={handleInputChange}
                />
              </CCol>
              <CCol md={6}>
                <CFormInput
                  type="text"
                  name="productMaterialName"
                  label="Product Name"
                  value={formData?.productMaterialName || ""}
                  onChange={handleInputChange}
                />
              </CCol>
            </CRow>

            <CRow className="mb-3">
              <CCol md={6}>
                <CFormInput
                  type="text"
                  name="productMaterialCode"
                  label="Product Code"
                  value={formData?.productMaterialCode || ""}
                  onChange={handleInputChange}
                />
              </CCol>
              <CCol md={6}>
                <CFormInput
                  type="text"
                  name="sampleType"
                  label="Sample Type"
                  value={formData?.sampleType || ""}
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
                  value={formData?.market || ""}
                  onChange={handleInputChange}
                />
              </CCol>
              <CCol md={6}>
                <CFormInput
                  type="text"
                  name="arNo"
                  label="AR No."
                  value={formData?.arNo || ""}
                  onChange={handleInputChange}
                />
              </CCol>
            </CRow>

            <CRow className="mb-3">
              <CCol md={6}>
                <CFormInput
                  type="text"
                  name="batchNo"
                  label="Batch No."
                  value={formData?.batchNo || ""}
                  onChange={handleInputChange}
                />
              </CCol>
              <CCol md={6}>
                <CFormInput
                  type="date"
                  onFocus={(e) => e.target.showPicker()}
                  name="mfgDate"
                  label="Manufacturing Date"
                  value={formData?.mfgDate || ""}
                  onChange={handleInputChange}
                />
              </CCol>
            </CRow>

            <CRow className="mb-3">
              <CCol md={6}>
                <CFormInput
                  type="date"
                  onFocus={(e) => e.target.showPicker()}
                  name="expiryDate"
                  label="Expiry Date"
                  value={formData?.expiryDate || ""}
                  onChange={handleInputChange}
                />
              </CCol>
              <CCol md={8} className="mt-1 relative p-2">
                <label
                  htmlFor="requiredInstrument"
                  className="block text-gray-700 text-sm font-medium mb-2"
                >
                  Select Required Instruments
                </label>

                <div
                  className="form-control flex items-center flex-wrap gap-2 p-2 border border-gray-300 rounded-md cursor-pointer shadow-sm hover:shadow-md transition-shadow duration-300 ease-in-out"
                  onClick={toggleDropdown} // Toggle dropdown on input click
                >
                  {formData.requiredInstrument &&
                  formData.requiredInstrument.length > 0 ? (
                    formData.requiredInstrument.map((instrument, index) => (
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
              <CCol md={6}>
                <CFormInput
                  type="text"
                  name="quantity"
                  label="Quantity"
                  value={formData?.quantity || ""}
                  onChange={handleInputChange}
                />
              </CCol>
            </CRow>

            <CRow className="mb-3">
              <CCol md={6}>
                <CFormInput
                  type="text"
                  name="quantityWithdrawn"
                  label="Quantity Withdrawn"
                  value={formData?.quantityWithdrawn || ""}
                  onChange={handleInputChange}
                />
              </CCol>
              <CCol md={6}>
                <CFormInput
                  type="text"
                  name="currentQuantity"
                  label="Current Quantity"
                  value={formData?.currentQuantity || ""}
                  onChange={handleInputChange}
                />
              </CCol>
            </CRow>

            <CRow className="mb-3">
              <CCol md={6}>
                <CFormInput
                  type="text"
                  name="uom"
                  label="Unit of Measurement (UOM)"
                  value={formData?.uom || ""}
                  onChange={handleInputChange}
                />
              </CCol>
              <CCol md={6}>
                <CFormInput
                  type="text"
                  name="storageLocation"
                  label="Storage Location"
                  value={formData?.storageLocation || ""}
                  onChange={handleInputChange}
                />
              </CCol>
            </CRow>

            <CRow className="mb-3">
              <CCol md={6}>
                <CFormInput
                  type="text"
                  name="storageCondition"
                  label="Storage Condition"
                  value={formData?.storageCondition || ""}
                  onChange={handleInputChange}
                />
              </CCol>
              <CCol md={6}>
                <CFormInput
                  type="date"
                  onFocus={(e) => e.target.showPicker()}
                  name="visualInspectionSheduledOn"
                  label="Visual Inspection Scheduled On"
                  value={formData?.visualInspectionSheduledOn || ""}
                  onChange={handleInputChange}
                />
              </CCol>
            </CRow>

            <CRow className="mb-3">
              <CCol md={6}>
                <CFormInput
                  type="text"
                  name="visualInspectionPerformedBy"
                  label="Visual Inspection Performed By"
                  value={formData?.visualInspectionPerformedBy || ""}
                  onChange={handleInputChange}
                />
              </CCol>
              <CCol md={6}>
                <CFormInput
                  type="text"
                  name="anyAbnoramalObservation"
                  label="Abnormal Observation"
                  value={formData?.anyAbnoramalObservation || ""}
                  onChange={handleInputChange}
                />
              </CCol>
            </CRow>

            <CRow className="mb-3">
              <CCol md={6}>
                <CFormInput
                  type="date"
                  onFocus={(e) => e.target.showPicker()}
                  name="ObservationDate"
                  label="Observation Date"
                  value={formData?.ObservationDate || ""}
                  onChange={handleInputChange}
                />
              </CCol>
              <CCol md={6}>
                <CFormInput
                  type="date"
                  onFocus={(e) => e.target.showPicker()}
                  name="destructionDueOn"
                  label="Destruction Due On"
                  value={formData?.destructionDueOn || ""}
                  onChange={handleInputChange}
                />
              </CCol>
            </CRow>

            <CRow className="mb-3">
              <CCol md={6}>
                <CFormInput
                  type="text"
                  name="destroyedBy"
                  label="Destroyed By"
                  value={formData?.destroyedBy || ""}
                  onChange={handleInputChange}
                />
              </CCol>
              <CCol md={6}>
                <CFormInput
                  type="text"
                  name="neutralizingAgent"
                  label="Neutralizing Agent"
                  value={formData?.neutralizingAgent || ""}
                  onChange={handleInputChange}
                />
              </CCol>
            </CRow>

            <CRow className="mb-3">
              <CCol md={6}>
                <CFormInput
                  type="date"
                  onFocus={(e) => e.target.showPicker()}
                  name="destructionDate"
                  label="Destruction Date"
                  value={formData?.destructionDate || ""}
                  onChange={handleInputChange}
                />
              </CCol>
              <CCol md={6}>
                <CFormInput
                  type="textarea"
                  name="remarks"
                  label="Remarks"
                  value={formData?.remarks || ""}
                  onChange={handleInputChange}
                />
              </CCol>
            </CRow>

            {/* <CRow className="mb-3">
              <CCol md={6}>
                <CFormInput
                  type="text"
                  name="status"
                  label="Status"
                  value={formData?.status || ""}
                  onChange={handleInputChange}
                />
              </CCol>
            </CRow> */}
            <CRow className="mb-3">
              <CCol md={6}>
                <CFormInput
                  type="file"
                  name="suSupportiveAttachment"
                  label="Supportive Attachment"
                  value={formData?.suSupportiveAttachment || ""}
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
                  label="Date of Initiation"
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
              </CCol>
              <CCol md={6} className="mb-3">
                <CFormInput
                  type="text"
                  name="supervisor"
                  label="Supervisor Name"
                  value={formData?.supervisor || ""}
                  onChange={handleInputChange}
                  disabled
                />
              </CCol>
              <CCol md={6} className="mb-3">
                <CFormInput
                  type="date"
                  onFocus={(e) => e.target.showPicker()}
                  name="supervisionDate"
                  label="Date of Supervision Review"
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
              <CCol md={6} className="mb-3">
                <CFormInput
                  type="text"
                  name="approver"
                  label="Approver Name"
                  value={formData?.approver || ""}
                  onChange={handleInputChange}
                  disabled
                />
              </CCol>
              {/* Add additional fields if necessary for other roles */}
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
  return (
    <>
      <ToastContainer />
      {id ? (
        <ProgressBar3
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
              color={activeTab === "Control Sample" ? "primary" : "secondary"}
              onClick={() => handleTabClick("Control Sample")}
              className={`transition-all duration-300 ${
                activeTab === "Control Sample"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700"
              } hover:bg-blue-500 hover:text-white shadow-lg py-2 px-4 rounded-full`}
            >
              Control Sample
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

export default ControlSampleModal;
