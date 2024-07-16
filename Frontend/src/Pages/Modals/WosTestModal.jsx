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

const WosTestModal = ({ visible, closeModal, handleSubmit }) => {
  const [wosData, setWosData] = useState({
    specificationId: [],
    productName: "",
    testName: "",
    testCode: "",
    methodNo: "",
    copyTestFrom: [],
    testCategory: [],
    testTechnique: [],
    testType: [],
  });
  const handleInputChange = (field, value) => {
    const updatedData = { ...wosData, [field]: value };
    setWosData(updatedData);
  };

  const handleFormSubmit = () => {
    handleSubmit({ ...wosData });
    closeModal();
  };

  return (
    <div>
      <CModal alignment="center" visible={visible} onClose={closeModal}>
        <CModalHeader>
          <CModalTitle>Add WOS Tests</CModalTitle>
        </CModalHeader>
        <p style={{ marginLeft: "20px", marginTop: "5px" }}>
          Add information about WOS test
        </p>
        <CModalBody>
          <CFormSelect
            type="text"
            label="Specification ID
"
            placeholder="Select "
            options={[
              { value: "select", label: "select" },
              { value: "test1", label: "test1" },
              { value: "test2", label: "test2" },
              { value: "test3", label: "test3" },
              { value: "test4", label: "test4" },
              { value: "test5", label: "test5" },
              { value: "test6", label: "test6" },
            ]}
            value={wosData.specificationId}
            onChange={(e) => {
              handleInputChange("specificationId", e.target.value);
            }}
          />
          <CFormInput
            type="text"
            label="Product/Material Name
            "
            placeholder="Select.. "
            className="custom-placeholder"
            value={wosData.productName}
            onChange={(e) => {
              handleInputChange("productName", e.target.value);
            }}
          />
          <CFormInput
            type="text"
            label="Test Name
            "
            placeholder="Product/Material"
            className="custom-placeholder"
            value={wosData.testName}
            onChange={(e) => {
              handleInputChange("testName", e.target.value);
            }}
          />
          <CFormInput
            type="text"
            label="Test Code
            "
            placeholder="Lot Created Date "
            className="custom-placeholder"
            value={wosData.testCode}
            onChange={(e) => {
              handleInputChange("testCode", e.target.value);
            }}
          />
          <CFormInput
            type="text"
            label="Method No.
            "
            placeholder=" "
            className="custom-placeholder"
            value={wosData.methodNo}
            onChange={(e) => {
              handleInputChange("methodNo", e.target.value);
            }}
          />
          <CFormSelect
            type="text"
            label="Copy Test From
            "
            placeholder=""
            className="custom-placeholder"
            value={wosData.copyTestFrom}
            onChange={(e) => {
              handleInputChange("copyTestFrom", e.target.value);
            }}
          />
          <CFormSelect
            type="text"
            label="Test Category"
            placeholder=""
            className="custom-placeholder"
            options={[
              { value: "select", label: "select" },
              { value: "test1", label: "test1" },
              { value: "test2", label: "test2" },
              { value: "test3", label: "test3" },
            ]}
            value={wosData.testCategory}
            onChange={(e) => {
              handleInputChange("testCategory", e.target.value);
            }}
          />
          <CFormInput
            type="text"
            label="Test Technique"
            placeholder=" "
            className="custom-placeholder"
            options={[
              { value: "select", label: "Select" },
              { value: "Description", label: "Description" },
              { value: "jgt", label: "jgt" },
            ]}
            value={wosData.testTechnique}
            onChange={(e) => {
              handleInputChange("testTechnique", e.target.value);
            }}
          />
          <CFormInput
            type="text  "
            label="Test Type
            "
            placeholder=""
            className="custom-placeholder"
            value={wosData.testType}
            onChange={(e) => {
              handleInputChange("testType", e.target.value);
            }}
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
            Submit
          </CButton>
        </CModalFooter>
      </CModal>
    </div>
  );
};

export default WosTestModal;
