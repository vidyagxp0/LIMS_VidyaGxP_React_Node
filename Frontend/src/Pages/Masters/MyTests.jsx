import { useEffect, useState } from "react";
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
import SearchBar from "../../components/ATM components/SearchBar/SearchBar";
import ATMButton from "../../components/ATM components/Button/ATMButton";
import Table from "../../components/ATM components/Table/Table";
import ViewModal from "../Modals/ViewModal";
import ImportModal from "../Modals/importModal";
import PDFDownload from "../PDFComponent/PDFDownload ";
import ReusableModal from "../Modals/ResusableModal";
import LaunchQMS from "../../components/ReusableButtons/LaunchQMS";
import Specifications from "./TestCategories.jsx";
import axios from "axios";
import { toast } from "react-toastify";



// Initial dynamic data from local storage
const initialData = JSON.parse(localStorage.getItem("mytest")) || [];

const fields = [
  { label: "A.R No.", key: "ARNo" },
  { label: "Product Name", key: "productName" },
  { label: "Sample Incharge", key: "sampleIncharge" },
  { label: "Assigned On", key: "assignedOn" },
  { label: "Sample Type", key: "sampleType" },
  { label: "Status", key: "status" },
];

function Mytests() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [viewModalData, setViewModalData] = useState(null);
  const [isModalsOpen, setIsModalsOpen] = useState(false);
  const [lastStatus, setLastStatus] = useState("INITIATED");
  const [editModalData, setEditModalData] = useState(null);

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:9000/get-all-lims/mMyTest`
        );
        const fetchedData = response?.data[0]?.mMyTest || [];

        const updatedData = fetchedData.map((item, index) => ({
          ...item,
          sno: item?.uniqueId || index + 1,
        }));

        setData(updatedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

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

  console.log("Data:", data);
  const filteredData = data
  .filter((row) => {
    return (
      row?.productName?.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (statusFilter === "All" || row.status === statusFilter)
    );
  })
  .map((row, index) => ({ ...row, sno: index + 1 })); // Assign sno based on filtered data

const onAdd = (newRow) => {
  const updatedData = [...data, { ...newRow, sno: data.length + 1 }];
  setData(updatedData);
};
  const onViewDetails = (rowData) => {
    setViewModalData(rowData);
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
    { header: "A.R No.", accessor: "ARNo" },
    { header: "Product Name", accessor: "productName" },
    { header: "Sample Incharge", accessor: "sampleIncharge" },
    { header: "Assigned On", accessor: "assignedOn" },
    { header: "Sample Type", accessor: "sampleType" },
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
          <FontAwesomeIcon icon={faTrashCan} className="cursor-pointer" />
        </>
      ),
    },
  ];
  const handleExcelDataUpload = (excelData) => {
    const updatedData = excelData.map((item, index) => ({
      checkbox: false,
      sno: index + 1,
      ARNo: item["A.R No."] || "",
      productName: item["Product Name"] || "",
      sampleIncharge: item["Sample Incharge"] || "",
      assignedOn: item["Assigned On"] || "",
      sampleType: item["Sample Type"] || "",
      status: item["Status"] || "",
    }));

    const concatenatedData = [...updatedData];
    setData(concatenatedData); // Update data state with parsed Excel data
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

  const handleDelete = async (item) => {
   
    try {
      const response = await axios.delete(
        `http://localhost:9000/delete-lims/mMyTest/${item.uniqueId}`
      );
      if (response?.status === 200) {
        const newData = data.filter((d) => d.sno !== item.uniqueId);
        setData(newData);
        console.log("Product deleted successfully:", response.data);
      } else {
        console.error("Failed to delete product:", response.statusText);
      }
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };
  

  const addNewStorageCondition = (newCondition) => {
    const nextStatus = lastStatus === "DROPPED" ? "INITIATED" : "DROPPED";
    setData((prevData) => [
      ...prevData,
      {
        ...newCondition,
        sno: prevData.length + 1,
        checkbox: false,
        status: nextStatus,
      },
    ]);
    setData(newData);
    setLastStatus(nextStatus);
    setIsModalOpen(false);
  };

  const handleStatusUpdate = (testPlan, newStatus) => {
    const updatedData = data.map((item) =>
      item.testPlan === testPlan ? { ...item, status: newStatus } : item
    );
    setData(updatedData);
  };
  const StatusModal = ({ visible, closeModal, onAdd }) => {
    const [myTestData, setMyTestData] = useState({
      ARNo: "",
      productName: "",
      sampleIncharge: "",
      assignedOn: "",
      sampleType: "",
    });
  
    const handleAdd = async () => {
      const newCondition = { ...myTestData };
  
      try {
        const response = await axios.post(
          "http://localhost:9000/manage-lims/add/mMyTest",
          newCondition
        );
  
        if (response.status === 200 || response.status === 201) {
          console.log("Product added successfully:", response?.data?.updatedLIMS?.mmasterProduct);
          closeModal();
          onAdd(response.data);
        } else {
          console.error("Failed to add product:", response.statusText);
        }
      } catch (error) {
        console.error("Error adding product:", error);
      }
    };
  
    const handleInputChange = (field, value) => {
      const updatedData = { ...myTestData, [field]: value };
      setMyTestData(updatedData);
    };
  
    return (
      <CModal alignment="center" visible={visible} onClose={closeModal}>
        <CModalHeader>
          <CModalTitle>Add New Product</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CFormInput
            className="mb-3"
            type="text"
            label="A.R NO."
            placeholder="A.R NO."
            name="ARNo"
            value={myTestData.ARNo}
            onChange={(e) => handleInputChange("ARNo", e.target.value)}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Product Name"
            placeholder="Product Name"
            name="productName"
            value={myTestData.productName}
            onChange={(e) => handleInputChange("productName", e.target.value)}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Sample Incharge"
            placeholder="Sample Incharge"
            name="sampleIncharge"
            value={myTestData.sampleIncharge}
            onChange={(e) => handleInputChange("sampleIncharge", e.target.value)}
          />
          <CFormInput
            className="mb-3"
            type="date"
            label="Assigned On"
            name="assignedOn"
            value={myTestData.assignedOn}
            onChange={(e) => handleInputChange("assignedOn", e.target.value)}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Sample Type"
            placeholder="Sample Type"
            name="sampleType"
            value={myTestData.sampleType}
            onChange={(e) => handleInputChange("sampleType", e.target.value)}
          />
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

  const openEditModal = (rowData) => {
    setEditModalData(rowData);
  };

  const closeEditModal = () => {
    setEditModalData(null);
  };
  const handleEditSave = async (updatedData) => {
    try {
      const response = await axios.put(
        `http://localhost:9000/manage-lims/update/mMyTest/${updatedData.uniqueId}`,
        updatedData
      );
      if (response.status === 200) {
        const newData = data.map((item) =>
          item.uniqueId === updatedData.uniqueId ? updatedData : item
        );
        setData(newData);
        setEditModalData(null);
        console.log("Product updated successfully:", response.data);
      } else {
        console.error("Failed to update product:", response.statusText);
      }
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  const EditModal = ({ visible, closeModal, data, onSave }) => {
    const [formData, setFormData] = useState({
      ARNo: "",
      productName: "",
      sampleIncharge: "",
      assignedOn: "",
      sampleType: "",
    });
  
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
          <CModalTitle>Edit Test</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CFormInput
            className="mb-3"
            type="text"
            label="A.R NO."
            placeholder="A.R NO."
            name="ARNo"
            value={formData.ARNo}
            onChange={handleChange}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Product Name"
            placeholder="Product Name"
            name="productName"
            value={formData.productName}
            onChange={handleChange}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Sample Incharge"
            placeholder="Sample Incharge"
            name="sampleIncharge"
            value={formData.sampleIncharge}
            onChange={handleChange}
          />
          <CFormInput
            className="mb-3"
            type="date"
            label="Assigned On"
            name="assignedOn"
            value={formData.assignedOn}
            onChange={handleChange}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Sample Type"
            placeholder="Sample Type"
            name="sampleType"
            value={formData.sampleType}
            onChange={handleChange}
          />
        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={closeModal}>
            Back
          </CButton>
          <CButton color="primary" onClick={handleSave}>
            Save
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
          <h4 className="fw-bold">My Tests</h4>
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
              fileName="Master_Product.pdf"
              title="Master Product Data"
            />
            <ATMButton text="Import" color="pink" onClick={handleOpenModals} />
            <ATMButton text="Add My Test" color="blue" onClick={openModal} />
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

      {isModalOpen && (
        <StatusModal
          visible={isModalOpen}
          closeModal={closeModal}
          onAdd={onAdd}
        />
      )}
      {viewModalData && (
        <ReusableModal
          visible={viewModalData !== null}
          closeModal={closeViewModal}
          data={viewModalData}
          fields={fields}
          onAdd={onAdd}
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

export default Mytests;
