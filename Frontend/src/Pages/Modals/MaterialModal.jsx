import {
  CButton,
  CFormInput,
  CModal,
  CModalBody,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";
import React, { useState } from "react";

const MaterialModal = ({ visible, closeModal, handleSubmit }) => {
  const [stockMaterial , setStockMaterial ] = useState({
    MaterialName : "",
    Description:"",
  })

  const handleChange = (field , value) => {
    const updatedData = {...stockMaterial, [field]:value }
    setStockMaterial(updatedData)
    console.log(updatedData)
  };

  const handleFormSubmit = (e) => {
    handleSubmit({...stockMaterial});
    closeModal();
  }


  return (
    <div>
      <CModal
        alignment="center"
        visible={visible}
        onClose={closeModal}
        size="xl"
      >
        <CModalHeader>
          <CModalTitle>Add Material</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CFormInput
            label="Material Name"
            className="mb-3"
            type="text"
            placeholder="Material Name"
            // name="materialName"
            value={stockMaterial.MaterialName}
            onChange={(e)=>handleChange("MaterialName",e.target.value)}
          />
          <CFormInput
            label="Description"
            className="mb-3"
            type="text"
            placeholder="Description"
            // name="description"
            value={stockMaterial.Description}
            onChange={(e)=>handleChange("Description",e.target.value)}
          />

          <div className="d-flex gap-3 mt-">
            <CButton color="light w-50" onClick={closeModal}>
              &lt; Back
            </CButton>
            <CButton color="primary w-50" onClick={handleFormSubmit}>Add Material</CButton>
          </div>
        </CModalBody>
      </CModal>
    </div>
  );
};

export default MaterialModal;
