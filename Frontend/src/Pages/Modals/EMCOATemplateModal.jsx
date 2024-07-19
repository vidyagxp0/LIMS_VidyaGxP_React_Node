import {
  CButton,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CModal,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CRow,
} from "@coreui/react";
import React from "react";

const EMCOATemplateModal = (_props) => {
  return (
    <div>
      <CModal
        alignment="center"
        visible={_props.visible}
        onClose={_props.closeModal}
        size="lg"
      >
        <CModalHeader className="p-3">
          <CModalTitle>Add COA Template</CModalTitle>
        </CModalHeader>

        <div className="modal-body p-4">
          <p>Add information and Add Coa Template</p>
          <CForm>
            <div className="mb-3">
              <CFormInput
                type="text"
                label="Configuration type

                "
                placeholder=""
                className="custom-placeholder"
              />
            </div>
            <div className="mb-3">
              <CFormInput
                type="text"
                label="Unique Code

                "
                placeholder=""
                className="custom-placeholder"
              />
            </div>

            <div className="mb-3">
              <CFormSelect
                type="text"
                label="Report Title

                "
                placeholder=""
                className="custom-placeholder"
              />
            </div>
            <div className="mb-3">
              <CFormInput
                type="text"
                label="Format No.

                "
                placeholder=""
                className="custom-placeholder"
              />
            </div>
            <div style={{ background: "lightgray", padding: "5px auto " }}>
              <p>Header</p>
            </div>

            <div className="mb-3">
              <CFormSelect
                type="text"
                label="Rows
                "
                placeholder=""
                className="custom-placeholder"
              />
            </div>

            <div className="mb-3">
              <CFormSelect
                type="text"
                label="Columns

                "
                placeholder=""
                className="custom-placeholder"
              />
            </div>

            <div style={{ background: "lightgray", padding: "5px auto " }}>
              <p>Footer</p>
            </div>

            <div className="mb-3">
              <CFormSelect
                type="text"
                label="Rows
                "
                placeholder=""
                className="custom-placeholder"
              />
            </div>

            <div className="mb-3">
              <CFormSelect
                type="text"
                label="Columns

                "
                placeholder=""
                className="custom-placeholder"
              />
            </div>

            <CContainer>
              <CRow className="my-3">
                <CCol xs="auto">
                  <CFormLabel
                    htmlFor="approved_by"
                    className="d-flex align-items-center"
                    style={{
                      border: "1px solid lightgray",
                      borderRadius: "5px",
                      padding: "8px",
                      background: "#F5F6FA",
                    }}
                  >
                    Approved By
                  </CFormLabel>
                </CCol>
                <CCol>
                  <CFormSelect id="approved_by">
                    <option value="approved_by">approved_by</option>
                  </CFormSelect>
                </CCol>
              </CRow>
              <CRow className="my-3">
                <CCol xs="auto">
                  <CFormLabel
                    htmlFor="reviewed_by"
                    className="d-flex align-items-center"
                    style={{
                      border: "1px solid lightgray",
                      borderRadius: "5px",
                      padding: "8px",
                      background: "#F5F6FA",
                    }}
                  >
                    Reviewed By
                  </CFormLabel>
                </CCol>
                <CCol>
                  <CFormSelect id="reviewed_by">
                    <option value="reviewed_by">reviewed_by</option>
                  </CFormSelect>
                </CCol>
              </CRow>
              <CRow className="my-3">
                <CCol xs="auto">
                  <CFormLabel
                    htmlFor="checked_by"
                    className="d-flex align-items-center"
                    style={{
                      border: "1px solid lightgray",
                      borderRadius: "5px",
                      padding: "8px",
                      background: "#F5F6FA",
                    }}
                  >
                    Checked By
                  </CFormLabel>
                </CCol>
                <CCol>
                  <CFormSelect id="checked_by">
                    <option value="checked_by">checked_by</option>
                  </CFormSelect>
                </CCol>
              </CRow>
            </CContainer>
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

export default EMCOATemplateModal;
