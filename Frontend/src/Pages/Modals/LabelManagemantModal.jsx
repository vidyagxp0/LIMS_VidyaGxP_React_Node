import {
  CButton,
  CFormCheck,
  CFormInput,
  CFormTextarea,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";
import React, { useEffect, useState } from "react";

const LabelManagemantModal = ({ visible, closeModal, handleSubmit }) => {
  const [labelManagement, setLabelManagement] = useState({
    label:"",
    Address:"",
    Logo:"",
    UM:"",
  })

  const handleInputChange = (field, value) => {
    const updatedData = { ...labelManagement, [field]: value };
    setLabelManagement(updatedData);
    console.log(updatedData);
  };

  const handleFormSubmit = () => {
    handleSubmit({ ...labelManagement });
    closeModal();
    resetForm();
  };

  const resetForm = () => {
    setLabelManagement({
      label:"",
      Address:"",
      Logo:"",
      UM:"",
    });
  };

  useEffect(() => {
    resetForm();
  }, []);

  return (
    <div>
      <CModal
        alignment="center"
        visible={visible}
        onClose={closeModal}
      >
        <CModalHeader>
          <CModalTitle>Add Label</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p>Add information and add new Label</p>
          <CFormInput
            className="mb-3"
            type="text"
            label={
              <>
                Label <span style={{ color: "red" }}>*</span>
              </>
            }
            placeholder="Enter Label"
            value={labelManagement.label}
            onChange={(e)=>handleInputChange("label",e.target.value)}
          />
          <CFormTextarea
            className="mb-3"
            type="text"
            label={
              <>
                Address <span style={{ color: "red" }}>*</span>
              </>
            }
            placeholder=" Address "
            value={labelManagement.Address}
            onChange={(e)=>handleInputChange("Address",e.target.value)}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label={
              <>
                logo <span style={{ color: "red" }}>*</span>
              </>
            }
            placeholder="logo"
            value={labelManagement.Logo}
            onChange={(e)=>handleInputChange("Logo",e.target.value)}
          />
          <label className="mb-2">
            UM <span style={{ color: "red" }}>*</span>
          </label>
          <CFormCheck
            className="mb-3"
            type="radio"
            id="UMCM"
            name="UM"
            label="CM"
            checked={labelManagement.UM === "CM"}
            onChange={(e)=>handleInputChange("UM","CM")}
          />
          <CFormCheck
            className="mb-3"
            type="radio"
            id="UMMM"
            name="UM"
            label="MM"
            checked={labelManagement.UM === "MM"}
            onChange={(e)=>handleInputChange("UM","MM")}
          />
        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={closeModal}>
            Back
          </CButton>
          <CButton className="bg-info text-white" onClick={handleFormSubmit}>Submit</CButton>
        </CModalFooter>
      </CModal>
    </div>
  );
};

export default LabelManagemantModal;
