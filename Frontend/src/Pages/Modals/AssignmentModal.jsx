import {
  CButton,
  CFormInput,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from "@coreui/react";
import React, { useState } from "react";

const AssignmentModal = (_props) => {
  const [numVariables, setNumVariables] = useState("");
  const [rows, setRows] = useState([]);

  const handleInputChange = (e) => {
    setNumVariables(e.target.value);
  };

  const handleAddClick = () => {
    if (numVariables) {
      const numberOfRows = parseInt(numVariables, 10);
      const newRows = Array.from({ length: numberOfRows }, (_, index) => ({
        column1: `Row ${index + 1}, Cell 1`,
        column2: `Row ${index + 1}, Cell 2`,
        column3: `Row ${index + 1}, Cell 3`,
        column4: `Row ${index + 1}, Cell 4`,
      }));
      setRows(newRows);
    }
  };
  return (
    <div>
      <CModal
        alignment="center"
        visible={_props.visible}
        onClose={_props.closeModal}
        size="lg"
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
            className=" mb-3  custom-placeholder"
          />

          <CFormInput
            type="text"
            label=" Column Application"
            placeholder=" Column Application "
            className=" mb-3  custom-placeholder"
          />

          <CFormInput
            type="text"
            label=" Brand Name / Manufacturer Name"
            placeholder=" Brand Name / Manufacturer Name "
            className=" mb-3  custom-placeholder"
          />

          <CFormInput
            type="text"
            label=" Film Thikness / Particle Size"
            placeholder=" Film Thikness / Particle Size "
            className=" mb-3  custom-placeholder"
          />

          <CFormInput
            type="text"
            label=" UMO"
            placeholder="UMO "
            className=" mb-3  custom-placeholder"
          />

          <CFormInput
            type="text"
            label="Mfg. Serial No."
            placeholder="Mfg. Serial No."
            className=" mb-3  custom-placeholder"
          />

          <CFormInput
            type="text"
            label=" Length"
            placeholder="Length"
            className=" mb-3  custom-placeholder"
          />

          <CFormInput
            type="text"
            label=" UMO"
            placeholder="UMO"
            className=" mb-3  custom-placeholder"
          />

          <CFormInput
            type="text"
            label=" Packing Material"
            placeholder="Packing Material"
            className=" mb-3  custom-placeholder"
          />

          <CFormInput
            type="text"
            label=" Inner Diameter"
            placeholder=""
            className=" mb-3  custom-placeholder"
          />

          <CFormInput
            type="text"
            label=" UMO"
            placeholder="UMO"
            className=" mb-3  custom-placeholder"
          />

          <CFormInput
            type="text"
            label=" Outer Diameter"
            placeholder=""
            className=" mb-3  custom-placeholder"
          />

          <CFormInput
            type="date"
            label=" Recieved On"
            placeholder=""
            className=" mb-3  custom-placeholder"
          />

          <CFormInput
            type="text"
            label=" Specification ID"
            placeholder=""
            className=" mb-3  custom-placeholder"
          />

          <CFormInput
            type="text"
            label=" Product / Material"
            placeholder=""
            className=" mb-3  custom-placeholder"
          />

          <h3>Test(s) Selection for Analysis</h3>
          <table className=" mb-3  table table-bordered">
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
          <div className=" mb-3  form-container">
            <label className=" mb-3  form-label">
              Number of Performance Test
            </label>
            <div className=" mb-3  flex gap-3">
              <CFormInput
                type="number"
                placeholder="Number of variables"
                className=" mb-3  custom-input"
                value={numVariables}
                onChange={handleInputChange}
              />
              <CButton
                color="info"
                className=" mb-3  custom-button"
                onClick={handleAddClick}
              >
                Add
              </CButton>
            </div>

            {rows.length > 0 && (
              <CTable>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">S no.</CTableHeaderCell>
                    <CTableHeaderCell scope="col">
                      Performance Test Name
                    </CTableHeaderCell>
                    <CTableHeaderCell scope="col">Pass Limits</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Lower</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Upper</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Decimals</CTableHeaderCell>
                    <CTableHeaderCell scope="col">UMO</CTableHeaderCell>
                    <CTableHeaderCell scope="col">
                      Pass Limit Description
                    </CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {rows.map((row, index) => (
                    <CTableRow key={index}>
                      <CTableDataCell>{row.column1}</CTableDataCell>
                      <CTableDataCell>{row.column2}</CTableDataCell>
                      <CTableDataCell>{row.column3}</CTableDataCell>
                      <CTableDataCell>{row.column4}</CTableDataCell>
                      <CTableDataCell>{row.column5}</CTableDataCell>
                      <CTableDataCell>{row.column6}</CTableDataCell>
                      <CTableDataCell>{row.column7}</CTableDataCell>
                      <CTableDataCell>{row.column8}</CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            )}
          </div>

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
