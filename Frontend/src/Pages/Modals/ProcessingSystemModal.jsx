import React, { useState } from "react";
import {
  CButton,
  CForm,
  CFormInput,
  CFormSelect,
  CModal,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";

const ProcessingSystemModal = (_props) => {
  const [sampleAreas, setSampleAreas] = useState([]);
  const [areaCount, setAreaCount] = useState(0);

  const handleAddSampleAreas = () => {
    const newSampleAreas = Array.from({ length: areaCount }, (_, i) => ({
      id: i + 1,
      sampleArea: "",
      tableData: [],
      sampleAreaInput: "",
    }));
    setSampleAreas(newSampleAreas);
  };

  const handleSampleAreaChange = (index, value) => {
    const newSampleAreas = [...sampleAreas];
    newSampleAreas[index].sampleArea = value;
    setSampleAreas(newSampleAreas);
  };

  const handleSampleAreaInputChange = (index, value) => {
    const newSampleAreas = [...sampleAreas];
    newSampleAreas[index].sampleAreaInput = value;
    setSampleAreas(newSampleAreas);
  };

  const handleAddTableData = (index) => {
    const newSampleAreas = [...sampleAreas];
    const sampleArea = newSampleAreas[index];
    if (sampleArea.sampleAreaInput.trim() !== "") {
      sampleArea.tableData.push({
        id: sampleArea.tableData.length + 1,
        samplePointPrefix: "",
        samplePointDescription: "",
      });
      sampleArea.sampleAreaInput = "";
      setSampleAreas(newSampleAreas);
    }
  };

  const handleTableInputChange = (sampleAreaIndex, rowIndex, field, value) => {
    const newSampleAreas = [...sampleAreas];
    const tableData = newSampleAreas[sampleAreaIndex].tableData;
    tableData[rowIndex][field] = value;
    setSampleAreas(newSampleAreas);
  };

  return (
    <div>
      <CModal
        alignment="center"
        visible={_props.visible}
        onClose={_props.closeModal}
        size="xl"
      >
        <CModalHeader className="p-3">
          <CModalTitle>Add Processing System</CModalTitle>
        </CModalHeader>
        <div className="modal-body p-4">
          <p>Add information and register new Processing System</p>
          <CForm>
            <div className="mb-3">
              <CFormSelect
                type="text"
                label="Category"
                placeholder=""
                className="custom-placeholder"
                options={[
                  { value: "select", label: "select" },
                  { value: "cat 1", label: "cat 1" },
                  { value: "in-process", label: "in-process" },
                  { value: "purified water", label: "purified water" },
                ]}
              />
            </div>
            <div className="mb-3">
              <CFormInput
                type="text"
                label="Processing System"
                placeholder=""
                className="custom-placeholder"
              />
            </div>
            <div className="mb-3">
              <CFormInput
                type="text"
                label="Unique Code"
                placeholder=""
                className="custom-placeholder"
              />
            </div>
            <div className="mb-3">
              <CFormInput
                type="text"
                label="Description"
                placeholder=""
                className="custom-placeholder"
              />
            </div>
            <div className="mb-3">
              <CFormInput
                type="number"
                label="No. of Sample Area(s)"
                placeholder=""
                className="custom-placeholder"
                value={areaCount}
                onChange={(e) => setAreaCount(Number(e.target.value))}
              />
              <CButton color="info" onClick={handleAddSampleAreas}>
                Add
              </CButton>
            </div>
            {sampleAreas.map((area, index) => (
              <div key={area.id}>
                <div className="mb-3">
                  <CFormInput
                    type="text"
                    label="Sample Area"
                    placeholder=""
                    className="custom-placeholder"
                    value={area.sampleArea}
                    onChange={(e) =>
                      handleSampleAreaChange(index, e.target.value)
                    }
                  />
                  <CFormInput
                    type="text"
                    label="No. of Sample Area(s)"
                    placeholder=""
                    className="custom-placeholder"
                    value={area.sampleAreaInput}
                    onChange={(e) =>
                      handleSampleAreaInputChange(index, e.target.value)
                    }
                  />
                  <CButton color="info" onClick={() => handleAddTableData(index)}>
                    Add
                  </CButton>
                </div>
                {area.tableData.length > 0 && (
                  <table className="table-auto w-full mt-4">
                    <thead>
                      <tr>
                        <th className="px-4 py-2">Sno.</th>
                        <th className="px-4 py-2">Sample Point Prefix</th>
                        <th className="px-4 py-2">Sample Point Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      {area.tableData.map((row, rowIndex) => (
                        <tr key={row.id}>
                          <td className="border px-4 py-2">{row.id}</td>
                          <td className="border px-4 py-2">
                            <input
                              type="text"
                              value={row.samplePointPrefix}
                              onChange={(e) =>
                                handleTableInputChange(index, rowIndex, "samplePointPrefix", e.target.value)
                              }
                            />
                          </td>
                          <td className="border px-4 py-2">
                            <input
                              type="text"
                              value={row.samplePointDescription}
                              onChange={(e) =>
                                handleTableInputChange(index, rowIndex, "samplePointDescription", e.target.value)
                              }
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            ))}
          </CForm>
        </div>
        <CModalFooter className="p-3">
          <CButton color="light" onClick={_props.closeModal}>
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

export default ProcessingSystemModal;
