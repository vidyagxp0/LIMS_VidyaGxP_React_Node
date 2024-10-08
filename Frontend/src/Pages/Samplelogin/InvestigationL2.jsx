import React, { useEffect, useState } from "react";
import {
  faEye,
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons"; // Changed to solid icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearchBar from "../../components/ATM components/SearchBar/SearchBar";
import Dropdown from "../../components/ATM components/Dropdown/Dropdown";
import ATMButton from "../../components/ATM components/Button/ATMButton";
import Table from "../../components/ATM components/Table/Table";
import { useNavigate } from "react-router-dom";
import ImportModal from "../Modals/importModal";
import {
  CButton,
  CCol,
  CFormInput,
  CFormSelect,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CRow,
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
  },
  {
    checkbox: false,
    sno: 2,
    testName: "Test Name 2",
    testCode: "T002",
    testType: "Type B",
    addedOn: "2024-01-02",
    attachment: "attachment",
  },
  {
    checkbox: false,
    sno: 3,
    testName: "Test Name 3",
    testCode: "T003",
    testType: "Type A",
    addedOn: "2024-01-03",
    attachment: "attachment",
  },
];

const InvestigationL2 = () => {
  const [data, setData] = useState(() => {
    const storedData = localStorage.getItem("investigationL2");
    return storedData ? JSON.parse(storedData) : initialData;
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [statusFilter, setStatusFilter] = useState("All");
  const [viewModalData, setViewModalData] = useState(null);
  const [isModalsOpen, setIsModalsOpen] = useState(false);
  const [editModalData, setEditModalData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("investigationL2", JSON.stringify(data));
  }, [data]);

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
      row.testName.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (statusFilter === "All" || row.status === statusFilter)
    );
  });

  const onViewDetails = (rowData) => {
    setViewModalData(rowData);
    navigate("/testResultsDetails");
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
    },
    { header: "SrNo.", accessor: "sno" },
    { header: "test Name", accessor: "testName" },
    { header: "Test Code", accessor: "testCode" },
    { header: "Test Type", accessor: "testType" },
    { header: "Added On", accessor: "addedOn" },
    { header: "attachment", accessor: "attachment" },
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

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const addNewInvestigation = (newInvestigation) => {
    const nextSno = data.length > 0 ? Math.max(...data.map(item => item.sno)) + 1 : 1;
    const newData = {
      ...newInvestigation,
      sno: nextSno,
      checkbox: false,
      status: "INITIATED",
    };
    setData([...data, newData]);
    closeModal();
  };

  const handleDelete = (item) => {
    const newData = data.filter((d) => d !== item);
    setData(newData);
    console.log("Deleted item:", item);
  };

  const handleExcelDataUpload = (excelData) => {
    const updatedData = excelData.map((item, index) => ({
      checkbox: false,
      sno: index + 1,
      testName: item["Test Name"] || "",
      testCode: item["Test Code"] || "",
      testType: item["Test Type"] || "",
      addedOn: item["Added On"] || "",
      attachment: item["Attachment"] || "", // Ensure field name matches your Excel data
      status: item["Status"] || "",
    }));

    // Concatenate the updated data with existing data
    const concatenatedData = [...updatedData];
    setData(concatenatedData);
    setIsModalsOpen(false); // Update data state with parsed Excel data
  };
  const openEditModal = (rowData) => {
    setEditModalData(rowData);
  };

  const closeEditModal = () => {
    setEditModalData(null);
  };
  const handleEditSave = (updatedData) => {
    const newData = data.map((item) =>
      item.sno === updatedData.sno ? updatedData : item
    );
    setData(newData);
    setEditModalData(null);
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
          <CModalTitle>Update User</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CFormInput
            className="mb-3"
            type="text"
            label="test Name"
            placeholder="Test Name "
            value={formData?.testName || ""}
            onChange={handleChange}
            name="testName"
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Test Code"
            placeholder="Test Code"
            value={formData?.testCode || ""}
            onChange={handleChange}
            name="testCode"
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Test Type"
            placeholder="Test Type "
            value={formData?.testType || ""}
            onChange={handleChange}
            name="testType"
          />
        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={closeModal}>
            Back
          </CButton>
          <CButton color="primary" onClick={handleSave}>
            Submit
          </CButton>
        </CModalFooter>
      </CModal>
    );
  };

  const InvestigationModal = ({ visible, closeModal, onAdd }) => {
    const [formData, setFormData] = useState({
      testName: "",
      testCode: "",
      testType: "",
      addedOn: new Date().toISOString().split('T')[0],
      attachment: "",
    });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };

    const handleSave = () => {
      onAdd(formData);
    };

    return (
      <CModal alignment="center" visible={visible} onClose={closeModal}>
        <CModalHeader>
          <CModalTitle>Add New Investigation L2</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CFormInput
            className="mb-3"
            type="text"
            label="Test Name"
            name="testName"
            value={formData.testName}
            onChange={handleChange}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Test Code"
            name="testCode"
            value={formData.testCode}
            onChange={handleChange}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Test Type"
            name="testType"
            value={formData.testType}
            onChange={handleChange}
          />
          <CFormInput
            className="mb-3"
            type="date"
            label="Added On"
            name="addedOn"
            value={formData.addedOn}
            onChange={handleChange}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Attachment"
            name="attachment"
            value={formData.attachment}
            onChange={handleChange}
          />
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={closeModal}>
            Cancel
          </CButton>
          <CButton color="primary" onClick={handleSave}>
            Add Investigation
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
          onDelete={handleDelete}
          onCheckboxChange={handleCheckboxChange}
          onViewDetails={onViewDetails}
          openEditModal={openEditModal}
        />
        {isModalOpen && (
          <InvestigationModal
            visible={isModalOpen}
            closeModal={closeModal}
            onAdd={addNewInvestigation}
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
        {editModalData && (
          <EditModal
            visible={Boolean(editModalData)}
            closeModal={closeEditModal}
            data={editModalData}
            onSave={handleEditSave}
          />
        )}
      </div>
    </>
  );
};
export default InvestigationL2;