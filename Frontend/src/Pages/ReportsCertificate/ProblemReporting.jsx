import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
// import {
//   CButton,
//   CModal,
//   CModalBody,
//   CModalFooter,
//   CModalHeader,
//   CModalTitle,
//   CForm,
//   CFormInput,
//   CFormSelect,
// } from "@coreui/react";
import SearchBar from "../../components/ATM components/SearchBar/SearchBar";
import Dropdown from "../../components/ATM components/Dropdown/Dropdown";
import ATMButton from "../../components/ATM components/Button/ATMButton";
import Table from "../../components/ATM components/Table/Table";
import ReusableModal from "../Modals/ResusableModal";
import ImportModal from "../Modals/importModal";
import PDFDownload from "../PDFComponent/PDFDownload ";
import ProblemReportingModal from "../Modals/ProblemReportingModal";
import LaunchQMS from "../../components/ReusableButtons/LaunchQMS";
import { BASE_URL } from "../../config.json";

function ProblemReporting() {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [viewModalData, setViewModalData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalsOpen, setIsModalsOpen] = useState(false);
  const [editModalData, setEditModalData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchProblemReports();
  }, []);

  const fetchProblemReports = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/get-all-lims/rCProblemReporting`);
      const formattedData = response?.data[0]?.rCProblemReporting || [];
      const updatedData = formattedData.map((item, index) => ({
        ...item,
        sno: index + 1,
      }));
      setData(updatedData);
    } catch (error) {
      console.error("Error fetching problem reports:", error);
      toast.error("Failed to fetch problem reports");
    }
  };

  const handleDelete = async (item) => {
    try {
      const response = await axios.delete(
        `${BASE_URL}/delete-lims/rCProblemReporting/${item.uniqueId}`
      );
      if (response?.status === 200) {
        const newData = data.filter((d) => d.sno !== item.sno);
        setData(newData);
        toast.success("Problem report deleted successfully");
        fetchProblemReports();
      } else {
        toast.error("Failed to delete problem report");
      }
    } catch (error) {
      console.error("Error deleting problem report:", error);
      toast.error("Error deleting problem report");
    }
  };

  const onViewDetails = (rowData) => {
    setViewModalData(rowData);
  };

  const closeViewModal = () => {
    setViewModalData(null);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleOpenModals = () => setIsModalsOpen(true);
  const handleCloseModals = () => setIsModalsOpen(false);

  const columns = [
    { header: "Sr No.", accessor: "sno" },
    { header: "Instrument ID", accessor: "instrumentId" },
    { header: "Instrument Category", accessor: "InstrumentCategory" },
    { header: "Supplied By", accessor: "suppliedBy" },
    { header: "Problem ID", accessor: "problemId" },
    { header: "Problem In Brief", accessor: "problemInBrief" },
    { header: "Problem In Details", accessor: "problemInDetails" },
    { header: "Occurred On", accessor: "occurredOn" },
    { header: "Status", accessor: "Active" },
    {
      header: "Actions",
      accessor: "action",
      Cell: ({ row }) => (
        <>
          <FontAwesomeIcon
            icon={faEye}
            className="mr-2 cursor-pointer"
            onClick={() => onViewDetails(row.original)}
          />
          <FontAwesomeIcon
            icon={faPenToSquare}
            className="mr-2 cursor-pointer"
            onClick={() => openEditModal(row.original)}
          />
          <FontAwesomeIcon
            icon={faTrashCan}
            className="cursor-pointer"
            onClick={() => handleDelete(row.original)}
          />
        </>
      ),
    },
  ];

  const filteredData = data.filter((row) => {
    const problemInBriefLower = row.problemInBrief?.toLowerCase() || "";
    return (
      problemInBriefLower.includes(searchQuery.toLowerCase()) &&
      (statusFilter === "All" || row.status === statusFilter)
    );
  });
  console.log(filteredData, "filteredData");
  

  const handleExcelDataUpload = async (excelData) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/manage-lims/add/rCProblemReporting`,
        excelData
      );
      if (response.status === 200) {
        toast.success("Problem reports imported successfully");
        fetchProblemReports();
      }
    } catch (error) {
      console.error("Error importing problem reports:", error);
      toast.error("Failed to import problem reports");
    }
    setIsModalsOpen(false);
  };

  const addNewProblemReport = async (newReport) => {
    setIsLoading(true);
    try{
      const reportWithDefaultStatus = {
        ...newReport,
        status: 'Active'
      }
      const response = await axios.post(
        `${BASE_URL}/manage-lims/add/rCProblemReporting`,
        newReport
      );
      if (response.status === 200) {
        toast.success("Problem report added successfully");
        fetchProblemReports();
      }
    } catch (error) {
      console.error("Error adding problem report:", error);
      toast.error("Failed to add problem report");
    } finally {
      setIsLoading(false);
    }
    setIsModalOpen(false);
  };

  const openEditModal = (rowData) => {
    setEditModalData(rowData);
  };

  const closeEditModal = () => {
    setEditModalData(null);
  };

  const handleEditSave = async (updatedData) => {
    const { sno, ...dataToSend } = updatedData;
    setIsLoading(true);
    try {
      const response = await axios.put(
        `${BASE_URL}/manage-lims/update/rCProblemReporting/${updatedData.uniqueId}`,
        dataToSend
      );
      if (response.status === 200) {
        setData((prevData) =>
          prevData.map((item) =>
            item.uniqueId === updatedData.uniqueId ? { ...item, ...updatedData } : item
          )
        );
        toast.success("Problem report updated successfully");
      } else {
        toast.error("Failed to update problem report");
      }
    } catch (error) {
      console.error("Error updating problem report:", error);
      toast.error("Failed to update problem report");
    } finally {
      setIsLoading(false);
      setEditModalData(null);
    }
  };

  const handleStatusUpdate = async (problemReport, newStatus) => {
    try {
      const response = await axios.put(
        `${BASE_URL}/manage-lims/update/rCProblemReporting/${problemReport.uniqueId}`,
        { ...problemReport, status: newStatus }
      );
      if (response.status === 200) {
        const updatedData = data.map((item) =>
          item.uniqueId === problemReport.uniqueId ? { ...item, status: newStatus } : item
        );
        setData(updatedData);
        toast.success("Status updated successfully");
      } else {
        toast.error("Failed to update status");
      }
    } catch (error) {
      console.error("Error updating status:", error);
      toast.error("Failed to update status");
    }
  };

  // ... (keep StatusModal, EditModal components)

  return (
    <>
      <LaunchQMS />
      <div className="m-5 mt-3">
        <div className="main-head">
          <h4 className="fw-bold">Problem Reporting</h4>
        </div>
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
              fileName="Problem_Reporting.pdf"
              title="Problem Reporting Data"
            />
            <ATMButton text="Import" color="pink" onClick={handleOpenModals} />
            <ATMButton
              text="Add Problem Report"
              color="blue"
              onClick={openModal}
            />
          </div>
        </div>
        <Table
          columns={columns}
          data={filteredData}
          onDelete={handleDelete}
          onViewDetails={onViewDetails}
          openEditModal={openEditModal}
          />
      </div>
      
      {viewModalData && (
        <ReusableModal
          visible={viewModalData !== null}
          closeModal={closeViewModal}
          data={viewModalData}
          fields={columns.map(col => ({ key: col.accessor, label: col.header })).filter(field => field.key !== 'action')}
          title="Problem Report Details"
          updateStatus={handleStatusUpdate}
        />
      )}
      
      {isModalOpen && (
        // <StatusModal
        //   visible={isModalOpen}
        //   closeModal={closeModal}
        //   onAdd={addNewProblemReport}
        // />
        
      <ProblemReportingModal
      visible={isModalOpen}
      closeModal={closeModal}
      handleSubmit={addNewProblemReport}
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
    </>
  );
}

export default ProblemReporting;