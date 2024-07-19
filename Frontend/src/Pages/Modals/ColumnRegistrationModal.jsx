import {
  CButton,
  CForm,
  CFormCheck,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";
import React from "react";

const ColumnRegistrationModal = (_props) => {
  return (
    <div>
      <CModal
        alignment="center"
        visible={_props.visible}
        onClose={_props.closeModal}
        size="lg"
      >
        <CModalHeader>
          <CModalTitle>Add Registration</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p className="ml-1 mb-2 text-lg">
            Add information and Add registration.
          </p>
          <CFormSelect
            label="Column Application"
            options={[
              { value: "select..", label: "select.." },
              { value: "columnspecs", label: "columnspecs" },
              { value: "HPLC", label: "HPLC" },
              { value: "Apixaban", label: "Apixaban" },
              { value: "Acetic Acid", label: "Acetic Acid" },
              { value: "columnspecs", label: "columnspecs" },
            ]}
            className="mb-4"
          />
          <CFormSelect label="Column Name" className="mb-4" />
          <CFormInput type="text" label="Column Number" className="mb-4" />
          <CFormInput
            type="text"
            label="Brand Name / Manufacturer Name"
            className="mb-4"
          />
          <CFormInput type="text" label="Mfg. Serial No." className="mb-4" />
          <div className="flex gap-3 mb-4">
            <CFormInput
              type="number"
              label="Film Thickness / Particle Size"
              className="mb-4 flex-1"
            />
            <CFormInput type="number" label="UOM" className="mb-4 flex-1" />
          </div>
          <CFormInput type="number" label="Packing Material" className="mb-4" />
          <div className="flex gap-3 mb-4">
            <CFormInput type="number" label="Length" className="mb-4 flex-1" />
            <CFormInput type="number" label="UOM" className="mb-4 flex-1" />
          </div>
          <div className="flex gap-3 mb-4">
            <CFormInput
              type="number"
              label="Inner Diameter"
              className="mb-4 flex-1"
            />
            <CFormInput type="number" label="UOM" className="mb-4 flex-1" />
          </div>
          <CFormInput type="number" label="Outer Diameter" className="mb-4" />
          <CFormInput type="date" label="Received On" className="mb-4" />
          <CForm className="mb-3">
            <CFormLabel>Certificate Received</CFormLabel>
            <div className="flex justify-around w-14 gap-2">
              <CFormCheck
                type="radio"
                name="sampleRadio"
                id="acceptRadio"
                label="YES"
                value="accept"
              />
              <CFormCheck
                type="radio"
                name="sampleRadio"
                id="rejectRadio"
                label="NO"
                value="reject"
              />
            </div>
          </CForm>
          <CFormInput type="file" label="Certificate" className="mb-4" />
          <div className="flex flex-col mb-4">
            <label>Remarks if</label>
            <textarea
              name=""
              id=""
              className="w-full h-24 p-2 mt-2 border rounded-md"
            ></textarea>
          </div>
        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={_props.closeModal}>
            Cancel
          </CButton>
          <CButton className="bg-[#0F93C3] text-white">Add Chemical</CButton>
        </CModalFooter>
      </CModal>
    </div>
  );
};

export default ColumnRegistrationModal;
