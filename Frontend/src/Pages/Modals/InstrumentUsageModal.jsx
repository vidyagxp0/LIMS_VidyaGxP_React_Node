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

const InstrumentUsageModal = (_props) => {
  return (
    <div>
      <CModal
        alignment="center"
        visible={_props.visible}
        onClose={_props.closeModal}
        size="xl"
      >
        <CModalHeader>
          <CModalTitle>Add Instrument usage</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p>Add information and Add Instrument Usage</p>

          <CFormSelect
            className="mb-3"
            type="select"
            label="Instrument (Instrument ID)"
            placeholder="Select... "
            options={[
              "Select...",
              { label: "en33/23" },
              { label: "eqi/eng/163" },
              { label: "ARZ001" },
              { label: "Arz003" },
              { label: "qc/bal/011" },
              { label: "hplc" },
            ]}
          />

          <CFormInput
            className="mb-3"
            type="text"
            label="Instrument Category"
            placeholder="chromatography "
            disabled
          />

          <CFormInput
            className="mb-3"
            type="text"
            label="Usage Code"
            placeholder="Usage Code"
          />

          <CFormSelect
            className="mb-3"
            type="select"
            label="Instrument (Instrument ID)"
            placeholder="Select Product "
            options={[
              "Select Product",
              { label: "apb" },
              { label: "chpoil" },
              { label: "fet0012" },
              { label: "fet0011" },
              { label: "samps" },
              { label: "epto" },
            ]}
          />

          <CFormInput
            className="mb-3"
            type="text"
            label="A.R.No."
            placeholder="A.R.No."
          />

          <CFormInput
            className="mb-3"
            type="text"
            label="Used For"
            placeholder="Used For"
          />

          <CFormInput
            className="mb-3"
            type="text"
            label="Used By"
            placeholder="Used By"
          />

          <CFormInput
            className="mb-3"
            type="date"
            label="Used From"
            placeholder=""
          />
          <CFormInput
            className="mb-3"
            type="date"
            label="Used To"
            placeholder=""
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Comment If Any"
            placeholder="Comment"
          />
        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={_props.closeModal}>
            Back
          </CButton>
          <CButton color="primary">Submit</CButton>
        </CModalFooter>
      </CModal>
    </div>
  );
};

export default InstrumentUsageModal;
