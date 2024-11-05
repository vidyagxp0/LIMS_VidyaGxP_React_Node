import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";


import SearchBar from "../../components/ATM components/SearchBar/SearchBar";
import Dropdown from "../../components/ATM components/Dropdown/Dropdown";
import ATMButton from "../../components/ATM components/Button/ATMButton";
import ProblemReportingModal from "../Modals/ProblemReportingModal.jsx";
import ViewModal from "../Modals/ViewModal";
import ImportModal from "../Modals/importModal.jsx";
import {
  CButton,
  CFormCheck,
  CFormInput,
  CFormSelect,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";
import PDFDownload from "../PDFComponent/PDFDownload .jsx";
import LaunchQMS from "../../components/ReusableButtons/LaunchQMS.jsx";

const initialData = [
  {
    checkbox: false,
    sno: 1,
    InstrumentId: "INST-001",
    InstrumentCategory: "Cat-001",
    SuppliedBy: "Supplier A",
    ProblemId: "PRB-001",
    ProblemInBrief: "Brief description 1",
    ProblemInDetails: "Detailed description 1",
    OccuredOn: "2024-06-01",
    status: "Active",
  },
  {
    checkbox: false,
    sno: 2,
    InstrumentId: "INST-002",
    InstrumentCategory: "Cat-002",
    SuppliedBy: "Supplier B",
    ProblemId: "PRB-002",
    ProblemInBrief: "Brief description 2",
    ProblemInDetails: "Detailed description 2",
    OccuredOn: "2024-06-02",
    status: "Inactive",
  },
];

const ProblemReporting = () => {
  const [data, setData] = useState(initialData);
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
      closeModal();
    };

    return (
      <CModal
        alignment="center"
        visible={visible}
        onClose={closeModal}
        size="xl"
      >
        <CModalHeader>
          <CModalTitle>Edit Problem Reporting</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p>Add information and Add Problem Reporting</p>
          <CFormSelect
            type="text"
            label="Instrument (Instrument ID)"
            options={[
              "Select...",
              { label: "eqi/eng/163" },
              { label: "arzph001" },
              { label: "arz003" },
              { label: "qc/bal/0011" },
              { label: "hplc" },
              { label: "qc/bal/02" },
            ]}
            placeholder="Select... "
            name="InstrumentId"
            value={formData?.InstrumentId || ""}
            onChange={handleChange}
          />
          <CFormInput
            type="text"
            className="mb-3"
            label="Instrument Category"
            placeholder="weighing balance "
            name="InstrumentCategory"
            value={formData?.InstrumentCategory || ""}
            onChange={handleChange}
          />
          <CFormInput
            type="text"
            className="mb-3"
            label="Supplied By"
            placeholder="Supplied By "
            name="SuppliedBy"
            value={formData?.SuppliedBy || ""}
            onChange={handleChange}
          />
          <CFormInput
            type="text"
            className="mb-3"
            label="Problem ID"
            placeholder="Problem ID"
            name="ProblemId"
            value={formData?.ProblemId || ""}
            onChange={handleChange}
          />
          <label>Problem In</label>
          <CFormCheck
            type="radio"
            id="ProblemInInstrument"
            name="ProblemIn"
            label="Instrument"
            value={formData?.ProblemIn || ""}
            onChange={handleChange}
          />
          <CFormCheck
            type="radio"
            className="mb-3"
            id="ProblemInModule"
            name="ProblemIn"
            label="Module"
            value={formData?.ProblemIn || ""}
            onChange={handleChange}
          />
          <CFormInput
            type="text"
            className="mb-3"
            name="ProblemInBrief"
            label="Problem In Brief"
            placeholder=" Problem In Brief"
            value={formData?.ProblemInBrief || ""}
            onChange={handleChange}
          />
          <CFormInput
            type="file"
            className="mb-3"
            label="Reference Document"
            placeholder=" choose file"
            name="ReferenceDocument"
            value={formData?.ReferenceDocument || ""}
            onChange={handleChange}
          />
          <CFormInput
            type="date"
            onFocus={(e) => e.target.showPicker()}
            label="Occurred On"
            name=""
            placeholder="OccurredOn"
            value={formData?.OccurredOn || ""}
            onChange={handleChange}
          />

          <CFormInput
            type="date"
            onFocus={(e) => e.target.showPicker()}
            className="mb-3"
            label="Reported On"
            name="ReportedOn"
            placeholder=" "
            value={formData?.ReportedOn || ""}
            onChange={handleChange}
          />
          <CFormInput
            type="text"
            className="mb-3"
            label="Problem In Details"
            placeholder=" Problem In Details"
            name="ProblemInDetails"
            value={formData?.ProblemInDetails || ""}
            onChange={handleChange}
          />
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={closeModal}>
            Close
          </CButton>
          <CButton color="primary" onClick={handleSave}>
            Save Changes
          </CButton>
          <CButton className="bg-info text-white" onClick={handleSave}>
            Submit
          </CButton>
        </CModalFooter>
      </CModal>
    );
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
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Problem Reporting</h1>

        <div className="flex items-center justify-between mb-4">
          <div className="flex space-x-4">
            {/* <SearchBar value={searchQuery} onChange={setSearchQuery} /> */}
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
            <ATMButton text="Add Problem" color="blue" onClick={openModal} />
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
        <ProblemReportingModal
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
        {editModalOpen && (
          <EditModal
            visible={editModalOpen}
            closeModal={closeEditModal}
            data={editModalData}
            onSave={handleEditSave}
          />
        )}
      </div>
    </>
  );
}

export default ProblemReporting;