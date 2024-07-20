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
import WorkingStandardUsageModal from "../Modals/WorkingStandardUsageModal.jsx";
import ViewModal from "../Modals/ViewModal";
import ImportModal from "../Modals/importModal";
import {
  CButton,
  CForm,
  CFormCheck,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CFormTextarea,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";

const initialData = [
  {
    checkbox: false,
    sno: 1,
    refStdlotNo: "code1",
    quantityUsedNow: "code1",
    usedOn: "material 1",
    usedBy: "dummy desc",
    status: "DROPPED",
  },
  {
    checkbox: false,
    sno: 2,
    refStdlotNo: "code2",
    quantityUsedNow: "code2",
    usedOn: "material 2",
    usedBy: "description 2",
    status: "INITIATED",
  },
];

const WorkingStandardUsage = () => {
  const [data, setData] = useState(initialData);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [viewModalData, setViewModalData] = useState(null);
  const [isModalsOpen, setIsModalsOpen] = useState(false);

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
            <CModalTitle>Reference Standard Lot Usage</CModalTitle>
          </CModalHeader>
          <CModalBody>
            <CFormSelect
              type="text"
              label="W.S Lot No."
              placeholder="Select.. "
              className="custom-placeholder mb-3"
              name="refStdlotNo"
              value={formData?.refStdlotNo || ""}
              onChange={handleChange}
              options={[
                { value: "WSI-102023-000006/1", label: "WSI-102023-000006/1" },
                { value: "WSI-102023-000006/2", label: "WSI-102023-000006/2" },
                { value: "WSI-102023-000006/3", label: "WSI-102023-000006/3" },
                { value: "WSI-102023-000006/4", label: "WSI-102023-000006/4" },
                { value: "WSI-102023-000006/5", label: "WSI-102023-000006/5" },
                { value: "WSI-102023-000006/6", label: "WSI-102023-000006/6" },
                { value: "WSI-102023-000006/7", label: "WSI-102023-000006/7" },
                { value: "WSI-102023-000006/8", label: "WSI-102023-000006/8" },
                { value: "WSI-102023-000006/9", label: "WSI-102023-000006/9" },
                {
                  value: "WSI-102023-000006/10",
                  label: "WSI-102023-000006/10",
                },
              ]}
            />
            <CFormInput
              type="text"
              label="Product/Material"
              placeholder="Product/Material"
              className="custom-placeholder mb-3"
              name="refStdlotNo"
              value={formData?.refStdlotNo || ""}
              onChange={handleChange}
            />
            <CFormInput
              type="date"
              label="Lot Created Date"
              placeholder="Lot Created Date "
              className="custom-placeholder mb-3"
              name="lotCreatedDate"
              value={formData?.lotCreatedDate || ""}
              onChange={handleChange}
            />
            <CFormInput
              type="date"
              label="Lot Exp. Date"
              placeholder=" "
              className="custom-placeholder mb-3"
              name="lotExpDate"
              value={formData?.lotExpDate || ""}
              onChange={handleChange}
            />
            <CFormTextarea
              type="text"
              label="Usage Type"
              placeholder="Usage Type"
              className="custom-placeholder mb-3"
              name="usageType"
              value={formData?.usageType || ""}
              onChange={handleChange}
            />
            <CFormInput
              type="text"
              label="No. of Containers Prepared"
              placeholder="No. of Containers Prepared"
              className="custom-placeholder mb-3"
              name="noOfContainersPrepared"
              value={formData?.noOfContainersPrepared || ""}
              onChange={handleChange}
            />
            <CFormInput
              type="date"
              label="Container Issued On"
              placeholder=" "
              className="custom-placeholder mb-3"
              name="containerIssuedOn"
              value={formData?.containerIssuedOn || ""}
              onChange={handleChange}
            />
            <CFormInput
              type="date"
              label="Container Valid Upto"
              placeholder=""
              className="custom-placeholder mb-3"
              name="containerValidUpto"
              value={formData?.containerValidUpto || ""}
              onChange={handleChange}
            />
            <CFormInput
              type="number"
              label="Total Quantity in containers"
              placeholder=""
              className="custom-placeholder mb-3"
              name="totalQuantityInContainers"
              value={formData?.totalQuantityInContainers || ""}
              onChange={handleChange}
            />
            <CFormInput
              type="text"
              label="Available Quantity In Container"
              placeholder="Direction of Usage"
              className="custom-placeholder mb-3"
              name="availabeQuantityInContainers"
              value={formData?.availabeQuantityInContainers || ""}
              onChange={handleChange}
            />
            <CForm className="mb-3">
              <CFormLabel>Collection Type</CFormLabel>
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <CFormCheck
                  type="radio"
                  name="sampleRadio"
                  id="acceptRadio"
                  label="Manual"
                  value="accept"
                  checked={formData?.manual || ""}
                  onChange={handleChange}
                />
                <CFormCheck
                  type="radio"
                  name="sampleRadio"
                  id="rejectRadio"
                  label="Auto Binding"
                  value="reject"
                  checked={formData?.autoBinding || ""}
                  onChange={handleChange}
                />
                <CFormCheck
                  type="radio"
                  name="sampleRadio"
                  id="rejectRadio"
                  label="Set as default"
                  value="reject"
                  checked={formData?.setAsDefault || ""}
                  onChange={handleChange}
                />
              </div>
            </CForm>
            <CFormInput
              type="number"
              label="Quantity Used Now"
              placeholder="Select..."
              className="custom-placeholder mb-3"
              name="quantityUsedNow"
              value={formData?.quantityUsedNow || ""}
              onChange={handleChange}
            />
            <CFormInput
              type="date"
              label="Used On"
              placeholder="Select..."
              className="custom-placeholder mb-3"
              name="usedOn"
              value={formData?.usedOn || ""}
              onChange={handleChange}
            />
            <CFormInput
              type="number"
              label="Used By"
              placeholder="Select..."
              className="custom-placeholder mb-3"
              name="usedBy"
              value={formData?.usedBy || ""}
              onChange={handleChange}
            />
            <CForm className="mb-3">
              <CFormLabel>Usage for</CFormLabel>
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <CFormCheck
                  type="radio"
                  name="sampleRadio"
                  id="acceptRadio"
                  label="Sample Analysis"
                  value="accept"
                  checked={formData?.sampleAnalysis || ""}
                  onChange={handleChange}
                />
                <CFormCheck
                  type="radio"
                  name="sampleRadio"
                  id="rejectRadio"
                  label="Instrument Calibration"
                  value="reject"
                  checked={formData?.instrumentCalibration || ""}
                  onChange={handleChange}
                />
                <CFormCheck
                  type="radio"
                  name="sampleRadio"
                  id="rejectRadio"
                  label="Miscellaneous"
                  value="reject"
                  checked={formData?.miscellaneous || ""}
                  onChange={handleChange}
                />
              </div>
            </CForm>
          </CModalBody>

          <CModalFooter>
            <CButton color="light" onClick={closeModal}>
              Cancel
            </CButton>
            <CButton
              style={{ background: "#0F93C3", color: "white" }}
              onClick={handleSave}
            >
              Add Standard Lot Usage
            </CButton>
          </CModalFooter>
        </CModal>
      </div>
    );
  };

  // ************************************************************************************************

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

  const handleSelectAll = (e) => {
    const checked = e.target.checked;
    const newData = data.map((row) => ({ ...row, checkbox: checked }));
    setData(newData);
  };

  const handleOpenModals = () => {
    setIsModalsOpen(true);
  };

  const handleCloseModals = () => {
    setIsModalsOpen(false);
  };

  const filteredData = data.filter((row) => {
    return (
      row.quantityUsedNow.toLowerCase().includes(searchQuery.toLowerCase()) &&
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
      refStdlotNo: item["Ref. Std. Lot. No"] || "",
      quantityUsedNow: item["Quantity used"] || "",
      usedOn: item["Used On"] || "",
      usedBy: item["Used By"] || "",
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
    { header: "Ref. Std. Lot. No	", accessor: "refStdlotNo" },
    { header: "Quantity used	", accessor: "quantityUsedNow" },
    { header: "Used On", accessor: "usedOn" },
    { header: "Used By", accessor: "usedBy" },
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
          refStdlotNo: requalification.refStdlotNo,
          quantityUsedNow: requalification.quantityUsedNow,
          usedOn: currentDate,
          usedBy: requalification.usedBy,
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
      <h1 className="text-2xl font-bold mb-4">Working Standard Lot Usage</h1>
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
          <ATMButton text="Add Lot Usage" color="blue" onClick={openModal} />
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
      <WorkingStandardUsageModal
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
      {isModalsOpen && (
        <ImportModal
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

export default WorkingStandardUsage;
