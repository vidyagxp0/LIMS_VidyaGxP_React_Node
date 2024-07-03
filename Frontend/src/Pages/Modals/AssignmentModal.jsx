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

const AssignmentModal = (_props) => {
  return (
    <div>
      <CModal
        alignment="center"
        visible={_props.visible}
        onClose={_props.closeModal}
        size="xl"
      >
        <CModalHeader>
          <CModalTitle>Add Assignmment</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p style={{ fontWeight: "bolder" }}>Add information.</p>
          <CFormInput type="text" label="Column No." placeholder="Column No." />
          <CFormInput
            type="text"
            label=" Column Name"
            placeholder=" Column Name "
            className="custom-placeholder"
          />

          <CFormInput
            type="text"
            label=" Column Application"
            placeholder=" Column Application "
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
            type="text"
            label=" Outer Diameter"
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
            label=" Specification ID"
            placeholder=""
            className="custom-placeholder"
          />

          <CFormInput
            type="text"
            label=" Product / Material"
            placeholder=""
            className="custom-placeholder"
          />

          <h3>Test(s) Selection for Analysis</h3>
          <table className="table table-bordered">
            <thead>
              <th>S No.</th>
              <th>Test Name</th>
              <th>Selection</th>
            </thead>
            <tr>
              <td>1</td>
              <td>Viscosity @40C</td>
              <td>
                <input type="checkbox" />
              </td>
            </tr>

            <tr>
              <td>2</td>
              <td>Total Acid Number (TAN)</td>
              <td>
                <input type="checkbox" />
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Water Content PPM</td>
              <td>
                <input type="checkbox" />
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>TAN Total acid number</td>
              <td>
                <input type="checkbox" />
              </td>
            </tr>
            <tr>
              <td>5</td>
              <td>Viscosity @40C</td>
              <td>
                <input type="checkbox" />
              </td>
            </tr>
            <tr>
              <td>6</td>
              <td>Water Content PPM</td>
              <td>
                <input type="checkbox" />
              </td>
            </tr>
            <tr>
              <td>7</td>
              <td>Average Weight</td>
              <td>
                <input type="checkbox" />
              </td>
            </tr>
            <tr>
              <td>8</td>
              <td>Description</td>
              <td>
                <input type="checkbox" />
              </td>
            </tr>
            <tr>
              <td>9</td>
              <td>Assay test for SPP</td>
              <td>
                <input type="checkbox" />
              </td>
            </tr>
            <tr>
              <td>10</td>
              <td>Specific Gravity PA</td>
              <td>
                <input type="checkbox" />
              </td>
            </tr>
            <tr>
              <td>11</td>
              <td>Color Test</td>
              <td>
                <input type="checkbox" />
              </td>
            </tr>
            <tr>
              <td>12</td>
              <td>Specific Gravity</td>
              <td>
                <input type="checkbox" />
              </td>
            </tr>
            <tr>
              <td>13</td>
              <td>Melting Range</td>
              <td>
                <input type="checkbox" />
              </td>
            </tr>
            <tr>
              <td>14</td>
              <td>Color</td>
              <td>
                <input type="checkbox" />
              </td>
            </tr>
            <tr>
              <td>15</td>
              <td>Ph test</td>
              <td>
                <input type="checkbox" />
              </td>
            </tr>
            <tr>
              <td>16</td>
              <td>Test</td>
              <td>
                <input type="checkbox" />
              </td>
            </tr>
            <tr>
              <td>17</td>
              <td>Hydroxyl Value</td>
              <td>
                <input type="checkbox" />
              </td>
            </tr>
            <tr>
              <td>18</td>
              <td>Acid Value</td>
              <td>
                <input type="checkbox" />
              </td>
            </tr>
            <tr>
              <td>19</td>
              <td>Viscosity (mPa.s)</td>
              <td>
                <input type="checkbox" />
              </td>
            </tr>
            <tr>
              <td>20</td>
              <td>Color Test</td>
              <td>
                <input type="checkbox" />
              </td>
            </tr>
          </table>

          <h3>Column Performance Test</h3>
          <CFormInput
            type="text"
            label=" Number of Performance Test"
            placeholder="No. of Variables"
            className="custom-placeholder"
          />
          <CButton color="info" onClick={_props.closeModal}>
            Add
          </CButton>

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

export default AssignmentModal;
