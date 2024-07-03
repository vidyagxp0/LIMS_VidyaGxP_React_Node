import {
  CButton,
  CForm,
  CFormCheck,
  CFormInput,
  CFormLabel,
  CModal,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CTable,
} from "@coreui/react";
import React from "react";

const BatchTestListModal = (_props) => {
  return (
    <div>
      <CModal
        alignment="center"
        visible={_props.visible}
        onClose={_props.closeModal}
        size="xl"
      >
        <CModalHeader className="p-3">
          <CModalTitle>Add Batch Tests List Registration</CModalTitle>
        </CModalHeader>

        <p className="ml-4">
          Add information and register new Batch Tests List
        </p>
        <div className="modal-body p-4">
          <CForm>
            <div className="mb-3">
              <CFormInput
                type="text"
                label="Batch Sample ID
                "
                placeholder=""
                className="custom-placeholder"
              />
            </div>
            <div className="mb-3">
              <CFormInput
                type="text"
                label="Test Name
                "
                placeholder=""
                className="custom-placeholder"
              />
            </div>

            <div className="mb-3">
              <CFormInput
                type="text"
                label="Test Type"
                placeholder=""
                className="custom-placeholder"
              />
            </div>

            <CForm className="mb-3">
              <CFormLabel>Submission Type</CFormLabel>
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <CFormCheck
                  type="radio"
                  name="sampleRadio"
                  id="acceptRadio"
                  label="Auto Evaluation Only
                  "
                  value="accept"
                />
                <CFormCheck
                  type="radio"
                  name="sampleRadio"
                  id="rejectRadio"
                  label="Auto Evaluation & Submission
                  "
                  value="reject"
                />
              </div>
            </CForm>
            <div>
              <CTable size="xl">
                <thead
                  style={{ background: "lightblue", border: "2px solid black" }}
                >
                  <tr
                    style={{
                      background: "lightblue",
                      border: "2px solid black",
                    }}
                  >
                    <th
                      style={{
                        background: "lightblue",
                        border: "2px solid black",
                      }}
                    >
                      Sno.
                    </th>
                    <th
                      style={{
                        background: "lightblue",
                        border: "2px solid black",
                      }}
                    >
                      EM A RN.
                    </th>
                    <th
                      style={{
                        background: "lightblue",
                        border: "2px solid black",
                      }}
                    >
                      Location
                    </th>
                    <th
                      style={{
                        background: "lightblue",
                        border: "2px solid black",
                      }}
                    >
                      Location Description
                    </th>
                    <th
                      style={{
                        background: "lightblue",
                        border: "2px solid black",
                      }}
                    >
                      Alert Limits
                    </th>
                    <th
                      style={{
                        background: "lightblue",
                        border: "2px solid black",
                      }}
                    >
                      Action Limits
                    </th>

                    <th
                      style={{
                        background: "lightblue",
                        border: "2px solid black",
                      }}
                    >
                      Evaluation
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1.</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </CTable>
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

export default BatchTestListModal;
