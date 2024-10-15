import React, { useState, useEffect, version } from "react";
import ATMButton from "../components/ATM components/Button/ATMButton";
import PDFDownload from "./PDFComponent/PDFDownload ";
import Dropdown from "../components/ATM components/Dropdown/Dropdown";
import SearchBar from "../components/ATM components/SearchBar/SearchBar";
import LaunchQMS from "../components/ReusableButtons/LaunchQMS";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import SpecificationViewModal from "./SpecificationViewModal";
import { BASE_URL } from "../config.json";
import {
  faEye,
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import SpecificationSpecModal from "./Modals/SpecificationSpecModal";
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

const SpecificationSpec = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [viewModalData, setViewModalData] = useState(null);
  const [editModalData, setEditModalData] = useState(null);
  const [dataChanged, setDataChanged] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
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
      Object.keys(formData).forEach(key => {
        if (!formData[key] && key !== 'uniqueId' && key !== 'sno') {
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
        await onSave({...formData,sno:formData.sno});
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
      <CModal alignment="center" visible={visible} onClose={closeModal} size="xl">
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
                      label={key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, " $1").trim()}
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


  // GET API - Fetch all Specifications
  const fetchSpecifications = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${BASE_URL}/get-all-lims/specification`);
      console.log(response.data, "response");

      const specData = response.data[0]?.specification || [];

      const filteredData = specData.map((item) => (
        {
          sno: item.uniqueId || "No Unique ID",
          specId: item.specId || "No Spec ID",
          title: item.title || "No Title",
          version: item.version || "No Version",
          attachment: item.attachment || "No Attachment",
          effectiveDate: item.effectiveDate || "No Effective Date",
          creationDate: item.creationDate || "No Creation Date",
          approvedBy: item.approvedBy || "No Approval",
          productName: item.productName || "No Product Name",
          batchLotNumber: item.batchLotNumber || "No Batch/Lot Number",
          productCategory: item.productCategory || "No Product Category",
          manufacturer: item.manufacturer || "No Manufacturer",
          description: item.description || "No Description",
          materialGrade: item.materialGrade || "No Material Grade",
          molecularFormula: item.molecularFormula || "No Molecular Formula",
          packagingRequirements: item.packagingRequirements || "No Packaging Requirements",
          storageConditions: item.storageConditions || "No Storage Conditions",
          shelfLife: item.shelfLife || "No Shelf Life",
          labelingRequirements: item.labelingRequirements || "No Labeling Requirements",
          testParameter: item.testParameter || "No Test Parameter",
          testMethod: item.testMethod || "No Test Method",
          acceptanceCriteria: item.acceptanceCriteria || "No Acceptance Criteria",
          unitsOfMeasurement: item.unitsOfMeasurement || "No Units Of Measurement",
          testFrequency: item.testFrequency || "No Test Frequency",
          controlSampleReference: item.controlSampleReference || "No Control Sample Reference",
          samplingPlan: item.samplingPlan || "No Sampling Plan",
          testMethodValidation: item.testMethodValidation || "No Test Method Validation",
          referenceStandards: item.referenceStandards || "No Reference Standards",
          resultInterpretation: item.resultInterpretation || "No Result Interpretation",
          stabilityCriteria: item.stabilityCriteria || "No Stability Criteria",
          reTestingInterval: item.reTestingInterval || "No Re-Testing Interval",
          regulatoryRequirements: item.regulatoryRequirements || "No Regulatory Requirements",
          certification: item.certification || "No Certification",
          deviationHandling: item.deviationHandling || "No Deviation Handling",
          auditTrail: item.auditTrail || "No Audit Trail",
          documentReference: item.documentReference || "No Document Reference",
          revisionHistory: item.revisionHistory || "No Revision History",
          attachments: item.attachments || "No Attachments",
          comments: item.comments || "No Comments",
          reviewFrequency: item.reviewFrequency || "No Review Frequency",
          expiryDate: item.expiryDate || "No Expiry Date"
      }
      
      ));

      console.log(filteredData, "Filtered Specification Data");

      setData(filteredData);
      setLoading(false);
      setDataChanged(false);
    } catch (err) {
      setError("Error fetching Specifications");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSpecifications();
  }, [dataChanged]);

  // POST API - Add new Specification
  const handleAddSpecification = async (newSpecData) => {
    setIsLoading(true);
    try {
      const response = await axios.post(`${BASE_URL}/manage-lims/add/specification`,newSpecData );
      if (response.status === 200 || response.status === 201) {
        setDataChanged(true); // Trigger a re-fetch of data
        toast.success("New Specification added successfully!");
        closeAddModal();
      } else {
        toast.error("Failed to add new Specification. Please try again.");
      }
    } catch (error) {
      console.error("Error adding new Specification:", error);
      toast.error("Error adding new Specification: " + error.message);
    } finally {
      setIsLoading(false);
    }
  };


  // PUT API - Edit Specification
  const handleEditSave = async (updatedData) => {
    const { sno, ...dataToSend } = updatedData;
    setIsLoading(true);
    try {
      const response = await axios.put(
        `${BASE_URL}/manage-lims/update/specification/${sno}`,
        dataToSend
      );
      if (response.status === 200) {
        setDataChanged(true); // Trigger a re-fetch of data
        toast.success("Specification updated successfully");
        setEditModalData(null);
      } else {
        toast.error("Failed to update Specification");
      }
    } catch (error) {
      console.error("Error updating Specification:", error);
      toast.error("Failed to update Specification");
    } finally {
      setIsLoading(false);
    }
  };

  // DELETE API - Delete Specification
  const handleDelete = async (item) => {
    try {
      const response = await axios.delete(`${BASE_URL}/delete-lims/specification/${item.sno}`);
      if (response.status === 200) {
        const updatedData = data.filter(
          (dataItem) => dataItem.sno !== item.sno
        );
        setData(updatedData);
        setDataChanged(true);
        toast.success("Specification deleted successfully");
      } else {
        toast.error("Failed to delete Specification");
      }
    } catch (error) {
      console.error("Error deleting Specification:", error);
      toast.error("Error deleting Specification: " + (error.response?.data?.message || error.message));
    }
  };

  const onViewDetails = (rowData) => {
    setViewModalData(rowData);
  };

  const closeViewModal = () => {
    setViewModalData(null);
  };

  // ... (other utility functions)
  
  
  const handleStatusUpdate = (stpId, newStatus) => {
    const updatedData = data.map((item) =>
      item.stpId === stpId ? { ...item, status: newStatus } : item
    );
    setData(updatedData);
  };

  const headers = [
    "S.No", 
    "specId",
    "title",
    "version",
    "attachment",
    "effectiveDate",
    "creationDate",
    "approvedBy",
    "productName",
    "batchLotNumber",
    "productCategory",
    "manufacturer",
    "description",
    "materialGrade",
    "molecularFormula",
    "packagingRequirements",
    "storageConditions",
    "shelfLife",
    "labelingRequirements",
    "testParameter",
    "testMethod",
    "acceptanceCriteria",
    "unitsOfMeasurement",
    "testFrequency",
    "controlSampleReference",
    "samplingPlan",
    "testMethodValidation",
    "referenceStandards",
    "resultInterpretation",
    "stabilityCriteria",
    "reTestingInterval",
    "regulatoryRequirements",
    "certification",
    "deviationHandling",
    "auditTrail",
    "documentReference",
    "revisionHistory",
    "attachments",
    "comments",
    "reviewFrequency",
    "expiryDate",
    "actions"
  ];

  const fields = [
    "specId",
    "title",
    "version",
    "attachment",
    "effectiveDate",
    "creationDate",
    "approvedBy",
    "productName",
    "batchLotNumber",
    "productCategory",
    "manufacturer",
    "description",
    "materialGrade",
    "molecularFormula",
    "packagingRequirements",
    "storageConditions",
    "shelfLife",
    "labelingRequirements",
    "testParameter",
    "testMethod",
    "acceptanceCriteria",
    "unitsOfMeasurement",
    "testFrequency",
    "controlSampleReference",
    "samplingPlan",
    "testMethodValidation",
    "referenceStandards",
    "resultInterpretation",
    "stabilityCriteria",
    "reTestingInterval",
    "regulatoryRequirements",
    "certification",
    "deviationHandling",
    "auditTrail",
    "documentReference",
    "revisionHistory",
    "attachments",
    "comments",
    "reviewFrequency",
    "expiryDate"
  ];

  return (
    <div>
      <LaunchQMS />
      <div className="m-5 mt-3">
        <div className="main-head mb-6">
          <h4 className="font-bold text-xl">Specification</h4>
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
              title="Specification"
              fileName="Specification.pdf"
              className="px-4 py-2 bg-green-500 text-white rounded-md shadow hover:bg-green-600 transition"
            />
            <ATMButton
              text="Import"
              color="pink"
              onClick={"handleOpenModals"}
              className="px-4 py-2 bg-pink-500 text-white rounded-md shadow hover:bg-pink-600 transition"
            />
            <ATMButton
              text="Add Specification"
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
            <tr className="text-white text-left">
              <th colSpan="12" className="px-4 py-2 bg-cyan-500">
                General Information
              </th>
              <th colSpan="7" className="px-4 py-2 bg-green-500">
                Product Characteristics
              </th>
              <th colSpan="6" className="px-4 py-2 bg-red-500">
                Test Specifications
              </th>
              <th colSpan="6" className="px-4 py-2 bg-purple-500">
                Quality Control
              </th>
              <th colSpan="3" className="px-4 py-2 bg-orange-500">
                Compliance and Certification
              </th>
              <th colSpan="5" className="px-4 py-2 bg-yellow-500">
                Documentation and Tracking
              </th>
              <th colSpan="2" className="px-4 py-2 bg-blue-500">
                Miscellaneous
              </th>
              <th  className="px-4 py-2 bg-green-500">
                Actions
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

        {/* Pagination */}
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

      {/* Modals */}
      {viewModalData && (
        <SpecificationViewModal
          visible={viewModalData !== null}
          closeModal={closeViewModal}
          data={viewModalData}
          fields={fields}
          title="Specification Details"
          updateStatus={handleStatusUpdate}
        />
      )}
     {isAddModalOpen && (
      <SpecificationSpecModal
        visible={isAddModalOpen}
        closeModal={closeAddModal}
        handleSubmit={handleAddSpecification}
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

export default SpecificationSpec;