import React, { useEffect, useState } from "react";
import {
  CButton,
  CFormInput,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";
import {
  faEye,
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Dropdown from "../../components/ATM components/Dropdown/Dropdown";
import ATMButton from "../../components/ATM components/Button/ATMButton";
import Table from "../../components/ATM components/Table/Table";
import ImportModal from "../Modals/importModal";
import PDFDownload from "../PDFComponent/PDFDownload ";
import ReusableModal from "../Modals/ResusableModal";
import LaunchQMS from "../../components/ReusableButtons/LaunchQMS";
import SearchBar from "../../components/ATM components/SearchBar/SearchBar";

const initialData = JSON.parse(localStorage.getItem("InvestigationL2")) || [];

const fields = [
  { label: "S.No", key: "sno" },
  { label: "Test Name", key: "testName" },
  { label: "Test Code", key: "testCode" },
  { label: "Test Type", key: "testType" },
  { label: "Added On", key: "addedOn" },
  { label: "Attachment", key: "attachment" },
  { label: "Status", key: "status" },
];

function InvestigationL2() {
  const [data, setData] = useState(initialData);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [viewModalData, setViewModalData] = useState(null);
  const [isModalsOpen, setIsModalsOpen] = useState(false);
  const [editModalData, setEditModalData] = useState(null);
  const [lastStatus, setLastStatus] = useState("INITIATED");

  useEffect(() => {
    localStorage.setItem("InvestigationL2", JSON.stringify(data));
  }, [data]);

  const handleOpenModals = () => setIsModalsOpen(true);
  const handleCloseModals = () => setIsModalsOpen(false);

  const handleSelectAll = (e) => {
    const checked = e.target.checked;
    const newData = data.map((row) => ({ ...row, checkbox: checked }));
    setData(newData);
  };

  const filteredData = data.filter((row) => {
    return (
      row.testName.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (statusFilter === "All" || row.status === statusFilter)
    );
  });

  const onViewDetails = (rowData) => setViewModalData(rowData);

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
    { header: "Test Name", accessor: "testName" },
    { header: "Test Code", accessor: "testCode" },
    { header: "Test Type", accessor: "testType" },
    { header: "Added On", accessor: "addedOn" },
    { header: "Attachment", accessor: "attachment" },
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
            onClick={() => openEditModal(row)}
          />
          <FontAwesomeIcon
            icon={faTrashCan}
            className="cursor-pointer"
            onClick={() => handleDelete(row)}
          />
        </>
      ),
    },
  ];

  const handleExcelDataUpload = (excelData) => {
    const updatedData = excelData.map((item, index) => ({
      checkbox: false,
      sno: data.length + index + 1,
      testName: item["Test Name"] || "",
      testCode: item["Test Code"] || "",
      testType: item["Test Type"] || "",
      addedOn: item["Added On"] || new Date().toISOString().split('T')[0],
      attachment: item["Attachment"] || "",
      status: item["Status"] || "INITIATED",
    }));

    setData(prevData => [...prevData, ...updatedData]);
    setIsModalsOpen(false);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const closeViewModal = () => setViewModalData(null);

  const handleDelete = (item) => {
    const newData = data.filter((d) => d !== item);
    setData(newData);
  };

  const openEditModal = (rowData) => setEditModalData(rowData);
  const closeEditModal = () => setEditModalData(null);

  const handleEditSave = (updatedData) => {
    const newData = data.map((item) =>
      item.sno === updatedData.sno ? updatedData : item
    );
    setData(newData);
    closeEditModal();
  };

  const handleStatusUpdate = (testName, newStatus) => {
    const updatedData = data.map((item) =>
      item.testName === testName ? { ...item, status: newStatus } : item
    );
    setData(updatedData);
  };

  const addNewInvestigation = (newInvestigation) => {
    const nextStatus = lastStatus === "DROPPED" ? "INITIATED" : "DROPPED";
    setData((prevData) => [
      ...prevData,
      {
        ...newInvestigation,
        sno: prevData.length + 1,
        checkbox: false,
        status: nextStatus,
        addedOn: new Date().toISOString().split('T')[0],
      },
    ]);
    setLastStatus(nextStatus);
    setIsModalOpen(false);
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

    return (
      <CModal alignment="center" visible={visible} onClose={closeModal}>
        <CModalHeader>
          <CModalTitle>{data.sno ? "Edit" : "Add"} Investigation L2</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CFormInput
            className="mb-3"
            type="text"
            label="Test Name"
            name="testName"
            value={formData.testName || ""}
            onChange={handleChange}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Test Code"
            name="testCode"
            value={formData.testCode || ""}
            onChange={handleChange}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Test Type"
            name="testType"
            value={formData.testType || ""}
            onChange={handleChange}
          />
          <CFormInput
            className="mb-3"
            type="file"
            label="Attachment"
            name="attachment"
            onChange={handleChange}
          />
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={closeModal}>
            Cancel
          </CButton>
          <CButton color="primary" onClick={handleSave}>
            Save Changes
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
          <h4 className="fw-bold">Investigation L2</h4>
        </div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex space-x-4">
            <SearchBar value={searchQuery} onChange={setSearchQuery} />
            <Dropdown
              options={[
                { value: "All", label: "All" },
                { value: "INITIATED", label: "Initiated" },
                { value: "COMPLETED", label: "Completed" },
                { value: "DROPPED", label: "Dropped" },
              ]}
              value={statusFilter}
              onChange={setStatusFilter}
            />
          </div>
          <div className="float-right flex gap-4">
            <PDFDownload
              columns={columns}
              data={filteredData}
              fileName="InvestigationL2.pdf"
              title="Investigation L2 Data"
            />
            <ATMButton text="Import" color="pink" onClick={handleOpenModals} />
            <ATMButton text="Add Investigation L2" color="blue" onClick={openModal} />
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
        <EditModal
          visible={isModalOpen}
          closeModal={closeModal}
          data={{}}
          onSave={addNewInvestigation}
        />
      )}
      {viewModalData && (
        <ReusableModal
          visible={viewModalData !== null}
          closeModal={closeViewModal}
          data={viewModalData}
          fields={fields}
          title="Investigation L2 Details"
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
      {isModalsOpen && (
        <ImportModal
          isOpen={isModalsOpen}
          onClose={handleCloseModals}
          columns={columns}
          onDataUpload={handleExcelDataUpload}
        />
      )}
    </>
  );
}

export default InvestigationL2;