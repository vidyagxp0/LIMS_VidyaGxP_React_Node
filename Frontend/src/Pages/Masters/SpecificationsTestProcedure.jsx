import { useEffect, useState } from "react";
import {
  CButton,
  CFormInput,
  CFormSelect,
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
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
import axios from "axios";
import { toast } from "react-toastify";
import { BASE_URL } from "../../config.json";

const initialData = JSON.parse(localStorage.getItem("data")) || "";

const fields = [
  { label: "Product Code", key: "productCode" },
  { label: "Product Name", key: "productName" },
  { label: "Specification ID", key: "specificationID" },
  { label: "Specification Name", key: "specificationName" },
  { label: "Effect From", key: "effectFrom" },
  { label: "Review Date", key: "reviewDate" },
  { label: "Status", key: "status" },
];
function SpecificationsTestProcedure() {
  // const [data, setData] = useState(initialData);
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
      const response = await axios.get(
        `${BASE_URL}/get-all-lims/mStandardTestProcedure`
      );
      if (response.data && Array.isArray(response.data)) {
        const formattedData = response.data.flatMap(
          (item) =>
            item?.mStandardTestProcedure?.map((condition) => ({
              checkbox: false,
              sno: condition.uniqueId,
              productCode: condition.productCode || "No Code",
              productName: condition.productName || "No Name",
              specificationID:
                condition.specificationID || "No Specification ID",
              specificationName:
                condition.specificationName || "No Specification Name",
              effectFrom: condition.effectFrom || " - ",
              reviewDate: condition.reviewDate || " - ",
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

  const handleCloseModals = () => {
    setIsModalsOpen(false);
  };
  const handleSelectAll = (e) => {
    const checked = e.target.checked;
    const newData = data.map((row) => ({ ...row, checkbox: checked }));
    setData(newData);
  };
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
    { header: "Product Code", accessor: "productCode" },
    { header: "Product Name", accessor: "productName" },
    { header: "Specification ID", accessor: "specificationID" },
    { header: "Specification Name", accessor: "specificationName" },
    { header: "Effect From", accessor: "effectFrom" },
    { header: "Review Date", accessor: "reviewDate" },
    { header: "attachment", accessor: "attachment" },
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
        `${BASE_URL}/delete-lims/mStandardTestProcedure/${item.sno}`
      );
      if (response.status === 200) {
        setData((prevData) => prevData.filter((d) => d.sno !== item.sno));
        toast.success("Product deleted successfully.");
      } else {
        toast.error("Failed to delete Product.");
      }
    } catch (error) {
      toast.error(
        "Error deleting Product: " + (error.response?.data || error.message)
      );
    }
  };

  const handleExcelDataUpload = (excelData) => {
    const updatedData = excelData.map((item, index) => ({
      checkbox: false,
      sno: index + 1,
      productCode: item["Product Code"] || "",
      productName: item["Product Name"] || "",
      specificationID: item["Specification ID"] || "",
      specificationName: item["Specification Name"] || "",
      effectFrom: item["Effect From"] || "",
      reviewDate: item["Review Date"] || "",
      attachment: item["Attachment"] || "", // Ensure field name matches your Excel data
      status: item["Status"] || "",
    }));

    // Concatenate the updated data with existing data
    const concatenatedData = [...updatedData];
    setData(concatenatedData);
    setIsModalsOpen(false); // Update data state with parsed Excel data
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
      const response = await axios.post(
        `${BASE_URL}/manage-lims/add/mStandardTestProcedure`,
        {
          ...newProduct,
          addDate: new Date().toISOString().split("T")[0],
          status: newProduct.status || "Active",
        }
      );
      if (response.status === 200) {
        toast.success("Product added successfully.");
        fetchProductData(); // Refresh data after adding
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
    const [specificationData, setSpecificationData] = useState({
      productCode: "",
      productName: "",
      specificationName: "",
      specificationID: "",
      sampleType: "",
      specificationType: "",
      effectFrom: "",
      reviewDate: "",
      supersedes: "",
      standardTestProcedureNo: "",
      document: null,
    });
  
    const materialCode = [
      { label: "PRD-001" },
      { label: "PRD-002" },
      { label: "MAT-001" },
      { label: "MAT-002" },
      { label: "PRD-003" },
      { label: "MAT-003" },
      { label: "PRD-004" },
      { label: "MAT-004" },
      { label: "PRD-005" },
      { label: "MAT-005" },
    ];
  
    const handleProduct = () => {
      const newCondition = {
        ...specificationData,
        status: "active",
      };
      onAdd(newCondition);
      closeModal(); // Close modal after adding specification
    };
  
    const handleInputChange = (e) => {
      const { name, value, files } = e.target;
      setSpecificationData({
        ...specificationData,
        [name]: files ? files[0] : value,
      });
    };
  
    return (
      <CModal alignment="center" visible={visible} onClose={closeModal}>
        <CModalHeader>
          <CModalTitle>Add Specification</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <label className="mb-3" htmlFor="productCode">
            Product/Material Code
          </label>
          <Autocomplete
            className="mb-3"
            disablePortal
            id="combo-box-demo"
            options={materialCode}
            renderInput={(params) => <TextField {...params} label="Product Code" />}
            value={specificationData.productCode}
            onChange={(e, newValue) =>
              setSpecificationData({
                ...specificationData,
                productCode: newValue?.label || "",
              })
            }
          />
  
          <CFormInput
            className="mb-3"
            type="text"
            label="Product Name"
            name="productName"
            placeholder="Product Name"
            value={specificationData.productName}
            onChange={handleInputChange}
          />
  
          <CFormInput
            className="mb-3"
            type="text"
            label="Specification Name"
            name="specificationName"
            placeholder="Specification Name"
            value={specificationData.specificationName}
            onChange={handleInputChange}
          />
  
          <CFormInput
            className="mb-3"
            type="text"
            label="Specification ID"
            name="specificationID"
            placeholder="Specification ID"
            value={specificationData.specificationID}
            onChange={handleInputChange}
          />
  
          <CFormSelect
            className="mb-3"
            label="Sample Type"
            name="sampleType"
            value={specificationData.sampleType}
            onChange={handleInputChange}
            options={[
              { label: "Select Sample Type", value: "" },
              { label: "Raw Material", value: "Raw Material" },
              { label: "HCL", value: "HCL" },
              { label: "Hydrochloric Acid", value: "Hydrochloric Acid" },
              { label: "Petrochemical", value: "Petrochemical" },
              { label: "Initiated Product", value: "Initiated Product" },
              { label: "Semi Finished", value: "Semi Finished" },
              { label: "ABCD", value: "ABCD" },
              { label: "H2SO4", value: "H2SO4" },
              { label: "Micro Media", value: "Micro Media" },
              { label: "FG Template", value: "FG Template" },
            ]}
          />
  
          <CFormSelect
            className="mb-3"
            label="Specification Type"
            name="specificationType"
            value={specificationData.specificationType}
            onChange={handleInputChange}
            options={[
              { label: "Select Specification Type", value: "" },
              { label: "Environment", value: "Environment" },
              { label: "Culture", value: "Culture" },
              { label: "Culture1", value: "Culture1" },
              { label: "Working Standard", value: "Working Standard" },
              { label: "Tentative", value: "Tentative" },
              { label: "Release", value: "Release" },
              { label: "Regulatory", value: "Regulatory" },
              { label: "Raw Material", value: "Raw Material" },
              { label: "Instrument", value: "Instrument" },
              { label: "Shelf Life", value: "Shelf Life" },
            ]}
          />
  
          <CFormInput
            className="mb-3"
            type="date"
            label="Effective From"
            name="effectFrom"
            value={specificationData.effectFrom}
            onChange={handleInputChange}
          />
  
          <CFormInput
            className="mb-3"
            type="date"
            label="Review Date"
            name="reviewDate"
            value={specificationData.reviewDate}
            onChange={handleInputChange}
          />
  
          <CFormInput
            className="mb-3"
            type="text"
            label="Supersedes"
            name="supersedes"
            placeholder="Supersedes"
            value={specificationData.supersedes}
            onChange={handleInputChange}
          />
  
          <CFormInput
            className="mb-3"
            type="text"
            label="Standard Test Procedure No."
            name="standardTestProcedureNo"
            placeholder="Standard Test Procedure No."
            value={specificationData.standardTestProcedureNo}
            onChange={handleInputChange}
          />
  
          <CFormInput
            className="mb-3"
            type="file"
            label="Document"
            name="document"
            onChange={handleInputChange}
          />
        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={closeModal}>
            Back
          </CButton>
          <CButton color="primary" onClick={handleProduct}>
            Add Specifications
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
        `${BASE_URL}/manage-lims/update/mStandardTestProcedure/${updatedData.sno}`,
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
    const materialCode = [
      { label: "PRD-001" },
      { label: "PRD-002" },
      { label: "MAT-001" },
      { label: "MAT-002" },
      { label: "PRD-003" },
      { label: "MAT-003" },
      { label: "PRD-004" },
      { label: "MAT-004" },
      { label: "PRD-005" },
      { label: "MAT-005" },
    ];

    return (
      <CModal alignment="center" visible={visible} onClose={closeModal}>
        <CModalHeader>
          <CModalTitle>Add Specification</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <label className="mb-3" htmlFor="">
            Product/Material Code
          </label>
          <Autocomplete
            className="mb-3"
            disablePortal
            name="productCode"
            id="combo-box-demo"
            options={materialCode}
            renderInput={(params) => <TextField {...params} label="" />}
            value={formData?.productCode || ""}
            onChange={handleChange}
          />

          <CFormInput
            className="mb-3"
            type="text"
            name="productName"
            label="Product Name"
            placeholder="Product Name"
            // disabled
            value={formData?.productName || ""}
            onChange={handleChange}
          />

          <CFormInput
            className="mb-3"
            type="text"
            name="specificationName"
            label="Specification Name"
            placeholder="Specification Name"
            onChange={handleChange}
            value={formData?.specificationName || ""}
          />
          <CFormInput
            className="mb-3"
            type="text"
            name="specificationID"
            label="Specification ID"
            placeholder="Specification ID"
            onChange={handleChange}
            value={formData?.specificationID || ""}
          />

          <CFormSelect
            className="mb-3"
            type="select"
            name="sampleType"
            label="Sample Type"
            value={formData?.sampleType || ""}
            onChange={handleChange}
            options={[
              "Select Sample Type",
              { label: "Raw Material", value: "Raw Material" },
              { label: "hcl", value: "hcl" },
              { label: "Hydrochloric Acid", value: "Hydrochloric Acid" },
              { label: "Petrochemical", value: "Petrochemical" },
              { label: "Initiated Product", value: "Initiated Product" },
              { label: "Semi Finished", value: "Semi Finished" },
              { label: "ABCD", value: "ABCD" },
              { label: "H2So4", value: "H2So4" },
              { label: "Micro Media", value: "Micro Media" },
              { label: "FG Templage", value: "FG Templage" },
            ]}
          />
          <CFormSelect
            className="mb-3"
            type="select"
            name="specificationType"
            label="Specification Type"
            value={formData?.specificationType || ""}
            onChange={handleChange}
            options={[
              "Select Specification Type",
              { label: "environment", value: "environment" },
              { label: "culture", value: "culture" },
              { label: "culture1", value: "culture1" },
              { label: "working-standard", value: "working-standard" },
              { label: "tentative", value: "tentative" },
              { label: "release", value: "release" },
              { label: "regulatory", value: "regulatory" },
              { label: "Raw Material", value: "Raw Material" },
              { label: "instrument", value: "instrument" },
              { label: "shell life", value: "shell life" },
            ]}
          />
          <CFormInput
            className="mb-3"
            type="date"
            label="Effective From"
            placeholder=""
            value={formData?.effectFrom || ""}
            onChange={handleChange}
            name="effectFrom"
          />
          <CFormInput
            className="mb-3"
            type="date"
            label="Review Date"
            placeholder=""
            value={formData?.reviewDate || ""}
            onChange={handleChange}
            name="reviewDate"
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Supersedes"
            placeholder="Supersedes"
            value={formData?.supersedes || ""}
            onChange={handleChange}
            name="supersedes"
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Standard Test Procedure No."
            placeholder="Standard Test Procedure No."
            value={formData?.standardTestProcedureNo || ""}
            onChange={handleChange}
            name="standardTestProcedureNo"
          />
          <CFormInput
            className="mb-3"
            type="file"
            label="Document"
            placeholder=""
            value={formData?.document || ""}
            onChange={handleChange}
            name="document"
          />
        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={closeModal}>
            Back
          </CButton>
          <CButton color="primary" onClick={handleSave}>
            Update Specifications
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
          <h4 className="fw-bold">Standard Test Procedure</h4>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex space-x-4">
            <SearchBar value={searchQuery} onChange={setSearchQuery} />
            <Dropdown
              options={[
                { value: "All", label: "All" },
                { value: "DROPPED", label: "DROPPED" },
                { value: "INITIATED", label: "INITIATED" },
                { value: "REINITIATED", label: "REINITIATED" },
                { value: "APPROVED", label: "APPROVED" },
                { value: "REJECTED", label: "REJECTED" },
              ]}
              value={statusFilter}
              onChange={setStatusFilter}
            />
          </div>
          <div className="float-right flex gap-4">
            <PDFDownload
              columns={columns}
              data={filteredData}
              fileName="Specification_Test_Procedure.pdf"
              title="Specification Test Procedure Data"
            />
            {/* <ATMButton text="Import" color="pink" onClick={handleOpenModals} /> */}
            <ATMButton
              text="Add Test Procedure"
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
          onAdd={handleAdd}
          closeModal={closeModal}
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
    </>
  );
}

export default SpecificationsTestProcedure;
