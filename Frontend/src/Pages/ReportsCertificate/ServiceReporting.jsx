import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { CButton, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CForm, CFormInput, CFormSelect } from "@coreui/react";
import SearchBar from "../../components/ATM components/SearchBar/SearchBar";
import Dropdown from "../../components/ATM components/Dropdown/Dropdown";
import ATMButton from "../../components/ATM components/Button/ATMButton";
import Table from "../../components/ATM components/Table/Table";
import ReusableModal from "../Modals/ResusableModal";
import ImportModal from "../Modals/importModal";
import PDFDownload from "../PDFComponent/PDFDownload ";
import LaunchQMS from "../../components/ReusableButtons/LaunchQMS";
import { BASE_URL } from "../../config.json";

const ServiceReporting = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [viewModalData, setViewModalData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalsOpen, setIsModalsOpen] = useState(false);
  const [editModalData, setEditModalData] = useState(null);

  
  useEffect(() => {
    fetchServiceReportingData();
  }, []);
  const fetchServiceReportingData = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/get-all-lims/rCServiceReporting`);
      console.log(response,"Response");
      const formattedData = response?.data[0]?.rCServiceReporting || [];
      console.log(formattedData,"formattedData");
      const updatedData = formattedData.map((item, index) => ({
        ...item,
        sno: index + 1,
        checkbox: false,
      }));
      setData(updatedData);
      console.log(updatedData);
      
    } catch (error) {
      console.error("Error fetching Service Reporting data:", error);
      toast.error("Failed to fetch Service Reporting data");
    }
  };

  const handleSelectAll = (e) => {
    const checked = e.target.checked;
    setData((prevData) => prevData.map((row) => ({ ...row, checkbox: checked })));
  };

  const handleCheckboxChange = useCallback((index) => {
    setData((prevData) =>
      prevData.map((item, i) => (i === index ? { ...item, checkbox: !item.checkbox } : item))
    );
  }, []);

  const handleDelete = async (item) => {
    try {
      const response = await axios.delete(`${BASE_URL}/delete-lims/rCServiceReporting/${item.uniqueId}`);
      if (response?.status === 200) {
        setData((prevData) => prevData.filter((d) => d.uniqueId !== item.uniqueId));
        toast.success("Service Reporting data deleted successfully");
        fetchServiceReportingData();
      } else {
        toast.error("Failed to delete Service Reporting data");
      }
    } catch (error) {
      console.error("Error deleting Service Reporting data:", error);
      toast.error("Error deleting Service Reporting data");
    }
  };

  const handleStatusUpdate = async (newStatus) => {
    if (!newStatus || !viewModalData) {
      toast.error("Invalid status update");
      return;
    }
    try {
      const { sno, ...dataToSend } = viewModalData;
      const response = await axios.put(`${BASE_URL}/manage-lims/update/rCServiceReporting/${viewModalData.uniqueId}`, {
        ...dataToSend,
        status: newStatus,
      });
      if (response.status === 200) {
        setData((prevData) =>
          prevData.map((item) =>
            item.uniqueId === viewModalData.uniqueId ? { ...item, status: newStatus } : item
          )
        );
        toast.success("Service Reporting status updated successfully");
        closeViewModal();
      } else {
        toast.error("Failed to update Service Reporting status");
      }
    } catch (error) {
      console.error("Error updating Service Reporting status:", error);
      toast.error("Error updating Service Reporting status");
    }
  };

  const addNewServiceReporting = async (newServiceReporting) => {
    try {
      const response = await axios.post(`${BASE_URL}/manage-lims/add/rCServiceReporting`, newServiceReporting);
      if (response.status === 200) {
        const addedServiceReporting = response.data;
        setData((prevData) => [
          {
            ...addedServiceReporting,
            checkbox: false,
          },
          ...prevData,
        ]);
        toast.success("Service Reporting added successfully");
        setIsModalOpen(false);
        fetchServiceReportingData();
      }else {
        toast.error("Failed to add Service Reporting");
      }
    } catch (error) {
      console.error("Error adding Service Reporting:", error);
      toast.error("Failed to add Service Reporting");
    }
    setIsModalOpen(false);
  };

  const handleEditSave = async (updatedData) => {
    try {
      const { sno, ...dataToSend } = updatedData;
      const response = await axios.put(`${BASE_URL}/manage-lims/update/rCServiceReporting/${updatedData.uniqueId}`, dataToSend);
      if (response.status === 200) {
        setData((prevData) =>
          prevData.map((item) => (item.uniqueId === updatedData.uniqueId ? { ...updatedData, sno: item.sno } : item))
        );
        toast.success("Service Reporting updated successfully");
      } else {
        toast.error("Failed to update Service Reporting");
      }
    } catch (error) {
      console.error("Error updating Service Reporting:", error);
      toast.error("Error updating Service Reporting");
    }
    setEditModalData(null);
  };

  const handleExcelDataUpload = useCallback(
    (excelData) => {
      const updatedData = excelData.map((item, index) => ({
        checkbox: false,
        sno: data.length + index + 1,
        ProblemId: item["Problem ID"] || "",
        InstrumentId: item["Instrument ID"] || "",
        ModuleId: item["Module ID"] || "",
        ProblemInBrief: item["Problem In Brief"] || "",
        ProblemInDetails: item["Problem In Details"] || "",
        ExpectedClosureDate: item["Expected Closure Date On"] || "",
        JobDetails: item["Job Details"] || "",
        status: item["Status"] || "",
      }));
      setData((prevData) => [...prevData, ...updatedData]);
      setIsModalsOpen(false);
    },
    [data]
  );

  const columns = [
    {
      header: <input type="checkbox" onChange={handleSelectAll} />,
      accessor: "checkbox",
      Cell: ({ row }) => (
        <input
          type="checkbox"
          checked={row.original.checkbox}
          onChange={() => handleCheckboxChange(row.index)}
        />
      ),
    },
    { header: "Sr No.", accessor: "sno" },
    { header: "Problem ID", accessor: "ProblemId" },
    { header: "Instrument ID", accessor: "InstrumentId" },
    { header: "Module ID", accessor: "ModuleId" },
    { header: "Problem In Brief", accessor: "ProblemInBrief" },
    { header: "Problem In Details", accessor: "ProblemInDetails" },
    { header: "Expected Closure Date On", accessor: "ExpectedClosureDate" },
    { header: "Job Details", accessor: "JobDetails" },
    { header: "Status", accessor: "status" },
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
    const problemIdMatch = row.ProblemId?.toLowerCase().includes(searchQuery.toLowerCase()) ?? true;
    const statusMatch = statusFilter === "All" || row.status === statusFilter;
    return problemIdMatch && statusMatch;
  });

  const onViewDetails = (rowData) => {
    setViewModalData(rowData);
  };

  const closeViewModal = () => {
    setViewModalData(null);
  };

  const openEditModal = (rowData) => {
    setEditModalData(rowData);
  };

  const closeEditModal = () => {
    setEditModalData(null);
  };

  const ServiceReportingModal = ({ visible, closeModal, onAdd }) => {
    const [serviceReporting, setServiceReporting] = useState({
      ProblemId: "",
      InstrumentId: "",
      ModuleId: "",
      ProblemInBrief: "",
      ProblemInDetails: "",
      ExpectedClosureDate: "",
      JobDetails: "",
    });

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setServiceReporting((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      onAdd({
        ...serviceReporting,
        status: "Active",
      });
    };

    return (
      <CModal alignment="center" visible={visible} onClose={closeModal}>
        <CModalHeader>
          <CModalTitle>Add Service Reporting</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CForm onSubmit={handleSubmit}>
            <CFormInput
              className="mb-3"
              type="text"
              label="Problem ID"
              name="ProblemId"
              value={serviceReporting.ProblemId}
              onChange={handleInputChange}
              required
            />
            <CFormInput
              className="mb-3"
              type="text"
              label="Instrument ID"
              name="InstrumentId"
              value={serviceReporting.InstrumentId}
              onChange={handleInputChange}
              required
            />
            <CFormInput
              className="mb-3"
              type="text"
              label="Module ID"
              name="ModuleId"
              value={serviceReporting.ModuleId}
              onChange={handleInputChange}
              required
            />
            <CFormInput
              className="mb-3"
              type="text"
              label="Problem In Brief"
              name="ProblemInBrief"
              value={serviceReporting.ProblemInBrief}
              onChange={handleInputChange}
              required
            />
            <CFormInput
              className="mb-3"
              type="text"
              label="Problem In Details"
              name="ProblemInDetails"
              value={serviceReporting.ProblemInDetails}
              onChange={handleInputChange}
              required
            />
            <CFormInput
              className="mb-3"
              type="date"
              label="Expected Closure Date"
              name="ExpectedClosureDate"
              value={serviceReporting.ExpectedClosureDate}
              onChange={handleInputChange}
              required
            />
            <CFormInput
              className="mb-3"
              type="text"
              label="Job Details"
              name="JobDetails"
              value={serviceReporting.JobDetails}
              onChange={handleInputChange}
              required
            />
            <CModalFooter>
              <CButton color="secondary" onClick={closeModal}>
                Cancel
              </CButton>
              <CButton color="primary" type="submit">
                Add Service Reporting
              </CButton>
            </CModalFooter>
          </CForm>
        </CModalBody>
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
          <CModalTitle>Edit Service Reporting</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CForm>
            <CFormInput
              className="mb-3"
              type="text"
              label="Problem ID"
              name="ProblemId"
              value={formData?.ProblemId || ""}
              onChange={handleChange}
            />
            <CFormInput
              className="mb-3"
              type="text"
              label="Instrument ID"
              name="InstrumentId"
              value={formData?.InstrumentId || ""}
              onChange={handleChange}
            />
            <CFormInput
              className="mb-3"
              type="text"
              label="Module ID"
              name="ModuleId"
              value={formData?.ModuleId || ""}
              onChange={handleChange}
            />
            <CFormInput
              className="mb-3"
              type="text"
              label="Problem In Brief"
              name="ProblemInBrief"
              value={formData?.ProblemInBrief || ""}
              onChange={handleChange}
            />
            <CFormInput
              className="mb-3"
              type="text"
              label="Problem In Details"
              name="ProblemInDetails"
              value={formData?.ProblemInDetails || ""}
              onChange={handleChange}
            />
            <CFormInput
              className="mb-3"
              type="date"
              label="Expected Closure Date"
              name="ExpectedClosureDate"
              value={formData?.ExpectedClosureDate || ""}
              onChange={handleChange}
            />
            <CFormInput
              className="mb-3"
              type="text"
              label="Job Details"
              name="JobDetails"
              value={formData?.JobDetails || ""}
              onChange={handleChange}
            />
          </CForm>
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
        <h1 className="text-2xl font-bold mb-4">Service Reporting</h1>
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
              title="Service Reporting"
              fileName="ServiceReporting.pdf"
            />
            <ATMButton text="Import" color="pink" onClick={() => setIsModalsOpen(true)} />
            <ATMButton text="Add Service" color="blue" onClick={() => setIsModalOpen(true)} />
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

      {viewModalData && (
        <ReusableModal
          visible={viewModalData !== null}
          closeModal={closeViewModal}
          data={viewModalData}
          fields={columns
            .map((col) => ({ key: col.accessor, label: col.header }))
            .filter((field) => field.key !== "action" && field.key !== "checkbox")}
          title="Service Reporting Details"
          updateStatus={handleStatusUpdate}
        />
      )}

      {isModalOpen && (
        <ServiceReportingModal
          visible={isModalOpen}
          closeModal={() => setIsModalOpen(false)}
          onAdd={addNewServiceReporting}
        />
      )}

      {isModalsOpen && (
        <ImportModal
          initialData={filteredData}
          isOpen={isModalsOpen}
          onClose={() => setIsModalsOpen(false)}
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
};

export default ServiceReporting;