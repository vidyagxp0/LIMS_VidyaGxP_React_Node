import {
  CButton,
  CFormInput,
  CFormTextarea,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";
import React, { useEffect, useState } from "react";

const VolumeSolutionModal = ({ visible, closeModal, handleSubmit }) => {
  const [volumeData, setVolumeData] = useState({
    name: "",
    prefix: "",
    theoreticalStrength: "",
    uom: "",
    solutionExpiryPeriod: "",
    standardizationSchedule: "",
    preparationMethod: "",
    comments: "",
  });

  const handleInputChange = (field, value) => {
    const updatedData = { ...volumeData, [field]: value };
    setVolumeData(updatedData);
    console.log(updatedData);
  };

  const handleFormSubmit = () => {
    handleSubmit({ ...volumeData });
    closeModal();
  };

  const resetForm = () => {
    setVolumeData({
      name: "",
      prefix: "",
      theoreticalStrength: "",
      uom: "",
      solutionExpiryPeriod: "",
      standardizationSchedule: "",
      preparationMethod: "",
      comments: "",
    });
  };

  useEffect(() => {
    if (visible) {
      resetForm();
    }
  }, [visible]);

  return (
    <div>
      <CModal
        alignment="center"
        visible={visible}
        onClose={closeModal}
        size="xl"
      >
        <CModalHeader>
          <CModalTitle>Add Solutions</CModalTitle>
        </CModalHeader>
        <p style={{ marginLeft: "15px" }}>Add information and Add Solutions</p>
        <CModalBody>
          <CFormInput
            type="text"
            label="Name"
            placeholder=""
            value={volumeData.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
            className="custom-placeholder mb-3"
          />
          <CFormInput
            type="text"
            label="Prefix"
            placeholder="Bottle / vial"
            value={volumeData.prefix}
            onChange={(e) => handleInputChange("prefix", e.target.value)}
            className="custom-placeholder mb-3"
          />
          <CFormInput
            type="text"
            label="Theoretical Strength"
            placeholder="Theoretical Strength"
            value={volumeData.theoreticalStrength}
            onChange={(e) =>
              handleInputChange("theoreticalStrength", e.target.value)
            }
            className="custom-placeholder mb-3"
          />
          <CFormInput
            type="number"
            label="UOM"
            placeholder="UOM"
            value={volumeData.uom}
            onChange={(e) => handleInputChange("uom", e.target.value)}
            className="custom-placeholder mb-3"
          />
          <CFormTextarea
            type="text"
            label="Solution Expiry Period"
            placeholder="Solution Expiry Period"
            value={volumeData.solutionExpiryPeriod}
            onChange={(e) =>
              handleInputChange("solutionExpiryPeriod", e.target.value)
            }
            className="custom-placeholder mb-3"
          />
          <CFormInput
            type="text"
            label="Standardization Schedule"
            placeholder="Lot Quantity"
            value={volumeData.standardizationSchedule}
            onChange={(e) =>
              handleInputChange("standardizationSchedule", e.target.value)
            }
            className="custom-placeholder mb-3"
          />
          <CFormInput
            type="date"
            onFocus={(e) => e.target.showPicker()}
            label="Preparation Method"
            placeholder=""
            value={volumeData.preparationMethod}
            onChange={(e) =>
              handleInputChange("preparationMethod", e.target.value)
            }
            className="custom-placeholder mb-3"
          />

          <CFormInput
            type="text"
            label="Comments"
            placeholder="Comments"
            value={volumeData.comments}
            onChange={(e) => handleInputChange("comments", e.target.value)}
            className="mb-3"
          />
        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={closeModal}>
            Cancel
          </CButton>
          <CButton
            onClick={handleFormSubmit}
            style={{ background: "#0F93C3", color: "white" }}
          >
            Add Solution
          </CButton>
        </CModalFooter>
      </CModal>
    </div>
  );
};

export default VolumeSolutionModal;
