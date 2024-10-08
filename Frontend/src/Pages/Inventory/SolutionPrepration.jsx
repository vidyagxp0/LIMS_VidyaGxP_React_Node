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
import SolutionPreparationModal from "../Modals/SolutionPreparationModal.jsx";
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
import LaunchQMS from "../../components/ReusableButtons/LaunchQMS.jsx";

const initialData = [
  {
    checkbox: false,
    sno: 1,
    methodNo: "code1",
    volumetricSolutionName: "code1",
    methodNo: "material 1",
    type: "dummy desc",
    batchNo: "dummy desc",
    status: "DROPPED",
  },
  {
    checkbox: false,
    sno: 2,
    methodNo: "code2",
    volumetricSolutionName: "solution 2",
    methodNo: "method 2",
    type: "type 2",
    batchNo: "batch 2",
    status: "INITIATED",
  },
];

const SolutionPrepration = () => {
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
      row.methodNo.toLowerCase().includes(searchQuery.toLowerCase()) &&
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
      methodNo: item["Solution Preparation Code"] || "",
      volumetricSolutionName: item["Solution Name"] || "",
      methodNo: item["Method no."] || "",
      type: item["Type"] || "",
      batchNo: item["Batch No."] || "",
      status: item["Status"] || "INITIATED",
    }));

    // Concatenate the updated data with existing data
    const concatenatedData = [...updatedData];
    setData(concatenatedData); // Update data state with parsed Excel data

    setIsModalsOpen(false); // Close the import modal after data upload
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
            <CModalTitle>New Solution Preparation</CModalTitle>
          </CModalHeader>
          <p style={{ marginLeft: "16px" }}>
            Add information and add new Solution Preparation.
          </p>
          <CModalBody>
            <CFormSelect
              label="Volumetric Solution Name"
              className="custom-placeholder mb-3"
              value={formData.volumetricSolutionName || ""}
              name="volumetricSolutionName"
              onChange={handleChange}
            >
              <option value="">Select Solution Name</option>
              <option value="S1">S1</option>
              <option value="Tadalfil">Tadalfil</option>
              <option value="xcvn">xcvn</option>
              <option value="Aspirin (Asetylselic Acid)">
                Aspirin (Asetylselic Acid)
              </option>
            </CFormSelect>

            <CFormInput
              type="text"
              label="Preparation Method"
              placeholder="Preparation Method"
              className="custom-placeholder mb-3"
              value={formData.methodNo || ""}
              name="methodNo"
              onChange={handleChange}
            />

            <CFormInput
              type="text"
              label="Solution Quantity"
              placeholder="Enter Solution Quantity"
              className="custom-placeholder mb-3"
              value={formData.solutionQuantity || ""}
              name="solutionQuantity"
              onChange={handleChange}
            />

            <CFormInput
              type="text"
              label="Batch No"
              placeholder="Batch No"
              className="custom-placeholder mb-3"
              value={formData.batchNo || ""}
              name="batchNo"
              onChange={handleChange}
            />

            <CForm className="mb-3">
              <CFormLabel>Type</CFormLabel>
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <CFormCheck
                  type="radio"
                  name="sampleRadio"
                  id="newRadio"
                  label="New"
                  value="New"
                  checked={formData.type === "New" || ""}
                  onChange={handleChange}
                />
                <CFormCheck
                  type="radio"
                  name="sampleRadio"
                  id="dilutionRadio"
                  label="Dilution"
                  value="Dilution"
                  checked={formData.type === "Dilution" || ""}
                  onChange={handleChange}
                />
                <CFormCheck
                  type="radio"
                  name="sampleRadio"
                  id="readyMadeRadio"
                  label="Ready Made"
                  value="Ready Made"
                  checked={formData.type === "Ready Made" || ""}
                  onChange={handleChange}
                />
              </div>
            </CForm>

            <CFormInput
              type="text"
              label="Documents if Any"
              placeholder="Documents if Any"
              className="custom-placeholder mb-3"
              value={formData.documents || ""}
              name="documents"
              onChange={handleChange}
            />

            <CFormInput
              type="number"
              label="Comments"
              placeholder="Comments"
              className="custom-placeholder mb-3"
              value={formData.comments || ""}
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
              Add
            </CButton>
          </CModalFooter>
        </CModal>
      </div>
    );
  };

  // ************************************************************************************************

  const columns = [
    {
      header: <input type="checkbox" onChange={handleSelectAll} />,
      accessor: "checkbox",
    },
    { header: "SrNo.", accessor: "sno" },
    {
      header: "Solution Preparation Code",
      accessor: "methodNo",
    },
    { header: "Solution Name", accessor: "volumetricSolutionName" },
    { header: "Method no.", accessor: "methodNo" },
    { header: "Type", accessor: "type" },
    { header: "Batch No.", accessor: "batchNo" },
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
          volumetricSolutionName: requalification.volumetricSolutionName,
          methodNo: requalification.methodNo,
          solutionQuantity: requalification.solutionQuantity,
          batchNo: requalification.batchNo,
          type: requalification.type,
          documents: requalification.documents,
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
    <>
    <LaunchQMS/>
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Solution Preparations</h1>
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
          <ATMButton text="Import" color="pink" onClick={handleOpenModals} />
          <ATMButton
            text="Add Solution Preparation"
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
      <SolutionPreparationModal
        visible={isModalOpen}
        handleSubmit={handleModalSubmit}
        closeModal={closeModal}
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
      )}{" "}
      {editModalOpen && (
        <EditModal
          visible={editModalOpen}
          closeModal={closeEditModal}
          data={editModalData}
          onSave={handleEditSave}
        />
      )}
    </div></>
  );
};

export default SolutionPrepration;
