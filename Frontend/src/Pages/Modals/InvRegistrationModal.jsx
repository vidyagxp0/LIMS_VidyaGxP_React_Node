import {
  CButton,
  CFormCheck,
  CFormInput,
  CFormSelect,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";
import React from "react";

const InvRegistrationModal = (_props) => {
  return (
    <div>
      <CModal
        alignment="center"
        visible={_props.visible}
        onClose={_props.closeModal}
        size="lg"
      >
        <CModalHeader>
          <CModalTitle>Reference Standard Lot Usage</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p style={{ fontWeight: "bolder" }}>
            Add information and add new standard lot usage.
          </p>
          <CFormSelect
            type="text"
            label="Reference Standard Name"
            placeholder=""
            options={[
              { value: "RSN-092023-0000001", label: "RSN-092023-0000001" },
              { value: "RSN-092023-0000001", label: "RSN-092023-0000001" },
              { value: "RSN-092023-0000001", label: "RSN-092023-0000001" },
              { value: "RSN-092023-0000001", label: "RSN-092023-0000001" },
              { value: "RSN-092023-0000001", label: "RSN-092023-0000001" },
              { value: "RSN-092023-0000001", label: "RSN-092023-0000001" },
              { value: "RSN-092023-0000001", label: "RSN-092023-0000001" },
            ]}
          />

          <CFormInput
            type="text"
            label="Reference Standard Code
            "
            placeholder=" "
          />
          <CFormInput
            type="text"
            label="Cas / Cat No.
            "
            placeholder=""
          />
          <CFormInput type="text" label="Source" placeholder="" />
          <CFormInput
            type="text"
            label="Quantity Recieved
            "
            placeholder=""
          />
          <CFormSelect
            type="text"
            label="Supplied By"
            options={[
              { value: "Manager", label: "Manager" },
              { value: "Mayank", label: "Mayank" },
              { value: "Admin", label: "Admin" },
            ]}
          />

          <CFormSelect type="text" label="Certificate" placeholder="" />

          <CFormInput
            type="text"
            label="Batch No. / Lot No."
            name="batchNumber"
            placeholder=""
          />

          <CFormInput
            type="text"
            name="receiptNumber"
            label="Delivery Receipt Number"
            placeholder=""
          />

          <h6>Certificate Received</h6>
          <div style={{ marginBottom: "10px" }}>
            <CFormCheck
              type="radio"
              name="option"
              id="optionYes"
              value="yes"
              label="Yes"
            />
            <CFormCheck
              type="radio"
              name="option"
              id="optionNo"
              value="no"
              label="No"
            />
          </div>

          <CFormSelect
            type="text"
            label="Certificate"
            options={[
              { value: "Certificate-1", label: "Certificate-1" },
              { value: "Certificate-2", label: "Certificate-2" },
              { value: "Certificate-3", label: "Certificate-3" },
            ]}
          />

          <CFormInput
            type="text"
            label="Batch No. / Lot No."
            name="batchNumber"
            placeholder=""
          />

          <CFormInput
            type="text"
            name="receiptNumber"
            label="Delivery Receipt Number"
            placeholder=""
          />

          <CFormInput
            type="date"
            label="Delivery Receipt Date"
            placeholder=""
          />
          <CFormSelect
            type="text"
            label="Recieved By"
            placeholder=""
            options={[
              { value: "Manager", label: "Manager" },
              { value: "Mayank", label: "Mayank" },
              { value: "Admin", label: "Admin" },
            ]}
          />
          <CFormInput type="date" label="Recieved On" placeholder="" />
          <CFormInput type="date" label="Valid Upto" placeholder="" />
          <CFormInput type="text" label="Storage Location" placeholder="" />

          <CFormInput type="text" label="Potency" placeholder="" />

          <CFormSelect
            type="text"
            label="UOM"
            placeholder=""
            options={[
              { value: "mg", label: "mg" },
              { value: "ml", label: "ml" },
            ]}
          />

          <CFormInput type="text" label="Water Content" placeholder="" />

          <CFormInput
            type="text"
            label="UOM"
            placeholder=""
            options={[
              { value: "mg", label: "mg" },
              { value: "ml", label: "ml" },
            ]}
          />

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
            }}
          ></div>
        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={_props.closeModal}>
            Cancel
          </CButton>
          <CButton style={{ background: "#0F93C3", color: "white" }}>
            Add Standard Lot Usage
          </CButton>
        </CModalFooter>
      </CModal>
    </div>
  );
};

export default InvRegistrationModal;
