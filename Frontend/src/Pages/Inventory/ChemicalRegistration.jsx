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
import ChemicalRegistrationModal from "../Modals/ChemicalRegistrationModal.jsx";
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
    name: "Chemical 1",
    uniqueCode: "code1",
    status: "DROPPED",
  },
  {
    checkbox: false,
    sno: 2,
    name: "Chemical 2",
    uniqueCode: "code2",
    status: "INITIATED",
  },
];

const ChemicalRegitration = () => {
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
            <CModalTitle>Add Chemicals</CModalTitle>
          </CModalHeader>
          <p style={{ marginLeft: "13px" }}>Add information and Add Chemical</p>
          <CModalBody>
            <p style={{ fontWeight: "800", fontSize: "20px" }}>
              Registration Initiation
            </p>

            <CFormInput
              type="text"
              label="Name"
              placeholder="Name"
              className="custom-placeholder mb-3"
              name="name"
              value={formData?.name || ""}
              onChange={handleChange}
            />

            <CFormInput
              type="text"
              label="Unique Code"
              placeholder="Unique Code"
              className="custom-placeholder mb-3"
              name="uniqueCode"
              value={formData?.uniqueCode || ""}
              onChange={handleChange}
            />

            <CFormInput
              type="text"
              label="CAS / CAT no."
              placeholder="Enter CAS"
              className="custom-placeholder mb-3"
              name="casNumber"
              value={formData?.casNumber || ""}
              onChange={handleChange}
            />

            <CFormSelect
              label="Category"
              placeholder="Select"
              className="custom-placeholder mb-3"
              name="category"
              value={formData?.category || ""}
              onChange={handleChange}
              options={[
                { value: "", label: "Select Category" },
                { value: "Organic Solvent", label: "Organic Solvent" },
                {
                  value: "Iron Chelator Substance",
                  label: "Iron Chelator Substance",
                },
                { value: "Solvent", label: "Solvent" },
                { value: "Organic Acid", label: "Organic Acid" },
                { value: "Polymers", label: "Polymers" },
                {
                  value: "Biochemical Compounds",
                  label: "Biochemical Compounds",
                },
                { value: "Inorganic Compounds", label: "Inorganic Compounds" },
                { value: "Organic Compounds", label: "Organic Compounds" },
              ]}
            />

            <CFormSelect
              label="Grade"
              placeholder="Grade"
              className="custom-placeholder mb-3"
              name="grade"
              value={formData?.grade || ""}
              onChange={handleChange}
              options={[
                { value: "", label: "Select Grade" },
                { value: "Analytical Grade", label: "Analytical Grade" },
                { value: "HPLC Grade", label: "HPLC Grade" },
                { value: "Grd-1", label: "Grd-1" },
              ]}
            />

            <CFormSelect
              label="Handling Symbol"
              placeholder="Select..."
              className="custom-placeholder mb-3"
              name="handlingSymbol"
              value={formData?.handlingSymbol || ""}
              onChange={handleChange}
              options={[
                { value: "", label: "Select Handling Symbol" },
                { value: "A", label: "A" },
                { value: "B", label: "B" },
                { value: "C", label: "C" },
                { value: "D", label: "D" },
                { value: "E", label: "E" },
              ]}
            />

            <CFormSelect
              label="Storage Conditions"
              placeholder="Select"
              className="custom-placeholder mb-3"
              name="storageConditions"
              value={formData?.storageConditions || ""}
              onChange={handleChange}
              options={[
                { value: "", label: "Select Storage Conditions" },
                { value: "Analytical", label: "Analytical" },
                { value: "HPLC", label: "HPLC" },
                { value: "Grd-1", label: "Grd-1" },
              ]}
            />

            <CFormSelect
              label="Lot UOM"
              placeholder="Select"
              className="custom-placeholder mb-3"
              name="lotUOM"
              value={formData?.lotUOM || ""}
              onChange={handleChange}
              options={[
                { value: "", label: "Select Lot UOM" },
                { value: "kg", label: "kg" },
                { value: "L", label: "L" },
                { value: "mL", label: "mL" },
              ]}
            />

            <CFormInput
              type="number"
              label="Usage UOM"
              placeholder="Select"
              className="custom-placeholder mb-3"
              name="usageUOM"
              value={formData?.usageUOM || ""}
              onChange={handleChange}
            />

            <CForm className="mb-3">
              <CFormLabel>Issues Display Order For Usage</CFormLabel>
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <CFormCheck
                  type="radio"
                  name="issuesDisplayOrder"
                  id="fifoRadio"
                  label="FIFO"
                  value="FIFO"
                  checked={formData?.issuesDisplayOrder === "FIFO" || ""}
                  onChange={handleChange}
                />
                <CFormCheck
                  type="radio"
                  name="issuesDisplayOrder"
                  id="fefoRadio"
                  label="FEFO"
                  value="FEFO"
                  checked={formData?.issuesDisplayOrder === "FEFO" || ""}
                  onChange={handleChange}
                />
              </div>
            </CForm>

            <p style={{ fontWeight: "bolder" }}>Inventory Control</p>

            <CFormInput
              type="number"
              label="Minimum Qty."
              placeholder="Select"
              className="custom-placeholder mb-3"
              name="minimumQty"
              value={formData?.minimumQty || ""}
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
                name="comments"
                id="comments"
                className="form-control"
                value={formData?.comments || ""}
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
              Add Chemical
            </CButton>
          </CModalFooter>
        </CModal>
      </div>
    );
  };

  // ************************************************************************************************

  const handleCheckboxChange = (index) => {
    const newData = [...data];
    newData[index].checkbox = !newData[index].checkbox;
    setData(newData);
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

  const filteredData = data.filter((row) => {
    return (
      row.name.toLowerCase().includes(
        searchQuery.toLowerCase()
      ) &&
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
      name: item["Chemical / Regeant Name		"] || "",
      uniqueCode: item["Chemical / Regeant Unique Code	"] || "",
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
    { header: "Chemical / Regeant Name		", accessor: "name" },
    {
      header: "Chemical / Regeant Unique Code	",
      accessor: "uniqueCode",
    },
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
    const currentDate = new Date().toISOString().split("T")[0];

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
          uniqueCode: requalification.uniqueCode,
          casNumber: requalification.casNumber,
          category: requalification.category,
          grade: requalification.grade,
          handlingSymbol: requalification.handlingSymbol,
          storageConditions: requalification.storageConditions,
          lotUOM: requalification.lotUOM,
          usageUOM: requalification.usageUOM,
          issuesDisplayOrder: requalification.issuesDisplayOrder,
          minimumQty: requalification.minimumQty,
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
      <h1 className="text-2xl font-bold mb-4">Chemical / Reagent List</h1>
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
          <ATMButton text="Add Chemical" color="blue" onClick={openModal} />
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
      <ChemicalRegistrationModal
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
    </div></>
  );
};

export default ChemicalRegitration;
