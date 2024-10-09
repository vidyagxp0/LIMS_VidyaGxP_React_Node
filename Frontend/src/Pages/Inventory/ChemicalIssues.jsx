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
import ChemicalIssueModal from "../Modals/ChemicalIssueModal.jsx";
import ViewModal from "../Modals/ViewModal";
import ImportModal from "../Modals/importModal";
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
import LaunchQMS from "../../components/ReusableButtons/LaunchQMS.jsx";

const initialData = [
  {
    checkbox: false,
    sno: 1,
    chemicalReagentName: "code1",
    chemicalRegeantLotNo: "code1",
    quantityIssuedNow: "material 1",
    issuedBy: "John Doe",
    issuedOn: "20-06-2024",
    status: "DROPPED",
  },
  {
    checkbox: false,
    sno: 2,
    chemicalReagentName: "Chemical 2",
    chemicalRegeantLotNo: "lot2",
    quantityIssuedNow: "material 2",
    issuedBy: "Jane Smith",
    issuedOn: "21-06-2024",
    status: "INITIATED",
  },
];

const ChemicalIssues = () => {
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
            <p style={{ fontWeight: "bolder" }}>Registration Initiation</p>
            <CFormSelect
              type="text"
              label="Chemical / Regeant Lot No."
              placeholder="Select"
              className="custom-placeholder mb-3"
              options={[
                { value: "CHL-052024-0000002", label: "CHL-052024-0000002" },
                { value: "CHL-052024-0000001", label: "CHL-052024-0000001" },
              ]}
              name="chemicalRegeantLotNo"
              value={formData?.chemicalRegeantLotNo || ""}
              onChange={handleChange}
            />
            <CFormInput
              type="text"
              label="Chemical / Reagent Name"
              placeholder="Name"
              className="custom-placeholder mb-3"
              name="chemicalReagentName"
              value={formData?.chemicalReagentName || ""}
              onChange={handleChange}
            />

            <CFormInput
              type="text"
              label="Batch No."
              placeholder="Batch No."
              className="custom-placeholder mb-3"
              name="batchNo"
              value={formData?.batchNo || ""}
              onChange={handleChange}
            />
            <CFormInput
              type="date"
              label="Lot Received On"
              placeholder="Select"
              className="custom-placeholder mb-3"
              name="lotReceivedOn"
              value={formData?.lotReceivedOn || ""}
              onChange={handleChange}
            />
            <CFormInput
              type="text"
              label="Lot Quantity Received"
              placeholder="Lot Quantity Received"
              className="custom-placeholder mb-3"
              name="lotQuantityReceived"
              value={formData?.lotQuantityReceived || ""}
              onChange={handleChange}
            />

            <CFormInput
              type="number"
              label="Available Qty. In This Lot"
              placeholder="Available Qty. In This Lot"
              className="custom-placeholder mb-3"
              name="availableQty"
              value={formData?.availableQty || ""}
              onChange={handleChange}
            />
            <CFormInput
              type="date"
              label="Expiry Date"
              placeholder="Select"
              className="mb-3"
              name="expiryDate"
              value={formData?.expiryDate || ""}
              onChange={handleChange}
            />
            <CFormInput
              type="text"
              label="Quantity Issued Now"
              placeholder="Select"
              className="custom-placeholder mb-3"
              name="quantityIssuedNow"
              value={formData?.quantityIssuedNow || ""}
              onChange={handleChange}
            />
            <CFormSelect
              type="text"
              label="Issued By"
              placeholder="Select"
              className="mb-3"
              name="issuedBy"
              value={formData?.issuedBy || ""}
              onChange={handleChange}
              options={[
                { value: "Initiator", label: "Initiator" },
                { value: "Manager", label: "Manager" },
              ]}
            />
            <CFormInput
              type="number"
              label="Valid Upto"
              placeholder="Select"
              className="mb-3"
              name="validUpto"
              value={formData?.validUpto || ""}
              onChange={handleChange}
            />

            <div>
              <p>Remarks</p>
              <textarea
                style={{ width: "400px" }}
                className="form-control mb-3"
                name="remarks"
                value={formData?.remarks || ""}
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
              Add Chemical Issue
            </CButton>
          </CModalFooter>
        </CModal>
      </div>
    );
  };

  // ************************************************************************************************

  const handleSelectAll = (e) => {
    const checked = e.target.checked;
    const newData = data.map((row) => ({ ...row, checkbox: checked }));
    setData(newData);
  };

  const filteredData = data.filter((row) => {
    return (
      row.chemicalReagentName
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) &&
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
      chemicalReagentName: item["Chemical / Regeant Name"] || "",
      chemicalRegeantLotNo: item["Chemical / Regeant Lot No."] || "",
      quantityIssuedNow: item["quantity Issued"] || "",
      issuedBy: item["Issued By"] || "",
      issuedOn: item["Issued On"] || "",
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
    { header: "Chemical / Regeant Name", accessor: "chemicalReagentName" },
    { header: "Chemical / Regeant Lot No.", accessor: "chemicalRegeantLotNo" },
    { header: "quantity Issued", accessor: "quantityIssuedNow" },
    { header: "Issued By", accessor: "issuedBy" },
    { header: "Issued On", accessor: "issuedOn" },
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
          chemicalRegeantLotNo: requalification.chemicalRegeantLotNo,
          chemicalReagentName: requalification.chemicalReagentName,
          batchNo: requalification.batchNo,
          issuedOn: currentDate,
          lotReceivedOn: requalification.lotReceivedOn,
          lotQuantityReceived: requalification.lotQuantityReceived,
          availableQty: requalification.availableQty,
          expiryDate: requalification.expiryDate,
          quantityIssuedNow: requalification.quantityIssuedNow,
          issuedBy: requalification.issuedBy,
          validUpto: requalification.validUpto,
          remarks: requalification.remarks,
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
      <h1 className="text-2xl font-bold mb-4">Chemical / Reagent Issue</h1>
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
            text="Add Chemical Issue"
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
      <ChemicalIssueModal
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

export default ChemicalIssues;
