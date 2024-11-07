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
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { Link } from "react-router-dom";
// import { FaArrowRight } from "react-icons/fa";
import "../../Pages/StorageCondition/StorageCondition.css";
import Dropdown from "../../components/ATM components/Dropdown/Dropdown";
import SearchBar from "../../components/ATM components/SearchBar/SearchBar";
import ATMButton from "../../components/ATM components/Button/ATMButton";
import Table from "../../components/ATM components/Table/Table";
import ViewModal from "../Modals/ViewModal";
import ImportModal from "../Modals/importModal";
import PDFDownload from "../PDFComponent/PDFDownload ";
import LaunchQMS from "../../components/ReusableButtons/LaunchQMS";
import {toast} from "react-toastify"
import { BASE_URL } from "../../config.json";
import ReusableModal from "../Modals/ResusableModal";

// const initialData = [
//   {
//     checkbox: false,
//     sno: 1,
//     name: "Name 1",
//     uniqueCode: "UC001",
//     NoOfCheckItems: 10,
//     updatedAt: "2024-01-01",
//     status: "Active",
//   },
//   {
//     checkbox: false,
//     sno: 2,
//     name: "Name 2",
//     uniqueCode: "UC002",
//     NoOfCheckItems: 15,
//     updatedAt: "2024-01-02",
//     status: "Inactive",
//   },
// ];



const fields = [
  { label: "Condition Name", key: "name" }, // Updated to match your format
  { label: "Unique Code", key: "uniqueCode" }, // Updated to match your format
  { label: "Number of Check Items", key: "NoOfCheckItems" }, // Updated to match your format
  { label: "Updated At", key: "updatedAt" }, // Updated to match your format
  { label: "Actions", key: "action" }, // Updated to match your format
];
function SampleAcceptanceTemplate() {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [viewModalData, setViewModalData] = useState(null);
  const [isModalsOpen, setIsModalsOpen] = useState(false);
  const [lastStatus, setLastStatus] = useState("Active");
  const [editModalData, setEditModalData] = useState(null)
  
  
  
 
  
  
  
  const handleOpenModals = () => {
    setIsModalsOpen(true);
  };

  const handleCloseModals = () => {
    setIsModalsOpen(false);
  };

  const handleSelectAll = (e) => {
    const checked = e.target.checked;
    const newData = data.map((row) => ({ ...row, checkbox: checked }));
    setData(newData);
  };

  const filteredData = data.filter((row) => {
    return (
      (row.uniqueCode && row.uniqueCode.toLowerCase().includes(searchQuery.toLowerCase())) && // Check if uniqueCode is defined
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

  // const addNewStorageCondition = (newCondition) => {
  //   const nextStatus = lastStatus === "Active" ? "Inactive" : "Active";
  //   setData((prevData)=>[
  //     ...prevData,
  //     {...newCondition, sno: prevData.length + 1, checkbox: false,status:nextStatus},
  //   ])
  //   setLastStatus(nextStatus)
  //   setIsModalOpen(false);
  // }

  const StatusModal = ({visible , closeModal,onAdd}) => {
    const [numOfCheckItems, setNumOfCheckItems] = useState(0);
    const [checkItems, setCheckItems] = useState([]);
    const [name , setName] = useState("");
    const [uniqueCode , setUniqueCode]=useState("")

    const handleAdd = ()=>{
      const newCondition = {
        name:name,
        uniqueCode:uniqueCode,
        NoOfCheckItems:numOfCheckItems,
        updatedAt:"24-08-2020",
        action:[],
      }
      onAdd(newCondition)
    }


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
      <CModal
        alignment="center"
        visible={visible}
        onClose={closeModal}
      >
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
            onChange={(e)=>setName(e.target.value)}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Unique Code"
            placeholder="Unique Code"
            value={uniqueCode}
            onChange={(e)=>setUniqueCode(e.target.value)}
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
  


  const addNewStorageCondition = async (newCondition) => {
    const nextStatus = lastStatus === "Active" ? "Inactive" : "Active";
    try {
      const response = await axios.post(`${BASE_URL}/manage-lims/add/sMSampleAcceptanceTemplate`, {
        ...newCondition,
        status: nextStatus,
      });
      if (response.status === 200) {
        toast.success("Condition added successfully");
        fetchData(); // Refresh data after adding
        setIsModalOpen(false);
      } else {
        toast.error("Failed to add condition");
      }
    } catch (error) {
      console.error("Error adding new condition:", error.response ? error.response.data : error.message);
      toast.error("Error adding condition: " );
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
        `${BASE_URL}/manage-lims/update/sMSampleAcceptanceTemplate/${viewModalData.uniqueId}`,
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
        // fetchStorageCondition(); // Refresh the data after update
      }
    } catch (error) {
      console.error("Error updating status:", error);
      toast.error("Failed to update status");
    }
  };  
  
  
    // Call fetchData when the component mounts
    useEffect(() => {
      fetchData();
    }, []);
    
  
  const fetchData = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/get-all-lims/sMSampleAcceptanceTemplate`);
      const fetchedData = response?.data[0]?.sMSampleAcceptanceTemplate || [];
  
      const updatedData = fetchedData.map((item, index) => ({
        ...item,
        sno: index + 1,
        checkbox: false,
      }));
      setData(updatedData);
    } catch (error) {
      console.log(error);
    }
  };
  

  
  
  
  const handleDelete = async (item) => {
    try {
      const response = await axios.delete(
        `${BASE_URL}/delete-lims/sMSampleAcceptanceTemplate/${item.uniqueId}`
      );

      if (response.status === 200) {
        const newData = data.filter((d) => d.uniqueId !== item.uniqueId);
        setData(newData);
        toast.success(" deleted successfully");

        console.log("Deleted item:", item);
      }
      fetchData();
    } catch (error) {
      console.error("Error deleting storage condition:", error);
    }
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
  const handleEditSave = async (updatedData) => {
    try {
      const response = await axios.put(
        `${BASE_URL}/manage-lims/update/sMSampleAcceptanceTemplate/${updatedData.uniqueId}`,
        updatedData // Sending the updated data
      );

      if (response.status === 200) {
        const newData = data.map((item) =>
          item.uniqueId === updatedData.uniqueId
            ? { ...item, ...updatedData }
            : item
        );

        setData(newData);
        closeEditModal();
        fetchData();
        toast.success(" updated successfully");
      }
      else {
        console.error("Failed to update storage condition:", response.statusText);
        toast.error("Failed to update storage condition");
      }
    } catch (error) {
      console.error("Error updating ", error);
      toast.error("Failed to update");
    } 
    // finally {
    //   setEditModalData(null);
    // }
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
      <CModal
        alignment="center"
        visible={visible}
        onClose={closeModal}
      >
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
            value={formData?.name||""}
            onChange={handleChange}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Unique Code"
            name="uniqueCode"
            placeholder="Unique Code"
            value={formData?.uniqueCode||""}
            onChange={handleChange}
          />
          <CFormInput
            className="mb-3"
            type="number"
            label="No. Of Check Items"
            name="NoOfCheckItems"
            placeholder="No. of Check Items"
            value={formData?.numOfCheckItems||""}
            onChange={handleNumOfCheckItemsChange }
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
          <CButton color="primary" onClick={handleSave}>Submit</CButton>
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
          <PDFDownload columns={columns} data={filteredData} fileName="Sample_Acceptance_Template.pdf" title="Sample Acceptance Template Data" />
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
          onCheckboxChange={handleCheckboxChange}
          onViewDetails={onViewDetails}
          onDelete={handleDelete}
          openEditModal={openEditModal}
        />
      </div>
      {isModalsOpen && (
        <ImportModal
          initialData={initialData}
          isOpen={isModalsOpen}
          onClose={handleCloseModals}
          columns={columns}
          onDataUpload={handleExcelDataUpload}
        />
      )}
      {isModalOpen && (
        <StatusModal visible={isModalOpen} closeModal={closeModal} onAdd={addNewStorageCondition}/>
      )}
      {viewModalData && (
       
       <ReusableModal
          visible={Boolean(viewModalData)}
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
    </>
  );
}
export default SampleAcceptanceTemplate;




