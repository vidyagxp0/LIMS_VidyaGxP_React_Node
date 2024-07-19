import {
  CButton,
  CFormInput,
  CFormTextarea,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";
import React from "react";

const ColumnUsageModal = (_props) => {
  return (
    <div>
      <CModal
        alignment="center"
        visible={_props.visible}
        onClose={_props.closeModal}
        size="lg"
      >
        <CModalHeader>
          <CModalTitle>Add Column Usage</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p style={{ fontWeight: "bolder" }}>
            Add information and Add column usage.
          </p>
          <CFormInput type="text" label="Column No." placeholder="" />
          <CFormInput
            type="text"
            label=" Qualification Number"
            placeholder="  "
            className="custom-placeholder"
          />

          <CFormInput
            type="text"
            label=" Assignment Number"
            placeholder=""
            className="custom-placeholder"
          />

          <CFormInput
            type="text"
            label=" Brand Name / Manufacturer Name"
            placeholder="  "
            className="custom-placeholder"
          />

          <CFormInput
            type="text"
            label=" Film Thikness / Particle Size"
            placeholder=" "
            className="custom-placeholder"
          />

          <CFormInput
            type="text"
            label=" UMO"
            placeholder=""
            className="custom-placeholder"
          />

          <CFormInput
            type="text"
            label="Mfg. Serial No."
            placeholder=""
            className="custom-placeholder"
          />

          <CFormInput
            type="text"
            label=" Length"
            placeholder=""
            className="custom-placeholder"
          />

          <CFormInput
            type="text"
            label=" UMO"
            placeholder=""
            className="custom-placeholder"
          />

          <CFormInput
            type="text"
            label=" Packing Material"
            placeholder=""
            className="custom-placeholder"
          />

          <CFormInput
            type="text"
            label=" Inner Diameter"
            placeholder=""
            className="custom-placeholder"
          />

          <CFormInput
            type="text"
            label=" UMO"
            placeholder=""
            className="custom-placeholder"
          />

          <CFormInput
            type="date"
            label=" Recieved On"
            placeholder=""
            className="custom-placeholder"
          />
          <CFormInput
            type="text"
            label=" Outer Diameter"
            placeholder=""
            className="custom-placeholder"
          />

          <CFormInput
            type="text"
            label=" Product Name"
            placeholder=""
            className="custom-placeholder"
          />

          <CFormInput
            type="text"
            label="Test(s)
            "
            placeholder=""
            className="custom-placeholder"
          />

          <CFormInput
            type="text"
            label="Column Pressure
            "
            placeholder=""
            className="custom-placeholder"
          />

          <CFormInput
            type="text"
            label="Flow Rate (Mobile Phase/Carrier Gas)
            "
            placeholder=""
            className="custom-placeholder"
          />

          <CFormInput
            type="text"
            label="Column Temperature
            "
            placeholder=""
            className="custom-placeholder"
          />

          <CFormInput
            type="text"
            label="Injector Temperature
            "
            placeholder=""
            className="custom-placeholder"
          />

          <CFormInput
            type="text"
            label="No. Of Injections
            "
            placeholder=""
            className="custom-placeholder"
          />

          <CFormInput
            type="text"
            label="Temperature
            "
            placeholder=""
            className="custom-placeholder"
          />
          <CFormInput
            type="text"
            label="Batch Number"
            className="custom-placeholder"
          />
          <CFormTextarea
            type="Remarks"
            label="Batch Number"
            className="custom-placeholder mb-"
          />

          <table className="w-full border border-collapse border-gray-300 mt-5">
            <thead>
              <tr>
                <th style={{ backgroundColor: "#6187D4", color: "white" }}>
                  Sr no.
                </th>
                <th style={{ backgroundColor: "#6187D4", color: "white" }}>
                  Column Performance Test
                </th>
                <th style={{ backgroundColor: "#6187D4", color: "white" }}>
                  Test(s)
                </th>
                <th style={{ backgroundColor: "#6187D4", color: "white" }}>
                  Pass Limits
                </th>
                <th style={{ backgroundColor: "#6187D4", color: "white" }}>
                  Observations
                </th>
                <th style={{ backgroundColor: "#6187D4", color: "white" }}>
                  Pass/Fail
                </th>
                <th style={{ backgroundColor: "#6187D4", color: "white" }}>
                  Final Result
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border border-gray-300">1</td>
                <td className="p-2 border border-gray-300">
                  GC CHROMOTOGRAPHY
                </td>
                <td className="p-2 border border-gray-300  items-center">
                  <input type="radio" name="test1" value="yes" /> Yes
                  <input type="radio" name="test1" value="no" /> No
                </td>
                <td className="p-2 border border-gray-500">
                  <table className="w-full border border-collapse border-gray-500 mt-3">
                    <thead>
                      <tr>
                        <th className="bg-lightblue p-1 border border-gray-500">
                          Lower
                        </th>
                        <th className="bg-lightblue p-1 border border-gray-500">
                          Upper
                        </th>
                        <th className="bg-lightblue p-1 border border-gray-500">
                          Decimals
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-1 border border-gray-500   ">
                          Lower value
                        </td>
                        <td className="p-1 border border-gray-500 ">
                          Upper value
                        </td>
                        <td className="p-1 border border-gray-500 ">
                          Decimals value
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
                <td className="p-2 border border-gray-300">
                  Observations data
                </td>
                <td className="p-2 border border-gray-300">Pass/Fail data</td>
                <td className="p-2 border border-gray-300">
                  Final Result data
                </td>
              </tr>
            </tbody>
          </table>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
            }}
          ></div>
        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={_props.closeModal}>
            Cancel
          </CButton>
          <CButton style={{ background: "#0F93C3", color: "white" }}>
            Add Assignment
          </CButton>
        </CModalFooter>
      </CModal>
    </div>
  );
};

export default ColumnUsageModal;
