import {
  CButton,
  CFormInput,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";
import React, { useEffect, useState } from "react";

const ClientsModal = ({ visible, closeModal, handleSubmit }) => {
  const [ClientData, setClientData] = useState({
    ClientName: "",
    EmailAddress: "",
    phone: "",
    Address: "",
    AddedOn: "",
    alternateName: "",
    contactPerson: "",
    contactPersonNumber: "",
    taxNumber: "",
    fax: "",
    website: "",
    name: "",
    plantCode: "",
  });
  const resetForm = () => {
    setClientData({
      ClientName: "",
      EmailAddress: "",
      phone: "",
      Address: "",
      AddedOn: "",
      alternateName: "",
      contactPerson: "",
      contactPersonNumber: "",
      taxNumber: "",
      fax: "",
      website: "",
      name: "",
      plantCode: "",
    });
  };

  useEffect(() => {
    if (visible) {
      resetForm();
    }
  }, [visible]);

  const handleInputChange = (field, value) => {
    const updatedData = { ...ClientData, [field]: value };
    setClientData(updatedData);
    console.log(updatedData);
  };

  const handleFormSubmit = () => {
    handleSubmit({ ...ClientData });
    closeModal();
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
          <CModalTitle>Add Client</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p className="mb-3 fw-bold">Add information and add new Client</p>
          <CFormInput
            type="text"
            className="mb-3"
            label="Client Name"
            placeholder="Bussiness Associate Name"
            value={ClientData.ClientName}
            onChange={(e) => {
              handleInputChange("ClientName", e.target.value);
            }}
          />
          <CFormInput
            type="text"
            className="mb-3"
            label="Alternate Name"
            placeholder="Alternate Name"
            value={ClientData.alternateName}
            onChange={(e) => {
              handleInputChange("alternateName", e.target.value);
            }}
          />
          <CFormInput
            type="email"
            className="mb-3"
            label="Email"
            placeholder="Email"
            value={ClientData.EmailAddress}
            onChange={(e) => {
              handleInputChange("EmailAddress", e.target.value);
            }}
          />
          <CFormInput
            type="number"
            className="mb-3"
            label="Phone"
            placeholder="Phone"
            value={ClientData.phone}
            onChange={(e) => {
              handleInputChange("phone", e.target.value);
            }}
          />
          <CFormInput
            type="text"
            className="mb-3"
            label="Address"
            placeholder="Address"
            value={ClientData.Address}
            onChange={(e) => {
              handleInputChange("Address", e.target.value);
            }}
          />
          <CFormInput
            type="text"
            className="mb-3"
            label="Contact Person"
            placeholder="Contact Person"
            value={ClientData.contactPerson}
            onChange={(e) => {
              handleInputChange("contactPerson", e.target.value);
            }}
          />
          <CFormInput
            type="number"
            className="mb-3"
            label="Contact Person Number"
            placeholder="Contact Person Number"
            value={ClientData.contactPersonNumber}
            onChange={(e) => {
              handleInputChange("contactPersonNumber", e.target.value);
            }}
          />
          <CFormInput
            type="number"
            className="mb-3"
            label="Tax Number"
            placeholder="Tax Number"
            value={ClientData.taxNumber}
            onChange={(e) => {
              handleInputChange("taxNumber", e.target.value);
            }}
          />
          <CFormInput
            type="number"
            className="mb-3"
            label="Fax"
            placeholder="Fax"
            value={ClientData.fax}
            onChange={(e) => {
              handleInputChange("fax", e.target.value);
            }}
          />
          <CFormInput
            type="text"
            className="mb-3"
            label="Website"
            placeholder="Website"
            value={ClientData.website}
            onChange={(e) => {
              handleInputChange("website", e.target.value);
            }}
          />
          <CFormInput
            type="text"
            className="mb-3"
            label="Name"
            placeholder="Name"
            value={ClientData.name}
            onChange={(e) => {
              handleInputChange("name", e.target.value);
            }}
          />
          <CFormInput
            type="text"
            className="mb-3"
            label="Plant Code"
            placeholder="Plant Code"
            value={ClientData.plantCode}
            onChange={(e) => {
              handleInputChange("plantCode", e.target.value);
            }}
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
    </div>
  );
};

export default ClientsModal;
