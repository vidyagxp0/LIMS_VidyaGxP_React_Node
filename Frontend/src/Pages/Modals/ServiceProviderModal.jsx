import {
  CButton,
  CFormInput,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";
import React, { useState } from "react";

const ServiceProviderModal = ({ visible, closeModal, handleSubmit }) => {
  const [providerData, setProviderData] = useState({
    serviceProviderName: "",
    uniqueCode: "",
    referenceDocuments: "",
    validUpto: "",
    serviceType: "",
    contactPerson: "",
    addressLine1: "",
    addressLine2: "",
    addressLine3: "",
    city: "",
    state: "",
    country: "",
    zip: "",
    phone: "",
    fax: "",
    email: "",
  });

  const handleInputChange = (field, value) => {
    const updatedData = { ...providerData, [field]: value };
    setProviderData(updatedData);
    console.log(updatedData);
  };

  const handleFormSubmit = () => {
    handleSubmit({ ...providerData });
    closeModal();
  };

  return (
    <div>
      <CModal alignment="center" visible={visible} onClose={closeModal}>
        <CModalHeader>
          <CModalTitle>Add Service Provider</CModalTitle>
        </CModalHeader>
        <p style={{ marginLeft: "20px", marginTop: "5px" }}>
          Add information and add new service provider
        </p>
        <CModalBody>
          <CFormInput
            type="text"
            label="Name
"
            placeholder=" "
            value={providerData.serviceProviderName}
            onChange={(e) => {
              handleInputChange("serviceProviderName", e.target.value);
            }}
          />
          <CFormInput
            type="text"
            label="Unique Code

            "
            placeholder=" "
            className="custom-placeholder"
            value={providerData.uniqueCode}
            onChange={(e) => {
              handleInputChange("uniqueCode", e.target.value);
            }}
          />
          <CFormInput
            type="text"
            label="Refrence Documents
            "
            placeholder="Product/Material"
            className="custom-placeholder"
            value={providerData.referenceDocuments}
            onChange={(e) => {
              handleInputChange("referenceDocuments", e.target.value);
            }}
          />
          <CFormInput
            type="date"
            label="Valid Upto            "
            placeholder=" "
            className="custom-placeholder"
            value={providerData.validUpto}
            onChange={(e) => {
              handleInputChange("validUpto", e.target.value);
            }}
          />
          <CFormInput
            type="text"
            label="Service Type
            "
            placeholder=" "
            className="custom-placeholder"
            value={providerData.serviceType}
            onChange={(e) => {
              handleInputChange("serviceType", e.target.value);
            }}
          />
          <CFormInput
            type="text"
            label="Contact Person

            "
            placeholder=""
            className="custom-placeholder"
            value={providerData.contactPerson}
            onChange={(e) => {
              handleInputChange("contactPerson", e.target.value);
            }}
          />
          <CFormInput
            type="text"
            label="Address : Line 1

            "
            placeholder=""
            className="custom-placeholder"
            value={providerData.addressLine1}
            onChange={(e) => {
              handleInputChange("addressLine1", e.target.value);
            }}
          />{" "}
          <CFormInput
            type="text"
            label="Address : Line 2

            "
            placeholder=""
            className="custom-placeholder"
            value={providerData.addressLine2}
            onChange={(e) => {
              handleInputChange("addressLine2", e.target.value);
            }}
          />{" "}
          <CFormInput
            type="text"
            label="Address : Line 3

            "
            placeholder=""
            className="custom-placeholder"
            value={providerData.addressLine3}
            onChange={(e) => {
              handleInputChange("addressLine3", e.target.value);
            }}
          />{" "}
          <CFormInput
            type="text"
            label="City
            "
            placeholder=""
            className="custom-placeholder"
            value={providerData.city}
            onChange={(e) => {
              handleInputChange("city", e.target.value);
            }}
          />
          <CFormInput
            type="text"
            label="State
            "
            placeholder=" "
            className="custom-placeholder"
            value={providerData.state}
            onChange={(e) => {
              handleInputChange("state", e.target.value);
            }}
          />
          <CFormInput
            type="text  "
            label="Country
            "
            placeholder=""
            className="custom-placeholder"
            value={providerData.country}
            onChange={(e) => {
              handleInputChange("country", e.target.value);
            }}
          />
          <CFormInput
            type="text  "
            label="ZIP / PIN

            "
            placeholder=""
            className="custom-placeholder"
            value={providerData.zip}
            onChange={(e) => {
              handleInputChange("zip", e.target.value);
            }}
          />
          <CFormInput
            type="text  "
            label="Phone
            "
            placeholder=""
            className="custom-placeholder"
            value={providerData.phone}
            onChange={(e) => {
              handleInputChange("phone", e.target.value);
            }}
          />
          <CFormInput
            type="text  "
            label="Fax
            "
            placeholder=""
            className="custom-placeholder"
            value={providerData.fax}
            onChange={(e) => {
              handleInputChange("fax", e.target.value);
            }}
          />
          <CFormInput
            type="text  "
            label="Email
            "
            placeholder=""
            className="custom-placeholder"
            value={providerData.email}
            onChange={(e) => {
              handleInputChange("email", e.target.value);
            }}
          />
        </CModalBody>

        <CModalFooter>
          <CButton color="light" onClick={closeModal}>
            Cancel
          </CButton>
          <CButton
            style={{ background: "#0F93C3", color: "white" }}
            onClick={handleFormSubmit}
          >
            Submit
          </CButton>
        </CModalFooter>
      </CModal>
    </div>
  );
};

export default ServiceProviderModal;
