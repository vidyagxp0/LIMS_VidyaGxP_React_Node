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
import "./StorageCondition.css";
import Dropdown from "../../components/ATM components/Dropdown/Dropdown";
import SearchBar from "../../components/ATM components/SearchBar/SearchBar";
import ATMButton from "../../components/ATM components/Button/ATMButton";
import Table from "../../components/ATM components/Table/Table";
import ViewModal from "../Modals/ViewModal";
import ImportModal from "../Modals/importModal";
import PDFDownload from "../PDFComponent/PDFDownload ";
import LaunchQMS from "../../components/ReusableButtons/LaunchQMS";
import axios from "axios";

const initialData = [
  {
    checkbox: false,
    sno: 1,
    name: "New Storage",
    conditionCode: "CC1",
    storageCondition: "SC1",
    createdAt: "2023-01-01",
    attachment: "attachment",
    status: "Active",
  },
  {
    checkbox: false,
    sno: 2,
    name: "New Storage",
    conditionCode: "CC2",
    storageCondition: "SC2",
    createdAt: "2023-02-01",
    attachment: "attachment",
    status: "Inactive",
  },
  {
    checkbox: false,
    sno: 3,
    name: "New Storage",
    conditionCode: "CC3",
    storageCondition: "SC3",
    createdAt: "2023-03-01",
    attachment: "attachment",
    status: "Active",
  },
];

function StorageLocation() {
  const [data, setData] = useState(initialData);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [viewModalData, setViewModalData] = useState(null);
  const [isModalsOpen, setIsModalsOpen] = useState(false);
  const [editModalData, setEditModalData] = useState(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);

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

  const handleDelete = (item) => {
    const newData = data.filter((d) => d !== item);
    setData(newData);
    console.log("Deleted item:", item);
  };

  const handleSelectAll = (e) => {
    const checked = e.target.checked;
    const newData = data.map((row) => ({ ...row, checkbox: checked }));
    setData(newData);
  };

  const columns = [
    {
      header: <input type="checkbox" onChange={handleSelectAll} />,
      accessor: "checkbox",
    },
    { header: "SrNo.", accessor: "sno" },
    { header: "Storage Name", accessor: "name" },
    { header: "Condition Code", accessor: "conditionCode" },
    { header: "Stability Storage Condition", accessor: "storageCondition" },
    { header: "Created At", accessor: "createdAt" },
    { header: "attachment", accessor: "attachment" },
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
          />
          <FontAwesomeIcon icon={faTrashCan} className="cursor-pointer" />
        </>
      ),
    },
  ];

  const filteredData = data.filter((row) => {
    const conditionCode = row.conditionCode || ""; // Default to an empty string if undefined
    return (
      conditionCode.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (statusFilter === "All" || row.status === statusFilter)
    );
  });

  const onViewDetails = (rowData) => {
    setViewModalData(rowData);
    setIsViewModalOpen(true);
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

    // Concatenate the updated data with existing data
    const concatenatedData = [...updatedData];
    setData(concatenatedData);
    setIsModalsOpen(false); // Update data state with parsed Excel data

    // Close the import modal after data upload
  };

  // Function to add a new storage condition
  const addNewStorageCondition = async (newConditions) => {
    try {
      // Ensure newConditions is an array
      const conditionsArray = Array.isArray(newConditions)
        ? newConditions
        : [newConditions];

      const response = await axios.post("http://localhost:9000/create-lims", {
        storageCondition: conditionsArray.map((condition) => ({
          name: condition.name,
          conditionCode: condition.conditionCode,
          stabilityCondition: condition.storageCondition,
          createdAt: new Date().toISOString(),
          attachment: condition.attachment || null,
          status: condition.status || "Active",
        })),
      });

      console.log("Response received:", response.data);

      // Access the storageCondition array directly
      const storageConditions = response.data.newLIMS?.storageCondition;

      // Check if storageConditions is an array and has elements
      if (Array.isArray(storageConditions) && storageConditions.length > 0) {
        const newConditionData = storageConditions.map((condition, index) => ({
          checkbox: false, // Default checkbox value
          sno: data.length + index + 1, // Set new serial number
          name: condition.name,
          conditionCode: condition.conditionCode,
          stabilityCondition: condition.stabilityCondition, // Include stabilityCondition if needed
          createdAt: condition.createdAt,
          attachment: condition.attachment,
          status: condition.status,
        }));

        setData((prevData) => [...prevData, ...newConditionData]); // Update state with new data
      } else {
        console.error(
          "Expected storageCondition to be a non-empty array but received:",
          storageConditions
        );
        // Optionally handle the case where storageCondition is not as expected
      }
    } catch (error) {
      console.error("Error creating storage condition:", error);
      // Handle error (e.g., show a message to the user)
    }
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
        createdAt: new Date().toISOString().split("T")[0], // Current date
        attachment: "", // Adjust if needed, can be a string or null
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
  const handleEditSave = (updatedData) => {
    const newData = data.map((item) =>
      item.sno === updatedData.sno ? updatedData : item
    );
    setData(newData);
    setEditModalData(null);
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
            label="Name"
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
            label="Name"
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
          <h4 className="fw-bold">Storage Conditions</h4>
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
              fileName="Storage_Condition.pdf"
              title="Storage Condition Data"
            />
            <ATMButton text="Import" color="pink" onClick={handleOpenModals} />
            <ATMButton
              text="Add Storage Condition"
              color="blue"
              onClick={openModal}
            />
          </div>
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
      {isViewModalOpen && (
        <ViewModal visible={isViewModalOpen} closeModal={closeViewModal} />
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
      <EditModal
        visible={Boolean(editModalData)}
        closeModal={closeEditModal}
        data={editModalData}
        onSave={handleEditSave}
      />
    </>
  );
}

export default StorageLocation;
