import React, { useState, useEffect } from "react";
import ATMButton from "../../components/ATM components/Button/ATMButton";
import PDFDownload from "../PDFComponent/PDFDownload ";
import Dropdown from "../../components/ATM components/Dropdown/Dropdown";
import SearchBar from "../../components/ATM components/SearchBar/SearchBar";
import { randomData } from "./demoStp";
import LaunchQMS from "../../components/ReusableButtons/LaunchQMS";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from 'axios';
import { BASE_URL } from "../../config.json";
import {
  faEye,
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import STPViewModal from "./STPModal";
import {
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CButton,
  CFormInput,
} from "@coreui/react";

const initialData = JSON.parse(localStorage.getItem("stp")) || "";

const STP = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [viewModalData, setViewModalData] = useState(null);
  const [editModalData, setEditModalData] = useState(null);
  const [dataChanged,setDataChanged]=useState(false);
  // const [data, setData] = useState(() => {
  //   return [...randomData, ...initialData];
  // });
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPageCount = Math.ceil(data.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const currentData = data.slice(startIndex, startIndex + pageSize);
  const openAddModal = () => {
    setIsAddModalOpen(true);
  };
  const closeAddModal = () => {
    setIsAddModalOpen(false);
  };
  const openEditModal = (rowData) => {
    setEditModalData(rowData);
  };

  const closeEditModal = () => {
    setEditModalData(null);
  };

  // const handleAddSTP = (newSTP) => {
  //   setData((prevData) => [...prevData, { ...newSTP, id: Date.now() }]);
  //   closeAddModal();
  // };
  // const handleEditSave = (updatedData) => {
  //   const newData = data.map((item) =>
  //     item.stpId === updatedData.stpId ? updatedData : item
  //   );
  //   setData(newData);
  //   setEditModalData(null);
  // };

  const handleChange = (e, setFormData, formData) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

   // GET API - Fetch all STPs
   const fetchSTPs = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${BASE_URL}/get-all-lims/STP`);
      console.log(response.data, "response");
  
      const stpData = response.data[0]?.STP || [];
  
      const filteredData = stpData.map((item, index) => ({
        sno: index + 1, // Adding serial number
        stpId: item.stpId || "No STP ID", 
        title: item.title || "No Title", 
        attachment: item.attachment || "No Attachment", 
        version: item.version || "No Version", 
        effectiveDate: item.effectiveDate
          ? new Date(item.effectiveDate).toISOString().split("T")[0]
          : "No Effective Date", 
        creationDate: item.creationDate
          ? new Date(item.creationDate).toISOString().split("T")[0]
          : "No Creation Date", 
        reviewedBy: item.reviewedBy || "No Reviewer", 
        approvedBy: item.approvedBy || "No Approver", 
        department: item.department || "No Department", 
        objective: item.objective || "No Objective", 
        testProcedureDescription: item.testProcedureDescription || "No Procedure Description", 
        testType: item.testType || "No Test Type", 
        testMethodReference: item.testMethodReference || "No Method Reference", 
        samplePreparation: item.samplePreparation || "No Sample Preparation", 
        reagents: item.reagents || "No Reagents", 
        equipment: item.equipment || "No Equipment", 
        calibration: item.calibration || "No Calibration", 
        environmental: item.environmental || "No Environmental Info", 
        controlSample: item.controlSample || "No Control Sample", 
        testParameters: item.testParameters || "No Test Parameters", 
        safetyPrecautions: item.safetyPrecautions || "No Safety Precautions", 
        validationRequirements: item.validationRequirements || "No Validation Requirements", 
        calculationFormula: item.calculationFormula || "No Calculation Formula", 
        lsl: item.lsl || "No LSL", 
        usl: item.usl || "No USL", 
        resultInterpretation: item.resultInterpretation || "No Result Interpretation", 
        expectedResults: item.expectedResults || "No Expected Results", 
        reportTemplate: item.reportTemplate || "No Report Template", 
        dataRecording: item.dataRecording || "No Data Recording", 
        testFrequency: item.testFrequency || "No Test Frequency", 
        testReportSubmission: item.testReportSubmission || "No Report Submission", 
        deviationHandling: item.deviationHandling || "No Deviation Handling", 
        auditTrail: item.auditTrail || "No Audit Trail", 
        revisionHistory: item.revisionHistory || "No Revision History", 
        attachments: item.attachments || "No Attachments", 
        remarks: item.remarks || "No Remarks", 
      }));
  
      console.log(filteredData, "Filtered STP Data");
  
      setData(filteredData);
      setLoading(false);
    } catch (err) {
      setError("Error fetching STPs");
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchSTPs();
  }, [dataChanged]);
 

   // POST API - Add new STP
   const handleAddSTP = async (newSTP) => {
    try {
      const response = await axios.post(`${BASE_URL}/manage-lims/add/STP`, newSTP);
      const addedSTP = response.data.updatedLIMS?.stp[0];
      if (addedSTP) {
        setData(prevData => [...prevData, addedSTP]);
        setDataChanged(true);
      }
      closeAddModal();
    } catch (err) {
      setError('Error adding STP');
    }
  };

   // PUT API - Update existing STP
   const handleEditSave = async (updatedData) => {
    try {
      const response = await axios.put(`${BASE_URL}/manage-lims/:update/STP/${updatedData.stpId}`, updatedData);
      const updatedSTP = response.data.updatedLIMS?.stp[0];
      if (updatedSTP) {
        setData(prevData => prevData.map(item => item.stpId === updatedSTP.stpId ? updatedSTP : item));
        setDataChanged(false);
      }
      setEditModalData(null);
    } catch (err) {
      setError('Error updating STP');
    }
  };

  const AddSTPModal = ({ visible, closeModal, onAdd }) => {
    const [formData, setFormData] = useState({
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
    const handleAdd = () => {
      onAdd(formData);
      closeModal();
    };

    return (
      <CModal alignment="center" visible={visible} onClose={closeModal}>
        <CModalHeader>
          <CModalTitle>Add STP</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CFormInput
            className="mb-3"
            type="text"
            label="STP ID"
            name="stpId"
            value={formData.stpId}
            onChange={(e) => handleChange(e, setFormData, formData)}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="STP Title/Name"
            name="title"
            value={formData.title}
            onChange={(e) => handleChange(e, setFormData, formData)}
          />
          <CFormInput
            className="mb-3"
            type="file"
            label="STP Attachment"
            name="attachment"
            value={formData.attachment}
            onChange={(e) => handleChange(e, setFormData, formData)}
          />
          <CFormInput
            className="mb-3"
            type="number"
            label="Version Number"
            name="version"
            value={formData.version}
            onChange={(e) => handleChange(e, setFormData, formData)}
          />
          <CFormInput
            className="mb-3"
            type="date"
            label="Effective Date"
            name="effectiveDate"
            value={formData.effectiveDate}
            onChange={(e) => handleChange(e, setFormData, formData)}
          />
          <CFormInput
            className="mb-3"
            type="date"
            label="Creation Date"
            name="creationDate"
            value={formData.creationDate}
            onChange={(e) => handleChange(e, setFormData, formData)}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Reviewed By"
            name="reviewedBy"
            value={formData.reviewedBy}
            onChange={(e) => handleChange(e, setFormData, formData)}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Approved By"
            name="approvedBy"
            value={formData.approvedBy}
            onChange={(e) => handleChange(e, setFormData, formData)}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Department"
            name="department"
            value={formData.department}
            onChange={(e) => handleChange(e, setFormData, formData)}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Objective"
            name="objective"
            value={formData.objective}
            onChange={(e) => handleChange(e, setFormData, formData)}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Test Procedure Description"
            name="testProcedureDescription"
            value={formData.testProcedureDescription}
            onChange={(e) => handleChange(e, setFormData, formData)}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Test Type"
            name="testType"
            value={formData.testType}
            onChange={(e) => handleChange(e, setFormData, formData)}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Test Method Reference"
            name="testMethodReference"
            value={formData.testMethodReference}
            onChange={(e) => handleChange(e, setFormData, formData)}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Sample Preparation"
            name="samplePreparation"
            value={formData.samplePreparation}
            onChange={(e) => handleChange(e, setFormData, formData)}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Reagents/Standards Used"
            name="reagents"
            value={formData.reagents}
            onChange={(e) => handleChange(e, setFormData, formData)}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Equipment/Instrument Required"
            name="equipment"
            value={formData.equipment}
            onChange={(e) => handleChange(e, setFormData, formData)}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Calibration Requirements"
            name="calibration"
            value={formData.calibration}
            onChange={(e) => handleChange(e, setFormData, formData)}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Environmental Conditions"
            name="environmental"
            value={formData.environmental}
            onChange={(e) => handleChange(e, setFormData, formData)}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Control Sample Requirements"
            name="controlSample"
            value={formData.controlSample}
            onChange={(e) => handleChange(e, setFormData, formData)}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Test Parameters"
            name="testParameters"
            value={formData.testParameters}
            onChange={(e) => handleChange(e, setFormData, formData)}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Safety Precautions"
            name="safetyPrecautions"
            value={formData.safetyPrecautions}
            onChange={(e) => handleChange(e, setFormData, formData)}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Validation Requirements"
            name="validationRequirements"
            value={formData.validationRequirements}
            onChange={(e) => handleChange(e, setFormData, formData)}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Calculation Formula"
            name="calculationFormula"
            value={formData.calculationFormula}
            onChange={(e) => handleChange(e, setFormData, formData)}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="LSL"
            name="lsl"
            value={formData.lsl}
            onChange={(e) => handleChange(e, setFormData, formData)}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="USL"
            name="usl"
            value={formData.usl}
            onChange={(e) => handleChange(e, setFormData, formData)}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Result Interpretation"
            name="resultInterpretation"
            value={formData.resultInterpretation}
            onChange={(e) => handleChange(e, setFormData, formData)}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Expected Results"
            name="expectedResults"
            value={formData.expectedResults}
            onChange={(e) => handleChange(e, setFormData, formData)}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Report Template"
            name="reportTemplate"
            value={formData.reportTemplate}
            onChange={(e) => handleChange(e, setFormData, formData)}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Data Recording Procedure"
            name="dataRecording"
            value={formData.dataRecording}
            onChange={(e) => handleChange(e, setFormData, formData)}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Test Frequency"
            name="testFrequency"
            value={formData.testFrequency}
            onChange={(e) => handleChange(e, setFormData, formData)}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Test Report Submission"
            name="testReportSubmission"
            value={formData.testReportSubmission}
            onChange={(e) => handleChange(e, setFormData, formData)}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Deviation Handling"
            name="deviationHandling"
            value={formData.deviationHandling}
            onChange={(e) => handleChange(e, setFormData, formData)}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Audit Trail"
            name="auditTrail"
            value={formData.auditTrail}
            onChange={(e) => handleChange(e, setFormData, formData)}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Revision History"
            name="revisionHistory"
            value={formData.revisionHistory}
            onChange={(e) => handleChange(e, setFormData, formData)}
          />
          <CFormInput
            className="mb-3"
            type="file"
            label="Attachments"
            name="attachments"
            value={formData.attachments}
            onChange={(e) => handleChange(e, setFormData, formData)}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Remarks"
            name="remarks"
            value={formData.remarks}
            onChange={(e) => handleChange(e, setFormData, formData)}
          />
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={closeModal}>
            Close
          </CButton>
          <CButton color="primary" onClick={handleAdd}>
            Add STP
          </CButton>
        </CModalFooter>
      </CModal>
    );
  };
  useEffect(() => {
    localStorage.setItem(
      "stp",
      JSON.stringify(data.filter((row) => !randomData.includes(row)))
    );
  }, [data]);

  const EditModal = ({ visible, closeModal, data, onSave }) => {
    const [formData, setFormData] = useState(data);

    useEffect(() => {
      if (data) {
        setFormData(data);
      }
    }, [data]);

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };

    const handleSave = () => {
      onSave(formData);
    };

    return (
      <CModal
        alignment="center"
        visible={visible}
        onClose={closeModal}
        size="xl"
      >
        <CModalHeader>
          <CModalTitle>Edit STP</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {Object.entries(formData).map(([key, value]) => {
              let inputType;
              if (key.includes("date")) {
                inputType = "date";
              } else if (key.includes("number")) {
                inputType = "number";
              } else if (key.includes("file")) {
                inputType = "file";
              } else {
                inputType = "text";
              }

              return (
                <div key={key}>
                  <CFormInput
                    className="mb-3"
                    type={inputType}
                    label={
                      key.charAt(0).toUpperCase() +
                      key
                        .slice(1)
                        .replace(/([A-Z])/g, " $1")
                        .trim()
                    }
                    name={key}
                    value={inputType !== "file" ? value : undefined}
                    onChange={
                      inputType === "file"
                        ? (e) => handleChange(e, setFormData, formData)
                        : handleChange
                    }
                  />
                </div>
              );
            })}
          </div>
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={closeModal}>
            Close
          </CButton>
          <CButton color="primary" onClick={handleSave}>
            Save Changes
          </CButton>
        </CModalFooter>
      </CModal>
    );
  };


  const onViewDetails = (rowData) => {
    setViewModalData(rowData);
  };

  const closeViewModal = () => {
    setViewModalData(null);
  };

  const openModal = (mode, item = null) => {
    setModalMode(mode);
    setCurrentItem(item);
    if (mode === "edit" || mode === "view") {
      setNewStorageLocation(item);
    } else {
      setNewStorageLocation({
        stpId: "",
        title: "",
        attachment: "",
        // ... (reset all other fields)
      });
    }
    setIsModalOpen(true);
  };

  const handleDelete = (item) => {
    const updatedData = data.filter(
      (dataItem) => dataItem.stpId !== item.stpId
    );
    setData(updatedData);
    setDataChanged(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewStorageLocation((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (modalMode === "add") {
      setData([...data, newStorageLocation]);
    } else if (modalMode === "edit") {
      const updatedData = data.map((item) =>
        item.stpId === currentItem.stpId ? newStorageLocation : item
      );
      setData(updatedData);
    }
    setIsModalOpen(false);
  };

  const handleStatusUpdate = (stpId, newStatus) => {
    const updatedData = data.map((item) =>
      item.stpId === stpId ? { ...item, status: newStatus } : item
    );
    setData(updatedData);
  };
  const headers = [
    "S.No.",
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
        <div className="flex flex-grow space-x-10">
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
  
        <div className="flex justify-end space-x-4 text-nowrap">
          <PDFDownload
            columns={"'columns'"}
            data={"filteredData"}
            title="STP"
            fileName="STP.pdf"
            className="px-4 py-2 bg-green-500 text-white rounded-md shadow hover:bg-green-600 transition"
          />
          <ATMButton
            text="Import"
            color="pink"
            onClick={"handleOpenModals"}
            className="px-4 py-2 bg-pink-500 text-white rounded-md shadow hover:bg-pink-600 transition"
          />
          <ATMButton
            text="Add STP"
            color="blue"
            onClick={openAddModal}
            className="px-4 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600 transition"
          />
        </div>
      </div>
    </div>
  
    <div className="relative">
      <table className="min-w-full bg-white border border-gray-200 shadow-lg mx-2 mt-10">
        <thead className="sticky top-[86px]">
          <tr className=" text-white text-left">
            <th colSpan="11" className="px-4 py-2 bg-yellow-600">
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
            <th colSpan="5" className="px-4 py-2 bg-orange-500">
              Miscellaneous
            </th>
          </tr>
          <tr className="bg-slate-800 text-white sticky top-[126px]">
            {headers.map((header, index) => (
              <td key={index} className="border px-4 py-2">
                {header}
              </td>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentData.map((item, index) => (
            <tr key={index}>
              <td className="border px-4 py-2 text-center">
                {startIndex + index + 1}
              </td>
              {fields.map((field, fieldIndex) => (
                <td
                  key={fieldIndex}
                  className="border px-4 py-2 min-w-[100px]"
                >
                  {item[field]}
                </td>
              ))}
              <td className="border px-4 py-2">
                <div className="flex gap-2">
                  <FontAwesomeIcon
                    icon={faEye}
                    className="mr-2 cursor-pointer"
                    onClick={() => onViewDetails(item)}
                  />
                  <FontAwesomeIcon
                    icon={faPenToSquare}
                    className="mr-2 cursor-pointer"
                    onClick={() => openEditModal(item)}
                  />
                  <FontAwesomeIcon
                    icon={faTrashCan}
                    className="cursor-pointer"
                    onClick={() => handleDelete(item)}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
  
      <div className="mt-6 flex justify-end">
        <nav
          className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
          aria-label="Pagination"
        >
          <button
            onClick={() =>
              handlePageChange(currentPage > 1 ? currentPage - 1 : 1)
            }
            className={`relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 ${
              currentPage === 1 ? "cursor-not-allowed" : "cursor-pointer"
            }`}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          {Array.from({ length: totalPageCount }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 ${
                currentPage === index + 1
                  ? "z-10 bg-blue-50 border-blue-500 text-blue-600"
                  : "hover:text-blue-500"
              }`}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() =>
              handlePageChange(
                currentPage < totalPageCount ? currentPage + 1 : totalPageCount
              )
            }
            className={`relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 ${
              currentPage === totalPageCount
                ? "cursor-not-allowed"
                : "cursor-pointer"
            }`}
            disabled={currentPage === totalPageCount}
          >
            Next
          </button>
        </nav>
      </div>
    </div>  
      {viewModalData && (
        <STPViewModal
          visible={viewModalData !== null}
          closeModal={closeViewModal}
          data={viewModalData}
          fields={fields}
          title="STP Details"
          updateStatus={handleStatusUpdate}
        />
      )}
      {isAddModalOpen && (
        <AddSTPModal
          visible={isAddModalOpen}
          closeModal={closeAddModal}
          onAdd={handleAddSTP}
        />
      )}
      {editModalData && (
        <EditModal
          visible={Boolean(editModalData)}
          closeModal={closeEditModal}
          data={editModalData}
          onSave={handleEditSave}
        />
      )}
    </div>
  );
};

export default STP;