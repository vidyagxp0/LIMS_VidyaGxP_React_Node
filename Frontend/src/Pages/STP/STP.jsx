import React, { useState, useEffect } from "react";
import ATMButton from "../../components/ATM components/Button/ATMButton";
import PDFDownload from "../PDFComponent/PDFDownload ";
import Dropdown from "../../components/ATM components/Dropdown/Dropdown";
import SearchBar from "../../components/ATM components/SearchBar/SearchBar";
import { randomData } from "./demoStp";
import LaunchQMS from "../../components/ReusableButtons/LaunchQMS";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
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
  CForm,
} from "@coreui/react";
import { toast } from "react-toastify";

const initialData = JSON.parse(localStorage.getItem("stp")) || "";

const STP = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [viewModalData, setViewModalData] = useState(null);
  const [editModalData, setEditModalData] = useState(null);
  const [dataChanged, setDataChanged] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
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
        sno: item.uniqueId,
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
        testProcedureDescription:
          item.testProcedureDescription || "No Procedure Description",
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
        validationRequirements:
          item.validationRequirements || "No Validation Requirements",
        calculationFormula: item.calculationFormula || "No Calculation Formula",
        lsl: item.lsl || "No LSL",
        usl: item.usl || "No USL",
        resultInterpretation:
          item.resultInterpretation || "No Result Interpretation",
        expectedResults: item.expectedResults || "No Expected Results",
        reportTemplate: item.reportTemplate || "No Report Template",
        dataRecording: item.dataRecording || "No Data Recording",
        testFrequency: item.testFrequency || "No Test Frequency",
        testReportSubmission:
          item.testReportSubmission || "No Report Submission",
        deviationHandling: item.deviationHandling || "No Deviation Handling",
        auditTrail: item.auditTrail || "No Audit Trail",
        revisionHistory: item.revisionHistory || "No Revision History",
        attachments: item.attachments || "No Attachments",
        remarks: item.remarks || "No Remarks",
      }));

      console.log(filteredData, "Filtered STP Data");

      setData(filteredData);
      setLoading(false);
      setDataChanged(false);
    } catch (err) {
      setError("Error fetching STPs");
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchSTPs();
  }, [dataChanged]);

  // POST API - Add new STP
  const handleAddSTP = async (newSTPData) => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        `${BASE_URL}/manage-lims/add/STP`,
        newSTPData
      );
      if (response.status === 200 || response.status === 201) {
        setData((prevData) => [...prevData, response.data]); 
        fetchSTPs();
        toast.success("New STP added successfully!");
      } else {
        toast.error("Failed to add new STP. Please try again.");
      }
    } catch (error) {
      console.error("Error adding new STP:", error);
      toast.error("Error adding new STP: " + error.message);
    } finally {
      setIsLoading(false);
    }
  };
  const handleEditSave = async (updatedData) => {
    const { sno, ...dataToSend } = updatedData;
    setIsLoading(true);
    try {
      const response = await axios.put(
        `${BASE_URL}/manage-lims/update/STP/${updatedData.sno}`,
        dataToSend
      );
      if (response.status === 200) {
        setData((prevData) =>
          prevData.map((item) =>
            item.sno === updatedData.sno ? { ...item, ...updatedData } : item
          )
        );
        toast.success("STP updated successfully");
        setEditModalData(null);
      } else {
        toast.error("Failed to update STP");
      }
    } catch (error) {
      console.error("Error updating STP:", error);
      toast.error("Failed to update STP");
    } finally {
      setIsLoading(false);
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
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
      if (errors[name]) {
        setErrors((prev) => ({ ...prev, [name]: null }));
      }
    };

    const validateForm = () => {
      const newErrors = {};
      Object.keys(formData).forEach((key) => {
        if (!formData[key] && key !== "attachment" && key !== "attachments") {
          newErrors[key] = "This field is required";
        }
      });
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };

    const handleAdd = () => {
      if (validateForm()) {
        onAdd(formData);
        closeModal();
      }
    };

    return (
      <CModal
        alignment="center"
        visible={visible}
        onClose={closeModal}
        size="xl"
      >
        <CModalHeader>
          <CModalTitle>Add STP</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CForm>
            {Object.entries(formData).map(([key, value]) => {
              let inputType = "text";

              if (key === "effectiveDate") {
                inputType = "date";
              } else if (key === "creationDate") {
                inputType = "date";
              } else if (key.includes("date")) {
                inputType = "date";
              } else if (key.includes("number") || key === "version" || key==="stpId") {
                inputType = "number";
              } else if (key === "attachment" || key === "attachments") {
                inputType = "file";
              }

              return (
                <CFormInput
                  key={key}
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
                  onChange={handleChange}
                  invalid={!!errors[key]}
                  feedback={errors[key]}
                />
              );
            })}
          </CForm>
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
  // useEffect(() => {
  //   localStorage.setItem(
  //     "stp",
  //     JSON.stringify(data.filter((row) => !randomData.includes(row)))
  //   );
  // }, [data]);

  const EditModal = ({ visible, closeModal, data, onSave }) => {
    const [formData, setFormData] = useState(data);
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
      if (data) {
        setFormData(data);
      }
    }, [data]);

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
      if (errors[name]) {
        setErrors((prev) => ({ ...prev, [name]: null }));
      }
    };

    const validateForm = () => {
      const newErrors = {};
      Object.keys(formData).forEach((key) => {
        if (!formData[key] && key !== "uniqueId" && key !== "sno") {
          newErrors[key] = "This field is required";
        }
      });
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };

    const handleSave = async (e) => {
      e.preventDefault();
      if (!validateForm()) return;

      setIsLoading(true);
      try {
        await onSave({ ...formData, sno: formData.sno });
        closeModal();
      } catch (error) {
        console.error("Error updating STP:", error);
        toast.error("Failed to update STP");
      } finally {
        setIsLoading(false);
      }
    };

    if (!visible) return null;

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
          <CForm>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {Object.entries(formData).map(([key, value]) => {
                if (key === "sno" || key === "uniqueId") {
                  return (
                    <div key={key}>
                      <CFormInput
                        className="mb-3"
                        type="text"
                        label={key.charAt(0).toUpperCase() + key.slice(1)}
                        name={key}
                        value={value}
                        disabled
                      />
                    </div>
                  );
                }

                let inputType = "text";
                if (key.includes("date")) {
                  inputType = "date";
                } else if (key.includes("number") || key === "version") {
                  inputType = "number";
                } else if (key === "attachment" || key === "attachments") {
                  inputType = "file";
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
                      onChange={handleChange}
                      invalid={!!errors[key]}
                      feedback={errors[key]}
                    />
                  </div>
                );
              })}
            </div>
          </CForm>
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={closeModal}>
            Close
          </CButton>
          <CButton color="primary" onClick={handleSave} disabled={isLoading}>
            {isLoading ? "Saving..." : "Save Changes"}
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

  const handleDelete = async (item) => {
    try {
      const response = await axios.delete(
        `${BASE_URL}/delete-lims/STP/${item.sno}`
      );
      if (response.status === 200) {
        const updatedData = data.filter(
          (dataItem) => dataItem.sno !== item.sno
        );
        setData(updatedData);
        setDataChanged(true);
        toast.success("STP deleted successfully");
      } else {
        toast.error("Failed to delete STP");
      }
    } catch (error) {
      console.error("Error deleting STP:", error);
      toast.error(
        "Error deleting STP: " +
          (error.response?.data?.message || error.message)
      );
    }
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
                  currentPage < totalPageCount
                    ? currentPage + 1
                    : totalPageCount
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
          closeModal={() => setEditModalData(null)}
          data={editModalData}
          onSave={handleEditSave}
        />
      )}
    </div>
  );
};

export default STP;
