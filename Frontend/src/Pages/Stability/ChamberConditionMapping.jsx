import React, { useEffect, useState } from "react";
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
import Table from "../../components/ATM components/Table/Table";
import ATMButton from "../../components/ATM components/Button/ATMButton";
import Dropdown from "../../components/ATM components/Dropdown/Dropdown";
import SearchBar from "../../components/ATM components/SearchBar/SearchBar";
import ImportModal from "../Modals/importModal";
import PDFDownload from "../PDFComponent/PDFDownload ";
import LaunchQMS from "../../components/ReusableButtons/LaunchQMS";
import ReusableModal from "../Modals/ResusableModal";
import axios from "axios";
import { BASE_URL } from "../../config.json";
import { toast } from "react-toastify";

function ChamberConditionMapping() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [viewModalData, setViewModalData] = useState(null);
  const [isModalsOpen, setIsModalsOpen] = useState(false);
  const [editModalData, setEditModalData] = useState(null);
  const [data, setData] = useState([]);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);

  const fields = [
    { label: "Chamber ID", key: "chamberId" },
    { label: "Description", key: "description" },
    { label: "Current Storage Condition", key: "currentStorageCondition" },
    { label: "Initiated On", key: "initiatedOn" },
    { label: "Status", key: "status" },
  ];

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://lims-api.mydemosoftware.com/get-all-lims/sMChamberConditionMapping`
      );
      const fetchedData = response?.data[0]?.sMChamberConditionMapping || [];

      const updatedData = fetchedData.map((item, index) => ({
        sno: index + 1,
        ...item,
      }));

      setData(updatedData);
    } catch (error) {
      console.error("Error fetching data:", error);
      toast.error("Failed to fetch chamber condition mapping data");
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
      console.log(viewModalData);

      const response = await axios.put(
        `https://lims-api.mydemosoftware.com/manage-lims/update/sMChamberConditionMapping/${viewModalData.uniqueId}`,
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
      ``;
    }
  };

  const handleEditSave = async (updatedData) => {
    try {
      const { sno, ...dataToSend } = updatedData;
      const response = await axios.put(
        `https://lims-api.mydemosoftware.com/manage-lims/update/sMChamberConditionMapping/${updatedData.uniqueId}`,
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
        closeEditModal();
      } else {
        toast.error("Failed to update Approval");
      }
    } catch (error) {
      console.error("Error updating Approval:", error);
      toast.error("Error updating Approval");
    }
    setEditModalData(null);
  };

  const handleSelectAll = (e) => {
    const checked = e.target.checked;
    const newData = data.map((row) => ({ ...row, checkbox: checked }));
    setData(newData);
  };

  const filteredData = Array.isArray(data)
    ? data.filter((row) => {
        const chamberId = row.chamberId || "";
        return (
          chamberId.toLowerCase().includes(searchQuery.toLowerCase()) &&
          (statusFilter === "All" || row.status === statusFilter)
        );
      })
    : [];

  const onViewDetails = (rowData) => {
    if (isViewModalOpen && viewModalData?.sno === rowData.sno) {
      setIsViewModalOpen(false);
      setViewModalData(null);
    } else {
      setViewModalData(rowData);
      setIsViewModalOpen(true);
    }
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
    { header: "Chamber ID", accessor: "chamberId" },
    { header: "Description", accessor: "description" },
    {
      header: "Current Storage Condition",
      accessor: "currentStorageCondition",
    },
    { header: "Initiated On", accessor: "initiatedOn" },
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
            onClick={() => handleDelete(row.original)}
          />
        </>
      ),
    },
  ];

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openEditModal = (rowData) => {
    setEditModalData(rowData);
  };

  const closeEditModal = () => {
    setEditModalData(null);
  };

  const closeViewModal = () => {
    setIsViewModalOpen(false);
  };

  const handleDelete = async (item) => {
    try {
      const response = await axios.delete(
        `https://lims-api.mydemosoftware.com/delete-lims/sMChamberConditionMapping/${item.uniqueId}`
      );
      if (response.status === 200) {
        const newData = data.filter((d) => d.uniqueId !== item.uniqueId);
        setData(newData);
        toast.success("Chamber condition mapping deleted successfully");
        fetchData();
      } else {
        console.error(
          "Failed to delete chamber condition mapping:",
          response.statusText
        );
        toast.error("Failed to delete chamber condition mapping");
      }
    } catch (error) {
      console.error("Error deleting chamber condition mapping:", error);
      toast.error("Error deleting chamber condition mapping");
    }
  };

  const handleAdd = async (newChamberConditionMapping) => {
    try {
      const response = await axios.post(
        `https://lims-api.mydemosoftware.com/manage-lims/add/sMChamberConditionMapping`,
        {
          ...newChamberConditionMapping,
          initiatedOn: new Date().toISOString().split("T")[0],
          status: newChamberConditionMapping.status || "INITIATED",
        }
      );
      if (response.status === 200) {
        toast.success("Chamber condition mapping added successfully");
        fetchData();
        closeModal();
        setIsModalOpen(false);
      } else {
        toast.error("Failed to add chamber condition mapping");
      }
    } catch (error) {
      toast.error(
        "Error adding chamber condition mapping: " +
          (error.response?.data || error.message)
      );
    }
  };

  const handleExcelDataUpload = async (excelData) => {
    try {
      const response = await axios.post(
        `https://lims-api.mydemosoftware.com/manage-lims/bulk-add/sMChamberConditionMapping`,
        excelData
      );
      if (response.status === 200) {
        toast.success("Bulk upload successful");
        fetchData();
        handleCloseModals();
      } else {
        toast.error("Failed to upload data");
      }
    } catch (error) {
      toast.error(
        "Error uploading data: " + (error.response?.data || error.message)
      );
    }
  };

  const StatusModal = ({ visible, closeModal, onAdd }) => {
    const [chamberId, setChamberId] = useState("");
    const [description, setDescription] = useState("");
    const [currentStorageCondition, setCurrentStorageCondition] = useState("");

    const handleAdd = () => {
      const newMapping = {
        chamberId,
        description,
        currentStorageCondition,
        status: "INITIATED",
      };
      onAdd(newMapping);
    };

    return (
      <>
        <CModal alignment="center" visible={visible} onClose={closeModal}>
          <CModalHeader>
            <CModalTitle>Add Chamber Condition Mapping</CModalTitle>
          </CModalHeader>
          <CModalBody>
            <CFormInput
              className="mb-3"
              type="text"
              label="Chamber ID"
              value={chamberId}
              onChange={(e) => setChamberId(e.target.value)}
            />
            <CFormInput
              className="mb-3"
              type="text"
              label="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <CFormInput
              className="mb-3"
              type="text"
              label="Current Storage Condition"
              value={currentStorageCondition}
              onChange={(e) => setCurrentStorageCondition(e.target.value)}
            />
          </CModalBody>
          <CModalFooter>
            <CButton color="light" onClick={closeModal}>
              Back
            </CButton>
            <CButton className="bg-info text-white" onClick={handleAdd}>
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
            <CModalTitle>Edit Chamber Condition Mapping</CModalTitle>
          </CModalHeader>
          <CModalBody>
            <CFormInput
              className="mb-3"
              type="text"
              label="Chamber ID"
              name="chamberId"
              value={formData?.chamberId || ""}
              onChange={handleChange}
            />
            <CFormInput
              className="mb-3"
              type="text"
              label="Description"
              name="description"
              value={formData?.description || ""}
              onChange={handleChange}
            />
            <CFormInput
              className="mb-3"
              type="text"
              label="Current Storage Condition"
              name="currentStorageCondition"
              value={formData?.currentStorageCondition || ""}
              onChange={handleChange}
            />
            <CFormInput
              className="mb-3"
              type="text"
              label="Status"
              name="status"
              value={formData?.status || ""}
              onChange={handleChange}
            />
          </CModalBody>
          <CModalFooter>
            <CButton color="light" onClick={closeModal}>
              Back
            </CButton>
            <CButton className="bg-info text-white" onClick={handleSave}>
              Update
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
          <h4 className="fw-bold">Chamber Condition Mapping</h4>
        </div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex space-x-4">
            <SearchBar value={searchQuery} onChange={setSearchQuery} />
            <Dropdown
              options={[
                { value: "All", label: "All" },
                { value: "INITIATED", label: "INITIATED" },
                { value: "APPROVED", label: "APPROVED" },
                { value: "REJECTED", label: "REJECTED" },
                { value: "REINITIATED", label: "REINITIATED" },
                { value: "DROPPED", label: "DROPPED" },
              ]}
              value={statusFilter}
              onChange={setStatusFilter}
            />
          </div>
          <div className="float-right flex gap-4">
            <PDFDownload
              columns={columns}
              data={filteredData}
              fileName="Chamber_Condition_Mapping.pdf"
              title="Chamber Condition Mapping Data"
            />
            <ATMButton text="Import" color="pink" onClick={handleOpenModals} />
            <ATMButton
              text="Add Chamber Condition Mapping"
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
          onClose={closeViewModal}
          title="Chamber Condition Mapping Details"
          updateStatus={handleStatusUpdate}
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
}

export default ChamberConditionMapping;
