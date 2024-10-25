// const StatusModal = (_props) => {
//   return (

//   );
// };

// const DeleteModel = (_props) => {
//   return (
//     <CModal
//       alignment="center"
//       visible={_props.visible}
//       onClose={_props.closeModal}
//     >
//       <CModalHeader>
//         <CModalTitle>Delete Analyst Proposal</CModalTitle>
//       </CModalHeader>
//       <CModalBody>
//         Do you want to delete this Analyst Proposal <code>ARZ ENT</code>?
//       </CModalBody>
//       <CModalFooter>
//         <CButton color="light" onClick={_props.closeModal}>
//           Back
//         </CButton>
//         <CButton className="bg-danger text-white" onClick={_props.handleDelete}>
//           Delete
//         </CButton>
//       </CModalFooter>
//     </CModal>
//   );
// };

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
import ProposalModal from "../Modals/ProposalModal.jsx";
import ViewModal from "../Modals/ViewModal";
import ImportModal from "../Modals/importModal.jsx";
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
import PDFDownload from "../PDFComponent/PDFDownload .jsx";

const initialData = [
  {
    checkbox: false,
    sno: 1,
    TrainingConfirmationId: "Associate 1",
    Analyst: "BA-001",
    EmployeeId: "BA-001",
    TestTechnique: "BA-001",
    TestTechniqueType: "BA-001",
    InitiatedOn: "BA-001",
    status: "Inactive",
  },
  {
    checkbox: false,
    sno: 2,
    TrainingConfirmationId: "Associate 2",
    Analyst: "BA-002",
    EmployeeId: "BA-002",
    TestTechnique: "BA-002",
    TestTechniqueType: "BA-002",
    InitiatedOn: "BA-002",
    status: "Active",
  },
  {
    checkbox: false,
    sno: 3,
    TrainingConfirmationId: "Associate 3",
    Analyst: "BA-003",
    EmployeeId: "BA-003",
    TestTechnique: "BA-003",
    TestTechniqueType: "BA-003",
    InitiatedOn: "BA-003",
    status: "Active",
  },
];

const Proposal = () => {
  const [data, setData] = useState(initialData);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [viewModalData, setViewModalData] = useState(null);
  const [cardCounts, setCardCounts] = useState({
    DROPPED: 0,
    INITIATED: 0,
    REINITIATED: 0,
    APPROVED: 0,
    REJECTED: 0,
  });

  const [isModalsOpen, setIsModalsOpen] = useState(false);
  const [lastStatus, setLastStatus] = useState("INACTIVE");
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
            <CModalTitle>Add Analyst Proposal</CModalTitle>
          </CModalHeader>
          <CModalBody>
            <p className="my-3 fs-5">
              Add information and add new Analyst Proposal
            </p>
            <CFormSelect
              type="text"
              className="mb-3"
              label="Training Confirmation ID"
              placeholder="Training Confirmation ID"
              options={["Select", { label: "No Options" }]}
              value={formData?.Analyst || ""}
              onChange={handleChange}
              name="Analyst"
            />
            <CFormInput
              type="text"
              className="mb-3"
              label="Analyst"
              placeholder="Analyst"
              value={formData?.Analyst || ""}
              onChange={handleChange}
              name="Analyst"
            />
            <CFormInput
              type="text"
              className="mb-3"
              label="Employee ID"
              placeholder="Employee ID"
              value={formData?.EmployeeId || ""}
              onChange={handleChange}
              name="EmployeeId"
            />
            <CFormInput
              type="text"
              className="mb-3"
              label="Test Technique"
              placeholder="Test Technique"
              value={formData?.TestTechnique || ""}
              onChange={handleChange}
              name="TestTechnique"
            />
            <CFormSelect
              type="text"
              className="mb-3"
              label="Test Plan"
              placeholder="Test Plan"
              options={["Select", { label: "No Options" }]}
              value={formData?.TestPlan || ""}
              onChange={handleChange}
              name="TestPlan"
            />
            <CFormInput
              type="number"
              className="mb-3"
              label="AR Number"
              placeholder="AR Number"
              value={formData?.ArNo || ""}
              onChange={handleChange}
              name="ArNo"
            />
            <CFormInput
              type="date"
              onFocus={(e) => e.target.showPicker()}
              className="mb-3"
              label="Due Date"
              placeholder="Due Date"
              value={formData?.DueDate || ""}
              onChange={handleChange}
              name="DueDate"
            />
            <CFormInput
              type="text"
              className="mb-3"
              label="Comments"
              placeholder="Comments"
              value={formData?.Comments || ""}
              onChange={handleChange}
              name="Comments"
            />
          </CModalBody>
          <CModalFooter>
            <CButton color="light" onClick={closeModal}>
              Back
            </CButton>
            <CButton className="bg-info text-white" onClick={handleSave}>
              Submit
            </CButton>
          </CModalFooter>
        </CModal>
      </div>
    );
  };

  const handleOpenModals = () => {
    setIsModalsOpen(true);
  };

  const handleCloseModals = () => {
    setIsModalsOpen(false);
  };

  useEffect(() => {
    const counts = {
      DROPPED: 0,
      INITIATED: 0,
      REINITIATED: 0,
      APPROVED: 0,
      REJECTED: 0,
    };

    data.forEach((item) => {
      if (item.status === "Active") counts.Active++;
      else if (item.status === "Inactive") counts.Inactive++;
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

  const filteredData = data.filter((row) => {
    return (
      row.EmployeeId.toLowerCase().includes(searchQuery.toLowerCase()) &&
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
      TrainingConfirmationId: item["Training Confirmation ID"] || "",
      Analyst: item["Analyst"] || "",
      EmployeeId: item["Employee ID"] || "",
      TestTechnique: item["Test Technique"] || "",
      TestTechniqueType: item["Test Technique Type"] || "",
      InitiatedOn: item["Initiated On"] || "",
      status: item["Status"] || "",
    }));

    const concatenateData = [...updatedData];
    setData(concatenateData); // Update data state with parsed Excel data
    setIsModalsOpen(false); // Close the import modal after data upload
  };

  const columns = [
    {
      header: <input type="checkbox" onChange={handleSelectAll} />,
      accessor: "checkbox",
    },
    { header: "SrNo.", accessor: "sno" },
    { header: "Training Confirmation ID", accessor: "TrainingConfirmationId" },
    { header: "Analyst", accessor: "Analyst" },
    { header: "Employee ID", accessor: "EmployeeId" },
    { header: "Test Technique", accessor: "TestTechnique" },
    { header: "Test Technique Type", accessor: "TestTechniqueType" },
    { header: "Initiated On", accessor: "InitiatedOn" },
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

  const handleModalSubmit = (proposal) => {
    const currentDate = new Date().toISOString().split("T")[0];
    if (editModalData) {
      const updatedList = data.map((item) =>
        item.sno === proposal.sno ? proposal : item
      );
      setData(updatedList);
    } else {
      setData((prevData) => [
        ...prevData,
        {
          checkbox: false,
          sno: prevData.length + 1,
          Analyst: proposal.analyst,
          TestTechnique: proposal.testTechnique,
          EmployeeId: proposal.employeeId,
          TrainingConfirmationId: proposal.trainingConfirmationId,
          TestOfTechnique: proposal.testOfTechnique,
          TestPlan: proposal.testPlan,
          ArNo: proposal.arNo,
          Comments: proposal.comments,
          DueDate: proposal.dueDate,
          TestTechniqueType: "BA-001",
          InitiatedOn: currentDate,
          status: "Active",
        },
      ]);
    }
    closeModal();
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Analyst Proposal</h1>
      {/* <div className="grid grid-cols-5 gap-4 mb-4">
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
      </div> */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex space-x-4">
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
          <Dropdown
            options={[
              { value: "All", label: "All" },
              { value: "Active", label: "Active" },
              { value: "Inactive", label: "Inactive" },
            ]}
            value={statusFilter}
            onChange={setStatusFilter}
          />
        </div>
        <div className="float-right flex gap-4">
          <PDFDownload
            columns={columns}
            data={filteredData}
            fileName="Proposal.pdf"
            title="Proposal Data"
          />
          <ATMButton text="Import" color="pink" onClick={handleOpenModals} />

          <ATMButton text="Add Confirmation" color="blue" onClick={openModal} />
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
      <ProposalModal
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

export default Proposal;
