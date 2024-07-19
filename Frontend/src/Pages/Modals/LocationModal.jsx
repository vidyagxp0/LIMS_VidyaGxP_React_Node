import {
  CButton,
  CForm,
  CFormCheck,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CModal,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CFormTextarea,
} from "@coreui/react";
import React, { useState } from "react";

const LocationModal = (_props) => {
  const [facility, setFacility] = useState("");
  const [prefix, setPrefix] = useState("");
  const [samplingPoints, setSamplingPoints] = useState("");
  const [tableData, setTableData] = useState([]);
  const randomData = ["Random1", "Random2", "Random3", "Random4"];

  const handleFacilityChange = (e) => {
    const selectedFacility = e.target.value;
    setFacility(selectedFacility);
    if (selectedFacility !== "select") {
      const randomValue =
        randomData[Math.floor(Math.random() * randomData.length)];
      setPrefix(randomValue);
    }
  };

  const handleAddSamplingPoints = () => {
    if (samplingPoints) {
      const newData = Array.from(
        { length: parseInt(samplingPoints, 10) },
        (_, index) => ({
          sno: tableData.length + index + 1,
          locationDescription: "",
          gradeClass: "",
          monitoringMethod: "",
        })
      );
      setTableData([...tableData, ...newData]);
    }
  };

  const handleInputChange = (e, index, field) => {
    const newData = [...tableData];
    newData[index][field] = e.target.value;
    setTableData(newData);
  };

  return (
    <div>
      <CModal
        alignment="center"
        visible={_props.visible}
        onClose={_props.closeModal}
        size="lg"
      >
        <CModalHeader className="p-3">
          <CModalTitle>Add Location</CModalTitle>
        </CModalHeader>
        <div className="modal-body p-4">
          <p>Add information and add new Location</p>
          <CForm>
            <div className="mb-3">
              <CFormSelect
                type="text"
                label="Facility"
                placeholder=""
                className="custom-placeholder"
                options={[
                  { value: "select", label: "select" },
                  { value: "Production", label: "Production" },
                  { value: "Block3A", label: "Block3A" },
                  { value: "f1", label: "f1" },
                ]}
                onChange={handleFacilityChange}
              />
            </div>
            <div className="mb-3">
              <CFormInput
                type="text"
                label="Plant"
                disabled
                placeholder=""
                className="custom-placeholder"
                value={facility ? "Random Data" : ""}
              />
            </div>

            <div className="mb-3">
              <CFormInput
                type="text"
                label="Location"
                placeholder=""
                className="custom-placeholder"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="">Plant Prefix/ Facility Prefix / Prefix</label>
              <div className="flex gap-3">
                <p className="flex gap-3">
                  {prefix}/ {prefix}/
                </p>
                <CFormInput
                  type="text"
                  placeholder=""
                  className="placeholder"
                />
              </div>
            </div>
            <div className="mb-3">
              <CFormTextarea
                type="text"
                label="Description"
                placeholder=""
                className="custom-placeholder"
              />
            </div>
            <CForm>
              <CFormLabel>Location Type Id</CFormLabel>
              <div className="flex gap-3">
                <CFormCheck
                  type="radio"
                  name="sampleRadio"
                  id="acceptRadio"
                  label="System"
                  value="accept"
                />
                <CFormCheck
                  type="radio"
                  name="sampleRadio"
                  id="rejectRadio"
                  label="Undefined"
                  value="reject"
                />
              </div>
              <div className="mt-2 flex gap-3">
                <CFormInput
                  type="text"
                  label="No. of Sampling Points"
                  placeholder=""
                  className="custom-placeholder"
                  value={samplingPoints}
                  onChange={(e) => setSamplingPoints(e.target.value)}
                />
                <CButton color="info" onClick={handleAddSamplingPoints}>
                  Add
                </CButton>
              </div>
            </CForm>
          </CForm>
        </div>

        <div className="modal-body p-4">
          {tableData.length > 0 && (
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="py-2 px-4 border">Sno.</th>
                  <th className="py-2 px-4 border">Location Description</th>
                  <th className="py-2 px-4 border">Grade/Class</th>
                  <th className="py-2 px-4 border">Monitoring Method</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, index) => (
                  <tr key={index}>
                    <td className="py-2 px-4 border">{row.sno}</td>
                    <td className="py-2 px-4 border">
                      <CFormInput
                        type="text"
                        value={row.locationDescription}
                        onChange={(e) =>
                          handleInputChange(e, index, "locationDescription")
                        }
                      />
                    </td>
                    <td className="py-2 px-4 border">
                      <CFormSelect
                        value={row.gradeClass}
                        onChange={(e) =>
                          handleInputChange(e, index, "gradeClass")
                        }
                        options={[
                          { value: "", label: "Select Grade/Class" },
                          { value: "Grade1", label: "Grade1" },
                          { value: "Grade2", label: "Grade2" },
                          { value: "Grade3", label: "Grade3" },
                        ]}
                      />
                    </td>
                    <td className="py-2 px-4 border">
                      <CFormSelect
                        value={row.monitoringMethod}
                        onChange={(e) =>
                          handleInputChange(e, index, "monitoringMethod")
                        }
                        options={[
                          { value: "", label: "Select Monitoring Method" },
                          { value: "Method1", label: "Method1" },
                          { value: "Method2", label: "Method2" },
                          { value: "Method3", label: "Method3" },
                        ]}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        <CModalFooter className="p-3">
          <CButton color="light" onClick={_props.closeModal}>
            Cancel
          </CButton>
          <CButton style={{ background: "#0F93C3", color: "white" }}>
            Add
          </CButton>
        </CModalFooter>
      </CModal>
    </div>
  );
};

export default LocationModal;
