import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
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
import { BASE_URL } from "../../config.json";
function StandardProtocol() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [viewModalData, setViewModalData] = useState(null);
  const [isModalsOpen, setIsModalsOpen] = useState(false);
  const [lastStatus, setLastStatus] = useState("INITIATED");
  const [editModalData, setEditModalData] = useState(null);
  const [data, setData] = useState([]);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);

  const fields = [
    { label: "Standard Protocol Name", key: "StandardProtocolName" },
    { label: "Standard Protocol Id", key: "StandardProtocolId" },
    { label: "Standard Protocol Description", key: "StandardProtocolDescription" },
    { label: "Status", key: "status" },
  ];

 
  
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://limsapi.vidyagxp.com/get-all-lims/sMStandardProtocol`
      );
      console.log(response.data); // Debugging to check if data is coming

      const fetchedData = response?.data[0]?.sMStandardProtocol || [];

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

  const handleCloseModals = () => {
    setIsModalsOpen(false);
  };


  const handleStatusUpdate = async (newStatus) => {
    try {
      const { sno, ...dataToSend } = viewModalData;
      console.log(viewModalData);
      
      const response = await axios.put(`https://limsapi.vidyagxp.com/manage-lims/update/sMStandardProtocol/${viewModalData.uniqueId}`, {
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
    console.log("Row:", row);
    const conditionCode = row.conditionCode || "";
    return (
      conditionCode?.toLowerCase()?.includes(searchQuery.toLowerCase()) &&
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
  
  // ... (keep other functions like handleSelectAll, filteredData, onViewDetails, etc.)

  const handleCheckboxChange = (index) => {
    const newData = [...data];
    newData[index].checkbox = !newData[index].checkbox;
    setData(newData);
  };
  
  const handleEditSave = async (updatedData) => {
    try {
      const {sno,...dataToSend}=updatedData;
      const response = await axios.put(`https://limsapi.vidyagxp.com/manage-lims/update/sMStandardProtocol/${updatedData.uniqueId}`, dataToSend);
      if (response.status === 200) {
        setData((prevData) =>
          prevData.map((item) => (item.uniqueId === updatedData.uniqueId ? { ...updatedData, sno: item.sno } : item))
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
    const [StandardProtocolName, setStandardProtocolName] = useState("");
    const [StandardProtocolId, setStandardProtocolId] = useState("");
    const [StandardProtocolDescription, setsetStandardProtocolDescription] = useState("");
    const handleProduct = () => {
      const newCondition = {
        StandardProtocolName,
        StandardProtocolId,
        StandardProtocolDescription,
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
              placeholder=" "
              label="Standard Protocol Name"
              value={StandardProtocolName}
              onChange={(e) => setStandardProtocolName(e.target.value)}
            />
          
            <CFormInput
              className="mb-3"
              type="text"
              placeholder="°C °F "
              label="Standard Protocol Id"
              value={StandardProtocolId}
              onChange={(e) => setStandardProtocolId(e.target.value)}
            />
           
            <CFormInput
              className="mb-3"
              type="text"
              label="Standard Protocol Description"
              value={StandardProtocolDescription}
              placeholder=" "
              onChange={(e) => setsetStandardProtocolDescription(e.target.value)}
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
  
  const columns = [
    { header: <input type="checkbox" onChange={handleSelectAll} />, accessor: "checkbox" },
    { header: "SrNo.", accessor: "sno" },
    { header: "Standard Protocol Name", accessor: "StandardProtocolName" },
    { header: "Standard Protocol Id", accessor: "StandardProtocolId" },
    { header: "Standard Protocol Description", accessor: "StandardProtocolDescription" },
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

  const openModal = () => {
    setIsModalOpen(true);
  };

  const handleDelete = async (item) => {
    try {
      const response = await axios.delete(
        `${BASE_URL}/delete-lims/sMStandardProtocol/${item.uniqueId}`
      );
      if (response.status === 200) {
        const newData = data.filter((d) => d.uniqueId !== item.uniqueId);
        setData(newData);
        toast.success("Data deleted successfully");
        fetchData();
      } else {
        console.error("Failed to delete standard protocol:", response.statusText);
      }
    } catch (error) {
      console.error("Error deleting standard protocol:", error);
    }
  };

  

  const handleAdd = async (newStandardProtocol) => {
    try {
      const response = await axios.post(
        `https://limsapi.vidyagxp.com/manage-lims/add/sMStandardProtocol`,
        {
          ...newStandardProtocol,
          addDate: new Date().toISOString().split("T")[0],
          status: newStandardProtocol.status || "Active",
        }
      );

      if (response.status === 200) {
        toast.success("Standard protocol added successfully.");
        
        // Instead of waiting for a fetchData call, immediately update the state
        setData((prevData) => [
          ...prevData,
          {
            sno: prevData.length + 1, // Add new serial number
            ...newStandardProtocol,   // Spread new protocol data
            uniqueId: response.data.uniqueId, // Ensure uniqueId from response is added
            addDate: new Date().toISOString().split("T")[0], // Add current date
          },
        ]);

        setIsModalOpen(false); // Close the modal after updating the state
      } else {
        toast.error("Failed to add standard protocol.");
      }
    } catch (error) {
      toast.error(
        "Error adding standard protocol: " + (error.response?.data || error.message)
      );
    }
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchData();
  }, []);
 
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
            <CModalTitle>Update Condition</CModalTitle>
          </CModalHeader>
          <CModalBody>
            <CFormInput
              className="mb-3"
              type="text"
              label="Standard Protocol Name"
              placeholder="°C °F "  
              name="StandardProtocolName"
              value={formData?.StandardProtocolName || ""}
              onChange={handleChange}
            />
             <CFormInput
              className="mb-3"
              type="text"
              label="Standard Protocol Id"     
              placeholder=" "
              name="StandardProtocolId"
              value={formData?.StandardProtocolId}
              onChange={handleChange}
            />
            <CFormInput
              className="mb-3"
              type="text"
              label="Standard Protocol Description"
              name="StandardProtocolDescription" 
              placeholder=" "
              value={formData?.StandardProtocolDescription || ""}
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


  // ... (keep StatusModal and EditModal components)

  return (
    <>
      <LaunchQMS />
      <div className="m-5 mt-3">
        <div className="main-head">
          <h4 className="fw-bold">Standard Protocol</h4>
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
              fileName="Standard_Protocol.pdf"
              title="Standard Protocol Data"
            />
            <ATMButton text="Import" color="pink" onClick={handleOpenModals} />
            <ATMButton
              text="Add Standard Protocol"
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

export default StandardProtocol;