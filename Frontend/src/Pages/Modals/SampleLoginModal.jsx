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

const SampleLoginModal = (_props) => {
  return (
    <div>
      <CModal
        alignment="center"
        visiAdd
        Sample
        login
        ble={_props.visible}
        onClose={_props.closeModal}
      >
        <CModalHeader className="p-3">
          <CModalTitle>Add Batch Sample Registration</CModalTitle>
        </CModalHeader>

        <p>Add information and register new Batch Sample</p>
        <div className="modal-body p-4">
          <CForm>
            <div className="mb-3">
              <CFormInput
                type="text"
                label="Schedule Code

                "
                placeholder=""
                className="custom-placeholder"
              />
            </div>
            <div className="mb-3">
              <CFormInput
                type="text"
                label="Due On

+
                "
                placeholder=""
                className="custom-placeholder"
              />
            </div>

            <div className="mb-3">
              <CFormSelect
                type="text"
                label="Test Plan

               "
                placeholder=""
                className="custom-placeholder"
              />
            </div>
            <h5 style={{ fontWeight: "bolder" }}>
              EM Monitoring Details(Sampling Schedule)
            </h5>
            <div className="mb-3">
              <CFormInput
                type="date"
                onFocus={(e) => e.target.showPicker()}
                label="Date of Monitoring

                "
                placeholder=""
                className="custom-placeholder"
              />
            </div>

            <div className="mb-3">
              <CFormInput
                type="text"
                label="Monitored / Sampled By
                "
                placeholder=""
                className="custom-placeholder"
              />
            </div>
            <h5 style={{ fontWeight: "bolder" }}>EM Monitoring Details</h5>

            <div className="mb-3">
              <CFormInput
                type="text"
                label="Activity Type
                "
                placeholder=""
                className="custom-placeholder"
              />
            </div>

            <div className="mb-3">
              <CFormInput
                type="time"
                label="Exposure Start Time

                "
                placeholder=""
                className="custom-placeholder"
              />
            </div>
            <div></div>

            <div className="mb-3">
              <CFormInput
                type="text"
                label="Product Name

                "
                placeholder=""
                className="custom-placeholder"
              />
            </div>

            <div className="mb-3">
              <CFormInput
                type="text"
                label="Report No.

                "
                placeholder=""
                className="custom-placeholder"
              />
            </div>

            <div className="mb-3">
              <CFormInput
                type="date"
                onFocus={(e) => e.target.showPicker()}
                label="Membrance Holder Sterilized On

                "
                placeholder=""
                className="custom-placeholder"
              />
            </div>
            <div className="mb-3">
              <CFormInput
                type="text"
                label="Gelatine Membrane Lot No.

                "
                placeholder=""
                className="custom-placeholder"
              />
            </div>
            <div className="mb-3">
              <CFormInput
                type="date"
                onFocus={(e) => e.target.showPicker()}
                label="Use Before

                "
                placeholder=""
                className="custom-placeholder"
              />
            </div>
          </CForm>
        </div>

        <CModalFooter className="p-3">
          <CButton color="light" onClick={_props.closeModal}>
            Cancel
          </CButton>
          <CButton style={{ background: "#0F93C3", color: "white" }}>
            Submit
          </CButton>
        </CModalFooter>
      </CModal>
    </div>
  );
};

export default SampleLoginModal;
