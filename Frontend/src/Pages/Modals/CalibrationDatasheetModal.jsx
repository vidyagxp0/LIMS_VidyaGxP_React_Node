import React, { useState } from "react";
import {
  CButton,
  CFormInput,
  CModal,
  CModalBody,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";
import "./CalibrationDatasheetModal.css";

const CalibrationDatasheetModal = (_props) => {
  const [showQuantitativeFields, setShowQuantitativeFields] = useState(false);
  const [showQualitativeFields, setShowQualitativeFields] = useState(false);
  const [quantitativeParams, setQuantitativeParams] = useState("");
  const [isSetButtonEnabled, setIsSetButtonEnabled] = useState(false);
  const [isSetPointsModalVisible, setIsSetPointsModalVisible] = useState(false);
  const [numSetPoints, setNumSetPoints] = useState("");
  const [setPoints, setSetPoints] = useState([]);
  const [numQualitativeParams, setNumQualitativeParams] = useState("");
  const [qualitativeParams, setQualitativeParams] = useState([]);

  const handleQuantitativeCheckboxChange = () => {
    setShowQuantitativeFields(!showQuantitativeFields);
  };

  const handleQualitativeCheckboxChange = () => {
    setShowQualitativeFields(!showQualitativeFields);
  };

  const handleQuantitativeParamsChange = (e) => {
    setQuantitativeParams(e.target.value);
  };

  const handleAddButtonClick = () => {
    if (quantitativeParams) {
      setIsSetButtonEnabled(true);
    }
  };

  const handleSetButtonClick = () => {
    setIsSetPointsModalVisible(true);
  };

  const handleSetPointsChange = (e) => {
    setNumSetPoints(e.target.value);
  };

  const handleSetPointsOkClick = () => {
    const points = Array.from({ length: numSetPoints }, (_, index) => ({
      id: index + 1,
      value: "",
    }));
    setSetPoints(points);
    setIsSetPointsModalVisible(false);
  };

  const handleSetPointsBackClick = () => {
    setIsSetPointsModalVisible(false);
  };

  const handleAddQualitative = () => {
    const params = Array.from({ length: numQualitativeParams }, () => "");
    setQualitativeParams(params);
  };

  const handleQualitativeParamChange = (e, index) => {
    const updatedParams = [...qualitativeParams];
    updatedParams[index] = e.target.value;
    setQualitativeParams(updatedParams);
  };

  const handleSubmit = () => {
    // Handle form submission logic here
    // Include both quantitativeParams and qualitativeParams as needed
    console.log("Submitted!");
  };

  return (
    <div>
      <CModal
        alignment="center"
        visible={_props.visible}
        onClose={_props.closeModal}
        size="xl"
      >
        <CModalHeader>
          <CModalTitle>Add Calibration Data Sheet</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CFormInput
            label="Name"
            className="mb-3"
            type="text"
            placeholder="Name"
          />
          <CFormInput
            label="Unique code"
            className="mb-3"
            type="text"
            placeholder=""
          />
          <div className="parameter-section">
            <label className="checkbox-label">
              Quantitative Parameters &nbsp;
              <input
                type="checkbox"
                onChange={handleQuantitativeCheckboxChange}
              />
            </label>
            {showQuantitativeFields && (
              <>
                <label className="parameter-label">
                  No. of Quantitative Parameters
                </label>
                <div className="input-group">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="No. of Quantitative Parameters"
                    value={quantitativeParams}
                    onChange={handleQuantitativeParamsChange}
                  />
                  <button
                    className="btn btn-primary"
                    onClick={handleAddButtonClick}
                  >
                    Add
                  </button>
                </div>

                <label className="parameter-label">
                  Parameters and No. of Set Points
                </label>
                <div className="input-group">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Parameters and No. of Set Points"
                  />
                  <button
                    className="btn btn-primary"
                    disabled={!isSetButtonEnabled}
                    onClick={handleSetButtonClick}
                  >
                    Set
                  </button>
                </div>
              </>
            )}
            <label className="checkbox-label">
              Qualitative Parameter &nbsp;
              <input
                type="checkbox"
                onChange={handleQualitativeCheckboxChange}
              />
            </label>
            {showQualitativeFields && (
              <>
                <label className="parameter-label">
                  No. of Qualitative Parameters
                </label>
                <div className="input-group">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="No. of Qualitative Parameters"
                    value={numQualitativeParams}
                    onChange={(e) => setNumQualitativeParams(e.target.value)}
                  />
                  <button
                    className="btn btn-primary"
                    onClick={handleAddQualitative}
                  >
                    Add
                  </button>
                </div>
                {qualitativeParams.map((param, index) => (
                  <div key={index} className="qualitative-parameter">
                    <label>Parameter {index + 1}</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder={`Qualitative Parameter ${index + 1}`}
                      value={param}
                      onChange={(e) => handleQualitativeParamChange(e, index)}
                    />
                  </div>
                ))}
              </>
            )}
            {setPoints.map((point) => (
              <div key={point.id} className="set-point-section">
                <h5>Set Point {point.id}</h5>
                <input
                  className="form-control mb-2"
                  type="text"
                  placeholder="Enter value"
                />
                <div className="form-group">
                  <label>Type</label>
                  <div className="radio-group">
                    <label>
                      <input type="radio" name={`type${point.id}`} /> Single
                    </label>
                    <label>
                      <input type="radio" name={`type${point.id}`} /> Multiple
                    </label>
                  </div>
                </div>
                <div className="form-group">
                  <label>Pass Limits</label>
                  <div className="input-group">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Minimum"
                    />
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Maximum"
                    />
                    <input
                      className="form-control"
                      type="text"
                      placeholder="UOM"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>Pass Limit Description</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Pass Limit Description"
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="modal-footer">
            <CButton color="light w-50" onClick={_props.closeModal}>
              &lt; Back
            </CButton>
            <CButton color="primary w-50" onClick={handleSubmit}>
              Submit
            </CButton>
          </div>
        </CModalBody>
      </CModal>

      <CModal
        alignment="center"
        visible={isSetPointsModalVisible}
        onClose={handleSetPointsBackClick}
      >
        <CModalHeader>
          <CModalTitle>Set Points</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <table className="table">
            <thead>
              <tr>
                <th>S no.</th>
                <th>No. of Set Points</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="No. of Set Points"
                    value={numSetPoints}
                    onChange={handleSetPointsChange}
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <div className="modal-footer">
            <CButton color="light w-50" onClick={handleSetPointsBackClick}>
              &lt; Back
            </CButton>
            <CButton color="primary w-50" onClick={handleSetPointsOkClick}>
              OK
            </CButton>
          </div>
        </CModalBody>
      </CModal>
    </div>
  );
};

export default CalibrationDatasheetModal;
