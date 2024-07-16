import {
  CButton,
  CFormCheck,
  CFormInput,
  CFormSelect,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";
import React from "react";

const RefrenceCultureLotModal = (_props) => {
  return (
    <div>
      <CModal
        alignment="center"
        visible={_props.visible}
        onClose={_props.closeModal}
        size="lg"
      >
        <CModalHeader>
          <CModalTitle>Add Culture Lot</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p>Add information and Add Template</p>
          <h3>Registration Initiation</h3>
          <CFormSelect
            type="text"
            label="Template Name"
            options={[{ value: "Select", label: "Select" }]}
          />
          <CFormInput
            type="text"
            label="Reference Culture Name"
            placeholder=""
          />
          <CFormInput
            type="text"
            label="Reference Culture Code/Strain No."
            placeholder=""
          />
          <CFormSelect type="text" label="Media" placeholder="" />
          <label htmlFor="analysis_required">Analysis Required</label>
          <div className="flex gap-3">
            <CFormCheck
              type="radio"
              name="analysis_required"
              id="analysis1"
              className="m-2"
              value="Yes"
              label="Yes"
            />
            <CFormCheck
              type="radio"
              name="analysis_required"
              id="analysis2"
              className="m-2"
              value="No"
              label="No"
            />
          </div>

          <p className="font-bold mt-3">
            Passage For Sub Culture 1 (Passage 0)
          </p>
          <div className="flex gap-3 mb-4">
            <CFormInput
              type="text"
              label="Reference Culture Name"
              placeholder=""
            />
            <span>Days</span>
          </div>
          <div className="flex gap-3 mb-4">
            <CFormInput
              type="text"
              label="Reference Culture Name"
              placeholder=""
            />
            <span>Days</span>
          </div>
          <div className="flex gap-3 mb-4">
            <CFormInput
              type="text"
              label="Reference Culture Name"
              placeholder=""
            />
            <span>Days</span>
          </div>
          <CFormSelect
            type="text"
            label="Incubation Conditions"
            placeholder=""
          />
          <CFormSelect type="text" label="Storage Conditions" placeholder="" />

          <CFormInput
            type="file"
            label="Sample Logic Template"
            placeholder=""
          />

          <p className="font-bold mt-3">
            Passage For Sub Culture 2 (Passage 1)
          </p>
          <div className="flex gap-3 mb-4">
            <CFormInput
              type="text"
              label="Reference Culture Name"
              placeholder=""
            />
            <span>Days</span>
          </div>
          <div className="flex gap-3 mb-4">
            <CFormInput
              type="text"
              label="Reference Culture Name"
              placeholder=""
            />
            <span>Days</span>
          </div>
          <div className="flex gap-3 mb-4">
            <CFormInput
              type="text"
              label="Reference Culture Name"
              placeholder=""
            />
            <span>Days</span>
          </div>
          <CFormSelect
            type="text"
            label="Incubation Conditions"
            placeholder=""
          />
          <CFormSelect type="text" label="Storage Conditions" placeholder="" />

          <CFormInput
            type="file"
            label="Sample Logic Template"
            placeholder=""
          />

          <p className="font-bold mt-3">Passage For Sub Culture 3(Passage 2)</p>
          <div className="flex gap-3 mb-4">
            <CFormInput
              type="text"
              label="Reference Culture Name"
              placeholder=""
            />
            <span>Days</span>
          </div>
          <div className="flex gap-3 mb-4">
            <CFormInput
              type="text"
              label="Reference Culture Name"
              placeholder=""
            />
            <span>Days</span>
          </div>
          <div className="flex gap-3 mb-4">
            <CFormInput
              type="text"
              label="Reference Culture Name"
              placeholder=""
            />
            <span>Days</span>
          </div>
          <CFormSelect
            type="text"
            label="Incubation Conditions"
            placeholder=""
          />
          <CFormSelect type="text" label="Storage Conditions" placeholder="" />

          <CFormInput
            type="file"
            label="Sample Logic Template"
            placeholder=""
          />

          <p className="font-bold mt-3">
            Passage For Sub Culture 4 (Passage 3)
          </p>
          <div className="flex gap-3 mb-4">
            <CFormInput
              type="text"
              label="Reference Culture Name"
              placeholder=""
            />
            <span>Days</span>
          </div>
          <div className="flex gap-3 mb-4">
            <CFormInput
              type="text"
              label="Reference Culture Name"
              placeholder=""
            />
            <span>Days</span>
          </div>
          <div className="flex gap-3 mb-4">
            <CFormInput
              type="text"
              label="Reference Culture Name"
              placeholder=""
            />
            <span>Days</span>
          </div>
          <CFormSelect
            type="text"
            label="Incubation Conditions"
            placeholder=""
          />
          <CFormSelect type="text" label="Storage Conditions" placeholder="" />

          <CFormInput
            type="file"
            label="Sample Logic Template"
            placeholder=""
          />

          <p className="font-bold mt-3">
            Passage For Sub Culture 5 (Passage 4)
          </p>
          <div className="flex gap-3 mb-4">
            <CFormInput
              type="text"
              label="Reference Culture Name"
              placeholder=""
            />
            <span>Days</span>
          </div>
          <div className="flex gap-3 mb-4">
            <CFormInput
              type="text"
              label="Reference Culture Name"
              placeholder=""
            />
            <span>Days</span>
          </div>
          <div className="flex gap-3 mb-4">
            <CFormInput
              type="text"
              label="Reference Culture Name"
              placeholder=""
            />
            <span>Days</span>
          </div>
          <CFormSelect
            type="text"
            label="Incubation Conditions"
            placeholder=""
          />
          <CFormSelect type="text" label="Storage Conditions" placeholder="" />

          <CFormInput
            type="file"
            label="Sample Logic Template"
            placeholder=""
          />
        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={_props.closeModal}>
            Cancel
          </CButton>
          <CButton style={{ background: "#0F93C3", color: "white" }}>
            Add Culture Lot
          </CButton>
        </CModalFooter>
      </CModal>
    </div>
  );
};

export default RefrenceCultureLotModal;
