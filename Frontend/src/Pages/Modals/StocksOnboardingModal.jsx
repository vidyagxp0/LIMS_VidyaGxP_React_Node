import { CButton, CFormCheck, CModal, CModalBody, CModalHeader, CModalTitle } from "@coreui/react";
import React from "react";

const StocksOnboardingModal = (_props) => {
  return (
    <div>
      <CModal
        alignment="center"
        visible={_props.visible}
        onClose={_props.closeModal}
        size="xl"
      >
        <CModalHeader>
          <CModalTitle>Stock Registration</CModalTitle>
        </CModalHeader>
        <CModalBody className="flex gap-4 flex-column">
          <CFormCheck
            type="radio"
            name="options"
            value="rm-stock"
            label="RM Stock"
          />
          <CFormCheck
            type="radio"
            name="options"
            value="pm-stock"
            label="PM Stock"
          />
          <CFormCheck
            type="radio"
            name="options"
            value="chemical-stock"
            label=" Chemical Stock"
          />

          <div className="d-flex gap-3 mt-5">
            <CButton color="light w-20" onClick={_props.closeModal}>
              &lt; Back
            </CButton>
            <CButton color="primary w-20">Next</CButton>
          </div>
        </CModalBody>
      </CModal>
    </div>
  );
};

export default StocksOnboardingModal;
