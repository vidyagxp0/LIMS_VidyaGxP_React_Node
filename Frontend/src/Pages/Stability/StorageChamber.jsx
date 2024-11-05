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

function StorageChamber() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [viewModalData, setViewModalData] = useState(null);
  const [isModalsOpen, setIsModalsOpen] = useState(false);
  const [editModalData, setEditModalData] = useState(null);
  const [data, setData] = useState([]);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);

  const fields = [
    { label: "Chamber ID", key: "chamberID" },
    { label: "Description", key: "description" },
    { label: "Make/Model", key: "makeModel" },
    { label: "Serial No.", key: "serialNo" },
    { label: "Location", key: "location" },
    { label: "Status", key: "status" },
  ];
  
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}/get-all-lims/sMStorageChamber`
      );
      const fetchedData = response?.data[0]?.sMStorageChamber || [];

      const updatedData = fetchedData.map((item, index) => ({
        sno: index + 1,
        ...item,
      }));

      setData(updatedData);
    } catch (error) {
      console.error("Error fetching data:", error);
      toast.error("Failed to fetch storage chamber data");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  
  const handleOpenModals = () => {
    setIsModalsOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleCloseModals = () => {
    setIsModalsOpen(false);
  };

  const handleEditSave = async (updatedData) => {
    const { sno, checkbox, ...dataToSend } = updatedData;
    try {
      const response = await axios.put(
        `${BASE_URL}/manage-lims/update/sMStorageChamber/${updatedData.uniqueId}`,
        dataToSend
      );
      if (response.status === 200) {
        const newData = data.map((item) =>
          item.uniqueId === updatedData.uniqueId
            ? { ...item, ...response.data }
            : item
        );
        setData(newData);
        closeEditModal();
        toast.success("Storage chamber updated successfully");
        fetchData();
      } else {
        console.error("Failed to update storage chamber:", response.statusText);
        toast.error("Failed to update storage chamber");
      }
    } catch (error) {
      console.error("Error updating storage chamber:", error);
      toast.error("Error updating storage chamber");
    }
  };

  const handleStatusUpdate = async (newStatus) => {
    try {
      const { sno, ...dataToSend } = viewModalData;
      console.log(viewModalData);
      
      const response = await axios.put(`https://limsapi.vidyagxp.com/manage-lims/update/sMStorageChamber/${viewModalData.uniqueId}`, {
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
      toast.error("Error updating Approval status");``
    }
  };

  const handleSelectAll = (e) => {
    const checked = e.target.checked;
    const newData = data.map((row) => ({ ...row, checkbox: checked }));
    setData(newData);
  };

  const filteredData = Array.isArray(data)
    ? data.filter((row) => {
        const chamberID = row.chamberID || "";
        return (
          chamberID.toLowerCase().includes(searchQuery.toLowerCase()) &&
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
    { header: <input type="checkbox" onChange={handleSelectAll} />, accessor: "checkbox" },
    { header: "SrNo.", accessor: "sno" },
    { header: "Chamber ID", accessor: "chamberID" },
    { header: "Description", accessor: "description" },
    { header: "Make/Model", accessor: "makeModel" },
    { header: "Serial No.", accessor: "serialNo" },
    { header: "Location", accessor: "location" },
    { header: "Status", accessor: "status" },
    {
      header: "Actions",
      accessor: "action",
      Cell: ({ row }) => (
        <>
          <FontAwesomeIcon icon={faEye} className="mr-2 cursor-pointer" onClick={() => onViewDetails(row)} />
          <FontAwesomeIcon icon={faPenToSquare} onClick={() => openEditModal(row.original)} className="mr-2 cursor-pointer" />
          <FontAwesomeIcon icon={faTrashCan} className="cursor-pointer" onClick={() => handleDelete(row.original)} />
        </>
      ),
    },
  ];


  const openEditModal = (rowData) => {
    setEditModalData(rowData);
  };
  
  const closeEditModal = () => {
    setEditModalData(null);
  };
  
  const closeViewModal = () => {
    setIsViewModalOpen(false);
  };
  const openModal = () => {
    setIsModalOpen(true);
  };


  const handleDelete = async (item) => {
    try {
      const response = await axios.delete(
        `${BASE_URL}/delete-lims/sMStorageChamber/${item.uniqueId}`
      );
      if (response.status === 200) {
        const newData = data.filter((d) => d.uniqueId !== item.uniqueId);
        setData(newData);
        toast.success("Storage chamber deleted successfully");
        fetchData();
      } else {
        console.error("Failed to delete storage chamber:", response.statusText);
        toast.error("Failed to delete storage chamber");
      }
    } catch (error) {
      console.error("Error deleting storage chamber:", error);
      toast.error("Error deleting storage chamber");
    }
  };
 

  const handleAdd = async (newStorageChamber) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/manage-lims/add/sMStorageChamber`,
        {
          ...newStorageChamber,
          addDate: new Date().toISOString().split("T")[0],
          status: newStorageChamber.status || "Active",
        }
      );
      if (response.status === 200) {
        toast.success("Storage chamber added successfully");
        fetchData();
        setIsModalOpen(false);
      } else {
        toast.error("Failed to add storage chamber");
      }
    } catch (error) {
      toast.error(
        "Error adding storage chamber: " + (error.response?.data || error.message)
      );
    }
  };

  const handleExcelDataUpload = async (excelData) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/manage-lims/bulk-add/sMStorageChamber`,
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
      toast.error("Error uploading data: " + (error.response?.data || error.message));
    }
  };
  
  const StatusModal = ({ visible, closeModal, onAdd }) => {
    const [chamberID, setChamberID] = useState("");
    const [description, setDescription] = useState("");
    const [makeModel, setMakeModel] = useState("");
    const [serialNo, setSerialNo] = useState("");
    const [location, setLocation] = useState("");

    const handleAdd = () => {
      const newChamber = {
        chamberID,
        description,
        makeModel,
        serialNo,
        location,
        status: "Active",
      };
      onAdd(newChamber);
    };
    
    return (
      <>
        <CModal alignment="center" visible={visible} onClose={closeModal}>
          <CModalHeader>
            <CModalTitle>Add Storage Chamber</CModalTitle>
          </CModalHeader>
          <CModalBody>
            <CFormInput
              className="mb-3"
              type="text"
              label="Chamber ID"
              value={chamberID}
              onChange={(e) => setChamberID(e.target.value)}
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
              label="Make/Model"
              value={makeModel}
              onChange={(e) => setMakeModel(e.target.value)}
            />
            <CFormInput
              className="mb-3"
              type="text"
              label="Serial No."
              value={serialNo}
              onChange={(e) => setSerialNo(e.target.value)}
            />
            <CFormInput
              className="mb-3"
              type="text"
              label="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
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
            <CModalTitle>Edit Storage Chamber</CModalTitle>
          </CModalHeader>
          <CModalBody>
            <CFormInput
              className="mb-3"
              type="text"
              label="Chamber ID"
              name="chamberID"
              value={formData?.chamberID || ""}
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
              label="Make/Model"
              name="makeModel"
              value={formData?.makeModel || ""}
              onChange={handleChange}
            />
            <CFormInput
              className="mb-3"
              type="text"
              label="Serial No."
              name="serialNo"
              value={formData?.serialNo || ""}
              onChange={handleChange}
            />
            <CFormInput
              className="mb-3"
              type="text"
              label="Location"
              name="location"
              value={formData?.location || ""}
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
          <h4 className="fw-bold">Storage Chamber</h4>
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
              fileName="Storage_Chamber.pdf"
              title="Storage Chamber Data"
            />
            <ATMButton text="Import" color="pink" onClick={handleOpenModals} />
            <ATMButton
              text="Add Storage Chamber"
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
          title="Storage Chamber Details"
          updateStatus={handleStatusUpdate}
        />
      )}
 {isModalOpen && 
      <StatusModal
       visible={isModalOpen}
       closeModal={closeModal} 
       onAdd={handleAdd} />}

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

export default StorageChamber;