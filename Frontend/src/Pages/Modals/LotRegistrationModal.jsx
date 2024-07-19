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

const LotRegistrationModal = (_props) => {
  return (
    <div>
      <CModal
        alignment="center"
        visible={_props.visible}
        onClose={_props.closeModal}
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
            type="text"
            label="Chemical / Reagent Name"
            placeholder="Chemical / Reagent Name"
            className="custom-placeholder mb-3"
          />
          <CFormInput
            type="text"
            label="CAS / CAT No"
            placeholder="CAS / CAT No"
            className="custom-placeholder mb-3"
          />

          <CFormInput
            type="text"
            label="Delivery Receipt No"
            placeholder="Delivery Receipt No"
            className="custom-placeholder mb-3"
          />
          <CFormSelect
            type="text"
            label="Certificate"
            placeholder="Certificate"
            className="custom-placeholder mb-3"
          />

          <CFormInput
            type="number"
            label="No. Of Containers"
            placeholder="No. Of Containers"
            className="custom-placeholder mb-3"
          />
          <CFormInput
            type="number"
            label="Lot Quantity Received"
            placeholder="Lot Quantity Received"
            className="custom-placeholder mb-3"
          />
          <CFormInput
            type="number"
            label="Usage Quantity"
            placeholder="Usage Quantity"
            className="custom-placeholder mb-3"
          />
          <CFormSelect
            type="number"
            label="Received by"
            placeholder="Received by"
            className="custom-placeholder mb-3"
          />
          <CFormInput
            type="date"
            label="Received On"
            placeholder="select"
            className="custom-placeholder mb-3"
          />
          <CFormInput
            type="number"
            label="Supplied by"
            placeholder="select"
            className="custom-placeholder mb-3"
          />

          <CFormSelect
            type="number"
            label="Manufactured By"
            placeholder="select"
            className="custom-placeholder mb-3"
          />
          <CFormSelect
            type="number"
            label="Manufacture's Batch No / Lot No."
            placeholder="select"
            className="custom-placeholder mb-3"
          />
          <CFormSelect
            type="number"
            label="Storage Location"
            placeholder="select"
            className="custom-placeholder mb-3"
          />

          <CFormInput
            type="date"
            label="Expiry Date"
            placeholder="select"
            className="custom-placeholder mb-3"
          />
          <div className="flex gap-5 items-center justify-center mb-4">
            <CFormInput
              type="text"
              label="Potency"
              placeholder="select"
              className="custom-placeholder mb-3"
            />
            <CFormSelect
              type="text"
              label="UOM"
              placeholder="select"
              className="custom-placeholder mb-3"
            />
          </div>
          <div className="flex gap-5 items-center justify-center mb-4">
            <CFormInput
              type="text"
              label="Water Content"
              placeholder="select"
              className="custom-placeholder mb-3"
            />
            <CFormSelect
              type="text"
              label="UOM"
              placeholder="select"
              className="custom-placeholder mb-3"
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
            <textarea name="" id="" className="form-control"></textarea>
          </div>
        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={_props.closeModal}>
            Cancel
          </CButton>
          <CButton style={{ background: "#0F93C3", color: "white" }}>
            Add Chemical
          </CButton>
        </CModalFooter>
      </CModal>
    </div>
  );
};

export default LotRegistrationModal;
