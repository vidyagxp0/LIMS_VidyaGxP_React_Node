import {
  CButton,
  CFormInput,
  CModal,
  CModalBody,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";
import { Autocomplete, TextField } from "@mui/material";
import React from "react";

const CalibrationSampleLoginTemplateModal = (_props) => {
  const top100Films = [
    { title: "The Shawshank Redemption", year: 1994 },
    { title: "The Godfather", year: 1972 },
    { title: "The Godfather: Part II", year: 1974 },
    { title: "Pulp Fiction", year: 1994 },
    { title: "The Dark Knight", year: 2008 },
    { title: "12 Angry Men", year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: "The Lord of the Rings: The Return of the King", year: 2003 },
    { title: "Fight Club", year: 1999 },
    { title: "Star Wars: Episode IV - A" },
  ];
  return (
    <div>
      <CModal
        alignment="center"
        visible={_props.visible}
        onClose={_props.closeModal}
        size="xl"
      >
        <CModalHeader>
          <CModalTitle>Add Sample Login Template</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CFormInput
            label="Sample Login Template"
            className="mb-3"
            type="text"
            placeholder=""
          />
          <label className="" htmlFor="">
            Test Plan / Revision No.
          </label>
          <Autocomplete
            disablePortal
            className="mb-3"
            id="combo-box-demo"
            options={top100Films}
            getOptionLabel={(option) => option.title || ""}
            renderInput={(params) => (
              <TextField {...params} label="Select a film" />
            )}
          />

          <CFormInput
            label="Product / Material"
            className="mb-3"
            type="text"
            placeholder=""
          />
          <CFormInput
            label="Product / Material Code"
            className="mb-3"
            type="text"
            placeholder=""
          />
          <CFormInput
            label="Generic Name"
            className="mb-3"
            type="text"
            placeholder=""
          />
          <CFormInput
            label="Specification ID"
            className="mb-3"
            type="text"
            placeholder=""
          />
          <div className="d-flex gap-3 mt-4">
            <CButton color="light w-50" onClick={_props.closeModal}>
              &lt; Back
            </CButton>
            <CButton color="primary w-50">Add</CButton>
          </div>
        </CModalBody>
      </CModal>
    </div>
  );
};

export default CalibrationSampleLoginTemplateModal;
