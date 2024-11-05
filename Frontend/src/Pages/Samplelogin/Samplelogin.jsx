import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import {
  CButton,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CForm,
  CFormInput,
  CFormSelect,
} from "@coreui/react";
import SearchBar from "../../components/ATM components/SearchBar/SearchBar";
import Dropdown from "../../components/ATM components/Dropdown/Dropdown";
import ATMButton from "../../components/ATM components/Button/ATMButton";
import Table from "../../components/ATM components/Table/Table";
import ReusableModal from "../Modals/ResusableModal";
import ImportModal from "../Modals/importModal";
import PDFDownload from "../PDFComponent/PDFDownload ";
import LaunchQMS from "../../components/ReusableButtons/LaunchQMS";
import { BASE_URL } from "../../config.json";

function SampleLogin() {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [viewModalData, setViewModalData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalsOpen, setIsModalsOpen] = useState(false);
  const [editModalData, setEditModalData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchSamples = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/get-all-lims/sL`);
      const formattedData = response?.data[0]?.sL || [];
      const updatedData = formattedData.map((item, index) => ({
        ...item,
        sno: index + 1,
        checkbox: false,
      }));
      setData(updatedData);
    } catch (error) {
      console.error("Error fetching samples:", error);
      toast.error("Failed to fetch samples");
    }
  };
  useEffect(() => {
    fetchSamples();
  }, []);

  const handleDelete = async (item) => {
    try {
      const response = await axios.delete(
        `${BASE_URL}/delete-lims/sL/${item.uniqueId}`
      );
      if (response?.status === 200) {
        const newData = data.filter((d) => d.sno !== item.sno);
        setData(newData);
        toast.success("Sample deleted successfully");
        fetchSamples();
      } else {
        toast.error("Failed to delete sample");
      }
    } catch (error) {
      console.error("Error deleting sample:", error);
      toast.error("Error deleting sample");
    }
  };

  const handleOpenModals = () => setIsModalsOpen(true);
  const handleCloseModals = () => setIsModalsOpen(false);

  const handleSelectAll = (e) => {
    const checked = e.target.checked;
    const newData = data.map((row) => ({ ...row, checkbox: checked }));
    setData(newData);
  };

  const onViewDetails = (rowData) => setViewModalData(rowData);

  const handleCheckboxChange = (index) => {
    const newData = [...data];
    newData[index].checkbox = !newData[index].checkbox;
    setData(newData);
  };

  const columns = [
    {
      header: <input type="checkbox" onChange={handleSelectAll} />,
      accessor: "checkbox",
      Cell: ({ row }) => (
        <input
          type="checkbox"
          checked={row.original.checkbox}
          onChange={() => handleCheckboxChange(row.index)}
        />
      ),
    },
    { header: "Sr No.", accessor: "sno" },
    { header: "Sample Type", accessor: "sampleType" },
    { header: "Product / Material", accessor: "storageCondition" },
    { header: "A.R. No.", accessor: "createdAt" },
    { header: "Generic Name", accessor: "genericName" },
    { header: "Specification Code", accessor: "specificationCode" },
    { header: "Status", accessor: "status" },
    { header: "Analyst", accessor: "analyst" },
    { header: "Analysis Date", accessor: "analysisDate" },
    { header: "Attachment", accessor: "attachment" },
    {
      header: "Actions",
      accessor: "action",
      Cell: ({ row }) => (
        <>
          <FontAwesomeIcon
            icon={faEye}
            className="mr-2 cursor-pointer"
            onClick={() => onViewDetails(row.original)}
          />
          <FontAwesomeIcon
            icon={faPenToSquare}
            className="mr-2 cursor-pointer"
            onClick={() => openEditModal(row.original)}
          />
          <FontAwesomeIcon
            icon={faTrashCan}
            className="cursor-pointer"
            onClick={() => handleDelete(row.original)}
          />
        </>
      ),
    },
  ];

  const filteredData = data.filter((row) => {
    return (
      row.sampleType.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (statusFilter === "All" || row.status === statusFilter)
    );
  });

  const handleExcelDataUpload = (excelData) => {
    const updatedData = excelData.map((item, index) => ({
      ...item,
      sno: index + 1,
      checkbox: false,
    }));
    setData(updatedData);
    setIsModalsOpen(false);
  };

  const addNewSample = async (newSample) => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        `${BASE_URL}/manage-lims/add/sL`,
        newSample
      );
      if (response.status === 200) {
        toast.success("Sample added successfully");
        fetchSamples();
      }
    } catch (error) {
      console.error("Error adding sample:", error);
      toast.error("Failed to add sample");
    } finally {
      setIsLoading(false);
    }
    setIsModalOpen(false);
  };

  const handleEditSave = async (updatedData) => {
    const { sno, checkbox, ...dataToSend } = updatedData;
    setIsLoading(true);
    try {
      const response = await axios.put(
        `${BASE_URL}/manage-lims/update/sL/${updatedData.uniqueId}`,
        dataToSend
      );
      if (response.status === 200) {
        setData((prevData) =>
          prevData.map((item) =>
            item.uniqueId === updatedData.uniqueId
              ? { ...item, ...updatedData }
              : item
          )
        );
        toast.success("Sample updated successfully");
      } else {
        toast.error("Failed to update sample");
      }
    } catch (error) {
      console.error("Error updating sample:", error);
      toast.error("Failed to update sample");
    } finally {
      setIsLoading(false);
      setEditModalData(null);
    }
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const openEditModal = (rowData) => setEditModalData(rowData);
  const closeEditModal = () => setEditModalData(null);

  const closeViewModal = () => setViewModalData(null);

  const StatusModal = ({ visible, closeModal, onAdd }) => {
    const [sampleData, setSampleData] = useState({
      sampleType: "",
      storageCondition: "",
      createdAt: "",
      genericName: "",
      specificationCode: "",
      status: "INITIATED",
      analyst: "",
      analysisDate: "",
      attachment: null,
    });
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const handleAddSample = async (e) => {
      e.preventDefault();
      const newErrors = {};
      Object.keys(sampleData).forEach((key) => {
        if (!sampleData[key] && key !== "attachment") {
          newErrors[key] = "This field is required";
        }
      });

      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return;
      }

      setIsLoading(true);
      try {
        await onAdd(sampleData);
        closeModal();
      } catch (error) {
        console.error("Error adding sample:", error);
        toast.error("Failed to add sample");
      } finally {
        setIsLoading(false);
      }
    };

    const handleInputChange = (field, value) => {
      setSampleData({ ...sampleData, [field]: value });
      if (errors[field]) {
        setErrors({ ...errors, [field]: null });
      }
    };

    return (
      <CModal
        alignment="center"
        visible={visible}
        onClose={closeModal}
        size="lg"
      >
        <CModalHeader>
          <CModalTitle>Add Sample</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CForm onSubmit={handleAddSample}>
            <CFormInput
              className="mb-3"
              type="text"
              label="Sample Type"
              name="sampleType"
              value={sampleData.sampleType}
              onChange={(e) => handleInputChange("sampleType", e.target.value)}
              invalid={!!errors.sampleType}
              feedback={errors.sampleType}
            />
            <CFormInput
              className="mb-3"
              type="text"
              label="Product / Material"
              name="storageCondition"
              value={sampleData.storageCondition}
              onChange={(e) =>
                handleInputChange("storageCondition", e.target.value)
              }
              invalid={!!errors.storageCondition}
              feedback={errors.storageCondition}
            />
            <CFormInput
              className="mb-3"
              type="text"
              label="A.R. No."
              name="createdAt"
              value={sampleData.createdAt}
              onChange={(e) => handleInputChange("createdAt", e.target.value)}
              invalid={!!errors.createdAt}
              feedback={errors.createdAt}
            />
            <CFormInput
              className="mb-3"
              type="text"
              label="Generic Name"
              name="genericName"
              value={sampleData.genericName}
              onChange={(e) => handleInputChange("genericName", e.target.value)}
              invalid={!!errors.genericName}
              feedback={errors.genericName}
            />
            <CFormInput
              className="mb-3"
              type="text"
              label="Specification Code"
              name="specificationCode"
              value={sampleData.specificationCode}
              onChange={(e) =>
                handleInputChange("specificationCode", e.target.value)
              }
              invalid={!!errors.specificationCode}
              feedback={errors.specificationCode}
            />
            <CFormSelect
              className="mb-3"
              label="Status"
              name="status"
              value={sampleData.status}
              onChange={(e) => handleInputChange("status", e.target.value)}
              options={[
                "Select...",
                { label: "Initiated", value: "INITIATED" },
                { label: "Approved", value: "APPROVED" },
                { label: "Rejected", value: "REJECTED" },
              ]}
              invalid={!!errors.status}
              feedback={errors.status}
            />
            <CFormInput
              className="mb-3"
              type="text"
              label="Analyst"
              name="analyst"
              value={sampleData.analyst}
              onChange={(e) => handleInputChange("analyst", e.target.value)}
              invalid={!!errors.analyst}
              feedback={errors.analyst}
            />
            <CFormInput
              className="mb-3"
              type="date"
              onFocus={(e) => e.target.showPicker()}
              label="Analysis Date"
              name="analysisDate"
              value={sampleData.analysisDate}
              onChange={(e) =>
                handleInputChange("analysisDate", e.target.value)
              }
              invalid={!!errors.analysisDate}
              feedback={errors.analysisDate}
            />
            <CFormInput
              className="mb-3"
              type="file"
              label="Attachment"
              name="attachment"
              onChange={(e) =>
                handleInputChange("attachment", e.target.files[0])
              }
            />
          </CForm>
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={closeModal}>
            Cancel
          </CButton>
          <CButton
            color="primary"
            onClick={handleAddSample}
            disabled={isLoading}
          >
            {isLoading ? "Adding..." : "Add Sample"}
          </CButton>
        </CModalFooter>
      </CModal>
    );
  };

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
      <CModal alignment="center" visible={visible} onClose={closeModal}>
        <CModalHeader>
          <CModalTitle>Edit Sample</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CFormInput
            type="text"
            className="mb-3"
            label="Sample Type"
            name="sampleType"
            value={formData?.sampleType || ""}
            onChange={handleChange}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Product / Material"
            name="storageCondition"
            value={formData?.storageCondition || ""}
            onChange={handleChange}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="A.R. No."
            name="createdAt"
            value={formData?.createdAt || ""}
            onChange={handleChange}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Generic Name"
            name="genericName"
            value={formData?.genericName || ""}
            onChange={handleChange}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Specification Code"
            name="specificationCode"
            value={formData?.specificationCode || ""}
            onChange={handleChange}
          />
          <CFormSelect
            className="mb-3"
            label="Status"
            name="status"
            value={formData?.status || ""}
            onChange={handleChange}
            options={[
              "Select...",
              { label: "Initiated", value: "INITIATED" },
              { label: "Approved", value: "APPROVED" },
              { label: "Rejected", value: "REJECTED" },
            ]}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Analyst"
            name="analyst"
            value={formData?.analyst || ""}
            onChange={handleChange}
          />
          <CFormInput
            className="mb-3"
            type="date"
            onFocus={(e) => e.target.showPicker()}
            label="Analysis Date"
            name="analysisDate"
            value={formData?.analysisDate || ""}
            onChange={handleChange}
          />
          <CFormInput
            className="mb-3"
            type="file"
            label="Attachment"
            name="attachment"
            onChange={handleChange}
          />
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={closeModal}>
            Cancel
          </CButton>
          <CButton color="primary" onClick={handleSave}>
            Save Changes
          </CButton>
        </CModalFooter>
      </CModal>
    );
  };

  return (
    <>
      <LaunchQMS />
      <div className="m-5 mt-3">
        <div className="main-head">
          <h4 className="fw-bold">Sample Login</h4>
        </div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex space-x-4">
            <SearchBar value={searchQuery} onChange={setSearchQuery} />
            <Dropdown
              options={[
                { value: "All", label: "All" },
                { value: "INITIATED", label: "Initiated" },
                { value: "APPROVED", label: "Approved" },
                { value: "REJECTED", label: "Rejected" },
              ]}
              value={statusFilter}
              onChange={setStatusFilter}
            />
          </div>
          <div className="float-right flex gap-4">
            <PDFDownload
              columns={columns}
              data={filteredData}
              fileName="Sample_Login.pdf"
              title="Sample Login Data"
            />
            <ATMButton text="Import" color="pink" onClick={handleOpenModals} />
            <ATMButton text="Add Sample" color="blue" onClick={openModal} />
          </div>
        </div>
        <Table
          columns={columns}
          data={filteredData}
          onDelete={handleDelete}
          onCheckboxChange={handleCheckboxChange}
          onViewDetails={onViewDetails}
          openEditModal={openEditModal}
        />
      </div>

      {viewModalData && (
        <ReusableModal
          visible={viewModalData !== null}
          closeModal={closeViewModal}
          data={viewModalData}
          fields={columns
            .map((col) => ({ key: col.accessor, label: col.header }))
            .filter(
              (field) => field.key !== "action" && field.key !== "checkbox"
            )}
          title="Sample Details"
        />
      )}

      {isModalOpen && (
        <StatusModal
          visible={isModalOpen}
          closeModal={closeModal}
          onAdd={addNewSample}
        />
      )}

      {isModalsOpen && (
        <ImportModal
          initialData={filteredData}
          isOpen={isModalsOpen}
          onClose={handleCloseModals}
          columns={columns}
          onDataUpload={handleExcelDataUpload}
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
    </>
  );
}

export default SampleLogin;
