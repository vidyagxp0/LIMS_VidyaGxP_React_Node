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
import React, { useState } from "react";

const SampleLogin2Modal = (_props) => {
  const [selectedTestPlan, setSelectedTestPlan] = useState("");
  const [showAdditionalFields, setShowAdditionalFields] = useState(false);
  const [showAdditionalFields2, setShowAdditionalFields2] = useState(false);
  const [showAdditionalFields3, setShowAdditionalFields3] = useState(false);
  const [showAdditionalFields4, setShowAdditionalFields4] = useState(false);
  const [showAdditionalFields5, setShowAdditionalFields5] = useState(false);
  const [showAdditionalFields6, setShowAdditionalFields6] = useState(false);
  const [showAdditionalFields7, setShowAdditionalFields7] = useState(false);
  const [showAdditionalFields8, setShowAdditionalFields8] = useState(false);
  const [showAdditionalFields9, setShowAdditionalFields9] = useState(false);
  const [showAdditionalFields10, setShowAdditionalFields10] = useState(false);
  const [showAdditionalFields11, setShowAdditionalFields11] = useState(false);
  const [showAdditionalFields12, setShowAdditionalFields12] = useState(false);
  const [showAdditionalFields13, setShowAdditionalFields13] = useState(false);
  const [showAdditionalFields14, setShowAdditionalFields14] = useState(false);
  const [showAdditionalFields15, setShowAdditionalFields15] = useState(false);
  const [showAdditionalFields16, setShowAdditionalFields16] = useState(false);
  const [showAdditionalFields17, setShowAdditionalFields17] = useState(false);

  const handleTestPlanChange = (event) => {
    const selectedPlan = event.target.value;
    setSelectedTestPlan(selectedPlan);
    if (selectedPlan === "TP-acc2/ACC-00-QC-01-0000052") {
      setShowAdditionalFields(true);
      setShowAdditionalFields2(false);
    } else if (selectedPlan === "TP-undw2/WBL/STP/FG/0493-02-0000051") {
      setShowAdditionalFields(false);
      setShowAdditionalFields2(true);
    } else if (selectedPlan === "TP-01-ep/54321-0000050") {
      setShowAdditionalFields(false);
      setShowAdditionalFields3(true);
    } else if (selectedPlan === "TP-ae-(a)/SPE/FP/002-0000048") {
      setShowAdditionalFields(false);
      setShowAdditionalFields4(true);
    } else if (selectedPlan === "TP-undw2/WBL/STP/FG/0493-02-0000044") {
      setShowAdditionalFields(false);
      setShowAdditionalFields5(true);
    } else if (selectedPlan === "TP-fgtab000d2857/WBL/FPS/FG/2893-02-0000043") {
      setShowAdditionalFields(false);
      setShowAdditionalFields6(true);
    } else if (selectedPlan === "TP-fgtab000d2857/WBL/FPS/FG/2893-02-0000042") {
      setShowAdditionalFields(false);
      setShowAdditionalFields7(true);
    } else if (selectedPlan === "TP-dcf/DPE234-0000041") {
      setShowAdditionalFields(false);
      setShowAdditionalFields8(true);
    } else if (selectedPlan === "TP-dcf/DPE234-0000040") {
      setShowAdditionalFields(false);
      setShowAdditionalFields9(true);
    } else if (selectedPlan === "TP-dcf/DPE234-0000039") {
      setShowAdditionalFields(false);
      setShowAdditionalFields10(true);
    } else if (selectedPlan === "TP-tsvl1/RPS-TSLV-00-0000037") {
      setShowAdditionalFields(false);
      setShowAdditionalFields11(true);
    } else if (selectedPlan === "TP-pm-001/MB-PM-001/00-0000036") {
      setShowAdditionalFields(false);
      setShowAdditionalFields12(true);
    } else if (selectedPlan === "TP-fgtab000d2857/WBL/FPS/FG/2893-03-0000035") {
      setShowAdditionalFields(false);
      setShowAdditionalFields13(true);
    } else if (selectedPlan === "TP-vad/FP 00055-0000034") {
      setShowAdditionalFields(false);
      setShowAdditionalFields14(true);
    } else if (selectedPlan === "TP-pc/PC1-0000033") {
      setShowAdditionalFields(false);
      setShowAdditionalFields15(true);
    } else if (selectedPlan === "TP-pc/PC1-0000032") {
      setShowAdditionalFields(false);
      setShowAdditionalFields16(true);
    } else if (selectedPlan === "TP-vad/FP-0055-0000031") {
      setShowAdditionalFields(false);
      setShowAdditionalFields17(true);
    } else {
      setShowAdditionalFields(false);
      setShowAdditionalFields2(false);
    }
  };
  return (
    <div>
      <CModal
        className="w-5"
        alignment="center"
        visible={_props.visible}
        onClose={_props.closeModal}
        size="xl"
      >
        <CModalHeader>
          <CModalTitle className="font-bold"> Add Sample login</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p>Add information and add new sample login</p>
          <CFormSelect
            type="text"
            className="mb-3"
            label="Client"
            placeholder="Select..."
            options={[
              {
                value: "client1",
                label: "Client 1",
              },
              { value: "client2", label: "Client 2" },
            ]}
          />
          <CFormSelect
            type="text"
            className="mb-3"
            label="Test Plan / Revision No."
            placeholder="Select..."
            onChange={handleTestPlanChange}
            options={[
              {
                value: "selectPlan",
                label: "Select Plan",
              },
              {
                value: "TP-acc2/ACC-00-QC-01-0000052",
                label: "TP-acc2/ACC-00-QC-01-0000052",
              },
              {
                value: "TP-undw2/WBL/STP/FG/0493-02-0000051",
                label: "TP-undw2/WBL/STP/FG/0493-02-0000051",
              },
              {
                value: "TP-01-ep/54321-0000050",
                label: "TP-01-ep/54321-0000050",
              },
              {
                value: "TP-ae-(a)/SPE/FP/002-0000048",
                label: "TP-ae-(a)/SPE/FP/002-0000048",
              },
              {
                value: "TP-ae-(a)/SPE/FP/002-0000047",
                label: "TP-ae-(a)/SPE/FP/002-0000047",
              },
              {
                value: "TP-ae-(a)/SPE/FP/002-0000046",
                label: "TP-ae-(a)/SPE/FP/002-0000046",
              },
              {
                value: "TP-undw2/WBL/STP/FG/0493-02-0000044",
                label: "TP-undw2/WBL/STP/FG/0493-02-0000044",
              },
              {
                value: "TP-fgtab000d2857/WBL/FPS/FG/2893-02-0000043",
                label: "TP-fgtab000d2857/WBL/FPS/FG/2893-02-0000043",
              },
              {
                value: "TP-fgtab000d2857/WBL/FPS/FG/2893-02-0000042",
                label: "TP-fgtab000d2857/WBL/FPS/FG/2893-02-0000042",
              },
              {
                value: "TP-dcf/DPE234-0000041",
                label: "TP-dcf/DPE234-0000041",
              },
              {
                value: "TP-dcf/DPE234-0000040",
                label: "TP-dcf/DPE234-0000040",
              },
              {
                value: "TP-dcf/DPE234-0000039",
                label: "TP-dcf/DPE234-0000039",
              },
              {
                value: "TP-chpoil/CHPOIL001-0000038",
                label: "TP-chpoil/CHPOIL001-0000038",
              },
              {
                value: "TP-tsvl1/RPS-TSLV-00-0000037",
                label: "TP-tsvl1/RPS-TSLV-00-0000037",
              },
              {
                value: "TP-pm-001/MB-PM-001/00-0000036",
                label: "TP-pm-001/MB-PM-001/00-0000036",
              },
              {
                value: "TP-fgtab000d2857/WBL/FPS/FG/2893-03-0000035",
                label: "TP-fgtab000d2857/WBL/FPS/FG/2893-03-0000035",
              },
              {
                value: "TP-vad/FP 00055-0000034",
                label: "TP-vad/FP 00055-0000034",
              },
              {
                value: "TP-pc/PC1-0000033",
                label: "TP-pc/PC1-0000033",
              },
              {
                value: "TP-pc/PC1-0000032",
                label: "TP-pc/PC1-0000032",
              },
              {
                value: "TP-vad/FP-0055-0000031",
                label: "TP-vad/FP-0055-0000031",
              },
            ]}
          />
          <CFormInput
            type="text"
            className="mb-3"
            label="Product / Material"
            placeholder="Prefix"
            disabled
          />
          <CFormInput
            type="text"
            className="mb-3"
            label="Product / Material Code"
            placeholder=""
            disabled
          />
          <CFormInput
            type="text"
            className="mb-3"
            label="Generic Name"
            placeholder=""
            disabled
          />
          <CFormInput
            type="text"
            className="mb-3"
            label="Specification ID"
            placeholder=""
            disabled
          />
          <CFormSelect
            type="text"
            className="mb-3"
            label="Copy Sample from"
            placeholder="select..."
            options={[{ value: "Select", label: "Select Sample" }]}
          />
          <CFormInput
            type="text"
            className="mb-3"
            label="Sample Type"
            placeholder=""
            disabled
          />

          {showAdditionalFields && (
            <>
              <CFormInput
                type="date"
                className="mb-3"
                label="expiry date"
                placeholder="Prefix"
              />
              <CFormInput
                type="text"
                className="mb-3"
                label="batch no"
                placeholder=""
              />
              <CFormInput
                type="text"
                className="mb-3"
                label="batch size"
                placeholder=""
              />
              <CFormInput
                type="text"
                className="mb-3"
                label="storage condition"
                placeholder=""
              />
              <CFormInput
                type="text"
                className="mb-3"
                label="Storage Location"
                placeholder=""
              />
              <CFormInput
                type="date"
                className="mb-3"
                label="Manufacturing Date"
                placeholder=""
              />
              {/* Table with 4 columns */}
              <table className="table">
                <thead>
                  <tr>
                    <th style={{ backgroundColor: "blue", color: "white" }}>
                      S no.
                    </th>
                    <th style={{ backgroundColor: "blue", color: "white" }}>
                      Test Name
                    </th>
                    <th style={{ backgroundColor: "blue", color: "white" }}>
                      Group Name
                    </th>
                    <th style={{ backgroundColor: "blue", color: "white" }}>
                      Selection
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* Table rows here */}
                  <tr>
                    <td>1</td>
                    <td>PH test</td>
                    <td>Value 2</td>
                    <td>
                      <input type="checkbox" />
                    </td>
                  </tr>
                  {/* Add more rows as needed */}
                </tbody>
              </table>
            </>
          )}
          {showAdditionalFields2 && (
            <>
              <CFormInput
                type="text"
                className="mb-3"
                label="batch no"
                placeholder=""
              />
              <CFormInput
                type="text"
                className="mb-3"
                label="batch size"
                placeholder=""
              />
              <CFormInput
                type="text"
                className="mb-3"
                label="pcking type"
                placeholder=""
              />
              <CFormInput
                type="text"
                className="mb-3"
                label="Storage condition"
                placeholder=""
              />
              <CFormInput
                type="date"
                className="mb-3"
                label="Manufacturing Date"
                placeholder=""
              />
              <CFormSelect
                type="text"
                className="mb-3"
                label="Certificates (If any)"
                placeholder=""
                options={[{ value: "Select", label: "Select" }]}
              />
              {/* Table with 4 columns */}
              <table className="table">
                <thead>
                  <tr>
                    <th style={{ backgroundColor: "blue", color: "white" }}>
                      S no.
                    </th>
                    <th style={{ backgroundColor: "blue", color: "white" }}>
                      Test Name
                    </th>
                    <th style={{ backgroundColor: "blue", color: "white" }}>
                      Group Name
                    </th>
                    <th style={{ backgroundColor: "blue", color: "white" }}>
                      Selection
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* Table rows here */}
                  <tr>
                    <td>1</td>
                    <td>Avg Weight wind2</td>
                    <td>Uniformity of dosage units (By Content uniformity)</td>
                    <td>
                      <input type="checkbox" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </>
          )}
          {showAdditionalFields3 ? (
            <>
              <CFormInput
                type="date"
                className="mb-3"
                label="expiry date"
                placeholder=""
              />
              <CFormInput
                type="date"
                className="mb-3"
                label="date sampled"
                placeholder=""
              />
              <CFormInput
                type="text"
                className="mb-3"
                label="batch no"
                placeholder=""
              />
              <CFormInput
                type="text"
                className="mb-3"
                label="batch size"
                placeholder=""
              />
              <CFormInput
                type="date"
                className="mb-3"
                label="Manufacturing Date"
                placeholder=""
              />
              <CFormSelect
                type="text"
                className="mb-3"
                label="Certificates (If any)"
                placeholder=""
                options={[{ value: "Select", label: "Select" }]}
              />
              {/* Table with 4 columns */}
              <table className="table">
                <thead>
                  <tr>
                    <th style={{ backgroundColor: "blue", color: "white" }}>
                      S no.
                    </th>
                    <th style={{ backgroundColor: "blue", color: "white" }}>
                      Test Name
                    </th>
                    <th style={{ backgroundColor: "blue", color: "white" }}>
                      Group Name
                    </th>
                    <th style={{ backgroundColor: "blue", color: "white" }}>
                      Selection
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* Table rows here */}
                  <tr>
                    <td>1</td>
                    <td>Appearence</td>
                    <td className="text-center">-</td>
                    <td>
                      <input type="checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Ratio at 362 nm 381 nm</td>
                    <td className="text-center">-</td>
                    <td>
                      <input type="checkbox" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </>
          ) : (
            ""
          )}
          {showAdditionalFields4 ? (
            <>
              <CFormInput
                type="text"
                className="mb-3"
                label="batch no"
                placeholder=""
              />

              <CFormSelect
                type="text"
                className="mb-3"
                label="Certificates (If any)"
                placeholder=""
                options={[{ value: "Select", label: "Select" }]}
              />
              {/* Table with 4 columns */}
              <table className="table">
                <thead>
                  <tr>
                    <th style={{ backgroundColor: "blue", color: "white" }}>
                      S no.
                    </th>
                    <th style={{ backgroundColor: "blue", color: "white" }}>
                      Test Name
                    </th>
                    <th style={{ backgroundColor: "blue", color: "white" }}>
                      Group Name
                    </th>
                    <th style={{ backgroundColor: "blue", color: "white" }}>
                      Selection
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* Table rows here */}
                  <tr>
                    <td>1</td>
                    <td>Appearence</td>
                    <td className="text-center">-</td>
                    <td>
                      <input type="checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Ratio at 362 nm 381 nm</td>
                    <td className="text-center">-</td>
                    <td>
                      <input type="checkbox" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </>
          ) : (
            ""
          )}
          {showAdditionalFields5 ? (
            <>
              <CFormInput
                type="text"
                className="mb-3"
                label="batch no"
                placeholder=""
              />
              <CFormInput
                type="text"
                className="mb-3"
                label="batch size"
                placeholder=""
              />{" "}
              <CFormInput
                type="text"
                className="mb-3"
                label="packaging type"
                placeholder=""
              />{" "}
              <CFormInput
                type="text"
                className="mb-3"
                label="storage condition"
                placeholder=""
              />
              <CFormInput
                type="text"
                className="mb-3"
                label="storage location"
                placeholder=""
              />
              <CFormInput
                type="date"
                className="mb-3"
                label="manufacturing date"
                placeholder=""
              />
              <CFormSelect
                type="text"
                className="mb-3"
                label="Certificates (If any)"
                placeholder=""
                options={[{ value: "Select", label: "Select" }]}
              />
              <table className="table">
                <thead>
                  <tr>
                    <th style={{ backgroundColor: "blue", color: "white" }}>
                      S no.
                    </th>
                    <th style={{ backgroundColor: "blue", color: "white" }}>
                      Test Name
                    </th>
                    <th style={{ backgroundColor: "blue", color: "white" }}>
                      Group Name
                    </th>
                    <th style={{ backgroundColor: "blue", color: "white" }}>
                      Selection
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* Table rows here */}
                  <tr>
                    <td>1</td>
                    <td>identification wind 2</td>
                    <td className="text-center">-</td>
                    <td>
                      <input type="checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Average weight wind 2</td>
                    <td className="text-center">-</td>
                    <td>
                      <input type="checkbox" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </>
          ) : (
            ""
          )}
          {showAdditionalFields6 ? (
            <>
              <CFormInput
                type="date"
                className="mb-3"
                label="expiry date"
                placeholder=""
              />
              <CFormInput
                type="text"
                className="mb-3"
                label="batch no"
                placeholder=""
              />
              <CFormInput
                type="text"
                className="mb-3"
                label="batch size"
                placeholder=""
              />{" "}
              <CFormInput
                type="text"
                className="mb-3"
                label="sampling quantity"
                placeholder=""
              />{" "}
              <CFormInput
                type="text"
                className="mb-3"
                label="sample refrence no."
                placeholder=""
              />
              <CFormInput
                type="text"
                className="mb-3"
                label="recommended refrence lot"
                placeholder=""
              />
              <CFormInput
                type="text"
                className="mb-3"
                label="storage condition"
                placeholder=""
              />
              <CFormInput
                type="text"
                className="mb-3"
                label="storage location"
                placeholder=""
              />
              <CFormInput
                type="date"
                className="mb-3"
                label="manufacturing date"
                placeholder=""
              />
              <CFormSelect
                type="text"
                className="mb-3"
                label="Certificates (If any)"
                placeholder=""
                options={[{ value: "Select", label: "Select" }]}
              />
              <table className="w-full mb-4">
                <thead className="w-full">
                  <tr>
                    <th
                      style={{ backgroundColor: "blue", color: "white" }}
                      className="text-center"
                    >
                      S no.
                    </th>
                    <th
                      style={{ backgroundColor: "blue", color: "white" }}
                      className="text-center"
                    >
                      Test Name
                    </th>
                    <th
                      style={{ backgroundColor: "blue", color: "white" }}
                      className="text-center"
                    >
                      Group Name
                    </th>
                    <th
                      style={{ backgroundColor: "blue", color: "white" }}
                      className="text-center"
                    >
                      Selection
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>identification wind 2</td>
                    <td className="text-center">-</td>
                    <td>
                      <input type="checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Average weight wind 2</td>
                    <td className="text-center">-</td>
                    <td>
                      <input type="checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>description</td>
                    <td className="text-center">-</td>
                    <td>
                      <input type="checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>identification</td>
                    <td className="text-center">-</td>
                    <td>
                      <input type="checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>diameter</td>
                    <td className="text-center">-</td>
                    <td>
                      <input type="checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>thickness</td>
                    <td className="text-center">-</td>
                    <td>
                      <input type="checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>average weight</td>
                    <td className="text-center">-</td>
                    <td>
                      <input type="checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td>uniformity of weight</td>
                    <td className="text-center">-</td>
                    <td>
                      <input type="checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>9</td>
                    <td>solifenacin succinate IP</td>
                    <td className="text-center">
                      Uniformity of dosage units (By Content uniformity)
                    </td>
                    <td>
                      <input type="checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>10</td>
                    <td>mirabegrane</td>
                    <td className="text-center">
                      Uniformity of dosage units (By Content uniformity)
                    </td>
                    <td>
                      <input type="checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>11</td>
                    <td>1st hour Mirabefron</td>
                    <td className="text-center">
                      Uniformity of dosage units (By Content uniformity)
                    </td>
                    <td>
                      <input type="checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>12</td>
                    <td>3rd hour Mirabegron</td>
                    <td className="text-center">
                      Uniformity of dosage units (By Content uniformity)
                    </td>
                    <td>
                      <input type="checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>13</td>
                    <td>10th hour mirabegron</td>
                    <td className="text-center">
                      Uniformity of dosage units (By Content uniformity)
                    </td>
                    <td>
                      <input type="checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>14</td>
                    <td>dissolution solifenacin succinate IP</td>
                    <td className="text-center">Dissolution</td>
                    <td>
                      <input type="checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>15</td>
                    <td>total impurities mirabegron</td>
                    <td className="text-center">Related Substances</td>
                    <td>
                      <input type="checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>16</td>
                    <td>impurity A Mirabegron</td>
                    <td className="text-center">Related Substances</td>
                    <td>
                      <input type="checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>17</td>
                    <td>impurity B Mirabegron</td>
                    <td className="text-center">Related Substances</td>
                    <td>
                      <input type="checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>18</td>
                    <td>impurity C Mirabegron</td>
                    <td className="text-center">Related Substances</td>
                    <td>
                      <input type="checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>19</td>
                    <td>Solifenacin Succinate IP ....5 mg</td>
                    <td className="text-center">Related Substances</td>
                    <td>
                      <input type="checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>20</td>
                    <td>Mirabegron (As Extended Release) ...25 mg</td>
                    <td className="text-center">Related Substances</td>
                    <td>
                      <input type="checkbox" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </>
          ) : (
            ""
          )}
          {showAdditionalFields7 ? (
            <>
              <CFormInput
                type="date"
                className="mb-3"
                label="expiry date"
                placeholder=""
              />
              <CFormInput
                type="text"
                className="mb-3"
                label="batch no"
                placeholder=""
              />
              <CFormInput
                type="text"
                className="mb-3"
                label="batch size"
                placeholder=""
              />{" "}
              <CFormInput
                type="text"
                className="mb-3"
                label="sampling quantity"
                placeholder=""
              />{" "}
              <CFormInput
                type="text"
                className="mb-3"
                label="sample refrence no."
                placeholder=""
              />
              <CFormInput
                type="text"
                className="mb-3"
                label="recommended refrence lot"
                placeholder=""
              />
              <CFormInput
                type="text"
                className="mb-3"
                label="storage condition"
                placeholder=""
              />
              <CFormInput
                type="text"
                className="mb-3"
                label="storage location"
                placeholder=""
              />
              <CFormInput
                type="date"
                className="mb-3"
                label="manufacturing date"
                placeholder=""
              />
              <CFormSelect
                type="text"
                className="mb-3"
                label="Certificates (If any)"
                placeholder=""
                options={[{ value: "Select", label: "Select" }]}
              />
              <table className="w-full mb-4">
                <thead className="w-full">
                  <tr>
                    <th
                      style={{ backgroundColor: "blue", color: "white" }}
                      className="text-center"
                    >
                      S no.
                    </th>
                    <th
                      style={{ backgroundColor: "blue", color: "white" }}
                      className="text-center"
                    >
                      Test Name
                    </th>
                    <th
                      style={{ backgroundColor: "blue", color: "white" }}
                      className="text-center"
                    >
                      Group Name
                    </th>
                    <th
                      style={{ backgroundColor: "blue", color: "white" }}
                      className="text-center"
                    >
                      Selection
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>identification wind 2</td>
                    <td className="text-center">-</td>
                    <td>
                      <input type="checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Average weight wind 2</td>
                    <td className="text-center">-</td>
                    <td>
                      <input type="checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>description</td>
                    <td className="text-center">-</td>
                    <td>
                      <input type="checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>identification</td>
                    <td className="text-center">-</td>
                    <td>
                      <input type="checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>diameter</td>
                    <td className="text-center">-</td>
                    <td>
                      <input type="checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>thickness</td>
                    <td className="text-center">-</td>
                    <td>
                      <input type="checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>average weight</td>
                    <td className="text-center">-</td>
                    <td>
                      <input type="checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td>uniformity of weight</td>
                    <td className="text-center">-</td>
                    <td>
                      <input type="checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>9</td>
                    <td>solifenacin succinate IP</td>
                    <td className="text-center">
                      Uniformity of dosage units (By Content uniformity)
                    </td>
                    <td>
                      <input type="checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>10</td>
                    <td>mirabegrane</td>
                    <td className="text-center">
                      Uniformity of dosage units (By Content uniformity)
                    </td>
                    <td>
                      <input type="checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>11</td>
                    <td>1st hour Mirabefron</td>
                    <td className="text-center">
                      Uniformity of dosage units (By Content uniformity)
                    </td>
                    <td>
                      <input type="checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>12</td>
                    <td>3rd hour Mirabegron</td>
                    <td className="text-center">
                      Uniformity of dosage units (By Content uniformity)
                    </td>
                    <td>
                      <input type="checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>13</td>
                    <td>10th hour mirabegron</td>
                    <td className="text-center">
                      Uniformity of dosage units (By Content uniformity)
                    </td>
                    <td>
                      <input type="checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>14</td>
                    <td>dissolution solifenacin succinate IP</td>
                    <td className="text-center">Dissolution</td>
                    <td>
                      <input type="checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>15</td>
                    <td>total impurities mirabegron</td>
                    <td className="text-center">Related Substances</td>
                    <td>
                      <input type="checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>16</td>
                    <td>impurity A Mirabegron</td>
                    <td className="text-center">Related Substances</td>
                    <td>
                      <input type="checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>17</td>
                    <td>impurity B Mirabegron</td>
                    <td className="text-center">Related Substances</td>
                    <td>
                      <input type="checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>18</td>
                    <td>impurity C Mirabegron</td>
                    <td className="text-center">Related Substances</td>
                    <td>
                      <input type="checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>19</td>
                    <td>Solifenacin Succinate IP ....5 mg</td>
                    <td className="text-center">Related Substances</td>
                    <td>
                      <input type="checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>20</td>
                    <td>Mirabegron (As Extended Release) ...25 mg</td>
                    <td className="text-center">Related Substances</td>
                    <td>
                      <input type="checkbox" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </>
          ) : (
            ""
          )}
          {showAdditionalFields8 ? (
            <>
              <CFormInput
                type="date"
                className="mb-3"
                label="expiry date"
                placeholder=""
              />
              <CFormInput
                type="text"
                className="mb-3"
                label="batch no"
                placeholder=""
              />
              <CFormInput
                type="text"
                className="mb-3"
                label="batch size"
                placeholder=""
              />{" "}
              <CFormInput
                type="text"
                className="mb-3"
                label="sampling quantity"
                placeholder=""
              />{" "}
              <CFormSelect
                type="text"
                className="mb-3"
                label="Certificates (If any)"
                placeholder=""
                options={[{ value: "Select", label: "Select" }]}
              />
              <table className="w-full mb-4">
                <thead className="w-full">
                  <tr>
                    <th
                      style={{ backgroundColor: "blue", color: "white" }}
                      className="text-center"
                    >
                      S no.
                    </th>
                    <th
                      style={{ backgroundColor: "blue", color: "white" }}
                      className="text-center"
                    >
                      Test Name
                    </th>
                    <th
                      style={{ backgroundColor: "blue", color: "white" }}
                      className="text-center"
                    >
                      Group Name
                    </th>
                    <th
                      style={{ backgroundColor: "blue", color: "white" }}
                      className="text-center"
                    >
                      Selection
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Color Test</td>
                    <td className="text-center">-</td>
                    <td>
                      <input type="checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Assay S</td>
                    <td className="text-center">-</td>
                    <td>
                      <input type="checkbox" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </>
          ) : (
            ""
          )}
          {showAdditionalFields9 ? (
            <>
              <CFormInput
                type="date"
                className="mb-3"
                label="expiry date"
                placeholder=""
              />
              <CFormInput
                type="text"
                className="mb-3"
                label="batch no"
                placeholder=""
              />
              <CFormInput
                type="text"
                className="mb-3"
                label="batch size"
                placeholder=""
              />{" "}
              <CFormInput
                type="text"
                className="mb-3"
                label="sampling quantity"
                placeholder=""
              />{" "}
              <CFormSelect
                type="text"
                className="mb-3"
                label="Certificates (If any)"
                placeholder=""
                options={[{ value: "Select", label: "Select" }]}
              />
              <table className="w-full mb-4">
                <thead className="w-full">
                  <tr>
                    <th
                      style={{ backgroundColor: "blue", color: "white" }}
                      className="text-center"
                    >
                      S no.
                    </th>
                    <th
                      style={{ backgroundColor: "blue", color: "white" }}
                      className="text-center"
                    >
                      Test Name
                    </th>
                    <th
                      style={{ backgroundColor: "blue", color: "white" }}
                      className="text-center"
                    >
                      Group Name
                    </th>
                    <th
                      style={{ backgroundColor: "blue", color: "white" }}
                      className="text-center"
                    >
                      Selection
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Friability and Disintegration Test</td>
                    <td className="text-center">-</td>
                    <td>
                      <input type="checkbox" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </>
          ) : (
            ""
          )}
          {showAdditionalFields10 ? (
            <>
              <CFormInput
                type="date"
                className="mb-3"
                label="expiry date"
                placeholder=""
              />
              <CFormInput
                type="text"
                className="mb-3"
                label="batch no"
                placeholder=""
              />
              <CFormInput
                type="text"
                className="mb-3"
                label="batch size"
                placeholder=""
              />{" "}
              <CFormInput
                type="text"
                className="mb-3"
                label="sampling quantity"
                placeholder=""
              />{" "}
              <CFormSelect
                type="text"
                className="mb-3"
                label="Certificates (If any)"
                placeholder=""
                options={[{ value: "Select", label: "Select" }]}
              />
              <table className="w-full mb-4">
                <thead className="w-full">
                  <tr>
                    <th
                      style={{ backgroundColor: "blue", color: "white" }}
                      className="text-center"
                    >
                      S no.
                    </th>
                    <th
                      style={{ backgroundColor: "blue", color: "white" }}
                      className="text-center"
                    >
                      Test Name
                    </th>
                    <th
                      style={{ backgroundColor: "blue", color: "white" }}
                      className="text-center"
                    >
                      Group Name
                    </th>
                    <th
                      style={{ backgroundColor: "blue", color: "white" }}
                      className="text-center"
                    >
                      Selection
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>VIscosity @40C</td>
                    <td className="text-center">-</td>
                    <td>
                      <input type="checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Total Acid No (TAN)</td>
                    <td className="text-center">-</td>
                    <td>
                      <input type="checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Water Content PPM</td>
                    <td className="text-center">-</td>
                    <td>
                      <input type="checkbox" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </>
          ) : (
            ""
          )}
          {showAdditionalFields11 ? (
            <>
              <CFormInput
                type="date"
                className="mb-3"
                label="expiry date"
                placeholder=""
              />
              <CFormInput
                type="text"
                className="mb-3"
                label="batch no"
                placeholder=""
              />
              <CFormInput
                type="text"
                className="mb-3"
                label="batch size"
                placeholder=""
              />{" "}
              <CFormInput
                type="text"
                className="mb-3"
                label="Packaging type"
                placeholder=""
              />{" "}
              <CFormInput
                type="text"
                className="mb-3"
                label="Priority"
                placeholder=""
              />{" "}
              <CFormInput
                type="text"
                className="mb-3"
                label="Sampling Quantity"
                placeholder=""
              />{" "}
              <CFormInput
                type="text"
                className="mb-3"
                label="Storage Condition"
                placeholder=""
              />{" "}
              <CFormInput
                type="date"
                className="mb-3"
                label="Manufacturing Date"
                placeholder=""
              />{" "}
              <CFormSelect
                type="text"
                className="mb-3"
                label="Certificates (If any)"
                placeholder=""
                options={[{ value: "Select", label: "Select" }]}
              />
              <table className="w-full mb-4">
                <thead className="w-full">
                  <tr>
                    <th
                      style={{ backgroundColor: "blue", color: "white" }}
                      className="text-center"
                    >
                      S no.
                    </th>
                    <th
                      style={{ backgroundColor: "blue", color: "white" }}
                      className="text-center"
                    >
                      Test Name
                    </th>
                    <th
                      style={{ backgroundColor: "blue", color: "white" }}
                      className="text-center"
                    >
                      Group Name
                    </th>
                    <th
                      style={{ backgroundColor: "blue", color: "white" }}
                      className="text-center"
                    >
                      Selection
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Average Weight</td>
                    <td className="text-center">-</td>
                    <td>
                      <input type="checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Description</td>
                    <td className="text-center">-</td>
                    <td>
                      <input type="checkbox" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </>
          ) : (
            ""
          )}
          {showAdditionalFields12 ? (
            <>
              <CFormInput
                type="date"
                className="mb-3"
                label="expiry date"
                placeholder=""
              />
              <CFormInput
                type="text"
                className="mb-3"
                label="batch no"
                placeholder=""
              />
              <CFormInput
                type="text"
                className="mb-3"
                label="batch size"
                placeholder=""
              />{" "}
              <CFormInput
                type="text"
                className="mb-3"
                label="Packaging type"
                placeholder=""
              />{" "}
              <CFormInput
                type="text"
                className="mb-3"
                label="Priority"
                placeholder=""
              />{" "}
              <CFormInput
                type="text"
                className="mb-3"
                label="Sampling Quantity"
                placeholder=""
              />{" "}
              <CFormInput
                type="text"
                className="mb-3"
                label="Storage Condition"
                placeholder=""
              />{" "}
              <CFormInput
                type="date"
                className="mb-3"
                label="Manufacturing Date"
                placeholder=""
              />{" "}
              <CFormSelect
                type="text"
                className="mb-3"
                label="Certificates (If any)"
                placeholder=""
                options={[{ value: "Select", label: "Select" }]}
              />
              <table className="w-full mb-4">
                <thead className="w-full">
                  <tr>
                    <th
                      style={{ backgroundColor: "blue", color: "white" }}
                      className="text-center"
                    >
                      S no.
                    </th>
                    <th
                      style={{ backgroundColor: "blue", color: "white" }}
                      className="text-center"
                    >
                      Test Name
                    </th>
                    <th
                      style={{ backgroundColor: "blue", color: "white" }}
                      className="text-center"
                    >
                      Group Name
                    </th>
                    <th
                      style={{ backgroundColor: "blue", color: "white" }}
                      className="text-center"
                    >
                      Selection
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Qualitative</td>
                    <td className="text-center">-</td>
                    <td>
                      <input type="checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Total Aerobic microbial count</td>
                    <td className="text-center">-</td>
                    <td>
                      <input type="checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>TAMC</td>
                    <td className="text-center">-</td>
                    <td>
                      <input type="checkbox" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </>
          ) : (
            ""
          )}
          {showAdditionalFields13 ? (
            <>
              <CFormInput
                type="date"
                className="mb-3"
                label="expiry date"
                placeholder=""
              />
              <CFormInput
                type="text"
                className="mb-3"
                label="batch no"
                placeholder=""
              />
              <CFormInput
                type="text"
                className="mb-3"
                label="batch size"
                placeholder=""
              />{" "}
              <CFormInput
                type="text"
                className="mb-3"
                label="Sampling Quantity"
                placeholder=""
              />{" "}
              <CFormInput
                type="text"
                className="mb-3"
                label="Sample Refrence No."
                placeholder=""
              />{" "}
              <CFormInput
                type="text"
                className="mb-3"
                label="recommended renfrence lot"
                placeholder=""
              />{" "}
              <CFormInput
                type="text"
                className="mb-3"
                label="Storage Condition"
                placeholder=""
              />{" "}
              <CFormInput
                type="text"
                className="mb-3"
                label="Storage location"
                placeholder=""
              />
              <CFormInput
                type="date"
                className="mb-3"
                label="Manufacturing Date"
                placeholder=""
              />{" "}
              <CFormSelect
                type="text"
                className="mb-3"
                label="Certificates (If any)"
                placeholder=""
                options={[{ value: "Select", label: "Select" }]}
              />
            </>
          ) : (
            ""
          )}
          {showAdditionalFields14 ? (
            <>
              <CFormInput
                type="text"
                className="mb-3"
                label="batch no"
                placeholder=""
              />
              <CFormInput
                type="text"
                className="mb-3"
                label="batch size"
                placeholder=""
              />{" "}
              <CFormInput
                type="text"
                className="mb-3"
                label="Packaging type"
                placeholder=""
              />
              <CFormInput
                type="text"
                className="mb-3"
                label="Storage Condition"
                placeholder=""
              />{" "}
              <CFormInput
                type="text"
                className="mb-3"
                label="Storage location"
                placeholder=""
              />{" "}
              <CFormInput
                type="date"
                className="mb-3"
                label="Manufacturing Date"
                placeholder=""
              />{" "}
              <CFormSelect
                type="text"
                className="mb-3"
                label="Certificates (If any)"
                placeholder=""
                options={[{ value: "Select", label: "Select" }]}
              />
              <table className="w-full mb-4">
                <thead className="w-full">
                  <tr>
                    <th
                      style={{ backgroundColor: "blue", color: "white" }}
                      className="text-center"
                    >
                      S no.
                    </th>
                    <th
                      style={{ backgroundColor: "blue", color: "white" }}
                      className="text-center"
                    >
                      Test Name
                    </th>
                    <th
                      style={{ backgroundColor: "blue", color: "white" }}
                      className="text-center"
                    >
                      Group Name
                    </th>
                    <th
                      style={{ backgroundColor: "blue", color: "white" }}
                      className="text-center"
                    >
                      Selection
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Melting Range</td>
                    <td className="text-center">Related Substances</td>
                    <td>
                      <input type="checkbox" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </>
          ) : (
            ""
          )}
          {showAdditionalFields15 ? (
            <>
              <CFormInput
                type="text"
                className="mb-3"
                label="batch no"
                placeholder=""
              />
              <CFormInput
                type="text"
                className="mb-3"
                label="batch size"
                placeholder=""
              />{" "}
              <CFormInput
                type="text"
                className="mb-3"
                label="Packaging type"
                placeholder=""
              />
              <CFormInput
                type="text"
                className="mb-3"
                label="Storage Condition"
                placeholder=""
              />{" "}
              <CFormInput
                type="text"
                className="mb-3"
                label="Storage location"
                placeholder=""
              />{" "}
              <CFormInput
                type="date"
                className="mb-3"
                label="Manufacturing Date"
                placeholder=""
              />{" "}
              <CFormSelect
                type="text"
                className="mb-3"
                label="Certificates (If any)"
                placeholder=""
                options={[{ value: "Select", label: "Select" }]}
              />
              <table className="w-full mb-4">
                <thead className="w-full">
                  <tr>
                    <th
                      style={{ backgroundColor: "blue", color: "white" }}
                      className="text-center"
                    >
                      S no.
                    </th>
                    <th
                      style={{ backgroundColor: "blue", color: "white" }}
                      className="text-center"
                    >
                      Test Name
                    </th>
                    <th
                      style={{ backgroundColor: "blue", color: "white" }}
                      className="text-center"
                    >
                      Group Name
                    </th>
                    <th
                      style={{ backgroundColor: "blue", color: "white" }}
                      className="text-center"
                    >
                      Selection
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Specific Gravity</td>
                    <td className="text-center">-</td>
                    <td>
                      <input type="checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Specific Gravity PA</td>
                    <td className="text-center">Specific Gravity</td>
                    <td>
                      <input type="checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Color Test</td>
                    <td className="text-center">Specific Gravity</td>
                    <td>
                      <input type="checkbox" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </>
          ) : (
            ""
          )}
          {showAdditionalFields16 ? (
            <>
              <CFormInput
                type="text"
                className="mb-3"
                label="batch no"
                placeholder=""
              />
              <CFormInput
                type="text"
                className="mb-3"
                label="batch size"
                placeholder=""
              />{" "}
              <CFormInput
                type="text"
                className="mb-3"
                label="Packaging type"
                placeholder=""
              />
              <CFormInput
                type="text"
                className="mb-3"
                label="Storage Condition"
                placeholder=""
              />{" "}
              <CFormInput
                type="text"
                className="mb-3"
                label="Storage location"
                placeholder=""
              />{" "}
              <CFormInput
                type="date"
                className="mb-3"
                label="Manufacturing Date"
                placeholder=""
              />{" "}
              <CFormSelect
                type="text"
                className="mb-3"
                label="Certificates (If any)"
                placeholder=""
                options={[{ value: "Select", label: "Select" }]}
              />
              <table className="w-full mb-4">
                <thead className="w-full">
                  <tr>
                    <th
                      style={{ backgroundColor: "blue", color: "white" }}
                      className="text-center"
                    >
                      S no.
                    </th>
                    <th
                      style={{ backgroundColor: "blue", color: "white" }}
                      className="text-center"
                    >
                      Test Name
                    </th>
                    <th
                      style={{ backgroundColor: "blue", color: "white" }}
                      className="text-center"
                    >
                      Group Name
                    </th>
                    <th
                      style={{ backgroundColor: "blue", color: "white" }}
                      className="text-center"
                    >
                      Selection
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Color Test</td>
                    <td className="text-center">-</td>
                    <td>
                      <input type="checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Specific Gravity </td>
                    <td className="text-center">-</td>
                    <td>
                      <input type="checkbox" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </>
          ) : (
            ""
          )}
          {showAdditionalFields17 ? (
            <>
              <CFormInput
                type="text"
                className="mb-3"
                label="batch no"
                placeholder=""
              />
              <CFormInput
                type="text"
                className="mb-3"
                label="batch size"
                placeholder=""
              />{" "}
              <CFormInput
                type="text"
                className="mb-3"
                label="Packaging type"
                placeholder=""
              />
              <CFormInput
                type="text"
                className="mb-3"
                label="Storage Condition"
                placeholder=""
              />{" "}
              <CFormInput
                type="text"
                className="mb-3"
                label="Storage location"
                placeholder=""
              />{" "}
              <CFormInput
                type="date"
                className="mb-3"
                label="Manufacturing Date"
                placeholder=""
              />{" "}
              <CFormSelect
                type="text"
                className="mb-3"
                label="Certificates (If any)"
                placeholder=""
                options={[{ value: "Select", label: "Select" }]}
              />
              <table className="w-full mb-4">
                <thead className="w-full">
                  <tr>
                    <th
                      style={{ backgroundColor: "blue", color: "white" }}
                      className="text-center"
                    >
                      S no.
                    </th>
                    <th
                      style={{ backgroundColor: "blue", color: "white" }}
                      className="text-center"
                    >
                      Test Name
                    </th>
                    <th
                      style={{ backgroundColor: "blue", color: "white" }}
                      className="text-center"
                    >
                      Group Name
                    </th>
                    <th
                      style={{ backgroundColor: "blue", color: "white" }}
                      className="text-center"
                    >
                      Selection
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Melting Range</td>
                    <td className="text-center">-</td>
                    <td>
                      <input type="checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Color</td>
                    <td className="text-center">-</td>
                    <td>
                      <input type="checkbox" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </>
          ) : (
            ""
          )}

          <CFormSelect
            type="text"
            className="mb-3 "
            label="Certificates (If any)"
            placeholder=""
            options={[{ value: "Select", label: "Select" }]}
          />
        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={_props.closeModal}>
            Back
          </CButton>
          <CButton color="primary">Add Sample</CButton>
        </CModalFooter>
      </CModal>
    </div>
  );
};

export default SampleLogin2Modal;
