import React, { useState } from "react";
import ATMButton from "../../components/ATM components/Button/ATMButton";
// import Table from "../../components/ATM components/Table/Table";
import PDFDownload from "../PDFComponent/PDFDownload ";
import Dropdown from "../../components/ATM components/Dropdown/Dropdown";
import SearchBar from "../../components/ATM components/SearchBar/SearchBar";
import { randomData } from "./demoStp";
import LaunchQMS from "../../components/ReusableButtons/LaunchQMS";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";

const STP = () => {
  // State to manage modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // State to manage form data for the new storage location
  const [newStorageLocation, setNewStorageLocation] = useState({
    stpId: "",
    title: "",
    attachment: "",
    version: "",
    effectiveDate: "",
    creationDate: "",
    reviewedBy: "",
    approvedBy: "",
    department: "",
    objective: "",
    testProcedureDescription: "",
    testType: "",
    testMethodReference: "",
    samplePreparation: "",
    reagents: "",
    equipment: "",
    calibration: "",
    environmental: "",
    controlSample: "",
    testParameters: "",
    safetyPrecautions: "",
    validationRequirements: "",
    calculationFormula: "",
    lsl: "",
    usl: "",
    resultInterpretation: "",
    expectedResults: "",
    reportTemplate: "",
    dataRecording: "",
    testFrequency: "",
    testReportSubmission: "",
    deviationHandling: "",
    auditTrail: "",
    revisionHistory: "",
    attachments: "",
    remarks: "",
  });

  // Add these state variables
  const [modalMode, setModalMode] = useState("add"); // "add", "edit", or "view"
  const [currentItem, setCurrentItem] = useState(null);

  // Add these functions

  const openModal = (mode, item = null) => {
    setModalMode(mode);
    setCurrentItem(item);
    if (mode === "edit" || mode === "view") {
      setNewStorageLocation(item);
    } else {
      setNewStorageLocation({
        // Reset all fields here
        stpId: "",
        title: "",
        attachment: "",
        version: "",
        effectiveDate: "",
        creationDate: "",
        reviewedBy: "",
        approvedBy: "",
        department: "",
        objective: "",
        testProcedureDescription: "",
        testType: "",
        testMethodReference: "",
        samplePreparation: "",
        reagents: "",
        equipment: "",
        calibration: "",
        environmental: "",
        controlSample: "",
        testParameters: "",
        safetyPrecautions: "",
        validationRequirements: "",
        calculationFormula: "",
        lsl: "",
        usl: "",
        resultInterpretation: "",
        expectedResults: "",
        reportTemplate: "",
        dataRecording: "",
        testFrequency: "",
        testReportSubmission: "",
        deviationHandling: "",
        auditTrail: "",
        revisionHistory: "",
        attachments: "",
        remarks: "",
      });
    }
    setIsModalOpen(true);
  };

  const handleDelete = (item) => {
    const updatedData = randomData.filter(
      (dataItem) => dataItem.stpId !== item.stpId
    );
    randomData = updatedData;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (modalMode === "add") {
      randomData.push(newStorageLocation);
    } else if (modalMode === "edit") {
      const updatedData = randomData.map((item) =>
        item.stpId === currentItem.stpId ? newStorageLocation : item
      );
      randomData = updatedData;
    }
    closeModal();
  };

  // Modify your existing handleInputChange function
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewStorageLocation({ ...newStorageLocation, [name]: value });
  };
  const headers = [
    "STP ID",
    "STP Title/Name",
    "STP Attachment",
    "Version Number",
    "Effective Date",
    "Creation Date",
    "Reviewed By",
    "Approved By",
    "Department",
    "Objective",
    "Test Procedure Description",
    "Test Type",
    "Test Method Reference",
    "Sample Preparation",
    "Reagents/Standards Used",
    "Equipment/Instrument Required",
    "Calibration Requirements",
    "Environmental Conditions",
    "Control Sample Requirements",
    "Test Parameters",
    "Safety Precautions",
    "Validation Requirements",
    "Calculation Formulae",
    "LSL",
    "USL",
    "Result Interpretation",
    "Expected Results",
    "Report Template",
    "Data Recording Procedure",
    "Test Frequency",
    "Test Report Submission",
    "Deviation Handling",
    "Audit Trail",
    "Revision History",
    "Attachments",
    "Remarks",
    "Actions",
  ];

  const fields = [
    "stpId",
    "title",
    "attachment",
    "version",
    "effectiveDate",
    "creationDate",
    "reviewedBy",
    "approvedBy",
    "department",
    "objective",
    "testProcedureDescription",
    "testType",
    "testMethodReference",
    "samplePreparation",
    "reagents",
    "equipment",
    "calibration",
    "environmental",
    "controlSample",
    "testParameters",
    "safetyPrecautions",
    "validationRequirements",
    "calculationFormula",
    "lsl",
    "usl",
    "resultInterpretation",
    "expectedResults",
    "reportTemplate",
    "dataRecording",
    "testFrequency",
    "testReportSubmission",
    "deviationHandling",
    "auditTrail",
    "revisionHistory",
    "attachments",
    "remarks",
  ];

  return (
    <div>
      <LaunchQMS />
      <div className="m-5 mt-3">
        <div className="main-head mb-6">
          <h4 className="font-bold text-xl">STP</h4>
        </div>
        <div className="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0">
          <div className="flex flex-grow space-x-4">
            <SearchBar
              value={""}
              onChange={""}
              className="w-full md:w-auto px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            />
            <Dropdown
              options={[
                { value: "All", label: "All" },
                { value: "Active", label: "Active" },
                { value: "Inactive", label: "Inactive" },
              ]}
              value={""}
              onChange={""}
              className="w-full md:w-auto px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <div className="flex justify-end space-x-4">
            <PDFDownload
              columns={"'columns'"}
              data={"filteredData"}
              title="Storage Location"
              fileName="Storage_Location.pdf"
              className="px-4 py-2 bg-green-500 text-white rounded-md shadow hover:bg-green-600 transition"
            />
            <ATMButton
              text="Import"
              color="pink"
              onClick={"handleOpenModals"}
              className="px-4 py-2 bg-pink-500 text-white rounded-md shadow hover:bg-pink-600 transition"
            />
            <ATMButton
              text="Add Storage Location"
              color="blue"
              onClick={() => openModal("add")}
              className="px-4 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600 transition"
            />
          </div>
        </div>
      </div>

      <div>
        <table className="min-w-full bg-white border border-gray-200 shadow-lg mx-2">
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
              <th colSpan="4" className="px-4 py-2 bg-orange-500">
                Miscellaneous
              </th>
            </tr>
            <tr className="bg-slate-800 text-white">
              {headers.map((header, index) => (
                <td key={index} className="border px-4 py-2">
                  {header}
                </td>
              ))}
            </tr>
          </thead>
          <tbody>
            {randomData.map((data, index) => (
              <tr key={index}>
                {fields.map((field, Index) => (
                  <td key={Index} className="border px-4 py-2 min-w-[100px]">
                    {data[field]}
                  </td>
                ))}
                <td className="border px-4 py-2">
                  <div className="flex gap-2">
                    <FontAwesomeIcon
                      icon={faEye}
                      className="mr-2 cursor-pointer"
                      onClick={() => openModal("view", data)}
                    />
                    <FontAwesomeIcon
                      icon={faPenToSquare}
                      className="mr-2 cursor-pointer"
                      onClick={() => openModal("edit", data)}
                    />
                    <FontAwesomeIcon
                      icon={faTrashCan}
                      className="cursor-pointer"
                      onClick={() => handleDelete(data)}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 overflow-y-auto">
          <div className="bg-white rounded-lg p-6 w-full max-w-4xl shadow-lg overflow-y-auto h-screen">
            <h3 className="text-lg font-bold mb-6">
              {modalMode === "add"
                ? "Add Storage Location"
                : modalMode === "edit"
                ? "Edit Storage Location"
                : "View Storage Location"}
            </h3>
            <form onSubmit={handleFormSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {Object.entries(newStorageLocation).map(([key, value]) => (
                  <div key={key}>
                    <label
                      htmlFor={key}
                      className="block text-sm font-medium text-gray-700"
                    >
                      {key.charAt(0).toUpperCase() + key.slice(1)}
                    </label>
                    <input
                      type="text"
                      id={key}
                      name={key}
                      value={value}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2"
                      readOnly={modalMode === "view"}
                    />
                  </div>
                ))}
              </div>
              <div className="mt-6 flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md shadow-sm"
                >
                  Close
                </button>
                {modalMode !== "view" && (
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm"
                  >
                    {modalMode === "add" ? "Submit" : "Save Changes"}
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
export default STP;