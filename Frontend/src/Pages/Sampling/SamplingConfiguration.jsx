import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-regular-svg-icons";
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
import SearchBar from "../../components/ATM components/SearchBar/SearchBar";
import Dropdown from "../../components/ATM components/Dropdown/Dropdown";
import ATMButton from "../../components/ATM components/Button/ATMButton";
import Table from "../../components/ATM components/Table/Table";
import ImportModal from "../Modals/importModal";
import PDFDownload from "../PDFComponent/PDFDownload ";
import LaunchQMS from "../../components/ReusableButtons/LaunchQMS";
import { BASE_URL } from "../../config.json";

const SamplingConfiguration = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [viewModalData, setViewModalData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalsOpen, setIsModalsOpen] = useState(false);
  const [editModalData, setEditModalData] = useState(null);

  const fetchSamplingConfigurations = async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}/get-all-lims/sSamplingConfiguration`
      );
      console.log(response, "response");

      const formattedData = response?.data[0]?.samplingConfiguration || [];
      const updatedData = formattedData.map((item, index) => ({
        ...item,
        sno: index + 1,
        checkbox: false,
      }));
      setData(updatedData);
    } catch (error) {
      console.error("Error fetching sampling configurations:", error);
      toast.error("Failed to fetch sampling configurations");
    }
  };

  useEffect(() => {
    fetchSamplingConfigurations();
  }, []);

  const handleOpenModals = () => {
    setIsModalsOpen(true);
  };

  const handleCloseModals = () => {
    setIsModalsOpen(false);
  };

  const handleSelectAll = (e) => {
    const checked = e.target.checked;
    const newData = data.map((row) => ({ ...row, checkbox: checked }));
    setData(newData);
  };

  const filteredData = data.filter((row) => {
    return (
      row.productName.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (statusFilter === "All" || row.status === statusFilter)
    );
  });

  const onViewDetails = (rowData) => {
    setViewModalData(rowData);
  };

  const handleCheckboxChange = (index) => {
    const newData = [...data];
    newData[index].checkbox = !newData[index].checkbox;
    setData(newData);
  };

  const columns = [
    {
      header: <input type="checkbox" onChange={handleSelectAll} />,
      accessor: "checkbox",
    },
    { header: "SrNo.", accessor: "sno" },
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

  const handleExcelDataUpload = (excelData) => {
    const updatedData = excelData.map((item, index) => ({
      checkbox: false,
      sno: index + 1,
      samplingID: item["Sampling ID"] || "",
      specificationID: item["Specification ID"] || "",
      sampleType: item["Sample Type"] || "",
      productName: item["Product Name"] || "",
      testPlan: item["Test Plan"] || "",
      sampleTemplate: item["Sample Template"] || "",
      sampleRule: item["Sample Rule"] || "",
      status: item["Status"] || "",
    }));

    setData(updatedData);
    setIsModalsOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
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
    try {
      const response = await axios.put(
        `${BASE_URL}/manage-lims/update/sSamplingConfiguration/${updatedData.sno}`,
        updatedData
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

  const handleDelete = async (item) => {
    try {
      const response = await axios.delete(
        `${BASE_URL}/manage-lims/delete/sSamplingConfiguration/${item.sno}`
      );
      if (response.status === 200) {
        toast.success("Sampling configuration deleted successfully");
        fetchSamplingConfigurations();
      }
    } catch (error) {
      console.error("Error deleting sampling configuration:", error);
      toast.error("Failed to delete sampling configuration");
    }
  };

  const StatusModal = ({ visible, closeModal, onAdd }) => {
    const [formData, setFormData] = useState({
      samplingID: "",
      specificationID: "",
      sampleType: "",
      productName: "",
      testPlan: "",
      sampleTemplate: "",
      sampleRule: "",
      samplingTest: "",
      Comment: "",
      status: "Active",
    });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };

    const handleSave = () => {
      onAdd(formData);
    };

    return (
      <CModal
        alignment="center"
        visible={visible}
        onClose={closeModal}
        size="xl"
      >
        <CModalHeader>
          <CModalTitle>Add Sampling Configuration</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CFormSelect
            className="mb-3"
            type="select"
            label="Test Plan / Revision No."
            options={[
              "Select...",
              { label: "TP-010110", value: "TP-010110" },
              { label: "TP-010111", value: "TP-010111" },
              { label: "TP-010112", value: "TP-010112" },
              { label: "TP-010113", value: "TP-010113" },
            ]}
            name="testPlan"
            value={formData.testPlan}
            onChange={handleChange}
          />

          <CFormSelect
            className="mb-3"
            type="select"
            label="Specification ID"
            options={[
              "Select...",
              { label: "TP-010110", value: "TP-010110" },
              { label: "TP-010111", value: "TP-010111" },
              { label: "TP-010112", value: "TP-010112" },
              { label: "TP-010113", value: "TP-010113" },
            ]}
            name="specificationID"
            value={formData.specificationID}
            onChange={handleChange}
          />

          <CFormSelect
            className="mb-3"
            type="select"
            label="Product/Material Name"
            options={[
              "Select...",
              { label: "TP-010110", value: "TP-010110" },
              { label: "TP-010111", value: "TP-010111" },
              { label: "TP-010112", value: "TP-010112" },
              { label: "TP-010113", value: "TP-010113" },
            ]}
            name="productName"
            value={formData.productName}
            onChange={handleChange}
          />

          <CFormSelect
            className="mb-3"
            type="select"
            label="Product/Material Code"
            options={[
              "Select...",
              { label: "TP-010110", value: "TP-010110" },
              { label: "TP-010111", value: "TP-010111" },
              { label: "TP-010112", value: "TP-010112" },
              { label: "TP-010113", value: "TP-010113" },
            ]}
            name="productMaterialCode"
            value={formData.productMaterialCode}
            onChange={handleChange}
          />

          <CFormSelect
            className="mb-3"
            type="select"
            label="Sample Type"
            options={[
              "Select...",
              { label: "TP-010110", value: "TP-010110" },
              { label: "TP-010111", value: "TP-010111" },
              { label: "TP-010112", value: "TP-010112" },
              { label: "TP-010113", value: "TP-010113" },
            ]}
            name="sampleType"
            value={formData.sampleType}
            onChange={handleChange}
          />

          <CFormSelect
            className="mb-3"
            type="select"
            label="Sampling Template"
            options={[
              "Select Test Category",
              { label: "Raw Sampling", value: "Raw Sampling" },
              { label: "Test Temp1", value: "Test Temp1" },
              { label: "Test Temp2", value: "Test Temp2" },
              { label: "Test Temp3", value: "Test Temp3" },
            ]}
            name="sampleTemplate"
            value={formData.sampleTemplate}
            onChange={handleChange}
          />

          <CFormSelect
            className="mb-3"
            type="select"
            label="Sampling Rule"
            options={[
              "Select Sampling Rule",
              { label: "C2", value: "C2" },
              { label: "Raw sample", value: "Raw sample" },
              { label: "Sample C1", value: "Sample C1" },
              { label: "Sample C2", value: "Sample C2" },
            ]}
            name="sampleRule"
            value={formData.sampleRule}
            onChange={handleChange}
          />

          <CFormSelect
            className="mb-3"
            type="select"
            label="Sampling Test"
            options={[
              "Select...",
              { label: "No Options", value: "No Options" },
            ]}
            name="samplingTest"
            value={formData.samplingTest}
            onChange={handleChange}
          />

          <CFormInput
            className="mb-3"
            type="text"
            label="Comment"
            placeholder="Comment"
            name="Comment"
            value={formData.Comment}
            onChange={handleChange}
          />
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

  const EditModal = ({ visible, closeModal, data, onSave }) => {
    const [formData, setFormData] = useState(data);

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
          <CModalTitle>Edit Sampling Configuration</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CFormSelect
            className="mb-3"
            type="select"
            label="Test Plan / Revision No."
            options={[
              "Select...",
              { label: "TP-010110", value: "TP-010110" },
              { label: "TP-010111", value: "TP-010111" },
              { label: "TP-010112", value: "TP-010112" },
              { label: "TP-010113", value: "TP-010113" },
            ]}
            name="testPlan"
            value={formData.testPlan}
            onChange={handleChange}
          />
          {/* Add other form fields here */}
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
      <div className="m-5 mt-3 ">
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

      {isModalOpen && (
        <StatusModal
          visible={isModalOpen}
          closeModal={closeModal}
          onAdd={addNewSamplingConfiguration}
        />
      )}

      {isModalsOpen && (
        <ImportModal
          initialData={data}
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
};

export default SamplingConfiguration;
