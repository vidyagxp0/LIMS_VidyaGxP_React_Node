import {
  CButton,
  CFormInput,
  CFormSelect,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";
import React, { useState } from "react";
const VendorModal = ({ visible, closeModal, handleSubmit }) => {
  const [vendorData, setVendorData] = useState({
    ProductName: "",
    UniqueCode: "",
    VendorName: "",
    QualificationCriteria: "",
    Comments: "",
  });

  const handleInputChange = (field, value) => {
    setVendorData((prevData) => ({ ...prevData, [field]: value }));
  };

  const handleFormSubmit = () => {
    handleSubmit({ ...vendorData });
    closeModal();
  };

  return (
    <CModal alignment="center" visible={visible} onClose={closeModal} size="xl">
      <CModalHeader>
        <CModalTitle>Add Approved Vendor</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <p className="mb-3 fw-bold">
          Add information and add new approved vendor
        </p>
        <label>Product/Material Name</label>
        <CFormSelect
          className="mb-3"
          name="ProductName"
          placeholder="Select product"
          options={[
            { value: "Tadalafil", label: "Tadalafil" },
            { value: "Diclofenac Resinate", label: "Diclofenac Resinate" },
            {
              value: "Diclofenac Sodium (BromineFree)",
              label: "Diclofenac Sodium (BromineFree)",
            },
          ]}
          value={vendorData.ProductName}
          onChange={(e) => handleInputChange("ProductName", e.target.value)}
        />
        <CFormInput
          type="text"
          className="mb-3"
          label="Unique Code"
          name="UniqueCode"
          placeholder="Unique Code"
          value={vendorData.UniqueCode}
          onChange={(e) => handleInputChange("UniqueCode", e.target.value)}
        />
        <label>Vendor Name</label>
        <CFormSelect
          className="mb-3"
          name="VendorName"
          placeholder="Select vendor"
          options={[
            { value: "Aavis Pharmaceuticals", label: "Aavis Pharmaceuticals" },
            { value: "Diclofenac Resinate", label: "Diclofenac Resinate" },
            {
              value: "Diclofenac Sodium (BromineFree)",
              label: "Diclofenac Sodium (BromineFree)",
            },
          ]}
          value={vendorData.VendorName}
          onChange={(e) => handleInputChange("VendorName", e.target.value)}
        />
        <CFormInput
          type="text"
          className="mb-3"
          label="Qualification Criteria"
          name="QualificationCriteria"
          placeholder="Qualification Criteria"
          value={vendorData.QualificationCriteria}
          onChange={(e) =>
            handleInputChange("QualificationCriteria", e.target.value)
          }
        />
        <CFormInput
          type="text"
          className="mb-3"
          label="Comments If Any"
          name="Comments"
          placeholder="Comments If Any"
          value={vendorData.Comments}
          onChange={(e) => handleInputChange("Comments", e.target.value)}
        />
      </CModalBody>
      <CModalFooter>
        <CButton color="light" onClick={closeModal}>
          Back
        </CButton>
        <CButton color="primary" onClick={handleFormSubmit}>
          Add
        </CButton>
      </CModalFooter>
    </CModal>
  );
};

export default VendorModal;
