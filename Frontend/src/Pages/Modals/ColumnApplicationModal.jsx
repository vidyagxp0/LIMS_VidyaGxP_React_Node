import {
  CButton,
  CFormInput,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";
import React, { useEffect, useState } from "react";

const ColumnApplicationModal = ({ visible, closeModal, handleSubmit }) => {
  const [colData, setColData] = useState({
    name: "",
    prefix: "",
    columnPressureQualification: false,
    columnPressureUsage: false,
    flowRateQualification: false,
    flowRateUsage: false,
    phQualification: false,
    phUsage: false,
    waveLengthQualification: false,
    waveLengthUsage: false,
    injectorQualification: false,
    injectorUsage: false,
    detectorTypeQualification: false,
    detectorTypeUsage: false,
    injectorVolumeQualification: false,
    injectorVolumeUsage: false,
    mobilePhaseQualification: false,
    mobilePhaseUsage: false,
    hydrogenFlowRateQualification: false,
    hydrogenFlowRateUsage: false,
    airFlowRateQualification: false,
    airFlowRateUsage: false,
    columnTemperatureQualification: false,
    columnTemperatureUsage: false,
    injectorTemperatureQualification: false,
    injectorTemperatureUsage: false,
    noOfInjectionQualification: false,
    noOfInjectionUsage: false,
    splitRatioQualification: false,
    splitRatioUsage: false,
    modeQualification: false,
    modeUsage: false,
    concentrationQualification: false,
    concentrationUsage: false,
    temperatureQualification: false,
    temperatureUsage: false,
    pharmacopoeiaQualification: false,
    pharmacopoeiaUsage: false,
    detectorTemperatureQualification: false,
    detectorTemperatureUsage: false,
    arNoQualification: false,
    arNoUsage: false,
    loadQualification: false,
    loadUsage: false,
    batchNoQualification: false,
    batchNoUsage: false,
  });
  const handleInputChange = (field, value) => {
    const updatedData = { ...colData, [field]: value };
    setColData(updatedData);
    console.log(updatedData);
  };

  const handleFormSubmit = () => {
    handleSubmit({ ...colData });
    closeModal();
  };

  const resetForm = () => {
    setColData({
      name: "",
      prefix: "",
      columnPressureQualification: false,
      columnPressureUsage: false,
      flowRateQualification: false,
      flowRateUsage: false,
      phQualification: false,
      phUsage: false,
      waveLengthQualification: false,
      waveLengthUsage: false,
      injectorQualification: false,
      injectorUsage: false,
      detectorTypeQualification: false,
      detectorTypeUsage: false,
      injectorVolumeQualification: false,
      injectorVolumeUsage: false,
      mobilePhaseQualification: false,
      mobilePhaseUsage: false,
      hydrogenFlowRateQualification: false,
      hydrogenFlowRateUsage: false,
      airFlowRateQualification: false,
      airFlowRateUsage: false,
      columnTemperatureQualification: false,
      columnTemperatureUsage: false,
      injectorTemperatureQualification: false,
      injectorTemperatureUsage: false,
      noOfInjectionQualification: false,
      noOfInjectionUsage: false,
      splitRatioQualification: false,
      splitRatioUsage: false,
      modeQualification: false,
      modeUsage: false,
      concentrationQualification: false,
      concentrationUsage: false,
      temperatureQualification: false,
      temperatureUsage: false,
      pharmacopoeiaQualification: false,
      pharmacopoeiaUsage: false,
      detectorTemperatureQualification: false,
      detectorTemperatureUsage: false,
      arNoQualification: false,
      arNoUsage: false,
      loadQualification: false,
      loadUsage: false,
      batchNoQualification: false,
      batchNoUsage: false,
    });
  };

  useEffect(() => {
    if (visible) {
      resetForm();
    }
  }, [visible]);

  return (
    <div>
      <CModal size="lg" alignment="" visible={visible} onClose={closeModal}>
        <CModalHeader>
          <CModalTitle>New Application</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p style={{ fontWeight: "bolder" }}>New Application</p>

          <CFormInput
            type="text"
            label="Name"
            placeholder="Name"
            className="custom-placeholder"
            name="name"
            value={colData.name}
            onChange={(e) => {
              handleInputChange("name", e.target.value);
            }}
          />
          <CFormInput
            type="text"
            label="Prefix"
            placeholder="Prefix"
            className="custom-placeholder"
            name="prefix"
            value={colData.prefix}
            onChange={(e) => {
              handleInputChange("prefix", e.target.value);
            }}
          />

          <table className="table table-bordered" style={{ marginTop: "5px" }}>
            <thead>
              <tr>
                <th>
                  Selected Standard Fields Displayed At Columns Qualification
                  And Usage
                </th>
                <th>Qualification</th>
                <th>Usage</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Column Pressure</td>
                <td>
                  <input
                    type="checkbox"
                    name="columnPressureQualification"
                    checked={colData.columnPressureQualification}
                    onChange={handleInputChange}
                  />
                </td>
                <td>
                  <input
                    type="checkbox"
                    name="columnPressureUsage"
                    checked={colData.columnPressureUsage}
                    onChange={handleInputChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Flow Rate (Mobile Phase/Carrier Gas)</td>
                <td>
                  <input
                    type="checkbox"
                    name="flowRateQualification"
                    checked={colData.flowRateQualification}
                    onChange={handleInputChange}
                  />
                </td>
                <td>
                  <input
                    type="checkbox"
                    name="flowRateUsage"
                    checked={colData.flowRateUsage}
                    onChange={handleInputChange}
                  />
                </td>
              </tr>
              <tr>
                <td>PH of Mobile Phase</td>
                <td>
                  <input
                    type="checkbox"
                    name="phQualification"
                    checked={colData.phQualification}
                    onChange={handleInputChange}
                  />
                </td>
                <td>
                  <input
                    type="checkbox"
                    name="phUsage"
                    checked={colData.phUsage}
                    onChange={handleInputChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Wave Length</td>
                <td>
                  <input
                    type="checkbox"
                    name="waveLengthQualification"
                    checked={colData.waveLengthQualification}
                    onChange={handleInputChange}
                  />
                </td>
                <td>
                  <input
                    type="checkbox"
                    name="waveLengthUsage"
                    checked={colData.waveLengthUsage}
                    onChange={handleInputChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Injector</td>
                <td>
                  <input
                    type="checkbox"
                    name="injectorQualification"
                    checked={colData.injectorQualification}
                    onChange={handleInputChange}
                  />
                </td>
                <td>
                  <input
                    type="checkbox"
                    name="injectorUsage"
                    checked={colData.injectorUsage}
                    onChange={handleInputChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Detector Type</td>
                <td>
                  <input
                    type="checkbox"
                    name="detectorTypeQualification"
                    checked={colData.detectorTypeQualification}
                    onChange={handleInputChange}
                  />
                </td>
                <td>
                  <input
                    type="checkbox"
                    name="detectorTypeUsage"
                    checked={colData.detectorTypeUsage}
                    onChange={handleInputChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Injector Volume</td>
                <td>
                  <input
                    type="checkbox"
                    name="injectorVolumeQualification"
                    checked={colData.injectorVolumeQualification}
                    onChange={handleInputChange}
                  />
                </td>
                <td>
                  <input
                    type="checkbox"
                    name="injectorVolumeUsage"
                    checked={colData.injectorVolumeUsage}
                    onChange={handleInputChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Mobile Phase / Carrier Gas</td>
                <td>
                  <input
                    type="checkbox"
                    name="mobilePhaseQualification"
                    checked={colData.mobilePhaseQualification}
                    onChange={handleInputChange}
                  />
                </td>
                <td>
                  <input
                    type="checkbox"
                    name="mobilePhaseUsage"
                    checked={colData.mobilePhaseUsage}
                    onChange={handleInputChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Hydrogen Low Rate</td>
                <td>
                  <input
                    type="checkbox"
                    name="hydrogenFlowRateQualification"
                    checked={colData.hydrogenFlowRateQualification}
                    onChange={handleInputChange}
                  />
                </td>
                <td>
                  <input
                    type="checkbox"
                    name="hydrogenFlowRateUsage"
                    checked={colData.hydrogenFlowRateUsage}
                    onChange={handleInputChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Air Flow Rate</td>
                <td>
                  <input
                    type="checkbox"
                    name="airFlowRateQualification"
                    checked={colData.airFlowRateQualification}
                    onChange={handleInputChange}
                  />
                </td>
                <td>
                  <input
                    type="checkbox"
                    name="airFlowRateUsage"
                    checked={colData.airFlowRateUsage}
                    onChange={handleInputChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Column Temperature</td>
                <td>
                  <input
                    type="checkbox"
                    name="columnTemperatureQualification"
                    checked={colData.columnTemperatureQualification}
                    onChange={handleInputChange}
                  />
                </td>
                <td>
                  <input
                    type="checkbox"
                    name="columnTemperatureUsage"
                    checked={colData.columnTemperatureUsage}
                    onChange={handleInputChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Injector Temperature</td>
                <td>
                  <input
                    type="checkbox"
                    name="injectorTemperatureQualification"
                    checked={colData.injectorTemperatureQualification}
                    onChange={handleInputChange}
                  />
                </td>
                <td>
                  <input
                    type="checkbox"
                    name="injectorTemperatureUsage"
                    checked={colData.injectorTemperatureUsage}
                    onChange={handleInputChange}
                  />
                </td>
              </tr>
              <tr>
                <td>No. Of Injection</td>
                <td>
                  <input
                    type="checkbox"
                    name="noOfInjectionQualification"
                    checked={colData.noOfInjectionQualification}
                    onChange={handleInputChange}
                  />
                </td>
                <td>
                  <input
                    type="checkbox"
                    name="noOfInjectionUsage"
                    checked={colData.noOfInjectionUsage}
                    onChange={handleInputChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Split Ratio</td>
                <td>
                  <input
                    type="checkbox"
                    name="splitRatioQualification"
                    checked={colData.splitRatioQualification}
                    onChange={handleInputChange}
                  />
                </td>
                <td>
                  <input
                    type="checkbox"
                    name="splitRatioUsage"
                    checked={colData.splitRatioUsage}
                    onChange={handleInputChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Mode</td>
                <td>
                  <input
                    type="checkbox"
                    name="modeQualification"
                    checked={colData.modeQualification}
                    onChange={handleInputChange}
                  />
                </td>
                <td>
                  <input
                    type="checkbox"
                    name="modeUsage"
                    checked={colData.modeUsage}
                    onChange={handleInputChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Concentration</td>
                <td>
                  <input
                    type="checkbox"
                    name="concentrationQualification"
                    checked={colData.concentrationQualification}
                    onChange={handleInputChange}
                  />
                </td>
                <td>
                  <input
                    type="checkbox"
                    name="concentrationUsage"
                    checked={colData.concentrationUsage}
                    onChange={handleInputChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Temperature</td>
                <td>
                  <input
                    type="checkbox"
                    name="temperatureQualification"
                    checked={colData.temperatureQualification}
                    onChange={handleInputChange}
                  />
                </td>
                <td>
                  <input
                    type="checkbox"
                    name="temperatureUsage"
                    checked={colData.temperatureUsage}
                    onChange={handleInputChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Pharmacopoeia</td>
                <td>
                  <input
                    type="checkbox"
                    name="pharmacopoeiaQualification"
                    checked={colData.pharmacopoeiaQualification}
                    onChange={handleInputChange}
                  />
                </td>
                <td>
                  <input
                    type="checkbox"
                    name="pharmacopoeiaUsage"
                    checked={colData.pharmacopoeiaUsage}
                    onChange={handleInputChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Detector Temperature</td>
                <td>
                  <input
                    type="checkbox"
                    name="detectorTemperatureQualification"
                    checked={colData.detectorTemperatureQualification}
                    onChange={handleInputChange}
                  />
                </td>
                <td>
                  <input
                    type="checkbox"
                    name="detectorTemperatureUsage"
                    checked={colData.detectorTemperatureUsage}
                    onChange={handleInputChange}
                  />
                </td>
              </tr>
              <tr>
                <td>A.R.No.</td>
                <td>
                  <input
                    type="checkbox"
                    name="arNoQualification"
                    checked={colData.arNoQualification}
                    onChange={handleInputChange}
                  />
                </td>
                <td>
                  <input
                    type="checkbox"
                    name="arNoUsage"
                    checked={colData.arNoUsage}
                    onChange={handleInputChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Load</td>
                <td>
                  <input
                    type="checkbox"
                    name="loadQualification"
                    checked={colData.loadQualification}
                    onChange={handleInputChange}
                  />
                </td>
                <td>
                  <input
                    type="checkbox"
                    name="loadUsage"
                    checked={colData.loadUsage}
                    onChange={handleInputChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Batch No.</td>
                <td>
                  <input
                    type="checkbox"
                    name="batchNoQualification"
                    checked={colData.batchNoQualification}
                    onChange={handleInputChange}
                  />
                </td>
                <td>
                  <input
                    type="checkbox"
                    name="batchNoUsage"
                    checked={colData.batchNoUsage}
                    onChange={handleInputChange}
                  />
                </td>
              </tr>
            </tbody>
          </table>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
            }}
          >
            <CButton color="primary" type="button">
              Add Application
            </CButton>
          </div>
        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={closeModal}>
            Cancel
          </CButton>
          <CButton color="primary" onClick={handleFormSubmit}>
            Add Application
          </CButton>
        </CModalFooter>
      </CModal>
    </div>
  );
};

export default ColumnApplicationModal;
