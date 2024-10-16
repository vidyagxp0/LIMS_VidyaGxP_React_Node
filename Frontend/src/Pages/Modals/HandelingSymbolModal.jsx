import {
  CButton,
  CFormInput,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import BASE_URL from "../../config.json";

const HandelingSymbolModal = ({ visible, closeModal, handleSubmit,initialData }) => {
  const [symbolData, setSymbolData] = useState({
    name: "",
  });
  useEffect(() => {
    if (visible) {
      if (initialData) {
        setSymbolData(initialData);
      } else {
        resetForm();
      }
    }
  }, [visible, initialData]);
  const resetForm = () => {
    setSymbolData({
      name: "",
    });
  };

  const handleInputChange = (field, value) => {
    setSymbolData(prevData => ({
      ...prevData,
      [field]: value
    }));
  };

  // const handleFormSubmit = async () => {
  //   try {
  //     const response = await axios.post(`${BASE_URL}/manage-lims/add/sHandlingSymbol`, symbolData);
  //     console.log('Symbol added successfully:', response.data);
  //     handleSubmit(response.data);
  //     closeModal();
  //   } catch (error) {
  //     console.error('Error adding symbol:', error);
  //   }
  // };
  const handleFormSubmit = () => {
    handleSubmit(symbolData);
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
          <CModalTitle>{initialData ? "Edit Symbol" : "Add Symbol"}</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p>{initialData ? "Edit existing symbol." : "Add a new Symbol."}</p>
          <CFormInput
            className="mb-3"
            type="text"
            label="Name"
            placeholder="Name"
            value={symbolData.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
            required
          />
        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={closeModal}>
            Back
          </CButton>
          <CButton className="bg-info text-white" onClick={handleFormSubmit}>
            {initialData ? "Update" : "Submit"}
          </CButton>
        </CModalFooter>
      </CModal>
    </div>
  );
};

export default HandelingSymbolModal;
