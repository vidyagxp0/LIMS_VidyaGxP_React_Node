import React, { useState, useEffect } from "react";
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

const ChemicalRegistrationModal = ({ visible, closeModal, handleSubmit }) => {
  const [chemicalData, setChemicalData] = useState({
    name: "",
    uniqueCode: "",
    casNumber: "",
    category: [],
    grade: [],
    handlingSymbol: [],
    storageConditions: [],
    lotUOM: [],
    usageUOM: [],
    issuesDisplayOrder: "",
    minimumQty: "",
    comments: "",
  });

  const handleInputChange = (field, value) => {
    setChemicalData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleFormSubmit = () => {
    handleSubmit({ ...chemicalData });
    closeModal();
  };

  const resetForm = () => {
    setChemicalData({
      name: "",
      uniqueCode: "",
      casNumber: "",
      category: [],
      grade: [],
      handlingSymbol: [],
      storageConditions: [],
      lotUOM: [],
      usageUOM: [],
      issuesDisplayOrder: "",
      minimumQty: "",
      comments: "",
    });
  };

  useEffect(() => {
    if (visible) {
      resetForm();
    }
  }, [visible]);

  return (
    <div>
      <CModal
        alignment="center"
        visible={visible}
        onClose={closeModal}
        size="lg"
      >
        <CModalHeader>
          <CModalTitle>Add Chemicals</CModalTitle>
        </CModalHeader>
        <p style={{ marginLeft: "13px" }}>Add information and Add Chemical</p>
        <CModalBody>
          <p style={{ fontWeight: "800", fontSize: "20px" }}>
            Registration Initiation
          </p>

          <CFormInput
            type="text"
            label="Name"
            placeholder="Name"
            className="custom-placeholder mb-3"
            name="name"
            value={chemicalData.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
          />

          <CFormInput
            type="text"
            label="Unique Code"
            placeholder="Unique Code"
            className="custom-placeholder mb-3"
            name="uniqueCode"
            value={chemicalData.uniqueCode}
            onChange={(e) => handleInputChange("uniqueCode", e.target.value)}
          />

          <CFormInput
            type="text"
            label="CAS / CAT no."
            placeholder="Enter CAS"
            className="custom-placeholder mb-3"
            name="casNumber"
            value={chemicalData.casNumber}
            onChange={(e) => handleInputChange("casNumber", e.target.value)}
          />

          <CFormSelect
            label="Category"
            placeholder="Select"
            className="custom-placeholder mb-3"
            name="category"
            value={chemicalData.category}
            onChange={(e) => handleInputChange("category", e.target.value)}
            options={[
              { value: "", label: "Select Category" },
              { value: "Organic Solvent", label: "Organic Solvent" },
              {
                value: "Iron Chelator Substance",
                label: "Iron Chelator Substance",
              },
              { value: "Solvent", label: "Solvent" },
              { value: "Organic Acid", label: "Organic Acid" },
              { value: "Polymers", label: "Polymers" },
              {
                value: "Biochemical Compounds",
                label: "Biochemical Compounds",
              },
              { value: "Inorganic Compounds", label: "Inorganic Compounds" },
              { value: "Organic Compounds", label: "Organic Compounds" },
            ]}
          />

          <CFormSelect
            label="Grade"
            placeholder="Grade"
            className="custom-placeholder mb-3"
            name="grade"
            value={chemicalData.grade}
            onChange={(e) => handleInputChange("grade", e.target.value)}
            options={[
              { value: "", label: "Select Grade" },
              { value: "Analytical Grade", label: "Analytical Grade" },
              { value: "HPLC Grade", label: "HPLC Grade" },
              { value: "Grd-1", label: "Grd-1" },
            ]}
          />

          <CFormSelect
            label="Handling Symbol"
            placeholder="Select..."
            className="custom-placeholder mb-3"
            name="handlingSymbol"
            value={chemicalData.handlingSymbol}
            onChange={(e) =>
              handleInputChange("handlingSymbol", e.target.value)
            }
            options={[
              { value: "", label: "Select Handling Symbol" },
              { value: "A", label: "A" },
              { value: "B", label: "B" },
              { value: "C", label: "C" },
              { value: "D", label: "D" },
              { value: "E", label: "E" },
            ]}
          />

          <CFormSelect
            label="Storage Conditions"
            placeholder="Select"
            className="custom-placeholder mb-3"
            name="storageConditions"
            value={chemicalData.storageConditions}
            onChange={(e) =>
              handleInputChange("storageConditions", e.target.value)
            }
            options={[
              { value: "", label: "Select Storage Conditions" },
              { value: "Analytical", label: "Analytical" },
              { value: "HPLC", label: "HPLC" },
              { value: "Grd-1", label: "Grd-1" },
            ]}
          />

          <CFormSelect
            label="Lot UOM"
            placeholder="Select"
            className="custom-placeholder mb-3"
            name="lotUOM"
            value={chemicalData.lotUOM}
            onChange={(e) => handleInputChange("lotUOM", e.target.value)}
            options={[
              { value: "", label: "Select Lot UOM" },
              { value: "kg", label: "kg" },
              { value: "L", label: "L" },
              { value: "mL", label: "mL" },
            ]}
          />

          <CFormInput
            type="number"
            label="Usage UOM"
            placeholder="Select"
            className="custom-placeholder mb-3"
            name="usageUOM"
            value={chemicalData.usageUOM}
            onChange={(e) => handleInputChange("usageUOM", e.target.value)}
          />

          <CForm className="mb-3">
            <CFormLabel>Issues Display Order For Usage</CFormLabel>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <CFormCheck
                type="radio"
                name="issuesDisplayOrder"
                id="fifoRadio"
                label="FIFO"
                value="FIFO"
                checked={chemicalData.issuesDisplayOrder === "FIFO"}
                onChange={() => handleInputChange("issuesDisplayOrder", "FIFO")}
              />
              <CFormCheck
                type="radio"
                name="issuesDisplayOrder"
                id="fefoRadio"
                label="FEFO"
                value="FEFO"
                checked={chemicalData.issuesDisplayOrder === "FEFO"}
                onChange={() => handleInputChange("issuesDisplayOrder", "FEFO")}
              />
            </div>
          </CForm>

          <p style={{ fontWeight: "bolder" }}>Inventory Control</p>

          <CFormInput
            type="number"
            label="Minimum Qty."
            placeholder="Select"
            className="custom-placeholder mb-3"
            name="minimumQty"
            value={chemicalData.minimumQty}
            onChange={(e) => handleInputChange("minimumQty", e.target.value)}
          />

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
              marginBottom: "1rem",
            }}
          >
            <label>Comments</label>
            <textarea
              name="comments"
              id="comments"
              className="form-control"
              value={chemicalData.comments}
              onChange={(e) => handleInputChange("comments", e.target.value)}
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
            Add Chemical
          </CButton>
        </CModalFooter>
      </CModal>
    </div>
  );
};

export default ChemicalRegistrationModal;
