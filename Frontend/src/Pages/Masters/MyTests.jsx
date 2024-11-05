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
import { BASE_URL } from "../../config.json";

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
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);

  useEffect(() => {
    fetchProductData();
  }, []);

  const fetchProductData = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/get-all-lims/mMyTest`);
      if (response.data && Array.isArray(response.data)) {
        const formattedData = response.data.flatMap(
          (item) =>
            item?.mMyTest?.map((condition,index) => ({
              checkbox: false,
              sno:index+1,
              ARNo: condition.ARNo || "-",
              productName: condition.productName || "-",
              sampleIncharge: condition.sampleIncharge || "-",
              assignedOn: condition.assignedOn || "-",
              sampleType: condition.sampleType || "-",
              status: condition.status || "Active",
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
  const filteredData = Array.isArray(data)
    ? data.filter((row) => {
        console.log("Row:", row);
        const productName = row.productName || "";
        return (
          productName.toLowerCase().includes(searchQuery.toLowerCase()) &&
          (statusFilter === "All" || row.status === statusFilter)
        );
      })
    : [];
  const onAdd = (newRow) => {
    const updatedData = [...data, { ...newRow, sno: data.length + 1 }];
    setData(updatedData);
  };
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
    setIsModalOpen(false);
  };

  const handleDelete = async (item) => {
    try {
      const response = await axios.delete(
        `${BASE_URL}/delete-lims/mMyTest/${item.sno}`
      );
      if (response.status === 200) {
        setData((prevData) => prevData.filter((d) => d.sno !== item.sno));
        toast.success("Product deleted successfully.");
       fetchProductData()
      } else {
        toast.error("Failed to delete Product.");
      }
    } catch (error) {
      toast.error(
        "Error deleting Product: " + (error.response?.data || error.message)
      );
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

  const handleAdd = async (newProduct) => {
    try {
      const response = await axios.post(`${BASE_URL}/manage-lims/add/mMyTest`, {
        ...newProduct,
        addDate: new Date().toISOString().split("T")[0],
        status: newProduct.status || "Active",
      });
      if (response.status === 200) {
        toast.success("Product added successfully.");
        fetchProductData();
        setIsModalOpen(false);
      } else {
        toast.error("Failed to add Product.");
      }
    } catch (error) {
      toast.error(
        "Error adding product: " + (error.response?.data || error.message)
      );
    }
  };

  const StatusModal = ({ visible, closeModal, onAdd }) => {
    const [ARNo, setARNo] = useState("");
    const [productName, setProductName] = useState("");
    const [sampleIncharge, setSampleIncharge] = useState("");
    const [assignedOn, setAssignedOn] = useState("");
    const [sampleType, setSampleType] = useState("");

    const handleProduct = () => {
      const currentDate = new Date().toISOString().split("T")[0];
      const newCondition = {
        ARNo,
        productName,
        sampleIncharge,
        assignedOn: currentDate,
        sampleType,
        status: "active",
      };
      onAdd(newCondition);
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
            value={ARNo}
            onChange={(e) => setARNo(e.target.value)}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Product Name"
            placeholder="Product Name"
            name="productName"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Sample Incharge"
            placeholder="Sample Incharge"
            name="sampleIncharge"
            value={sampleIncharge}
            onChange={(e) => setSampleIncharge(e.target.value)}
          />
          <CFormInput
            className="mb-3"
            type="date"
            onFocus={(e) => e.target.showPicker()}
            label="Assigned On"
            name="assignedOn"
            value={assignedOn}
            onChange={(e) => setAssignedOn(e.target.value)}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Sample Type"
            placeholder="Sample Type"
            name="sampleType"
            value={sampleType}
            onChange={(e) => setSampleType(e.target.value)}
          />
        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={closeModal}>
            Back
          </CButton>
          <CButton color="primary" onClick={handleProduct}>
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
        `${BASE_URL}/manage-lims/update/mMyTest/${updatedData.sno}`,
        updatedData
      );
      if (response.status === 200) {
        setData((prevData) =>
          prevData.map((item) =>
            item.sno === updatedData.sno ? updatedData : item
          )
        );
        toast.success("Product updated successfully.");
        setEditModalData(null);
      } else {
        toast.error("Failed to update Product.");
      }
    } catch (error) {
      toast.error(
        "Error updating Product: " + (error.response?.data || error.message)
      );
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
            onFocus={(e) => e.target.showPicker()}
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
          onAdd={handleAdd}
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
