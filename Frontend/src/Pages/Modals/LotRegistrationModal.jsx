import React, { useEffect, useState } from "react";
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

const LotRegistrationModal = ({ visible, closeModal, handleSubmit }) => {
  const [lotData, setLotData] = useState({
    chemicalReagentName: "",
    casNumber: "",
    deliveryReceiptNo: "",
    certificate: "",
    noOfContainers: "",
    lotQuantityReceived: "",
    usageQuantity: "",
    receivedBy: "",
    receivedOn: "",
    suppliedBy: "",
    manufacturedBy: "",
    manufactureBatchNo: "",
    storageLocation: "",
    expiryDate: "",
    potency: "",
    potencyUOM: "",
    waterContent: "",
    waterContentUOM: "",
    comments: "",
  });

  const handleInputChange = (field, value) => {
    setLotData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleFormSubmit = () => {
    handleSubmit({ ...lotData });
    closeModal();
  };

  const resetForm = () => {
    setLotData({
      chemicalReagentName: "",
      casNumber: "",
      deliveryReceiptNo: "",
      certificate: "",
      noOfContainers: "",
      lotQuantityReceived: "",
      usageQuantity: "",
      receivedBy: "",
      receivedOn: "",
      suppliedBy: "",
      manufacturedBy: "",
      manufactureBatchNo: "",
      storageLocation: "",
      expiryDate: "",
      potency: "",
      potencyUOM: "",
      waterContent: "",
      waterContentUOM: "",
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
          <CModalTitle>Lot Registration</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p>Add information</p>
          <p style={{ fontWeight: "700", fontSize: "19px" }}>
            Registration Initiation
          </p>
          <CFormSelect
            label="Chemical / Reagent Name"
            placeholder="Chemical / Reagent Name"
            className="custom-placeholder mb-3"
            name="chemicalReagentName"
            value={lotData.chemicalReagentName}
            onChange={(e) =>
              handleInputChange("chemicalReagentName", e.target.value)
            }
            options={[
              { value: "select", label: "select" },
              { value: "Formic Acid", label: "Formic Acid" },
              { value: "Ammonia", label: "Ammonia" },
              { value: "Acetic Acid", label: "Acetic Acid" },
            ]}
          />

          <CFormInput
            type="text"
            label="CAS / CAT No"
            placeholder="CAS / CAT No"
            className="custom-placeholder mb-3"
            name="casNumber"
            value={lotData.casNumber}
            onChange={(e) => handleInputChange("casNumber", e.target.value)}
          />

          <CFormInput
            type="text"
            label="Delivery Receipt No"
            placeholder="Delivery Receipt No"
            className="custom-placeholder mb-3"
            name="deliveryReceiptNo"
            value={lotData.deliveryReceiptNo}
            onChange={(e) =>
              handleInputChange("deliveryReceiptNo", e.target.value)
            }
          />

          <CFormSelect
            label="Certificate"
            placeholder="Certificate"
            className="custom-placeholder mb-3"
            name="certificate"
            value={lotData.certificate}
            onChange={(e) => handleInputChange("certificate", e.target.value)}
          />

          <CFormInput
            type="number"
            label="No. Of Containers"
            placeholder="No. Of Containers"
            className="custom-placeholder mb-3"
            name="noOfContainers"
            value={lotData.noOfContainers}
            onChange={(e) =>
              handleInputChange("noOfContainers", e.target.value)
            }
          />

          <CFormInput
            type="number"
            label="Lot Quantity Received"
            placeholder="Lot Quantity Received"
            className="custom-placeholder mb-3"
            name="lotQuantityReceived"
            value={lotData.lotQuantityReceived}
            onChange={(e) =>
              handleInputChange("lotQuantityReceived", e.target.value)
            }
          />

          <CFormInput
            type="number"
            label="Usage Quantity"
            placeholder="Usage Quantity"
            className="custom-placeholder mb-3"
            name="usageQuantity"
            value={lotData.usageQuantity}
            onChange={(e) => handleInputChange("usageQuantity", e.target.value)}
          />

          <CFormSelect
            label="Received by"
            placeholder="Received by"
            className="custom-placeholder mb-3"
            name="receivedBy"
            value={lotData.receivedBy}
            onChange={(e) => handleInputChange("receivedBy", e.target.value)}
          />

          <CFormInput
            type="date"
            onFocus={(e) => e.target.showPicker()}
            label="Received On"
            placeholder="select"
            className="custom-placeholder mb-3"
            name="receivedOn"
            value={lotData.receivedOn}
            onChange={(e) => handleInputChange("receivedOn", e.target.value)}
          />

          <CFormInput
            type="number"
            label="Supplied by"
            placeholder="select"
            className="custom-placeholder mb-3"
            name="suppliedBy"
            value={lotData.suppliedBy}
            onChange={(e) => handleInputChange("suppliedBy", e.target.value)}
          />

          <CFormSelect
            label="Manufactured By"
            placeholder="select"
            className="custom-placeholder mb-3"
            name="manufacturedBy"
            value={lotData.manufacturedBy}
            onChange={(e) =>
              handleInputChange("manufacturedBy", e.target.value)
            }
          />

          <CFormSelect
            label="Manufacture's Batch No / Lot No."
            placeholder="select"
            className="custom-placeholder mb-3"
            name="manufactureBatchNo"
            value={lotData.manufactureBatchNo}
            onChange={(e) =>
              handleInputChange("manufactureBatchNo", e.target.value)
            }
          />

          <CFormSelect
            label="Storage Location"
            placeholder="select"
            className="custom-placeholder mb-3"
            name="storageLocation"
            value={lotData.storageLocation}
            onChange={(e) =>
              handleInputChange("storageLocation", e.target.value)
            }
          />

          <CFormInput
            type="date"
            onFocus={(e) => e.target.showPicker()}
            label="Expiry Date"
            placeholder="select"
            className="custom-placeholder mb-3"
            name="expiryDate"
            value={lotData.expiryDate}
            onChange={(e) => handleInputChange("expiryDate", e.target.value)}
          />

          <div className="flex gap-5 items-center justify-center mb-4">
            <CFormInput
              type="text"
              label="Potency"
              placeholder="select"
              className="custom-placeholder mb-3"
              name="potency"
              value={lotData.potency}
              onChange={(e) => handleInputChange("potency", e.target.value)}
            />
            <CFormSelect
              label="UOM"
              placeholder="select"
              className="custom-placeholder mb-3"
              name="potencyUOM"
              value={lotData.potencyUOM}
              onChange={(e) => handleInputChange("potencyUOM", e.target.value)}
            />
          </div>

          <div className="flex gap-5 items-center justify-center mb-4">
            <CFormInput
              type="text"
              label="Water Content"
              placeholder="select"
              className="custom-placeholder mb-3"
              name="waterContent"
              value={lotData.waterContent}
              onChange={(e) =>
                handleInputChange("waterContent", e.target.value)
              }
            />
            <CFormSelect
              label="UOM"
              placeholder="select"
              className="custom-placeholder mb-3"
              name="waterContentUOM"
              value={lotData.waterContentUOM}
              onChange={(e) =>
                handleInputChange("waterContentUOM", e.target.value)
              }
            />
          </div>

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
              value={lotData.comments}
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
            Add Lot
          </CButton>
        </CModalFooter>
      </CModal>
    </div>
  );
};

export default LotRegistrationModal;
