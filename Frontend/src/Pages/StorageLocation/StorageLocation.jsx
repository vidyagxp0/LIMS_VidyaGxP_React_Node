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
import { useState, useEffect } from "react";
import SearchBar from "../../components/ATM components/SearchBar/SearchBar";
import Dropdown from "../../components/ATM components/Dropdown/Dropdown";
import ATMButton from "../../components/ATM components/Button/ATMButton";
import Table from "../../components/ATM components/Table/Table";
import ImportModal from "../Modals/importModal";
import ViewModal from "../Modals/ViewModal";
import PDFDownload from "../PDFComponent/PDFDownload ";
import LaunchQMS from "../../components/ReusableButtons/LaunchQMS";
import axios from "axios";
import { BASE_URL } from "../../config.json";
import ReusableModal from "../Modals/ResusableModal";

const fields = [
  { label: "Storage Code", key: "storageCode" },
  { label: "Storage Name", key: "storageName" },
  { label: "attachment", key: "attachment" },
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

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}/get-all-lims/storageLocation`
      );
      console.log(response);
      const formattedData = response.data[0]?.storageLocation || []; // Adjust this based on your API response structure

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
    fetchData();
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
        `${BASE_URL}/delete-lims/storageLocation/${item.uniqueId}`
      );

      if (response.status === 200) {
        const newData = data.filter((d) => d.uniqueId !== item.uniqueId);
        setData(newData);
        toast.success(" deleted successfully");

        console.log("Deleted item:", item);
      }
      fetchData();
    } catch (error) {
      console.error("Error deleting :", error);
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
    },
    { header: "SrNo.", accessor: "sno" },
    { header: "Storage Code", accessor: "storageCode" },
    { header: "Storage Name", accessor: "storageName" },
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
          <FontAwesomeIcon
            icon={faTrashCan}
            className="cursor-pointer"
            onClick={() => onDeleteItem(row)}
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
      storageName: item["Storage Name"] || "",
      StorageCode: item["Storage Code"] || "",
      attachment: item["attachment"] || "",
      status: item["Status"] || "Active",
    }));

    const concatenatedData = [...updatedData];
    setData(concatenatedData);
    setIsModalsOpen(false);
  };

  const addNewStorageLocation = async (newCondition) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/manage-lims/add/storageLocation`,
        {
          storageName: newCondition.storageName,
          storageCode: newCondition.storageCode,
          attachment: newCondition.attachment || null,
          status: newCondition.status || "Active",
        }
      );

      if (response.status === 200) {
        const addedStorageLocation = response.data.addLIMS; // Accessing the added item from the response

        setData((prevData) => [
          ...prevData,
          {
            ...addedStorageLocation,
            sno: addedStorageLocation.uniqueId, // Using uniqueId as sno
            checkbox: false,
          },
        ]);
        closeModal();

        toast.success(" added successfully");
        // Optionally, you can call fetchCalibrationTypes() here to refresh the data from the server
      }
    } catch (error) {
      console.error("Error adding :", error);
      toast.error("Failed to add ");
    }
    useEffect(() => {
      fetchData();
    }, []);
    setIsModalOpen(false);
  };

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
      
      const response = await axios.put(`${BASE_URL}/manage-lims/update/storageLocation/${viewModalData.uniqueId}`, {
        ...dataToSend,
        status: newStatus,
      });
      if (response.status === 200) {
        setData((prevData) =>
          prevData.map((item) =>
            item.uniqueId === viewModalData.uniqueId ? { ...item, status: newStatus } : item
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
    const [storageName, setstorageName] = useState("");
    const [storageCode, setstorageCode] = useState("");
    const [attachment, setattachment] = useState("");
    const handleAdd = () => {
      const newCondition = {
        storageName,
        storageCode,
        attachment,
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
            value={storageName}
            onChange={(e) => setstorageName(e.target.value)}
          />

          <CFormInput
            type="text"
            label="Storage Code"
            placeholder="Storage Code"
            value={storageCode}
            onChange={(e) => setstorageCode(e.target.value)}
          />

          <CFormInput
            type="file"
            label="attachment"
            placeholder="attachment"
            value={attachment}
            onChange={(e) => setattachment(e.target.value)}
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
        `${BASE_URL}/manage-lims/update/storageLocation/${updatedData.uniqueId}`,
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
            value={formData?.storageName}
            onChange={handleChange}
            name="storageName"
          />
          <CFormInput
            type="text"
            label="Storage Code"
            placeholder="Storage Code"
            value={formData?.storageCode}
            onChange={handleChange}
            name="storageCode"
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
              attachment="Storage_Condition.pdf"
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
            data={filteredData.map((row, index) => ({
              ...row,

              name: row.name || "No Name",
              conditionCode: row.conditionCode || "No Code",
              storageCondition:
                typeof row.storageCondition === "string"
                  ? row.storageCondition
                  : "No Condition",
              createdAt: row.createdAt || "No Date",
              attachment: row.attachment || "No attachment",
              status: row.status || "Inactive",
            }))}
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
          onAdd={addNewStorageLocation}
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
