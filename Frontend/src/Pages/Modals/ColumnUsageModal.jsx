import {
  CButton,
  CFormInput,
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
        size="xl"
      >
        <CModalHeader>
          <CModalTitle>Add Column Usage</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p style={{ fontWeight: "bolder" }}>
            Add information and Add column usage.
          </p>
          <CFormInput type="text" label="Column No." placeholder="Column No." />
          <CFormInput
            type="text"
            label=" Qualification Number"
            placeholder=" Qualification Number "
            className="custom-placeholder"
          />

          <CFormInput
            type="text"
            label=" Assignment Number"
            placeholder=" Assignment Number "
            className="custom-placeholder"
          />

          <CFormInput
            type="text"
            label=" Brand Name / Manufacturer Name"
            placeholder=" Brand Name / Manufacturer Name "
            className="custom-placeholder"
          />

          <CFormInput
            type="text"
            label=" Film Thikness / Particle Size"
            placeholder=" Film Thikness / Particle Size "
            className="custom-placeholder"
          />

          <CFormInput
            type="text"
            label=" UMO"
            placeholder="UMO "
            className="custom-placeholder"
          />

          <CFormInput
            type="text"
            label="Mfg. Serial No."
            placeholder="Mfg. Serial No."
            className="custom-placeholder"
          />

          <CFormInput
            type="text"
            label=" Length"
            placeholder="Length"
            className="custom-placeholder"
          />

          <CFormInput
            type="text"
            label=" UMO"
            placeholder="UMO"
            className="custom-placeholder"
          />

          <CFormInput
            type="text"
            label=" Packing Material"
            placeholder="Packing Material"
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
            placeholder="UMO"
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
            label="Batch Number
            "
            placeholder=""
            className="custom-placeholder"
          />

          <h5>Remarks</h5>
          <textarea
            style={{ width: "350px", height: "100px" }}
            name=""
            id=""
          ></textarea>

          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Sr no.</th>
                <th>Column Performance Test</th>
                <th>Test(s)</th>
                <th>Pass Limits</th>
                <th>Observations</th>
                <th>Pass/Fail</th>
                <th>Final Result</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>GC CHROMOTOGRAPHY</td>
                <td>
                  <input type="radio" name="test1" value="yes" /> Yes
                  <input type="radio" name="test1" value="no" /> No
                </td>
                <td>
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>Lower</th>
                        <th>Upper</th>
                        <th>Decimals</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Lower value</td>
                        <td>Upper value</td>
                        <td>Decimals value</td>
                      </tr>
                    </tbody>
                  </table>
                </td>
                <td>Observations data</td>
                <td>Pass/Fail data</td>
                <td>Final Result data</td>
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
