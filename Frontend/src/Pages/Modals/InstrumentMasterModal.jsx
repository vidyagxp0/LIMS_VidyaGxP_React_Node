import {
  CButton,
  CCol,
  CFormCheck,
  CFormInput,
  CFormSelect,
  CFormTextarea,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CRow,
} from "@coreui/react";
import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const InstrumentMasterModal = (_props) => {
  const [fields, setFields] = useState([]);
  const [description, setDescription] = useState("");

  const addFields = () => {
    setFields([...fields, { id: Date.now(), value1: "", value2: "" }]);
  };

  const removeField = (id) => {
    setFields(fields.filter((field) => field.id !== id));
  };

  const handleFieldChange = (id, value1, value2) => {
    setFields(
      fields.map((field) =>
        field.id === id ? { ...field, value1, value2 } : field
      )
    );
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
          <CModalTitle>Add Instrument</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p>Add information and register new Instrument</p>
          <CFormSelect
            className="mb-3"
            type="text"
            label="Instrument Category"
            placeholder="Select... "
            options={[
              "Select",
              { label: "chromatography" },
              { label: "weighing balance" },
            ]}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Instrument Category Description"
            placeholder="chroma "
            disabled
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Instrument"
            placeholder=" Instrument"
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Instrument ID"
            placeholder="Instrument ID "
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Make"
            placeholder=" Make"
          />
          <CRow className="d-flex align-items-center justify-content-center">
            <CCol sm={8}>
              <CFormInput
                className="mb-3"
                type="text"
                label="Model"
                placeholder="Model "
              />
            </CCol>
            <CCol sm={4}>
              <CButton
                className="bg-info text-white  mt-4 mb-3"
                onClick={addFields}
              >
                Add Fields
              </CButton>
            </CCol>
          </CRow>
          {fields.map((field) => (
            <CRow key={field.id} className="align-items-center mb-3">
              <CCol>
                <CFormInput
                  type="text"
                  label="Field"
                  placeholder="Field Name"
                  value={field.value1}
                  onChange={(e) =>
                    handleFieldChange(field.id, e.target.value, field.value2)
                  }
                />
              </CCol>
              <CCol>
                <CFormInput
                  type="text"
                  label="Value"
                  placeholder="Field"
                  value={field.value2}
                  onChange={(e) =>
                    handleFieldChange(field.id, field.value1, e.target.value)
                  }
                />
              </CCol>
              <CCol xs="auto">
                <CButton color="danger" onClick={() => removeField(field.id)}>
                  <FaTrash />
                </CButton>
              </CCol>
            </CRow>
          ))}
          <CFormInput
            className="mb-3"
            type="text"
            label="Manufacturer's Serial No."
            placeholder=" Manufacturer's Serial No."
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Capacity Size"
            placeholder="Capacity Size "
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Equip No."
            placeholder=" Equip No."
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Installed At"
            placeholder="Installed At"
          />
          <CFormInput type="date" label="Installed On" placeholder=" " />
          <CFormInput
            className="mb-3"
            type="date"
            label="Warranty Expires On"
            placeholder=" "
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Supplied By"
            placeholder="Supplied By"
          />
          <label className="mb-3">Contains module ?</label>
          <CFormCheck
            className="mb-3"
            type="radio"
            id="ContainsModuleYes"
            name="ContainsModule"
            label="Yes"
          />
          <CFormCheck
            className="mb-3"
            type="radio"
            id="ContainsModuleNo"
            name="ContainsModule"
            label="No"
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="SOP No."
            placeholder="SOP Number"
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Software"
            placeholder="Software"
          />
          <div className="mb-3">
            <label>Description</label>
            <ReactQuill
              theme="snow"
              value={description}
              onChange={setDescription}
            />
          </div>
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

export default InstrumentMasterModal;
