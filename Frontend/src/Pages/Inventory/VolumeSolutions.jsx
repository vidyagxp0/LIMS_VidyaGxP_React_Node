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
import VolumeSolutionModal from "../Modals/VolumeSolutionModal.jsx";
import ViewModal from "../Modals/ViewModal";
import ImportModal from "../Modals/importModal";
import {
  CButton,
  CFormInput,
  CFormTextarea,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";
import PDFDownload from "../PDFComponent/PDFDownload .jsx";
import ReusableModal from "../Modals/ResusableModal.jsx";

const initialData = JSON.parse(localStorage.getItem("internalRegistration")) || [];


const VolumeSolution = () => {
  const [data, setData] = useState(initialData);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [viewModalData, setViewModalData] = useState(null);

  useEffect(() => {
    localStorage.setItem("internalRegistration", JSON.stringify(data));
  }, [data]);
  
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
          size="xl"
        >
          <CModalHeader>
            <CModalTitle>Add Solutions</CModalTitle>
          </CModalHeader>
          <p style={{ marginLeft: "15px" }}>
            Add information and Add Solutions
          </p>
          <CModalBody>
            <CFormInput
              type="text"
              label="Name"
              placeholder=""
              className="custom-placeholder mb-3"
              name="name"
              value={formData?.name || ""}
              onChange={handleChange}
            />
            <CFormInput
              type="text"
              label="Prefix"
              placeholder="Bottle / vial"
              className="custom-placeholder mb-3"
              value={formData?.prefix || ""}
              name="prefix"
              onChange={handleChange}
            />
            <CFormInput
              type="text"
              label="Theoretical Strength"
              placeholder="Theoretical Strength"
              value={formData?.theoreticalStrength || ""}
              className="custom-placeholder mb-3"
              name="theoreticalStrength"
              onChange={handleChange}
            />
            <CFormInput
              type="number"
              label="UOM"
              placeholder="UOM"
              className="custom-placeholder mb-3"
              name="uom"
              value={formData?.uom || ""}
              onChange={handleChange}
            />
            <CFormTextarea
              type="text"
              label="Solution Expiry Period"
              placeholder="Solution Expiry Period"
              value={formData?.solutionExpiryPeriod || ""}
              name="solutionExpiryPeriod"
              onChange={handleChange}
              className="custom-placeholder mb-3"
            />
            <CFormInput
              type="text"
              label="Standardization Schedule"
              placeholder="Lot Quantity"
              value={formData?.standardizationSchedule || ""}
              onChange={handleChange}
              name="standardizationSchedule"
              className="custom-placeholder mb-3"
            />
            <CFormInput
              type="date"
              label="Preparation Method"
              placeholder=""
              value={formData?.preparationMethod || ""}
              onChange={handleChange}
              name="preparationMethod"
              className="custom-placeholder mb-3"
            />

            <CFormInput
              type="text"
              label="Comments"
              placeholder="Comments"
              value={formData?.comments || ""}
              className="mb-3"
              name="comments"
              onChange={handleChange}
            />
          </CModalBody>
          <CModalFooter>
            <CButton color="light" onClick={closeModal}>
              Cancel
            </CButton>
            <CButton
              onClick={handleSave}
              style={{ background: "#0F93C3", color: "white" }}
            >
              Add Solution
            </CButton>
          </CModalFooter>
        </CModal>
      </div>
    );
  };

  // ************************************************************************************************

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

  const handleOpenModals = () => {
    setIsModalsOpen(true);
  };

  const handleCloseModals = () => {
    setIsModalsOpen(false);
  };

  const handleCheckboxChange = (index) => {
    const newData = [...data];
    newData[index].checkbox = !newData[index].checkbox;
    setData(newData);
  };

  const handleSelectAll = (e) => {
    const checked = e.target.checked;
    const newData = data.map((row) => ({ ...row, checkbox: checked }));
    setData(newData);
  };

  const filteredData = data.filter((row) => {
    return (
      row.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (statusFilter === "All" || row.status === statusFilter)
    );
  });

  const onViewDetails = (rowData) => {
    setViewModalData(rowData);
    setIsViewModalOpen(true);
  };

  const fields = [
    { label: "sno", key: "sno" },
    { label: "name", key: "name" },
    { label: "prefix", key: "prefix" },
    { label: "theoreticalStrength", key: "theoreticalStrength" },
    { label: "solutionExpiryPeriod", key: "solutionExpiryPeriod" },
    { label: "preparationMethod", key: "preparationMethod" },
    { label: "comments", key: "comments" },
    { label: "status", key: "status" }
    
    
  ];

  const handleStatusUpdate = (volumeSolution, newStatus) => {
    setRows((prevRows) =>
      prevRows.map((row) =>
        row.volumeSolution === volumeSolution ? { ...row, status: newStatus } : row
      )
    );
  };

  const handleExcelDataUpload = (excelData) => {
    const updatedData = excelData.map((item, index) => ({
      checkbox: false,
      sno: index + 1,
      name: item["Name"] || "",
      prefix: item["Prefix"] || "",
      theoreticalStrength: item["Theoretical Strength"] || "",
      solutionExpiryPeriod: item["Solution Expiry Period"] || "",
      preparationMethod: item["Preparation Method"] || "",
      comments: item["Comments"] || "",
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
    { header: "Name	", accessor: "name" },
    { header: "Prefix	", accessor: "prefix" },
    { header: "Theoretical Strength	", accessor: "theoreticalStrength" },
    { header: "Solution Expiry Period	", accessor: "solutionExpiryPeriod" },
    { header: "Preparation Method	", accessor: "preparationMethod" },
    { header: "Comments", accessor: "comments" },
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
          name: requalification.name,
          prefix: requalification.prefix,
          theoreticalStrength: requalification.theoreticalStrength,
          uom: requalification.uom,
          solutionExpiryPeriod: requalification.solutionExpiryPeriod,
          standardizationSchedule: requalification.standardizationSchedule,
          preparationMethod: requalification.preparationMethod,
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
      <h1 className="text-2xl font-bold mb-4">Solutions</h1>
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
          <ATMButton text="Add Solutions" color="blue" onClick={openModal} />
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
      <VolumeSolutionModal
        visible={isModalOpen}
        handleSubmit={handleModalSubmit}
        closeModal={closeModal}
      />
       {viewModalData && (
        <ReusableModal
          visible={isViewModalOpen}
          closeModal={closeViewModal}
          data={viewModalData}
          fields={fields}
          title="InstrumentMasterReg."
          updateStatus={handleStatusUpdate}
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

export default VolumeSolution;
