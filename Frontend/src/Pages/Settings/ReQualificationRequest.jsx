

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
  //         <CModalTitle>Delete Re-Qualification Request</CModalTitle>
  //       </CModalHeader>
  //       <CModalBody>
  //         Do you want to delete this Re-Qualification Request <code>Q126</code>?
  //       </CModalBody>
  //       <CModalFooter>
  //         <CButton color="light" onClick={_props.closeModal}>
  //           Back
  //         </CButton>
  //         <CButton className="bg-danger text-white" onClick={_props.handleDelete}>Delete</CButton>
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
import RequalificationModalModal from "../Modals/RequalificationModalModal.jsx";
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

const initialData = [
  {
    checkbox: false,
    sno: 1,
    Analyst: "BA-001",
    QualificationId: "BA-001",
    QualificationType: "BA-001",
    EmployeeId: "BA-001",
    TestTechnique: "BA-001",
    InitiatedOn: "BA-001",
    status: "Active",
  },
  {
    checkbox: false,
    sno: 2,
    Analyst: "BA-002",
    QualificationId: "BA-002",
    QualificationType: "BA-002",
    EmployeeId: "BA-002",
    TestTechnique: "BA-002",
    InitiatedOn: "BA-002",
    status: "Inactive",
  },
 
];


const ReQualifictionRequest = () => {
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
        {" "}
        <CModal
          alignment="center"
          visible={visible}
          onClose={closeModal}
          size="lg"
        >
          <CModalHeader>
            <CModalTitle> Add Re-Qualification Request</CModalTitle>
          </CModalHeader>
          <CModalBody>
            <p className="my-3 fs-6 fw-bold">
              {" "}
              Add information about Re-Qualification Request.
            </p>
            <CFormSelect
              className="mb-3"
              label="Analyst"
              options={[
                { value: "Analyst", label: "Analyst" },
                { value: "Analyst Two", label: "Analyst Two" },
              ]}
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
              label="Role/Title"
              placeholder="Role/Title"
              value={formData?.role || ""}
              onChange={handleChange}
              name="role"
            />
            <CFormSelect
              label="Test Technique"
              className="mb-3"
              options={[{ value: "Description", label: "Description" }]}
              value={formData?.TestTechnique || ""}
              onChange={handleChange}
              name="TestTechnique"
         
            />
            <CFormInput
              type="text"
              className="mb-3"
              label="Justification For Requalification"
              placeholder="Training Details"
              value={formData?.Justification || ""}
              onChange={handleChange}
              name="Justification"
            />
          </CModalBody>
          <CModalFooter>
            <CButton color="light" onClick={closeModal}>
              Back
            </CButton>
            <CButton className="bg-info text-white" onClick={handleSave}>Add</CButton>
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
      sno:  index + 1,
      Analyst: item["Analyst"] || "",
      QualificationId: item["Qualification ID"] || "",
      QualificationType: item["Qualification Type"] || "",
      EmployeeId: item["Employee ID"] || "",
      TestTechnique: item["Test Technique"] || "",
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
    { header: "Analyst", accessor: "Analyst" },
    { header: "Qualification ID", accessor: "QualificationId" },
    { header: "Qualification Type", accessor: "QualificationType" },
    { header: "Employee ID", accessor: "EmployeeId" },
    { header: "Test Technique", accessor: "TestTechnique" },
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
          Analyst:requalification.analyst,
          Role:requalification.role,
          EmployeeId:requalification.employeeId,
          TestTechnique:requalification.testTechnique,
          QualificationId: "BA-00#",
          QualificationType: "BA-00@",
          JustificationforRequalification:requalification.justification,
          InitiatedOn: currentDate,
          status: "Active",
        },
      ]);
    }
    closeModal();
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Re-Qualification Request</h1>
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
        <ATMButton text="Import" color="pink" onClick={handleOpenModals} />

          <ATMButton text="Add Request" color="blue" onClick={openModal} />
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
      <RequalificationModalModal
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

export default ReQualifictionRequest;
