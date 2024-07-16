import React, { useState } from "react";
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

const CoaTamplateModal = ({ visible, closeModal, handleSubmit }) => {
  const [CaoData, setCaoData] = useState({
    SampleType: "",
    CoaType: "",
    ReportTitle: "",
    MaterialCaption: "",
    SerialNo: "",
    FormatNo: "",
  });

  const [headerRows, setHeaderRows] = useState(0);
  const [footerRows, setFooterRows] = useState(0);
  const [headerColumns, setHeaderColumns] = useState(2);
  const [footerColumns, setFooterColumns] = useState(2);

  const handleHeaderRowsChange = (e) => {
    const value = Math.min(parseInt(e.target.value, 10) || 0, 50);
    setHeaderRows(value);
  };

  const handleHeaderColumnsChange = (e) => {
    const columns = parseInt(e.target.value, 10);
    setHeaderColumns(columns);
    // Reset header rows only if columns change and there are existing rows
    if (headerRows > 0) {
      setHeaderRows(0);
    }
  };

  const handleFooterRowsChange = (e) => {
    const value = Math.min(parseInt(e.target.value, 10) || 0, 50);
    setFooterRows(value);
  };

  const handleFooterColumnsChange = (e) => {
    const columns = parseInt(e.target.value, 10);
    setFooterColumns(columns);
    // Reset footer rows only if columns change and there are existing rows
    if (footerRows > 0) {
      setFooterRows(0);
    }
  };

  const renderTable = (rows, columns) => {
    const tableRows = [];
    for (let i = 0; i < rows; i++) {
      const tableColumns = [];
      for (let j = 0; j < columns; j++) {
        tableColumns.push(
          <td key={j} className="flex gap-4">
            <CFormInput type="text" placeholder={`Lower Count `} />
            <CFormSelect
              className="mb-2"
              options={[
                {
                  label: "Select Field",
                  value: "1",
                },
              ]}
            />
          </td>
        );
      }
      tableRows.push(<tr key={i}>{tableColumns}</tr>);
    }
    return tableRows;
  };
  const handleInputChange = (field, value) => {
    const updatedData = { ...CaoData, [field]: value };
    setCaoData(updatedData);
    console.log(updatedData);
  };

  const handleFormSubmit = () => {
    handleSubmit({ ...CaoData });
    closeModal();
  };

  return (
    <div>
      <CModal
        alignment="center"
        visible={visible}
        onClose={closeModal}
        size="lg"
      >
        <CModalHeader>
          <CModalTitle>Add Coa Template</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p>Add information and Add Coa Template</p>

          <CFormSelect
            className="mb-3"
            label="Sample Type"
            placeholder="Select..."
            options={[
              { label: "Select...", value: "" },
              { label: "Hydraulic Oil", value: "Hydraulic Oil" },
              { label: "HCL", value: "HCL" },
              { label: "Petrochemical", value: "Petrochemical" },
              { label: "Initiated Product", value: "Initiated Product" },
            ]}
            name="SampleType"
            value={CaoData.SampleType}
            onChange={(e) => handleInputChange("SampleType", e.target.value)}
          />

          <CFormSelect
            className="mb-3"
            label="Coa Type"
            placeholder="Select Coa Type"
            options={[
              { label: "Select Coa Type", value: "" },
              { label: "With Specification", value: "With Specification" },
              {
                label: "Without Specification",
                value: "Without Specification",
              },
              { label: "ERP", value: "ERP" },
            ]}
            name="CoaType"
            value={CaoData.CoaType}
            onChange={(e) => handleInputChange("CoaType", e.target.value)}
          />
          <CFormInput
            type="text"
            className="mb-3"
            label="Report Title"
            placeholder="Report Title"
            name="ReportTitle"
            value={CaoData.ReportTitle}
            onChange={(e) => handleInputChange("ReportTitle", e.target.value)}
          />
          <CFormInput
            type="text"
            className="mb-3"
            label="Product/Material Caption"
            placeholder="Product/Material Caption"
            name="MaterialCaption"
            value={CaoData.MaterialCaption}
            onChange={(e) =>
              handleInputChange("MaterialCaption", e.target.value)
            }
          />
          <CFormInput
            type="text"
            className="mb-3"
            label="Serial No."
            placeholder="Serial Number"
            name="SerialNo"
            value={CaoData.SerialNo}
            onChange={(e) => handleInputChange("SerialNo", e.target.value)}
          />
          <CFormInput
            type="text"
            className="mb-3"
            label="Format No."
            placeholder="Format No."
            name="FormatNo"
            value={CaoData.FormatNo}
            onChange={(e) => handleInputChange("FormatNo", e.target.value)}
          />

          <CModalTitle className="bg-light mb-3">Header</CModalTitle>

          <div className="d-flex pb-2">
            <div className="mb-3">
              <CFormInput
                type="number"
                label="Rows"
                placeholder="Rows"
                name="Rows"
                value={CaoData.Rows}
                onChange={(e) => handleInputChange("Rows", e.target.value)}
              />
            </div>
            <div className="ps-3 w-50">
              <CFormSelect
                label="Columns"
                placeholder="Columns"
                options={[
                  { label: "2", value: "2" },
                  { label: "4", value: "4" },
                  { label: "6", value: "6" },
                ]}
                value={CaoData.Columns}
                onChange={(e) => handleInputChange("Columns", e.target.value)}
              />
            </div>
          </div>

          <table className="table mb-3">
            <tbody>{renderTable(headerRows, headerColumns)}</tbody>
          </table>

          <CModalTitle className="bg-light mb-3">Footer</CModalTitle>

          <div className="d-flex pb-2">
            <div className="mb-3">
              <CFormInput
                type="number"
                label="Rows"
                placeholder="Rows"
                name="Columns"
                value={CaoData.Columns}
                onChange={(e) => handleInputChange("Columns", e.target.value)}
              />
            </div>
            <div className="ps-3 w-50">
              <CFormSelect
                label="Columns"
                placeholder="Columns"
                options={[
                  { label: "2", value: "2" },
                  { label: "4", value: "4" },
                  { label: "6", value: "6" },
                ]}
                name="Columns"
                value={CaoData.Columns}
                onChange={(e) => handleInputChange("Columns", e.target.value)}
              />
            </div>
          </div>
          <table className="table mb-3">
            <tbody>{renderTable(footerRows, footerColumns)}</tbody>
          </table>

          <div className="d-flex">
            <div className="pe-3">
              <CFormInput
                type="text"
                className="mb-3"
                placeholder="Approved By"
                name="ApprovedBy"
                value={CaoData.ApprovedBy}
                onChange={(e) =>
                  handleInputChange("ApprovedBy", e.target.value)
                }
              />
            </div>
            <div className="ps-3 w-50">
              <CFormSelect
                className="mb-3"
                placeholder="approved_by"
                options={[{ label: "approved_by", value: "approved_by" }]}
                name="approved_by"
                value={CaoData.approved_by}
                onChange={(e) =>
                  handleInputChange("approved_by", e.target.value)
                }
              />
            </div>
          </div>

          <div className="d-flex">
            <div className="pe-3">
              <CFormInput
                type="text"
                className="mb-3"
                placeholder="Reviewed By"
                name="ReviewedBy"
                value={CaoData.ReviewedBy}
                onChange={(e) =>
                  handleInputChange("ReviewedBy", e.target.value)
                }
              />
            </div>
            <div className="ps-3 w-50">
              <CFormSelect
                className="mb-3"
                placeholder="reviewed_by"
                options={[{ label: "reviewed_by", value: "reviewed_by" }]}
                name="reviewed_by"
                value={CaoData.reviewed_by}
                onChange={(e) =>
                  handleInputChange("reviewed_by", e.target.value)
                }
              />
            </div>
          </div>

          <div className="d-flex">
            <div className="pe-3">
              <CFormInput
                type="text"
                className="mb-3"
                placeholder="Checked By"
                name="CheckedBy"
                value={CaoData.CheckedBy}
                onChange={(e) => handleInputChange("CheckedBy", e.target.value)}
              />
            </div>
            <div className="ps-3 w-50">
              <CFormSelect
                className="mb-3"
                placeholder="checked_by"
                options={[{ label: "checked_by", value: "checked_by" }]}
                name="checked_by"
                value={CaoData.checked_by}
                onChange={(e) =>
                  handleInputChange("checked_by", e.target.value)
                }
              />
            </div>
          </div>
        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={closeModal}>
            Back
          </CButton>
          <CButton color="primary" onClick={handleFormSubmit}>
            Submit
          </CButton>
        </CModalFooter>
      </CModal>
    </div>
  );
};

export default CoaTamplateModal;
