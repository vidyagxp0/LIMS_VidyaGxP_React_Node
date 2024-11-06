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
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "../../Pages/StorageCondition/StorageCondition.css";
import Dropdown from "../../components/ATM components/Dropdown/Dropdown";
import SearchBar from "../../components/ATM components/SearchBar/SearchBar";
import ATMButton from "../../components/ATM components/Button/ATMButton";
import Table from "../../components/ATM components/Table/Table";
import ViewModal from "../Modals/ViewModal";
import ImportModal from "../Modals/importModal";
import PDFDownload from "../PDFComponent/PDFDownload ";
import LaunchQMS from "../../components/ReusableButtons/LaunchQMS";

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
  const [editModalData, setEditModalData] = useState(null)
  
  
  
  const fetchData =  async()=>{
      try{
       const response = await axios.get(`http://localhost:9000/get-all-lims/sMSampleAcceptanceTemplate`); 
       const fetchedData = response?.data[0]?.sMSampleAcceptanceTemplate || [];

       const updatedData = fetchedData.map((item, index) => ({  
        ...item,
        sno: index + 1,
        checkbox: false,
      }));
      setData(updatedData);
      }catch(error){
        console.log(error);
      }
  }
  
  useEffect(() => {
    fetchData();
  }, []);
  
  
  
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
    setData((prevData)=>[
      ...prevData,
      {...newCondition, sno: prevData.length + 1, checkbox: false,status:nextStatus},
    ])
    setLastStatus(nextStatus)
    setIsModalOpen(false);
  }

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
          <CButton color="primary" onClick={handleAdd}>Submit</CButton>
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
  
  const handleModalsubmit = async (newproduct) => {
    try {
      const response = await axios.post(`${BASE_URL}/manage-lims/bulk-add/sMSampleAcceptanceTemplate`, {
        ...newproduct,
        status: newproduct.status || "INITIATED",
      });
      if (response.status === 200) {
        toast.success("Sample Acceptance Template added successfully");
        setIsModalsOpen(false);
        // fetchSampleAcceptanceTemplateData();
      } else {
        toast.error("Failed to add Sample Acceptance Template");
      }
    } catch (error) {
      toast.error("Error adding Sample Acceptance Template: " + (error.response?.data || error.message));
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

  const handleDelete = (item) => {
    const newData = data.filter((d) => d !== item);
    setData(newData);
    console.log("Deleted item:", item);
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
        <ViewModal visible={viewModalData} closeModal={closeViewModal} />
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




