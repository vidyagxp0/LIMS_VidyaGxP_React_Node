import { useEffect, useState } from "react";
import {
  CButton,
  CFormInput,
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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Dropdown from "../../components/ATM components/Dropdown/Dropdown";
import ATMButton from "../../components/ATM components/Button/ATMButton";
import Table from "../../components/ATM components/Table/Table";
import ImportModal from "../Modals/importModal";
import PDFDownload from "../PDFComponent/PDFDownload ";
import ReusableModal from "../Modals/ResusableModal";
import LaunchQMS from "../../components/ReusableButtons/LaunchQMS";

const initialData = JSON.parse(localStorage.getItem("Samplelogin")) || [];

const fields = [
  { label: "Sample Type", key: "sampleType" },
  { label: "Product / Material", key: "storageCondition" },
  { label: "A.R. No.", key: "createdAt" },
  { label: "Generic Name", key: "genericName" },
  { label: "Specification Code", key: "specificationCode" },
  { label: "Status", key: "status" },
  { label: "Analyst", key: "analyst" },
  { label: "Analysis Date", key: "analysisDate" },
  { label: "Attachment", key: "attachment" },
];

function SampleLogin() {
  const [data, setData] = useState(initialData);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [viewModalData, setViewModalData] = useState(null);
  const [isModalsOpen, setIsModalsOpen] = useState(false);
  const [editModalData, setEditModalData] = useState(null);

  useEffect(() => {
    localStorage.setItem("Samplelogin", JSON.stringify(data));
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
      row.sampleType.toLowerCase().includes(searchQuery.toLowerCase()) &&
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
    { header: "Sample Type", accessor: "sampleType" },
    { header: "Product / Material", accessor: "storageCondition" },
    { header: "A.R. No.", accessor: "createdAt" },
    { header: "Generic Name", accessor: "genericName" },
    { header: "Specification Code", accessor: "specificationCode" },
    { header: "Status", accessor: "status" },
    { header: "Analyst", accessor: "analyst" },
    { header: "Analysis Date", accessor: "analysisDate" },
    { header: "Attachment", accessor: "attachment" },
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
      sno: index + 1,
      sampleType: item["Sample Type"] || "",
      storageCondition: item["Product / Material"] || "",
      createdAt: item["A.R. No."] || "",
      genericName: item["Generic Name"] || "",
      specificationCode: item["Specification Code"] || "",
      status: item["Status"] || "INITIATED",
      analyst: item["Analyst"] || "",
      analysisDate: item["Analysis Date"] || "",
      attachment: item["Attachment"] || "",
    }));

    const concatenatedData = [...updatedData];
    setData(concatenatedData);
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
          <CModalTitle>Edit Sample</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CFormInput
            type="text"
            className="mb-3"
            label="Sample Type"
            name="sampleType"
            value={formData?.sampleType || ""}
            onChange={handleChange}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Product / Material"
            name="storageCondition"
            value={formData?.storageCondition || ""}
            onChange={handleChange}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="A.R. No."
            name="createdAt"
            value={formData?.createdAt || ""}
            onChange={handleChange}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Generic Name"
            name="genericName"
            value={formData?.genericName || ""}
            onChange={handleChange}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Specification Code"
            name="specificationCode"
            value={formData?.specificationCode || ""}
            onChange={handleChange}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Status"
            name="status"
            value={formData?.status || ""}
            onChange={handleChange}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Analyst"
            name="analyst"
            value={formData?.analyst || ""}
            onChange={handleChange}
          />
          <CFormInput
            className="mb-3"
            type="date"
            label="Analysis Date"
            name="analysisDate"
            value={formData?.analysisDate || ""}
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
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Sample Login</h1>
        <div className="flex items-center justify-between mb-4">
          <div className="flex space-x-4">
          <Dropdown
            options={[
              { value: "Ar No.", label: "Ar No." },
              { value: "ARAMPHO000126", label: "ARAMPHO000126" },
              { value: "ARRW0000125", label: "ARRW0000125" },
              { value: "ARRW0000124", label: "ARRW0000124" },
              { value: "ARFP0000123", label: "ARFP0000123" },
              { value: "ARABEP0000122", label: "ARABEP0000122" },
              { value: "ARAMPHO0000121", label: "ARAMPHO0000121" },
              { value: "ARAMPHO0000120", label: "ARAMPHO0000120" },
              { value: "ARAMPHO0000119", label: "ARAMPHO0000119" },
              { value: "ARPC0000118", label: "ARPC0000118" },
              { value: "ARFFT0000117", label: "ARFFT0000117" },
              { value: "ARFP0000116", label: "ARFP0000116" },
            ]}
            value={statusFilter}
            onChange={setStatusFilter}
          />
            <Dropdown
              options={[
                { value: "All", label: "All" },
                { value: "INITIATED", label: "Initiated" },
                { value: "APPROVED", label: "Approved" },
                { value: "REJECTED", label: "Rejected" },
              ]}
              value={statusFilter}
              onChange={setStatusFilter}
            />
          </div>
          <div className="float-right flex gap-4">
            <PDFDownload
              columns={columns}
              data={filteredData}
              fileName="Sample_Login.pdf"
              title="Sample Login Data"
            />
            <ATMButton text="Import" color="pink" onClick={handleOpenModals} />
            <ATMButton text="Add Sample" color="blue" onClick={openModal} />
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
          onSave={(newSample) => {
            setData([...data, { ...newSample, sno: data.length + 1 }]);
            closeModal();
          }}
        />
      )}
      {viewModalData && (
        <ReusableModal
          visible={viewModalData !== null}
          closeModal={closeViewModal}
          data={viewModalData}
          fields={fields}
          title="Sample Details"
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

export default SampleLogin;