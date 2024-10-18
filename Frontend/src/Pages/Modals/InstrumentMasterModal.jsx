/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import {
  CButton,
  CCol,
  CFormCheck,
  CFormInput,
  CFormSelect,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CRow,
} from "@coreui/react";
import { FaTrash } from "react-icons/fa";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { toast } from "react-toastify";
import axios from "axios";
import { BASE_URL } from "../../config.json";


const InstrumentMasterModal = ({ visible, closeModal, handleSubmit, addRow }) => {
  const [fields, setFields] = useState([]);

  const addFields = () => {
    setFields([...fields, { id: Date.now(), value1: "", value2: "" }]);
  };

  const removeField = (id) => {
    setFields(fields.filter((field) => field.id !== id));
  };

  const handleFieldChange = (id, value1, value2) => {
    setFields(
      fields.map((field) =>
        field.id === id ? { ...field, value1, value2 } : field
      )
    );
  };

  const [instrumentData, setInstrumentData] = useState({
    Category: "",
    instrumentCategoryDescription: "",
    Instrument: "",
    InstrumentId: "",
    Made: "",
    Model: "",
    fields: [],
    manufacturerSerialNo: "",
    capacitySize: "",
    equipNo: "",
    InstalledAt: "",
    installedOn: "",
    warrantyExpiresOn: "",
    suppliedBy: "",
    containsModule: "",
    sopNo: "",
    software: "",
    description: "",
  });

  const resetForm = () => {
    setInstrumentData({
      Category: "",
      instrumentCategoryDescription: "",
      Instrument: "",
      InstrumentId: "",
      Made: "",
      Model: "",
      fields: [],
      manufacturerSerialNo: "",
      capacitySize: "",
      equipNo: "",
      InstalledAt: "",
      installedOn: "",
      warrantyExpiresOn: "",
      suppliedBy: "",
      containsModule: "",
      sopNo: "",
      software: "",
      description: "",
    });
  };

  useEffect(() => {
    if (visible) {
      resetForm();
    }
  }, [visible]);

  const handleInputChange = (field, value) => {
    const updatedData = { ...instrumentData, [field]: value };
    setInstrumentData(updatedData);
  };

  // !+++++++++++++++++++++++
  const handleFormSubmit = async () => {
    const instrumentDetails = {
      ...instrumentData,
      fields,
      addDate: new Date().toISOString().split("T")[0],
      status: instrumentData.status || "Active",
    };
    try {
      const response = await axios.post(
        `${BASE_URL}/manage-lims/add/iMRegistration`,
        instrumentDetails
      );
      console.log(response,"000000000000000000000000000")
      if (response.status === 200) {
        toast.success("Instrument added successfully.");
        fetchProductData();
        closeModal();
      } else {
        toast.error("Failed to add Instrument.");
      }
    } catch (error) {
      toast.error(
        "Error adding instrument: " + (error.response?.data || error.message)
      );
    }
  };

  const handleAddInstrumentRegistration = (e) => {

    e.preventDefault();
    axios
      .post(`http://localhost:9000/manage-lims/add/iMRegistration`,instrumentData)
      .then((response) => {
        toast.success(response.data.message || "Instrument Data added successfully!")
        addRow(instrumentData);
        closeModal()
      })
      .catch((err) => {
        console.error(err);
        toast.error("Instrument Data Already Registered");
      });
  };


  return (
    <div>
      <CModal
        alignment="center"
        visible={visible}
        onClose={closeModal}
        size="lg"
      >
        <CModalHeader>
          <CModalTitle>Add Instrument</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p>Add information and register new Instrument</p>
          <CFormSelect
            className="mb-3"
            label="Instrument Category"
            value={instrumentData.Category}
            onChange={(e) => handleInputChange("Category", e.target.value)}
          >
            <option value="">Select...</option>
            <option value="chromatography">chromatography</option>
            <option value="weighing balance">weighing balance</option>
          </CFormSelect>
          <CFormInput
            className="mb-3"
            type="text"
            label="Instrument Category Description"
            placeholder="chroma"
            value={instrumentData.instrumentCategoryDescription}
            onChange={(e) =>
              handleInputChange("instrumentCategoryDescription", e.target.value)
            }
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Instrument"
            placeholder="Instrument"
            value={instrumentData.Instrument}
            onChange={(e) => handleInputChange("Instrument", e.target.value)}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Instrument ID"
            placeholder="Instrument ID"
            value={instrumentData.InstrumentId}
            onChange={(e) => handleInputChange("InstrumentId", e.target.value)}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Make"
            placeholder="Make"
            value={instrumentData.Made}
            onChange={(e) => handleInputChange("Made", e.target.value)}
          />
          <CRow className="d-flex align-items-center justify-content-center">
            <CCol sm={8}>
              <CFormInput
                className="mb-3"
                type="text"
                label="Model"
                placeholder="Model"
                value={instrumentData.Model}
                onChange={(e) => handleInputChange("Model", e.target.value)}
              />
            </CCol>
            <CCol sm={4}>
              <CButton
                className="bg-info text-white mt-4 mb-3"
                onClick={addFields}
              >
                Add Fields
              </CButton>
            </CCol>
          </CRow>
          {fields.map((field) => (
            <CRow key={field.id} className="align-items-center mb-3">
              <CCol>
                <CFormInput
                  type="text"
                  label="Field"
                  placeholder="Field Name"
                  value={field.value1}
                  onChange={(e) =>
                    handleFieldChange(field.id, e.target.value, field.value2)
                  }
                />
              </CCol>
              <CCol>
                <CFormInput
                  type="text"
                  label="Value"
                  placeholder="Field"
                  value={field.value2}
                  onChange={(e) =>
                    handleFieldChange(field.id, field.value1, e.target.value)
                  }
                />
              </CCol>
              <CCol xs="auto">
                <CButton color="danger" onClick={() => removeField(field.id)}>
                  <FaTrash />
                </CButton>
              </CCol>
            </CRow>
          ))}
          <CFormInput
            className="mb-3"
            type="text"
            label="Manufacturer's Serial No."
            placeholder="Manufacturer's Serial No."
            value={instrumentData.manufacturerSerialNo}
            onChange={(e) =>
              handleInputChange("manufacturerSerialNo", e.target.value)
            }
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Capacity Size"
            placeholder="Capacity Size"
            value={instrumentData.capacitySize}
            onChange={(e) => handleInputChange("capacitySize", e.target.value)}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Equip No."
            placeholder="Equip No."
            value={instrumentData.equipNo}
            onChange={(e) => handleInputChange("equipNo", e.target.value)}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Installed At"
            placeholder="Installed At"
            value={instrumentData.InstalledAt}
            onChange={(e) => handleInputChange("InstalledAt", e.target.value)}
          />
          <CFormInput
            type="date"
            label="Installed On"
            placeholder=" "
            value={instrumentData.installedOn}
            onChange={(e) => handleInputChange("installedOn", e.target.value)}
          />
          <CFormInput
            className="mb-3"
            type="date"
            label="Warranty Expires On"
            placeholder=" "
            value={instrumentData.warrantyExpiresOn}
            onChange={(e) =>
              handleInputChange("warrantyExpiresOn", e.target.value)
            }
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Supplied By"
            placeholder="Supplied By"
            value={instrumentData.suppliedBy}
            onChange={(e) => handleInputChange("suppliedBy", e.target.value)}
          />
          <label className="mb-3">Contains module?</label>
          <CFormCheck
            className="mb-3"
            type="radio"
            id="ContainsModuleYes"
            name="ContainsModule"
            label="Yes"
            value="Yes"
            checked={instrumentData.containsModule === "Yes"}
            onChange={(e) =>
              handleInputChange("containsModule", e.target.value)
            }
          />
          <CFormCheck
            className="mb-3"
            type="radio"
            id="ContainsModuleNo"
            name="ContainsModule"
            label="No"
            value="No"
            checked={instrumentData.containsModule === "No"}
            onChange={(e) =>
              handleInputChange("containsModule", e.target.value)
            }
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="SOP No."
            placeholder="SOP Number"
            value={instrumentData.sopNo}
            onChange={(e) => handleInputChange("sopNo", e.target.value)}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Software"
            placeholder="Software"
            value={instrumentData.software}
            onChange={(e) => handleInputChange("software", e.target.value)}
          />
          <div className="mb-3">
            <label>Description</label>
            <ReactQuill
              value={instrumentData.description}
              onChange={(content) => handleInputChange("description", content)}
            />
          </div>
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={closeModal}>
            Close
          </CButton>
          <CButton color="primary" onClick={handleAddInstrumentRegistration}>
            Save changes
          </CButton>
        </CModalFooter>
      </CModal>
    </div>
  );
};

export default InstrumentMasterModal;
