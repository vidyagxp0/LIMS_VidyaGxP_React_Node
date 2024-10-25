import {
  CButton,
  CForm,
  CFormCheck,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";
import React, { useEffect, useState } from "react";

const SolutionUsageModal = ({ visible, closeModal, handleSubmit }) => {
  // Single state object for all fields
  const [formData, setFormData] = useState({
    standardizationNo: "",
    volumetricSolutionName: "",
    preparationNo: "",
    usedOn: "",
    preparationDate: "",
    standardizationDate: "",
    usedBy: "",
    modeOfUsage: "",
    productMaterial: "",
    arNos: "",
    testName: "",
    commentsIfAny: "",
    comments: "",
  });

  const handleInputChange = (field, value) => {
    const updatedData = { ...formData, [field]: value };
    setFormData(updatedData);
    console.log(updatedData);
  };

  const handleFormSubmit = () => {
    handleSubmit({ ...formData });
    closeModal();
  };

  // Reset form on visibility change
  useEffect(() => {
    if (visible) {
      setFormData({
        standardizationNo: "",
        volumetricSolutionName: "",
        preparationNo: "",
        usedOn: "",
        preparationDate: "",
        standardizationDate: "",
        usedBy: "",
        modeOfUsage: "",
        productMaterial: "",
        arNos: "",
        testName: "",
        commentsIfAny: "",
        comments: "",
      });
    }
  }, [visible]);

  return (
    <div>
      <CModal
        alignment="center"
        visible={visible}
        onClose={closeModal}
        size="xl"
      >
        <CModalHeader>
          <CModalTitle>Add Solution</CModalTitle>
        </CModalHeader>
        <p style={{ marginLeft: "13px" }}>Add information and Add new usage.</p>
        <CModalBody>
          <CFormSelect
            name="standardizationNo"
            label="Standardization No."
            placeholder=" "
            value={formData.standardizationNo}
            onChange={(e) => {
              handleInputChange("standardizationNo", e.target.value);
            }}
            className="custom-placeholder mb-3"
            options={[
              { value: "select", label: "select" },
              { value: "test", label: "test" },
            ]}
          />
          <CFormInput
            name="volumetricSolutionName"
            type="text"
            label="Volumetric Solution Name"
            placeholder="Volumetric Solution Name"
            value={formData.volumetricSolutionName}
            onChange={(e) => {
              handleInputChange("volumetricSolutionName", e.target.value);
            }}
            className="custom-placeholder mb-3"
          />
          <CFormInput
            name="preparationNo"
            type="text"
            label="Preparation No."
            placeholder="Preparation No."
            value={formData.preparationNo}
            onChange={(e) => {
              handleInputChange("preparationNo", e.target.value);
            }}
            className="custom-placeholder mb-3"
          />
          <CFormInput
            name="usedOn"
            type="date"
            onFocus={(e) => e.target.showPicker()}
            label="Used On"
            placeholder="Solution Expiry Period"
            value={formData.usedOn}
            onChange={(e) => {
              handleInputChange("usedOn", e.target.value);
            }}
            className="custom-placeholder mb-3"
          />
          <CFormInput
            name="preparationDate"
            type="date"
            onFocus={(e) => e.target.showPicker()}
            label="Preparation Date"
            placeholder="Solution Quantity"
            value={formData.preparationDate}
            onChange={(e) => {
              handleInputChange("preparationDate", e.target.value);
            }}
            className="custom-placeholder mb-3"
          />
          <CFormInput
            name="standardizationDate"
            type="date"
            onFocus={(e) => e.target.showPicker()}
            label="Standardization Date"
            placeholder="Standardization Schedule"
            value={formData.standardizationDate}
            onChange={(e) => {
              handleInputChange("standardizationDate", e.target.value);
            }}
            className="custom-placeholder mb-3"
          />
          <CFormInput
            name="usedBy"
            type="text"
            label="Used By"
            placeholder="Batch No"
            value={formData.usedBy}
            onChange={(e) => {
              handleInputChange("usedBy", e.target.value);
            }}
            className="mb-3"
          />
          <CForm className="mb-3">
            <CFormLabel>Mode of Usage</CFormLabel>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <CFormCheck
                type="radio"
                name="modeOfUsage"
                id="sampleAnalysis"
                label="Sample Analysis"
                value="Sample Analysis"
                checked={formData.modeOfUsage === "Sample Analysis"}
                onChange={(e) => {
                  handleInputChange("modeOfUsage", e.target.value);
                }}
              />
              <CFormCheck
                type="radio"
                name="modeOfUsage"
                id="miscellaneous"
                label="Miscellaneous"
                value="Miscellaneous"
                checked={formData.modeOfUsage === "Miscellaneous"}
                onChange={(e) => {
                  handleInputChange("modeOfUsage", e.target.value);
                }}
              />
            </div>
          </CForm>
          <CFormSelect
            name="productMaterial"
            label="Product / Material"
            placeholder="select"
            value={formData.productMaterial}
            onChange={(e) => {
              handleInputChange("productMaterial", e.target.value);
            }}
            className="custom-placeholder mb-3"
            options={[
              { value: "select", label: "select" },
              { value: "AAT-062024-00000106", label: "AAT-062024-00000106" },
            ]}
          />
          <CFormInput
            name="arNos"
            type="number"
            label="A.R. No's"
            placeholder="select"
            value={formData.arNos}
            onChange={(e) => {
              handleInputChange("arNos", e.target.value);
            }}
            className="custom-placeholder mb-3"
          />
          <CFormInput
            name="testName"
            type="text"
            label="Test Name"
            placeholder="select"
            value={formData.testName}
            onChange={(e) => {
              handleInputChange("testName", e.target.value);
            }}
            className="custom-placeholder mb-3"
          />
          <CFormInput
            name="commentsIfAny"
            type="text"
            label="Comments If Any"
            placeholder="select"
            value={formData.commentsIfAny}
            onChange={(e) => {
              handleInputChange("commentsIfAny", e.target.value);
            }}
            className="custom-placeholder mb-3"
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginBottom: "1rem",
            }}
          >
            <label>Comments</label>
            <textarea
              name="comments"
              id="comments"
              className="form-control"
              value={formData.comments}
              onChange={(e) => {
                handleInputChange("comments", e.target.value);
              }}
            ></textarea>
          </div>
        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={closeModal}>
            Cancel
          </CButton>
          <CButton
            onClick={handleFormSubmit}
            style={{ background: "#0F93C3", color: "white" }}
          >
            Add Solution
          </CButton>
        </CModalFooter>
      </CModal>
    </div>
  );
};

export default SolutionUsageModal;
