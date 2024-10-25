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
import { BASE_URL } from "../../config.json";
import { toast } from "react-toastify";

const fields = [
  { label: "Product Name", key: "productName" },
  { label: "Specification ID", key: "specificationID" },
  { label: "Specification Name", key: "specificationName" },
  { label: "Effect From", key: "effectFrom" },
  { label: "Review Date", key: "reviewDate" },
  { label: "Status", key: "status" },
];

function Specifications() {
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
        `${BASE_URL}/get-all-lims/mSpecifications`
      );
  
      if (response.data && Array.isArray(response.data)) {
        const formattedData = response.data.flatMap(
          (item) =>
            item?.mSpecifications?.map((condition) => ({
              checkbox: false,
              sno: condition.uniqueId,
              productCode: condition.productCode || "No product Code",
              productName: condition.productName || "No product Name",
              specificationID:
                condition.specificationID || "No Specification ID",
              specificationName:
                condition.specificationName || "No Specification Name",
              effectFrom: condition.effectFrom || "No Effective Date",
              reviewDate: condition.reviewDate || "No Review Date",
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
    const checked = e.target.checked;e
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
      status: item["Status"] || "",
    }));

    const concatenatedData = [...updatedData];
    setData(concatenatedData); // Update data state with parsed Excel data
    setIsModalsOpen(false); // Close the import modal after data upload
  };

  const handleDelete = async (item) => {
    try {
      const response = await axios.delete(
        `${BASE_URL}/delete-lims/mSpecifications/${item.sno}`
      );
      if (response.status === 200) {
        setData((prevData) => prevData.filter((d) => d.sno !== item.sno));
       
        toast.success("Product deleted successfully.");
      return updatedData;
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
    const newData = [
      ...data,
      {
        ...newCondition,
        sno: data.length + 1,
        checkbox: false,
        status: nextStatus,
      },
    ];

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
      const response = await axios.post(
        `${BASE_URL}/manage-lims/add/mSpecifications`,
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
    const [productCode, setProductCode] = useState("");
    const [productName, setProductName] = useState("");
    const [specificationName, setSpecificationName] = useState("");
    const [specificationID, setSpecificationID] = useState("");
    const [sampleType, setSampleType] = useState("");
    const [specificationType, setSpecificationType] = useState("");
    const [effectFrom, setEffectFrom] = useState("");
    const [reviewDate, setReviewDate] = useState("");
    const [supersedes, setSupersedes] = useState("");
    const [standardTestProcedureNo, setStandardTestProcedureNo] = useState("");
    const [document, setDocument] = useState(null);

    const handleAdd = () => {
      const newSpecification = {
        productCode,
        productName,
        specificationName,
        specificationID,
        sampleType,
        specificationType,
        effectFrom,
        reviewDate,
        supersedes,
        standardTestProcedureNo,
        document,
      };
      onAdd(newSpecification);
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
      <CModal
        alignment="center"
        visible={visible}
        onClose={closeModal}
        size="lg"
      >
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
            id="combo-box-demo"
            options={materialCode}
            renderInput={(params) => <TextField {...params} label="" />}
            value={productCode}
            onChange={(e, newValue) => setProductCode(newValue?.label || "")}
          />

          <CFormInput
            className="mb-3"
            type="text"
            label="Product Name"
            placeholder="Product Name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />

          <CFormInput
            className="mb-3"
            type="text"
            label="Specification Name"
            placeholder="Specification Name"
            value={specificationName}
            onChange={(e) => setSpecificationName(e.target.value)}
          />

          <CFormInput
            className="mb-3"
            type="text"
            label="Specification ID"
            placeholder="Specification ID"
            value={specificationID}
            onChange={(e) => setSpecificationID(e.target.value)}
          />

          <CFormSelect
            className="mb-3"
            label="Sample Type"
            value={sampleType}
            onChange={(e) => setSampleType(e.target.value)}
            options={[
              { label: "Select Sample Type", value: "" },
              { label: "Raw Material", value: "Raw Material" },
              { label: "hcl", value: "hcl" },
              { label: "Petrochemical", value: "Petrochemical" },
            ]}
          />

          <CFormSelect
            className="mb-3"
            label="Specification Type"
            value={specificationType}
            onChange={(e) => setSpecificationType(e.target.value)}
            options={[
              { label: "Select Specification Type", value: "" },
              { label: "environment", value: "environment" },
              { label: "culture", value: "culture" },
              { label: "working-standard", value: "working-standard" },
            ]}
          />

          <CFormInput
            className="mb-3"
            type="date"
            onFocus={(e) => e.target.showPicker()}
            label="Effective From"
            value={effectFrom}
            onChange={(e) => setEffectFrom(e.target.value)}
          />

          <CFormInput
            className="mb-3"
            type="date"
            onFocus={(e) => e.target.showPicker()}
            label="Review Date"
            value={reviewDate}
            onChange={(e) => setReviewDate(e.target.value)}
          />

          <CFormInput
            className="mb-3"
            type="text"
            label="Supersedes"
            value={supersedes}
            onChange={(e) => setSupersedes(e.target.value)}
          />

          <CFormInput
            className="mb-3"
            type="text"
            label="Standard Test Procedure No."
            value={standardTestProcedureNo}
            onChange={(e) => setStandardTestProcedureNo(e.target.value)}
          />

          <CFormInput
            className="mb-3"
            type="file"
            label="Document"
            onChange={(e) => setDocument(e.target.files[0])}
          />
        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={closeModal}>
            Back
          </CButton>
          <CButton color="primary" onClick={handleAdd}>
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
        `${BASE_URL}/manage-lims/update/mSpecifications/${updatedData.sno}`,
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
      <CModal
        alignment="center"
        visible={visible}
        onClose={closeModal}
        size="lg"
      >
        <CModalHeader>
          <CModalTitle>Add Specification</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <label className="mb-3" htmlFor="">
            Product/Material Code
          </label>
          <Autocomplete
            className="mb-3"
            name="productCode"
            disablePortal
            id="combo-box-demo"
            options={materialCode}
            renderInput={(params) => <TextField {...params} label="" />}
            value={formData?.productCode || ""}
            onChange={handleChange}
          />

          <CFormInput
            className="mb-3"
            name="productName"
            type="text"
            label="Product Name"
            placeholder="Product Name"
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
            value={formData?.specificationId || ""}
          />

          <CFormSelect
            className="mb-3"
            type="select"
            label="Sample Type"
            name="sampleType"
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
            name="specificationType"
          />
          <CFormInput
            className="mb-3"
            type="date"
            onFocus={(e) => e.target.showPicker()}
            label="Effective From"
            placeholder=""
            value={formData?.effectFrom || ""}
            onChange={handleChange}
            name="effectFrom"
          />
          <CFormInput
            className="mb-3"
            type="date"
            onFocus={(e) => e.target.showPicker()}
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
          <h4 className="fw-bold">Specifications</h4>
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
              fileName="Specification.pdf"
              title="Specification Data"
            />
            <ATMButton text="Import" color="pink" onClick={handleOpenModals} />
            <ATMButton
              text="Add Specification"
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
          onAdd={handleAdd}
        />
      )}
      {isModalsOpen && (
        <ImportModal
          // initialData={initialData}
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

export default Specifications;
