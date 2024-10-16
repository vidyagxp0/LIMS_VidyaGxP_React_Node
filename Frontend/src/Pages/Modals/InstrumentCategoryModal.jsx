/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import {
  CButton,
  CCol,
  CFormInput,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";
import axios from "axios";
import { toast } from "react-toastify";
import { BASE_URL } from "../../config.json";

const InstrumentMasterModal = ({ visible, closeModal, handleSubmit, fetchProductData }) => {
  const currentDate = new Date().toISOString().split("T")[0];
  const [instrumentCategoryData, setInstrumentCategoryData] = useState({
    CategoryName: "",
    Description: "",
    AddedOn: currentDate,
    Status: "",
  });

  const resetForm = () => {
  const currentDate = new Date().toISOString().split("T")[0];
    setInstrumentCategoryData({
      CategoryName: "",
      Description: "",
      AddedOn: currentDate,
      Status: "",
    });
  };

  useEffect(() => {
    if (visible) {
      resetForm();
    }
  }, [visible]);

  const handleInputChange = (field, value) => {
    setInstrumentCategoryData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleFormSubmit = async () => {
    const instrumentDetails = {
      ...instrumentCategoryData,
      AddedOn: new Date().toISOString(),
    };

    try {
      const response = await axios.post(
        `${BASE_URL}/manage-lims/add/iMInstrumentCategory`,
        instrumentDetails
      );
      if (response.status === 200) {
        toast.success("Instrument added successfully.");
        if (fetchProductData) fetchProductData(); // Ensure fetchProductData is passed in props
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
          <CFormInput
            className="mb-3"
            type="text"
            label="Category Name"
            placeholder="Category Name"
            value={instrumentCategoryData.CategoryName}
            onChange={(e) => handleInputChange("CategoryName", e.target.value)}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Description"
            placeholder="Description"
            value={instrumentCategoryData.Description}
            onChange={(e) => handleInputChange("Description", e.target.value)}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Status"
            placeholder="Status"
            value={instrumentCategoryData.Status}
            onChange={(e) => handleInputChange("Status", e.target.value)}
          />
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={closeModal}>
            Close
          </CButton>
          <CButton color="primary" onClick={handleFormSubmit}>
            Save changes
          </CButton>
        </CModalFooter>
      </CModal>
    </div>
  );
};

export default InstrumentMasterModal;
