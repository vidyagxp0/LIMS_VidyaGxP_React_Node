import React, { useState, useEffect } from "react";
import Card from "../../components/ATM components/Card/Card";
import SearchBar from "../../components/ATM components/SearchBar/SearchBar";
import Dropdown from "../../components/ATM components/Dropdown/Dropdown";
import Table from "../../components/ATM components/Table/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import ATMButton from "../../components/ATM components/Button/ATMButton";
import SolutionStandardizationModal from "../Modals/SolutionStandardizationModal.jsx";
import ViewModal from "../Modals/ViewModal";
import ImportModal from "../Modals/importModal";
import {
  CButton,
  CForm,
  CFormCheck,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";
import PDFDownload from "../PDFComponent/PDFDownload .jsx";

const initialData = [
  {
    checkbox: false,
    sno: 1,
    standardizationCode: "code1",
    preparationNo: "code1",
    solutionName: "material 1",
    type: "dummy desc",
    comments: "dummy desc",
    status: "DROPPED",
  },
  {
    checkbox: false,
    sno: 2,
    standardizationCode: "code2",
    preparationNo: "prep2",
    solutionName: "solution 2",
    type: "type 2",
    comments: "description 2",
    status: "INITIATED",
  },
];
const generateRandomSymbolCode = () => {
  const characters = "0123456789";
  let result = "STD-072024-00";
  for (let i = 0; i < 6; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

const SolutionStandardization = () => {
  const [data, setData] = useState(initialData);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [viewModalData, setViewModalData] = useState(null);
  const [isModalsOpen, setIsModalsOpen] = useState(false);
  const [cardCounts, setCardCounts] = useState({
    DROPPED: 0,
    INITIATED: 0,
    REINITIATED: 0,
    APPROVED: 0,
    REJECTED: 0,
  });

  useEffect(() => {
    const counts = {
      DROPPED: 0,
      INITIATED: 0,
      REINITIATED: 0,
      APPROVED: 0,
      REJECTED: 0,
    };

    data.forEach((item) => {
      if (item.status === "DROPPED") counts.DROPPED++;
      else if (item.status === "INITIATED") counts.INITIATED++;
      else if (item.status === "REINITIATED") counts.REINITIATED++;
      else if (item.status === "APPROVED") counts.APPROVED++;
      else if (item.status === "REJECTED") counts.REJECTED++;
    });

    setCardCounts(counts);
  }, [data]);

  const handleCheckboxChange = (index) => {
    const newData = [...data];
    newData[index].checkbox = !newData[index].checkbox;
    setData(newData);
  };

  // ************************************************************************************************
  const [editModalData, setEditModalData] = useState(null);
  const [editModalOpen, setEditModalOpen] = useState(false);

  const openEditModal = (rowData) => {
    setEditModalData(rowData);
    setEditModalOpen(true);
  };

  const closeEditModal = () => {
    setEditModalOpen(false);
    setEditModalData(null);
  };

  const handleEditSave = (updatedData) => {
    const updatedList = data.map((item) =>
      item.sno === updatedData.sno ? updatedData : item
    );
    setData(updatedList);
    closeEditModal();
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
      <div>
        <CModal
          alignment="center"
          visible={visible}
          onClose={closeModal}
          size="lg"
        >
          <CModalHeader>
            <CModalTitle>Add Standardization</CModalTitle>
          </CModalHeader>
          <CModalBody>
            <CFormSelect
              label="Preparation No."
              className="custom-placeholder mb-3"
              options={[
                { value: "prep001", label: "Preparation 001" },
                { value: "prep002", label: "Preparation 002" },
                { value: "prep003", label: "Preparation 003" },
                { value: "prep004", label: "Preparation 004" },
              ]}
              value={formData?.preparationNo || ""}
              name="preparationNo"
              onChange={handleChange}
            />
            <CFormInput
              type="text"
              label="Solution Name"
              placeholder="Solution Name"
              className="custom-placeholder mb-3"
              value={formData?.solutionName || ""}
              name="solutionName"
              onChange={handleChange}
            />
            <CFormInput
              type="text"
              label="Volumetric Solution Name"
              placeholder="Volumetric Solution Name"
              className="custom-placeholder mb-3"
              value={formData?.volumentricSolutionName || ""}
              name="volumentricSolutionName"
              onChange={handleChange}
            />
            <CFormInput
              type="text"
              label="Solution Expiry Period"
              placeholder="Solution Expiry Period"
              className="custom-placeholder mb-3"
              value={formData?.solutionExpiryPeriod || ""}
              name="solutionExpiryPeriod"
              onChange={handleChange}
            />
            <CFormInput
              type="text"
              label="Solution Quantity"
              placeholder="Solution Quantity"
              className="custom-placeholder mb-3"
              value={formData?.solutionQuantity || ""}
              name="solutionQuantity"
              onChange={handleChange}
            />
            <CFormInput
              type="number"
              label="Standardization Schedule"
              placeholder="Standardization Schedule"
              className="custom-placeholder mb-3"
              value={formData?.standardizationSchedule || ""}
              name="standardizationSchedule"
              onChange={handleChange}
            />
            <CFormInput
              type="number"
              label="Batch No"
              placeholder="Batch No"
              className="mb-3"
              value={formData?.batchNo || ""}
              name="batchNo"
              onChange={handleChange}
            />
            <CForm className="mb-3">
              <CFormLabel>Type</CFormLabel>
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <CFormCheck
                  type="radio"
                  name="type"
                  id="new"
                  label="New"
                  value="New"
                  checked={formData?.type === "New" || ""}
                  onChange={handleChange}
                />
                <CFormCheck
                  type="radio"
                  name="type"
                  id="dilution"
                  label="Dilution"
                  value="Dilution"
                  checked={formData?.type === "Dilution" || ""}
                  onChange={handleChange}
                />
                <CFormCheck
                  type="radio"
                  name="type"
                  id="readyMade"
                  label="Ready Made"
                  value="Ready Made"
                  checked={formData?.type === "Ready Made" || ""}
                  onChange={handleChange}
                />
              </div>
            </CForm>
            <CFormInput
              type="text"
              label="Documents if any"
              placeholder="Documents if any"
              className="custom-placeholder mb-3"
              value={formData?.documents || ""}
              name="documents"
              onChange={handleChange}
            />
            <CFormInput
              type="text"
              label="Average Value"
              placeholder="Average Value"
              className="custom-placeholder mb-3"
              value={formData?.averageValue || ""}
              name="averageValue"
              onChange={handleChange}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "column",
                marginBottom: "1rem",
              }}
            >
              <label>Comments</label>
              <textarea
                className="form-control"
                value={formData?.comments || ""}
                name="comments"
                onChange={handleChange}
              ></textarea>
            </div>
          </CModalBody>
          <CModalFooter>
            <CButton color="light" onClick={closeModal}>
              Cancel
            </CButton>
            <CButton
              onClick={handleSave}
              style={{ background: "#0F93C3", color: "white" }}
            >
              Add Standardization
            </CButton>
          </CModalFooter>
        </CModal>
      </div>
    );
  };

  // ************************************************************************************************

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
      row.solutionName.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (statusFilter === "All" || row.status === statusFilter)
    );
  });

  const onViewDetails = (rowData) => {
    setViewModalData(rowData);
    setIsViewModalOpen(true);
  };

  const handleExcelDataUpload = (excelData) => {
    const updatedData = excelData.map((item, index) => ({
      checkbox: false,
      sno: index + 1,
      standardizationCode: item["Standardization Code"] || "",
      preparationNo: item["Preparation No."] || "",
      solutionName: item["Solution Name"] || "",
      type: item["Type"] || "",
      comments: item["comments"] || "",
      status: item["Status"] || "INITIATED",
    }));

    // Concatenate the updated data with existing data
    const concatenatedData = [...updatedData];
    setData(concatenatedData); // Update data state with parsed Excel data

    setIsModalsOpen(false); // Close the import modal after data upload
  };

  const columns = [
    {
      header: <input type="checkbox" onChange={handleSelectAll} />,
      accessor: "checkbox",
    },
    { header: "SrNo.", accessor: "sno" },
    { header: "Standardization Code", accessor: "standardizationCode" },
    { header: "Preparation No.", accessor: "preparationNo" },
    { header: "Solution Name", accessor: "solutionName" },
    { header: "Type", accessor: "type" },
    { header: "comments", accessor: "comments" },
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
          <FontAwesomeIcon
            icon={faTrashCan}
            key="delete"
            className="cursor-pointer"
          />
        </>
      ),
    },
  ];

  const handleModalSubmit = (requalification) => {
    // const currentDate = new Date().toISOString().split("T")[0];

    if (editModalData) {
      const updatedList = data.map((item) =>
        item.sno === requalification.sno ? requalification : item
      );
      setData(updatedList);
    } else {
      setData((prevData) => [
        ...prevData,
        {
          checkbox: false,
          sno: prevData.length + 1,
          preparationNo: requalification.preparationNo,
          standardizationCode: generateRandomSymbolCode(),
          solutionName: requalification.solutionName,
          volumentricSolutionName: requalification.volumentricSolutionName,
          solutionExpiryPeriod: requalification.solutionExpiryPeriod,
          solutionQuantity: requalification.solutionQuantity,
          standardizationSchedule: requalification.standardizationSchedule,
          batchNo: requalification.batchNo,
          type: requalification.type,
          averageValue: requalification.averageValue,
          comments: requalification.comments,
          status: "Active",
        },
      ]);
    }
    closeModal();
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const closeViewModal = () => {
    setIsViewModalOpen(false);
  };

  const handleCardClick = (status) => {
    setStatusFilter(status);
  };

  const handleDelete = (item) => {
    const newData = data.filter((d) => d !== item);
    setData(newData);
    console.log("Deleted item:", item);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Solution Standardizations</h1>
      <div className="grid grid-cols-5 gap-4 mb-4">
        <Card
          title="DROPPED"
          count={cardCounts.DROPPED}
          color="pink"
          onClick={() => handleCardClick("DROPPED")}
        />
        <Card
          title="INITIATED"
          count={cardCounts.INITIATED}
          color="blue"
          onClick={() => handleCardClick("INITIATED")}
        />
        <Card
          title="REINITIATED"
          count={cardCounts.REINITIATED}
          color="yellow"
          onClick={() => handleCardClick("REINITIATED")}
        />
        <Card
          title="APPROVED"
          count={cardCounts.APPROVED}
          color="green"
          onClick={() => handleCardClick("APPROVED")}
        />
        <Card
          title="REJECTED"
          count={cardCounts.REJECTED}
          color="red"
          onClick={() => handleCardClick("REJECTED")}
        />
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
            fileName="Group_Name.pdf"
            title="Group Name Data"
          />
          <ATMButton text="Import" color="pink" onClick={handleOpenModals} />
          <ATMButton
            text="Add Standardization"
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
      <SolutionStandardizationModal
        visible={isModalOpen}
        closeModal={closeModal}
        handleSubmit={handleModalSubmit}
      />
      {isViewModalOpen && (
        <ViewModal
          visible={isViewModalOpen}
          closeModal={closeViewModal}
          data={viewModalData}
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
      {editModalOpen && (
        <EditModal
          visible={editModalOpen}
          closeModal={closeEditModal}
          data={editModalData}
          onSave={handleEditSave}
        />
      )}
    </div>
  );
};

export default SolutionStandardization;
