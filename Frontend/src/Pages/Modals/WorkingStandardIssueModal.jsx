import { CButton, CModal, CModalBody, CModalFooter } from "@coreui/react";
import React, { useState } from "react";

const WorkingStandardIssueModal = ({ visible, closeModal, handleSubmit }) => {
  const initialData = [
    {
      id: 1,
      containerNo: "WSI-1020223-000000061",
      qty: 10,
      validityPeriod: 60,
      lotValidUpto: "19/05/2024 15:08",
      validUpto: "",
      selected: false,
    },
    {
      id: 2,
      containerNo: "WSI-1020223-000000062",
      qty: 10,
      validityPeriod: 60,
      lotValidUpto: "19/05/2024 15:08",
      validUpto: "",
      selected: false,
    },
    {
      id: 3,
      containerNo: "WSI-1020223-000000063",
      qty: 10,
      validityPeriod: 60,
      lotValidUpto: "18/05/2024 15:08",
      validUpto: "",
      selected: false,
    },
    {
      id: 4,
      containerNo: "WSI-1020223-000000064",
      qty: 10,
      validityPeriod: 60,
      lotValidUpto: "18/05/2024 15:08",
      validUpto: "",
      selected: false,
    },
    {
      id: 5,
      containerNo: "WSI-1020223-000000065",
      qty: 10,
      validityPeriod: 60,
      lotValidUpto: "18/05/2024 15:08",
      validUpto: "",
      selected: false,
    },
    {
      id: 6,
      containerNo: "WSI-1020223-000000066",
      qty: 10,
      validityPeriod: 60,
      lotValidUpto: "18/05/2024 15:08",
      validUpto: "",
      selected: false,
    },
    {
      id: 7,
      containerNo: "WSI-1020223-000000067",
      qty: 10,
      validityPeriod: 60,
      lotValidUpto: "19/05/2024 15:08",
      validUpto: "",
      selected: false,
    },
    {
      id: 8,
      containerNo: "WSI-1020223-000000068",
      qty: 10,
      validityPeriod: 60,
      lotValidUpto: "19/05/2024 15:08",
      validUpto: "",
      selected: false,
    },
    {
      id: 9,
      containerNo: "WSI-1020223-000000069",
      qty: 10,
      validityPeriod: 60,
      lotValidUpto: "19/05/2024 15:08",
      validUpto: "",
      selected: false,
    },
    {
      id: 10,
      containerNo: "WSI-1020223-000000610",
      qty: 10,
      validityPeriod: 60,
      lotValidUpto: "19/05/2024 15:08",
      validUpto: "",
      selected: false,
    },
  ];

  const [tableData, setTableData] = useState(initialData);

  const handleCheckboxChange = (id) => {
    const today = new Date().toLocaleString();
    const updatedData = tableData.map((row) => {
      if (row.id === id) {
        return { ...row, validUpto: today, selected: !row.selected };
      }
      return row;
    });
    setTableData(updatedData);
    return [tableData, setTableData];
  };

  return (
    <div>
      <CModal
        alignment="center"
        visible={visible}
        onClose={closeModal}
        size="xl"
      >
        <CModalBody>
          <table
            className="table table-bordered"
            style={{ width: "100%", height: "700px" }}
          >
            <thead className="thead-light">
              <tr>
                <th style={{ background: "#0F93C3", color: "white" }}>SNo.</th>
                <th style={{ background: "#0F93C3", color: "white" }}>
                  Working Container No
                </th>
                <th style={{ background: "#0F93C3", color: "white" }}>
                  Container Qty
                </th>
                <th style={{ background: "#0F93C3", color: "white" }}>
                  Container Validity Period Day(s)
                </th>
                <th style={{ background: "#0F93C3", color: "white" }}>
                  Container Valid Upto
                </th>
                <th style={{ background: "#0F93C3", color: "white" }}>
                  Lot Valid Upto
                </th>
                <th style={{ background: "#0F93C3", color: "white" }}>
                  Select
                </th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row) => (
                <tr key={row.id}>
                  <td>{row.id}</td>
                  <td>{row.containerNo}</td>
                  <td>{row.qty}</td>
                  <td>{row.validityPeriod}</td>
                  <td>{row.validUpto}</td>
                  <td>{row.lotValidUpto}</td>
                  <td>
                    <input
                      type="checkbox"
                      checked={row.selected}
                      onChange={() => handleCheckboxChange(row.id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CModalBody>

        <CModalFooter>
          <CButton color="light" onClick={closeModal}>
            Cancel
          </CButton>
          <CButton style={{ background: "#0F93C3", color: "white" }}>
            Submit
          </CButton>
        </CModalFooter>
      </CModal>
    </div>
  );
};

export default WorkingStandardIssueModal;
