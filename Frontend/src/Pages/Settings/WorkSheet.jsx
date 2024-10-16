import React, { useState, useEffect } from "react";
import Card from "../../components/ATM components/Card/Card";
import Dropdown from "../../components/ATM components/Dropdown/Dropdown";
import Table from "../../components/ATM components/Table/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import ATMButton from "../../components/ATM components/Button/ATMButton";
import ViewModal from "../Modals/ViewModal";
import ImportModal from "../Modals/importModal.jsx";
// import PDFDownload from "../PDFComponent/PDFDownload.jsx";
import PDFDownload from "../PDFComponent/PDFDownload .jsx";
import BASE_URL from "../../config.json";
import axios from 'axios';
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
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const API_URL = 'https://api.example.com/worksheets'; // Replace with your actual API URL

const WorkSheetModal = ({ visible, closeModal, handleSubmit, initialData }) => {
  const [formData, setFormData] = useState({
    worksheetType: "",
    worksheetName: "",
    productName: "",
    gtpNo: "",
    methodValidationNo: "",
    description: "",
    sequenceNumber: "",
    standardPreparation: "",
    status: "INITIATED",
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        worksheetType: initialData.worksheetType || "",
        worksheetName: initialData.worksheetName || "",
        productName: initialData.productName || "",
        gtpNo: initialData.gtpNumber || "",
        methodValidationNo: initialData.methodValidationNo || "",
        description: initialData.description || "",
        sequenceNumber: initialData.sequenceNumber || "",
        standardPreparation: initialData.standardPreparation || "",
        status: initialData.status || "INITIATED",
      });
    } else {
      setFormData({
        worksheetType: "",
        worksheetName: "",
        productName: "",
        gtpNo: "",
        methodValidationNo: "",
        description: "",
        sequenceNumber: "",
        standardPreparation: "",
        status: "INITIATED",
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDescriptionChange = (value) => {
    setFormData({ ...formData, description: value });
  };

  const onSubmit = () => {
    handleSubmit(formData);
  };

  return (
    <CModal alignment="center" visible={visible} onClose={closeModal} size="lg">
      <CModalHeader>
        <CModalTitle>{initialData ? "Edit Worksheet" : "Add Worksheet"}</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CFormInput
          className="mb-3"
          type="text"
          label="Worksheet Type"
          name="worksheetType"
          value={formData.worksheetType}
          onChange={handleChange}
        />
        <CFormInput
          className="mb-3"
          type="text"
          label="Worksheet Name"
          name="worksheetName"
          value={formData.worksheetName}
          onChange={handleChange}
        />
        <CFormInput
          className="mb-3"
          type="text"
          label="Product Name"
          name="productName"
          value={formData.productName}
          onChange={handleChange}
        />
        <CFormInput
          className="mb-3"
          type="text"
          label="GTP No"
          name="gtpNo"
          value={formData.gtpNo}
          onChange={handleChange}
        />
        <CFormInput
          className="mb-3"
          type="text"
          label="Method Validation No"
          name="methodValidationNo"
          value={formData.methodValidationNo}
          onChange={handleChange}
        />
        <CFormInput
          className="mb-3"
          type="text"
          label="Sequence Number"
          name="sequenceNumber"
          value={formData.sequenceNumber}
          onChange={handleChange}
        />
        <CFormInput
          className="mb-3"
          type="text"
          label="Standard Preparation"
          name="standardPreparation"
          value={formData.standardPreparation}
          onChange={handleChange}
        />
        <CFormSelect
          className="mb-3"
          label="Status"
          name="status"
          value={formData.status}
          onChange={handleChange}
          options={[
            "INITIATED",
            "DROPPED",
            "REINITIATED",
            "APPROVED",
            "REJECTED"
          ]}
        />
        <div className="mb-3">
          <label>Description</label>
          <ReactQuill
            theme="snow"
            value={formData.description}
            onChange={handleDescriptionChange}
          />
        </div>
      </CModalBody>
      <CModalFooter>
        <CButton color="secondary" onClick={closeModal}>
          Cancel
        </CButton>
        <CButton color="primary" onClick={onSubmit}>
          {initialData ? "Update" : "Add"}
        </CButton>
      </CModalFooter>
    </CModal>
  );
};

const WorkSheet = () => {
  const [worksheets, setWorksheets] = useState([]);
  const [statusFilter, setStatusFilter] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [viewModalData, setViewModalData] = useState(null);
  const [cardCounts, setCardCounts] = useState({
    DROPPED: 0,
    INITIATED: 0,
    REINITIATED: 0,
    APPROVED: 0,
    REJECTED: 0,
  });
  const [isImportModalOpen, setIsImportModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  useEffect(() => {
    fetchWorksheets();
  }, []);
  const fetchWorksheets = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/get-lims/add/sWorksheet`);
      setWorksheets(response.data);
      updateCardCounts(response.data);
    } catch (error) {
      console.error("Error fetching worksheets:", error);
    }
  };



  const updateCardCounts = (data) => {
    const counts = {
      DROPPED: 0,
      INITIATED: 0,
      REINITIATED: 0,
      APPROVED: 0,
      REJECTED: 0,
    };

    data.forEach((item) => {
      if (counts.hasOwnProperty(item.status)) {
        counts[item.status]++;
      }
    });

    setCardCounts(counts);
  };

  const openAddModal = () => {
    setModalData(null);
    setIsModalOpen(true);
  };

  const openEditModal = (worksheet) => {
    setModalData(worksheet);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalData(null);
  };

  const handleModalSubmit = async (worksheetData) => {
    try {
      let updatedWorksheets;
      if (modalData) {
        // Update existing worksheet
        const response = await axios.put(`${BASE_URL}/manage-lims/update/sWorksheet/${modalData.id}`, worksheetData);
        updatedWorksheets = worksheets.map(w => 
          w.id === response.data.id ? response.data : w
        );
      } else {
        // Create new worksheet
        const response = await axios.post(`${BASE_URL}/manage-lims/add/sWorksheet`, worksheetData);
        if (response.data && response.data.id) {
          updatedWorksheets = [...worksheets, response.data];
        } else {
          throw new Error('Invalid response from server');
        }
      }
      console.log('Updated worksheets:', updatedWorksheets);
      setWorksheets(updatedWorksheets);
      updateCardCounts(updatedWorksheets);
      closeModal();
    } catch (error) {
      console.error("Error saving worksheet:", error);
      // Add user-friendly error handling here
      alert('Failed to save worksheet. Please try again.');
    }
  };


  const handleDeleteWorksheet = async (id) => {
    try {
      await axios.delete(`${BASE_URL}/delete-lims/add/sWorksheet/${id}`);
      const updatedWorksheets = worksheets.filter(w => w.id !== id);
      setWorksheets(updatedWorksheets);
      updateCardCounts(updatedWorksheets);
    } catch (error) {
      console.error("Error deleting worksheet:", error);
    }
  };

  const handleCardClick = (status) => {
    setStatusFilter(status);
  };

  const openViewModal = (rowData) => {
    setViewModalData(rowData);
    setIsViewModalOpen(true);
  };

  const closeViewModal = () => {
    setIsViewModalOpen(false);
  };

  const handleImportModalOpen = () => {
    setIsImportModalOpen(true);
  };

  const handleImportModalClose = () => {
    setIsImportModalOpen(false);
  };

  const handleExcelDataUpload = async (excelData) => {
    try {
      const response = await axios.post(`${BASE_URL}/manage-lims/add/sWorksheet`, excelData);
      setWorksheets(response.data);
      updateCardCounts(response.data);
      setIsImportModalOpen(false);
    } catch (error) {
      console.error("Error importing worksheets:", error);
    }
  };

  // const filteredWorksheets = React.useMemo(() => {
  //   return worksheets.filter((worksheet) => {
  //     return statusFilter === "All" || worksheet.status === statusFilter;
  //   });
  // });

  const columns = [
    { header: "SrNo.", accessor: "id" },
    { header: "Sequence Number", accessor: "sequenceNumber" },
    { header: "Worksheet Name", accessor: "worksheetName" },
    { header: "Product Name", accessor: "productName" },
    { header: "Gtp Number", accessor: "gtpNumber" },
    { header: "Method Validation No.", accessor: "methodValidationNo" },
    { header: "Standard Preparation", accessor: "standardPreparation" },
    { header: "Status", accessor: "status" },
    {
      header: "Actions",
      accessor: "actions",
      Cell: ({ row }) => (
        <>
          <FontAwesomeIcon
            icon={faEye}
            className="mr-2 cursor-pointer"
            onClick={() => openViewModal(row)}
          />
          <FontAwesomeIcon
            icon={faPenToSquare}
            className="mr-2 cursor-pointer"
            onClick={() => openEditModal(row)}
          />
          <FontAwesomeIcon
            icon={faTrashCan}
            className="cursor-pointer"
            onClick={() => handleDeleteWorksheet(row.id)}
          />
        </>
      ),
    },
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Worksheets</h1>
      <div className="grid grid-cols-5 gap-4 mb-4">
        {Object.entries(cardCounts).map(([status, count]) => (
          <Card
            key={status}
            title={status}
            count={count}
            color="blue"
            onClick={() => handleCardClick(status)}
          />
        ))}
      </div>
      <div className="flex items-center justify-between mb-4">
        <Dropdown
          options={[
            { value: "All", label: "All" },
            { value: "DROPPED", label: "DROPPED" },
            { value: "INITIATED", label: "INITIATED" },
            { value: "REINITIATED", label: "REINITIATED" },
            { value: "APPROVED", label: "APPROVED" },
            { value: "REJECTED", label: "REJECTED" },
          ]}
          value={statusFilter}
          onChange={setStatusFilter}
        />
        <div className="float-right flex gap-4">
          {/* <PDFDownload columns={columns} data={filteredWorksheets} title="Worksheet" fileName="Worksheet.pdf" /> */}
          <ATMButton text="Import" color="pink" onClick={handleImportModalOpen} />
          <ATMButton text="Add Worksheet" color="blue" onClick={openAddModal} />
        </div>
      </div>
      <Table
        columns={columns}
        // data={filteredWorksheets}
      />
      <WorkSheetModal
        visible={isModalOpen}
        closeModal={closeModal}
        handleSubmit={handleModalSubmit}
        initialData={modalData}
      />
      {isViewModalOpen && (
        <ViewModal
          visible={isViewModalOpen}
          closeModal={closeViewModal}
          data={viewModalData}
        />
      )}
      {isImportModalOpen && (
        <ImportModal
          isOpen={isImportModalOpen}
          onClose={handleImportModalClose}
          columns={columns}
          onDataUpload={handleExcelDataUpload}
        />
      )}
    </div>
  );
};

export default WorkSheet;