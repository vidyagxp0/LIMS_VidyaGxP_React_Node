import {
  CButton,
  CFormInput,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";
import React, { useEffect, useState} from "react";

const TemplateModal = ({ visible, closeModal, handleSubmit }) => {

    const [template, setTemplate] = useState({
      analystTemplate:"",
      uniqueCode:"",
      noOfCheckItems:""
     });
     const handleInputChange = (field, value) => {
      const updatedData = { ...template, [field]: value };
      setTemplate(updatedData);
      console.log(updatedData);
    };
  
    const handleFormSubmit = () => {
      handleSubmit({ ...template });
      closeModal();
      resetForm();
    };
  
    const resetForm = () => {
      setTemplate({
        analystTemplate:"",
      uniqueCode:"",
      noOfCheckItems:""
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
        size="lg"
      >
        <CModalHeader>
          <CModalTitle>Add Analyst Template</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p className="my-3 fs-5">
            Add information and add new Analyst Template
          </p>
          <CFormInput
            className="mb-3"
            type="text"
            label={<>Analyst Template</>}
            placeholder="Analyst Template"
            value={template.analystTemplate}
            onChange={(e) => handleInputChange("analystTemplate", e.target.value)}
            required
          />

          <CFormInput
            className="mb-3"
            type="text"
            label={<>Unique Code</>}
            placeholder="Unique Code"
            value={template.uniqueCode}
            onChange={(e) => handleInputChange("uniqueCode", e.target.value)}
            required
          />

          <CFormInput
            className="mb-3"
            type="text"
            label="No. of Check Items"
            placeholder="No. of Check Items"
            value={template.noOfCheckItems}
            onChange={(e) => handleInputChange("noOfCheckItems", e.target.value)}
            required
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

export default TemplateModal;
