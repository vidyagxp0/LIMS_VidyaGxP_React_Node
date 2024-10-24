import React from "react";
import {
  CTable,
  CTableBody,
  CTableRow,
  CTableDataCell,
  CTableHeaderCell,
  CTableHead,
  CFormInput,
  CFormSelect,
} from "@coreui/react";

const testParameterOptions = [
  "Description",
  "Weight of 20 Tablets",
  "Average Weight (mg)",
  "Thickness",
  "Disintegration Time",
  "Hardness",
  "Diameter",
  "Friability",
];

const TestParametersTable = ({ testParameters, handleRowChange }) => {
  const getResultCellStyle = (row) => {
    const { usl, lsl, result } = row;
    const uslValue = parseFloat(usl);
    const lslValue = parseFloat(lsl);
    const resultValue = parseFloat(result);

    if (isNaN(resultValue)) {
      return {}; // No styling if result is not a valid number
    }

    if (resultValue < lslValue || resultValue > uslValue) {
      return { border: "4px solid red", color: "red" }; // Red border and text color if result is outside range
    }

    if (resultValue >= lslValue && resultValue <= uslValue) {
      return { border: "4px solid green", color: "green" }; // Green border and text color if result is within range
    }

    // Default style
    return {};
  };

  const isResultEditable = (row) => {
    const { usl, lsl } = row;
    const uslValue = parseFloat(usl);
    const lslValue = parseFloat(lsl);

    // Result field is only editable if both USL and LSL are valid numbers and LSL <= USL
    return !isNaN(uslValue) && !isNaN(lslValue) && lslValue <= uslValue;
  };

  return (
    <CTable bordered hover>
      <CTableHead>
        <CTableRow>
          <CTableHeaderCell scope="col">Sno.</CTableHeaderCell>
          <CTableHeaderCell scope="col">Test Parameter</CTableHeaderCell>
          <CTableHeaderCell scope="col">LSL</CTableHeaderCell>
          <CTableHeaderCell scope="col">USL</CTableHeaderCell>
          <CTableHeaderCell scope="col">Result</CTableHeaderCell>
          <CTableHeaderCell scope="col">Remarks</CTableHeaderCell>
        </CTableRow>
      </CTableHead>
      <CTableBody>
        {testParameters.map((row, index) => (
          <CTableRow key={index}>
            <CTableDataCell>
              <CFormInput type="text" name="sno" value={index + 1} disabled />
            </CTableDataCell>
            <CTableDataCell>
              <CFormSelect
                name="testParameter"
                value={row.testParameter}
                onChange={(e) => handleRowChange(index, e)}
              >
                <option value="">Select Test Parameter</option>
                {testParameterOptions.map((option, idx) => (
                  <option key={idx} value={option}>
                    {option}
                  </option>
                ))}
              </CFormSelect>
            </CTableDataCell>
            <CTableDataCell>
              <CFormInput
                type="number"
                name="lsl"
                value={row.lsl}
                min={0}
                onChange={(e) => handleRowChange(index, e)}
              />
            </CTableDataCell>

            <CTableDataCell>
              <CFormInput
                type="number"
                name="usl"
                value={row.usl}
                min={0}
                onChange={(e) => handleRowChange(index, e)}
              />
            </CTableDataCell>

            <CTableDataCell>
              <CFormInput
                type="number"
                name="result"
                value={row.result}
                onChange={(e) => handleRowChange(index, e)}
                style={getResultCellStyle(row)} // Apply dynamic border and text color
                disabled={!isResultEditable(row)} // Disable if LSL/USL are invalid
              />
            </CTableDataCell>
            <CTableDataCell>
              <CFormInput
                type="text"
                name="remarks"
                value={row.remarks}
                onChange={(e) => handleRowChange(index, e)}
              />
            </CTableDataCell>
          </CTableRow>
        ))}
      </CTableBody>
    </CTable>
  );
};

export default TestParametersTable;
