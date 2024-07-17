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
import React, { useEffect, useState } from "react";
const VendorModal = ({ visible, closeModal, handleSubmit }) => {
  const [vendorData, setVendorData] = useState({
    productName: [],
    UniqueCode: "",
    vendorName: [],
    QualificationCriteria: "",
    Comments: "",
  });

  const resetForm = () => {
    setVendorData({
      productName: [],
      UniqueCode: "",
      vendorName: [],
      QualificationCriteria: "",
      Comments: "",
    });
  };

  useEffect(() => {
    if (visible) {
      resetForm();
    }
  }, [visible]);

  const handleInputChange = (field, value) => {
    setVendorData((prevData) => ({ ...prevData, [field]: value }));
  };

  const handleFormSubmit = () => {
    handleSubmit({ ...vendorData });
    closeModal();
  };

  return (
    <CModal alignment="center" visible={visible} onClose={closeModal} size="lg">
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
          name="productName"
          placeholder="Select product"
          options={[
            { value: "Tadalafil", label: "Tadalafil" },
            { value: "Diclofenac Resinate", label: "Diclofenac Resinate" },
            {
              value: "Diclofenac Sodium (BromineFree)",
              label: "Diclofenac Sodium (BromineFree)",
            },
          ]}
          value={vendorData.productName}
          onChange={(e) => handleInputChange("productName", e.target.value)}
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
          name="vendorName"
          placeholder="Select vendor"
          options={[
            { value: "Aavis Pharmaceuticals", label: "Aavis Pharmaceuticals" },
            { value: "Diclofenac Resinate", label: "Diclofenac Resinate" },
            {
              value: "Diclofenac Sodium (BromineFree)",
              label: "Diclofenac Sodium (BromineFree)",
            },
          ]}
          value={vendorData.vendorName}
          onChange={(e) => handleInputChange("vendorName", e.target.value)}
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
