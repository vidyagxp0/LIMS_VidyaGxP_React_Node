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
  import React from "react";
  
  const ChemicalIssueModal = (_props) => {
    return (
      <div>
        <CModal
          alignment="center"
          visible={_props.visible}
          onClose={_props.closeModal}
          size="xl"
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
            />
            <CFormInput
              type="text"
              label="Chemical / Reagent Name"
              placeholder="Name"
              className="custom-placeholder mb-3"
            />
  
            <CFormInput
              type="text"
              label="Batch No."
              placeholder="Batch No."
              className="custom-placeholder mb-3"
            />
            <CFormInput
              type="date"
              label="Lot Received On"
              placeholder="Select"
              className="custom-placeholder mb-3"
            />
            <CFormInput
              type="text"
              label="Lot Quantity Received"
              placeholder="Lot Quantity Received"
              className="custom-placeholder mb-3"
            />
  
            <CFormInput
              type="number"
              label="Available Qty. In This Lot"
              placeholder="Available Qty. In This Lot"
              className="custom-placeholder mb-3"
            />
            <CFormInput
              type="date"
              label="Expiry Date"
              placeholder="Select"
              className="mb-3"
            />
            <CFormInput
              type="text"
              label="Quantity Issued Now"
              placeholder="Select"
              className="custom-placeholder mb-3"
            />
            <CFormSelect
              type="text"
              label="Issued By"
              placeholder="Select"
              className="mb-3"
            />
            <CFormInput
              type="number"
              label="Valid Upto"
              placeholder="Select"
              className="mb-3"
            />
  
            <div>
              <p>Remarks</p>
              <textarea
                style={{ width: "400px" }}
                className="form-control mb-3"
              ></textarea>
            </div>
          </CModalBody>
          <CModalFooter>
            <CButton color="light" onClick={_props.closeModal}>
              Cancel
            </CButton>
            <CButton style={{ background: "#0F93C3", color: "white" }}>
              Add Chemical Issue
            </CButton>
          </CModalFooter>
        </CModal>
      </div>
    );
  };
  
  export default ChemicalIssueModal;
  