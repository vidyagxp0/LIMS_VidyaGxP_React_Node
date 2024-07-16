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
import React, { useState } from "react";

const CultureRegistrationModal = (_props) => {
  const [numVariables, setNumVariables] = useState("");
  const [rows, setRows] = useState([]);

  const handleInputChange = (e) => {
    setNumVariables(e.target.value);
  };

  const handleAddClick = () => {
    if (numVariables) {
      const numberOfRows = parseInt(numVariables, 10);
      const newRows = Array.from({ length: numberOfRows }, (_, index) => ({
        id: index + 1,
      }));
      setRows(newRows);
    }
  };

  return (
    <div>
      <CModal
        alignment="center"
        visible={_props.visible}
        onClose={_props.closeModal}
        size="xl"
      >
        <CModalHeader>
          <CModalTitle>Add Sub Culture Template</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p style={{ fontWeight: "bolder" }}>
            Add information and Add Template
          </p>
          <h3>Registration Initiation</h3>
          <CFormInput type="text" label="Template Name" placeholder="" />
          <CFormInput type="text" label="Template Description" placeholder="" />
          <CFormInput
            type="text"
            label="Unique Code"
            placeholder=""
            className="mt-3"
          />
          <label htmlFor="No_Of_Passage_s" className="mt-3">
            No Of Passage_s
          </label>
          <div className="flex gap-3">
            <CFormInput
              type="number"
              value={numVariables}
              onChange={handleInputChange}
            />
            <CButton color="info" onClick={handleAddClick}>
              Add
            </CButton>
          </div>
          {rows.map((row) => (
            <div key={row.id}>
              <h4>Passage - {row.id}</h4>
              <CFormInput type="text" label="Passage Name" placeholder="" />
              <CFormInput type="text" label="Prefix" placeholder="" />
              <CFormInput
                type="text"
                label="For Next Generation Culturing"
                placeholder=""
              />
              <CFormInput
                type="text"
                label="No. Of Cultures for Usage in Laboratory"
                placeholder=""
              />
            </div>
          ))}
        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={_props.closeModal}>
            Cancel
          </CButton>
          <CButton style={{ background: "#0F93C3", color: "white" }}>
            Add Culture Template
          </CButton>
        </CModalFooter>
      </CModal>
    </div>
  );
};

export default CultureRegistrationModal;
