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
    const { usl, lsl } = row;

    const uslValue = parseFloat(usl);
    const lslValue = parseFloat(lsl);

    if (uslValue <= 6 && lslValue <= 2) {
      return { backgroundColor: "green" };
    }

    if (uslValue > 6 && lslValue > 2) {
      return { backgroundColor: "red" };
    }

    if ((uslValue > 6 && lslValue <= 2) || (uslValue <= 6 && lslValue > 2)) {
      return { backgroundColor: "blue" };
    }

    // Default style
    return {};
  };

  return (
    <CTable bordered hover>
      <CTableHead>
        <CTableRow>
          <CTableHeaderCell scope="col">Sno.</CTableHeaderCell>
          <CTableHeaderCell scope="col">Test Parameter</CTableHeaderCell>
          <CTableHeaderCell scope="col">USL</CTableHeaderCell>
          <CTableHeaderCell scope="col">LSL</CTableHeaderCell>
          <CTableHeaderCell scope="col">Result</CTableHeaderCell>
          <CTableHeaderCell scope="col">Remarks</CTableHeaderCell>
        </CTableRow>
      </CTableHead>
      <CTableBody>
        {testParameters.map((row, index) => (
          <CTableRow key={index}>
            <CTableDataCell>
              <CFormInput
                type="text"
                name="sno"
                value={index + 1} 
                disabled
              />
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
                name="usl"
                value={row.usl}
                min={0}
                max={6} 
                onChange={(e) => handleRowChange(index, e)}
              />
            </CTableDataCell>

            <CTableDataCell>
              <CFormInput
                type="number"
                name="lsl"
                value={row.lsl}
                min={0}
                max={2} 
                onChange={(e) => handleRowChange(index, e)}
              />
            </CTableDataCell>

            <CTableDataCell style={getResultCellStyle(row)}>
              <CFormInput
                type="text"
                name="result"
                value={row.result}
                onChange={(e) => handleRowChange(index, e)}
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
