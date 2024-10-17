import React, { useState, useEffect } from "react";
import Dropdown from "../../components/ATM components/Dropdown/Dropdown";
import Table from "../../components/ATM components/Table/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import ATMButton from "../../components/ATM components/Button/ATMButton";
import WorkFlowModal from "../Modals/WorkFlowModal.jsx";
import ImportModal from "../Modals/importModal.jsx";
import PDFDownload from "../PDFComponent/PDFDownload .jsx";
import LaunchQMS from "../../components/ReusableButtons/LaunchQMS.jsx";
import axios from "axios";
import { toast } from "react-toastify";
import { BASE_URL } from "../../config.json";
import {
  CButton,
  CFormInput,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";
import ReusableModal from "../Modals/ResusableModal";

const WorkFlow = () => {
  const [data, setData] = useState([]);
  const [statusFilter, setStatusFilter] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [viewModalData, setViewModalData] = useState(null);
  const [isModalsOpen, setIsModalsOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editModalData, setEditModalData] = useState(null);

const fields = [
  { label: "S.No", key: "sno" },
  { label: "Plant Code", key: "PlantCode" },
  { label: "Plant Name", key: "PlantName" },
  { label: "Address", key: "Address" },
  { label: "Comments", key: "Comments" },
  { label: "Work Flow", key: "Workflow" },
  { label: "Status", key: "status" },
];

  const openEditModal = (rowData) => {
    setEditModalData(rowData);
    setEditModalOpen(true);
  };

  const closeEditModal = () => {
    setEditModalOpen(false);
    setEditModalData(null);
  };

  useEffect(() => {
    fetchWorkFlowData();
  }, []);
  const fetchWorkFlowData = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/get-all-lims/workFlow`);
      if (response.data && Array.isArray(response.data)) {
        const formattedData = response.data.flatMap(
          (item) =>
            item?.workFlow?.map((condition, i) => ({
              checkbox: false,
              uniqueId: condition.uniqueId,
              sno: i + 1,
              PlantCode: condition.PlantCode,
              PlantName: condition.PlantName,
              Address: condition.Address,
              Comments: condition.Comments,
              Workflow: condition.Workflow,
              status: condition.status,
            })) || []
        );
        setData(formattedData);
      }
    } catch (error) {
      toast.error(
        "Error fetching data: " + (error.response?.data || error.message)
      );
    }
  };
  const handleModalSubmit = async (newWorkFlow) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/manage-lims/add/workFlow`,
        {
          ...newWorkFlow,
          status: newWorkFlow.status || "Active",
        }
      );
      if (response.status === 200) {
        toast.success("WorkFlow added successfully.");
        setIsModalOpen(false);
        fetchWorkFlowData();
      } else {
        toast.error("Failed to add WorkFlow.");
      }
    } catch (error) {
      toast.error(
        "Error adding WorkFlow: " + (error.response?.data || error.message)
      );
    }
  };
  const handleOpenModals = () => {
    setIsModalsOpen(true);
  };

  const handleCloseModals = () => {
    setIsModalsOpen(false);
  };

  useEffect(() => {
    const counts = {
      APPROVED: 0,
      INITIATED: 0,
      REINITIATED: 0,
      REJECTED: 0,
      DROPPED: 0,
    };

    data.forEach((item) => {
      if (item.status === "Active") counts.Active++;
      else if (item.status === "Inactive") counts.Inactive++;
    });
  }, [data]);

  const handleCheckboxChange = (index) => {
    const newData = [...data];
    newData[index].checkbox = !newData[index].checkbox;
    setData(newData);
  };

  const handleSelectAll = (e) => {
    const checked = e.target.checked;
    const newData = data.map((row) => ({ ...row, checkbox: checked }));
    setData(newData);
  };

  const filteredData = data.filter((row) => {
    return (
      // row.PlantName.toLowerCase().includes(searchQuery.toLowerCase()) &&
      statusFilter === "All" || row.status === statusFilter
    );
  });

  const onViewDetails = (rowData) => {
    setViewModalData(rowData);
    setIsViewModalOpen(true);
  };

  const columns = [
    {
      header: <input type="checkbox" onChange={handleSelectAll} />,
      accessor: "checkbox",
    },
    { header: "SrNo.", accessor: "sno" },
    { header: "Plant Code", accessor: "PlantCode" },
    { header: "Plant Name", accessor: "PlantName" },
    { header: "Address", accessor: "Address" },
    { header: "Comments", accessor: "Comments" },
    { header: "Workflow", accessor: "Workflow" },
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
            key="delete"
            className="cursor-pointer"
          />
        </>
      ),
    },
  ];

  const handleExcelDataUpload = (excelData) => {
    const updatedData = excelData.map((item, index) => ({
      checkbox: false,
      sno: index + 1,
      PlantCode: item["Plant Code"] || "",
      PlantName: item["Plant Name"] || "",
      Address: item["Address"] || "",
      Comments: item["Comments"] || "",
      Workflow: item["Workflow"] || "",
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
    setIsViewModalOpen(false);
  };

  const handleDelete = async (item) => {
    try {
      const response = await axios.delete(
        `${BASE_URL}/delete-lims/workFlow/${item.uniqueId}`
      );
      if (response.status === 200) {
        setData((prevData) =>
          prevData.filter((d) => d.uniqueId !== item.uniqueId)
        );
        toast.success("WorkFlow deleted successfully.");
        fetchWorkFlowData();
      } else {
        toast.error("Failed to delete WorkFlow.");
      }
    } catch (error) {
      toast.error(
        "Error deleting WorkFlow: " + (error.response?.data || error.message)
      );
    }
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
      closeModal();
    };

    return (
      <CModal
        alignment="center"
        visible={visible}
        onClose={closeModal}
        size="lg"
      >
        <CModalHeader>
          <CModalTitle>Update Work flow</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p className="mb-3 fw-bold">Update information</p>
          <CFormInput
            type="text"
            className="mb-3"
            label="Plant Code"
            name="PlantCode"
            placeholder="Plant Code"
            value={formData?.PlantCode || ""}
            onChange={handleChange}
          />
          <CFormInput
            type="text"
            className="mb-3"
            label="Plant Name"
            name="PlantName"
            placeholder="Plant Name"
            value={formData?.PlantName || ""}
            onChange={handleChange}
          />
          <CFormInput
            type="text"
            className="mb-3"
            label="Address"
            name="Address"
            placeholder="Address"
            value={formData?.Address || ""}
            onChange={handleChange}
          />
          <CFormInput
            type="text"
            className="mb-3"
            name="Comments"
            label="Comments"
            placeholder="Comments"
            value={formData?.Comments || ""}
            onChange={handleChange}
          />
          <CFormInput
            type="text"
            className="mb-3"
            label="Workflow"
            name="Workflow"
            placeholder="Workflow"
            value={formData?.Workflow || ""}
            onChange={handleChange}
          />
        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={closeModal}>
            Back
          </CButton>
          <CButton color="primary" onClick={handleSave}>
            Update
          </CButton>
        </CModalFooter>
      </CModal>
    );
  };
  const handleEditSave = async (updatedData) => {
    try {
      // const {sno,...datatosend}=updatedData;
      console.log(updatedData, "unnnn");
      const response = await axios.put(
        `${BASE_URL}/manage-lims/update/workFlow/${updatedData.uniqueId}`,
        updatedData
      );
      if (response.status === 200) {
        setData((prevData) =>
          prevData.map((item) =>
            item.sno === updatedData.sno ? updatedData : item
          )
        );
        toast.success("workFlow updated successfully.");
        setEditModalData(null);
        closeModal();
      } else {
        toast.error("Failed to update workFlow.");
      }
    } catch (error) {
      toast.error(
        "Error updating workFlow: " + (error.response?.data || error.message)
      );
    }
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

      const response = await axios.put(
        `${BASE_URL}/manage-lims/update/workFlow/${viewModalData.uniqueId}`,
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
        toast.success("workFlow status updated successfully");
        closeViewModal();
      } else {
        toast.error("Failed to update workFlow status");
      }
    } catch (error) {
      console.error("Error updating workFlow status:", error);
      toast.error("Error updating workFlow status");
    }
  };

  return (
    <>
      <LaunchQMS />
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Work Flows</h1>

        <div className="flex items-center justify-between mb-4">
          <div className="flex space-x-4">
            {/* <SearchBar value={searchQuery} onChange={setSearchQuery} /> */}
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
              fileName="WorkFlow.pdf"
              title="WorkFlow Data"
            />
            <ATMButton text="Import" color="pink" onClick={handleOpenModals} />
            <ATMButton text="Add WorkFlow" color="blue" onClick={openModal} />
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
        <WorkFlowModal
          visible={isModalOpen}
          closeModal={closeModal}
          handleSubmit={handleModalSubmit}
        />
        {isViewModalOpen && (
          <ReusableModal
            visible={isViewModalOpen}
            fields={fields}
            closeModal={closeViewModal}
            data={viewModalData}
            updateStatus={handleStatusUpdate}
          />
        )}
        {isModalsOpen && (
          <ImportModal
            isOpen={isModalsOpen}
            onClose={handleCloseModals}
            columns={columns}
            onDataUpload={handleExcelDataUpload}
          />
        )}
        {editModalOpen && (
          <EditModal
            visible={editModalOpen}
            closeModal={closeEditModal}
            data={editModalData}
            onSave={handleEditSave}
          />
        )}
      </div>
    </>
  );
};
export default WorkFlow;
