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
import React, { useState } from "react";

const UsageRegistrationModal = (_props) => {
  const [collectionType, setCollectionType] = useState("");
  const handleCollectionTypeChange = (event) => {
    setCollectionType(event.target.value);
  };

  return (
    <div>
      <CModal
        alignment="center"
        visible={_props.visible}
        onClose={_props.closeModal}
        size="xl"
        className="p-4"
      >
        <CModalHeader className="border-b border-gray-200">
          <CModalTitle className="text-lg font-bold">
            Reference Standard Lot Usage
          </CModalTitle>
        </CModalHeader>
        <CModalBody className="space-y-4">
          <p className="font-bold">
            Add information and add new standard usage registration.
          </p>
          <CFormSelect
            type="text"
            label="Ref. Std. Lot. No."
            placeholder=""
            options={[
              { value: "1", label: "1" },
              { value: "2", label: "2" },
            ]}
            className="mb-4"
          />

          <CFormInput
            type="text"
            label="Reference Standard Name"
            placeholder=" "
            className="mb-4"
          />
          <CFormInput
            type="text"
            label="Reference Standard Code"
            placeholder=""
            className="mb-4"
          />
          <CFormInput
            type="date"
            label="Delivery Receipt Date"
            placeholder=""
            className="mb-4"
          />
          <CFormInput
            type="text"
            label="Delivery Receipt Number"
            placeholder=""
            className="mb-4"
          />
          <CFormInput
            type="date"
            label="Received On"
            placeholder=""
            className="mb-4"
          />

          <CFormSelect
            type="date"
            label="Valid Upto"
            placeholder=""
            className="mb-4"
          />

          <h6 className="font-medium">Collection Type</h6>
          <div className="mb-4  flex gap-3 items-center ">
            <CFormCheck
              type="radio"
              name="collectionType"
              id="manualOption"
              value="manual"
              label="Manual"
              onChange={handleCollectionTypeChange}
              className="mr-2"
            />
            <CFormCheck
              type="radio"
              name="collectionType"
              id="autoBindingOption"
              value="autoBinding"
              label="Auto Binding"
              onChange={handleCollectionTypeChange}
            />
          </div>
          {collectionType === "autoBinding" && (
            <>
              <CFormSelect
                label="Instrument Category"
                options={[
                  { value: "Category1", label: "Category1" },
                  { value: "Category2", label: "Category2" },
                  { value: "Category3", label: "Category3" },
                ]}
                className="mb-4"
              />
              <CFormInput
                type="text"
                label="Data Transfer Mode"
                placeholder=""
                disabled
                className="mb-4"
              />
              <h6 className="font-medium">Data Transfer Mode</h6>
              <div className="mb-4  flex gap-3 items-center ">
                <CFormCheck
                  type="radio"
                  name="dataTransferMode"
                  id="instConn"
                  value="instConn"
                  label="Inst. conn"
                  className="mr-2"
                />
                <CFormCheck
                  type="radio"
                  name="dataTransferMode"
                  id="byPassInstConn"
                  value="byPassInstConn"
                  label="By Pass Inst. Conn"
                />
              </div>
            </>
          )}

          <CFormSelect
            type="text"
            label="Quantity Used Now"
            placeholder=""
            className="mb-4"
          />

          <CFormInput
            type="date"
            label="Used On"
            name="batchNumber"
            placeholder=""
            className="mb-4"
          />

          <CFormInput
            type="text"
            name="receiptNumber"
            label="Used By"
            placeholder=""
            className="mb-4"
          />

          <h6 className="font-medium">Usage For</h6>
          <div className="mb-4  flex gap-3 items-center ">
            <CFormCheck
              type="radio"
              name="option"
              id="optionYes"
              value="yes"
              label="Sample Analysis"
              className="mr-2"
            />
            <CFormCheck
              type="radio"
              name="option"
              id="optionNo"
              value="no"
              label="Instrument Calibration"
              className="mr-2"
            />
            <CFormCheck
              type="radio"
              name="option"
              id="optionMiscellaneous"
              value="Miscellaneous"
              label="Miscellaneous"
            />
          </div>
        </CModalBody>
        <CModalFooter className="flex justify-end space-x-2 border-t border-gray-200 pt-4">
          <CButton
            color="light"
            onClick={_props.closeModal}
            className="border border-gray-300"
          >
            Cancel
          </CButton>
          <CButton className="bg-blue-600 text-white">
            Add Standard Lot Usage
          </CButton>
        </CModalFooter>
      </CModal>
    </div>
  );
};

export default UsageRegistrationModal;
