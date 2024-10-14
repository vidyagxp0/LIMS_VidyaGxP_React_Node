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

const fields = [
  { label: "Storage Name.", key: "name" },
  { label: "Condition Code", key: "conditionCode" },
  { label: "Stability Storage Condition", key: "storageCondition" },
  { label: "Created At", key: "createdAt" },
  { label: "Attachment", key: "attachment" },
  { label: "Status", key: "status" },
];

function StorageLocation() {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [viewModalData, setViewModalData] = useState(null);
  const [isModalsOpen, setIsModalsOpen] = useState(false);
  const [editModalData, setEditModalData] = useState(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);

  useEffect(() => {
    fetchData(); // Fetch data on component mount
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}/get-all-lims/storageCondition`
      );
      console.log("API Response:", response.data);

      const formattedData = response.data.flatMap((item, index) => {
        return (
          item.storageCondition?.map((condition, i) => ({
            checkbox: false,
            sno: condition.sno,
            name: condition.name || "No Name",
            conditionCode: condition.conditionCode || "No Code",
            createdAt: condition.createdAt
              ? new Date(condition.createdAt).toISOString().split("T")[0]
              : "No Date", // Ensure createdAt exists
            attachment: condition.attachment || "No Attachment",
            storageCondition: condition.storageCondition || "No Condition",
            status: condition.status || "Active",
          })) || []
        );
      });

      // console.log("Formatted Data:", formattedData);
      setData(formattedData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

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

  const storageConditions = data.flatMap((item) => item.storageCondition || []);

  const filteredData = storageConditions.length > 0 ? storageConditions : [];

  // Adding srno (serial number) to each storage condition
  const storageConditionsWithSrno = filteredData.map((condition, index) => ({
    sno: index + 1,
    ...condition, // Spreading the rest of the storage condition fields
  }));

  console.log("All Storage Conditions with Srno:", storageConditionsWithSrno);

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
    console.log("tfgyhjk");

    const concatenatedData = [...updatedData];
    setData(concatenatedData);
    setIsModalsOpen(false); // Update data state with parsed Excel data
  };

  // Function to add a new storage condition
  const addNewStorageCondition = async (newConditions) => {
    try {
      const conditionsArray = Array.isArray(newConditions)
        ? newConditions
        : [newConditions];

      const response = await axios.post(
        `${BASE_URL}/manage-lims/add/storageCondition`,
        {
          storageCondition: conditionsArray.map((condition) => ({
            name: condition.name,
            conditionCode: condition.conditionCode,
            storageCondition: condition.storageCondition,
            createdAt: new Date().toISOString(),
            attachment: condition.attachment || null,
            status: condition.status || "Active",
          })),
        }
      );

      console.log("Response received:", response.data);

      const storageConditions =
        response.data.updatedLIMS?.storageCondition || [];
      if (Array.isArray(storageConditions) && storageConditions.length > 0) {
        const newConditionData = storageConditions.map((condition, index) => ({
          checkbox: false,
          sno: data.length + index + 1,
          name: condition.name,
          conditionCode: condition.conditionCode,
          storageCondition: condition.storageCondition,
          createdAt: condition.createdAt,
          attachment: condition.attachment,
          status: condition.status,
        }));

        setData((prevData) => [...prevData, ...newConditionData]);
      } else {
        console.error("No storage conditions returned from the API.");
      }
    } catch (error) {
      console.error("Error creating storage condition:", error);
    }
  };
  const handleStatusUpdate = (testPlan, newStatus) => {
    const updatedData = data.map((item) =>
      item.testPlan === testPlan ? { ...item, status: newStatus } : item
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
        {filteredData && filteredData.length > 0 ? (
          <Table
            columns={columns}
            data={filteredData.map((row, index) => ({
              ...row,
              sno: row.sno || index + 1,

              name: row.name || "No Name",
              conditionCode: row.conditionCode || "No Code",
              storageCondition:
                typeof row.storageCondition === "string"
                  ? row.storageCondition
                  : "No Condition",
              createdAt: row.createdAt || "No Date",
              attachment: row.attachment || "No Attachment",
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

export default StorageLocation;
