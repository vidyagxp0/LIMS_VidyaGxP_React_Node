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
// import ProgressBar from "../../components/Workflow/ProgressBar";
import { ProgressBar3 } from "../../components/Workflow/ProgressBar2";

const ControlSampleModal = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState("Control Sample");
  const [isModalOpen, setIsModalOpen] = useState(false);
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
  });

  // console.log(formData, "L<>?L<>?L<>?L<>?L<>?L<>?L<>?L");

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
        `http://limsapi.vidyagxp.com/controlSample/get-control-sample/${id}`
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
      const response = await axios.put(
        `http://limsapi.vidyagxp.com/controlSample/edit-control-sample/${id}`,
        formData
      );
      if (response.status === 200) {
        toast.success("Data updated successfully.");
        setIsModalOpen(false);
        navigate("/control-sample");
      } else {
        toast.error("Failed to update Data.");
      }
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
        const response = await axios.post(
          `http://limsapi.vidyagxp.com/controlSample/create-control-sample`,
          formData
        );
        // console.log(response, "iddddddddddddddddddddddd");
        if (response.status === 200) {
          toast.success("Sample Workflow added successfully.");
          setIsModalOpen(false);
          navigate("/control-Sample");
        } else {
          toast.error("Failed to add Sample Workflow.");
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
                  name="expiryDate"
                  label="Expiry Date"
                  value={formData?.expiryDate || ""}
                  onChange={handleInputChange}
                />
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
                  name="ObservationDate"
                  label="Observation Date"
                  value={formData?.ObservationDate || ""}
                  onChange={handleInputChange}
                />
              </CCol>
              <CCol md={6}>
                <CFormInput
                  type="date"
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

            <CRow className="mb-3">
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
