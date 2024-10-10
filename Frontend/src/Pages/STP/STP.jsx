import React from "react";
import ATMButton from "../../components/ATM components/Button/ATMButton";
import Table from "../../components/ATM components/Table/Table";
import PDFDownload from "../PDFComponent/PDFDownload ";
import Dropdown from "../../components/ATM components/Dropdown/Dropdown";
import SearchBar from "../../components/ATM components/SearchBar/SearchBar";
import { randomData } from "./demoStp";
import LaunchQMS from "../../components/ReusableButtons/LaunchQMS";

const STP = () => {
  return (
    <div>
      <LaunchQMS />
      <div className="m-5 mt-3 " >
        <div className="main-head">
          <h4 className="fw-bold ">STP</h4>
        </div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex space-x-4">
            <SearchBar value={""} onChange={""} />
            <Dropdown
              options={[
                { value: "All", label: "All" },
                { value: "Active", label: "Active" },
                { value: "Inactive", label: "Inactive" },
              ]}
              value={""}
              onChange={""}
            />
          </div>
          <div className="float-right flex gap-4">
            <PDFDownload
              columns={"'columns'"}
              data={"filteredData"}
              title="Storage Location"
              fileName="Storage_Location.pdf"
            />
            <ATMButton text="Import" color="pink" onClick={"handleOpenModals"} />
            <ATMButton text="Add Storage Location" color="blue" onClick={"openModal"} />
          </div>
        </div>
      </div>

      <div>
        <table className="min-w-full bg-white border border-gray-200 shadow-lg mx-5">
          <thead>
            <tr className=" text-white text-left">
              <th colSpan="10" className="px-4 py-2 bg-yellow-600">
                General Information
              </th>
              <th colSpan="12" className="px-4 py-2 bg-green-500">
                Test Methodology
              </th>
              <th colSpan="5" className="px-4 py-2 bg-red-500">
                Calculations and Interpretation
              </th>
              <th colSpan="6" className="px-4 py-2 bg-violet-500">
                Reporting and Documentation
              </th>
              <th colSpan="3" className="px-4 py-2 bg-orange-500">
                Miscellaneous
              </th>
            </tr>
            <tr className="bg-slate-800 text-white">
              <td className="border px-4 py-2">STP ID</td>
              <td className="border px-4 py-2">STP Title/Name</td>
              <td className="border px-4 py-2">STP Attachment</td>
              <td className="border px-4 py-2">Version Number</td>
              <td className="border px-4 py-2">Effective Date</td>
              <td className="border px-4 py-2">Creation Date</td>
              <td className="border px-4 py-2">Reviewed By</td>
              <td className="border px-4 py-2">Approved By</td>
              <td className="border px-4 py-2">Department</td>
              <td className="border px-4 py-2">Objective</td>

              <td className="border px-4 py-2">Test Procedure Description</td>
              <td className="border px-4 py-2">Test Type</td>
              <td className="border px-4 py-2">Test Method Reference</td>
              <td className="border px-4 py-2">Sample Preparation</td>
              <td className="border px-4 py-2">Reagents/Standards Used</td>
              <td className="border px-4 py-2">Equipment/Instrument Required</td>
              <td className="border px-4 py-2">Calibration Requirements</td>
              <td className="border px-4 py-2">Environmental Conditions</td>
              <td className="border px-4 py-2">Control Sample Requirements</td>
              <td className="border px-4 py-2">Test Parameters</td>
              <td className="border px-4 py-2">Safety Precautions</td>
              <td className="border px-4 py-2">Validation Requirements</td>

              <td className="border px-4 py-2">Calculation Formulae</td>
              <td className="border px-4 py-2">LSL</td>
              <td className="border px-4 py-2">USL</td>

              <td className="border px-4 py-2">Result Interpretation</td>
              <td className="border px-4 py-2">Expected Results</td>

              <td className="border px-4 py-2">Report Template</td>
              <td className="border px-4 py-2">Data Recording Procedure</td>
              <td className="border px-4 py-2">Test Frequency</td>
              <td className="border px-4 py-2">Test Report Submission</td>
              <td className="border px-4 py-2">Deviation Handling</td>
              <td className="border px-4 py-2">Audit Trail</td>

              <td className="border px-4 py-2">Revision History</td>
              <td className="border px-4 py-2">Attachments</td>
              <td className="border px-4 py-2">Remarks/Comments</td>
            </tr>
          </thead>
          <tbody>
            {randomData.map((data, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="border px-4 py-2 min-w-[100px]">{data.stpId}</td>
                <td className="border px-4 py-2">{data.title}</td>
                <td className="border px-4 py-2">{data.attachment}</td>
                <td className="border px-4 py-2">{data.version}</td>
                <td className="border px-4 py-2">{data.effectiveDate}</td>
                <td className="border px-4 py-2">{data.creationDate}</td>
                <td className="border px-4 py-2">{data.reviewedBy}</td>
                <td className="border px-4 py-2">{data.approvedBy}</td>
                <td className="border px-4 py-2">{data.department}</td>
                <td className="border px-4 py-2">{data.objective}</td>
                <td className="border px-4 py-2">{data.testProcedureDescription}</td>
                <td className="border px-4 py-2">{data.testType}</td>
                <td className="border px-4 py-2">{data.testMethodReference}</td>
                <td className="border px-4 py-2">{data.samplePreparation}</td>
                <td className="border px-4 py-2">{data.reagents}</td>
                <td className="border px-4 py-2">{data.equipment}</td>
                <td className="border px-4 py-2">{data.calibration}</td>
                <td className="border px-4 py-2">{data.environmental}</td>
                <td className="border px-4 py-2">{data.controlSample}</td>
                <td className="border px-4 py-2">{data.testParameters}</td>
                <td className="border px-4 py-2">{data.safetyPrecautions}</td>
                <td className="border px-4 py-2">{data.validationRequirements}</td>
                <td className="border px-4 py-2">{data.calculationFormula}</td>
                <td className="border px-4 py-2">{data.lsl}</td>
                <td className="border px-4 py-2">{data.usl}</td>
                <td className="border px-4 py-2">{data.resultInterpretation}</td>
                <td className="border px-4 py-2">{data.expectedResults}</td>
                <td className="border px-4 py-2">{data.reportTemplate}</td>
                <td className="border px-4 py-2">{data.dataRecording}</td>
                <td className="border px-4 py-2">{data.testFrequency}</td>
                <td className="border px-4 py-2">{data.testReportSubmission}</td>
                <td className="border px-4 py-2">{data.deviationHandling}</td>
                <td className="border px-4 py-2">{data.auditTrail}</td>
                <td className="border px-4 py-2">{data.revisionHistory}</td>
                <td className="border px-4 py-2">{data.attachments}</td>
                <td className="border px-4 py-2">{data.remarks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default STP;
