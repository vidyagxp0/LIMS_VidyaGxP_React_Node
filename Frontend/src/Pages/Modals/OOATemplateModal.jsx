import {
  CButton,
  CForm,
  CFormInput,
  CFormSelect,
  CModal,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";
import React from "react";

const OOATemplateModal = (_props) => {
  return (
    <div>
      <CModal
        alignment="center"
        visible={_props.visible}
        onClose={_props.closeModal}
        size="lg"
      >
        <CModalHeader className="p-3">
          <CModalTitle>Add OOA Template</CModalTitle>
        </CModalHeader>

        {/* <p>Add information and Add Coa Template</p> */}
        <div className="modal-body p-4">
          <CForm>
            <div className="mb-3">
              <CFormInput
                type="text"
                label="Copying From Template

                "
                placeholder=""
                className="custom-placeholder"
              />
            </div>
            <div className="mb-3">
              <CFormInput
                type="text"
                label="Name

                "
                placeholder=""
                className="custom-placeholder"
              />
            </div>

            <div className="mb-3">
              <CFormSelect
                type="text"
                label="Unique Code
               "
                placeholder=""
                className="custom-placeholder"
              />
            </div>
            <div className="mb-3 d-flex gap-4">
              <CFormInput
                type="text"
                label="Analyst Check List
                "
                placeholder="No. of Check Items"
                className="custom-placeholder"
              />
              <CButton color="info">Add</CButton>
            </div>

            <div className="mb-3">
              <CFormInput
                type="text"
                label="Supervisor Check List

                "
                placeholder="No. of Check Items"
                className="custom-placeholder"
              />
              <CButton color="info">Add</CButton>
            </div>
          </CForm>
        </div>

        <CModalFooter className="p-3">
          <CButton color="light" onClick={_props.closeModal}>
            Cancel
          </CButton>
          <CButton style={{ background: "#0F93C3", color: "white" }}>
            Add
          </CButton>
        </CModalFooter>
      </CModal>
    </div>
  );
};

export default OOATemplateModal;
