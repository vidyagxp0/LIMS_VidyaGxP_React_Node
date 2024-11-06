import React, { useEffect } from "react";

import {
  CButton,
  CFormInput,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";
import {
  faEye,
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import SearchBar from "../../components/ATM components/SearchBar/SearchBar";
import Dropdown from "../../components/ATM components/Dropdown/Dropdown";
import ATMButton from "../../components/ATM components/Button/ATMButton";
import Table from "../../components/ATM components/Table/Table";
import ImportModal from "../Modals/importModal";
import PDFDownload from "../PDFComponent/PDFDownload ";
import LaunchQMS from "../../components/ReusableButtons/LaunchQMS";
import ReusableModal from "../Modals/ResusableModal";
import axios from "axios";
import { BASE_URL } from "../../config.json";
import { toast } from "react-toastify";

function Storage_Condition() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [viewModalData, setViewModalData] = useState(null);
  const [isModalsOpen, setIsModalsOpen] = useState(false);
  const [lastStatus, setLastStatus] = useState("INITIATED");
  const [editModalData, setEditModalData] = useState(null);
  const [data, setData] = useState([]);
  console.log(data, "datatatatatatata");
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);

  const fields = [
    { label: "Condition Code", key: "conditionCode" },
    { label: "Stability Condition", key: "stabilityCondition" },
    { label: "Description", key: "description" },
    { label: "Status", key: "status" },
  ];
  
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}/get-all-lims/sMStorageCondition`
      );
      const fetchedData = response?.data[0]?.sMStorageCondition || [];

      const updatedData = fetchedData.map((item, index) => ({
        sno: index + 1,
        ...item,
      }));

      setData(updatedData);
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
  const openEditModal = (rowData) => {
    setEditModalData(rowData);
  };

  const closeViewModal = () => {
    setIsViewModalOpen(false);
  };

  
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const closeEditModal = () => {
    setEditModalData(null);
  };
  const handleEditSave = async (updatedData) => {
    const { sno, checkbox, ...dataTosend } = updatedData;
    try {
      const response = await axios.put(
        `${BASE_URL}/manage-lims/update/sMStorageCondition/${updatedData.uniqueId}`,
        dataTosend
      );
      if (response.status === 200) {
        const newData = data.map((item) =>
          item.uniqueId === updatedData.uniqueId
            ? { ...item, ...response.data }
            : item
        );
        setData(newData);
        closeEditModal();
        toast.success("Data updated successfully");
        fetchData();
      } else {
        console.error("Failed to update investigation:", response.statusText);
        toast.error("Failed to update investigation");
      }
    } catch (error) {
      console.error("Error updating investigation:", error);
      toast.error("Error updating investigation");
    }
  };

  const handleSelectAll = (e) => {
    const checked = e.target.checked;
    const newData = data.map((row) => ({ ...row, checkbox: checked }));
    setData(newData);
  };

  const filteredData = Array.isArray(data)
  ? data.filter((row) => {
      console.log("Row:", row);
      const conditionCode = row.conditionCode || "";
      return (
        conditionCode?.toLowerCase()?.includes(searchQuery.toLowerCase()) &&
        (statusFilter === "All" || row.status === statusFilter)
      );
    })
  : [];
  const onViewDetails = (rowData) => {
    setViewModalData(rowData);
  };

  const handleCheckboxChange = (index) => {
    const newData = [...data];
    newData[index].checkbox = !newData[index].checkbox;
    setData(newData);
  };
  const columns = [
    { header: <input type="checkbox" onChange={handleSelectAll} />, accessor: "checkbox" },
    { header: "SrNo.", accessor: "sno" },
    { header: "Condition Code", accessor: "conditionCode" },
    { header: "Stability Condition", accessor: "stabilityCondition" },
    { header: "Description", accessor: "description" },
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
            onClick={() => openEditModal(row.original)} 
            className="mr-2 cursor-pointer" 
            />
          <FontAwesomeIcon 
          icon={faTrashCan} 
          className="cursor-pointer" 
          />
        </>
      ),
    },
  ];
  

  const openModal = () => {
    setIsModalOpen(true);
  };

  const handleDelete = async (item) => {
    console.log(item);

    try {
      const response = await axios.delete(
        `${BASE_URL}/delete-lims/sMStorageCondition/${item.uniqueId}`
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
  const handleExcelDataUpload = (excelData) => {
    const updatedData = excelData.map((item, index) => ({
      checkbox: false,
      sno: index + 1,
      conditionCode: item["Condition Code"] || "",
      stabilityCondition: item["Stability Condition"] || "",
      description: item["Description"] || "",
      status: item["Status"] || "",
    }));

    const concatenateData = [...updatedData];
    setData(concatenateData); // Update data state with parsed Excel data
    setIsModalsOpen(false); // Close the import modal after data upload
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

  const handleAdd = async (newSampleType) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/manage-lims/add/sMStorageCondition`,
        {
          ...newSampleType,
          addDate: new Date().toISOString().split("T")[0],
          status: newSampleType.status || "Active",
        }
      );
      if (response.status === 200) {
        fetchData();
        toast.success("Sample added successfully.");
        setIsModalOpen(false);
      } else {
        toast.error("Failed to add Sample.");
      }
    } catch (error) {
      toast.error(
        "Error adding Sample: " + (error.response?.data || error.message)
      );
    }
  };
  
  const handleStatusUpdate = async (newStatus) => {
    if (!newStatus) {
      console.error("New status is undefined");
      toast.error("Invalid Status update");
      return;
    }
    if (!viewModalData || !viewModalData.uniqueId) {
      console.error("No valid admin data selected for update");
      toast.error("No valid data selected for update");
      return;
    }
  
    try {
      const response = await axios.put(
        `${BASE_URL}/manage-lims/update/sMStorageCondition/${viewModalData.uniqueId}`,
        { status: newStatus }
      );
      if (response.status === 200) {
        setData((prevData) =>
          prevData.map((item) =>
            item.uniqueId === viewModalData.uniqueId
              ? { ...item, status: newStatus }
              : item
          )
        );
        toast.success("Status updated successfully");
        closeViewModal();
        fetchData(); // Refresh the data after update
      }
    } catch (error) {
      console.error("Error updating status:", error);
      toast.error("Failed to update status");
    }
  };  
  
  
  

  const StatusModal = ({ visible, closeModal, onAdd }) => {
    const [stabilityCondition, setStabilityCondition] = useState("");
    const [conditionCode, setConditionCode] = useState("");
    const [description, setDescription] = useState("");
    const handleProduct = () => {
      const newCondition = {
        conditionCode,
        stabilityCondition,
        description,
        status: "active",
      };
      onAdd(newCondition);
    };
    return (
      <>
        <CModal alignment="center" visible={visible} onClose={closeModal}>
          <CModalHeader>
            <CModalTitle>New Condition</CModalTitle>
          </CModalHeader>
          <CModalBody>
          <CFormInput
              className="mb-3"
              type="text"
              label="Condition Code"
              placeholder=" "
              value={conditionCode}
              onChange={(e) => setConditionCode(e.target.value)}
            />
          
            <CFormInput
              className="mb-3"
              type="text"
              label="Stability Storage Condition"
              placeholder="°C °F "
              value={stabilityCondition}
              onChange={(e) => setStabilityCondition(e.target.value)}
            />
           
            <CFormInput
              className="mb-3"
              type="text"
              label="Description"
              placeholder=" "
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </CModalBody>
          <CModalFooter>
            <CButton color="light" onClick={closeModal}>
              Back
            </CButton>
            <CButton className="bg-info text-white" onClick={handleProduct}>
              Add
            </CButton>
          </CModalFooter>
        </CModal>
      </>
    );
  };

  const EditModal = ({ visible, closeModal, data, onSave }) => {
    const [formData, setFormData] = useState(data);

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
      <>
        <CModal alignment="center" visible={visible} onClose={closeModal}>
          <CModalHeader>
            <CModalTitle>New Condition</CModalTitle>
          </CModalHeader>
          <CModalBody>
            <CFormInput
              className="mb-3"
              type="text"
              label="Stability Storage Condition"
              name="stabilityCondition"
              placeholder="°C °F "
              value={formData?.stabilityCondition || ""}
              onChange={handleChange}
            />
             <CFormInput
              className="mb-3"
              type="text"
              label="Condition Code"
              name="conditionCode"
              placeholder=" "
              value={formData?.conditionCode}
              onChange={handleChange}
            />
            <CFormInput
              className="mb-3"
              type="text"
              label="Description"
              name="description"
              placeholder=" "
              value={formData?.description || ""}
              onChange={handleChange}
            />
          </CModalBody>
          <CModalFooter>
            <CButton color="light" onClick={closeModal}>
              Back
            </CButton>
            <CButton className="bg-info text-white" onClick={handleSave}>
              Add
            </CButton>
          </CModalFooter>
        </CModal>
      </>
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
          visible={viewModalData}
          closeModal={closeViewModal}
          data={viewModalData}
          fields={fields}
          onClose={handleCloseModals}
          title="Test Plan Details"
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
export default Storage_Condition;