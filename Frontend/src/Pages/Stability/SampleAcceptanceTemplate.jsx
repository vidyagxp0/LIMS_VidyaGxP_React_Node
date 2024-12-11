import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
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
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "../../Pages/StorageCondition/StorageCondition.css";
import Dropdown from "../../components/ATM components/Dropdown/Dropdown";
import ReusableModal from "../Modals/ResusableModal";
import SearchBar from "../../components/ATM components/SearchBar/SearchBar";
import ATMButton from "../../components/ATM components/Button/ATMButton";
import Table from "../../components/ATM components/Table/Table";
import ViewModal from "../Modals/ViewModal";
import ImportModal from "../Modals/importModal";
import PDFDownload from "../PDFComponent/PDFDownload ";
import LaunchQMS from "../../components/ReusableButtons/LaunchQMS";

const fields = [
  { label: "Standard Protocol Name", key: "StandardProtocolName" },
  { label: "Standard Protocol Id", key: "StandardProtocolId" },
  {
    label: "Standard Protocol Description",
    key: "StandardProtocolDescription",
  },
  { label: "Status", key: "status" },
];

const initialData = [
  {
    checkbox: false,
    sno: 1,
    name: "Name 1",
    uniqueCode: "UC001",
    NoOfCheckItems: 10,
    updatedAt: "2024-01-01",
    status: "Active",
  },
  {
    checkbox: false,
    sno: 2,
    name: "Name 2",
    uniqueCode: "UC002",
    NoOfCheckItems: 15,
    updatedAt: "2024-01-02",
    status: "Inactive",
  },
];

function SampleAcceptanceTemplate() {
  const [data, setData] = useState(initialData);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [viewModalData, setViewModalData] = useState(null);
  const [isModalsOpen, setIsModalsOpen] = useState(false);
  const [lastStatus, setLastStatus] = useState("Active");
  const [editModalData, setEditModalData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:9000/get-all-lims/sMSampleAcceptanceTemplate`
      );
      const fetchedData = response?.data[0]?.sMSampleAcceptanceTemplate || [];

      const updatedData = fetchedData.map((item, index) => ({
        sno: index + 1,
        ...item,
      }));

      setData(updatedData);
    } catch (error) {
      console.error("Error fetching data:", error);
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

  const handleStatusUpdate = async (newStatus) => {
    try {
      const { sno, ...dataToSend } = viewModalData;

      const response = await axios.put(
        `http://localhost:9000/manage-lims/update/sMSampleAcceptanceTemplate/${viewModalData.uniqueId}`,
        {
          ...dataToSend,
          status: newStatus,
        },
        {
          timeout: 10000,
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

  const handleSelectAll = (e) => {
    const checked = e.target.checked;
    const newData = data.map((row) => ({ ...row, checkbox: checked }));
    setData(newData);
  };

  const filteredData = data.filter((row) => {
    return (
      row.uniqueCode.toLowerCase().includes(searchQuery.toLowerCase()) &&
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

  const addNewStorageCondition = (newCondition) => {
    const nextStatus = lastStatus === "Active" ? "Inactive" : "Active";
    setData((prevData) => [
      ...prevData,
      {
        ...newCondition,
        sno: prevData.length + 1,
        checkbox: false,
        status: nextStatus,
      },
    ]);
    setLastStatus(nextStatus);
    setIsModalOpen(false);
  };

  const handleDelete = async (item) => {
    console.log(item);

    try {
      const response = await axios.delete(
        `http://localhost:9000/delete-lims/sMSampleAcceptanceTemplate/${item.uniqueId}`
      );
      if (response.status === 200) {
        const newData = data.filter((d) => d.uniqueId !== item.uniqueId);
        setData(newData);
        toast.success("Data deleted successfully");
        fetchData();
      } else {
        console.error("Failed to delete investigation:", response.statusText);
      }
    } catch (error) {
      console.error("Error deleting investigation:", error);
    }
  };

  const handleAdd = async (newProduct) => {
    try {
      const response = await axios.post(
        `http://localhost:9000/manage-lims/add/sMSampleAcceptanceTemplate`,
        {
          ...newProduct,
          addDate: new Date().toISOString().split("T")[0],
          status: newProduct.status || "Active",
        }
      );
      if (response.status === 200) {
        toast.success("Product added successfully.");
        fetchData();
        setIsModalOpen(false);
      } else {
        toast.error("Failed to adsd Product.");
      }
    } catch (error) {
      toast.error(
        "Error adding product: " + (error.response?.data || error.message)
      );
    }
  };
  const handleEditSave = async (updatedData) => {
    try {
      const { sno, ...dataToSend } = updatedData;
      const response = await axios.put(
        `http://localhost:9000/manage-lims/update/sMSampleAcceptanceTemplate/${updatedData.uniqueId}`,
        dataToSend
      );
      if (response.status === 200) {
        setData((prevData) =>
          prevData.map((item) =>
            item.uniqueId === updatedData.uniqueId
              ? { ...updatedData, sno: item.sno }
              : item
          )
        );
        toast.success("Approval updated successfully");
      } else {
        toast.error("Failed to update Approval");
      }
    } catch (error) {
      console.error("Error updating Approval:", error);
      toast.error("Error updating Approval");
    }
    setEditModalData(null);
  };

  const StatusModal = ({ visible, closeModal, onAdd }) => {
    const [numOfCheckItems, setNumOfCheckItems] = useState(0);
    const [checkItems, setCheckItems] = useState([]);
    const [name, setName] = useState("");
    const [uniqueCode, setUniqueCode] = useState("");

    const handleAdd = () => {
      const newCondition = {
        name: name,
        uniqueCode: uniqueCode,
        NoOfCheckItems: numOfCheckItems,
        updatedAt: "24-08-2020",
        action: [],
      };
      onAdd(newCondition);
    };

    useEffect(() => {
      const newCheckItems = Array.from(
        { length: numOfCheckItems },
        (_, index) => ({
          label: `Check Item ${index + 1}`,
          value: "",
        })
      );
      setCheckItems(newCheckItems);
    }, [numOfCheckItems]);

    const handleNumOfCheckItemsChange = (e) => {
      setNumOfCheckItems(parseInt(e.target.value, 10) || 0);
    };

    const handleInputChange = (index, event) => {
      const newCheckItems = [...checkItems];
      newCheckItems[index].value = event.target.value;
      setCheckItems(newCheckItems);
    };

    return (
      <CModal alignment="center" visible={visible} onClose={closeModal}>
        <CModalHeader>
          <CModalTitle>New Condition</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CFormInput
            className="mb-3"
            type="text"
            label="Name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Unique Code"
            placeholder="Unique Code"
            value={uniqueCode}
            onChange={(e) => setUniqueCode(e.target.value)}
          />
          <CFormInput
            className="mb-3"
            type="number"
            label="No. Of Check Items"
            placeholder="No. of Check Items"
            value={numOfCheckItems}
            onChange={handleNumOfCheckItemsChange}
          />
          {checkItems.map((item, index) => (
            <CFormInput
              key={index}
              className="mb-3"
              type="text"
              label={item.label}
              value={item.value}
              onChange={(e) => handleInputChange(index, e)}
              placeholder={item.label}
            />
          ))}
        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={closeModal}>
            Back
          </CButton>
          <CButton color="primary" onClick={handleAdd}>
            Submit
          </CButton>
        </CModalFooter>
      </CModal>
    );
  };

  const columns = [
    {
      header: <input type="checkbox" onChange={handleSelectAll} />,
      accessor: "checkbox",
    },
    { header: "SrNo.", accessor: "sno" },
    { header: "Name", accessor: "name" },
    { header: "Unique Code", accessor: "uniqueCode" },
    { header: "No. of Check Items", accessor: "NoOfCheckItems" },
    { header: "Updated At", accessor: "updatedAt" },
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
          <FontAwesomeIcon icon={faTrashCan} className="cursor-pointer" />
        </>
      ),
    },
  ];
  const handleExcelDataUpload = (excelData) => {
    const updatedData = excelData.map((item, index) => ({
      checkbox: false,
      sno: index + 1,
      name: item["Name"] || "",
      uniqueCode: item["Unique Code"] || "",
      noOfCheckItems: item["No. of Check Items"] || 0,
      updatedAt: item["Updated At"] || "",
      status: item["Status"] || "",
    }));

    const concatenateData = [...updatedData];
    setData(concatenateData); // Update data state with parsed Excel data
    setIsModalsOpen(false); // Close the import modal after data upload
  };
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const closeViewModal = () => {
    setViewModalData(false);
  };

  const openEditModal = (rowData) => {
    setEditModalData(rowData);
  };

  const closeEditModal = () => {
    setEditModalData(null);
  };

  const EditModal = ({ visible, closeModal, data, onSave }) => {
    const [numOfCheckItems, setNumOfCheckItems] = useState(0);
    const [checkItems, setCheckItems] = useState([]);
    const [formData, setFormData] = useState(data);

    useEffect(() => {
      const newCheckItems = Array.from(
        { length: numOfCheckItems },
        (_, index) => ({
          label: `Check Item ${index + 1}`,
          value: "",
        })
      );
      setCheckItems(newCheckItems);
    }, [numOfCheckItems]);

    const handleNumOfCheckItemsChange = (e) => {
      setNumOfCheckItems(parseInt(e.target.value, 10) || 0);
    };

    const handleInputChange = (index, event) => {
      const newCheckItems = [...checkItems];
      newCheckItems[index].value = event.target.value;
      setCheckItems(newCheckItems);
    };

    useEffect(() => {
      setFormData(data);
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
          <CModalTitle>New Condition</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CFormInput
            className="mb-3"
            type="text"
            label="Name"
            placeholder="Name"
            name="name"
            value={formData?.name || ""}
            onChange={handleChange}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Unique Code"
            name="uniqueCode"
            placeholder="Unique Code"
            value={formData?.uniqueCode || ""}
            onChange={handleChange}
          />
          <CFormInput
            className="mb-3"
            type="number"
            label="No. Of Check Items"
            name="NoOfCheckItems"
            placeholder="No. of Check Items"
            value={formData?.numOfCheckItems || ""}
            onChange={handleNumOfCheckItemsChange}
          />
          {checkItems.map((item, index) => (
            <CFormInput
              key={index}
              className="mb-3"
              type="text"
              label={item.label}
              value={item.value}
              onChange={(e) => handleInputChange(index, e)}
              placeholder={item.label}
            />
          ))}
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
          <h4 className="fw-bold">Sample Acceptance Template</h4>
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
              fileName="Sample_Acceptance_Template.pdf"
              title="Sample Acceptance Template Data"
            />
            <ATMButton text="Import" color="pink" onClick={handleOpenModals} />
            <ATMButton
              text="Add Sample Acceptance"
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
          onAdd={handleAdd}
        />
      )}
      {viewModalData && (
        <ReusableModal
          visible={viewModalData !== null}
          closeModal={closeViewModal}
          data={viewModalData}
          fields={fields}
          onClose={handleCloseModals}
          title="Standard Protocol Details"
          updateStatus={handleStatusUpdate}
        />
      )}
      {isModalsOpen && (
        <ImportModal
          initialData={initialData}
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

export default SampleAcceptanceTemplate;
