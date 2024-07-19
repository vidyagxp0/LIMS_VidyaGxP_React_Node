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

const RefrenceCultureLotModal = (_props) => {
  return (
    <div>
      <CModal
        alignment="center"
        visible={_props.visible}
        onClose={_props.closeModal}
        size="xl"
      >
        <CModalHeader>
          <CModalTitle>Add Culture Lot</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p>Add information and Add Template</p>
          <h3>Registration Initiation</h3>
          <CFormInput
            type="text"
            label="Reference Culture Lot Code"
            placeholder=""
            disabled
          />
          <CFormSelect type="text" label="Reference Culture" placeholder="" />
          <div className="flex gap-4">
            <CFormInput
              type="text"
              label="Received Quantity"
              placeholder="Received Quantity"
            />
            <CFormSelect
              type="text"
              placeholder="Kg"
              options={[
                { value: "Kg", label: "Kg" },
                { value: "Ml", label: "Ml" },
              ]}
            />
          </div>
          <CFormInput type="date" label="Received By" placeholder="" />
          <CFormInput type="date" label="Received On" placeholder="" />{" "}
          <CFormInput type="date" label="Valid Upto" placeholder="" />
          <CFormInput type="text" label="Delivery Receipt No" placeholder="" />
          <CFormSelect type="text" label="Supplied By" placeholder="" />
          <CFormInput type="text" label="Certificate No" placeholder="" />
          <CFormInput type="file" label="Certificate" placeholder="" />
          <CFormInput
            type="text"
            label="Batch No. On Catalogue"
            placeholder=""
          />
          <CFormInput type="text" label="Catalogue No." placeholder="" />
          <CFormInput type="text" label="Packing Description" placeholder="" />
          <CFormSelect type="text" label="Stored At" placeholder="" />
          <CFormInput type="text" label="Comments" placeholder="" />
        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={_props.closeModal}>
            Cancel
          </CButton>
          <CButton style={{ background: "#0F93C3", color: "white" }}>
            Add Culture Lot
          </CButton>
        </CModalFooter>
      </CModal>
    </div>
  );
};

export default RefrenceCultureLotModal;
