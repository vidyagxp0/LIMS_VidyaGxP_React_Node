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

const ChemicalIssueModal = ({ visible, closeModal, handleSubmit }) => {
  const [issueData, setIssueData] = useState({
    chemicalRegeantLotNo: [],
    chemicalReagentName: "",
    batchNo: "",
    lotReceivedOn: "",
    lotQuantityReceived: "",
    availableQty: "",
    expiryDate: "",
    quantityIssuedNow: "",
    issuedBy: [],
    validUpto: "",
    remarks: "",
  });

  const handleInputChange = (field, value) => {
    const updatedData = { ...issueData, [field]: value };
    setIssueData(updatedData);
    console.log(updatedData);
  };

  const handleFormSubmit = () => {
    handleSubmit({ ...issueData });
    closeModal();
  };

  const resetForm = () => {
    setIssueData({
      chemicalRegeantLotNo: [],
      chemicalReagentName: "",
      batchNo: "",
      lotReceivedOn: "",
      lotQuantityReceived: "",
      availableQty: "",
      expiryDate: "",
      quantityIssuedNow: "",
      issuedBy: [],
      validUpto: "",
      remarks: "",
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
          <p style={{ fontWeight: "bolder" }}>Registration Initiation</p>
          <CFormSelect
            type="text"
            label="Chemical / Regeant Lot No."
            placeholder="Select"
            className="custom-placeholder mb-3"
            options={[
              { value: "CHL-052024-0000002", label: "CHL-052024-0000002" },
              { value: "CHL-052024-0000001", label: "CHL-052024-0000001" },
            ]}
            name="chemicalRegeantLotNo"
            value={issueData.chemicalRegeantLotNo}
            onChange={(e) =>
              handleInputChange("chemicalRegeantLotNo", e.target.value)
            }
          />
          <CFormInput
            type="text"
            label="Chemical / Reagent Name"
            placeholder="Name"
            className="custom-placeholder mb-3"
            name="chemicalReagentName"
            value={issueData.chemicalReagentName}
            onChange={(e) =>
              handleInputChange("chemicalReagentName", e.target.value)
            }
          />

          <CFormInput
            type="text"
            label="Batch No."
            placeholder="Batch No."
            className="custom-placeholder mb-3"
            name="batchNo"
            value={issueData.batchNo}
            onChange={(e) => handleInputChange("batchNo", e.target.value)}
          />
          <CFormInput
            type="date"
            onFocus={(e) => e.target.showPicker()}
            label="Lot Received On"
            placeholder="Select"
            className="custom-placeholder mb-3"
            name="lotReceivedOn"
            value={issueData.lotReceivedOn}
            onChange={(e) => handleInputChange("lotReceivedOn", e.target.value)}
          />
          <CFormInput
            type="text"
            label="Lot Quantity Received"
            placeholder="Lot Quantity Received"
            className="custom-placeholder mb-3"
            name="lotQuantityReceived"
            value={issueData.lotQuantityReceived}
            onChange={(e) =>
              handleInputChange("lotQuantityReceived", e.target.value)
            }
          />

          <CFormInput
            type="number"
            label="Available Qty. In This Lot"
            placeholder="Available Qty. In This Lot"
            className="custom-placeholder mb-3"
            name="availableQty"
            value={issueData.availableQty}
            onChange={(e) => handleInputChange("availableQty", e.target.value)}
          />
          <CFormInput
            type="date"
            onFocus={(e) => e.target.showPicker()}
            label="Expiry Date"
            placeholder="Select"
            className="mb-3"
            name="expiryDate"
            value={issueData.expiryDate}
            onChange={(e) => handleInputChange("expiryDate", e.target.value)}
          />
          <CFormInput
            type="text"
            label="Quantity Issued Now"
            placeholder="Select"
            className="custom-placeholder mb-3"
            name="quantityIssuedNow"
            value={issueData.quantityIssuedNow}
            onChange={(e) =>
              handleInputChange("quantityIssuedNow", e.target.value)
            }
          />
          <CFormSelect
            type="text"
            label="Issued By"
            placeholder="Select"
            className="mb-3"
            name="issuedBy"
            value={issueData.issuedBy}
            onChange={(e) => handleInputChange("issuedBy", e.target.value)}
            options={[
              { value: "Initiator", label: "Initiator" },
              { value: "Manager", label: "Manager" },
            ]}
          />
          <CFormInput
            type="number"
            label="Valid Upto"
            placeholder="Select"
            className="mb-3"
            name="validUpto"
            value={issueData.validUpto}
            onChange={(e) => handleInputChange("validUpto", e.target.value)}
          />

          <div>
            <p>Remarks</p>
            <textarea
              style={{ width: "400px" }}
              className="form-control mb-3"
              name="remarks"
              value={issueData.remarks}
              onChange={(e) => handleInputChange("remarks", e.target.value)}
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
            Add Chemical Issue
          </CButton>
        </CModalFooter>
      </CModal>
    </div>
  );
};

export default ChemicalIssueModal;
