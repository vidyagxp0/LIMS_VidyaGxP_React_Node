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
import ChemicalUsageModal from "../Modals/ChemicalUsageModal.jsx";
import ViewModal from "../Modals/ViewModal";
import ImportModal from "../Modals/importModal";
import PDFDownload from "../PDFComponent/PDFDownload .jsx";

const initialData = [
  {
    checkbox: false,
    sno: 1,
    uniqueCode: "code1",
    chemicalReagentName: "code1",
    ChemicalRegeantIssueNo: "material 1",
    issuedOn: "20-06-2024",
    status: "DROPPED",
  },
  {
    checkbox: false,
    sno: 2,
    uniqueCode: "code2",
    chemicalReagentName: "Chemical 2",
    ChemicalRegeantIssueNo: "material 2",
    issuedOn: "21-06-2024",
    status: "INITIATED",
  },
];

const generateRandomSymbolCode = () => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "CHU-052024-";
  for (let i = 0; i < 6; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

const ChemicalUsage = () => {
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
            <CModalTitle>Add Chemicals</CModalTitle>
          </CModalHeader>
          <p style={{ marginLeft: "13px" }}>Add information and Add Chemical</p>
          <CModalBody>
            <p style={{ fontWeight: "bolder" }}>Registration Initiation</p>
            <CFormSelect
              label="Chemical / Reagent Name"
              className="custom-placeholder mb-3"
              name="chemicalReagentName"
              value={formData?.chemicalReagentName || ""}
              onChange={handleChange}
            >
              <option value="">Select</option>
              {/* Add your options here */}
            </CFormSelect>
            <CFormSelect
              label="Chemical / Reagent Issue No."
              className="custom-placeholder mb-3"
              name="chemicalReagentIssueNo"
              value={formData?.chemicalReagentIssueNo || ""}
              onChange={handleChange}
            >
              <option value="">Select</option>
              {/* Add your options here */}
            </CFormSelect>

            <CFormInput
              type="text"
              label="Batch No."
              className="custom-placeholder mb-3"
              name="batchNo"
              value={formData?.batchNo || ""}
              onChange={handleChange}
            />
            <CFormInput
              type="date"
              label="Issued On"
              className="custom-placeholder mb-3"
              name="issuedOn"
              value={formData?.issuedOn || ""}
              onChange={handleChange}
            />
            <CFormInput
              type="text"
              label="Quantity Issued"
              className="custom-placeholder mb-3"
              name="quantityIssued"
              value={formData?.quantityIssued || ""}
              onChange={handleChange}
            />

            <CFormInput
              type="number"
              label="Available Qty. In This Issue"
              className="custom-placeholder mb-3"
              name="availableQty"
              value={formData?.availableQty || ""}
              onChange={handleChange}
            />
            <CForm className="mb-3">
              <CFormLabel>Collection Type</CFormLabel>
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <CFormCheck
                  type="radio"
                  name="collectionType"
                  id="manualRadio"
                  label="Manual"
                  value="manual"
                  checked={formData?.collectionType === "manual" || ""}
                  onChange={handleChange}
                />
                <CFormCheck
                  type="radio"
                  name="collectionType"
                  id="autoBindingRadio"
                  label="Auto Binding"
                  value="autoBinding"
                  checked={formData?.collectionType === "autoBinding" || ""}
                  onChange={handleChange}
                />
              </div>
            </CForm>
            {formData?.collectionType === "autoBinding" && (
              <div>
                <CFormSelect
                  label="Received From"
                  className="mb-3"
                  name="receivedFrom"
                  value={formData?.receivedFrom || ""}
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                  {/* Add your options here */}
                </CFormSelect>
                <div className="flex gap-5">
                  <CFormSelect
                    label="Instrument ID"
                    className="mb-3"
                    name="instrumentID"
                    value={formData?.instrumentID || ""}
                    onChange={handleChange}
                  >
                    <option value="">Select</option>
                    {/* Add your options here */}
                  </CFormSelect>
                  <CFormInput
                    type="datetime-local"
                    label="Usage Start-Date & Time"
                    className="mb-3"
                    name="usageStartDateTime"
                    value={formData?.usageStartDateTime || ""}
                    onChange={handleChange}
                  />
                </div>
                <CForm className="mb-3">
                  <CFormLabel>Data Transfer Mode</CFormLabel>
                  <div
                    style={{ display: "flex", justifyContent: "space-around" }}
                  >
                    <CFormCheck
                      type="radio"
                      name="dataTransferMode"
                      id="instConnRadio"
                      label="Inst Conn."
                      value="Inst Conn."
                      checked={
                        formData?.dataTransferMode === "Inst Conn." || ""
                      }
                      onChange={handleChange}
                    />
                    <CFormCheck
                      type="radio"
                      name="dataTransferMode"
                      id="bypassInstConnRadio"
                      label="By Pass Inst. Conn."
                      value="By Pass Inst. Conn."
                      checked={
                        formData?.dataTransferMode === "By Pass Inst. Conn." ||
                        ""
                      }
                      onChange={handleChange}
                    />
                  </div>
                </CForm>
              </div>
            )}
            <CFormInput
              type="number"
              label="Consumed"
              className="mb-3"
              name="consumed"
              value={formData?.consumed || ""}
              onChange={handleChange}
            />
            <CFormInput
              type="date"
              label="Used On"
              className="mb-3"
              name="usedOn"
              value={formData?.usedOn || ""}
              onChange={handleChange}
            />
            <CFormSelect
              label="Used by"
              className="custom-placeholder mb-3"
              name="usedBy"
              value={formData?.usedBy || ""}
              onChange={handleChange}
            >
              <option value="">Select</option>
              {/* Add your options here */}
            </CFormSelect>
            <CFormInput
              type="date"
              label="Valid Upto"
              className="mb-3"
              name="validUpto"
              value={formData?.validUpto || ""}
              onChange={handleChange}
            />

            <CForm className="mb-3">
              <CFormLabel>Usage For</CFormLabel>
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <CFormCheck
                  type="radio"
                  name="usageFor"
                  id="sampleAnalysisRadio"
                  label="Sample Analysis"
                  value="sampleAnalysis"
                  checked={formData?.usageFor === "sampleAnalysis" || ""}
                  onChange={handleChange}
                />
                <CFormCheck
                  type="radio"
                  name="usageFor"
                  id="miscellaneousRadio"
                  label="Miscellaneous"
                  value="miscellaneous"
                  checked={formData?.usageFor === "miscellaneous" || ""}
                  onChange={handleChange}
                />
              </div>
            </CForm>

            {formData?.usageFor === "sampleAnalysis" && (
              <div>
                <CFormInput
                  type="text"
                  label="Consumption Details"
                  className="mb-3"
                  name="consumptionDetails"
                  value={formData?.consumptionDetails || ""}
                  onChange={handleChange}
                />
                <CFormInput
                  type="file"
                  label="Product/Material"
                  className="mb-3"
                  name="productMaterial"
                  onChange={handleChange}
                />
                <CFormInput
                  type="text"
                  label="Test Name"
                  className="mb-3"
                  name="testName"
                  value={formData?.testName || ""}
                  onChange={handleChange}
                />
                <CFormInput
                  type="file"
                  label="AR NOS."
                  className="mb-3"
                  name="arNos"
                  onChange={handleChange}
                />
              </div>
            )}

            {formData?.usageFor === "miscellaneous" && (
              <div className="mb-3">
                <label>Consumption Details</label>
                <textarea
                  name="consumptionDetails"
                  className="form-control"
                  value={formData?.consumptionDetails || ""}
                  onChange={handleChange}
                ></textarea>
              </div>
            )}
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
      row.uniqueCode.toLowerCase().includes(searchQuery.toLowerCase()) &&
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
      uniqueCode: item["Unique code"] || "",
      chemicalReagentName: item["Chemical / Regeant Name	"] || "",
      ChemicalRegeantIssueNo: item["Chemical / Regeant Issue No"] || "",
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
    { header: "Unique code", accessor: "uniqueCode" },
    { header: "Chemical / Regeant Name	", accessor: "chemicalReagentName" },
    {
      header: "Chemical / Regeant Issue No.	",
      accessor: "ChemicalRegeantIssueNo",
    },
    { header: "Issued On.", accessor: "issuedOn" },
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
          chemicalReagentName: requalification.chemicalReagentName,
          ChemicalRegeantIssueNo: requalification.ChemicalRegeantIssueNo,
          batchNo: requalification.batchNo,
          uniqueCode: generateRandomSymbolCode(),
          issuedOn: currentDate,
          quantityIssued: requalification.quantityIssued,
          availableQty: requalification.availableQty,
          collectionType: requalification.collectionType,
          receivedFrom: requalification.receivedFrom,
          instrumentID: requalification.instrumentID,
          usageStartDateTime: requalification.usageStartDateTime,
          dataTransferMode: requalification.dataTransferMode,
          consumed: requalification.consumed,
          usedOn: requalification.usedOn,
          usedBy: requalification.usedBy,
          validUpto: requalification.validUpto,
          usageFor: requalification.usageFor,
          consumptionDetails: requalification.consumptionDetails,
          productMaterial: requalification.productMaterial,
          testName: requalification.testName,
          arNos: requalification.arNos,
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
      <h1 className="text-2xl font-bold mb-4">Chemical Usage</h1>
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
            text="Add Chemical Usage"
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
      <ChemicalUsageModal
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
    </div>
  );
};

export default ChemicalUsage;
