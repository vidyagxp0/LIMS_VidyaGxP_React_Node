import React, { useState,useEffect } from "react";
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

const CoaTamplateModal = ({visible, closeModal, handleSubmit}) => {
  const [coaData, setCoaData] = useState({
    sampleType: "",
    coaType: "",
    reportTitle: "",
    materialCaption: "",
    serialNo: "",
    formatNo: "",
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
    const updatedData = { ...coaData, [field]: value };
    setCoaData(updatedData);
    console.log(updatedData);
  };

  const handleFormSubmit = () => {
    handleSubmit({...coaData});
    closeModal();
    resetForm();
  };

  const resetForm = () => {
    setCoaData({
      sampleType: "",
      coaType: "",
      reportTitle: "",
      materialCaption: "",
      serialNo: "",
      formatNo: "",
    });
  };

  useEffect(() => {
    resetForm();
  }, []);

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
            value={coaData.sampleType}
            onChange={(e) => handleInputChange("sampleType", e.target.value)}
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
            value={coaData.coaType}
            onChange={(e) => handleInputChange("coaType", e.target.value)}
          />
         <CFormInput
    type="text"
    className="mb-3"
    label="Report Title"
    placeholder="Report Title"
    name="ReportTitle"
    value={coaData.reportTitle}
    onChange={(e) => handleInputChange("reportTitle", e.target.value)}
          />
          <CFormInput
    type="text"
    className="mb-3"
    label="Product/Material Caption"
    placeholder="Product/Material Caption"
    name="MaterialCaption"
    value={coaData.materialCaption}
    onChange={(e) => handleInputChange("materialCaption", e.target.value)}
/>
<CFormInput
    type="text"
    className="mb-3"
    label="Serial No."
    placeholder="Serial Number"
    name="SerialNo"
    value={coaData.serialNo}
    onChange={(e) => handleInputChange("serialNo", e.target.value)}
/>
<CFormInput
    type="text"
    className="mb-3"
    label="Format No."
    placeholder="Format No."
    name="FormatNo"
    value={coaData.formatNo}
    onChange={(e) => handleInputChange("formatNo", e.target.value)}
/>

          <CModalTitle className="bg-light mb-3">Header</CModalTitle>

          <div className="d-flex pb-2">
            <div className="mb-3">
              <CFormInput
                type="number"
                label="Rows"
                placeholder="Rows"
                name="Rows"
                value={coaData.Rows}
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
                value={coaData.Columns}
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
                value={coaData.Columns}
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
                value={coaData.Columns}
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
                value={coaData.ApprovedBy}
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
                value={coaData.approved_by}
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
                value={coaData.ReviewedBy}
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
                value={coaData.reviewed_by}
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
                value={coaData.CheckedBy}
                onChange={(e) => handleInputChange("CheckedBy", e.target.value)}
              />
            </div>
            <div className="ps-3 w-50">
              <CFormSelect
                className="mb-3"
                placeholder="checked_by"
                options={[{ label: "checked_by", value: "checked_by" }]}
                name="checked_by"
                value={coaData.checked_by}
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
