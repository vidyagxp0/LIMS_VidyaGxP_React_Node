import { CButton, CFormInput, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle } from "@coreui/react";
import React from "react";

const ProjectsModal = (_props) => {
  return (
    <div>
      <CModal
        alignment="center"
        visible={_props.visible}
        onClose={_props.closeModal}
        size="lg"
      >
        <CModalHeader>
          <CModalTitle>Add Project List</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <h6 className="my-3 fs-5">Add information and add new project</h6>
          <CFormInput
            className="mb-3"
            type="text"
            label={<>Projects Name</>}
            placeholder="Specification Type Name"
            required
          />

          <CFormInput
            className="mb-3"
            type="text"
            label={<>Unique Code</>}
            placeholder="Unique Code"
            required
          />

          <CFormInput
            className="mb-3"
            type="text"
            label="Description"
            placeholder="Description"
            required
          />
        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={_props.closeModal}>
            Back
          </CButton>
          <CButton className="bg-info text-white">Submit</CButton>
        </CModalFooter>
      </CModal>
    </div>
  );
};

export default ProjectsModal;
