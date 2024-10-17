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
import PlantsModal from "../Modals/PlantsModal.jsx";
import ImportModal from "../Modals/importModal.jsx";
import {
  CButton,
  CFormInput,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";
import PDFDownload from "../PDFComponent/PDFDownload .jsx";
import LaunchQMS from "../../components/ReusableButtons/LaunchQMS.jsx";
import axios from "axios";
import { BASE_URL } from "../../config.json";
import ReusableModal from "../Modals/ResusableModal";
import { toast } from "react-toastify";


const Plants = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [viewModalData, setViewModalData] = useState(null);

  // *********************Edit ****************************
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editModalData, setEditModalData] = useState(null);

  const fields = [
    { label: "S.No", key: "sno" },
    { label: "Plant Code", key: "PlantCode" },
    { label: "Plant Name", key: "PlantName" },
    { label: "Address", key: "Address" },
    { label: "Register On", key: "RegisterOn" },
    { label: "Status", key: "status" },
  ];


  const fetchPlantData = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/get-all-lims/plant`);
      if (response.data && Array.isArray(response.data)) {
        const formattedData = response.data.flatMap(
          (item) =>
            item?.plant?.map((condition, i) => ({
              checkbox: false,
              uniqueId: condition.uniqueId,
              sno: i + 1,
              PlantCode: condition.PlantCode,
              PlantName: condition.PlantName,
              Address: condition.Address,
              RegisterOn: condition.RegisterOn,
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

  useEffect(() => {
    fetchPlantData();
  }, []);
  const openEditModal = (rowData) => {
    setEditModalData(rowData);
    setEditModalOpen(true);
  };

  const closeEditModal = () => {
    setEditModalOpen(false);
    setEditModalData(null);
  };

   const handleEditSave = async (updatedData) => {
     try {
       const response = await axios.put(
         `${BASE_URL}/manage-lims/update/plant/${updatedData.uniqueId}`,
         updatedData
       );
       if (response.status === 200) {
         setData((prevData) =>
           prevData.map((item) =>
             item.sno === updatedData.sno ? updatedData : item
           )
         );
         toast.success("plant updated successfully.");
         setEditModalData(null);
         closeModal();
        // setIsModalOpen(false);

       } else {
         toast.error("Failed to update Plant.");
       }
     } catch (error) {
       toast.error(
         "Error updating Plant: " + (error.response?.data || error.message)
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
      closeEditModal();
    };

    return (
      <CModal
        alignment="center"
        visible={visible}
        onClose={closeModal}
        size="lg"
      >
        <CModalHeader>
          <CModalTitle>Update Plant</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CFormInput
            type="text"
            className="mb-3"
            label="Name"
            placeholder="Name"
            name="PlantName"
            value={formData?.PlantName || ""}
            onChange={handleChange}
          />
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
            label="Address"
            placeholder="Address"
            name="Address"
            value={formData?.Address || ""}
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

  // *********************Edit ****************************

  const [isModalsOpen, setIsModalsOpen] = useState(false);

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
      row.PlantCode.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (statusFilter === "All" || row.status === statusFilter)
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
    { header: "Register On", accessor: "RegisterOn" },
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
      RegisterOn: item["Register On"] || "",
      status: item["Status"] || "Active",
    }));
    const concatenateData = [...updatedData];
    setData(concatenateData);
    setIsModalsOpen(false);
  };

  //********************************Fetch data from Modal and added to the new row**************************************************************** */
  const handleModalSubmit = async (newProduct) => {
    try {
      const currentDate = new Date().toISOString().split("T")[0];
      const response = await axios.post(`${BASE_URL}/manage-lims/add/plant`, {
        ...newProduct,
        RegisterOn: currentDate,
        status: newProduct.status || "Active",
      });
      if (response.status === 200) {
        toast.success("Client added successfully.");
        setIsModalOpen(false);
        fetchPlantData();
      } else {
        toast.error("Failed to add Product.");
      }
    } catch (error) {
      toast.error(
        "Error adding product: " + (error.response?.data || error.message)
      );
    }
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
        `${BASE_URL}/delete-lims/plant/${item.uniqueId}`
      );
      if (response.status === 200) {
        setData((prevData) =>
          prevData.filter((d) => d.uniqueId !== item.uniqueId)
        );
        toast.success("Plant deleted successfully.");
        fetchPlantData();
      } else {
        toast.error("Failed to delete Plant.");
      }
    } catch (error) {
      toast.error(
        "Error deleting Plant: " + (error.response?.data || error.message)
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
        `${BASE_URL}/manage-lims/update/plant/${viewModalData.uniqueId}`,
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
        toast.success("Plant status updated successfully");
        closeViewModal();
      } else {
        toast.error("Failed to update Plant status");
      }
    } catch (error) {
      console.error("Error updating Plant status:", error);
      toast.error("Error updating Plant status");
    }
  };

  return (
    <>
      <LaunchQMS />
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Plant`s</h1>

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
              fileName="plants.pdf"
              title="Plants Data"
            />
            <ATMButton text="Import" color="pink" onClick={handleOpenModals} />
            <ATMButton text="Add Plant" color="blue" onClick={openModal} />
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
        <PlantsModal
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
            initialData={filteredData}
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
export default Plants;
