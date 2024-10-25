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

const ChemicalUsageModal = ({ visible, closeModal, handleSubmit }) => {
  const [chemicalData, setChemicalData] = useState({
    chemicalReagentName: [],
    chemicalReagentIssueNo: [],
    batchNo: "",
    issuedOn: "",
    quantityIssued: "",
    availableQty: "",
    collectionType: "",
    receivedFrom: "",
    instrumentID: "",
    usageStartDateTime: "",
    dataTransferMode: "",
    consumed: "",
    usedOn: "",
    usedBy: [],
    validUpto: "",
    usageFor: "",
    consumptionDetails: "",
    productMaterial: null,
    testName: "",
    arNos: null,
  });

  const handleInputChange = (field, value) => {
    const updatedData = { ...chemicalData, [field]: value };
    setChemicalData(updatedData);
  };

  const handleFormSubmit = () => {
    handleSubmit({ ...chemicalData });
    closeModal();
  };

  const resetForm = () => {
    setChemicalData({
      chemicalReagentName: [],
      chemicalReagentIssueNo: [],
      batchNo: "",
      issuedOn: "",
      quantityIssued: "",
      availableQty: "",
      collectionType: "",
      receivedFrom: "",
      instrumentID: "",
      usageStartDateTime: "",
      dataTransferMode: "",
      consumed: "",
      usedOn: "",
      usedBy: [],
      validUpto: "",
      usageFor: "",
      consumptionDetails: "",
      productMaterial: null,
      testName: "",
      arNos: null,
    });
  };

  useEffect(() => {
    if (visible) {
      resetForm();
    }
  }, [visible]);

  const handleUsageForChange = (e) => {
    handleInputChange("usageFor", e.target.value);
  };

  const handleCollectionTypeChange = (e) => {
    handleInputChange("collectionType", e.target.value);
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
          <CModalTitle>Add Chemicals</CModalTitle>
        </CModalHeader>
        <p style={{ marginLeft: "13px" }}>Add information and Add Chemical</p>
        <CModalBody>
          <p style={{ fontWeight: "bolder" }}>Registration Initiation</p>
          <CFormSelect
            label="Chemical / Reagent Name"
            className="custom-placeholder mb-3"
            name="chemicalReagentName"
            value={chemicalData.chemicalReagentName}
            onChange={(e) =>
              handleInputChange("chemicalReagentName", e.target.value)
            }
            options={[
              { value: "select", label: "select" },
              { value: "Methenol", label: "Methenol" },
              { value: "Hydrochloric Acid", label: "Hydrochloric Acid" },
              { value: "Formic Acid", label: "Formic Acid" },
              { value: "Water", label: "Water" },
              { value: "Acetonitriel", label: "Acetonitriel" },
            ]}
          ></CFormSelect>
          <CFormSelect
            label="Chemical / Reagent Issue No."
            className="custom-placeholder mb-3"
            name="chemicalReagentIssueNo"
            value={chemicalData.chemicalReagentIssueNo}
            onChange={(e) =>
              handleInputChange("chemicalReagentIssueNo", e.target.value)
            }
            options={[
              { value: "select", label: "select" },
              { value: "CH-240724-0000004", label: "CH-240724-0000004" },
              { value: "CH-240724-0000005", label: "CH-240724-0000005" },
              { value: "CH-240724-0000006", label: "CH-240724-0000006" },
              { value: "CH-240724-0000007", label: "CH-240724-0000007" },
              { value: "CH-240724-0000008", label: "CH-240724-0000008" },
            ]}
          ></CFormSelect>

          <CFormInput
            type="text"
            label="Batch No."
            className="custom-placeholder mb-3"
            name="batchNo"
            value={chemicalData.batchNo}
            onChange={(e) => handleInputChange("batchNo", e.target.value)}
          />
          <CFormInput
            type="date"
            onFocus={(e) => e.target.showPicker()}
            label="Issued On"
            className="custom-placeholder mb-3"
            name="issuedOn"
            value={chemicalData.issuedOn}
            onChange={(e) => handleInputChange("issuedOn", e.target.value)}
          />
          <CFormInput
            type="text"
            label="Quantity Issued"
            className="custom-placeholder mb-3"
            name="quantityIssued"
            value={chemicalData.quantityIssued}
            onChange={(e) =>
              handleInputChange("quantityIssued", e.target.value)
            }
          />

          <CFormInput
            type="number"
            label="Available Qty. In This Issue"
            className="custom-placeholder mb-3"
            name="availableQty"
            value={chemicalData.availableQty}
            onChange={(e) => handleInputChange("availableQty", e.target.value)}
          />
          <CForm className="mb-3">
            <CFormLabel>Collection Type</CFormLabel>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <CFormCheck
                type="radio"
                name="collectionType"
                id="manualRadio"
                label="Manual"
                value="manual"
                checked={chemicalData.collectionType === "manual"}
                onChange={handleCollectionTypeChange}
              />
              <CFormCheck
                type="radio"
                name="collectionType"
                id="autoBindingRadio"
                label="Auto Binding"
                value="autoBinding"
                checked={chemicalData.collectionType === "autoBinding"}
                onChange={handleCollectionTypeChange}
              />
            </div>
          </CForm>
          {chemicalData.collectionType === "autoBinding" && (
            <div>
              <CFormSelect
                label="Received From"
                className="mb-3"
                name="receivedFrom"
                value={chemicalData.receivedFrom}
                onChange={(e) =>
                  handleInputChange("receivedFrom", e.target.value)
                }
              >
                <option value="">Select</option>
                {/* Add your options here */}
              </CFormSelect>
              <div className="flex gap-5">
                <CFormSelect
                  label="Instrument ID"
                  className="mb-3"
                  name="instrumentID"
                  value={chemicalData.instrumentID}
                  onChange={(e) =>
                    handleInputChange("instrumentID", e.target.value)
                  }
                >
                  <option value="">Select</option>
                  {/* Add your options here */}
                </CFormSelect>
                <CFormInput
                  type="datetime-local"
                  label="Usage Start-Date & Time"
                  className="mb-3"
                  name="usageStartDateTime"
                  value={chemicalData.usageStartDateTime}
                  onChange={(e) =>
                    handleInputChange("usageStartDateTime", e.target.value)
                  }
                />
              </div>
              <CForm className="mb-3">
                <CFormLabel>Data Transfer Mode</CFormLabel>
                <div
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <CFormCheck
                    type="radio"
                    name="dataTransferMode"
                    id="instConnRadio"
                    label="Inst Conn."
                    value="Inst Conn."
                    checked={chemicalData.dataTransferMode === "Inst Conn."}
                    onChange={(e) =>
                      handleInputChange("dataTransferMode", e.target.value)
                    }
                  />
                  <CFormCheck
                    type="radio"
                    name="dataTransferMode"
                    id="bypassInstConnRadio"
                    label="By Pass Inst. Conn."
                    value="By Pass Inst. Conn."
                    checked={
                      chemicalData.dataTransferMode === "By Pass Inst. Conn."
                    }
                    onChange={(e) =>
                      handleInputChange("dataTransferMode", e.target.value)
                    }
                  />
                </div>
              </CForm>
            </div>
          )}
          <CFormInput
            type="number"
            label="Consumed"
            className="mb-3"
            name="consumed"
            value={chemicalData.consumed}
            onChange={(e) => handleInputChange("consumed", e.target.value)}
          />
          <CFormInput
            type="date"
            onFocus={(e) => e.target.showPicker()}
            label="Used On"
            className="mb-3"
            name="usedOn"
            value={chemicalData.usedOn}
            onChange={(e) => handleInputChange("usedOn", e.target.value)}
          />
          <CFormSelect
            label="Used by"
            className="custom-placeholder mb-3"
            name="usedBy"
            value={chemicalData.usedBy}
            onChange={(e) => handleInputChange("usedBy", e.target.value)}
            options={[
              { value: "select", label: "select" },
              { value: "Admin", label: "Admin" },
              { value: "Manager", label: "Manager" },
              { value: "Main", label: "Main" },
            ]}
          ></CFormSelect>
          <CFormInput
            type="date"
            onFocus={(e) => e.target.showPicker()}
            label="Valid Upto"
            className="mb-3"
            name="validUpto"
            value={chemicalData.validUpto}
            onChange={(e) => handleInputChange("validUpto", e.target.value)}
          />

          <CForm className="mb-3">
            <CFormLabel>Usage For</CFormLabel>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <CFormCheck
                type="radio"
                name="usageFor"
                id="sampleAnalysisRadio"
                label="Sample Analysis"
                value="sampleAnalysis"
                checked={chemicalData.usageFor === "sampleAnalysis"}
                onChange={handleUsageForChange}
              />
              <CFormCheck
                type="radio"
                name="usageFor"
                id="miscellaneousRadio"
                label="Miscellaneous"
                value="miscellaneous"
                checked={chemicalData.usageFor === "miscellaneous"}
                onChange={handleUsageForChange}
              />
            </div>
          </CForm>

          {chemicalData.usageFor === "sampleAnalysis" && (
            <div>
              <CFormInput
                type="text"
                label="Consumption Details"
                className="mb-3"
                name="consumptionDetails"
                value={chemicalData.consumptionDetails}
                onChange={(e) =>
                  handleInputChange("consumptionDetails", e.target.value)
                }
              />
              <CFormInput
                type="file"
                label="Product/Material"
                className="mb-3"
                name="productMaterial"
                onChange={(e) =>
                  handleInputChange("productMaterial", e.target.files[0])
                }
              />
              <CFormInput
                type="text"
                label="Test Name"
                className="mb-3"
                name="testName"
                value={chemicalData.testName}
                onChange={(e) => handleInputChange("testName", e.target.value)}
              />
              <CFormInput
                type="file"
                label="AR NOS."
                className="mb-3"
                name="arNos"
                onChange={(e) => handleInputChange("arNos", e.target.files[0])}
              />
            </div>
          )}

          {chemicalData.usageFor === "miscellaneous" && (
            <div className="mb-3">
              <label>Consumption Details</label>
              <textarea
                name="consumptionDetails"
                className="form-control"
                value={chemicalData.consumptionDetails}
                onChange={(e) =>
                  handleInputChange("consumptionDetails", e.target.value)
                }
              ></textarea>
            </div>
          )}
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

export default ChemicalUsageModal;
