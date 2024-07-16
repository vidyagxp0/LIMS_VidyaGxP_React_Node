import {
  CButton,
  CFormInput,
  CModal,
  CModalBody,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";
import React, { useState } from "react";

const CalibrationSampleLoginTemplateModal = ({
  visible,
  closeModal,
  handleSubmit,
}) => {
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
  const [calibrationSampleLogInTemplate, setCalibrationSampleLogInTemplate] =
    useState({
      sampleLogintemplate: "",
      testPlan: "",
      productMaterial: "",
      productMaterialCode: "",
      genericName: "",
      specificationId: "",
    });

  const handleChange = (field, value) => {
    const updatedData = { ...calibrationSampleLogInTemplate, [field]: value };
    setCalibrationSampleLogInTemplate(updatedData);
  };

  const handleFormSubmit = (e) => {
    handleSubmit({ ...calibrationSampleLogInTemplate });
    setCalibrationSampleLogInTemplate({
      sampleLogintemplate: "",
      testPlan: "",
      productMaterial: "",
      productMaterialCode: "",
      genericName: "",
      specificationId: "",
    });
    closeModal();
  };
  return (
    <div>
      <CModal
        alignment="center"
        visible={visible}
        onClose={closeModal}
        size="lg"
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
            value={calibrationSampleLogInTemplate.sampleLogintemplate}
            onChange={(e) =>
              handleChange("sampleLogintemplate", e.target.value)
            }
          />
          <div>
            <label htmlFor="film-select">Test Plan / Revision No.</label>
            <select
              name="film-select"
              id="film-select"
              className="mb-3 form-select"
              value={calibrationSampleLogInTemplate.testPlan}
              onChange={(e) => handleChange("testPlan", e.target.value)}
            >
              <option value="">Select a film</option>
              {top100Films.map((film, index) => (
                <option key={index} value={film.title}>
                  {film.title} ({film.year})
                </option>
              ))}
            </select>
          </div>

          <CFormInput
            label="Product / Material"
            className="mb-3"
            type="text"
            placeholder=""
            value={calibrationSampleLogInTemplate.productMaterial}
            onChange={(e) => handleChange("productMaterial", e.target.value)}
          />
          <CFormInput
            label="Product / Material Code"
            className="mb-3"
            type="text"
            placeholder=""
            value={calibrationSampleLogInTemplate.productMaterialCode}
            onChange={(e) =>
              handleChange("productMaterialCode", e.target.value)
            }
          />
          <CFormInput
            label="Generic Name"
            className="mb-3"
            type="text"
            placeholder=""
            value={calibrationSampleLogInTemplate.genericName}
            onChange={(e) => handleChange("genericName", e.target.value)}
          />
          <CFormInput
            label="Specification ID"
            className="mb-3"
            type="text"
            placeholder=""
            value={calibrationSampleLogInTemplate.specificationId}
            onChange={(e) => handleChange("specificationId", e.target.value)}
          />
          <div className="d-flex gap-3 mt-4">
            <CButton color="light w-50" onClick={closeModal}>
              &lt; Back
            </CButton>
            <CButton color="primary w-50" onClick={handleFormSubmit}>
              Add
            </CButton>
          </div>
        </CModalBody>
      </CModal>
    </div>
  );
};

export default CalibrationSampleLoginTemplateModal;
