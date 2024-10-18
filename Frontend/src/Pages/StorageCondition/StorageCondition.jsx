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
import { BASE_URL } from "../../config.json";
import ReusableModal from "../Modals/ResusableModal";
import { toast } from "react-toastify";

const fields = [
  { label: "Storage Name.", key: "name" },
  { label: "Condition Code", key: "conditionCode" },
  { label: "Stability Storage Condition", key: "storageCondition" },
  { label: "Created At", key: "createdAt" },
  { label: "Attachment", key: "attachment" },
  { label: "Status", key: "status" },
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

  const fetchStorageCondition = async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}/get-all-lims/storageCondition`
      );
      console.log(response);
      const formattedData = response.data[0]?.storageCondition || []; // Adjust this based on your API response structure

      const updatedData = formattedData.map((item, index) => ({
        ...item,
        sno: index + 1,
        checkbox: false,
      }));

      setData(updatedData);
    } catch (error) {
      console.error("Error fetching ", error);
      toast.error("Failed to fetch ");
    }
  };

  useEffect(() => {
    fetchStorageCondition();
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
    {
      header: "SrNo.",
      accessor: "sno",
    },

    { header: "Storage Name", accessor: "name" },
    { header: "Condition Code", accessor: "conditionCode" },
    {
      header: "Stability Storage Condition",
      accessor: "storageCondition",
      Cell: ({ row }) => row.original.storageCondition || "No Condition",
    },
    {
      header: "Created At",
      accessor: "createdAt",
      Cell: ({ row }) => row.original.createdAt || "No Date",
    },
    {
      header: "Attachment",
      accessor: "attachment",
      Cell: ({ row }) => {
        const attachment = row.original.attachment;
        return attachment ? (
          <a href={attachment} target="_blank" rel="noopener noreferrer">
            View Attachment
          </a>
        ) : (
          "No Attachment"
        );
      },
    },
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
  const addNewStorageCondition = async (newCondition) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/manage-lims/add/storageCondition`,
        {
          name: newCondition.name,
          conditionCode: newCondition.conditionCode,
          storageCondition: newCondition.storageCondition,
          createdAt: new Date().toISOString(), // Current date as createdAt
          attachment: newCondition.attachment || null,
          status: newCondition.status || "Active",
        }
      );

      if (response.status === 200) {
        const addedStorageCondition = response.data.addLIMS; // Accessing the added item from the response

        setData((prevData) => [
          ...prevData,
          {
            ...addedStorageCondition,
            sno: addedStorageCondition.uniqueId, // Using uniqueId as sno
            checkbox: false,
          },
        ]);
        closeModal();
        fetchStorageCondition();
        toast.success("Calibration Type added successfully");
        // Optionally, you can call fetchCalibrationTypes() here to refresh the data from the server
      }
    } catch (error) {
      console.error("Error adding calibration type:", error);
      toast.error("Failed to add calibration type");
    }

    setIsModalOpen(false);
  };

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

//   // {
//   //   header: "Actions",
//   //   accessor: "action",
//   //   Cell: ({ row }) => (
//   //     <>
//   //       <FontAwesomeIcon
//   //         icon={faEye}
//   //         className="mr-2 cursor-pointer"
//   //         onClick={() => onViewDetails(row)}
//   //       />
//   //       <FontAwesomeIcon
//   //         icon={faPenToSquare}
//   //         className="mr-2 cursor-pointer"
//   //         onClick={() => openEditModal(row.original)}
//   //       />
//   //       <FontAwesomeIcon
//   //         icon={faTrashCan}
//   //         className="cursor-pointer"
//   //         onClick={() => handleDelete(row.original)}
//   //       />
//   //     </>
//   //   ),
//   // },
// ];
