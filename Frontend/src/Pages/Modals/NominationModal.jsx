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

const NominationModal = (_props) => {
  return (
    <div>
      <CModal
        alignment="center"
        visible={_props.visible}
        onClose={_props.closeModal}
        size="lg"
      >
        <CModalHeader>
          <CModalTitle> Add Nominations</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p className="my-3 fs-6 fw-bold">
            {" "}
            Add information about Nominations.
          </p>
          <CFormSelect
            className="mb-3"
            label="Analyst"
            options={[
              { value: "Analyst", label: "Analyst" },
              { value: "Analyst Two", label: "Analyst Two" },
            ]}
          />
          <CFormInput
            type="text"
            className="mb-3"
            label="Employee ID"
            placeholder="Employee ID"
          />
          <CFormInput
            type="text"
            className="mb-3"
            label="Role/Title"
            placeholder="Role/Title"
          />
          <CFormSelect
            label="Test Technique"
            placeholder="Select"
            className="mb-3"
            options={[{ value: "Description", label: "Description" }]}
          />
          <CFormInput type="file" id="formFile" label="Training Documents" />
          <CFormInput
            type="text"
            className="mb-3"
            label="Total Experience / Work Area"
            placeholder="Total Experience / Work Area"
          />
          <CFormInput
            type="text"
            className="mb-3"
            label="Past Experience / Work Area"
            placeholder="Past Experience / Work Area"
          />
          <CFormInput
            type="text"
            className="mb-3"
            label="Justification for Direct Nomination"
            placeholder="Justification for Direct Nomination"
          />
        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={_props.closeModal}>
            Back
          </CButton>
          <CButton className="bg-info text-white">Add</CButton>
        </CModalFooter>
      </CModal>
    </div>
  );
};

export default NominationModal;
