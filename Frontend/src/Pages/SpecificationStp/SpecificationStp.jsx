import { useState, useEffect } from "react";
import {
  CButton,
  CFormInput,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";
import React from "react";

import {
  faEye,
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../StorageCondition/StorageCondition.css";
import Dropdown from "../../components/ATM components/Dropdown/Dropdown";
import SearchBar from "../../components/ATM components/SearchBar/SearchBar";
import ATMButton from "../../components/ATM components/Button/ATMButton";
import Table from "../../components/ATM components/Table/Table";
import ViewModal from "../Modals/ViewModal";
import ImportModal from "../Modals/importModal";
import PDFDownload from "../PDFComponent/PDFDownload ";
import LaunchQMS from "../../components/ReusableButtons/LaunchQMS";
import axios from "axios";
import { BASE_URL } from "../../config.json";
import ReusableModal from "../Modals/ResusableModal";
import { toast } from "react-toastify";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

const fields = [
  { label: "Document Name", key: "documentName" },
  { label: "Document Type", key: "documentType" },
  {
    label: "Department",
    key: "department",
  },

  {
    label: "Author ",
    key: "author",
  },
  {
    label: "Due Date",
    key: "dueDate",
  },
  { label: "Effective Date", key: "effectiveDate" },
  { label: "CC References", key: "ccReferences" },

  { label: "Status", key: "status" },
];

const initialData = [
  {
    sno: 1,
    documentName: "DMS Demo 12 34",
    documentType: "BPR",
    department: "IT",
    author: "Sunil Patel",
    dueDate: "29-10-2024",
    effectiveDate: "07-10-2024",
    ccReferences: "Obsolete",
    status: "Inactive",
  },

  {
    sno: 2,
    documentName: "Quality Assurance Process Update",
    documentType: "SOP",
    department: "CQC",
    author: "Admin 1",
    dueDate: "08-10-2024",
    effectiveDate: "08-10-2024",
    ccReferences: "Effective",
    status: "Active",
  },

  {
    sno: 3,
    documentName: "Testing",
    documentType: "SOP",
    department: "CQA",
    author: "Admin 1",
    dueDate: "10-10-2024",
    effectiveDate: "10-10-2024",
    ccReferences: "Initiate",
    status: "Active",
  },
];

function StorageCondition() {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [viewModalData, setViewModalData] = useState(null);
  const [isModalsOpen, setIsModalsOpen] = useState(false);
  const [editModalData, setEditModalData] = useState(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [division, setDivision] = useState("");
  const [period, setPeriod] = useState("");
  const [sortKey, setSortKey] = useState("documentName"); // Default sort key
  const [sortOrder, setSortOrder] = useState("asc"); // Default sort order

  const fetchSpecificationStp = async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}/get-all-lims/specificationStp`
      );
      console.log(response);
      const formattedData = response.data[0]?.specificationStp || []; // Adjust this based on your API response structure

      const updatedData = formattedData.map((item, index) => ({
        ...item,
        sno: index + 1,
      }));

      setData(updatedData);
    } catch (error) {
      console.error("Error fetching ", error);
      toast.error("Failed to fetch ");
    }
  };

  useEffect(() => {
    fetchSpecificationStp();
  }, []);

  const handleOpenModals = () => {
    setIsModalsOpen(true);
  };

  const handleCloseModals = () => {
    setIsModalsOpen(false);
  };
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const closeViewModal = () => {
    setIsViewModalOpen(false);
  };

  const handleDelete = async (item) => {
    try {
      const response = await axios.delete(
        `${BASE_URL}/delete-lims/specificationStp/${item.uniqueId}`
      );

      if (response.status === 200) {
        const newData = data.filter((d) => d.uniqueId !== item.uniqueId);
        setData(newData);
        toast.success(" deleted successfully");

        console.log("Deleted item:", item);
      }
      fetchSpecificationStp();
    } catch (error) {
      console.error("Error deleting :", error);
    }
  };

  const handleDateFromChange = (e) => {
    setDateFrom(e.target.value);
  };

  const handleDateToChange = (e) => {
    setDateTo(e.target.value);
  };

  const handleDivisionChange = (e) => {
    setDivision(e.target.value);
  };

  const handlePeriodChange = (e) => {
    setPeriod(e.target.value);
  };

  const handleSelectAll = (e) => {
    const checked = e.target.checked;
    const newData = data.map((row) => ({ ...row, checkbox: checked }));
    setData(newData);
  };
  const columns = [
    {
      header: "SrNo.",
      accessor: "sno",
    },

    { header: "Document Name", accessor: "documentName" },
    { header: "Document Type", accessor: "documentType" },
    {
      header: "Department",
      accessor: "department",
    },

    {
      header: "Author ",
      accessor: "author",
    },
    {
      header: "Due Date",
      accessor: "dueDate",
    },
    { header: "Effective Date", accessor: "effectiveDate" },
    { header: "CC References", accessor: "ccReferences" },
    { header: "Status", accessor: "status" },
    {
      header: "Actions",
      accessor: "action",
      Cell: ({ row }) => (
        <>
          <FontAwesomeIcon
            icon={faEye}
            className="mr-2 cursor-pointer"
            onClick={() => onViewDetails(row)}
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

  // Filtering logic
  const filteredData = Array.isArray(data)
    ? data.filter((row) => {
        const matchesSearchQuery = row.documentName
          .toLowerCase()
          .includes(searchQuery.toLowerCase());
        const matchesStatusFilter =
          statusFilter === "All" || row.status === statusFilter;

        const matchesDateFrom =
          !dateFrom || new Date(row.effectiveDate) >= new Date(dateFrom);
        const matchesDateTo =
          !dateTo || new Date(row.effectiveDate) <= new Date(dateTo);

        return (
          matchesSearchQuery &&
          matchesStatusFilter &&
          matchesDateFrom &&
          matchesDateTo
        );
      })
    : [];

  // Sorting logic
  const sortedData = [...filteredData].sort((a, b) => {
    const aValue = a[sortKey];
    const bValue = b[sortKey];

    if (typeof aValue === "string" && typeof bValue === "string") {
      return sortOrder === "asc"
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue);
    } else if (typeof aValue === "number" && typeof bValue === "number") {
      return sortOrder === "asc" ? aValue - bValue : bValue - aValue;
    }
    return 0; // For other types, no sorting
  });

  const onViewDetails = (rowData) => {
    if (isViewModalOpen && viewModalData?.sno === rowData.sno) {
      // If the modal is already open for the same item, close it
      setIsViewModalOpen(false);
      setViewModalData(null);
    } else {
      // Otherwise, open it with the new data
      setViewModalData(rowData);
      setIsViewModalOpen(true);
    }
  };

  const handleCheckboxChange = (index) => {
    const newData = [...data];
    newData[index].checkbox = !newData[index].checkbox;
    setData(newData);
  };

  const handleExcelDataUpload = (excelData) => {
    const updatedData = excelData.map((item, index) => ({
      checkbox: false,
      sno: index + 1,
      conditionCode: item["Condition Code"] || "",
      storageCondition: item["Stability Storage Condition"] || "",
      createdAt: item["Created At"] || "",
      attachment: item["Attachment"] || "",
      status: item["Status"] || "Active",
    }));

    const concatenatedData = [...updatedData];
    setData(concatenatedData);
    setIsModalsOpen(false); // Update data state with parsed Excel data
  };

  // Function to add a new storage condition
  const addNewStorageCondition = async (newCondition) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/manage-lims/add/specificationStp`,
        {
          documentName: newCondition.documentName,
          documentType: newCondition.documentType,
          department: newCondition.department,
          author: newCondition.author,
          dueDate: newCondition.dueDate,
          effectiveDate: newCondition.effectiveDate,
          ccReferences: newCondition.ccReferences,
          status: newCondition.status || "APPROVED",
        }
      );

      if (response.status === 200) {
        const addedSpecificationStp = response.data.addLIMS; // Accessing the added item from the response

        setData((prevData) => [
          ...prevData,
          {
            ...addedSpecificationStp,
            sno: addedSpecificationStp.uniqueId, // Using uniqueId as sno
            checkbox: false,
          },
        ]);
        closeModal();

        toast.success("Specification STP added successfully");
        // Optionally, you can call fetchCalibrationTypes() here to refresh the data from the server
      }
    } catch (error) {
      console.error("Error adding Specification STP", error);
      toast.error("Error adding Specification STP");
    }

    setIsModalOpen(false);
  };
  useEffect(() => {
    fetchSpecificationStp();
  }, []);
  const handleStatusUpdate = async (newStatus) => {
    if (!newStatus) {
      console.error("New status is undefined");
      toast.error("Invalid Status update");
      return;
    }
    if (!viewModalData) {
      console.error("No data selected for update");
      toast.error("No data selected for update");
      return;
    }
    try {
      const { sno, ...dataToSend } = viewModalData;
      console.log(viewModalData);

      const response = await axios.put(
        `${BASE_URL}/manage-lims/update/specificationStp/${viewModalData.uniqueId}`,
        {
          ...dataToSend,
          status: newStatus,
        }
      );
      if (response.status === 200) {
        setData((prevData) =>
          prevData.map((item) =>
            item.uniqueId === viewModalData.uniqueId
              ? { ...item, status: newStatus }
              : item
          )
        );
        toast.success("Approval status updated successfully");
        closeViewModal();
      } else {
        toast.error("Failed to update Approval status");
      }
    } catch (error) {
      console.error("Error updating Approval status:", error);
      toast.error("Error updating Approval status");
    }
  };

  const StatusModal = ({ visible, closeModal, onAdd }) => {
    const [documentName, setdocumentName] = useState("");
    const [documentType, setdocumentType] = useState("");
    const [department, setdepartment] = useState("");
    const [author, setauthor] = useState("");
    const [dueDate, setdueDate] = useState("");
    const [effectiveDate, seteffectiveDate] = useState("");
    const [ccReferences, setccReferences] = useState("");
    const handleAdd = () => {
      const newCondition = {
        documentName,
        documentType,
        department,
        author,
        dueDate,
        effectiveDate,
        ccReferences,
        status: "APPROVED",
      };
      onAdd(newCondition);
    };
    return (
      <CModal alignment="center" visible={visible} onClose={closeModal}>
        <CModalHeader>
          <CModalTitle>Add New Specification STP</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CFormInput
            type="text"
            label="Document Name"
            placeholder="Document Name"
            value={documentName}
            onChange={(e) => setdocumentName(e.target.value)}
          />

          <CFormInput
            type="text"
            label="Document Type"
            placeholder="Document Type"
            value={documentType}
            onChange={(e) => setdocumentType(e.target.value)}
          />

          <CFormInput
            type="text"
            label="Department"
            placeholder="Department"
            value={department}
            onChange={(e) => setdepartment(e.target.value)}
          />
          <CFormInput
            type="text"
            label="Author"
            placeholder="Author"
            value={author}
            onChange={(e) => setauthor(e.target.value)}
          />
          <CFormInput
            type="date"
            label="Due Date"
            placeholder="Due Date"
            value={dueDate}
            onChange={(e) => setdueDate(e.target.value)}
          />
          <CFormInput
            type="date"
            label="Effective Date"
            placeholder="Effective Date"
            value={effectiveDate}
            onChange={(e) => seteffectiveDate(e.target.value)}
          />
          <CFormInput
            type="text"
            label="CC References"
            placeholder="CC References"
            value={ccReferences}
            onChange={(e) => setccReferences(e.target.value)}
          />
        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={closeModal}>
            Cancel
          </CButton>
          <CButton color="primary" onClick={handleAdd}>
            Add
          </CButton>
        </CModalFooter>
      </CModal>
    );
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
        `${BASE_URL}/manage-lims/update/specificationStp/${updatedData.uniqueId}`,
        updatedData // Sending the updated data
      );

      if (response.status === 200) {
        const newData = data.map((item) =>
          item.uniqueId === updatedData.uniqueId
            ? { ...item, ...updatedData }
            : item
        );

        setData(newData);
        toast.success(" updated successfully");
      }
    } catch (error) {
      console.error("Error updating ", error);
      toast.error("Failed to update");
    } finally {
      setEditModalData(null);
    }
  };
  const EditModal = ({ visible, closeModal, data, onSave }) => {
    const [numRows, setNumRows] = useState(0);
    const [inputValue, setInputValue] = useState(0);
    const [formData, setFormData] = useState(data);

    const handleInputChange = (e) => {
      const value = parseInt(e.target.value, 10);
      if (!isNaN(value) && value >= 0) {
        setInputValue(value);
      }
    };

    const addRows = () => {
      setNumRows(inputValue);
    };

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
          <CModalTitle>Edit Specification STP</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CFormInput
            type="text"
            label="Document Name"
            placeholder="Document Name"
            value={formData?.documentName || ""}
            onChange={handleChange}
            name="documentName"
          />

          <CFormInput
            type="text"
            label="Document Type"
            placeholder="Document Type"
            value={formData?.documentType || ""}
            onChange={handleChange}
            name="documentType"
          />

          <CFormInput
            type="text"
            label="Department"
            placeholder="Department"
            value={formData?.department || ""}
            onChange={handleChange}
            name="department"
          />
          <CFormInput
            type="text"
            label="Author"
            placeholder="Author"
            value={formData?.author || ""}
            onChange={handleChange}
            name="author"
          />
          <CFormInput
            type="date"
            label="Due Date"
            placeholder="Due Date"
            value={formData?.dueDate || ""}
            onChange={handleChange}
            name="dueDate"
          />
          <CFormInput
            type="date"
            label="Effective Date"
            placeholder="Effective Date"
            value={formData?.effectiveDate || ""}
            onChange={handleChange}
            name="author
"
          />
          <CFormInput
            type="text"
            label="CC References"
            placeholder="CC References"
            value={formData?.ccReferences || ""}
            onChange={handleChange}
            name="ccReferences"
          />
        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={closeModal}>
            Cancel
          </CButton>
          <CButton color="primary" onClick={handleSave}>
            Add
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
          <h4 className="fw-bold">Specification STP</h4>
        </div>

        <div className="flex justify-between items-center mb-6">
          {/* Left Section: All input fields */}
          <div className="flex items-center space-x-6">
            {/* Division Dropdown */}
            <div className="flex items-center space-x-2">
              <label className="text-sm font-semibold">Status</label>
              <Dropdown
                options={[
                  { value: "All", label: "All" },
                  { value: "REJECTED", label: "Reject" },
                  { value: "DROPPED", label: "Droped" },
                  { value: "APPROVED", label: "Approved" },
                ]}
                value={statusFilter}
                onChange={setStatusFilter}
              />
            </div>

            {/* Date From Input */}
            <div className="flex items-center space-x-2">
              <label className="text-sm font-semibold">Date From</label>
              <div className="relative">
                <input
                  type="date"
                  value={dateFrom}
                  onChange={handleDateFromChange}
                  className="border border-black rounded-md pl-3 pr-3 py-2 text-sm bg-gray-100"
                />
              </div>
            </div>

            {/* Date To Input */}
            <div className="flex items-center space-x-2">
              <label className="text-sm font-semibold">Date To</label>
              <div className="relative">
                <input
                  type="date"
                  value={dateTo}
                  onChange={handleDateToChange}
                  className="border border-black rounded-md pl-3 pr-3 py-2 text-sm bg-gray-100"
                />
              </div>
            </div>

            {/* Select Period Dropdown */}
          </div>

          {/* Button on the right side */}
          <ATMButton
            text="Add Specification STP"
            color="blue"
            onClick={openModal}
            className="ml-auto"
          />
        </div>

        <Table
          columns={columns}
          data={filteredData}
          onCheckboxChange={handleCheckboxChange}
          onViewDetails={onViewDetails}
          onDelete={handleDelete}
          openEditModal={openEditModal}
        />
      </div>

      {isModalOpen && (
        <StatusModal
          visible={isModalOpen}
          closeModal={closeModal}
          onAdd={addNewStorageCondition}
        />
      )}

      <ReusableModal
        visible={isViewModalOpen}
        closeModal={closeViewModal}
        data={viewModalData}
        fields={fields}
        title="Test Plan Details"
        updateStatus={handleStatusUpdate}
      />

      {editModalData && (
        <EditModal
          visible={Boolean(editModalData)}
          closeModal={closeEditModal}
          data={editModalData}
          onSave={handleEditSave}
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
    </>
  );
}

export default StorageCondition;
