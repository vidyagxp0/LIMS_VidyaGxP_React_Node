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

  {
    sno: 4,
    documentName: "Standard Operating Procedure for QMS, DMS",
    documentType: "SOP",
    department: "CQA",
    author: "Admin 1",
    dueDate: "08-10-2024",
    effectiveDate: "08-10-2024",
    ccReferences: "QA Reviewer",
    status: "Active",
  },

  {
    sno: 5,
    documentName: "Testing",
    documentType: "BPR",
    department: "IT",
    author: "Admin 1",
    dueDate: "29-10-2024",
    effectiveDate: "07-10-2024",
    ccReferences: "Obsolete",
    status: "Inactive",
  },

  {
    sno: 6,
    documentName: "Testing",
    documentType: "SOP",
    department: "CQA",
    author: "Admin 1",
    dueDate: "10-10-2024",
    effectiveDate: "10-10-2024",
    ccReferences: "Initiate",
    status: "Active",
  },

  {
    sno: 7,
    documentName: "Standard Operating Procedure for QMS, DMS",
    documentType: "SOP",
    department: "CQA",
    author: "Admin 1",
    dueDate: "08-10-2024",
    effectiveDate: "08-10-2024",
    ccReferences: "QA Reviewer",
    status: "Active",
  },

  {
    sno: 8,
    documentName: "Testing",
    documentType: "BPR",
    department: "IT",
    author: "Admin 1",
    dueDate: "29-10-2024",
    effectiveDate: "07-10-2024",
    ccReferences: "Obsolete",
    status: "Inactive",
  },
];

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

function StorageCondition() {
  const [data, setData] = useState(initialData);
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

  //   const fetchStorageCondition = async () => {
  //     try {
  //       const response = await axios.get(
  //         `${BASE_URL}/get-all-lims/storageCondition`
  //       );
  //       console.log(response);
  //       const formattedData = response.data[0]?.storageCondition || []; // Adjust this based on your API response structure

  //       const updatedData = formattedData.map((item, index) => ({
  //         ...item,
  //         sno: index + 1,
  //         checkbox: false,
  //       }));

  //       setData(updatedData);
  //     } catch (error) {
  //       console.error("Error fetching ", error);
  //       toast.error("Failed to fetch ");
  //     }
  //   };

  //   useEffect(() => {
  //     fetchStorageCondition();
  //   }, []);

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

  const handleDelete = async (item) => {
    try {
      const response = await axios.delete(
        `${BASE_URL}/delete-lims/storageCondition/${item.uniqueId}`
      );

      if (response.status === 200) {
        const newData = data.filter((d) => d.uniqueId !== item.uniqueId);
        setData(newData);
        toast.success(" deleted successfully");

        console.log("Deleted item:", item);
      }
      fetchStorageCondition();
    } catch (error) {
      console.error("Error deleting storage condition:", error);
    }
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
    // {
    //   header: "Actions",
    //   accessor: "action",
    //   Cell: ({ row }) => (
    //     <>
    //       <FontAwesomeIcon
    //         icon={faEye}
    //         className="mr-2 cursor-pointer"
    //         onClick={() => onViewDetails(row)}
    //       />
    //       <FontAwesomeIcon
    //         icon={faPenToSquare}
    //         className="mr-2 cursor-pointer"
    //         onClick={() => openEditModal(row.original)}
    //       />
    //       <FontAwesomeIcon
    //         icon={faTrashCan}
    //         className="cursor-pointer"
    //         onClick={() => handleDelete(row.original)}
    //       />
    //     </>
    //   ),
    // },
  ];

  const filteredData = Array.isArray(data)
    ? data.filter((row) => {
        console.log("Row:", row); // Log each row to see its structure
        const productName = row.productName || "";
        return (
          productName.toLowerCase().includes(searchQuery.toLowerCase()) &&
          (statusFilter === "All" || row.status === statusFilter)
        );
      })
    : [];

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
  // const addNewStorageCondition = async (newCondition) => {
  //   try {
  //     const response = await axios.post(
  //       `${BASE_URL}/manage-lims/add/storageCondition`,
  //       {
  //         name: newCondition.name,
  //         conditionCode: newCondition.conditionCode,
  //         storageCondition: newCondition.storageCondition,
  //         createdAt: new Date().toISOString(), // Current date as createdAt
  //         attachment: newCondition.attachment || null,
  //         status: newCondition.status || "Active",
  //       }
  //     );

  //     if (response.status === 200) {
  //       const addedStorageCondition = response.data.addLIMS; // Accessing the added item from the response

  //       setData((prevData) => [
  //         ...prevData,
  //         {
  //           ...addedStorageCondition,
  //           sno: addedStorageCondition.uniqueId, // Using uniqueId as sno
  //           checkbox: false,
  //         },
  //       ]);
  //       closeModal();
  //       fetchStorageCondition();
  //       toast.success("Calibration Type added successfully");
  //       // Optionally, you can call fetchCalibrationTypes() here to refresh the data from the server
  //     }
  //   } catch (error) {
  //     console.error("Error adding calibration type:", error);
  //     toast.error("Failed to add calibration type");
  //   }

  //   setIsModalOpen(false);
  // };

  const handleStatusUpdate = (testPlan, newStatus) => {
    const updatedData = data.map((item) =>
      item.storageCondition === StorageCondition
        ? { ...item, status: newStatus }
        : item
    );
    setData(updatedData);
  };

  const StatusModal = ({ visible, closeModal, onAdd }) => {
    const [name, setname] = useState("");
    const [conditionCode, setconditionCode] = useState("");
    const [storageCondition, setstorageCondition] = useState("");
    const handleAdd = () => {
      const newCondition = {
        name,
        conditionCode,
        storageCondition,
        createdAt: new Date().toISOString().split("T")[0],
        attachment: "",
        status: "active",
      };
      onAdd(newCondition);
    };
    return (
      <CModal alignment="center" visible={visible} onClose={closeModal}>
        <CModalHeader>
          <CModalTitle>New Storage Condition</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CFormInput
            type="text"
            label="Name"
            placeholder="Storage Name"
            value={name}
            onChange={(e) => setname(e.target.value)}
          />

          <CFormInput
            type="text"
            label="Condition Code"
            placeholder="Condition Code"
            value={conditionCode}
            onChange={(e) => setconditionCode(e.target.value)}
          />

          <CFormInput
            type="text"
            label="Storage Condition"
            placeholder="Storage Condition"
            value={storageCondition}
            onChange={(e) => setstorageCondition(e.target.value)}
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
        `${BASE_URL}/manage-lims/update/storageCondition/${updatedData.uniqueId}`,
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
          <CModalTitle>New Storage Condition</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CFormInput
            type="text"
            label="Storage Name"
            placeholder="Storage Name"
            value={formData?.name || ""}
            onChange={handleChange}
            name="name"
          />
          <CFormInput
            type="text"
            label="Condition Code"
            placeholder="Condition Code"
            value={formData?.conditionCode || ""}
            onChange={handleChange}
            name="conditionCode"
          />
          <CFormInput
            type="text"
            label="Storage condition"
            placeholder="Storage condition"
            value={formData?.storageCondition || ""}
            onChange={handleChange}
            name="storageCondition"
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

        <div className="flex flex-wrap items-center justify-between mb-6">
          {/* Print Button */}
          <div className="flex items-center space-x-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Print
            </button>
          </div>

          {/* Form Inputs (Division, Date From, Date To, Select Period) */}
          <div className="flex items-center space-x-4">
            {/* Division Dropdown */}
            <div className="flex items-center space-x-2">
              <label className="text-sm font-semibold">Division</label>
              <div className="relative">
                <select
                  value={division}
                  onChange={handleDivisionChange}
                  className="border border-black rounded-md pl-3 pr-3 py-2 text-sm bg-gray-50"
                >
                  <option value="" disabled>
                    Select Division
                  </option>
                  <option value="division1">Division 1</option>
                  <option value="division2">Division 2</option>
                  <option value="division3">Division 3</option>
                </select>
              </div>
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
            <div className="flex items-center space-x-2">
              <label className="text-sm font-semibold">Select Period</label>
              <div className="relative">
                <select
                  value={period}
                  onChange={handlePeriodChange}
                  className="border border-black rounded-md pl-3 pr-3 py-2 text-sm bg-gray-100"
                >
                  <option value="" disabled>
                    Select Period
                  </option>
                  <option value="weekly">Weekly</option>
                  <option value="monthly">Monthly</option>
                  <option value="quarterly">Quarterly</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {filteredData && filteredData.length > 0 ? (
          <Table
            columns={columns}
            data={filteredData}
            onCheckboxChange={handleCheckboxChange}
            onViewDetails={onViewDetails}
            onDelete={handleDelete}
            openEditModal={openEditModal}
          />
        ) : (
          <p>No storage conditions available.</p>
        )}
      </div>

      {isModalOpen && (
        <StatusModal
          visible={isModalOpen}
          closeModal={closeModal}
          onAdd={addNewStorageCondition}
        />
      )}
      {viewModalData && (
        <ReusableModal
          visible={viewModalData !== null}
          closeModal={closeViewModal}
          data={viewModalData}
          fields={fields}
          title="Test Plan Details"
          updateStatus={handleStatusUpdate}
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
