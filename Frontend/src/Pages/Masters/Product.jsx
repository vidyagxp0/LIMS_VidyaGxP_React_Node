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
import axios from "axios";
import LaunchQMS from "../../components/ReusableButtons/LaunchQMS";

const initialData = JSON.parse(localStorage.getItem("product")) || "";

const fields = [
  { label: "S.No", key: "sno" },
  { label: "Product Name", key: "productName" },
  { label: "Unique Code", key: "uniqueCode" },
  { label: "Generic Name", key: "genericName" },
  { label: "Re-Testing Period ", key: "reTestingPeriod" },
  { label: "Status", key: "status" },
];

function Product() {
  // const [data, setData] = useState(initialData);
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
          `http://localhost:9000/get-all-lims/mmasterProduct`
        );
        const fetchedData = response?.data[0]?.mmasterProduct || [];

        const updatedData = fetchedData.map((item, index) => ({
          ...item,
          sno: item?.sno || index + 1,
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
    { header: "Unique Code", accessor: "uniqueCode" },
    { header: "Product Name", accessor: "productName" },
    { header: "Generic Name", accessor: "genericName" },
    { header: "Re-Testing Period", accessor: "reTestingPeriod" },
    { header: "Add Date", accessor: "addDate" },
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
      uniqueCode: item["Unique Code"] || "",
      productName: item["Product Name"] || "",
      genericName: item["Generic Name"] || "",
      reTestingPeriod: item["Re-Testing Period"] || "",
      addDate: item["Add Date"] || "",
      status: item["Status"] || "",
    }));

    const concatenatedData = [...updatedData];
    setData(concatenatedData);
    setIsModalsOpen(false);
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
        `http://localhost:9000/delete-lims/mmasterProduct/${item.uniqueId}`
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
  
  
  

  const handleStatusUpdate = (testPlan, newStatus) => {
    const updatedData = data.map((item) =>
      item.testPlan === testPlan ? { ...item, status: newStatus } : item
    );
    setData(updatedData);
  };

  const StatusModal = ({ visible, closeModal, onAdd, addRow }) => {
    const [productName, setProductName] = useState("");
    const [uniqueCode, setUniqueCode] = useState("");
    const [genericName, setGenericName] = useState("");
    const [reTestingPeriod, setReTestingPeriod] = useState("");
    const handleInputChange = (e) => {
      const value = parseInt(e.target.value, 10);
      if (!isNaN(value) && value >= 0) {
        setInputValue(value);
      }
    };

    const handleAdd = async () => {
      const currentDate = new Date().toISOString().split("T")[0];
      const newCondition = {
        uniqueCode: uniqueCode,
        productName: productName,
        genericName: genericName,
        reTestingPeriod: reTestingPeriod,
        addDate: currentDate,
        status: "Active",
        action: [],
      };

      try {
        const response = await axios.post(
          "http://localhost:9000/manage-lims/add/mmasterProduct",
          newCondition
        );

        if (response.status === 200 || response.status === 201) {
          console.log("Product added successfully:", response.data.updatedLIMS.
            mmasterProduct
            );
          closeModal();
          onAdd(response.data);
        } else {
          console.error("Failed to add product:", response.statusText);
        }
      } catch (error) {
        console.error("Error adding product:", error);
      }
    };

    return (
      <CModal alignment="center" visible={visible} onClose={closeModal}>
        <CModalHeader>
          <CModalTitle>Add Product/Material</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CFormInput
            className="mb-3"
            type="text"
            label="Name"
            placeholder="Product Name"
            name="productName"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Unique Code"
            placeholder="Product Code "
            name="uniqueCode"
            value={uniqueCode}
            onChange={(e) => setUniqueCode(e.target.value)}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Generic Name"
            placeholder="Generic Name"
            name="genericName"
            value={genericName}
            onChange={(e) => setGenericName(e.target.value)}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Re-testing Period"
            placeholder="Re-testing Period "
            name="reTestingPeriod"
            value={reTestingPeriod}
            onChange={(e) => setReTestingPeriod(e.target.value)}
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
        `http://localhost:9000/manage-lims/update/mmasterProduct/${updatedData.uniqueId}`,
        updatedData
      );
      if (response.status === 200) {
        const newData = data.map((item) =>
          item.sno === updatedData.sno ? updatedData : item
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
    const [formData, setFormData] = useState(data);

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

    const handleInputChange = (e) => {
      const value = parseInt(e.target.value, 10);
      if (!isNaN(value) && value >= 0) {
        setInputValue(value);
      }
    };

    return (
      <CModal alignment="center" visible={visible} onClose={closeModal}>
        <CModalHeader>
          <CModalTitle>Add Product/Material</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CFormInput
            className="mb-3"
            type="text"
            label="Name"
            placeholder="Product Name"
            name="productName"
            value={formData?.productName || ""}
            onChange={handleChange}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Unique Code"
            placeholder="Product Code "
            name="uniqueCode"
            value={formData?.uniqueCode || ""}
            onChange={handleChange}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Generic Name"
            placeholder="Generic Name"
            name="genericName"
            value={formData?.genericName || ""}
            onChange={handleChange}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Re-testing Period"
            placeholder="Re-testing Period "
            name="reTestingPeriod"
            value={formData?.reTestingPeriod || ""}
            onChange={handleChange}
          />
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
          <h4 className="fw-bold">Master/Product</h4>
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
            <ATMButton text="Add Master/Product" color="blue" onClick={openModal} />
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
          onAdd={onAdd}
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

export default Product;
