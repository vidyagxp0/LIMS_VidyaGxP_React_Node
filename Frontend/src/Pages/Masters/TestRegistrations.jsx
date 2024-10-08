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

const staticData = [
  {
    sno: 1,
    productName: "Product 1",
    SpecificationID: "Spec 1",
    testName: "Test 1",
    testCode: "TC 1",
    method: "Method 1",
    category: "Category 1",
    testType: "Type 1",
    status: "INITIATED",
  },

  {
    sno: 2,
    productName: "Product 2",
    SpecificationID: "Spec 2",
    testName: "Test 2",
    testCode: "TC 2",
    method: "Method 2",
    category: "Category 2",
    testType: "Type ",
    status: "INITIATED",
  },
];

const initialData = JSON.parse(localStorage.getItem("testregistration")) || "";

const fields = [
  { label: "Product Name", key: "productName" },
  { label: "Specification ID", key: "SpecificationID" },

  { label: "Test Name", key: "testName" },
  { label: "Test Code", key: "testCode" },
  { label: "Method", key: "method" },
  { label: "Category", key: "category" },
  { label: "Test type", key: "testType" },
  { label: "Status", key: "status" },
];

function Testregistration() {
  // const [data, setData] = useState(initialData);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [viewModalData, setViewModalData] = useState(null);
  const [isModalsOpen, setIsModalsOpen] = useState(false);
  const [lastStatus, setLastStatus] = useState("INITIATED");
  const [editModalData, setEditModalData] = useState(null);

  // Combine static data with dynamic data from local storage
  const [data, setData] = useState(() => {
    return [...staticData, ...initialData]; // Merge static data with local storage data
  });

  useEffect(() => {
    // Store dynamic data back to local storage
    localStorage.setItem(
      "testregistration",
      JSON.stringify(data.filter((row) => !staticData.includes(row)))
    );
  }, [data]);
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
        console.log("Row:", row); // Log each row to see its structure
        const productName = row.productName || "";
        return (
          productName.toLowerCase().includes(searchQuery.toLowerCase()) &&
          (statusFilter === "All" || row.status === statusFilter)
        );
      })
    : [];
  // Fallback to an empty array if data is not an array

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
    { header: "Sr.no.", accessor: "sno" },
    { header: "Specification ID", accessor: "SpecificationID" },
    { header: "Product Name", accessor: "productName" },
    { header: "Test Name", accessor: "testName" },
    { header: "Test Code", accessor: "testCode" },
    { header: "Method", accessor: "method" },
    { header: "Category", accessor: "category" },
    { header: "Test type", accessor: "testType" },
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

  const handleDelete = (item) => {
    const newData = data.filter((d) => d !== item);
    setData(newData);
    console.log("Deleted item:", item);
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
    const [SpecificationID, setSpecificationID] = useState("");
    const [productName, setproductName] = useState("");
    const [testName, settestName] = useState("");
    const [testCode, settestCode] = useState("");
    const [method, setmethod] = useState("");
    const [category, setcategory] = useState("");
    const [testType, settestType] = useState("");
    const handleInputChange = (e) => {
      const value = parseInt(e.target.value, 10);
      if (!isNaN(value) && value >= 0) {
        setInputValue(value);
      }
    };

    const handleAdd = () => {
      const newCondition = {
        SpecificationID: SpecificationID,
        productName: productName,
        testName: testName,
        testCode: testCode,
        method: method,
        category: category,
        testType: testType,
        action: [],
      };
      closeModal();
      onAdd(newCondition);
    };

    return (
      <CModal alignment="center" visible={visible} onClose={closeModal}>
        <CModalHeader>
          <CModalTitle>Test Registration</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CFormInput
            className="mb-3"
            type="text"
            label="Specification ID"
            placeholder="Specification ID"
            name="SpecificationID"
            value={SpecificationID}
            onChange={(e) => setSpecificationID(e.target.value)}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Product Name"
            placeholder="Product Name "
            name="productName"
            value={productName}
            onChange={(e) => setproductName(e.target.value)}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Test Name"
            placeholder="Test Name"
            name="testName"
            value={testName}
            onChange={(e) => settestName(e.target.value)}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Test Code"
            placeholder="Test Code "
            name="testCode"
            value={testCode}
            onChange={(e) => settestCode(e.target.value)}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Method"
            placeholder="Method "
            name="method"
            value={method}
            onChange={(e) => setmethod(e.target.value)}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label=" Category"
            placeholder="Category"
            name="category"
            value={category}
            onChange={(e) => setcategory(e.target.value)}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label=" Test type"
            placeholder="Test type"
            name="testType"
            value={testType}
            onChange={(e) => settestType(e.target.value)}
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
  const handleEditSave = (updatedData) => {
    const newData = data.map((item) =>
      item.sno === updatedData.sno ? updatedData : item
    );
    setData(newData);
    setEditModalData(null);
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
          <CModalTitle>Test Registrion</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CFormInput
            className="mb-3"
            type="text"
            label="Specification ID"
            placeholder="Specification ID"
            name="SpecificationID"
            value={formData?.SpecificationID || ""}
            onChange={handleChange}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Product Name"
            placeholder="Product Name "
            name="productName"
            value={formData?.productName || ""}
            onChange={handleChange}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Test Name"
            placeholder="Test Name"
            name="testName"
            value={formData?.testName || ""}
            onChange={handleChange}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Test Code"
            placeholder="Test Code "
            name="testCode"
            value={formData?.testCode || ""}
            onChange={handleChange}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Method"
            placeholder="Method "
            name="method"
            value={formData?.method || ""}
            onChange={handleChange}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label=" Category"
            placeholder="Category"
            name="category"
            value={formData?.category || ""}
            onChange={handleChange}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label=" Test type"
            placeholder="Test type"
            name="testType"
            value={formData?.testType || ""}
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
          <h4 className="fw-bold">Test Registrations</h4>
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
            <ATMButton
              text="Add Test Registrion"
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

      {isModalOpen && (
        <StatusModal
          visible={isModalOpen}
          closeModal={closeModal}
          onAdd={addNewStorageCondition}
        />
      )}
      {viewModalData && (
        <ReusableModal
          visible={viewModalData !== null}
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

export default Testregistration;
