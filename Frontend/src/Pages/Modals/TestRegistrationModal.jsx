import React, { useState } from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import {
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CFormInput,
  CFormSelect,
  CButton,
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
  CFormCheck,
} from "@coreui/react";

const TestRegistrationModal = (_props) => {
  const [formData, setFormData] = useState({
    client: "",
    specificationId: "",
    productName: "",
    testName: "",
    testCode: "",
    methodNo: "",
    testCategory: "",
    testTechnique: "",
    testType: "",
  });

  const [showQualitativeFields, setShowQualitativeFields] = useState(false);
  const [showQuantitativeFields, setShowQuantitativeFields] = useState(false);
  const [showQuantitativeFields2, setShowQuantitativeFields2] = useState(false);
  const [Statistical_1, setStatistical_1] = useState(false);
  const [Statistical_2, setStatistical_2] = useState(false);
  const [MultiQualitative, setMultiQualitative] = useState(false);
  const [MultiQuantitativeFormulae, setMultiQuantitativeFormulae] =
    useState(false);
  const [TotalDissolvedSolids, setTotalDissolvedSolids] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    console.log("Form data:", formData);

    _props.closeModal();
  };

  const handleTestTypeChange = (event) => {
    const { value } = event.target;
    setFormData({
      ...formData,
      testType: value,
    });
    setShowQualitativeFields(value === "Qualitative");
    setShowQuantitativeFields(value === "Quantitative");
    setShowQuantitativeFields2(value === "Quantitative-2");
    setStatistical_1(value === "Statistical");
    setStatistical_2(value === "Statistical2");
    setMultiQualitative(value === "Multi Qualitative");
    setMultiQuantitativeFormulae(value === "Multi Quantitative Formulae");
    setTotalDissolvedSolids(value === "Total Dissolved Solids");
  };

  const renderQualitativeFields = () => {
    if (!showQualitativeFields) return null;

    return (
      <div>
        <h5>Qualitative</h5>
        <label htmlFor="Numberofvariables">Number of variables</label>
        <div className="flex gap-4">
          <CFormInput
            className="mb-3"
            type="text"
            id="qualitativeField1"
            name="qualitativeField1"
            onChange={handleInputChange}
            placeholder="Enter Qualitative Field 1"
          />
          <CButton color="primary" className="mb-3">
            ADD
          </CButton>
        </div>
        <br />

        <label htmlFor="Numberofvariables">Pass Limit Description</label>
        <CFormInput
          className="mb-3"
          type="text"
          id="qualitativeField2"
          name="qualitativeField2"
          onChange={handleInputChange}
          placeholder="Enter Qualitative Field 2"
        />
      </div>
    );
  };
  const renderQuantitativeFields = () => {
    if (!showQuantitativeFields) return null;

    return (
      <div>
        <h5>Quantitative</h5>
        <label htmlFor="Numberofvariables">Number of variables</label>
        <div className="flex gap-4">
          <CFormInput
            className="mb-3"
            type="text"
            id="qualitativeField1"
            name="qualitativeField1"
            onChange={handleInputChange}
            placeholder="Enter Qualitative Field 1"
          />
          <CButton color="primary" className="mb-3">
            ADD
          </CButton>
        </div>
        <br />
        <label htmlFor="Formula">Formula</label>
        <CFormInput
          className="mb-3"
          type="text"
          id="qualitativeField2"
          name="qualitativeField2"
          onChange={handleInputChange}
          placeholder="Formula"
        />
        <label htmlFor="Formula">UOM</label>
        <CFormInput
          className="mb-3"
          type="text"
          id="qualitativeField2"
          name="qualitativeField2"
          onChange={handleInputChange}
          placeholder="Enter Qualitative Field 2"
        />
        <label htmlFor="Formula">NO. of Decimals</label>
        <CFormInput
          className="mb-3"
          type="text"
          id="qualitativeField2"
          name="qualitativeField2"
          onChange={handleInputChange}
          placeholder="Enter Qualitative Field 2"
        />

        <label htmlFor="PassLimit">Pass Limit(s)</label>
        <div className="flex gap-5">
          <CFormSelect
            className="mb-3"
            id="qualitativeField2"
            name="qualitativeField2"
            onChange={handleInputChange}
            placeholder="Enter Qualitative Field 2"
          >
            <option value="">Select an option</option>
            <option value="<">{"<"}</option>
            <option value=">">{">"}</option>
            <option value=">=">{">="}</option>
            <option value="<=">{"<="}</option>
            <option value="=">{"="}</option>
          </CFormSelect>
          <CFormInput
            className="mb-3"
            type="text"
            id="qualitativeField2"
            name="qualitativeField2"
            onChange={handleInputChange}
            placeholder=""
          />
          <CFormSelect
            className="mb-3"
            id="qualitativeField2"
            name="qualitativeField2"
            onChange={handleInputChange}
            placeholder="Enter Qualitative Field 2"
          >
            <option value="">Select an option</option>
            <option value="and">{"and"}</option>
            <option value="or">{"or"}</option>
          </CFormSelect>
          <CFormInput
            className="mb-3"
            type="text"
            id="qualitativeField2"
            name="qualitativeField2"
            onChange={handleInputChange}
            placeholder=""
          />
        </div>

        <label htmlFor="Numberofvariables">Pass Limit Description</label>
        <CFormInput
          className="mb-3"
          type="text"
          id="qualitativeField2"
          name="qualitativeField2"
          onChange={handleInputChange}
          placeholder="Pass Limit Description"
        />
      </div>
    );
  };
  const renderQuantitativeFields2 = () => {
    if (!showQuantitativeFields2) return null;

    return (
      <div>
        <h5>Quantitative-2</h5>
        <label htmlFor="Numberofvariables">Number of variables</label>
        <div className="flex gap-4 mb-3">
          <CFormInput
            type="text"
            id="qualitativeField1"
            name="qualitativeField1"
            onChange={handleInputChange}
            placeholder="Number of Variables"
          />
          <CButton color="primary">ADD</CButton>
        </div>
        <label htmlFor="NumberofSpecialvariables">
          Number of Special variables
        </label>
        <div className="flex gap-4 mb-3">
          <CFormInput
            type="text"
            id="qualitativeField1"
            name="qualitativeField1"
            onChange={handleInputChange}
            placeholder="Number of Special Variables"
          />
          <CButton color="primary">ADD</CButton>
        </div>
        <label htmlFor="Formula">Formula</label>
        <CFormInput
          className="mb-3"
          type="text"
          id="qualitativeField2"
          name="qualitativeField2"
          onChange={handleInputChange}
          placeholder="Formula"
        />
        <label htmlFor="UOM">UOM</label>
        <CFormInput
          className="mb-3"
          type="text"
          id="qualitativeField2"
          name="qualitativeField2"
          onChange={handleInputChange}
          placeholder="UOM"
        />
        <label htmlFor="Decimals">NO. of Decimals</label>
        <CFormInput
          className="mb-3"
          type="text"
          id="qualitativeField2"
          name="qualitativeField2"
          onChange={handleInputChange}
          placeholder="Number of Decimals"
        />
        <label htmlFor="PassLimit">Pass Limit(s)</label>
        <div className="flex gap-4 mb-3">
          <CFormSelect
            id="qualitativeField2"
            name="qualitativeField2"
            onChange={handleInputChange}
            placeholder="Enter Qualitative Field 2"
          >
            <option value="">Select an option</option>
            <option value="<">{"<"}</option>
            <option value=">">{">"}</option>
            <option value=">=">{">="}</option>
            <option value="<=">{"<="}</option>
            <option value="=">{"="}</option>
          </CFormSelect>
          <CFormInput
            type="text"
            id="qualitativeField2"
            name="qualitativeField2"
            onChange={handleInputChange}
            placeholder=""
          />
          <CFormSelect
            id="qualitativeField2"
            name="qualitativeField2"
            onChange={handleInputChange}
            placeholder="Enter Qualitative Field 2"
          >
            <option value="">Select an option</option>
            <option value="and">{"and"}</option>
            <option value="or">{"or"}</option>
          </CFormSelect>
          <CFormInput
            type="text"
            id="qualitativeField2"
            name="qualitativeField2"
            onChange={handleInputChange}
            placeholder=""
          />
        </div>
        <div className="flex gap-4 mb-3">
          <div className="flex flex-col w-1/2">
            <label htmlFor="LOD" className="text-sm">
              Limit of Detection (LOD)
            </label>
            <CFormInput
              type="text"
              id="qualitativeField2"
              name="qualitativeField2"
              onChange={handleInputChange}
              placeholder="Limit of Detection (LOD)"
            />
          </div>
          <div className="flex flex-col w-1/2">
            <label htmlFor="COA" className="text-sm">
              Text for COA
            </label>
            <CFormInput
              type="text"
              id="qualitativeField2"
              name="qualitativeField2"
              onChange={handleInputChange}
              placeholder="Text for COA"
            />
          </div>
        </div>
        <div className="flex gap-4 mb-3">
          <div className="flex flex-col w-1/2">
            <label htmlFor="LOQ" className="text-sm">
              Limit of Quantification (LOQ)
            </label>
            <CFormInput
              type="text"
              id="qualitativeField2"
              name="qualitativeField2"
              onChange={handleInputChange}
              placeholder="Limit of Quantification (LOQ)"
            />
          </div>
          <div className="flex flex-col w-1/2">
            <label htmlFor="COA" className="text-sm">
              Text for COA
            </label>
            <CFormInput
              type="text"
              id="qualitativeField2"
              name="qualitativeField2"
              onChange={handleInputChange}
              placeholder="Text for COA"
            />
          </div>
        </div>
        <div className="flex gap-4 mb-3">
          <div className="flex flex-col w-1/2">
            <label htmlFor="DecimalsLODLOQ" className="text-sm">
              No. of Decimals for LOD/LOQ
            </label>
            <CFormInput
              type="text"
              id="qualitativeField2"
              name="qualitativeField2"
              onChange={handleInputChange}
              placeholder="No. of Decimals for LOD/LOQ"
            />
          </div>
        </div>
        <div className="flex gap-4 mb-3">
          <div className="flex flex-col w-1/2">
            <label htmlFor="AlertLimit" className="text-sm">
              Limit of Alert
            </label>
            <CFormInput
              type="text"
              id="qualitativeField2"
              name="qualitativeField2"
              onChange={handleInputChange}
              placeholder="Limit of Alert"
            />
          </div>
          <div className="flex flex-col w-1/2">
            <label htmlFor="COA" className="text-sm">
              Text for COA
            </label>
            <CFormInput
              type="text"
              id="qualitativeField2"
              name="qualitativeField2"
              onChange={handleInputChange}
              placeholder="Text for COA"
            />
          </div>
        </div>
        <div className="flex gap-4 mb-3">
          <div className="flex flex-col w-1/2">
            <label htmlFor="ActionLimit" className="text-sm">
              Limit of Action
            </label>
            <CFormInput
              type="text"
              id="qualitativeField2"
              name="qualitativeField2"
              onChange={handleInputChange}
              placeholder="Limit of Action"
            />
          </div>
          <div className="flex flex-col w-1/2">
            <label htmlFor="COA" className="text-sm">
              Text for COA
            </label>
            <CFormInput
              type="text"
              id="qualitativeField2"
              name="qualitativeField2"
              onChange={handleInputChange}
              placeholder="Text for COA"
            />
          </div>
        </div>
        <label htmlFor="PassLimitDescription" className="text-sm">
          Pass Limit Description
        </label>
        <CFormInput
          className="mb-3"
          type="text"
          id="qualitativeField2"
          name="qualitativeField2"
          onChange={handleInputChange}
          placeholder="Pass Limit Description"
        />
      </div>
    );
  };
  const renderStatisticalFields2 = () => {
    if (!Statistical_1) return null;

    return (
      <div>
        <h5>Statistical-1</h5>
        <label htmlFor="Numberofvariables">Number of Readings</label>
        <div className="flex gap-4 mb-3">
          <CFormInput
            type="text"
            id="qualitativeField1"
            name="qualitativeField1"
            onChange={handleInputChange}
            placeholder="Number of Variables"
          />
        </div>
        <label htmlFor="NumberofSpecialvariables">Description of Reading</label>
        <div className="flex gap-4 mb-3">
          <CFormInput
            type="text"
            id="qualitativeField1"
            name="qualitativeField1"
            onChange={handleInputChange}
            placeholder="Number of Special Variables"
          />
        </div>
        <label htmlFor="UOM">UOM</label>
        <CFormInput
          className="mb-3"
          type="text"
          id="qualitativeField2"
          name="qualitativeField2"
          onChange={handleInputChange}
          placeholder="UOM"
        />
        <label htmlFor="NoOfDecimal">No. Of Decimals</label>
        <CFormInput
          className="mb-3"
          type="text"
          id="qualitativeField2"
          name="qualitativeField2"
          onChange={handleInputChange}
          placeholder="No. Of Decimals"
        />
        <div>
          <CTable align="middle" responsive className="mb-0 table-responsive">
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell
                  style={{ background: "#5D76A9", color: "white" }}
                  scope="col"
                >
                  Sno.{" "}
                </CTableHeaderCell>
                <CTableHeaderCell
                  style={{ background: "#5D76A9", color: "white" }}
                  scope="col"
                >
                  Calculations{" "}
                </CTableHeaderCell>
                <CTableHeaderCell
                  style={{ background: "#5D76A9", color: "white" }}
                  scope="col"
                >
                  Display
                </CTableHeaderCell>
                <CTableHeaderCell
                  style={{ background: "#5D76A9", color: "white" }}
                  scope="col"
                >
                  Limit
                </CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              <CTableRow>
                <CTableDataCell>1</CTableDataCell>
                <CTableDataCell>Minimun</CTableDataCell>
                <CTableDataCell>
                  <CFormCheck></CFormCheck>
                </CTableDataCell>
                <CTableDataCell>
                  <CFormInput placeholder="Limit"></CFormInput>
                </CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableDataCell>2</CTableDataCell>
                <CTableDataCell>Maximum</CTableDataCell>
                <CTableDataCell>
                  <CFormCheck></CFormCheck>
                </CTableDataCell>
                <CTableDataCell>
                  <CFormInput placeholder="Limit"></CFormInput>
                </CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableDataCell>3</CTableDataCell>
                <CTableDataCell>Average</CTableDataCell>
                <CTableDataCell>
                  <CFormCheck></CFormCheck>
                </CTableDataCell>
                <CTableDataCell>
                  <CFormInput placeholder="Limit"></CFormInput>
                </CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableDataCell>4</CTableDataCell>
                <CTableDataCell>Standard Dev.</CTableDataCell>
                <CTableDataCell>
                  <CFormCheck></CFormCheck>
                </CTableDataCell>
                <CTableDataCell>
                  <CFormInput placeholder="Limit"></CFormInput>
                </CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableDataCell>5</CTableDataCell>
                <CTableDataCell>Related Std Dev.</CTableDataCell>
                <CTableDataCell>
                  <CFormCheck></CFormCheck>
                </CTableDataCell>
                <CTableDataCell>
                  <CFormInput placeholder="Limit"></CFormInput>
                </CTableDataCell>
              </CTableRow>
            </CTableBody>
          </CTable>
          <div className="flex gap-4 mb-3 mt-5">
            <div className="flex flex-col w-1/2">
              <label htmlFor="LOD" className="text-sm">
                Not More than
              </label>
              <CFormInput
                type="text"
                id="statisticalField2"
                name="statisticalField2"
                onChange={handleInputChange}
              />
            </div>
            <div className="flex flex-col w-1/2">
              <label htmlFor="COA" className="text-sm">
                Reading(s) should have ±
              </label>
              <CFormInput
                type="text"
                id="qualitativeField2"
                name="qualitativeField2"
                onChange={handleInputChange}
              />
            </div>
            <label htmlFor="" className="mt-4">
              % Deviation from Average
            </label>
          </div>

          <div className="flex gap-4 mb-3 mt-5">
            <div className="flex flex-col w-1/2">
              <label htmlFor="COA" className="text-sm">
                No Reading(s) should have ±
              </label>
              <CFormInput
                type="text"
                id="qualitativeField2"
                name="qualitativeField2"
                onChange={handleInputChange}
              />
            </div>
            <label htmlFor="" className="mt-4">
              % Deviation from Average
            </label>
          </div>

          <div className="flex flex-col w-1/2">
            <label htmlFor="COA" className="text-sm">
              Label Claim
            </label>
            <CFormInput
              type="text"
              id="qualitativeField2"
              name="qualitativeField2"
              onChange={handleInputChange}
            />
          </div>

          <div className="flex gap-4 mb-3 mt-5">
            <div className="flex flex-col w-1/2">
              <label htmlFor="COA" className="text-sm">
                Minimum Value not Less Than
              </label>
              <CFormInput
                type="text"
                id="qualitativeField2"
                name="qualitativeField2"
                onChange={handleInputChange}
              />
            </div>
            <label htmlFor="" className="mt-4">
              % of Label Claim
            </label>
          </div>

          <div className="flex gap-4 mb-3 mt-5">
            <div className="flex flex-col w-1/2">
              <label htmlFor="COA" className="text-sm">
                Maximum Value not More Than
              </label>
              <CFormInput
                type="text"
                id="qualitativeField2"
                name="qualitativeField2"
                onChange={handleInputChange}
              />
            </div>
            <label htmlFor="" className="mt-4">
              % of Label Claim
            </label>
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="COA" className="text-sm">
              Pass Limit Description
            </label>
            <CFormInput
              type="text"
              id="qualitativeField2"
              name="qualitativeField2"
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>
    );
  };

  const renderStatisticalFields3 = () => {
    if (!Statistical_2) return null;

    return (
      <div>
        <h5>Statistical-2</h5>
        <label htmlFor="Numberofvariables">Number of Variables</label>
        <div className="flex gap-4 mb-3">
          <CFormInput
            type="text"
            id="qualitativeField1"
            name="qualitativeField1"
            onChange={handleInputChange}
            placeholder="Number of Variables"
          />
          <CButton color="info" className="text-white">
            Add
          </CButton>
        </div>
        <label htmlFor="Formula">Formula</label>
        <div className="flex gap-4 mb-3">
          <CFormInput
            type="text"
            id="qualitativeField1"
            name="qualitativeField1"
            onChange={handleInputChange}
            placeholder="Number of Special Variables"
          />
        </div>
        <label htmlFor="Reading">Reading</label>
        <CFormInput
          className="mb-3"
          type="text"
          id="qualitativeField2"
          name="qualitativeField2"
          onChange={handleInputChange}
          placeholder="UOM"
        />
        <label htmlFor="NoOfDecimal">No. Of Decimals</label>
        <CFormInput
          className="mb-3"
          type="text"
          id="qualitativeField2"
          name="qualitativeField2"
          onChange={handleInputChange}
          placeholder="No. Of Decimals"
        />
        <div>
          <CTable align="middle" responsive className="mb-0 table-responsive">
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell
                  style={{ background: "#5D76A9", color: "white" }}
                  scope="col"
                >
                  Sno.{" "}
                </CTableHeaderCell>
                <CTableHeaderCell
                  style={{ background: "#5D76A9", color: "white" }}
                  scope="col"
                >
                  Calculations{" "}
                </CTableHeaderCell>
                <CTableHeaderCell
                  style={{ background: "#5D76A9", color: "white" }}
                  scope="col"
                >
                  Display
                </CTableHeaderCell>
                <CTableHeaderCell
                  style={{ background: "#5D76A9", color: "white" }}
                  scope="col"
                >
                  Limit
                </CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              <CTableRow>
                <CTableDataCell>1</CTableDataCell>
                <CTableDataCell>Minimun</CTableDataCell>
                <CTableDataCell>
                  <CFormCheck></CFormCheck>
                </CTableDataCell>
                <CTableDataCell>
                  <CFormInput placeholder="Limit"></CFormInput>
                </CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableDataCell>2</CTableDataCell>
                <CTableDataCell>Maximum</CTableDataCell>
                <CTableDataCell>
                  <CFormCheck></CFormCheck>
                </CTableDataCell>
                <CTableDataCell>
                  <CFormInput placeholder="Limit"></CFormInput>
                </CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableDataCell>3</CTableDataCell>
                <CTableDataCell>Average</CTableDataCell>
                <CTableDataCell>
                  <CFormCheck></CFormCheck>
                </CTableDataCell>
                <CTableDataCell>
                  <CFormInput placeholder="Limit"></CFormInput>
                </CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableDataCell>4</CTableDataCell>
                <CTableDataCell>Standard Dev.</CTableDataCell>
                <CTableDataCell>
                  <CFormCheck></CFormCheck>
                </CTableDataCell>
                <CTableDataCell>
                  <CFormInput placeholder="Limit"></CFormInput>
                </CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableDataCell>5</CTableDataCell>
                <CTableDataCell>Related Std Dev.</CTableDataCell>
                <CTableDataCell>
                  <CFormCheck></CFormCheck>
                </CTableDataCell>
                <CTableDataCell>
                  <CFormInput placeholder="Limit"></CFormInput>
                </CTableDataCell>
              </CTableRow>
            </CTableBody>
          </CTable>
          <div className="flex flex-col w-full mt-3">
            <label htmlFor="COA" className="text-sm">
              Pass Limit Description
            </label>
            <CFormInput
              type="text"
              id="qualitativeField2"
              name="qualitativeField2"
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>
    );
  };
  const renderMultiQualitative = () => {
    if (!MultiQualitative) return null;

    return (
      <div>
        <h5>Multi Qualitative</h5>
        <label htmlFor="Numberofvariables">Number of Sub Tasks</label>
        <div className="flex gap-4 mb-3">
          <CFormInput
            type="text"
            id="qualitativeField1"
            name="qualitativeField1"
            onChange={handleInputChange}
            placeholder="Number of Variables"
          />
          <CButton color="info" className="text-white">
            Add
          </CButton>
        </div>
      </div>
    );
  };

  const renderMultiQuantitativeFormulae = () => {
    if (!MultiQuantitativeFormulae) return null;

    return (
      <div>
        <h5>Multi Quantitative Formulae</h5>
        <div>
          <label htmlFor="Numberofvariables">Number of Variables</label>
          <div className="flex gap-4 mb-3">
            <CFormInput
              type="text"
              id="qualitativeField1"
              name="qualitativeField1"
              onChange={handleInputChange}
              placeholder="Number of Variables"
            />
            <CButton color="info" className="text-white">
              Add
            </CButton>
          </div>
        </div>
        <div>
          <label htmlFor="Numberofsubtests">Number of Sub Tests</label>
          <div className="flex gap-4 mb-3">
            <CFormInput
              type="text"
              id="qualitativeField1"
              name="qualitativeField1"
              onChange={handleInputChange}
              placeholder="Number of Variables"
            />
            <CButton color="info" className="text-white">
              Add
            </CButton>
          </div>
        </div>
      </div>
    );
  };
  const renderTotalDissolvedSolids = () => {
    if (!TotalDissolvedSolids) return null;

    return (
      <div>
        <h5>Total Dissolved Solids</h5>
        <h6>Formula:</h6>

        <div className="text-center">
          <h1 className="font-serif">( W 2 − W 1 ) ∗ 10 6 / V</h1>
        </div>
        <h6>Details:</h6>
        <h6>
          <span className="font-bold font-serif">W1</span> = Initial wt. of
          empty beaker, g
        </h6>
        <h6>
          <span className="font-bold font-serif">W2</span> = Final weight of
          beaker + residue, g
        </h6>
        <h6 className="font-serif">
          {" "}
          <span className="font-bold font-serif">v</span> = Sample Taken, ml
        </h6>
        <label htmlFor="PassLimit" className="mt-4">
          Pass Limit(s)
        </label>
        <div className="flex gap-5">
          <CFormSelect
            className="mb-3"
            id="qualitativeField2"
            name="qualitativeField2"
            onChange={handleInputChange}
            placeholder="Enter Qualitative Field 2"
          >
            <option value="">Select an option</option>
            <option value="<">{"<"}</option>
            <option value=">">{">"}</option>
            <option value=">=">{">="}</option>
            <option value="<=">{"<="}</option>
            <option value="=">{"="}</option>
          </CFormSelect>
          <CFormInput
            className="mb-3"
            type="text"
            id="qualitativeField2"
            name="qualitativeField2"
            onChange={handleInputChange}
            placeholder=""
          />
          <CFormSelect
            className="mb-3"
            id="qualitativeField2"
            name="qualitativeField2"
            onChange={handleInputChange}
            placeholder="Enter Qualitative Field 2"
          >
            <option value="">Select an option</option>
            <option value="and">{"and"}</option>
            <option value="or">{"or"}</option>
          </CFormSelect>
          <CFormInput
            className="mb-3"
            type="text"
            id="qualitativeField2"
            name="qualitativeField2"
            onChange={handleInputChange}
            placeholder=""
          />
        </div>
      </div>
    );
  };

  const top100Films = [
    { label: "The Shawshank Redemption", year: 1994 },
    { label: "The Godfather", year: 1972 },
    { label: "The Godfather: Part II", year: 1974 },
    { label: "The Dark Knight", year: 2008 },
    { label: "12 Angry Men", year: 1957 },
  ];

  return (
    <CModal
      alignment="center"
      visible={_props.visible}
      onClose={_props.closeModal}
      size="lg"
    >
      <CModalHeader closeButton>
        <CModalTitle>Add Test Registration</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <p className="mb-3">Add information Test Registration</p>

        <label className="mb-3" htmlFor="client">
          Client
        </label>
        <Autocomplete
          className="mb-3 border-1 border-black"
          disablePortal
          id="client"
          options={top100Films}
          getOptionLabel={(option) => option.label}
          renderInput={(params) => <TextField {...params} label="Client" />}
          onChange={(event, value) =>
            setFormData({ ...formData, client: value ? value.label : "" })
          }
        />

        <label className="mb-3" htmlFor="specificationId">
          Specification ID
        </label>
        <Autocomplete
          className="mb-3"
          disablePortal
          id="specificationId"
          options={top100Films}
          getOptionLabel={(option) => option.label}
          renderInput={(params) => (
            <TextField {...params} label="Specification ID" />
          )}
          onChange={(event, value) =>
            setFormData({
              ...formData,
              specificationId: value ? value.label : "",
            })
          }
        />

        <CFormInput
          className="mb-3"
          type="text"
          id="productName"
          name="productName"
          value={formData.productName}
          onChange={handleInputChange}
          label="Product/Material Name"
          placeholder="Product/Material Name"
        />

        <CFormInput
          className="mb-3"
          type="text"
          id="testName"
          name="testName"
          value={formData.testName}
          onChange={handleInputChange}
          label="Test Name"
          placeholder="Test Name"
        />

        <CFormInput
          className="mb-3"
          type="text"
          id="testCode"
          name="testCode"
          value={formData.testCode}
          onChange={handleInputChange}
          label="Test Code"
          placeholder="Test Code"
        />

        <CFormInput
          className="mb-3"
          type="date"
          id="methodNo"
          name="methodNo"
          value={formData.methodNo}
          onChange={handleInputChange}
          label="Method No."
          placeholder="Method No."
        />

        <CFormSelect
          className="mb-3"
          id="testCategory"
          name="testCategory"
          value={formData.testCategory}
          onChange={handleInputChange}
          label="Test Category"
          options={[
            { label: "Select Test Category", value: "" },
            { label: "Apperance", value: "Apperance" },
          ]}
        />

        <CFormSelect
          className="mb-3"
          id="testTechnique"
          name="testTechnique"
          value={formData.testTechnique}
          onChange={handleInputChange}
          label="Test Technique"
          options={[
            { label: "Select Test Technique", value: "" },
            { label: "Default", value: "Default" },
          ]}
        />

        <CFormSelect
          className="mb-3"
          id="testType"
          name="testType"
          value={formData.testType}
          onChange={handleTestTypeChange}
          label="Test Type"
          options={[
            { label: "Select Test Type", value: "" },
            { label: "Qualitative", value: "Qualitative" },
            { label: "Quantitative", value: "Quantitative" },
            { label: "Quantitative-2", value: "Quantitative-2" },
            { label: "Statistical", value: "Statistical" },
            { label: "Statistical2", value: "Statistical2" },
            { label: "Multi Qualitative", value: "Multi Qualitative" },
            {
              label: "Multi Quantitative Formulae",
              value: "Multi Quantitative Formulae",
            },
            {
              label: "Total Dissolved Solids",
              value: "Total Dissolved Solids",
            },
            { label: "Oil & Grease", value: "Oil & Grease" },
            {
              label: "Chemical Oxygen Demand",
              value: "Chemical Oxygen Demand",
            },
            {
              label: "Total Suspended Solids",
              value: "Total Suspended Solids",
            },
          ]}
        />

        {renderQualitativeFields()}
        {renderQuantitativeFields()}
        {renderQuantitativeFields2()}
        {renderStatisticalFields2()}
        {renderStatisticalFields3()}
        {renderMultiQualitative()}
        {renderMultiQuantitativeFormulae()}
        {renderTotalDissolvedSolids()}
      </CModalBody>
      <CModalFooter>
        <CButton color="light" onClick={_props.closeModal}>
          Back
        </CButton>
        <CButton color="primary" onClick={handleSubmit}>
          Submit
        </CButton>
      </CModalFooter>
    </CModal>
  );
};

export default TestRegistrationModal;
