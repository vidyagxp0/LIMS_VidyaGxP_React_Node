import React, { useEffect, useState } from "react";
import {
  faEye,
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearchBar from "../../components/ATM components/SearchBar/SearchBar";
import Dropdown from "../../components/ATM components/Dropdown/Dropdown";
import ATMButton from "../../components/ATM components/Button/ATMButton";
import Table from "../../components/ATM components/Table/Table";
import { useNavigate } from "react-router-dom";
import ImportModal from "../Modals/importModal";
import {
  CButton,
  CFormInput,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";
import PDFDownload from "../PDFComponent/PDFDownload ";
import LaunchQMS from "../../components/ReusableButtons/LaunchQMS";

const initialData = [
  {
    checkbox: false,
    sno: 1,
    testName: "Test Name 1",
    testCode: "T001",
    testType: "Type A",
    addedOn: "2024-01-01",
    attachment: "attachment",
    status: "INITIATED",
  },
];

const InvestigationL1 = () => {
  const [data, setData] = useState(() => {
    const storedData = localStorage.getItem("investigationL1");
    return storedData ? JSON.parse(storedData) : initialData;
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [viewModalData, setViewModalData] = useState(null);
  const [isModalsOpen, setIsModalsOpen] = useState(false);
  const [editModalData, setEditModalData] = useState(null);
  const [lastStatus, setLastStatus] = useState("INITIATED");
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("investigationL1", JSON.stringify(data));
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

  const onViewDetails = (rowData) => {
    setViewModalData(rowData);
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
      Cell: ({ row }) => (
        <input
          type="checkbox"
          checked={row.original.checkbox || false}
          onChange={() => handleCheckboxChange(row.index)}
        />
      ),
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
      accessor: "actions",
      Cell: ({ row }) => (
        <div className="flex items-center space-x-2">
          <FontAwesomeIcon
            icon={faEye}
            className="cursor-pointer text-blue-500 hover:text-blue-700"
            onClick={() => onViewDetails(row.original)}
          />
          <FontAwesomeIcon
            icon={faPenToSquare}
            className="cursor-pointer text-green-500 hover:text-green-700"
            onClick={() => openEditModal(row.original)}
          />
          <FontAwesomeIcon
            icon={faTrashCan}
            className="cursor-pointer text-red-500 hover:text-red-700"
            onClick={() => handleDelete(row.original)}
          />
        </div>
      ),
    },
  ];

  const handleDelete = (item) => {
    const newData = data.filter((d) => d !== item);
    setData(newData);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleExcelDataUpload = (excelData) => {
    const updatedData = excelData.map((item, index) => ({
      checkbox: false,
      sno: data.length + index + 1,
      testName: item["Test Name"] || "",
      testCode: item["Test Code"] || "",
      testType: item["Test Type"] || "",
      addedOn: item["Added On"] || "",
      attachment: item["Attachment"] || "",
      status: item["Status"] || "INITIATED",
    }));

    setData((prevData) => [...prevData, ...updatedData]);
    setIsModalsOpen(false);
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

  const addNewInvestigation = (newInvestigation) => {
    const nextStatus = lastStatus === "DROPPED" ? "INITIATED" : "DROPPED";
    setData((prevData) => [
      ...prevData,
      {
        ...newInvestigation,
        sno: prevData.length + 1,
        checkbox: false,
        status: nextStatus,
      },
    ]);
    setLastStatus(nextStatus);
    setIsModalOpen(false);
  };

  const handleStatusUpdate = (testCode, newStatus) => {
    const updatedData = data.map((item) =>
      item.testCode === testCode ? { ...item, status: newStatus } : item
    );
    setData(updatedData);
  };

  const InvestigationModal = ({ visible, closeModal, onAdd }) => {
    const [testName, setTestName] = useState("");
    const [testCode, setTestCode] = useState("");
    const [testType, setTestType] = useState("");
    const [addedOn, setAddedOn] = useState("");

    const handleAdd = () => {
      const newInvestigation = {
        testName,
        testCode,
        testType,
        addedOn,
        attachment: "",
      };
      onAdd(newInvestigation);
    };

    return (
      <CModal alignment="center" visible={visible} onClose={closeModal}>
        <CModalHeader>
          <CModalTitle>Add Investigation L1</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CFormInput
            className="mb-3"
            type="text"
            label="Test Name"
            placeholder="Test Name"
            value={testName}
            onChange={(e) => setTestName(e.target.value)}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Test Code"
            placeholder="Test Code"
            value={testCode}
            onChange={(e) => setTestCode(e.target.value)}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Test Type"
            placeholder="Test Type"
            value={testType}
            onChange={(e) => setTestType(e.target.value)}
          />
          <CFormInput
            className="mb-3"
            type="date"
            label="Added On"
            value={addedOn}
            onChange={(e) => setAddedOn(e.target.value)}
          />
        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={closeModal}>
            Back
          </CButton>
          <CButton color="primary" onClick={handleAdd}>
            Submit
          </CButton>
        </CModalFooter>
      </CModal>
    );
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
          <CModalTitle>Edit Investigation L1</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CFormInput
            className="mb-3"
            type="text"
            label="Test Name"
            name="testName"
            value={formData?.testName || ""}
            onChange={handleChange}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Test Code"
            name="testCode"
            value={formData?.testCode || ""}
            onChange={handleChange}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Test Type"
            name="testType"
            value={formData?.testType || ""}
            onChange={handleChange}
          />
          <CFormInput
            className="mb-3"
            type="date"
            label="Added On"
            name="addedOn"
            value={formData?.addedOn || ""}
            onChange={handleChange}
          />
        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={closeModal}>
            Back
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
          <h4 className="fw-bold">Investigation L1</h4>
        </div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex space-x-4">
            <SearchBar value={searchQuery} onChange={setSearchQuery} />
            <Dropdown
              options={[
                { value: "All", label: "All" },
                { value: "INITIATED", label: "Initiated" },
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
              fileName="InvestigationL1.pdf"
              title="Investigation L1 Data"
            />
            <ATMButton text="Import" color="pink" onClick={handleOpenModals} />
            <ATMButton text="Add Investigation L1" color="blue" onClick={openModal} />
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

      <InvestigationModal
        visible={isModalOpen}
        closeModal={closeModal}
        onAdd={addNewInvestigation}
      />
      {viewModalData && (
        <ReusableModal
          visible={true}
          closeModal={() => setViewModalData(null)}
          data={viewModalData}
          fields={columns.map(col => ({ label: col.header, key: col.accessor }))}
          title="Investigation L1 Details"
          updateStatus={handleStatusUpdate}
        />
      )}
      {editModalData && (
        <EditModal
          visible={true}
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
};

export default InvestigationL1;