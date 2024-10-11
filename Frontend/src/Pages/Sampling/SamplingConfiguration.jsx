import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
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

function SamplingConfiguration() {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [viewModalData, setViewModalData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalsOpen, setIsModalsOpen] = useState(false);
  const [editModalData, setEditModalData] = useState(null);

  useEffect(() => {
    fetchSamplingConfigurations();
  }, []);

  const fetchSamplingConfigurations = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/get-all-lims/sSamplingConfiguration`);
      const formattedData = response?.data[0]?.sSamplingConfiguration || [];
      const updatedData = formattedData.map((item, index) => ({
        ...item,
        sno: item.uniqueId,
        checkbox: false,
      }));
      setData(updatedData);
    } catch (error) {
      console.error("Error fetching sampling configurations:", error);
      toast.error("Failed to fetch sampling configurations");
    }
  };

  const handleDelete = async (item) => {
    try {
      const response = await axios.delete(
        `${BASE_URL}/delete-lims/sSamplingConfiguration/${item.uniqueId}`
      );
      if (response?.status === 200) {
        const newData = data.filter((d) => d.sno !== item.sno);
        setData(newData);
        toast.success("Sampling configuration deleted successfully");
      } else {
        toast.error("Failed to delete sampling configuration");
      }
    } catch (error) {
      console.error("Error deleting sampling configuration:", error);
      toast.error("Error deleting sampling configuration");
    }
  };

  const handleSelectAll = (e) => {
    const checked = e.target.checked;
    setData(data.map((row) => ({ ...row, checkbox: checked })));
  };

  const handleCheckboxChange = (index) => {
    const newData = [...data];
    newData[index].checkbox = !newData[index].checkbox;
    setData(newData);
  };

  const onViewDetails = (rowData) => {
    setViewModalData(rowData);
  };

  const closeViewModal = () => {
    setViewModalData(null);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleOpenModals = () => setIsModalsOpen(true);
  const handleCloseModals = () => setIsModalsOpen(false);

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
    { header: "Sampling ID", accessor: "samplingID" },
    { header: "Specification ID", accessor: "specificationID" },
    { header: "Sample Type", accessor: "sampleType" },
    { header: "Product Name", accessor: "productName" },
    { header: "Test Plan", accessor: "testPlan" },
    { header: "Sample Template", accessor: "sampleTemplate" },
    { header: "Sample Rule", accessor: "sampleRule" },
    { header: "Status", accessor: "status" },
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
    const testPlanLower = row.testPlan?.toLowerCase() || "";
    return (
      testPlanLower.includes(searchQuery.toLowerCase()) &&
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

  const addNewSamplingConfiguration = async (newConfiguration) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/manage-lims/add/sSamplingConfiguration`,
        newConfiguration
      );
      if (response.status === 200) {
        toast.success("Sampling configuration added successfully");
        fetchSamplingConfigurations();
      }
    } catch (error) {
      console.error("Error adding sampling configuration:", error);
      toast.error("Failed to add sampling configuration");
    }
    setIsModalOpen(false);
  };

  const openEditModal = (rowData) => {
    setEditModalData(rowData);
  };

  const closeEditModal = () => {
    setEditModalData(null);
  };

  const handleEditSave = async (updatedData) => {
    const { sno, ...dataToSend } = updatedData;
    try {
      const response = await axios.put(
        `${BASE_URL}/manage-lims/update/sSamplingConfiguration/${updatedData.uniqueId}`,
        dataToSend
      );
      if (response.status === 200) {
        toast.success("Sampling configuration updated successfully");
        fetchSamplingConfigurations();
      }
    } catch (error) {
      console.error("Error updating sampling configuration:", error);
      toast.error("Failed to update sampling configuration");
    }
    setEditModalData(null);
  };

  const handleStatusUpdate = (samplingConfiguration, newStatus) => {
    const updatedData = data.map((item) =>
      item.samplingID === samplingConfiguration.samplingID ? { ...item, status: newStatus } : item
    );
    setData(updatedData);
  };

  const StatusModal = ({ visible, closeModal, onAdd }) => {
    const [samplingConfigData, setSamplingConfigData] = useState({
      samplingID: "",
      specificationID: "",
      sampleType: "",
      productName: "",
      testPlan: "",
      sampleTemplate: "",
      sampleRule: "",
      status: "Active",
    });

    const handleAddSamplingConfig = (e) => {
      e.preventDefault();
      onAdd(samplingConfigData);
    };

    const handleInputChange = (field, value) => {
      setSamplingConfigData({ ...samplingConfigData, [field]: value });
    };

    return (
      <CModal alignment="center" visible={visible} onClose={closeModal}>
        <CModalHeader>
          <CModalTitle>Add Sampling Configuration</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p>Add information of Sampling Configuration</p>
          <CForm onSubmit={handleAddSamplingConfig}>
            <CFormInput
              className="mb-3"
              type="text"
              label="Sampling ID"
              name="samplingID"
              value={samplingConfigData.samplingID}
              onChange={(e) => handleInputChange("samplingID", e.target.value)}
            />
            <CFormInput
              className="mb-3"
              type="text"
              label="Specification ID"
              name="specificationID"
              value={samplingConfigData.specificationID}
              onChange={(e) => handleInputChange("specificationID", e.target.value)}
            />
            <CFormSelect
              className="mb-3"
              label="Sample Type"
              name="sampleType"
              value={samplingConfigData.sampleType}
              onChange={(e) => handleInputChange("sampleType", e.target.value)}
              options={[
                "Select...",
                { label: "Type 1", value: "Type 1" },
                { label: "Type 2", value: "Type 2" },
                { label: "Type 3", value: "Type 3" },
              ]}
            />
            <CFormInput
              className="mb-3"
              type="text"
              label="Product Name"
              name="productName"
              value={samplingConfigData.productName}
              onChange={(e) => handleInputChange("productName", e.target.value)}
            />
            <CFormInput
              className="mb-3"
              type="text"
              label="Test Plan"
              name="testPlan"
              value={samplingConfigData.testPlan}
              onChange={(e) => handleInputChange("testPlan", e.target.value)}
            />
            <CFormSelect
              className="mb-3"
              label="Sample Template"
              name="sampleTemplate"
              value={samplingConfigData.sampleTemplate}
              onChange={(e) => handleInputChange("sampleTemplate", e.target.value)}
              options={[
                "Select...",
                { label: "Template 1", value: "Template 1" },
                { label: "Template 2", value: "Template 2" },
                { label: "Template 3", value: "Template 3" },
              ]}
            />
            <CFormSelect
              className="mb-3"
              label="Sample Rule"
              name="sampleRule"
              value={samplingConfigData.sampleRule}
              onChange={(e) => handleInputChange("sampleRule", e.target.value)}
              options={[
                "Select...",
                { label: "Rule 1", value: "Rule 1" },
                { label: "Rule 2", value: "Rule 2" },
                { label: "Rule 3", value: "Rule 3" },
              ]}
            />
            <CButton color="primary" type="submit">
              Submit
            </CButton>
          </CForm>
        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={closeModal}>
            Back
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
          <CModalTitle>Edit Sampling Configuration</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CForm>
            <CFormInput
              className="mb-3"
              type="text"
              label="Sampling ID"
              name="samplingID"
              value={formData?.samplingID || ""}
              onChange={handleChange}
            />
            <CFormInput
              className="mb-3"
              type="text"
              label="Specification ID"
              name="specificationID"
              value={formData?.specificationID || ""}
              onChange={handleChange}
            />
            <CFormSelect
              className="mb-3"
              label="Sample Type"
              name="sampleType"
              value={formData?.sampleType || ""}
              onChange={handleChange}
              options={[
                "Select...",
                { label: "Type 1", value: "Type 1" },
                { label: "Type 2", value: "Type 2" },
                { label: "Type 3", value: "Type 3" },
              ]}
            />
            <CFormInput
              className="mb-3"
              type="text"
              label="Product Name"
              name="productName"
              value={formData?.productName || ""}
              onChange={handleChange}
            />
            <CFormInput
              className="mb-3"
              type="text"
              label="Test Plan"
              name="testPlan"
              value={formData?.testPlan || ""}
              onChange={handleChange}
            />
            <CFormSelect
              className="mb-3"
              label="Sample Template"
              name="sampleTemplate"
              value={formData?.sampleTemplate || ""}
              onChange={handleChange}
              options={[
                "Select...",
                { label: "Template 1", value: "Template 1" },
                { label: "Template 2", value: "Template 2" },
                { label: "Template 3", value: "Template 3" },
              ]}
            />
            <CFormSelect
              className="mb-3"
              label="Sample Rule"
              name="sampleRule"
              value={formData?.sampleRule || ""}
              onChange={handleChange}
              options={[
                "Select...",
                { label: "Rule 1", value: "Rule 1" },
                { label: "Rule 2", value: "Rule 2" },
                { label: "Rule 3", value: "Rule 3" },
              ]}
            />
          </CForm>
        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={closeModal}>
            Back
          </CButton>
          <CButton color="primary" onClick={handleSave}>
            Submit
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
          <h4 className="fw-bold">Sampling Configuration</h4>
        </div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex space-x-4">
            <SearchBar value={searchQuery} onChange={setSearchQuery} />
            <Dropdown
              options={[
                { value: "All", label: "All" },
                { value: "Active", label: "Active" },
                { value: "Inactive", label: "Inactive" },
              ]}
              value={statusFilter}
              onChange={setStatusFilter}
            />
          </div>
          <div className="float-right flex gap-4">
            <PDFDownload
              columns={columns}
              data={filteredData}
              fileName="Sampling_Configuration.pdf"
              title="Sampling Configuration Data"
            />
            <ATMButton text="Import" color="pink" onClick={handleOpenModals} />
            <ATMButton
              text="Add Sampling Configuration"
              color="blue"
              onClick={openModal}
            />
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
          fields={columns.map(col => ({ key: col.accessor, label: col.header })).filter(field => field.key !== 'action' && field.key !== 'checkbox')}
          title="Sampling Configuration Details"
          updateStatus={handleStatusUpdate}
        />
        )}
        
        {isModalOpen && (
        <StatusModal
          visible={isModalOpen}
          closeModal={closeModal}
          onAdd={addNewSamplingConfiguration}
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
        
        export default SamplingConfiguration;