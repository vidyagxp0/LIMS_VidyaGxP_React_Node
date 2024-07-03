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

const CoaTamplateModal = (_props) => {
  return (
    <div>
      <CModal
        alignment="center"
        visible={_props.visible}
        onClose={_props.closeModal}
        size="xl"
      >
        <CModalHeader>
          <CModalTitle>Add Coa Template</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p>Add information and Add Coa Template</p>

          <CFormInput
            type="text"
            className="mb-3"
            label="Sample Type"
            placeholder="Select... "
            options={[
              "Select...",
              { label: "Hydroulic Oil" },
              { label: "hcl" },
              { label: "petrochemical" },
              { label: "Initiated product" },
            ]}
          />

          <CFormInput
            type="text"
            className="mb-3"
            label="Coa Type"
            placeholder="Select Coa Type "
            options={[
              "Select Coa Type",
              { label: "With Specification" },
              { label: "WithOut Specification" },
              { label: "ERP" },
            ]}
          />
          <CFormInput
            type="text"
            className="mb-3"
            label="Report Title"
            placeholder=" Report Title"
          />
          <CFormInput
            type="text"
            className="mb-3"
            label="Product/Material Caption"
            placeholder="Report Title "
          />
          <CFormInput
            type="text"
            className="mb-3"
            label="Serial No."
            placeholder="Serial Number "
          />
          <CFormInput
            type="text"
            className="mb-3"
            label="Format No."
            placeholder="Format No. "
          />

          <CModalTitle className="bg-light mb-3">Header</CModalTitle>

          <div className="d-flex pb-2">
            <div className="mb-3">
              <CFormInput type="text" label="Rows" placeholder="Rows " />
            </div>
            <div className="ps-3 w-50">
              <CFormSelect
                type="text"
                label="Columns"
                placeholder="Columns "
                options={[{ label: "2" }, { label: "4" }, { label: "6" }]}
              />
            </div>
          </div>

          <CModalTitle className="bg-light mb-3">Footer</CModalTitle>

          <div className="d-flex pb-2">
            <div className="mb-2">
              <CFormInput type="text" label="Rows" placeholder="Rows " />
            </div>
            <div className="ps-3 w-50">
              <CFormSelect
                type="text"
                label="Columns"
                placeholder="Columns "
                options={[{ label: "2" }, { label: "4" }, { label: "6" }]}
              />
            </div>
          </div>

          <div className="d-flex">
            <div className="pe-3">
              <CFormInput
                type="text"
                className="mb-3"
                label=""
                placeholder="Approved By "
              />
            </div>
            <div className="ps-3 w-50">
              <CFormSelect
                type="text"
                label=""
                className="mb-3"
                placeholder="approved_by "
                options={["approved_by"]}
              />
            </div>
          </div>

          <div className="d-flex">
            <div className="pe-3">
              <CFormInput
                type="text"
                className="mb-3"
                label=""
                placeholder="Reviewed By"
              />
            </div>
            <div className="ps-3 w-50">
              <CFormSelect
                type="text"
                className="mb-3"
                label=""
                placeholder="reviewed_by "
                options={["reviewed_by", {}]}
              />
            </div>
          </div>

          <div className="d-flex">
            <div className="pe-3">
              <CFormInput
                type="text"
                className="mb-3"
                label=""
                placeholder="Checked By "
              />
            </div>
            <div className="ps-3 w-50">
              <CFormSelect
                type="text"
                className="mb-3"
                label=""
                placeholder="checked_by "
                options={["checked_by", {}]}
              />
            </div>
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

export default CoaTamplateModal;
